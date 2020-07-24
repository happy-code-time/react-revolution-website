import React from 'react';

import { PopupBox, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { PopupBox } from 'react-revolution';

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animationType='top-left' // top-left, top-right, bottom-left, bottom-right
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

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animationType='bottom-left' // top-left, top-right, bottom-left, bottom-right
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

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animationType='top-right' // top-left, top-right, bottom-left, bottom-right
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

<div className="rr-revolution-popupbox-example">
    <PopupBox
        animationTime={300}
        animationType='bottom-right' // top-left, top-right, bottom-left, bottom-right
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

    .rr-popupbox{
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

class ReactRevolutionPopupBox extends React.Component {
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
                            animationType='top-left' // top-left, top-right, bottom-left, bottom-right
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
                            animationType='bottom-left' // top-left, top-right, bottom-left, bottom-right
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
                            animationType='top-right' // top-left, top-right, bottom-left, bottom-right
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
                            animationType='bottom-right' // top-left, top-right, bottom-left, bottom-right
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
        console.log(icon);
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return 'break';
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
                />
            </div>
        );
    }
};

export default ReactRevolutionPopupBox;

