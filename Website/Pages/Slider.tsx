import React from 'react';
//@ts-ignore
import { Slider, Table, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import generateArticle from '../Globals/generateArticle';
import StyleImplementation from '../Components/StyleImplementation';

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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                    dot: '😇',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                    dot: '😇',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                    dot: '😇',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                    dot: '😇',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                    dot: '😇',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                    dot: '😇',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                    data: this.imageData('Slide 1'),
                    callback: this.callback,
                    callbackProps: 1
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                    data: this.imageData('Slide 2'),
                    callback: this.callback,
                    callbackProps: 2
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                    data: this.imageData('Slide 3'),
                    callback: this.callback,
                    callbackProps: 3
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
            ]
        }
    />
</div>`;

const codeExample10 = `import { Slider } from 'react-revolution';
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
        useLayerX={false}
        data={
            [
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
            ]
        }
    />
</div>`;

const codeExample11 = `import { Slider } from 'react-revolution';
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
        autoplayStopOnLast={true}
        //Fullscreen mode
        fsPrevious='«'
        fsNext='»'
        fsUseLayerX={false}
        fsImageAsBackground={false}
        fsPreviewToggle='⇩'
        fsToggleDirection='right'
        fsCloseIcon='✖'
        fsAutoplayStopIcon='stop'
        fsAutoplayTime={3000}
        fsAutoplayNext={true}
        fsAnimationTime='05'
        fsWrapDirection={true}
        fsSlideAfterMove={true}
        fsDisplayPreview={true}
        fsDisplayPagination={true}
        fsAutoplayStopOnLast={false}
        fsActive={true}
        data={
            [
                {
                    image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                },
                {
                    image: 'public/images/chania.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                },
                {
                    image: 'public/images/chania.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
            ]
        }
    />
</div>`;

const codeExample12 = `import { Slider } from 'react-revolution';
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
        staticData={
            <div className='user-actions'>
                <style dangerouslySetInnerHTML={{
                    __html: \` 
                    .static-data{
                        top:10px;
                        right:20px;                                            
                    }                                        
                    .static-data i {
                        color: red;
                        cursor: pointer;
                        font-size: 3rem;
                    }
                    \`}}
                />
                <i
                    className={\`\${this.state.like ? 'fas fa-heart heart-like' : 'far fa-heart heart-like'}\`}
                    onClick={() => {
                        this.setState({
                            like: !this.state.like
                        })
                    }}
                ></i>
            </div>
        }
        data={
            [
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
            ]
        }
    />
</div>`;

const js12 = `constructor(props) {
    super(props);

    this.state = {
        like: false
    };
}`;

const codeExample13 = `import { Slider } from 'react-revolution';
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
        autoplayStopOnLast={true}
        //Fullscreen mode
        fsPrevious='«'
        fsNext='»'
        fsUseLayerX={false}
        fsImageAsBackground={false}
        fsPreviewToggle='⇩'
        fsToggleDirection='right'
        fsCloseIcon='✖'
        fsAutoplayStopIcon='stop'
        fsAutoplayTime={3000}
        fsAutoplayNext={true}
        fsAnimationTime='05'
        fsWrapDirection={true}
        fsSlideAfterMove={true}
        fsDisplayPreview={true}
        fsDisplayPagination={true}
        fsAutoplayStopOnLast={false}
        fsActive={true}

        callbackFsActive={console.info}
        callbackFsActiveProps='Fullscreen mode activeted'
        callbackFsInactive={console.info}
        callbackFsInactiveProps='Fullscreen mode de-activated'

        data={
            [
                {
                    image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                },
                {
                    image: 'public/images/chania.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
                {
                    image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                },
                {
                    image: 'public/images/chania.jpg',
                },
                {
                    image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                },
                {
                    image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                },
            ]
        }
    />
</div>`;

class _Slider extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.state = {
            loading: true,
            like: false
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        dot: '😇',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        data: this.imageData('Slide 1'),
                                        callback: this.callback,
                                        callbackProps: 1
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                        data: this.imageData('Slide 2'),
                                        callback: this.callback,
                                        callbackProps: 2
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        data: this.imageData('Slide 3'),
                                        callback: this.callback,
                                        callbackProps: 3
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
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
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: 'useLayerX={false}',
                reactTextBefore: '',
                react: codeExample10,
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
                            useLayerX={false}
                            data={
                                [
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('fss.example1'),
                reactTextBefore: '',
                react: codeExample11,
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
                            autoplayStopOnLast={true}
                            //Fullscreen mode
                            fsPrevious='«'
                            fsNext='»'
                            fsUseLayerX={false}
                            fsImageAsBackground={false}
                            fsPreviewToggle='⇩'
                            fsToggleDirection='right'
                            fsCloseIcon='✖'
                            fsAutoplayStopIcon='stop'
                            fsAutoplayTime={3000}
                            fsAutoplayNext={true}
                            fsAnimationTime='05'
                            fsWrapDirection={true}
                            fsSlideAfterMove={true}
                            fsDisplayPreview={true}
                            fsDisplayPagination={true}
                            fsAutoplayStopOnLast={false}
                            fsActive={true}
                            data={
                                [
                                    {
                                        image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/chania.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/chania.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                title: 'Slider',
                description: trans('fss.example2'),
                reactTextBefore: '',
                react: codeExample13,
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
                            autoplayStopOnLast={true}
                            //Fullscreen mode
                            fsPrevious='«'
                            fsNext='»'
                            fsUseLayerX={false}
                            fsImageAsBackground={false}
                            fsPreviewToggle='⇩'
                            fsToggleDirection='right'
                            fsCloseIcon='✖'
                            fsAutoplayStopIcon='stop'
                            fsAutoplayTime={3000}
                            fsAutoplayNext={true}
                            fsAnimationTime='05'
                            fsWrapDirection={true}
                            fsSlideAfterMove={true}
                            fsDisplayPreview={true}
                            fsDisplayPagination={true}
                            fsAutoplayStopOnLast={false}
                            fsActive={true}

                            callbackFsActive={console.info}
                            callbackFsActiveProps='Fullscreen mode activeted'
                            callbackFsInactive={console.info}
                            callbackFsInactiveProps='Fullscreen mode de-activated'

                            data={
                                [
                                    {
                                        image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/chania.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/chania.jpg',
                                    },
                                    {
                                        image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                    },
                                    {
                                        image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
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
                    data={buildModulesJsx(this.examples[0])}
                    fireScrollEvent={250}
                    fireScrollBack={true}
                />
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    Slider
                </h1>
                {/* 
                    Example with code based on state change
                */}
                <div className="code-example mt-4">
                    <div className="code-example-live">
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
                                staticData={
                                    <div className='user-actions'>
                                        <style dangerouslySetInnerHTML={{
                                            __html: ` 
                                        .static-data{
                                            top:10px;
                                            right:20px;                                            
                                        }                                        
                                        .static-data i {
                                            color: red;
                                            cursor: pointer;
                                            font-size: 3rem;
                                        }
                                    `}}
                                        />
                                        <i
                                            className={`${this.state.like ? 'fas fa-heart heart-like' : 'far fa-heart heart-like'}`}
                                            onClick={() => {
                                                this.setState({
                                                    like: !this.state.like
                                                })
                                            }}
                                        ></i>
                                    </div>
                                }
                                data={
                                    [
                                        {
                                            image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        },
                                        {
                                            image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                        },
                                        {
                                            image: 'public/images/carolyn-v-yywDVVmHa-M-unsplash.jpg',
                                        },
                                        {
                                            image: 'public/images/lee-yan-SF07ZPPR6Y0-unsplash.jpg',
                                        },
                                    ]
                                }
                            />
                        </div>
                        {
                            generateArticle(
                                (
                                    <h1 className="h1-example p-0  m-0">
                                        <i className="fas fa-atom" />
                                        {
                                            trans('reactCodeTitle')
                                        }
                                    </h1>
                                ),
                                (
                                    <span>
                                        <SourceCode
                                            lineNumber={true}
                                            layout='dark'
                                            code={codeExample12}
                                        />
                                        <Clipboard
                                            animation='jump' // scale, jump
                                            data={(
                                                <div title={trans('copyToClipboard')} className="button-action">
                                                    <i className="far fa-clipboard"></i>
                                                </div>
                                            )}
                                            clipboard={codeExample12}
                                        />
                                    </span>
                                )
                            )
                        }
                        {
                            generateArticle(
                                (
                                    <h1
                                        title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 1`}
                                        className="h1-example p-0  m-0"
                                    >
                                        <i className="fab fa-node-js" />
                                        {
                                            trans('jsCodeTitle')
                                        }
                                    </h1>
                                ),
                                (
                                    <span>
                                        <SourceCode
                                            lineNumber={true}
                                            layout='dark'
                                            code={js12}
                                        />
                                        <Clipboard
                                            animation='jump' // scale, jump
                                            data={(
                                                <div title={trans('copyToClipboard')} className="button-action">
                                                    <i className="far fa-clipboard"></i>
                                                </div>
                                            )}
                                            clipboard={js12}
                                        />
                                    </span>
                                )
                            )
                        }
                    </div>
                </div>
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
                                {
                                    key: 'onSlideTime',
                                    values: 'slider.onSlideTime'
                                },
                                {
                                    key: 'staticData',
                                    values: 'slider.staticData'
                                },
                                {
                                    key: 'callbackFsActive',
                                    values: 'fss.callbackFsActive'
                                },
                                {
                                    key: 'callbackFsActiveProps',
                                    values: 'fss.callbackFsActiveProps'
                                },
                                {
                                    key: 'callbackFsInactive',
                                    values: 'fss.callbackFsInactive'
                                },
                                {
                                    key: 'callbackFsInactiveProps',
                                    values: 'fss.callbackFsInactiveProps'
                                },
                                {
                                    key: 'callbackFsState',
                                    values: 'fss.callbackFsState'
                                },
                                {
                                    key: 'fsActive',
                                    values: 'fss.fsActive'
                                },
                                {
                                    key: 'fsDisplayPagination',
                                    values: 'fss.fsDisplayPagination'
                                },
                                {
                                    key: 'fsSlideAfterMove',
                                    values: 'fss.fsSlideAfterMove'
                                },
                                {
                                    key: 'fsDisplayPreview',
                                    values: 'fss.fsDisplayPreview'
                                },
                                {
                                    key: 'fsPreviewWidth',
                                    values: 'fss.fsPreviewWidth'
                                },
                                {
                                    key: 'fsPreviewHeight',
                                    values: 'fss.fsPreviewHeight'
                                },
                                {
                                    key: 'fsPreviewMarginX',
                                    values: 'fss.fsPreviewMarginX'
                                },
                                {
                                    key: 'fsPreviewMarginY',
                                    values: 'fss.fsPreviewMarginY'
                                },
                                {
                                    key: 'fsPreviewToggle',
                                    values: 'fss.fsPreviewToggle'
                                },
                                {
                                    key: 'fsToggleDirection',
                                    values: 'fss.fsToggleDirection'
                                },
                                {
                                    key: 'fsImageAsBackground',
                                    values: 'fss.fsImageAsBackground'
                                },
                                {
                                    key: 'fsWrapDirection',
                                    values: 'fss.fsWrapDirection'
                                },
                                {
                                    key: 'fsCloseIcon',
                                    values: 'fss.fsCloseIcon'
                                },
                                {
                                    key: 'fsUseLayerX',
                                    values: 'fss.fsUseLayerX'
                                },
                                {
                                    key: 'fsAutoplayTime',
                                    values: 'fss.fsAutoplayTime'
                                },
                                {
                                    key: 'fsAutoplayIcon',
                                    values: 'fss.fsAutoplayIcon'
                                },
                                {
                                    key: 'fsAutoplayNext',
                                    values: 'fss.fsAutoplayNext'
                                },
                                {
                                    key: 'fsAutoplayStopIcon',
                                    values: 'fss.fsAutoplayStopIcon'
                                },
                                {
                                    key: 'fsAutoplayStopOnLast',
                                    values: 'fss.fsAutoplayStopOnLast'
                                },
                                {
                                    key: 'fsAnimationTime',
                                    values: 'fss.fsAnimationTime'
                                },
                                {
                                    key: 'fsNext',
                                    values: 'fss.fsNext'
                                },
                                {
                                    key: 'fsPrevious',
                                    values: 'fss.fsPrevious'
                                },
                                {
                                    key: 'fsDisplayDots',
                                    values: 'fss.fsDisplayDots'
                                },
                                {
                                    key: 'fsDisplayDotsIndex',
                                    values: 'fss.fsDisplayDotsIndex'
                                },
                                {
                                    key: 'fsCloseOnEsc',
                                    values: 'fss.fsCloseOnEsc'
                                },
                                {
                                    key: 'fsOnSlideTime',
                                    values: 'slider.onSlideTime'
                                },
                            ],
                            'Slider'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Slider;