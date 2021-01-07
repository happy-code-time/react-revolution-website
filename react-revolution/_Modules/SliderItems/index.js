import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';
import loadStyle from '../internalFunctions/loadStyle';
import uuid from '../internalFunctions/internalUuid';

class SliderItems extends React.Component {
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
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider-items',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
            slidersUuid: props.uuid && typeof '8' === typeof props.uuid ? props.uuid : `${uuid()}`,
            displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
            displayDots: typeof true == typeof props.displayDots ? props.displayDots : true,
            displayDotsIndex: typeof true == typeof props.displayDotsIndex ? props.displayDotsIndex : false,
            buttonsAlwaysVisible: typeof true == typeof props.buttonsAlwaysVisible ? props.buttonsAlwaysVisible : false,
            next: props.next ? props.next : '>',
            previous: props.previous ? props.previous : '<',
            itemsS: props.itemsS && typeof 8 == typeof props.itemsS ? props.itemsS : 1,
            itemsL: props.itemsL && typeof 8 == typeof props.itemsL ? props.itemsL : 2,
            itemsXL: props.itemsXL && typeof 8 == typeof props.itemsXL ? props.itemsXL : 3,
            resizeS: props.resizeS && typeof 8 == typeof props.resizeS ? props.resizeS : 768,
            resizeL: props.resizeL && typeof 8 == typeof props.resizeL ? props.resizeL : 1024,
            resizeXL: props.resizeXL && typeof 8 == typeof props.resizeXL ? props.resizeXL : 1260,
            docWidth: document.documentElement.getBoundingClientRect().width,
            itemsPerLine: 1,
            // data root holder
            slidesTransform: `translate3d(-0px,0,0)`,
            slidesWidth: 100,
            // each single image holder
            slideWrapperWidth: '100%',
            // each single img tag
            dataTransform: `translate3d(-0px,0,0)`,
            // current slide index
            index: 0,
        };

        this.slideWidth = 0;
        this.touchstartx = 0;
        this.touchmovex = 0;
        this.movex = 0;
        this.longTouch = false;

        this.mousestartx = 0;

        this.blockMove = false;
        this.mouseClicksStart = 0;
        this.userMoving = false;

        this.oldX = 0;
        this.mouseDirection = 'r';
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['itemsS', 'itemsL', 'itemsXL', 'resizeS', 'resizeL', 'resizeXL', 'addClass', 'defaultClass', 'id', 'data', 'next', 'previous', 'displayPagination', 'displayDots', 'displayDotsIndex', 'buttonsAlwaysVisible'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider-items',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
                next: props.next ? props.next : '>',
                previous: props.previous ? props.previous : '<',
                displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
                displayDotsIndex: typeof true == typeof props.displayDotsIndex ? props.displayDotsIndex : false,
                displayDots: typeof true == typeof props.displayDots ? props.displayDots : true,
                buttonsAlwaysVisible: typeof true == typeof props.buttonsAlwaysVisible ? props.buttonsAlwaysVisible : false,
                itemsS: props.itemsS && typeof 8 == typeof props.itemsS ? props.itemsS : 1,
                itemsL: props.itemsL && typeof 8 == typeof props.itemsL ? props.itemsL : 2,
                itemsXL: props.itemsXL && typeof 8 == typeof props.itemsXL ? props.itemsXL : 3,
                resizeS: props.resizeS && typeof 8 == typeof props.resizeS ? props.resizeS : 768,
                resizeL: props.resizeL && typeof 8 == typeof props.resizeL ? props.resizeL : 1024,
                resizeXL: props.resizeXL && typeof 8 == typeof props.resizeXL ? props.resizeXL : 1140,
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
        this.bindUIEvents();
        this.setResizeListener();

        setTimeout(() => {
            this.resizeView();
        }, 300);
    }

    componentWillUnmount() {
        this.setResizeListener(false);
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
        this.setSlidesWidth();
        this.slideWidth = this.getSlidersWidth();

        const { itemsS, itemsL, itemsXL, resizeS, resizeL, resizeXL } = this.state;
        const docWidth = document.documentElement.getBoundingClientRect().width;

        if (docWidth > resizeXL) {
            return this.setState({ itemsPerLine: itemsXL, index: 0 }, this.slide);
        }

        if (docWidth > resizeL) {
            return this.setState({ itemsPerLine: itemsL, index: 0 }, this.slide);
        }

        if (docWidth < resizeS) {
            return this.setState({ itemsPerLine: itemsS, index: 0 }, this.slide);
        }

        this.slide();
    }

    setSlidesWidth() {
        this.setState({
            slidesWidth: this.getSlidersWidth() * this.getDataLength() - 1,
            slideWrapperWidth: (this.getSlidersWidth() * this.getDataLength() - 1) / this.getDataLength() - 1,
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
        let width = this.state.index * this.state.slideWrapperWidth;
        const maxWidth = (this.getSlidersWidth() * (this.getDataLength() - 1));

        if (width > maxWidth) {
            width = maxWidth;
        }

        this.setState({
            dataTransform: `translate3d(-(${0})px,0,0)`,
            slidesTransform: `translate3d(-${width}px,0,0)`,
        });
    }

    slidePrevious() {
        let { index } = this.state;

        if (index === 0) {
            index = this.getDataLength();
        }

        index -= 1;
        this.setState({ index }, this.slide);
    }

    slideNext() {
        let { index } = this.state;

        if (index === this.getDataLength() - 1) {
            index = -1;
        }

        index += 1;
        this.setState({ index }, this.slide);
    }

    getButtonPreviousJsx() {
        const { displayPagination, buttonsAlwaysVisible, previous } = this.state;
        let { index } = this.state;

        if (!displayPagination) {
            return;
        }

        if ((index > 0 && 2 <= this.getDataLength()) || buttonsAlwaysVisible) {

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
        const { displayPagination, buttonsAlwaysVisible, next } = this.state;
        let { index } = this.state;

        if (!displayPagination) {
            return;
        }

        if (index < this.getDataLength() - 1 || buttonsAlwaysVisible) {

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
        const { displayPagination, displayDotsIndex, index, displayDots } = this.state;

        if (2 > this.getDataLength() || !displayPagination || !displayDots) {
            return;
        }

        return (
            <div className="pagination">
                <div className="actions">
                    {
                        this.getDataLength(true).map((x, i) => {
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
        // Calculate distance to translate holder.
        this.movex = index * this.slideWidth + (this.mousestartx - event.layerX);
        let panx = 100 - this.movex / 6;

        // mouse direction
        if (this.oldX < event.pageX) {
            this.mouseDirection = 'l';
        }
        else {
            this.mouseDirection = 'r';
        }
        // save current mouse directions x
        this.oldX = event.pageX;

        if (this.movex < (this.getSlidersWidth() * (this.getDataLength() - 1))) {
            // Makes the holder stop moving when there is no more content.
            return this.setState({ slidesTransform: `translate3d(-${this.movex}px,0,0)` });
        }

        if (panx <= 0) {
            // Corrects an edge-case problem where the background image moves without the container moving.
            this.setState({ dataTransform: `translate3d(-(${0})px,0,0)` });
        }
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
            if ('r' == this.mouseDirection && index < this.getDataLength() - 1) {
                index += 1;
            }
            if ('l' == this.mouseDirection && 0 < index) {
                index -= 1;
            }
        }

        this.blockMove = true;
        this.userMoving = false;
        this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
        this.sliderReference.removeEventListener('mouseleave', this.handleMouseLeave);
        this.oldX = 0;

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

            if (absMove > 10) {
                if ('r' == this.mouseDirection && index < this.getDataLength() - 1) {
                    index += 1;
                }
                if ('l' == this.mouseDirection && 0 < index) {
                    index -= 1;
                }
            }

            this.blockMove = true;
            this.userMoving = false;
            this.sliderReference.removeEventListener('mousemove', this.handleMouseMove);
            this.sliderReference.removeEventListener('mouseleave', this.handleMouseLeave);
            this.oldX = 0;

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

        let { index } = this.state;
        // Continuously return touch position.
        this.touchmovex = event.touches[0].pageX;
        // Calculate distance to translate holder.
        this.movex = index * this.slideWidth + (this.touchstartx - this.touchmovex);

        // mouse direction
        if (this.oldX < event.touches[0].pageX) {
            this.mouseDirection = 'l';
        }
        else {
            this.mouseDirection = 'r';
        }
        // save current mouse directions x
        this.oldX = event.touches[0].pageX;

        if (this.movex <= (this.getSlidersWidth() * (this.getDataLength() - 1))) {
            // Makes the holder stop moving when there is no more content.
            return this.setState({ slidesTransform: `translate3d(-${this.movex}px,0,0)` });
        }
    }

    handleTouchEnd() {
        this.blockMove = true;

        if (115 >= performance.now() - this.mouseClicksStart || !this.userMoving) {
            this.userMoving = false;
            return;
        }

        let { index } = this.state;
        const absMove = Math.abs(index * this.slideWidth - this.movex);

        if (absMove > 10) {
            if ('r' == this.mouseDirection && index < this.getDataLength() - 1) {
                index += 1;
            }
            if ('l' == this.mouseDirection && 0 < index) {
                index -= 1;
            }
        }

        this.blockMove = true;
        this.userMoving = false;
        this.oldX = 0;

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

            if (itemsPerLine === t.length || t.length && x == data.length - 1) {
                i.push(1);
                t = [];
            }
        }

        if (getArray) {
            return i;
        }

        return i.length;
    }

    /**
     * Generate grouped cards
     */
    generateCards() {
        const { itemsPerLine, data } = this.state;

        if (!data || !data.length) {
            return [];
        }

        const cardsGroup = [];
        let card = [];

        for (let x = 0; x <= data.length - 1; x++) {

            if (data[x].data) {
                card.push(
                    <div key={`slide-item-${x}`} className='slide-item'>
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
        const { addClass, defaultClass, id, slidersUuid, slidesWidth, slidesTransform, dataTransform, slideWrapperWidth, itemsPerLine } = this.state;
        const data = this.generateCards();

        return (
            <div className={`${defaultClass} ${addClass} animate`} id={id}>
                {/* Need this wrapper to set a z-index lower then the page to avoid (on desktop the version) to execute the mousedown function (while using the pager). */}
                <div key={`slide-wrapper-${slidersUuid}`} className="wrapper" ref={(node) => (this.sliderReference = node)}>
                    {
                        this.getButtonPreviousJsx()
                    }
                    <div
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
                {
                    this.getDotsJsx()
                }
            </div>
        );
    }
}

export default SliderItems;
