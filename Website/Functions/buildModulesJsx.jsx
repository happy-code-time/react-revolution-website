import React from 'react';

import { Clipboard, SourceCode } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import generateArticle from '../Globals/generateArticle';

const buildModulesJsx = (object = {}, count = 1) => {
    const { title, reactTextBefore, react, reactTextAfter, js, css, html, description, live, isFunction } = object;

    return (
        <div className="code-example">
            {
                title &&
                <h1 className="title-border">
                    <i className="far fa-file-code"></i>
                    {
                        title
                    }
                </h1>
            }
            {
                description &&
                <p className="description">
                    {
                        description
                    }
                </p>
            }
            <div className="code-example-live">
                {
                    live && live
                }
            </div>
            {
                reactTextBefore &&
                <p className="description">
                    {
                        reactTextBefore
                    }
                </p>
            }
            {
                react && generateArticle(
                    (
                        <h1 className="h1-example p-0  m-0">
                            <i className="fas fa-atom" />
                            {
                                isFunction ? trans('reactFunctionTitle') : trans('reactCodeTitle')
                            }
                        </h1>
                    ),
                    (
                        <span>
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
                    )
                )
            }
            {
                reactTextAfter &&
                <p className="description pre-wrap">
                    {
                        reactTextAfter
                    }
                </p>
            }
            {
                js && generateArticle(
                    (
                        <h1 className="h1-example p-0  m-0">
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
                    )
                )
            }
            {
                html &&
                <SourceCode
                    layout='light'
                    code={html}
                />
            }
            {
                css && generateArticle(
                    (
                        <h1 className="h1-example p-0 m-0">
                            <i className="fab fa-css3" />
                            {
                                trans('cssCodeTitle')
                            }
                        </h1>
                    ),
                    (
                        <span>

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
                    )
                )
            }
        </div>
    );
};

export default buildModulesJsx;

