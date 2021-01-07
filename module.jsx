import React from 'react';
import ReactDOM from 'react-dom';
import { SliderCards } from '../react-revolution/react-revolution';
import './react-revolution/_Sass/rr-slider-cards.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getCards = this.getCards.bind(this);
    }

    getCards() {
        const items = 11;
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
                    )
                }
            );
        }

        return data;
    }

    render() {
        return (
            <div
                style={
                    {
                        width: '100%',
                        maxWidth: '1140px',
                        height: '500px',
                        margin: '5vh auto'
                    }
                }
            >
                <SliderCards
                    addClass='slider-items-example'
                    data={this.getCards()}
                    buttonsAlwaysVisible={true}
                    itemsS={2} // two items on resizeS (768px)
                    itemsL={3} // four items on resizeL (820)
                    itemsXL={3} // five items on resizeXL (1140)
                    slideItemsS={2}
                    slideItemsL={3}
                    slideItemsXL={3}
                    cardWidthS={200}
                    cardWidthL={250}
                    cardWidthXL={330}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));