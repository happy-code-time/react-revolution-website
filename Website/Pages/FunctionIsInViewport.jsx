import React from 'react';
import { LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { isInViewport } from 'react-revolution';
//import isInViewport from 'react-revolution/Functions/isInViewport';

const node = document.getElementById('xxxxx') || this.nodeReference || this.nodeReference.current

const yAxisPixel = 0; // Add custom Y-axis pixel value

if(isInViewport(node, yAxisPixel)){
    // is visible
}
else{
    // not visible
}`;

class _FunctionIsInViewport extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'isInViewport',
                description: trans('isInViewport.example'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: `isInViewport(node, 100);`,
                isFunction: true
            },
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
                    fireScrollEvent={250}
                    fireScrollBack={true} 
                />
            </div>
        );
    }
};

export default _FunctionIsInViewport;