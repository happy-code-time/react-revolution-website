import React from 'react';
import ReactDOM from 'react-dom';
import { Slider, SliderCards, SliderItems } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-slider.scss';
import './react-revolution/_Sass/rr-slider-cards.scss';
import './react-revolution/_Sass/rr-slider-items.scss';

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
                <div
                    style={
                        {
                            width: '100%',
                            maxWidth: '1024px',
                            height: '500px',
                            margin: '5vh auto'
                        }
                    }
                >
                    <Slider
                        staticData={
                            <div className='user-actions'>
                                <style dangerouslySetInnerHTML={{
                                    __html: ` 
                                        .static-data{
                                            top:10px;
                                            right:20px;                                            
                                        }                                        
                                        .static-data i {
                                            color: red;
                                            cursor: pointer;
                                        }
                                    `}}
                                />
                                <i
                                    className={`${this.state.like ? 'fas fa-heart heart-like' : 'far fa-heart heart-like'}`}
                                    onClick={() => {
                                        this.setState({
                                            like: !this.state.like
                                        })
                                    }}
                                ></i>
                            </div>
                        }
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
                    <SliderCards
                        staticData={
                            <div className='user-actions'>
                                <style dangerouslySetInnerHTML={{
                                    __html: ` 
                                        .static-data{
                                            top:10px;
                                            right:20px;                                            
                                        }                                        
                                        .static-data i {
                                            color: red;
                                            cursor: pointer;
                                        }
                                    `}}
                                />
                                <i
                                    className={`${this.state.like ? 'fas fa-heart heart-like' : 'far fa-heart heart-like'}`}
                                    onClick={() => {
                                        this.setState({
                                            like: !this.state.like
                                        })
                                    }}
                                ></i>
                            </div>
                        }
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
                        staticData={
                            <div className='user-actions'>
                                <style dangerouslySetInnerHTML={{
                                    __html: ` 
                                                .static-data{
                                                    top:10px;
                                                    right:20px;                                            
                                                }                                        
                                                .static-data i {
                                                    color: red;
                                                    cursor: pointer;
                                                }
                                            `}}
                                />
                                <i
                                    className={`${this.state.like ? 'fas fa-heart heart-like' : 'far fa-heart heart-like'}`}
                                    onClick={() => {
                                        this.setState({
                                            like: !this.state.like
                                        })
                                    }}
                                ></i>
                            </div>
                        }
                        addClass='slider-items-example'
                        data={this.getCards()}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));