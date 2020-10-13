import React from 'react';

import ReactDOM from 'react-dom';

import { DragDropArea, uuid } from './react-revolution/public/react-revolution';

import './react-revolution/sass/rr-drag-drop-area.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);

        this.state = {
            data: {
                'Fruits': {
                    name: 'Fruits 🍓',
                    // allowDrop: false,
                    // allowDrag: true,
                    titleProps: {
                        style: {
                            color: '#0c4149',
                            background: '#d1e5e8 linear-gradient(180deg, #d6e7ea, #d1e5e8) repeat-x',
                            borderColor: '#bedbdf',
                        }
                    },
                    areaProps: {},
                    data: [
                        {
                            text: 'Apple'
                        },
                        {
                            text: 'Apple'
                        },
                        {
                            text: 'Annanas'
                        },
                        {
                            text: 'Banana'
                        }
                    ],
                },
                'Vegetables': {
                    titleProps: {
                        style: {
                            color: '#004300',
                            background: '#cce6cc linear-gradient(180deg, #d2e8d2, #cce6cc) repeat-x',
                            borderColor: '#b8dbb8',
                        }
                    },
                    areaProps: {},
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
                    ]
                },
                'ShoppingCart': {
                    titleProps: {
                        style: {
                            color: '#856404',
                            background: '#fff3cd linear-gradient(180deg, #fdf3d3, #fff3cd) repeat-x',
                            borderColor: '#ffeeba',
                        }
                    },
                    areaProps: {},
                }
            },
            changes: []
        };
    }

    callback(oldState, newState, details, callbackProps){        
        this.setState({
            data: newState,
            changes: [...this.state.changes, details]
        });
    }

    render() {
        const { data, changes } = this.state;

        return (
            <span>
                <DragDropArea
                    addClass='rr-drag-drop-area-example'
                    itemsPerLine={4}
                    mediaBreak={1024}
                    data={data}
                    callback={this.callback}
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