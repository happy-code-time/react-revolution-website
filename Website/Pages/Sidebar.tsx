import React from 'react';
//@ts-ignore
import { Table, Sidebar, Menu, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import { host } from '../Globals';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { Sidebar, Menu } from 'react-revolution';
// import Sidebar from 'react-revolution/Sidebar';
// import Menu from 'react-revolution/Menu';

<div className="rr-revolution-sidebar-example">
    <Sidebar
        image={<img alt="image" src='./public/images/icon-48.png' />}
        textLong='text long'
        textShort='text short'
        moduleMenu={
            <Menu
                reactRouter={false}
                animation='height' // height, scale, opacity
                data={
                    [
                        {
                            text: 'Entry 1 - toggle',
                            data: [
                                {
                                    text: 'Child 1',
                                    href: '#',
                                },
                                {
                                    text: 'Child 2',
                                    href: '#',
                                },
                            ]
                        },
                        {
                            text: 'Entry 2 - toggle',
                            data: [
                                {
                                    text: 'Child 1',
                                    href: '#',
                                },
                                {
                                    text: 'Child 2',
                                    href: '#',
                                },
                            ]
                        }
                    ]
                }
            />
        }
    />
</div>`;

const cssExample = `.rr-revolution-sidebar-example{
    position: relative;
    min-height: 300px;
    height: 50vh;
    width: 200px;
    margin: 0 10px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 2px;

    .Sidebar{
        border: 1px solid #dadce0;
        border-radius: 3px;
        height: calc(100% - 2px); // to see the border
        width: calc(100% - 2px); // to see the border
    }
}`;

class _Sidebar extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Sidebar',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-sidebar-example">
                        <Sidebar
                            image={<img alt="image" src='./public/images/icon-48.png' />}
                            textLong='text long'
                            textShort='text short'
                            // href='#'
                            // hrefProps={
                            //     {
                            //         target: '_blank'
                            //     }
                            // }
                            moduleMenu={
                                <Menu
                                    reactRouter={false}
                                    animation='height' // height, scale, opacity
                                    data={
                                        [
                                            {
                                                text: 'Entry 1 - toggle',
                                                data: [
                                                    {
                                                        text: 'Child 1',
                                                        href: `${host}#/components/sidebar`,
                                                    },
                                                    {
                                                        text: 'Child 2',
                                                        href: `${host}#/components/sidebar`,
                                                    },
                                                ]
                                            },
                                            {
                                                text: 'Entry 2 - toggle',
                                                data: [
                                                    {
                                                        text: 'Child 1',
                                                        href: `${host}#/components/sidebar`,
                                                    },
                                                    {
                                                        text: 'Child 2',
                                                        href: `${host}#/components/sidebar`,
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                />
                            }
                        />
                    </div>
                )
            },
        ];
    }

    callback(clickEvent, icon) {
        console.info(icon);
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return Promise.resolve('break');
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]));
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
                    data={buildModulesJsx(this.examples[0])} // Default as the first example
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
                                    key: 'image',
                                    values: 'image'
                                },
                                {
                                    key: 'moduleMenu',
                                    values: 'moduleMenu'
                                },
                                {
                                    key: 'textLong',
                                    values: 'textLong'
                                },
                                {
                                    key: 'textShort',
                                    values: 'textShort'
                                },
                                {
                                    key: 'href',
                                    values: 'href'
                                },
                                {
                                    key: 'hrefProps',
                                    values: 'hrefProps'
                                },
                            ],
                            'Sidebar'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Sidebar;

