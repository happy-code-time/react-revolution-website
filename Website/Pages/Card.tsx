import React from 'react';
//@ts-ignore
import { Table, Card, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample = `import { Card } from 'react-revolution';
// import Card from 'react-revolution/Card';

<Card
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

const cssExample = `.Card {
    max-width: 1140px;
    margin: 0 auto;
    
    .card{
        width: calc(100% - 20px);
        margin: 10px;
    }
}

@media screen and (min-width: 1024px){
    .Card {
        .card{
            width: 25% !important;
            margin: 30px calc(4% - 2px) !important;
        }
    }
}`;

class _Card extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Card',
                description: '',
                reactTextBefore: '',
                react: codeExample,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Card
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
            return Promise.resolve('break');
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]));
        });
    }

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0])} // Default as the first example
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                                <StyleImplementation 
                    className={this.constructor.name}
                />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='Table-website'
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
                                    values: 'card.data'
                                },
                                {
                                    key: 'data.title',
                                    values: 'card.data.title'
                                },
                                {
                                    key: 'data.content',
                                    values: 'card.data.content'
                                },
                                {
                                    key: 'data.footer',
                                    values: 'card.data.footer'
                                },
                                {
                                    key: 'data.props',
                                    values: 'props'
                                }
                            ],
                            'Card'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Card;