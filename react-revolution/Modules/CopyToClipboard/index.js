import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class CopyToClipboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.buildData = this.buildData.bind(this);

        this.state = {
            /**
             * App
             */
            dataJsx: [],
            /**
             * User
             */
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
            data: props.data && typeof [] == typeof props.data ? props.data : [],
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'itemsPerLine', 'data'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
                data: props.data && typeof [] == typeof props.data ? props.data : [],
            };
        }

        return null;
    }


    componentDidMount(){
        this.buildData();
    }

    
    render() {
        let { dataJsx, defaultClass, id } = this.state;

        return (
            <div className={defaultClass} id={id}>
                {
                    dataJsx
                }
            </div>
        );
    }
}

export default CopyToClipboard;
