import * as React from 'react';

import ReactDOM from 'react-dom';

import { ReadMoreCallback } from './react-revolution/public/react-revolution';

//import { Breadcrumbs } from 'react-revolution';

import './react-revolution/sass/rr-read-more-callback.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    callbackResolve(clickEvent, customData){
        return new Promise( (resolve, reject) => {

            setTimeout( () => {
                resolve(
                    `
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua.`
                );
            }, 2000);
        });
    }

    callbackReject(clickEvent, customData){
        return new Promise( (resolve, reject) => {

            setTimeout( () => {
                reject();
            }, 2000);
        });
    }

    render() {
        return (
            <ReadMoreCallback
                animation='height'
                data={`
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua.`
                }
                toggleForwards={
                    (
                        <a 
                            href='#' 
                            style={
                                {
                                    display: 'inline'
                                }
                            }>
                            ...
                        </a>
                    )
                }
                toggleBackwards={
                    (
                        <button>
                            read less
                        </button>
                    )
                }
                callback={this.callbackResolve}
                callbackProps={'my custom data'}
                loading={
                    (
                        <img src='./public/images/ajax-loader.gif'/>
                    )
                }
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));