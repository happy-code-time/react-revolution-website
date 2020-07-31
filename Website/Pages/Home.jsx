
import * as React from 'react';

import { Link } from 'react-router-dom';

import trans from '../Translations/trans';

import { TextWriter, Cards, SourceCode, Clipboard } from '.././../react-revolution/public/react-revolution';

import { exampleHome, exampleInstallationNpm, exampleInstallationYarn } from '../CodeExamples/homeExample';

import Footer from '../Modules/Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

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
                                    text='by David Janitzek'
                                    speed={100}
                                    pipeDisplay={true}
                                    pipeChar={''}
                                    pipeSite='right' // right, left
                                    pipePersist={false}
                                />
                            </h2>
                        </div>
                    </div>
                    <h1 className="h1-title border-none text-center mt-4 mb-4">
                        React Revolution
                    </h1>
                    <Cards
                        itemsPerLine={3}
                        data={
                            [
                                {
                                    title: (
                                        <div>
                                            <i className="far fa-clock" />
                                            {
                                                trans('fast')
                                            }
                                        </div>
                                    ),
                                    content: trans('fast.description')
                                },
                                {
                                    title: (
                                        <div>
                                            <i className="fas fa-balance-scale-right"></i>
                                            {
                                                trans('light')
                                            }
                                        </div>
                                    ),
                                    props: {
                                        className: 'card flex flex-column card-middle'
                                    },
                                    content: trans('light.description')
                                },
                                {
                                    title: (
                                        <div>
                                            <i className="fas fa-user-cog"></i>
                                            {
                                                trans('interactive')
                                            }
                                        </div>
                                    ),
                                    content: trans('interactive.description')
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
                                displayLineNumber={true}
                                code={exampleHome}
                            />
                            <Clipboard
                                animation='jump' // scale, jump
                                data={(
                                    <div className="button-action">
                                        {
                                            trans('copyToClipboard')
                                        }
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
                                        displayLineNumber={false}
                                        code={exampleInstallationNpm}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div className="button-action m0">
                                                {
                                                    trans('copyToClipboard')
                                                }
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
                                        displayLineNumber={false}
                                        code={exampleInstallationYarn}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div className="button-action m0">
                                                {
                                                    trans('copyToClipboard')
                                                }
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
                <Footer/>
            </div>
        );
    }
}

export default Home;
