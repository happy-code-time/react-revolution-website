
import * as React from 'react';

import { Link } from 'react-router-dom';

import trans from '../Translations/trans';

import { TextWriter, Cards, SourceCode, Clipboard } from '.././../react-revolution/public/react-revolution';

import { exampleHome, exampleInstallationNpm, exampleInstallationYarn } from '../CodeExamples/homeExample';

import Footer from '../Modules/Footer';

class Home extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            text: this.generateRandomText()
        };
    }

    generateRandomText(){
        
        const items = [
            'You Are Awesome',
            'By David Janitzek',
            "It's so good to see you"
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
                    <br/>
                    <br/>
                    <Cards
                        itemsPerLine={3}
                        data={
                            [
                                {
                                    title: <i className="far fa-clock" />,
                                    content: trans('fast')
                                    // content: trans('fast.description')
                                },
                                {
                                    title: <i className="fas fa-balance-scale-right"/>,
                                    props: {
                                        className: 'card flex flex-column card-middle'
                                    },
                                    content: trans('light')
                                    // content: trans('light.description')
                                },
                                {
                                    title: <i className="fas fa-user-cog"/>,
                                    content: trans('interactive'),
                                    // content: trans('interactive.description')
                                }
                            ]
                        }
                    />
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
                                code={exampleHome}
                            />
                            <Clipboard
                                animation='jump' // scale, jump
                                data={(
                                    <div title={trans('copyToClipboard')} className="button-action">
                                        <i className="far fa-clipboard"></i>
                                    </div>
                                )}
                                clipboard={exampleHome}
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
                                <Link to='react-revolution-accordion' className='button-action'>
                                    {
                                        trans('getStarted')
                                    }
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
