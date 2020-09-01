
import React from 'react';

import { Table, ScrollTo, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import { host } from '../Globals';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { ScrollTo } from 'react-revolution';

`;

const cssExample = ``;

class ReactRevolutionScrollTo extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ScrollTo',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <ScrollTo
                        html=''
                        navigationTime={3000}
                        navigationTarget='bottom'
                    />
                )
            },
        ];
    }

    callback(clickEvent, icon) {
        console.info(icon);
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
                {
                    getDescriptionForstyle('rr-scroll-to')
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
                                    key: 'image',
                                    values: 'image'
                                },
                                {
                                    key: 'moduleMenu',
                                    values: 'moduleMenu'
                                },
                                {
                                    key: 'textLong',
                                    values: 'textLong'
                                },
                                {
                                    key: 'textShort',
                                    values: 'textShort'
                                },
                                {
                                    key: 'href',
                                    values: 'href'
                                },
                                {
                                    key: 'hrefProps',
                                    values: 'hrefProps'
                                },
                            ],
                            'rr-scroll-to'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionScrollTo;

