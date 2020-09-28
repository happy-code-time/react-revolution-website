import React from 'react';

import { Table, CustomSuggestion, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import { host } from '../Globals';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { CustomSuggestion } from 'react-revolution';

<CustomSuggestion
    inputPlaceholder='Search...'
    suggestions={[]}
    callback={this.search}
    value={this.state.inputValue}
    inputProps={{}}
    callbackRerender={true} // !!!!
    type='text'
    allowOnlyAZ={true}
/>`;

const jsExample1 = `async search(inputValue, isClickEvent) {

    if (isClickEvent) {
        return Promise.resolve();
    }

    return new Promise( (resolve, reject) => {
        const allModules = [
            'Accordion',
            'Cards',
            'CustomSuggestion',
            'FullScreenListArray',
            'FullScreenListObject',
            'FullScreenOverlay',
            'GlobalMessages',
            'Icons',
            'InputAnimation',
            'InputFile',
            'InputFileDragDrop',
            'InputSuggestion',
            'LoadingBoxTop',
            'MenuClickHorizontal',
            'PopupBox',
            'Sidebar',
            'SourceCode',
            'TextWriter',
        ];
        const suggestions = [];

        allModules.map(i => {
            if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
                suggestions.push(
                    {
                        href: '#', // required
                        jsx: (
                            <p>
                                {
                                    i
                                }
                            </p>
                        ),
                        props: {
                            title: 'Custom title'
                        },
                        onClickValue: i
                    }
                );
            }
        });

        resolve(suggestions);
    });
}`;

const codeExample2 = `import { CustomSuggestion } from 'react-revolution';

<CustomSuggestion
    inputPlaceholder='Search...'
    suggestions={this.state.suggestions}
    callback={this.searchState}
    value={this.state.inputValue}
    inputProps={{}}
    callbackRerender={false} // !!!!!!
    type='text'
    allowOnlyAZ={true}
