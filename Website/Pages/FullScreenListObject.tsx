import React from 'react';
//@ts-ignore
import { Table, FullScreenListObject, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import toggleZindex from '../Functions/toggleZindex';
import StyleImplementation from '../Components/StyleImplementation';

import generateArticle from '../Globals/generateArticle';

const codeExample = `import { FullScreenListObject } from 'react-revolution';
// import FullScreenListObject from 'react-revolution/FullScreenListObject';

<span>
    <div 
        className="button-action rr-revolution-button-clipboard" 
        onClick={() => this.toggleList()}
    >
        Click to toggle list ({this.state.choosedValue})
    </div>
    <FullScreenListObject
        display={this.state.display}
        callback={this.callback}
        iconClose="✖"
        callbackClose={this.toggleList}
        closeOnCallback={true}
        closeOnDimmedClick={true}
        closeOnEsc={true}
        inputActive={true}
        inputPlaceholder={'Deutschland, Polska ....'}
        inputEmptyOnCallback={true}
        noDataText={'No data found'}
        animation='top' // scale, top, right, bottom, left
        data={
            [
                {
                    text: 'Deutschland'
                },
                {
                    text: 'Polska'
                },
                {
                    text: 'USA'
                },
                {
                    text: 'England'
                },
                {
                    text: 'Russia'
                }
            ]
        }
    />
</span>`;

const jsExample = `constructor(props) {
        super(props);

        this.toggleList = this.toggleList.bind(this);
        this.callback = this.callback.bind(this);

        this.state = {
            display: false,
            choosedValue: ''
        };
    }

    callback(clickEvent, choosedObject) {
        this.setState({ 
            choosedValue: choosedObject.text
        });
    }

    toggleList() {
        this.setState({ display: !this.state.display });
    }
}`;

class _FullScreenListObject extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);

        this.toggleList = this.toggleList.bind(this);
        this.callback = this.callback.bind(this);

        this.state = {
            display: false,
            choosedValue: ''
        };
    }

    componentDidMount() {
        toggleZindex(this.state.display);
    }

    callback(clickEvent, choosedObject) {
        this.setState({
            choosedValue: choosedObject.text
        });
    }

    toggleList() {
        this.setState({
            display: !this.state.display
        }, () => {
            toggleZindex(this.state.display);
        });
    }


    render() {

        return (
            <div className="Generator">
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    FullScreenListObject
                </h1>
                <div className="code-example mt-4">
                    <div className="code-example-live">
                        <span>
                            <div
                                className="button-action rr-revolution-button-clipboard"
                                onClick={() => this.toggleList()}
                            >
                                Click to toggle list ({this.state.choosedValue})
                        </div>
                            <FullScreenListObject
                                display={this.state.display}
                                callback={this.callback}
                                iconClose="✖"
                                callbackClose={this.toggleList}
                                closeOnCallback={true}
                                closeOnDimmedClick={true}
                                closeOnEsc={true}
                                inputActive={true}
                                inputPlaceholder={'Deutschland, Polska ....'}
                                inputEmptyOnCallback={true}
                                noDataText={'No data found'}
                                animation='top' // scale, top, right, bottom, left
                                data={
                                    [
                                        {
                                            text: 'Deutschland'
                                        },
                                        {
                                            text: 'Polska'
                                        },
                                        {
                                            text: 'USA'
                                        },
                                        {
                                            text: 'England'
                                        },
                                        {
                                            text: 'Russia'
                                        }
                                    ]
                                }
                            />
                        </span>
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
                                    key: 'animation',
                                    values: 'fullscreenOverlay.animation'
                                },

                                {
                                    key: 'display',
                                    values: 'display'
                                },
                                {
                                    key: 'lineNumber',
                                    values: 'lineNumber'
                                },
                                {
                                    key: 'iconClose',
                                    values: 'iconClose'
                                },
                                {
                                    key: 'inputActive',
                                    values: 'inputActive'
                                },
                                {
                                    key: 'noDataText',
                                    values: 'noDataText'
                                },
                                {
                                    key: 'inputPlaceholder',
                                    values: 'inputPlaceholder'
                                },
                                {
                                    key: 'callback',
                                    values: 'listarray.callback'
                                },
                                {
                                    key: 'callbackClose',
                                    values: 'callbackClose'
                                },
                                {
                                    key: 'closeOnCallback',
                                    values: 'closeOnCallback'
                                },
                                {
                                    key: 'closeOnDimmedClick',
                                    values: 'closeOnDimmedClick'
                                },
                                {
                                    key: 'closeOnEsc',
                                    values: 'closeOnEsc'
                                },
                                {
                                    key: 'inputEmptyOnCallback',
                                    values: 'inputEmptyOnCallback'
                                },
                                {
                                    key: 'data',
                                    values: 'listobject.data'
                                },
                                {
                                    key: 'data.text',
                                    values: 'listobject.data.text'
                                },
                            ],
                            'FullScreenListObject'
                        )
                    }
                />
            </div>
        );
    }
};

export default _FullScreenListObject;

