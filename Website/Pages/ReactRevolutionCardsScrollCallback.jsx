import React from 'react';

import { Table, CardsScrollCallback, LoadOnScroll, LoadingBoxTop, uuid } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { CardsScrollCallback, LoadingBoxTop, uuid } from 'react-revolution';
// import CardsScrollCallback from 'react-revolution/CardsScrollCallback';
// import LoadingBoxTop from 'react-revolution/LoadingBoxTop';

<div className="section-cards-scroll-callback">
    <CardsScrollCallback
        itemsPerLine={3}
        mediaBreak={1024}
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
            ]
        }
        callback={this.callbackResolve}
        callbackProps={'custom data'}
        loading={
            (
                <LoadingBoxTop
                    display={true}
                    text='Loading...'
                />
            )
        }
    />
</div>`;

const codeExample2 = `import { CardsScrollCallback } from 'react-revolution';
// import CardsScrollCallback from 'react-revolution/CardsScrollCallback';

<div className="section-cards-scroll-callback">
    <CardsScrollCallback
        itemsPerLine={3}
        mediaBreak={1024}
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
            ]
        }
        callback={this.callbackReject}
        callbackProps={'custom data'}
        loading={
            (
                <div className="cards-callback-loading">
                    <img src='./public/images/ajax-loader.gif'/>
                </div>
            )
        }
        persistReject={true}
    />
</div>`;

const codeExample3 = `import { CardsScrollCallback } from 'react-revolution';
// import CardsScrollCallback from 'react-revolution/CardsScrollCallback';

<div className="section-cards-scroll-callback">
    <CardsScrollCallback
        itemsPerLine={3}
        mediaBreak={1024}
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
            ]
        }
        callback={this.callbackRejectMessage}
        callbackProps={'custom data'}
        loading={
            (
                <div className="cards-callback-loading">
                    <img src='./public/images/ajax-loader.gif'/>
                </div>
            )
        }
        persistReject={false}
    />
</div>`; 

const codeExample4 = `import { CardsScrollCallback } from 'react-revolution';
// import CardsScrollCallback from 'react-revolution/CardsScrollCallback';

<div className="section-cards-scroll-callback">
    <CardsScrollCallback
        itemsPerLine={3}
        mediaBreak={1024}
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
            ]
        }
        callback={this.callbackRejectButton}
        callbackProps={'custom data'}
        loading={
            (
                <div className="cards-callback-loading">
                    <img src='./public/images/ajax-loader.gif'/>
                </div>
            )
        }
        persistReject={true}
        onReject={
            (
                <span className='try-again-button'>
                    try again
                </span>
            )
        }
    />
