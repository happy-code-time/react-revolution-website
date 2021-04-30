import React from 'react';

import { Table, InputSuggestionArray, SourceCode, Clipboard } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

import generateArticle from '../Globals/generateArticle';

const codeExample = `import { InputSuggestionArray } from 'react-revolution';
// import InputSuggestionArray from 'react-revolution/InputSuggestionArray';

<InputSuggestionArray
    inputPlaceholder='Search for an email...'
    suggestions={this.state.suggestions}
    selected={this.state.selected}
    callback={this.setInputValue}
    value={this.state.inputValue}
    getValueFromCallback={false}
    callbackSelection={this.callbackSelection}
    type='text'
    emptySuggestionAfterSelection={false}
    sortSuggestions='asc'
    sortSelected='asc'
/>`;

const codeExample2 = `import { InputSuggestionArray } from 'react-revolution';
// import InputSuggestionArray from 'react-revolution/InputSuggestionArray';

<InputSuggestionArray
    inputPlaceholder='Search for an email...'
    suggestions={this.state.suggestionsLoading}
    selected={this.state.selectedLoading}
    callback={this.setInputValueLoading}
    value={this.state.inputValueLoading}
    getValueFromCallback={false}
    callbackSelection={this.callbackSelectionLoading}
    type='text'
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
        generated.push(\`\${firstname}.\${lastname}@\${domain}\`);
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
        inputValueLoading: '',
        selectedLoading: [],
        suggestionsLoading: []
    }
}

staticEmails() {
    return [
        'viktor.klar@pl', 
        'david.janitzek@com', 
        'max.schreiner@de', 
        'alice.janitzek@com',
    ];
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
}`;

class _InputSuggestionArray extends React.Component {
    constructor(props) {
        super(props);
        this.setInputValue = this.setInputValue.bind(this);
        this.setInputValueLoading = this.setInputValueLoading.bind(this);

        this.state = {
            selected: '',
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
            generated.push(`${firstname}.${lastname}@${domain}`);
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

    staticEmails() {
        return [
            'viktor.klar@pl',
            'david.janitzek@com',
            'max.schreiner@de',
            'alice.janitzek@com',
        ];
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
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    InputSuggestionArray
                </h1>
                <p className='description'>
                    {
                        trans('InputSuggestionArray.description.1')
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
                        <InputSuggestionArray
                            inputPlaceholder='Search for an email...'
                            suggestions={this.state.suggestions}
                            selected={this.state.selected}
                            callback={this.setInputValue}
                            value={this.state.inputValue}
                            getValueFromCallback={false}
                            callbackSelection={this.callbackSelection}
                            type='text'
                            emptySuggestionAfterSelection={false}
                            sortSuggestions='asc'
                            sortSelected='asc'
                        />
                    </div>
                    {
                        generateArticle(
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
                        generateArticle(
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
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    InputSuggestionArray
                </h1>
                <p className='description'>
                    {
                        trans('InputSuggestionArray.description.2')
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
                        <InputSuggestionArray
                            inputPlaceholder='Search for an email...'
                            suggestions={this.state.suggestionsLoading}
                            selected={this.state.selectedLoading}
                            callback={this.setInputValueLoading}
                            value={this.state.inputValueLoading}
                            getValueFromCallback={false}
                            callbackSelection={this.callbackSelectionLoading}
                            type='text'
                            sortSuggestions='asc'
                            sortSelected='asc'
                            loading={
                                <img src='./public/images/ajax-loader.gif' />
                            }
                            searchSensitive={false}
                        />
                    </div>
                    {
                        generateArticle(
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
                        generateArticle(
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
                                        animation='jump'
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
                                    key: 'plainValue',
                                    values: 'plainValue'
                                },
                                {
                                    key: 'callback',
                                    values: 'customsuggestion.callback'
                                },
                                {
                                    key: 'callbackSelection',
                                    values: 'inputsuggestionarray.callbackSelection'
                                },
                                {
                                    key: 'loading',
                                    values: 'inputsuggestionobject.loading'
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
                                    key: 'applySelected',
                                    values: 'suggestion.applySelected'
                                },
                                {
                                    key: 'singleLiHeight',
                                    values: 'suggestions.singleLiHeight'
                                },
                            ],
                            'InputSuggestionArray'
                        )
                    }
                />
            </div>
        );
    }
};

export default _InputSuggestionArray;

