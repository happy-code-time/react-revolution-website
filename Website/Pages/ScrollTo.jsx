
import React from 'react';

import { Table, ScrollTo, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { ScrollTo } from 'react-revolution';
// import ScrollTo from 'react-revolution/ScrollTo';

<ScrollTo
    id='uuid-2'
    navigationTime={1000}
    navigationTarget='bottom'
/>`;

const codeExample2 = `import { ScrollTo } from 'react-revolution';
// import ScrollTo from 'react-revolution/ScrollTo';

<ScrollTo
    html={
        <div className="arrow">
            🔝
        </div>
    }
    navigationTime={300}
    navigationTarget='#uuid-2'
/>`;

const cssExample = `.ScrollTo{
    .to-bottom,
    .to-top{
        margin: auto;
    }
}`;

class _ScrollTo extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ScrollTo',
                description: trans('scroll-to-desc-1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <ScrollTo
                        id='uuid-2'
                        navigationTime={1000}
                        navigationTarget='top'
                    />
                )
            },
            {
                title: 'ScrollTo',
                description: trans('scroll-to-desc-2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <ScrollTo
                        html={
                            <div className="arrow">
                                🔝
                            </div>
                        }
                        navigationTime={300}
                        navigationTarget='#uuid-2'
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
                                    key: 'navigationTime',
                                    values: 'navigationTime'
                                },
                                {
                                    key: 'navigationTarget',
                                    values: 'navigationTarget'
                                },
                                {
                                    key: 'html',
                                    values: 'html'
                                },
                            ],
                            'ScrollTo'
                        )
                    }
                />
            </div>
        );
    }
};

export default _ScrollTo;

