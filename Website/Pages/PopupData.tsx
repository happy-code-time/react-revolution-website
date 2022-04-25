import React from 'react';
//@ts-ignore
import { Table, Slider, PopupData, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<PopupData
    direction='left'
    holderData='DataHolder'
    contentData={
        [
            {
                data: (
                    <a href="#">
                        link 1
                    </a>
                )
            },
            {
                data: (
                    <a href="#">
                        link 2
                    </a>
                )
            }
        ]
    }
/>`;

const codeExample1a = `import { PopupData, Slider } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';
// import Slider from 'react-revolution/Slider';

<PopupData
    direction='left'
    holderData='dots'
    contentData={
        (
            <div
                style={
                    {
                        width: '500px',
                        height: '300px',
                        margin: '0'
                    }
                }
            >
                <Slider
                    useLayerX={false}
                    data={
                        [
                            {
                                image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                            },
                            {
                                image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                            },
                            {
                                image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                            },
                            {
                                image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                            },
                        ]
                    }
                />
            </div>
        )
    }
/>`;

const codeExample2 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ float: 'right' }}>
    <PopupData
        direction='right'
        holderData='DataHolder'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

const codeExample3 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ marginLeft: '50px' }}>
    <PopupData
        direction='center'
        holderData='DataHolder'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

const codeExample4 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<PopupData
    direction='left'
    holderInside={true}
    holderData='🛡'
    contentData={
        [
            {
                data: (
                    <a href="#">
                        link 1 
                    </a>
                )
            },
            {
                data: (
                    <a href="#">
                        link 2 
                    </a>
                )
            }
        ]
    }
/>`;

const codeExample5 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ float: 'right' }}>
    <PopupData
        direction='right'
        holderInside={true}
        holderData='🛡'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1 
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2 
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

const codeExample6 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ marginLeft: '50px' }}>
    <PopupData
        direction='center'
        holderInside={true}
        holderData='🛡'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1 
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2 
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

const codeExample7 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ marginLeft: '50px' }}>
    <PopupData
        direction='left'
        holderData='dots'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

const codeExample8 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ marginLeft: '50px' }}>
    <PopupData
        direction='left'
        holderData='square'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

const codeExample9 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ marginLeft: '50px' }}>
    <PopupData
        direction='left'
        holderData='hamburger'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

const codeExample10 = `import { PopupData } from 'react-revolution';
// import PopupData from 'react-revolution/PopupData';

<div style={{ marginLeft: '50px' }}>
    <PopupData
        direction='left'
        holderData='hamburger-right'
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
</div>`;

class _PopupData extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'PopupData',
                description: trans('popupData.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <PopupData
                        direction='left'
                        holderData='DataHolder'
                        contentData={
                            [
                                {
                                    data: (
                                        <a href="#">
                                            link 1
                                        </a>
                                    )
                                },
                                {
                                    data: (
                                        <a href="#">
                                            link 2
                                        </a>
                                    )
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example1a'),
                reactTextBefore: '',
                react: codeExample1a,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <PopupData
                        direction='left'
                        holderData='dots'
                        contentData={
                            (
                                <div
                                    style={
                                        {
                                            width: '500px',
                                            height: '300px',
                                            margin: '0'
                                        }
                                    }
                                >
                                    <Slider
                                        useLayerX={false}
                                        data={
                                            [
                                                {
                                                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                                },
                                                {
                                                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                                },
                                                {
                                                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                                },
                                                {
                                                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                                },
                                            ]
                                        }
                                    />
                                </div>
                            )
                        }
                    />
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ float: 'right' }}>
                        <PopupData
                            direction='right'
                            holderData='DataHolder'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginLeft: '50px' }}>
                        <PopupData
                            direction='center'
                            holderData='🛡'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <PopupData
                        direction='left'
                        holderInside={true}
                        holderData='🛡'
                        contentData={
                            [
                                {
                                    data: (
                                        <a href="#">
                                            link 1
                                        </a>
                                    )
                                },
                                {
                                    data: (
                                        <a href="#">
                                            link 2
                                        </a>
                                    )
                                }
                            ]
                        }
                    />
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example5'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ float: 'right' }}>
                        <PopupData
                            direction='right'
                            holderInside={true}
                            holderData='🛡'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example6'),
                reactTextBefore: '',
                react: codeExample6,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginLeft: '50px' }}>
                        <PopupData
                            direction='center'
                            holderInside={true}
                            holderData='🛡'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example7'),
                reactTextBefore: '',
                react: codeExample7,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginLeft: '50px' }}>
                        <PopupData
                            direction='left'
                            holderData='dots'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example8'),
                reactTextBefore: '',
                react: codeExample8,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginLeft: '50px' }}>
                        <PopupData
                            direction='left'
                            holderData='square'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example9'),
                reactTextBefore: '',
                react: codeExample9,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginLeft: '50px' }}>
                        <PopupData
                            direction='left'
                            holderData='hamburger'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupData',
                description: trans('popupData.example10'),
                reactTextBefore: '',
                react: codeExample10,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginLeft: '50px' }}>
                        <PopupData
                            direction='left'
                            holderData='hamburger-right'
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
        ];
    }

    callback(clickEvent, icon) {
        console.info(icon);
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
                    fireScrollEvent={300}
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
                                    key: 'direction',
                                    values: 'popupData.direction'
                                },
                                {
                                    key: 'holderData',
                                    values: 'popupData.holderData'
                                },
                                {
                                    key: 'animationTimeout',
                                    values: 'popupData.animationTimeout'
                                },
                                {
                                    key: 'animation',
                                    values: 'popupData.animation'
                                },
                                {
                                    key: 'contentData',
                                    values: 'popupData.contentData'
                                },
                                {
                                    key: 'contentData.data',
                                    values: 'popupData.contentData.data'
                                },
                            ],
                            'PopupData'
                        )
                    }
                />
            </div>
        );
    }
};

export default _PopupData;

