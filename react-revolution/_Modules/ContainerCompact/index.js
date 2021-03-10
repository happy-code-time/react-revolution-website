import React from 'react';
import isArray from '../../_Functions/isArray';
import isObject from '../../_Functions/isObject';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class ContainerCompact extends React.Component {
    constructor(props) {
        super(props);
        this.resizeView = this.resizeView.bind(this);
        this.setLocationChecker = this.setLocationChecker.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            mounted: false,
            href: window.location.href,
            isMinified: true,
            showSidebar: false,
            hideSidebar: false,
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-container-compact',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            hideAt: (typeof 8 == typeof props.hideAt) ? props.hideAt : 1024,
            headerProps: isObject(props.headerProps) ? props.headerProps : {},
            headerData: props.headerData ? props.headerData : '',

            contentProps: isObject(props.contentProps) ? props.contentProps : {},
            contentData: props.contentData ? props.contentData : '',

            sidebarProps: isObject(props.sidebarProps) ? props.sidebarProps : {},
            sidebarData: props.sidebarData ? props.sidebarData : '',
            sidebarWidth: (typeof 8 == typeof props.sidebarWidth && 0 < props.sidebarWidth) ? props.sidebarWidth : 250,

            align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',

            callbackShow: props.callbackShow && typeof function () { } == typeof props.callbackShow ? props.callbackShow : undefined,
            callbackShowProps: props.callbackShowProps,

            callbackHide: props.callbackHide && typeof function () { } == typeof props.callbackHide ? props.callbackHide : undefined,
            callbackHideProps: props.callbackHideProps,

            minifySidebarOn: isArray(props.minifySidebarOn) ? props.minifySidebarOn : [],
            locationInterval: props.locationInterval && typeof 8 === typeof props.locationInterval ? props.locationInterval : 500,
        };

        this.locationCheckInterval = null;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck([
            'addClass',
            'defaultClass',
            'id',
            'hideAt',
            'headerProps',
            'headerData',
            'contentProps',
            'contentData',
            'align',
            'sidebarProps',
            'sidebarData',
            'sidebarWidth',
            'callbackShow',
            'callbackShowProps',
            'callbackHide',
            'callbackHideProps',
            'minifySidebarOn',
            'locationInterval',
        ], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-container-compact',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                hideAt: (typeof 8 == typeof props.hideAt) ? props.hideAt : 1024,
                headerProps: isObject(props.headerProps) ? props.headerProps : {},
                headerData: props.headerData ? props.headerData : '',

                contentProps: isObject(props.contentProps) ? props.contentProps : {},
                contentData: props.contentData ? props.contentData : '',

                sidebarProps: isObject(props.sidebarProps) ? props.sidebarProps : {},
                sidebarData: props.sidebarData ? props.sidebarData : '',
                sidebarWidth: (typeof 8 == typeof props.sidebarWidth && 0 < props.sidebarWidth) ? props.sidebarWidth : 250,

                align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',

                callbackShow: props.callbackShow && typeof function () { } == typeof props.callbackShow ? props.callbackShow : undefined,
                callbackShowProps: props.callbackShowProps,

                callbackHide: props.callbackHide && typeof function () { } == typeof props.callbackHide ? props.callbackHide : undefined,
                callbackHideProps: props.callbackHideProps,

                minifySidebarOn: isArray(props.minifySidebarOn) ? props.minifySidebarOn : [],
                locationInterval: props.locationInterval && typeof 8 === typeof props.locationInterval ? props.locationInterval : 500,
            };
        }

        return null;
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeView);
        window.addEventListener('focus', this.handleFocus);
        window.addEventListener('blur', this.handleBlur);
        this.resizeView();
        this.setLocationChecker();

        this.setState({
            mounted: true
        });
    }

    componentWillUnmount() {
        this.setLocationChecker(false);
        window.removeEventListener('resize', this.resizeView);
        window.removeEventListener('focus', this.handleFocus);
        window.removeEventListener('blur', this.handleBlur);
    }

    componentDidUpdate() {
        if (isArray(this.state.minifySidebarOn) && 0 === this.state.minifySidebarOn.length) {
            return this.setLocationChecker();
        }

        this.setLocationChecker(true);
    }

    handleFocus() {
        this.setLocationChecker();
    }

    handleBlur() {
        this.setLocationChecker(false);
    }

    setLocationChecker(init = true) {
        clearInterval(this.locationCheckInterval);

        if (!init) {
            return;
        }

        this.locationCheckInterval = setInterval(() => {
            if (this.state.href !== window.location.href) {
                this.resizeView();
            }
        }, this.state.locationInterval);
    }

    callbackShow() {
        const { callbackShow, callbackShowProps } = this.state;

        if (callbackShow) {
            (callbackShow)(callbackShowProps);
        }
    }

    callbackHide() {
        const { callbackHide, callbackHideProps } = this.state;

        if (callbackHide) {
            (callbackHide)(callbackHideProps);
        }
    }

    resizeView() {
        const { minifySidebarOn } = this.state;

        // If the container should be fullscreen on selected locations
        if (isArray(minifySidebarOn) && minifySidebarOn.length) {

            for (let x = 0; x <= minifySidebarOn.length - 1; x++) {

                if (typeof '8' == typeof minifySidebarOn[x] && (window.location.href == minifySidebarOn[x] || window.location.hash == minifySidebarOn[x])) {
                    clearTimeout(this.animationTimeoutCloseIcon);

                    if (false == this.state.isMinified) {
                        return this.setState({
                            isMinified: true,
                            href: window.location.href
                        });
                    }

                    return this.setState({ href: window.location.href });
                }
            }
        }

        const { hideAt } = this.state;
        const documentWidth = document.documentElement.getBoundingClientRect().width;

        /**
         * Maxify the sidebar
         */
        if (documentWidth >= hideAt) {

            if (true === this.state.isMinified) {
                return this.setState({
                    isMinified: false,
                    href: window.location.href
                }, this.callbackShow);
            }

            return this.setState({ href: window.location.href });
        }

        /**
         * Hide the sidebar
         */
        if (documentWidth < hideAt && false === this.state.isMinified) {
            return this.setState({
                isMinified: true,
                href: window.location.href
            }, this.callbackHide);
        }

        this.setState({ href: window.location.href });
    }

    render() {
        const { addClass, defaultClass, id, headerData, headerProps, contentData, contentProps, align, sidebarProps } = this.state;
        const direction = ['left', 'right'].includes(align) ? align : 'left';
        const constaineStyle = {};
        constaineStyle['--rr-container-compact-width'] = `${this.state.sidebarWidth}px`;

        return (
            <div
                id={id}
                className={`${defaultClass} ${direction} ${addClass} ${!this.state.mounted ? 'td0' : ''}`}
                style={constaineStyle}
            >
                <div
                    className={`Header`}
                    {...(isObject(headerProps)) && { ...headerProps }}
                >
                    {
                        headerData
                    }
                </div>
                {
                    !this.state.isMinified &&
                    <div
                        className={`Sidebar`}
                        {...(isObject(sidebarProps)) && { ...sidebarProps }}
                    >
                        {
                            this.state.sidebarData
                        }
                    </div>
                }
                <div
                    className={`Content ${this.state.isMinified ? 'w-100' : ''}`}
                    {...(isObject(contentProps)) && { ...contentProps }}
                >
                    {
                        contentData
                    }
                </div>
            </div>
        );
    }
}

export default ContainerCompact;
