import React from 'react';

import { Table, PopupBox, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { PopupBox } from 'react-revolution';
// import PopupBox from 'react-revolution/PopupBox';

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animation='top-left' // top-left, top-right, bottom-left, bottom-right
        icon={
            <i className='fas fa-user-secret'></i>
        }
        data={
            <span>
                <h1>
                    content
                </h1>
            </span>
        }
    />
</div>`;

const codeExample2 = `import { PopupBox } from 'react-revolution';
// import PopupBox from 'react-revolution/PopupBox';

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animation='bottom-left' // top-left, top-right, bottom-left, bottom-right
        icon={
            <i className='fas fa-user-secret'></i>
        }
        data={
            <span>
                <h1>
                    content
                </h1>
            </span>
        }
    />
</div>`;

const codeExample3 = `import { PopupBox } from 'react-revolution';
// import PopupBox from 'react-revolution/PopupBox';

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animation='top-right' // top-left, top-right, bottom-left, bottom-right
        icon={
            <i className='fas fa-user-secret'></i>
        }
        data={
            <span>
                <h1>
                    content
                </h1>
            </span>
        }
    />
</div>`;

const codeExample4 = `import { PopupBox } from 'react-revolution';
// import PopupBox from 'react-revolution/PopupBox';

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animation='bottom-right' // top-left, top-right, bottom-left, bottom-right
        icon={
            <i className='fas fa-user-secret'></i>
        }
        data={
            <span>
                <h1>
                    content
                </h1>
            </span>
        }
    />
</div>`;

const cssExample = `.rr-revolution-popupbox-example{
    width: 50px;
    height: 50px;
    margin:0 auto;
    text-align: center;

    .PopupBox{
        float: left;
    }
    .icon{
        color: rgb(69,69,69);
    }
    .icon:hover{
        cursor: pointer;
    }
    .box{
        width: 200px;
        height: 100px;
        background-color: rgb(255,255,255);
    }
}`;

class _PopupBox extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'PopupBox',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-popupbox-example">
                        <PopupBox
                            animationTime={300}
                            animation='top-left' // top-left, top-right, bottom-left, bottom-right
                            icon={
                                <i className='fas fa-user-secret'></i>
                            }
                            data={
                                <span>
                                    <h1>
                                        content
                                    </h1>
                                </span>
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupBox',
                description: '',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-popupbox-example">
                        <PopupBox
                            animationTime={300}
                            animation='bottom-left' // top-left, top-right, bottom-left, bottom-right
                            icon={
                                <i className='fas fa-user-secret'></i>
                            }
                            data={
                                <span>
                                    <h1>
                                        content
                                    </h1>
                                </span>
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupBox',
                description: '',
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-popupbox-example">
                        <PopupBox
                            animationTime={300}
                            animation='top-right' // top-left, top-right, bottom-left, bottom-right
                            icon={
                                <i className='fas fa-user-secret'></i>
                            }
                            data={
                                <span>
                                    <h1>
                                        content
                                    </h1>
                                </span>
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupBox',
                description: '',
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-popupbox-example">
                        <PopupBox
                            animationTime={300}
                            animation='bottom-right' // top-left, top-right, bottom-left, bottom-right
                            icon={
                                <i className='fas fa-user-secret'></i>
                            }
                            data={
                                <span>
                                    <h1>
                                        content
                                    </h1>
                                </span>
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
                                    key: 'animation',
                                    values: 'popupbox.animation'
                                },
                                {
                                    key: 'animationTime',
                                    values: 'animationTime'
                                },
                                {
                                    key: 'icon',
                                    values: 'icon'
                                },
                                {
                                    key: 'iconCallback',
                                    values: 'iconCallback'
                                },
                                {
                                    key: 'data',
                                    values: 'popupbox.data'
                                },
                            ],
                            'Popupbox'
                        )
                    }
                />
            </div>
        );
    }
};

export default _PopupBox;

