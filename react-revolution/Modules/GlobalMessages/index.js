import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class GlobalMessages extends React.Component 
{

    constructor(props) {
        super(props);
        this.checkLocation = this.checkLocation.bind(this);

        this.state = {
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-global-messages',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            messageKey: (props.messageKey && typeof '8' == typeof props.messageKey) ? props.messageKey : '',
            codeMapping: (props.codeMapping && typeof {} === typeof props.codeMapping) ? props.codeMapping : {},
            timer: (props.timer && typeof 888 == typeof props.timer) ? props.timer : 2500,
            /**
             * 
             */
            messagesApp: [],
        };

        this.removeMessage = this.removeMessage.bind(this);
        this.setIntervaller = this.setIntervaller.bind(this);
        this.href = window.location.href;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'codeMapping', 'timer', 'messageKey'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-global-messages',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                messageKey: (props.messageKey && typeof '8' == typeof props.messageKey) ? props.messageKey : '',
                codeMapping: (props.codeMapping && typeof {} === typeof props.codeMapping) ? props.codeMapping : {},
                timer: (props.timer && typeof 888 == typeof props.timer) ? props.timer : 2500
            };
        }

        return null;
    }

    componentDidMount() {
        this.setOnClickEventListenerToTheDom();

        const { messageKey } = this.state;

        if('' !== messageKey){
            this.setIntervaller();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.checkLocation);
        clearInterval(this.globalMessagesIntervaller);
    }

    /**
     * Check if the website using a react-router
     * and if the url changed then reload the protector functionalitty
     */
    setOnClickEventListenerToTheDom() {
        document.removeEventListener('click', this.checkLocation);
        document.addEventListener('click', this.checkLocation);
    }

    /**
     * Check location, if the stored href are changed then
     * reload the security context of this extension
     * This feature needed for websites based on
     * react framework
     */
    checkLocation() {
        const self = this;
        let count = 5;
        clearInterval(x);

        var x = setInterval(() => {
            /**
             * If the current href changed
             */            
             if (self.href !== window.location.href && count > 0) {
                self.href = window.location.href;
                self.clearStore();
                return clearInterval(x);
            }

            if (!count) {
                return clearInterval(x);
            }

            count--;
        }, 100);
    }

    /**
     * Read messages from store
     */
    readStore() {
        const { messageKey } = this.state;

        if (null !== sessionStorage.getItem(messageKey)) {
            return JSON.parse(sessionStorage.getItem(messageKey));
        }

        return [];
    }

    /**
     * Clear storage
     */
    clearStore() {
        const { messageKey } = this.state;
        sessionStorage.removeItem(messageKey);
        this.setState({
            messagesApp: []
        });
    }

    /**
     * Looper
     */
    setIntervaller() {
        const { timer } = this.state;
        clearInterval(this.globalMessagesIntervaller);

        this.globalMessagesIntervaller = setInterval(() => {
            let messagesApp = this.readStore();

            if (0 !== messagesApp.length) {
                this.clearStore();

                for(let x = 0; x <= messagesApp.length-1; x++){
                    messagesApp[x].unique = `${uuid()}`;

                    if(messagesApp[x].disappear && typeof 8 == typeof messagesApp[x].disappear){
                        setTimeout( () => {
                            this.setState({ 
                                messagesApp: this.state.messagesApp.filter( item => messagesApp[x].unique !== item.unique),
                            });
                        }, messagesApp[x].disappear);
                    }
                }

                this.setState({ 
                    messagesApp 
                });
            }

        }, timer);
    }

    /**
     * Remove single message by index
     */
    removeMessage(unique) {
        this.setState({
            messagesApp: this.state.messagesApp.filter( item => unique !== item.unique),
        });
    }

    render() {
        const { codeMapping, messagesApp, defaultClass } = this.state;
        const mappingKeys = Object.getOwnPropertyNames(codeMapping);

        return (
            <div className={defaultClass} id={id}>
                {
                    messagesApp.map( obj => {

                        let { errorCode, errorMessage, unique } = obj;
                        errorCode = JSON.stringify(errorCode);

                        if (mappingKeys.includes(errorCode) && undefined !== codeMapping[errorCode]) {
                            const { title, displayErrorCode, text, close, link } = codeMapping[errorCode];
                            let attributesText = {};
                            let attributesLink = {};
                            let attributesClose = {};

                            if (text && typeof {} === typeof text && text.attributes && typeof {} === typeof text.attributes) {
                                attributesText = text.attributes;
                            }

                            if (link && typeof {} === typeof link && link.attributes && typeof {} === typeof link.attributes) {
                                attributesLink = link.attributes;
                            }

                            if (close && typeof {} === typeof close && close.attributes && typeof {} === typeof close.attributes) {
                                attributesClose = close.attributes;
                            }

                            return (
                                <div className="single-error" key={uuid()}>
                                    {
                                        title &&
                                        typeof '000' === typeof title &&
                                        <h1>
                                            {`${title} ${displayErrorCode ? errorCode : ''}`}
                                        </h1>
                                    }
                                    {
                                        title &&
                                        typeof {} === typeof title &&
                                        <h1>
                                            {
                                                title
                                            }
                                            {` ${displayErrorCode ? errorCode : ''}`}
                                        </h1>
                                    }
                                    <div
                                        className="text"
                                        {...attributesText}
                                    >
                                        {`${text.prefix ? `${text.prefix} ` : ''} ${errorMessage ? `${errorMessage} ` : ''} ${text.suffix ? `${text.suffix}` : ''}`}
                                    </div>

                                    <div className="options">
                                        <div
                                            onClick={e => this.removeMessage(unique)}
                                            className="single-option"
                                            {...attributesClose}
                                        >
                                            {`${close.text ? `${close.text} ` : ''}`}
                                        </div>
                                        {
                                            link && typeof {} === typeof link && link.text && typeof '000' === typeof link.text &&
                                            <div className="single-option">
                                                <a
                                                    rel="noopener noreferrer"
                                                    href={`${link.href ? link.href : ''}`}
                                                    {...attributesLink}
                                                >
                                                    {
                                                        link.text
                                                    }
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            );
                        }

                        return null;
                    })
                }
            </div>
        );
    }
}

export default GlobalMessages;