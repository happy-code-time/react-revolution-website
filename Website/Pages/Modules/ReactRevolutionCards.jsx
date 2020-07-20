import React from 'react';

import { Cards, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

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
        description: 'The Accordion module has no limits in child nesting.',
        reactTextBefore: '',
        react: codeExample1,
        reactTextAfter: '',
        js: '',
        css: '',
        html: '',
        live: (
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
            />
        )
    }
];


class ReactRevolutionCards extends React.Component {
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
                    Cards
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

export default ReactRevolutionCards;