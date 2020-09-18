import React from 'react';

import { Table, Container, SideBar, MenuClickHorizontal, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Container, SideBar, MenuClickHorizontal } from 'react-revolution';

<Container
    addClass='container-example'
    persistUserSelection={false}
    clearPersistUserSelection={true} 
    sidebarMinifiedAt={1024}
    sidebarMaxifiedAt={720}
    displayMinifyMaxifyIcon={true}
    minify={false}
    autopilot={true}
    toggleMenuHtml={
        <i className="fas fa-bars " />
    }
    closeMenuHtml={
        <i className="fas fa-angle-left" />
    }
    moduleSidebar={
        <SideBar
            image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong='text long'
            textShort='text short'
            href={undefined}
            globalStyle={true}
            moduleMenu={
                <MenuClickHorizontal
                    reactRouter={false}
                    animation='height'
                    dropDown={
                        (
                            <i className="fas fa-angle-down dropDownIcon"></i>
                        )
                    }
                    data={
                        [
                            {
                                icon: <i className="fas fa-golf-ball"></i>,
                                text: 'Golf',
                                data: [
                                    {
                                        icon: <i className="fas fa-golf-ball"></i>,
                                        text: 'Golf 1'
                                    },
                                    {
                                        icon: <i className="fas fa-golf-ball"></i>,
                                        text: 'Golf 2'
                                    }
                                ]
                            },
                            {
                                icon: <i className="fas fa-pump-soap"></i>,
                                text: 'Pump Soap',
                                data: [
                                    {
                                        icon: <i className="fas fa-pump-soap"></i>,
                                        text: 'Soap 1'
                                    },
                                    {
                                        icon: <i className="fas fa-pump-soap"></i>,
                                        text: 'Soap 2'
                                    }
                                ]
                            },
                            {
                                icon: <i className="fas fa-pizza-slice"></i>,
                                text: 'Pizza',
                                data: [
                                    {
                                        icon: <i className="fas fa-pizza-slice"></i>,
                                        text: 'Pizza 1'
                                    },
                                    {
                                        icon: <i className="fas fa-pizza-slice"></i>,
                                        text: 'Pizza 2'
                                    }
                                ]
                            },
                            {
                                icon: <i className="fas fa-ice-cream"></i>,
                                text: 'Ice',
                                data: [
                                    {
                                        icon: <i className="fas fa-ice-cream"></i>,
                                        text: 'Ice 1'
                                    },
                                    {
                                        icon: <i className="fas fa-ice-cream"></i>,
                                        text: 'Ice 2'
                                    }
                                ]
                            },
                        ]
                    }
                />
            }
        />
    }
    headerProps={undefined}
    headerData={undefined}
    contentProps={undefined}
    contentData={<div className='CONTENT'/>}
    footerProps={undefined}
    footerData={<div className='FOOTER'/>}
