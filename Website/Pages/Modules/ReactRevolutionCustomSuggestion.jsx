import React from 'react';

import { Table, CustomSuggestion, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

const codeExample1 = `import { CustomSuggestion } from 'react-revolution';

<CustomSuggestion
    placeholder='Search...'
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
                        href: 'http://localhost:3000/#/react-revolution-custom-suggestion', // required
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
    placeholder='Search...'
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
                    href: 'http://localhost:3000/#/react-revolution-custom-suggestion', // required
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


class ReactRevolutionCustomSuggestion extends React.Component {
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
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <CustomSuggestion
                        placeholder='Search...'
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
                            href: 'http://localhost:3000/#/react-revolution-custom-suggestion', // required
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
                        href: 'http://localhost:3000/#/react-revolution-custom-suggestion', // required
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
                        placeholder='Search...'
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
                            displayLineNumber={true}
                            layout='dark'
                            code={codeExample2}
                        />
                        <Clipboard
                            animation='jump' // scale, jump
                            data={(
                                <div className="button-action">
                                    {
                                        trans('copyToClipboard')
                                    }
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
                            displayLineNumber={true}
                            layout='dark'
                            code={jsExample2}
                        />
                        <Clipboard
                            animation='jump' // scale, jump
                            data={(
                                <div className="button-action">
                                    {
                                        trans('copyToClipboard')
                                    }
                                </div>
                            )}
                            clipboard={jsExample2}
                        />
                    </span>
                </div>
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
                                    key: 'placeholder',
                                    values: 'placeholder'
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

