import React from 'react';

import { Table, ContainerPopup, SideBar, Menu, PopupHover, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { ContainerPopup, SideBar, Menu, PopupHover } from 'react-revolution';
// import ContainerPopup from 'react-revolution/ContainerPopup';
// import SideBar from 'react-revolution/SideBar';
// import Menu from 'react-revolution/Menu';
// import PopupHover from 'react-revolution/PopupHover';

<ContainerPopup
    addClass='container-example'
    hideAt={1024}
    animationDuration={0}
    minifySidebarOn={
        [

        ]
    }
    toggleMenuHtml={
        (
            <PopupHover
                addClass='PopupHoverStyle'
                direction='left'
                holderData={
                    <i className="fas fa-bars " />
                }
                displayOnHover={true}
                hideOnLeave={true}
                animation={true}
                contentData={this.getMenu()}
            />
        )
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
            moduleMenu={this.getMenu()}
        />
    }
    headerProps={undefined}
    headerData={undefined}
    contentProps={undefined}
    contentData={
        (
            <div className='CONTENT'>
                CONTENT
            </div>
        )
    }
    footerProps={undefined}
    footerData={
        (
            <div className='FOOTER'>
                FOOTER
            </div>
        )
    }
/>`;

const jsExample = `getMenu() {
    return (
        <MenuHeight
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
                                text: 'Golf 1',
                            },
                            {
                                icon: <i className="fas fa-golf-ball"></i>,
                                text: 'Golf 2',
                            }
                        ]
                    },
                    {
                        icon: <i className="fas fa-pump-soap"></i>,
                        text: 'Pump Soap',
                        data: [
                            {
                                icon: <i className="fas fa-pump-soap"></i>,
                                text: 'Soap 1',
                            },
                            {
                                icon: <i className="fas fa-pump-soap"></i>,
                                text: 'Soap 2',
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
    );
}`;

const cssExample = `.container-example {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    border: 1px solid silver;

    .SideBar {
        width: 150px;
        transition-duration: $default-transition;

        .logo{
            margin-left: 5px;
        }

        .rr-menu-height {
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
                transition-duration: $default-transition;

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
                    transition-duration: $default-transition;
                    padding-left: 0px;
                }

                .hasChildren {
                    font-weight: bold;
                }
            }
        }

        .rr-menu-height:hover {
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

class _ContainerPopup extends React.Component {
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
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <ContainerPopup
                        addClass='container-example'
                        hideAt={1024}
                        animationDuration={0}
                        minifySidebarOn={
                            [

                            ]
                        }
                        toggleMenuHtml={
                            (
                                <PopupHover
                                    addClass='PopupHoverStyle'
                                    direction='left'
                                    holderData={
                                        <i className="fas fa-bars " />
                                    }
                                    displayOnHover={true}
                                    hideOnLeave={true}
                                    animation={true}
                                    contentData={this.getMenu()}
                                />
                            )
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
                                moduleMenu={this.getMenu()}
                            />
                        }
                        headerProps={undefined}
                        headerData={undefined}
                        contentProps={undefined}
                        contentData={
                            (
                                <div className='CONTENT'>
                                    CONTENT
                                </div>
                            )
                        }
                        footerProps={undefined}
                        footerData={
                            (
                                <div className='FOOTER'>
                                    FOOTER
                                </div>
                            )
                        }
                    />
                )
            }
        ];
    }

    getMenu() {
        return (
            <Menu
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
                                    text: 'Golf 1',
                                },
                                {
                                    icon: <i className="fas fa-golf-ball"></i>,
                                    text: 'Golf 2',
                                }
                            ]
                        },
                        {
                            icon: <i className="fas fa-pump-soap"></i>,
                            text: 'Pump Soap',
                            data: [
                                {
                                    icon: <i className="fas fa-pump-soap"></i>,
                                    text: 'Soap 1',
                                },
                                {
                                    icon: <i className="fas fa-pump-soap"></i>,
                                    text: 'Soap 2',
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
        );
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return Promise.resolve('break');
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
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                <StyleImplementation />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
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
                                    key: 'hideAt',
                                    values: 'hideAt'
                                },
                                {
                                    key: 'toggleMenuHtml',
                                    values: 'containerPopup.toggleMenuHtml'
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
                                {
                                    key: 'align',
                                    values: 'menu.align'
                                },
                                {
                                    key: 'minifySidebarOn',
                                    values: 'minifySidebarOn'
                                },
                                {
                                    key: 'headerDataRight',
                                    values: 'headerDataRight'
                                },
                                {
                                    key: 'animationDuration',
                                    values: 'container.animationDuration'
                                },
                            ],
                            'rr-container-popup'
                        )
                    }
                />
            </div>
        );
    }
};

export default _ContainerPopup;