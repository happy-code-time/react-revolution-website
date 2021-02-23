import React from 'react';
import ReactDOM from 'react-dom';
import { Ribbon, RibbonMultiple } from './react-revolution/react-revolution';
// import './react-revolution/_Sass/react-revolution.scss';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
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
            <span>
                <p>dasdsadasdas</p>
                <p>dasdsadasdas</p>
                <p>dasdsadasdas</p>
                <p>dasdsadasdas</p>

                <Ribbon
                    background='#FF4459'
                    backgroundCorner='dodgerblue'
                    color='rgb(255,255,255)'
                    directionY='top'
                    directionX='center'
                    type='1'
                    ribbon={
                        <span>
                            SALE!
                        </span>
                    }
                    content={this.getJsx()}
                />

                <RibbonMultiple
                    ribbons={ 
                        [ 
                            { 
                                type: '2',
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
                                type: '2',
                                background: '#FF4459', 
                                color: 'rgb(255,255,255)', 
                                directionY: 'top', 
                                directionX: 'right', 
                                ribbon: ( 
                                    <span> 
                                        SALE! 
                                    </span> 
                                ) 
                            }, 
                            { 
                                type: '2',
                                background: 'rgb(24,115,204)', 
                                color: 'rgb(255,255,255)', 
                                backgroundCorner: 'dodgerblue',
                                directionY: 'bottom', 
                                directionX: 'right', 
                                ribbon: ( 
                                    <span> 
                                        -90% 
                                    </span> 
                                ) 
                            },
                            { 
                                type: '2',
                                background: 'rgb(24,115,204)', 
                                color: 'rgb(255,255,255)', 
                                backgroundCorner: 'dodgerblue',
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
                    ribbon={
                        <span>
                            SALE!
                        </span>
                    }
                    content={this.getJsx()}
                />
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));