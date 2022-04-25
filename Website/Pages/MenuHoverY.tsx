import React from 'react';
//@ts-ignore
import { Table, LoadOnScroll, LoadingBoxTop, MenuHoverY } from '../../react-revolution/public/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { MenuHoverY } from 'react-revolution';
// import MenuHoverY from 'react-revolution/MenuHoverY';

<div
    style={
        {
            width: '100px',
            margin: '20px auto'
        }
    }
>
    <MenuHoverY
        data={
            [
                {
                    text: 'Step 1',
                    callback: console.info,
                    callbackProps: 'clicked',
                    data: [
                        {
                            text: 'Step 2',
                            callback: console.info,
                            callbackProps: 'clicked',
                            data: [
                                {
                                    text: 'Step 3',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                },
                                {
                                    text: 'Step 3',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                    data: [
                                        {
                                            text: 'Step 4b',
                                            callback: console.info,
                                            callbackProps: 'clicked',
                                            data: [
                                                {
                                                    text: 'Step 5a',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                },
                                                {
                                                    text: 'Step 5b',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            text: 'Step 4b',
                                            callback: console.info,
                                            callbackProps: 'clicked',
                                            data: [
                                                {
                                                    text: 'Step 5a',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                },
                                                {
                                                    text: 'Step 5b',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'Step 2',
                            callback: console.info,
                            callbackProps: 'clicked',
                            data: [
                                {
                                    text: 'Step 3',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                },
                                {
                                    text: 'Step 3',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                    data: [
                                        {
                                            text: 'Step 4b',
                                            callback: console.info,
                                            callbackProps: 'clicked',
                                            data: [
                                                {
                                                    text: 'Step 5a',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                },
                                                {
                                                    text: 'Step 5b',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            text: 'Step 4b',
                                            callback: console.info,
                                            callbackProps: 'clicked',
                                            data: [
                                                {
                                                    text: 'Step 5a',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                },
                                                {
                                                    text: 'Step 5b',
                                                    callback: console.info,
                                                    callbackProps: 'clicked',
                                                    data: [
                                                        {
                                                            text: 'Step 6',
                                                            callback: console.info,
                                                            callbackProps: 'clicked',
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    />
</div>`;

class _MenuHoverY extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'MenuHoverY',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100px',
                                margin: '20px auto'
                            }
                        }
                    >
                        <MenuHoverY
                            data={
                                [
                                    {
                                        text: 'Step 1',
                                        callback: console.info,
                                        callbackProps: 'clicked',
                                        data: [
                                            {
                                                text: 'Step 2',
                                                callback: console.info,
                                                callbackProps: 'clicked',
                                                data: [
                                                    {
                                                        text: 'Step 3',
                                                        callback: console.info,
                                                        callbackProps: 'clicked',
                                                    },
                                                    {
                                                        text: 'Step 3',
                                                        callback: console.info,
                                                        callbackProps: 'clicked',
                                                        data: [
                                                            {
                                                                text: 'Step 4b',
                                                                callback: console.info,
                                                                callbackProps: 'clicked',
                                                                data: [
                                                                    {
                                                                        text: 'Step 5a',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text: 'Step 5b',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                text: 'Step 4b',
                                                                callback: console.info,
                                                                callbackProps: 'clicked',
                                                                data: [
                                                                    {
                                                                        text: 'Step 5a',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text: 'Step 5b',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                text: 'Step 2',
                                                callback: console.info,
                                                callbackProps: 'clicked',
                                                data: [
                                                    {
                                                        text: 'Step 3',
                                                        callback: console.info,
                                                        callbackProps: 'clicked',
                                                    },
                                                    {
                                                        text: 'Step 3',
                                                        callback: console.info,
                                                        callbackProps: 'clicked',
                                                        data: [
                                                            {
                                                                text: 'Step 4b',
                                                                callback: console.info,
                                                                callbackProps: 'clicked',
                                                                data: [
                                                                    {
                                                                        text: 'Step 5a',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text: 'Step 5b',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                text: 'Step 4b',
                                                                callback: console.info,
                                                                callbackProps: 'clicked',
                                                                data: [
                                                                    {
                                                                        text: 'Step 5a',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text: 'Step 5b',
                                                                        callback: console.info,
                                                                        callbackProps: 'clicked',
                                                                        data: [
                                                                            {
                                                                                text: 'Step 6',
                                                                                callback: console.info,
                                                                                callbackProps: 'clicked',
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
        ];
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
                                    key: 'data',
                                    values: 'menuXY.data'
                                },
                                {
                                    key: 'data.callback',
                                    values: 'menuXY.data.callback'
                                },
                                {
                                    key: 'data.callbackProps',
                                    values: 'menuXY.data.callbackProps'
                                },
                                {
                                    key: 'data.data',
                                    values: 'menuXY.data.data'
                                },
                                {
                                    key: 'direction',
                                    values: 'menuXY.direction'
                                },
                            ],
                            'MenuHoverY'
                        )
                    }
                />
            </div>
        );
    }
};

export default _MenuHoverY;


