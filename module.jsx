import * as React from 'react';

import ReactDOM from 'react-dom';

import { Lightbulb404 } from './react-revolution/public/react-revolution';

//import { Breadcrumbs } from 'react-revolution';

import './react-revolution/sass/rr-lightbulb-404.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setInputValue = this.setInputValue.bind(this);
        this.state = {
            selected: '',
            inputValue: '',
            suggestions: this.randomEmailGenerator(20)
        };
    }

    randomEmailGenerator(items = 10) {
        const generated = [];

        const firstnames = [
            'Bernd', 'David', 'Patrick',
            'Sandra', 'Petra', 'Wioleta',
            'Alex', 'John', 'Johan',
            'Viktor', 'Max'
        ];

        const lastnames = [
            'Musstermann', 'Reiner', 'Klar',
            'Schreiner', 'Jacobson'
        ];

        const domains = [
            'de', 'pl', 'com', 'ru'
        ];

        for (let x = 0; x <= items; x++) {
            const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
            const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
            const domain = domains[Math.floor(Math.random() * domains.length)];
            generated.push(`${firstname}.${lastname}@${domain}`);
        }
        return generated;
    }

    setInputValue(inputValue) {
        this.setState({
            inputValue: inputValue
        });
    }

    callbackSelection(data) {
        console.info(data);
    }

    callback(e){
        console.log(e);
    }

    render() {
        return (
            <Lightbulb404 
                link={
                    {
                        text: '3333',
                        href: '333'
                    }
                }
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));