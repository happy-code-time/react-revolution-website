import React from 'react';
import ReactDOM from 'react-dom';
import { PopupHover } from './react-revolution/react-revolution';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            like: false
        };
    }

    getCards(dot = '') {
        const items = 10;
        const data = [];


        for (let x = 0; x < items; x++) {


            data.push(
                {
                    data: (
                        <span>
                            {
                                x + 1
                            }
                        </span>
                    ),
                    dot
                }
            );
        }


        return data;
    }

    render() {
        return (            
            <div style={{ marginBottom: '30px' }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .PopupHoverStyle {
                        float: left;
                        box-sizing: border-box;
                        padding: 5px 10px;
                        margin-right: 10px;
                    }
                `}} />
                <PopupHover
                    addClass='PopupHoverStyle'
                    direction='center'
                    holderData='long data holder text'
                    displayOnHover={true}
                    hideOnLeave={true}
                    animation={true}
                    contentData={
                        [
                            {
                                data: (
                                    <a href="#">
                                        link 1
                                    </a>
                                )
                            },
                            {
                                data: (
                                    <a href="#">
                                        link 2
                                    </a>
                                )
                            }
                        ]
                    }
                />
                <PopupHover
                    addClass='PopupHoverStyle'
                    direction='center'
                    holderData='square'
                    displayOnHover={true}
                    hideOnLeave={true}
                    animation={true}
                    contentData={
                        (
                            <div>
                                <br />
                                <h1>First header</h1>
                                <br />
                                <hr />
                                <br />
                                <p>Menu entry 1</p>
                                <br />
                                <p>Menu entry 2</p>
                                <br />
                                <p>Menu entry 3</p>
                                <br />
                                <hr />
                                <br />
                                <h1>Second header</h1>
                                <br />
                                <p>Single child entry 1</p>
                                <br />
                                <p>Single child entry 2</p>
                                <br />
                                <p>Single child entry 3</p>
                                <br />
                                <hr />
                                <br />
                            </div>
                        )
                    }
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));