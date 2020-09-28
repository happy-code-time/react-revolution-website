import * as React from 'react';

import ReactDOM from 'react-dom';

import { Articles } from './react-revolution/public/react-revolution';

//import { Breadcrumbs } from 'react-revolution';

import './react-revolution/sass/rr-articles.scss';

class App extends React.Component 
{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Articles
                animation='height'
                closeOnClickOutside={false}
                itemsPerLine={2}
                mediaBreak={1024}
                data={
                    [
                        {
                            // border : {
                            //     site: 'left',
                            //     width: 5,
                            //     color: 'dodgerblue'
                            // },
                            title: 'Lorem Ipsum',
                            titleProps: {},
                            image: '',
                            imageProps: {},
                            imageData: (
                                <p>
                                    dokafods
                                </p>
                            ),
                            text: `
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam voluptua.
                            `,
                            textProps: {},
                            dataToggle: (
                                <span>
                                    affdsfdsfds
                                    fds
                                    fdsf
                                    ds
                                    fdsfds
                                    fdsfdsf
                                    dsf
                                    dsffds
                                    fdsfdsdsf
                                    dsffdsf
                                    dsfds
                                </span>
                            ) 
                        },
                        {
                            title: 'Lorem Ipsum',
                            titleProps: {},
                            image: '',
                            imageProps: {},
                            imageData: undefined,
                            text: `
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam voluptua.
                            `,
                            textProps: {},
                            dataToggle: (
                                <span>
                                    affdsfdsfds
                                    fds
                                    fdsf
                                    ds
                                    fdsfds
                                    fdsfdsf
                                    dsf
                                    dsffds
                                    fdsfdsdsf
                                    dsffdsf
                                    dsfds
                                </span>
                            ) 
                        },
                        {
                            title: 'Lorem Ipsum',
                            titleProps: {},
                            image: '',
                            imageProps: {},
                            imageData: undefined,
                            text: `
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam voluptua.
                            `,
                            textProps: {},
                            dataToggle: (
                                <span>
                                    affdsfdsfds
                                    fds
                                    fdsf
                                    ds
                                    fdsfds
                                    fdsfdsf
                                    dsf
                                    dsffds
                                    fdsfdsdsf
                                    dsffdsf
                                    dsfds
                                </span>
                            ) 
                        },
                        {
                            title: 'Lorem Ipsum',
                            titleProps: {},
                            image: '',
                            imageProps: {},
                            imageData: undefined,
                            text: `
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam voluptua.
                            `,
                            textProps: {},
                            dataToggle: (
                                <span>
                                    affdsfdsfds
                                    fds
                                    fdsf
                                    ds
                                    fdsfds
                                    fdsfdsf
                                    dsf
                                    dsffds
                                    fdsfdsdsf
                                    dsffdsf
                                    dsfds
                                </span>
                            ) 
                        }
                    ]
                }
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));