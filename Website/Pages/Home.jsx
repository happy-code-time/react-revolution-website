
import * as React from 'react';

import trans from '../Translations/trans';

import { TextWriter, Cards, SourceCode } from '.././../react-revolution/public/react-revolution';

import homeExample from '../CodeExamples/homeExample';

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
                                    text={`${trans('openSourceText')}`}
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
                                            <i className="far fa-clock"/>
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
                                        class: 'card flex flex-column card-middle'
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
                        <h1>
                            {
                                trans('exampleOfUsage')
                            }
                        </h1>
                        <SourceCode
                            displayLineNumber={true}
                            code={homeExample}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
