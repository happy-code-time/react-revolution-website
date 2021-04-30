import React from 'react';
import { Table, ImageBox, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { ImageBox } from 'react-revolution';
// import ImageBox from 'react-revolution/ImageBox';

<ImageBox
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
/>`;

const codeExample2 = `import { ImageBox } from 'react-revolution';
// import ImageBox from 'react-revolution/ImageBox';

<ImageBox
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    direction='left'
/>`;

const codeExample3 = `import { ImageBox } from 'react-revolution';
// import ImageBox from 'react-revolution/ImageBox';

<ImageBox
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    direction='left'
    boxData={
        <p>
            Main box data
        </p>
    }
/>`;

const codeExample4 = `import { ImageBox } from 'react-revolution';
// import ImageBox from 'react-revolution/ImageBox';

<ImageBox
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    direction='left'
    boxData={
        <p>
            Main box data
        </p>
    }
    data={
        <p>
            Root data
        </p>
    }
/>`;

const codeExample5 = `import { ImageBox } from 'react-revolution';
// import ImageBox from 'react-revolution/ImageBox';

<ImageBox
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    boxData={
        <p>
            Main box data
            </p>
    }
    displayData={false} // !!!
    data={
        <p>
            Root data
        </p>
    }
/>`;

const codeExample6 = `import { ImageBox } from 'react-revolution';
// import ImageBox from 'react-revolution/ImageBox';

<ImageBox
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    direction='left'
    boxData={
        <p>
            Main box data
            </p>
    }
    displayData={false} // !!!
    data={
        <p>
            Root data
        </p>
    }
/>`;

class _ImageBox extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ImageBox',
                description: trans('imageBox.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBox
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                    />
                )
            },
            {
                title: 'ImageBox',
                description: trans('imageBox.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBox
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        direction='left'
                    />
                )
            },
            {
                title: 'ImageBox',
                description: trans('imageBox.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBox
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        direction='left'
                        boxData={
                            <p>
                                Main box data
                                </p>
                        }
                    />
                )
            },
            {
                title: 'ImageBox',
                description: trans('imageBox.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBox
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        direction='left'
                        boxData={
                            <p>
                                Main box data
                                </p>
                        }
                        data={
                            <p>
                                Root data
                                </p>
                        }
                    />
                )
            },
            {
                title: 'ImageBox',
                description: trans('imageBox.example5'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBox
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        boxData={
                            <p>
                                Main box data
                                </p>
                        }
                        displayData={false} // !!!
                        data={
                            <p>
                                Root data
                            </p>
                        }
                    />
                )
            },
            {
                title: 'ImageBox',
                description: trans('imageBox.example6'),
                reactTextBefore: '',
                react: codeExample6,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBox
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        direction='left'
                        boxData={
                            <p>
                                Main box data
                                </p>
                        }
                        displayData={false} // !!!
                        data={
                            <p>
                                Root data
                            </p>
                        }
                    />
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
                                    key: 'image',
                                    values: 'imageBox.image'
                                },
                                {
                                    key: 'imageData',
                                    values: 'imageBox.imageData'
                                },
                                {
                                    key: 'imageProps',
                                    values: 'imageBox.imageProps'
                                },
                                {
                                    key: 'direction',
                                    values: 'imageBox.direction'
                                },
                                {
                                    key: 'boxData',
                                    values: 'imageBox.boxData'
                                },
                                {
                                    key: 'boxProps',
                                    values: 'imageBox.boxProps'
                                },
                                {
                                    key: 'data',
                                    values: 'imageBox.data'
                                },
                                {
                                    key: 'displayData',
                                    values: 'imageBox.displayData'
                                }
                            ],
                            'ImageBox'
                        )
                    }
                />
            </div>
        );
    }
};

export default _ImageBox;