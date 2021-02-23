import React from 'react';

import { Table, TextWriter, SourceCode, Clipboard, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import buildModulesJsx from '../Functions/buildModulesJsx';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

import generateArticles from '../Globals/generateArticles';

const codeExample1 = `import { TextWriter } from 'react-revolution';
// import TextWriter from 'react-revolution/TextWriter';

<TextWriter
    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    speed={30}
    pipeDisplay={true}
    pipeChar={''}
    pipeSite='right' // right, left
    pipePersist={false}
/>`;

const codeExample2 = `import { TextWriter } from 'react-revolution';
// import TextWriter from 'react-revolution/TextWriter';

<TextWriter
    text='React Divcreator'
    speed={100}
    pipeDisplay={true}
    pipeChar={''}
    pipeSite='right' // right, left
    pipePersist={false}
    replaces={
        [
            {
                from: 6,
                to: 'React Divcreator'.length - 1,
                replace: 'Revolution !'
            }
        ]
    }
/>`;

class _TextWriter extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'TextWriter',
                description: trans("runtime.generator.description"),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <TextWriter
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                        speed={30}
                        pipeDisplay={true}
                        pipeChar={''}
                        pipeSite='right' // right, left
                        pipePersist={false}
                    />
                )
            }
        ];

        this.state = {
            text2: false,
            text3: false
        }
    }

    runText(text) {
        this.setState({
            [text]: true
        });
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
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    TextWriter
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <div className="code-example-live">
                        {
                            !this.state.text2 &&
                            <div
                                className="button-action rr-revolution-button-clipboard"
                                onClick={(e) => this.runText('text2')}
                            >
                                run text writer
                        </div>
                        }
                        {
                            this.state.text2 &&
                            <TextWriter
                                text='React Divcreator'
                                speed={100}
                                pipeDisplay={true}
                                pipeChar={''}
                                pipeSite='right' // right, left
                                pipePersist={false}
                                replaces={
                                    [
                                        {
                                            from: 6,
                                            to: 'React Divcreator'.length - 1,
                                            replace: 'Revolution !'
                                        }
                                    ]
                                }
                            />
                        }
                    </div>
                    {
                        generateArticles(
                            (
                                <h1 className="h1-example">
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
                                        code={codeExample2}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample2}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
                <StyleImplementation />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
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
                                    key: 'text',
                                    values: 'writer.text'
                                },
                                {
                                    key: 'speed',
                                    values: 'speed'
                                },
                                {
                                    key: 'pipeDisplay',
                                    values: 'pipeDisplay'
                                },
                                {
                                    key: 'pipeChar',
                                    values: 'pipeChar'
                                },
                                {
                                    key: 'pipeSite',
                                    values: 'pipeSite'
                                },
                                {
                                    key: 'pipePersist',
                                    values: 'pipePersist'
                                },
                                {
                                    key: 'replaces',
                                    values: 'replaces'
                                },
                                {
                                    key: 'timeout',
                                    values: 'writer.timeout'
                                },
                                {
                                    key: 'replaces',
                                    values: 'replaces'
                                },
                                {
                                    key: 'replaces.from',
                                    values: 'replaces.from'
                                },
                                {
                                    key: 'replaces.to',
                                    values: 'replaces.to'
                                },
                                {
                                    key: 'replaces.replace',
                                    values: 'replaces.replace'
                                },
                            ],
                            'rr-text-writer'
                        )
                    }
                />
            </div>
        );
    }
};

export default _TextWriter;

