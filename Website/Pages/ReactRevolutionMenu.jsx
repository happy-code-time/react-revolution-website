import React from 'react';

import { Table, Menu, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import { host } from '../Globals';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Menu } from 'react-revolution';
// import Menu from 'react-revolution/Menu';

<Menu
    addClass='rr-menu-example'
    reactRouter={false}
    animation='height' // height, scale, opacity
    data={
        [
            {
                text: 'Deep 1',
                data: [
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Deep 1',
                data: [
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
/>`;

const codeExample2 = `import { Menu } from 'react-revolution';
// import Menu from 'react-revolution/Menu';

<Menu
    dashed={true}
    addClass='rr-menu-example'
    reactRouter={false}
    animation='height' // height, scale, opacity
    data={
        [
            {
                text: 'Deep 1',
                data: [
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Deep 1',
                data: [
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Deep 2',
                        data: [
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                            {
                                text: 'Deep 3',
                                data: [
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                    {
                                        text: 'Deep 4 ...',
                                        href: '#/',
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
/>`;

const codeExample3 = `import { Menu } from 'react-revolution';
// import Menu from 'react-revolution/Menu';

<Menu
    addClass='rr-menu-example'
    closeOnClickOutside={true}
    reactRouter={false}
    animation='height' // height, scale, opacity
    data={
        [
            {
                text: 'Entry 1 - no childs',
                href: '#',
            },
            {
                text: 'Entry 2 - toggle childs',
                data: [
                    {
                        text: 'Child 1',
                        href: '#',
                    },
                    {
                        text: 'Child 2',
                        href: '#',
                    },
                    {
                        text: 'Child 3',
                        href: '#',
                    },
                ]
            },
            {
                text: 'Entry 3 - toggle childs',
                data: [
                    {
                        text: 'Child 1',
                        href: '#',
                    },
                    {
                        text: 'Child 2',
                        href: '#',
                    },
                    {
                        text: 'Child 3',
                        href: '#',
                    },
                    {
                        text: 'Child 4',
                        href: '#',
                    },
                    {
                        text: 'Child 5',
                        href: '#',
                    },
                    {
                        text: 'Child 6',
                        href: '#',
                    },
                ]
            }
        ]
    }
/>`;

const cssExample = `.rr-menu-example{
    border-radius: 5px;
    border: 1px solid rgb(222,222,222);
    width: 250px;
    box-sizing: border-box;
    padding: 5px;

    a,
    .text{
        text-decoration: none;
        color: #7c8695;
    }

    .hasChildren{
        font-weight: 550;
    }
}`;

class ReactRevolutionMenu extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Menu',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Menu
                        addClass='rr-menu-example'
                        reactRouter={false}
                        animation='height' // height, scale, opacity
                        data={
                            [
                                {
                                    text: 'Deep 1',
                                    data: [
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    text: 'Deep 1',
                                    data: [
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        }
                    />
                )
            },
            {
                title: 'Menu',
                description: trans('dashed_example'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Menu
                        addClass='rr-menu-example'
                        reactRouter={false}
                        dashed={true}
                        animation='height' // height, scale, opacity
                        data={
                            [
                                {
                                    text: 'Deep 1',
                                    data: [
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    text: 'Deep 1',
                                    data: [
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            text: 'Deep 2',
                                            data: [
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/react-revolution-menu`,
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        }
                    />
                )
            },
            {
                title: 'Menu',
                description: 'closeOnClickOutside={true}.',
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Menu
                        addClass='rr-menu-example'
                        closeOnClickOutside={true}
                        reactRouter={false}
                        animation='height' // height, scale, opacity
                        data={
                            [
                                {
                                    text: 'Toggle',
                                    data: [
                                        {
                                            text: 'Child 1',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                        {
                                            text: 'Child 2',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                        {
                                            text: 'Child 3',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                    ]
                                },
                                {
                                    text: 'Toggle',
                                    data: [
                                        {
                                            text: 'Child 1',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                        {
                                            text: 'Child 2',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                        {
                                            text: 'Child 3',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                        {
                                            text: 'Child 4',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                        {
                                            text: 'Child 5',
                                            href: `${host}#/react-revolution-menu`,
                                        },
                                        {
                                            text: 'Child 6',
                                            href: `${host}#/react-revolution-menu`,
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
                    getDescriptionForstyle('rr-menu')
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
                                    key: 'dashed',
                                    values: 'dashed'
                                },
                                {
                                    key: 'reactRouter',
                                    values: 'reactRouter'
                                },
                                {
                                    key: 'closeOnClickOutside',
                                    values: 'closeOnClickOutside'
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
                                },
                                {
                                    key: 'headData',
                                    values: 'menu.headData'
                                },
                                {
                                    key: 'activeClassName',
                                    values: 'menu.activeClassName'
                                },
                                {
                                    key: 'toggledClassName',
                                    values: 'menu.toggledClassName'
                                },
                                {
                                    key: 'isActiveTree',
                                    values: 'menu.isActiveTree'
                                },
                                {
                                    key: 'forceClose',
                                    values: 'menu.forceClose'
                                },
                                {
                                    key: 'forceCloseAll',
                                    values: 'menu.forceCloseAll'
                                },
                                {
                                    key: 'align',
                                    values: 'menu.align'
                                },
                                {
                                    key: 'alignIcon',
                                    values: 'menu.alignIcon'
                                },
                            ],
                            'rr-menu'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionMenu;

