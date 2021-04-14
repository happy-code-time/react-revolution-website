
import React from 'react';
import { Link } from 'react-router-dom';
import trans from '../Translations/trans';
import { TextWriter, SourceCode, Clipboard } from '.././../react-revolution/react-revolution';
import { exampleHome, exampleInstallationNpm, exampleInstallationYarn } from '../CodeExamples/homeExample';

class Root extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            text: this.generateRandomText()
        };
    }

    generateRandomText(){
        
        const items = [
            'You Are Awesome!',
            "It's so good to see you!"
        ];

        return items[Math.floor(Math.random() * items.length)];
    }

    render() {
        const { text } = this.state;

        return (
            <div className="ContentBody">
                <div className="Home">
                    <div className="main-title-box">
                        <div className="main-title">
                            <i className="fab fa-react" />
                            <h1>
                                React Revolution
                            </h1>
                            <h2>
                                <TextWriter
                                    text={text}
                                    speed={50}
                                    pipeDisplay={true}
                                    pipeChar={''}
                                    pipeSite='right' // right, left
                                    pipePersist={false}
                                />
                            </h2>
                        </div>
                    </div>
                    <div className="example flex">
                        <div className="example-1">
                            <h1 className="title-border">
                                <i className="fas fa-laptop-code"></i>
                                {
                                    trans('exampleOfUsage')
                                }
                            </h1>
                            <SourceCode
                                layout='dark'
                                lineNumber={true}
                                code={exampleHome()}
                            />
                            <Clipboard
                                animation='jump' // scale, jump
                                data={(
                                    <div title={trans('copyToClipboard')} className="button-action">
                                        <i className="far fa-clipboard"></i>
                                    </div>
                                )}
                                clipboard={exampleHome()}
                            />
                        </div>
                        <div className="example-2 flex flex-column flex-space-between">

                            <div className="install-buttons flex flex-column">
                                <h1 className="title-border">
                                    <i className="fab fa-npm"></i>
                                    {`${trans('installation')} NPM`}
                                </h1>
                                <div className="install flex flex-space-between w-100">
                                    <SourceCode
                                        addClass='rr-sourcecode-install'
                                        lineNumber={false}
                                        code={exampleInstallationNpm}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action m0">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={exampleInstallationNpm}
                                    />
                                </div>
                            </div>

                            <div className="install-buttons flex flex-column mt-3">
                                <h1 className="title-border">
                                    <i className="fab fa-yarn"></i>
                                    {`${trans('installation')} YARN`}
                                </h1>
                                <div className="install flex flex-space-between w-100">
                                    <SourceCode
                                        addClass='rr-sourcecode-install'
                                        lineNumber={false}
                                        code={exampleInstallationYarn}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action m0">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={exampleInstallationYarn}
                                    />
                                </div>
                            </div>

                            <div className="documentation mt-3">
                                <h1 className="title-border">
                                    <i className="fas fa-book-reader"></i>
                                    {
                                        trans('getStarted')
                                    }
                                </h1>
                                <Link to='/components/accordion' className='button-action'>
                                    {
                                        trans('getStarted')
                                    }
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Root;
