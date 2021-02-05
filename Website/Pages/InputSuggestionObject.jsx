import React from 'react';

import { Table, InputSuggestionObject, SourceCode, Clipboard } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';


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
    sortSuggestions='asc'
    sortSelected='asc'
    searchSensitive={true}
/>`;

const codeExample2 = `import { InputSuggestionObject } from 'react-revolution';
// import InputSuggestionObject from 'react-revolution/InputSuggestionObject';

<InputSuggestionObject
    inputPlaceholder='Search for an email...'
    suggestions={this.state.suggestionsLoading}
    selected={this.state.selectedLoading}
    callback={this.setInputValueLoading}
    value={this.state.inputValueLoading}
    callbackSelection={this.callbackSelectionLoading}
    type='text'
    emptySuggestionAfterSelection={true}
    sortSuggestions='asc'
    sortSelected='asc'
    loading={
        <img src='./public/images/ajax-loader.gif' />
    }
    searchSensitive={false}
/>`;

const jsExample = `constructor(props) {
    super(props);
    this.setInputValue = this.setInputValue.bind(this);

    this.state = {
        selected: [],
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

const jsExample2 = `constructor(props) {
    super(props);
    this.setInputValueLoading = this.setInputValueLoading.bind(this);

    this.state = {
        selectedLoading: [],
        inputValueLoading: '',
        suggestionsLoading: []
    }
}

staticEmails() {
        
    const data = (name) => (
        <div className='flex'>
            <img src="./public/images/icon-32.png" />
            <p>
            {
                name
            }
            </p>
        </div>
    );

    return [
        {
            text: 'viktor.klar@pl',
            jsx: data('viktor.klar@pl')
        },
        {
            text: 'david.janitzek@com',
            jsx: data('david.janitzek@com')
        },
        {
            text: 'max.schreiner@de',
            jsx: data('max.schreiner@de')
        },
        {
            text: 'alice.janitzek@com',
            jsx: data('alice.janitzek@com')
        },
    ];
}

setInputValueLoading(inputValue) {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve(true);
            this.setState({
                inputValueLoading: inputValue,
                suggestionsLoading: this.staticEmails()
            });
        }, 2000);
    });
}

callbackSelectionLoading(data){
    console.info("Could redirect user now");
}`;

class _InputSuggestionObject extends React.Component {
    constructor(props) {
        super(props);
        this.setInputValue = this.setInputValue.bind(this);
        this.setInputValueLoading = this.setInputValueLoading.bind(this);

        this.state = {
            selected: [],
            inputValue: '',            
            suggestions: this.randomEmailGenerator(20),
            inputValueLoading: '',
            selectedLoading: [],
            suggestionsLoading: []
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

    staticEmails() {
        
        const data = (name) => (
            <div className='flex my-2'>
                <img src="./public/images/icon-32.png" />
                <p>
                {
                    name
                }
                </p>
            </div>
        );

        return [
            {
                text: 'viktor.klar@pl',
                jsx: data('viktor.klar@pl')
            },
            {
                text: 'david.janitzek@com',
                jsx: data('david.janitzek@com')
            },
            {
                text: 'max.schreiner@de',
                jsx: data('max.schreiner@de')
            },
            {
                text: 'alice.janitzek@com',
                jsx: data('alice.janitzek@com')
            },
        ];
    }

    setInputValue(inputValue) {
        this.setState({
            inputValue: inputValue
        });
    }

    callbackSelection(data) {
        console.info(data);
    }

    setInputValueLoading(inputValue) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(true);
                this.setState({
                    inputValueLoading: inputValue,
                    suggestionsLoading: this.staticEmails()
                });
            }, 2000);
        });
    }

    callbackSelectionLoading(data) {
        console.info("Could redirect user now");
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none my-3">
                    InputSuggestionObject
                </h1>
                <p className='description'>
                    {
                        trans('InputSuggestionObject.description.1')
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
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
                            sortSuggestions='asc'
                            sortSelected='asc'
                            searchSensitive={true}
                        />
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
                <h1 className="h1-title border-none my-3">
                    InputSuggestionObject
                </h1>
                <p className='description'>
                    {
                        trans('InputSuggestionObject.description.2')
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
                        <InputSuggestionObject
                            inputPlaceholder='Search for an email...'
                            suggestions={this.state.suggestionsLoading}
                            selected={this.state.selectedLoading}
                            callback={this.setInputValueLoading}
                            value={this.state.inputValueLoading}
                            callbackSelection={this.callbackSelectionLoading}
                            type='text'
                            emptySuggestionAfterSelection={true}
                            sortSuggestions='asc'
                            sortSelected='asc'
                            loading={
                                <img src='./public/images/ajax-loader.gif' />
                            }
                            searchSensitive={false}
                        />
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
                                        animation='jump'
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
                            )
                        )
                    }
                </div>
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
                                    key: 'searchSensitive',
                                    values: 'customsuggestion.searchSensitive'
                                },
                                {
                                    key: 'callbackSelection',
                                    values: 'inputsuggestionobject.callbackSelection'
                                },
                                {
                                    key: 'loading',
                                    values: 'inputsuggestionobject.loading'
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
                                    key: 'suggestions.text',
                                    values: 'customsuggestion.suggestions.text'
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
                                {
                                    key: 'applySelected',
                                    values: 'suggestion.applySelected'
                                },
                                {
                                    key: 'singleLiHeight',
                                    values: 'suggestions.singleLiHeight'
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

export default _InputSuggestionObject;

