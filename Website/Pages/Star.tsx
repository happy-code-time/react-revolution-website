import React from 'react';
//@ts-ignore
import { Star, Table, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import StyleImplementation from '../Components/StyleImplementation';
import generateArticle from '../Globals/generateArticle';

const codeExample1 = `import { Star } from 'react-revolution';
// import Star from 'react-revolution/Star';

<Star
    count={5}
    filled={0}
/>`;

const codeExample2 = `import { Star } from 'react-revolution';
// import Star from 'react-revolution/Star';

<Star
    count={5}
    filled={2}
    color='orange-yellow'
/>`;

const codeExample3 = `import { Star } from 'react-revolution';
// import Star from 'react-revolution/Star';
<Star
    count={5}
    filled={this.state.filled}
    fillHover={this.state.allowHover}
    callback={this.callback}
    color='orange-yellow'
/>`;

const jsExample3 = `constructor(props) {
    super(props);

    this.state = {
        filled: 0,
        allowHover: true,
    };

    callback(clickEvent, starClicked, callbackProps){
        this.setState({
            filled: starClicked,
            allowHover: false
        });
    }
}
`;

const codeExample4 = `import { Star } from 'react-revolution';
// import Star from 'react-revolution/Star';

<Star
    count={5}
    filled={this.state.filled2}
    fillHover={this.state.allowHover2}
    callback={this.callback2}
    color='orange-yellow'
    starsData={
        [
            {
                props: {
                    title: 'Title for the star 1'
                },
                data: ''
            },
            {
                props: {
                    title: 'Title for the star 2'
                },
                data: ''
            },
            {
                props: {
                    title: 'Title for the star 3'
                },
                data: ''
            },
            {
                props: {
                    title: 'Title for the star 4'
                },
                data: ''
            },
            {
                props: {
                    title: 'Title for the star 5'
                },
                data: ''
            }
        ]
    }
/>`;

const jsExample4 = `constructor(props) {
    super(props);

    this.state = {
        filled2: 0,
        allowHover2: true,
    };

    callback2(clickEvent, starClicked, callbackProps){
        this.setState({
            filled2: starClicked,
            allowHover2: false
        });
    }
}
`;

class _Star extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.callback2 = this.callback2.bind(this);
        this.countCallbacks = 0;

        this.state = {
            filled: 0,
            allowHover: true,
            filled2: 0,
            allowHover2: true
        };

        this.examples = [
            {
                title: 'Star',
                description: trans('stars.description.1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Star
                        count={5}
                        filled={0}
                    />
                )
            },
            {
                title: 'Star',
                description: trans('stars.description.2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Star
                        count={5}
                        filled={2}
                        color='orange-yellow'
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

    callback(clickEvent, starClicked, callbackProps) {
        this.setState({
            filled: starClicked,
            allowHover: false
        });
    }

    callback2(clickEvent, starClicked, callbackProps) {
        this.setState({
            filled2: starClicked,
            allowHover2: false
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
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    Star
                </h1>
                <p className='description'>
                    {
                        trans('stars.description.3')
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
                        <Star
                            count={5}
                            filled={this.state.filled}
                            fillHover={this.state.allowHover}
                            callback={this.callback}
                            color='orange-yellow'
                        />
                    </div>
                    {
                        generateArticle(
                            (
                                <h1 className="h1-example p-0  m-0">
                                    <i className="fas fa-atom" />
                                    {
                                        trans('reactCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={codeExample3}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample3}
                                    />
                                </span>
                            )
                        )
                    }
                    {
                        generateArticle(
                            (
                                <h1 className="h1-example p-0  m-0">
                                    <i className="fab fa-node-js" />
                                    {
                                        trans('jsCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={jsExample3}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample3}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    Star
                </h1>
                <p className='description'>
                    {
                        trans('stars.description.4')
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
                        <Star
                            count={5}
                            filled={this.state.filled2}
                            fillHover={this.state.allowHover2}
                            callback={this.callback2}
                            color='orange-yellow'
                            starsData={
                                [
                                    {
                                        props: {
                                            title: 'Title for the star 1'
                                        },
                                        data: ''
                                    },
                                    {
                                        props: {
                                            title: 'Title for the star 2'
                                        },
                                        data: ''
                                    },
                                    {
                                        props: {
                                            title: 'Title for the star 3'
                                        },
                                        data: ''
                                    },
                                    {
                                        props: {
                                            title: 'Title for the star 4'
                                        },
                                        data: ''
                                    },
                                    {
                                        props: {
                                            title: 'Title for the star 5'
                                        },
                                        data: ''
                                    }
                                ]
                            }
                        />
                    </div>
                    {
                        generateArticle(
                            (
                                <h1 className="h1-example p-0  m-0">
                                    <i className="fas fa-atom" />
                                    {
                                        trans('reactCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={codeExample4}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample4}
                                    />
                                </span>
                            )
                        )
                    }
                    {
                        generateArticle(
                            (
                                <h1 className="h1-example p-0  m-0">
                                    <i className="fab fa-node-js" />
                                    {
                                        trans('jsCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={jsExample4}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample4}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
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
                                    key: 'props',
                                    values: 'props'
                                },
                                {
                                    key: 'count',
                                    values: 'stars.count'
                                },
                                {
                                    key: 'filled',
                                    values: 'stars.filled'
                                },
                                {
                                    key: 'fillHover',
                                    values: 'stars.fillHover'
                                },
                                {
                                    key: 'callback',
                                    values: 'stars.callback'
                                },
                                {
                                    key: 'color',
                                    values: 'stars.color'
                                },
                                {
                                    key: 'starsData',
                                    values: 'stars.starsData'
                                },
                                {
                                    key: 'starsData.data',
                                    values: 'stars.starsData.props'
                                },
                                {
                                    key: 'starsData.html',
                                    values: 'stars.starsData.data'
                                },
                            ],
                            'Star'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Star;