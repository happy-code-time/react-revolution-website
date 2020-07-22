import React from 'react';

import { GlobalMessages, addGlobalMessage, SourceCode, Clipboard } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

const codeExample = `import { GlobalMessages, addGlobalMessage } from 'react-revolution';

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

const jsExample = `generateMessage() {
    addGlobalMessage('messagesApp', 'dddd', 1);
}`;

const cssExample = `.fullscreen-overlay-example{

}`;

class ReactRevolutionGlobalMessages extends React.Component 
{
    constructor(props) {
        super(props);
    }

    generateMessage() {
        addGlobalMessage('messagesApp', 'dddd', 1);
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
                        code={cssExample}
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
                        clipboard={cssExample}
                    />
                </div>
            </div>
        );
    }
};

export default ReactRevolutionGlobalMessages;

