import React from 'react';

import ReactDOM from 'react-dom';

import { DarkLines404, LoadOnScroll, TimeLine, uuid } from './react-revolution/public/react-revolution';

import './react-revolution/sass/rr-dark-lines-404.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <span>
                <div className="rr-revolution-loadonscroll-example">
                    <DarkLines404
                        boomAfter={1500}
                        restoreAfter={3}
                        timeouts={3}
                        goText='Remove 4 text items'
                        finishedText='YOU ARE AWESOME !'
                        link={
                            {
                                reactRouter: true,
                                text: '404', //trans('back_404'),
                                href: '/'
                            }
                        }
                    />
                </div>
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));