/>`;

const jsExample2 = `searchState(inputValue, isClickEvent) {

    if (isClickEvent) {
        return this.setState({
            suggestions: []
        });
    }

    const allModules = [
        'Accordion',
        'Cards',
        'CustomSuggestion',
        'FullScreenListArray',
        'FullScreenListObject',
        'FullScreenOverlay',
        'GlobalMessages',
        'Icons',
        'InputAnimation',
        'InputFile',
        'InputFileDragDrop',
        'InputSuggestion',
        'LoadingBoxTop',
        'MenuClickHorizontal',
        'PopupBox',
        'Sidebar',
        'SourceCode',
        'TextWriter',
    ];
    const suggestions = [];

    allModules.map(i => {
        if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
            suggestions.push(
                {
                    href: '#', // required
                    jsx: (
                        <p>
                            {
                                i
                            }
                        </p>
                    ),
                    props: {
                        title: 'Custom title'
                    },
                    onClickValue: i
                }
            );
        }
    });

    this.setState({
        suggestions
    });
}`;


class ReactRevolutionCustomSuggestion extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.search = this.search.bind(this);
        this.searchState = this.searchState.bind(this);

        this.state = {
            inputValue: '',
            suggestions: []
        };

        this.examples = [
            {
                description: trans("runtime.generator.description"),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <CustomSuggestion
                        inputPlaceholder='Search...'
                        suggestions={[]}
                        callback={this.search}
                        value={this.state.inputValue}
                        inputProps={{}}
                        callbackRerender={true}
                        type='text'
                        allowOnlyAZ={true}
                    />
                )
            }
        ];
    }

    async search(inputValue, isClickEvent) {

        if (isClickEvent) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const allModules = [
                'Accordion',
                'Cards',
                'CustomSuggestion',
                'FullScreenListArray',
                'FullScreenListObject',
                'FullScreenOverlay',
                'GlobalMessages',
                'Icons',
                'InputAnimation',
                'InputFile',
                'InputFileDragDrop',
                'InputSuggestion',
                'LoadingBoxTop',
                'MenuClickHorizontal',
                'PopupBox',
                'Sidebar',
                'SourceCode',
                'TextWriter',
            ];
            const suggestions = [];

            allModules.map(i => {
                if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
                    suggestions.push(
                        {
                            href: `${host}#/react-revolution-custom-suggestion`, // required
                            jsx: (
                                <p>
                                    {
                                        i
                                    }
                                </p>
                            ),
                            props: {
                                title: 'Custom title'
                            },
                            onClickValue: i
                        }
                    );
                }
            });

            resolve(suggestions);
        });
    }

    searchState(inputValue, isClickEvent) {

        if (isClickEvent) {
            return this.setState({
                suggestions: []
            });
        }

        const allModules = [
            'Accordion',
            'Cards',
            'CustomSuggestion',
            'FullScreenListArray',
            'FullScreenListObject',
            'FullScreenOverlay',
            'GlobalMessages',
            'Icons',
            'InputAnimation',
            'InputFile',
            'InputFileDragDrop',
            'InputSuggestion',
            'LoadingBoxTop',
            'MenuClickHorizontal',
            'PopupBox',
            'Sidebar',
            'SourceCode',
            'TextWriter',
        ];
        const suggestions = [];

        allModules.map(i => {
            if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
                suggestions.push(
                    {
                        href: `${host}#/react-revolution-custom-suggestion`, // required
                        jsx: (
                            <p>
                                {
                                    i
                                }
                            </p>
                        ),
                        props: {
                            title: 'Custom title'
                        },
                        onClickValue: i
                    }
                );
            }
        });

        this.setState({
            suggestions
        });
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
                <h1 className="h1-title border-none text-center">
                    CustomSuggestion
                </h1>
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />
                <h1 className="h1-title border-none text-center">
                    CustomSuggestion
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <h1
                        title={`${trans('exampleTitle')} 2`}
                        className="h1-example"
                    >
                        <i className="fas fa-user" />
                        {
                            trans('exampleTitle')
                        }
                    </h1>
                    <CustomSuggestion
                        inputPlaceholder='Search...'
                        suggestions={this.state.suggestions}
                        callback={this.searchState}
                        value={this.state.inputValue}
                        inputProps={{}}
                        callbackRerender={false} // !!!!!!
                        type='text'
                        allowOnlyAZ={true}
                    />
                    <span>
                        <h1
                            title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 2`}
                            className="h1-example"
                        >
                            <i className="fas fa-atom" />
                            {
                                trans('reactCodeTitle')
                            }
                        </h1>
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
                    <span>
                        <h1
                            title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 2`}
                            className="h1-example"
                        >
                            <i className="fab fa-node-js" />
                            {
                                trans('jsCodeTitle')
                            }
                        </h1>
                        <SourceCode
                            lineNumber={true}
                            layout='dark'
                            code={jsExample2}
                        />
                        <Clipboard
                            animation='jump' // scale, jump
                            data={(
                                <div title={trans('copyToClipboard')} className="button-action">
                                    <i className="far fa-clipboard"></i>
                                </div>
                            )}
                            clipboard={jsExample2}
                        />
                    </span>
                </div>
                {
                    getDescriptionForstyle('rr-custom-suggestion')
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
                                    key: 'plainValue',
                                    values: 'plainValue'
                                },
                                {
                                    key: 'callback',
                                    values: 'customsuggestion.callback'
                                },
                                {
                                    key: 'inputPlaceholder',
                                    values: 'inputPlaceholder'
                                },
                                {
                                    key: 'props',
                                    values: 'props'
                                },
                                {
                                    key: 'inputType',
                                    values: 'inputType'
                                },
                                {
                                    key: 'allowOnlyAZ',
                                    values: 'allowOnlyAZ'
                                },
                                {
                                    key: 'callbackRerender',
                                    values: 'callbackRerender'
                                },
                                {
                                    key: 'callback',
                                    values: 'customsuggestion.callback'
                                },
                                {
                                    key: 'suggestions',
                                    values: 'customsuggestion.suggestions'
                                },
                                {
                                    key: 'suggestions.href',
                                    values: 'customsuggestion.suggestions.href'
                                },

                                {
                                    key: 'suggestions.jsx',
                                    values: 'customsuggestion.suggestions.jsx'
                                },
                                {
                                    key: 'suggestions.props',
                                    values: 'customsuggestion.suggestions.props'
                                },
                                {
                                    key: 'suggestions.onClickValue',
                                    values: 'customsuggestion.suggestions.onClickValue'
                                },
                            ],
                            'rr-custom-suggestion'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionCustomSuggestion;

