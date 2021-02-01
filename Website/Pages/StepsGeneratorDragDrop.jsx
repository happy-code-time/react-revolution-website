import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, StepsGeneratorDragDrop, SourceCode, Clipboard } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import generateArticles from '../Globals/generateArticles';

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


const codeExample2 = `import { StepsGeneratorDragDrop } from 'react-revolution';
// import StepsGeneratorDragDrop from 'react-revolution/StepsGeneratorDragDrop';

<StepsGeneratorDragDrop
    placeholder='DROP HERE'
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
    addNewStepOn={1}
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
    maxSteps={5}
    // Custom dev data
    stepsData={this.state.stepsData}
    newStepData={this.newStepData}
    mountCallback={this.setUuids}
    stepRemovedCallback={this.setUuids}
    // Apply new order
    // if undefined 'stepsData' are not changed 
    stepReorderCallback={this.setUuids}
/>`;


const jsExample2 = `constructor(props) {
    super(props);
    this.logData = this.logData.bind(this);
    this.submitSteps = this.submitSteps.bind(this);
    this.newStepData = this.newStepData.bind(this);
    this.setUuids = this.setUuids.bind(this);

    this.state = {
        stepsData: [
            {
                top: false,
                bottom: true,
                data: (
                    <img
                        src='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        style={{
                            display: 'block',
                            width: '250px',
                            height: '150px'
                        }}
                    />
                )
            },
            {},
            {
                top: false,
                bottom: true,
                data: (
                    <img
                        src='public/images/chania.jpg'
                        style={{
                            display: 'block',
                            width: '250px',
                            height: '150px'
                        }}
                    />
                )
            }
        ]
    };
}

/**
 * Callback on componentDidMount 
 * to set internal uuids
 * @param {{}[]} currentStepsData 
 * @param {string} type 'mount', 'remove'
 */
setUuids(currentStepsData, type) {
    this.setState({
        stepsData: currentStepsData
    });
}

/**
 * 
 * @param {any} callbackProps 
 * @param { {value: string, uuid: number }[] } steps 
 */
logData(callbackProps, steps) {
    console.info(steps);
}

/**
 * Each input field change
 * @param {any} submitStepsProps 
 * @param { {value: string, uuid: number }[] } steps 
 */
submitSteps(submitStepsProps, steps) {
    console.info(steps);
}

/**
 * Get data for each new step
 * @param {number} uuidForThisStep 
 */
newStepData(uuidForThisStep) {
    const { stepsData } = this.state;

    stepsData.push(
        {
            top: true,
            bottom: false,
            data: (
                <img
                    src='public/images/chania.jpg'
                    style={{
                        display: 'block',
                        width: '250px',
                        height: '150px'
                    }}
                />
            ),
            // Important by adding new step with custom data
            // if not provided, the data are not displayed
            uuid: uuidForThisStep
        }
    );

    this.setState({ stepsData });
}`;


class _StepsGeneratorDragDrop extends React.Component {

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.logData = this.logData.bind(this);
        this.submitSteps = this.submitSteps.bind(this);
        this.newStepData = this.newStepData.bind(this);
        this.setUuids = this.setUuids.bind(this);
        this.countCallbacks = 0;

        this.state = {
            stepsData: [
                {
                    top: false,
                    bottom: true,
                    data: (
                        <img
                            src='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                            style={{
                                display: 'block',
                                width: '250px',
                                height: '150px'
                            }}
                        />
                    )
                },
                {},
                {
                    top: false,
                    bottom: true,
                    data: (
                        <img
                            src='public/images/chania.jpg'
                            style={{
                                display: 'block',
                                width: '250px',
                                height: '150px'
                            }}
                        />
                    )
                }
            ]
        };

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

    /**
     * Callback on componentDidMount 
     * to set internal uuids
     * @param {{}[]} currentStepsData 
     * @param {string} type 'mount', 'remove'
     */
    setUuids(currentStepsData, type) {
        this.setState({
            stepsData: currentStepsData
        });
    }

    /**
     * Get data for each new step
     * @param {number} uuidForThisStep 
     */
    newStepData(uuidForThisStep) {
        const { stepsData } = this.state;

        stepsData.push(
            {
                top: true,
                bottom: false,
                data: (
                    <img
                        src='public/images/chania.jpg'
                        style={{
                            display: 'block',
                            width: '250px',
                            height: '150px'
                        }}
                    />
                ),
                // Important by adding new step with custom data
                // if not provided, the data are not displayed
                uuid: uuidForThisStep
            }
        );

        this.setState({ stepsData });
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
                    StepsGenerator
                </h1>
                <p className="description">
                    {
                        trans('stepGen.example2')
                    }
                </p>
                <div className="code-example mt-2">
                    <div className="code-example-live">
                        <StepsGeneratorDragDrop
                            placeholder='DROP HERE'
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
                            addNewStepOn={1}
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
                            maxSteps={5}
                            // Custom dev data
                            stepsData={this.state.stepsData}
                            newStepData={this.newStepData}
                            mountCallback={this.setUuids}
                            stepRemovedCallback={this.setUuids}
                            // Apply new order
                            // if undefined 'stepsData' are not changed 
                            stepReorderCallback={this.setUuids}
                        />
                    </div>
                    {
                        generateArticles(
                            (
                                <h1 className="h1-example">
                                    <i className="fas fa-atom" />
                                    {
                                        trans('reactCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={false}
                                        layout='dark'
                                        code={codeExample2}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample2}
                                    />
                                </span>
                            )
                        )
                    }
                    {
                        generateArticles(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example"
                                >
                                    <i className="fab fa-node-js" />
                                    {
                                        trans('jsCodeTitle')
                                    }
                                </h1>
                            ),
                            (
                                <span>
                                    <SourceCode
                                        lineNumber={true}
                                        layout='dark'
                                        code={jsExample2}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample2}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
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
                                {
                                    key: 'maxSteps',
                                    values: 'stepGen.maxSteps'
                                },
                                {
                                    key: 'stepsData',
                                    values: 'stepGen.stepsData'
                                },
                                {
                                    key: 'stepsData.data',
                                    values: 'stepGen.stepsData.data'
                                },
                                {
                                    key: 'stepsData.top',
                                    values: 'stepGen.stepsData.top'
                                },
                                {
                                    key: 'stepsData.bottom',
                                    values: 'stepGen.stepsData.bottom'
                                },
                                {
                                    key: 'newStepData',
                                    values: 'stepGen.newStepData'
                                },
                                {
                                    key: 'mountCallback',
                                    values: 'stepGen.mountCallback'
                                },
                                {
                                    key: 'stepRemovedCallback',
                                    values: 'stepGen.stepRemovedCallback'
                                },
                                {
                                    key: 'stepReorderCallback',
                                    values: 'stepGenDragDrop.stepReorderCallback'
                                },
                                {
                                    key: 'data',
                                    values: 'stepGen.data'
                                },
                                {
                                    key: 'data.value',
                                    values: 'stepGen.data.value'
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


