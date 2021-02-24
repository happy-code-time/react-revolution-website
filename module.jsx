import React from 'react';
import ReactDOM from 'react-dom';
import { MenuHeight, Container, ContainerPopup, SideBar, PopupHover } from './react-revolution/react-revolution';
// import './react-revolution/_Sass/react-revolution.scss';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    getJsx() {
        return (
            <div
                style={
                    {
                        borderRadius: '5px',
                        boxShadow: '0px 0px 9px rgb(233,233,233)',
                        overflow: 'hidden'
                    }
                }
            >
                <img
                    src='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                    style={
                        {
                            width: '100%',
                            height: '50%',
                        }
                    }
                />
                <p
                    style={
                        {
                            boxSizing: 'border-box',
                            padding: '10px'
                        }
                    }
                >
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat,
                    sed diam voluptua.
                    At vero eos et accusam et
                    justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum
                    dolor sit amet.
                </p>
            </div>
        );
    }

    getMenu() {
        return (
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
                                },
                                {
                                    icon: <i className="fas fa-golf-ball"></i>,
                                    text: 'Golf 2',
                                }
                            ]
                        },
                        {
                            icon: <i className="fas fa-pump-soap"></i>,
                            text: 'Pump Soap',
                            data: [
                                {
                                    icon: <i className="fas fa-pump-soap"></i>,
                                    text: 'Soap 1',
                                },
                                {
                                    icon: <i className="fas fa-pump-soap"></i>,
                                    text: 'Soap 2',
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
        );
    }

    render() {

        return (            
            <ContainerPopup
                align='right'
                addClass='container-example' 
                hideAt={1024} 
                animationDuration={300} 
                minifySidebarOn={ 
                    [ 
            
             
                    ] 
                } 
                toggleMenuHtml={ 
                    ( 
                        <PopupHover 
                            addClass='PopupHoverStyle' 
                            direction='left' 
                            holderData={ 
                                <i className="fas fa-bars " /> 
                            } 
                            displayOnHover={true} 
                            hideOnLeave={true} 
                            animation={true} 
                            contentData={this.getMenu()} 
                        /> 
                    ) 
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
                        moduleMenu={this.getMenu()} 
                    /> 
                } 
                headerProps={undefined} 
                headerData={undefined} 
                contentProps={undefined} 
                contentData={ 
                    ( 
                        <div className='CONTENT'> 
                            CONTENT 
                        </div> 
                    ) 
                } 
                footerProps={undefined} 
                footerData={ 
                    ( 
                        <div className='FOOTER'> 
                            FOOTER 
                        </div> 
                    ) 
                } 
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));