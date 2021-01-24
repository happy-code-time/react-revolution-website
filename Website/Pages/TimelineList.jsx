import React from 'react';
import { Table, LoadOnScroll, LoadingBoxTop, TimelineList } from '../../react-revolution/react-revolution';
import buildModulesJsx from '../Functions/buildModulesJsx';
import trans from '../Translations/trans';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

const codeExample1 = `import { TimelineList } from 'react-revolution';
// import TimelineList from 'react-revolution/TimelineList';

<TimelineList
    timelineStart='🕛'
    timelineEnd='🕣'
    data={
        {
            'Profile': {
                data: [
                    {
                        icon: '🌏',
                        data: 'Location has been updated.',
                        callback: console.info,
                        callbackProps: 'Location has been updated.'
                    },
                    {
                        icon: '🛡',
                        data: 'Password request success.',
                        callback: console.info,
                        callbackProps: 'Password request success.'
                    },
                ]
            },
            'Messages': {
                data: [
                    {
                        icon: '📨',
                        data: '2 new messages.',
                        callback: console.info,
                        callbackProps: '2 new messages.'
                    },
                    {
                        icon: '🌫',
                        data: '1 new weather alert!',
                        callback: console.info,
                        callbackProps: '1 new weather alert!'
                    },
                ]
            },
            'Weather': {
                data: [
                    {
                        icon: '🌥',
                        data: '10:00 Light cloud',
                        callback: console.info,
                        callbackProps: '10:00 Light cloud'
                    },
                    {
                        icon: '🌧',
                        data: '12:00 Light rain',
                        callback: console.info,
                        callbackProps: '12:00 Light rain'
                    },
                    {
                        icon: '🌧',
                        data: '14:00 Strong rain',
                        callback: console.info,
                        callbackProps: '14:00 Strong rain'
                    },
                    {
                        icon: '🌩',
                        data: '16:00 Stormy',
                        callback: console.info,
                        callbackProps: '16:00 Stormy'
                    },
                    {
                        icon: '🌪',
                        data: '18:00 Storm Warning!',
                        callback: console.info,
                        callbackProps: '18:00 Storm Warning!'
                    },
                ]
            },
        }
    }
/>`;

const codeExample2 = `import { TimelineList } from 'react-revolution';
// import TimelineList from 'react-revolution/TimelineList';

<TimelineList
    data={
        {
            'Profile': {
                data: [
                    {
                        icon: '🌏',
                        data: 'Location has been updated.',
                        callback: console.info,
                        callbackProps: 'Location has been updated.'
                    },
                    {
                        icon: '🛡',
                        data: 'Password request success.',
                        callback: console.info,
                        callbackProps: 'Password request success.'
                    },
                ]
            },
            'Messages': {
                data: [
                    {
                        icon: '📨',
                        data: '2 new messages.',
                        callback: console.info,
                        callbackProps: '2 new messages.'
                    },
                    {
                        icon: '🌫',
                        data: '1 new weather alert!',
                        callback: console.info,
                        callbackProps: '1 new weather alert!'
                    },
                ]
            },
            'Weather': {
                data: [
                    {
                        icon: '🌥',
                        data: '10:00 Light cloud',
                        callback: console.info,
                        callbackProps: '10:00 Light cloud'
                    },
                    {
                        icon: '🌧',
                        data: '12:00 Light rain',
                        callback: console.info,
                        callbackProps: '12:00 Light rain'
                    },
                    {
                        icon: '🌧',
                        data: '14:00 Strong rain',
                        callback: console.info,
                        callbackProps: '14:00 Strong rain'
                    },
                    {
                        icon: '🌩',
                        data: '16:00 Stormy',
                        callback: console.info,
                        callbackProps: '16:00 Stormy'
                    },
                    {
                        icon: '🌪',
                        data: '18:00 Storm Warning!',
                        callback: console.info,
                        callbackProps: '18:00 Storm Warning!'
                    },
                ]
            },
        }
    }
/>`;

