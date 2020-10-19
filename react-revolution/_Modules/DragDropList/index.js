import React, { Component } from 'react';

import loadStyle from '../internalFunctions/loadStyle';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import copyArray from '../internalFunctions/copyArray';

import uuid from '../internalFunctions/uuid';

class DragDropList extends Component {

    constructor(props) {
        super(props);
        this.refNode = React.createRef();
        this.buildDragDropItems = this.buildDragDropItems.bind(this);
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
        this.attachHandleClick = this.attachHandleClick.bind(this);
        this.removeHandleClick = this.removeHandleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.uniqueAreaId = `${uuid()}`;

        this.state = {
            /**
             * App
             */
            dragging: false,
            singleDraggingEntry: undefined,
            overLiIndex: undefined,
            sourceIndex: undefined,
            isDropping: false,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-drag-drop-list',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: (props.data && typeof [] == typeof props.data) ? props.data : [],
            mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
            callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
            callbackProps: props.callbackProps ? props.callbackProps : undefined,
            callbackAllowDrop: (props.callbackAllowDrop && 'function' == typeof props.callbackAllowDrop) ? props.callbackAllowDrop : undefined,
            callbackAllowDropProps: props.callbackAllowDropProps ? props.callbackAllowDropProps : undefined,
            placeholder: props.placeholder ? props.placeholder : undefined,
            areaProps: (props.areaProps && typeof {} == typeof props.areaProps) ? props.areaProps : {},
            dropLoading: props.dropLoading ? props.dropLoading : undefined,
            append: (typeof true == typeof props.append) ? props.append : false,
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'data', 'placeholder', 'areaProps', 'callbackAllowDrop', 'callbackAllowDropProps', 'dropLoading', 'append'], props, state)) {

            if (props.callback && 'function' == props.callback && props.data !== state.data) {
                return {
                    data: props.data
                };
            }

            if (props.callback && 'function' !== props.callback && props.data !== state.data) {
                return {
                    data: state.data
                };
            }

            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-drag-drop-list',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: (props.data && typeof [] == typeof props.data) ? props.data : [],
                callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
                callbackProps: props.callbackProps ? props.callbackProps : undefined,
                placeholder: props.placeholder ? props.placeholder : undefined,
                areaProps: (props.areaProps && typeof {} == typeof props.areaProps) ? props.areaProps : {},
                callbackAllowDrop: (props.callbackAllowDrop && 'function' == typeof props.callbackAllowDrop) ? props.callbackAllowDrop : undefined,
                callbackAllowDropProps: props.callbackAllowDropProps ? props.callbackAllowDropProps : undefined,
                dropLoading: props.dropLoading ? props.dropLoading : undefined,
                append: (typeof true == typeof props.append) ? props.append : false,
            };
        }

        return null;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        this.attachHandleClick();
    }

    componentWillUnmount(){
        this.removeHandleClick();
    }

    attachHandleClick(){
        this.removeHandleClick();
        document.addEventListener('click', this.handleClick);
    }

    removeHandleClick(){
        document.removeEventListener('click', this.handleClick);
    }

    handleClick(event){
        if(this.refNode && this.refNode.current && !this.refNode.current.contains(event.target)){
            this.cancleDragStatus();
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
        this.setState({
            dragging: false,
            singleDraggingEntry: undefined,
            overLiIndex: undefined,
            sourceIndex: undefined,
            isDropping: false
        });
    }

    onDragOver(e, index) {
        e.preventDefault();
        e.stopPropagation();

        const { overLiIndex } = this.state;

        if (overLiIndex !== index) {
            this.setState({
                overLiIndex: index,
            });
        }
    }

    onDragEnter(e, index) {
        e.preventDefault();
        e.stopPropagation();

        const { overLiIndex } = this.state;

        if (overLiIndex !== index) {
            this.setState({
                dragging: true,
                overLiIndex: index,
            });
        }
    }

    onDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    onDragStart(e, index, unique, singleDraggingEntry) {
        e.dataTransfer.setData('text/plain', unique);

        this.setState({
            singleDraggingEntry,
            sourceIndex: index
        });
    }

    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        e.persist();

        if (e.dataTransfer.getData('text')) {
            const { callbackAllowDrop } = this.state;

            if (callbackAllowDrop) {

                this.setState({
                    isDropping: true
                }, async () => {
                    const uniqueKey = e.dataTransfer.getData('text');
                    const allow = await this.callbackAllowDrop(uniqueKey);

                    if (allow) {
                        this.rebuildData(uniqueKey);
                    }
                    else {
                        this.cancleDragStatus();
                    }
                })
            }
            else {
                this.rebuildData(e.dataTransfer.getData('text'));
            }
        }
        else {
            this.cancleDragStatus();
        }
    }

    buildDragDropItems() {
        const { data, dragging, overLiIndex, placeholder, sourceIndex, isDropping, dropLoading, append } = this.state;
        let { areaProps } = this.state;
        areaProps = (areaProps && typeof {} == typeof areaProps) ? areaProps : {};

        const childs = [];

        if (data && data.length) {

            for (let x = 0; x < data.length; x++) {
                const unique = `${this.uniqueAreaId}-drag-drop-entry-${x}`;
                const singleEntry = data[x];
                const props = (singleEntry.props && typeof {} == typeof singleEntry.props) ? singleEntry.props : {};

                if (!append && undefined !== overLiIndex && overLiIndex == x && dragging && sourceIndex !== x) {
                    childs.push(
                        <li
                            key={uuid()}
                            className='single-entry placeholder'
                            onDragStart={(e) => this.onDragStart(e, x, unique, singleEntry)}
                            onDragOver={(e) => this.onDragOver(e, x)}
                            onDragEnter={(e) => this.onDragEnter(e, x)}
                            onDragLeave={(e) => this.onDragLeave(e)}
                            draggable='false'
                        >
                            {
                                placeholder
                            }
                        </li>
                    );
                }

                childs.push(
                    <li
                        key={unique}
                        className={`single-entry`}
                        onDragStart={(e) => this.onDragStart(e, x, unique, singleEntry)}
                        onDragOver={(e) => this.onDragOver(e, x)}
                        onDragEnter={(e) => this.onDragEnter(e, x)}
                        onDragLeave={(e) => this.onDragLeave(e)}
                        draggable='true'
                        {...props}
                    >
                        {
                            singleEntry.text && singleEntry.text
                        }
                    </li>
                );

                if (append && undefined !== overLiIndex && overLiIndex == x && dragging && sourceIndex !== x) {
                    childs.push(
                        <li
                            key={uuid()}
                            className='single-entry placeholder'
                            onDragStart={(e) => this.onDragStart(e, x, unique, singleEntry)}
                            onDragOver={(e) => this.onDragOver(e, x)}
                            onDragEnter={(e) => this.onDragEnter(e, x)}
                            onDragLeave={(e) => this.onDragLeave(e)}
                            draggable='false'
                        >
                            {
                                placeholder
                            }
                        </li>
                    );
                }

            }
        }

        return (
            <ul
                className='box'
                {...areaProps}
                onDrop={(e) => this.handleDrop(e)}
            >
                {
                    childs
                }
                {
                    isDropping && dropLoading &&
                    <div className="drop-loading">
                        {
                            dropLoading
                        }
                    </div>
                }
            </ul>
        );
    }

    rebuildData(uniqueKey) {
        const { data, overLiIndex, sourceIndex, callback, callbackProps, singleDraggingEntry, append } = this.state;

        if (data && data.length) {
            const newData = [];
            let oldData = [];
            oldData = copyArray(JSON.parse(JSON.stringify(data)), oldData);

            const details = {
                sourceIndex,
                targetIndex: overLiIndex,
                item: singleDraggingEntry
            };

            /**
             * New sort
             */
            for (let x = 0; x <= data.length - 1; x++) {
                const unique = `${this.uniqueAreaId}-drag-drop-entry-${x}`;

                if (x == overLiIndex && !append) {
                    newData.push(singleDraggingEntry);
                    details.sourceIndex = x;
                }

                if (unique !== uniqueKey) {
                    newData.push(data[x]);
                }

                if (x == overLiIndex && append) {
                    newData.push(singleDraggingEntry);
                    details.sourceIndex = x;
                }
            }

            this.setState({
                data: newData,
                singleDraggingEntry: '',
                dragging: false,
                sourceIndex: undefined,
                overLiIndex: undefined,
                isDropping: false
            }, () => {
                if (callback) {
                    (callback)(oldData, this.state.data, details, callbackProps);
                }
            });
        }
        else {
            this.cancleDragStatus();
        }
    }

    callbackAllowDrop(uniqueKey) {
        return new Promise(async (resolve) => {

            try {
                const { data, overLiIndex, sourceIndex, singleDraggingEntry, callbackAllowDrop, callbackAllowDropProps } = this.state;

                if (data && data.length) {
                    const newData = [];
                    let oldData = [];
                    oldData = copyArray(JSON.parse(JSON.stringify(data)), oldData);

                    const details = {
                        sourceIndex,
                        targetIndex: overLiIndex,
                        item: singleDraggingEntry
                    };

                    /**
                     * New sort
                     */
                    for (let x = 0; x <= data.length - 1; x++) {
                        const unique = `${this.uniqueAreaId}-drag-drop-entry-${x}`;

                        if (x == overLiIndex) {
                            newData.push(singleDraggingEntry);
                            details.sourceIndex = x;
                        }

                        if (unique !== uniqueKey) {
                            newData.push(data[x]);
                        }
                    }

                    const response = await (callbackAllowDrop)(oldData, newData, details, callbackAllowDropProps).then(a => a).catch(e => false);

                    if (typeof true == typeof response) {
                        resolve(response);
                    }
                    else {
                        resolve(false);
                    }
                }
                else {
                    resolve(false);
                }
            }
            catch (e) {
                resolve(false);
            }
        });
    }

    render() {
        const { addClass, defaultClass, id } = this.state;

        return (
            <div
                className={`${defaultClass} ${addClass}`}
                id={id}
                ref={this.refNode}
            >
                {
                    this.buildDragDropItems()
                }
            </div>
        );
    }
};

export default DragDropList;