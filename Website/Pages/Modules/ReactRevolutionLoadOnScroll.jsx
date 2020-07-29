import React from 'react';

import { Table, LoadOnScroll, LoadingBoxTop, uuid } from '../../../react-revolution/public/react-revolution';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import trans from '../../Translations/trans';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

const codeExample = `import { LoadOnScroll, LoadingBoxTop, uuid } from 'react-revolution';

<div className="rr-revolution-loadonscroll-example">
    <LoadOnScroll
        scrollReference={true}
        minify={40}
        callback={this.callback}
        loadMoreLoadingIcon={
            <LoadingBoxTop
                text={trans('loading')}
                display={true}
            />
        }
        data={
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        }
    />
</div>`;

const jsExample = `callback() {
    const { count } = this.state;

    if (3 <= count) {
        return Promise.resolve('break');
    }

    this.setState({
        count: this.state.count + 1
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                <p>
                    {
                        uuid()
                    }
                </p>
            );
        }, 500);
    });
}`;

const cssExample = `.rr-revolution-loadonscroll-example{
    min-width: 300px;
    width: 50vw;
    height: 200px;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;

    p{
        line-height: 30px;
    }
}`;


class ReactRevolutionLoadOnScroll extends React.Component {

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'LoadOnScroll',
                description: '',
                reactTextBefore: '',
                react: codeExample,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-loadonscroll-example">
                        <LoadOnScroll
                            scrollReference={true}
                            minify={40}
                            callback={this.callback}
                            loadMoreLoadingIcon={
                                <LoadingBoxTop
                                    text={trans('loading')}
                                    display={true}
                                />
                            }
                            data={
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            }
                        />
                    </div>
                )
            },
        ];

        this.state = {
            count: 0
        }
    }

    callback() {
        const { count } = this.state;

        if (3 <= count) {
            return Promise.resolve('break');
        }

        this.setState({
            count: this.state.count + 1
        });

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    <p>
                        {
                            uuid()
                        }
                    </p>
                );
            }, 500);
        });
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
                <h1 className="h1-title border-none text-center mb-4">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    keysToRead={
                        [
                            'key', 'value', 'type', 'default'
                        ]
                    }
                    data={
                        buildTableKeysStructure(
                            [
                                {
                                    key: 'id',
                                    values: 'id'
                                },
                                {
                                    key: 'defaultClass',
                                    values: 'class'
                                },
                                {
                                    key: 'addClass',
                                    values: 'addClass'
                                },
                                {
                                    key: 'data',
                                    values: 'loadonscroll.data'
                                },
                                {
                                    key: 'callback',
                                    values: 'loadMoreCallback'
                                },

                                {
                                    key: 'loadMoreLoadingIcon',
                                    values: 'loadMoreLoadingIcon'
                                },
                                {
                                    key: 'minify',
                                    values: 'minify'
                                },
                                {
                                    key: 'scrollReference',
                                    values: 'scrollReference'
                                },
                            ],
                            'rr-load-on-scroll'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionLoadOnScroll;

