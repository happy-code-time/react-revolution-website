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
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.processMouseDown = this.processMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.resizeView = this.resizeView.bind(this);
        this.mouseDownListeners = this.mouseDownListeners.bind(this);
        this.mouseMoveListeners = this.mouseMoveListeners.bind(this);
        
        this.state = {
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
            slidersUuid: props.slidersUuid && typeof '8' === typeof props.slidersUuid ? props.slidersUuid : `${uuid()}`,
            displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
            slideAfterMove: typeof 8 == typeof props.slideAfterMove ? props.slideAfterMove : 50,
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
        this.movex = 0;
        this.longTouch = false;

        this.mousestartx = 0;

        this.blockMove = false;
        this.mouseClicksStart = 0;
        this.userMoving = false;

        this.oldX = 0;
        this.mouseDirection = 'r';
        this.abs = 0;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'slideAfterMove', 'id', 'data', 'next', 'previous', 'displayPagination', 'displayDots', 'displayDotsIndex', 'buttonsAlwaysVisible', 'callbackMount', 'callbackMountProps', 'imageAsBackground'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
                next: props.next ? props.next : '>',
                previous: props.previous ? props.previous : '<',
                slideAfterMove: typeof 8 == typeof props.slideAfterMove ? props.slideAfterMove : 50,
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

        this.slideWidth = this.getSlidersWidth();
        this.setSlidesWidth();
        this.setResizeListener();
        this.callbackMount();
        this.mouseDownListeners();
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
        this.mouseDownListeners(false);
        this.mouseMoveListeners(false);
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

        if (this.wrapper) {
            return this.wrapper.getBoundingClientRect().width;
        }

        return 0;
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
    setDirection(pageX = 0){
        if (this.oldX < pageX) {
            this.mouseDirection = 'l';
        }
        else {
            this.mouseDirection = 'r';
        }
        this.oldX = pageX;
    }

    getDirection(){
        return this.mouseDirection;
    }

    setAbs(abs){
        this.abs = abs;
    }

    getAbs(){
        return this.abs;
    }

    allowSlideRight(){
        return 'r' == this.getDirection() && this.state.index < this.state.data.length - 1;
    }

    allowSlideLeft(){
        return 'l' == this.getDirection() && 0 < this.state.index;
    }
    
    /**
     * Rect does not supports to give the layerX value
     * so we have to add the listener manually
     * https://reactjs.org/docs/events.html#mouse-events
     * 
     * @param {boolean} reattach 
     */
    mouseDownListeners(reattach = true){
        this.wrapper.removeEventListener('mousedown', this.processMouseDown);
        
        if(reattach){
            this.wrapper.addEventListener('mousedown', this.processMouseDown);
        }
    }

    mouseMoveListeners(reattach = true){
        this.wrapper.removeEventListener('mousemove', this.handleMouseMove);
        
        if(reattach){
            this.wrapper.addEventListener('mousemove', this.handleMouseMove);
        }
    }

    processMouseDown(e){
        e.preventDefault();
        this.handleMouseDown(e)
    }

    handleMouseDown(event) {
        this.mousestartx = event.layerX;
        this.mouseClicksStart = performance.now();
        this.blockMove = false;
        this.userMoving = false;
        this.mouseMoveListeners();

        setTimeout(() => {
            if (!this.userMoving || this.blockMove) {
                this.mouseMoveListeners(false);
            }
        }, 200);
    }

    handleMouseMove(event) {
        this.userMoving = true;

        if (this.blockMove) {
            this.mouseMoveListeners(false);
            return;
        }

        const { index } = this.state;

        // Calculate distance to translate holder.
        this.movex = index * this.slideWidth + (this.mousestartx - event.layerX);
        // mouse direction
        this.setDirection(event.pageX);
        // save mouse movement in px value for mouseUp or leave
        this.setAbs(Math.abs(index * this.slideWidth - this.movex));

        if (this.movex < this.slideWidth * (this.state.data.length - 1)) {
            // Inline style = avoid flipping while fast mouse moving
            this.transformer.style.transform = `translate3d(-${this.movex}px,0,0)`;
        }
    }

    handleMouseUp() {
        this.blockMove = true;

        if (115 >= performance.now() - this.mouseClicksStart || !this.userMoving) {
            this.userMoving = false;
            this.mouseMoveListeners(false);
            return;
        }

        let { index, slideAfterMove } = this.state;

        if (this.getAbs() > slideAfterMove) {
            if (this.allowSlideRight()) {
                index += 1;
            }
            if (this.allowSlideLeft()) {
                index -= 1;
            }
        }

        this.userMoving = false;
        this.mouseMoveListeners(false);
        this.setState({ index }, this.slide);
    }

    handleMouseLeave() {
        let { index, slideAfterMove } = this.state;
        this.blockMove = true;

        if (this.userMoving) {
            this.mouseMoveListeners(false);

            if (this.getAbs() > slideAfterMove) {
                if (this.allowSlideRight()) {
                    index += 1;
                }
                if (this.allowSlideLeft()) {
                    index -= 1;
                }
            }

            this.userMoving = false;
            this.mouseMoveListeners(false);
            this.setState({ index }, this.slide);
        }
    }

    handleClick() {
        this.blockMove = true;
        this.userMoving = false;
        this.mouseMoveListeners(false);

        setTimeout(() => {
            this.blockMove = false;
        }, 100);
    }

    /**
     * ##############################
     * TOUCH
     * ##############################
     */
    handleTouchStart(event) {
        this.longTouch = false;

        setTimeout(function () {
            this.longTouch = true;
        }, 250);

        // Get the original touch position.
        this.touchstartx = event.touches[0].pageX;
    }

    handleTouchMove(event) {
        let { index } = this.state;
        // Calculate distance to translate holder.
        this.movex = index * this.slideWidth + (this.touchstartx - event.touches[0].pageX);
        // mouse direction
        this.setDirection(event.touches[0].pageX);
        // save mouse movement in px value for mouseUp or leave
        this.setAbs(Math.abs(index * this.slideWidth - this.movex));

        if (this.movex < this.slideWidth * (this.state.data.length - 1)) {
            // Inline style = avoid flipping while fast mouse moving
            this.transformer.style.transform = `translate3d(-${this.movex}px,0,0)`;
        }
    }

    handleTouchEnd() {
        let { index, slideAfterMove } = this.state;
        this.blockMove = true;

        if (this.userMoving) {
            this.mouseMoveListeners(false);

            if (this.getAbs() > slideAfterMove) {
                if (this.allowSlideRight()) {
                    index += 1;
                }
                if (this.allowSlideLeft()) {
                    index -= 1;
                }
            }

            this.userMoving = false;
            this.mouseMoveListeners(false);
            this.setState({ index }, this.slide);
        }
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

        const getDotFromData = (i) => {
            if (data && undefined !== data[i] && undefined !== data[i].dot) {
                return data[i].dot;
            }

            return null;
        };

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
                                    {
                                        !displayDotsIndex && getDotFromData(i)
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
        const { addClass, defaultClass, id, slidersUuid, data, slidesWidth, imageAsBackground, slidesTransform, imagesTransform, slideWrapperWidth } = this.state;

        return (
            <div className={`${defaultClass} ${addClass} animate`} id={id}>
                {/* Need this wrapper to set a z-index lower then the page to avoid (on desktop the version) to execute the mousedown function (while using the pager). */}
                {
                    this.getButtonPreviousJsx()
                }
                <div 
                    key={`wrapper-${slidersUuid}`} 
                    className="wrapper" 
                    ref={(node) => (this.wrapper = node)}
                    // Mobile
                    onTouchStart={ (e) => this.handleTouchStart(e)}
                    onTouchMove={ (e) => this.handleTouchMove(e)}
                    onTouchEnd={ (e) => this.handleTouchEnd(e)}
                    // Desktop
                    onClick={ (e) => this.handleClick(e)}
                    onMouseUp={ (e) => this.handleMouseUp(e)}
                    onMouseLeave={ (e) => this.handleMouseLeave(e)}
                >
                    <div
                        ref={(node) => (this.transformer = node)}
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
                                key={`slide-wrapper-${slidersUuid}-${i}`}
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
