import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, Suggestions } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

const codeExample1 = `import { Suggestions } from 'react-revolution';
// import Suggestions from 'react-revolution/Suggestions';

<Suggestions
    placeholder='Choose your tests'
    callback={this.callback}
    data={
        [
            {
                text: 'test 1',
                key: 'test 1',
                custom: 'xyz'
            },
            {
                text: 'test 2',
                key: 'test 2',
                custom: 'xyz'
            },
            {
                text: 'test 3',
                key: 'test 3',
                custom: 'xyz'
            },
            {
                text: 'test 4',
                key: 'test 4'
            },
            {
                text: 'test 5',
                key: 'test 5'
            },
            {
                text: 'test 6',
                key: 'test 6'
            },
            {
                text: 'test 7',
                key: 'test 7'
            },
            {
                text: 'test 8',
                key: 'test 8'
            },
            {
                text: 'test 9',
                key: 'test 9'
            }
        ]
    }
/>`;

const codeExample2 = `import { Suggestions } from 'react-revolution';
// import Suggestions from 'react-revolution/Suggestions';

<Suggestions
    placeholder='Choose your tests'
    callback={this.callback}
    allowTyping={false}
    data={
        [
            {
                text: 'test 1',
                key: 'test 1',
                custom: 'xyz'
            },
            {
                text: 'test 2',
                key: 'test 2',
                custom: 'xyz'
            },
            {
                text: 'test 3',
                key: 'test 3',
                custom: 'xyz'
            },
            {
                text: 'test 4',
                key: 'test 4'
            },
            {
                text: 'test 5',
                key: 'test 5'
            },
            {
                text: 'test 6',
                key: 'test 6'
            },
            {
                text: 'test 7',
                key: 'test 7'
            },
            {
                text: 'test 8',
                key: 'test 8'
            },
            {
                text: 'test 9',
                key: 'test 9'
            }
        ]
    }
/>`;


const codeExample3 = `import { Suggestions } from 'react-revolution';
// import Suggestions from 'react-revolution/Suggestions';

<Suggestions
    placeholder='Choose your tests'
    callback={this.callback}
    dataOnEmpty={
        (
            <p>Sorry.... no results found</p>
        )
    }
    sortSuggestions='asc'
    data={
        [
            {
                text: 'test 1',
                key: 'test 1',
                custom: 'xyz'
            },
            {
                text: 'test 2',
                key: 'test 2',
                custom: 'xyz'
            },
            {
                text: 'test 3',
                key: 'test 3',
                custom: 'xyz'
            },
            {
                text: 'test 4',
                key: 'test 4'
            },
            {
                text: 'test 5',
                key: 'test 5'
            },
            {
                text: 'test 6',
                key: 'test 6'
            },
            {
                text: 'test 7',
                key: 'test 7'
            },
            {
                text: 'test 8',
                key: 'test 8'
            },
            {
                text: 'test 9',
                key: 'test 9'
            }
        ]
    }
/>`;

const codeExample4 = `import { Suggestions } from 'react-revolution';
// import Suggestions from 'react-revolution/Suggestions';

<Suggestions
    placeholder='Choose your tests'
    callback={this.callback}
    dataOnEmpty={
        (
            <p>Sorry.... no results found</p>
        )
    }
    sortSuggestions='asc'
    multiple={false}
    data={
        [
            {
                text: 'test 1',
                key: 'test 1',
                custom: 'xyz'
            },
            {
                text: 'test 2',
                key: 'test 2',
                custom: 'xyz'
            },
            {
                text: 'test 3',
                key: 'test 3',
                custom: 'xyz'
            },
            {
                text: 'test 4',
                key: 'test 4'
            },
            {
                text: 'test 5',
                key: 'test 5'
            },
            {
                text: 'test 6',
                key: 'test 6'
            },
            {
                text: 'test 7',
                key: 'test 7'
            },
            {
                text: 'test 8',
                key: 'test 8'
            },
            {
                text: 'test 9',
                key: 'test 9'
            }
        ]
    }
/>`;

const jsExample = `constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
}

callback(callbackProps, currentInputValue, selected){
    console.info(selected);
}`;

class _Suggestions extends React.Component {

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.state = {};

