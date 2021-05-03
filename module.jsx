import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from './react-revolution/react-revolution';
import './react-revolution/_Sass/Accordion.scss';

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
<Accordion
    animation='height'
    data={
        [
            {
                text: (
                    <span>
                        <i style={{ width: '30px' }} className="fas fa-car"></i>
                        Mercedes
                    </span>
                ),
                data: [
                    {
                        text: 'A - Class',
                        data: [
                            {
                                text: '- A 200'
                            },
                            {
                                text: '- A 35 AMG'
                            },
                            {
                                text: '- A 200'
                            },
                            {
                                text: '- A 35 AMG'
                            },
                            {
                                text: '- A 200'
                            },
                            {
                                text: '- A 35 AMG'
                            },
                        ]
                    },
                    {
                        text: 'B - Class',
                        data: [
                            {
                                text: '- B 150'
                            },
                            {
                                text: '- B 250'
                            }
                        ]
                    }
                ]
            }
        ]
    }
/>
                </div>
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));