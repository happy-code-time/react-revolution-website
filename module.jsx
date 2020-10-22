import React from 'react';

import ReactDOM from 'react-dom';

import { Stars, uuid } from './react-revolution/react-revolution';

import './react-revolution/_Sass/rr-stars.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);

        this.state = {
            filled: 2,
        };
    }

    callback(clickEvent, starClicked, callbackProps){
        this.setState({
            filled: starClicked
        });
    }

    render() {
        const { filled } = this.state;

        return (
            <span>
                <Stars
                    count={5}
                    filled={filled}
                    fillHover={true}
                    callback={this.callback}
                    props={{}}
                    color='orange-yellow'
                    starsData={
                        [
                            {
                                props: {
                                    title: 'star 1'
                                },
                                data: ''
                            },
                            {
                                props: {
                                    title: 'star 2'
                                },
                                data: ''
                            },
                            {
                                props: {
                                    title: 'star 3'
                                },
                                data: ''
                            },
                            {
                                props: {
                                    title: 'star 4'
                                },
                                data: ''
                            },
                            {
                                props: {
                                    title: 'star 5'
                                },
                                data: ''
                            }
                        ]
                    }
                />
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));