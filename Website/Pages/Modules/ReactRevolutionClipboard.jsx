import React from 'react';

import { Clipboard, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { Clipboard } from 'react-revolution';

copiedToClipboard(event, data){
    console.info(event);
    console.info(data);
}

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

copiedToClipboard(event, data){
    console.info(event);
    console.info(data);
}

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

class ReactRevolutionClipboard extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
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
                description: '',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
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
                <h1 className="h1-title border-none text-center">
                    Clipboard
                </h1>
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