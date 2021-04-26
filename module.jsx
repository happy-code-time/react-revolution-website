import React from 'react';
import ReactDOM from 'react-dom';
import { ContainerSidebar, SideBar, Menu, MenuHeight } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-container-sidebar.scss';
import './react-revolution/_Sass/rr-menu.scss';
// import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleAgeFilter = this.handleAgeFilter.bind(this);
    }

    /**
     * @param {int} min 
     * @param {int} max 
     * @param {mixed} callbackProps 
     */
    handleAgeFilter(min, max, callbackProps) {
        console.info(callbackProps, ':', min, max);
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
            <span>

<ContainerSidebar
    sidebarWidth={250} // default value
    // animationDuration={300}
    addClass='container-example'
    hideAt={1024}
    minifySidebarOn={
        [
            ''
        ]
    }
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
                <Menu
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
            }
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
            </span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));