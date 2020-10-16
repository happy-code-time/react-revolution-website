import React from 'react';

import { Clipboard, SourceCode } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import generateArticles from '../Globals/generateArticles';

const buildModulesJsx = (object = {}, count = 1) => {
    const { title, reactTextBefore, react, reactTextAfter, js, css, html, description, live, isFunction } = object;

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
            {
                live &&
                <h1
                    title={`${trans('exampleTitle')} ${count}`}
                    className="h1-example"
                >
                    <i className="fas fa-user" />
                    {
                        trans('exampleTitle')
                    }
                </h1>
            }
            {
                live && live
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
                react && generateArticles(
                    (
                        <h1
                            title={isFunction ? `${trans('reactFunctionTitle')} - ${trans('exampleTitle')} ${count}` : `${trans('reactCodeTitle')} - ${trans('exampleTitle')} ${count}`}
                            className="h1-example"
                        >
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
                <p className="description">
                    {
                        reactTextAfter
                    }
                </p>
            }
            {
                js && generateArticles(
                    (
                        <h1
                            title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} ${count}`}
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
                css && generateArticles(
                    (
                        <h1
                            title={`${trans('cssCodeTitle')} - ${trans('exampleTitle')} ${count}`}
                            className="h1-example"
                        >
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

