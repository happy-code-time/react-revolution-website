import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class Clipboard extends React.Component {
    
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
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-clipboard',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            callback: props.callback && 'function' == typeof props.callback ? props.callback : undefined,
            data: props.data && typeof [] == typeof props.data ? props.data : [],
            clipboard: props.clipboard,
            animation: props.animation && typeof '8' == typeof props.animation ? props.animation : undefined,
        };
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
            this.clipboardNodeForAnimation.classList.add('animation-scale');

            setTimeout( () => {
                if(animation && this.clipboardNodeForAnimation){
                    this.clipboardNodeForAnimation.classList.remove('animation-scale');
                }
            }, 500);
        }

        if(callback){
            (callback)(e, clipboard);
        }
    }
    
    render() {
        let { data, defaultClass, id, formStyle, uuid } = this.state;

        return (
            <div 
                ref={ node => this.clipboardNodeForAnimation = node}
                className={defaultClass} 
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
