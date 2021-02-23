import React from 'react';
import { Table, Carousel, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { Carousel } from 'react-revolution';
// import Carousel from 'react-revolution/Carousel';

<span>
    <style dangerouslySetInnerHTML={{
        __html: \`
        .c {
            min-width: 150px;
            border-radius: 5px;
            box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
        }
        .c img{
            max-width: 100%;
        }
        .c h1, p{
            box-sizing:border-box;
            padding: 5px;
            font-size: 1rem;
            color: rgb(88,88,88);
        }
        .c p{
            font-size: 0.87rem;
        }
    \`}}
    />
    <Carousel
        data={this.getCarouselData()}
        innerData={
            <p>
                innerData
        </p>
        }
    />
</span>`;

const codeExample2 = `import { Carousel } from 'react-revolution';
// import Carousel from 'react-revolution/Carousel';

<span>
    <style dangerouslySetInnerHTML={{
        __html: \`
        .c {
            min-width: 150px;
            border-radius: 5px;
            box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
        }
        .c img{
            max-width: 100%;
        }
        .c h1, p{
            box-sizing:border-box;
            padding: 5px;
            font-size: 1rem;
            color: rgb(88,88,88);
        }
        .c p{
            font-size: 0.87rem;
        }
    \`}}
    />
    <Carousel
        onStartDirection='left'
        data={this.getCarouselData()}
        autoplayTime={60}
        innerData={
            <p>
                innerData
        </p>
        }
    />
</span>`;


const jsExample1 = `getCarouselData() {
    const carousel = [];

    for (let x = 0; x <= 5; x++) {
        carousel.push(
            {
                data: this.getCardData(),
                props: {
                    title: 'Car title',
                },
                callback: console.info,
                callbackProps: x
            }
        );
    }

    return carousel;
}

getCardData() {
    const imgs = [
        'lee-yan-SF07ZPPR6Y0-unsplash.jpg',
        'benjamin-voros-phIFdC6lA4E-unsplash.jpg',
        'carolyn-v-yywDVVmHa-M-unsplash.jpg',
        'chania.jpg',
        'hello-i-m-nik-n1ccr-zVG68-unsplash.jpg',
    ];
    return (
        <div className='c'>
            <img src={\`public/images/\${imgs[Math.floor(Math.random() * imgs.length)]}\`} />
            <h1>
                Title
            </h1>
            <p>
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor
                invidunt ut labore et dolore
                magna aliquyam erat, sed diam
                voluptua.
            </p>
        </div>
    );
}`;

class _Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Carousel',
                description: trans('carousel.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <span>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            .carousel-example{
                                margin: 50px auto;
                            }
                            .c {
                                min-width: 150px;
                                border-radius: 5px;
                                box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                            }
                            .c img{
                                max-width: 100%;
                            }
                            .c h1, p{
                                box-sizing:border-box;
                                padding: 5px;
                                font-size: 1rem;
                                color: rgb(88,88,88);
                            }
                            .c p{
                                font-size: 0.87rem;
                            }
                        `}}
                        />
                        <Carousel
                            addClass='carousel-example'
                            data={this.getCarouselData()}
                            innerData={
                                <p>
                                    innerData
                                </p>
                            }
                        />
                    </span>
                )
            },
            {
                title: 'Carousel',
                description: trans('carousel.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample1,
                css: '',
                html: '',
                live: (
                    <span>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            .carousel-example{
                                margin: 50px auto;
                            }
                            .c {
                                min-width: 150px;
                                border-radius: 5px;
                                box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                            }
                            .c img{
                                max-width: 100%;
                            }
                            .c h1, p{
                                box-sizing:border-box;
                                padding: 5px;
                                font-size: 1rem;
                                color: rgb(88,88,88);
                            }
                            .c p{
                                font-size: 0.87rem;
                            }
                        `}}
                        />
                        <Carousel
                            addClass='carousel-example'
                            onStartDirection='left'
                            data={this.getCarouselData()}
                            autoplayTime={60}
                            innerData={
                                <p>
                                    innerData
                                </p>
                            }
                        />
                    </span>
                )
            },
        ];
    }

    getCarouselData() {
        const carousel = [];

        for (let x = 0; x <= 5; x++) {
            carousel.push(
                {
                    data: this.getCardData(),
                    props: {
                        title: 'Car title',
                    },
                    callback: console.info,
                    callbackProps: x
                }
            );
        }

        return carousel;
    }

    getCardData() {
        const imgs = [
            'lee-yan-SF07ZPPR6Y0-unsplash.jpg',
            'benjamin-voros-phIFdC6lA4E-unsplash.jpg',
            'carolyn-v-yywDVVmHa-M-unsplash.jpg',
            'chania.jpg',
            'hello-i-m-nik-n1ccr-zVG68-unsplash.jpg',
        ];
        return (
            <div className='c'>
                <img src={`public/images/${imgs[Math.floor(Math.random() * imgs.length)]}`} />
                <h1>
                    Title
                </h1>
                <p>
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                    magna aliquyam erat, sed diam
                    voluptua.
                </p>
            </div>
        );
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
                <StyleImplementation />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
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
                                    key: 'data.data',
                                    values: 'carousel.data.data'
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
                            'rr-carousel'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Carousel;