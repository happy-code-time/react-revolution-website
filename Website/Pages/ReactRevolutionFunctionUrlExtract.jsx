import React from 'react';

import { LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { urlExtract } from 'react-revolution';`;

const jsExample1 = `const data = urlExtract();

/**
 * Returning structure for the key "href" (data.href)
 */
{
    "href": {
        "protocol" : "https://",
        "domain": "react-revolution/#/"
        "name": "href"
        "origin": "http://react-revolution/#/react-revolution-function-url-extract?test=ok"
        {
            "path": "react-revolution-function-url-extract",
            "keyValues": 
            [
                {
                    "key": "react-revolution-function-url-extract",
                    "value": null,
                    "pair": "react-revolution-function-url-extract"
                },
                {
                    "key": "test",
                    "value": "ok",
                    "pair": "test=ok"
                }
            ]
        }
    }
}

/**
 * Returning structure for the key "hash" (data.hash)
 */
{
    "hash": {
        "name": "hash",
        "origin": "#/react-revolution-function-url-extract?test=ok",
        "paths": [
            {
                "path": "#",
                "keyValues": []
            },
            {
                "path": "react-revolution-function-url-extract?test=ok",
                "keyValues": 
                [
                    {
                        "key": "react-revolution-function-url-extract",
                        "value": null,
                        "pair": "react-revolution-function-url-extract"
                      },
                      {
                        "key": "test",
                        "value": "ok",
                        "pair": "test=ok"
                      }
                ]
            }
        ]
    }
}`;


class ReactRevolutionFunctionUrlExtract extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'urlExtract',
                description: trans('description_urlExtract'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: '',
                isFunction: true
            }
        ];
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return Promise.resolve('break');
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]), this.countCallbacks + 1);
        });
    }

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={500}
                    fireScrollBack={true} 
                />
            </div>
        );
    }
};

export default ReactRevolutionFunctionUrlExtract;