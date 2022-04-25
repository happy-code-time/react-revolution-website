import React from 'react';
//@ts-ignore
import { Table, Modal, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import StyleImplementation from '../Components/StyleImplementation';
import generateArticle from '../Globals/generateArticle';

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
    close={'x'}
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

class _Modal extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

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
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
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
                            onClick={(e) => this.callback(e)}
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
                            close={'x'}
                        />
                    </div>
                    {
                        generateArticle(
                            (
                                <h1 className="h1-example p-0  m-0">
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
                        generateArticle(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
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
                            'Modal'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Modal;

