import React from 'react';
import ReactDOM from 'react-dom';
import { StepsGenerator } from './react-revolution/react-revolution';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {

    constructor(props) {
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
    }

    render() {
        return (
            <StepsGenerator
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
                data={
                    [
                        {
                            value: '1'
                        },
                        {
                            value: '2'
                        },
                        {
                            value: '3'
                        },
                        {
                            value: '4'
                        },
                        {
                            value: '5'
                        },
                    ]
                }
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));