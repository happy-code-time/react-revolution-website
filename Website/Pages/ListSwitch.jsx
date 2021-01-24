import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, ListSwitch } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

const codeExample1 = `import { ListSwitch } from 'react-revolution';
// import ListSwitch from 'react-revolution/ListSwitch';

<div
    style={
        {
            width: '200px',
        }
    }
    >
    <ListSwitch
        placeholder='🔧'
        data={this.getdata()}
    />
</div>`;

const codeExample2 = `import { ListSwitch } from 'react-revolution';
// import ListSwitch from 'react-revolution/ListSwitch';

<div
    style={
        {
            width: '200px',
        }
    }
    >
    <ListSwitch
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
    this.getdata = this.getdata.bind(this);
}

getdata() {
    return [
        {
            text: 'Settings',
            callback: console.info,
            callbackProps: 'clicked',
            next: '⚙',
            previous: '<',
            data: [
                {
                    text: 'Profile',
                    callback: console.info,
                    callbackProps: 'clicked',
                    next: '👤',
                    previous: '<',
                    data: [
                        {
                            text: 'Private settings',
                            callback: console.info,
                            callbackProps: 'clicked',
                            previous: '<',
                            next: '🕵',
                            data: [
                                {
                                    text: 'Setting 1',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                },
                                {
                                    text: 'Setting 2',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Location',
                    callback: console.info,
                    callbackProps: 'clicked',
                    next: '🌐',
                    previous: '',
                    data: [
                        {
                            text: 'City',
                            callback: console.info,
                            callbackProps: 'clicked',
                        },
                        {
                            text: 'Street',
                            callback: console.info,
                            callbackProps: 'clicked',
                        }
                    ]
                }
            ]
        },
    ];
}`;

const jsExample2 = `constructor(props) {
    super(props);
    this.callbackGetData = this.callbackGetData.bind(this);
}

callbackGetData(callbackProps) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(this.getdata());
        }, 1000);
    });
}

getdata() {
    return [
        {
            text: 'Settings',
            callback: console.info,
            callbackProps: 'clicked',
            next: '⚙',
            previous: '<',
            data: [
                {
                    text: 'Profile',
                    callback: console.info,
                    callbackProps: 'clicked',
                    next: '👤',
                    previous: '<',
                    data: [
                        {
                            text: 'Private settings',
                            callback: console.info,
                            callbackProps: 'clicked',
                            previous: '<',
                            next: '🕵',
                            data: [
                                {
                                    text: 'Setting 1',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                },
                                {
                                    text: 'Setting 2',
                                    callback: console.info,
                                    callbackProps: 'clicked',
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Location',
                    callback: console.info,
                    callbackProps: 'clicked',
                    next: '🌐',
                    previous: '',
                    data: [
                        {
                            text: 'City',
                            callback: console.info,
                            callbackProps: 'clicked',
                        },
                        {
                            text: 'Street',
                            callback: console.info,
                            callbackProps: 'clicked',
                        }
                    ]
                }
            ]
        },
    ];
}`;

class _ListSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.getdata = this.getdata.bind(this);
        this.callbackGetData = this.callbackGetData.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ListSwitch',
                description: trans('listSwitch.example1'),
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
                        <ListSwitch
                            placeholder='🔧'
                            data={this.getdata()}
                        />
                    </div>
                )
            },
            {
                title: 'ListSwitch',
                description: trans('listSwitch.example2'),
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
                        <ListSwitch
                            placeholder='🔧'
                            callback={this.callbackGetData}
                            callbackProps='any'
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

    callbackGetData(callbackProps) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(this.getdata());
            }, 1000);
        });
    }

    getdata() {
        return [
            {
                text: 'Settings',
                callback: console.info,
                callbackProps: 'clicked',
                next: '⚙',
                previous: '<',
                data: [
                    {
                        text: 'Profile',
                        callback: console.info,
                        callbackProps: 'clicked',
                        next: '👤',
                        previous: '<',
                        data: [
                            {
                                text: 'Private settings',
                                callback: console.info,
                                callbackProps: 'clicked',
                                previous: '<',
                                next: '🕵',
                                data: [
                                    {
                                        text: 'Setting 1',
                                        callback: console.info,
                                        callbackProps: 'clicked',
                                    },
                                    {
                                        text: 'Setting 2',
                                        callback: console.info,
                                        callbackProps: 'clicked',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: 'Location',
                        callback: console.info,
                        callbackProps: 'clicked',
                        next: '🌐',
                        previous: '',
                        data: [
                            {
                                text: 'City',
                                callback: console.info,
                                callbackProps: 'clicked',
                            },
                            {
                                text: 'Street',
                                callback: console.info,
                                callbackProps: 'clicked',
                            }
                        ]
                    }
                ]
            },
        ];
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
                                    key: 'placeholder',
                                    values: 'menuDropDown.placeholder'
                                },
                                {
                                    key: 'holderLoading',
                                    values: 'menuDropDown.holderLoading'
                                },
                                {
                                    key: 'closeOnEsc',
                                    values: 'menuDropDown.closeOnEsc'
                                },
                                {
                                    key: 'closeOnOutsideClick',
                                    values: 'menuDropDown.closeOnOutsideClick'
                                },
                                {
                                    key: 'data',
                                    values: 'listSwitch.data'
                                },
                                {
                                    key: 'data.text',
                                    values: 'listSwitch.data.text'
                                },
                                {
                                    key: 'data.previous',
                                    values: 'listSwitch.data.previous'
                                },
                                {
                                    key: 'data.next',
                                    values: 'listSwitch.data.next'
                                },
                                {
                                    key: 'data.callback',
                                    values: 'listSwitch.data.callback'
                                },
                                {
                                    key: 'data.callbackProps',
                                    values: 'listSwitch.data.callbackProps'
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
                                    key: 'previous',
                                    values: 'listSwitch.previous'
                                },
                                {
                                    key: 'next',
                                    values: 'listSwitch.next'
                                },
                                {
                                    key: 'title',
                                    values: 'listSwitch.title'
                                },
                                {
                                    key: 'arrowNextClick',
                                    values: 'listSwitch.arrowNextClick'
                                },
                                {
                                    key: 'animation',
                                    values: 'listSwitch.animation'
                                },
                                {
                                    key: 'animationTimeout',
                                    values: 'listSwitch.animationTimeout'
                                },
                                {
                                    key: 'closeAfterCallback',
                                    values: 'listSwitch.closeAfterCallback'
                                },
                                {
                                    key: 'resetSlides',
                                    values: 'listSwitch.resetSlides'
                                },
                                {
                                    key: 'resetData',
                                    values: 'listSwitch.resetData'
                                },
                            ],
                            'rr-list-switch'
                        )
                    }
                />
            </div>
        );
    }
};

export default _ListSwitch;


