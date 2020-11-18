import React from 'react';
import internalUuid from '../internalFunctions/internalUuid';
import loadStyle from '../internalFunctions/loadStyle';

class GlobalMessages extends React.Component 
{

    constructor(props) {
        super(props);
        this.checkLocation = this.checkLocation.bind(this);

        this.state = {
            /**
             * App
             */
            messagesApp: [],
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-global-messages',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            messageKey: (props.messageKey && typeof '8' == typeof props.messageKey) ? props.messageKey : '',
            codeMapping: (props.codeMapping && typeof {} === typeof props.codeMapping) ? props.codeMapping : {},
            timer: (props.timer && typeof 8 == typeof props.timer) ? props.timer : 2500,
            empty: (typeof true == typeof props.empty) ? props.empty : true,
        };

        this.removeMessage = this.removeMessage.bind(this);
        this.setIntervaller = this.setIntervaller.bind(this);
        this.href = window.location.href;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        this.clearStore(true);
        const { messageKey, empty } = this.state;

        if(empty){
            this.setOnClickEventListenerToTheDom();
        }

        if('' !== messageKey){
            this.setIntervaller();
        }
    }

    componentWillUnmount() {
        const { empty } = this.state;

        if(empty){
            document.removeEventListener('click', this.checkLocation);
        }
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
                self.clearStore(true);
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
    clearStore(resetMessages = false) {
        const { messageKey } = this.state;

        sessionStorage.removeItem(messageKey);
        
        if(resetMessages){
            this.setState({
                messagesApp: []
            });
        }
    }

    /**
     * Looper
     */
    setIntervaller() {
        const { timer } = this.state;
        clearInterval(this.globalMessagesIntervaller);

        this.globalMessagesIntervaller = setInterval(() => {
            const { messagesApp } = this.state;
            let newMessagesApp = this.readStore();

            if (0 !== newMessagesApp.length) {
                this.clearStore(false);

                for(let x = 0; x <= newMessagesApp.length-1; x++){
                    newMessagesApp[x].unique = `${internalUuid()}`;

                    if(newMessagesApp[x].disappear && typeof 8 == typeof newMessagesApp[x].disappear){
                        setTimeout( () => {
                            this.setState({ 
                                messagesApp: this.state.messagesApp.filter( item => newMessagesApp[x].unique !== item.unique),
                            });
                        }, newMessagesApp[x].disappear);
                    }
                }

                this.setState({ 
                    messagesApp: [...messagesApp, ...newMessagesApp]
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
        const { addClass, codeMapping, messagesApp, defaultClass, id } = this.state;
        const mappingKeys = Object.getOwnPropertyNames(codeMapping);

        return (
            <div className={`${defaultClass} ${addClass}`} id={id}>
                {
                    messagesApp.map( obj => {

                        let { errorCode, errorMessage, unique } = obj;
                        errorCode = JSON.stringify(errorCode);

                        if (mappingKeys.includes(errorCode) && undefined !== codeMapping[errorCode]) {
                            const { title, displayErrorCode, text, close, link } = codeMapping[errorCode];
                            let propsText = {};
                            let propsLink = {};
                            let propsClose = {};

                            if (text && typeof {} === typeof text && text.props && typeof {} === typeof text.props) {
                                propsText = text.props;
                            }

                            if (link && typeof {} === typeof link && link.props && typeof {} === typeof link.props) {
                                propsLink = link.props;
                            }

                            if (close && typeof {} === typeof close && close.props && typeof {} === typeof close.props) {
                                propsClose = close.props;
                            }

                            return (
                                <div className="single-error" key={internalUuid()}>
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
                                        {...propsText}
                                    >
                                        {`${text.prefix ? `${text.prefix} ` : ''} ${errorMessage ? `${errorMessage} ` : ''} ${text.suffix ? `${text.suffix}` : ''}`}
                                    </div>

                                    <div className="options">
                                        <div
                                            onClick={e => this.removeMessage(unique)}
                                            className="single-option"
                                            {...propsClose}
                                        >
                                            {`${close.text ? `${close.text} ` : ''}`}
                                        </div>
                                        {
                                            link && typeof {} === typeof link && link.text && typeof '000' === typeof link.text &&
                                            <div className="single-option">
                                                <a
                                                    rel="noopener noreferrer"
                                                    href={`${link.href ? link.href : ''}`}
                                                    {...propsLink}
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