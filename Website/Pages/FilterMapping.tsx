import React from 'react';
//@ts-ignore
import { FilterMapping, Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { FilterMapping } from 'react-revolution';
// import FilterMapping from 'react-revolution/FilterMapping';

<Filter
    disabled={false}
    reset={false}
    callback={this.handleChange}
    callbackProps='any'
    data={
        {
            placeholder: 'Select an option',
            options: [
                {
                    text: 'empty',
                    empty: true,
                },
                {
                    text: 'Option 1',
                    mapping: [
                        'option_1',
                    ]
                },
                {
                    text: 'Option 2',
                    mapping: 'option_2'
                },
                {
                    text: 'Option 3',
                    mapping: 'option_3'
                },
            ],
            arrow: {
                char: '↓',
            },
        }
    }
    mapping={
        {
            // Mapping child with an listener
            option_1: {
                placeholder: 'Select an nested option 1-1',
                options: [
                    {
                        text: '--- reset ---',
                        empty: true,
                    },
                    {
                        text: 'Option child 1',
                        mapping: [
                            'option_1_1',
                        ]
                    },
                ],
                arrow: {
                    char: '↓',
                },
            },
            option_1_1: {
                placeholder: 'Select an nested option 1-1-2',
                options: [
                    {
                        text: '--- reset ---',
                        empty: true,
                    },
                    {
                        text: 'Option child child 1',
                    },
                ],
                arrow: {
                    char: '↓',
                },
            }
        }
    }
/>`;

const codeExample2 = `import { Filter } from 'react-revolution';
// import Filter from 'react-revolution/Filter';

<Filter
    disabled={true}
    reset={false}
    callback={this.handleChange}
    callbackProps='any'
    data={
        {
            placeholder: 'Select an option',
            options: [
                {
                    text: 'empty',
                    empty: true,
                },
                {
                    text: 'Option 1',
                    mapping: [
                        'option_1',
                    ]
                },
                {
                    text: 'Option 2',
                    mapping: 'option_2'
                },
                {
                    text: 'Option 3',
                    mapping: 'option_3'
                },
            ],
            arrow: {
                char: '↓',
            },
        }
    }
    mapping={
        {
            // Mapping child with an listener
            option_1: {
                placeholder: 'Select an nested option 1-1',
                options: [
                    {
                        text: '--- reset ---',
                        empty: true,
                    },
                    {
                        text: 'Option child 1',
                        mapping: [
                            'option_1_1',
                        ]
                    },
                ],
                arrow: {
                    char: '↓',
                },
            },
            option_1_1: {
                placeholder: 'Select an nested option 1-1-2',
                options: [
                    {
                        text: '--- reset ---',
                        empty: true,
                    },
                    {
                        text: 'Option child child 1',
                    },
                ],
                arrow: {
                    char: '↓',
                },
            }
        }
    }
    dummy={
        {
            count: 3,
            placeholders: [
                {
                    placeholder: (
                        <span>
                            dummy placeholder 
                        </span>
                    ),
                    arrow: {
                        char: '↓',
                        direction: 'right' // default
                    }
                },
                {
                    placeholder: (
                        <span>
                            dummy placeholder 
                        </span>
                    ),
                    arrow: {
                        char: '↓',
                        direction: 'right' // default
                    }
                },
            ]
        }
    }
/>`;

const codeExample3 = `import { Filter } from 'react-revolution';
// import Filter from 'react-revolution/Filter';

<Filter
    disabled={true}
    reset={true}
    callback={this.handleChange}
    callbackProps='any'
    data={
        {
            placeholder: 'Select an option',
            options: [
                {
                    text: 'empty',
                    empty: true,
                },
                {
                    text: 'Option 1',
                    mapping: [
                        'option_1',
                    ]
                },
                {
                    text: 'Option 2',
                    mapping: 'option_2'
                },
                {
                    text: 'Option 3',
                    mapping: 'option_3'
                },
            ],
            arrow: {
                char: '↓',
            },
        }
    }
    mapping={
        {
            // Mapping child with an listener
            option_1: {
                placeholder: 'Select an nested option 1-1',
                options: [
                    {
                        text: '--- reset ---',
                        empty: true,
                    },
                    {
                        text: 'Option child 1',
                        mapping: [
                            'option_1_1',
                        ]
                    },
                ],
                arrow: {
                    char: '↓',
                },
            },
            option_1_1: {
                placeholder: 'Select an nested option 1-1-2',
                options: [
                    {
                        text: '--- reset ---',
                        empty: true,
                    },
                    {
                        text: 'Option child child 1',
                    },
                ],
                arrow: {
                    char: '↓',
                },
            }
        }
    }
    dummy={
        {
            count: 3,
            placeholders: [
                {
                    placeholder: (
                        <span>
                            dummy placeholder 
                        </span>
                    ),
                    arrow: {
                        char: '↓',
                        direction: 'right' // default
                    }
                },
                {
                    placeholder: (
                        <span>
                            dummy placeholder 
                        </span>
                    ),
                    arrow: {
                        char: '↓',
                        direction: 'right' // default
                    }
                },
            ]
        }
    }
/>`;

const jsExample = `handleChange(current, callbackProps) {
    console.info(current);
}`;

class _FilterMapping extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'FilterMapping',
                description: trans('filter.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <FilterMapping
                        disabled={false}
                        reset={false}
                        callback={this.handleChange}
                        callbackProps='any'
                        data={
                            {
                                placeholder: 'Select an option',
                                options: [
                                    {
                                        text: 'empty',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option 1',
                                        mapping: [
                                            'option_1',
                                        ]
                                    },
                                    {
                                        text: 'Option 2',
                                        mapping: 'option_2'
                                    },
                                    {
                                        text: 'Option 3',
                                        mapping: 'option_3'
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                },
                            }
                        }
                        mapping={
                            {
                                // Mapping child with an listener
                                option_1: {
                                    placeholder: 'Select an nested option 1-1',
                                    options: [
                                        {
                                            text: '--- reset ---',
                                            empty: true,
                                        },
                                        {
                                            text: 'Option child 1',
                                            mapping: [
                                                'option_1_1',
                                            ]
                                        },
                                    ],
                                    arrow: {
                                        char: '↓',
                                    },
                                },
                                option_1_1: {
                                    placeholder: 'Select an nested option 1-1-2',
                                    options: [
                                        {
                                            text: '--- reset ---',
                                            empty: true,
                                        },
                                        {
                                            text: 'Option child child 1',
                                        },
                                    ],
                                    arrow: {
                                        char: '↓',
                                    },
                                }
                            }
                        }
                    />
                )
            },
            {
                title: 'FilterMapping',
                description: trans('filter.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <FilterMapping
                        disabled={true}
                        reset={false}
                        callback={this.handleChange}
                        callbackProps='any'
                        data={
                            {
                                placeholder: 'Select an option',
                                options: [
                                    {
                                        text: 'empty',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option 1',
                                        mapping: [
                                            'option_1',
                                        ]
                                    },
                                    {
                                        text: 'Option 2',
                                        mapping: 'option_2'
                                    },
                                    {
                                        text: 'Option 3',
                                        mapping: 'option_3'
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                },
                            }
                        }
                        mapping={
                            {
                                // Mapping child with an listener
                                option_1: {
                                    placeholder: 'Select an nested option 1-1',
                                    options: [
                                        {
                                            text: '--- reset ---',
                                            empty: true,
                                        },
                                        {
                                            text: 'Option child 1',
                                            mapping: [
                                                'option_1_1',
                                            ]
                                        },
                                    ],
                                    arrow: {
                                        char: '↓',
                                    },
                                },
                                option_1_1: {
                                    placeholder: 'Select an nested option 1-1-2',
                                    options: [
                                        {
                                            text: '--- reset ---',
                                            empty: true,
                                        },
                                        {
                                            text: 'Option child child 1',
                                        },
                                    ],
                                    arrow: {
                                        char: '↓',
                                    },
                                }
                            }
                        }
                        dummy={
                            {
                                count: 3,
                                placeholders: [
                                    {
                                        placeholder: (
                                            <span>
                                                dummy placeholder
                                            </span>
                                        ),
                                        arrow: {
                                            char: '↓',
                                            direction: 'right' // default
                                        }
                                    },
                                    {
                                        placeholder: (
                                            <span>
                                                dummy placeholder
                                            </span>
                                        ),
                                        arrow: {
                                            char: '↓',
                                            direction: 'right' // default
                                        }
                                    },
                                ]
                            }
                        }
                    />
                )
            },
            {
                title: 'FilterMapping',
                description: trans('filter.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <FilterMapping
                        disabled={true}
                        reset={true}
                        callback={this.handleChange}
                        callbackProps='any'
                        data={
                            {
                                placeholder: 'Select an option',
                                options: [
                                    {
                                        text: 'empty',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option 1',
                                        mapping: [
                                            'option_1',
                                        ]
                                    },
                                    {
                                        text: 'Option 2',
                                        mapping: 'option_2'
                                    },
                                    {
                                        text: 'Option 3',
                                        mapping: 'option_3'
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                },
                            }
                        }
                        mapping={
                            {
                                // Mapping child with an listener
                                option_1: {
                                    placeholder: 'Select an nested option 1-1',
                                    options: [
                                        {
                                            text: '--- reset ---',
                                            empty: true,
                                        },
                                        {
                                            text: 'Option child 1',
                                            mapping: [
                                                'option_1_1',
                                            ]
                                        },
                                    ],
                                    arrow: {
                                        char: '↓',
                                    },
                                },
                                option_1_1: {
                                    placeholder: 'Select an nested option 1-1-2',
                                    options: [
                                        {
                                            text: '--- reset ---',
                                            empty: true,
                                        },
                                        {
                                            text: 'Option child child 1',
                                        },
                                    ],
                                    arrow: {
                                        char: '↓',
                                    },
                                }
                            }
                        }
                        dummy={
                            {
                                count: 3,
                                placeholders: [
                                    {
                                        placeholder: (
                                            <span>
                                                dummy placeholder
                                            </span>
                                        ),
                                        arrow: {
                                            char: '↓',
                                            direction: 'right' // default
                                        }
                                    },
                                    {
                                        placeholder: (
                                            <span>
                                                dummy placeholder
                                            </span>
                                        ),
                                        arrow: {
                                            char: '↓',
                                            direction: 'right' // default
                                        }
                                    },
                                ]
                            }
                        }
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
            resolve(buildModulesJsx(this.examples[this.countCallbacks]));
        });
    }

    handleChange(current, callbackProps) {
        console.info(current);
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
                                    values: 'filter.mapping.data'
                                },
                                {
                                    key: 'data.placeholder',
                                    values: 'filter.data.placeholder'
                                },
                                {
                                    key: 'data.arrow',
                                    values: 'filter.data.arrow'
                                },
                                {
                                    key: 'data.arrow.char',
                                    values: 'filter.data.arrow.char'
                                },
                                {
                                    key: 'data.arrow.direction',
                                    values: 'filter.data.arrow.direction'
                                },
                                {
                                    key: 'data.options',
                                    values: 'filter.mapping.data.options'
                                },
                                {
                                    key: 'data.options.text',
                                    values: 'filter.mapping.data.options.text'
                                },
                                {
                                    key: 'data.options.empty',
                                    values: 'filter.mapping.data.options.empty'
                                },
                                {
                                    key: 'data.options.mapping',
                                    values: 'filter.mapping.data.options.mapping'
                                },
                                {
                                    key: 'dummy',
                                    values: 'filter.dummy'
                                },
                                {
                                    key: 'dummy.count',
                                    values: 'filter.dummy.count'
                                },
                                {
                                    key: 'dummy.placeholders',
                                    values: 'filter.dummy.placeholders'
                                },
                                {
                                    key: 'dummy.placeholders.placeholder',
                                    values: 'filter.dummy.placeholders.placeholder'
                                },
                                {
                                    key: 'dummy.placeholders.arrow',
                                    values: 'filter.dummy.placeholders.arrow'
                                },
                                {
                                    key: 'dummy.placeholders.arrow.char',
                                    values: 'filter.dummy.placeholders.arrow.char'
                                },
                                {
                                    key: 'dummy.placeholders.arrow.direction',
                                    values: 'filter.dummy.placeholders.arrow.direction'
                                },
                                {
                                    key: 'callback',
                                    values: 'filter.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'filter.callbackProps'
                                },
                                {
                                    key: 'mapping',
                                    values: 'filter.mapping.mapping'
                                },
                            ],
                            'FilterMapping'
                        )
                    }
                />
            </div>
        );
    }
};

export default _FilterMapping;