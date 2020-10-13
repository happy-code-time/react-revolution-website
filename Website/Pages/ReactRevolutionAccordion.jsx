import React from 'react';

import { Accordion, Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Accordion } from 'react-revolution';
// import Accordion from 'react-revolution/public/Accordion';

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
// import Accordion from 'react-revolution/public/Accordion';

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
// import Accordion from 'react-revolution/public/Accordion';

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

class ReactRevolutionAccordion extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Accordion',
                // description: trans('accordion.description'),
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Accordion
                        animation='height' // height, scale, opacity
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
                description: '',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Accordion
                        animation='height' // height, scale, opacity
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
                description: trans('accordion.description2'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Accordion
                        closeOnClickOutside={true}
                        animation='scale' // height, scale, opacity
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
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={500}
                    fireScrollBack={true} 
                />
                {
                    getDescriptionForstyle('rr-accordion')
                }
                <h1 className="h1-title border-none text-center mb-4">
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
                                    key: 'closeOnClickOutside',
                                    values: 'closeOnClickOutside'
                                },
                                {
                                    key: 'animation',
                                    values: 'accordion.animation'
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

export default ReactRevolutionAccordion;