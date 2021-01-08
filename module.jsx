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
                        displayDotsIndex={false}
                        data={
                            [
                                {
                                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    dot: '😇',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    dot: '😇',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    dot: '😇',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    dot: '😇',
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
                        dotsInside={false}
                        data={
                            [
                                {
                                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    dot: '😇',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    dot: '😇',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    dot: '😇',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    dot: '😇',
                                },
                            ]
                        }
                    />
                </div>
                {/* ITEMS */}
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
                        data={this.getCards()}
                        displayDotsIndex={true}
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
                        data={this.getCards('😇')}
                        displayDotsIndex={false}
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
                        data={this.getCards('😷')}
                        dotsInside={false}
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
                        data={this.getCards()}
                        displayDots={false}
                    />
                </div>
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
                        data={this.getCards()}
                        displayDotsIndex={true}
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
                        data={this.getCards('😇')}
                        displayDotsIndex={false}
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
                        data={this.getCards('😷')}
                        dotsInside={false}
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
                        data={this.getCards()}
                        displayDots={false}
                        // Resize listener lower then 768
                        resizeS={768}
                        // Resize listener lower then 1024
                        resizeL={1024}
                        // Resize listener lower then 1260
                        resizeXL={1260}
                        // Items on each slide on screen lower then 768
                        itemsS={2}
                        // Items on each slide on screen lower then 1024
                        itemsL={3}
                        // Items on each slide on screen lower then 1260
                        itemsXL={3}
                        // Items to slide on screen lower then 768
                        slideItemsS={2}
                        // Items to slide on screen lower then 1024
                        slideItemsL={3}
                        // Items to slide on screen lower then 1260
                        slideItemsXL={3}
                    />
                </div>
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));