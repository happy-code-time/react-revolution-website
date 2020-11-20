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

        this.state = {
            /**
             * App
             */
            href: window.location.href,
            minifiedSecondSideBar: true,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-container',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            moduleSidebar: (props.moduleSidebar && typeof {} == typeof props.moduleSidebar) ? props.moduleSidebar : undefined,
            persistUserSelection: (typeof true == typeof props.persistUserSelection) ? props.persistUserSelection : undefined,
            clearPersistUserSelection: (typeof true == typeof props.clearPersistUserSelection) ? props.clearPersistUserSelection : undefined,
            sidebarMinifiedAt: (typeof 8 == typeof props.sidebarMinifiedAt) ? props.sidebarMinifiedAt : 720,
            sidebarMaxifiedAt: (typeof 8 == typeof props.sidebarMaxifiedAt) ? props.sidebarMaxifiedAt : 1024,
            displayMinifyMaxifyIcon: (typeof true == typeof props.displayMinifyMaxifyIcon) ? props.displayMinifyMaxifyIcon : undefined,
            minify: (typeof true == typeof props.minify) ? props.minify : false,
            headerProps: (props.headerProps && typeof {} == typeof props.headerProps) ? props.headerProps : {},
            headerData: (props.headerData && typeof {} == typeof props.headerData) ? props.headerData : undefined,
            contentProps: (props.contentProps && typeof {} == typeof props.contentProps) ? props.contentProps : {},
            contentData: props.contentData ? props.contentData : undefined,
            footerData: props.footerData ? props.footerData : undefined,
            footerProps: (props.footerProps && typeof {} == typeof props.footerProps) ? props.footerProps : {},
            autopilot: (typeof true == typeof props.autopilot) ? props.autopilot : false,
            closeMenuHtml: props.closeMenuHtml ? props.closeMenuHtml : undefined,
            toggleMenuHtml: props.toggleMenuHtml ? props.toggleMenuHtml : undefined,
            isMinified: (typeof true == typeof props.isMinified) ? props.isMinified : false, 
            sidebarMin: (typeof true == typeof props.sidebarMin) ? props.sidebarMin : false, 
            contentMin: (typeof true == typeof props.contentMin) ? props.contentMin : false, 
            align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',
        };

        this.nodeSideBar = React.createRef();
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['moduleSidebar', 'headerData', 'contentData', 'persistUserSelection', 'sidebarMinifiedAt', 'sidebarMaxifiedAt', 'displayMinifyMaxifyIcon', 'minify', 'footerData', 'isMinified', 'sidebarMin', 'contentMin', 'align'], props, state)) {

            if(state.persistUserSelection && null !== localStorage.getItem('persistUserSelection')){
                try{
                    const saved = JSON.parse(localStorage.getItem('persistUserSelection'));
                    const { sidebarMin, contentMin, isMinified, minifiedSecondSideBar } = saved;
                    return { sidebarMin, contentMin, isMinified, minifiedSecondSideBar };
                }
                catch(e){}
            }

            if (state.minify !== props.minify) {

                if (props.minify) {
                    return {
                        sidebarMin: true,
                        contentMin: true,
                        isMinified: true,
                        minify: true,
                        minifiedSecondSideBar: true
                    };
                }
                else {
                    return {
                        sidebarMin: false,
                        contentMin: false,
                        isMinified: false,
                        minify: false
                    };
                }
            }

            return {
                moduleSidebar: (props.moduleSidebar && typeof {} == typeof props.moduleSidebar) ? props.moduleSidebar : undefined,
                headerData: (props.headerData && typeof {} == typeof props.headerData) ? props.headerData : undefined,
                contentData: (props.contentData && typeof {} == typeof props.contentData) ? props.contentData : undefined,
                persistUserSelection: (typeof true == typeof props.persistUserSelection) ? props.persistUserSelection : undefined,
                clearPersistUserSelection: (typeof true == typeof props.clearPersistUserSelection) ? props.clearPersistUserSelection : undefined,
                sidebarMinifiedAt: (typeof 8 == typeof props.sidebarMinifiedAt) ? props.sidebarMinifiedAt : 720,
                sidebarMaxifiedAt: (typeof 8 == typeof props.sidebarMaxifiedAt) ? props.sidebarMaxifiedAt : 1024,
                displayMinifyMaxifyIcon: (typeof true == typeof props.displayMinifyMaxifyIcon) ? props.displayMinifyMaxifyIcon : undefined,
                minify: props.minify,
                footerData: props.footerData,
                align: (props.align && typeof '8' == typeof props.align) ? props.align : 'left',
            };
        }

        return null;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { clearPersistUserSelection } = this.state;

        if (clearPersistUserSelection || undefined === clearPersistUserSelection) {
            localStorage.removeItem('persistUserSelection');
        }

        window.addEventListener('resize', this.resizeView);
        window.addEventListener('mousedown', this.handleClick);
        this.resizeView();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeView);
        window.removeEventListener('mousedown', this.handleClick);
    }

    handleClick(e) {
        const { minifiedSecondSideBar, href, sidebarMaxifiedAt } = this.state;

        if (this.nodeSideBar && this.nodeSideBar.current && !this.nodeSideBar.current.contains(e.target) && this.nodeSideBar.current.classList && this.nodeSideBar.current.classList.contains('SidebarMinified')) {
            this.nodeSideBar.current.classList.remove('opened');

            if (!minifiedSecondSideBar) {
                setTimeout(() => {
                    this.setState({
                        minifiedSecondSideBar: true
                    });
                }, 100);
            }
        }

        /**
         * Auto closing sidebar on location change
         * and if width smaller then 1024
         */
        setTimeout(() => {

            if (sidebarMaxifiedAt && sidebarMaxifiedAt >= document.documentElement.getBoundingClientRect().width) {
                this.resizeView();
            }

            if (this.nodeSideBar && this.nodeSideBar.current && this.nodeSideBar.current.classList && this.nodeSideBar.current.classList.contains('SidebarMinified') && href !== window.location.href) {

                this.setState({
                    href: window.location.href
                });

                if (!minifiedSecondSideBar) {
                    this.setState({
                        minifiedSecondSideBar: true
                    });
                }
            }
        }, 300);
    }

    resizeView() {
        const { autopilot, persistUserSelection, sidebarMinifiedAt, sidebarMaxifiedAt, minify } = this.state;

        if (persistUserSelection && null !== localStorage.getItem('persistUserSelection')) {
            try {
                const userSet = JSON.parse(localStorage.getItem('persistUserSelection'));
                const { sidebarMin, contentMin, isMinified, minifiedSecondSideBar } = userSet;
                return this.setState({ sidebarMin, contentMin, isMinified, minifiedSecondSideBar });
            }
            catch (e) {
                //
            }
        }

        if (minify) {
            return this.setState({
                sidebarMin: true,
                contentMin: true,
                isMinified: true,
            });
        }

        const documentWidth = document.documentElement.getBoundingClientRect().width;

        if (autopilot) {
            /**
             * Lower then XXXXX
             */
            if (documentWidth <= sidebarMinifiedAt) {

                if (documentWidth > sidebarMaxifiedAt) {
                    return this.setState({
                        sidebarMin: true,
                        contentMin: true,
                        isMinified: false, // show the minified icons set
                        minifiedSecondSideBar: true
                    });
                }

                if (documentWidth < sidebarMaxifiedAt) {
                    return this.setState({
                        sidebarMin: true,
                        contentMin: true,
                        isMinified: true,
                    });
                }

            }

            /**
             * Bigger then XXXXXX
             */
            if (documentWidth >= sidebarMaxifiedAt) {
                return this.setState({
                    sidebarMin: false,
                    contentMin: false,
                    isMinified: false,
                    minifiedSecondSideBar: true
                });
            }
        }
        else {
            /**
             * Bigger then XXXXXX
             */
            if (documentWidth >= sidebarMaxifiedAt) {
                return this.setState({
                    sidebarMin: false,
                    contentMin: false,
                    isMinified: false,
                    minifiedSecondSideBar: true
                });
            }

            /**
             * Lower then XXXX
             */
            if (documentWidth <= sidebarMinifiedAt) {
                return this.setState({
                    sidebarMin: true,
                    contentMin: true,
                    isMinified: true,
                });
            }

            /**
             * Lower then XXXXX
             */
            if (documentWidth < sidebarMaxifiedAt) {
                return this.setState({
                    sidebarMin: true,
                    contentMin: true,
                    isMinified: false, // show the minified icons set
                    minifiedSecondSideBar: true
                });
            }
        }

        return null;
    }

    /**
     * Get class names for the main sidebar
     */
    getClassNamesSidebar() {
        const { sidebarMin, contentMin } = this.state;

        if (contentMin || sidebarMin) {
            return 'SideBar SideBar-min';
        }
        return 'SideBar';
    }

    /**
     * Get class names for the content
     */
    getClassNamesContent() {
        const { contentMin, sidebarMin } = this.state;

        /**
         * For screens smaller then 720px
         * toggle the class name 'opened'
         */
        if (this.state.isMinified) {
            const { minifiedSecondSideBar } = this.state;

            if (minifiedSecondSideBar) {
                return 'Content minified';
            }
            return 'Content minified';
        }
        /**
         * Default content functionality if
         * screen is bigger then 720px
         */

        if (contentMin || sidebarMin) {
            return 'Content Content-min';
        }
        return 'Content';
    }

    /**
     * Toggle the main sidebar
     * if the user clicks the menu icon
     */
    sideBar() {
        const { isMinified } = this.state;

        /**
         * Toggle the second sidebar on the x-axis (css property: left)
         */
        if (isMinified) {
            this.setState({
                minifiedSecondSideBar: !this.state.minifiedSecondSideBar,
            }, () => {
                const { sidebarMin, contentMin, isMinified, minifiedSecondSideBar, persistUserSelection } = this.state;

                if (persistUserSelection) {
                    localStorage.setItem('persistUserSelection', JSON.stringify({ sidebarMin, contentMin, isMinified, minifiedSecondSideBar }));
                }
            });
        } 
        else {
            this.setState({
                sidebarMin: !this.state.sidebarMin,
                contentMin: !this.state.contentMin,
            }, () => {
                const { sidebarMin, contentMin, isMinified, minifiedSecondSideBar, persistUserSelection } = this.state;

                if (persistUserSelection) {
                    localStorage.setItem('persistUserSelection', JSON.stringify({ sidebarMin, contentMin, isMinified, minifiedSecondSideBar }));
                }
            });
        }
    }

    render() {
        const { addClass, defaultClass, id, moduleSidebar, toggleMenuHtml, closeMenuHtml, headerData, headerProps, contentData, contentProps, displayMinifyMaxifyIcon, footerData, footerProps, isMinified, align } = this.state;
        const sidebarClassNames = this.getClassNamesSidebar();
        const contentClassNames = this.getClassNamesContent();
        const cls = `${isMinified ? (this.state.minifiedSecondSideBar ? 'SideBar SidebarMinified' : 'SideBar SidebarMinified opened') : sidebarClassNames}`;
        const direction = ['left', 'right'].includes(align) ? align : 'left';

        return (
            <div id={id} className={`${defaultClass} ${direction} ${addClass}`}>
                <div
                    ref={this.nodeSideBar}
                    className={cls}
                >
                    {
                        isMinified &&
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
                            headerData && headerData
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
