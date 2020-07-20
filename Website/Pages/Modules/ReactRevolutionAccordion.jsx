import React from 'react';

import { Accordion, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

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

const examples = [
    {
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


class ReactRevolutionAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
        this.countCallbacks = 0;
    }

    callback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === examples.length) {
            return 'break';
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(examples[this.countCallbacks]), this.countCallbacks + 1);
        });
    }

    render() {
        return (
            <div className="Generator">
                <h1 className="h1-title border-none text-center">
                    Accordion
                </h1>
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.callback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(examples[0], 1)} // Default as the first example 
                />
            </div>
        );
    }
};

export default ReactRevolutionAccordion;