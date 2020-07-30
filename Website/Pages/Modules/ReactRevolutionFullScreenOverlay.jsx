import React from 'react';

import { Table, FullScreenOverlay, SourceCode, Clipboard } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

import toggleZindex from '../../Functions/toggleZindex';

import getDescriptionForstyle from '../../Functions/getDescriptionForstyle';

const codeExample = `import { FullScreenOverlay } from 'react-revolution';
<div
    className="button-action rr-revolution-button-clipboard"
    onClick={(e) => this.toggleOverlay()}
>
    toggle
</div>

<FullScreenOverlay
    closeOnClick={true}
    closeOnEsc={true}
    animation='scale' // scale, left, top, right, bottom, 
    dimmed={true}
    callbackClose={this.toggleOverlay}
    display={this.state.display}
    disableScroll={true}
    iconClose={true}
    data={
        <div className="fullscreen-overlay-example">
            <p>
                Custom data
            </p>
        </div>
    }
/>`;

const jsExample = `constructor(props) {
        super(props);

        this.toggleOverlay = this.toggleOverlay.bind(this);

        this.state = {
            display: false,
        };
    }

    toggleOverlay() {
        this.setState({
            display: !this.state.display
        });
    }
}`;

const cssExample = `.fullscreen-overlay-example{
    position: absolute; // important
    top: 20vh; // important
    left: 35vw; // important
    width: 30vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background-color: rgb(255,255,255);

    p{
        margin: auto;
    }
}`;

class ReactRevolutionFullScreenOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.toggleOverlay = this.toggleOverlay.bind(this);

        this.state = {
            display: false,
        };
    }

    componentDidMount(){
        toggleZindex(this.state.display);        
    }
    
    toggleOverlay() {
        this.setState({ 
            display: !this.state.display 
        }, () => {
            toggleZindex(this.state.display);
        });
    }

    render() {

        return (
            <div className="Generator">
                <h1 className="h1-title border-none text-center">
                    FullScreenOverlay
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
                        onClick={(e) => this.toggleOverlay()}
                    >
                        toggle
                    </div>
                    <FullScreenOverlay
                        closeOnClick={true}
                        closeOnEsc={true}
                        animation='scale' // scale, left, top, right, bottom, 
                        dimmed={true}
                        callbackClose={this.toggleOverlay}
                        display={this.state.display}
                        disableScroll={true}
                        iconClose={true}
                        data={
                            <div className="fullscreen-overlay-example">
                                <p>
                                    Custom data
                                </p>
                            </div>
                        }
                    />
                    <h1
                        title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fas fa-atom" />
                        {
                            trans('reactCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        displayLineNumber={true}
                        layout='dark'
                        code={codeExample}
                    />
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div className="button-action">
                                {
                                    trans('copyToClipboard')
                                }
                            </div>
                        )}
                        clipboard={codeExample}
                    />
                    <h1
                        title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fab fa-node-js" />
                        {
                            trans('jsCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        displayLineNumber={true}
                        layout='dark'
                        code={jsExample}
                    />
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div className="button-action">
                                {
                                    trans('copyToClipboard')
                                }
                            </div>
                        )}
                        clipboard={jsExample}
                    />
                    <h1
                        title={`${trans('cssCodeTitle')} - ${trans('exampleTitle')} 1`}
                        className="h1-example"
                    >
                        <i className="fab fa-css3" />
                        {
                            trans('cssCodeTitle')
                        }
                    </h1>
                    <SourceCode
                        displayLineNumber={true}
                        layout='dark'
                        code={cssExample}
                    />
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div className="button-action">
                                {
                                    trans('copyToClipboard')
                                }
                            </div>
                        )}
                        clipboard={cssExample}
                    />
                </div>
                {
                    getDescriptionForstyle('rr-full-screen-overlay')
                }
                <h1 className="h1-title border-none text-center mb-4">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
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
                                    key: 'animation',
                                    values: 'fullscreenOverlay.animation'
                                },
                                {
                                    key: 'closeOnClick',
                                    values: 'closeOnClick'
                                },
                                {
                                    key: 'closeOnEsc',
                                    values: 'closeOnEsc'
                                },
                                {
                                    key: 'callbackClose',
                                    values: 'callbackClose'
                                },
                                {
                                    key: 'display',
                                    values: 'display'
                                },
                                {
                                    key: 'iconClose',
                                    values: 'iconClose'
                                },
                                {
                                    key: 'dimmed',
                                    values: 'fullscreenoverlay.dimmed'
                                },
                                {
                                    key: 'disableScroll',
                                    values: 'disableScroll'
                                },
                                {
                                    key: 'data',
                                    values: 'fullscreenoverlay.data'
                                },
                            ],
                            'rr-full-screen-overlay'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionFullScreenOverlay;

