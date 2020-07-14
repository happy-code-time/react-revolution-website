
import * as React from 'react';

import trans from '../Translations/trans';

import { TextWriter, Cards, SourceCode, Clipboard } from '.././../react-revolution/public/react-revolution';

import { exampleHome, exampleInstallationNpm, exampleInstallationYarn } from '../CodeExamples/homeExample';

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
                    <Cards
                        itemsPerLine={3}
                        data={
                            [
                                {
                                    title: (
                                        <div>
                                            {
                                                trans('fast')
                                            }
                                            <i className="far fa-clock" />
                                        </div>
                                    ),
                                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                                },
                                {
                                    title: (
                                        <div>
                                            {
                                                trans('light')
                                            }
                                            <i className="fas fa-balance-scale-right"></i>
                                        </div>
                                    ),
                                    props: {
                                        className: 'card flex flex-column card-middle'
                                    },
                                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                                },
                                {
                                    title: (
                                        <div>
                                            {
                                                trans('interactive')
                                            }
                                            <i className="fas fa-user-cog"></i>
                                        </div>
                                    ),
                                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                                }
                            ]
                        }
                    />
                    <div className="example">
                        <div>
                            <h1 className="title-border">
                                {
                                    trans('exampleOfUsage')
                                }
                            </h1>
                            <SourceCode
                                displayLineNumber={true}
                                code={exampleHome}
                            />
                            <Clipboard
                                animation='scale' // scale
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
                        <div>
                            <h1 className="title-border">
                                {
                                    trans('installation')
                                }
                            </h1>
                            <div className="section-install flex">
                                <div className="install">
                                    <SourceCode
                                        displayLineNumber={true}
                                        code={exampleInstallationNpm}
                                    />
                                    <Clipboard
                                        animation='scale' // scale
                                        data={(
                                            <div className="button-action">
                                                {
                                                    trans('copyToClipboard')
                                                }
                                            </div>
                                        )}
                                        clipboard={exampleInstallationNpm}
                                    />
                                </div>
                                <div className="install">
                                    <SourceCode
                                        displayLineNumber={true}
                                        code={exampleInstallationYarn}
                                    />
                                    <Clipboard
                                        animation='scale' // scale
                                        data={(
                                            <div className="button-action">
                                                {
                                                    trans('copyToClipboard')
                                                }
                                            </div>
                                        )}
                                        clipboard={exampleInstallationYarn}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
