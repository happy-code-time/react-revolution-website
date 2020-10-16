import React from 'react';

import ReactDOM from 'react-dom';

import { DragDropArea, uuid } from './react-revolution/react-revolution';

// import DragDropArea from './react-revolution/react-revolution';

import './react-revolution/_Sass/rr-drag-drop-area.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);

        this.state = {
            data: [
                {
                    text: 'Avocado'
                },
                {
                    text: 'Avocado'
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
                    addClass='rr-drag-drop-area-example'
                    itemsPerLine={4}
                    mediaBreak={1024}
                    data={data}
                    callback={this.callback}
                    callbackAllowDrop={this.callbackAllowDrop}
                />
                <div className="">
                    {
                        changes.map( change => {
                            return (
                                <div key={uuid()}>
                                    {
                                        `${change.source} 
                                        -> 
                                        ${change.target}
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