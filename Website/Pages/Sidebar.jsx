import React from 'react';

import { Table, SideBar, Menu, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import { host } from '../Globals';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { SideBar, Menu } from 'react-revolution';
// import SideBar from 'react-revolution/SideBar';
// import Menu from 'react-revolution/Menu';

<div className="rr-revolution-sidebar-example">
    <SideBar
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

    .rr-sidebar{
        border: 1px solid #dadce0;
        border-radius: 3px;
        height: calc(100% - 2px); // to see the border
        width: calc(100% - 2px); // to see the border
    }
}`;

class _Sidebar extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'SideBar',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-sidebar-example">
                        <SideBar
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
                    fireScrollEvent={30}
                    fireScrollBack={true} 
                />
                {
                    getDescriptionForstyle('rr-sidebar')
                }
                <h1 className="h1-title border-none my-3">
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
                            'rr-sidebar'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Sidebar;

