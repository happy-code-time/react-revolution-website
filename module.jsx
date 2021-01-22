import React from 'react';
import ReactDOM from 'react-dom';
import { SliderFullscreen, Slider } from './react-revolution/react-revolution';
import './react-revolution/_Sass/rr-slider.scss';
import './react-revolution/_Sass/rr-slider-fullscreen.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toogleFSS = this.toogleFSS.bind(this);

        this.state = {
            display: false
        };
    }

    toogleFSS(closeCallbackProps) {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        return (
            <div
                style={
                    {
                        width: '100%',
                        maxWidth: '1024px',
                        height: '300px',
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
                    fsAutoplayIcon='🖥'
                    fsAutoplayStopIcon='stop'
                    fsAutoplayTime={3000}
                    fsAutoplayNext={true}
                    fsAnimationTime='05'
                    fsWrapDirection={true}
                    fsSlideAfterMove={true}
                    fsDisplayPreview={true}
                    fsDisplayPagination={true}
                    fsAutoplayStopOnLast={false}
                    data={
                        [
                            {
                                image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                            },
                            {
                                image: 'public/images/chania.jpg',
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                            },
                            {
                                image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                            },
                            {
                                image: 'public/images/chania.jpg',
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                            },
                        ]
                    }
                />

                <button onClick={() => this.toogleFSS()}>
                    toggle FSS
                </button>
                {
                    this.state.display &&
                    <SliderFullscreen
                        addClass='slider-items-example'
                        closeCallback={this.toogleFSS}
                        closeCallbackProps='any'
                        buttonsAlwaysVisible={true}
                        autoplayStopOnLast={true}
                        previous='«'
                        next='»'
                        useLayerX={false}
                        imageAsBackground={false}
                        previewToggle='⇩'
                        toggleDirection='right'
                        closeIcon='✖'
                        autoplayIcon='🖥'
                        autoplayStopIcon='stop'
                        autoplayTime={3000}
                        autoplayNext={true}
                        animationTime='05'
                        wrapDirection={true}
                        slideAfterMove={true}
                        displayPreview={true}
                        displayPagination={true}
                        autoplayStopOnLast={false}
                        data={
                            [
                                {
                                    image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                                },
                                {
                                    image: 'public/images/chania.jpg',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                },
                                {
                                    image: 'public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                                },
                                {
                                    image: 'public/images/chania.jpg',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                                },
                                {
                                    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg',
                                },
                            ]
                        }
                    />
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));