import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from './react-revolution/react-revolution';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            like: false
        }
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
            <div style={{ margin: '100px' }}>
                <span>
                    <style dangerouslySetInnerHTML={{
                        __html: `
                            .single-data.is-toggled .fa-arrow-down{
                                transform: rotateZ(90deg);
                            }                            
                            .single-data.is-not-toggled .fa-arrow-down,
                            .single-data.is-toggling-back .fa-arrow-down,
                            .single-data .fa-arrow-down{
                                display: inline-block;
                                width: 30px;
                                height: 30px;
                                text-align: center;
                                line-height: 30px;
                                transition-duration: 300ms;
                                transform: rotateZ(0deg);
                            }
                        `}}
                    />
                    <Accordion
                        animation='height'
                        closeOnClickOutside={true}
                        data={
                            [
                                {
                                    text: 'Accordion',
                                    icon: <i className='fas fa-arrow-down' />,
                                    data: [
                                        {
                                            text: 'Child 1',
                                            dataToggle: '"dataToggle" - without nested data'
                                        },
                                        {
                                            text: 'Child 2',
                                            data: [
                                                {
                                                    text: 'Child 3',
                                                    dataToggle: '"dataToggle" - without nested data'
                                                },
                                                {
                                                    text: 'Child 3',
                                                    data: [
                                                        {
                                                            text: 'Child 4',
                                                            dataToggle: '"dataToggle" - without nested data'
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                </span>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));