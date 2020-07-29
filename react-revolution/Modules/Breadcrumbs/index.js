import * as React from 'react';

import urlExtract from '../../Functions/urlExtract';

import uuid from '../internalFunctions/uuid';

import loadStyle from '../internalFunctions/loadStyle';

import MenuClickHorizontal from '../MenuClickHorizontal';

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);

        this.buildBreadcrumbs = this.buildBreadcrumbs.bind(this);

        this.state = {
            /**
             * App
             */
            protocol: '',
            domain: '',
            paths: [],
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-breadcrumbs',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            hashRouter: (typeof true == typeof props.hashRouter) ? props.hashRouter : false,
            domainName: (props.domainName && typeof '8' == typeof props.domainName) ? props.domainName : undefined,
            reactRouter: typeof true == typeof props.reactRouter ? props.reactRouter : false,
            moduleMenu: (props.moduleMenu && typeof {} == typeof props.moduleMenu) ? props.moduleMenu : undefined,
            delimiter: (props.delimiter && typeof '8' == typeof props.delimiter) ? props.delimiter : '>',
            overwriteText: typeof true == typeof props.overwriteText ? props.overwriteText : false,
        };
    }

    componentDidMount() {
        this.buildBreadcrumbs();
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
    }

    buildBreadcrumbs() {
        const { hashRouter } = this.state;

        let extracted = urlExtract(hashRouter);
        extracted = extracted.href;

        this.setState({
            protocol: extracted.protocol,
            domain: extracted.domain,
            paths: extracted.paths,
        })
    }

    buildModuleMenu(moduleMenu, text) {
        if(moduleMenu){
            const { overwriteText } = this.state;
            const { animation, data, moduleStyle, globalStyle, reactRouter, id, addClass, defaultClass } = moduleMenu;

            if(data && 0 !== data.length && !overwriteText){
                data[0].text = text;
            }
    
            return (
                <MenuClickHorizontal
                    id={id}
                    class={defaultClass}
                    addClass={addClass}
                    reactRouter={reactRouter}
                    animation={animation}
                    data={data}
                    moduleStyle={moduleStyle}
                    globalStyle={globalStyle}
                />
            );
        }

        return '';
    }

    getTag(link = '', text = '', buildMenu = false) {
        const { reactRouter, moduleMenu } = this.state;
        const moduleMenuJsx = this.buildModuleMenu(moduleMenu, text);

        if (reactRouter) {

            if (buildMenu && moduleMenu) {
                return (
                    <span className="menu-span">
                        {
                            moduleMenuJsx
                        }
                    </span>
                );
            }

            return (
                <Link to={link}>
                    {
                        text
                    }
                </Link>
            );
        }

        if (buildMenu && moduleMenu) {
            return (
                <span className="menu-span">
                    {
                        moduleMenuJsx
                    }
                </span>
            );
        }

        return (
            <a href={link}>
                {
                    text
                }
            </a>
        );
    }

    getSingleBreadcrumb(addedPaths, path, isLast) {
        const { delimiter, paths } = this.state;

        if (!isLast && paths.length) {
            return (
                <span className="single-entry-span">
                    <li key={uuid()} className="single-entry-li">
                        {
                            this.getTag(addedPaths, path, isLast)
                        }
                    </li>
                    <span className="delimiter">
                        {
                            delimiter
                        }
                    </span>
                </span>
            );
        }

        return (
            <li key={uuid()} className="single-entry-li">
                {
                    this.getTag(addedPaths, path, isLast)
                }
            </li>
        );
    }

    render() {
        const { addClass, defaultClass, id, protocol, domain, paths, domainName, hashRouter } = this.state;
        let addedPaths = `${protocol}${domain}`;

        return (
            <ul className={`${defaultClass} ${addClass}`} id={id}>
                {
                    protocol && domain &&
                    this.getSingleBreadcrumb(`${protocol}${domain}`, `${domainName ? domainName : `${protocol}${domain}`}`, false)
                }
                {
                    paths && 0 !== paths.length &&
                    paths.map((breadcrumb, i) => {
                        const { path } = breadcrumb;
                        
                        if(hashRouter){
                            addedPaths += path;
                        }
                        else{
                            addedPaths += `/${path}`;
                        }

                        const isLast = (i == paths.length - 1) ? true : false;
                        return this.getSingleBreadcrumb(addedPaths, path, isLast)
                    })
                }
            </ul>
        )
    }
}

export default Breadcrumbs;