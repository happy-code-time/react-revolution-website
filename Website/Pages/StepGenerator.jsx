import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, StepGenerator, Clipboard, SourceCode } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import generateArticle from '../Globals/generateArticle';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { StepGenerator } from 'react-revolution';
// import StepGenerator from 'react-revolution/StepGenerator';

<StepGenerator
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
    defaultStep={3}
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
    addNewStepOn={1} // defaultStep - addNewStepOn, 0 = ignore step adding by the component
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
    submitCallback={this.submitStep}
    submitCallbackProps='any'
    resetOnSubmit={true}
/>`;


const jsExample1 = `constructor(props) {
    super(props);
    this.logData = this.logData.bind(this);
    this.submitStep = this.submitStep.bind(this);
}

logData(callbackProps, steps) 
{
    console.clear();
    console.info(steps);
}

submitStep(submitStepProps, steps) 
{
    console.clear();
    console.info(steps);
}`;

const codeExample2 = `import { StepGenerator } from 'react-revolution';
// import StepGenerator from 'react-revolution/StepGenerator';

<StepGenerator
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
    defaultStep={3}
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
    submitCallback={this.submitStep}
    submitCallbackProps='any'
    resetOnSubmit={true}
    maxStep={5}
    // Custom dev data
    stepsData={this.state.stepsData}
    newStepData={this.newStepData}
    mountCallback={this.setUuids}
    stepRemovedCallback={this.setUuids}
/>`;


const jsExample2 = `constructor(props) {
    super(props);
    this.logData = this.logData.bind(this);
    this.submitStep = this.submitStep.bind(this);
    this.newStepData = this.newStepData.bind(this);
    this.setInputData = this.setInputData.bind(this);
    this.setUuids = this.setUuids.bind(this);

    this.state = {
        stepsData: [
            {
                top: true,
                bottom: false,
                data: (
                    <p>Step 1</p>
                )
            },
            {},
            {
                top: false,
                bottom: true,
                data: (
                    <p>Step 3</p>
                )
            }
        ]
    };
}

/**
 * Callback on componentDidMount 
 * to set internal uuids
 * @param {{}[]} currentStepData 
 * @param {string} type 'mount', 'remove'
 */
setUuids(currentStepData, type){
    this.setState({
        stepsData: currentStepData
    });
}

/**
 * 
 * @param {any} callbackProps 
 * @param { {value: string, uuid: number }[] } steps 
 */
logData(callbackProps, steps) 
{
    console.clear();
    console.info(steps);
}

/**
 * Each input field change
 * @param {any} submitStepProps 
 * @param { {value: string, uuid: number }[] } steps 
 */
submitStep(submitStepProps, steps) 
{
    console.clear();
    console.info(steps);
}

/**
 * Get data for each new step
 * @param {number} uuidForThisStep 
 */
newStepData(uuidForThisStep){
    const { stepsData } = this.state;

    stepsData.push(
        {
            top: true,
            bottom: false,
            data: (
                <span>
                    Custom data at the top of current step
                    <br/>
                    <input 
                        type='text' 
                        defaultValue='' 
                        onChange={ (e) => {
                            this.setInputData(e.target.value, uuidForThisStep)
                        }
                    }/>
                    <br/>
                </span>
            ),
            // Important by adding new step with custom data
            // if not provided, the data are not displayed
            uuid: uuidForThisStep
        }
    );

    this.setState({ stepsData });
}

/**
 * Custom function
 * @param {string} inputData 
 * @param {number} uuid 
 */
