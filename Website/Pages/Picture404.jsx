import React from 'react';
import { Table, Picture404, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { Picture404 } from 'react-revolution';
// import Picture404 from 'react-revolution/Picture404';

<Picture404
    link={
        {
            text: 'Home',
            href: '/'
        }
    }
    imagePath='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
/>`;

class _Picture404 extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Picture404',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div className="code-example-live-wrapper">
                        <Picture404
                            link={
                                {
                                    text: 'Home',
                                    href: '/'
                                }
                            }
                            imagePath='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
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
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                                <StyleImplementation 
                    className={this.constructor.name}
                />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='Table-website'
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
                                {
                                    key: 'imagePath',
                                    values: '404.imagePath'
                                }
                            ],
                            'Picture404'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Picture404;