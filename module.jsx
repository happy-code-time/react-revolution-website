import React from 'react';
import ReactDOM from 'react-dom';
import { ContainerCompact } from './react-revolution/react-revolution';
// import './react-revolution/_Sass/react-revolution.scss';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component 
{
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show(props){
        console.info(props);
    }

    hide(props){
        console.info(props);
    }

    render() {

        return (
            <ContainerCompact 
                minifySidebarOn={
                    [
                        '#/'
                    ]
                }
                headerProps={
                    {
                        title: '1'
                    }
                }
                headerData={
                    <p>Header</p>
                }
                contentProps={
                    {
                        title: 'content'
                    }
                }
                contentData={
                    <p>Content</p>
                }
                sidebarProps={
                    {
                        title: 'sidebar'
                    }
                }
                sidebarData={
                    <span>
                        <a href="#/">
                            hide
                        </a>
                        <a href="#/endregion">
                            show
                        </a>
                    </span>
                }
                sidebarWidth={250}
                footerProps={
                    {
                        title: 'sidebar'
                    }
                }
                footerData={
                    <p>Footer</p>
                }
                animationDuration={300}
                hideAt={720}
                callbackShow={this.show}
                callbackShowProps='show'
                callbackHide={this.hide}
                callbackHideProps='hide'
            /> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));