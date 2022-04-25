import React from 'react';
//@ts-ignore
import { Table, DragDropArea, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { DragDropArea } from 'react-revolution';

// import DragDropArea from 'react-revolution/DragDropArea';

<DragDropArea
    addClass='DragDropArea-example'
    itemsPerLine={4}
    mediaBreak={1024}
    data={this.state.data}
    callback={this.callback}
/>`;

const codeExample2 = `import { DragDropArea } from 'react-revolution';

// import DragDropArea from 'react-revolution/DragDropArea';

<DragDropArea
    addClass='DragDropArea-example'
    itemsPerLine={4}
    mediaBreak={1024}
    data={this.state.data2}
    callback={this.callback2}
    callbackAllowDrop={this.callbackAllowDrop}
/>`;

const codeExample3 = `import { DragDropArea } from 'react-revolution';

// import DragDropArea from 'react-revolution/DragDropArea';

<DragDropArea
    addClass='DragDropArea-example'
    itemsPerLine={4}
    mediaBreak={1024}
    data={this.state.data3}
    callback={this.callback3}
    callbackAllowDrop={this.callbackAllowDropLoadingIcon}
/>`;

const codeExample4 = `import { DragDropArea } from 'react-revolution';

// import DragDropArea from 'react-revolution/DragDropArea';

<DragDropArea
    addClass='DragDropArea-example'
    itemsPerLine={4}
    mediaBreak={1024}
    data={this.state.data4}
    callback={this.callback4}
    callbackAllowDrop={this.callbackAllowDropLoadingIcon}
/>`;

const jsExample1 = `constructor(props) {
    super(props);

    this.state = {
        data: {
            'Vegetables': {
                name: 'Vegetables 🌶',
                data: [
                    {
                        text: 'Avocado 🥑'
                    },
                    {
                        text: 'Broccoli 🥦'
                    },
                    {
                        text: 'Carrot 🥕'
                    }
                ]
            },
            'Fruits': {
                name: 'Fruits 🍌',
                data: [
                    {
                        text: 'Apple 🍎'
                    },
                    {
                        text: 'Strawberry 🍓'
                    },
                    {
                        text: 'Orange 🍊'
                    },
                ]
            },
            'Plate': {
                name: 'Plate 🍽',
                data: []
            },
        }
    };
}

callback(prevData, nextData, change, callbackProps) {
    this.setState({
        data: nextData,
    });
}`;

const jsExample2 = `constructor(props) {
    super(props);

    this.state = {
        data2: {
            'Vegetables': {
                name: 'Vegetables 🌶',
                data: [
                    {
                        text: 'Avocado 🥑'
                    },
                    {
                        text: 'Broccoli 🥦'
                    },
                    {
                        text: 'Carrot 🥕'
                    }
                ]
            },
            'Fruits': {
                name: 'Fruits 🍌',
                data: [
                    {
                        text: 'Apple 🍎'
                    },
                    {
                        text: 'Strawberry 🍓'
                    },
                    {
                        text: 'Orange 🍊'
                    },
                ]
            },
            'Plate': {
                name: 'Plate 🍽',
                data: []
            },
        }
    };
}

callback2(prevData, nextData, change, callbackProps) {
    this.setState({
        data2: nextData,
    });
}

callbackAllowDrop(prevData, nextData, change, allowDropProps) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}`;

const jsExample3 = `constructor(props) {
    super(props);

    this.state = {
        data3: {
            'Vegetables': {
                dropLoading: 'loading...',
                name: 'Vegetables 🌶',
                data: [
                    {
                        text: 'Avocado 🥑'
                    },
                    {
                        text: 'Broccoli 🥦'
                    },
                    {
                        text: 'Carrot 🥕'
                    }
                ]
            },
            'Fruits': {
                dropLoading: 'loading...',
                name: 'Fruits 🍌',
                data: [
                    {
                        text: 'Apple 🍎'
                    },
                    {
                        text: 'Strawberry 🍓'
                    },
                    {
                        text: 'Orange 🍊'
                    },
                ]
            },
            'Plate': {
                dropLoading: 'loading...',
                name: 'Plate 🍽',
                data: []
            },
        },
    };
}

callback3(prevData, nextData, change, callbackProps) {
    this.setState({
        data3: nextData,
    });
}

