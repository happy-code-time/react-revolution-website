import React from 'react';
import getAllAvailableModulesNames from '../Functions/getAllAvailableModulesNames';
import trans from '../Translations/trans';

class Components extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    private location: string;
    private int: any;

    constructor(props) {
        super(props);

        this.state = {
            host: ('dev' == process.env.MODE) ? process.env.HOST_DEV : process.env.HOST_PROD,
        };

        this.location = window.location.href;
    }

    componentDidMount(): void {
        clearInterval(this.int);

        this.int = setInterval( () => {
            if(this.location !== window.location.href){
                this.location = window.location.href;
                this.forceUpdate();
            }
        }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.int);
    }

    links() {
        const allModules = getAllAvailableModulesNames();
        const suggestions = [];
        const url = this.location.split('/');
        let urlType = url[url.length - 1];
        urlType = urlType.replace(/-/g, '');
        urlType = urlType.toLowerCase();

        allModules.map(object => {

            if (-1 === object.name.indexOf('function')) {

                if (urlType == object.name.toLowerCase()) {
                    suggestions.push(
                        <span
                            key={object.name}
                            className='component-link component-link-active'
                        >
                            {
                                object.name
                            }
                        </span>
                    );
                }
                else {
                    suggestions.push(
                        <a
                            key={object.name}
                            href={`${this.state.host}#/${object.link}`}
                            className='component-link'
                        >
                            {
                                object.name
                            }
                        </a>
                    );
                }
            }
        });

        suggestions.sort();
        return suggestions;
    }

    render() {
        return (
            <div className="Components">
                <h1 className="title-border">
                    <i className="fas fa-laptop-code"></i>
                    {
                        trans('vailableComponents')
                    }
                </h1>
                {
                    this.links()
                }
            </div>
        );
    }
};

export default Components;