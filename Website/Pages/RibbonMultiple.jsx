import React from 'react';
import { Table, RibbonMultiple, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { RibbonMultiple } from 'react-revolution';
// import RibbonMultiple from 'react-revolution/RibbonMultiple';

<RibbonMultiple
    ribbons={
        [
            {
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                ribbon: (
                    <span>
                        SALE!
                    </span>
                )
            },
            {
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                directionX: 'left',
                ribbon: (
                    <span>
                        -90%
                    </span>
                )
            }
        ]
    }
    content={this.getJsx()}
/>`;

const codeExample2 = `import { RibbonMultiple } from 'react-revolution';
// import RibbonMultiple from 'react-revolution/RibbonMultiple';

<RibbonMultiple
    ribbons={
        [
            {
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                directionY: 'top',
                directionX: 'left',
                ribbon: (
                    <span>
                        SALE!
                    </span>
                )
            },
            {
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                ribbon: (
                    <span>
                        -90%
                    </span>
                )
            }
        ]
    }
    content={this.getJsx()}
/>`;

const codeExample3 = `import { RibbonMultiple } from 'react-revolution';
// import RibbonMultiple from 'react-revolution/RibbonMultiple';

<RibbonMultiple
    ribbons={
        [
            {
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                directionY: 'top',
                directionX: 'left',
                ribbon: (
                    <span>
                        SALE!
                    </span>
                )
            },
            {
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'top',
                ribbon: (
                    <span>
                        Only
                    </span>
                )
            },
            {
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                ribbon: (
                    <span>
                        -90%
                    </span>
                )
            },
            {
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                directionX: 'left',
                ribbon: (
                    <span>
                        today!
                    </span>
                )
            }
        ]
    }
    content={this.getJsx()}
/>`;

const codeExample4 = `import { RibbonMultiple } from 'react-revolution';
// import RibbonMultiple from 'react-revolution/RibbonMultiple';

<RibbonMultiple
    ribbons={
        [
            {
                type: '1',
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                directionY: 'top',
                directionX: 'left',
                ribbon: (
                    <span>
                        SALE!
                    </span>
                )
            },
            {
                type: '1',
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'top',
                ribbon: (
                    <span>
                        Only
                    </span>
                )
            },
            {
                type: '1',
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                ribbon: (
                    <span>
                        -90%
                    </span>
                )
            },
            {
                type: '1',
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                directionX: 'left',
                ribbon: (
                    <span>
                        today!
                    </span>
                )
            }
        ]
    }
    content={this.getJsx()}
/>`;

const codeExample5 = `import { RibbonMultiple } from 'react-revolution';
// import RibbonMultiple from 'react-revolution/RibbonMultiple';

<RibbonMultiple
    ribbons={
        [
            {
                type: '2',
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                directionY: 'top',
                directionX: 'left',
                ribbon: (
                    <span>
                        SALE!
                    </span>
                )
            },
            {
                type: '2',
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'top',
                ribbon: (
                    <span>
                        Only
                    </span>
                )
            },
            {
                type: '2',
                background: '#FF4459',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                ribbon: (
                    <span>
                        -90%
                    </span>
                )
            },
            {
                type: '2',
                background: 'rgb(24,115,204)',
                color: 'rgb(255,255,255)',
                directionY: 'bottom',
                directionX: 'left',
                ribbon: (
                    <span>
                        today!
                    </span>
                )
            }
        ]
    }
    content={this.getJsx()}
/>`;

const jsExample = `getJsx() {
    return (
        <div 
            style={
                {
                    borderRadius: '5px',
                    boxShadow: '0px 0px 9px rgb(233,233,233)',
                    overflow: 'hidden'
                }
            }
        >
            <img
                src='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                style={
                    {
                        width: '100%',
                        height: '50%',
                    }
                }
            />
            <p
                style={
                    {
                        boxSizing: 'border-box',
                        padding: '10px'
                    }
                }
            >
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor
                invidunt ut labore et dolore
                magna aliquyam erat,
                sed diam voluptua.
                At vero eos et accusam et
                justo duo dolores et ea rebum.
                Stet clita kasd gubergren,
                no sea takimata sanctus est
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor
                invidunt ut labore et dolore
                magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam
                et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum
                dolor sit amet.
            </p>
        </div>
    );
}`;

class _RibbonMultiple extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'RibbonMultiple',
                description: trans('ribbonM.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <RibbonMultiple
                        ribbons={
                            [
                                {
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    ribbon: (
                                        <span>
                                            SALE!
                                        </span>
                                    )
                                },
                                {
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            -90%
                                        </span>
                                    )
                                }
                            ]
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'RibbonMultiple',
                description: trans('ribbonM.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <RibbonMultiple
                        ribbons={
                            [
                                {
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    ribbon: (
                                        <span>
                                            SALE!
                                        </span>
                                    )
                                },
                                {
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            -90%
                                        </span>
                                    )
                                }
                            ]
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'RibbonMultiple',
                description: trans('ribbonM.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <RibbonMultiple
                        ribbons={
                            [
                                {
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'top',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            SALE!
                                        </span>
                                    )
                                },
                                {
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'top',
                                    ribbon: (
                                        <span>
                                            Only
                                        </span>
                                    )
                                },
                                {
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    ribbon: (
                                        <span>
                                            -90%
                                        </span>
                                    )
                                },
                                {
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            today!
                                        </span>
                                    )
                                }
                            ]
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'RibbonMultiple',
                description: trans('ribbon.example5'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <RibbonMultiple
                        ribbons={
                            [
                                {
                                    type: '1',
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'top',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            SALE!
                                        </span>
                                    )
                                },
                                {
                                    type: '1',
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'top',
                                    ribbon: (
                                        <span>
                                            Only
                                        </span>
                                    )
                                },
                                {
                                    type: '1',
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    ribbon: (
                                        <span>
                                            -90%
                                        </span>
                                    )
                                },
                                {
                                    type: '1',
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            today!
                                        </span>
                                    )
                                }
                            ]
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'RibbonMultiple',
                description: trans('ribbon.example6'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <RibbonMultiple
                        ribbons={
                            [
                                {
                                    type: '2',
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'top',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            SALE!
                                        </span>
                                    )
                                },
                                {
                                    type: '2',
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'top',
                                    ribbon: (
                                        <span>
                                            Only
                                        </span>
                                    )
                                },
                                {
                                    type: '2',
                                    background: '#FF4459',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    ribbon: (
                                        <span>
                                            -90%
                                        </span>
                                    )
                                },
                                {
                                    type: '2',
                                    background: 'rgb(24,115,204)',
                                    color: 'rgb(255,255,255)',
                                    directionY: 'bottom',
                                    directionX: 'left',
                                    ribbon: (
                                        <span>
                                            today!
                                        </span>
                                    )
                                }
                            ]
                        }
                        content={this.getJsx()}
                    />
                )
            },
        ];
    }

    getJsx() {
        return (
            <div
                style={
                    {
                        borderRadius: '5px',
                        boxShadow: '0px 0px 9px rgb(233,233,233)',
                        overflow: 'hidden'
                    }
                }
            >
                <img
                    src='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                    style={
                        {
                            width: '100%',
                            height: '50%',
                        }
                    }
                />
                <p
                    style={
                        {
                            boxSizing: 'border-box',
                            padding: '10px'
                        }
                    }
                >
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat,
                    sed diam voluptua.
                    At vero eos et accusam et
                    justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum
                    dolor sit amet.
                </p>
            </div>
        );
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
                                    key: 'ribbons',
                                    values: 'ribbon.ribbons'
                                },
                                {
                                    key: 'ribbons.directionX',
                                    values: 'ribbon.directionX'
                                },
                                {
                                    key: 'ribbons.directionY',
                                    values: 'ribbon.directionY'
                                },
                                {
                                    key: 'ribbons.background',
                                    values: 'ribbon.background'
                                },
                                {
                                    key: 'ribbons.color',
                                    values: 'ribbon.color'
                                },
                                {
                                    key: 'ribbons.type',
                                    values: 'ribbon.type'
                                },
                                {
                                    key: 'content',
                                    values: 'ribbon.content'
                                },
                            ],
                            'rr-ribbon-multiple'
                        )
                    }
                />
            </div>
        );
    }
};

export default _RibbonMultiple;

