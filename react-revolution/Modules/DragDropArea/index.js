import React, { Component } from 'react';

import loadStyle from '../internalFunctions/loadStyle';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import dragDropAreaBuildStructureWithUniqueUuids from '../internalFunctions/dragDropAreaBuildStructureWithUniqueUuids';

class DragDropArea extends Component {

    constructor(props) {
        super(props);
        this.buildDragDropItems = this.buildDragDropItems.bind(this);
        this.resize = this.resize.bind(this);
        this.rebuildData = this.rebuildData.bind(this);

        /**
         * Drag Drop
         */
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.cancleDragStatus = this.cancleDragStatus.bind(this);

        this.state = {
            /**
             * App
             */
            isMinified: false,
            dragging: false,
            currentDraggingHover: '',
            currentDraggingParentElement: '',
            singleDraggingEntry: undefined,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-drag-drop-area',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: (props.data && typeof {} == typeof props.data) ? dragDropAreaBuildStructureWithUniqueUuids(props.data) : {},
            itemsPerLine: (props.itemsPerLine && typeof 8 == typeof props.itemsPerLine) ? props.itemsPerLine : 2,
            mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
            callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
            callbackProps: props.callbackProps ? props.callbackProps : undefined,
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'data', 'itemsPerLine'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-drag-drop-area',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof {} == typeof props.data ? dragDropAreaBuildStructureWithUniqueUuids(props.data) : {},
                itemsPerLine: (props.itemsPerLine && typeof 8 == typeof props.itemsPerLine) ? props.itemsPerLine : 2,
                callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
                callbackProps: props.callbackProps ? props.callbackProps : undefined,
            };
        }

        return null;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        this.dragCounter = 0;
        const { mediaBreak } = this.state;

        if (mediaBreak) {
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }

    resize() {
        const { mediaBreak, isMinified } = this.state;

        /**
         * Media break
         */
        if (document.documentElement.getBoundingClientRect().width <= mediaBreak) {
            if (!isMinified) {
                this.setState({
                    isMinified: true
                }, this.buildData);
            }
        }
        /**
         * Default
         */
        else {
            if (isMinified) {
                this.setState({
                    isMinified: false
                }, this.buildData);
            }
        }
    }

    checkObjectProps(object) {
        let props = {};

        try {
            Object.keys(object);
            props = object;
        }
        catch (e) {
            props = {};
        }

        return props;
    }

    cancleDragStatus() {
        this.dragCounter = 0;
        this.setState({
            dragging: false,
            currentDraggingHover: '',
            currentDraggingParentElement: '',
            singleDraggingEntry: undefined
        });
    }

    onDragOver(e, targetsKey) {
        const { currentDraggingHover } = this.state;
        e.preventDefault();
        e.stopPropagation();

        if (currentDraggingHover !== targetsKey) {
            this.setState({
                currentDraggingHover: targetsKey
            });
        }
    }

    onDragEnter(e, targetsKey) {
        const { currentDraggingHover } = this.state;
        e.preventDefault();
        e.stopPropagation();

        this.dragCounter++;

        if (!this.state.dragging) {
            this.setState({
                dragging: true,
                currentDraggingHover: (currentDraggingHover !== targetsKey) ? targetsKey : currentDraggingHover
            });
        }
    }

    onDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();

        this.dragCounter--;

