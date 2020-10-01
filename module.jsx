import React from 'react';

import ReactDOM from 'react-dom';

import { Modal } from './react-revolution/public/react-revolution';

import './react-revolution/sass/rr-modal.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);

        this.state = {
            display: false
        }
    }

    callback(event){
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        const { display } = this.state;

        return (
            <span>
                <button onClick={ () => this.callback()}>
                    toggle
                </button>
                <Modal
                    display={display}
                    callback={this.callback}
                    data={`
                        Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam 
                        voluptua.`
                    }
                    close={'❌'}
                    closeOnKeyDown={true}
                    closeOnClickDimmed={true}
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));