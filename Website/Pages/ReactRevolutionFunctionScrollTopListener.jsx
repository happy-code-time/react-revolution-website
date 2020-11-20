import React from 'react';
import { LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { scrollTopListener } from 'react-revolution';`;

const jsExample1 = `componentDidMount() {
    const scrollTopTime = 0;

    scrollTopListener(scrollTopTime);

    /**
     * Remove the scrollTop Listener after 5 seconds
     */
    setTimeout( () => {
        scrollTopListener(scrollTopTime, '', true);
    }, 5000);
}`;

class ReactRevolutionFunctionScrollTopListener extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'scrollTopListener',
                description: trans('description_scrollTopListener'),
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

export default ReactRevolutionFunctionScrollTopListener;