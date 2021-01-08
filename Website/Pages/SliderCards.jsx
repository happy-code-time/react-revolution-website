import React from 'react';
import { SliderCards, Table, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans'
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { SliderCards } from 'react-revolution';
// import SliderCards from 'react-revolution/SliderCards';

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
    <SliderCards
        addClass='slider-items-example'
        data={this.getCards('😇')}
        displayDotsIndex={false}
    />
</div>`;

const codeExample2 = `import { SliderCards } from 'react-revolution';
// import SliderCards from 'react-revolution/SliderCards';

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
    <SliderCards
        addClass='slider-items-example'
        data={this.getCards('😷')}
        dotsInside={false}
    />
</div>`;

const codeExample3 = `import { SliderCards } from 'react-revolution';
// import SliderCards from 'react-revolution/SliderCards';

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
    <SliderCards
        addClass='slider-items-example'
        data={this.getCards()}
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

class _SliderCards extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.state = {
            loading: true
        };

        this.examples = [
            {
                title: 'SliderCards',
                description: trans('slider.example4'),
                reactTextBefore: '',
                react: codeExample1,
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
                        <SliderCards
                            addClass='slider-items-example'
                            data={this.getCards('😇')}
                            displayDotsIndex={false}
                        />
                    </div>
                )
            },
            {
                title: 'SliderCards',
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
                        <SliderCards
                            addClass='slider-items-example'
                            data={this.getCards('😷')}
                            dotsInside={false}
                        />
                    </div>
                )
            },
            {
                title: 'SliderCards',
                description: '',
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
                        <SliderCards
                            addClass='slider-items-example'
                            data={this.getCards()}
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
            }
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
                    getDescriptionForstyle('rr-slider-cards')
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
                                    key: 'cardWidthS',
                                    values: 'slider.cards.cardWidthS'
                                },
                                {
                                    key: 'cardWidthL',
                                    values: 'slider.cards.cardWidthL'
                                },
                                {
                                    key: 'cardWidthXL',
                                    values: 'slider.cards.cardWidthXL'
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
                            ],
                            'rr-slider-cards'
                        )
                    }
                />
            </div>
        );
    }
};

export default _SliderCards;