import React from 'react';

import { FullScreenListArray, SourceCode, Clipboard } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

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

    callback(clickEvent, choosedValue) {
        this.setState({ 
            choosedValue 
        });
    }

    toggleList() {
        this.setState({ display: !this.state.display });
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
            </div>
        );
    }
};

export default ReactRevolutionFullScreenListArray;

