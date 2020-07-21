import React from 'react';

import { Clipboard, SourceCode } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

const buildModulesJsx = (object = {}, count = 1) => {
    const { reactTextBefore, react, reactTextAfter, js, css, html, description, live } = object;

    return (
        <div className="code-example">
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
                    </h1>
                    <SourceCode
                        displayLineNumber={true}
                        layout='dark'
                        code={react}
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
                <SourceCode
                    layout='light'
                    code={js}
                />
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
                    </h1>
                    <SourceCode
                        displayLineNumber={true}
                        layout='dark'
                        code={css}
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
                        clipboard={css}
                    />
                </span>
            }
        </div>
    );
};

export default buildModulesJsx;

