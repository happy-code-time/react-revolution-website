import React from 'react';
import ReactDOM from 'react-dom';
import { Ribbon, RibbonMultiple } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-ribbon.scss';
import './react-revolution/_Sass/rr-ribbon-multiple.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    getJsx() {
        return (
            <div
                style={
                    {
                        borderRadius: '5px',
                        boxShadow: '0px 0px 9px rgb(233,233,233)',
                        overflow: 'hidden'
                    }
                }
            >
                <img
                    src='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                    style={
                        {
                            width: '100%',
                            height: '50%',
                        }
                    }
                />
                <p
                    style={
                        {
                            boxSizing: 'border-box',
                            padding: '10px'
                        }
                    }
                >
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat,
                    sed diam voluptua.
                    At vero eos et accusam et
                    justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum
                    dolor sit amet.
                </p>
            </div>
        );
    }

    render() {
        return (
            <div
                style={
                    {
                        width: '320px',
                        margin: '100px'
                    }
                }
            >
                <p>TOP-RIGHT | BOTTOM-LEFT </p>
                <RibbonMultiple
                    ribbons={
                        [
                            {
                                background: '#FF4459',
                                color: 'rgb(255,255,255)',
                                ribbon: (
                                    <span>
                                        SALE!
                                    </span>
                                )
                            },
                            {
                                background: 'green',
                                color: 'rgb(255,255,255)',
                                directionY: 'bottom',
                                directionX: 'left',
                                ribbon: (
                                    <span>
                                        -90%
                                    </span>
                                )
                            }
                        ]
                    }
                    content={this.getJsx()}
                />
                <p>TOP-LEFT | BOTTOM-RIGHT </p>
                <RibbonMultiple
                    ribbons={
                        [
                            {
                                background: '#FF4459',
                                color: 'rgb(255,255,255)',
                                directionY: 'top',
                                directionX: 'left',
                                ribbon: (
                                    <span>
                                        SALE!
                                    </span>
                                )
                            },
                            {
                                background: 'green',
                                color: 'rgb(255,255,255)',
                                directionY: 'bottom',
                                ribbon: (
                                    <span>
                                        -90%
                                    </span>
                                )
                            }
                        ]
                    }
                    content={this.getJsx()}
                />

                <p>ALL </p>
                <RibbonMultiple
                    ribbons={
                        [
                            {
                                background: '#FF4459',
                                color: 'rgb(255,255,255)',
                                directionY: 'top',
                                directionX: 'left',
                                ribbon: (
                                    <span>
                                        SALE!
                                    </span>
                                )
                            },
                            {
                                background: 'green',
                                color: 'rgb(255,255,255)',
                                directionY: 'top',
                                ribbon: (
                                    <span>
                                        Only
                                    </span>
                                )
                            },
                            {
                                background: '#FF4459',
                                color: 'rgb(255,255,255)',
                                directionY: 'bottom',
                                ribbon: (
                                    <span>
                                        -90%
                                    </span>
                                )
                            },
                            {
                                background: 'green',
                                color: 'rgb(255,255,255)',
                                directionY: 'bottom',
                                directionX: 'left',
                                ribbon: (
                                    <span>
                                        today!
                                    </span>
                                )
                            }
                        ]
                    }
                    content={this.getJsx()}
                />
                <p>TOP-RIGHT</p>
                <Ribbon
                    background='#FF4459'
                    color='rgb(255,255,255)'
                    ribbon={
                        <span>
                            SALE!
                                        </span>
                    }
                    content={this.getJsx()}
                />
                <p>TOP-LEFT</p>
                <Ribbon
                    directionX='left'
                    background='#FF4459'
                    color='rgb(255,255,255)'
                    ribbon={
                        <span>
                            WINTER SALE!
                                        </span>
                    }
                    content={this.getJsx()}
                />
                <p>BOTTOM-RIGHT</p>
                <Ribbon
                    directionY='bottom'
                    background='#FF4459'
                    color='rgb(255,255,255)'
                    ribbon={
                        <span>
                            WINTER SALE!
                                        </span>
                    }
                    content={this.getJsx()}
                />
                <p>BOTTOM-LEFT</p>
                <Ribbon
                    directionX='left'
                    directionY='bottom'
                    background='#FF4459'
                    color='rgb(255,255,255)'
                    ribbon={
                        <span>
                            WINTER SALE!
                                        </span>
                    }
                    content={this.getJsx()}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));