import * as React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import uuid from '../internalFunctions/uuid';

import buildDropDownStructure from '../internalFunctions/buildDropDownStructure';

class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.buildDataRecursive = this.buildDataRecursive.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-accordion',
            data: (props.data && typeof [] == typeof props.data) ? buildDropDownStructure(props.data) : [],
        }
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['data', 'defaultClass'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-accordion',
                data: (props.data && typeof [] == typeof props.data) ? buildDropDownStructure(props.data) : []
            };
        }

        return null;
    }

    buildDataRecursive(data = []){
        const jsx = [];

        if(data && data.length){
            for(let x = 0; x <= data.length-1; x++){
                let { text, dataToggle, toggled, unique, classList, dataToggleAttributes } = data[x];
                const dataChildren = data[x].data;

                if(!classList){
                    classList = '';
                }

                if(!dataToggleAttributes || typeof dataToggleAttributes !== typeof {}){
                    dataToggleAttributes = {};
                }

                try{
                    Object.keys(dataToggleAttributes);
                }
                catch(e){
                    dataToggleAttributes = {};
                }

                jsx.push(
                    <div 
                        key={uuid()} 
                        className={`single-entry ${classList}`}
                        {...dataToggleAttributes}
                    >
                        {
                            <div 
                                className="text"
                                onClick={ () => this.toggle(unique)}
                            >
                            {
                                text
                            }
                            </div>
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
    toggle(uniqueId){
        const { data } = this.state;

        const loop = (datas) => {
            if(datas && datas.length){
                for(let x = 0; x <= datas.length-1; x++){
                    let { unique } = datas[x];
                    const dataChildren = datas[x].data;
    
                    if(unique == uniqueId){
                        datas[x].toggled = !datas[x].toggled;
                        datas[x].classList = 'toggling';

                        setTimeout( () => {
                            datas[x].classList = datas[x].toggled ? 'toggled' : '';
                        }, 300);
                        break;
                    }
    
                    if(dataChildren && typeof [] == typeof dataChildren && 0 !== dataChildren.length){
                        loop(dataChildren);
                    }
                }
            }
        }
        
        loop(data);
        
        this.setState({ 
            data 
        }, () => setTimeout( () => { this.setState({ data }); }, 300));
    }

    render() {
        const { data, defaultClass } = this.state;

        return (
            <div className={defaultClass}>
            {
                this.buildDataRecursive(data)
            }  
            </div>
        )
    }
}

export default Accordion;