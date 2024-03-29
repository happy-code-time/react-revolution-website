import React from 'react';
import { Table, ImageCarousel, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { ImageCarousel } from 'react-revolution';
// import ImageCarousel from 'react-revolution/ImageCarousel';

<ImageCarousel
    data={
        [
            {
                props: {
                    title: 'Title',
                    src: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
            {
                props: {
                    title: 'Title',
                    src: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
            {
                props: {
                    title: 'Title',
                    src: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
        ]
    }
    innerData={
        <p>
            innerData
        </p>
    }
/>`;

const codeExample2 = `import { ImageCarousel } from 'react-revolution';
// import ImageCarousel from 'react-revolution/ImageCarousel';

<ImageCarousel
    onStartDirection='left'
    autoplayTime={60}
    data={
        [
            {
                props: {
                    title: 'Title',
                    src: 'public/images/hello-i-m-nik-n1ccr-zVG68-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
            {
                props: {
                    title: 'Title',
                    src: 'public/images/vincent-ledvina-Rr24aBqhq9k-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
            {
                props: {
                    title: 'Title',
                    src: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
            {
                props: {
                    title: 'Title',
                    src: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
            {
                props: {
                    title: 'Title',
                    src: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
                },
                callback: console.info,
                callbackProps: 'any'
            },
        ]
    }
    innerData={
        <p>
            innerData
        </p>
    }
/>`;

class _ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ImageCarousel',
                description: trans('carousel.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageCarousel
                        data={
                            [
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                            ]
                        }
                        innerData={
                            <p>
                                innerData
                            </p>
                        }
                    />
                )
            },
            {
                title: 'ImageCarousel',
                description: trans('carousel.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <ImageCarousel
                        onStartDirection='left'
                        autoplayTime={60}
                        data={
                            [
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/hello-i-m-nik-n1ccr-zVG68-unsplash.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/chania.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                                {
                                    props: {
                                        title: 'Title',
                                        src: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg'
                                    },
                                    callback: console.info,
                                    callbackProps: 'any'
                                },
                            ]
                        }
                        innerData={
                            <p>
                                innerData
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
                                    key: 'data',
                                    values: 'carousel.data'
                                },
                                {
                                    key: 'data.props',
                                    values: 'carousel.data.props'
                                },
                                {
                                    key: 'data.callback',
                                    values: 'carousel.data.callback'
                                },
                                {
                                    key: 'data.callbackProps',
                                    values: 'carousel.data.callbackProps'
                                },
                                {
                                    key: 'allowMouseTouch',
                                    values: 'carousel.allowMouseTouch'
                                },
                                {
                                    key: 'inlineStyle',
                                    values: 'carousel.inlineStyle'
                                },
                                {
                                    key: 'useLayerX',
                                    values: 'carousel.useLayerX'
                                },
                                {
                                    key: 'transformationTime',
                                    values: 'carousel.transformationTime'
                                },
                                {
                                    key: 'autoplay',
                                    values: 'carousel.autoplay'
                                },
                                {
                                    key: 'autoplayTime',
                                    values: 'carousel.autoplayTime'
                                },
                                {
                                    key: 'nodeListener',
                                    values: 'carousel.nodeListener'
                                },
                                {
                                    key: 'disableX',
                                    values: 'carousel.disableX'
                                },
                                {
                                    key: 'disableY',
                                    values: 'carousel.disableY'
                                },
                                {
                                    key: 'innerData',
                                    values: 'carousel.innerData'
                                },
                                {
                                    key: 'onStartAnimation',
                                    values: 'carousel.onStartAnimation'
                                },
                                {
                                    key: 'onStartDirection',
                                    values: 'carousel.onStartDirection'
                                },
                            ],
                            'ImageCarousel'
                        )
                    }
                />
            </div>
        );
    }
};

export default _ImageCarousel;