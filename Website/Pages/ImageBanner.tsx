import React from 'react';
//@ts-ignore
import { Table, ImageBanner, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { ImageBanner } from 'react-revolution';
// import ImageBanner from 'react-revolution/ImageBanner';

<ImageBanner
    image='public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
    imageAsSource={false} // by default
    boxData={
        (
            <span>
                <h1>
                    Lorem ipsum
                </h1>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua. 
                </p>
            </span>
        )
    }
/>`;

const codeExample2 = `import { ImageBanner } from 'react-revolution';
// import ImageBanner from 'react-revolution/ImageBanner';

<ImageBanner
    direction='center'
    image='public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
    imageAsSource={false} // by default
    boxData={
        (
            <span>
                <h1>
                    Lorem ipsum
            </h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat, sed diam
                    voluptua.
            </p>
            </span>
        )
    }
/>`;

const codeExample3 = `import { ImageBanner } from 'react-revolution';
// import ImageBanner from 'react-revolution/ImageBanner';

<ImageBanner
    direction='right'
    image='public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
    imageAsSource={false} // by default
    boxData={
        (
            <span>
                <h1>
                    Lorem ipsum
            </h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat, sed diam
                    voluptua.
            </p>
            </span>
        )
    }
/>`;

const codeExample4 = `import { ImageBanner } from 'react-revolution';
// import ImageBanner from 'react-revolution/ImageBanner';

<ImageBanner
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    imageAsSource={true}
    boxData={
        (
            <span>
                <h1>
                    Lorem ipsum
                </h1>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua. 
                </p>
            </span>
        )
    }
/>`;

const codeExample5 = `import { ImageBanner } from 'react-revolution';
// import ImageBanner from 'react-revolution/ImageBanner';

<ImageBanner
    direction='center'
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    imageAsSource={true}
    boxData={
        (
            <span>
                <h1>
                    Lorem ipsum
                </h1>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua. 
                </p>
            </span>
        )
    }
/>`;

const codeExample6 = `import { ImageBanner } from 'react-revolution';
// import ImageBanner from 'react-revolution/ImageBanner';

<ImageBanner
    direction='right'
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    imageAsSource={true}
    boxData={
        (
            <span>
                <h1>
                    Lorem ipsum
                </h1>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam 
                    voluptua. 
                </p>
            </span>
        )
    }
/>`;

class _ImageBanner extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ImageBanner',
                description: trans('imageBanner.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBanner

                        image='public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
                        imageAsSource={false} // by default
                        boxData={
                            (
                                <span>
                                    <h1>
                                        Lorem ipsum
                                </h1>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam
                                        voluptua.
                                </p>
                                </span>
                            )
                        }
                    />
                )
            },
            {
                title: 'ImageBanner',
                description: trans('imageBanner.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBanner
                        direction='center'
                        image='public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
                        imageAsSource={false} // by default
                        boxData={
                            (
                                <span>
                                    <h1>
                                        Lorem ipsum
                                </h1>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam
                                        voluptua.
                                </p>
                                </span>
                            )
                        }
                    />
                )
            },
            {
                title: 'ImageBanner',
                description: trans('imageBanner.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBanner
                        direction='right'
                        image='public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
                        imageAsSource={false} // by default
                        boxData={
                            (
                                <span>
                                    <h1>
                                        Lorem ipsum
                                </h1>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam
                                        voluptua.
                                </p>
                                </span>
                            )
                        }
                    />
                )
            },
            {
                title: 'ImageBanner',
                description: trans('imageBanner.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBanner
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        imageAsSource={true}
                        boxData={
                            (
                                <span>
                                    <h1>
                                        Lorem ipsum
                                </h1>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam
                                        voluptua.
                                </p>
                                </span>
                            )
                        }
                    />
                )
            },
            {
                title: 'ImageBanner',
                description: trans('imageBanner.example5'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBanner
                        direction='center'
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        imageAsSource={true}
                        boxData={
                            (
                                <span>
                                    <h1>
                                        Lorem ipsum
                                </h1>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam
                                        voluptua.
                                </p>
                                </span>
                            )
                        }
                    />
                )
            },
            {
                title: 'ImageBanner',
                description: trans('imageBanner.example6'),
                reactTextBefore: '',
                react: codeExample6,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageBanner
                        direction='right'
                        image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                        imageAsSource={true}
                        boxData={
                            (
                                <span>
                                    <h1>
                                        Lorem ipsum
                                </h1>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam
                                        voluptua.
                                </p>
                                </span>
                            )
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
            resolve(buildModulesJsx(this.examples[this.countCallbacks]));
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
                    data={buildModulesJsx(this.examples[0])} // Default as the first example
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
                                    key: 'imageAsSource',
                                    values: 'imageBanner.imageAsSource'
                                },
                                {
                                    key: 'imageProps',
                                    values: 'imageBox.imageProps'
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
                                    key: 'direction',
                                    values: 'imageBanner.direction'
                                },
                            ],
                            'ImageBanner'
                        )
                    }
                />
            </div>
        );
    }
};

export default _ImageBanner;