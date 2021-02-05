import React from 'react';
import internalUuid from '../internalFunctions/internalUuid';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.buildData = this.buildData.bind(this);
        this.resize = this.resize.bind(this);
        this.getCircles = this.getCircles.bind(this);
        this.getLineEntry = this.getLineEntry.bind(this);

        this.state = {
            /**
             * App
             */
            isMinified: false,
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-timeline',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: (props.data && typeof [] == typeof props.data) ? props.data : undefined,
            mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
            lineMiddle: (typeof true == typeof props.lineMiddle) ? props.lineMiddle : false,
            lineTitle: (typeof true == typeof props.lineTitle) ? props.lineTitle : false,
            lineEntry: (typeof true == typeof props.lineEntry) ? props.lineEntry : false,
            colorLineMiddle: (props.colorLineMiddle && typeof '8' == typeof props.colorLineMiddle) ? props.colorLineMiddle : '#dadce0',
            colorLineEntry: (props.colorLineEntry && typeof '8' == typeof props.colorLineEntry) ? props.colorLineEntry : '#dadce0',
            colorBorderEntry: (props.colorBorderEntry && typeof '8' == typeof props.colorBorderEntry) ? props.colorBorderEntry : '#dadce0',
            borderStyle: (props.borderStyle && typeof '8' == typeof props.borderStyle) && ['solid', 'dashed', 'mixed', '!mixed'].includes(props.borderStyle) ? props.borderStyle : 'solid',
            dashedSize: (props.dashedSize && typeof '8' == typeof props.dashedSize) && ['small', 'large'].includes(props.dashedSize) ? props.dashedSize : 'small',
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'data', 'mediaBreak', 'lineMiddle', 'lineTitle', 'lineEntry', 'colorLineMiddle', 'colorLineEntry', 'colorBorderEntry', 'borderStyle', 'dashedSize'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-timeline',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: (props.data && typeof [] == typeof props.data) ? props.data : undefined,
                mediaBreak: props.mediaBreak && typeof 8 == typeof props.mediaBreak ? props.mediaBreak : undefined,
                lineMiddle: (typeof true == typeof props.lineMiddle) ? props.lineMiddle : false,
                lineTitle: (typeof true == typeof props.lineTitle) ? props.lineTitle : false,
                lineEntry: (typeof true == typeof props.lineEntry) ? props.lineEntry : false,
                colorLineMiddle: (props.colorLineMiddle && typeof '8' == typeof props.colorLineMiddle) ? props.colorLineMiddle : '#dadce0',
                colorLineEntry: (props.colorLineEntry && typeof '8' == typeof props.colorLineEntry) ? props.colorLineEntry : '#dadce0',
                colorBorderEntry: (props.colorBorderEntry && typeof '8' == typeof props.colorBorderEntry) ? props.colorBorderEntry : '#dadce0',
                borderStyle: (props.borderStyle && typeof '8' == typeof props.borderStyle) && ['solid', 'dashed', 'mixed', '!mixed'].includes(props.borderStyle) ? props.borderStyle : 'solid',
                dashedSize: (props.dashedSize && typeof '8' == typeof props.dashedSize) && ['small', 'large'].includes(props.dashedSize) ? props.dashedSize : 'small',
            };
        }

        return null;
    }

    componentDidMount() {

        const { mediaBreak } = this.state;

        if (mediaBreak) {
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }

    resize() {
        const { mediaBreak, isMinified } = this.state;
        /**
         * Media break
         */
        if (document.documentElement.getBoundingClientRect().width <= mediaBreak) {
            if (!isMinified) {
                this.setState({
                    isMinified: true
                });
            }
        }
        /**
         * Default
         */
        else {
            if (isMinified) {
                this.setState({
                    isMinified: false
                });
            }
        }
    }

    getLineEntry() {
        const { borderStyle, colorLineEntry, dashedSize } = this.state;

        if ('solid' == borderStyle || 'mixed' == borderStyle) {
            return (
                <div
                    className='line'
                    style={
                        {
                            backgroundColor: colorLineEntry
                        }
                    }
                >
                </div>
            );
        }

        return (
            <div
                className={`line-dashed-${dashedSize}`}
                style={
                    {
                        backgroundColor: colorLineEntry
                    }
                }
            >
            </div>
        );
    }

    buildData() {
        const allowedAligns = ['left', 'right'];
        const { data, isMinified, lineEntry, colorBorderEntry, lineTitle } = this.state;
        let dataJsx = [];

        if (data && data.length) {

            try {
                data.map(object => {
                    const { title, content } = object;
                    let { align } = object;

                    if (!align || !allowedAligns.includes(align) || isMinified) {
                        align = 'center';
                    }

                    dataJsx.push(
                        <div
                            className={`single-entry single-entry-${align} ${'center' !== align ? 'flex' : ''}`}
                            key={internalUuid()}
                        >
                            {/* Empty div on the right site */}
                            {
                                'right' == align && !isMinified &&
                                <div className='empty' />
                            }
                            {/* Main content data with the width: 50% */}
                            <div className={`content ${'center' == align ? 'w-100' : ''}`}>
                                {
                                    title &&
                                    <div className='title'>
                                        {
                                            lineTitle && !lineEntry && !isMinified && this.getLineEntry()
                                        }
                                        {
                                            title
                                        }
                                    </div>
                                }
                                {
                                    content &&
                                    <div
                                        className='data-holder'
                                        style={
                                            {
                                                borderColor: colorBorderEntry,
                                                borderWidth: '1px',
                                                borderStyle: 'solid'
                                            }
                                        }
                                    >
                                        {/* Line on the left site for a right element, with an absolute position */}
                                        {
                                            lineEntry && !lineTitle && 'center' !== align && !isMinified && 'right' == align &&
                                            <div className={`line-entry line-entry-${align} flex`}>
                                                <div className='empty-2'>
                                                    {
                                                        this.getLineEntry()
                                                    }
                                                </div>
                                                <div className='empty-1' />
                                            </div>
                                        }
                                        {/* Line on the right site for a left element, with an absolute position */}
                                        {
                                            lineEntry && !lineTitle && 'center' !== align && !isMinified && 'left' == align &&
                                            <div className={`line-entry line-entry-${align} flex`}>
                                                <div className='empty-1' />
                                                <div className='empty-2'>
                                                    {
                                                        this.getLineEntry()
                                                    }
                                                </div>
                                            </div>
                                        }
                                        {/* Main content data */}
                                        {
                                            content && 
                                            <div className='data'>
                                                {
                                                    content
                                                }
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                            {/* Empty div on the left site */}
                            {
                                'left' == align && !isMinified &&
                                <div className='empty' />
                            }
                        </div>
                    );
                });
            }
            catch (e) {
                return [];
            }
        }

        return dataJsx;
    }

    getCircles(colorLineMiddle) {
        const items = [];

        for (let x = 0; x <= 200; x++) {
            items.push(
                <span
                    className='circle'
                    key={internalUuid()}
                    style={
                        {
                            backgroundColor: colorLineMiddle
                        }
                    }
                />
            );
        }

        return items;
    }

    render() {
        const { addClass, defaultClass, id, lineMiddle, borderStyle, dashedSize, colorLineMiddle } = this.state;

        return (
            <div
                className={`${defaultClass} ${addClass}`}
                id={id}
            >
                {
                    this.buildData()
                }
                {
                    lineMiddle && 'solid' == borderStyle &&
                    <div
                        className='line-middle'
                        style={
                            {
                                backgroundColor: colorLineMiddle
                            }
                        }
                    />
                }
                {
                    lineMiddle && '!mixed' == borderStyle &&
                    <div
                        className='line-middle'
                        style={
                            {
                                backgroundColor: colorLineMiddle
                            }
                        }
                    />
                }
                {
                    lineMiddle && 'dashed' == borderStyle &&
                    <div
                        className={`line-middle line-middle-${dashedSize} flex flex-column`}
                    >
                        {
                            this.getCircles(colorLineMiddle)
                        }
                    </div>
                }
                {
                    lineMiddle && 'mixed' == borderStyle &&
                    <div
                        className={`line-middle line-middle-${dashedSize} flex flex-column`}
                    >
                        {
                            this.getCircles(colorLineMiddle)
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Timeline;
