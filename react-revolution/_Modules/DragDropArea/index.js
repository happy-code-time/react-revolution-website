import React, { Component } from 'react';

import loadStyle from '../internalFunctions/loadStyle';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import copyFunctions from '../internalFunctions/copyFunctions';
import uuid from '../internalFunctions/uuid';

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
            isDropCheck: false,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-drag-drop-area',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: (props.data && typeof {} == typeof props.data) ? props.data : {},
            itemsPerLine: (props.itemsPerLine && typeof 8 == typeof props.itemsPerLine) ? props.itemsPerLine : 2,
            mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
            callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
            callbackProps: props.callbackProps ? props.callbackProps : undefined,
            callbackAllowDrop: (props.callbackAllowDrop && 'function' == typeof props.callbackAllowDrop) ? props.callbackAllowDrop : undefined,
            callbackAllowDropProps: props.callbackAllowDropProps ? props.callbackAllowDropProps : undefined,
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'data', 'itemsPerLine', 'callbackAllowDrop', 'callbackAllowDropProps'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-drag-drop-area',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof {} == typeof props.data ? props.data : {},
                itemsPerLine: (props.itemsPerLine && typeof 8 == typeof props.itemsPerLine) ? props.itemsPerLine : 2,
                callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
                callbackProps: props.callbackProps ? props.callbackProps : undefined,
                callbackAllowDrop: (props.callbackAllowDrop && 'function' == typeof props.callbackAllowDrop) ? props.callbackAllowDrop : undefined,
                callbackAllowDropProps: props.callbackAllowDropProps ? props.callbackAllowDropProps : undefined,
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
            singleDraggingEntry: undefined,
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

        this.setState({
            dragging: true,
            currentDraggingHover: (currentDraggingHover !== targetsKey) ? targetsKey : currentDraggingHover
        });
    }

    onDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();

        this.dragCounter--;

        if (0 >= this.dragCounter) {
            this.setState({
                dragging: false,
                currentDraggingHover: undefined,
            });
        }
    }

    async handleDrop(e, targetsKey, allowDrop, allowDropLoading) {
        console.log("handle drop");

        e.preventDefault();
        e.stopPropagation();
        e.persist();

        if (!allowDrop) {
            return this.cancleDragStatus();
        }

        if (e.dataTransfer.getData('text')) {
            const { callbackAllowDrop } = this.state;

            if(callbackAllowDrop){
                const self = this;
                const dataForUser = self.checkBeforeBuild(targetsKey, e.dataTransfer.getData('text'));

                if(dataForUser){
                    const { callbackAllowDrop, callbackAllowDropProps } = this.state;
                    const { oldData, mainData, details, key, trasnferredData } = dataForUser;

                    if(allowDropLoading){
                        this.setState({
                            isDropCheck: true,
                        });
                    };

                    const allowed = await (callbackAllowDrop)(oldData, mainData, details, callbackAllowDropProps);
    
                    if(allowed){
                        self.rebuildData(key, trasnferredData);
                        self.dragCounter = 0;

                        if(allowDropLoading){
                            this.setState({
                                isDropCheck: false,
                            });
                        };
                    }
                    else{
                        this.setState({
                            dragging: false,
                            isDropCheck: false,
                        });
                    }
                }
                else{
                    this.setState({
                        dragging: false,
                        isDropCheck: false,
                    });
                }
            }
            else{
                this.rebuildData(targetsKey, e.dataTransfer.getData('text'));
                this.dragCounter = 0;
            }
        }
        else{
            this.setState({
                dragging: false,
                isDropCheck: false,
            });
        }
    }

    onDragStart(e, unique, parentSourceKey, allowDrag, singleDraggingEntry, index) {
        if (!allowDrag) {
            return this.cancleDragStatus();
        }

        e.dataTransfer.setData('text/plain', unique);

        this.setState({
            currentDraggingParentElement: parentSourceKey,
            singleDraggingEntry,
        });
    }

    buildDragDropItems() {
        const { data, itemsPerLine, isMinified, dragging, currentDraggingHover, isDropCheck } = this.state;
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
                const targetsKey =  `drag-drop-parent-${x}`;
                const areaData = (data[objectKeys[x]] && data[objectKeys[x]].data && typeof [] == typeof data[objectKeys[x]].data) ? data[objectKeys[x]].data : [];
                const areaProps = (data[objectKeys[x]] && data[objectKeys[x]].areaProps && typeof {} == typeof data[objectKeys[x]].areaProps) ? this.checkObjectProps(data[objectKeys[x]].areaProps) : {};
                const titleProps = (data[objectKeys[x]] && data[objectKeys[x]].titleProps && typeof {} == typeof data[objectKeys[x]].titleProps) ? this.checkObjectProps(data[objectKeys[x]].titleProps) : {};
                const allowDrop = (typeof true == typeof data[objectKeys[x]].allowDrop) ? data[objectKeys[x]].allowDrop : true;
                const allowDrag = (typeof true == typeof data[objectKeys[x]].allowDrag) ? data[objectKeys[x]].allowDrag : true;
                const allowDropLoading = data[objectKeys[x]].allowDropLoading ? data[objectKeys[x]].allowDropLoading : undefined;

                if (area) {

                    if (areaData && areaData.length) {

                        try {
                            areaData.map( (singleEntry, index) => {

                                if (singleEntry && singleEntry.text) {
                                    const unique = `drag-drop-entry-${x}-${index}`;

                                    areasHTML.push(
                                        <li
                                            key={unique}
                                            className={`area-single-item`}
                                            onDragStart={(e) => this.onDragStart(e, unique, targetsKey, allowDrag, singleEntry, index)}
                                            draggable={allowDrag ? 'true' : 'false'}
                                        >
                                            {
                                                singleEntry.text
                                            }
                                        </li>
                                    );

                                }

                            });
                        }
                        catch (e) {

                        }
                    }

                    singleLineAreas.push(
                        <ul
                            key={targetsKey}
                            className='area-box'
                            {...areaProps}
                            onDragEnter={(e) => this.onDragEnter(e, targetsKey)}
                            onDragLeave={(e) => this.onDragLeave(e)}
                            onDragOver={(e) => this.onDragOver(e, targetsKey)}
                            onDrop={(e) => this.handleDrop(e, targetsKey, allowDrop, allowDropLoading)}
                        >
                            {
                                dragging && currentDraggingHover == targetsKey && allowDrop &&
                                <div className="dragging-target"></div>
                            }
                            {
                                isDropCheck && currentDraggingHover == targetsKey && allowDropLoading &&
                                <div className="dragging-loading">
                                    {
                                        allowDropLoading
                                    }
                                </div>
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
                        </ul>
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

    checkBeforeBuild(droppedParentKey, itemKey){
        const { data, singleDraggingEntry, currentDraggingParentElement } = this.state;
        let oldData = {};
        oldData = copyFunctions(JSON.parse(JSON.stringify(data)), oldData);
        let mainData = {};
        mainData = copyFunctions(JSON.parse(JSON.stringify(oldData)), mainData);

        const details = {
            source: undefined,
            target: undefined,
            item: undefined
        };

        let objectKeys = [];

        try {
            objectKeys = Object.keys(mainData);
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
                targetParentKey = `drag-drop-parent-${x}`;

                if (targetParentKey == currentDraggingParentElement) {
                    const newOrderedData = [];

                    for (let i = 0; i <= mainData[objectKeys[x]].data.length - 1; i++) {
                        const uuid = `drag-drop-entry-${x}-${i}`

                        if (uuid !== itemKey) {
                            newOrderedData.push(mainData[objectKeys[x]].data[i]);
                        }
                    }

                    mainData[objectKeys[x]].data = newOrderedData;

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
                    targetParentKey = `drag-drop-parent-${x}`;

                    if (targetParentKey == droppedParentKey) {

                        if (undefined == mainData[objectKeys[x]].data) {
                            mainData[objectKeys[x]].data = [singleDraggingEntry];
                        }
                        else {
                            mainData[objectKeys[x]].data.push(singleDraggingEntry);
                        }

                        /**
                         * User callback details data
                         */
                        details.target = objectKeys[x];
                        details.item = singleDraggingEntry;

                        break;
                    }
                }
            }
            return { 
                oldData, 
                mainData, 
                details,
                trasnferredData: itemKey,
                key: droppedParentKey
            };
        }

        return null;
    }

    rebuildData(droppedParentKey, itemKey) {
        const { data, singleDraggingEntry, currentDraggingParentElement, callback, callbackProps } = this.state;
        let objectKeys = [];
        let oldData = {};
        oldData = copyFunctions(data, oldData);

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
                targetParentKey = `drag-drop-parent-${x}`;

                if (targetParentKey == currentDraggingParentElement) {
                    const newOrderedData = [];

                    for (let i = 0; i <= data[objectKeys[x]].data.length - 1; i++) {
                        const uuid = `drag-drop-entry-${x}-${i}`

                        if (uuid !== itemKey) {
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
                    targetParentKey = `drag-drop-parent-${x}`;

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
                        details.item = singleDraggingEntry;

                        break;
                    }
                }
            }

            this.setState({
                data,
                currentDraggingParentElement: '',
                singleDraggingEntry: '',
                dragging: false
            }, () => {
                if (callback) {
                    (callback)(oldData, this.state.data, details, callbackProps);
                }
            });
        }
        else{
            this.cancleDragStatus();
        }
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