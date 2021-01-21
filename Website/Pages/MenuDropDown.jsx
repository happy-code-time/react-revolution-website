import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, MenuDropDown } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

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

class _MenuDropDown extends React.Component {

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
                {
                    getDescriptionForstyle('rr-menu-dropdown')
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
                            'rr-menu-dropdown'
                        )
                    }
                />
            </div>
        );
    }
};

export default _MenuDropDown;


