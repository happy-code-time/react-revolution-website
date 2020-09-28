import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import loadStyle from '../internalFunctions/loadStyle';

class Cards extends React.Component 
{
    
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
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
            data: props.data && typeof [] == typeof props.data ? props.data : [],
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
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'itemsPerLine', 'data'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
                data: props.data && typeof [] == typeof props.data ? props.data : [],
            };
        }

        return null;
    }

    componentDidMount(){
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { mediaBreak } = this.state;
        this.buildData();

        if(mediaBreak){
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }

    componentWillUnmount(){
        const { mediaBreak } = this.state;

        if(mediaBreak){
            window.removeEventListener('resize', this.resize);
        }
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

    buildData(){
        const dataJsx = [];
        let { data, itemsPerLine, isMinified } = this.state;

        let singleLines = [];
        let c = 0;
        const clsCardsHolder = `group flex ${isMinified ? 'flex-column isMinified' : 'flex-row'}`;

        data.map( singleData => {
            const { title, content, footer, props } = singleData;
            c++;

            let cls = 'card flex flex-column';

            if(props){
                const { className } = props;

                if(className && typeof '8' == typeof className){
                    cls = `${cls} ${className}`;
                    delete props.className;
                }
            }
            
            singleLines.push(
                <div key={uuid()} className={cls} {...props}>
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
                    <div key={uuid()} className={`${clsCardsHolder}`}>
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
                <div key={uuid()} className={`${clsCardsHolder}`}>
                    {
                        singleLines
                    }
                </div>
            );
        }

        this.setState({ dataJsx });
    }
    
    render() {
        const { addClass, dataJsx, defaultClass, id } = this.state;

        return (
            <div className={`${defaultClass} ${addClass}`} id={id}>
                {
                    dataJsx
                }
            </div>
        );
    }
}

export default Cards;
