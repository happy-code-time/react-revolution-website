import React from 'react';
import { SourceCode } from '../../react-revolution/react-revolution';
import isString from '../../react-revolution/_Functions/isString';

class StyleImplementation extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            className: isString(props.className) ? props.className : ''
        }
    }

    render() {
        let { className } = this.state;
        
        if(className)
        {
            className = className.substring(1, className.length);
        }

        return (
            <span>
                <h1 className="title-border">
                    <i className="fab fa-css3"></i>
                    Style file
                </h1>
                <p className='description'>
                    Single original scss file available inside the folder:
                </p>
                <SourceCode
                    lineNumber={true}
                    layout='dark'
                    code={`node_modules/react-revolution/scss`}
                />
                <p className='description'>
                    Single minified css file available inside the folder: 
                </p>
                <SourceCode
                    lineNumber={true}
                    layout='dark'
                    code={`node_modules/react-revolution/css`}
                />
                {
                    '' !== className &&
                    <span>
                        <p className='description'>
                            Current components style path (inside /node_modules) 
                        </p>
                        <SourceCode
                            lineNumber={true}
                            layout='dark'
                            code={`import 'react-revolution/css/${className}.css';\nimport 'react-revolution/scss/${className}.scss';`}
                        />
                    </span>
                }
                <h1 className="title-border">
                    <i className="fab fa-css3"></i>
                    Minified react-revolution css file
                </h1>
                <SourceCode
                    lineNumber={true}
                    layout='dark'
                    code={`import 'react-revolution/css/react-revolution.css';`}
                />
                <h1 className="title-border">
                    <i className="fab fa-css3"></i>
                    Origin react-revolution scss file
                </h1>
                <SourceCode
                    lineNumber={true}
                    layout='dark'
                    code={`import 'react-revolution/scss/react-revolution.scss';`}
                />
            </span>
        );
    }
};

export default StyleImplementation;