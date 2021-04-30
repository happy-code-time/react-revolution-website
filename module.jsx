import React from 'react';
import ReactDOM from 'react-dom';
import { IconText } from './react-revolution/react-revolution';
import './react-revolution/_Sass/IconText.scss';

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

        return (
            <span>

                <div
                    style={
                        {
                            width: '50vw',
                            minWidth: '500px',
                            margin: '30px auto'
                        }
                    }
                >

                </div>
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));