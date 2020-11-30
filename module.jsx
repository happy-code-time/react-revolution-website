import React from 'react';
import ReactDOM from 'react-dom';
import { Container, SideBar, MenuHeight } from '../react-revolution/react-revolution';
import './react-revolution/_Sass/rr-container.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minifySidebard: true,
          };
    }

    componentDidMount(){
        const { minifySidebard } = this.state;

        if ('#/' == window.location.hash && !minifySidebard) {
            return this.setState({
              minifySidebard: true
            });
          }
      
          if ('#/' !== window.location.hash && minifySidebard) {
            this.setState({ minifySidebard: false });
          }
    }

    render() {
        const { minifySidebard } = this.state;
        const host = '';

        return (
            <div>

                <Container
                    addClass='container-example'
                    sidebarMinifiedAt={1024}
                    sidebarMaxifiedAt={720}
                    displayMinifyMaxifyIcon={true}
                    minify={minifySidebard}
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
                            globalStyle={true}
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
                                                        text: 'Golf 1'
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
                    contentData={<div className='CONTENT' />}
                    footerProps={undefined}
                    footerData={<div className='FOOTER' />}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));