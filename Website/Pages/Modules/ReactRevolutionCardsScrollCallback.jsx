import React from 'react';

import { CardsScrollCallback, LoadOnScroll, LoadingBoxTop, uuid } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { CardsScrollCallback, LoadingBoxTop, uuid } from 'react-revolution';

class CardsExample extends React.Component{

    constructor(props) {
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
    }
    
    render(){
        return (
            {/* 
                Main div have to have setted the css style "height" 
                to be able to scroll (fire scroll event if the bottom are reached) 
                inside the "CardsScrollCallback"
            */}
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
        );
    }
}`;

const cssExample1 = `.section-cards-scroll-callback{
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
                description: 'The Cards module will load more items, if the bottom of the parent div are reached.',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample1,
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
                <h1 className="h1-title border-none text-center">
                    CardsScrollCallback
                </h1>
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />
            </div>
        );
    }
};

export default ReactRevolutionCardsScrollCallback;
