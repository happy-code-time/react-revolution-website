import React from 'react';
import ReactDOM from 'react-dom';
import { isBoolean } from './react-revolution/react-revolution';
// import './react-revolution/_Sass/Accordion.scss';

class App extends React.Component 
{
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
    }

    /**
     * @param {MouseEvent} e 
     * @param {string} icon
     * @param {string} text
     * 
     * @return {void} 
     */
    callback(e, icon, text) 
    {
        console.clear();
        console.info(icon, text);
        alert(`${icon}\n${text}`);
    }

    render() {

        console.log(
            isBoolean(
                () => {}
            ),
            isBoolean(
                true
            ),
            isBoolean(
                {
                    0: {},
                    3: {}
                }
            ),
        )
        return null;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));