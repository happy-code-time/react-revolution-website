import React from 'react';

import { Clipboard, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { Clipboard } from 'react-revolution';

<Clipboard
    animation='scale' // scale, jump
    data={(
        <div className="rr-revolution-button-clipboard">
            {
                trans('copyToClipboard')
            }
        </div>
    )}
    clipboard={
        \`
            Custom clipboard data 😍
        \`
    }
    callback={this.copiedToClipboard}
/>`;

const codeExample2 = `import { Clipboard } from 'react-revolution';

<Clipboard
    animation='jump' // scale, jump
    data={(
        <div className="rr-revolution-button-clipboard">
            {
                trans('copyToClipboard')
            }
        </div>
    )}
    clipboard={
        [
            'React',
            'Revolution'
        ]
    }
    callback={this.copiedToClipboard}
/>`;

const jsExample = `copiedToClipboard(event, data){
    console.info(event);
    console.info(data);
}`;

const cssExample = `.rr-revolution-button-clipboard{
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 3px;
    margin: 0 auto;
    background-color: rgb(244,69,89);
    box-shadow: 0px 0px 3px rgb(244,69,89);
    font-size: 0.87rem;
    color: rgb(255,255,255);
}`;

class ReactRevolutionClipboard extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Clipboard',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Clipboard
                        animation='scale' // scale, jump
                        data={(
                            <div className="rr-revolution-button-clipboard">
                                {
                                    trans('copyToClipboard')
                                }
                            </div>
                        )}
                        clipboard={
                            `
                                Custom clipboard data 😍
                            `
                        }
                        callback={this.copiedToClipboard}
                    />
                )
            },
            {
                title: 'Clipboard',
                description: '',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Clipboard
                        animation='jump' // scale, jump
                        data={(
                            <div className="rr-revolution-button-clipboard">
                                {
                                    trans('copyToClipboard')
                                }
                            </div>
                        )}
                        clipboard={
                            [
                                'React',
                                'Revolution'
                            ]
                        }
                        callback={this.copiedToClipboard}
                    />
                )
            },
        ];
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

export default ReactRevolutionClipboard;