import React from 'react';
//@ts-ignore
import { Table, CardScroll, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample = `import { CardScroll } from 'react-revolution';
// import CardScroll from 'react-revolution/CardScroll';

<div className="section-card-scroll">
    <CardScroll
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

const cssExample = `.section-card-scroll{
    height: 300px;

    .CardScroll {
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
        .CardScroll {
            .card{
                width: 25% !important;
                margin: 30px calc(4% - 2px) !important;
            }
        }
    }
}`;

class _CardScroll extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'CardScroll',
                description: trans('card.scroll.description'),
                reactTextBefore: '',
                react: codeExample,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="section-card-scroll">
                        <CardScroll
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
                                    key: 'defaultItems',
                                    values: 'defaultItems'
                                },
                                {
                                    key: 'minify',
                                    values: 'minify'
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
                            'CardScroll'
                        )
                    }
                />
            </div>
        );
    }
};

export default _CardScroll;