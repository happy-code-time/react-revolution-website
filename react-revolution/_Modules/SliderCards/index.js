import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';
import loadStyle from '../internalFunctions/loadStyle';
import uuid from '../internalFunctions/internalUuid';

class SliderCards extends React.Component {
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
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider-cards',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
            slidersUuid: props.uuid && typeof '8' === typeof props.uuid ? props.uuid : `${uuid()}`,
            displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
            next: props.next ? props.next : '>',
            previous: props.previous ? props.previous : '<',
            docWidth: document.documentElement.getBoundingClientRect().width,
            // data root holder
            slidesTransform: `translate3d(-0px,0,0)`,
            slidesWidth: 100,
            // each single image holder
            slideWrapperWidth: '100%',
            // each single img tag
            dataTransform: `translate3d(-0px,0,0)`,
            // cards count in single row
            itemsS: props.itemsS && typeof 8 == typeof props.itemsS ? props.itemsS : 2,
            itemsL: props.itemsL && typeof 8 == typeof props.itemsL ? props.itemsL : 3,
            itemsXL: props.itemsXL && typeof 8 == typeof props.itemsXL ? props.itemsXL : 3,
            // cards count based on document width
            resizeS: props.resizeS && typeof 8 == typeof props.resizeS ? props.resizeS : 768,
            resizeL: props.resizeL && typeof 8 == typeof props.resizeL ? props.resizeL : 1024,
            resizeXL: props.resizeXL && typeof 8 == typeof props.resizeXL ? props.resizeXL : 1260,
            // single card width
            cardWidthS: props.cardWidthS && typeof 8 == typeof props.cardWidthS ? props.cardWidthS : 300, 
            cardWidthL: props.cardWidthL && typeof 8 == typeof props.cardWidthL ? props.cardWidthL : 300,
            cardWidthXL: props.cardWidthXL && typeof 8 == typeof props.cardWidthXL ? props.cardWidthXL : 330, 
            // defaults
            cardWidth: props.cardWidthS && typeof 8 == typeof props.cardWidthS ? props.cardWidthS : 300, 
            itemsPerLine: props.itemsS && typeof 8 == typeof props.itemsS ? props.itemsS : 2,
            // items slide
            index: 0,
            // items to slide on button action
            slideItems: props.slideItemsS && typeof 8 == typeof props.slideItemsS ? props.slideItemsS : 2,
            slideItemsS: props.slideItemsS && typeof 8 == typeof props.slideItemsS ? props.slideItemsS : 2,
            slideItemsL: props.slideItemsL && typeof 8 == typeof props.slideItemsL ? props.slideItemsL : 3,
            slideItemsXL: props.slideItemsXL && typeof 8 == typeof props.slideItemsXL ? props.slideItemsXL : 3,
        };

        this.slideWidth = 0;
        this.touchstartx = 0;
        this.touchmovex = 0;
        this.movex = 0;
        this.longTouch = false;

        this.mousestartx = 0;

        this.blockMove = false;
        this.userMoving = false;
        this.mouseClicksStart = 0;

        this.oldX = 0;
        this.mouseDirection = undefined;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['itemsS', 'itemsL', 'itemsXL', 'resizeS', 'resizeL', 'resizeXL', 'slideItemsS', 'slideItemsL','slideItemsXL', 'addClass', 'defaultClass', 'id', 'data', 'next', 'previous', 'displayPagination'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider-cards',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
                next: props.next ? props.next : '>',
                previous: props.previous ? props.previous : '<',
                displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
                // cards count in single row
                itemsS: props.itemsS && typeof 8 == typeof props.itemsS ? props.itemsS : 2,
                itemsL: props.itemsL && typeof 8 == typeof props.itemsL ? props.itemsL : 3,
                itemsXL: props.itemsXL && typeof 8 == typeof props.itemsXL ? props.itemsXL : 3,
                // cards count based on document width
                resizeS: props.resizeS && typeof 8 == typeof props.resizeS ? props.resizeS : 768,
                resizeL: props.resizeL && typeof 8 == typeof props.resizeL ? props.resizeL : 1024,
                resizeXL: props.resizeXL && typeof 8 == typeof props.resizeXL ? props.resizeXL : 1140,
                // single card width
                cardWidthS: props.cardWidthS && typeof 8 == typeof props.cardWidthS ? props.cardWidthS : 300, 
                cardWidthL: props.cardWidthL && typeof 8 == typeof props.cardWidthL ? props.cardWidthL : 300,
                cardWidthXL: props.cardWidthXL && typeof 8 == typeof props.cardWidthXL ? props.cardWidthXL : 330, 
                slideItemsS: props.slideItemsS && typeof 8 == typeof props.slideItemsS ? props.slideItemsS : 2,
                slideItemsL: props.slideItemsL && typeof 8 == typeof props.slideItemsL ? props.slideItemsL : 3,
                slideItemsXL: props.slideItemsXL && typeof 8 == typeof props.slideItemsXL ? props.slideItemsXL : 3
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
        this.bindUIEvents();
        this.setResizeListener();
        this.slideWidth = this.getSlidersWidth();

        setTimeout( () => {
            this.resizeView();
        }, 300);
    }

    componentWillUnmount() {
        this.bindUIEvents(false);
        this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
        this.sliderReference.removeEventListener('mouseup', this.handleMouseEnd);
        document.removeEventListener('mouseup', this.handleMouseEnd);
    }

    setResizeListener(attach = true) {
        window.removeEventListener('resize', this.resizeView);

        if (attach) {
            window.addEventListener('resize', this.resizeView);
        }

        this.resizeView();
    }

    resizeView() {
        this.slideWidth = this.getSlidersWidth();
        this.setSlidesWidth();
        const { itemsS, itemsL, itemsXL, resizeS, resizeL, resizeXL, cardWidthS, cardWidthL, cardWidthXL, slideItemsS, slideItemsL, slideItemsXL } = this.state;
        const docWidth = document.documentElement.getBoundingClientRect().width;

        // if (docWidth > 1140 && 4 !== itemsPerLine) {
        if (docWidth > resizeXL) {
            return this.setState({ itemsPerLine: itemsXL, cardWidth: cardWidthXL, slideItems: slideItemsS, index: 0}, this.slide);
        }

        // if (docWidth < 1140 && docWidth >= 768 && 3 !== itemsPerLine) {
        if (docWidth < resizeXL && docWidth >= resizeL) {
            return this.setState({ itemsPerLine: itemsL, cardWidth: cardWidthL, slideItems: slideItemsL, index: 0}, this.slide);
        }

        // if (docWidth < 768 && 2 !== itemsPerLine) {
        if (docWidth < resizeS) {
            return this.setState({ itemsPerLine: itemsS, cardWidth: cardWidthS, slideItems: slideItemsXL, index: 0 }, this.slide);
        }
    }

    setSlidesWidth() {
        this.setState({
            slidesWidth: this.getSlidersWidth() * this.getDataLength(),
            slideWrapperWidth: (this.getSlidersWidth() * this.getDataLength()) / this.getDataLength(),
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
        this.sliderReference.removeEventListener('touchcancel', this.handleTouchEnd);
        // desktop
        this.sliderReference.removeEventListener('click', this.handleClick);
        this.sliderReference.removeEventListener('dblclick', this.handleClick);
        this.sliderReference.removeEventListener('mousedown', this.handleMouseStart);

        if (attachListeners) {
            // mobile
            this.sliderReference.addEventListener('touchstart', this.handleTouchStart);
            this.sliderReference.addEventListener('touchmove', this.handleTouchMove);
            this.sliderReference.addEventListener('touchend', this.handleTouchEnd);
            this.sliderReference.addEventListener('touchcancel', this.handleTouchEnd);
            // desktop
            this.sliderReference.addEventListener('dblclick', this.handleClick);
            this.sliderReference.addEventListener('click', this.handleClick);
            this.sliderReference.addEventListener('mousedown', this.handleMouseStart);
        }
    }

    /**
     * ##############################
     * Pagination
     * ##############################
     */
    setSlide(activeIndex) {

        if (typeof '8' == typeof activeIndex) {
            activeIndex = parseInt(activeIndex);
        }

        this.setState({
            index: activeIndex
        }, this.slide);
    }
    
    slide() {
        const { index, cardWidth } = this.state;
        let width = (index*cardWidth)+(index*(this.getCardsMargin()*2));

        if(index == 0){
            width = 0;
        }

        const maxWidth = (this.getMaxSlides()*cardWidth)+(this.getMaxSlides()*this.getCardsMargin())-(this.getCardsMargin()*2);

        if(width > maxWidth){
            width = maxWidth;
        }

        this.setState({
            dataTransform: `translate3d(-(${0})px,0,0)`,
            slidesTransform: `translate3d(-${width}px,0,0)`,
        });
    }

    slidePrevious(){
        let { index, slideItems } = this.state;

        if(index !== 0){
            index -= slideItems;

            if(0 > index){
                index = 0;
            }
        }
        else{
            index = 0;
        }

        this.setState({ index }, this.slide);
    }

    getMaxSlides(){
        const { data, itemsPerLine, slideItems } = this.state;
        return (data.length-1+slideItems)-itemsPerLine;
    }

    slideNext(){
        let { index, slideItems } = this.state;
        let maxIndex = this.getMaxSlides();

        if(index == 0){
            index = slideItems;
        }
        else{
            index += slideItems;
        }

        if(index > maxIndex){
            index = maxIndex;
        }

        this.setState({ index }, this.slide);
    }

    getButtonPreviousJsx() {
        const { displayPagination, previous, index } = this.state;

        if (!displayPagination) {
            return;
        }

        if (index > 0 && 2 <= this.getDataLength()) {

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
        const { displayPagination, next, index, cardWidth } = this.state;

        if (!displayPagination) {
            return;
        }

        const width = (index*cardWidth)+(index*(this.getCardsMargin()*2));
        const maxWidth = (this.getMaxSlides()*cardWidth)+(this.getMaxSlides()*this.getCardsMargin())-cardWidth;

        if(index < this.getMaxSlides() && width < maxWidth){
            return (
                <span className="button-next" onClick={() => this.slideNext()}>
                    {
                        next
                    }
                </span>
            );
        }
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
        
        let { index, cardWidth } = this.state;
        // Calculate distance to translate holder.
        const currentWidth = (index*cardWidth)+(index*(this.getCardsMargin()*2));
        this.movex = currentWidth + (this.mousestartx - event.layerX);

        // mouse direction
        if(this.oldX < event.pageX){
            this.mouseDirection = 'l';
        }
        else{
            this.mouseDirection = 'r';
        }
        // save current mouse directions x
        this.oldX = event.pageX;
        // max x movement
        const maxMove = (this.getMaxSlides()*cardWidth)+(this.getMaxSlides()*(this.getCardsMargin()*2));

        if(this.movex < maxMove){
            this.setState({ slidesTransform: `translate3d(-${this.movex}px,0,0)` });
        }
    }

    handleMouseEnd() {
        this.blockMove = true;

        if (115 >= performance.now() - this.mouseClicksStart || !this.userMoving) {
            this.userMoving = false;
            this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
            this.sliderReference.removeEventListener('mouseleave', this.handleMouseLeave);
            this.oldX = 0;
            return;
        }

        let { index, slideItems } = this.state;
        const absMove = Math.abs(index * this.slideWidth - this.movex);

        if (absMove > 10) {
            /**
             * Move forwards (right)
             */
            if ('r' == this.mouseDirection) {
                index += slideItems;

                if(index > this.getMaxSlides()){
                    index = this.getMaxSlides();
                }
            } 
            /**
             * Move backwards (left)
             */
            if('l' == this.mouseDirection){
                index -= slideItems;

                if(0 > index){
                    index = 0;
                }
            }
        }

        this.userMoving = false;
        this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
        this.sliderReference.removeEventListener('mouseleave', this.handleMouseLeave);
        this.oldX = 0;

        this.setState({ index }, () => {
            this.slide();
            this.bindUIEvents(true);
        });
    }

    handleMouseLeave(){
        let { index, slideItems } = this.state;
        const absMove = Math.abs(index * this.slideWidth - this.movex);
        this.blockMove = true;

        if (this.userMoving) {

            if (absMove > 10) {
                /**
                 * Move forwards (right)
                 */
                if ('r' == this.mouseDirection) {
                    index += slideItems;
    
                    if(index > this.getMaxSlides()){
                        index = this.getMaxSlides();
                    }
                } 
                /**
                 * Move backwards (left)
                 */
                if('l' == this.mouseDirection){
                    index -= slideItems;
    
                    if(0 > index){
                        index = 0;
                    }
                }
            }
    
            this.userMoving = false;
            this.setState({ index }, () => {
                this.slide();
                this.bindUIEvents(true);
            });
        }
    }

    handleClick() {
        const self = this;
        this.blockMove = true;

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
        this.mouseClicksStart = performance.now();
        this.blockMove = false;
        this.userMoving = false;

        setTimeout(function () {
            self.longTouch = true;
        }, 250);

        // Get the original touch position.
        this.touchstartx = event.touches[0].pageX;
    }

    handleTouchMove(event) {
        this.userMoving = true;

        if (this.blockMove) {
            return;
        }
        
        let { index, cardWidth } = this.state;
        // Continuously return touch position.
        this.touchmovex = event.touches[0].pageX;
        // Calculate distance to translate holder.
        const currentWidth = (index*cardWidth)+(index*(this.getCardsMargin()*2));
        this.movex = currentWidth + (this.touchstartx - this.touchmovex);

        // mouse direction
        if(this.oldX < this.touchmovex){
            this.mouseDirection = 'l';
        }
        else{
            this.mouseDirection = 'r';
        }
        // save current mouse directions x
        this.oldX = this.touchmovex;
        // max x movement
        const maxMove = (this.getMaxSlides()*cardWidth)+(this.getMaxSlides()*(this.getCardsMargin()*2));

        if(this.movex <= maxMove){
            this.setState({ slidesTransform: `translate3d(-${this.movex}px,0,0)` });
        }
    }

    handleTouchEnd() {
        this.blockMove = true;

        if (115 >= performance.now() - this.mouseClicksStart || !this.userMoving) {
            this.userMoving = false;
            return;
        }

        let { index, slideItems } = this.state;
        const absMove = Math.abs(index * this.slideWidth - this.movex);

        if (absMove > 50 || false == this.longTouch) {
            /**
             * Move forwards (right)
             */
            if ('r' == this.mouseDirection) {
                index += slideItems;

                if(index > this.getMaxSlides()){
                    index = this.getMaxSlides();
                }
            } 
            /**
             * Move backwards (left)
             */
            if('l' == this.mouseDirection){
                index -= slideItems;

                if(0 > index){
                    index = 0;
                }
            }
        }

        this.userMoving = false;
        this.blockMove = false;

        this.setState({ index }, () => {
            this.slide();
            this.bindUIEvents(true);
        });
    }

    /**
     * Calculate dummy array for items.length calucation
     * - dots
     * - next slide action
     * - slide action 
     */
    getDataLength(getArray = false) {
        const { data, itemsPerLine } = this.state;
        const i = [];
        let t = [];

        for (let x = 0; x <= data.length - 1; x++) {

            if (data[x].data) {
                t.push(1);
            }

            /**
             * First slide
             */
            if (itemsPerLine === t.length || t.length && x == data.length - 1) {
                i.push(1);
                t = [];
            }
        }

        if(getArray){
            return i;
        }

        return i.length;
    }

    getCardsMargin(){
        const { itemsPerLine, cardWidth } = this.state;
        const slideWrapperWidth = (this.getSlidersWidth() * this.getDataLength()) / this.getDataLength();
        const cardsCountRow = itemsPerLine*cardWidth;
        const spaceToHandle = slideWrapperWidth-(cardsCountRow);
        return (spaceToHandle/2)/itemsPerLine;
    }
    /**
     * Generate grouped cards
     */
    generateCards() {
        const { itemsPerLine, data, cardWidth } = this.state;

        if (!data || !data.length) {
            return [];
        }

        const cardsGroup = [];
        let card = [];
        const marginLeftRight = this.getCardsMargin();

        const cardStyle = {
            width: `${cardWidth}px`,
            marginLeft: `${marginLeftRight}px`,
            marginRight: `${marginLeftRight}px`
        };

        for (let x = 0; x <= data.length - 1; x++) {

            if (data[x].data) {
                card.push(
                    <div key={`slide-item-${x}`} style={cardStyle} className='slide-item'>
                        {
                            data[x].data
                        }
                    </div>
                );
            }

            if (itemsPerLine === card.length || card.length && x == data.length - 1) {
                cardsGroup.push(
                    {
                        data: (
                            <div key={`slide-group-${x}`} className='slide-group'>
                                {
                                    card
                                }
                            </div>
                        )
                    }
                );
                card = [];
            }
        }

        return cardsGroup;
    }

    render() {
        const { addClass, defaultClass, id, slidersUuid, slidesWidth, slidesTransform, dataTransform, slideWrapperWidth } = this.state;
        const data = this.generateCards();

        return (
            <div className={`${defaultClass} ${addClass} animate`} id={id}>
                {/* Need this wrapper to set a z-index lower then the page to avoid (on desktop the version) to execute the mousedown function (while using the pager). */}
                <div key={`slide-wrapper-${slidersUuid}`} className="wrapper" ref={(node) => (this.sliderReference = node)}>
                    {
                        this.getButtonPreviousJsx()
                    }
                    <div
                        key={`slides-transform-${slidersUuid}`}
                        className={`slides user-select-none animate`}
                        style={{
                            transform: `${slidesTransform}`,
                            width: `${slidesWidth}px`,
                        }}
                    >
                        {0 !== data.length && data.map((source, index) => {
                            const { data } = source;

                            return (
                                <div
                                    key={`${slidersUuid}-${index}`}
                                    className="slide-wrapper"
                                    style={{
                                        width: `${slideWrapperWidth}px`,
                                    }}
                                >
                                    <div className="slide">
                                        <div
                                            className={`slide-data animate`}
                                            style={{
                                                transform: `${dataTransform}`,
                                            }}
                                        >
                                            {
                                                data && data
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {
                        this.getButtonNextJsx()
                    }
                </div>
            </div>
        );
    }
}

export default SliderCards;
