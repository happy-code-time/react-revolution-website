import React from 'react';

import { SourceCode } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

const buildModulesJsx = (object = {}, count = 1) => {
    const { react, js, css, html, description, live } = object;

    return (
        <div className="code-example">
            <h1 className="h1-example">
                {`${trans('exampleTitle')} ${count}`}
            </h1>
            {
                live
            }
            {
                description &&
                description
            }
            {
                react &&
                <span>
                    <h1 className="h1-example">
                        {`${trans('reactCodeTitle')} ${count}`}
                    </h1>
                    <SourceCode
                        layout='light'
                        code={react}
                    />
                </span>
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
                <SourceCode
                    layout='light'
                    code={css}
                />
            }
        </div>
    );
};

export default buildModulesJsx;