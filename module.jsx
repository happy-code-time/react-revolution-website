import React from 'react';
import ReactDOM from 'react-dom';
import { Steps } from './react-revolution/react-revolution';
import './react-revolution/_Sass/react-revolution.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.liveGeneration_username = this.liveGeneration_username.bind(this);
        this.liveGeneration_password = this.liveGeneration_password.bind(this);
        this.liveGeneration_email = this.liveGeneration_email.bind(this);
        this.liveGeneration_checkStep = this.liveGeneration_checkStep.bind(this);
        this.liveGeneration_submit = this.liveGeneration_submit.bind(this);
        this.liveGeneration_setValue = this.liveGeneration_setValue.bind(this);
    
        this.state = {
            username3: '',
            password3: '',
            email3: ''
        };
    }
    
    liveGeneration_setValue(type, v) {
        this.setState({
            [type]: v
        });
    }
    
    liveGeneration_checkStep(type) {
        return new Promise((resolve, reject) => {
    
            if (typeof [] == typeof type) {
    
                for (let x = 0; x <= type.length - 1; x++) {
                    if (!this.state[type[x]]) {
                        resolve(false);
                        break;
                    }
                }
    
                return resolve(true);
            }
            else {
                if (!this.state[type]) {
                    return resolve(false);
                }
                else {
                    return resolve(true);
                }
            }
        });
    }
    
    liveGeneration_getErrorText(onErrorProps) {
        return new Promise((resolve, reject) => {
            resolve(onErrorProps);
        });
    }
    
    liveGeneration_submit() {
        confirm('Well done!');
    }
    
    liveGeneration_username() {
        return new Promise( async (resolve, reject) => {

            const x = () => {
                return new Promise( r => {
                    setTimeout( () => {
                        r('a')
                    }, 500);
                })
            }
            const a = await x();

            resolve(
                <div style={{ margin: '0 auto', width: '300px' }}>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
                        {
                            a
                        }
                    </h1>
                    <input
                        type="text"
                        style={{ width: '100%' }}
                        onChange={(e) => this.liveGeneration_setValue('username3', e.target.value)}
                        value={this.state.username3}
                    />
                </div>
            );
        });
    }
    
    liveGeneration_password() {
        return new Promise((resolve, reject) => {
            resolve(
                <div style={{ margin: '0 auto', width: '300px' }}>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Password</h1>
                    <input
                        type="password"
                        style={{ width: '100%' }}
                        onChange={(e) => this.liveGeneration_setValue('password3', e.target.value)}
                        value={this.state.password3}
                    />
                </div>
            );
        });
    }
    
    liveGeneration_email() {
        return new Promise((resolve, reject) => {
            resolve(
                <div style={{ margin: '0 auto', width: '300px' }}>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>a</h1>
                    <input
                        type="email"
                        style={{ width: '100%' }}
                        onChange={(e) => this.liveGeneration_setValue('email3', e.target.value)}
                        value={this.state.email3}
                    />
                </div>
            );
        });
    }

    render() {

        return (            
            <div
                style={
                    {
                        width: '100%',
                        maxWidth: '1024px',
                        height: '500px',
                        margin: '5vh auto'
                    }
                }
                >
                <Steps
                    progressBar={true}
                    iconStep={true}
                    next='Next'
                    previous='Previous'
                    submit='Save'
                    callbackCheck={true}
                    callbackCheckNavigate={true}
                    errorDataInside={false}
                    errorAlignTop={false}
                    liveGeneration={true}
                    data={[
                        {
                            text: 'Step 1',
                            icon: <i className="far fa-lemon"></i>,
                            liveGeneration: this.liveGeneration_username,
                            callback: this.liveGeneration_checkStep,
                            callbackProps: 'username3',
                            onError: this.liveGeneration_getErrorText,
                            onErrorProps: 'Username is a required field.',
                        },
                        {
                            text: 'Step 2',
                            icon: <i className="fas fa-balance-scale-right"></i>,
                            liveGeneration: this.liveGeneration_password,
                            callback: this.liveGeneration_checkStep,
                            callbackProps: ['username3', 'password3'],
                            onError: this.liveGeneration_getErrorText,
                            onErrorProps: 'Password is a required field.',
                        },
                        {
                            text: 'Step 3',
                            icon: <i className="fas fa-user"></i>,
                            liveGeneration: this.liveGeneration_email,
                            callback: this.liveGeneration_checkStep,
                            callbackProps: ['username3', 'password3', 'email3'],
                            onError: this.liveGeneration_getErrorText,
                            onErrorProps: 'Email is a required field.',
                            submit: this.liveGeneration_submit
                        }
                    ]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));