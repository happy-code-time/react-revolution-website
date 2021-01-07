import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';
import loadStyle from '../internalFunctions/loadStyle';
import uuid from '../internalFunctions/internalUuid';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleMouseStart = this.handleMouseStart.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnd = this.handleMouseEnd.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.resizeView = this.resizeView.bind(this);

        this.state = {
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
            uuid: props.uuid && typeof '8' === typeof props.uuid ? props.uuid : `${uuid()}`,
            displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
            displayDots: typeof true == typeof props.displayDots ? props.displayDots : true,
            displayDotsIndex: typeof true == typeof props.displayDotsIndex ? props.displayDotsIndex : false,
            buttonsAlwaysVisible: typeof true == typeof props.buttonsAlwaysVisible ? props.buttonsAlwaysVisible : false,
            next: props.next ? props.next : '>',
            previous: props.previous ? props.previous : '<',
            // images root holder
            slidesTransform: `translate3d(-0px,0,0)`,
            slidesWidth: 100,
            // each single image holder
            slideWrapperWidth: '100%',
            // each single img tag
            imagesTransform: `translate3d(-0px,0,0)`,
            // current slide index
            index: 0,
            callbackMount: props.callbackMount && 'function' == typeof props.callbackMount ? props.callbackMount : undefined,
            callbackMountProps: props.callbackMountProps,
            imageAsBackground: typeof true == typeof props.imageAsBackground ? props.imageAsBackground : false,
        };

        this.slideWidth = 0;
        this.touchstartx = 0;
        this.touchmovex = 0;
        this.movex = 0;
        this.longTouch = false;

        this.mousemovex = 0;
        this.mousestartx = 0;

        this.blockMove = false;
        this.mouseClicksStart = 0;
        this.userMoving = false;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'data', 'next', 'previous', 'displayPagination', 'displayDots', 'displayDotsIndex', 'buttonsAlwaysVisible', 'callbackMount', 'callbackMountProps', 'imageAsBackground'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
                next: props.next ? props.next : '>',
                previous: props.previous ? props.previous : '<',
                displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
                displayDots: typeof true == typeof props.displayDots ? props.displayDots : true,
                displayDotsIndex: typeof true == typeof props.displayDotsIndex ? props.displayDotsIndex : false,
                buttonsAlwaysVisible: typeof true == typeof props.buttonsAlwaysVisible ? props.buttonsAlwaysVisible : false,
                callbackMount: props.callbackMount && 'function' == typeof props.callbackMount ? props.callbackMount : undefined,
                callbackMountProps: props.callbackMountProps,
                imageAsBackground: typeof true == typeof props.imageAsBackground ? props.imageAsBackground : false,
            };
        }

        return null;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);

        if (!this.state.data.length) {
            return;
        }

        this.setSlidesWidth();
        this.setResizeListener();
        this.bindUIEvents();
        this.slideWidth = this.getSlidersWidth();
        this.callbackMount();
    }

    async callbackMount(){
        const { callbackMount, callbackMountProps } = this.state;

        if(callbackMount){
            let index = await (callbackMount)(callbackMountProps).then(r => r).catch( e => null);

            if(typeof 8 === typeof index){
                /**
                 * User passed negative index value
                 */
                if(0 > index){
                    index = 0;
                }
                /**
                 * User passed index value heigher then the assed images array length
                 */
                if(index > this.state.data.length-1){
                    index = this.state.data.length-1;
                }
                
                this.setState({ index }, this.slide);
            }
        }
    }

    componentWillUnmount() {
        this.setResizeListener(false);
        this.bindUIEvents(false);
    }

    setResizeListener(attach = true) {
        window.removeEventListener('resize', this.resizeView);

        if (attach) {
            window.addEventListener('resize', this.resizeView);
        }
    }

    resizeView(e, doubleResize = true) {
        this.slideWidth = this.getSlidersWidth();
        this.setSlidesWidth();
        this.slide();

        if (doubleResize) {
            setTimeout(() => {
                this.resizeView(null, false);
            }, 300);
        }
    }

    setSlidesWidth() {
        this.setState({
            slidesWidth: this.getSlidersWidth() * this.state.data.length,
            slideWrapperWidth: (this.getSlidersWidth() * this.state.data.length) / this.state.data.length,
        });
    }

    getSlidersWidth() {
        if (this.sliderReference) {
            return this.sliderReference.getBoundingClientRect().width;
        }

        return 0;
    }

    /**
     * Remove & re-attach event handlers
     */
    bindUIEvents(attachListeners = true) {

        if (!this.sliderReference) {
            return;
        }

        // mobile
        this.sliderReference.removeEventListener('touchstart', this.handleTouchStart);
        this.sliderReference.removeEventListener('touchmove', this.handleTouchMove);
        this.sliderReference.removeEventListener('touchend', this.handleTouchEnd);
        // desktop
        this.sliderReference.removeEventListener('click', this.handleClick);
        this.sliderReference.removeEventListener('mousedown', this.handleMouseStart);

        if (attachListeners) {
            // mobile
            this.sliderReference.addEventListener('touchstart', this.handleTouchStart);
            this.sliderReference.addEventListener('touchmove', this.handleTouchMove);
            this.sliderReference.addEventListener('touchend', this.handleTouchEnd);
            // desktop
            this.sliderReference.addEventListener('click', this.handleClick);
            this.sliderReference.addEventListener('mousedown', this.handleMouseStart);
        }
    }

    /**
     * ##############################
     * Pager
     * ##############################
     */
    slide() {
        const { data, index } = this.state;

        if(data && data[index] && data[index].callback && 'function' == typeof data[index].callback){
            (data[index].callback)(index, data[index].callbackProps);
        }

        this.setState({
            dataTransform: `translate3d(-(${0})px,0,0)`,
            slidesTransform: `translate3d(-${index * this.state.slideWrapperWidth}px,0,0)`,
        });
    }

    slidePrevious() {
        let { index } = this.state;

        if (index === 0) {
            index = this.state.data.length;
        }

        index -= 1;
        this.setState({ index }, this.slide);
    }

    slideNext() {
        let { index } = this.state;

        if (index === this.state.data.length - 1) {
            index = -1;
        }

        index += 1;
        this.setState({ index }, this.slide);
    }

    setSlide(index) {

        if (typeof '8' == typeof index) {
            index = parseInt(index);
        }

        this.setState({ index }, this.slide);
    }

    /**
     * ##############################
     * Mouse
     * ##############################
     */
    handleMouseStart(e) {
        const self = this;
        e.preventDefault();
        this.mousestartx = e.layerX;
        this.mouseClicksStart = performance.now();
        this.blockMove = false;
        this.userMoving = false;

        // remove
        self.sliderReference.removeEventListener('mousemove', self.handleMouseMove);
        self.sliderReference.removeEventListener('mouseup', self.handleMouseEnd);
        self.sliderReference.removeEventListener('mouseleave', self.handleMouseLeave);
        // add
        self.sliderReference.addEventListener('mousemove', self.handleMouseMove);
        self.sliderReference.addEventListener('mouseup', self.handleMouseEnd);
        self.sliderReference.addEventListener('mouseleave', self.handleMouseLeave);

        setTimeout(() => {
            if (!self.userMoving || self.blockMove) {
                self.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
            }
        }, 200);
    }

    handleMouseMove(event) {

        this.userMoving = true;

        if (this.blockMove) {
            this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
            return;
        }
        const { index } = this.state;
        // Continuously return mouse position.
        this.mousemovex = event.layerX;
        // Calculate distance to translate holder.
        this.movex = index * this.slideWidth + (this.mousestartx - this.mousemovex);
        // let panx = 100 - this.movex / 6;

        if (this.movex < this.getSlidersWidth() * (this.state.data.length - 1)) {
            // Makes the holder stop moving when there is no more content.
            return this.setState({ slidesTransform: `translate3d(-${this.movex}px,0,0)` });
        }

        // if (panx <= 0) {
        //     // Corrects an edge-case problem where the background image moves without the container moving.
        //     this.setState({ dataTransform: `translate3d(-(${0})px,0,0)` });
        // }
    }

    handleMouseEnd() {
        this.blockMove = true;

        if (115 >= performance.now() - this.mouseClicksStart || !this.userMoving) {
            this.userMoving = false;
            this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
            this.sliderReference.removeEventListener('mouseleave', this.handleMouseLeave);
            return;
        }

        let { index } = this.state;
        const absMove = Math.abs(index * this.slideWidth - this.movex);

        if (absMove > 50) {
            if (this.movex > index * this.slideWidth && index < this.state.data.length - 1) {
                index += 1;
            } else if (this.movex < index * this.slideWidth && index > 0) {
                index -= 1;
            }
        }

        this.userMoving = false;
        this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
        this.sliderReference.removeEventListener('mouseleave', this.handleMouseLeave);

        this.setState({ index }, () => {
            this.slide();
            this.bindUIEvents(true);
        });
    }

    handleMouseLeave() {
        let { index } = this.state;
        const absMove = Math.abs(index * this.slideWidth - this.movex);
        this.blockMove = true;

        if (this.userMoving) {

            if (absMove > 50) {
                if (this.movex > index * this.slideWidth && index < this.state.data.length - 1) {
                    index += 1;
                } else if (this.movex < index * this.slideWidth && index > 0) {
                    index -= 1;
                }
            }

            this.blockMove = true;
            this.userMoving = false;
            this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);

            this.setState({ index }, () => {
                this.slide();
                this.bindUIEvents(true);
            });
        }
    }

    handleClick() {
        const self = this;
        this.blockMove = true;
        this.userMoving = false;

        setTimeout(() => {
            self.blockMove = false;
        }, 100);
    }

    /**
     * ##############################
     * TOUCH
     * ##############################
     */
    handleTouchStart(event) {
        const self = this;
        this.longTouch = false;

        setTimeout(function () {
            self.longTouch = true;
        }, 250);

        // Get the original touch position.
        this.touchstartx = event.touches[0].pageX;
    }

    handleTouchMove(event) {
        let { index } = this.state;
        // Continuously return touch position.
        this.touchmovex = event.touches[0].pageX;
        // Calculate distance to translate holder.
        this.movex = index * this.slideWidth + (this.touchstartx - this.touchmovex);
        // Defines the speed the data should move at.
        let panx = 100 - this.movex / 6;

        if (this.movex < this.getSlidersWidth() * (this.state.data.length - 1)) {
            // Makes the holder stop moving when there is no more content.
            this.setState({ slidesTransform: `translate3d(-${this.movex}px,0,0)` });
        }

        if (panx < 50) {
            // Corrects an edge-case problem where the background image moves without the container moving.
            this.setState({ dataTransform: `translate3d(-(${panx})px,0,0)` });
        }
    }

    handleTouchEnd() {
        let { index } = this.state;
        // Calculate the distance swiped.
        const absMove = Math.abs(index * this.slideWidth - this.movex);
        // Calculate the index. All other calculations are based on the index.
        if (absMove > this.slideWidth / 2 || this.longTouch === false) {
            if (this.movex > index * this.slideWidth && index < this.state.data.length - 1) {
                index += 1;
            } else if (this.movex < index * this.slideWidth && index > 0) {
                index -= 1;
            }
        }
        // Move and animate the elements.
        let value = index * this.slideWidth;

        // If the value is higher then the max available sliders height
        if (value > this.getSlidersWidth() * (this.state.data.length - 1)) {
            value -= (this.getSlidersWidth() * this.state.data.length) / this.state.data.length;
        }

        this.setState({ index }, this.slide);
    }

    getButtonPreviousJsx() {
        const { displayPagination, buttonsAlwaysVisible, previous, data, index } = this.state;

        if (!displayPagination) {
            return;
        }

        if (index > 0 && 2 <= data.length || buttonsAlwaysVisible) {
            return (
                <span className="button-previous" onClick={() => this.slidePrevious()}>
                    {
                        previous
                    }
                </span>
            );
        }
    }

    getButtonNextJsx() {
        const { displayPagination, buttonsAlwaysVisible, next, data, index } = this.state;

        if (!displayPagination) {
            return;
        }

        if ((index < data.length - 1 && 2 <= data.length) || buttonsAlwaysVisible) {
            return (
                <span className="button-next" onClick={() => this.slideNext()}>
                    {
                        next
                    }
                </span>
            );
        }
    }

    getDotsJsx() {
        const { displayDots, data, displayDotsIndex, index } = this.state;

        if (2 > data.length || !displayDots) {
            return;
        }

        return (
            <div className="pagination">
                <div className="actions">
                    {
                        data.map((x, i) => {
                            return (
                                <span
                                    className={`action ${index === i ? 'active' : ''}`}
                                    onClick={() => this.setSlide(i)}
                                    key={`paginations-dot-${i}`}
                                >
                                    {
                                        displayDotsIndex && `${i + 1}`
                                    }
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    render() {
        const { addClass, defaultClass, id, uuid, data, slidesWidth, imageAsBackground, slidesTransform, imagesTransform, slideWrapperWidth } = this.state;

        return (
            <div className={`${defaultClass} ${addClass} animate`} id={id}>
                {/* Need this wrapper to set a z-index lower then the page to avoid (on desktop the version) to execute the mousedown function (while using the pager). */}
                {
                    this.getButtonPreviousJsx()
                }
                <div key={`slide-wrapper-${uuid}`} className="wrapper" ref={(node) => (this.sliderReference = node)}>
                    <div
                        className={`slides user-select-none animate`}
                        style={{
                            transform: `${slidesTransform}`,
                            width: `${slidesWidth}px`,
                        }}
                    >
                        {0 !== data.length && data.map((s, i) => {
                            
                            if(typeof {} !== typeof s || undefined == s.image || typeof '8' !== typeof s.image){
                                return;
                            }

                            const { image, data } = s;

                            return (
                                <div
                                    key={`${uuid}-${i}`}
                                    className="slide-wrapper"
                                    style={{
                                        width: `${slideWrapperWidth}px`,
                                    }}
                                >
                                    <div className="slide">
                                        {
                                            imageAsBackground &&
                                            <div
                                                className={`slide-image slide-image-data-wrapper animate`}
                                                style={{
                                                    transform: `${imagesTransform}`,
                                                    backgroundImage: `url(${image})`
                                                }}
                                            >
                                                {
                                                    data &&
                                                    <div className='slide-image-data'>
                                                        {
                                                            data
                                                        }
                                                    </div>
                                                }
                                            </div>   
                                        }
                                        {
                                            !imageAsBackground &&
                                            <img
                                                className={`slide-image animate`}
                                                src={image}
                                                style={{
                                                    transform: `${imagesTransform}`,
                                                }}
                                            />   
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {
                    this.getDotsJsx()
                }
                {
                    this.getButtonNextJsx()
                }
            </div>
        );
    }
}

export default Slider;
