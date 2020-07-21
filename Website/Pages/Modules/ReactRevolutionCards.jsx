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

const cssExample1 =  `.rr-cards {
    max-width: 1140px;
    margin: 0 auto;
    
    .card{
        width: calc(100% - 20px);
        margin: 10px;
    }
}

@media screen and (min-width: 1024px){
    .rr-cards {
        .card{
            width: 25% !important;
            margin: 30px calc(4% - 2px) !important;
        }
    }
}`;

class ReactRevolutionCards extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                description: 'The Accordion module has no limits in child nesting.',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample1,
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
                <h1 className="h1-title border-none text-center">
                    Cards
                </h1>
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.LoadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />
            </div>
        );
    }
};

export default ReactRevolutionCards;