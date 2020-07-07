import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class Cards extends React.Component {
    
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
        if (getDerivedStateFromPropsCheck(['defaultClass', 'itemsPerLine', 'data'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
                itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
                data: props.data && typeof [] == typeof props.data ? props.data : [],
            };
        }

        return null;
    }


    componentDidMount(){
        this.buildData();
    }

    buildData(){
        let { data, dataJsx, itemsPerLine } = this.state;
        let singleLines = [];
        let c = 0;
        data.map( singleData => {
            const { title, content, footer } = singleData;
            c++;

            singleLines.push(
                <div key={uuid()} className="card flex flex-column">
                    {
                        title && 
                        <div className="title">
                            {
                                title
                            }
                        </div>
                    }
                    {
                        content && 
                        <div className="content">
                            {
                                content
                            }
                        </div>
                    }
                    {
                        footer && 
                        <div className="footer">
                            {
                                footer
                            }
                        </div>
                    }
                </div>
            );

            if(c == itemsPerLine){

                dataJsx.push(
                    <div key={uuid()} className="cards-group flex">
                        {
                            singleLines
                        }
                    </div>
                );

                singleLines = [];
                c = 0;
            }
        });

        if(singleLines.length){
            dataJsx.push(
                <div key={uuid()} className="cards-group flex">
                    {
                        singleLines
                    }
                </div>
            );
        }

        this.setState({ dataJsx });
    }
    
    render() {
        let { dataJsx, defaultClass } = this.state;

        return (
            <div className={defaultClass}>
                {
                    dataJsx
                }
            </div>
        );
    }
}

export default Cards;