const codeExample3 = `import { TimelineList } from 'react-revolution';
// import TimelineList from 'react-revolution/TimelineList';

<TimelineList
    data={
        {
            '01-01-2021': {
                props: {
                    className: 'adding custom classes',
                    style:{
                        background: 'rgb(244,69,89)',
                        color: 'rgb(255,255,255)',
                    } 
                },
                data: [
                    {
                        icon: '🌏',
                        iconProps: {
                            className: 'adding custom classes',
                            style:{
                                background: 'rgb(244,69,89)',
                            } 
                        },
                        data: 'Location has been updated.',
                        callback: console.info,
                        callbackProps: 'Location has been updated.'
                    },
                    {
                        icon: '🛡',
                        iconProps: {
                            className: 'adding custom classes',
                            style:{
                                background: 'rgb(244,69,89)',
                            } 
                        },
                        data: 'Password request success.',
                        callback: console.info,
                        callbackProps: 'Password request success.'
                    },
                ]
            },
            '03-01-2021': {
                props: {
                    className: 'adding custom classes',
                    style:{
                        background: 'rgb(71,180,118)',
                        color: 'rgb(255,255,255)'
                    } 
                },
                data: [
                    {
                        icon: '📨',
                        iconProps: {
                            className: 'adding custom classes',
                            style:{
                                background: 'rgb(71,180,118)',
                            } 
                        },
                        data: '2 new messages.',
                        callback: console.info,
                        callbackProps: '2 new messages.'
                    },
                    {
                        icon: '🌫',
                        iconProps: {
                            className: 'adding custom classes',
                            style:{
                                background: 'rgb(71,180,118)',
                            } 
                        },
                        data: '1 new weather alert!',
                        callback: console.info,
                        callbackProps: '1 new weather alert!'
                    },
                ]
            },
            '20-01-2021': {
                props: {
                    className: 'adding custom classes',
                    style:{
                        background: '#9E005D',
                        color: 'rgb(255,255,255)'
                    } 
                },
                data: [
                    {
                        icon: '🌥',
                        iconProps: {
                            className: 'adding custom classes',
                            style: {
                                background: '#9E005D',
                            }
                        },
                        data: '10:00 Light cloud',
                        callback: console.info,
                        callbackProps: '10:00 Light cloud'
                    },
                    {
                        icon: '🌧',
                        iconProps: {
                            className: 'adding custom classes',
                            style: {
                                background: '#9E005D',
                            }
                        },
                        data: '12:00 Light rain',
                        callback: console.info,
                        callbackProps: '12:00 Light rain'
                    },
                    {
                        icon: '🌧',
                        iconProps: {
                            className: 'adding custom classes',
                            style: {
                                background: '#9E005D',
                            }
                        },
                        data: '14:00 Strong rain',
                        callback: console.info,
                        callbackProps: '14:00 Strong rain'
                    },
                    {
                        icon: '🌩',
                        iconProps: {
                            className: 'adding custom classes',
                            style: {
                                background: '#9E005D',
                            }
                        },
                        data: '16:00 Stormy',
                        callback: console.info,
                        callbackProps: '16:00 Stormy'
                    },
                    {
                        icon: '🌪',
                        iconProps: {
                            className: 'adding custom classes',
                            style: {
                                background: '#9E005D',
                            }
                        },
                        data: '18:00 Storm Warning!',
                        callback: console.info,
                        callbackProps: '18:00 Storm Warning!'
                    },
                ]
            },
        }
    }
/>`;

