import React from 'react';

import { host, version } from '../Globals';

import trans from '../Translations/trans';

const getDescriptionForstyle = (name) => {
    const css = `${host}public/react-revolution/v${version}/css/${name}.css`;
    const scss = `${host}public/react-revolution/v${version}/scss/${name}.scss`;
    const globalCss = `${host}public/react-revolution/v${version}/css/globals.css`;
    const globalScss = `${host}public/react-revolution/v${version}/scss/globals.scss`;

    return (
        <div className="mb-2">
            <h1 className="h1-title border-none my-3">
                {
                    trans('styleLoading')
                }
            </h1>
            <a href={globalCss} target='_blank' className="a-description">
                {
                    globalCss
                }
            </a>
            <a href={globalScss} target='_blank' className="a-description">
                {
                    globalScss
                }
            </a>
            <a href={css} target='_blank' className="a-description">
                {
                    css
                }
            </a>
            <a href={scss} className="a-description">
                {
                    scss
                }
            </a>
        </div>
    );
};

export default getDescriptionForstyle;