import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';
import internalUuid from '../internalFunctions/internalUuid';
import loadStyle from '../internalFunctions/loadStyle';

class StepsGeneratorDragDrop extends React.Component {
    constructor(props) {
        super(props);
        // Drag & Drop
        this.refNode = React.createRef();
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.cancleDragStatus = this.cancleDragStatus.bind(this);
        this.attachHandleClick = this.attachHandleClick.bind(this);
        this.removeHandleClick = this.removeHandleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.attachHandleMouseMove = this.attachHandleMouseMove.bind(this);
        this.removeHandleClick = this.removeHandleClick.bind(this);
        this.setMouseMove = this.setMouseMove.bind(this);
        this.uniqueAreaId = `${internalUuid()}`;
        this.mouseMove = undefined;
        this.oldY = 0;
        
        this.state = {
            // App
            current: {},
            // Drag & Drop
            dragging: false,
            overLiIndex: undefined,
            sourceIndex: undefined,
            isDropping: false,
            allowedPositions: ['top', 'bottom', 'auto'],
            // User
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-steps-generator-drag-drop',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            callback: props.callback && typeof function () { } == typeof props.callback ? props.callback : undefined,
            callbackProps: props.callbackProps ? props.callbackProps : undefined,
            defaultSteps: props.defaultSteps && typeof 8 == typeof props.defaultSteps ? props.defaultSteps : 3,
            addNewStepOn: props.addNewStepOn && typeof 8 == typeof props.addNewStepOn ? props.addNewStepOn : 0,
            addStep: props.addStep ? props.addStep : '',
            removeStep: props.removeStep ? props.removeStep : '',
            stepPrefix: props.stepPrefix ? props.stepPrefix : 'Step',
            displayStepCount: (typeof true == typeof props.displayStepCount) ? props.displayStepCount : false,
            useInput: (typeof true == typeof props.useInput) ? props.useInput : false,
            onEnter: props.onEnter && typeof function () { } == typeof props.onEnter ? props.onEnter : undefined,
            onEnterProps: props.onEnterProps ? props.onEnterProps : undefined,
            onEsc: props.onEsc && typeof function () { } == typeof props.onEsc ? props.onEsc : undefined,
            onEscProps: props.onEscProps ? props.onEscProps : undefined,
            removeStepAlignTop: (typeof true == typeof props.removeStepAlignTop) ? props.removeStepAlignTop : true,
            submit: props.submit ? props.submit : '',
            submitCallback: props.submitCallback && typeof function () { } == typeof props.submitCallback ? props.submitCallback : undefined,
            submitCallbackProps: props.submitCallbackProps ? props.submitCallbackProps : undefined,
            resetOnSubmit: (typeof true == typeof props.resetOnSubmit) ? props.resetOnSubmit : false,
            placeholder: props.placeholder ? props.placeholder : undefined,
            placeholderPosition: (typeof '8' == typeof props.placeholderPosition) ? props.placeholderPosition : 'auto',
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props
     * @param {object} state
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'placeholder', 'placeholderPosition', 'submit', 'resetOnSubmit', 'submitCallback', 'submitCallbackProps', 'useInput', 'removeStepAlignTop', 'stepPrefix', 'displayStepCount', 'addStep', 'removeStep', 'addNewStepOn', 'callback', 'callbackProps', 'defaultSteps'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-steps-generator-drag-drop',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                callback: props.callback && typeof function () { } == typeof props.callback ? props.callback : undefined,
                callbackProps: props.callbackProps ? props.callbackProps : undefined,
                defaultSteps: props.defaultSteps && typeof 8 == typeof props.defaultSteps ? props.defaultSteps : 3,
                addNewStepOn: props.addNewStepOn && typeof 8 == typeof props.addNewStepOn ? props.addNewStepOn : 0,
                addStep: props.addStep ? props.addStep : '',
                removeStep: props.removeStep ? props.removeStep : '',
                stepPrefix: props.stepPrefix ? props.stepPrefix : 'Step',
                displayStepCount: (typeof true == typeof props.displayStepCount) ? props.displayStepCount : false,
                useInput: (typeof true == typeof props.useInput) ? props.useInput : false,
                removeStepAlignTop: (typeof true == typeof props.removeStepAlignTop) ? props.removeStepAlignTop : true,
                submit: props.submit ? props.submit : '',
                submitCallback: props.submitCallback && typeof function () { } == typeof props.submitCallback ? props.submitCallback : undefined,
                submitCallbackProps: props.submitCallbackProps ? props.submitCallbackProps : undefined,
                resetOnSubmit: (typeof true == typeof props.resetOnSubmit) ? props.resetOnSubmit : false,
                placeholder: props.placeholder ? props.placeholder : undefined,
                placeholderPosition: (typeof '8' == typeof props.placeholderPosition) ? props.placeholderPosition : 'auto',
            };
        }

