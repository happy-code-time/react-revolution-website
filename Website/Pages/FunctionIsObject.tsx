import React from 'react';
//@ts-ignore
import { isObject, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { isObject } from 'react-revolution';
//import isObject from 'react-revolution/Functions/isObject';

const x = {};

if(isObject(x)){
    // is object
}
else{
    // not an object
}`;

const jsExample1 = `isObject({}); // true
isObject(8); // false
isObject(); // false
isObject(''); // false`;


class _FunctionIsObject extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'isObject',
                description: trans('isObject.example'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: `isObject({}) = ${JSON.stringify(isObject({}))}`,
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
            resolve(buildModulesJsx(this.examples[this.countCallbacks]));
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
                    data={buildModulesJsx(this.examples[0])} // Default as the first example
                    fireScrollEvent={250}
                    fireScrollBack={true} 
                />
            </div>
        );
    }
};

export default _FunctionIsObject;