callbackAllowDropLoadingIcon(prevData, nextData, change, allowDropProps) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}`;

const jsExample4 = `constructor(props) {
    super(props);

    this.state = {
        data4: {
            'Vegetables': {
                dropLoading: 'loading...',
                allowDrag: true,
                allowDrop: false,
                name: 'Vegetables (only DRAG allowed) 🌶',
                data: [
                    {
                        text: 'Avocado 🥑'
                    },
                    {
                        text: 'Broccoli 🥦'
                    },
                    {
                        text: 'Carrot 🥕'
                    }
                ]
            },
            'Fruits': {
                dropLoading: 'loading...',
                allowDrag: false,
                allowDrop: true,
                name: 'Fruits (only DROP allowed) 🍌',
                data: [
                    {
                        text: 'Apple 🍎'
                    },
                    {
                        text: 'Strawberry 🍓'
                    },
                    {
                        text: 'Orange 🍊'
                    },
                ]
            },
            'Meat': {
                dropLoading: 'loading...',
                name: 'Meat 🥩',
                data: [
                    {
                        text: 'Beacon 🥓'
                    },
                    {
                        text: 'Chicken 🍗'
                    },
                ]
            }
        }
    };
}

callback4(prevData, nextData, change, callbackProps) {
    this.setState({
        data4: nextData,
    });
}

