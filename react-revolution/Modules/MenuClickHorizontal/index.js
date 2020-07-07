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
            reactRouter: typeof true == typeof props.reactRouter ? props.reactRouter : false
        }
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'data', 'reactRouter'], props, state)) {
            return {
                defaultClass: (props.class && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-menu-click-horizontal',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: (props.data && typeof [] == typeof props.data) ? buildDropDownStructure(props.data) : [],
                reactRouter: typeof true == typeof props.reactRouter ? props.reactRouter : false
            };
        }

        return null;
    }

    buildDataRecursive(data = []) {
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
                            className="text"
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
                            className="text"
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
                            className="text children"
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
                        className={`single-entry ${classList}`}
                        {...dataToggleAttributes}
                    >
                        {
                            dataLink
                        }
                        {
                            toggled && dataChildren && 0 !== dataChildren.length &&
                            this.buildDataRecursive(dataChildren)
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
        const { data } = this.state;

        if (!isLink) {
            return null;
        }

        const loop = (datas) => {
            if (datas && datas.length) {
                for (let x = 0; x <= datas.length - 1; x++) {
                    let { unique } = datas[x];
                    const dataChildren = datas[x].data;

                    if (unique == uniqueId) {
                        datas[x].toggled = !datas[x].toggled;
                        datas[x].classList = 'toggling';

                        setTimeout(() => {
                            datas[x].classList = datas[x].toggled ? 'toggled' : '';
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

        this.setState({
            data
        }, () => setTimeout(() => { this.setState({ data }); }, 300));
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