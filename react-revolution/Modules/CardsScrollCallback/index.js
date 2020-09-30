import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import loadStyle from '../internalFunctions/loadStyle';

class CardsScrollCallback extends React.Component 
{

    constructor(props) {
        super(props);
        this.scrollEvent = this.scrollEvent.bind(this);
        this.buildData = this.buildData.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.removeScrollEvent = this.removeScrollEvent.bind(this);
        this.resize = this.resize.bind(this);

        this.state = {
            /**
             * App
             */
            dataJsx: [],
            loading: false,
            isMinified: false,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards-scroll-callback',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
            data: props.data && typeof [] == typeof props.data ? props.data : [],
            loadMoreCallback: (props.loadMoreCallback && 'function' == typeof props.loadMoreCallback) ? props.loadMoreCallback : undefined,
            loadMoreLoadingIcon: props.loadMoreLoadingIcon ? props.loadMoreLoadingIcon : '',
            mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
            minify: typeof 8 == typeof props.minify ? props.minify : 0,
        };
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { data, mediaBreak } = this.state;

        if (this.cardsReference) {
            this.cardsReference.removeEventListener('scroll', this.scrollEvent);
            this.cardsReference.addEventListener('scroll', this.scrollEvent);
        }

        this.buildData(data);

        if(mediaBreak){
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }

    componentWillUnmount() {
        this.removeScrollEvent();

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
                }, this.rerenderItems);
            }
        }
        /**
         * Default
         */
        else{
            if(isMinified){
                this.setState({ 
                    isMinified: false 
                }, this.rerenderItems);
            }
        }
    }

    removeScrollEvent() {
        if (this.cardsReference) {
            this.cardsReference.removeEventListener('scroll', this.scrollEvent);
        }
    }

    loadMore() {
        let { loadMoreCallback } = this.state;
        let data = [];

        if (loadMoreCallback) {

            this.setState({
                loading: true
            }, async () => {
                data = await (loadMoreCallback)();

                /**
                 * No more items to load
                 */
                if (!data || 0 == data.length || 'break' == data) {
                    this.removeScrollEvent();
                    this.setState({ loading: false });
                }
                else {
                    this.buildData(data);
                }
            });
        }
        else {
            this.removeScrollEvent();
            this.setState({ loading: false });
        }
    }

    buildData(data = []) {
        let { dataJsx } = this.state;

        for (let x = 0; x <= data.length - 1; x++) {

            const { title, content, footer } = data[x];

            dataJsx.push(
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
        }

        this.setState({
            dataJsx,
            loading: false
        });
    }

    scrollEvent(e) {
        const { minify } = this.state;
        const min = parseInt(minify);

        if (this.cardsReference) {
            /**
             * Bottom reached
             */
            if (this.cardsReference.offsetHeight + this.cardsReference.scrollTop >= this.cardsReference.scrollHeight - min) {
                this.loadMore();
            }
        }
    }

    returnDataJsx(dataJsx) {
        const { itemsPerLine } = this.state;
        const root = [];
        let cards = [];
        let c = 0;

        for (let x = 0; x <= dataJsx.length - 1; x++) {

            cards.push(dataJsx[x]);
            c++;

            if (c == itemsPerLine) {
                root.push(
                    <div key={uuid()} className='cards-group flex'>
                        {
                            cards
                        }
                    </div>
                );
                cards = [];
                c = 0;
            }

        }
        if (cards.length) {
            root.push(
                <div key={uuid()} className='cards-group flex'>
                    {
                        cards
                    }
                </div>
            );
        }

        return root;
    }

    render() {
        const { addClass, dataJsx, defaultClass, loading, loadMoreLoadingIcon, id, itemsPerLine, isMinified } = this.state;
        let cards = [];
        let c = 0;
        
        return (
            <div
                ref={node => this.cardsReference = node}
                className={`${defaultClass} ${addClass}`}
                id={id}
            >
                {
                    loading && loadMoreLoadingIcon
                }
                {
                    dataJsx && 0 !== dataJsx.length &&

                    dataJsx.map( (singleCard, loop) => {

                        cards.push(singleCard);
                        c++;

                        if (c == itemsPerLine) {
                            let data = cards;
                            c = 0;
                            cards = [];

                            return (
                                <div key={uuid()} className={`cards-group flex ${isMinified ? 'flex-column' : 'flex-row'}`}>
                                    {
                                        data
                                    }
                                </div>
                            )
                        }

                        if (cards.length && loop == dataJsx.length-1) {
                            let data = cards;
                            c = 0;
                            cards = [];

                            return (
                                <div key={uuid()} className={`cards-group flex ${isMinified ? 'flex-column' : 'flex-row'}`}>
                                    {
                                        data
                                    }
                                </div>
                            )
                        }
                    })

                }
            </div>
        );
    }
}

export default CardsScrollCallback;