callbackAllowDropLoadingIcon(prevData, nextData, change, allowDropProps) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}`;

const cssExample12 = `.DragDropArea-example{

    .area-box{
        box-sizing: border-box;
        padding: 10px;
    }
    
    .area-title{
        box-sizing: border-box;
        padding: 10px;
        text-align: center;
    }
    
    .area-single-entry{
        width: calc(100% - 10px);
        margin: 5px;
        border-radius: 5px;
        border:1px solid rgba(122,122,122, 0.44);
        box-sizing: border-box;
        padding: 5px 3px;
    }

    .area-single-entry:hover{
        cursor: grab;
        background-color: dodgerblue;
        color: rgb(255,255,255);
    }

    .area-single-entry:active{
        cursor: grabbing;
    }
}`;

const cssExample34 = `.DragDropArea-example{

    .area-box{
        box-sizing: border-box;
        padding: 10px;
    }
    
    .area-title{
        box-sizing: border-box;
        padding: 10px;
        text-align: center;
    }

    .area-single-entry{
        width: calc(100% - 10px);
        margin: 5px;
        border-radius: 5px;
        border:1px solid rgba(122,122,122, 0.44);
        box-sizing: border-box;
        padding: 5px 3px;
    }

    .area-single-entry:hover{
        cursor: grab;
        background-color: dodgerblue;
        color: rgb(255,255,255);
    }

    .area-single-entry:active{
        cursor: grabbing;
    }

    .drop-loading{
        background-color: rgba(122,122,122,.55);
        text-align: center;
        line-height: 100px;
    }
}`;

class _DragDropArea extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.callbackAllowDrop = this.callbackAllowDrop.bind(this);
        this.callback = this.callback.bind(this);
        this.callback2 = this.callback2.bind(this);
        this.callback3 = this.callback3.bind(this);
        this.callback4 = this.callback4.bind(this);
        this.countCallbacks = 0;

        this.state = {
            data: {
                'Vegetables': {
                    name: 'Vegetables 🌶',
                    data: [
                        {
                            text: 'Avocado 🥑'
                        },
                        {
                            text: 'Broccoli 🥦'
                        },
                        {
                            text: 'Carrot 🥕'
                        }
                    ]
                },
                'Fruits': {
                    name: 'Fruits 🍌',
                    data: [
                        {
                            text: 'Apple 🍎'
                        },
                        {
                            text: 'Strawberry 🍓'
                        },
                        {
                            text: 'Orange 🍊'
                        },
                    ]
                },
                'Plate': {
                    name: 'Plate 🍽',
                    data: []
                },
            },
            data2: {
                'Vegetables': {
                    name: 'Vegetables 🌶',
                    data: [
                        {
                            text: 'Avocado 🥑'
                        },
                        {
                            text: 'Broccoli 🥦'
                        },
                        {
                            text: 'Carrot 🥕'
                        }
                    ]
                },
                'Fruits': {
                    name: 'Fruits 🍌',
                    data: [
                        {
                            text: 'Apple 🍎'
                        },
                        {
                            text: 'Strawberry 🍓'
                        },
                        {
                            text: 'Orange 🍊'
                        },
                    ]
                },
                'Plate': {
                    name: 'Plate 🍽',
                    data: []
                },
            },
            data3: {
                'Vegetables': {
                    dropLoading: 'loading...',
                    name: 'Vegetables 🌶',
                    data: [
                        {
                            text: 'Avocado 🥑'
                        },
                        {
                            text: 'Broccoli 🥦'
                        },
                        {
                            text: 'Carrot 🥕'
                        }
                    ]
                },
                'Fruits': {
                    dropLoading: 'loading...',
                    name: 'Fruits 🍌',
                    data: [
                        {
                            text: 'Apple 🍎'
                        },
                        {
                            text: 'Strawberry 🍓'
                        },
                        {
                            text: 'Orange 🍊'
                        },
                    ]
                },
                'Plate': {
                    dropLoading: 'loading...',
                    name: 'Plate 🍽',
                    data: []
                },
            },
            data4: {
                'Vegetables': {
                    dropLoading: 'loading...',
                    allowDrag: true,
                    allowDrop: false,
                    name: 'Vegetables (only DRAG allowed) 🌶',
                    data: [
                        {
                            text: 'Avocado 🥑'
                        },
                        {
                            text: 'Broccoli 🥦'
                        },
                        {
                            text: 'Carrot 🥕'
                        }
                    ]
                },
                'Fruits': {
                    dropLoading: 'loading...',
                    allowDrag: false,
                    allowDrop: true,
                    name: 'Fruits (only DROP allowed) 🍌',
                    data: [
                        {
                            text: 'Apple 🍎'
                        },
                        {
                            text: 'Strawberry 🍓'
                        },
                        {
                            text: 'Orange 🍊'
                        },
                    ]
                },
                'Meat': {
                    dropLoading: 'loading...',
                    name: 'Meat 🥩',
                    data: [
                        {
                            text: 'Beacon 🥓'
                        },
                        {
                            text: 'Chicken 🍗'
                        },
                    ]
                },
            },
        };

        this.examples = [
            {
                title: 'DragDropArea',
                description: trans('description.dragDrop.1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample12,
                html: '',
                live: (
                    <DragDropArea
                        addClass='DragDropArea-example'
                        itemsPerLine={4}
                        mediaBreak={1024}
                        data={this.state.data}
                        callback={this.callback}
                    />
                )
            },
            {
                title: 'DragDropArea',
                description: trans('description.dragDrop.2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample2,
                css: cssExample12,
                html: '',
                live: (
                    <DragDropArea
                        addClass='DragDropArea-example'
                        itemsPerLine={4}
                        mediaBreak={1024}
                        data={this.state.data2}
                        callback={this.callback2}
                        callbackAllowDrop={this.callbackAllowDrop}
                    />
                )
            },
            {
                title: 'DragDropArea',
                description: trans('description.dragDrop.3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample3,
                css: cssExample34,
                html: '',
                live: (
                    <DragDropArea
                        addClass='DragDropArea-example'
                        itemsPerLine={4}
                        mediaBreak={1024}
                        data={this.state.data3}
                        callback={this.callback3}
                        callbackAllowDrop={this.callbackAllowDropLoadingIcon}
                    />
                )
            },
            {
                title: 'DragDropArea',
                description: trans('description.dragDrop.4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample4,
                css: cssExample34,
                html: '',
                live: (
                    <DragDropArea
                        addClass='DragDropArea-example'
                        itemsPerLine={4}
                        mediaBreak={1024}
                        data={this.state.data4}
                        callback={this.callback4}
                        callbackAllowDrop={this.callbackAllowDropLoadingIcon}
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

    callback(prevData, nextData, change, callbackProps) {
        this.setState({
            data: nextData,
        });
    }

    callback2(prevData, nextData, change, callbackProps) {
        this.setState({
            data2: nextData,
        });
    }

    callback3(prevData, nextData, change, callbackProps) {
        this.setState({
            data3: nextData,
        });
    }

    callback4(prevData, nextData, change, callbackProps) {
        this.setState({
            data4: nextData,
        });
    }

    callbackAllowDropLoadingIcon(prevData, nextData, change, allowDropProps) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
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
                                    key: 'data',
                                    values: 'drag.drop.data'
                                },
                                {
                                    key: 'data.name',
                                    values: 'drag.drop.data.name'
                                },
                                {
                                    key: 'data.areaProps',
                                    values: 'drag.drop.data.areaProps'
                                },
                                {
                                    key: 'data.titleProps',
                                    values: 'drag.drop.data.titleProps'
                                },
                                {
                                    key: 'data.allowDrop',
                                    values: 'drag.drop.data.allowDrop'
                                },
                                {
                                    key: 'data.allowDrag',
                                    values: 'drag.drop.data.allowDrag'
                                },
                                {
                                    key: 'data.dropLoading',
                                    values: 'drag.drop.data.dropLoading'
                                },
                                {
                                    key: 'data.data',
                                    values: 'drag.drop.data.data'
                                },
                                {
                                    key: 'data.data.text',
                                    values: 'drag.drop.data.data.text'
                                },
                                {
                                    key: 'data.data.props',
                                    values: 'drag.drop.data.data.props'
                                },
                                {
                                    key: 'itemsPerLine',
                                    values: 'drag.drop.itemsPerLine'
                                },
                                {
                                    key: 'mediaBreak',
                                    values: 'drag.drop.mediaBreak'
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
                            'DragDropArea'
                        )
                    }
                />
            </div>
        );
    }
};

export default _DragDropArea;