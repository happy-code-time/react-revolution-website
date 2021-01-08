import React from 'react';
import { Steps, Table, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import getDescriptionForstyle from '../Functions/getDescriptionForstyle';
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

class _Steps extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.checkStep = this.checkStep.bind(this);
        this.setValue = this.setValue.bind(this);
        this.submitCallback = this.submitCallback.bind(this);
        this.countCallbacks = 0;

        this.state = {
            loading: true,
            username: '',
            password: '',
            email: ''
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
        ];
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

            if(x == type.length-1){
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
                {
                    getDescriptionForstyle('rr-steps')
                }
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
                                    key: 'globalStyle',
                                    values: 'globalStyle'
                                },
                                {
                                    key: 'moduleStyle',
                                    values: 'moduleStyle'
                                },
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