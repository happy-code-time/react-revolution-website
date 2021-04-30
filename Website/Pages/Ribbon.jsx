import React from 'react';
import { Table, Ribbon, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { Ribbon } from 'react-revolution';
// import Ribbon from 'react-revolution/Ribbon';

<Ribbon
    background='#FF4459'
    color='rgb(255,255,255)'
    ribbon={
        <span>
            SALE!
                        </span>
    }
    content={this.getJsx()}
/>`;

const codeExample2 = `import { Ribbon } from 'react-revolution';
// import Ribbon from 'react-revolution/Ribbon';

<Ribbon
    directionX='left'
    background='#FF4459'
    color='rgb(255,255,255)'
    ribbon={
        <span>
            SALE!
        </span>
    }
    content={this.getJsx()}
/>`;

const codeExample3 = `import { Ribbon } from 'react-revolution';
// import Ribbon from 'react-revolution/Ribbon';

<Ribbon  
    directionY='bottom'
    background='#FF4459'
    color='rgb(255,255,255)'
    ribbon={
        <span>
            SALE!
        </span>
    }
    content={this.getJsx()}
/>`;

const codeExample4 = `import { Ribbon } from 'react-revolution';
// import Ribbon from 'react-revolution/Ribbon';

<Ribbon  
    directionX='left'
    directionY='bottom'
    background='#FF4459'
    color='rgb(255,255,255)'
    ribbon={
        <span>
            SALE!
        </span>
    }
    content={this.getJsx()}
/>`;

const codeExample5 = `import { Ribbon } from 'react-revolution';
// import Ribbon from 'react-revolution/Ribbon';

<Ribbon
    type='1'
    background='#FF4459'
    color='rgb(255,255,255)'
    ribbon={
        <span>
            SALE!
        </span>
    }
    content={this.getJsx()}
/>`;

const codeExample6 = `import { Ribbon } from 'react-revolution';
// import Ribbon from 'react-revolution/Ribbon';

<Ribbon
    type='2'
    background='#FF4459'
    color='rgb(255,255,255)'
    directionX='left'
    ribbon={
        <span>
            SALE!
        </span>
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

class _Ribbon extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Ribbon',
                description: trans('ribbon.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Ribbon
                        background='#FF4459'
                        color='rgb(255,255,255)'
                        ribbon={
                            <span>
                                SALE!
                            </span>
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'Ribbon',
                description: trans('ribbon.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Ribbon
                        directionX='left'
                        background='rgb(24,115,204)'
                        color='rgb(255,255,255)'
                        ribbon={
                            <span>
                                SALE!
                            </span>
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'Ribbon',
                description: trans('ribbon.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Ribbon
                        directionY='bottom'
                        background='#FF4459'
                        color='rgb(255,255,255)'
                        ribbon={
                            <span>
                                SALE!
                            </span>
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'Ribbon',
                description: trans('ribbon.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Ribbon
                        directionX='left'
                        directionY='bottom'
                        background='rgb(24,115,204)'
                        color='rgb(255,255,255)'
                        ribbon={
                            <span>
                                SALE!
                            </span>
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'Ribbon',
                description: trans('ribbon.example5'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Ribbon
                        type='1'
                        background='#FF4459'
                        color='rgb(255,255,255)'
                        ribbon={
                            <span>
                                SALE!
                            </span>
                        }
                        content={this.getJsx()}
                    />
                )
            },
            {
                title: 'Ribbon',
                description: trans('ribbon.example6'),
                reactTextBefore: '',
                react: codeExample6,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <Ribbon
                        type='2'
                        background='#FF4459'
                        color='rgb(255,255,255)'
                        directionX='left'
                        ribbon={
                            <span>
                                SALE!
                            </span>
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
                                    key: 'directionX',
                                    values: 'ribbon.directionX'
                                },
                                {
                                    key: 'directionY',
                                    values: 'ribbon.directionY'
                                },
                                {
                                    key: 'background',
                                    values: 'ribbon.background'
                                },
                                {
                                    key: 'color',
                                    values: 'ribbon.color'
                                },
                                {
                                    key: 'ribbon',
                                    values: 'ribbon.ribbon'
                                },
                                {
                                    key: 'content',
                                    values: 'ribbon.content'
                                },
                                {
                                    key: 'type',
                                    values: 'ribbon.type'
                                },
                            ],
                            'Ribbon'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Ribbon;

