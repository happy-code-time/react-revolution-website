import React from 'react';

import { Table, DragDropArea, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { DragDropArea } from 'react-revolution';
// import DragDropArea from 'react-revolution/DragDropArea';

`;

class ReactRevolutionDragDropArea extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.callbackAllowDrop = this.callbackAllowDrop.bind(this);
        this.countCallbacks = 0;

        this.state = {
            data: {
                'Avocado' : {
                    dropLoading: 'loading',
                    text: 'Avocado',
                    data: [
                        {
                            text: 'uno'
                        }
                    ]
                },
                'Avocado 2' : {
                    dropLoading: 'loading',
                    text: 'Avocado 2',
                    data: [
                        {
                            text: 'due'
                        }
                    ]
                },
            },
            changes: []
        };

        this.examples = [
            {
                title: 'DragDropArea',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <span>
                    <DragDropArea
                        addClass='rr-drag-drop-area-example'
                        itemsPerLine={4}
                        mediaBreak={1024}
                        data={data}
                        callback={this.callback}
                        callbackAllowDrop={this.callbackAllowDrop}
                    />
                    <div className="">
                        {
                            changes.map( change => {
                                return (
                                    <div key={uuid()}>
                                        {
                                            `${change.source} 
                                            -> 
                                            ${change.target}
                                            : 
                                            ${change.item.text}`
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </span>
                )
            },
            {
                title: 'DragDropArea',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <span>
                    <DragDropArea
                        addClass='rr-drag-drop-area-example'
                        itemsPerLine={4}
                        mediaBreak={1024}
                        data={data}
                        callback={this.callback}
                        callbackAllowDrop={this.callbackAllowDrop}
                    />
                    <div className="">
                        {
                            changes.map( change => {
                                return (
                                    <div key={uuid()}>
                                        {
                                            `${change.source} 
                                            -> 
                                            ${change.target}
                                            : 
                                            ${change.item.text}`
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </span>
                )
            }
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

    callback(prevData, nextData, change, callbackProps){
        this.setState({
            data: nextData,
            changes: [...this.state.changes, change]
        });
    }

    callbackAllowDrop(prevData, nextData, change, allowDropProps){
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(true);
            }, 1000);
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
                    getDescriptionForstyle('rr-dark-lines-404')
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
                                    key: 'reactRouter',
                                    values: 'reactRouter'
                                },
                                {
                                    key: 'link',
                                    values: 'link.404'
                                },
                                {
                                    key: 'link.text',
                                    values: 'link.404.text'
                                },
                                {
                                    key: 'link.href',
                                    values: 'link.404.href'
                                },
                                {
                                    key: 'link.props',
                                    values: 'link.404.props'
                                },
                                {
                                    key: 'link.callback',
                                    values: 'link.404.callback'
                                },
                                {
                                    key: 'text404',
                                    values: 'text404'
                                },
                                {
                                    key: 'text1',
                                    values: '404.text1'
                                },
                                {
                                    key: 'text2',
                                    values: '404.text2'
                                },
                            ],
                            'rr-dark-lines-404'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionDragDropArea;