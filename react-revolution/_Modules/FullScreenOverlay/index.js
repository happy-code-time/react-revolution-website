import * as React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import disableHtmlScroll from '../../_Functions/disableHtmlScroll';

import enableHtmlScroll from '../../_Functions/enableHtmlScroll';

import loadStyle from '../internalFunctions/loadStyle';

class FullScreenOverlay extends React.Component 
{

    constructor(props) {
        super(props);
        this.closeClick = this.closeClick.bind(this);
        this.EscListener = this.EscListener.bind(this);
        this.fadeOut = this.fadeOut.bind(this);

        this.state = {
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-full-screen-overlay',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            closeOnClick: (typeof true == typeof props.closeOnClick) ? props.closeOnClick : true,
            closeOnEsc: (typeof true == typeof props.closeOnEsc) ? props.closeOnEsc : true,
            data: props.data ? props.data : '',
            animation: (props.animation && typeof '8' == typeof props.animation) ? props.animation : '',
            callbackClose: ('function' == typeof props.callbackClose) ? props.callbackClose : undefined,
            display: (typeof true == typeof props.display) ? props.display : false,
            iconClose: props.iconClose ? props.iconClose : undefined,
            dimmed: (typeof true == typeof props.dimmed) ? props.dimmed : false,
            disableScroll: (typeof true == typeof props.disableScroll) ? props.disableScroll : false,
        };

        this.animationBack = false;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'disableScroll', 'callbackClose', 'animation', 'closeOnClick', 'closeOnEsc', 'data', 'iconClose', 'display'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-full-screen-overlay',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                closeOnClick: (typeof true == typeof props.closeOnClick) ? props.closeOnClick : true,
                closeOnEsc: (typeof true == typeof props.closeOnEsc) ? props.closeOnEsc : true,
                data: props.data ? props.data : '',
                animation: (props.animation && typeof '8' == typeof props.animation) ? props.animation : '',
                callbackClose: ('function' == typeof props.callbackClose) ? props.callbackClose : undefined,
                display: (typeof true == typeof props.display) ? props.display : false,
                iconClose: props.iconClose ? props.iconClose : undefined,
                dimmed: (typeof true == typeof props.dimmed) ? props.dimmed : true,
                disableScroll: (typeof true == typeof props.disableScroll) ? props.disableScroll : true,
            };
        }

        return null;
    }

    componentDidMount(){
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { closeOnEsc, disableScroll, display } = this.state;

        if(closeOnEsc){
            window.addEventListener("keydown", this.EscListener, false);
        }

        if(display && disableScroll){
            disableHtmlScroll();
        }
    }

    componentWillUnmount(){
        enableHtmlScroll();
        window.removeEventListener("keydown", this.EscListener, false);
    }

    componentDidUpdate(){
        const { closeOnEsc, disableScroll, display } = this.state;

        if(display){
            if(closeOnEsc){
                window.addEventListener("keydown", this.EscListener, false);
            }
    
            if(disableScroll){
                disableHtmlScroll();
            }

            if(disableScroll){
                enableHtmlScroll();
            }

            return;
        }

        enableHtmlScroll();
        window.removeEventListener("keydown", this.EscListener, false);
    }

    EscListener(event){
        const self = this;

        if(event.keyCode === 27) {
            const { callbackClose } = self.state;

            if(callbackClose && 'function' == typeof callbackClose){
                enableHtmlScroll();
                window.removeEventListener("keydown", this.EscListener, false);
                this.fadeOut();
            }
        }
    }

    closeClick(e, force = false){
        const { closeOnClick, callbackClose } = this.state;

        if(force || (closeOnClick && callbackClose && 'function' == typeof callbackClose) && this.contentReference && !e.target.contains(this.contentReference)){
            enableHtmlScroll();
            window.removeEventListener("keydown", this.EscListener, false);
            this.fadeOut();
        }
    }

    fadeOut(){
        const { callbackClose, animation } = this.state;
        const timeOut = animation ? 300 : 0;
        this.animationBack = true;

        this.setState({}, () => {
            setTimeout( () => {
                (callbackClose)();
                this.animationBack = false;
            }, timeOut);
        });
    }

    getDefaultClass(){
        let { animation, defaultClass } = this.state;
        const back = this.animationBack ? 'back' : '';

        if(animation){
            
            if('scale' == animation){
                defaultClass = `${defaultClass} rr-full-screen-overlay-scale`;
            }

            if('left' == animation){
                defaultClass = `${defaultClass} rr-full-screen-overlay-left`;
            }

            if('top' == animation){
                defaultClass = `${defaultClass} rr-full-screen-overlay-top`;
            }

            if('right' == animation){
                defaultClass = `${defaultClass} rr-full-screen-overlay-right`;
            }

            if('bottom' == animation){
                defaultClass = `${defaultClass} rr-full-screen-overlay-bottom`;
            }
        }

        return `${defaultClass} ${back}`;
    }
    
    render() {
        const { addClass, display, iconClose, data, dimmed, id } = this.state;
        const defaultClass = this.getDefaultClass();

        if(!display){
            return null;
        }

        return (
            <div className={`${defaultClass} ${addClass}`} id={id}>
                {
                    iconClose &&
                    <div className="icon-close" onClick={(e) => this.closeClick(e, true)}>
                        {
                            iconClose
                        }
                    </div>
                }
                {
                    dimmed &&
                    <div className="dimmed" onClick={(e) => this.closeClick(e)}></div>
                }
                <div ref={ node => this.contentReference = node } className="content">
                    {
                        data
                    }
                </div>
            </div>
        );
    }
}

export default FullScreenOverlay;