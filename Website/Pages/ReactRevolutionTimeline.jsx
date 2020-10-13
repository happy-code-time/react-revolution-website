import React from 'react';

import { Table, Timeline, TextWriter, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Timeline, TextWriter } from 'react-revolution';
// import Timeline from 'react-revolution/Timeline';
// import TextWriter from 'react-revolution/TextWriter';

<Timeline
    lineMiddle={true}
    lineEntry={true}
    lineTitle={false}
    mediaBreak={1024}
    data={this.generateTimelinesData()}
/>`;

const codeExample2 = `import { Timeline, TextWriter } from 'react-revolution';
// import Timeline from 'react-revolution/Timeline';
// import TextWriter from 'react-revolution/TextWriter';

<Timeline
    lineMiddle={true}
    lineTitle={true}
    colorLineMiddle='dodgerblue'
    colorLineEntry='dodgerblue'
    mediaBreak={1024}
    data={this.generateTimelinesData()}
/>`;

const codeExample3 = `import { Timeline, TextWriter } from 'react-revolution';
// import Timeline from 'react-revolution/Timeline';
// import TextWriter from 'react-revolution/TextWriter';

<Timeline
    lineMiddle={true}
    borderStyle='dashed'
    dashedSize='large'
    mediaBreak={1024}
    data={this.generateTimelinesData()}
/>`;

const jsCode = `generateTimelinesData(){
    const generatedData = [];

    const years = [
        '2020', '2017', 
        '2015', '2012', 
        '2010', '2009'
    ];

    for(let x = 0; x < years.length; x++){
        const modulo =  (0 == x % 2);

        generatedData.push(
            {
                title: years[x],
                align: modulo ? 'left' : 'right',
                content: (
                    <ul>
                        <li>
                            <TextWriter 
                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
                                speed={(5*(x+2))} 
                            />
                        </li>
                    </ul>
                )
            }
        );
    }

    return generatedData;
}`;

class ReactRevolutionTimeline extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Timeline',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Timeline
                        lineMiddle={true}
                        lineEntry={true}
                        lineTitle={false}
                        mediaBreak={1024}
                        data={this.generateTimelinesData()}
                    />
                )
            },
            {
                title: 'Timeline',
                description: '',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Timeline
                        lineMiddle={true}
                        lineTitle={true}
                        colorLineMiddle='dodgerblue'
                        colorLineEntry='dodgerblue'
                        mediaBreak={1024}
                        data={this.generateTimelinesData()}
                    />
                )
            },
            {
                title: 'Timeline',
                description: '',
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsCode,
                css: '',
                html: '',
                live: (
                    <Timeline
                        lineMiddle={true}
                        borderStyle='dashed'
                        dashedSize='large' // only for dashed borderStyle
                        mediaBreak={1024}
                        data={this.generateTimelinesData()}
                    />
                )
            }
        ];
    }

    generateTimelinesData(){
        const generatedData = [];

        const years = [
            '2020', '2017', 
            '2015', '2012', 
            '2010', '2009'
        ];

        for(let x = 0; x < years.length; x++){
            const modulo =  (0 == x % 2);

            generatedData.push(
                {
                    title: years[x],
                    align: modulo ? 'left' : 'right',
                    content: (
                        <ul>
                            <li>
                                <TextWriter 
                                    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
                                    speed={(5*(x+2))} 
                                />
                            </li>
                        </ul>
                    )
                }
            );
        }

        return generatedData;
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
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={500}
                    fireScrollBack={true} 
                />
                {
                    getDescriptionForstyle('rr-timeline')
                }
                <h1 className="h1-title border-none text-center mb-4">
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
                                    key: 'mediaBreak',
                                    values: 'mediaBreak'
                                },
                                {
                                    key: 'lineMiddle',
                                    values: 'timeline.lineMiddle'
                                },
                                {
                                    key: 'lineTitle',
                                    values: 'timeline.lineTitle'
                                },
                                {
                                    key: 'lineEntry',
                                    values: 'timeline.lineEntry'
                                },
                                {
                                    key: 'colorLineMiddle',
                                    values: 'timeline.colorLineMiddle'
                                },
                                {
                                    key: 'colorLineEntry',
                                    values: 'timeline.colorLineEntry'
                                },
                                {
                                    key: 'colorBorderEntry',
                                    values: 'timeline.colorBorderEntry'
                                },
                                {
                                    key: 'borderStyle',
                                    values: 'timeline.borderStyle'
                                },
                                {
                                    key: 'dashedSize',
                                    values: 'timeline.dashedSize'
                                },
                                {
                                    key: 'data',
                                    values: 'timeline.data'
                                },
                                {
                                    key: 'data.title',
                                    values: 'timeline.data.title'
                                },
                                {
                                    key: 'data.align',
                                    values: 'timeline.data.align'
                                },
                                {
                                    key: 'data.content',
                                    values: 'timeline.data.content'
                                },
                            ],
                            'rr-timeline'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionTimeline;