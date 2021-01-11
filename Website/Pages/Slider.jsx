import React from 'react';
import { Slider, Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
            ]
        }
    />
</div>`;

const codeExample2 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        buttonsAlwaysVisible={true}
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
            ]
        }
    />
</div>`;

const codeExample3 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        displayPagination={false}
        displayDots={false}
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
            ]
        }
    />
</div>`;


const codeExample4 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        addClass='slider-items-example'
        displayDotsIndex={false}
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                    dot: '😇',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                    dot: '😇',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                    dot: '😇',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                    dot: '😇',
                },
            ]
        }
    />
</div>`;


const codeExample5 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        addClass='slider-items-example'
        dotsInside={false}
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                    dot: '😇',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                    dot: '😇',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                    dot: '😇',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                    dot: '😇',
                },
            ]
        }
    />
</div>`;

const codeExample6 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        displayDots={true}
        displayPagination={true}
        buttonsAlwaysVisible={true}
        imageAsBackground={true}
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                    data: this.imageData('Slide 1'),
                    callback: this.callback,
                    callbackProps: 1
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                    data: this.imageData('Slide 2'),
                    callback: this.callback,
                    callbackProps: 2
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                    data: this.imageData('Slide 3'),
                    callback: this.callback,
                    callbackProps: 3
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                    data: this.imageData('Slide 4'),
                    callback: this.callback,
                    callbackProps: 4
                },
            ]
        }
        callbackMount={this.callbackMount}
        callbackMountProps={'any'}
    />
</div>`;

const jsExample6 = `callback(slideIndex, callbackProps){
    console.info(slideIndex, callbackProps);
}

callbackMount(callbackMountProps) {
    console.info(callbackMountProps);

    return new Promise((resolve, reject) => {
        resolve(2); // slide to the third image
    });
}

callbackOnEachChange(currentActiveSlide, callbackProps) {
    console.info(currentActiveSlide, callbackProps);
}

imageData(i) {
    return (
        <div
            style={
                {
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                }
            }
        >
            <div
                style={
                    {
                        margin: 'auto',
                        width: '50%',
                    }
                }
            >
                <h1
                    style={
                        {
                            textAlign: 'center',
                            color: 'rgb(255,255,255)',
                            fontSize: '5rem'
                        }
                    }
                >
                    {
                        i
                    }
                </h1>
            </div>
        </div>
    );
}`;

const codeExample7 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        addClass='slider-items-example'
        displayDotsIndex={true}
        buttonsAlwaysVisible={true}
        paginationType={2}
        previous='«'
        next='»'
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
            ]
        }
    />
</div>
`;

const codeExample8 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        addClass='slider-items-example'
        displayDotsIndex={true}
        buttonsAlwaysVisible={true}
        paginationType={2}
        previous='«'
        next='»'
        autoplay={true}
        autoplayTime={5000}
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
            ]
        }
    />
</div>`;

const codeExample9 = `import { Slider } from 'react-revolution';
// import Slider from 'react-revolution/Slider';

<div
    style={
        {
            width: '100%',
            maxWidth: '1024px',
            height: '500px',
            margin: '5vh auto'
        }
    }
    >
    <Slider
        addClass='slider-items-example'
        displayDotsIndex={true}
        buttonsAlwaysVisible={true}
        paginationType={2}
        previous='«'
        next='»'
        autoplay={true}
        autoplayTime={5000}
        animationTime='10'
        data={
            [
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                },
            ]
        }
    />
</div>`;


