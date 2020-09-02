import * as React from 'react';

import ReactDOM from 'react-dom';

import { Container, SideBar, MenuClickHorizontal } from './react-revolution/public/react-revolution';

//import { Breadcrumbs } from 'react-revolution';

import './react-revolution/sass/rr-container.scss';

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

    callback(e) {
        console.log(e);
    }

    render() {
        return (
            <Container
                persistUserSelection={false} // set local sotrage on click
                clearPersistUserSelection={true} // do not remove the local storage on component did mount
                sidebarMinifiedAt={1024}
                sidebarMaxifiedAt={720}
                displayMinifyMaxifyIcon={true}
                minify={false}
                autopilot={true}
                toggleMenuHtml={
                    <i className="fas fa-bars " />
                }
                closeMenuHtml={
                    <i className="fas fa-angle-left" />
                }
                moduleSidebar={
                    <SideBar
                        image={<img alt="image" src='./public/images/icon-48.png' />}
                        textLong='text long'
                        textShort='text short'
                        href={undefined}
                        globalStyle={true} // load css for react-revolution globally
                        moduleMenu={
                            <MenuClickHorizontal
                                reactRouter={false}
                                animation='height'
                                dropDown={
                                    (
                                        <i className="fas fa-angle-down dropDownIcon"></i>
                                    )
                                }
                                data={
                                    [
                                        {
                                            icon: <i className="fas fa-golf-ball"></i>,
                                            text: 'Golf',
                                            data: [
                                                {
                                                    text: 'Golf 1'
                                                },
                                                {
                                                    text: 'Golf 2'
                                                }
                                            ]
                                        },
                                        {
                                            icon: <i className="fas fa-pump-soap"></i>,
                                            text: 'Pump Soap',
                                            data: [
                                                {
                                                    text: 'Soap 1'
                                                },
                                                {
                                                    text: 'Soap 2'
                                                }
                                            ]
                                        },
                                        {
                                            icon: <i className="fas fa-puzzle-piece"></i>,
                                            text: 'Puzzle',
                                            data: [
                                                {
                                                    text: 'Puzzle 1'
                                                },
                                                {
                                                    text: 'Puzzle 2'
                                                }
                                            ]
                                        },
                                    ]
                                }
                            />
                        }
                    />
                }
                headerProps={undefined}
                headerData={
                    (
                        <p>
                            HEADER
                        </p>
                    )
                }
                contentProps={undefined}
                contentData={
                    (
                        <p>
                            CONTENT
                        </p>
                    )
                }
                footerProps={undefined}
                footerData={
                    (
                        <p>
                            FOOTER
                        </p>
                    )
                }
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));