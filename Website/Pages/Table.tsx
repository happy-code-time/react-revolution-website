import React from 'react';
//@ts-ignore
import { Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import buildModulesJsx from '../Functions/buildModulesJsx';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { Table } from 'react-revolution';
// import Table from 'react-revolution/Table';

<Table
    mediaBreak={1024}
    title={
        [
            'Title',
            'Description'
        ]
    }
    keysToRead={
        [
            'key', 'value'
        ]
    }
    data={
        [
            {
                key: 'key',
                value: 'value'
            },
            {
                key: 'key',
                value: 'value'
            },
            {
                key: 'key',
                value: 'value'
            },
            {
                key: 'key',
                value: 'value'
            }
        ]
    }
/>`;

const cssExample = `.Table{
    width: 100%;

    li{
        width: 100%;
        min-height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        padding: 5px 10px;
    }

    .span,
    .span-title{
        display: block;
        font-size: 0.87rem;
        color: $text-color;
    }

    .span-1,
    .span-2{
        width: 15%;
        margin-left: 5px;
    }

    .title{
        @media screen and (min-width: $media-break) {
            display: flex;
        }
        display: none;

        span{
            font-weight: bold;
        }
    }

    .span-title{
        margin-left: 5px;
        font-weight: bold;
    }
}`;

class _Table extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Table',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <Table
                        mediaBreak={1024}
                        title={
                            [
                                'Title',
                                'Description'
                            ]
                        }
                        keysToRead={
                            [
                                'key', 'value'
                            ]
                        }
                        data={
                            [
                                {
                                    key: 'key',
                                    value: 'value'
                                },
                                {
                                    key: 'key',
                                    value: 'value'
                                },
                                {
                                    key: 'key',
                                    value: 'value'
                                },
                                {
                                    key: 'key',
                                    value: 'value'
                                }
                            ]
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
            resolve(buildModulesJsx(this.examples[this.countCallbacks]));
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
                    data={buildModulesJsx(this.examples[0])} // Default as the first example
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
                                    key: 'title',
                                    values: 'title'
                                },
                                {
                                    key: 'titleOnMinified',
                                    values: 'table.titleOnMinified'
                                },
                                {
                                    key: 'data',
                                    values: 'table.data'
                                },
                                {
                                    key: 'keysToRead',
                                    values: 'table.keysToRead'
                                },
                            ],
                            'Table'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Table;

