import React from 'react';

import { Table, InputSuggestionObject, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

import generateArticles from '../Globals/generateArticles';

const codeExample = `import { InputSuggestionObject } from 'react-revolution';
// import InputSuggestionObject from 'react-revolution/InputSuggestionObject';

<InputSuggestionObject
    inputPlaceholder='Search for an email...'
    suggestions={this.state.suggestions}
    selected={this.state.selected}
    callback={this.setInputValue}
    value={this.state.inputValue}
    getValueFromCallback={false}
    callbackSelection={this.callbackSelection}
    inputProps={{}}
    type='text'
    emptySuggestionAfterSelection={false}
    sortSuggestions='asc' // asc, desc
    sortSelected='asc' // asc, desc
/>`;

const jsExample = `constructor(props) {
    super(props);

    this.setInputValue = this.setInputValue.bind(this);

    this.state = {
        selected: '',
        inputValue: '',
        suggestions: this.randomEmailGenerator(20)
    }
}

randomEmailGenerator(items = 10) {
    const generated = [];

    const firstnames = [
        'Bernd', 'David', 'Patrick',
        'Sandra', 'Petra', 'Wioleta',
        'Alex', 'John', 'Johan',
        'Viktor', 'Max'
    ];

    const lastnames = [
        'Musstermann', 'Reiner', 'Klar',
        'Schreiner', 'Jacobson'
    ];

    const domains = [
        'de', 'pl', 'com', 'ru'
    ];

    for (let x = 0; x <= items; x++) {
        const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
        const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        generated.push(
            {
                text: \`\${firstname}.\${lastname}@\${domain}\`,
                key1: 'value1',
                key2: 'value2'
            }
        );
    }
    return generated;
}

setInputValue(inputValue) {
    this.setState({
        inputValue: inputValue
    });
}

callbackSelection(data) {
    console.info(data);
}`;

class ReactRevolutionInputSuggestionObject extends React.Component {
    constructor(props) {
        super(props);

        this.setInputValue = this.setInputValue.bind(this);

        this.state = {
            selected: '',
            inputValue: '',
            suggestions: this.randomEmailGenerator(20)
        }
    }

    randomEmailGenerator(items = 10) {
        const generated = [];

        const firstnames = [
            'Bernd', 'David', 'Patrick',
            'Sandra', 'Petra', 'Wioleta',
            'Alex', 'John', 'Johan',
            'Viktor', 'Max'
        ];

        const lastnames = [
            'Musstermann', 'Reiner', 'Klar',
            'Schreiner', 'Jacobson'
        ];

        const domains = [
            'de', 'pl', 'com', 'ru'
        ];

        for (let x = 0; x <= items; x++) {
            const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
            const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
            const domain = domains[Math.floor(Math.random() * domains.length)];
            generated.push(
                {
                    text: `${firstname}.${lastname}@${domain}`,
                    key1: 'value1',
                    key2: 'value2'
                }
            );
        }
        return generated;
    }

    setInputValue(inputValue) {
        this.setState({
            inputValue: inputValue
        });
    }

    callbackSelection(data) {
        console.info(data);
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none text-center">
                    InputSuggestionObject
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <h1
                        title={`${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fas fa-user" />
                        {
                            trans('exampleTitle')
                        }
                    </h1>
                    <InputSuggestionObject
                        inputPlaceholder='Search for an email...'
                        suggestions={this.state.suggestions}
                        selected={this.state.selected}
                        callback={this.setInputValue}
                        value={this.state.inputValue}
                        getValueFromCallback={false}
                        callbackSelection={this.callbackSelection}
                        inputProps={{}}
                        type='text'
                        emptySuggestionAfterSelection={false}
                        sortSuggestions='asc' // asc, desc
                        sortSelected='asc' // asc, desc
                    />
                    {
                        generateArticles(
                            (
                                <h1
                                    title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example"
                                >
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
                                        code={codeExample}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample}
                                    />
                                </span>
                            )
                        )
                    }
                    {
                        generateArticles(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example"
                                >
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
                                        code={jsExample}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
                {
                    getDescriptionForstyle('rr-input-suggestion-object')
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
                                    key: 'selected',
                                    values: 'selected'
                                },
                                {
                                    key: 'suggestionsToFilter',
                                    values: 'suggestionsToFilter'
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
                                    key: 'getValueFromCallback',
                                    values: 'getValueFromCallback'
                                },
                                {
                                    key: 'emptySuggestionAfterSelection',
                                    values: 'emptySuggestionAfterSelection'
                                },
                                {
                                    key: 'sortSelected',
                                    values: 'sortSelected'
                                },
                                {
                                    key: 'sortSuggestions',
                                    values: 'sortSuggestions'
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
                            'rr-input-suggestion-object'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionInputSuggestionObject;

