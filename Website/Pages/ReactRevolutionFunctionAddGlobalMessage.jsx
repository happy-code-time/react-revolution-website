import React from 'react';

import { addGlobalMessage, GlobalMessages, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

const jsExample1 = `import { GlobalMessages, addGlobalMessage } from 'react-revolution';

componentDidMount(){
    addGlobalMessage('custom_key_for_the_listener', 'Will be removed in 3 seconds.', 8);
    addGlobalMessage('custom_key_for_the_listener', 'Will be removed in 3 seconds.', 8);
    addGlobalMessage('custom_key_for_the_listener', 'Will be removed in 3 seconds.', 8);

    setTimeout(() => {
        addGlobalMessage('custom_key_for_the_listener', 'Clear stack called!', 8, undefined, true);
    }, 3000);
}

render(){
    return(
        <GlobalMessages
            messageKey='custom_key_for_the_listener'
            addClass='rr-global-messages-example'
            timer={1000}
            codeMapping={{
                8: {
                    title: 'Error',
                    displayErrorCode: false,
                    close: {
                        text: 'close',
                        props: {},
                    }
                },
            }}
        />
    );
}
`;

const codeExample1 = `// Initialisator of new messages for the Component: GlobalMessages

/**
 * @param {string} messageKey - global messages_key (key listener) to attach the generated JSX to the root component
 * @param {string} errorMessage - Custom message
 * @param {number} errorCode - custom error code based on the code mapping
 * @param {number} disappear - Message should disappear after this milliseconds
 * @param {boolean} clearStack - After a new message are attached, clear (remove) other messages (default: false)
 * /
addGlobalMessage('custom_key_for_the_listener', 'Custom Error', 8, undefined, true);`;

const cssExample1 = `.rr-global-messages-example{
    .single-error{
        background-color: #FF4469;
    }
}`;

class ReactRevolutionFunctionAddGlobalMessage extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'addGlobalMessage',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample1,
                html: '',
                live: "addGlobalMessage(messageKey = '', errorMessage = '', errorCode, disappear = undefined, clearStack = false);",
                isFunction: true
            }
        ];
    }

    componentDidMount() {
        addGlobalMessage('custom_key_for_the_listener', 'Will be removed in 3 seconds.', 8);
        addGlobalMessage('custom_key_for_the_listener', 'Will be removed in 3 seconds.', 8);
        addGlobalMessage('custom_key_for_the_listener', 'Will be removed in 3 seconds.', 8);

        setTimeout(() => {
            addGlobalMessage('custom_key_for_the_listener', 'Clear stack called!', 8, undefined, true);
        }, 3000);
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
                    fireScrollEvent={30}
                    fireScrollBack={true}
                />
                <GlobalMessages
                    messageKey='custom_key_for_the_listener'
                    addClass='rr-global-messages-example'
                    timer={1000}
                    codeMapping={{
                        8: {
                            title: 'Error',
                            displayErrorCode: false,
                            close: {
                                text: 'close',
                                props: {},
                            }
                        },
                    }}
                />
            </div>
        );
    }
};

export default ReactRevolutionFunctionAddGlobalMessage;