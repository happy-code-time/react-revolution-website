import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';
import loadStyle from '../internalFunctions/loadStyle';
class Container extends React.Component
{
    constructor(props) {
        super(props);
        this.getClassNamesContent = this.getClassNamesContent.bind(this);
        this.getClassNamesSidebar = this.getClassNamesSidebar.bind(this);
        this.sideBar = this.sideBar.bind(this);
        this.resizeView = this.resizeView.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setIntervals = this.setIntervals.bind(this);

        this.state = {
            /**
             * App
             */
            href: window.location.href,
            isMin: (typeof true == typeof props.isMin) ? props.isMin : false,
            isMax: (typeof true == typeof props.isMax) ? props.isMax : false,
            isHidden: (typeof true == typeof props.isHidden) ? props.isHidden : true,
            isHiddenClass: 'closed',
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-container',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            moduleSidebar: (props.moduleSidebar && typeof {} == typeof props.moduleSidebar) ? props.moduleSidebar : undefined,
            maxifyAt: (typeof 8 == typeof props.maxifyAt) ? props.maxifyAt : 1024,
            minifyAt: (typeof 8 == typeof props.minifyAt) ? props.minifyAt : 720,
            hideAt: (typeof 8 == typeof props.hideAt) ? props.hideAt : 520,
            displayMinifyMaxifyIcon: (typeof true == typeof props.displayMinifyMaxifyIcon) ? props.displayMinifyMaxifyIcon : undefined,
            // head
            headerProps: (props.headerProps && typeof {} == typeof props.headerProps) ? props.headerProps : {},
            headerData: (props.headerData && typeof {} == typeof props.headerData) ? props.headerData : undefined,
            // content
            contentProps: (props.contentProps && typeof {} == typeof props.contentProps) ? props.contentProps : {},
            contentData: props.contentData ? props.contentData : undefined,
            // foot
            footerData: props.footerData ? props.footerData : undefined,
            footerProps: (props.footerProps && typeof {} == typeof props.footerProps) ? props.footerProps : {},
            closeMenuHtml: props.closeMenuHtml ? props.closeMenuHtml : undefined,
            toggleMenuHtml: props.toggleMenuHtml ? props.toggleMenuHtml : undefined,
            // sidebars blacklist
            minifySidebarOn: props.minifySidebarOn && typeof [] == typeof props.minifySidebarOn && props.minifySidebarOn.length ? props.minifySidebarOn : [],
            align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',
            hideOpenedHiddenSidebar: {
                isHiddenClass: 'closed',
                isMax: false,
                isMin: false,
                isHidden: true,
                href: window.location.href
            },
            headerDataRight: (typeof true == typeof props.headerDataRight) ? props.headerDataRight : false,
            href: window.location.href,
        };

        this.nodeSideBar = React.createRef();
        this.interval = undefined;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'href', 'defaultClass', 'id', 'moduleSidebar', 'minifyAt', 'maxifyAt', 'hideAt', 'displayMinifyMaxifyIcon', 'headerProps', 'headerData', 'contentProps', 'contentData', 'footerData', 'footerProps','closeMenuHtml', 'toggleMenuHtml', 'minifySidebarOn', 'align', 'headerDataRight'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-container',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                moduleSidebar: (props.moduleSidebar && typeof {} == typeof props.moduleSidebar) ? props.moduleSidebar : undefined,
                maxifyAt: (typeof 8 == typeof props.maxifyAt) ? props.maxifyAt : 1024,
                minifyAt: (typeof 8 == typeof props.minifyAt) ? props.minifyAt : 720,
                hideAt: (typeof 8 == typeof props.hideAt) ? props.hideAt : 520,
                displayMinifyMaxifyIcon: (typeof true == typeof props.displayMinifyMaxifyIcon) ? props.displayMinifyMaxifyIcon : undefined,
                // head
                headerProps: (props.headerProps && typeof {} == typeof props.headerProps) ? props.headerProps : {},
                headerData: (props.headerData && typeof {} == typeof props.headerData) ? props.headerData : undefined,
                // content
                contentProps: (props.contentProps && typeof {} == typeof props.contentProps) ? props.contentProps : {},
                contentData: props.contentData ? props.contentData : undefined,
                // foot
                footerData: props.footerData ? props.footerData : undefined,
                footerProps: (props.footerProps && typeof {} == typeof props.footerProps) ? props.footerProps : {},
                closeMenuHtml: props.closeMenuHtml ? props.closeMenuHtml : undefined,
                toggleMenuHtml: props.toggleMenuHtml ? props.toggleMenuHtml : undefined,
                // sidebars blacklist
                minifySidebarOn: props.minifySidebarOn && typeof [] == typeof props.minifySidebarOn && props.minifySidebarOn.length ? props.minifySidebarOn : [],
                align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',
                href: window.location.href,
                headerDataRight: (typeof true == typeof props.headerDataRight) ? props.headerDataRight : false,
            };
        }

        return null;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        window.addEventListener('resize', this.resizeView);
        window.addEventListener('mousedown', this.handleClick);
        this.resizeView();
        this.setIntervals();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeView);
        window.removeEventListener('mousedown', this.handleClick);
        this.setIntervals(false);
    }

    setIntervals(reassignInterval = true){
        clearInterval(this.interval);

        if(reassignInterval){
            this.interval = setInterval( () => {
                const { href } = this.state;

                if(href !== window.location.href){
                    this.setState({ href: window.location.href }, (e) => this.resizeView(null, null, true));
                }
            }, 500);
        }
    }

    handleClick(e) {
        const { isHidden, href, isHiddenClass } = this.state;

        if (this.nodeSideBar && this.nodeSideBar.current && !this.nodeSideBar.current.contains(e.target)) {
            /**
             * Hide opened hidden sidebar on location change
             */
            setTimeout(() => {
                if(isHidden){
                    if('opened' == isHiddenClass){
                        this.setState(this.state.hideOpenedHiddenSidebar);
                    }
                }
            }, 100);
        }

        setTimeout(() => {
            if(href !== window.location.href && isHidden){
                this.setState(this.state.hideOpenedHiddenSidebar, this.resizeView);
            }
            if(href !== window.location.href && !isHidden){
                this.setState({ href: window.location.href }, (e) => this.resizeView(e, true));
            }
        }, 300);
    }

    resizeView(event, persistCurrentSelection = false, isInterval = false) {
        const { minifyAt, maxifyAt, hideAt, minifySidebarOn, hideOpenedHiddenSidebar, isMax, isMin, isHidden, isHiddenClass } = this.state;
        const documentWidth = document.documentElement.getBoundingClientRect().width;

        if(minifySidebarOn && minifySidebarOn.length){
            for(let x = 0; x <= minifySidebarOn.length-1; x++){
                if(typeof '8' == typeof minifySidebarOn[x] && (window.location.href == minifySidebarOn[x] || window.location.hash == minifySidebarOn[x])){
                    return this.setState(hideOpenedHiddenSidebar);
                }
            }
        }

        if(isInterval){
            return this.setState({
                isMax,
                isMin,
                isHidden,
                isHiddenClass
            });
        }
        
        if(persistCurrentSelection){
            return null;
        }

        /**
         * Max
         */
        if (documentWidth >= maxifyAt) {
            return this.setState({
                isMax: true,
                isMin: false,
                isHidden: false,
                isHiddenClass: ''
            });
        }

        /**
         * Hidden
         */
        if (documentWidth <= hideAt) {
            return this.setState({
                isMax: false,
                isMin: false,
                isHidden: true,
                isHiddenClass: 'closed'
            });
        }

        /**
         * Min
         */
        if (documentWidth <= minifyAt) {
            return this.setState({
                isMax: false,
                isMin: true,
                isHidden: false,
                isHiddenClass: ''
            });
        }

        return null;
    }

    /**
     * Get class names for the main sidebar
     */
    getClassNamesSidebar() {
        const { isMin, isHidden } = this.state;

        if (isHidden) {
            return 'SideBar SideBar-hidden';
        }

        if (isMin) {
            return 'SideBar SideBar-min';
        }

        return 'SideBar';
    }

    /**
     * Get class names for the content
     */
    getClassNamesContent() {
        const { isMin, isHidden } = this.state;

        if (isHidden) {
            return 'Content Content-hidden';
        }

        if (isMin) {
            return 'Content Content-min';
        }

        return 'Content';
    }

    /**
     * Toggle the main sidebar
     * if the user clicks the menu icon
     */
    sideBar() {
        const { isMin, isHidden, isHiddenClass } = this.state;

        if(isHidden){

            if('closed' == isHiddenClass){
                return this.setState({
                    isHiddenClass: 'opened',
                    isMax: false,
                    isMin: false,
                    isHidden: true,
                });
            }
            else{
                return this.setState({
                    isHiddenClass: 'closed',
                    isMax: false,
                    isMin: false,
                    isHidden: true,
                });
            }
        }

        if (isMin) {
            this.setState({
                isMax: true,
                isMin: false,
                isHidden: false,
            });
        } 
        else {
            this.setState({
                isMin: true,
                isMax: false,
                isHidden: false,
            });
        }
    }

    render() {
        const { addClass, defaultClass, id, moduleSidebar, toggleMenuHtml, closeMenuHtml, isHidden, isHiddenClass, headerData, headerProps, contentData, contentProps, displayMinifyMaxifyIcon, footerData, footerProps, headerDataRight, align } = this.state;
        const sidebarClassNames = `${this.getClassNamesSidebar()} ${isHiddenClass}`;
        const contentClassNames = this.getClassNamesContent();
        const direction = ['left', 'right'].includes(align) ? align : 'left';

        return (
            <div id={id} className={`${defaultClass} ${direction} ${addClass}`}>
                <div
                    ref={this.nodeSideBar}
                    className={sidebarClassNames}
                >
                    {
                        isHidden &&
                        <span 
                            className='close-side-bar action-icon'
                            onClick={e => this.sideBar()}
                        >
                            {
                                closeMenuHtml
                            }
                        </span>
                    }
                    {
                        moduleSidebar && moduleSidebar
                    }
                </div>
                <div className={contentClassNames} {...contentProps}>
                    <div className={`data-header`} {...headerProps}>
                        {
                            !headerDataRight && headerData && headerData
                        }
                        {
                            displayMinifyMaxifyIcon && 
                            <span 
                                className='minify-menu'
                                onClick={e => this.sideBar()}
                            >
                                {
                                    toggleMenuHtml
                                }
                        </span>
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

export default Container;
