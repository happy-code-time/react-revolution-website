import React from 'react';
import { Table, Article, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';


const codeExample1 = `import { Article } from 'react-revolution';
// import Article from 'react-revolution/Article';

<Article
    addClass='rr-articles-example'
    animation='height'
    itemsPerLine={2}
    mediaBreak={1024}
    data={generateRandomArcticles()}
/>`;

const codeExample2 = `import { Article } from 'react-revolution';
// import Article from 'react-revolution/Article';

<Article
    addClass='rr-articles-example'
    animation='height'
    itemsPerLine={2}
    mediaBreak={1024}
    data={generateRandomArcticles(4, true)}
/>`;

const codeExample3 = `import { Article } from 'react-revolution';
// import Article from 'react-revolution/Article';

<Article
    addClass='rr-articles-example'
    animation='height'
    persist={true}
    itemsPerLine={2}
    mediaBreak={1024}
    data={generateRandomArcticles(4, true)}
/>`;

const codeExample4 = `import { Article } from 'react-revolution';
// import Article from 'react-revolution/Article';

<Article
    addClass='rr-articles-example'
    animation='height'
    closeOnClickOutside={true}
    itemsPerLine={2}
    mediaBreak={1024}
    data={generateRandomArcticles(4, true)}
/>`;

const codeExample5 = `import { Article } from 'react-revolution';
// import Article from 'react-revolution/Article';

<Article
    addClass='rr-articles-example-buttons'
    animation='height'
    persist={false}
    itemsPerLine={2}
    mediaBreak={1024}
    data={generateRandomArcticles()}
    toggleForwards={
        (
            <button>
                read more
            </button>
        )
    }
    toggleBackwards={
        (
            <button>
                read less
            </button>
        )
    }
/>`;

const cssExample = `.Article-example{
    .single-entry:hover{
        cursor: pointer;
    }
}`;

const cssExample4 = `.Article-example{

    .single-entry:hover{
        cursor: pointer;
    }

    .data-toggled:hover{
        cursor: text;
    }
}`;

const cssExample5 = `.Article-example-buttons{
    button:hover{
        cursor: pointer;
    }
}`;

const jsCode = `const generateRandomArcticles = (count = 4, border = false) => {
    
    const articles = [];

    const borderStyle = {
        site: 'top',
        width: 5,
        color: 'pink'
    };

    for(let x = 0; x < count; x++){
        articles.push(
            {
                border: border ? borderStyle : undefined,
                title: 'Lorem Ipsum',
                text: \`
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam voluptua.
                \`,
                dataToggle: (
                    <span>
                        Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore 
                        magna aliquyam erat, 
                        sed diam voluptua.
                    </span>
                )
            }
        );
    }

    return articles;
};`;

class _Article extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        const generateRandomArcticles = (count = 4, border = false) => {

            const articles = [];

            const borderStyle = {
                site: 'top',
                width: 5,
                color: 'pink'
            };

            for (let x = 0; x < count; x++) {
                articles.push(
                    {
                        border: border ? borderStyle : undefined,
                        title: 'Lorem Ipsum',
                        text: `
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam voluptua.
                        `,
                        dataToggle: (
                            <span>
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore
                                magna aliquyam erat,
                                sed diam voluptua.
                            </span>
                        )
                    }
                );
            }

            return articles;
        };

        this.examples = [
            {
                title: 'Article',
                // description: trans('accordion.description'),
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample,
                html: '',
                live: (
                    <Article
                        addClass='rr-articles-example'
                        animation='height'
                        closeOnClickOutside={false}
                        itemsPerLine={2}
                        mediaBreak={1024}
                        data={generateRandomArcticles()}
                    />
                )
            },
            {
                title: 'Article',
                description: trans('articles.description.1'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample,
                html: '',
                live: (
                    <Article
                        addClass='rr-articles-example'
                        animation='height'
                        closeOnClickOutside={false}
                        itemsPerLine={2}
                        mediaBreak={1024}
                        data={generateRandomArcticles(4, true)}
                    />
                )
            },
            {
                title: 'Article',
                description: trans('articles.description.2'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample,
                html: '',
                live: (
                    <Article
                        addClass='rr-articles-example'
                        animation='height'
                        closeOnClickOutside={true}
                        itemsPerLine={2}
                        mediaBreak={1024}
                        data={generateRandomArcticles()}
                    />
                )
            },
            {
                title: 'Article',
                description: trans('articles.description.3'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample4,
                html: '',
                live: (
                    <Article
                        addClass='rr-articles-example'
                        animation='height'
                        persist={true}
                        itemsPerLine={2}
                        mediaBreak={1024}
                        data={generateRandomArcticles()}
                    />
                )
            },
            {
                title: 'Article',
                description: trans('articles.description.4'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample5,
                html: '',
                live: (
                    <Article
                        addClass='rr-articles-example-buttons'
                        animation='height'
                        persist={false}
                        itemsPerLine={2}
                        mediaBreak={1024}
                        data={generateRandomArcticles()}
                        toggleForwards={
                            (
                                <button>
                                    read more
                                </button>
                            )
                        }
                        toggleBackwards={
                            (
                                <button>
                                    read less
                                </button>
                            )
                        }
                    />
                )
            },
        ];
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

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={0}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
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
                                    key: 'toggleOn',
                                    values: 'articles.toggleOn'
                                },
                                {
                                    key: 'closeOnClickOutside',
                                    values: 'closeOnClickOutside'
                                },
                                {
                                    key: 'itemsPerLine',
                                    values: 'articles.itemsPerLine'
                                },
                                {
                                    key: 'toggleForwards',
                                    values: 'articles.toggleForwards'
                                },
                                {
                                    key: 'toggleBackwards',
                                    values: 'articles.toggleBackwards'
                                },
                                {
                                    key: 'persist',
                                    values: 'articles.persist'
                                },
                                {
                                    key: 'mediaBreak',
                                    values: 'mediaBreak'
                                },
                                {
                                    key: 'animation',
                                    values: 'articles.animation'
                                },
                                {
                                    key: 'data',
                                    values: 'accordion.data'
                                },
                                {
                                    key: 'data.toggled',
                                    values: 'accordion.data.toggled'
                                },
                                {
                                    key: 'data.title',
                                    values: 'articles.title'
                                },
                                {
                                    key: 'data.titleProps',
                                    values: 'articles.titleProps'
                                },
                                {
                                    key: 'data.text',
                                    values: 'articles.text'
                                },
                                {
                                    key: 'data.textProps',
                                    values: 'articles.textProps'
                                },
                                {
                                    key: 'data.dataToggle',
                                    values: 'accordion.data.dataToggle'
                                },
                                {
                                    key: 'data.border',
                                    values: 'articles.border'
                                },
                                {
                                    key: 'data.border.site',
                                    values: 'articles.border.site'
                                },
                                {
                                    key: 'data.border.width',
                                    values: 'articles.border.width'
                                },
                                {
                                    key: 'data.border.color',
                                    values: 'articles.border.color'
                                },
                            ],
                            'Article'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Article;