class _Slider extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.state = {
            loading: true
        };

        this.examples = [
            {
                title: 'Slider',
                description: trans('slider.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            buttonsAlwaysVisible={true}
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            displayPagination={false}
                            displayDots={false}
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            addClass='slider-items-example'
                            displayDotsIndex={false}
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                        dot: '😇',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example5'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            addClass='slider-items-example'
                            dotsInside={false}
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                        dot: '😇',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example6'),
                reactTextBefore: '',
                react: codeExample6,
                reactTextAfter: '',
                js: jsExample6,
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            displayDots={true}
                            displayPagination={true}
                            buttonsAlwaysVisible={true}
                            imageAsBackground={true}
                            displayDotsIndex={true}
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                        data: this.imageData('Slide 1'),
                                        callback: this.callback,
                                        callbackProps: 1
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                        data: this.imageData('Slide 2'),
                                        callback: this.callback,
                                        callbackProps: 2
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                        data: this.imageData('Slide 3'),
                                        callback: this.callback,
                                        callbackProps: 3
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                        data: this.imageData('Slide 4'),
                                        callback: this.callback,
                                        callbackProps: 4
                                    },
                                ]
                            }
                            callbackMount={this.callbackMount}
                            callbackMountProps={'any'}
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example7'),
                reactTextBefore: '',
                react: codeExample7,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            buttonsAlwaysVisible={true}
                            paginationType={2}
                            previous='«'
                            next='»'
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example8'),
                reactTextBefore: '',
                react: codeExample8,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            buttonsAlwaysVisible={true}
                            paginationType={2}
                            previous='«'
                            next='»'
                            autoplay={true}
                            autoplayTime={5000}
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('slider.example9'),
                reactTextBefore: '',
                react: codeExample9,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '100%',
                                maxWidth: '1024px',
                                height: '500px',
                                margin: '5vh auto'
                            }
                        }
                    >
                        <Slider
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            buttonsAlwaysVisible={true}
                            paginationType={2}
                            previous='«'
                            next='»'
                            autoplay={true}
                            autoplayTime={5000}
                            animationTime='10'
                            data={
                                [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
        ];
    }

    callback(slideIndex, callbackProps) {
        console.info(slideIndex, callbackProps);
    }

    callbackMount(callbackMountProps) {
        return new Promise((resolve, reject) => {
            resolve(2); // slide to the third image
        });
    }

    callbackOnEachChange(currentActiveSlide, callbackProps) {
        console.info(currentActiveSlide, callbackProps);
    }

    imageData(i) {
        return (
            <div
                style={
                    {
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                    }
                }
            >
                <div
                    style={
                        {
                            margin: 'auto',
                            width: '50%',
                        }
                    }
                >
                    <h1
                        style={
                            {
                                textAlign: 'center',
                                color: 'rgb(255,255,255)',
                                fontSize: '5rem'
                            }
                        }
                    >
                        {
                            i
                        }
                    </h1>
                </div>
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
                    data={buildModulesJsx(this.examples[0], 1)}
                    fireScrollEvent={30}
                    fireScrollBack={true}
                />
                {
                    getDescriptionForstyle('rr-slider')
                }
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
                                    key: 'globalStyle',
                                    values: 'globalStyle'
                                },
                                {
                                    key: 'moduleStyle',
                                    values: 'moduleStyle'
                                },
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
                                    values: 'slider.data'
                                },
                                {
                                    key: 'data.image',
                                    values: 'slider.data.image'
                                },
                                {
                                    key: 'data.data',
                                    values: 'slider.data.data'
                                },
                                {
                                    key: 'data.callback',
                                    values: 'slider.data.callback'
                                },
                                {
                                    key: 'data.callbackProps',
                                    values: 'slider.data.callbackProps'
                                },
                                {
                                    key: 'data.dot',
                                    values: 'slider.data.dot'
                                },
                                {
                                    key: 'displayPagination',
                                    values: 'slider.displayPagination'
                                },
                                {
                                    key: 'displayDots',
                                    values: 'slider.displayDots'
                                },
                                {
                                    key: 'displayDotsIndex',
                                    values: 'slider.displayDotsIndex'
                                },
                                {
                                    key: 'buttonsAlwaysVisible',
                                    values: 'slider.buttonsAlwaysVisible'
                                },
                                {
                                    key: 'next',
                                    values: 'slider.next'
                                },
                                {
                                    key: 'previous',
                                    values: 'slider.previous'
                                },
                                {
                                    key: 'callbackMount',
                                    values: 'slider.callbackMount'
                                },
                                {
                                    key: 'callbackMountProps',
                                    values: 'slider.callbackMountProps'
                                },
                                {
                                    key: 'imageAsBackground',
                                    values: 'slider.imageAsBackground'
                                },
                                {
                                    key: 'slideAfterMove',
                                    values: 'slider.slideAfterMove'
                                },
                                {
                                    key: 'paginationType',
                                    values: 'slider.paginationType'
                                },
                                {
                                    key: 'autoplay',
                                    values: 'slider.autoplay'
                                },
                                {
                                    key: 'autoplayTime',
                                    values: 'slider.autoplayTime'
                                },
                                {
                                    key: 'autoplayNext',
                                    values: 'slider.autoplayNext'
                                },
                                {
                                    key: 'animationTime',
                                    values: 'slider.animationTime'
                                },
                                {
                                    key: 'allowMouseTouch',
                                    values: 'slider.allowMouseTouch'
                                },
                                {
                                    key: 'wrapDirection',
                                    values: 'slider.wrapDirection'
                                },
                                {
                                    key: 'inlineStyle',
                                    values: 'slider.inlineStyle'
                                },
                                {
                                    key: 'useLayerX',
                                    values: 'slider.useLayerX'
                                },
                            ],
                            'rr-slider'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Slider;