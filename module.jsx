import React from 'react';
import ReactDOM from 'react-dom';
import { ImageBanner } from './react-revolution/react-revolution';
// import './react-revolution/_Sass/react-revolution.scss';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component 
{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ImageBanner 
                image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg' 
                imageAsSource={true} // by default
                boxData={
                    (
                        <span>
                            <h1>
                                Lorem ipsum
                            </h1>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor 
                                invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam 
                                voluptua. 
                            </p>
                        </span>
                    )
                }
            /> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));