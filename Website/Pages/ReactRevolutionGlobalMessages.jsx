import React from 'react';

import { Table, GlobalMessages, addGlobalMessage, SourceCode, Clipboard, uuid } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

import generateArticles from '../Globals/generateArticles';

const codeExample1 = `import { GlobalMessages, addGlobalMessage, uuid } from 'react-revolution';
// import GlobalMessages from 'react-revolution/GlobalMessages';

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
                href: '/#/react-revolution-global-messages',
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
                href: '/#/react-revolution-global-messages',
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

class ReactRevolutionGlobalMessages extends React.Component {
    constructor(props) {
        super(props);
    }

    generateMessage(timeout = undefined) {
        addGlobalMessage('messagesApp', uuid(), 1, timeout);
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none my-3">
                    GlobalMessages
                </h1>
                <p className='description'>
                    {
                        trans('GlobalMessages.description.1')
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
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
                                        href: '/#/react-revolution-global-messages',
                                        props: {
                                            target: '_blank',
                                        },
                                    },
                                },
                            }}
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
                                        code={codeExample1}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample1}
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
                <div className="code-example">
                    <h1 className="h1-title border-none my-3">
                        GlobalMessages
                    </h1>
                    <p className='description'>
                        {
                            trans('GlobalMessages.description.2')
                        }
                    </p>
                    <div className="code-example-live">
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
                                        href: '/#/react-revolution-global-messages',
                                        props: {
                                            target: '_blank',
                                        },
                                    },
                                },
                            }}
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
                    getDescriptionForstyle('rr-global-messages')
                }
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
                                    key: 'messageKey',
                                    values: 'messageKey'
                                },
                                {
                                    key: 'timer',
                                    values: 'timer'
                                },
                                {
                                    key: 'empty',
                                    values: 'globalMessage.empty'
                                },
                                {
                                    key: 'codeMapping',
                                    values: 'codeMapping'
                                },
                                {
                                    key: 'title',
                                    values: 'codeMapping.title'
                                },
                                {
                                    key: 'displayErrorCode',
                                    values: 'codeMapping.displayErrorCode'
                                },
                                {
                                    key: 'text',
                                    values: 'codeMapping.text'
                                },
                                {
                                    key: 'text.prefix',
                                    values: 'codeMapping.text.prefix'
                                },
                                {
                                    key: 'text.suffix',
                                    values: 'codeMapping.text.suffix'
                                },
                                {
                                    key: 'text.props',
                                    values: 'codeMapping.text.props'
                                },
                                {
                                    key: 'close',
                                    values: 'codeMapping.close'
                                },
                                {
                                    key: 'close.text',
                                    values: 'codeMapping.close.text'
                                },
                                {
                                    key: 'close.props',
                                    values: 'codeMapping.close.props'
                                },
                                {
                                    key: 'link',
                                    values: 'codeMapping.link'
                                },
                                {
                                    key: 'link.text',
                                    values: 'codeMapping.link.text'
                                },
                                {
                                    key: 'link.useTagLink',
                                    values: 'codeMapping.link.useTagLink'
                                },
                                {
                                    key: 'link.href',
                                    values: 'codeMapping.link.href'
                                },
                            ],
                            'rr-global-messages'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionGlobalMessages;

