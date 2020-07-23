import React from 'react';

import { InputAnimation, LoadOnScroll, SourceCode, Clipboard, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { InputAnimation } from 'react-revolution';

<InputAnimation
    placeholder='Placeholder'
    type="text"
    props={{
        autoComplete: "username"
    }}
    callback={this.callback}
    onEnter={this.enter}
    allowOnlyAZ={true}
    getValueFromCallback={false}
    animatePlaceholder={true}
/>`;

const codeExample2 = `import { InputAnimation } from 'react-revolution';

<InputAnimation
    placeholder='Placeholder'
    type="text"
    props={{
        autoComplete: "username"
    }}
    onEnter={this.enter}
    value={this.state.inputValue}
    allowOnlyAZ={false}
    animatePlaceholder={true}
    callback={this.callbackOnInput}
    getValueFromCallback={true}
/>`;

const jsExample1 = `callback(inputValue) {
    console.info(inputValue);
}`;

const jsExample2 = `constructor(props) {
    super(props);
    this.callbackOnInput = this.callbackOnInput.bind(this);

    this.state = {
        inputValue: 'a'
    }
}

callbackOnInput(inputValue) {
    /**
     * Internal state
     */
    this.setState({
        inputValue
    });
    /**
     * Callback to the module to update 
     * the state inside the module
     */
    return inputValue;
}`;

class ReactRevolutionInputAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callbackOnInput = this.callbackOnInput.bind(this);
        
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'InputAnimation',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <InputAnimation
                        placeholder='Placeholder'
                        type="text"
                        props={{
                            autoComplete: "username"
                        }}
                        callback={this.callback}
                        onEnter={this.enter}
                        allowOnlyAZ={true}
                        getValueFromCallback={false}
                        animatePlaceholder={true}
                    />
                )
            }
        ];

        this.state = {
            inputValue: 'a'
        }
    }

    callback(inputValue) {
        console.info(inputValue);
    }

    callbackOnInput(inputValue) {
        /**
         * Internal state
         */
        this.setState({
            inputValue
        });
        /**
         * Callback to the module to update 
         * the state inside the module
         */
        return inputValue;
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
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />

                <div className="code-example mt-4">
                    <h1 className="h1-title border-none text-center">
                        InputAnimation
                    </h1>
                    <h1
                        title={`${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fas fa-user" />
                        {
                            trans('exampleTitle')
                        }
                    </h1>
                    <InputAnimation
                        placeholder='Placeholder'
                        type="text"
                        props={{
                            autoComplete: "username"
                        }}
                        onEnter={this.enter}
                        value={this.state.inputValue}
                        allowOnlyAZ={false}
                        animatePlaceholder={true}
                        callback={this.callbackOnInput}
                        getValueFromCallback={true}
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
                </div>
            </div>
        );
    }
};

export default ReactRevolutionInputAnimation;

