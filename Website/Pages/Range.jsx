import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, Range } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const code1 = `import { Range } from 'react-revolution';
// import Range from 'react-revolution/Range';

<Range
    size='xs'
    min={0}
    max={130}
    minMaxInput={false}
    callback={this.handleAgeFilter}
    callbackProps='user_age'
/>`;

const code2 = `import { Range } from 'react-revolution';
// import Range from 'react-revolution/Range';

<Range
    size='s'
    min={0}
    max={130}
    callback={this.handleAgeFilter}
    callbackProps='user_age'
/>`;

const code3 = `import { Range } from 'react-revolution';
// import Range from 'react-revolution/Range';

<Range
    size='l'
    min={0}
    max={130}
    minMaxInput={false}
    callback={this.handleAgeFilter}
    callbackProps='user_age'
    backgroundLine='#72777a'
    backgroundMinMax='#49b095'
/>`;

const code4 = `import { Range } from 'react-revolution';
// import Range from 'react-revolution/Range';

<Range
    size='xl'
    min={30}
    max={10}
    callback={this.handleAgeFilter}
    callbackProps='user_age'
    backgroundMinMax='dodgerblue'
/>`;

const code5 = `import { Range } from 'react-revolution';
// import Range from 'react-revolution/Range';

<Range
    size='xl'
    min={0}
    max={100}
    minMaxInput={true}
    callback={this.handleAgeFilter}
    callbackProps='user_livetime'
    // Type float
    format='float'
    // Number.toFixed(1)
    toFixed={1}
    // Input field is editable
    minMaxInputReadonly={true}
    backgroundLine='#23049d'
    backgroundMinMax='#aa2ee6'
/>`;

const code6 = `import { Range } from 'react-revolution';
// import Range from 'react-revolution/Range';

<Range
    size='xl'
    min={0}
    max={100}
    minMaxInput={true}
    callback={this.handleAgeFilter}
    callbackProps='user_livetime'
    // Type float
    format='float'
    // Number.toFixed(1)
    toFixed={1}
    // Input field is not editable
    minMaxInputReadonly={false}
    backgroundLine='#2b2e4a'
    backgroundMinMax='#e84545'
/>`;

const code7 = `import { Range } from 'react-revolution';
// import Range from 'react-revolution/Range';

<Range
    size='xl'
    min={0}
    max={100}
    minMaxInput={true}
    callback={this.handleAgeFilter}
    callbackProps='user_livetime'
    // Type float
    format='float'
    // Number.toFixed(2)
    toFixed={2}
    // Input field is not editable
    minMaxInputReadonly={false}
    backgroundLine='#393e46'
    backgroundMinMax='#00adb5'
/>`;

const jsCode = `constructor(props) {
    super(props);
    this.handleAgeFilter = this.handleAgeFilter.bind(this);
}

/**
 * @param {int} min 
 * @param {int} max 
 * @param {mixed} callbackProps 
 */
handleAgeFilter(min, max, callbackProps) 
{
    console.clear();
    console.info('Filter type: ', callbackProps, '(min: ', min, ', max: ', max, ')');
}`;

