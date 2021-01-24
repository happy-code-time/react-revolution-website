import React from 'react';
import { Table, MenuHeight, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import { host } from '../Globals';

const codeExample1 = `import { MenuHeight } from 'react-revolution';
// import MenuHeight from 'react-revolution/MenuHeight';

<MenuHeight
    addClass='rr-menu-example'
    reactRouter={false}
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

const codeExample2 = `import { MenuHeight } from 'react-revolution';
// import MenuHeight from 'react-revolution/MenuHeight';

<MenuHeight
    dashed={true}
    addClass='rr-menu-example'
    reactRouter={false}
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

const codeExample3 = `import { MenuHeight } from 'react-revolution';
// import MenuHeight from 'react-revolution/MenuHeight';

<MenuHeight
    addClass='rr-menu-example'
    closeOnClickOutside={true}
    reactRouter={false}
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

class _MenuHeight extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'MenuHeight',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <MenuHeight
                        addClass='rr-menu-example'
                        reactRouter={false}
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                title: 'MenuHeight',
                description: trans('dashed_example'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <MenuHeight
                        addClass='rr-menu-example'
                        reactRouter={false}
                        dashed={true}
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                    ]
                                                },
                                                {
                                                    text: 'Deep 3',
                                                    data: [
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
                                                        },
                                                        {
                                                            text: 'Deep 4 ...',
                                                            href: `${host}#/components/menu-height`,
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
                title: 'MenuHeight',
                description: 'closeOnClickOutside={true}',
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <MenuHeight
                        addClass='rr-menu-example'
                        closeOnClickOutside={true}
                        reactRouter={false}
                        data={
                            [
                                {
                                    text: 'Toggle',
                                    data: [
                                        {
                                            text: 'Child 1',
                                            href: `${host}#/components/menu-height`,
                                        },
                                        {
                                            text: 'Child 2',
                                            href: `${host}#/components/menu-height`,
                                        },
                                        {
                                            text: 'Child 3',
                                            href: `${host}#/components/menu-height`,
                                        },
                                    ]
                                },
                                {
                                    text: 'Toggle',
                                    data: [
                                        {
                                            text: 'Child 1',
                                            href: `${host}#/components/menu-height`,
                                        },
                                        {
                                            text: 'Child 2',
                                            href: `${host}#/components/menu-height`,
                                        },
                                        {
                                            text: 'Child 3',
                                            href: `${host}#/components/menu-height`,
                                        },
                                        {
                                            text: 'Child 4',
                                            href: `${host}#/components/menu-height`,
                                        },
                                        {
                                            text: 'Child 5',
                                            href: `${host}#/components/menu-height`,
                                        },
                                        {
                                            text: 'Child 6',
                                            href: `${host}#/components/menu-height`,
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
                                    key: 'data.callback',
                                    values: 'menu.data.callback'
                                },
                                {
                                    key: 'data.callbackProps',
                                    values: 'menu.data.callbackProps'
                                },
                                {
                                    key: 'data.externalLink',
                                    values: 'menu.data.externalLink'
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
                                {
                                    key: 'singleItemsHeight',
                                    values: 'menuHeight.singleItemsHeight'
                                },
                                {
                                    key: 'animationTime',
                                    values: 'menuHeight.animationTime'
                                },
                            ],
                            'rr-menu-height'
                        )
                    }
                />
            </div>
        );
    }
};

export default _MenuHeight;

