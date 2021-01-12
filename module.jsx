import React from 'react';
import ReactDOM from 'react-dom';
import { Steps } from '../react-revolution/react-revolution';
import './react-revolution/_Sass/rr-steps.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.checkStep = this.checkStep.bind(this);
        this.submit = this.submit.bind(this);
        this.setValue = this.setValue.bind(this);

        this.liveGeneration_username = this.liveGeneration_username.bind(this);
        this.liveGeneration_password = this.liveGeneration_password.bind(this);
        this.liveGeneration_email = this.liveGeneration_email.bind(this);

        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }

    setValue(type, v) {
        this.setState({
            [type]: v
        });
    }

    checkStep(type) {
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

    getErrorText(onErrorProps) {
        return new Promise((resolve, reject) => {
            resolve(onErrorProps);
        });
    }

    submit() {
        confirm('Well done!');
    }

    liveGeneration_username() {
        return new Promise((resolve, reject) => {
            resolve(
                <div style={{ margin: '0 auto', width: '300px' }}>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
                    <input
                        type="text"
                        style={{ width: '100%' }}
                        onChange={(e) => this.setValue('username', e.target.value)}
                        value={this.state.username}
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
                        onChange={(e) => this.setValue('password', e.target.value)}
                        value={this.state.password}
                    />
                </div>
            );
        });
    }

    liveGeneration_email() {
        return new Promise((resolve, reject) => {
            resolve(
                <div style={{ margin: '0 auto', width: '300px' }}>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
                    <input
                        type="email"
                        style={{ width: '100%' }}
                        onChange={(e) => this.setValue('email', e.target.value)}
                        value={this.state.email}
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
                            callback: this.checkStep,
                            callbackProps: 'username',
                            onError: this.getErrorText,
                            onErrorProps: 'Username is a required field.',
                        },
                        {
                            text: 'Step 2',
                            icon: <i className="fas fa-balance-scale-right"></i>,
                            liveGeneration: this.liveGeneration_password,
                            callback: this.checkStep,
                            callbackProps: ['username', 'password'],
                            onError: this.getErrorText,
                            onErrorProps: 'Password is a required field.',
                        },
                        {
                            text: 'Step 3',
                            icon: <i className="fas fa-user"></i>,
                            liveGeneration: this.liveGeneration_email,
                            callback: this.checkStep,
                            callbackProps: ['username', 'password', 'email'],
                            onError: this.getErrorText,
                            onErrorProps: 'Email is a required field.',
                            submit: this.submit
                        }
                    ]}
                />
            </div>
            // <div
            //     style={
            //         {
            //             width: '100%',
            //             maxWidth: '1024px',
            //             height: '500px',
            //             margin: '5vh auto'
            //         }
            //     }
            // >
            //     <Steps
            //         progressBar={true}
            //         iconStep={true}
            //         next='Next'
            //         previous='Previous'
            //         submit='Save'
            //         callbackCheck={true}
            //         callbackCheckNavigate={true}
            //         errorDataInside={false}
            //         errorAlignTop={false}
            //         data={[
            //             {
            //                 text: 'Step 1',
            //                 icon: <i className="far fa-lemon"></i>,
            //                 data: (
            //                     <div style={{ margin: '0 auto', width: '300px' }}>
            //                         <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
            //                         <input
            //                             type="text"
            //                             style={{ width: '100%' }}
            //                             onChange={(e) => this.setValue('username', e.target.value)}
            //                             value={this.state.username}
            //                         />
            //                     </div>
            //                 ),
            //                 callback: this.checkStep,
            //                 callbackProps: 'username',
            //                 onError: this.getErrorText,
            //                 onErrorProps: 'Username is a required field.',
            //             },
            //             {
            //                 text: 'Step 2',
            //                 icon: <i className="fas fa-balance-scale-right"></i>,
            //                 data: (
            //                     <div style={{ margin: '0 auto', width: '300px' }}>
            //                         <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Password</h1>
            //                         <input
            //                             type="password"
            //                             style={{ width: '100%' }}
            //                             onChange={(e) => this.setValue('password', e.target.value)}
            //                             value={this.state.password}
            //                         />
            //                     </div>
            //                 ),
            //                 callback: this.checkStep,
            //                 callbackProps: ['username', 'password'],
            //                 onError: this.getErrorText,
            //                 onErrorProps: 'Password is a required field.',
            //             },
            //             {
            //                 text: 'Step 3',
            //                 icon: <i className="fas fa-user"></i>,
            //                 data: (
            //                     <div style={{ margin: '0 auto', width: '300px' }}>
            //                         <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
            //                         <input
            //                             type="email"
            //                             style={{ width: '100%' }}
            //                             onChange={(e) => this.setValue('email', e.target.value)}
            //                             value={this.state.email}
            //                         />
            //                     </div>
            //                 ),
            //                 callback: this.checkStep,
            //                 callbackProps: ['username', 'password', 'email'],
            //                 onError: this.getErrorText,
            //                 onErrorProps: 'Email is a required field.',
            //                 submit: this.submit
            //             }
            //         ]}
            //     />
            // </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));