import React from 'react';

import { TableKeyValue, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import trans from '../../Translations/trans';

const codeExample1 = `import { TableKeyValue } from 'react-revolution';

<TableKeyValue
    mediaBreak={1024}
    title={
        {
            left: 'Title',
            right: 'Description'
        }
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

const cssExample = `.rr-table-key-value{
    .title{
        background-color: #1873cc;

        .key,
        .value{
            color: rgb(255,255,255);
        }

        .value{
            border-left: unset;
        }
    }

    .key{
        width: 70px;
    }

    .value{
        @media screen and (min-width: 1024px){
            padding-left: 20px;                
        }
        box-sizing: border-box;
        padding-left: 5px;
        width: calc(100% - 70px);
    }
}`;

class ReactRevolutionTableKeyValue extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'TableKeyValue',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <TableKeyValue
                        mediaBreak={1024}
                        title={
                            {
                                left: 'Title',
                                right: 'Description'
                            }
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
            return 'break';
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
                />
                <h1 className="h1-title border-none text-center mb-4">
                    Key usage
                </h1>
                <TableKeyValue
                    mediaBreak={1024}
                    data={
                        [
                            {
                                key: 'id',
                                value: 'dsad asd asd sad '
                            },
                        ]
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionTableKeyValue;

