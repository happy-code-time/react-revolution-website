import React from 'react';
import { Steps, Table, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import generateArticles from '../Globals/generateArticles';

const codeExample1 = `import { Steps } from 'react-revolution';
// import Steps from 'react-revolution/Steps';

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
        data={[
            {
                text: 'Step 1',
                icon: <i className="far fa-lemon"></i>,
                data: this.generateList(1),
            },
            {
                text: 'Step 2',
                icon: <i className="fas fa-balance-scale-right"></i>,
                data: this.generateList(2),
            },
            {
                text: 'Step 3',
                icon: <i className="fas fa-user"></i>,
                data: this.generateList(3),
            }
        ]}
        callback={() => { console.info('SAVE') }}
        next='Next'
        previous='Previous'
        submit='Save'
    />
</div>`;

const codeExample2 = `import { Steps } from 'react-revolution';
// import Steps from 'react-revolution/Steps';

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
        data={[
            {
                text: 'Step 1',
                icon: <i className="far fa-lemon"></i>,
                data: this.generateList(1),
            },
            {
                text: 'Step 2',
                icon: <i className="fas fa-balance-scale-right"></i>,
                data: this.generateList(2),
            },
            {
                text: 'Step 3',
                icon: <i className="fas fa-user"></i>,
                data: this.generateList(3),
            }
        ]}
        callback={() => { console.info('SAVE') }}
        next='Next'
        previous='Previous'
        submit='Save'
    />
</div>`;

const codeExample3 = `import { Steps } from 'react-revolution';
// import Steps from 'react-revolution/Steps';

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
        data={[
            {
                text: 'Step 1',
                icon: <i className="far fa-lemon"></i>,
                data: this.generateList(1),
            },
            {
                text: 'Step 2',
                icon: <i className="fas fa-balance-scale-right"></i>,
                data: this.generateList(2),
            },
            {
                text: 'Step 3',
                icon: <i className="fas fa-user"></i>,
                data: this.generateList(3),
            }
        ]}
        callback={() => { console.info('SAVE') }}
        next='Next'
        previous='Previous'
        submit='Save'
    />
</div>`;

const codeExample3a = `import { Steps } from 'react-revolution';
// import Steps from 'react-revolution/Steps';

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
        callback={() => { console.info('SAVE') }}
        next='Next'
        previous='Previous'
        submit='Save'

        iconBg='#673ab7'
        progressBgBlank='rgba(103,58,183,0.6)'
        progressBgStripe='rgb(103,58,183)'
        progressBgSize={30}
        buttonsBg='#673ab7'
        
        data={[
            {
                text: 'Step 1',
                icon: <i className="far fa-lemon"></i>,
                data: this.generateList(1),
            },
            {
                text: 'Step 2',
                icon: <i className="fas fa-balance-scale-right"></i>,
                data: this.generateList(2),
            },
            {
                text: 'Step 3',
                icon: <i className="fas fa-user"></i>,
                data: this.generateList(3),
            }
        ]}
    />
</div>`;

const codeExample4 = `import { Steps } from 'react-revolution';
// import Steps from 'react-revolution/Steps';

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
        data={[
            {
                text: 'Step 1',
                icon: <i className="far fa-lemon"></i>,
                data: (
                    <div style={{ margin: '0 auto', width: '300px' }}>
                        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
                        <input 
                            type="text" 
                            style={{ width: '100%' }} 
                            onChange={(e) => this.setValue('username', e.target.value)} 
                            value={this.state.username} 
                        />
                    </div>
                ),
                callback: this.checkStep,
                callbackProps: 'username'
            },
            {
                text: 'Step 2',
                icon: <i className="fas fa-balance-scale-right"></i>,
                data: (
                    <div style={{ margin: '0 auto', width: '300px' }}>
                        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Password</h1>
                        <input 
                            type="password" 
                            style={{ width: '100%' }} 
                            onChange={(e) => this.setValue('password', e.target.value)} 
                            value={this.state.password} 
                        />
                    </div>
                ),
                callback: this.checkStep,
                callbackProps: ['username', 'password']
            },
            {
                text: 'Step 3',
                icon: <i className="fas fa-user"></i>,
                data: (
                    <div style={{ margin: '0 auto', width: '300px' }}>
                        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
                        <input 
                            type="email" 
                            style={{ width: '100%' }} 
                            onChange={(e) => this.setValue('email', e.target.value)} 
                            value={this.state.email} 
                        />
                    </div>
                ),
                callback: this.submitCallback,
                callbackProps: ['username', 'password', 'email']
            }
        ]}
    />
</div>`;

const jsExample1 = `generateList(data) {
    return (
        <div style={{ margin: '0 auto', width: '300px' }}>
            <h1>
                {\`\${data}) Step\`}
            </h1>
            <p>
                Custom content
            </p>
        </div>
    );
}`;

const jsExample4 = `constructor(props) {
    super(props);
    this.checkStep = this.checkStep.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
    this.setValue = this.setValue.bind(this);

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
                    confirm(\`The field: \${type[x]} cannot be empty :)\`);
                    resolve(false);
                    break;
                }
            }

            resolve(true);
        }
        else {
            if (!this.state[type]) {
                resolve(false);
                confirm(\`The field: \${type} cannot be empty :)\`);
            }
            else {
                resolve(true);
            }
        }
    });
}

submitCallback(type) {
    for (let x = 0; x <= type.length - 1; x++) {
        if (!this.state[type[x]]) {
            confirm(\`The field: \${type[x]} cannot be empty :)\`);
            break;
        }

        if(x == type.length-1){
            confirm('All fields are valid.');
        }
    }
}`;

const codeExample5 = `import { Steps } from 'react-revolution';
// import Steps from 'react-revolution/Steps';

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
        data={[
            {
                text: 'Step 1',
                icon: <i className="far fa-lemon"></i>,
                data: (
                    <div style={{ margin: '0 auto', width: '300px' }}>
                        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
                        <input type="text" style={{ width: '100%' }} onChange={(e) => this.setValue('username', e.target.value)} value={this.state.username} />
                    </div>
                ),
                callback: this.checkStep,
                callbackProps: 'username'
            },
            {
                text: 'Step 2',
                icon: <i className="fas fa-balance-scale-right"></i>,
                data: (
                    <div style={{ margin: '0 auto', width: '300px' }}>
                        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Password</h1>
                        <input type="password" style={{ width: '100%' }} onChange={(e) => this.setValue('password', e.target.value)} value={this.state.password} />
                    </div>
                ),
                callback: this.checkStep,
                callbackProps: ['username', 'password']
            },
            {
                text: 'Step 3',
                icon: <i className="fas fa-user"></i>,
                data: (
                    <div style={{ margin: '0 auto', width: '300px' }}>
                        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
                        <input type="email" style={{ width: '100%' }} onChange={(e) => this.setValue('email', e.target.value)} value={this.state.email} />
                    </div>
                ),
                callback: this.submitCallback,
                callbackProps: ['username', 'password', 'email']
            }
        ]}
    />
</div>`;

const jsExample5 = `constructor(props) {
    super(props);
    this.advanced_checkStep = this.advanced_checkStep.bind(this);
    this.advanced_submit = this.advanced_submit.bind(this);
    this.advanced_setValue = this.advanced_setValue.bind(this);

    this.state = {
        username2: '',
        password2: '',
        email2: ''
    };
}

advanced_setValue(type, v) {
    this.setState({
        [type]: v
    });
}

advanced_checkStep(type) {
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

advanced_submit() {
    confirm('Well done!');
}`;

const codeExample6 = `import { Steps } from 'react-revolution';
// import Steps from 'react-revolution/Steps';

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
</div>`;

const jsExample6 = `constructor(props) {
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
    return new Promise((resolve, reject) => {
        resolve(
            <div style={{ margin: '0 auto', width: '300px' }}>
                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
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
                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
                <input
                    type="email"
                    style={{ width: '100%' }}
                    onChange={(e) => this.liveGeneration_setValue('email3', e.target.value)}
                    value={this.state.email3}
                />
            </div>
        );
    });
}`;


class _Steps extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.checkStep = this.checkStep.bind(this);
        this.setValue = this.setValue.bind(this);
        this.submitCallback = this.submitCallback.bind(this);
        this.countCallbacks = 0;

        this.advanced_checkStep = this.advanced_checkStep.bind(this);
        this.advanced_submit = this.advanced_submit.bind(this);
        this.advanced_setValue = this.advanced_setValue.bind(this);

        this.liveGeneration_username = this.liveGeneration_username.bind(this);
        this.liveGeneration_password = this.liveGeneration_password.bind(this);
        this.liveGeneration_email = this.liveGeneration_email.bind(this);
        this.liveGeneration_checkStep = this.liveGeneration_checkStep.bind(this);
        this.liveGeneration_submit = this.liveGeneration_submit.bind(this);
        this.liveGeneration_setValue = this.liveGeneration_setValue.bind(this);

        this.state = {
            loading: true,
            username: '',
            password: '',
            email: '',

            username2: '',
            password2: '',
            email2: '',

            username3: '',
            password3: '',
            email3: '',
        };

        this.examples = [
            {
                title: 'Steps',
                description: trans('steps.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
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
                            data={[
                                {
                                    text: 'Step 1',
                                    icon: <i className="far fa-lemon"></i>,
                                    data: this.generateList(1),
                                },
                                {
                                    text: 'Step 2',
                                    icon: <i className="fas fa-balance-scale-right"></i>,
                                    data: this.generateList(2),
                                },
                                {
                                    text: 'Step 3',
                                    icon: <i className="fas fa-user"></i>,
                                    data: this.generateList(3),
                                }
                            ]}
                            callback={() => { console.info('SAVE') }}
                            next='Next'
                            previous='Previous'
                            submit='Save'
                        />
                    </div>
                )
            },
            {
                title: 'Steps',
                description: trans('steps.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
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
                            data={[
                                {
                                    text: 'Step 1',
                                    icon: <i className="far fa-lemon"></i>,
                                    data: this.generateList(1),
                                },
                                {
                                    text: 'Step 2',
                                    icon: <i className="fas fa-balance-scale-right"></i>,
                                    data: this.generateList(2),
                                },
                                {
                                    text: 'Step 3',
                                    icon: <i className="fas fa-user"></i>,
                                    data: this.generateList(3),
                                }
                            ]}
                            callback={() => { console.info('SAVE') }}
                            next='Next'
                            previous='Previous'
                            submit='Save'
                        />
                    </div>
                )
            },
            {
                title: 'Steps',
                description: trans('steps.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
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
                            callback={() => { console.info('SAVE') }}
                            next='Next'
                            previous='Previous'
                            submit='Save'
                            data={[
                                {
                                    text: 'Step 1',
                                    icon: <i className="far fa-lemon"></i>,
                                    data: this.generateList(1),
                                },
                                {
                                    text: 'Step 2',
                                    icon: <i className="fas fa-balance-scale-right"></i>,
                                    data: this.generateList(2),
                                },
                                {
                                    text: 'Step 3',
                                    icon: <i className="fas fa-user"></i>,
                                    data: this.generateList(3),
                                }
                            ]}
                        />
                    </div>
                )
            },
            {
                title: 'Steps',
                description: trans('steps.example3a'),
                reactTextBefore: '',
                react: codeExample3a,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
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
                            callback={() => { console.info('SAVE') }}
                            next='Next'
                            previous='Previous'
                            submit='Save'
                            iconBg='#673ab7'
                            progressBgBlank='rgba(103,58,183,0.6)'
                            progressBgStripe='rgb(103,58,183)'
                            progressBgSize={30}
                            buttonsBg='#673ab7'
                            data={[
                                {
                                    text: 'Step 1',
                                    icon: <i className="far fa-lemon"></i>,
                                    data: this.generateList(1),
                                },
                                {
                                    text: 'Step 2',
                                    icon: <i className="fas fa-balance-scale-right"></i>,
                                    data: this.generateList(2),
                                },
                                {
                                    text: 'Step 3',
                                    icon: <i className="fas fa-user"></i>,
                                    data: this.generateList(3),
                                }
                            ]}
                        />
                    </div>
                )
            },
        ];
    }
    /**
     * Examples 1 - 4
     */
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
                        confirm(`The field: ${type[x]} cannot be empty :)`);
                        resolve(false);
                        break;
                    }
                }

                resolve(true);
            }
            else {
                if (!this.state[type]) {
                    resolve(false);
                    confirm(`The field: ${type} cannot be empty :)`);
                }
                else {
                    resolve(true);
                }
            }
        });
    }

    submitCallback(type) {
        for (let x = 0; x <= type.length - 1; x++) {
            if (!this.state[type[x]]) {
                confirm(`The field: ${type[x]} cannot be empty :)`);
                break;
            }

            if (x == type.length - 1) {
                confirm('All fields are valid.');
            }
        }
    }

    generateList(data) {
        return (
            <div style={{ margin: '0 auto', width: '300px' }}>
                <h1>
                    {`${data}) Step`}
                </h1>
                <p>
                    Custom content
                </p>
            </div>
        );
    }

    /**
     * Example 5
     */
    advanced_setValue(type, v) {
        this.setState({
            [type]: v
        });
    }

    advanced_checkStep(type) {
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

    advanced_submit() {
        confirm('Well done!');
    }

    /**
     * Example 6
     */
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
        return new Promise((resolve, reject) => {
            resolve(
                <div style={{ margin: '0 auto', width: '300px' }}>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
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
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
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
                    data={buildModulesJsx(this.examples[0], 1)}
                    fireScrollEvent={30}
                    fireScrollBack={true}
                />
                <h1 className="h1-title border-none my-3">
                    Steps
                </h1>
                <p className="description">
                    {
                        trans('steps.example4')
                    }
                </p>
                <div className="code-example mt-4">
                    <div className="code-example-live">
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
                                data={[
                                    {
                                        text: 'Step 1',
                                        icon: <i className="far fa-lemon"></i>,
                                        data: (
                                            <div style={{ margin: '0 auto', width: '300px' }}>
                                                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
                                                <input type="text" style={{ width: '100%' }} onChange={(e) => this.setValue('username', e.target.value)} value={this.state.username} />
                                            </div>
                                        ),
                                        callback: this.checkStep,
                                        callbackProps: 'username'
                                    },
                                    {
                                        text: 'Step 2',
                                        icon: <i className="fas fa-balance-scale-right"></i>,
                                        data: (
                                            <div style={{ margin: '0 auto', width: '300px' }}>
                                                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Password</h1>
                                                <input type="password" style={{ width: '100%' }} onChange={(e) => this.setValue('password', e.target.value)} value={this.state.password} />
                                            </div>
                                        ),
                                        callback: this.checkStep,
                                        callbackProps: ['username', 'password']
                                    },
                                    {
                                        text: 'Step 3',
                                        icon: <i className="fas fa-user"></i>,
                                        data: (
                                            <div style={{ margin: '0 auto', width: '300px' }}>
                                                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
                                                <input type="email" style={{ width: '100%' }} onChange={(e) => this.setValue('email', e.target.value)} value={this.state.email} />
                                            </div>
                                        ),
                                        callback: this.submitCallback,
                                        callbackProps: ['username', 'password', 'email']
                                    }
                                ]}
                            />
                        </div>
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
                                        code={codeExample4}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample4}
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
                                        code={jsExample4}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample4}
                                    />
                                </span>
                            )
                        )
                    }
                </div>

                <h1 className="h1-title border-none my-3">
                    Steps
                </h1>
                <p className="description">
                    {
                        trans('steps.example5')
                    }
                </p>
                <div className="code-example mt-4">
                    <div className="code-example-live">
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
                                data={[
                                    {
                                        text: 'Step 1',
                                        icon: <i className="far fa-lemon"></i>,
                                        data: (
                                            <div style={{ margin: '0 auto', width: '300px' }}>
                                                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Username</h1>
                                                <input
                                                    type="text"
                                                    style={{ width: '100%' }}
                                                    onChange={(e) => this.advanced_setValue('username2', e.target.value)}
                                                    value={this.state.username2}
                                                />
                                            </div>
                                        ),
                                        callback: this.advanced_checkStep,
                                        callbackProps: 'username2',
                                        onError: this.getErrorText,
                                        onErrorProps: 'Username is a required field.',
                                    },
                                    {
                                        text: 'Step 2',
                                        icon: <i className="fas fa-balance-scale-right"></i>,
                                        data: (
                                            <div style={{ margin: '0 auto', width: '300px' }}>
                                                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Password</h1>
                                                <input
                                                    type="password"
                                                    style={{ width: '100%' }}
                                                    onChange={(e) => this.setValue('password2', e.target.value)}
                                                    value={this.state.password2}
                                                />
                                            </div>
                                        ),
                                        callback: this.advanced_checkStep,
                                        callbackProps: ['username2', 'password2'],
                                        onError: this.getErrorText,
                                        onErrorProps: 'Password is a required field.',
                                    },
                                    {
                                        text: 'Step 3',
                                        icon: <i className="fas fa-user"></i>,
                                        data: (
                                            <div style={{ margin: '0 auto', width: '300px' }}>
                                                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-mail</h1>
                                                <input
                                                    type="email"
                                                    style={{ width: '100%' }}
                                                    onChange={(e) => this.advanced_setValue('email2', e.target.value)}
                                                    value={this.state.email2}
                                                />
                                            </div>
                                        ),
                                        callback: this.advanced_checkStep,
                                        callbackProps: ['username2', 'password2', 'email2'],
                                        onError: this.getErrorText,
                                        onErrorProps: 'Email is a required field.',
                                        submit: this.advanced_submit
                                    }
                                ]}
                            />
                        </div>
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
                                        code={codeExample5}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample5}
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
                                        code={jsExample5}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample5}
                                    />
                                </span>
                            )
                        )
                    }
                </div>
                <h1 className="h1-title border-none my-3">
                    Steps
                </h1>
                <p className="description">
                    {
                        trans('steps.example6')
                    }
                </p>
                <div className="code-example mt-4">
                    <div className="code-example-live">
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
                                        code={codeExample6}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample6}
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
                                        code={jsExample6}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample6}
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
                                    key: 'next',
                                    values: 'steps.next'
                                },
                                {
                                    key: 'previous',
                                    values: 'steps.previous'
                                },
                                {
                                    key: 'submit',
                                    values: 'steps.submit'
                                },
                                {
                                    key: 'callback',
                                    values: 'steps.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'steps.callbackProps'
                                },
                                {
                                    key: 'callbackCheck',
                                    values: 'steps.callbackCheck'
                                },
                                {
                                    key: 'callbackCheckNavigate',
                                    values: 'steps.callbackCheckNavigate'
                                },
                                {
                                    key: 'progressBar',
                                    values: 'steps.progressBar'
                                },
                                {
                                    key: 'iconStep',
                                    values: 'steps.iconStep'
                                },
                                {
                                    key: 'errorDataInside',
                                    values: 'steps.errorDataInside'
                                },
                                {
                                    key: 'errorAlignTop',
                                    values: 'steps.errorAlignTop'
                                },
                                {
                                    key: 'liveGeneration',
                                    values: 'steps.liveGeneration'
                                },
                                {
                                    key: 'iconBg',
                                    values: 'steps.iconBg'
                                },
                                {
                                    key: 'buttonsBg',
                                    values: 'steps.buttonsBg'
                                },
                                {
                                    key: 'progressBgBlank',
                                    values: 'steps.progressBgBlank'
                                },
                                {
                                    key: 'progressBgStripe',
                                    values: 'steps.progressBgStripe'
                                },
                                {
                                    key: 'progressBgSize',
                                    values: 'steps.progressBgSize'
                                },
                                {
                                    key: 'data',
                                    values: 'steps.data'
                                },
                                {
                                    key: 'data.text',
                                    values: 'steps.data.text'
                                },
                                {
                                    key: 'data.icon',
                                    values: 'steps.data.icon'
                                },
                                {
                                    key: 'data.data',
                                    values: 'steps.data.data'
                                },
                                {
                                    key: 'data.callback',
                                    values: 'steps.data.callback'
                                },
                                {
                                    key: 'data.callbackProps',
                                    values: 'steps.data.callbackProps'
                                },
                                {
                                    key: 'data.onError',
                                    values: 'steps.data.onError'
                                },
                                {
                                    key: 'data.onErrorProps',
                                    values: 'steps.data.onErrorProps'
                                },
                                {
                                    key: 'data.liveGeneration',
                                    values: 'steps.data.liveGeneration'
                                },
                                {
                                    key: 'data.liveGenerationProps',
                                    values: 'steps.data.liveGenerationProps'
                                },
                            ],
                            'rr-steps'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Steps;