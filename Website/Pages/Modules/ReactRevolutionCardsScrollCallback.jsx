import React from 'react';

import { Table, CardsScrollCallback, LoadOnScroll, LoadingBoxTop, uuid } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

const codeExample = `import { CardsScrollCallback, LoadingBoxTop, uuid } from 'react-revolution';

<div className="section-cards-scroll-callback">
    <CardsScrollCallback
        itemsPerLine={3}
        mediaBreak={1140}
        data={
            [
                {
                    title: 'Title 1',
                    content: 'Content',
                },
                {
                    title: 'Title 2',
                    content: 'Content',
                },
                {
                    title: 'Title 3',
                    content: 'Content',
                },
                {
                    title: 'Title 4',
                    content: 'Content',
                },
                {
                    title: 'Title 5',
                    content: 'Content',
                },
                {
                    title: 'Title 6',
                    content: 'Content',
                },
                {
                    title: 'Title 7',
                    content: 'Content',
                },
                {
                    title: 'Title 8',
                    content: 'Content',
                },
                {
                    title: 'Title 9',
                    content: 'Content',
                },
            ]
        }
        loadMoreCallback={this.addItems}
        loadMoreLoadingIcon={<LoadingBoxTop text='Loading...' />}
    />
</div>`;

const jsExample = `constructor(props) {
        super(props);
        this.addItems = this.addItems.bind(this);

        /**
         * Each loadMoreCallback ("addItems") increments the count += 1
         * If the count 3 reached, then "break" (remove) the scroll listener
         */        
        this.state = {
            count: 0
        };
    }

    /**
     * Async function to simulate an DB/ API request
     */
    async addItems() {
        const { count } = this.state;

        if(3 <= count){
            return 'break';
        }

        this.setState({
            count: this.state.count+1
        });

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            title: \`Title - \${uuid()}\`,
                            content: 'Content',
                        },
                        {
                            title: \`Title - \${uuid()}\`,
                            content: 'Content',
                        },
                        {
                            title: \`Title - \${uuid()}\`,
                            content: 'Content',
                        },
                    ]
                );
            }, 500);
        });
}`;

const cssExample = `.section-cards-scroll-callback{
    height: 500px;

    .rr-cards-scroll-callback {
        max-width: 1140px;
        margin: 0 auto;
        
        .cards-group{
         
            @media screen and (min-width: 1024px){
                flex-direction: row;
            }
            
            flex-direction: column;

            .card{

                @media screen and (min-width: 1024px){
                    width: 25%;
                    margin: 30px calc(4% - 2px);
                }

                width: calc(100% - 20px);
                margin: 10px;
                
                .content{
                    height: 100px;
                }
            }
        }
    }
}`;

class ReactRevolutionCardsScrollCallback extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.addItems = this.addItems.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'CardsScrollCallback',
                description: 'The Cards module will load more items, if the bottom of the parent div are reached.',
                reactTextBefore: '',
                react: codeExample,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <div className="section-cards-scroll-callback">
                        <CardsScrollCallback
                            itemsPerLine={3}
                            mediaBreak={1140}
                            data={
                                [
                                    {
                                        title: 'Title 1',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 2',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 3',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 4',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 5',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 6',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 7',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 8',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Title 9',
                                        content: 'Content',
                                    },
                                ]
                            }
                            loadMoreCallback={this.addItems}
                            loadMoreLoadingIcon={<LoadingBoxTop text='Loading...' />}
                        />
                    </div>
                )
            }
        ];

        this.state = {
            count: 0
        }
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

    async addItems() {
        const { count } = this.state;

        if(3 <= count){
            return 'break';
        }

        this.setState({
            count: this.state.count+1
        });

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            title: `Title - ${uuid()}`,
                            content: 'Content',
                        },
                        {
                            title: `Title - ${uuid()}`,
                            content: 'Content',
                        },
                        {
                            title: `Title - ${uuid()}`,
                            content: 'Content',
                        },
                    ]
                );
            }, 500);
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
                                    key: 'class',
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
                                    key: 'loadMoreCallback',
                                    values: 'loadMoreCallback'
                                },
                                {
                                    key: 'loadMoreLoadingIcon',
                                    values: 'loadMoreLoadingIcon'
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
                            'rr-cards-scroll-callback'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionCardsScrollCallback;
