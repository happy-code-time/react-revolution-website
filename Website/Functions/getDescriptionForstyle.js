import React from 'react';

import { host, version } from '../Globals';

import trans from '../Translations/trans';

const getDescriptionForstyle = (name) => {
    const css = `${host}public/react-revolution/v${version}/css/${name}.css`;
    const scss = `${host}public/react-revolution/v${version}/scss/${name}.scss`;
    const global = `${host}public/react-revolution/v${version}/css/globals.css`;

    return (
        <div className="mb-2">
            <h1 className="h1-title border-none text-center mb-2">
                {
                    trans('styleLoading')
                }
            </h1>
            <a href={global} target='_blank' className="a-description">
                {
                    global
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