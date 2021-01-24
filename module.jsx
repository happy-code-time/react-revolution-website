import React from 'react';
import ReactDOM from 'react-dom';
import { PopupHover, ListSwitch } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-popup-hover.scss';
import './react-revolution/_Sass/rr-list-switch.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getdata = this.getdata.bind(this);
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

    render() {
        return (
            <div style={{ margin: '100px' }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .PopupHoverStyle {
                        float: left;
                        box-sizing: border-box;
                        padding: 5px 10px;
                        margin-right: 10px;
                        border-bottom: 1px solid rgb(122,122,122);
                    }
                `}} />
                <br />
                <br />
                <br />
                <p>CENTER</p>
                <br />
                <br />
                <br />
                <div>
                    <PopupHover
                        addClass='PopupHoverStyle'
                        direction='center'
                        holderData='PopupHoverStyle PopupHoverStyle'
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
                        holderData='dots'
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
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));