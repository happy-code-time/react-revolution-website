import React from 'react';

import { Link } from 'react-router-dom';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import uuid from '../internalFunctions/uuid';

import buildDropDownStructure from '../internalFunctions/buildDropDownStructure';

class MenuClickHorizontal extends React.Component {

    constructor(props) {
        super(props);
        this.buildDataRecursive = this.buildDataRecursive.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-menu-click-horizontal',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: (props.data && typeof [] == typeof props.data) ? buildDropDownStructure(props.data) : [],
            reactRouter: typeof true == typeof props.reactRouter ? props.reactRouter : false,
            animation: (props.animation && typeof '8' == typeof props.animation) ? props.animation : undefined,
        }
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'data', 'reactRouter', 'animation'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.class && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-menu-click-horizontal',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: (props.data && typeof [] == typeof props.data) ? buildDropDownStructure(props.data) : [],
                reactRouter: typeof true == typeof props.reactRouter ? props.reactRouter : false,
                animation: (props.animation && typeof '8' == typeof props.animation) ? props.animation : undefined,
            };
        }

        return null;
    }

    buildDataRecursive(data = [], isChild = false) {
        const { reactRouter, dropDown } = this.state;
        const jsx = [];

        if (data && data.length) {
            for (let x = 0; x <= data.length - 1; x++) {
                let { text, toggled, unique, props, classList, href, icon } = data[x];
                
                if(href && typeof '8' == typeof href){
                    href = href.toLowerCase();
                }

                const dataChildren = data[x].data ? data[x].data : [];
                const isLink = data[x].data ? true : false;

                if (!classList) {
                    classList = '';
                }

                if (!props || typeof props !== typeof {}) {
                    props = {};
                }

                try {
                    Object.keys(props);
                }
                catch (e) {
                    props = {};
                }

                let dataLink = '';

                if (reactRouter && dataChildren && 0 == dataChildren.length) {
                    dataLink = (
                        <Link
                            to={href}
                            className={`text ${isChild ? 'child' : ''}`}
                            onClick={() => this.toggle(unique, isLink)}
                        >
                            {
                                icon && icon   
                            }
                            {
                                text
                            }
                        </Link>
                    );
                }

                if (!reactRouter && dataChildren && 0 == dataChildren.length) {
                    dataLink = (
                        <a
                            href={href}
                            className={`text ${isChild ? 'child' : ''}`}
                            onClick={() => this.toggle(unique, isLink)}
                        >
                            {
                                icon && icon   
                            }
                            {
                                text
                            }
                        </a>
                    );
                }

                if (dataChildren && 0 !== dataChildren.length) {

                    dataLink = (
                        <div
                            className={`text hasChildren ${isChild ? ' child' : ''}`}
                            onClick={() => this.toggle(unique, isLink)}
                        >
                            {
                                icon && icon   
                            }
                            {
                                text
                            }
                        </div>
                    );
                }
                jsx.push(
                    <div
                        key={uuid()}
                        className={`single-entry ${classList} ${(dataChildren && 0 !== dataChildren.length) ? 'parent' : ''}`}
                        {...props}
                    >
                        {
                            dataLink
                        }
                        {
                            toggled && dataChildren && 0 !== dataChildren.length &&
                            <div className={`children`}>
                                {
                                    this.buildDataRecursive(dataChildren, true)
                                }
                            </div>
                        }
                    </div>
                )
            }
        }

        return jsx;
    }

    /**
     * Recursive loop to change the 
     * toggled key to the oposite oolean value
     * @param {string} uniqueId 
     */
    toggle(uniqueId) {
        const allowedAnimations = ['height', 'scale', 'opacity'];
        const { data } = this.state;
        let { animation } = this.state;
        let timeouterForAnimationBack = 0;
        let closing = false;

        if(!allowedAnimations.includes(animation)){
            animation = undefined;
        }

        const loop = (datas) => {
            if (datas && datas.length) {
                for (let x = 0; x <= datas.length - 1; x++) {
                    let { unique } = datas[x];
                    const dataChildren = datas[x].data;

                    if (unique == uniqueId) {

                        if(false == !datas[x].toggled && animation){
                            timeouterForAnimationBack = 300;
                        }

                        const toggleEntry = () => {
                            datas[x].toggled = !datas[x].toggled;
                            datas[x].classList = !datas[x].toggled ? `toggled` : `toggling ${animation ? `animation-${animation}` : ''}`;
    
                            setTimeout(() => {
                                datas[x].classList = datas[x].toggled ? `toggled ${animation ? `animation-${animation}` : ''}` : '';
                            }, 300);
                        }

                        if(false == !datas[x].toggled){
                            datas[x].classList = `${datas[x].classList} ${animation ? `animation-${animation}-back` : ''}`;

                            return this.setState({
                                data
                            }, toggleEntry);
                        }

                        toggleEntry(); 
                        break;
                    }

                    if (dataChildren && typeof [] == typeof dataChildren && 0 !== dataChildren.length) {
                       loop(dataChildren);
                    }
                }
            }
        }

        loop(data);

        /**
         * Opening entry
         */
        if(!closing){
            return setTimeout( () => {
                this.setState({
                    data
                }, () => setTimeout(() => { 
                    this.setState({ data }); 
                }, 300));
            }, timeouterForAnimationBack);
        }

        /**
         * Closing entry
         */
        setTimeout( () => {
            this.setState({ data }); 
        }, timeouterForAnimationBack*2);
    }

    render() {
        const { addClass, defaultClass, id, data } = this.state;

        return (
            <div className={`${defaultClass} ${addClass}`} id={id}>
                {
                    this.buildDataRecursive(data)
                }
            </div>
        )
    }
}

export default MenuClickHorizontal;