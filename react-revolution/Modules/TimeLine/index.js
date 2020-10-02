import React from 'react';

import uuid from '../internalFunctions/uuid';

import loadStyle from '../internalFunctions/loadStyle';

class TimeLine extends React.Component 
{

    constructor(props) {
        super(props);
        this.setText = this.setText.bind(this);

        this.state = {
            /**
             * App
             */
            written: [],
            uuid: `${uuid()}`,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
                        globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-time-line',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            text: (props.text && props.text.length) ? props.text : '',
            speed: (props.speed && typeof 8 == typeof props.speed) ? props.speed : 300,
            pipeDisplay: (typeof true == typeof props.pipeDisplay) ? props.pipeDisplay : true,
            pipeChar: props.pipeChar ? props.pipeChar : '|',
            pipeSite: (props.pipeSite && typeof '8' == typeof props.pipeSite) ? props.pipeSite : 'right',
            pipePersist: (typeof true == typeof props.pipePersist) ? props.pipePersist : false,
            replaces: (props.replaces && typeof [] == typeof props.replaces) ? props.replaces : undefined,
            timeout: (props.timeout && typeof 8 == typeof props.timeout) ? props.timeout : 0
        };
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { written, text, timeout } = this.state;

        setTimeout(() => {
            this.setText(written, text);
        }, timeout);
    }

    writerPromise(char) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(char);
            }, 1);
        });
    }

    removerPromise(written) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(written);
            }, 1);
        });
    }

    setText(written, text) {
        const { speed, pipePersist, replaces } = this.state;
        const splitted = text.split('');
        let count = -1;

        const runIntervaller = (splitted) => {
            this.writerInterval = setInterval(async () => {
                count++;

                if (count > splitted.length - 1) {
                    clearInterval(this.writerInterval);

                    if (replaces && replaces.length) {
                        this.runReplacer();
                    }
                    else {
                        setTimeout(() => {
                            this.setState({
                                pipeDisplay: pipePersist
                            });
                        }, speed);
                    }
                }

                await this.writerPromise(splitted[count]).then(char => {
                    written.push(char);

                    this.setState({
                        written
                    });
                });

            }, speed);
        }

        runIntervaller(splitted);
    }

    runReplacer() {
        let { replaces, pipePersist, speed, uuid } = this.state;
        let replacesDone = 0;

        const runReplacer = () => {
            let { written } = this.state;
            let { from, to, replace } = replaces[replacesDone];

            this.removeIntervaller = setInterval(async () => {

                if (from > to) {
                    clearInterval(this.removeIntervaller);
                    /**
                     * Remove empty string added by the module
                     */
                    const newString = [];

                    for (let x = 0; x <= written.length - 1; x++) {
                        if (uuid !== written[x]) {
                            newString.push(written[x]);
                        }
                    }

                    this.setState({
                        written: newString
                    }, () => {
                        /**
                         * Its time to add the replacement string
                         */
                        if (replace && replace.length) {
                            const { written } = this.state;
                            const prev = written.slice(0, from);
                            const next = written.slice(from, to);
                            const last = written.slice(to, written.length - 1);

                            if (last[0] && ' ' == last[0]) {
                                last[0] = '';
                            }

                            let count = -1;
                            const splitted = replace.split('');
                            const newString = [];

                            this.writerInterval = setInterval(async () => {
                                count++;

                                if (count > splitted.length - 1) {
                                    clearInterval(this.writerInterval);
                                    replacesDone += 1;

                                    if (undefined !== replaces[replacesDone]) {
                                        runReplacer();
                                    }
                                    else {
                                        setTimeout(() => {
                                            this.setState({
                                                pipeDisplay: pipePersist
                                            });
                                        }, speed);
                                    }
                                }

                                await this.writerPromise(splitted[count]).then(char => {
                                    newString.push(char);

                                    this.setState({
                                        written: [...prev, ...newString, ...next, ...last]
                                    });
                                });

                            }, speed);
                        }
                    });
                }
                else {
                    written[to] = uuid;
                    this.setState({ written });
                }

                to -= 1;

            }, speed);
        }

        runReplacer();
    }

    render() {
        const { addClass, defaultClass, id, uuid, written, pipeDisplay, pipeChar, pipeSite } = this.state;

        return (
            <span className={`${defaultClass} ${addClass}`} id={id}>
                {
                    'left' == pipeSite && pipeDisplay &&
                    <span className="pipe">
                        {
                            pipeChar
                        }
                    </span>
                }
                {
                    written.map(i => {
                        if (uuid !== i) {
                            return i
                        }
                    })
                }
                {
                    'right' == pipeSite && pipeDisplay &&
                    <span className="pipe">
                        {
                            pipeChar
                        }
                    </span>
                }
            </span>
        );
    }
}

export default TimeLine;