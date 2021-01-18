import React from 'react';
import ReactDOM from 'react-dom';
import { PopupData, Slider } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-popup-data.scss';
import './react-revolution/_Sass/rr-slider.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ margin: '20px auto' }}>
                <PopupData
                    direction='left'
                    // holderData='DataHolder'
                    holderData='square'
                    // animationTime={300} // default
                    // animation={false}
                    contentData={
                        [
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            },
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            }
                        ]
                    }
                />
                <p>
                    <br />
                </p>
                <PopupData
                    direction='right'
                    // holderData='DataHolder'
                    holderData='dots'
                    animationTime={300} // default
                    animation={false}
                    contentData={
                        [
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            },
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            }
                        ]
                    }
                />
                <p>
                    <br />
                </p>
                <PopupData
                    direction='center'
                    // holderData='🛡'
                    holderData='dots'
                    animationTime={300} // default
                    animation={false}
                    contentData={
                        [
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            },
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            }
                        ]
                    }
                />
                <p>
                    <br />
                </p>
                <PopupData
                    direction='center'
                    holderData='dots'
                    contentData={
                        (
                            <div
                                style={
                                    {
                                        width: '500px',
                                        height: '300px',
                                        margin: '0'
                                    }
                                }
                            >
                                <Slider
                                    useLayerX={false}
                                    data={
                                        [
                                            {
                                                image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                            },
                                            {
                                                image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                            },
                                            {
                                                image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                            },
                                            {
                                                image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                            },
                                        ]
                                    }
                                />
                            </div>
                        )
                    }
                />
                <p>
                    <br />
                </p>
                <PopupData
                    direction='left'
                    holderInside={true}
                    // holderData='🛡'
                    holderData='square'
                    contentData={
                        [
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            },
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            }
                        ]
                    }
                />
                <p>
                    <br />
                </p>
                <PopupData
                    direction='right'
                    holderInside={true}
                    // holderData='🛡'
                    holderData='square'
                    contentData={
                        [
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            },
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            }
                        ]
                    }
                />
                <p>
                    <br />
                </p>
                <PopupData
                    direction='center'
                    // holderData='🛡'
                    holderData='square'
                    holderInside={true}
                    contentData={
                        [
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            },
                            {
                                data: (
                                    <a href="#">
                                        dsadsadasd asd asd a
                                    </a>
                                )
                            }
                        ]
                    }
                />
                <p>
                    <br />
                </p>
                <p>
                    <br />
                </p>
                <p>
                    <br />
                </p>
                <p>
                    <br />
                </p>
                <p>
                    <br />
                </p>
                <p>
                    <br />
                </p>
                <p>
                    <br />
                </p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));