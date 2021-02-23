import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class ContainerPopup extends React.Component {
    constructor(props) {
        super(props);
        this.resizeView = this.resizeView.bind(this);
        this.setLocationChecker = this.setLocationChecker.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            /**
             * App
             */
            isHidden: (typeof true == typeof props.isHidden) ? props.isHidden : true,
            href: window.location.href, // current href
            forceHidingSidebar: {
                isHidden: true,
            },
            animation: false, // set zIndex on sidebar (header data should not overlap the sidebar)
            isHiddenSidebar: false,
            hiddenBackwards: false,
            hiddenForwards: false,
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-container-popup',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            moduleSidebar: (props.moduleSidebar && typeof {} == typeof props.moduleSidebar) ? props.moduleSidebar : '',
            hideAt: (typeof 8 == typeof props.hideAt) ? props.hideAt : 1024,
            headerProps: (props.headerProps && typeof {} == typeof props.headerProps) ? props.headerProps : {},
            headerData: (props.headerData && typeof {} == typeof props.headerData) ? props.headerData : '',
            contentProps: (props.contentProps && typeof {} == typeof props.contentProps) ? props.contentProps : {},
            contentData: props.contentData ? props.contentData : '',
            footerData: props.footerData ? props.footerData : '',
            footerProps: (props.footerProps && typeof {} == typeof props.footerProps) ? props.footerProps : {},
            toggleMenuHtml: props.toggleMenuHtml ? props.toggleMenuHtml : '',
            minifySidebarOn: props.minifySidebarOn && typeof [] == typeof props.minifySidebarOn && props.minifySidebarOn.length ? props.minifySidebarOn : [],
            align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',
            headerDataRight: (typeof true == typeof props.headerDataRight) ? props.headerDataRight : false,
            animationDuration: (typeof 8 == typeof props.animationDuration && 0 < props.animationDuration) ? props.animationDuration : 0,
        };

        this.locationCheckInterval = undefined;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'moduleSidebar', 'animationDuration', 'hideAt', 'headerProps', 'headerData', 'contentProps', 'contentData', 'footerData', 'footerProps', 'toggleMenuHtml', 'minifySidebarOn', 'align', 'headerDataRight'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-container-popup',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                moduleSidebar: (props.moduleSidebar && typeof {} == typeof props.moduleSidebar) ? props.moduleSidebar : '',
                hideAt: (typeof 8 == typeof props.hideAt) ? props.hideAt : 1024,
                headerProps: (props.headerProps && typeof {} == typeof props.headerProps) ? props.headerProps : {},
                headerData: (props.headerData && typeof {} == typeof props.headerData) ? props.headerData : '',
                contentProps: (props.contentProps && typeof {} == typeof props.contentProps) ? props.contentProps : {},
                contentData: props.contentData ? props.contentData : '',
                footerData: props.footerData ? props.footerData : '',
                footerProps: (props.footerProps && typeof {} == typeof props.footerProps) ? props.footerProps : {},
                toggleMenuHtml: props.toggleMenuHtml ? props.toggleMenuHtml : '',
                minifySidebarOn: props.minifySidebarOn && typeof [] == typeof props.minifySidebarOn && props.minifySidebarOn.length ? props.minifySidebarOn : [],
                align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',
                headerDataRight: (typeof true == typeof props.headerDataRight) ? props.headerDataRight : false,
                animationDuration: (typeof 8 == typeof props.animationDuration && 0 < props.animationDuration) ? props.animationDuration : 0,
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
    }

    componentWillUnmount() {
        this.setLocationChecker(false);
        window.removeEventListener('resize', this.resizeView);
        window.removeEventListener('focus', this.handleFocus);
        window.removeEventListener('blur', this.handleBlur);
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
                return this.setState({ 
                    isHidden: true,
                    href: window.location.href,
                    animation: true,
                    hiddenForwards: true,
                    isHiddenSidebar:false
                }, () => {
                    
                    this.resizeView();

                    setTimeout( () => {
                        this.setState({ 
                            isHiddenSidebar: true, 
                            animation: false,
                            hiddenBackwards: false,
                            hiddenForwards: false
                        });
                    }, this.state.animationDuration);
                });
            }
        }, 500);
    }

    resizeView() {
        const { minifySidebarOn, hideAt, animationDuration } = this.state;

        // If the container should be fullscreen on selected locations
        if (minifySidebarOn && minifySidebarOn.length) {

            for (let x = 0; x <= minifySidebarOn.length - 1; x++) {

                if (typeof '8' == typeof minifySidebarOn[x] && (window.location.href == minifySidebarOn[x] || window.location.hash == minifySidebarOn[x])) {
                    return this.setState({ 
                        isHidden: true, 
                        animation: true,
                        hiddenBackwards: true,
                        isHiddenSidebar:false
                    }, () => {
                        setTimeout( () => {
                            this.setState({ 
                                isHiddenSidebar: true, 
                                animation: false,
                                hiddenBackwards: false,
                                hiddenForwards: false
                            });
                        }, animationDuration);
                    });
                }
            }
        }

        const documentWidth = document.documentElement.getBoundingClientRect().width;

        /**
         * Maxify the sidebar
         */
        if (documentWidth >= hideAt && true === this.state.isHidden) {
            return this.setState({ 
                isHidden: false, 
                animation: true,
                hiddenForwards: true,
                isHiddenSidebar:false
            }, () => {
                setTimeout( () => {
                    this.setState({ 
                        isHiddenSidebar: false, 
                        animation: false,
                        hiddenBackwards: false,
                        hiddenForwards: false
                    });
                }, animationDuration);
            });
        }

        /**
         * Hide the sidebar
         */
        if (documentWidth < hideAt && false === this.state.isHidden) {
            return this.setState({ 
                isHidden: true, 
                animation: true,
                hiddenBackwards: true,
                isHiddenSidebar:false
            }, () => {
                setTimeout( () => {
                    this.setState({ 
                        isHiddenSidebar: true, 
                        animation: false,
                        hiddenBackwards: false,
                        hiddenForwards: false
                    });
                }, animationDuration);
            });
        }
    }

    render() {
        const { addClass, defaultClass, id, moduleSidebar, toggleMenuHtml, animation, animationDuration, isHidden, isHiddenSidebar, hiddenBackwards, hiddenForwards, headerData, headerProps, contentData, contentProps, footerData, footerProps, headerDataRight, align } = this.state;
        const direction = ['left', 'right'].includes(align) ? align : 'left';

        return (
            <div
                id={id}
                className={`${defaultClass} ${direction} ${animation ? 'zIndex' : ''} ${!animationDuration ? 'td0' : ''} ${addClass}`}
            >
                {
                    !isHiddenSidebar &&
                    <div className={`SideBar ${!isHidden && hiddenForwards ? 'SideBarShow' : ''} ${isHidden && hiddenBackwards ? 'SideBarHide' : ''}`}>
                        {
                            moduleSidebar && moduleSidebar
                        }
                    </div>
                }
                <div 
                    className={`Content ${isHidden ? 'Content-hidden' : ''}`} 
                    {...contentProps}
                >
                    <div className={`data-header`} {...headerProps}>
                        {
                            !headerDataRight && headerData && headerData
                        }
                        {
                            isHidden && toggleMenuHtml && toggleMenuHtml
                        }
                        {
                            headerDataRight && headerData && headerData
                        }
                    </div>
                    {
                        contentData &&
                        <div className='data-content'>
                            {
                                contentData
                            }
                        </div>
                    }
                    {
                        footerData &&
                        <div
                            className='data-footer'
                            {...footerProps}
                        >
                            {
                                footerData
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default ContainerPopup;
