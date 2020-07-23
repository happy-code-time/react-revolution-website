import React from 'react';

import { GlobalMessages, addGlobalMessage, SourceCode, Clipboard, uuid } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

const codeExample1 = `import { GlobalMessages, addGlobalMessage, uuid } from 'react-revolution';

    <div
        className="button-action rr-revolution-button-clipboard"
        onClick={(e) => this.generateMessage()}
    >
        generate message
    </div>
    <GlobalMessages
    messageKey='messagesApp'
    timer={1000}
    codeMapping={{
        1: {
            title: 'GLOBAL ERROR',
            displayErrorCode: true,
            text: {
                prefix: 'prefix',
                suffix: 'suffix',
                props: {},
            },
            close: {
                text: 'close',
                props: {},
            },
            link: {
                text: 'error',
                useTagLink: false,
                href: 'error-messages-learn-more',
                props: {
                    target: '_blank',
                },
            },
        },
    }}
/>`;

const codeExample2 = `import { GlobalMessages, addGlobalMessage, uuid } from 'react-revolution';

    <div
        className="button-action rr-revolution-button-clipboard"
        onClick={(e) => this.generateMessage(2000)}
    >
        generate message
    </div>
    <GlobalMessages
    messageKey='messagesApp'
    timer={1000}
    codeMapping={{
        1: {
            title: 'GLOBAL ERROR',
            displayErrorCode: true,
            text: {
                prefix: 'prefix',
                suffix: 'suffix',
                props: {},
            },
            close: {
                text: 'close',
                props: {},
            },
            link: {
                text: 'error',
                useTagLink: false,
                href: 'error-messages-learn-more',
                props: {
                    target: '_blank',
                },
            },
        },
    }}
/>`;


const jsExample = `generateMessage(timeout = undefined) {
    addGlobalMessage('messagesApp', uuid(), 1, timeout);
}`;

class ReactRevolutionGlobalMessages extends React.Component 
{
    constructor(props) {
        super(props);
    }

    generateMessage(timeout = undefined) {
        addGlobalMessage('messagesApp', uuid(), 1, timeout);
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none text-center">
                    GlobalMessages
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
                    <div
                        className="button-action rr-revolution-button-clipboard"
                        onClick={(e) => this.generateMessage()}
                    >
                        generate message
                    </div>
                    <GlobalMessages
                        messageKey='messagesApp'
                        timer={1000}
                        codeMapping={{
                            1: {
                                title: 'GLOBAL ERROR',
                                displayErrorCode: true,
                                text: {
                                    prefix: 'prefix',
                                    suffix: 'suffix',
                                    props: {},
                                },
                                close: {
                                    text: 'close',
                                    props: {},
                                },
                                link: {
                                    text: 'error',
                                    useTagLink: false,
                                    href: 'error-messages-learn-more',
                                    props: {
                                        target: '_blank',
                                    },
                                },
                            },
                        }}
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
                        code={codeExample1}
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
                        clipboard={codeExample1}
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
                    <h1
                        title={`${trans('cssCodeTitle')} - ${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fab fa-css3" />
                        {
                            trans('cssCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        displayLineNumber={true}
                        layout='dark'
                        code={``}
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
                        clipboard={``}
                    />
                </div>
                <div className="code-example mt-4">
                    <h1 className="h1-title border-none text-center">
                        GlobalMessages
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
                    <div
                        className="button-action rr-revolution-button-clipboard"
                        onClick={(e) => this.generateMessage(2000)}
                    >
                        generate message
                    </div>
                    <GlobalMessages
                        messageKey='messagesApp'
                        timer={1000}
                        codeMapping={{
                            1: {
                                title: 'GLOBAL ERROR',
                                displayErrorCode: true,
                                text: {
                                    prefix: 'prefix',
                                    suffix: 'suffix',
                                    props: {},
                                },
                                close: {
                                    text: 'close',
                                    props: {},
                                },
                                link: {
                                    text: 'error',
                                    useTagLink: false,
                                    href: 'error-messages-learn-more',
                                    props: {
                                        target: '_blank',
                                    },
                                },
                            },
                        }}
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
                    <h1
                        title={`${trans('cssCodeTitle')} - ${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fab fa-css3" />
                        {
                            trans('cssCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        displayLineNumber={true}
                        layout='dark'
                        code={``}
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
                        clipboard={``}
                    />
                </div>
            </div>
        );
    }
};

export default ReactRevolutionGlobalMessages;

