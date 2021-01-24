import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, StepsGeneratorDragDrop } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

const codeExample1 = `import { StepsGeneratorDragDrop } from 'react-revolution';
// import StepsGeneratorDragDrop from 'react-revolution/StepsGeneratorDragDrop';

<StepsGeneratorDragDrop
    callback={this.logData}
    useInput={true}
    callbackProps='any'
    removeStep={
        (
            <span
                style={
                    {
                        display: 'inline-block',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        background: '#FF4459',
                        margin: '5px 10px',
                        color: 'rgb(255,255,255)'
                    }
                }
            >
                remove step
            </span>
        )
    }
    removeStepAtTop={true}
    defaultSteps={3}
    addStep={
        (
            <span
                style={
                    {
                        display: 'inline-block',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        background: 'dodgerblue',
                        margin: '5px 10px',
                        color: 'rgb(255,255,255)'
                    }
                }
            >
                add new step
            </span>
        )
    }
    displayStepCount={true}
    addNewStepOn={1} // defaultSteps - addNewStepOn, 0 = ignore step adding by the component
    submit={
        <span
            style={
                {
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    background: 'rgb(71,180,118)',
                    margin: '5px 10px',
                    color: 'rgb(255,255,255)'
                }
            }
        >
            submit
        </span>
    }
    submitCallback={this.submitSteps}
    submitCallbackProps='any'
    resetOnSubmit={true}
    placeholder='PLACEHOLDER' 
/>`;


const jsExample1 = `constructor(props) {
    super(props);
    this.logData = this.logData.bind(this);
    this.submitSteps = this.submitSteps.bind(this);
}

logData(callbackProps, steps) {
    console.info(steps);
}

submitSteps(submitStepsProps, steps) {
    console.info(steps);
}`;


class _StepsGeneratorDragDrop extends React.Component {

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.logData = this.logData.bind(this);
        this.submitSteps = this.submitSteps.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'StepsGeneratorDragDrop',
                description: trans('stepGenDragDrop.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <StepsGeneratorDragDrop
                        callback={this.logData}
                        useInput={true}
                        callbackProps='any'
                        removeStep={
                            (
                                <span
                                    style={
                                        {
                                            display: 'inline-block',
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            background: '#FF4459',
                                            margin: '5px 10px',
                                            color: 'rgb(255,255,255)'
                                        }
                                    }
                                >
                                    remove step
                                </span>
                            )
                        }
                        removeStepAtTop={true}
                        defaultSteps={3}
                        addStep={
                            (
                                <span
                                    style={
                                        {
                                            display: 'inline-block',
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            background: 'dodgerblue',
                                            margin: '5px 10px',
                                            color: 'rgb(255,255,255)'
                                        }
                                    }
                                >
                                    add new step
                                </span>
                            )
                        }
                        displayStepCount={true}
                        addNewStepOn={1} // defaultSteps - addNewStepOn, 0 = ignore step adding by the component
                        submit={
                            <span
                                style={
                                    {
                                        display: 'inline-block',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        background: 'rgb(71,180,118)',
                                        margin: '5px 10px',
                                        color: 'rgb(255,255,255)'
                                    }
                                }
                            >
                                submit
                            </span>
                        }
                        submitCallback={this.submitSteps}
                        submitCallbackProps='any'
                        resetOnSubmit={true}
                        placeholder='PLACEHOLDER' 
                    />
                )
            },
        ];
    }

    logData(callbackProps, steps) {
        console.info(steps);
    }
    
    submitSteps(submitStepsProps, steps) {
        console.info(steps);
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
                <h1 className="h1-title border-none my-3">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='rr-table-website'
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
                                    key: 'callback',
                                    values: 'stepGen.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'stepGen.callbackProps'
                                },
                                {
                                    key: 'defaultSteps',
                                    values: 'stepGen.defaultSteps'
                                },
                                {
                                    key: 'addNewStepOn',
                                    values: 'stepGen.addNewStepOn'
                                },
                                {
                                    key: 'addStep',
                                    values: 'stepGen.addStep'
                                },
                                {
                                    key: 'removeStep',
                                    values: 'stepGen.removeStep'
                                },
                                {
                                    key: 'stepPrefix',
                                    values: 'stepGen.stepPrefix'
                                },
                                {
                                    key: 'displayStepCount',
                                    values: 'stepGen.displayStepCount'
                                },
                                {
                                    key: 'useInput',
                                    values: 'stepGen.useInput'
                                },
                                {
                                    key: 'onEnter',
                                    values: 'stepGen.onEnter'
                                },
                                {
                                    key: 'onEnterProps',
                                    values: 'stepGen.onEnterProps'
                                },
                                {
                                    key: 'onEsc',
                                    values: 'stepGen.onEsc'
                                },
                                {
                                    key: 'onEscProps',
                                    values: 'stepGen.onEscProps'
                                },
                                {
                                    key: 'removeStepAlignTop',
                                    values: 'stepGen.removeStepAlignTop'
                                },
                                {
                                    key: 'submit',
                                    values: 'stepGen.submit'
                                },
                                {
                                    key: 'submitCallback',
                                    values: 'stepGen.submitCallback'
                                },
                                {
                                    key: 'submitCallbackProps',
                                    values: 'stepGen.submitCallbackProps'
                                },
                                {
                                    key: 'resetOnSubmit',
                                    values: 'stepGen.resetOnSubmit'
                                },
                                {
                                    key: 'placeholder',
                                    values: 'stepGenDragDrop.placeholder'
                                },
                                {
                                    key: 'placeholderPosition',
                                    values: 'stepGenDragDrop.placeholderPosition'
                                },
                            ],
                            'rr-steps-generator-drag-drop'
                        )
                    }
                />
            </div>
        );
    }
};

export default _StepsGeneratorDragDrop;