class _TimelineList extends React.Component {

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'TimelineList',
                description: trans('timelineList.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <TimelineList
                        timelineStart='🕛'
                        timelineEnd='🕣'
                        data={
                            {
                                'Profile': {
                                    data: [
                                        {
                                            icon: '🌏',
                                            data: 'Location has been updated.',
                                            callback: console.info,
                                            callbackProps: 'Location has been updated.'
                                        },
                                        {
                                            icon: '🛡',
                                            data: 'Password request success.',
                                            callback: console.info,
                                            callbackProps: 'Password request success.'
                                        },
                                    ]
                                },
                                'Messages': {
                                    data: [
                                        {
                                            icon: '📨',
                                            data: '2 new messages.',
                                            callback: console.info,
                                            callbackProps: '2 new messages.'
                                        },
                                        {
                                            icon: '🌫',
                                            data: '1 new weather alert!',
                                            callback: console.info,
                                            callbackProps: '1 new weather alert!'
                                        },
                                    ]
                                },
                                'Weather': {
                                    data: [
                                        {
                                            icon: '🌥',
                                            data: '10:00 Light cloud',
                                            callback: console.info,
                                            callbackProps: '10:00 Light cloud'
                                        },
                                        {
                                            icon: '🌧',
                                            data: '12:00 Light rain',
                                            callback: console.info,
                                            callbackProps: '12:00 Light rain'
                                        },
                                        {
                                            icon: '🌧',
                                            data: '14:00 Strong rain',
                                            callback: console.info,
                                            callbackProps: '14:00 Strong rain'
                                        },
                                        {
                                            icon: '🌩',
                                            data: '16:00 Stormy',
                                            callback: console.info,
                                            callbackProps: '16:00 Stormy'
                                        },
                                        {
                                            icon: '🌪',
                                            data: '18:00 Storm Warning!',
                                            callback: console.info,
                                            callbackProps: '18:00 Storm Warning!'
                                        },
                                    ]
                                },
                            }
                        }
                    />
                )
            },
            {
                title: 'TimelineList',
                description: trans('timelineList.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <TimelineList
                        data={
                            {
                                '01-01-2021': {
                                    data: [
                                        {
                                            icon: '🌏',
                                            data: 'Location has been updated.',
                                            callback: console.info,
                                            callbackProps: 'Location has been updated.'
                                        },
                                        {
                                            icon: '🛡',
                                            data: 'Password request success.',
                                            callback: console.info,
                                            callbackProps: 'Password request success.'
                                        },
                                    ]
                                },
                                '03-01-2021': {
                                    data: [
                                        {
                                            icon: '📨',
                                            data: '2 new messages.',
                                            callback: console.info,
                                            callbackProps: '2 new messages.'
                                        },
                                        {
                                            icon: '🌫',
                                            data: '1 new weather alert!',
                                            callback: console.info,
                                            callbackProps: '1 new weather alert!'
                                        },
                                    ]
                                },
                                '20-01-2021': {
                                    data: [
                                        {
                                            icon: '🌥',
                                            data: '10:00 Light cloud',
                                            callback: console.info,
                                            callbackProps: '10:00 Light cloud'
                                        },
                                        {
                                            icon: '🌧',
                                            data: '12:00 Light rain',
                                            callback: console.info,
                                            callbackProps: '12:00 Light rain'
                                        },
                                        {
                                            icon: '🌧',
                                            data: '14:00 Strong rain',
                                            callback: console.info,
                                            callbackProps: '14:00 Strong rain'
                                        },
                                        {
                                            icon: '🌩',
                                            data: '16:00 Stormy',
                                            callback: console.info,
                                            callbackProps: '16:00 Stormy'
                                        },
                                        {
                                            icon: '🌪',
                                            data: '18:00 Storm Warning!',
                                            callback: console.info,
                                            callbackProps: '18:00 Storm Warning!'
                                        },
                                    ]
                                },
                            }
                        }
                    />
                )
            },
            {
                title: 'TimelineList',
                description: trans('timelineList.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <TimelineList
                        data={
                            {
                                '01-01-2021': {
                                    props: {
                                        className: 'adding custom classes',
                                        style:{
                                            background: 'rgb(244,69,89)',
                                            color: 'rgb(255,255,255)',
                                        } 
                                    },
                                    data: [
                                        {
                                            icon: '🌏',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style:{
                                                    background: 'rgb(244,69,89)',
                                                } 
                                            },
                                            data: 'Location has been updated.',
                                            callback: console.info,
                                            callbackProps: 'Location has been updated.'
                                        },
                                        {
                                            icon: '🛡',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style:{
                                                    background: 'rgb(244,69,89)',
                                                } 
                                            },
                                            data: 'Password request success.',
                                            callback: console.info,
                                            callbackProps: 'Password request success.'
                                        },
                                    ]
                                },
                                '03-01-2021': {
                                    props: {
                                        className: 'adding custom classes',
                                        style:{
                                            background: 'rgb(71,180,118)',
                                            color: 'rgb(255,255,255)'
                                        } 
                                    },
                                    data: [
                                        {
                                            icon: '📨',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style:{
                                                    background: 'rgb(71,180,118)',
                                                } 
                                            },
                                            data: '2 new messages.',
                                            callback: console.info,
                                            callbackProps: '2 new messages.'
                                        },
                                        {
                                            icon: '🌫',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style:{
                                                    background: 'rgb(71,180,118)',
                                                } 
                                            },
                                            data: '1 new weather alert!',
                                            callback: console.info,
                                            callbackProps: '1 new weather alert!'
                                        },
                                    ]
                                },
                                '20-01-2021': {
                                    props: {
                                        className: 'adding custom classes',
                                        style:{
                                            background: '#9E005D',
                                            color: 'rgb(255,255,255)'
                                        } 
                                    },
                                    data: [
                                        {
                                            icon: '🌥',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style: {
                                                    background: '#9E005D',
                                                }
                                            },
                                            data: '10:00 Light cloud',
                                            callback: console.info,
                                            callbackProps: '10:00 Light cloud'
                                        },
                                        {
                                            icon: '🌧',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style: {
                                                    background: '#9E005D',
                                                }
                                            },
                                            data: '12:00 Light rain',
                                            callback: console.info,
                                            callbackProps: '12:00 Light rain'
                                        },
                                        {
                                            icon: '🌧',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style: {
                                                    background: '#9E005D',
                                                }
                                            },
                                            data: '14:00 Strong rain',
                                            callback: console.info,
                                            callbackProps: '14:00 Strong rain'
                                        },
                                        {
                                            icon: '🌩',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style: {
                                                    background: '#9E005D',
                                                }
                                            },
                                            data: '16:00 Stormy',
                                            callback: console.info,
                                            callbackProps: '16:00 Stormy'
                                        },
                                        {
                                            icon: '🌪',
                                            iconProps: {
                                                className: 'adding custom classes',
                                                style: {
                                                    background: '#9E005D',
                                                }
                                            },
                                            data: '18:00 Storm Warning!',
                                            callback: console.info,
                                            callbackProps: '18:00 Storm Warning!'
                                        },
                                    ]
                                },
                            }
                        }
                    />
                )
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
                                    key: 'direction',
                                    values: 'timelineList.direction'
                                },
                                {
                                    key: 'data',
                                    values: 'timelineList.data'
                                },
                                {
                                    key: 'data.props',
                                    values: 'timelineList.data.props'
                                },
                                {
                                    key: 'data.data',
                                    values: 'timelineList.data.data'
                                },
                                {
                                    key: 'data.data.icon',
                                    values: 'timelineList.data.icon'
                                },
                                {
                                    key: 'data.data.iconProps',
                                    values: 'timelineList.data.iconProps'
                                },
                                {
                                    key: 'data.data.callback',
                                    values: 'timelineList.data.callback'
                                },
                                {
                                    key: 'data.data.callbackProps',
                                    values: 'timelineList.data.callbackProps'
                                },
                                {
                                    key: 'data.data.data',
                                    values: 'timelineList.data.data'
                                },
                                {
                                    key: 'data.data.dataProps',
                                    values: 'timelineList.data.dataProps'
                                },
                                {
                                    key: 'timelineStart',
                                    values: 'timelineList.timelineStart'
                                },
                                {
                                    key: 'timelineEnd',
                                    values: 'timelineList.timelineEnd'
                                },
                            ],
                            'rr-timeline-list'
                        )
                    }
                />
            </div>
        );
    }
};

export default _TimelineList;


