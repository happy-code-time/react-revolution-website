import React from 'react';

import { InputSuggestionArray, SourceCode, Clipboard } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

const codeExample = `import { InputSuggestionArray } from 'react-revolution';

<InputSuggestionArray
    placeholder='Search for an email...'
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

class ReactRevolutionInputSuggestionArray extends React.Component {
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

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none text-center">
                    InputSuggestionArray
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
                    <InputSuggestionArray
                        placeholder='Search for an email...'
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
                    <h1
                        title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 1`}
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
                        code={codeExample}
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
                        clipboard={codeExample}
                    />
                    <h1
                        title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
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
                        code={jsExample}
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
                        clipboard={jsExample}
                    />
                </div>
            </div>
        );
    }
};

export default ReactRevolutionInputSuggestionArray;
