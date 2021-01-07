import React from 'react';

import { urlExtract, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { urlExtract } from 'react-revolution';
//import urlExtract from 'react-revolution/Functions/urlExtract';`;

const jsExample1 = `const data = urlExtract();

/**
 * Returning structure for the key "href" (data.href)
 */
{
    "href": {
      "name": "href",
      "origin": "https://react-revolution.j.pl/#/functions/urlextract",
      "paths": [
        {
          "path": "functions",
          "keyValues": []
        },
        {
          "path": "urlextract",
          "keyValues": []
        }
      ],
      "protocol": "https://",
      "domain": "react-revolution.j.pl"
    },
    "search": {
      "name": "search",
      "origin": "",
      "paths": []
    },
    "hash": {
      "name": "hash",
      "origin": "#/functions/urlextract",
      "paths": [
        {
          "path": "#",
          "keyValues": []
        },
        {
          "path": "functions",
          "keyValues": []
        },
        {
          "path": "urlextract",
          "keyValues": []
        }
      ]
    }
  }`;


class _FunctionUrlExtract extends React.Component 
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
                live: `${JSON.stringify(urlExtract())}`,
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
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={30}
                    fireScrollBack={true} 
                />
            </div>
        );
    }
};

export default _FunctionUrlExtract;