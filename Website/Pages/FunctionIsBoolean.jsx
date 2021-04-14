import React from 'react';
import { isBoolean, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { isBoolean } from 'react-revolution';
//import isBoolean from 'react-revolution/Functions/isBoolean';

const x = false;

if(isBoolean(x)){
    // is boolean
}
else{
    // not an boolean
}`;

const jsExample1 = `isBoolean(true); // true
isBoolean(); // false
isBoolean(1); // false
isBoolean([]); // false`;


class _FunctionIsBoolean extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'isBoolean',
                description: trans('isBoolean.example'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: `isBoolean(true) = ${JSON.stringify(isBoolean(true))}`,
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
                    fireScrollEvent={250}
                    fireScrollBack={true} 
                />
            </div>
        );
    }
};

export default _FunctionIsBoolean;