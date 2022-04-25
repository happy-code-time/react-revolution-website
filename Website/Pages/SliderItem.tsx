import React from 'react';
//@ts-ignore
import { SliderItem, Table, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import generateArticle from '../Globals/generateArticle';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            addClass='slider-items-example'
            data={this.getCards()}
        />
</div>`;

const codeExample2 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            addClass='slider-items-example'
            data={this.getCards()}
            buttonsAlwaysVisible={true}
        />
</div>`;

const codeExample3 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            addClass='slider-items-example'
            data={this.getCards()}
            displayPagination={false}
        />
</div>`;

const codeExample4 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
    <SliderItem
        addClass='slider-items-example'
        data={this.getCards('😇')}
        displayDotsIndex={false}
    />
</div>`;

const codeExample5 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
    <SliderItem
        addClass='slider-items-example'
        data={this.getCards('😷')}
        dotsInside={false}
    />
</div>`;

const codeExample6 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            data={this.getCards()}
            displayDots={false}
            itemsS={2} // two items on resizeS (768px)
            itemsL={4} // four items on resizeL (1024)
            itemsXL={4} // five items on resizeXL (1140)
            resizeS={768}
            resizeL={1024}
            resizeXL={1140}
        />
</div>`;

const css = `.slider-items-example{
    .slide-item{

        @media screen and (min-width: 1140px){
            width: calc(33.2333% - 20px);
        }

        @media screen and (min-width: 1024){
            width: calc(50% - 20px);
        }

        width: calc(100% - 20px);
    }
}`;

const js = `getCards(dot = '') {
    const items = 10;
    const data = [];

    for (let x = 0; x < items; x++) {

        data.push(
            {
                data: (
                    <span>
                        {
                            x + 1
                        }
                    </span>
                ),
                dot
            }
        );
    }

    return data;
}`;

const codeExample7 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            addClass='slider-items-example'
            displayDotsIndex={true}
            paginationType={2}
            buttonsAlwaysVisible={true}
            previous='«'
            next='»'
            data={this.getCards()}
        />
</div>`;

const codeExample8 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            addClass='slider-items-example'
            displayDotsIndex={true}
            paginationType={2}
            buttonsAlwaysVisible={true}
            previous='«'
            next='»'
            autoplay={true}
            autoplayTime={5000}
            data={this.getCards()}
        />
</div>`;

const codeExample9 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            addClass='slider-items-example'
            displayDotsIndex={true}
            paginationType={2}
            buttonsAlwaysVisible={true}
            previous='«'
            next='»'
            autoplay={true}
            autoplayTime={5000}
            animationTime='10'
            data={this.getCards()}
        />
</div>`;

const codeExample10 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
        <SliderItem
            addClass='slider-items-example'
            displayDotsIndex={true}
            paginationType={2}
            buttonsAlwaysVisible={true}
            previous='«'
            next='»'
            useLayerX={false}
            data={this.getCards()}
        />
</div>`;

const codeExample11 = `import { SliderItem } from 'react-revolution';
// import SliderItem from 'react-revolution/SliderItem';

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
    <SliderItem
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
        addClass='slider-items-example'
        data={this.getCards()}
        displayDots={false}
    />
</div>`;

const js11 = `constructor(props) {
    super(props);

    this.state = {
        like: false
    };
    
}

getCards(dot = '') {
    const items = 10;
    const data = [];

    for (let x = 0; x < items; x++) {

        data.push(
            {
                data: (
                    <span>
                        {
                            x + 1
                        }
                    </span>
                ),
                dot
            }
        );
    }

    return data;
}`;

class _SliderItem extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.state = {
            loading: true
        };

        this.examples = [
            {
                title: 'SliderItem',
                description: trans('slider.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            data={this.getCards()}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            data={this.getCards()}
                            buttonsAlwaysVisible={true}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            data={this.getCards()}
                            displayPagination={false}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example4'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            data={this.getCards('😇')}
                            displayDotsIndex={false}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example5'),
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            data={this.getCards('😷')}
                            dotsInside={false}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example6'),
                reactTextBefore: '',
                react: codeExample6,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            data={this.getCards()}
                            addClass='slider-items-example'
                            displayDots={false}
                            itemsS={2} // two items on resizeS (768px)
                            itemsL={4} // four items on resizeL (1024)
                            itemsXL={4} // five items on resizeXL (1140)
                            resizeS={768}
                            resizeL={1024}
                            resizeXL={1140}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example7'),
                reactTextBefore: '',
                react: codeExample7,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            buttonsAlwaysVisible={true}
                            previous='«'
                            next='»'
                            data={this.getCards()}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example8'),
                reactTextBefore: '',
                react: codeExample8,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            buttonsAlwaysVisible={true}
                            previous='«'
                            next='»'
                            autoplay={true}
                            autoplayTime={5000}
                            data={this.getCards()}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: trans('slider.example9'),
                reactTextBefore: '',
                react: codeExample9,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            buttonsAlwaysVisible={true}
                            previous='«'
                            next='»'
                            autoplay={true}
                            autoplayTime={5000}
                            animationTime='10'
                            data={this.getCards()}
                        />
                    </div>
                )
            },
            {
                title: 'SliderItem',
                description: 'useLayerX={false}',
                reactTextBefore: '',
                react: codeExample10,
                reactTextAfter: '',
                js: js,
                css: css,
                html: '',
                live: (
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
                        <SliderItem
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            buttonsAlwaysVisible={true}
                            previous='«'
                            next='»'
                            useLayerX={false}
                            data={this.getCards()}
                        />
                    </div>
                )
            },
        ];
    }

    getCards(dot = '') {
        const items = 10;
        const data = [];

        for (let x = 0; x < items; x++) {

            data.push(
                {
                    data: (
                        <span>
                            {
                                x + 1
                            }
                        </span>
                    ),
                    dot
                }
            );
        }

        return data;
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
                    SliderItem
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
                                    height: '300px',
                                    margin: '5vh auto'
                                }
                            }
                        >
                            <SliderItem
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
                                addClass='slider-items-example'
                                data={this.getCards()}
                                displayDots={false}
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
                                            code={codeExample11}
                                        />
                                        <Clipboard
                                            animation='jump' // scale, jump
                                            data={(
                                                <div title={trans('copyToClipboard')} className="button-action">
                                                    <i className="far fa-clipboard"></i>
                                                </div>
                                            )}
                                            clipboard={codeExample11}
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
                                            code={js11}
                                        />
                                        <Clipboard
                                            animation='jump' // scale, jump
                                            data={(
                                                <div title={trans('copyToClipboard')} className="button-action">
                                                    <i className="far fa-clipboard"></i>
                                                </div>
                                            )}
                                            clipboard={js11}
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
                                    values: 'slider.items.data'
                                },
                                {
                                    key: 'data.data',
                                    values: 'slider.items.data.data'
                                },
                                {
                                    key: 'data.dot',
                                    values: 'slider.data.dot'
                                },
                                {
                                    key: 'itemsXS',
                                    values: 'slider.items.itemsXS'
                                },
                                {
                                    key: 'itemsS',
                                    values: 'slider.items.itemsS'
                                },
                                {
                                    key: 'itemsL',
                                    values: 'slider.items.itemsL'
                                },
                                {
                                    key: 'itemsXL',
                                    values: 'slider.items.itemsXL'
                                },
                                {
                                    key: 'resizeS',
                                    values: 'slider.items.resizeS'
                                },
                                {
                                    key: 'resizeL',
                                    values: 'slider.items.resizeL'
                                },
                                {
                                    key: 'resizeXL',
                                    values: 'slider.items.resizeXL'
                                },
                                {
                                    key: 'displayPagination',
                                    values: 'slider.displayPagination'
                                },
                                {
                                    key: 'paginationInside',
                                    values: 'slider.paginationInside'
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
                                    key: 'dotsInside',
                                    values: 'slider.dotsInside'
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
                            ],
                            'SliderItem'
                        )
                    }
                />
            </div>
        );
    }
};

export default _SliderItem;