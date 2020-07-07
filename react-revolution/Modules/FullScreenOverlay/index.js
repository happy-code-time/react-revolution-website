import * as React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import disableHtmlScroll from '../../Functions/disableHtmlScroll';

import enableHtmlScroll from '../../Functions/enableHtmlScroll';

class FullScreenOverlay extends React.Component {

    constructor(props) {
        super(props);
        this.closeClick = this.closeClick.bind(this);
        this.EscListener = this.EscListener.bind(this);

        this.state = {
            /**
             * User
             */
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-full-screen-overlay',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            closeOnClick: (typeof true == typeof props.closeOnClick) ? props.closeOnClick : true,
            closeOnEsc: (typeof true == typeof props.closeOnEsc) ? props.closeOnEsc : true,
            data: props.data ? props.data : '',
            animation: (typeof true == typeof props.animation) ? props.animation : true,
            animationType: (props.animationType && typeof '8' == typeof props.animationType) ? props.animationType : '',
            closeCallback: ('function' == typeof props.closeCallback) ? props.closeCallback : undefined,
            display: (typeof true == typeof props.display) ? props.display : false,
            iconClose: props.iconClose ? props.iconClose : undefined,
            dimmed: (typeof true == typeof props.dimmed) ? props.dimmed : true,
            disableScroll: (typeof true == typeof props.disableScroll) ? props.disableScroll : true,
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'disableScroll', 'closeCallback', 'animation', 'closeOnClick', 'closeOnEsc', 'data', 'iconClose', 'display'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-full-screen-overlay',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                closeOnClick: (typeof true == typeof props.closeOnClick) ? props.closeOnClick : true,
                closeOnEsc: (typeof true == typeof props.closeOnEsc) ? props.closeOnEsc : true,
                data: props.data ? props.data : '',
                animation: (typeof true == typeof props.animation) ? props.animation : true,
                animationType: (props.animationType && typeof '8' == typeof props.animationType) ? props.animationType : '',
                closeCallback: ('function' == typeof props.closeCallback) ? props.closeCallback : undefined,
                display: (typeof true == typeof props.display) ? props.display : false,
                iconClose: props.iconClose ? props.iconClose : undefined,
                dimmed: (typeof true == typeof props.dimmed) ? props.dimmed : true,
                disableScroll: (typeof true == typeof props.disableScroll) ? props.disableScroll : true,
            };
        }

        return null;
    }

    componentDidMount(){
        const { closeOnEsc, disableScroll } = this.state;

        if(closeOnEsc){
            window.addEventListener("keydown", this.EscListener, false);
        }

        if(disableScroll){
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

            return;
        }

        enableHtmlScroll();
        window.removeEventListener("keydown", this.EscListener, false);
    }

    EscListener(event){
        const self = this;

        if(event.keyCode === 27) {
            const { closeCallback } = self.state;

            if(closeCallback && 'function' == typeof closeCallback){
                enableHtmlScroll();
                window.removeEventListener("keydown", this.EscListener, false);
                (closeCallback)();
            }
        }
    }

    closeClick(e, force = false){
        const { closeOnClick, closeCallback } = this.state;

        if(force || (closeOnClick && closeCallback && 'function' == typeof closeCallback) && this.contentReference && !e.target.contains(this.contentReference)){
            enableHtmlScroll();
            window.removeEventListener("keydown", this.EscListener, false);
            (closeCallback)();
        }
    }

    getDefaultClass(){
        let { animation, animationType, defaultClass } = this.state;

        if(animation){
            
            if('scale' == animationType){
                defaultClass = `${defaultClass} rr-full-screen-overlay-scale`;
            }

            if('left' == animationType){
                defaultClass = `${defaultClass} rr-full-screen-overlay-left`;
            }

            if('top' == animationType){
                defaultClass = `${defaultClass} rr-full-screen-overlay-top`;
            }

            if('right' == animationType){
                defaultClass = `${defaultClass} rr-full-screen-overlay-right`;   
            }

            if('bottom' == animationType){
                defaultClass = `${defaultClass} rr-full-screen-overlay-bottom`;   
            }
        }

        return defaultClass
    }
    
    render() {
        let { display, iconClose, data, dimmed, id } = this.state;
        const defaultClass = this.getDefaultClass();

        if(!display){
            return null;
        }

        return (
            <div className={defaultClass} id={id}>
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
                    <div className="close-area" onClick={(e) => this.closeClick(e)}></div>
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
