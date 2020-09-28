import React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import loadStyle from '../internalFunctions/loadStyle';

class LoadOnScroll extends React.Component 
{

    constructor(props) {
        super(props);
        this.scrollEvent = this.scrollEvent.bind(this);
        this.buildData = this.buildData.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.removeScrollEvent = this.removeScrollEvent.bind(this);

        this.state = {
            /**
             * App
             */
            dataJsx: [],
            loading: false,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-load-on-scroll',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data && typeof [] == typeof props.data ? props.data : '',
            callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
            loadMoreLoadingIcon: props.loadMoreLoadingIcon ? props.loadMoreLoadingIcon : '',
            minify: typeof 8 == typeof props.minify ? props.minify : 0,
            scrollReference: typeof true == typeof props.scrollReference ? props.scrollReference : true
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'data', 'callback', 'loadMoreLoadingIcon', 'minify', 'scrollReference'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-load-on-scroll',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof [] == typeof props.data ? props.data : '',
                callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
                loadMoreLoadingIcon: props.loadMoreLoadingIcon ? props.loadMoreLoadingIcon : '',
                dataJsx: state.dataJsx,
                minify: typeof 8 == typeof props.minify ? props.minify : 0,
                scrollReference: typeof true == typeof props.scrollReference ? props.scrollReference : true
            };
        }

        return null;
    }


    componentDidMount(){
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { data, scrollReference } = this.state;

        if (this.scrollReference && scrollReference) {
            this.scrollReference.removeEventListener('scroll', this.scrollEvent);
            this.scrollReference.addEventListener('scroll', this.scrollEvent);
        }

        if(!scrollReference){
            document.removeEventListener('scroll', this.scrollEvent);
            document.addEventListener('scroll', this.scrollEvent);
        }

        this.buildData(data);
    }

    componentWillUnmount(){
        this.removeScrollEvent();
    }

    removeScrollEvent(){
        const { scrollReference } = this.state;

        if (this.scrollReference) {
            this.scrollReference.removeEventListener('scroll', this.scrollEvent);
        }

        if(!scrollReference){
            document.removeEventListener('scroll', this.scrollEvent);
        }
    }

    loadMore(){
        let { callback } = this.state;
        let data = [];
        
        if(callback){

            this.setState({
                loading: true
            }, async () => {
                data = await (callback)();

                if('break' == data){
                    this.removeScrollEvent();
                    return this.setState({ loading: false });                    
                }

                /**
                 * No more items to load
                 */
                if(!data){
                    this.removeScrollEvent();
                    this.setState({ loading: false });
                }
                else{
                    this.buildData(data);
                }
            });
        }
        else{
            this.removeScrollEvent();
            this.setState({ loading: false });
        }
    }

    buildData(data = []){
        let { dataJsx } = this.state;
        dataJsx.push(
            <div 
                key={uuid()} 
                className="section"
            >
                {
                    data
                }
            </div>
        );

        this.setState({ 
            dataJsx,
            loading: false
        }, () => {
            this.callbackRendered = true;
        });
    }

    scrollEvent(e){
        const { minify, scrollReference } = this.state;

        /**
         * Reference listener
         */
        const min = parseInt(minify);

        if(this.scrollReference && this.callbackRendered && scrollReference){
            /**
             * Scrolled to bottom - min
             */
            if (this.scrollReference.offsetHeight + this.scrollReference.scrollTop >= this.scrollReference.scrollHeight - min) {
                this.callbackRendered = false;
                this.loadMore(); 
            }
        }

        /**
         * Document listener
         */
        if(!scrollReference && document.body){
            /**
             * Scrolled to bottom - min
             */
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - min) {
                this.callbackRendered = false;
                this.loadMore(); 
            }
        }
    }

    
    render() {
        const { addClass, dataJsx, defaultClass, loading, loadMoreLoadingIcon, id, scrollReference } = this.state;

        return (
            <div 
                ref={ node => this.scrollReference = node}
                className={`${defaultClass} ${addClass} ${scrollReference ? '' : 'ignore' }`}
                id={id}
            >
                {
                    loading && loadMoreLoadingIcon   
                }
                {
                    dataJsx && dataJsx.map( i => i)
                }
            </div>
        );
    }
}

export default LoadOnScroll;
