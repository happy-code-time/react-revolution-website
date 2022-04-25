import React from 'react';
//@ts-ignore
import { SliderCard, Table, LoadOnScroll, LoadingBoxTop, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import generateArticle from '../Globals/generateArticle';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample2 = `import { SliderCard } from 'react-revolution';
// import SliderCard from 'react-revolution/SliderCard';

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
    <SliderCard
        addClass='slider-items-example'
        data={this.getCard('😷')}
        dotsInside={false}
    />
</div>`;

const codeExample3 = `import { SliderCard } from 'react-revolution';
// import SliderCard from 'react-revolution/SliderCard';

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
    <SliderCard
        addClass='slider-items-example'
        data={this.getCard()}
        buttonsAlwaysVisible={true}
        // Resize listener lower then 768
        resizeS={768}
        // Resize listener lower then 1024
        resizeL={1024}
        // Resize listener lower then 1260
        resizeXL={1260}
        // Items on each slide on screen lower then 768
        itemsS={2}
        // Items on each slide on screen lower then 1024
        itemsL={3}
        // Items on each slide on screen lower then 1260
        itemsXL={3}
        // Items to slide on screen lower then 768
        slideItemsS={2}
        // Items to slide on screen lower then 1024
        slideItemsL={3}
        // Items to slide on screen lower then 1260
        slideItemsXL={3}
        // With of each card on screen lower then 768
        cardWidthS={200}
        // With of each card on screen lower then 1024
        cardWidthL={250}
        // With of each card on screen lower then 1260
        cardWidthXL={330}
    />
</div>`;

const js = `getCard(dot = '') {
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

const codeExample7 = `import { SliderCard } from 'react-revolution';
// import SliderCard from 'react-revolution/SliderCard';

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
    <SliderCard
        addClass='slider-items-example'
        displayDotsIndex={true}
        paginationType={2}
        previous='«'
        next='»'
        buttonsAlwaysVisible={true}
        data={this.getCard()}
    />
</div>`;

const codeExample8 = `import { SliderCard } from 'react-revolution';
// import SliderCard from 'react-revolution/SliderCard';

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
    <SliderCard
        addClass='slider-items-example'
        displayDotsIndex={true}
        paginationType={2}
        previous='«'
        next='»'
        buttonsAlwaysVisible={true}
        autoplay={true}
        autoplayTime={5000}
        data={this.getCard()}
    />
</div>`;

const codeExample9 = `import { SliderCard } from 'react-revolution';
// import SliderCard from 'react-revolution/SliderCard';

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
    <SliderCard
        addClass='slider-items-example'
        displayDotsIndex={true}
        paginationType={2}
        previous='«'
        next='»'
        buttonsAlwaysVisible={true}
        autoplay={true}
        autoplayTime={5000}
        animationTime='10'
        data={this.getCard()}
    />
</div>`;

const codeExample10 = `import { SliderCard } from 'react-revolution';
// import SliderCard from 'react-revolution/SliderCard';

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
    <SliderCard
        addClass='slider-items-example'
        displayDotsIndex={true}
        paginationType={2}
        previous='«'
        next='»'
        buttonsAlwaysVisible={true}
        useLayerX={false}
        data={this.getCard()}
    />
</div>`;


const codeExample11 = `import { SliderCard } from 'react-revolution';
// import SliderCard from 'react-revolution/SliderCard';

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
    <SliderCard
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
        data={this.getCard()}
        displayDots={false}
    />
</div>`;

const js11 = `constructor(props) {
    super(props);

    this.state = {
        like: false
    };
}
    
getCard(dot = '') {
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

class _SliderCard extends React.Component< { [key: string]: any }, { [key: string]: any }> {
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
                title: 'SliderCard',
                description: trans('slider.example5'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: js,
                css: '',
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
                        <SliderCard
                            addClass='slider-items-example'
                            data={this.getCard('😷')}
                            dotsInside={false}
                        />
                    </div>
                )
            },
            {
                title: 'SliderCard',
                description: 'Example with different cards count based on media break points.',
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: js,
                css: '',
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
                        <SliderCard
                            addClass='slider-items-example'
                            data={this.getCard()}
                            buttonsAlwaysVisible={true}
                            // Resize listener lower then 768
                            resizeS={768}
                            // Resize listener lower then 1024
                            resizeL={1024}
                            // Resize listener lower then 1260
                            resizeXL={1260}
                            // Items on each slide on screen lower then 768
                            itemsS={2}
                            // Items on each slide on screen lower then 1024
                            itemsL={3}
                            // Items on each slide on screen lower then 1260
                            itemsXL={3}
                            // Items to slide on screen lower then 768
                            slideItemsS={2}
                            // Items to slide on screen lower then 1024
                            slideItemsL={3}
                            // Items to slide on screen lower then 1260
                            slideItemsXL={3}
                            // With of each card on screen lower then 768
                            cardWidthS={200}
                            // With of each card on screen lower then 1024
                            cardWidthL={250}
                            // With of each card on screen lower then 1260
                            cardWidthXL={330}
                        />
                    </div>
                )
            },
            {
                title: 'SliderCard',
                description: trans('slider.example7'),
                reactTextBefore: '',
                react: codeExample7,
                reactTextAfter: '',
                js: js,
                css: '',
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
                        <SliderCard
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            previous='«'
                            next='»'
                            buttonsAlwaysVisible={true}
                            data={this.getCard()}
                        />
                    </div>
                )
            },
            {
                title: 'SliderCard',
                description: trans('slider.example8'),
                reactTextBefore: '',
                react: codeExample8,
                reactTextAfter: '',
                js: js,
                css: '',
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
                        <SliderCard
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            previous='«'
                            next='»'
                            buttonsAlwaysVisible={true}
                            autoplay={true}
                            autoplayTime={5000}
                            data={this.getCard()}
                        />
                    </div>
                )
            },
            {
                title: 'SliderCard',
                description: trans('slider.example9'),
                reactTextBefore: '',
                react: codeExample9,
                reactTextAfter: '',
                js: js,
                css: '',
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
                        <SliderCard
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            previous='«'
                            next='»'
                            buttonsAlwaysVisible={true}
                            autoplay={true}
                            autoplayTime={5000}
                            animationTime='10'
                            data={this.getCard()}
                        />
                    </div>
                )
            },
            {
                title: 'SliderCard',
                description: 'useLayerX={false}',
                reactTextBefore: '',
                react: codeExample10,
                reactTextAfter: '',
                js: js,
                css: '',
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
                        <SliderCard
                            addClass='slider-items-example'
                            displayDotsIndex={true}
                            paginationType={2}
                            previous='«'
                            next='»'
                            buttonsAlwaysVisible={true}
                            useLayerX={false}
                            data={this.getCard()}
                        />
                    </div>
                )
            },
        ];
    }

    getCard(dot = '') {
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
                    SliderCard
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
                            <SliderCard
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
                                data={this.getCard()}
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
                                    key: 'slideItemsXS',
                                    values: 'slider.card.slideItemsXS'
                                },
                                {
                                    key: 'slideItemsS',
                                    values: 'slider.card.slideItemsS'
                                },
                                {
                                    key: 'slideItemsL',
                                    values: 'slider.card.slideItemsL'
                                },
                                {
                                    key: 'slideItemsXL',
                                    values: 'slider.card.slideItemsXL'
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
                            'SliderCard'
                        )
                    }
                />
            </div>
        );
    }
};

export default _SliderCard;