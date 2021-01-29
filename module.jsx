import React from 'react';
import ReactDOM from 'react-dom';
import { SliderItems } from './react-revolution/react-revolution';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            like: false
        };
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
                                font-size: 3rem; 
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
                    displayDots={true}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));