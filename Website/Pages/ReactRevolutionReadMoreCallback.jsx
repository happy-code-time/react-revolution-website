
import React from 'react';

import { Table, ReadMoreCallback, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { ReadMoreCallback } from 'react-revolution';
// import ReadMoreCallback from 'react-revolution/ReadMoreCallback';

<ReadMoreCallback
    addClass='rr-read-more-example'
    animation='height'
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.
        \`
    }
    toggleForwards={
        (
            <span className='read-more-button'>
                read more
            </span>
        )
    }
    callback={this.callbackResolve}
    callbackProps={'my custom data'}
    loading={
        (
            <img src='./public/images/ajax-loader.gif'/>
        )
    }
/>`;

const codeExample2 = `import { ReadMoreCallback } from 'react-revolution';
// import ReadMoreCallback from 'react-revolution/ReadMoreCallback';

<ReadMoreCallback
    addClass='rr-read-more-example'
    animation='height'
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.
        \`
    }
    toggleForwards={
        (
            <span className='read-more-button'>
                read more
            </span>
        )
    }
    toggleBackwards={
        (
            <span className='read-more-button'>
                read less
            </span>
        )
    }
    callback={this.callbackResolve}
    callbackProps={'my custom data'}
    loading={
        (
            <img src='./public/images/ajax-loader.gif'/>
        )
    }
/>`;

const codeExample3 = `import { ReadMoreCallback } from 'react-revolution';
// import ReadMoreCallback from 'react-revolution/ReadMoreCallback';

<ReadMoreCallback
    addClass='rr-read-more-example'
    animation='height'
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.
        \`
    }
    toggleForwards={
        (
            <span className='read-more-button'>
                read more
            </span>
        )
    }
    toggleBackwards={
        (
            <span className='read-more-button'>
                read less
            </span>
        )
    }
    toggleOnReject={true}
    toggleReject={
        (
            <span className='read-more-button'>
                try again
            </span>
        )
    }
    callback={this.callbackReject}
    callbackProps={'my custom data'}
    loading={
        (
            <img src='./public/images/ajax-loader.gif'/>
        )
    }
/>`;

const codeExample4 = `import { ReadMoreCallback } from 'react-revolution';
// import ReadMoreCallback from 'react-revolution/ReadMoreCallback';

<ReadMoreCallback
    addClass='rr-read-more-example'
    animation='height'
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.
        \`
    }
    toggleForwards={
        (
            <span className='read-more-button'>
                read more
            </span>
        )
    }
    toggleBackwards={
        (
            <span className='read-more-button'>
                read less
            </span>
        )
    }
    toggleOnReject={true}
    toggleReject={
        (
            <span className='read-more-button'>
                try again
            </span>
        )
    }
    callback={this.callbackRejectUndefined}
    callbackProps={'my custom data'}
    loading={
        (
            <img src='./public/images/ajax-loader.gif'/>
        )
    }
/>`;

const codeExample5 = `import { ReadMoreCallback } from 'react-revolution';
// import ReadMoreCallback from 'react-revolution/ReadMoreCallback';

<ReadMoreCallback
    addClass='rr-read-more-example'
    animation='height'
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.
        \`
    }
    toggleForwards={
        (
            <span className='read-more-button'>
                read more
            </span>
        )
    }
    toggleBackwards={
        (
            <span className='read-more-button'>
                read less
            </span>
        )
    }
    toggleOnReject={true}
    toggleReject={
        (
            <span className='read-more-button'>
                try again
            </span>
        )
    }
    callback={this.callbackMixed}
    callbackProps={'my custom data'}
    loading={
        (
            <img src='./public/images/ajax-loader.gif'/>
        )
    }
/>`;

const jsExample1and2 = `callbackResolve(clickEvent, customData){
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve(
                \`
                Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore 
                magna aliquyam erat, sed diam 
                voluptua.
                \`
            );
        }, 2000);
    });
}`;

const jsExample3 = `callbackReject(clickEvent, customData){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            reject(
                <div className='error'>
                    ERROR
                </div>
            );
        }, 2000);
    });
}`;

const jsExample4 = `callbackRejectUndefined(clickEvent, customData){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            reject();
        }, 2000);
    });
}`;

const jsExample5 = `let errorCount = 0;

callbackMixed(clickEvent, customData){
    errorCount += 1;

    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            if(1 === errorCount){
                reject(
                    <div className='error'>
                        ERROR
                    </div>
                );
            }

            if(2 === errorCount){
                reject();
            }

            if(3 === errorCount){
                resolve(
                    \`
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua.
                    \`
                );
            }

        }, 2000);
    });
}`;

const cssExample = `.rr-read-more-example{
    line-height: 30px;

    .read-more-button,
    .read-less-button{
        box-sizing: border-box;
        padding: 3px 5px;
        width: 120px;
        height: 20px;
        background: dodgerblue;
        color: rgb(255,255,255);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        margin: 0 10px;
        font-size: 0.87rem;
    }

    .read-more-button:hover,
    .read-less-button:hover{
        cursor: pointer;
    }
}`;

let errorCount = 0;

class ReactRevolutionReadMoreCallback extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ReadMoreCallback',
                description: trans('readmore-callback-description-1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1and2,
                css: cssExample,
                html: '',
                live: (
                    <ReadMoreCallback
                        addClass='rr-read-more-example'
                        animation='height'
                        data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.
                            `
                        }
                        toggleForwards={
                            (
                                <span className='read-more-button'>
                                    read more
                                </span>
                            )
                        }
                        callback={this.callbackResolve}
                        callbackProps={'my custom data'}
                        loading={
                            (
                                <img src='./public/images/ajax-loader.gif'/>
                            )
                        }
                    />
                )
            },
            {
                title: 'ReadMoreCallback',
                description: trans('readmore-callback-description-2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample1and2,
                css: cssExample,
                html: '',
                live: (
                    <ReadMoreCallback
                        addClass='rr-read-more-example'
                        animation='height'
                        data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.
                            `
                        }
                        toggleForwards={
                            (
                                <span className='read-more-button'>
                                    read more
                                </span>
                            )
                        }
                        toggleBackwards={
                            (
                                <span className='read-more-button'>
                                    read less
                                </span>
                            )
                        }
                        callback={this.callbackResolve}
                        callbackProps={'my custom data'}
                        loading={
                            (
                                <img src='./public/images/ajax-loader.gif'/>
                            )
                        }
                    />
                )
            },
            {
                title: 'ReadMoreCallback',
                description: trans('readmore-callback-description-3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample3,
                css: cssExample,
                html: '',
                live: (
                    <ReadMoreCallback
                        addClass='rr-read-more-example'
                        animation='height'
                        data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.
                            `
                        }
                        toggleForwards={
                            (
                                <span className='read-more-button'>
                                    read more
                                </span>
                            )
                        }
                        toggleBackwards={
                            (
                                <span className='read-more-button'>
                                    read less
                                </span>
                            )
                        }
                        toggleOnReject={true}
                        toggleReject={
                            (
                                <span className='read-more-button'>
                                    try again
                                </span>
                            )
                        }
                        callback={this.callbackReject}
                        callbackProps={'my custom data'}
                        loading={
                            (
                                <img src='./public/images/ajax-loader.gif'/>
                            )
                        }
                    />
                )
            },
            {
                title: 'ReadMoreCallback',
                description: trans('readmore-callback-description-4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample4,
                css: cssExample,
                html: '',
                live: (
                    <ReadMoreCallback
                        addClass='rr-read-more-example'
                        animation='height'
                        data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.
                            `
                        }
                        toggleForwards={
                            (
                                <span className='read-more-button'>
                                    read more
                                </span>
                            )
                        }
                        toggleBackwards={
                            (
                                <span className='read-more-button'>
                                    read less
                                </span>
                            )
                        }
                        toggleOnReject={true}
                        toggleReject={
                            (
                                <span className='read-more-button'>
                                    try again
                                </span>
                            )
                        }
                        callback={this.callbackRejectUndefined}
                        callbackProps={'my custom data'}
                        loading={
                            (
                                <img src='./public/images/ajax-loader.gif'/>
                            )
                        }
                    />
                )
            },
            {
                title: 'ReadMoreCallback',
                description: trans('readmore-callback-description-5'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: jsExample5,
                css: cssExample,
                html: '',
                live: (
                    <ReadMoreCallback
                        addClass='rr-read-more-example'
                        animation='height'
                        data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.
                            `
                        }
                        toggleForwards={
                            (
                                <span className='read-more-button'>
                                    read more
                                </span>
                            )
                        }
                        toggleBackwards={
                            (
                                <span className='read-more-button'>
                                    read less
                                </span>
                            )
                        }
                        toggleOnReject={true}
                        toggleReject={
                            (
                                <span className='read-more-button'>
                                    try again
                                </span>
                            )
                        }
                        callback={this.callbackMixed}
                        callbackProps={'my custom data'}
                        loading={
                            (
                                <img src='./public/images/ajax-loader.gif'/>
                            )
                        }
                    />
                )
            }
        ];
    }

    callbackResolve(clickEvent, customData){
        return new Promise( (resolve, reject) => {

            setTimeout( () => {
                resolve(
                    `
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua.`
                );
            }, 2000);
        });
    }
    
    callbackReject(clickEvent, customData){
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                reject(
                    <div className='error'>
                        ERROR
                    </div>
                );
            }, 2000);
        });
    }

    callbackRejectUndefined(clickEvent, customData){
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                reject();
            }, 2000);
        });
    }

    callbackMixed(clickEvent, customData){
        errorCount += 1;

        return new Promise( (resolve, reject) => {

            setTimeout( () => {

                if(1 === errorCount){
                    reject(
                        <div className='error'>
                            ERROR
                        </div>
                    );
                }

                if(2 === errorCount){
                    reject();
                }

                if(3 === errorCount){
                    resolve(
                        `
                        Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam 
                        voluptua.`
                    );
                }

            }, 2000);
        });
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
                    getDescriptionForstyle('rr-read-more-callback')
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
                                    key: 'animation',
                                    values: 'readmore.animation'
                                },
                                {
                                    key: 'toggleForwards',
                                    values: 'readmore.toggleForwards'
                                },
                                {
                                    key: 'toggleBackwards',
                                    values: 'readmore.toggleBackwards'
                                },
                                {
                                    key: 'data',
                                    values: 'readmore.data'
                                },
                                {
                                    key: 'dataToggle',
                                    values: 'readmore.dataToggle'
                                },
                                {
                                    key: 'toggleOnReject',
                                    values: 'readmore.callback.toggleOnReject'
                                },
                                {
                                    key: 'toggleReject',
                                    values: 'readmore.callback.toggleReject'
                                },
                                {
                                    key: 'callback',
                                    values: 'readmore.callback.callback'
                                },
                                {
                                    key: 'callbackProps',
                                    values: 'readmore.callback.callbackProps'
                                },
                                {
                                    key: 'loading',
                                    values: 'readmore.callback.loading'
                                },
                            ],
                            'rr-read-more-callback'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionReadMoreCallback;

