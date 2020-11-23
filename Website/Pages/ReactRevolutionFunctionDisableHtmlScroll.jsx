import React from 'react';
import { LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { disableHtmlScroll } from 'react-revolution';
//import disableHtmlScroll from 'react-revolution/Functions/disableHtmlScroll';`;

const jsExample1 = `disableHtmlScroll();`;

class ReactRevolutionFunctionDisableHtmlScroll extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'disableHtmlScroll',
                description: trans('description_disableHtmlScroll'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: jsExample1,
                isFunction: true
            }
        ];
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return Promise.resolve('break');
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]), this.countCallbacks + 1);
        });
    }

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={30}
                    fireScrollBack={true} 
                />
            </div>
        );
    }
};

export default ReactRevolutionFunctionDisableHtmlScroll;