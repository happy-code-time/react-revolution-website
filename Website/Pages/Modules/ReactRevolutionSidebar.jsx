import React from 'react';

import { Table, SideBar, MenuClickHorizontal, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

const codeExample1 = `import { SideBar, MenuClickHorizontal } from 'react-revolution';

<div className="rr-revolution-sidebar-example">
    <SideBar
        image={<img alt="image" src='./public/images/icon-48.png' />}
        textLong='text long'
        textShort='text short'
        moduleMenu={
            <MenuClickHorizontal
                reactRouter={false}
                animation='height' // height, scale, opacity
                data={
                    [
                        {
                            text: 'Entry 1 - toggle',
                            data: [
                                {
                                    text: 'Child 1',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Child 2',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Child 3',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                            ]
                        },
                        {
                            text: 'Entry 2 - toggle',
                            data: [
                                {
                                    text: 'Child 1',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Child 2',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Child 3',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Child 4',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Child 5',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Child 6',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
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

class ReactRevolutionSidebar extends React.Component {
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
                                <MenuClickHorizontal
                                    reactRouter={false}
                                    animation='height' // height, scale, opacity
                                    data={
                                        [
                                            {
                                                text: 'Entry 1 - toggle',
                                                data: [
                                                    {
                                                        text: 'Child 1',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                    {
                                                        text: 'Child 2',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                    {
                                                        text: 'Child 3',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                ]
                                            },
                                            {
                                                text: 'Entry 2 - toggle',
                                                data: [
                                                    {
                                                        text: 'Child 1',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                    {
                                                        text: 'Child 2',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                    {
                                                        text: 'Child 3',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                    {
                                                        text: 'Child 4',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                    {
                                                        text: 'Child 5',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                                    },
                                                    {
                                                        text: 'Child 6',
                                                        href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
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
        console.log(icon);
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
                <h1 className="h1-title border-none text-center mb-4">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    keysToRead={
                        [
                            'key', 'value', 'type', 'default'
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
                                    key: 'class',
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

export default ReactRevolutionSidebar;

