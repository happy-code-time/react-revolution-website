import React from 'react';

import { Clipboard, SourceCode } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

const buildModulesJsx = (object = {}, count = 1) => {
    const { title, reactTextBefore, react, reactTextAfter, js, css, html, description, live } = object;

    return (
        <div className="code-example">
            <h1 className="h1-title border-none text-center">
                {
                    title
                }
            </h1>
            {
                description &&
                <p className="description">
                    {
                        description
                    }
                </p>
            }
            <h1
                title={`${trans('exampleTitle')} ${count}`}
                className="h1-example"
            >
                <i className="fas fa-user" />
                {
                    trans('exampleTitle')
                }
            </h1>
            {
                live
            }
            {
                reactTextBefore &&
                <p className="description">
                    {
                        reactTextBefore
                    }
                </p>
            }
            {
                react &&
                <span>
                    <h1
                        title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} ${count}`}
                        className="h1-example"
                    >
                        <i className="fas fa-atom" />
                        {
                            trans('reactCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        lineNumber={true}
                        layout='dark'
                        code={react}
                    />
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div title={trans('copyToClipboard')} className="button-action">
                                <i className="far fa-clipboard"></i>
                            </div>
                        )}
                        clipboard={react}
                    />
                </span>
            }
            {
                reactTextAfter &&
                <p className="description">
                    {
                        reactTextAfter
                    }
                </p>
            }
            {
                js &&
                <span>
                    <h1
                        title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} ${count}`}
                        className="h1-example"
                    >
                        <i className="fab fa-node-js" />
                        {
                            trans('jsCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        lineNumber={true}
                        layout='dark'
                        code={js}
                    />
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div title={trans('copyToClipboard')} className="button-action">
                                <i className="far fa-clipboard"></i>
                            </div>
                        )}
                        clipboard={js}
                    />
                </span>
            }
            {
                html &&
                <SourceCode
                    layout='light'
                    code={html}
                />
            }
            {
                css &&
                <span>
                    <h1
                        title={`${trans('cssCodeTitle')} - ${trans('exampleTitle')} ${count}`}
                        className="h1-example"
                    >
                        <i className="fab fa-css3" />
                        {
                            trans('cssCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        lineNumber={true}
                        layout='dark'
                        code={css}
                    />
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div title={trans('copyToClipboard')} className="button-action">
                                <i className="far fa-clipboard"></i>
                            </div>
                        )}
                        clipboard={css}
                    />
                </span>
            }
        </div>
    );
};

export default buildModulesJsx;

