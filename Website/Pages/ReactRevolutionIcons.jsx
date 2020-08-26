import React from 'react';

import { Table, Icons, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { Icons } from 'react-revolution';

<Icons
    displayTabs={true}
    iconsType='Smileys'
    callback={this.callback}
    renderItems='all'
/>`;

const codeExample2 = `import { Icons } from 'react-revolution';

<Icons
    displayTabs={true}
    iconsType='Activity'
    callback={this.setIcon}
    renderItems={
        [
            'Smileys',
            'Activity',
            'Travel',
            'Peoples',
            'Objects'
        ]
    }
/>`;

const codeExample3 = `import { Icons } from 'react-revolution';

<Icons
    displayTabs={true}
    iconsType='Smileys'
    callback={this.setIcon}
    renderItems={
        [
            'Smileys',
            'Activity',
            'Travel',
            'Peoples',
            'Objects'
        ]
    }
    translations={
        {
            'Smileys': 'Smile',
            'Activity': 'Sport',
            // 'Peoples': this.translations.Peoples,
            // 'Animals': this.translations.Animals,
            // 'Plants': this.translations.Plants,
            // 'Nature': this.translations.Nature,
            // 'Food': this.translations.Food,
            // 'Travel': this.translations.Travel,
            // 'Objects': this.translations.Objects,
            // 'Symbols': this.translations.Symbols,
            // 'Currency': this.translations.Currency
        }
    }
/>`;

const codeExample4 = `import { Icons } from 'react-revolution';

<Icons
    displayTabs={true}
    iconsType='Smileys'
    callback={this.callback}
    custom={
        [
            {
                title: 'Love',
                data: [
                    '😍', '😘', '💕', '💞', '💘'
                ]
            },
            {
                title: 'Cash',
                data: [
                    '💴', '💷', '💶', '💵'
                ]
            },
            {
                title: 'Clothes',
                data: [
                    '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚'
                ]
            },
        ]
    }
    renderItems={
        [
            'Love', // custom defined
            'Cash', // custom defined
            'Activity',
            'Clothes', // custom defined
            'Travel',
        ]
    }
/>`;

const jsExample = `callback(clickEvent, icon){
    console.info(icon);
}`;

const cssExample = `.rr-icons{
    width: 50vw;
    min-width: 500px;
    margin: 0 auto;
    border: 1px solid rgb(222,222,222);
    border-radius: 3px;
}`;

class ReactRevolutionIcons extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Icons',
                description: trans('icons.description'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icons
                        displayTabs={true}
                        iconsType='Smileys'
                        callback={this.callback}
                        renderItems='all'
                    />
                )
            },
            {
                title: 'Icons',
                description: trans('icons.description2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icons
                        displayTabs={true}
                        iconsType='Activity'
                        callback={this.callback}
                        renderItems={
                            [
                                'Smileys',
                                'Activity',
                                'Travel',
                                'Peoples',
                                'Objects'
                            ]
                        }
                    />
                )
            },
            {
                title: 'Icons',
                description: trans('icons.description3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icons
                        displayTabs={true}
                        iconsType='Smileys'
                        callback={this.callback}
                        renderItems={
                            [
                                'Smileys',
                                'Activity',
                                'Travel',
                                'Peoples',
                                'Objects'
                            ]
                        }
                        translations={
                            {
                                'Smileys': 'Smile',
                                'Activity': 'Sport',
                                // 'Peoples': this.translations.Peoples,
                                // 'Animals': this.translations.Animals,
                                // 'Plants': this.translations.Plants,
                                // 'Nature': this.translations.Nature,
                                // 'Food': this.translations.Food,
                                // 'Travel': this.translations.Travel,
                                // 'Objects': this.translations.Objects,
                                // 'Symbols': this.translations.Symbols,
                                // 'Currency': this.translations.Currency
                            }
                        }
                    />
                )
            },
            {
                title: 'Icons',
                description: 'Icons module with custom icons set. Please remember to add your custom defined "title" into the "renderItems" list. After the click event, look into the console for an icon.',
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icons
                        displayTabs={true}
                        iconsType='Smileys'
                        callback={this.callback}
                        custom={
                            [
                                {
                                    title: 'Love',
                                    data: [
                                        '😍', '😘', '💕', '💞', '💘'
                                    ]
                                },
                                {
                                    title: 'Cash',
                                    data: [
                                        '💴', '💷', '💶', '💵'
                                    ]
                                },
                                {
                                    title: 'Clothes',
                                    data: [
                                        '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚'
                                    ]
                                },
                            ]
                        }
                        renderItems={
                            [
                                'Love', // custom defined
                                'Cash', // custom defined
                                'Activity',
                                'Clothes', // custom defined
                                'Travel',
                            ]
                        }
                    />
                )
            },
        ];
    }

    callback(clickEvent, icon){
        console.info(icon);
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return 'break';
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
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />
                {
                    getDescriptionForstyle('rr-icons')
                }
                <h1 className="h1-title border-none text-center mb-4">
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
                                    key: 'iconsType',
                                    values: 'iconsType'
                                },
                                {
                                    key: 'callback',
                                    values: 'iconCallback'
                                },
                                {
                                    key: 'renderItems',
                                    values: 'renderItems'
                                },
                                {
                                    key: 'translations',
                                    values: 'translations'
                                },
                                {
                                    key: 'custom',
                                    values: 'custom'
                                },
                                {
                                    key: 'custom.title',
                                    values: 'custom.title'
                                },
                                {
                                    key: 'custom.data',
                                    values: 'custom.data'
                                },
                            ],
                            'rr-icons'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionIcons;

