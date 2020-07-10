import React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class LoadingBoxTop extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-loading-box-top',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            text: (props.text && typeof '8' == typeof props.text) ? props.text : ''
        }
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'text'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-loading-box-top',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                text: (props.text && typeof '8' == typeof props.text) ? props.text : ''
            };
        }

        return null;
    }

    render(){
        const { text, defaultClass, id } = this.state;

        return(
            <div className={defaultClass} id={id}>
                {
                    text
                }
            </div>
        );
    }
}

export default LoadingBoxTop;