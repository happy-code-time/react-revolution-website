import React from 'react';
//@ts-ignore
import { addGlobalMessage, GlobalMessage, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';

const jsExample1 = `import { GlobalMessage, addGlobalMessage } from 'react-revolution';
//import GlobalMessage from 'react-revolution/GlobalMessage';
//import addGlobalMessage from 'react-revolution/Functions/addGlobalMessage';

target_1() {
    addGlobalMessage('listener_1', 'Will be removed in 3 seconds.', 1);
    addGlobalMessage('listener_1', 'Will be removed in 3 seconds.', 1);
    addGlobalMessage('listener_1', 'Will be removed in 3 seconds.', 1);

    setTimeout(() => {
        const mappingCode = 1;
        const disappear = undefined;
        const clearStack = true; // clear all messages
        const persistCurrentMessage = false; // False by default
        addGlobalMessage('listener_1', 'Clear stack called!', mappingCode, disappear, clearStack, persistCurrentMessage);
    }, 3000);
}

render(){
    return(
        <span>
            <button
                style={
                    {
                        width: '100px',
                        boxSizing: 'border-box',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        backgroundColor: 'dodgerblue',
                        color: 'rgb(255,255,255)',
                        textAlign: 'center',
                        cursor: 'pointer',
                        margin: '0 calc(50% - 50px)',
                        border: '1px solid dodgerblue'
                    }
                }
                onClick={() => this.target_1()}
            >
                Run example 1
            </button>
            <GlobalMessage
                messageKey='listener_1'
                addClass='rr-global-messages-example'
                timer={1000}
                codeMapping={{
                    1: {
                        title: 'Title',
                        displayErrorCode: false,
                        close: {
                            text: 'close',
                            props: {},
                        }
                    },
                }}
            />
        </span>
    );
}`;

const jsExample2 = `import { GlobalMessage, addGlobalMessage } from 'react-revolution';
//import GlobalMessage from 'react-revolution/GlobalMessage';
//import addGlobalMessage from 'react-revolution/Functions/addGlobalMessage';

target_2() {
    addGlobalMessage('listener_2', 'Messages type 2.', 2);
    addGlobalMessage('listener_2', 'Messages type 2.', 2);
    addGlobalMessage('listener_2', 'Messages type 2.', 2);

    /**
     * Remove all messages with the code mapping type: 2
     * and append the last given message
     */
    setTimeout(() => {
        const mappingCode = 2;
        const disappear = undefined;
        const clearStack = true; // clear all messages
        const persistCurrentMessage = true; // persist last message
        addGlobalMessage('listener_2', 'Clear stack called and persist current message.', mappingCode, disappear, clearStack, persistCurrentMessage);
    }, 2000);
}

render(){
    return(
        <span>
            <button
                style={
                    {
                        width: '100px',
                        boxSizing: 'border-box',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        backgroundColor: 'dodgerblue',
                        color: 'rgb(255,255,255)',
                        textAlign: 'center',
                        cursor: 'pointer',
                        margin: '0 calc(50% - 50px)',
                        border: '1px solid dodgerblue'
                    }
                }
                onClick={() => this.target_2()}
            >
                Run example 2
            </button>
            <GlobalMessage
                messageKey='listener_2'
                addClass='rr-global-messages-example'
                timer={1000}
                codeMapping={{
                    2: {
                        title: 'Title',
                        displayErrorCode: false,
                        close: {
                            text: 'close',
                            props: {},
                        }
                    },
                }}
            />
        </span>
    );
}`;

const jsExample3 = `import { GlobalMessage, addGlobalMessage } from 'react-revolution';
//import GlobalMessage from 'react-revolution/GlobalMessage';
//import addGlobalMessage from 'react-revolution/Functions/addGlobalMessage';

target_3() {
    addGlobalMessage('listener_3', 'Messages type 3.', 3);
    addGlobalMessage('listener_3', 'Messages type 3.', 3);
    addGlobalMessage('listener_2', 'Messages type 2 - persisted.', 2);

    /**
     * Remove all messages with the code mapping type: 3
     * and do not append the last given message
     */
    setTimeout(() => {
        const mappingCode = 1;
        const disappear = undefined;
        const clearStack = 3; // clear all messages
        const persistCurrentMessage = false; // do NOT persist last message
        addGlobalMessage('listener_3', 'dddddddddd', mappingCode, disappear, clearStack, persistCurrentMessage);
    }, 2000);
}

render(){
    return(
        <span>
            <button
                style={
                    {
                        width: '100px',
                        boxSizing: 'border-box',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        backgroundColor: 'dodgerblue',
                        color: 'rgb(255,255,255)',
                        textAlign: 'center',
                        cursor: 'pointer',
                        margin: '0 calc(50% - 50px)',
                        border: '1px solid dodgerblue'
                    }
                }
                onClick={() => this.target_3()}
            >
                Run example 3
            </button>
            <GlobalMessage
                messageKey='listener_3'
                addClass='rr-global-messages-example'
                timer={1000}
                codeMapping={{
                    3: {
                        title: 'Title',
                        displayErrorCode: false,
                        close: {
                            text: 'close',
                            props: {},
                        }
                    },
                }}
            />
        </span>
    );
}`;

const cssExample1 = `.GlobalMessage-example{
    .single-error{
        background-color: #FF4469;
    }
}`;

class _FunctionAddGlobalMessage extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.target_1 = this.target_1.bind(this);
        this.target_2 = this.target_2.bind(this);
        this.target_3 = this.target_3.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'addGlobalMessage',
                description: 'Add global message and then clear the WHOLE stack (clear all messages) after 3 seconds.',
                reactTextBefore: '',
                react: '',
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample1,
                html: '',
                live: (
                    <button
                        style={
                            {
                                width: '100px',
                                boxSizing: 'border-box',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'dodgerblue',
                                color: 'rgb(255,255,255)',
                                textAlign: 'center',
                                cursor: 'pointer',
                                margin: '0 calc(50% - 50px)',
                                border: '1px solid dodgerblue'
                            }
                        }
                        onClick={() => this.target_1()}
                    >
                        Run example 1
                    </button>
                ),
                isFunction: true
            },
            {
                title: 'addGlobalMessage',
                description: 'Add global message and then clear stack by codeMapping type: 2 (clear all messages with the passed type: 2).',
                reactTextBefore: '',
                react: '',
                reactTextAfter: '',
                js: jsExample2,
                css: cssExample1,
                html: '',
                live: (
                    <button
                        style={
                            {
                                width: '100px',
                                boxSizing: 'border-box',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'dodgerblue',
                                color: 'rgb(255,255,255)',
                                textAlign: 'center',
                                cursor: 'pointer',
                                margin: '0 calc(50% - 50px)',
                                border: '1px solid dodgerblue'
                            }
                        }
                        onClick={() => this.target_2()}
                    >
                        Run example 2
                    </button>
                ),
                isFunction: true
            },
            {
                title: 'addGlobalMessage',
                description: 'Add global message and then clear stack by codeMapping type: 3 (clear all messages with the passed type: 3) and persist last message with the passed typed type: 2.',
                reactTextBefore: '',
                react: '',
                reactTextAfter: '',
                js: jsExample3,
                css: cssExample1,
                html: '',
                live: (
                    (
                        <button
                            style={
                                {
                                    width: '100px',
                                    boxSizing: 'border-box',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    backgroundColor: 'dodgerblue',
                                    color: 'rgb(255,255,255)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    margin: '0 calc(50% - 50px)',
                                    border: '1px solid dodgerblue'
                                }
                            }
                            onClick={() => this.target_3()}
                        >
                            Run example 3
                        </button>
                    )
                ),
                isFunction: true
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

    target_1() {
        addGlobalMessage('listener_1', 'Will be removed in 3 seconds.', 1);
        addGlobalMessage('listener_1', 'Will be removed in 3 seconds.', 1);
        addGlobalMessage('listener_1', 'Will be removed in 3 seconds.', 1);

        setTimeout(() => {
            const mappingCode = 1;
            const disappear = undefined;
            const clearStack = true; // clear all messages
            const persistCurrentMessage = false; // False by default
            addGlobalMessage('listener_1', 'Clear stack called!', mappingCode, disappear, clearStack, persistCurrentMessage);
        }, 3000);
    }

    target_2() {
        addGlobalMessage('listener_2', 'Messages type 2.', 2);
        addGlobalMessage('listener_2', 'Messages type 2.', 2);
        addGlobalMessage('listener_2', 'Messages type 2.', 2);

        /**
         * Remove all messages with the code mapping type: 2
         * and append the last given message
         */
        setTimeout(() => {
            const mappingCode = 2;
            const disappear = undefined;
            const clearStack = true; // clear all messages
            const persistCurrentMessage = true; // persist last message
            addGlobalMessage('listener_2', 'Clear stack with persist last message.', mappingCode, disappear, clearStack, persistCurrentMessage);
        }, 2000);
    }

    target_3() {
        addGlobalMessage('listener_3', 'Messages type 3.', 3);
        addGlobalMessage('listener_3', 'Messages type 3.', 3);
        addGlobalMessage('listener_2', 'Messages type 2 - persisted and last message ignored.', 2);

        /**
         * Remove all messages with the code mapping type: 3
         * and do not append the last given message
         */
        setTimeout(() => {
            const mappingCode = 1;
            const disappear = undefined;
            const clearStack = 3; // clear all messages
            const persistCurrentMessage = false; // do NOT persist last message
            addGlobalMessage('listener_3', 'dddddddddd', mappingCode, disappear, clearStack, persistCurrentMessage);
        }, 2000);
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
                <GlobalMessage
                    messageKey='listener_1'
                    addClass='rr-global-messages-example'
                    timer={1000}
                    codeMapping={{
                        1: {
                            title: 'Title',
                            displayErrorCode: false,
                            close: {
                                text: 'close',
                                props: {},
                            }
                        },
                    }}
                />
                <span>
                    <GlobalMessage
                        messageKey='listener_2'
                        addClass='rr-global-messages-example'
                        timer={1000}
                        codeMapping={{
                            2: {
                                title: 'Title',
                                displayErrorCode: false,
                                close: {
                                    text: 'close',
                                    props: {},
                                }
                            },
                        }}
                    />
                </span>
                <span>
                    <GlobalMessage
                        messageKey='listener_3'
                        addClass='rr-global-messages-example'
                        timer={1000}
                        codeMapping={{
                            3: {
                                title: 'Title',
                                displayErrorCode: false,
                                close: {
                                    text: 'close',
                                    props: {},
                                }
                            },
                        }}
                    />
                </span>
            </div>
        );
    }
};

export default _FunctionAddGlobalMessage;