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
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider-cards',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
            slideAfterMove: typeof 8 == typeof props.slideAfterMove ? props.slideAfterMove : 50,
            slidersUuid: props.uuid && typeof '8' === typeof props.uuid ? props.uuid : `${uuid()}`,
            displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
            paginationInside: typeof true == typeof props.paginationInside ? props.paginationInside : true,
            next: props.next ? props.next : '>',
            previous: props.previous ? props.previous : '<',
            docWidth: document.documentElement.getBoundingClientRect().width,
            dotsInside: typeof true == typeof props.dotsInside ? props.dotsInside2 : true,
            displayDots: typeof true == typeof props.displayDots ? props.displayDots : true,
            displayDotsIndex: typeof true == typeof props.displayDotsIndex ? props.displayDotsIndex : false,
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
        if (getDerivedStateFromPropsCheck(['slideAfterMove', 'dotsInside', 'displayDots', 'displayDotsIndex', 'paginationInside', 'itemsS', 'itemsL', 'itemsXL', 'resizeS', 'resizeL', 'resizeXL', 'slideItemsS', 'slideItemsL', 'slideItemsXL', 'addClass', 'defaultClass', 'id', 'data', 'next', 'previous', 'displayPagination'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-slider-cards',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof [] == typeof props.data && props.data.length ? props.data : [],
                next: props.next ? props.next : '>',
                previous: props.previous ? props.previous : '<',
                slideAfterMove: typeof 8 == typeof props.slideAfterMove ? props.slideAfterMove : 50,
                paginationInside: typeof true == typeof props.paginationInside ? props.paginationInside : true,
                displayPagination: typeof true == typeof props.displayPagination ? props.displayPagination : true,
                // cards count in single row
                itemsS: props.itemsS && typeof 8 == typeof props.itemsS ? props.itemsS : 2,
                itemsL: props.itemsL && typeof 8 == typeof props.itemsL ? props.itemsL : 3,
                itemsXL: props.itemsXL && typeof 8 == typeof props.itemsXL ? props.itemsXL : 3,
                // cards count based on document width
                resizeS: props.resizeS && typeof 8 == typeof props.resizeS ? props.resizeS : 768,
                resizeL: props.resizeL && typeof 8 == typeof props.resizeL ? props.resizeL : 1024,
                resizeXL: props.resizeXL && typeof 8 == typeof props.resizeXL ? props.resizeXL : 1140,
                slideItemsS: props.slideItemsS && typeof 8 == typeof props.slideItemsS ? props.slideItemsS : 2,
                slideItemsL: props.slideItemsL && typeof 8 == typeof props.slideItemsL ? props.slideItemsL : 3,
                slideItemsXL: props.slideItemsXL && typeof 8 == typeof props.slideItemsXL ? props.slideItemsXL : 3,
                dotsInside: typeof true == typeof props.dotsInside ? props.dotsInside2 : true,
                displayDots: typeof true == typeof props.displayDots ? props.displayDots : true,
                displayDotsIndex: typeof true == typeof props.displayDotsIndex ? props.displayDotsIndex : false,
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
        this.setResizeListener();
        this.mouseDownListeners();
        this.resizeView();
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

    resizeView() {
        this.setSlidesWidth();
        this.slideWidth = this.getSlidersWidth();

        const { itemsPerLine, itemsS, itemsL, itemsXL, resizeS, resizeL, resizeXL, slideItems, slideItemsS, slideItemsL, slideItemsXL } = this.state;
        const docWidth = document.documentElement.getBoundingClientRect().width;

        if (docWidth > resizeXL && (itemsPerLine !== itemsXL || slideItems !== slideItemsXL)) {
            return this.setState({
                itemsPerLine: itemsXL,
                slideItems: slideItemsXL,
                index: 0,
            }, this.slide);
        }

        if (docWidth < resizeXL && docWidth >= resizeL && (itemsPerLine !== itemsL || slideItems !== slideItemsL)) {
            return this.setState({
                itemsPerLine: itemsL,
                slideItems: slideItemsL,
                index: 0,
            }, this.slide);
        }

        if (docWidth < resizeS && (itemsPerLine !== itemsS || slideItems !== slideItemsS)) {
            return this.setState({
                itemsPerLine: itemsS,
                slideItems: slideItemsS,
                index: 0
            }, this.slide);
        }
    }

    setSlidesWidth() {
        this.setState({
            slidesWidth: (this.getSlidersWidth() * this.getDataLength()),
            slideWrapperWidth: (this.getSlidersWidth() * this.getDataLength()-1) / this.getDataLength()-1,
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

    getMaxSlidesWidth() {
        return (this.getDataLength()-1) * this.getSlidersWidth();
    }

    getIndexDirectionLeft() {
        let index = this.state.index - 1;

        if (0 > index) {
            index = 0;
        }

        return index;
    }

    getIndexDirectionRight() {
        let index = this.state.index + 1;

        if (index >= this.getDataLength()-1) {
            index = this.getDataLength()-1;
        }

        return index;
    }

    slidePrevious() {
        this.setState({ index: this.getIndexDirectionLeft() }, this.slide);
    }

    slideNext() {
        this.setState({ index: this.getIndexDirectionRight() }, this.slide);
    }

    getCurrentSlidersTransformation() {
        return ((this.state.index*this.state.slideItems) * this.getSingleCardsWidth());
    }

    slide() {
        let width = this.getCurrentSlidersTransformation();

        if (this.state.index == 0) {
            width = 0;
        }

        const maxWidth = this.getMaxSlidesWidth();

        if (width > maxWidth) {
            width = maxWidth;
        }

        this.setState({
            dataTransform: `translate3d(-(${0})px,0,0)`,
            slidesTransform: `translate3d(-${width}px,0,0)`,
        }, this.setSlidesWidth);
    }

    getButtonPreviousJsx() {

        if (!this.state.displayPagination) {
            return;
        }

        if (this.state.index > 0 && 2 <= this.getDataLength()) {

            return (
                <span className="button-previous" onClick={() => this.slidePrevious()}>
                    {
                        this.state.previous
                    }
                </span>
            );
        }
    }

    getButtonNextJsx() {

        if (!this.state.displayPagination) {
            return;
        }

        if (this.state.index < this.getDataLength() - 1) {
            return (
                <span className="button-next" onClick={() => this.slideNext()}>
                    {
                        this.state.next
                    }
                </span>
            );
        }
    }

    getDotsJsx() {
        const { displayDotsIndex, index, data } = this.state;

        if (2 > this.getDataLength()) {
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

    /**
     * ##############################
     * Mouse
     * ##############################
     */
    setDirection(pageX = 0) {
        if (this.oldX < pageX) {
            this.mouseDirection = 'l';
        }
        else {
            this.mouseDirection = 'r';
        }
        this.oldX = pageX;
    }

    getDirection() {
        return this.mouseDirection;
    }

    setAbs(abs) {
        this.abs = abs;
    }

    getAbs() {
        return this.abs;
    }

    /**
     * Rect does not supports to give the layerX value
     * so we have to add the listener manually
     * https://reactjs.org/docs/events.html#mouse-events
     * 
     * @param {boolean} reattach 
     */
    mouseDownListeners(reattach = true) {
        this.wrapper.removeEventListener('mousedown', this.processMouseDown);

        if (reattach) {
            this.wrapper.addEventListener('mousedown', this.processMouseDown);
        }
    }

    mouseMoveListeners(reattach = true) {
        this.wrapper.removeEventListener('mousemove', this.handleMouseMove);

        if (reattach) {
            this.wrapper.addEventListener('mousemove', this.handleMouseMove);
        }
    }

    processMouseDown(e) {
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

        let { index } = this.state;
        // Calculate distance to translate holder.
        const currentWidth = this.getCurrentSlidersTransformation();
        this.movex = currentWidth + (this.mousestartx - event.layerX);
        // mouse direction
        this.setDirection(event.pageX);
        // save mouse movement in px value for mouseUp or leave
        this.setAbs(Math.abs(index * this.getSingleCardsWidth() - this.movex));

        if (this.movex < this.getMaxSlidesWidth()) {
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

        if (this.getAbs() >= slideAfterMove) {
            /**
             * Move forwards (right)
             */
            if ('r' == this.mouseDirection) {
                index = this.getIndexDirectionRight();
            }
            /**
             * Move backwards (left)
             */
            if ('l' == this.mouseDirection) {
                index = this.getIndexDirectionLeft();
            }
        }

        this.oldX = 0;
        this.mouseMoveListeners(false);
        this.setState({ index }, this.slide);
    }

    handleMouseLeave() {
        let { index, slideAfterMove } = this.state;
        this.blockMove = true;

        if (this.userMoving) {

            if (this.getAbs() >= slideAfterMove) {
                /**
                 * Move forwards (right)
                 */
                if ('r' == this.mouseDirection) {
                    index = this.getIndexDirectionRight();
                }
                /**
                 * Move backwards (left)
                 */
                if ('l' == this.mouseDirection) {
                    index = this.getIndexDirectionLeft();
                }
            }

            this.userMoving = false;
            this.oldX = 0;
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
        this.mouseClicksStart = performance.now();
        this.blockMove = false;
        this.userMoving = false;

        setTimeout(function () {
            this.longTouch = true;
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
        // Calculate distance to translate holder.
        const currentWidth = (index * cardWidth) + (index);
        this.movex = currentWidth + (this.touchstartx - event.touches[0].pageX);
        // mouse direction
        this.setDirection(event.touches[0].pageX);
        // save mouse movement in px value for mouseUp or leave
        this.setAbs(Math.abs(index * this.slideWidth - this.movex));

        if (this.movex < this.getMaxSlidesWidth()) {
            // Inline style = avoid flipping while fast mouse moving
            this.transformer.style.transform = `translate3d(-${this.movex}px,0,0)`;
        }
    }

    handleTouchEnd() {
        this.blockMove = true;

        if (115 >= performance.now() - this.mouseClicksStart || !this.userMoving) {
            this.userMoving = false;
            return;
        }

        let { index, slideAfterMove } = this.state;
        const absMove = Math.abs(index * this.slideWidth - this.movex);

        if (absMove >= slideAfterMove || false == this.longTouch) {
            /**
             * Move forwards (right)
             */
            if ('r' == this.mouseDirection) {
                index = this.getIndexDirectionRight();
            }
            /**
             * Move backwards (left)
             */
            if ('l' == this.mouseDirection) {
                index = this.getIndexDirectionLeft();
            }
        }

        this.userMoving = false;
        this.mouseMoveListeners(false);
        this.setState({ index }, this.slide);
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

        if (getArray) {
            return i;
        }

        return i.length;
    }

    getSingleCardsWidth() {
        return (this.state.slideWrapperWidth / this.state.itemsPerLine);
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

        const cardStyle = {
            width: `${this.getSingleCardsWidth()}px`,
            margin: `0`,
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
        const { addClass, defaultClass, id, displayDots, dotsInside, paginationInside, slidersUuid, slidesWidth, slidesTransform, dataTransform, slideWrapperWidth } = this.state;
        const data = this.generateCards();

        return (
            <div className={`${defaultClass} ${addClass} animate`} id={id}>
                {
                    !paginationInside && this.getButtonPreviousJsx()
                }
                {/* Need this wrapper to set a z-index lower then the page to avoid (on desktop the version) to execute the mousedown function (while using the pager). */}
                <div
                    key={`wrapper-${uuid}`}
                    className="wrapper"
                    ref={(node) => (this.wrapper = node)}
                    // Mobile
                    onTouchStart={(e) => this.handleTouchStart(e)}
                    onTouchMove={(e) => this.handleTouchMove(e)}
                    onTouchEnd={(e) => this.handleTouchEnd(e)}
                    // Desktop
                    onClick={(e) => this.handleClick(e)}
                    onMouseUp={(e) => this.handleMouseUp(e)}
                    onMouseLeave={(e) => this.handleMouseLeave(e)}
                >
                    {
                        paginationInside && this.getButtonPreviousJsx()
                    }
                    <div
                        ref={(node) => (this.transformer = node)}
                        key={`slides-transform-${slidersUuid}`}
                        className={`slides user-select-none animate`}
                        style={{
                            transform: `${slidesTransform}`,
                            width: `${slidesWidth}px`,
                        }}
                    >
                        {0 !== data.length && data.map((source, i) => {
                            const { data } = source;

                            return (
                                <div
                                    key={`slide-wrapper-${slidersUuid}-${i}`}
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
                        displayDots && dotsInside && this.getDotsJsx()
                    }
                    {
                        paginationInside && this.getButtonNextJsx()
                    }
                </div>
                {
                    !paginationInside && this.getButtonNextJsx()
                }
                {
                    displayDots && !dotsInside && this.getDotsJsx()
                }
            </div>
        );
    }
}

export default SliderCards;
