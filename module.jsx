import React from 'react';
import ReactDOM from 'react-dom';
import { Picture404, Container, SideBar, MenuHeight } from '../react-revolution/react-revolution';
import './react-revolution/_Sass/rr-picture-404.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){       
        // setTimeout( () => {
        //     window.location.href = 'http://localhost:3000/#/dddd';
        // }, 1000);

        // setTimeout( () => {
        //     window.location.href = 'http://localhost:3000/#/';
        // }, 5000);

        // setTimeout( () => {
        //     window.location.href = 'http://localhost:3000/#/dddd';
        // }, 10000);

        // setTimeout( () => {
        //     window.location.href = 'http://localhost:3000/#/dddde';
        // }, 15000);

        // setTimeout( () => {
        //     window.location.href = 'http://localhost:3000/#/ddddk';
        // }, 18000);

        // setTimeout( () => {
        //     window.location.href = 'http://localhost:3000/#/';
        // }, 22000);

        // setTimeout( () => {
        //     window.location.href = 'http://localhost:3000/#/b';
        // }, 25000);
    }

    render() {
        return (
            <div>
                <Container
                    addClass='container-example'
                    minifyAt={1024}
                    maxifyAt={720}
                    hideAt={420}
                    minifySidebarOn={
                        [
                            'http://localhost:3000/',
                            'http://localhost:3000/#/'
                        ]
                    }
                    displayMinifyMaxifyIcon={true}
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
                            moduleMenu={
                                <MenuHeight
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
                                                        icon: <i className="fas fa-golf-ball"></i>,
                                                        text: 'Golf 1',
                                                        href: 'http://localhost:3000/#/hallo'
                                                    },
                                                    {
                                                        icon: <i className="fas fa-golf-ball"></i>,
                                                        text: 'Golf 2'
                                                    }
                                                ]
                                            },
                                            {
                                                icon: <i className="fas fa-pump-soap"></i>,
                                                text: 'Pump Soap',
                                                data: [
                                                    {
                                                        icon: <i className="fas fa-pump-soap"></i>,
                                                        text: 'Soap 1'
                                                    },
                                                    {
                                                        icon: <i className="fas fa-pump-soap"></i>,
                                                        text: 'Soap 2'
                                                    }
                                                ]
                                            },
                                            {
                                                icon: <i className="fas fa-pizza-slice"></i>,
                                                text: 'Pizza',
                                                data: [
                                                    {
                                                        icon: <i className="fas fa-pizza-slice"></i>,
                                                        text: 'Pizza 1'
                                                    },
                                                    {
                                                        icon: <i className="fas fa-pizza-slice"></i>,
                                                        text: 'Pizza 2'
                                                    }
                                                ]
                                            },
                                            {
                                                icon: <i className="fas fa-ice-cream"></i>,
                                                text: 'Ice',
                                                data: [
                                                    {
                                                        icon: <i className="fas fa-ice-cream"></i>,
                                                        text: 'Ice 1'
                                                    },
                                                    {
                                                        icon: <i className="fas fa-ice-cream"></i>,
                                                        text: 'Ice 2'
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
                    headerData={undefined}
                    contentProps={undefined}
                    contentData={<div className='CONTENT'>
                        <Picture404
                            link={
                                {
                                    text: 'Home',
                                    href: '/'
                                }
                            }
                            imagePath='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        />
                    </div>}
                    footerProps={undefined}
                    footerData={<div className='FOOTER' />}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));