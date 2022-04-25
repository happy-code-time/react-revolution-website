import React from 'react';
//@ts-ignore
import { Table, LoadOnScroll, LoadingBoxTop, MenuDropDown } from '../../react-revolution/public/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { MenuDropDown } from 'react-revolution';
// import MenuDropDown from 'react-revolution/MenuDropDown';

<div
    style={
        {
            width: '200px',
        }
    }
    >
    <MenuDropDown
        callback={this.callback}
        callbackProps='any'
        placeholder={
            <p>⚙</p>
        }
    />
</div>`;

const codeExample2 = `import { MenuDropDown } from 'react-revolution';
// import MenuDropDown from 'react-revolution/MenuDropDown';

<div
    style={
        {
            width: '200px',
        }
    }
    >
    <MenuDropDown
        callback={this.callbackTimeout}
        callbackProps='any'
        placeholder={
            <p>⚙</p>
        }
        holderLoading={
            <img
                style={
                    {
                        display: 'block',
                        margin: '20px auto'
                    }
                }
                src='./public/images/ajax-loader.gif'
            />
        }
    />
</div>`;

const jsExample1 = `constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
}

callback(callbackProps) {
    return new Promise((resolve, reject) => {
        resolve(
            <div>
                <p
                    style={
                        {
                            padding: '10px'
                        }
                    }
                >
                    Profile
                </p>
                <p
                    style={
                        {
                            padding: '10px'
                        }
                    }
                >
                    Settings
                </p>
            </div>
        );
    });
}`;

const jsExample2 = `constructor(props) {
    super(props);
    this.callbackTimeout = this.callbackTimeout.bind(this);
    this.menu = undefined;
}

callbackTimeout(callbackProps) {
    return new Promise((resolve, reject) => {

        if(this.menu){
            return resolve(this.menu);
        }

        this.menu = (
            <div>
                <p
                    style={
                        {
                            padding: '10px'
                        }
                    }
                >
                    Profile
                </p>
                <p
                    style={
                        {
                            padding: '10px'
                        }
                    }
                >
                    Settings
                </p>
            </div>
        );

        setTimeout(() => {
            resolve(this.menu);
        }, 1000);
    });
}`;

class _MenuDropDown extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];
    public menu: any;

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.callbackTimeout = this.callbackTimeout.bind(this);
        this.countCallbacks = 0;
        this.menu = undefined;

        this.examples = [
            {
                title: 'MenuDropDown',
                description: trans('menuDropDown.example1'),
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
                                width: '200px',
                            }
                        }
                    >
                        <MenuDropDown
                            callback={this.callback}
                            callbackProps='any'
                            placeholder={
                                <p>⚙</p>
                            }
                        />
                    </div>
                )
            },
            {
                title: 'MenuDropDown',
                description: trans('menuDropDown.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample2,
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '200px',
                            }
                        }
                    >
                        <MenuDropDown
                            callback={this.callbackTimeout}
                            callbackProps='any'
                            placeholder={
                                <p>⚙</p>
                            }
                            holderLoading={
                                <img
                                    style={
                                        {
                                            display: 'block',
                                            margin: '20px auto'
                                        }
                                    }
                                    src='./public/images/ajax-loader.gif'
                                />
                            }
                        />
                    </div>
                )
            },
        ];
    }

    callback(callbackProps) {
        return new Promise((resolve, reject) => {
            resolve(
                <div>
                    <p
                        style={
                            {
                                padding: '10px'
                            }
                        }
                    >
                        Profile
                    </p>
                    <p
                        style={
                            {
                                padding: '10px'
                            }
                        }
                    >
                        Settings
                    </p>
                </div>
            );
        });
    }

    callbackTimeout(callbackProps) {
        return new Promise((resolve, reject) => {

            if (this.menu) {
                return resolve(this.menu);
            }

            this.menu = (
                <div>
                    <p
                        style={
                            {
                                padding: '10px'
                            }
                        }
                    >
                        Profile
                    </p>
                    <p
                        style={
                            {
                                padding: '10px'
                            }
                        }
                    >
                        Settings
                    </p>
                </div>
            );

            setTimeout(() => {
                resolve(this.menu);
            }, 1000);
        });
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return Promise.resolve('break');
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]));
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
                    data={buildModulesJsx(this.examples[0])} // Default as the first example
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
                                    key: 'placeholder',
                                    values: 'menuDropDown.placeholder'
                                },
                                {
                                    key: 'holderLoading',
                                    values: 'menuDropDown.holderLoading'
                                },
                                {
                                    key: 'callback',
                                    values: 'menuDropDown.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'menuDropDown.callbackProps'
                                },
                                {
                                    key: 'closeOnEsc',
                                    values: 'menuDropDown.closeOnEsc'
                                },
                                {
                                    key: 'closeOnOutsideClick',
                                    values: 'menuDropDown.closeOnOutsideClick'
                                },
                            ],
                            'MenuDropdown'
                        )
                    }
                />
            </div>
        );
    }
};

export default _MenuDropDown;


