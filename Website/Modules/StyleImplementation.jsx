import React from 'react';
import { SourceCode } from '../../react-revolution/react-revolution';

class StyleImplementation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                <h1 className="title-border">
                    <i className="fab fa-css3"></i>
                    Global style file
                </h1>
                <p className='description'>
                    Global minified css file available inside the node_modules/react-revolution/css/react-revolution.css.
                    Main scss file are available in node_modules/react-revolution/scss/react-revolution.scss.
                </p>
                <SourceCode
                    lineNumber={true}
                    layout='dark'
                    code={`import 'react-revolution/css/react-revolution.css';\nimport 'react-revolution/scss/react-revolution.scss';`}
                />
                <h1 className="title-border">
                    <i className="fab fa-css3"></i>
                    Single style file
                </h1>
                <p className='description'>
                    Single minified css file available inside the node_modules/react-revolution/css/default-class-name.css.
                    Single original scss file available inside the node_modules/react-revolution/scss/default-class-name.scss.
                </p>
                <SourceCode
                    lineNumber={true}
                    layout='dark'
                    code={`import 'react-revolution/css/components-default-class-name.css';\nimport 'react-revolution/scss/components-default-class-name.scss';`}
                />
            </span>
        );
    }
};

export default StyleImplementation;