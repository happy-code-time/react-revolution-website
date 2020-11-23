import React from 'react';
import ReactDOM from 'react-dom';
import disableHtmlScroll from './react-revolution/Functions/disableHtmlScroll';
import enableHtmlScroll from './react-revolution/Functions/enableHtmlScroll';
import uuid from './react-revolution/Functions/uuid';
import urlExtract from './react-revolution/Functions/urlExtract';
import scrollTopListener from './react-revolution/Functions/scrollTopListener';
import './react-revolution/_Sass/rr-global-messages.scss';

class App extends React.Component 
{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        disableHtmlScroll();

        setTimeout(() => {
            enableHtmlScroll();
            document.documentElement.scrollTop = 200;
            scrollTopListener(0);

            setTimeout(() => {
                window.location.href = 'http://localhost:3000/#/asdasdas';
            }, 1000);
        }, 3000);
    }

    uuids(){
        const itmes = [];

        for(let x = 0; x  <= 100; x++){
            itmes.push(`${uuid()}\n`);
        }

        return itmes;
    }

    render() {

        return (
            <div>
               {
                   `${JSON.stringify(urlExtract())} \n\n${this.uuids()}`
               }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));