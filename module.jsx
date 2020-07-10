import * as React from 'react';

import ReactDOM from 'react-dom';

import { MenuClickHorizontal } from './react-revolution/public/react-revolution';

/**
 * Render it to the html while testing
 */

import './react-revolution/sass/rr-menu-click-horizontal.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    text: 'Home',
                    icon: <i className='fas fa-flag-checkered' />,
                    data: [
                        {
                            text: 'Home',
                            href: `#/`,
                        },
                        {
                            text: 'Home',
                            href: `#/home`,
                        },
                        {
                            text: 'Home',
                            href: `#/ala`,
                        },
                        {
                            text: 'Home',
                            href: `#/`,
                        },
                        {
                            text: 'Home',
                            href: `#/home`,
                        },
                        {
                            text: 'Home',
                            href: `#/ala`,
                        },
                        {
                            text: 'Home',
                            href: `#/`,
                        },
                        {
                            text: 'Home',
                            href: `#/home`,
                        },
                        {
                            text: 'Home',
                            href: `#/ala`,
                        }
                    ]
                }
            ]
        }
    }

    render() {
        const { data } = this.state;

        return (
            <span>
                <MenuClickHorizontal
                    animation='height' // height, scale, opacity
                    data={data}
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));