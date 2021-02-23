import React from 'react';

import { Table, Overlay, Icons, SourceCode, Clipboard } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

import generateArticles from '../Globals/generateArticles';

const codeExample = `import { Overlay, Icons } from 'react-revolution';
// import Overlay from 'react-revolution/Overlay';
// import Icons from 'react-revolution/Icons';
 
<span>
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
        onClick={() => this.toggleOverlay()}
    >
        toggle
    </button>
    <Overlay
        display={this.state.display}
        callback={this.toggleOverlay}
        callbackProps='any'
        data={
            (
                <Icons
                    displayTabs={true}
                    iconsType='Smileys'
                    callback={this.toggleOverlay}
                    renderItems='all'
                />
            )
        }
    />
</span>`;

const jsExample = `constructor(props) {
    super(props);
    this.toggleOverlay = this.toggleOverlay.bind(this);

    this.state = {
        display: false
    };
}

toggleOverlay() {
    this.setState({ display: !this.state.display });
}`;

class _Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOverlay = this.toggleOverlay.bind(this);

        this.state = {
            display: false
        }
    }

    toggleOverlay() {
        this.setState({ display: !this.state.display });
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    Overlay
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <div className="code-example-live">
                        <span>
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
                                onClick={() => this.toggleOverlay()}
                            >
                                toggle
                            </button>
                            <Overlay
                                display={this.state.display}
                                callback={this.toggleOverlay}
                                callbackProps='any'
                                data={
                                    (
                                        <Icons
                                            displayTabs={true}
                                            iconsType='Smileys'
                                            callback={this.toggleOverlay}
                                            renderItems='all'
                                        />
                                    )
                                }
                            />
                        </span>
                    </div>
                    {
                        generateArticles(
                            (
                                <h1 className="h1-example">
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
                <StyleImplementation />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
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
                                    key: 'display',
                                    values: 'overlay.display'
                                },
                                {
                                    key: 'callback',
                                    values: 'overlay.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'overlay.callbackProps'
                                },
                                {
                                    key: 'data',
                                    values: 'overlay.data'
                                },
                            ],
                            'rr-overlay'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Overlay;

