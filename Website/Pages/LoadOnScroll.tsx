import React from 'react';
//@ts-ignore
import { Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import buildModulesJsx from '../Functions/buildModulesJsx';

import trans from '../Translations/trans';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { LoadOnScroll, LoadingBoxTop } from 'react-revolution';
// import LoadOnScroll from 'react-revolution/LoadOnScroll';
// import LoadingBoxTop from 'react-revolution/LoadingBoxTop';

<div className="rr-revolution-loadonscroll-example">
    <LoadOnScroll
        scrollReference={true}
        minify={undefined}
        callback={this.callback}
        loading={
            <LoadingBoxTop
                text={trans('loading')}
                display={true}
            />
        }
        data={this.generateTextBlock()}
    />
</div>`;

const codeExample2 = `import { LoadOnScroll } from 'react-revolution';
// import LoadOnScroll from 'react-revolution/LoadOnScroll';

<div className="rr-revolution-loadonscroll-example">
    <LoadOnScroll
        scrollReference={true}
        callback={this.callbackReject}
        callbackProps={'custom data'}
        loading={ 
            ( 
                <div className="loading"> 
                    <img src='./public/images/ajax-loader.gif'/> 
                </div> 
            ) 
        } 
        persistReject={false}
        onReject={ 
            ( 
                <span className='try-again-button'> 
                    try again 
                </span> 
            ) 
        } 
        data={this.generateTextBlock()}
    />
</div>`;

const codeExample3 = `import { LoadOnScroll } from 'react-revolution';
// import LoadOnScroll from 'react-revolution/LoadOnScroll';

<div className="rr-revolution-loadonscroll-example">
    <LoadOnScroll
        scrollReference={true}
        callback={this.callbackRejectMessage}
        callbackProps={'custom data'}
        loading={ 
            ( 
                <div className="loading"> 
                    <img src='./public/images/ajax-loader.gif'/> 
                </div> 
            ) 
        } 
        persistReject={true} 
        onReject={ 
            ( 
                <span className='try-again-button'> 
                    try again 
                </span> 
            ) 
        } 
        data={this.generateTextBlock()}
    />
</div>`;

const codeExample4 = `import { LoadOnScroll } from 'react-revolution';
// import LoadOnScroll from 'react-revolution/LoadOnScroll';

<div className="rr-revolution-loadonscroll-example">
    <LoadOnScroll
        scrollReference={true}
        callback={this.callbackMixed}
        callbackProps={'custom data'}
        loading={ 
            ( 
                <div className="loading"> 
                    <img src='./public/images/ajax-loader.gif'/> 
                </div> 
            ) 
        } 
        persistReject={true} 
        onReject={ 
            ( 
                <span className='try-again-button'> 
                    try again 
                </span> 
            ) 
        } 
        data={this.generateTextBlock()}
    />
</div>`;

const jsExample1 = `constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);

    this.state = {
        count: 0,
};
    
callback() {
    const self = this;
    const { count } = this.state;

    if (3 <= count) {
        return Promise.resolve('break');
    }

    this.setState({
        count: this.state.count + 1
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(self.generateTextBlock(1));
        }, 500);
    });
}

