import React from 'react';

import { SourceCode, LoadOnScroll, LoadingBoxTop, Table } from '../../react-revolution/react-revolution';

import buildModulesJsx from '../Functions/buildModulesJsx';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { SourceCode } from 'react-revolution';
// import SourceCode from 'react-revolution/SourceCode';

<SourceCode
    promise={true}
    promiseLine={1000}
    promiseTime={100}
    lineNumber={true}
    lineNumberNewLine={false}
    matcher={
        [
            {
                words: [
                    'import',
                    'from',
                    'require',
                    'use',
                    'return',
                    'export',
                    'default',
                    'extends',
                    'interface'
                ],
                className: 'key'
            },
            {
                words: [
                    'Accordion',
                    'react-revolution'
                ],
                className: 'module'
            }
        ]
    }
    sourceCode={
        [
            'tags',
            'properties',
            'variables',
            'functions',
            'words',
            'quotes'
        ]
    }
    inputActive={true}
    inputCallback={undefined}
    inputPlaceholder='Search for code...'
    searchSensitive={false}
    fallbackNoData='no data'
    fallbackNoDataSearch='no search result'
    code={\`import { Accordion } from 'react-revolution';

        <Accordion
            animation='height'
            data={
                [
                    {
                        text: (
                                <span>
                                    <i className="fas fa-car"></i>
                                    Mercedes
                                </span>
                        ),
                        data: [
                            {
                                    text: 'A - Class',
                                    data: [
                                        {
                                            text: '- A 200'
                                        },
                                        {
                                            text: '- A 35 AMG'
                                        }
                                    ]
                            },
                            {
                                text: 'B - Class',
                                data: [
                                    {
                                        text: '- B 150'
                                    },
                                    {
                                        text: '- B 250'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        />\`
    }
/>`;

const cssExample = `.SourceCode{
    width: calc(100% - 20px);
  
    .code{
      li{
        letter-spacing: 0.0144rem;
        font-size: 0.78rem;
  
        .line-code{
          min-height: 20px;
        }
      }
    }
  
    span{
      color: $white;
    }
  
    .tag-start,
    .tag-end,
    .slash,
    .equal,
    .quote{
        color: #93DDF7
    }
  
    .tag-name,
    .key{
        color: #49B095;
    }
  
    .attribute-value{
        color: #B5EE85;
    }
  
    .var,
    .object-property{
      color: #45A0E9;
    }
  
    .not-filtered,
    .no-match,
    .value{
        color: rgb(255,2552,255);
    }
  
    .line-number{
        color: #C2C2C2;
    }
    .variable-dollar{
      color: #F44567;
    }
  
    .bracket{
      color: #ccc;
    }
  
    .function-arguments{
      color: orange;
    }
  
    .variable-name,
    .attribute-name,
    .function-name{
      color: mediumseagreen;
    }
  
    .bracket-value{
      color: #ccc;
    }
}`;

class _SourceCode extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'SourceCode',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <SourceCode
                        promise={true}
                        promiseLine={1000}
                        promiseTime={100}
                        lineNumber={true}
                        lineNumberNewLine={false}
                        matcher={
                            [
                                {
                                    words: [
                                        'import',
                                        'from',
                                        'require',
                                        'use',
                                        'return',
                                        'export',
                                        'default',
                                        'extends',
                                        'interface'
                                    ],
                                    className: 'key'
                                },
                                {
                                    words: [
                                        'Accordion',
                                        'react-revolution'
                                    ],
                                    className: 'module'
                                }
                            ]
                        }
                        sourceCode={
                            [
                                'tags',
                                'properties',
                                'variables',
                                'functions',
                                'words',
                                'quotes'
                            ]
                        }
                        inputActive={true}
                        inputCallback={undefined}
                        inputPlaceholder='Search for code...'
                        searchSensitive={false}
                        fallbackNoData='no data'
                        fallbackNoDataSearch='no search result'
                        code={`import { Accordion } from 'react-revolution';
            
<Accordion
    animation='height'
    data={
        [
            {
                text: (
                    <span>
                        <i className="fas fa-car"></i>
                        Mercedes
                    </span>
                ),
                data: [
                    {
                        text: 'A - Class',
                        data: [
                            {
                                text: '- A 200'
                            },
                            {
                                text: '- A 35 AMG'
                            }
                        ]
                    },
                    {
                        text: 'B - Class',
                        data: [
                            {
                                text: '- B 150'
                            },
                            {
                                text: '- B 250'
                            }
                        ]
                    }
                ]
            }
        ]
    }
/>`
                        }
                    />
                )
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
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                                <StyleImplementation 
                    className={this.constructor.name}
                />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='Table-website'
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
                                    key: 'promise',
                                    values: 'promise'
                                },
                                {
                                    key: 'promiseLine',
                                    values: 'promiseLine'
                                },
                                {
                                    key: 'promiseTime',
                                    values: 'promiseTime'
                                },
                                {
                                    key: 'lineNumber',
                                    values: 'lineNumber'
                                },
                                {
                                    key: 'lineNumberNewLine',
                                    values: 'lineNumberNewLine'
                                },
                                {
                                    key: 'matcher',
                                    values: 'matcher'
                                },
                                {
                                    key: 'matcher.words',
                                    values: 'matcher.words'
                                },
                                {
                                    key: 'matcher.className',
                                    values: 'matcher.className'
                                },
                                {
                                    key: 'sourceCode',
                                    values: 'sourceCode'
                                },
                                {
                                    key: 'inputActive',
                                    values: 'inputActive'
                                },
                                {
                                    key: 'inputCallback',
                                    values: 'pagination.inputCallback'
                                },
                                {
                                    key: 'inputPlaceholder',
                                    values: 'inputPlaceholder'
                                },
                                {
                                    key: 'searchSensitive',
                                    values: 'pagination.searchSensitive'
                                },
                                {
                                    key: 'fallbackNoData',
                                    values: 'pagination.fallbackNoData'
                                },
                                {
                                    key: 'fallbackNoDataSearch',
                                    values: 'pagination.fallbackNoDataSearch'
                                },
                                {
                                    key: 'code',
                                    values: 'code'
                                }
                            ],
                            'SourceCode'
                        )
                    }
                />
            </div>
        );
    }
};

export default _SourceCode;

