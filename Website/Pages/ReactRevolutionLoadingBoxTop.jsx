import React from 'react';

import { Table, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

import generateArticles from '../Globals/generateArticles';

const codeExample = `import { LoadingBoxTop } from 'react-revolution';
// import LoadingBoxTop from 'react-revolution/LoadingBoxTop';

<LoadingBoxTop 
    text='Loading...' 
    display={this.state.display}
/>`;

const jsExample = `constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
        display: false,
    }
}

toggle() {
    this.setState({
        display: !this.state.display
    });
}`;

class ReactRevolutionLoadingBoxTop extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            display: false,
        }
    }

    toggle() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none text-center">
                    LoadingBoxTop
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <h1
                        title={`${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fas fa-user" />
                        {
                            trans('exampleTitle')
                        }
                    </h1>
                    <div
                        className="button-action rr-revolution-button-clipboard"
                        onClick={() => this.toggle()}
                    >
                        Click to toggle loading box
                    </div>
                    <LoadingBoxTop
                        text='Loading...'
                        display={this.state.display}
                    />
                    {
                        generateArticles(
                            (
                                <h1
                                    title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example"
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
                                        code={codeExample}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample}
                                    />
                                </span>
                            )
                        )
                    }
                    {
                        generateArticles(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example"
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
                                        code={jsExample}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
                {
                    getDescriptionForstyle('rr-loading-box-top')
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
                                    key: 'text',
                                    values: 'text'
                                },
                                {
                                    key: 'display',
                                    values: 'display'
                                },
                            ],
                            'rr-loading-box-top'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionLoadingBoxTop;