        if (0 >= this.dragCounter) {
            this.setState({
                dragging: false,
                currentDraggingHover: ''
            });
        }
    }

    handleDrop(e, targetsKey, allowDrop) {
        e.persist();
        e.preventDefault();
        e.stopPropagation();

        if (!allowDrop) {
            return this.cancleDragStatus();
        }

        if (e.dataTransfer.getData('text')) {
            this.rebuildData(targetsKey, e.dataTransfer.getData('text'));
            this.dragCounter = 0;
        }

        this.setState({
            dragging: false
        });
    }

    onDragStart(e, unique, parentSourceKey, allowDrag, singleDraggingEntry) {

        if (!allowDrag) {
            return this.cancleDragStatus();
        }

        const { currentDraggingParentElement } = this.state;
        e.dataTransfer.setData('text/plain', unique);

        if (currentDraggingParentElement !== parentSourceKey) {
            this.setState({
                currentDraggingParentElement: parentSourceKey,
                singleDraggingEntry
            });
        }
    }

    buildDragDropItems() {
        const { data, itemsPerLine, isMinified, dragging, currentDraggingHover } = this.state;
        let objectKeys = [];
        const areas = [];
        let singleLineAreas = [];

        try {
            objectKeys = Object.keys(data);
        }
        catch (e) {
            objectKeys = [];
        }

        if (objectKeys && objectKeys.length) {

            for (let x = 0; x < objectKeys.length; x++) {
                const areasHTML = [];

                const area = data[objectKeys[x]];
                const areaName = objectKeys[x];
                const name = data[objectKeys[x]].name ? data[objectKeys[x]].name : undefined;
                const targetsKey = data[objectKeys[x]].targetsKey;
                const areaData = (data[objectKeys[x]] && data[objectKeys[x]].data && typeof [] == typeof data[objectKeys[x]].data) ? data[objectKeys[x]].data : [];
                const areaProps = (data[objectKeys[x]] && data[objectKeys[x]].areaProps && typeof {} == typeof data[objectKeys[x]].areaProps) ? this.checkObjectProps(data[objectKeys[x]].areaProps) : {};
                const titleProps = (data[objectKeys[x]] && data[objectKeys[x]].titleProps && typeof {} == typeof data[objectKeys[x]].titleProps) ? this.checkObjectProps(data[objectKeys[x]].titleProps) : {};
                const allowDrop = (typeof true == typeof data[objectKeys[x]].allowDrop) ? data[objectKeys[x]].allowDrop : true;
                const allowDrag = (typeof true == typeof data[objectKeys[x]].allowDrag) ? data[objectKeys[x]].allowDrag : true;

                if (area) {

                    if (areaData && areaData.length) {

                        try {
                            areaData.map( (singleEntry, index) => {

                                if (singleEntry && singleEntry.text) {
                                    const unique = singleEntry.uuid;

                                    areasHTML.push(
                                        <div
                                            key={unique}
                                            className='area-single-item'
                                            onDragStart={(e) => this.onDragStart(e, unique, targetsKey, allowDrag, singleEntry)}
                                            draggable={allowDrag ? 'true' : 'false'}
                                            data-position={index}
                                        >
                                            {
                                                singleEntry.text
                                            }
                                        </div>
                                    );
                                }

                            });
                        }
                        catch (e) {

                        }
                    }

                    singleLineAreas.push(
                        <div
                            key={targetsKey}
                            className='area-box'
                            {...areaProps}
                            onDragEnter={(e) => this.onDragEnter(e, targetsKey)}
                            onDragLeave={(e) => this.onDragLeave(e)}
                            onDragOver={(e) => this.onDragOver(e, targetsKey)}
                            onDrop={(e) => this.handleDrop(e, targetsKey, allowDrop)}
                        >
                            {
                                dragging && currentDraggingHover == targetsKey && allowDrop &&
                                <div className="dragging-target"></div>
                            }
                            {
                                dragging && currentDraggingHover == targetsKey && !allowDrop &&
                                <div className="dragging-disabled"></div>
                            }
                            <div
                                className='area-title'
                                {...titleProps}
                            >
                                {
                                    name && name
                                }
                                {
                                    !name && areaName
                                }
                            </div>
                            <div className='area-data'>
                                {
                                    areasHTML && 0 !== areasHTML.length && areasHTML
                                }
                            </div>
                        </div>
                    );
                }

                if ((0 !== x && 0 == (x % itemsPerLine) && singleLineAreas.length) || (singleLineAreas && x == objectKeys.length - 1)) {
                    areas.push(
                        <div
                            key={`area-${x}-${areaName}`}
                            className={`area flex ${isMinified ? 'flex-column' : ''}`}
                        >
                            {
                                singleLineAreas
                            }
                        </div>
                    );

                    singleLineAreas = [];
                }
            }

        }

        return areas;
    }

    rebuildData(droppedParentKey, itemKey) {
        const { data, singleDraggingEntry, currentDraggingParentElement, callback, callbackProps } = this.state;
        let oldData = data;
        let objectKeys = [];

        const details = {
            source: undefined,
            target: undefined,
            item: undefined
        };

        try {
            objectKeys = Object.keys(data);
        }
        catch (e) {
            objectKeys = [];
        }

        let targetParentKey = '';

        if (objectKeys && objectKeys.length) {

            /**
             * New sort
             */
            if (droppedParentKey == currentDraggingParentElement) {
                return null;
            }

            /**
             * Remove from source object
             */
            for (let x = 0; x < objectKeys.length; x++) {
                targetParentKey = data[objectKeys[x]].targetsKey;

                if (targetParentKey == currentDraggingParentElement) {
                    const newOrderedData = [];

                    for (let i = 0; i <= data[objectKeys[x]].data.length - 1; i++) {

                        if (data[objectKeys[x]].data[i].uuid !== itemKey) {
                            newOrderedData.push(data[objectKeys[x]].data[i]);
                        }
                    }

                    data[objectKeys[x]].data = newOrderedData;

                    /**
                     * User callback details data
                     */
                    details.source = objectKeys[x];
                }
            }

            /**
             * Append data
             */
            if (droppedParentKey !== currentDraggingParentElement && singleDraggingEntry) {

                for (let x = 0; x < objectKeys.length; x++) {
                    targetParentKey = data[objectKeys[x]].targetsKey;

                    if (targetParentKey == droppedParentKey) {

                        if (undefined == data[objectKeys[x]].data) {
                            data[objectKeys[x]].data = [singleDraggingEntry];
                        }
                        else {
                            data[objectKeys[x]].data.push(singleDraggingEntry);
                        }

                        /**
                         * User callback details data
                         */
                        details.target = objectKeys[x];
                        details.item = this.removeKeyFromObject(singleDraggingEntry, 'uuid');

                        break;
                    }
                }
            }
        }

        this.setState({
            data,
            currentDraggingParentElement: '',
            singleDraggingEntry: ''
        }, () => {
            if (callback) {
                (callback)(this.removeInternalData(oldData), this.removeInternalData(data), details, callbackProps);
            }
        });
    }

    removeKeyFromObject(object, keyToRemove){
        const newObject = {};

        if(typeof {} == typeof object){
            const keys = Object.keys(object);

            try{
                if(keys && keys.length){
            
                    keys.map( k => {
                    
                        if(k !== keyToRemove){
                            newObject[k] = object[k];
                        }
                    });
                }
            }
            catch(e){
                newObject = object;
            }
        }

        return newObject;
    }

    removeInternalData(data) {
        const newObject = {};
        const keys = Object.keys(data);

        if (keys && keys.length) {

            for (let i = 0; i <= keys.length - 1; i++) {
                const key = keys[i];

                newObject[key] = {};

                if (data[key]) {
                    /**
                     * Remove 'targetsKey' key from the parent object (area unique key)
                     */
                    if(data[key].targetsKey){
                        newObject[key] = this.removeKeyFromObject(data[key], 'targetsKey');
                    }

                    /**
                     * Remove 'uuid' key from the parent childs data array (single drag-drop elements unique key)
                     */
                    if (data[key].data && typeof [] == typeof data[key].data && data[key].data.length) {
                        newObject[key].data = [];

                        for (let x = 0; x <= data[key].data.length - 1; x++) {
                            newObject[key].data[x] = this.removeKeyFromObject(data[key].data[x], 'uuid');
                        }
                    }
                }
            }
        }

        return newObject;
    }

    render() {
        const { addClass, defaultClass, id } = this.state;

        return (
            <div
                className={`${defaultClass} ${addClass}`}
                id={id}
            >
                {
                    this.buildDragDropItems()
                }
            </div>
        );
    }
};

export default DragDropArea;