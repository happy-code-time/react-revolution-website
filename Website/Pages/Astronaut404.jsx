import React from 'react';
import { Table, Astronaut404, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

const codeExample1 = `import { Astronaut404 } from 'react-revolution';
// import Astronaut404 from 'react-revolution/Astronaut404';

<Astronaut404
    link={
        {
            text: 'Home',
            href: '/'
        }
    }
/>`;

class _Astronaut404 extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Astronaut404',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div className="code-example-live-wrapper">
                        <Astronaut404
                            link={
                                {
                                    text: 'Home',
                                    href: '/'
                                }
                            }
                        />
                    </div>
                )
            }
        ];
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return Promise.resolve('break');
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
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={30}
                    fireScrollBack={true} 
                />

                <h1 className="h1-title border-none my-3">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='rr-table-website'
                    keysToRead={
                        [
                            'key', 'value', 'type', 'default'
                        ]
                    }
                    title={
                        [
                            trans('table.title.key'), trans('table.title.description'), trans('table.title.type'), trans('table.title.default')
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
                                    key: 'reactRouter',
                                    values: 'reactRouter'
                                },
                                {
                                    key: 'link',
                                    values: 'link.404'
                                },
                                {
                                    key: 'link.text',
                                    values: 'link.404.text'
                                },
                                {
                                    key: 'link.href',
                                    values: 'link.404.href'
                                },
                                {
                                    key: 'link.props',
                                    values: 'link.404.props'
                                },
                                {
                                    key: 'link.callback',
                                    values: 'link.404.callback'
                                },
                                {
                                    key: 'text404',
                                    values: 'text404'
                                },
                                {
                                    key: 'text1',
                                    values: '404.text1'
                                },
                                {
                                    key: 'text2',
                                    values: '404.text2'
                                },
                            ],
                            'rr-astronaut-404'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Astronaut404;