setInputData(inputData, uuid){
    const { stepsData } = this.state;

    for(let i = 0; i <= stepsData.length-1; i++){
        if(stepsData[i].uuid === uuid){

            // The value of the 'myInputField' are available 
            // on 'callback' and 'submitCallback'
            stepsData[i].myInputField = inputData;
            
            stepsData[i].data = (
                <span>
                {
                    inputData
                }
                <br/>
                <input 
                    type='text' 
                    value={inputData} 
                    defaultValue='' 
                    onChange={ 
                        (e) =>  {
                            this.setInputData(e.target.value, uuid)
                        }
                    }/>
                <br/>
            </span>
            );
        }
    }

    this.setState({
        stepsData
    });
}`;


class _StepGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.logData = this.logData.bind(this);
        this.submitStep = this.submitStep.bind(this);
        this.countCallbacks = 0;

        this.logData = this.logData.bind(this);
        this.submitStep = this.submitStep.bind(this);
        this.newStepData = this.newStepData.bind(this);
        this.setInputData = this.setInputData.bind(this);
        this.setUuids = this.setUuids.bind(this);

        this.state = {
            stepsData: [
                {
                    top: true,
                    bottom: false,
                    data: (
                        <p>Step 1</p>
                    )
                },
                {},
                {
                    top: false,
                    bottom: true,
                    data: (
                        <p>Step 3</p>
                    )
                }
            ]
        };

        this.examples = [
            {
                title: 'StepGenerator',
                description: trans('stepGen.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <StepGenerator
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
                        defaultStep={3}
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
                        addNewStepOn={1} // defaultStep - addNewStepOn, 0 = ignore step adding by the component
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
                        submitCallback={this.submitStep}
                        submitCallbackProps='any'
                        resetOnSubmit={true}
                    />
                )
            },
        ];
    }

    /**
     * Callback on componentDidMount 
     * to set internal uuids
     * @param {{}[]} currentStepData 
     * @param {string} type 'mount', 'remove'
     */
    setUuids(currentStepData, type) {
        this.setState({
            stepsData: currentStepData
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
                    <span>
                        Custom data at the top of current step
                        <br />
                        <input
                            type='text'
                            defaultValue=''
                            onChange={(e) => {
                                this.setInputData(e.target.value, uuidForThisStep)
                            }
                            } />
                        <br />
                    </span>
                ),
                // Important by adding new step with custom data
                // if not provided, the data are not displayed
                uuid: uuidForThisStep
            }
        );

        this.setState({ stepsData });
    }

    /**
     * Custom function
     * @param {string} inputData 
     * @param {number} uuid 
     */
    setInputData(inputData, uuid) {
        const { stepsData } = this.state;

        for (let i = 0; i <= stepsData.length - 1; i++) {
            if (stepsData[i].uuid === uuid) {

                // The value of the 'myInputField' are available 
                // on 'callback' and 'submitCallback'
                stepsData[i].myInputField = inputData;

                stepsData[i].data = (
                    <span>
                        {
                            inputData
                        }
                        <br />
                        <input
                            type='text'
                            value={inputData}
                            defaultValue=''
                            onChange={
                                (e) => {
                                    this.setInputData(e.target.value, uuid)
                                }
                            } />
                        <br />
                    </span>
                );
            }
        }

        this.setState({
            stepsData
        });
    }

    logData(callbackProps, steps) {
        console.clear();
        console.info(steps);
    }

    submitStep(submitStepProps, steps) {
        console.clear();
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
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    StepGenerator
                </h1>
                <p className="description">
                    {
                        trans('stepGen.example2')
                    }
                </p>
                <div className="code-example mt-2">
                    <div className="code-example-live">
                        <StepGenerator
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
                            defaultStep={3}
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
                            submitCallback={this.submitStep}
                            submitCallbackProps='any'
                            resetOnSubmit={true}
                            maxStep={5}
                            // Custom dev data
                            stepsData={this.state.stepsData}
                            newStepData={this.newStepData}
                            mountCallback={this.setUuids}
                            stepRemovedCallback={this.setUuids}
                        />
                    </div>
                    {
                        generateArticle(
                            (
                                <h1 className="h1-example p-0  m-0">
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
                        generateArticle(
                            (
                                <h1
                                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
                                    className="h1-example p-0  m-0"
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
                                    key: 'callback',
                                    values: 'stepGen.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'stepGen.callbackProps'
                                },
                                {
                                    key: 'defaultStep',
                                    values: 'stepGen.defaultStep'
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
                                    key: 'maxStep',
                                    values: 'stepGen.maxStep'
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
                                    key: 'data',
                                    values: 'stepGen.data'
                                },
                                {
                                    key: 'data.value',
                                    values: 'stepGen.data.value'
                                },
                            ],
                            'StepGenerator'
                        )
                    }
                />
            </div>
        );
    }
};

export default _StepGenerator;


