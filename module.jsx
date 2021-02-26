import React from 'react';
import ReactDOM from 'react-dom';
import { StepsGenerator, Container, ContainerPopup, SideBar, PopupHover } from './react-revolution/react-revolution';
// import './react-revolution/_Sass/react-revolution.scss';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component 
{

    constructor(props) {
        super(props);
        this.logData = this.logData.bind(this);
        this.submitSteps = this.submitSteps.bind(this);
    }
    
    logData(callbackProps, steps) {
        console.info(steps);
    }
    
    submitSteps(submitStepsProps, steps) {
        console.info(steps);
    }

    render() {

        return (                        
            <StepsGenerator
                callback={this.logData}
                useInput={true}
                callbackProps='any'
                data={
                    [
                        {
                            value: 'Value of the field 1',
                            customKey1: 423423,
                            customKey2: [1, 2, 3],
                        },
                        {
                            value: 'Value of the field 2',
                            customKey1: 9488723,
                            customKey2: ['1', '2'],
                        }
                    ]
                }
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
                dragDrop='🚼'
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
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));