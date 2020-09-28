import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import loadStyle from '../internalFunctions/loadStyle';

class Clipboard extends React.Component 
{
    
    constructor(props) {
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.copyToClipboardAction = this.copyToClipboardAction.bind(this);

        this.state = {
            /**
             * App
             */
            formStyle: {
                display: 'none !important',
                opacity: 0,
                width: 0,
                height: 0,
                overflow: 'hidden'
            },
            uuid: `${uuid()}`,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-clipboard',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            callback: props.callback && 'function' == typeof props.callback ? props.callback : undefined,
            data: props.data && typeof [] == typeof props.data ? props.data : [],
            clipboard: props.clipboard,
            animation: props.animation && typeof '8' == typeof props.animation ? props.animation : undefined,
        };
    }

    componentDidMount(){
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'callback', 'data', 'clipboard'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-clipboard',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                callback: props.callback && 'function' == typeof props.callback ? props.callback : undefined,
                data: props.data && typeof [] == typeof props.data ? props.data : [],
                clipboard: props.clipboard
            };
        }

        return null;
    }

    copyToClipboardAction(data){
        if(this.clipboardNode){

            if(typeof [] == typeof data){
                data = JSON.stringify(data);
            }

            this.clipboardNode.value = data;
            this.clipboardNode.select();
            document.execCommand('copy');
            this.clipboardNode.value = '';
        }
    }

    copyToClipboard(e){
        const { clipboard, callback, animation } = this.state;
        this.copyToClipboardAction(clipboard);

        if(animation && this.clipboardNodeForAnimation){
            const classToToggle = `animation-${animation}`;
            this.clipboardNodeForAnimation.classList.add(classToToggle);

            if('scale' == animation){
                return setTimeout( () => {
                    if(animation && this.clipboardNodeForAnimation){
                        this.clipboardNodeForAnimation.classList.remove(classToToggle);
                    }
                }, 500);
            }

            if('jump' == animation){

                setTimeout( () => {
                    this.clipboardNodeForAnimation.classList.add(`${classToToggle}-back`);
                }, 200);

                return setTimeout( () => {
                    if(animation && this.clipboardNodeForAnimation){
                        this.clipboardNodeForAnimation.classList.remove(classToToggle);
                        this.clipboardNodeForAnimation.classList.remove(`${classToToggle}-back`);
                    }
                }, 400);
            }
        }

        if(callback){
            (callback)(e, clipboard);
        }
    }
    
    render() {
        const { addClass, data, defaultClass, id, formStyle, uuid } = this.state;

        return (
            <div 
                ref={ node => this.clipboardNodeForAnimation = node}
                className={`${defaultClass} ${addClass}`} 
                id={id}
                onClick={ (e) => this.copyToClipboard(e)}
            >
                {
                    data
                }
                <form style={formStyle}>
                    <textarea
                        ref={ node => this.clipboardNode = node}
                        id={uuid}
                        value=''
                        readOnly={true}
                    />
                </form>
            </div>
        );
    }
}

export default Clipboard;
