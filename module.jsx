import React from 'react';
import ReactDOM from 'react-dom';
import { MenuHeight } from './react-revolution/react-revolution';
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

                <MenuHeight
                    addClass='rr-menu-example'
                    reactRouter={false}
                    data={
                        [
                            {
                                text: 'Deep 1',
                                data: [
                                    {
                                        text: 'Deep 2',
                                        data: [
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        text: 'Deep 2',
                                        data: [
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                text: 'Deep 1',
                                data: [
                                    {
                                        text: 'Deep 2',
                                        data: [
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        text: 'Deep 2',
                                        data: [
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                            {
                                                text: 'Deep 3',
                                                data: [
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                    {
                                                        text: 'Deep 4 ...',
                                                        href: '#/',
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    }
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));