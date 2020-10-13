import React from 'react';

import { Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import buildModulesJsx from '../Functions/buildModulesJsx';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Table } from 'react-revolution';
// import Table from 'react-revolution/public/Table';

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

const cssExample = `.rr-table{
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

class ReactRevolutionTable extends React.Component 
{
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
                {
                    getDescriptionForstyle('rr-table')
                }
                <h1 className="h1-title border-none text-center mb-4">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='rr-table-website'
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
                                    key: 'globalStyle',
                                    values: 'globalStyle'
                                },
                                {
                                    key: 'moduleStyle',
                                    values: 'moduleStyle'
                                },
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
                            'rr-table'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionTable;

