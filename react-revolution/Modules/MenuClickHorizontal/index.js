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
        const { reactRouter } = this.state;
        const jsx = [];

        if (data && data.length) {
            for (let x = 0; x <= data.length - 1; x++) {
                let { text, dataToggle, toggled, unique, dataToggleAttributes, classList, href, icon } = data[x];
                const dataChildren = data[x].data ? data[x].data : [];
                const isLink = data[x].data ? true : false;

                if (!classList) {
                    classList = '';
                }

                if (!dataToggleAttributes || typeof dataToggleAttributes !== typeof {}) {
                    dataToggleAttributes = {};
                }

                try {
                    Object.keys(dataToggleAttributes);
                }
                catch (e) {
                    dataToggleAttributes = {};
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
                            className={`text ${isChild ? 'child' : ''}`}
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
                        {...dataToggleAttributes}
                    >
                        {
                            dataLink
                        }
                        {
                            toggled && dataChildren && 0 !== dataChildren.length &&
                            <div 
                                id={`${dataChildren && 0 !== dataChildren.length ? `${unique}` : ''}`} 
                                className={`children`}>
                                {
                                    this.buildDataRecursive(dataChildren, true)
                                }
                            </div>
                        }
                        {
                            toggled && undefined == dataChildren &&
                            <div className="data">
                                {
                                    dataToggle
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
    toggle(uniqueId, isLink = false) {
        const allowedAnimations = ['height', 'scale', 'opacity'];
        const { data } = this.state;
        let { animation } = this.state;
        let timeouterForAnimationBack = 0;

        if(!allowedAnimations.includes(animation)){
            animation = undefined;
        }

        if (!isLink) {
            return null;
        }

        const loop = (datas) => {
            if (datas && datas.length) {
                for (let x = 0; x <= datas.length - 1; x++) {
                    let { unique } = datas[x];
                    const dataChildren = datas[x].data;

                    if (unique == uniqueId) {

                        const childrenNode = document.getElementById(uniqueId);

                        if(childrenNode && animation){
                            const cls = `${animation ? `animation-${animation}-back` : ''}`;
                            childrenNode.classList.add(cls);
                        }
                        
                        datas[x].toggled = !datas[x].toggled;
                        datas[x].classList = !datas[x].toggled ? `toggled` : `toggling ${animation ? `animation-${animation}` : ''}`;

                        if(!datas[x].toggled && animation){
                            timeouterForAnimationBack = 300;
                        }

                        setTimeout(() => {
                            datas[x].classList = datas[x].toggled ? `toggled ${animation ? `animation-${animation}` : ''}` : '';
                        }, 300);
                        break;
                    }

                    if (dataChildren && typeof [] == typeof dataChildren && 0 !== dataChildren.length) {
                       loop(dataChildren);
                    }
                }
            }
        }

        loop(data);

        setTimeout( () => {
            this.setState({
                data
            }, () => setTimeout(() => { 
                this.setState({ data }); 
            }, 300));
        }, timeouterForAnimationBack);
    }

    render() {
        const { defaultClass, id, data } = this.state;

        return (
            <div className={defaultClass} id={id}>
                {
                    this.buildDataRecursive(data)
                }
            </div>
        )
    }
}

export default MenuClickHorizontal;