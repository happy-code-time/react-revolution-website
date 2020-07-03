import * as React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class CardsScroll extends React.Component {

    constructor(props) {
        super(props);
        this.scrollEvent = this.scrollEvent.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.removeScrollEvent = this.removeScrollEvent.bind(this);

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
            loadMoreDefaultItems: props.loadMoreDefaultItems && typeof 8 == typeof props.loadMoreDefaultItems ? props.loadMoreDefaultItems : 3,
            loadMoreAddItems: props.loadMoreAddItems && typeof 8 == typeof props.loadMoreAddItems ? props.loadMoreAddItems : 3,
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
        if (getDerivedStateFromPropsCheck(['defaultClass', 'itemsPerLine', 'data', 'loadMoreDefaultItems', 'loadMoreAddItems'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
                itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
                loadMoreDefaultItems: props.loadMoreDefaultItems && typeof 8 == typeof props.loadMoreDefaultItems ? props.loadMoreDefaultItems : 3,
                loadMoreAddItems: props.loadMoreAddItems && typeof 8 == typeof props.loadMoreAddItems ? props.loadMoreAddItems : 3,
                data: props.data && typeof [] == typeof props.data ? props.data : [],
            };
        }

        return null;
    }


    componentDidMount(){
        if (this.cardsReference) {
            this.cardsReference.removeEventListener('scroll', this.scrollEvent);
            this.cardsReference.addEventListener('scroll', this.scrollEvent);
        }

        this.loadMore();
    }

    componentWillUnmount(){
        this.removeScrollEvent();
    }

    removeScrollEvent(){
        if (this.cardsReference) {
            this.cardsReference.removeEventListener('scroll', this.scrollEvent);
        }
    }

    loadMore(isScrollEvent = false){
        let { data, dataJsx, itemsPerLine, loadMoreDefaultItems, loadMoreAddItems } = this.state;
        let singleLines = [];
        let c = 0;

        if(isScrollEvent){
            const start = dataJsx.length*itemsPerLine;
            const end = start + loadMoreAddItems;
            data = data.slice(start, end);

            /**
             * No more items to load
             */
            if(0 == data.length && this.cardsReference){
                return this.removeScrollEvent();
            }
        }

        for(let x = 0; x <= data.length-1; x++){

            if(x >= loadMoreDefaultItems){
                break;
            }

            const { title, content, footer } = data[x];
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
        }

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

    scrollEvent(e){
        if(this.cardsReference){
            /**
             * Bottom reached
             */ 
            if (this.cardsReference.offsetHeight + this.cardsReference.scrollTop >= this.cardsReference.scrollHeight) {
                this.loadMore(true); 
            }
        }
    }

    
    render() {
        let { dataJsx, defaultClass } = this.state;

        return (
            <div 
                ref={ node => this.cardsReference = node}
                className={defaultClass}
            >
                {
                    dataJsx
                }
            </div>
        );
    }
}

export default CardsScroll;
