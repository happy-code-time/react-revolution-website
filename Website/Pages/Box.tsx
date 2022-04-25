import React from 'react';
//@ts-ignore
import { Table, Box, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { Box } from 'react-revolution';
// import Box from 'react-revolution/Box';

<span>
    <style dangerouslySetInnerHTML={{
        __html: \`
            .boxes-example{
                max-width: 520px;
                margin: 20px auto;
            }
            .c {
                border-radius: 5px;
                box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                margin: 10px;
            }
            .c .img{
                width: 100%;
                min-height: 100px;
                height: auto;
                overfow: auto;
                position:relative;
            }
            .c img{
                width: 100%;
                height: 100%;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
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
    <Box
        addClass='boxes-example'
        animation='mount'
        direction='left'
        itemsPerLine={2}
        data={this.getStructure(5, 0)}
    />
</span>`;

const codeExample2 = `import { Box } from 'react-revolution';
// import Box from 'react-revolution/Box';

<span>
    <style dangerouslySetInnerHTML={{
        __html: \`
            .boxes-example{
                max-width: 520px;
                margin: 20px auto;
            }
            .c {
                border-radius: 5px;
                box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                margin: 10px;
            }
            .c .img{
                width: 100%;
                min-height: 100px;
                height: auto;
                overfow: auto;
                position:relative;
            }
            .c img{
                width: 100%;
                height: 100%;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
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
    <Box
        addClass='boxes-example'
        animation='scroll'
        direction='right'
        itemsPerLine={2}
        data={this.getStructure(5, 1)}
    />
</span>`;

const codeExample3 = `import { Box } from 'react-revolution';
// import Box from 'react-revolution/Box';

<span>
    <style dangerouslySetInnerHTML={{
        __html: \`
            .boxes-example{
                max-width: 520px;
                margin: 20px auto;
            }
            .c {
                border-radius: 5px;
                box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                margin: 10px;
            }
            .c .img{
                width: 100%;
                min-height: 100px;
                height: auto;
                overfow: auto;
                position:relative;
            }
            .c img{
                width: 100%;
                height: 100%;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
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
    <Box
        addClass='boxes-example'
        animation='scroll'
        direction='left'
        itemsPerLine={2}
        data={this.getStructure(5, 2)}
        // Scroll 400px more (down on y-axis) 
        // to execute the animation function
        // base on the react-revolution\`s
        // "isInViewport(node, this.state.scrollAdd)"
        // function
        scrollAdd={400}
    />
</span>`;

const jsExample = `getStructure(itemsPerLine) {
    const carousel = [];

    for (let x = 0; x < itemsPerLine; x++) {
        carousel.push(
            {
                data: this.getJsx(),
                props: {
                    title: 'Box title',
                },
                callback: console.info,
                callbackProps: x
            }
        );
    }

    return carousel;
}

getJsx() {
    const imgs = [
        'lee-yan-SF07ZPPR6Y0-unsplash.jpg',
        'benjamin-voros-phIFdC6lA4E-unsplash.jpg',
        'carolyn-v-yywDVVmHa-M-unsplash.jpg',
        'chania.jpg',
        'hello-i-m-nik-n1ccr-zVG68-unsplash.jpg',
    ];
    return (
        <div className='c'>
            <div className='img'>
                <img src={\`public/images/\${imgs[Math.floor(Math.random() * imgs.length)]}\`} />
            </div>
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

class _Box extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Box',
                description: trans('boxes.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <span>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                .boxes-example{
                                    max-width: 520px;
                                    margin: 20px auto;
                                }
                                .c {
                                    border-radius: 5px;
                                    box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                                    margin: 10px;
                                }
                                .c .img{
                                    width: 100%;
                                    min-height: 100px;
                                    height: auto;
                                    overfow: auto;
                                    position:relative;
                                }
                                .c img{
                                    width: 100%;
                                    height: 100%;
                                    border-top-left-radius: 5px;
                                    border-top-right-radius: 5px;
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
                        <Box
                            addClass='boxes-example'
                            animation='mount'
                            direction='left'
                            itemsPerLine={2}
                            data={this.getStructure(5, 0)}
                        />
                    </span>
                )
            },
            {
                title: 'Box',
                description: trans('boxes.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <span>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                .boxes-example{
                                    max-width: 520px;
                                    margin: 20px auto;
                                }
                                .c {
                                    border-radius: 5px;
                                    box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                                    margin: 10px;
                                }
                                .c .img{
                                    width: 100%;
                                    min-height: 100px;
                                    height: auto;
                                    overfow: auto;
                                    position:relative;
                                }
                                .c img{
                                    width: 100%;
                                    height: 100%;
                                    border-top-left-radius: 5px;
                                    border-top-right-radius: 5px;
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
                        <Box
                            addClass='boxes-example'
                            animation='scroll'
                            direction='right'
                            itemsPerLine={2}
                            data={this.getStructure(5, 1)}
                        />
                    </span>
                )
            },
            {
                title: 'Box',
                description: trans('boxes.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample,
                css: '',
                html: '',
                live: (
                    <span>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                .boxes-example{
                                    max-width: 520px;
                                    margin: 20px auto;
                                }
                                .c {
                                    border-radius: 5px;
                                    box-shadow: 0px 0px 6px rgba(69,69,69,0.77);
                                    margin: 10px;
                                }
                                .c .img{
                                    width: 100%;
                                    min-height: 100px;
                                    height: auto;
                                    overfow: auto;
                                    position:relative;
                                }
                                .c img{
                                    width: 100%;
                                    height: 100%;
                                    border-top-left-radius: 5px;
                                    border-top-right-radius: 5px;
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
                        <Box
                            addClass='boxes-example'
                            animation='scroll'
                            direction='left'
                            itemsPerLine={3}
                            data={this.getStructure(6, 2)}
                            // Scroll 400px more (down on y-axis) 
                            // to execute the animation function
                            // base on the react-revolution`s
                            // "isInViewport(node, this.state.scrollAdd)"
                            // function
                            scrollAdd={400}
                        />
                    </span>
                )
            },
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

    getStructure(itemsPerLine, imageNumber) {
        const carousel = [];

        for (let x = 0; x < itemsPerLine; x++) {
            carousel.push(
                {
                    data: this.getJsx(imageNumber),
                    props: {
                        title: 'Box title',
                    },
                    callback: console.info,
                    callbackProps: x
                }
            );
        }

        return carousel;
    }

    getJsx(imageNumber) {
        const imgs = [
            'lee-yan-SF07ZPPR6Y0-unsplash.jpg',
            'benjamin-voros-phIFdC6lA4E-unsplash.jpg',
            'hello-i-m-nik-n1ccr-zVG68-unsplash.jpg',
        ];
        return (
            <div className='c'>
                <div className='img'>
                    <img src={`public/images/${imgs[imageNumber]}`} />
                </div>
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
                                    key: 'direction',
                                    values: 'boxes.direction'
                                },
                                {
                                    key: 'animation',
                                    values: 'boxes.animation'
                                },
                                {
                                    key: 'type',
                                    values: 'boxes.type'
                                },
                                {
                                    key: 'scrollAdd',
                                    values: 'boxes.scrollAdd'
                                },
                                {
                                    key: 'animationTime',
                                    values: 'boxes.animationTime'
                                },
                                {
                                    key: 'animationDelay',
                                    values: 'boxes.animationDelay'
                                },
                            ],
                            'Box'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Box;