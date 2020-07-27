import React from 'react';

import { Table, Accordion, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { Accordion } from 'react-revolution';

<Accordion
    animation='height' // height, scale, opacity
    data={
        [
            {
                text: 'Home',
                icon: <i className='fas fa-flag-checkered' />,
                data: [
                    {
                        text: 'Child - no data to toggle',
                    },
                    {
                        text: 'Child - has data to toggle',
                        dataToggle: 'dataToggle'
                    },
                    {
                        text: 'Child - has data to toggle',
                        dataToggle: (
                            <span> 😍 </span>
                        )
                    },
                ]
            }
        ]
    }
/>`;

const codeExample2 = `import { Accordion } from 'react-revolution';

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
/>`;

class ReactRevolutionAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Accordion',
                description: 'The Accordion module has no limits in child nesting.',
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
                                    text: 'Home',
                                    icon: <i className='fas fa-flag-checkered' />,
                                    data: [
                                        {
                                            text: 'Child - no data to toggle',
                                        },
                                        {
                                            text: 'Child - has data to toggle',
                                            dataToggle: 'dataToggle'
                                        },
                                        {
                                            text: 'Child - has data to toggle',
                                            dataToggle: (
                                                <span> 😍 </span>
                                            )
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
        ];
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
                            'key', 'type', 'default', 'value'
                        ]
                    }
                    data={
                        [
                            {
                                key: 'id',
                                value: trans('id').description,
                                type: trans('id').type,
                                default: trans('id').default
                            },
                            {
                                key: 'class',
                                value: trans('class').description,
                                type: trans('class').type,
                                default: trans('class').default
                            },
                            {
                                key: 'addClass',
                                value: trans('addClass').description,
                                type: trans('addClass').type,
                                default: trans('addClass').default
                            },
                            {
                                key: 'animation',
                                value: trans('accordion.animation').description,
                                type: trans('accordion.animation').type,
                                default: trans('accordion.animation').default
                            },
                            {
                                key: 'data',
                                value: trans('accordion.data').description,
                                type: trans('accordion.data').type,
                                default: trans('accordion.data').default
                            },
                        ]
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionAccordion;