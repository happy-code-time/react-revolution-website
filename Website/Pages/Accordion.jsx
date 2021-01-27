import React from 'react';
import { Accordion, Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

const codeExample1 = `import { Accordion } from 'react-revolution';
// import Accordion from 'react-revolution/Accordion';

<Accordion
    animation='height'
    data={
        [
            {
                text: (
                    <span>
                        <i style={{ width: '30px' }} className="fas fa-car"></i>
                        Mercedes
                    </span>
                ),
                data: [
                    {
                        text: 'A - Class',
                        data: [
                            {
                                text: '- A 200'
                            },
                            {
                                text: '- A 35 AMG'
                            }
                        ]
                    },
                    {
                        text: 'B - Class',
                        data: [
                            {
                                text: '- B 150'
                            },
                            {
                                text: '- B 250'
                            }
                        ]
                    }
                ]
            }
        ]
    }
/>`;

const codeExample2 = `import { Accordion } from 'react-revolution';
// import Accordion from 'react-revolution/Accordion';

<Accordion
    animation='height'
    data={
        [
            {
                text: 'Accordion',
                icon: <i className='fas fa-flag-checkered' />,
                data: [
                    {
                        text: 'Child 1',
                        dataToggle: '"dataToggle" - without nested data'
                    },
                    {
                        text: 'Child 2',
                        data: [
                            {
                                text: 'Child 3',
                                dataToggle: '"dataToggle" - without nested data'
                            },
                            {
                                text: 'Child 3',
                                data: [
                                    {
                                        text: 'Child 4',
                                        dataToggle: '"dataToggle" - without nested data'
                                    },
                                ]
                            },
                        ]
                    },
                ]
            }
        ]
    }
/>`;

const codeExample3 = `import { Accordion } from 'react-revolution';
// import Accordion from 'react-revolution/Accordion';

<Accordion
    closeOnClickOutside={true}
    animation='scale'
    data={
        [
            {
                text: (
                    <span>
                        <i style={{ width: '30px' }} className="fas fa-car"></i>
                        Mercedes
                    </span>
                ),
                data: [
                    {
                        text: 'A - Class',
                        data: [
                            {
                                text: '- A 200'
                            },
                            {
                                text: '- A 35 AMG'
                            }
                        ]
                    },
                    {
                        text: 'B - Class',
                        data: [
                            {
                                text: '- B 150'
                            },
                            {
                                text: '- B 250'
                            }
                        ]
                    }
                ]
            }
        ]
    }
/>`;

const codeExample4 = `import { Accordion } from 'react-revolution';
// import Accordion from 'react-revolution/Accordion';

<span>
    <style dangerouslySetInnerHTML={{
        __html: \`
            .single-data.is-toggled .fa-arrow-down{
                transform: rotateZ(90deg);
            }                            
            .single-data.is-not-toggled .fa-arrow-down,
            .single-data.is-toggling-back .fa-arrow-down,
            .single-data .fa-arrow-down{
                display: inline-block;
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                transition-duration: 400ms;
                transform: rotateZ(0deg);
            }
        \`}}
    />
    <Accordion
        animation='height'
        animationTimeout={300}
        data={
            [
                {
                    text: (
                        <span>
                            First
                            <i style={{ width: '30px' }} className="fas fa-arrow-down"></i>
                        </span>
                    ),
                    toggled: true,
                    data: [
                        {
                            text: (
                                <span>
                                    Second
                                    <i style={{ width: '30px' }} className="fas fa-arrow-down"></i>
                                </span>
                            ),
                            data: [
                                {
                                    text: 'Third'
                                },
                                {
                                    text: 'Third'
                                }
                            ]
                        },
                        {
                            text: (
                                <span>
                                    Second
                                    <i style={{ width: '30px' }} className="fas fa-arrow-down"></i>
                                </span>
                            ),
                            data: [
                                {
                                    text: 'Third'
                                },
                                {
                                    text: 'Third'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    />
</span>`;

class _Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.state = {
            loading: true
        };

        this.examples = [
            {
                title: 'Accordion',
                description: trans('accordion.description.1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Accordion
                        animation='height'
                        data={
                            [
                                {
                                    text: (
                                        <span>
                                            <i style={{ width: '30px' }} className="fas fa-car"></i>
                                            Mercedes
                                        </span>
                                    ),
                                    data: [
                                        {
                                            text: 'A - Class',
                                            data: [
                                                {
                                                    text: '- A 200'
                                                },
                                                {
                                                    text: '- A 35 AMG'
                                                }
                                            ]
                                        },
                                        {
                                            text: 'B - Class',
                                            data: [
                                                {
                                                    text: '- B 150'
                                                },
                                                {
                                                    text: '- B 250'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Accordion',
                description: trans('accordion.description.2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Accordion
                        animation='height'
                        data={
                            [
                                {
                                    text: 'Accordion',
                                    icon: <i className='fas fa-flag-checkered' />,
                                    data: [
                                        {
                                            text: 'Child 1',
                                            dataToggle: '"dataToggle" - without nested data'
                                        },
                                        {
                                            text: 'Child 2',
                                            data: [
                                                {
                                                    text: 'Child 3',
                                                    dataToggle: '"dataToggle" - without nested data'
                                                },
                                                {
                                                    text: 'Child 3',
                                                    data: [
                                                        {
                                                            text: 'Child 4',
                                                            dataToggle: '"dataToggle" - without nested data'
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Accordion',
                description: trans('accordion.description.3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Accordion
                        closeOnClickOutside={true}
                        animation='scale'
                        data={
                            [
                                {
                                    text: (
                                        <span>
                                            <i style={{ width: '30px' }} className="fas fa-car"></i>
                                            Mercedes
                                        </span>
                                    ),
                                    data: [
                                        {
                                            text: 'A - Class',
                                            data: [
                                                {
                                                    text: '- A 200'
                                                },
                                                {
                                                    text: '- A 35 AMG'
                                                }
                                            ]
                                        },
                                        {
                                            text: 'B - Class',
                                            data: [
                                                {
                                                    text: '- B 150'
                                                },
                                                {
                                                    text: '- B 250'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Accordion',
                description: trans('accordion.description.4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <span>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                .single-data.is-toggled .fa-arrow-down{
                                    transform: rotateZ(90deg);
                                }                            
                                .single-data.is-not-toggled .fa-arrow-down,
                                .single-data.is-toggling-back .fa-arrow-down,
                                .single-data .fa-arrow-down{
                                    display: inline-block;
                                    width: 30px;
                                    height: 30px;
                                    text-align: center;
                                    line-height: 30px;
                                    transition-duration: 400ms;
                                    transform: rotateZ(0deg);
                                }
                            `}}
                        />
                        <Accordion
                            animation='height'
                            animationTimeout={300}
                            data={
                                [
                                    {
                                        text: (
                                            <span>
                                                First
                                                <i style={{ width: '30px' }} className="fas fa-arrow-down"></i>
                                            </span>
                                        ),
                                        toggled: true,
                                        data: [
                                            {
                                                text: (
                                                    <span>
                                                        Second
                                                        <i style={{ width: '30px' }} className="fas fa-arrow-down"></i>
                                                    </span>
                                                ),
                                                data: [
                                                    {
                                                        text: 'Third'
                                                    },
                                                    {
                                                        text: 'Third'
                                                    }
                                                ]
                                            },
                                            {
                                                text: (
                                                    <span>
                                                        Second
                                                        <i style={{ width: '30px' }} className="fas fa-arrow-down"></i>
                                                    </span>
                                                ),
                                                data: [
                                                    {
                                                        text: 'Third'
                                                    },
                                                    {
                                                        text: 'Third'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        />
                    </span>
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
                    data={buildModulesJsx(this.examples[0], 1)}
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
                                    key: 'closeOnClickOutside',
                                    values: 'closeOnClickOutside'
                                },
                                {
                                    key: 'animation',
                                    values: 'accordion.animation'
                                },
                                {
                                    key: 'animationTimeout',
                                    values: 'accordion.animationTimeout'
                                },
                                {
                                    key: 'data',
                                    values: 'accordion.data'
                                },
                                {
                                    key: 'data.text',
                                    values: 'accordion.data.text'
                                },
                                {
                                    key: 'data.dataToggle',
                                    values: 'accordion.data.dataToggle'
                                },
                                {
                                    key: 'data.toggled',
                                    values: 'accordion.data.toggled'
                                },
                                {
                                    key: 'data.props',
                                    values: 'props'
                                }
                            ],
                            'rr-accordion'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Accordion;