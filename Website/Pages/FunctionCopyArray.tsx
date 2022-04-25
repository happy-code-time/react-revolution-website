import React from 'react';
//@ts-ignore
import { copyArray, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';

const codeExample1 = `import { copyArray } from 'react-revolution';
//import copyArray from 'react-revolution/Functions/copyArray';

const a = [ 'David', 'Janitzek' ];

// Create new variable
const b = copyArray(a);

// Create new variable
const c = [];
const d = copyArray(a, c); // [ 'David', 'Janitzek' ]

// Create new variable
const e = [ 1, 2 ];
copyArray(a, e); // [ 1, 2, 'David', 'Janitzek' ]`;

class _FunctionCopyArray extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'copyArray',
                description: trans('copyArray.example'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: codeExample1,
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

export default _FunctionCopyArray;