        return null;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        this.generateDefaultSteps();

        this.attachHandleClick();

        const { placeholderPosition } = this.state;

        if ('auto' == placeholderPosition) {
            this.attachHandleMouseMove();
        }
    }

    attachHandleClick() {
        this.removeHandleClick();
        document.addEventListener('click', this.handleClick);
    }

    removeHandleClick() {
        document.removeEventListener('click', this.handleClick);
    }

    attachHandleMouseMove() {
        this.removeHandleMouseMove();
        document.addEventListener('mousemove', this.setMouseMove);
    }

    removeHandleMouseMove() {
        document.removeEventListener('mousemove', this.setMouseMove);
    }

    setMouseMove(event) {

        if (event.pageY < this.oldY) {
            this.mouseMove = 'top';
        }
        
        if (event.pageY > this.oldY) {
            this.mouseMove = 'bottom';
        }

        this.oldY = event.pageY;
    }

    cancleDragStatus() {
        this.setState({
            dragging: false,
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

    onDragStart(e, index, unique) {
        e.dataTransfer.setData('text/plain', unique);

        this.setState({
            sourceIndex: index
        });
    }

    handleClick(event) {
        if (this.refNode && this.refNode.current && !this.refNode.current.contains(event.target)) {
            this.cancleDragStatus();
        }
    }

    rebuildData(uuid){
        const { current, placeholderPosition, overLiIndex } = this.state;
        const temp = [];
        const newData = {};
        const currentKeys = Object.keys(current);
        let saveData = undefined;

        for (let x = 0; x <= currentKeys.length - 1; x++) {
            if(currentKeys[x] === uuid){
                saveData = current[currentKeys[x]];
            }
        }

        for (let x = 0; x <= currentKeys.length - 1; x++) {

            if ((x == overLiIndex && 'top' == placeholderPosition) || ('auto' == placeholderPosition && x == overLiIndex && 'top' == this.mouseMove)) {
                temp.push(
                    {
                        key: uuid,
                        data: saveData
                    }
                );
            }

            if (currentKeys[x] !== uuid) {
                temp.push(
                    {
                        key: currentKeys[x],
                        data: current[currentKeys[x]]
                    }
                );
            }

            if ((x == overLiIndex && 'bottom' == placeholderPosition) || ('auto' == placeholderPosition && x == overLiIndex && 'bottom' == this.mouseMove)) {
                temp.push(
                    {
                        key: uuid,
                        data: saveData
                    }
                );
            }
        }

        for(let x = 0; x <= temp.length-1; x++){
            newData[temp[x].key] = temp[x].data;
        }

        this.setState({
            current: newData,
            dragging: false,
            sourceIndex: undefined,
            overLiIndex: undefined,
            isDropping: false
        });
    }

    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        e.persist();

        if (e.dataTransfer.getData('text')) {
            return this.rebuildData(e.dataTransfer.getData('text'));
        }

        this.cancleDragStatus();
    }
    
    getNewData() {
        return {
            ref: React.createRef(),
            value: '',
        };
    }

    generateDefaultSteps(reset = false) {
        let { current, defaultSteps } = this.state;

        if(reset){
            current = {};
        }

        for (let x = 0; x <= defaultSteps - 1; x++) {
            const i = `${internalUuid()}`;

            if (undefined === current[i]) {
                current[`${internalUuid()}`] = this.getNewData();
            }
        }

        this.setState({ current });
    }

    addStep(ref = null) {
        const { current } = this.state;
        const i = `${internalUuid()}`;

        if (undefined !== current[i]) {
            return this.addStep(ref);
        }

        current[i] = this.getNewData();

        this.setState({
            current
        }, () => {
            if (ref && ref.current) {
                ref.current.focus();
            }
        });
    }

    removeStep(uuid) {
        const { current } = this.state;
        const newObject = {};
        const currentKeys = Object.keys(current);

        for (let x = 0; x <= currentKeys.length - 1; x++) {
            if (currentKeys[x] !== uuid) {
                newObject[currentKeys[x]] = current[currentKeys[x]];
            }
        }

        this.setState({
            current: newObject
        }, () => {
            this.callback();
        });
    }

    getUserCallbackData(){
        const { current } = this.state;
        const userCallbackData = [];
        const currentKeys = Object.keys(current);

        for (let x = 0; x <= currentKeys.length - 1; x++) {
            const { value } = current[currentKeys[x]];

            userCallbackData.push(
                {
                    value
                }
            );
        }

        return userCallbackData;
    }

    callback() {
        const { callback, callbackProps } = this.state;

        if (callback) {
            const userCallbackData= this.getUserCallbackData();
            (callback)(callbackProps, userCallbackData);
        }
    }

    handleChange(e, uuid, ref, x) {
        const { current } = this.state;
        current[uuid].value = e.target.value;

        this.setState({
            current
        }, () => {

            if (ref && ref.current) {
                ref.current.focus();
            }

            if (this.state.current[uuid].value) {
                this.handleFocus(x, ref);
            }

            this.callback();
        });
    }

    handleFocus(x, ref) {
        const { current, addNewStepOn } = this.state;
        const currentKeys = Object.keys(current);

        if (0 !== addNewStepOn && x >= currentKeys.length - addNewStepOn) {
            this.addStep(ref);
        }
    }

    handleKeyDown(event) {
        const { onEsc, onEscProps, onEnter, onEnterProps } = this.state;

        if (onEsc && (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27 || event.which === 27)) {
            return (onEsc)(onEscProps);
        }

        if (onEnter && (event.key === 'Enter' || event.keyCode === 13 || event.which === 13)) {
            return (onEnter)(onEnterProps);
        }
    }

    getCurrentData() {
        const { current, removeStep, stepPrefix, placeholder, overLiIndex, sourceIndex, dragging, displayStepCount, removeStepAlignTop, defaultSteps, useInput, onEnter, onEsc } = this.state;
        const jsx = [];
        const currentKeys = Object.keys(current);

        let { placeholderPosition } = this.state;

        if (!this.state.allowedPositions.includes(placeholderPosition)) {
            placeholderPosition = 'auto';
        }

        for (let x = 0; x <= currentKeys.length - 1; x++) {
            const { ref, value } = current[currentKeys[x]];

            const removeJsx = (
                <span
                    className='action action-remove'
                    onClick={() => this.removeStep(currentKeys[x])}
                >
                    {
                        removeStep
                    }
                </span>
            );

            let placeholderJsx = undefined;
            let attachMixedTop = false;
            let attachMixedBottom = false;

            if ('top' == this.mouseMove && 'auto' == placeholderPosition && overLiIndex == x && sourceIndex !== x) {
                attachMixedTop = true;
                placeholderPosition = 'top';
            }

            if ('bottom' == this.mouseMove && 'auto' == placeholderPosition && overLiIndex == x && sourceIndex !== x) {
                attachMixedTop = true;
                placeholderPosition = 'bottom';
            }

            if ((undefined !== overLiIndex && overLiIndex == x && dragging && sourceIndex !== x) || (attachMixedTop || attachMixedBottom)) {
                placeholderJsx = (
                    <li
                        key={internalUuid()}
                        className='single-step placeholder'
                        {...(1 !== currentKeys.length) && {onDragStart: (e) => this.onDragStart(e, x, currentKeys[x])}}
                        {...(1 !== currentKeys.length) && {onDragOver: (e) => this.onDragOver(e, x)}}
                        {...(1 !== currentKeys.length) && {onDragEnter: (e) => this.onDragEnter(e, x)}}
                        {...(1 !== currentKeys.length) && {onDragLeave: (e) => this.onDragLeave(e)}}
                        {...(1 !== currentKeys.length) && {draggable: 'false'}}
                    >
                        {
                            placeholder
                        }
                    </li>
                );
            }

            if ('top' == placeholderPosition && placeholderJsx) {
                jsx.push(placeholderJsx);
            }

            jsx.push(
                <li
                    key={currentKeys[x]}
                    className='single-step single-step-li'
                    {...(1 !== currentKeys.length) && {onDragStart: (e) => this.onDragStart(e, x, currentKeys[x])}}
                    {...(1 !== currentKeys.length) && {onDragOver: (e) => this.onDragOver(e, x)}}
                    {...(1 !== currentKeys.length) && {onDragEnter: (e) => this.onDragEnter(e, x)}}
                    {...(1 !== currentKeys.length) && {onDragLeave: (e) => this.onDragLeave(e)}}
                    {...(1 !== currentKeys.length) && {draggable: 'true'}}
                >
                    {
                        stepPrefix &&
                        <div className='step-prefix'>
                            {
                                <span className='prefix'>
                                    {
                                        stepPrefix
                                    }
                                </span>
                            }
                            {
                                displayStepCount &&
                                <span className='step-count'>
                                    {
                                        x + 1
                                    }
                                </span>
                            }
                            {
                                removeStepAlignTop && x >= defaultSteps && removeStep && removeJsx
                            }
                        </div>
                    }
                    {
                        !stepPrefix && removeStepAlignTop && x >= defaultSteps && removeStep && removeJsx
                    }
                    <span className='input-area'>
                        {
                            useInput &&
                            <input
                                type='text'
                                ref={ref}
                                value={value}
                                onChange={(e) => this.handleChange(e, currentKeys[x], ref, x)}
                                {...(onEnter || onEsc) && { onKeyDown: (e) => this.handleKeyDown(e) }}
                            />
                        }
                        {
                            !useInput &&
                            <textarea
                                ref={ref}
                                value={value}
                                onChange={(e) => this.handleChange(e, currentKeys[x], ref, x)}
                                {...(onEnter || onEsc) && { onKeyDown: (e) => this.handleKeyDown(e) }}
                            />
                        }
                    </span>
                    {
                        !removeStepAlignTop && x >= defaultSteps && removeStep && removeJsx
                    }
                </li>
            );

            if ('bottom' == placeholderPosition && placeholderJsx) {
                jsx.push(placeholderJsx);
            }
        }

        return jsx;
    }

    submitSteps(){
        const { submitCallback, submitCallbackProps, resetOnSubmit } = this.state;

        if(submitCallback){
            const userCallbackData= this.getUserCallbackData();
            (submitCallback)(submitCallbackProps, userCallbackData);

            if(resetOnSubmit){
                this.generateDefaultSteps(true);
            }
        }
    }

    render() {
        const { defaultClass, addClass, id, addStep, submit } = this.state;

        return (
            <div 
                ref={this.refNode}
                className={`${defaultClass} ${addClass}`} 
                id={id}
                onDrop={(e) => this.handleDrop(e)}
            >
                <ul className='steps steps-ul handle-drop' >
                {
                    this.getCurrentData()
                }
                </ul>
                {
                    addStep &&
                    <span
                        className='action action-add'
                        onClick={() => this.addStep()}
                    >
                        {
                            addStep
                        }
                    </span>
                }
                {
                    submit && 
                    <span
                        className='action action-submit'
                        onClick={() => this.submitSteps()}
                    >
                        {
                            submit
                        }
                    </span>
                }
            </div>
        );
    }
}

export default StepsGeneratorDragDrop;
