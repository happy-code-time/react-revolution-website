import React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class InputFileDragDrop extends React.Component 
{
    constructor(props) {
        super(props);
        this.handleDroppedFiles = this.handleDroppedFiles.bind(this);
        this.errorCallback = this.errorCallback.bind(this);
        this.calculatedFileSize = this.calculatedFileSize.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);

        this.state = {
            /**
             * App
             */
            isDragging: false,
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-input-file-drag-drop',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            allowedFileSize: props.allowedFileSize,
            allowedFileSizeDescriptor: props.sizeDescriptor,
            allowedFiles: props.allowedFiles,
            readFileCallback: (props.readFileCallback && 'function' == typeof props.readFileCallback) ? props.readFileCallback : undefined,
            errorCallback: (props.errorCallback && 'function' == typeof props.errorCallback) ? props.errorCallback : undefined,
            placeholder: (props.placeholder && typeof '8' == typeof props.placeholder) ? props.placeholder : '',
            errorCallbackCustomData: props.errorCallbackCustomData ? props.errorCallbackCustomData : undefined,
            isDraggingData: props.isDraggingData
        };

        this.dragCounter = 0;
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['errorCallback', 'readFileCallback', 'placeholder', 'errorCallbackCustomData', 'isDraggingData'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-input-file-drag-drop',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                readFileCallback: (props.readFileCallback && 'function' == typeof props.readFileCallback) ? props.readFileCallback : undefined,
                errorCallback: (props.errorCallback && 'function' == typeof props.errorCallback) ? props.errorCallback : undefined,
                placeholder: (props.placeholder && typeof '8' == typeof props.placeholder) ? props.placeholder : '',
                errorCallbackCustomData: props.errorCallbackCustomData ? props.errorCallbackCustomData : undefined,
                isDraggingData: props.isDraggingData
            };
        }

        return null;
    }

    componentDidMount() {
        this.dragCounter = 0;
    }

    componentWillUnmount() {
        this.dragCounter = 0;
    }

    onDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    onDragEnter(e) {
        const { isDragging } = this.state;

        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;

        if (e.dataTransfer.items && e.dataTransfer.items.length > 0 && !isDragging) {
            this.setState({
                isDragging: true
            });
        }
    }

    onDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;

        if (0 >= this.dragCounter) {
            this.setState({
                isDragging: false
            });
        }
    }

    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.dragCounter = 0;
            this.handleDroppedFiles(e.dataTransfer.files, true);
        }

        this.setState({
            isDragging: false
        });
    }

    handleDroppedFiles(files) {
        const { readFileCallback, errorCallbackCustomData } = this.state;

        if (files) {

            for (let x = 0; x <= files.length - 1; x++) {
                const file = files[x];

                try {
                    const { type } = file;

                    if (this.validateObjectValues(file) && readFileCallback) {
                        (readFileCallback)(file, type);
                    }
                }
                catch (error) {
                    this.errorCallback(error, errorCallbackCustomData);
                }
            }
        }
    }

    validateObjectValues(object) {
        const { name, size, type } = object;
        const calculatedFileSize = this.calculatedFileSize(size);

        const { allowedFileSize, allowedFiles, errorCallbackCustomData } = this.state;
        let isFileValid = true;

        if (!name) {
            this.errorCallback('empty_filename', errorCallbackCustomData);
            isFileValid = false;
        }
        if (!size) {
            this.errorCallback('empty_filecontent', errorCallbackCustomData);
            isFileValid = false;
        }
        if (!type) {
            this.errorCallback('unrecognized_filetype', errorCallbackCustomData);
            isFileValid = false;
        }
        if (calculatedFileSize <= allowedFileSize) {
            this.errorCallback('maximum_filesize_reached', errorCallbackCustomData);
            isFileValid = false;
        }

        if (!allowedFiles.includes(type)) {
            this.errorCallback('unsupported_filetype', errorCallbackCustomData);
            isFileValid = false;
        }

        return isFileValid;
    }


    calculatedFileSize(size) {
        const { allowedFileSizeDescriptor } = this.state;
        let calculatedFileSize = 0;

        switch (allowedFileSizeDescriptor.toUpperCase()) {
            case 'B': {
                calculatedFileSize = size;
                break;
            }
            case 'KB': {
                calculatedFileSize = (size * 1024);
                break;
            }
            case 'MB': {
                calculatedFileSize = (size * 1024 * 1024);
                break;
            }
            case 'GB': {
                calculatedFileSize = (size * 1024 * 1024 * 1024);
                break;
            }
            case 'TB': {
                calculatedFileSize = (size * 1024 * 1024 * 1024 * 1024);
                break;
            }
            case 'PT': {
                calculatedFileSize = (size * 1024 * 1024 * 1024 * 1024 * 1024);
                break;
            }
            default: {
                calculatedFileSize = size;
                break;
            }
        }
        return calculatedFileSize;
    }

    /**
     * Error messages callback
     */
    errorCallback(errorCode, customData = undefined) {
        const { errorCallback } = this.state;

        if (errorCallback) {
            (errorCallback)(errorCode, customData);
        }
    }

    render() {
        const { addClass, placeholder, defaultClass, id, isDragging, isDraggingData } = this.state;

        return (
            <div className={`${defaultClass} ${addClass}`} id={id}>
                <div
                    className={`drag-drop ${isDragging ? 'dragging' : ''}`}
                    onDragEnter={this.onDragEnter}
                    onDragLeave={this.onDragLeave}
                    onDragOver={this.onDragOver}
                    onDrop={this.handleDrop}
                >
                    {
                        placeholder
                    }
                    {
                        isDragging && isDraggingData && isDraggingData
                    }
                </div>
            </div>
        );
    }
}

export default InputFileDragDrop;