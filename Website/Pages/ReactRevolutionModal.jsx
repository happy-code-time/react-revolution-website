import React from 'react';

import { Table, Modal, SourceCode, Clipboard } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

import generateArticles from '../Globals/generateArticles';

const codeExample = `import { Modal } from 'react-revolution';
// import Modal from 'react-revolution/Modal';

<button 
    style={
        {
            width: '100px',
            boxSizing: 'border-box',
            padding: '5px 10px',
            borderRadius: '5px',
            backgroundColor: 'dodgerblue',
            color: 'rgb(255,255,255)',
            textAlign: 'center',
            cursor: 'pointer',
            margin: '0 calc(50% - 50px)',
            border: '1px solid dodgerblue'
        }
    }
    onClick={ () => this.callback()}
>
    toggle
</button>
<Modal
    display={this.state.display}
    callback={this.callback}
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.
        \`
    }
    close={'❌'}
    closeOnKeyDown={true}
    closeOnClickDimmed={true}
/>`;

const jsExample = `constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);

    this.state = {
        display: false
    };
}

callback(event) {
    this.setState({
        display: !this.state.display
    });
}`;

class ReactRevolutionModal extends React.Component {
    constructor(props) {
        super(props);

        this.callback = this.callback.bind(this);

        this.state = {
            display: false
        }
    }

    callback(event) {
        this.setState({
            display: !this.state.display
        });
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none my-3">
                    Modal
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <div className="code-example-live">
                        <button
                            style={
                                {
                                    width: '100px',
                                    boxSizing: 'border-box',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    backgroundColor: 'dodgerblue',
                                    color: 'rgb(255,255,255)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    margin: '0 calc(50% - 50px)',
                                    border: '1px solid dodgerblue'
                                }
                            }
                            onClick={() => this.callback()}
                        >
                            toggle
                    </button>
                        <Modal
                            display={this.state.display}
                            callback={this.callback}
                            data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.`
                            }
                            close={'❌'}
                        />
                    </div>
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
                    getDescriptionForstyle('rr-modal')
                }
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
                                    values: 'modal.callback'
                                },
                                {
                                    key: 'data',
                                    values: 'modal.data'
                                },
                                {
                                    key: 'close',
                                    values: 'modal.close'
                                },
                                {
                                    key: 'closeOnKeyDown',
                                    values: 'modal.closeOnKeyDown'
                                },
                                {
                                    key: 'closeOnClickDimmed',
                                    values: 'modal.closeOnClickDimmed'
                                },
                            ],
                            'rr-modal'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionModal;