        this.examples = [
            {
                title: 'Suggestions',
                description: trans('suggestions.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Suggestions
                        placeholder='Choose your tests'
                        callback={this.callback}
                        data={
                            [
                                {
                                    text: 'test 1',
                                    key: 'test 1',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 2',
                                    key: 'test 2',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 3',
                                    key: 'test 3',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 4',
                                    key: 'test 4'
                                },
                                {
                                    text: 'test 5',
                                    key: 'test 5'
                                },
                                {
                                    text: 'test 6',
                                    key: 'test 6'
                                },
                                {
                                    text: 'test 7',
                                    key: 'test 7'
                                },
                                {
                                    text: 'test 8',
                                    key: 'test 8'
                                },
                                {
                                    text: 'test 9',
                                    key: 'test 9'
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Suggestions',
                description: trans('suggestions.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Suggestions
                        placeholder='Choose your tests'
                        callback={this.callback}
                        allowTyping={false}
                        data={
                            [
                                {
                                    text: 'test 1',
                                    key: 'test 1',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 2',
                                    key: 'test 2',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 3',
                                    key: 'test 3',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 4',
                                    key: 'test 4'
                                },
                                {
                                    text: 'test 5',
                                    key: 'test 5'
                                },
                                {
                                    text: 'test 6',
                                    key: 'test 6'
                                },
                                {
                                    text: 'test 7',
                                    key: 'test 7'
                                },
                                {
                                    text: 'test 8',
                                    key: 'test 8'
                                },
                                {
                                    text: 'test 9',
                                    key: 'test 9'
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Suggestions',
                description: trans('suggestions.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Suggestions
                        placeholder='Choose your tests'
                        callback={this.callback}
                        dataOnEmpty={
                            (
                                <p>Sorry.... no results found</p>
                            )
                        }
                        sortSuggestions='desc'
                        data={
                            [
                                {
                                    text: 'test 1',
                                    key: 'test 1',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 2',
                                    key: 'test 2',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 3',
                                    key: 'test 3',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 4',
                                    key: 'test 4'
                                },
                                {
                                    text: 'test 5',
                                    key: 'test 5'
                                },
                                {
                                    text: 'test 6',
                                    key: 'test 6'
                                },
                                {
                                    text: 'test 7',
                                    key: 'test 7'
                                },
                                {
                                    text: 'test 8',
                                    key: 'test 8'
                                },
                                {
                                    text: 'test 9',
                                    key: 'test 9'
                                },
                            ]
                        }
                    />
                )
            },
            {
                title: 'Suggestions',
                description: trans('suggestions.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Suggestions
                        placeholder='Choose your tests'
                        callback={this.callback}
                        dataOnEmpty={
                            (
                                <p>Sorry.... no results found</p>
                            )
                        }
                        sortSuggestions='desc'
                        multiple={false}
                        data={
                            [
                                {
                                    text: 'test 1',
                                    key: 'test 1',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 2',
                                    key: 'test 2',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 3',
                                    key: 'test 3',
                                    custom: 'xyz'
                                },
                                {
                                    text: 'test 4',
                                    key: 'test 4'
                                },
                                {
                                    text: 'test 5',
                                    key: 'test 5'
                                },
                                {
                                    text: 'test 6',
                                    key: 'test 6'
                                },
                                {
                                    text: 'test 7',
                                    key: 'test 7'
                                },
                                {
                                    text: 'test 8',
                                    key: 'test 8'
                                },
                                {
                                    text: 'test 9',
                                    key: 'test 9'
                                }
                            ]
                        }
                    />
                )
            },
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
                                    key: 'callback',
                                    values: 'suggestions.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'suggestions.callbackProps'
                                },
                                {
                                    key: 'data',
                                    values: 'suggestions.data'
                                },
                                {
                                    key: 'data.text',
                                    values: 'suggestions.data.text'
                                },
                                {
                                    key: 'data.key',
                                    values: 'suggestions.data.key'
                                },
                                {
                                    key: 'multiple',
                                    values: 'suggestions.multiple'
                                },
                                {
                                    key: 'sortSelected',
                                    values: 'suggestions.sortSelected'
                                },
                                {
                                    key: 'sortSuggestions',
                                    values: 'suggestions.sortSuggestions'
                                },
                                {
                                    key: 'searchSensitive',
                                    values: 'suggestions.searchSensitive'
                                },
                                {
                                    key: 'removeChar',
                                    values: 'suggestions.removeChar'
                                },
                                {
                                    key: 'removeCharLeft',
                                    values: 'suggestions.removeCharLeft'
                                },
                                {
                                    key: 'singleLiHeight',
                                    values: 'suggestions.singleLiHeight'
                                },
                                {
                                    key: 'dataOnEmpty',
                                    values: 'suggestions.dataOnEmpty'
                                },
                                {
                                    key: 'inputValue',
                                    values: 'suggestions.inputValue'
                                },
                                {
                                    key: 'inputType',
                                    values: 'suggestions.inputType'
                                },
                                {
                                    key: 'inputPlaceholder',
                                    values: 'suggestions.inputPlaceholder'
                                },
                                {
                                    key: 'inputPlaceholder',
                                    values: 'suggestions.inputPlaceholder'
                                },
                                {
                                    key: 'inputEmpty',
                                    values: 'suggestions.inputEmpty'
                                },
                                {
                                    key: 'suggestionsEmpty',
                                    values: 'suggestions.suggestionsEmpty'
                                },
                            ],
                            'rr-suggestions'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Suggestions;