class _Range extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Range',
                description: 'Range with x-small size and min max values as readonly. Values passed into the callback function are visible in the console output.',
                reactTextBefore: '',
                react: code1,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Range
                        size='xs'
                        min={0}
                        max={130}
                        minMaxInput={false}
                        callback={this.handleAgeFilter}
                        callbackProps='user_age'
                    />
                )
            },
            {
                title: 'Range',
                description: 'Range with x-small size and min max values as editable input fields.',
                reactTextBefore: '',
                react: code2,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Range
                        size='s'
                        min={0}
                        max={130}
                        callback={this.handleAgeFilter}
                        callbackProps='user_age'
                    />
                )
            },
            {
                title: 'Range',
                description: 'Range with large size and min max values as readonly with an custom background.',
                reactTextBefore: '',
                react: code3,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Range
                        size='l'
                        min={0}
                        max={130}
                        minMaxInput={false}
                        callback={this.handleAgeFilter}
                        callbackProps='user_age'
                        backgroundLine='#72777a'
                        backgroundMinMax='#49b095'
                    />
                )
            },
            {
                title: 'Range',
                description: 'Range with x-large size and min max values as readonly.',
                reactTextBefore: '',
                react: code4,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Range
                        size='xl'
                        min={30}
                        max={10}
                        callback={this.handleAgeFilter}
                        callbackProps='user_age'
                        backgroundMinMax='dodgerblue'
                    />
                )
            },
            {
                title: 'Range',
                description: 'Input fields as READONLY and format type "float" and to fixed 1.',
                reactTextBefore: '',
                react: code5,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Range
                        size='xl'
                        min={0}
                        max={100}
                        minMaxInput={true}
                        callback={this.handleAgeFilter}
                        callbackProps='user_livetime'
                        // Type float
                        format='float'
                        // Number.toFixed(1)
                        toFixed={1}
                        // Input field is editable
                        minMaxInputReadonly={true}
                        backgroundLine='#23049d'
                        backgroundMinMax='#aa2ee6'
                    />
                )
            },
            {
                title: 'Range',
                description: 'Input fields as EDITABLE and format type "float" and to fixed 1.',
                reactTextBefore: '',
                react: code6,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Range
                        size='xl'
                        min={0}
                        max={100}
                        minMaxInput={true}
                        callback={this.handleAgeFilter}
                        callbackProps='user_livetime'
                        // Type float
                        format='float'
                        // Number.toFixed(1)
                        toFixed={1}
                        // Input field is not editable
                        minMaxInputReadonly={false}
                        backgroundLine='#2b2e4a'
                        backgroundMinMax='#e84545'
                    />
                )
            },
            {
                title: 'Range',
                description: 'Input fields as READONLY and format type "float" and to fixed 2.',
                reactTextBefore: '',
                react: code7,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Range
                        size='xl'
                        min={0}
                        max={100}
                        minMaxInput={true}
                        callback={this.handleAgeFilter}
                        callbackProps='user_livetime'
                        // Type float
                        format='float'
                        // Number.toFixed(2)
                        toFixed={2}
                        // Input field is not editable
                        minMaxInputReadonly={false}
                        backgroundLine='#393e46'
                        backgroundMinMax='#00adb5'
                    />
                )
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

    /**
     * @param {int} min 
     * @param {int} max 
     * @param {mixed} callbackProps 
     */
    handleAgeFilter(min, max, callbackProps) 
    {
        console.clear();
        console.info('Filter type: ', callbackProps, '(min: ', min, ', max: ', max, ')');
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
                                <StyleImplementation 
                    className={this.constructor.name}
                />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='Table-website'
                    keysToRead={
                        [
                            'key', 'value', 'type', 'default'
                        ]
                    }
                    title={
                        [
                            trans('table.title.key'), trans('table.title.description'), trans('table.title.type'), trans('table.title.default')
                        ]
                    }
                    data={
                        buildTableKeysStructure(
                            [
                                {
                                    key: 'id',
                                    values: 'id'
                                },
                                {
                                    key: 'defaultClass',
                                    values: 'class'
                                },
                                {
                                    key: 'addClass',
                                    values: 'addClass'
                                },
                                {
                                    key: 'min',
                                    values: 'range.min'
                                },
                                {
                                    key: 'max',
                                    values: 'range.max'
                                },

                                {
                                    key: 'size',
                                    values: 'range.size'
                                },
                                {
                                    key: 'callback',
                                    values: 'range.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'range.callbackProps'
                                },
                                {
                                    key: 'minMaxDisplay',
                                    values: 'range.minMaxDisplay'
                                },
                                {
                                    key: 'minMaxInput',
                                    values: 'range.minMaxInput'
                                },
                                {
                                    key: 'minMaxY',
                                    values: 'range.minMaxY'
                                },
                                {
                                    key: 'minInputProps',
                                    values: 'range.minInputProps'
                                },
                                {
                                    key: 'maxInputProps',
                                    values: 'range.maxInputProps'
                                },
                                {
                                    key: 'format',
                                    values: 'range.format'
                                },
                                {
                                    key: 'toFixed',
                                    values: 'range.toFixed'
                                },
                                {
                                    key: 'minMaxInputAutoWidth',
                                    values: 'range.minMaxInputAutoWidth'
                                },
                                {
                                    key: 'callbackOnEnter',
                                    values: 'range.callbackOnEnter'
                                },
                                {
                                    key: 'backgroundLine',
                                    values: 'range.backgroundLine'
                                },
                                {
                                    key: 'backgroundMinMax',
                                    values: 'range.backgroundMinMax'
                                },
                            ],
                            'Range'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Range;

