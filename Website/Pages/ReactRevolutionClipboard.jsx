import React from 'react';

import { Table, Clipboard, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Clipboard } from 'react-revolution';
// import Clipboard from 'react-revolution/Clipboard';

<Clipboard
    animation='scale' // scale, jump
    data={(
        <div 
            title={trans('copyToClipboard')} 
            className="rr-revolution-button-clipboard"
        >
            <i className="far fa-clipboard"></i>
        </div>
    )}
    clipboard={
        \`
            Custom clipboard data 😍
        \`
    }
    callback={this.copiedToClipboard}
/>`;

const codeExample2 = `import { Clipboard } from 'react-revolution';
// import Clipboard from 'react-revolution/Clipboard';

<Clipboard
    animation='jump' // scale, jump
    data={(
        <div
            title={trans('copyToClipboard')} 
            className="rr-revolution-button-clipboard"
        >
            <i className="far fa-clipboard"></i>
        </div>
    )}
    clipboard={
        [
            'React',
            'Revolution'
        ]
    }
    callback={this.copiedToClipboard}
/>`;

const jsExample = `copiedToClipboard(event, callbackProps, data){
    console.info(event);
    console.info(callbackProps);
    console.info(data);
}`;

const cssExample = `.rr-revolution-button-clipboard{
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 3px;
    margin: 0 auto;
    background-color: rgb(244,69,89);
    box-shadow: 0px 0px 3px rgb(244,69,89);
    font-size: 0.87rem;
    color: rgb(255,255,255);
}`;

class ReactRevolutionClipboard extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Clipboard',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Clipboard
                        animation='scale' // scale, jump
                        data={(
                            <div title={trans('copyToClipboard')} className="rr-revolution-button-clipboard">
                                <i className="far fa-clipboard"></i>
                            </div>
                        )}
                        clipboard={
                            `
                                Custom clipboard data 😍
                            `
                        }
                        callback={this.copiedToClipboard}
                    />
                )
            },
            {
                title: 'Clipboard',
                description: '',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div title={trans('copyToClipboard')} className="rr-revolution-button-clipboard">
                                <i className="far fa-clipboard"></i>
                            </div>
                        )}
                        clipboard={
                            [
                                'React',
                                'Revolution'
                            ]
                        }
                        callback={this.copiedToClipboard}
                    />
                )
            },
        ];
    }

    copiedToClipboard(event, callbackProps, data){
        console.info(data);
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
                    getDescriptionForstyle('rr-clipboard')
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
                                    key: 'callback',
                                    values: 'clipboard.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'clipboard.callbackProps'
                                },
                                {
                                    key: 'clipboard',
                                    values: 'clipboard'
                                },
                                {
                                    key: 'animation',
                                    values: 'clipboard.animation'
                                },
                                {
                                    key: 'data',
                                    values: 'clipboard.data'
                                },
                            ],
                            'rr-clipboard'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionClipboard;