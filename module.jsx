import React from 'react';
import ReactDOM from 'react-dom';
import { SliderCards, SliderItems, Slider } from '../react-revolution/react-revolution';
import './react-revolution/_Sass/rr-slider.scss';
import './react-revolution/_Sass/rr-slider-cards.scss';
import './react-revolution/_Sass/rr-slider-items.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getCards = this.getCards.bind(this);
    }

    getCards(dot = '') {
        const items = 11;
        const data = [];

        for (let x = 0; x < items; x++) {

            data.push(
                {
                    data: (
                        <div className="card">
                            {
                                x + 1
                            }
                        </div>
                    ),
                    dot
                }
            );
        }

        return data;
    }

    render() {
        return (
            <span>
                {/* SLIDER */}
                {/* <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <Slider
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        buttonsAlwaysVisible={true}
                        paginationType={2}
                        previous='«'
                        next='»'
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
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <Slider
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        buttonsAlwaysVisible={true}
                        paginationType={2}
                        previous='«'
                        next='»'
                        autoplay={true}
                        autoplayTime={5000}
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
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <Slider
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        buttonsAlwaysVisible={true}
                        paginationType={2}
                        previous='«'
                        next='»'
                        autoplay={true}
                        autoplayTime={5000}
                        animationTime='10'
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
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <Slider
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        buttonsAlwaysVisible={true}
                        paginationType={2}
                        previous='«'
                        next='»'
                        autoplay={true}
                        allowMouseTouch={false}
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
                </div> */}
                {/* ITEMS */}
                {/* <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <SliderItems
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        paginationType={2}
                        buttonsAlwaysVisible={true}
                        previous='«'
                        next='»'
                        autoplay={true}
                        autoplayTime={5000}
                        data={this.getCards()}
                    />
                </div>
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <SliderItems
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        paginationType={2}
                        buttonsAlwaysVisible={true}
                        previous='«'
                        next='»'
                        autoplay={true}
                        autoplayTime={5000}
                        data={this.getCards()}
                        animationTime='10'
                    />
                </div> */}
                {/* CARDS */}
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <SliderCards
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        paginationType={2}
                        previous='«'
                        next='»'
                        buttonsAlwaysVisible={true}
                        wrapDirection={false}
                        data={this.getCards()}
                    />
                </div>
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <SliderCards
                        addClass='slider-items-example'
                        displayDotsIndex={true}
                        paginationType={2}
                        previous='«'
                        next='»'
                        buttonsAlwaysVisible={true}
                        data={this.getCards()}
                    />
                </div>
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <SliderCards
                        addClass='slider-items-example'
                        autoplay={true}
                        autoplayTime={5000}
                        data={this.getCards()}
                    />
                </div>
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '300px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <SliderCards
                        addClass='slider-items-example'
                        autoplay={true}
                        autoplayTime={5000}
                        animationTime='20'
                        data={this.getCards()}
                    />
                </div>
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));