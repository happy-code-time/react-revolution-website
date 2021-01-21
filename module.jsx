import React from 'react';
import ReactDOM from 'react-dom';
import { ListSwitch } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-list-switch.scss';
import './Website/Scss/list-switch-website.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.logData = this.logData.bind(this);
        this.submitSteps = this.submitSteps.bind(this);
    }

    getdata() {
        return [
            {
                text: 'Settings',
                callback: console.info,
                callbackProps: 'clicked',
                next: '⚙',
                previous: '<',
                data: [
                    {
                        text: 'Profile',
                        callback: console.info,
                        callbackProps: 'clicked',
                        next: '👤',
                        previous: '<',
                        data: [
                            {
                                text: 'Private settings',
                                callback: console.info,
                                callbackProps: 'clicked',
                                previous: '<',
                                next: '🕵',
                                data: [
                                    {
                                        text: 'Setting 1',
                                        callback: console.info,
                                        callbackProps: 'clicked',
                                    },
                                    {
                                        text: 'Setting 2',
                                        callback: console.info,
                                        callbackProps: 'clicked',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: 'Location',
                        callback: console.info,
                        callbackProps: 'clicked',
                        next: '🌐',
                        previous: '',
                        data: [
                            {
                                text: 'City',
                                callback: console.info,
                                callbackProps: 'clicked',
                            },
                            {
                                text: 'Street',
                                callback: console.info,
                                callbackProps: 'clicked',
                            }
                        ]
                    }
                ]
            },
        ];
    }

    logData(callbackProps, steps) {
        console.log(steps);
    }

    submitSteps(submitStepsProps, steps) {
        console.log(steps);
    }

    render() {
        return (
            <span>
                <ListSwitch
                    addClass='list-switch-website'
                    placeholder='🔧'
                    data={this.getdata()}
                />
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));