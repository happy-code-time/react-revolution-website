import React from 'react';

import { Table, CardsScroll, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample = `import { CardsScroll } from 'react-revolution';

<div className="section-cards-scroll">
    <CardsScroll
        itemsPerLine={3}
        defaultItems={6}
        mediaBreak={1024}
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
</div>`;

const cssExample =  `.section-cards-scroll{
    height: 300px;

    .rr-cards-scroll {
        max-width: 1140px;
        margin: 0 auto;
        
        .card{
            width: calc(100% - 20px);
            margin: 10px;
            
            .content{
                height: 100px;
            }
        }
    }

    @media screen and (min-width: 1024px){
        .rr-cards-scroll {
            .card{
                width: 25% !important;
                margin: 30px calc(4% - 2px) !important;
            }
        }
    }
}`;

class ReactRevolutionCardsScroll extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'CardsScroll',
                description: trans('cards.scroll.description'),
                reactTextBefore: '',
                react: codeExample,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="section-cards-scroll">
                        <CardsScroll
                            itemsPerLine={3}
                            defaultItems={6}
                            mediaBreak={1024}
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
                {
                    getDescriptionForstyle('rr-cards-scroll')
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
                                    key: 'defaultItems',
                                    values: 'defaultItems'
                                },
                                {
                                    key: 'minify',
                                    values: 'minify'
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
                            'rr-cards-scroll'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionCardsScroll;