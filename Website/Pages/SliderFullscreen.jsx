import React from 'react';
import { SliderFullscreen, Table, SourceCode, Clipboard } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans'
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import generateArticle from '../Globals/generateArticle';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample = `import { SliderFullscreen } from 'react-revolution';
// import SliderFullscreen from 'react-revolution/SliderFullscreen';

render(){
    return(
        <span>
        <button
            style={
                {
                    width: '100px',
                    boxSizing: 'border-box',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: 'dodgerblue',
                    color: 'rgb(255,255,255)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    margin: '0 calc(50% - 50px)',
                    border: '1px solid dodgerblue'
                }
            }
            onClick={() => this.toogleFSS()}
        >
            toggle Fullscreen slider
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
        }
        </span>
    );
}
`;

const jsExample = `constructor(props) {
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
}`;

class _SliderFullscreen extends React.Component {
    constructor(props) {
        super(props);
        this.toogleFSS = this.toogleFSS.bind(this);

        this.state = {
            dispaly: false
        };
    }

    toogleFSS(closeCallbackProps) {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        return (
            <div className="Generator">
                <h1 className="title-border my-3">
                    <i className="far fa-file-code"></i>
                    Modal
                </h1>
                <p className='description'>
                    {
                        trans('fss.example2')
                    }
                </p>
                <div className="code-example mt-4">
                    <div className="code-example-live">
                        <button
                            style={
                                {
                                    width: '100px',
                                    boxSizing: 'border-box',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    backgroundColor: 'dodgerblue',
                                    color: 'rgb(255,255,255)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    margin: '0 calc(50% - 50px)',
                                    border: '1px solid dodgerblue'
                                }
                            }
                            onClick={() => this.toogleFSS()}
                        >
                            toggle Fullscreen slider
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
                        }
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
                                        code={codeExample}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={codeExample}
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
                                        code={jsExample}
                                    />
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <div title={trans('copyToClipboard')} className="button-action">
                                                <i className="far fa-clipboard"></i>
                                            </div>
                                        )}
                                        clipboard={jsExample}
                                    />
                                </span>
                            )
                        )
                    }
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
                                    key: 'displayPagination',
                                    values: 'fss.fsDisplayPagination'
                                },
                                {
                                    key: 'slideAfterMove',
                                    values: 'fss.fsSlideAfterMove'
                                },
                                {
                                    key: 'displayPreview',
                                    values: 'fss.fsDisplayPreview'
                                },
                                {
                                    key: 'previewWidth',
                                    values: 'fss.fsPreviewWidth'
                                },
                                {
                                    key: 'previewHeight',
                                    values: 'fss.fsPreviewHeight'
                                },
                                {
                                    key: 'previewMarginX',
                                    values: 'fss.fsPreviewMarginX'
                                },
                                {
                                    key: 'previewMarginY',
                                    values: 'fss.fsPreviewMarginY'
                                },
                                {
                                    key: 'previewToggle',
                                    values: 'fss.fsPreviewToggle'
                                },
                                {
                                    key: 'toggleDirection',
                                    values: 'fss.fsToggleDirection'
                                },
                                {
                                    key: 'imageAsBackground',
                                    values: 'fss.fsImageAsBackground'
                                },
                                {
                                    key: 'wrapDirection',
                                    values: 'fss.fsWrapDirection'
                                },
                                {
                                    key: 'closeIcon',
                                    values: 'fss.fsCloseIcon'
                                },
                                {
                                    key: 'useLayerX',
                                    values: 'fss.fsUseLayerX'
                                },
                                {
                                    key: 'autoplayTime',
                                    values: 'fss.fsAutoplayTime'
                                },
                                {
                                    key: 'autoplayIcon',
                                    values: 'fss.fsAutoplayIcon'
                                },
                                {
                                    key: 'autoplayNext',
                                    values: 'fss.fsAutoplayNext'
                                },
                                {
                                    key: 'autoplayStopIcon',
                                    values: 'fss.fsAutoplayStopIcon'
                                },
                                {
                                    key: 'autoplayStopOnLast',
                                    values: 'fss.fsAutoplayStopOnLast'
                                },
                                {
                                    key: 'animationTime',
                                    values: 'fss.fsAnimationTime'
                                },
                                {
                                    key: 'next',
                                    values: 'fss.fsNext'
                                },
                                {
                                    key: 'previous',
                                    values: 'fss.fsPrevious'
                                },
                                {
                                    key: 'displayDots',
                                    values: 'fss.fsDisplayDots'
                                },
                                {
                                    key: 'displayDotsIndex',
                                    values: 'fss.fsDisplayDotsIndex'
                                },
                                {
                                    key: 'closeOnEsc',
                                    values: 'fss.fsCloseOnEsc'
                                },
                                {
                                    key: 'onSlideTime',
                                    values: 'slider.onSlideTime'
                                },
                            ],
                            'SliderFullscreen'
                        )
                    }
                />
            </div>
        );
    }
};

export default _SliderFullscreen;