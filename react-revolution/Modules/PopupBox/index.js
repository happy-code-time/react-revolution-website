import React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class PopupBox extends React.Component 
{

    constructor(props) {
        super(props);
        this.fadePopupBoxOut = this.fadePopupBoxOut.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.togglePopupBox = this.togglePopupBox.bind(this);
        this.checkLocation = this.checkLocation.bind(this);

        const defaultAnimationTypes = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

        this.state = {
            /**
             * App
             */
            displayBox: false,
            displayBoxClassNames: 'box',
            /**
             * User
             */
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-popupbox',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data ? props.data : '',
            icon: props.icon ? props.icon : '',
            iconCallback: (props.iconCallback && 'function' == typeof props.iconCallback) ? props.iconCallback : undefined,
            animationTime: (props.animationTime && typeof 8 == typeof props.animationTime) ? props.animationTime : 300,
            animationType: (props.animationType && typeof '8' == typeof props.animationType && defaultAnimationTypes.includes(props.animationType)) ? props.animationType : 'top-left',
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        const defaultAnimationTypes = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'data', 'icon', 'iconCallback', 'animationTime', 'animationType'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-popupbox',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data ? props.data : '',
                icon: props.icon ? props.icon : '',
                iconCallback: (props.iconCallback && 'function' == typeof props.iconCallback) ? props.iconCallback : undefined,
                animationTime: (props.animationTime && typeof 8 == typeof props.animationTime) ? props.animationTime : 300,
                animationType: (props.animationType && typeof '8' == typeof props.animationType && defaultAnimationTypes.includes(props.animationType)) ? props.animationType : 'top-left',
            };
        }

        return null;
    }

    componentDidMount() {
        this.oldHref = window.location.href;
        document.addEventListener('mousedown', this.handleMouseDown);
    }

    componentWillUnmount() {
        clearInterval(this.odHrefInterval);
        document.removeEventListener('mousedown', this.handleMouseDown);
    }

    /**
     * Hide data div
     * while user not inside it
     * @param {React.MouseEvent|any} e
     */
    handleMouseDown(e) {
        if (this.nodeData && !this.nodeData.contains(e.target)) {
            this.fadePopupBoxOut();
        }

        this.checkLocation();
    }

    checkLocation() {
        clearInterval(this.odHrefInterval);
        let count = 10;
        this.odHrefInterval = setInterval(() => {

            if (this.oldHref !== window.location.href || 0 > count) {
                this.oldHref = window.location.href;
                clearInterval(this.odHrefInterval);

                this.setState({
                    displayBox: false,
                    displayBoxClassNames: 'box',
                });
            }
        }, 50);
    }

    togglePopupBox() {
        const { iconCallback } = this.state;

        if(iconCallback){
            (iconCallback)();
        }

        if (this.state.displayBox) {
            return this.fadePopupBoxOut();
        }

        this.setState({
            displayBox: true,
            displayBoxClassNames: 'box'
        });
    }

    fadePopupBoxOut() {
        const { displayBoxClassNames, animationTime } = this.state;

        this.setState(
            {
                displayBoxClassNames: `${displayBoxClassNames} fade-out`,
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        displayBox: false,
                        displayBoxClassNames: 'box',
                    });
                }, animationTime);
            }
        );
    }

    render() {
        const { defaultClass, id, displayBoxClassNames, animationType, icon, displayBox, data } = this.state;

        return (
            <span ref={node => (this.nodeData = node)} id={id} className={defaultClass}>
                <span className="icon" onClick={e => this.togglePopupBox()}>
                    {
                        icon
                    }
                </span>
                {
                    displayBox && 
                    <div className={`${displayBoxClassNames} ${animationType}`}>
                        {
                            data
                        }
                    </div>
                }
            </span>
        );
    }
}

export default PopupBox;