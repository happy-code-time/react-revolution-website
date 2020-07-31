import React from 'react';

import { Table, FullScreenListArray, SourceCode, Clipboard } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

import toggleZindex from '../../Functions/toggleZindex';

import getDescriptionForstyle from '../../Functions/getDescriptionForstyle';

const codeExample = `import { FullScreenListArray } from 'react-revolution';

<span>
    <div 
        className="button-action rr-revolution-button-clipboard" 
        onClick={() => this.toggleList()}
    >
        Click to toggle list ({this.state.choosedValue})
    </div>
    <FullScreenListArray
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
                'Deutschland',
                'Polska',
                'USA',
                'England',
                'Russia'
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

    callback(clickEvent, choosedValue) {
        this.setState({ 
            choosedValue 
        });
    }

    toggleList() {
        this.setState({ display: !this.state.display });
    }
}`;

class ReactRevolutionFullScreenListArray extends React.Component {
    constructor(props) {
        super(props);

        this.toggleList = this.toggleList.bind(this);
        this.callback = this.callback.bind(this);

        this.state = {
            display: false,
            choosedValue: ''
        };
    }

    componentDidMount(){
        toggleZindex(this.state.display);        
    }
    
    callback(clickEvent, choosedValue) {
        this.setState({ 
            choosedValue 
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
                <h1 className="h1-title border-none text-center">
                    FullScreenListArray
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
                    <span>
                        <div 
                            className="button-action rr-revolution-button-clipboard" 
                            onClick={() => this.toggleList()}
                        >
                            Click to toggle list ({this.state.choosedValue})
                        </div>
                        <FullScreenListArray
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
                                    'Deutschland',
                                    'Polska',
                                    'USA',
                                    'England',
                                    'Russia'
                                ]
                            }
                        />
                    </span>
                    <span>
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
                    </span>
                    <span>
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
                    </span>
                </div>
                {
                    getDescriptionForstyle('rr-full-screen-list-array')
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
                                    key: 'animation',
                                    values: 'fullscreenOverlay.animation'
                                },

                                {
                                    key: 'display',
                                    values: 'display'
                                },
                                {
                                    key: 'displayLineNumber',
                                    values: 'displayLineNumber'
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
                                    key: 'placeholder',
                                    values: 'placeholder'
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
                                    values: 'listarray.data'
                                },
                            ],
                            'rr-fullscreenlist'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionFullScreenListArray;