/>`;

const cssExample = `.rr-container.container-example {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    border: 1px solid silver;

    .SideBar {
        width: 150px;
        transition-duration: $default_transition;

        .logo{
            margin-left: 5px;
        }

        .rr-menu-click-horizontal {
            height: calc(100% - 60px);
            overflow-x: hidden;
            overflow-y: hidden;

            .single-entry {
                border-radius: 0px;
                margin: 7px 10px;
                border: none;
                display: block;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                transition-duration: $default_transition;

                i{
                    display: inline-block;
                    font-size: 1.3rem;
                    margin: 0 25px 0 5px;
                }

                .text,
                a {
                    color: #7c8695;
                    font-size: 0.87rem;
                    letter-spacing: 0.0111rem;
                    transition-duration: $default_transition;
                    padding-left: 0px;
                }

                .hasChildren {
                    font-weight: bold;
                }
            }
        }

        .rr-menu-click-horizontal:hover {
            overflow-y: auto;
        }
    }
    .SideBar.SideBar-min {
        width: 50px;
    }
    .SideBar.SideBar-min:hover {
        width: 150px;
    }
    .Content{
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: rgba(122,122,122,.88) transparent;
        scrollbar-width: thin;
        height: 100vh;

        @media screen and (min-width: 720px){
            width: calc(100% - 150px);
            left: 150px;
        }
        width: 100%;
        left: 0px;
    }
    .Content.Content-min{
        width: calc(100% - 50px);
        left: 50px;
    }

    .CONTENT,
    .FOOTER{
        width: calc(100% - 20px);
        border-radius: 10px;
        border:1px dashed black;
        margin: 10px;
    }

    .CONTENT{
        height: calc(80vh - 20px);
    }

    .FOOTER{
        height: calc(20vh - 20px);
    }
}`;

class ReactRevolutionClouds404 extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Container',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Container
                        addClass='container-example'
                        persistUserSelection={false} // set local sotrage on click
                        clearPersistUserSelection={true} // do not remove the local storage on component-did-mount
                        sidebarMinifiedAt={1024}
                        sidebarMaxifiedAt={720}
                        displayMinifyMaxifyIcon={true}
                        minify={false}
                        autopilot={true}
                        toggleMenuHtml={
                            <i className="fas fa-bars " />
                        }
                        closeMenuHtml={
                            <i className="fas fa-angle-left" />
                        }
                        moduleSidebar={
                            <SideBar
                                image={<img alt="image" src='./public/images/icon-48.png' />}
                                textLong='text long'
                                textShort='text short'
                                href={undefined}
                                globalStyle={true}
                                moduleMenu={
                                    <MenuClickHorizontal
                                        reactRouter={false}
                                        animation='height'
                                        dropDown={
                                            (
                                                <i className="fas fa-angle-down dropDownIcon"></i>
                                            )
                                        }
                                        data={
                                            [
                                                {
                                                    icon: <i className="fas fa-golf-ball"></i>,
                                                    text: 'Golf',
                                                    data: [
                                                        {
                                                            icon: <i className="fas fa-golf-ball"></i>,
                                                            text: 'Golf 1'
                                                        },
                                                        {
                                                            icon: <i className="fas fa-golf-ball"></i>,
                                                            text: 'Golf 2'
                                                        }
                                                    ]
                                                },
                                                {
                                                    icon: <i className="fas fa-pump-soap"></i>,
                                                    text: 'Pump Soap',
                                                    data: [
                                                        {
                                                            icon: <i className="fas fa-pump-soap"></i>,
                                                            text: 'Soap 1'
                                                        },
                                                        {
                                                            icon: <i className="fas fa-pump-soap"></i>,
                                                            text: 'Soap 2'
                                                        }
                                                    ]
                                                },
                                                {
                                                    icon: <i className="fas fa-pizza-slice"></i>,
                                                    text: 'Pizza',
                                                    data: [
                                                        {
                                                            icon: <i className="fas fa-pizza-slice"></i>,
                                                            text: 'Pizza 1'
                                                        },
                                                        {
                                                            icon: <i className="fas fa-pizza-slice"></i>,
                                                            text: 'Pizza 2'
                                                        }
                                                    ]
                                                },
                                                {
                                                    icon: <i className="fas fa-ice-cream"></i>,
                                                    text: 'Ice',
                                                    data: [
                                                        {
                                                            icon: <i className="fas fa-ice-cream"></i>,
                                                            text: 'Ice 1'
                                                        },
                                                        {
                                                            icon: <i className="fas fa-ice-cream"></i>,
                                                            text: 'Ice 2'
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    />
                                }
                            />
                        }
                        headerProps={undefined}
                        headerData={undefined}
                        contentProps={undefined}
                        contentData={<div className='CONTENT' />}
                        footerProps={undefined}
                        footerData={<div className='FOOTER' />}
                    />
                )
            }
        ];
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return 'break';
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]), this.countCallbacks + 1);
        });
    }

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />
                {
                    getDescriptionForstyle('rr-container')
                }
                <h1 className="h1-title border-none text-center mb-4">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='rr-table-website'
                    keysToRead={
                        [
                            'key', 'value', 'type', 'default'
                        ]
                    }
                    title={
                        [
                            trans('table.title.key'), trans('table.title.description'), trans('table.title.type'), trans('table.title.default')
                        ]
                    }
                    data={
                        buildTableKeysStructure(
                            [
                                {
                                    key: 'globalStyle',
                                    values: 'globalStyle'
                                },
                                {
                                    key: 'moduleStyle',
                                    values: 'moduleStyle'
                                },
                                {
                                    key: 'id',
                                    values: 'id'
                                },
                                {
                                    key: 'defaultClass',
                                    values: 'class'
                                },
                                {
                                    key: 'addClass',
                                    values: 'addClass'
                                },
                                {
                                    key: 'persistUserSelection',
                                    values: 'persistUserSelection'
                                },
                                {
                                    key: 'clearPersistUserSelection',
                                    values: 'clearPersistUserSelection'
                                },
                                {
                                    key: 'sidebarMinifiedAt',
                                    values: 'sidebarMinifiedAt'
                                },
                                {
                                    key: 'sidebarMaxifiedAt',
                                    values: 'sidebarMaxifiedAt'
                                },
                                {
                                    key: 'displayMinifyMaxifyIcon',
                                    values: 'displayMinifyMaxifyIcon'
                                },
                                {
                                    key: 'minify',
                                    values: 'minify'
                                },
                                {
                                    key: 'autopilot',
                                    values: 'autopilot'
                                },
                                {
                                    key: 'toggleMenuHtml',
                                    values: 'toggleMenuHtml'
                                },
                                {
                                    key: 'closeMenuHtml',
                                    values: 'closeMenuHtml'
                                },
                                {
                                    key: 'moduleSidebar',
                                    values: 'moduleSidebar'
                                },
                                {
                                    key: 'headerProps',
                                    values: 'headerProps'
                                },
                                {
                                    key: 'headerData',
                                    values: 'headerData'
                                },
                                {
                                    key: 'contentProps',
                                    values: 'contentProps'
                                },
                                {
                                    key: 'contentData',
                                    values: 'contentData'
                                },
                                {
                                    key: 'footerProps',
                                    values: 'footerProps'
                                },
                                {
                                    key: 'footerData',
                                    values: 'footerData'
                                },  
                            ],
                            'rr-container'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionClouds404;