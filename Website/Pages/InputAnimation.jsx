import React from 'react';

import { Table, InputAnimation, LoadOnScroll, SourceCode, Clipboard, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

import generateArticle from '../Globals/generateArticle';

const codeExample1 = `import { InputAnimation } from 'react-revolution';
// import InputAnimation from 'react-revolution/InputAnimation';

<InputAnimation
    inputPlaceholder='Placeholder'
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
// import InputAnimation from 'react-revolution/InputAnimation';

<InputAnimation
    inputPlaceholder='Placeholder'
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

class _InputAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callbackOnInput = this.callbackOnInput.bind(this);

        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'InputAnimation',
                description: trans("runtime.generator.description"),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <InputAnimation
                        inputPlaceholder='Placeholder'
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

                <div className="code-example mt-4">
                    <h1 className="title-border my-3">
                        <i className="far fa-file-code"></i>
                        InputAnimation
                    </h1>
                    <div className="code-example-live">
                        <InputAnimation
                            inputPlaceholder='Placeholder'
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
                    </div>
                    {
                        generateArticle(
                            (
                                <h1 className="h1-example p-0  m-0"
                                ><i className="fas fa-atom" />
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
                    {
                        generateArticle(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example p-0  m-0"
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
                                    key: 'callback',
                                    values: 'inputanimation.callback'
                                },
                                {
                                    key: 'plainValue',
                                    values: 'plainValue'
                                },
                                {
                                    key: 'inputType',
                                    values: 'inputType'
                                },
                                {
                                    key: 'props',
                                    values: 'props'
                                },
                                {
                                    key: 'inputPlaceholder',
                                    values: 'inputPlaceholder'
                                },
                                {
                                    key: 'animatePlaceholder',
                                    values: 'animatePlaceholder'
                                },
                                {
                                    key: 'onEnter',
                                    values: 'onEnter'
                                },
                                {
                                    key: 'allowOnlyAZ',
                                    values: 'allowOnlyAZ'
                                },
                                {
                                    key: 'getValueFromCallback',
                                    values: 'getValueFromCallback'
                                },
                            ],
                            'InputAnimation'
                        )
                    }
                />
            </div>
        );
    }
};

export default _InputAnimation;

