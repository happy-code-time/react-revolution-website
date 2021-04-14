import React from 'react';
import ReactDOM from 'react-dom';
import { Filter, FilterMapping } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-filter.scss';
import './react-revolution/_Sass/rr-filter-extended.scss';
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
                <Filter
                    callback={this.handleChange}
                    callbackProps='any'
                    data={
                        [
                            {
                                text: 'Select an option',
                                options: [
                                    {
                                        text: 'empty',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option 1',
                                    },
                                    {
                                        text: 'Option 2',
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                    direction: 'right' // default
                                },
                            },
                            {
                                text: 'Select an nested option',
                                options: [
                                    {
                                        text: '-------',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option 1 children'
                                    },
                                    {
                                        text: 'Option 1 children'
                                    },
                                    {
                                        text: 'Option 1 children'
                                    },
                                    {
                                        text: 'Option 1 children'
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                    direction: 'right' // default
                                }
                            },
                            {
                                text: 'Select an nested option',
                                options: [
                                    {
                                        text: '-------',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option 2 children'
                                    },
                                    {
                                        text: 'Option 2 children'
                                    },
                                    {
                                        text: 'Option 2 children'
                                    },
                                    {
                                        text: 'Option 2 children'
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                    direction: 'right' // default
                                }
                            },
                        ]
                    }
                    dummy={
                        {
                            count: 3,
                            placeholders: [
                                {
                                    placeholder: (
                                        <span>
                                            dummy placeholder 
                                        </span>
                                    ),
                                    arrow: {
                                        char: '↓',
                                        direction: 'right' // default
                                    }
                                },
                                {
                                    placeholder: (
                                        <span>
                                            dummy placeholder 
                                        </span>
                                    ),
                                    arrow: {
                                        char: '↓',
                                        direction: 'right' // default
                                    }
                                },
                            ]
                        }
                    }
                />
                <div></div>

                <FilterMapping
                    callback={this.handleChange}
                    callbackProps='any'
                    data={
                        {
                            placeholder: 'Select an option',
                            options: [
                                {
                                    text: 'empty',
                                    empty: true,
                                },
                                {
                                    text: 'Option 1',
                                    mapping: [
                                        'option_1',
                                    ]
                                },
                                {
                                    text: 'Option 2',
                                    mapping: 'option_2'
                                },
                                {
                                    text: 'Option 3',
                                    mapping: 'option_3'
                                },
                            ],
                            arrow: {
                                char: '↓',
                            },
                        }
                    }
                    mapping={
                        {
                            // Mapping child with an listener
                            option_1: {
                                placeholder: 'Select an nested option 1-1',
                                options: [
                                    {
                                        text: '--- reset ---',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option child 1',
                                        mapping: [
                                            'option_1_1',
                                        ]
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                },
                            },
                            option_1_1: {
                                placeholder: 'Select an nested option 1-1-2',
                                options: [
                                    {
                                        text: '--- reset ---',
                                        empty: true,
                                    },
                                    {
                                        text: 'Option child child 1',
                                    },
                                ],
                                arrow: {
                                    char: '↓',
                                },
                            }
                        }
                    }
                    dummy={
                        {
                            count: 3,
                            placeholders: [
                                {
                                    placeholder: (
                                        <span>
                                            dummy placeholder 2
                                        </span>
                                    ),
                                    arrow: {
                                        char: '↓',
                                        direction: 'right' // default
                                    }
                                },
                                {
                                    placeholder: (
                                        <span>
                                            dummy placeholder 3
                                        </span>
                                    ),
                                    arrow: {
                                        char: '↓',
                                        direction: 'right' // default
                                    }
                                },
                            ]
                        }
                    }
                />
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));