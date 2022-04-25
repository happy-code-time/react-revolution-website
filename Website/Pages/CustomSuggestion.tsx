import React from 'react';
//@ts-ignore
import { Table, CustomSuggestion, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import { host } from '../Globals';
import StyleImplementation from '../Components/StyleImplementation';

import generateArticle from '../Globals/generateArticle';

const codeExample1 = `import { CustomSuggestion } from 'react-revolution';
// import CustomSuggestion from 'react-revolution/CustomSuggestion';

<CustomSuggestion
    inputPlaceholder='Search...'
    suggestions={[]}
    callback={this.search}
    value={this.state.inputValue}
    inputProps={{}}
    callbackRerender={true} // !!!!
    type='text'
    allowOnlyAZ={true}
/>`;

const jsExample1 = `async search(inputValue, isClickEvent) {

    if (isClickEvent) {
        return Promise.resolve();
    }

    return new Promise( (resolve, reject) => {
        const allModules = [
            'Accordion',
            'Card',
            'CustomSuggestion',
            'FullScreenListObject',
            'FullScreenOverlay',
            'GlobalMessage',
            'Icon',
            'InputIcon',
            'InputFile',
            'InputFileDragDrop',
            'InputSuggestion',
            'LoadingBoxTop',
            'Menu',
            'PopupBox',
            'Sidebar',
            'SourceCode',
            'TextWriter',
        ];
        const suggestions = [];

        allModules.map(i => {
            if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
                suggestions.push(
                    {
                        href: '#', // required
                        jsx: (
                            <p>
                                {
                                    i
                                }
                            </p>
                        ),
                        props: {
                            title: 'Custom title'
                        },
                        onClickValue: i
                    }
                );
            }
        });

        resolve(suggestions);
    });
}`;

const codeExample2 = `import { CustomSuggestion } from 'react-revolution';
// import CustomSuggestion from 'react-revolution/CustomSuggestion';

<CustomSuggestion
    inputPlaceholder='Search...'
    suggestions={this.state.suggestions}
    callback={this.searchState}
    value={this.state.inputValue}
    inputProps={{}}
    callbackRerender={false} // !!!!!!
    type='text'
    allowOnlyAZ={true}
/>`;

const codeExample3 = `import { CustomSuggestion } from 'react-revolution';
// import CustomSuggestion from 'react-revolution/CustomSuggestion';

<CustomSuggestion
    inputPlaceholder='Search...'
    callback={this.searchStateLoading}
    value={this.state.inputValueLoaidng}
    callbackRerender={true}
    type='text'
    loading={
        <img src='./public/images/ajax-loader.gif' />
    }
    searchSensitive={false}
/>`;

const jsExample2 = `searchState(inputValue, isClickEvent) {

    if (isClickEvent) {
        return this.setState({
            suggestions: []
        });
    }

    const allModules = [
        'Accordion',
        'Card',
        'CustomSuggestion',
        'FullScreenListObject',
        'FullScreenOverlay',
        'GlobalMessage',
        'Icon',
        'InputIcon',
        'InputFile',
        'InputFileDragDrop',
        'InputSuggestion',
        'LoadingBoxTop',
        'Menu',
        'PopupBox',
        'Sidebar',
        'SourceCode',
        'TextWriter',
    ];
    const suggestions = [];

    allModules.map(i => {
        if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
            suggestions.push(
                {
                    href: '#', // required
                    jsx: (
                        <p>
                            {
                                i
                            }
                        </p>
                    ),
                    props: {
                        title: 'Custom title'
                    },
                    onClickValue: i
                }
            );
        }
    });

    this.setState({
        suggestions
    });
}`;

const jsExample3 = `getStaticData(){
    const suggestions = [];

    for(let x = 0; x <= 4; x++){
        suggestions.push(
            {
                href: \`\${host}#/components/custom-suggestion\`,
                jsx: (
                    <p>
                        {\`Suggestion \${x+1}\`} 
                    </p>
                ),
                onClickValue: \`Suggestion \${x+1}\`
            }
        );
    }

    return suggestions; 
}

searchStateLoading(inputValue){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(this.getStaticData());
        }, 2000);
    });
}`;

class _CustomSuggestion extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;
        this.search = this.search.bind(this);
        this.searchState = this.searchState.bind(this);
        this.searchStateLoading = this.searchStateLoading.bind(this);

        this.state = {
            inputValue: '',
            suggestions: [],
            inputValueLoaidng: []
        };

        this.examples = [
            {
                description: `${trans("CustomSuggestion.description.1")} ${trans("runtime.generator.description")}`,
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <CustomSuggestion
                        inputPlaceholder='Search...'
                        suggestions={[]}
                        callback={this.search}
                        value={this.state.inputValue}
                        inputProps={{}}
                        callbackRerender={true}
                        type='text'
                        allowOnlyAZ={true}
                    />
                )
            }
        ];
    }

    async search(inputValue, isClickEvent) {

        if (isClickEvent) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const allModules = [
                'Accordion',
                'Card',
                'CustomSuggestion',
                'FullScreenListObject',
                'FullScreenOverlay',
                'GlobalMessage',
                'Icon',
                'InputIcon',
                'InputFile',
                'InputFileDragDrop',
                'InputSuggestion',
                'LoadingBoxTop',
                'Menu',
                'PopupBox',
                'Sidebar',
                'SourceCode',
                'TextWriter',
            ];
            const suggestions = [];

            allModules.map(i => {
                if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
                    suggestions.push(
                        {
                            href: `${host}#/components/custom-suggestion`, // required
                            jsx: (
                                <p>
                                    {
                                        i
                                    }
                                </p>
                            ),
                            props: {
                                title: 'Custom title'
                            },
                            onClickValue: i
                        }
                    );
                }
            });

            resolve(suggestions);
        });
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

    searchState(inputValue, isClickEvent) {

        if (isClickEvent) {
            return this.setState({
                suggestions: []
            });
        }

        const allModules = [
            'Accordion',
            'Card',
            'CustomSuggestion',
            'FullScreenListObject',
            'FullScreenOverlay',
            'GlobalMessage',
            'Icon',
            'InputIcon',
            'InputFile',
            'InputFileDragDrop',
            'InputSuggestion',
            'LoadingBoxTop',
            'Menu',
            'PopupBox',
            'Sidebar',
            'SourceCode',
            'TextWriter',
        ];
        const suggestions = [];

        allModules.map(i => {
            if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
                suggestions.push(
                    {
                        href: `${host}#/components/custom-suggestion`, // required
                        jsx: (
                            <p>
                                {
                                    i
                                }
                            </p>
                        ),
                        props: {
                            title: 'Custom title'
                        },
                        onClickValue: i
                    }
                );
            }
        });

        this.setState({
            suggestions
        });
    }

    getStaticData() {
        const suggestions = [];

        for (let x = 0; x <= 4; x++) {
            suggestions.push(
                {
                    href: `${host}#/components/custom-suggestion`,
                    jsx: (
                        <p>
                            {`Suggestion ${x + 1}`}
                        </p>
                    ),
                    onClickValue: `Suggestion ${x + 1}`
                }
            );
        }

        return suggestions;
    }

    searchStateLoading(inputValue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.getStaticData());
            }, 2000);
        });
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    CustomSuggestion
                </h1>
                <LoadOnScroll
                    scrollReference={false}
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0])} // Default as the first example
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    CustomSuggestion
                </h1>
                <p className='description'>
                    {
                        trans("CustomSuggestion.description.2")
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
                        <CustomSuggestion
                            inputPlaceholder='Search...'
                            suggestions={this.state.suggestions}
                            callback={this.searchState}
                            value={this.state.inputValue}
                            inputProps={{}}
                            callbackRerender={false}
                            type='text'
                            allowOnlyAZ={true}
                        />
                    </div>
                    {
                        generateArticle(
                            (
                                <h1
                                    title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 2`}
                                    className="h1-example p-0  m-0"
                                >
                                    <i className="fas fa-atom" />
                                    {
                                        trans('reactCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={codeExample2}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample2}
                                    />
                                </span>
                            )
                        )
                    }
                    {
                        generateArticle(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 2`}
                                    className="h1-example p-0  m-0"
                                >
                                    <i className="fab fa-node-js" />
                                    {
                                        trans('jsCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={jsExample2}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample2}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    CustomSuggestion
                </h1>
                <p className='description'>
                    {
                        trans("CustomSuggestion.description.2")
                    }
                </p>
                <div className="code-example">
                    <div className="code-example-live">
                        <CustomSuggestion
                            inputPlaceholder='Search...'
                            suggestions={[]}
                            callback={this.searchStateLoading}
                            value={this.state.inputValueLoaidng}
                            inputProps={{}}
                            callbackRerender={true}
                            type='text'
                            loading={
                                <img src='./public/images/ajax-loader.gif' />
                            }
                            searchSensitive={false}
                        />
                    </div>
                    {
                        generateArticle(
                            (
                                <h1
                                    title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 2`}
                                    className="h1-example p-0  m-0"
                                >
                                    <i className="fas fa-atom" />
                                    {
                                        trans('reactCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={codeExample3}
                                    />
                                    <Clipboard
                                        animation='jump'
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample3}
                                    />
                                </span>
                            )
                        )
                    }
                    {
                        generateArticle(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 2`}
                                    className="h1-example p-0  m-0"
                                >
                                    <i className="fab fa-node-js" />
                                    {
                                        trans('jsCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={jsExample3}
                                    />
                                    <Clipboard
                                        animation='jump'
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample3}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
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
                                    key: 'plainValue',
                                    values: 'plainValue'
                                },
                                {
                                    key: 'callback',
                                    values: 'customsuggestion.callback'
                                },
                                {
                                    key: 'inputPlaceholder',
                                    values: 'inputPlaceholder'
                                },
                                {
                                    key: 'props',
                                    values: 'props'
                                },
                                {
                                    key: 'inputType',
                                    values: 'inputType'
                                },
                                {
                                    key: 'allowOnlyAZ',
                                    values: 'allowOnlyAZ'
                                },
                                {
                                    key: 'callbackRerender',
                                    values: 'callbackRerender'
                                },
                                {
                                    key: 'callback',
                                    values: 'customsuggestion.callback'
                                },
                                {
                                    key: 'loading',
                                    values: 'inputsuggestionobject.loading'
                                },
                                {
                                    key: 'suggestions',
                                    values: 'customsuggestion.suggestions'
                                },
                                {
                                    key: 'suggestions.href',
                                    values: 'customsuggestion.suggestions.href'
                                },
                                {
                                    key: 'suggestions.jsx',
                                    values: 'customsuggestion.suggestions.jsx'
                                },
                                {
                                    key: 'suggestions.props',
                                    values: 'customsuggestion.suggestions.props'
                                },
                                {
                                    key: 'suggestions.onClickValue',
                                    values: 'customsuggestion.suggestions.onClickValue'
                                },
                            ],
                            'CustomSuggestion'
                        )
                    }
                />
            </div>
        );
    }
};

export default _CustomSuggestion;

