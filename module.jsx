import React from 'react';
import ReactDOM from 'react-dom';
import { Preloader } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-preloader.scss';
// import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * @param []{ selected: index, selectedText: string} current
     * 
     * @return void
     */
    handleChange(current, callbackProps) {
        console.info(current);
    }

    render() {

        return (
            <span>




 
               
                
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));