generateTextBlock(count = 3){
    const defaultText = \`
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
    \`;
    let build = '';

    for(let x = 0; x <= count; x++){
        build += defaultText;
    }

    return (
        <span>
            {
                build
            }
        </span>
    );
}`;

const jsExample2 = `callbackReject(){
    return new Promise( (resolve, reject) => {
        setTimeout(reject, 1500);
    });
}

generateTextBlock(count = 3){
    const defaultText = \`
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
    \`;
    let build = '';

    for(let x = 0; x <= count; x++){
        build += defaultText;
    }

    return (
        <span>
            {
                build
            }
        </span>
    );
}
`;

const jsExample3 = `callbackRejectMessage(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => { 
            reject(
                <div className='callback-error'>
                    Scroll to bottom again to try load more data.
                </div>
            ); 
        }, 2500); 
    });
}

generateTextBlock(count = 3){
    const defaultText = \`
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
    \`;
    let build = '';

    for(let x = 0; x <= count; x++){
        build += defaultText;
    }

    return (
        <span>
            {
                build
            }
        </span>
    );
}
`;

const jsExample4 = `let mixed = -1;

callbackMixed(){
    const self = this;
    mixed += 1;

    if(0 == mixed || 3 <= mixed){
        return new Promise( (resolve, reject) => {
            setTimeout(reject, 1500);
        });
    }

    if(1 == mixed){
        return new Promise( (resolve, reject) => {
            setTimeout(() => { 
                reject(
                    <div className='callback-error'>
                        Scroll to bottom again to try load more data.
                    </div>
                ); 
            }, 2500); 
        });
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(self.generateTextBlock(2));
        }, 500);
    });
}

generateTextBlock(count = 3){
    const defaultText = \`
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
    \`;
    let build = '';

    for(let x = 0; x <= count; x++){
        build += defaultText;
    }

    return (
        <span>
            {
                build
            }
        </span>
    );
}
`;

const cssExample1 = `.rr-revolution-loadonscroll-example{
    min-width: 300px;
    width: 50vw;
    height: 200px;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;

    p{
        line-height: 30px;
    }
}`;

const cssExample2 = `.rr-revolution-loadonscroll-example {
    min-width: 300px;
    width: calc(100% - 200px);
    max-width: 1024px;
    height: 300px;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;

    p {
        line-height: 30px;
    }

    .loading{
        height: 50px;
        display: flex;

        img{
            display: block;
            width: 30px;
            height: 30px;
            margin: auto;
        }
    }

    .try-again-button{
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        height: 20px;
        background: firebrick;
        color: rgb(255,255,255);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        font-size: 0.87rem;
        margin: 0 auto;
        display: block;
    }

    .try-again-button:hover{
        cursor: pointer;
    }
}`;

const cssExample3 = `.rr-revolution-loadonscroll-example {
    min-width: 300px;
    width: calc(100% - 200px);
    max-width: 1024px;
    height: 300px;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;

    p {
        line-height: 30px;
    }

    .loading{
        height: 50px;
        display: flex;

        img{
            display: block;
            width: 30px;
            height: 30px;
            margin: auto;
        }
    }

    .callback-error{
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: firebrick;
        font-weight: 500;
        font-size: 0.87rem;
    }

    .try-again-button{
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        height: 20px;
        background: firebrick;
        color: rgb(255,255,255);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        font-size: 0.87rem;
        margin: 0 auto;
        display: block;
    }

    .try-again-button:hover{
        cursor: pointer;
    }
}
`;

const cssExample4 = `.rr-revolution-loadonscroll-example {
    min-width: 300px;
    width: calc(100% - 200px);
    max-width: 1024px;
    height: 300px;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;

    p {
        line-height: 30px;
    }

    .loading{
        height: 50px;
        display: flex;

        img{
            display: block;
            width: 30px;
            height: 30px;
            margin: auto;
        }
    }

    .callback-error{
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: firebrick;
        font-weight: 500;
        font-size: 0.87rem;
    }

    .try-again-button{
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        height: 20px;
        background: firebrick;
        color: rgb(255,255,255);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        font-size: 0.87rem;
        margin: 0 auto;
        display: block;
    }

    .try-again-button:hover{
        cursor: pointer;
    }
}`;


let mixed = -1;

class _LoadOnScroll extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.callbackMixed = this.callbackMixed.bind(this);
        this.callbackRejectMessage = this.callbackRejectMessage.bind(this);
        this.callbackReject = this.callbackReject.bind(this);
        this.countCallbacks = 0;

        this.state = {
            count: 0,
        };

        this.examples = [
            {
                title: 'LoadOnScroll',
                description: trans('loadonscroll-description-1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample1,
                html: '',
                live: (
                    <div className="rr-revolution-loadonscroll-example">
                        <LoadOnScroll
                            scrollReference={true}
                            minify={undefined}
                            callback={this.callback}
                            loading={
                                <LoadingBoxTop
                                    text={trans('loading')}
                                    display={true}
                                />
                            }
                            data={this.generateTextBlock()}
                        />
                    </div>
                )
            },
            {
                title: 'LoadOnScroll',
                description: trans('loadonscroll-description-2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample2,
                css: cssExample2,
                html: '',
                live: (
                    <div className="rr-revolution-loadonscroll-example">
                        <LoadOnScroll
                            scrollReference={true}
                            callback={this.callbackReject}
                            callbackProps={'custom data'}
                            loading={
                                (
                                    <div className="loading">
                                        <img src='./public/images/ajax-loader.gif' />
                                    </div>
                                )
                            }
                            persistReject={false}
                            onReject={
                                (
                                    <span className='try-again-button'>
                                        try again
                                    </span>
                                )
                            }
                            data={this.generateTextBlock()}
                        />
                    </div>
                )
            },
            {
                title: 'LoadOnScroll',
                description: trans('loadonscroll-description-3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample3,
                css: cssExample3,
                html: '',
                live: (
                    <div className="rr-revolution-loadonscroll-example">
                        <LoadOnScroll
                            scrollReference={true}
                            callback={this.callbackRejectMessage}
                            callbackProps={'custom data'}
                            loading={
                                (
                                    <div className="loading">
                                        <img src='./public/images/ajax-loader.gif' />
                                    </div>
                                )
                            }
                            persistReject={true}
                            onReject={
                                (
                                    <span className='try-again-button'>
                                        try again
                                    </span>
                                )
                            }
                            data={this.generateTextBlock()}
                        />
                    </div>
                )
            },
            {
                title: 'LoadOnScroll',
                description: trans('loadonscroll-description-4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample4,
                css: cssExample4,
                html: '',
                live: (
                    <div className="rr-revolution-loadonscroll-example">
                        <LoadOnScroll
                            scrollReference={true}
                            callback={this.callbackMixed}
                            callbackProps={'custom data'}
                            loading={
                                (
                                    <div className="loading">
                                        <img src='./public/images/ajax-loader.gif' />
                                    </div>
                                )
                            }
                            persistReject={true}
                            onReject={
                                (
                                    <span className='try-again-button'>
                                        try again
                                    </span>
                                )
                            }
                            data={this.generateTextBlock()}
                        />
                    </div>
                )
            },
        ];

        this.state = {
            count: 0
        }
    }

    generateTextBlock(count = 3) {
        const defaultText = `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        `;
        let build = '';

        for (let x = 0; x <= count; x++) {
            build += defaultText;
        }

        return (
            <span>
                {
                    build
                }
            </span>
        );
    }

    callback() {
        const self = this;
        const { count } = this.state;

        if (3 <= count) {
            return Promise.resolve('break');
        }

        this.setState({
            count: this.state.count + 1
        });

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(self.generateTextBlock(1));
            }, 500);
        });
    }

    callbackReject() {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1500);
        });
    }

    callbackRejectMessage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(
                    <div className='callback-error'>
                        Scroll to bottom again to try load more data.
                    </div>
                );
            }, 2500);
        });
    }

    callbackMixed() {
        const self = this;
        mixed += 1;

        if (0 == mixed || 3 <= mixed) {
            return new Promise((resolve, reject) => {
                setTimeout(reject, 1500);
            });
        }

        if (1 == mixed) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(
                        <div className='callback-error'>
                            Scroll to bottom again to try load more data.
                        </div>
                    );
                }, 2500);
            });
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(self.generateTextBlock(2));
            }, 500);
        });
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
                                    key: 'data',
                                    values: 'loadonscroll.data'
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
                                    values: 'card.loading'
                                },
                                {
                                    key: 'minify',
                                    values: 'loadonscroll.minify'
                                },
                                {
                                    key: 'scrollReference',
                                    values: 'scrollReference'
                                },
                                {
                                    key: 'persistReject',
                                    values: 'card.callback.persistReject'
                                },
                                {
                                    key: 'onReject',
                                    values: 'card.callback.onReject'
                                },
                                {
                                    key: 'fireScrollBack',
                                    values: 'loadonscroll.fireScrollBack'
                                },
                                {
                                    key: 'fireScrollEvent',
                                    values: 'loadonscroll.fireScrollEvent'
                                },
                                {
                                    key: 'scrolledToBottom',
                                    values: 'loadonscroll.scrolledToBottom'
                                },
                            ],
                            'LoadOnScroll'
                        )
                    }
                />
            </div>
        );
    }
};

export default _LoadOnScroll;

