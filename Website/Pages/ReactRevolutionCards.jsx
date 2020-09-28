import React from 'react';

import { Table, Cards, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample = `import { Cards } from 'react-revolution';

<Cards
    itemsPerLine={3}
    mediaBreak={1024}
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

const cssExample =  `.rr-cards {
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

class ReactRevolutionCards extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Cards',
                description: '',
                reactTextBefore: '',
                react: codeExample,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Cards
                        itemsPerLine={3}
                        mediaBreak={1024}
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
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.LoadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />
                {
                    getDescriptionForstyle('rr-cards')
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
                                    key: 'itemsPerLine',
                                    values: 'itemsPerLine'
                                },
                                {
                                    key: 'mediaBreak',
                                    values: 'mediaBreak'
                                },
                                {
                                    key: 'data',
                                    values: 'cards.data'
                                },
                                {
                                    key: 'data.title',
                                    values: 'cards.data.title'
                                },
                                {
                                    key: 'data.content',
                                    values: 'cards.data.content'
                                },
                                {
                                    key: 'data.footer',
                                    values: 'cards.data.footer'
                                },
                                {
                                    key: 'data.props',
                                    values: 'props'
                                }
                            ],
                            'rr-cards'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionCards;