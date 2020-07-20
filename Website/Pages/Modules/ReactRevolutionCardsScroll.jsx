import React from 'react';

import { CardsScroll, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { Cards } from 'react-revolution';

<Cards
    itemsPerLine={3}
    mediaBreak={1140}
    data={
        [
            {
                title: 'Title',
                content: 'Content',
                props: {
                    className: 'dsa sad ds ad as d'
                }
            },
            {
                title: 'Title',
                content: 'Content',
            },
            {
                title: 'Title',
                content: 'Content',
            },
            {
                title: 'Title',
                content: 'Content',
            },
            {
                title: 'Title',
                content: 'Content',
            },
            {
                title: 'Title',
                content: 'Content',
            },
        ]
    }
/>`;

const examples = [
    {
        description: 'The Cards module will load more items, if the bottom of the parent div are reached.',
        reactTextBefore: '',
        react: codeExample1,
        reactTextAfter: '',
        js: '',
        css: '',
        html: '',
        live: (
            <div className="section-cards-scroll">
                <CardsScroll
                    itemsPerLine={3}
                    defaultItems={6}
                    mediaBreak={1140}
                    data={
                        [
                            {
                                title: 'Title - 1',
                                content: 'Content',
                                props: {
                                    className: 'dsa sad ds ad as d'
                                }
                            },
                            {
                                title: 'Title - 2',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 3',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 4',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 5',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 6',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 7',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 8',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 9',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 10',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 11',
                                content: 'Content',
                            },
                            {
                                title: 'Title - 12',
                                content: 'Content',
                            },
                        ]
                    }
                />
            </div>
        )
    }
];


class ReactRevolutionCardsScroll extends React.Component {
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
                    CardsScroll
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

export default ReactRevolutionCardsScroll;