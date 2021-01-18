import React from 'react';
import getAllAvailableModulesNames from '../Functions/getAllAvailableModulesNames';
import trans from '../Translations/trans';

class Components extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            host: ('dev' == process.env.MODE) ? process.env.HOST_DEV : process.env.HOST_PROD,
        }
    }

    links() {
        const allModules = getAllAvailableModulesNames();
        const suggestions = [];

        allModules.map(object => {

            if(-1 === object.name.indexOf('function')){
                suggestions.push(
                    <a
                        key={object.name}
                        href={`${this.state.host}#/${object.link}`}
                    >
                        {
                            object.name
                        }
                    </a>
                );
            }
        });

        suggestions.sort();
        return suggestions;
    }

    render() {
        return (
            <div className="Components">
                <h1 class="title-border">
                    <i class="fas fa-laptop-code"></i>
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