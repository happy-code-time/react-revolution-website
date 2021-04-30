import React from 'react';
import { Table, Container, Sidebar, Menu, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { Container, Sidebar, Menu } from 'react-revolution';
// import Container from 'react-revolution/Container';
// import Sidebar from 'react-revolution/Sidebar';
// import Menu from 'react-revolution/Menu';

<Container
    addClass='container-example'
    minifyAt={1024}
    maxifyAt={720}
    displayMinifyMaxifyIcon={true}
    toggleMenuHtml={
        <i className="fas fa-bars " />
    }
    closeMenuHtml={
        <i className="fas fa-angle-left" />
    }
    moduleSidebar={
        <Sidebar
            image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong='text long'
            textShort='text short'
            href={undefined}
            moduleMenu={
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
    contentData={<div className='CONTENT'>content data</div>}
    footerProps={undefined}
    footerData={<div className='FOOTER'> footer data</div>}
/>`;

const codeExample2 = `import { Container, Sidebar, Menu } from 'react-revolution';
// import Container from 'react-revolution/Container';
// import Sidebar from 'react-revolution/Sidebar';
// import Menu from 'react-revolution/Menu';

<Container
    animationDuration={300}
    sidebarWidth={250} // default value
    sidebarMinWidth={50} // default value
    addClass='container-example'
    displayMinifyMaxifyIcon={true}
    toggleMenuHtml={
        <i className="fas fa-bars " />
    }
    closeMenuHtml={
        <i className="fas fa-angle-left" />
    }
    moduleSidebar={
        <Sidebar
            image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong='text long'
            textShort='text short'
            href={undefined}
            moduleMenu={
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
    contentData={<div className='CONTENT'>content data</div>}
    footerProps={undefined}
    footerData={<div className='FOOTER'> footer data</div>}
/>`;

const cssExample = `.container-example {
    overflow-x: hidden;
    
    .area-sidebar{
        position: absolute;
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

class _Container extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Container',
                description: trans('container.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Container
                        addClass='container-example'
                        displayMinifyMaxifyIcon={true}
                        toggleMenuHtml={
                            <i className="fas fa-bars " />
                        }
                        closeMenuHtml={
                            <i className="fas fa-angle-left" />
                        }
                        moduleSidebar={
                            <Sidebar
                                image={<img alt="image" src='./public/images/icon-48.png' />}
                                textLong='text long'
                                textShort='text short'
                                href={undefined}
                                moduleMenu={
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
                        contentData={<div className='CONTENT'>content data</div>}
                        footerProps={undefined}
                        footerData={<div className='FOOTER'> footer data</div>}
                    />
                )
            },
            {
                title: 'Container',
                description: trans('container.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Container
                        animationDuration={300}
                        sidebarWidth={250} // default value
                        sidebarMinWidth={50} // default value
                        addClass='container-example'
                        displayMinifyMaxifyIcon={true}
                        toggleMenuHtml={
                            <i className="fas fa-bars " />
                        }
                        closeMenuHtml={
                            <i className="fas fa-angle-left" />
                        }
                        moduleSidebar={
                            <Sidebar
                                image={<img alt="image" src='./public/images/icon-48.png' />}
                                textLong='text long'
                                textShort='text short'
                                href={undefined}
                                moduleMenu={
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
                        contentData={<div className='CONTENT'>content data</div>}
                        footerProps={undefined}
                        footerData={<div className='FOOTER'> footer data</div>}
                    />
                )
            }
        ];
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
                                <StyleImplementation 
                    className={this.constructor.name}
                />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='Table-website'
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
                                    key: 'minifyAt',
                                    values: 'minifyAt'
                                },
                                {
                                    key: 'maxifyAt',
                                    values: 'maxifyAt'
                                },
                                {
                                    key: 'displayMinifyMaxifyIcon',
                                    values: 'displayMinifyMaxifyIcon'
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
                                {
                                    key: 'sidebarWidth',
                                    values: 'container.sidebarWidth'
                                },
                                {
                                    key: 'sidebarMinWidth',
                                    values: 'container.sidebarMinWidth'
                                },
                            ],
                            'Container'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Container;