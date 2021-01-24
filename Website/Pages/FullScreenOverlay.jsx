import React from 'react';

import { Table, FullScreenOverlay, SourceCode, Clipboard } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import toggleZindex from '../Functions/toggleZindex';


import generateArticles from '../Globals/generateArticles';

const codeExample = `import { FullScreenOverlay } from 'react-revolution';
// import FullScreenOverlay from 'react-revolution/FullScreenOverlay';

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

class _FullScreenOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.toggleOverlay = this.toggleOverlay.bind(this);

        this.state = {
            display: false,
        };
    }

    componentDidMount() {
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
                <h1 className="h1-title border-none my-3">
                    FullScreenOverlay
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <div className="code-example-live">
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
                    {
                        generateArticles(
                            (
                                <h1
                                    title={`${trans('cssCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example"
                                >
                                    <i className="fab fa-css3" />
                                    {
                                        trans('cssCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={cssExample}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={cssExample}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
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

export default _FullScreenOverlay;

