import React from 'react';
import { Table, Preloader, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    data={
        [
            {
                type: 'square',
                flexColumn: false,
                props: {
                    title: 'x'
                },
                data: [
                    {
                        type: 'title',
                    },
                    {
                        type: 'text',
                    },
                    {
                        type: 'text',
                    }
                ]
            }
        ]
    }
/>`;

const codeExample2 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    data={
        [
            {
                type: 'title',
                flexColumn: false,
                data: [
                    {
                        type: 'square',
                    },
                ]
            }
        ]
    }
/>`;

const codeExample3 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    data={
        [
            {
                type: 'square',
                flexColumn: false,
                data: [
                    {
                        type: 'text',
                        count: 3,
                        flexColumn: true
                    },
                ]
            }
        ]
    }
/>`;

const codeExample4 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    data={
        [
            {
                type: 'circle',
                flexColumn: false,
                data: [
                    {
                        type: 'text',
                        count: 3,
                        flexColumn: true
                    },
                ]
            }
        ]
    }
/>`;

const codeExample5 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    data={
        [
            {
                type: 'square',
                flexColumn: false,
                data: [
                    {
                        type: 'circle',
                        flexColumn: false,
                        data: [
                            {
                                type: 'text',
                                flexColumn: true,
                                count: 3,
                            }
                        ]
                    },
                ]
            }
        ]
    }
/>`;

const codeExample6 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    backgroundColor='rgba(11,11,11, 0.4)'
    backgroundLoader='rgba(211,211,211, 0.4)'
    data={
        [
            {
                type: 'rectangle',
                flexColumn: false,
                data: [
                    {
                        type: 'circle',
                        flexColumn: true,
                        data: [
                            {
                                type: 'text',
                                flexColumn: true,
                                count: 2,
                            }
                        ]
                    },
                ]
            }
        ]
    }
/>`;

const codeExample7 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    backgroundColor='rgba(11,11,11, 0.4)'
    backgroundLoader='rgba(211,211,211, 0.4)'
    data={
        [
            {
                type: 'rectangle',
                flexColumn: false,
                data: [
                    {
                        type: 'circle',
                        flexColumn: true,
                        data: [
                            {
                                type: 'text',
                                flexColumn: true,
                                count: 2,
                                // overwrite globals
                                backgroundColor: 'rgb(122,122,122)',
                                backgroundLoader: 'rgb(162,162,162)'
                            }
                        ]
                    },
                ]
            }
        ]
    }
/>`;

const codeExample8 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    data={
        [
            {
                type: 'square-l',
                flexColumn: true,
                data: [
                    {
                        type: 'text-s',
                    },
                ]
            }
        ]
    }
/>`;

const codeExample9 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    size='xs'
    data={
        [
            {
                type: 'square',
                flexColumn: false,
                data: [
                    {
                        type: 'circle',
                        flexColumn: false,
                        data: [
                            {
                                type: 'text',
                                flexColumn: true,
                                count: 3,
                            }
                        ]
                    },
                ]
            }
        ]
    }
/>`;

const codeExample10 = `import { Preloader } from 'react-revolution';
// import Preloader from 'react-revolution/Preloader';

<Preloader
    size='xl'
    data={
        [
            {
                type: 'square',
                flexColumn: false,
                data: [
                    {
                        type: 'circle',
                        flexColumn: false,
                        data: [
                            {
                                // custom type-size
                                type: 'text-xs',
                                flexColumn: true,
                                count: 3,
                            }
                        ]
                    },
                ]
            }
        ]
    }
/>`;

const availableSizes = `
Available types and default sizes: 

'square-xs' : {
    width: '50px',
    height: '50px'
},
'square-s' : {
    width: '100px',
    height: '100px'
},
'square' : {
    width: '150px',
    height: '150px'
},
'square-l' : {
    width: '200px',
    height: '200px'
},
'square-xl' : {
    width: '250px',
    height: '250px'
},
'square-xxl' : {
    width: '300px',
    height: '300px'
},
'rectangle-xs' : {
    width: '100px',
    height: '50px'
},
'rectangle-s' : {
    width: '200px',
    height: '100px'
},
'rectangle' : {
    width: '300px',
    height: '150px'
},
'rectangle-l' : {
    width: '400px',
    height: '200px'
},
'rectangle-xl' : {
    width: '500px',
    height: '250px'
},
'rectangle-xxl' : {
    width: '600px',
    height: '300px'
},
'text-xs' : {
    width: '50px',
    height: '20px'
}, 
'text-s' : {
    width: '100px',
    height: '20px'
},
'text' : {
    width: '150px',
    height: '20px'
},
'text-l' : {
    width: '200px',
    height: '20px'
},
'text-xl' : {
    width: '250px',
    height: '20px'
},
'text-xxl' : {
    width: '300px',
    height: '20px'
},
'title-xs' : {
    width: '50px',
    height: '30px'
}, 
'title-s' : {
    width: '100px',
    height: '30px'
},
'title' : {
    width: '150px',
    height: '30px'
},
'title-l' : {
    width: '200px',
    height: '30px'
},
'title-xl' : {
    width: '250px',
    height: '30px'
},
'title-xxl' : {
    width: '300px',
    height: '30px'
},
'circle-xs' : {
    width: '10px',
    height: '10px'
},
'circle-s' : {
    width: '15px',
    height: '15px'
},
'circle' : {
    width: '30px',
    height: '30px'
},
'circle-l' : {
    width: '45px',
    height: '45px'
},
'circle-xl' : {
    width: '60px',
    height: '60px'
},
'circle-xxl' : {
    width: '75px',
    height: '75px'
}`;

class _Preloader extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Preloader',
                description: 'Preloader with 4 items. First items is of type "square", second "title" and the last two are "text" types.',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        data={
                            [
                                {
                                    type: 'square',
                                    flexColumn: false,
                                    props: {
                                        title: 'x'
                                    },
                                    data: [
                                        {
                                            type: 'title',
                                        },
                                        {
                                            type: 'text',
                                        },
                                        {
                                            type: 'text',
                                        }
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with 2 items. First items is of type "title", second "square".',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        data={
                            [
                                {
                                    type: 'title',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'square',
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with 4 items. First items is of type "square" the last 3 items are of type "text", created by single array entry by adding the key "count" equal to 3 - it`s mean create 3 items of the same type. The last entry includes also the key "flexColumn" set to true - it`s mean create 3 items in a flex of direction column (default the flex direction is set to row).',
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        data={
                            [
                                {
                                    type: 'square',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'text',
                                            count: 3,
                                            flexColumn: true
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with 4 items. First items is of type "circle" the last 3 items are of type "text", created by single array entry by adding the key "count" equal to 3 - it`s mean create 3 items of the same type. The last entry includes also the key "flexColumn" set to true - it`s mean create 3 items in a flex of direction column (default the flex direction is set to row).',
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        data={
                            [
                                {
                                    type: 'circle',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'text',
                                            count: 3,
                                            flexColumn: true
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with 5 items. First items is of type "square", the second of type "circle" and the last 3 items are of type "text", created by single array entry by adding the key "count" equal to 3 - it`s mean create 3 items of the same type. The last entry includes also the key "flexColumn" set to true - it`s mean create 3 items in a flex of direction column (default the flex direction is set to row).',
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        data={
                            [
                                {
                                    type: 'square',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'circle',
                                            flexColumn: false,
                                            data: [
                                                {
                                                    type: 'text',
                                                    flexColumn: true,
                                                    count: 3,
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with specified background-color and loaders color.',
                reactTextBefore: '',
                react: codeExample6,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        backgroundColor='rgba(11,11,11, 0.4)'
                        backgroundLoader='rgba(211,211,211, 0.4)'
                        data={
                            [
                                {
                                    type: 'rectangle',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'circle',
                                            flexColumn: true,
                                            data: [
                                                {
                                                    type: 'text',
                                                    flexColumn: true,
                                                    count: 2,
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with specified background-color and loaders color. The last entry overwrites the passed global colors by passing custom colors for itself.',
                reactTextBefore: '',
                react: codeExample7,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        backgroundColor='rgba(11,11,11, 0.4)'
                        backgroundLoader='rgba(211,211,211, 0.4)'
                        data={
                            [
                                {
                                    type: 'rectangle',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'circle',
                                            flexColumn: true,
                                            data: [
                                                {
                                                    type: 'text',
                                                    flexColumn: true,
                                                    count: 2,
                                                    // overwrite globals
                                                    backgroundColor: 'rgb(122,122,122)',
                                                    backgroundLoader: 'rgb(162,162,162)'
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with specified different type-size.',
                reactTextBefore: '',
                react: codeExample8,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        data={
                            [
                                {
                                    type: 'square-l',
                                    flexColumn: true,
                                    data: [
                                        {
                                            type: 'text-s',
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with specified global size (xs) of all passed types.',
                reactTextBefore: '',
                react: codeExample9,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        size='xs'
                        data={
                            [
                                {
                                    type: 'square',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'circle',
                                            flexColumn: false,
                                            data: [
                                                {
                                                    type: 'text',
                                                    flexColumn: true,
                                                    count: 3,
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'Preloader',
                description: 'Preloader with specified global size (xl) of all passed types. The last 3 items has custom size.',
                reactTextBefore: '',
                react: codeExample10,
                reactTextAfter: availableSizes,
                js: '',
                css: '',
                html: '',
                live: (
                    <Preloader
                        size='xl'
                        data={
                            [
                                {
                                    type: 'square',
                                    flexColumn: false,
                                    data: [
                                        {
                                            type: 'circle',
                                            flexColumn: false,
                                            data: [
                                                {
                                                    // custom type-size
                                                    type: 'text-xs',
                                                    flexColumn: true,
                                                    count: 3,
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
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
                    fireScrollEvent={300}
                    fireScrollBack={true}
                />
                <StyleImplementation />
                <h1 className="title-border">
                     <i className="fab fa-keycdn"></i>                    
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
                                    key: 'size',
                                    values: 'preloader.size'
                                },
                                {
                                    key: 'backgroundColor',
                                    values: 'preloader.backgroundColor'
                                },
                                {
                                    key: 'backgroundLoader',
                                    values: 'preloader.backgroundLoader'
                                },
                                {
                                    key: 'data',
                                    values: 'preloader.data'
                                },
                                {
                                    key: 'data.count',
                                    values: 'preloader.data.count'
                                },
                                {
                                    key: 'data.jsx',
                                    values: 'preloader.data.jsx'
                                },
                                {
                                    key: 'data.flexColumn',
                                    values: 'preloader.data.flexColumn'
                                },
                                {
                                    key: 'data.props',
                                    values: 'preloader.data.props'
                                },
                                {
                                    key: 'data.width',
                                    values: 'preloader.data.width'
                                },
                                {
                                    key: 'data.height',
                                    values: 'preloader.data.height'
                                },
                                {
                                    key: 'data.backgroundColor',
                                    values: 'preloader.data.backgroundColor'
                                },
                                {
                                    key: 'data.backgroundLoader',
                                    values: 'preloader.data.backgroundLoader'
                                },
                                {
                                    key: 'data.data',
                                    values: 'preloader.data.data'
                                },
                            ],
                            'rr-preloader'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Preloader;

