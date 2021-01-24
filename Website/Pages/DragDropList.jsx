import React from 'react';

import { Table, DragDropList, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';


const codeExample1 = `import { DragDropList } from 'react-revolution';

// import DragDropList from 'react-revolution/DragDropList';

<DragDropList
    addClass='rr-drag-drop-list-example'
    data={this.state.data}
    callback={this.callback}
    dropLoading='LAODING'
    placeholder='PLACEHOLDER'
    placeholderPosition='auto'
/>`;

const codeExample2 = `import { DragDropList } from 'react-revolution';

// import DragDropList from 'react-revolution/DragDropList';

<DragDropList
    addClass='rr-drag-drop-list-example'
    data={this.state.data2}
    callback={this.callback2}
    callbackAllowDrop={this.callbackAllowDrop}
    dropLoading='LAODING'
    placeholder='PLACEHOLDER'
    placeholderPosition='auto'
/>`;

const jsExample1 = `constructor(props) {
    super(props);

    this.state = {
        data: [
            {
                text: 'Avocado 🥑',
            },
            {
                text: 'Banana 🍌'
            },
            {
                text: 'Broccoli 🥦'
            },
            {
                text: 'Carrot 🥕'
            }
        ],
    };
}

callback(prevData, nextData, change, callbackProps) {
    this.setState({
        data: nextData
    });
}`;

const jsExample2 = `constructor(props) {
    super(props);

    this.state = {
        data2: [
            {
                text: 'Pizza 🍕',
            },
            {
                text: 'HotDog 🌭'
            },
            {
                text: 'Hamburger 🍔'
            },
            {
                text: 'Sandwich 🥪'
            }
        ]
    };
}

callback2(prevData, nextData, change, callbackProps) {
    this.setState({
        data2: nextData
    });
}

callbackAllowDrop(prevData, nextData, change, allowDropProps) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}`;

const cssExample1 = `.rr-drag-drop-list-example{
    max-width: 720px;
    margin: 0 auto;

    .single-entry{
        box-sizing: border-box;
        padding: 5px 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid $border-color;
    }

    .single-entry:hover{
        cursor: grab;
        background-color: dodgerblue;
        color: rgb(255,255,255);
    }

    .single-entry:active{
        cursor: grabbing;
    }

    .placeholder{
        width: 100%;
        height: 30px;
        border:1px dashed dodgerblue;
        background-color: $dodgerblue-light-xl; 
    }
}`;

const cssExample2 = `.rr-drag-drop-list-example{
    max-width: 720px;
    margin: 0 auto;

    .single-entry{
        box-sizing: border-box;
        padding: 5px 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid $border-color;
    }

    .single-entry:hover{
        cursor: grab;
        background-color: dodgerblue;
        color: rgb(255,255,255);
    }

    .single-entry:active{
        cursor: grabbing;
    }

    .placeholder{
        width: 100%;
        height: 30px;
        border:1px dashed dodgerblue;
        background-color: $dodgerblue-light-xl; 
    }

    .drop-loading{
        background-color: rgba(122,122,122,.55);
        text-align: center;
        line-height: 100px;
    }
}`;

class _DragDropList extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.callback2 = this.callback2.bind(this);
        this.callbackAllowDrop = this.callbackAllowDrop.bind(this);
        this.countCallbacks = 0;

        this.state = {
            data: [
                {
                    text: 'Avocado 🥑',
                },
                {
                    text: 'Banana 🍌'
                },
                {
                    text: 'Broccoli 🥦'
                },
                {
                    text: 'Carrot 🥕'
                }
            ],
            data2: [
                {
                    text: 'Pizza 🍕',
                },
                {
                    text: 'HotDog 🌭'
                },
                {
                    text: 'Hamburger 🍔'
                },
                {
                    text: 'Sandwich 🥪'
                }
            ]
        };

        this.examples = [
            {
                title: 'DragDropList',
                description: trans('description.dragDropList.1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample1,
                html: '',
                live: (
                    <DragDropList
                        addClass='rr-drag-drop-list-example'
                        data={this.state.data}
                        callback={this.callback}
                        dropLoading='LAODING'
                        placeholder='PLACEHOLDER'
                        placeholderPosition='auto'
                    />
                )
            },
            {
                title: 'DragDropList',
                description: trans('description.dragDropList.2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample2,
                css: cssExample2,
                html: '',
                live: (
                    <DragDropList
                        addClass='rr-drag-drop-list-example'
                        data={this.state.data2}
                        callback={this.callback2}
                        callbackAllowDrop={this.callbackAllowDrop}
                        dropLoading='LAODING'
                        placeholder='PLACEHOLDER'
                        placeholderPosition='auto'
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

    callback(prevData, nextData, change, callbackProps) {
        this.setState({
            data: nextData
        });
    }

    callback2(prevData, nextData, change, callbackProps) {
        this.setState({
            data2: nextData
        });
    }

    callbackAllowDrop(prevData, nextData, change, allowDropProps) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
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
                <h1 className="h1-title border-none my-3">
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
                                    key: 'areaProps',
                                    values: 'drag.drop.list.areaProps'
                                },
                                {
                                    key: 'placeholder',
                                    values: 'drag.drop.list.placeholder'
                                },
                                {
                                    key: 'placeholderPosition',
                                    values: 'drag.drop.list.placeholderPosition'
                                },
                                {
                                    key: 'data',
                                    values: 'drag.drop.list.data'
                                },
                                {
                                    key: 'data.text',
                                    values: 'drag.drop.list.text'
                                },
                                {
                                    key: 'data.props',
                                    values: 'drag.drop.list.props'
                                },
                                {
                                    key: 'dropLoading',
                                    values: 'drag.drop.data.dropLoading'
                                },
                                {
                                    key: 'callback',
                                    values: 'drag.drop.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'drag.drop.callbackProps'
                                },
                                {
                                    key: 'callbackAllowDrop',
                                    values: 'drag.drop.callbackAllowDrop'
                                },
                                {
                                    key: 'lineNumber',
                                    values: 'drag.drop.lineNumber'
                                },
                                {
                                    key: 'lineNumberChar',
                                    values: 'drag.drop.lineNumberChar'
                                },
                            ],
                            'rr-drag-drop-list'
                        )
                    }
                />
            </div>
        );
    }
};

export default _DragDropList;