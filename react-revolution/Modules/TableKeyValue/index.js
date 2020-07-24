import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class TableKeyValue extends React.Component {

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
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-table-key-value',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            title: (props.title && typeof {} == typeof props.title) ? props.title : undefined,
            data: (props.data && typeof [] == typeof props.data) ? props.data : undefined,
            mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'data', 'mediaBreak', 'title'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-table-key-value',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                title: (props.title && typeof {} == typeof props.title) ? props.title : undefined,
                data: (props.data && typeof [] == typeof props.data) ? props.data : undefined,
                mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
            };
        }

        return null;
    }

    componentDidMount() {
        const { mediaBreak } = this.state;

        this.buildData();

        if(mediaBreak){
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.resize);
    }

    resize(){
        const { mediaBreak, isMinified } = this.state;
        /**
         * Media break
         */
        if(document.documentElement.getBoundingClientRect().width <= mediaBreak){
            if(!isMinified){
                this.setState({ 
                    isMinified: true 
                }, this.buildData);
            }
        }
        /**
         * Default
         */
        else{
            if(isMinified){
                this.setState({ 
                    isMinified: false 
                }, this.buildData);
            }
        }
    }

    buildData() {
        const { data, isMinified, title } = this.state;
        const dataJsx = [];
        const clsCardsHolder = `${isMinified ? 'flex-column isMinified' : 'flex-row'}`;

        if (data && data.length) {

            if(title){
                const { left, right } = title;

                if(left && typeof '8' == typeof left && right && typeof '8' == typeof right){
                    dataJsx.push(
                        <li 
                            key={uuid()}
                            className={`${clsCardsHolder} title`}
                        >
                            <span className="key">
                                {
                                    left
                                }
                            </span>
                            <span className="value">
                                {
                                    right
                                }
                            </span>
                        </li>
                    );
                }
            }
            data.map(object => {
                const { key, value } = object;

                dataJsx.push(
                    <li 
                        key={uuid()}
                        className={clsCardsHolder}
                    >
                        <span className="key">
                            {
                                key
                            }
                        </span>
                        <span className="value">
                            {
                                value
                            }
                        </span>
                    </li>
                );
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

export default TableKeyValue;
