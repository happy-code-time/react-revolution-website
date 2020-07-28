import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import loadStyle from '../../Functions/loadStyle';

import removeStyle from '../../Functions/removeStyle';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.buildData = this.buildData.bind(this);
        this.resize = this.resize.bind(this);

        this.state = {
            /**
             * App
             */
            dataJsx: [],
            isMinified: false,
            /**
             * User
             */
            style: (typeof true == typeof props.style) ? props.style : true,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-table',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            title: (props.title && typeof [] == typeof props.title) ? props.title : undefined,
            data: (props.data && typeof [] == typeof props.data) ? props.data : undefined,
            mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
            keysToRead: (props.keysToRead && typeof [] == typeof props.keysToRead) ? props.keysToRead : undefined
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'data', 'mediaBreak', 'title', 'keysToRead'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-table',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                title: (props.title && typeof [] == typeof props.title) ? props.title : undefined,
                data: (props.data && typeof [] == typeof props.data) ? props.data : undefined,
                mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
                keysToRead: (props.keysToRead && typeof [] == typeof props.keysToRead) ? props.keysToRead : undefined,
                dataJsx: state.dataJsx
            };
        }

        return null;
    }

    componentDidMount() {
        const { mediaBreak } = this.state;

        this.buildData();

        if (mediaBreak) {
            window.addEventListener('resize', this.resize);
            this.resize();
        }

        loadStyle(this.state.style, this.state.defaultClass);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize() {
        const { mediaBreak, isMinified } = this.state;
        /**
         * Media break
         */
        if (document.documentElement.getBoundingClientRect().width <= mediaBreak) {
            if (!isMinified) {
                this.setState({
                    isMinified: true
                }, this.buildData);
            }
        }
        /**
         * Default
         */
        else {
            if (isMinified) {
                this.setState({
                    isMinified: false
                }, this.buildData);
            }
        }
    }

    buildData() {
        const { data, isMinified, title, keysToRead } = this.state;
        const dataJsx = [];
        const clsCardsHolder = `${isMinified ? 'flex-column isMinified' : 'flex-row'}`;

        if (data && data.length) {
            const titleJsx = [];

            if (title && title.length) {

                title.map( (value,i) => {
                    if (value && typeof '8' == typeof value) {
                        titleJsx.push(
                            <span
                                key={uuid()}
                                className={`span span-${i + 1}`}
                            >
                                {
                                    value
                                }
                            </span>
                        );
                    }
                });

                if (titleJsx.length) {
                    dataJsx.push(
                        <li
                            key={uuid()}
                            className={`${clsCardsHolder} title`}
                        >
                            {
                                titleJsx
                            }
                        </li>
                    );
                }
            }

            data.map(object => {

                if (keysToRead && keysToRead.length) {
                    let dataInsideJsx = [];

                    keysToRead.map((key, i) => {

                        if (undefined !== object[key]) {
                            const value = object[key] ? object[key] : '';

                            dataInsideJsx.push(
                                <span
                                    key={uuid()}
                                    className={`span span-${i + 1}`}>
                                    {
                                        value
                                    }
                                </span>
                            );
                        }
                    });

                    if (dataInsideJsx && dataInsideJsx.length) {

                        dataJsx.push(
                            <li
                                key={uuid()}
                                className={clsCardsHolder}
                            >
                                {
                                    dataInsideJsx
                                }
                            </li>
                        );

                        dataInsideJsx = [];
                    }
                }
            });

            this.setState({ dataJsx });
        }
    }

    render() {
        const { addClass, defaultClass, id, dataJsx } = this.state;

        return (
            <ul className={`${defaultClass} ${addClass}`} id={id}>
                {
                    dataJsx && dataJsx.length && dataJsx.map(i => i)
                }
            </ul>
        );
    }
}

export default Table;
