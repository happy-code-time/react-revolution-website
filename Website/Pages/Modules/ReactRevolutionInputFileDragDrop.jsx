import React from 'react';

import { addGlobalMessage, GlobalMessages, InputFileDragDrop, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

const codeExample1 = `import { InputFileDragDrop } from 'react-revolution';

<InputFileDragDrop
    placeholder='Drag Drop your CSV or XLS files here...'
    allowedFileSize={2}
    sizeDescriptor={"MB"}
    allowedFiles={['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']}
    errorCallback={this.errorHandler}
    errorCallbackCustomData={'------'}
    readFileCallback={this.callback}
    multiple={true}
    uploadOnClick={true}
/>`;

const jsExample1 = `errorHandler(messageType, customData){

    /**
     * Error handler
     * @param {string} messageType
     * @param {any} customData
     */
    errorHandler(messageType, customData) {
        switch(messageType){
            case 'empty_filename' : {
                console.error(\`Filename empty \${customData ? customData : ''}\`);
                break;
            }
            case 'empty_filecontent' : {
                console.error(\`File empty \${customData ? customData : ''}\`);
                break;
            }
            case 'unrecognized_filetype' : {
                console.error(\`Unrecognized filetype \${customData ? customData : ''}\`);
                break;
            }
            case 'maximum_filesize_reached' : {
                console.error(\`Filesize to big \${customData ? customData : ''}\`);
                break;
            }
            case 'unsupported_filetype' : {
                console.error(\`Unsupported filetype \${customData ? customData : ''}\`);
                break;
            }
            default : {
                console.error(\`Unknown error \${customData ? customData : ''}\`);
                break;
            }
        }
    }
}

/**
 * Switch file type
 * @param {object} file
 * @param {string} type
 */
callback(file, type) {
    switch (type) {
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
            console.info('Reading as XSLX file type');
            break;
        }
        case 'text/csv': {
            console.info('Reading as CSV file type');
            break;
        }
        default: {
            console.error(\`File type not supported: \${type}\`);
        }
    }

    console.info(\`File type: \${type}\`);
    console.info(file);
}`;

class ReactRevolutionInputFileDragDrop extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'InputFileDragDrop',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <InputFileDragDrop
                        placeholder='Drag Drop your CSV or XLS files here...'
                        allowedFileSize={2}
                        sizeDescriptor={"MB"}
                        allowedFiles={['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']}
                        errorCallback={this.errorHandler}
                        errorCallbackCustomData={'------'}
                        readFileCallback={this.callback}
                        uploadOnClick={true}
                        multiple={true}
                    />
                )
            }
        ];
    }

    /**
     * Error handler
     * @param {string} messageType
     * @param {any} customData
     */
    errorHandler(messageType, customData) {
        let errorMessage = '';

        switch (messageType) {
            case 'empty_filename': {
                errorMessage = `Filename empty ${customData ? customData : ''}`;
                break;
            }
            case 'empty_filecontent': {
                errorMessage = `File empty ${customData ? customData : ''}`;
                console.error(errorMessage);
                break;
            }
            case 'unrecognized_filetype': {
                errorMessage = `Unrecognized filetype ${customData ? customData : ''}`;
                console.error(errorMessage);
                break;
            }
            case 'maximum_filesize_reached': {
                errorMessage = `Filesize to big ${customData ? customData : ''}`;
                console.error(errorMessage);
                break;
            }
            case 'unsupported_filetype': {
                errorMessage = `Unsupported filetype ${customData ? customData : ''}`;
                console.error(errorMessage);
                break;
            }
            default: {
                errorMessage = `Unknown error ${customData ? customData : ''}`;
                console.error(errorMessage);
                break;
            }
        }

        addGlobalMessage('messagesApp', errorMessage, 1, 5000);
    }

    /**
     * Switch file type
     * @param {object} file
     * @param {string} type
     */
    callback(file, type) {
        let message = '';

        switch (type) {
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
                message = 'Reading as XSL file type';
                console.info(message);
                break;
            }
            case 'text/csv': {
                message = 'Reading as CSV file type';
                console.info(message);
                break;
            }
            default: {
                message = `File type not supported: ${type}`;
                console.error(message);
            }
        }

        addGlobalMessage('messagesApp', message, 1, 5000);
        console.info(file);
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
                <GlobalMessages
                    messageKey='messagesApp'
                    timer={1000}
                    codeMapping={{
                        1: {
                            title: 'Upload',
                            displayErrorCode: false,
                            text: {
                                prefix: '',
                                suffix: '',
                                props: {},
                            },
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

export default ReactRevolutionInputFileDragDrop;