</div>`; 

const jsExample1 = `constructor(props) {
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

        if(4 <= count){
            return Promise.resolve('break');
        }

        this.setState({
            count: this.state.count+1
        });

        if(3 == count){
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

const jsExample2 = `callbackReject(event, customData){
    return new Promise( (resolve, reject) => {
        setTimeout(reject, 500);
    });
}`;

const jsExample3 = `callbackRejectMessage(event, customData){
    return new Promise( (resolve, reject) => {
        setTimeout( () => 
            reject(
                <div className="callback-error">
                    Please scroll again to the bottom of this div to try to load more data.
                </div>
        ),500);
    });
}`;

const jsExample4 = `callbackRejectButton(event, customData){
    return new Promise( (resolve, reject) => {
        setTimeout( () => 
            reject(
                <div className="callback-error">
                    Please click the button to try to load more data.
                </div>
        ),500);
    });
}`;

const cssExample1 = `.section-cards-scroll-callback {
    height: 500px;

    .rr-cards-scroll-callback {
        max-width: 1140px;
        margin: 0 auto;
        scrollbar-color: rgba(122,122,122,.88) transparent;
        scrollbar-width: thin;

        .cards-group {

            .card {

                @media screen and (min-width: 1024px) {
                    width: 25%;
                    margin: 30px calc(4% - 2px);
                }

                width: calc(100% - 20px);
                margin: 10px;

                .content {
                    height: 100px;
                }
            }
        }
    }
}`;

const cssExample2 = `.section-cards-scroll-callback {
    height: 500px;

    .rr-cards-scroll-callback {
        max-width: 1140px;
        margin: 0 auto;
        scrollbar-color: rgba(122,122,122,.88) transparent;
        scrollbar-width: thin;

        .cards-group {

            .card {

                @media screen and (min-width: 1024px) {
                    width: 25%;
                    margin: 30px calc(4% - 2px);
                }

                width: calc(100% - 20px);
                margin: 10px;

                .content {
                    height: 100px;
                }
            }
        }
    }

    .cards-callback-loading{
        height: 50px;
        display: flex;

        img{
            display: block;
            width: 30px;
            height: 30px;
            margin: auto;
        }
    }
}`;

const cssExample3 = `.section-cards-scroll-callback {
    height: 500px;

    .rr-cards-scroll-callback {
        max-width: 1140px;
        margin: 0 auto;
        scrollbar-color: rgba(122,122,122,.88) transparent;
        scrollbar-width: thin;

        .cards-group {

            .card {

                @media screen and (min-width: 1024px) {
                    width: 25%;
                    margin: 30px calc(4% - 2px);
                }

                width: calc(100% - 20px);
                margin: 10px;

                .content {
                    height: 100px;
                }
            }
        }
    }

    .cards-callback-loading{
        height: 50px;
        display: flex;

        img{
            display: block;
            width: 30px;
            height: 30px;
            margin: auto;
        }
    }

    .callback-error{
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: firebrick;
        font-weight: 500;
        font-size: 0.87rem;
    }
}`;

const cssExample4 = `.section-cards-scroll-callback {
    height: 500px;

    .rr-cards-scroll-callback {
        max-width: 1140px;
        margin: 0 auto;
        scrollbar-color: rgba(122,122,122,.88) transparent;
        scrollbar-width: thin;

        .cards-group {

            .card {

                @media screen and (min-width: 1024px) {
                    width: 25%;
                    margin: 30px calc(4% - 2px);
                }

                width: calc(100% - 20px);
                margin: 10px;

                .content {
                    height: 100px;
                }
            }
        }
    }

    .cards-callback-loading{
        height: 50px;
        display: flex;

        img{
            display: block;
            width: 30px;
            height: 30px;
            margin: auto;
        }
    }

    .callback-error{
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: firebrick;
        font-weight: 500;
        font-size: 0.87rem;
    }

    .try-again-button{
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        height: 20px;
        background: firebrick;
        color: rgb(255,255,255);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        font-size: 0.87rem;
        margin: 0 auto;
        display: block;
    }

    .try-again-button:hover{
        cursor: pointer;
    }
}`;

class ReactRevolutionCardsScrollCallback extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callbackResolve = this.callbackResolve.bind(this);
        this.callbackReject = this.callbackReject.bind(this);
        this.callbackRejectMessage = this.callbackRejectMessage.bind(this);
        this.callbackRejectButton = this.callbackRejectButton.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'CardsScrollCallback',
                description: `${trans('cards.scrollCallback.description')}. ${trans("runtime.generator.description")}\n\n${trans("cards.scrollCallback.example1")}`,
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample1,
                html: '',
                live: (
                    <div className="section-cards-scroll-callback">
                        <CardsScrollCallback
                            itemsPerLine={3}
                            mediaBreak={1024}
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
                                ]
                            }
                            callback={this.callbackResolve}
                            callbackProps={'custom data'}
                            loading={
                                (
                                    <LoadingBoxTop
                                        display={true}
                                        text='Loading...'
                                    />
                                )
                            }
                        />
                    </div>
                )
            },
            {
                title: 'CardsScrollCallback',
                description: trans("cards.scrollCallback.example2"),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample2,
                css: cssExample2,
                html: '',
                live: (
                    <div className="section-cards-scroll-callback">
                        <CardsScrollCallback
                            itemsPerLine={3}
                            mediaBreak={1024}
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
                                ]
                            }
                            callback={this.callbackReject}
                            callbackProps={'custom data'}
                            loading={
                                (
                                    <div className="cards-callback-loading">
                                        <img src='./public/images/ajax-loader.gif'/>
                                    </div>
                                )
                            }
                            persistReject={true}
                        />
                    </div>
                )
            },
            {
                title: 'CardsScrollCallback',
                description: trans("cards.scrollCallback.example3"),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample3,
                css: cssExample3,
                html: '',
                live: (
                    <div className="section-cards-scroll-callback">
                        <CardsScrollCallback
                            itemsPerLine={3}
                            mediaBreak={1024}
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
                                ]
                            }
                            callback={this.callbackRejectMessage}
                            callbackProps={'custom data'}
                            loading={
                                (
                                    <div className="cards-callback-loading">
                                        <img src='./public/images/ajax-loader.gif'/>
                                    </div>
                                )
                            }
                            persistReject={false}
                        />
                    </div>
                )
            },
            {
                title: 'CardsScrollCallback',
                description: trans("cards.scrollCallback.example4"),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample4,
                css: cssExample4,
                html: '',
                live: (
                    <div className="section-cards-scroll-callback">
                        <CardsScrollCallback
                            itemsPerLine={3}
                            mediaBreak={1024}
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
                                ]
                            }
                            callback={this.callbackRejectButton}
                            callbackProps={'custom data'}
                            loading={
                                (
                                    <div className="cards-callback-loading">
                                        <img src='./public/images/ajax-loader.gif'/>
                                    </div>
                                )
                            }
                            persistReject={true}
                            onReject={
                                (
                                    <span className='try-again-button'>
                                        try again
                                    </span>
                                )
                            }
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
            return Promise.resolve('break');
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]), this.countCallbacks + 1);
        });
    }

    async callbackResolve(event, customData) {
        const { count } = this.state;

        if(4 <= count){
            return Promise.resolve('break');
        }

        this.setState({
            count: this.state.count+1
        });

        if(3 == count){
            return new Promise( resolve => {
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

    callbackReject(event, customData){
        return new Promise( (resolve, reject) => {
            setTimeout(reject, 500);
        });
    }

    callbackRejectMessage(event, customData){
        return new Promise( (resolve, reject) => {
            setTimeout( () => 
                reject(
                    <div className="callback-error">
                        Please scroll again to the bottom of this div to try to load more data.
                    </div>
            ),500);
        });
    }

    callbackRejectButton(event, customData){
        return new Promise( (resolve, reject) => {
            setTimeout( () => 
                reject(
                    <div className="callback-error">
                        Please click the button to try to load more data.
                    </div>
            ),500);
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
                    fireScrollEvent={500}
                    fireScrollBack={true} 
                />
                {
                    getDescriptionForstyle('rr-cards-scroll-callback')
                }
                <h1 className="h1-title border-none my-3">
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
                                    key: 'callback',
                                    values: 'cards.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'readmore.callback.callbackProps'
                                },
                                {
                                    key: 'loading',
                                    values: 'cards.loading'
                                },
                                {
                                    key: 'minify',
                                    values: 'minify'
                                },
                                {
                                    key: 'persistReject',
                                    values: 'cards.callback.persistReject'
                                },
                                {
                                    key: 'onReject',
                                    values: 'cards.callback.onReject'
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
