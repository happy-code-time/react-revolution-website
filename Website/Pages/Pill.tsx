import React from 'react';
//@ts-ignore
import { Table, Pill, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { Pill } from 'react-revolution';
// import Pill from 'react-revolution/Pill';

<Pill
    data={
        [
            {
                text: 'pill 1',
                cls: '',
                callback: console.info,
                callbackProps: 'pill 1'
            },
            {
                text: 'pill 2',
                callback: console.info,
                callbackProps: 'pill 2'
            },
            {
                text: 'pill 3',
                callback: console.info,
                callbackProps: 'pill 3'
            },
            {
                text: 'pill 4',
                callback: console.info,
                callbackProps: 'pill 4'
            },
            {
                text: 'pill 5',
                cls: '',
                callback: console.info,
                callbackProps: 'pill 5'
            },
            {
                text: 'pill 6',
                callback: console.info,
                callbackProps: 'pill 6'
            },
            {
                text: 'pill 7',
                callback: console.info,
                callbackProps: 'pill 7'
            },
            {
                text: 'pill 8',
                callback: console.info,
                callbackProps: 'pill 8'
            },
        ]
    }
/>`;

const codeExample2 = `import { Pill } from 'react-revolution';
// import Pill from 'react-revolution/Pill';

<Pill
    multiple={false}
    data={
        [
            {
                text: 'pill 1',
                cls: '',
                callback: console.info,
                callbackProps: 'pill 1'
            },
            {
                text: 'pill 2',
                callback: console.info,
                callbackProps: 'pill 2'
            },
            {
                text: 'pill 3',
                callback: console.info,
                callbackProps: 'pill 3'
            },
            {
                text: 'pill 4',
                callback: console.info,
                callbackProps: 'pill 4'
            },
            {
                text: 'pill 5',
                cls: '',
                callback: console.info,
                callbackProps: 'pill 5'
            },
            {
                text: 'pill 6',
                callback: console.info,
                callbackProps: 'pill 6'
            },
            {
                text: 'pill 7',
                callback: console.info,
                callbackProps: 'pill 7'
            },
            {
                text: 'pill 8',
                callback: console.info,
                callbackProps: 'pill 8'
            },
        ]
    }
/>`;

const codeExample3 = `import { Pill } from 'react-revolution';
// import Pill from 'react-revolution/Pill';

<Pill
    multiple={false}
    readonly={true}
    data={
        [
            {
                text: 'pill 1',
                cls: '',
                callback: console.info,
                callbackProps: 'pill 1'
            },
            {
                text: 'pill 2',
                callback: console.info,
                callbackProps: 'pill 2'
            },
            {
                text: 'pill 3',
                callback: console.info,
                callbackProps: 'pill 3'
            },
            {
                text: 'pill 4',
                callback: console.info,
                callbackProps: 'pill 4'
            },
            {
                text: 'pill 5',
                cls: '',
                callback: console.info,
                callbackProps: 'pill 5'
            },
            {
                text: 'pill 6',
                callback: console.info,
                callbackProps: 'pill 6'
            },
            {
                text: 'pill 7',
                callback: console.info,
                callbackProps: 'pill 7'
            },
            {
                text: 'pill 8',
                callback: console.info,
                callbackProps: 'pill 8'
            },
        ]
    }
/>`;

const codeExample4 = `import { Pill } from 'react-revolution';
// import Pill from 'react-revolution/Pill';

<Pill
    data={this.state.data}
/>`;

const jsExample = `constructor(props){
    super(props);

    this.state = {
        data: [
            {
                text: 'pill 1',
                cls: 'additional class',
                selected: true,
                callback: this.persistSelections,
            },
            {
                text: 'pill 2',
                callback: this.persistSelections,
            },
            {
                text: 'pill 3',
                callback: this.persistSelections,
            },
            {
                text: 'pill 4',
                selected: true,
                callback: this.persistSelections,
            },
            {
                text: 'pill 5',
                callback: this.persistSelections,
            },
            {
                text: 'pill 6',
                callback: this.persistSelections,
            },
            {
                text: 'pill 7',
                callback: this.persistSelections,
            },
            {
                text: 'pill 8',
                callback: this.persistSelections,
            },
        ]
    };
}

persistSelections(callbackProps, selected) {;
    const { data } = this.state;

    for(let x = 0; x <= selected.length-1; x++){
        data[selected[x].index] = selected[x];
    }

    this.setState({ data });
}`;

class _Pill extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.persistSelections = this.persistSelections.bind(this);
        this.countCallbacks = 0;

        this.state = {
            data: [
                {
                    text: 'pill 1',
                    cls: 'additional class',
                    selected: true,
                    callback: this.persistSelections,
                },
                {
                    text: 'pill 2',
                    callback: this.persistSelections,
                },
                {
                    text: 'pill 3',
                    callback: this.persistSelections,
                },
                {
                    text: 'pill 4',
                    selected: true,
                    callback: this.persistSelections,
                },
                {
                    text: 'pill 5',
                    callback: this.persistSelections,
                },
                {
                    text: 'pill 6',
                    callback: this.persistSelections,
                },
                {
                    text: 'pill 7',
                    callback: this.persistSelections,
                },
                {
                    text: 'pill 8',
                    callback: this.persistSelections,
                },
            ]
        };

        this.examples = [
            {
                title: 'Pill',
                description: trans('pill.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Pill
                        data={
                            [
                                {
                                    text: 'pill 1',
                                    cls: '',
                                    callback: console.info,
                                    callbackProps: 'pill 1'
                                },
                                {
                                    text: 'pill 2',
                                    callback: console.info,
                                    callbackProps: 'pill 2'
                                },
                                {
                                    text: 'pill 3',
                                    callback: console.info,
                                    callbackProps: 'pill 3'
                                },
                                {
                                    text: 'pill 4',
                                    callback: console.info,
                                    callbackProps: 'pill 4'
                                },
                                {
                                    text: 'pill 5',
                                    cls: '',
                                    callback: console.info,
                                    callbackProps: 'pill 5'
                                },
                                {
                                    text: 'pill 6',
                                    callback: console.info,
                                    callbackProps: 'pill 6'
                                },
                                {
                                    text: 'pill 7',
                                    callback: console.info,
                                    callbackProps: 'pill 7'
                                },
                                {
                                    text: 'pill 8',
                                    callback: console.info,
                                    callbackProps: 'pill 8'
                                },
                            ]
                        }
                    />
                )
            },
            {
                title: 'Pill',
                description: trans('pill.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Pill
                        multiple={false}
                        data={
                            [
                                {
                                    text: 'pill 1',
                                    cls: '',
                                    callback: console.info,
                                    callbackProps: 'pill 1'
                                },
                                {
                                    text: 'pill 2',
                                    callback: console.info,
                                    callbackProps: 'pill 2'
                                },
                                {
                                    text: 'pill 3',
                                    callback: console.info,
                                    callbackProps: 'pill 3'
                                },
                                {
                                    text: 'pill 4',
                                    callback: console.info,
                                    callbackProps: 'pill 4'
                                },
                                {
                                    text: 'pill 5',
                                    cls: '',
                                    callback: console.info,
                                    callbackProps: 'pill 5'
                                },
                                {
                                    text: 'pill 6',
                                    callback: console.info,
                                    callbackProps: 'pill 6'
                                },
                                {
                                    text: 'pill 7',
                                    callback: console.info,
                                    callbackProps: 'pill 7'
                                },
                                {
                                    text: 'pill 8',
                                    callback: console.info,
                                    callbackProps: 'pill 8'
                                },
                            ]
                        }
                    />
                )
            },
            {
                title: 'Pill',
                description: trans('pill.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Pill
                        multiple={false}
                        readonly={true}
                        data={
                            [
                                {
                                    text: 'pill 1',
                                    cls: '',
                                    callback: console.info,
                                    callbackProps: 'pill 1'
                                },
                                {
                                    text: 'pill 2',
                                    callback: console.info,
                                    callbackProps: 'pill 2'
                                },
                                {
                                    text: 'pill 3',
                                    callback: console.info,
                                    callbackProps: 'pill 3'
                                },
                                {
                                    text: 'pill 4',
                                    callback: console.info,
                                    callbackProps: 'pill 4'
                                },
                                {
                                    text: 'pill 5',
                                    cls: '',
                                    callback: console.info,
                                    callbackProps: 'pill 5'
                                },
                                {
                                    text: 'pill 6',
                                    callback: console.info,
                                    callbackProps: 'pill 6'
                                },
                                {
                                    text: 'pill 7',
                                    callback: console.info,
                                    callbackProps: 'pill 7'
                                },
                                {
                                    text: 'pill 8',
                                    callback: console.info,
                                    callbackProps: 'pill 8'
                                },
                            ]
                        }
                    />
                )
            },
            {
                title: 'Pill',
                description: trans('pill.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Pill
                        data={this.state.data}
                    />
                )
            }
        ];
    }

    persistSelections(callbackProps, selected) {
        ;
        const { data } = this.state;

        for (let x = 0; x <= selected.length - 1; x++) {
            data[selected[x].index] = selected[x];
        }

        this.setState({ data });
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
                                    key: 'data',
                                    values: 'pill.data'
                                },
                                {
                                    key: 'data.text',
                                    values: 'pill.data.text'
                                },
                                {
                                    key: 'data.cls',
                                    values: 'pill.data.cls'
                                },
                                {
                                    key: 'data.selected',
                                    values: 'pill.data.selected'
                                },
                                {
                                    key: 'data.callback',
                                    values: 'pill.data.callback'
                                },
                                {
                                    key: 'data.callbackProps',
                                    values: 'pill.data.callbackProps'
                                },
                                {
                                    key: 'multiple',
                                    values: 'pill.multiple'
                                },
                                {
                                    key: 'readonly',
                                    values: 'pill.readonly'
                                },
                            ],
                            'Pill'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Pill;