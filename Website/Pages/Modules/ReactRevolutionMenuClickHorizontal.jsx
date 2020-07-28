import React from 'react';

import { Table, MenuClickHorizontal, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

const codeExample1 = `import { MenuClickHorizontal } from 'react-revolution';

<MenuClickHorizontal
    reactRouter={false}
    animation='height' // height, scale, opacity
    data={
        [
            {
                text: 'Entry 1 - no childs',
                href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
            },
            {
                text: 'Entry 2 - toggle childs',
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
                text: 'Entry 3 - toggle childs',
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
/>`;

class ReactRevolutionMenuClickHorizontal extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'MenuClickHorizontal',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <MenuClickHorizontal
                        reactRouter={false}
                        animation='height' // height, scale, opacity
                        data={
                            [
                                {
                                    text: 'Entry 1 - no childs',
                                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                                },
                                {
                                    text: 'Entry 2 - toggle childs',
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
                                    text: 'Entry 3 - toggle childs',
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
                                    key: 'reactRouter',
                                    values: 'reactRouter'
                                },
                                {
                                    key: 'animation',
                                    values: 'accordion.animation'
                                },
                                {
                                    key: 'data.text',
                                    values: 'accordion.data.text'
                                },
                                {
                                    key: 'data.toggled',
                                    values: 'accordion.data.toggled'
                                },
                                {
                                    key: 'data.href',
                                    values: 'accordion.data.href'
                                },
                                {
                                    key: 'data.icon',
                                    values: 'accordion.data.icon'
                                },
                                {
                                    key: 'data.props',
                                    values: 'props'
                                }
                            ],
                            'rr-menu-click-horizontal'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionMenuClickHorizontal;

