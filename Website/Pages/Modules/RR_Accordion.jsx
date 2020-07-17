import React from 'react';

import { Accordion, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `
<Accordion
    animation='height' // height, scale, opacity
    data={
        [
            {
                text: 'Home',
                icon: <i className='fas fa-flag-checkered' />,
                data: [
                    {
                        text: 'Home',
                        href: '#/',
                    },
                    {
                        text: 'Home',
                        href: '#/home',
                    },
                ]
            }
        ]
    }
/>
`;

const examples = [
    {
        react: codeExample1,
        js: '',
        css: '',
        html: '',
        description: '',
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
                                    text: 'Home',
                                    href: `#/`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/home`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/ala`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/home`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/ala`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/home`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/ala`,
                                }
                            ]
                        }
                    ]
                }
            />
        )
    },
    {
        react: codeExample1,
        js: '',
        css: '',
        html: '',
        description: '',
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
                                    text: 'Home',
                                    href: `#/`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/home`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/ala`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/home`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/ala`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/home`,
                                },
                                {
                                    text: 'Home',
                                    href: `#/ala`,
                                }
                            ]
                        }
                    ]
                }
            />
        )
    }
];


class RR_Accordion extends React.Component {
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
            resolve(buildModulesJsx(examples[this.countCallbacks]), this.countCallbacks+1);
        });
    }

    render() {
        return (
            <div className="Generator">
                <h1 className="h1 h1-title text-center">
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

export default RR_Accordion;