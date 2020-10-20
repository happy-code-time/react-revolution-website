import React from 'react';

import ReactDOM from 'react-dom';

import { DragDropList, uuid } from './react-revolution/react-revolution';

// import DragDropArea from './react-revolution/react-revolution';

import './react-revolution/_Sass/rr-drag-drop-list.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);

        this.state = {
            areaProps: {}, //ul
            data: [
                {
                    text: 'Avocado',
                    props: {} // li
                },
                {
                    text: 'Banana'
                },
                {
                    text: 'Broccoli'
                },
                {
                    text: 'Carrot'
                }
            ],
            changes: []
        };
    }

    callback(prevData, nextData, change, callbackProps){
        this.setState({
            data: nextData,
            changes: [...this.state.changes, change]
        });
    }

    callbackAllowDrop(prevData, nextData, change, allowDropProps){
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(true);
            }, 1000);
        });
    }

    render() {
        const { data, changes } = this.state;

        return (
            <span>
                <DragDropList
                    addClass='rr-drag-drop-list-example'
                    data={data}
                    callback={this.callback}
                    callbackAllowDrop={this.callbackAllowDrop}
                    dropLoading='LAODING'
                    placeholder='PLACEHOLDER'
                    placeholderPosition='auto' // top, bottom, auto
                    lineNumber={true}
                    lineNumberChar=')'
                />
                <div className="">
                    {
                        changes.map( change => {
                            return (
                                <div key={uuid()}>
                                    {
                                        `${change.sourceIndex} 
                                        -> 
                                        ${change.targetIndex}
                                        : 
                                        ${change.item.text}`
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));