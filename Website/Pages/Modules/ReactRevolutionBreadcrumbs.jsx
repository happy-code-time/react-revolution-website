import React from 'react';

import { Table, Breadcrumbs, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

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

class ReactRevolutionBreadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Breadcrumbs',
                description: '.',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div className="rr-breadcrumbs-example">
                        <Breadcrumbs
                            hashRouter={false}
                            reactRouter={false}
                            domainName='Home'
                            delimiter='>'
                            overwriteText={false}
                            // moduleMenu={
                            //     {
                            //         animation: 'height', // height, scale, opacity
                            //         data: [
                            //             {
                            //                 text: 'last entry - to toggle',
                            //                 data: [
                            //                     {
                            //                         text: 'Child 1',
                            //                         href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                            //                     },
                            //                     {
                            //                         text: 'Child 2',
                            //                         href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                            //                     },
                            //                     {
                            //                         text: 'Child 3',
                            //                         href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                            //                     },
                            //                 ]
                            //             }
                            //         ]
                            //     }
                            // }
                        />
                    </div>
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
                                    key: 'defaultClass',
                                    values: 'class'
                                },
                                {
                                    key: 'addClass',
                                    values: 'addClass'
                                },
                            ],
                            'rr-breadcrumbs'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionBreadcrumbs;