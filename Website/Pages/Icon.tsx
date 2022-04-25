import React from 'react';
//@ts-ignore
import { Table, Icon, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Components/StyleImplementation';

const codeExample1 = `import { Icon } from 'react-revolution';
// import Icon from 'react-revolution/Icon';

<Icon
    displayTabs={true}
    iconsType='Smileys'
    callback={this.callback}
    renderItems='all'
/>`;

const codeExample2 = `import { Icon } from 'react-revolution';
// import Icon from 'react-revolution/Icon';

<Icon
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

const codeExample3 = `import { Icon } from 'react-revolution';
// import Icon from 'react-revolution/Icon';

<Icon
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

const codeExample4 = `import { Icon } from 'react-revolution';
// import Icon from 'react-revolution/Icon';

<Icon
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

const codeExample5 = `import { Icon } from 'react-revolution';
// import Icon from 'react-revolution/Icon';

<div
style={
    {
        width: '50vw',
        minWidth: '500px',
        margin: '30px auto'
    }
}
>
    <Icon
        itemsPerLine={10}
        displayTabs={true}
        iconsType='Smileys'
        callback={this.callback}
        noData='no data'
    />
</div>`;

const jsExample = `/**
* @param {MouseEvent} e 
* @param {string} icon
* 
* @return {void} 
*/
callback(e, icon) 
{
   alert(icon);
}`;

const cssExample = `.Icon{
    width: 50vw;
    min-width: 500px;
    margin: 0 auto;
    border: 1px solid rgb(222,222,222);
    border-radius: 3px;
}`;

class _Icon extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Icon',
                description: trans('icon.description'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icon
                        displayTabs={true}
                        iconsType='Smileys'
                        callback={this.callback}
                        renderItems='all'
                    />
                )
            },
            {
                title: 'Icon',
                description: trans('icon.description2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icon
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
                title: 'Icon',
                description: trans('icon.description3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icon
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
                title: 'Icon',
                description: 'Icon module with custom icons set. Please remember to add your custom defined "title" into the "renderItems" list. After the click event, look into the console for an icon.',
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <Icon
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
            {
                title: 'Icon',
                description: 'Example with key "itemsPerLine" to specify how many items should be render in a single row.',
                reactTextBefore: '',
                react: codeExample5,
                reactTextAfter: '',
                js: jsExample,
                css: cssExample,
                html: '',
                live: (
                    <div
                        style={
                            {
                                width: '50vw',
                                minWidth: '500px',
                                margin: '30px auto'
                            }
                        }
                    >
                        <Icon
                            itemsPerLine={10}
                            displayTabs={true}
                            iconsType='Smileys'
                            callback={this.callback}
                            noData='no data'
                        />
                    </div>
                )
            },
        ];
    }

    /**
     * @param {MouseEvent} e 
     * @param {string} icon
     * 
     * @return {void} 
     */
     callback(e, icon) 
     {
         alert(icon);
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
                                {
                                    key: 'itemsPerLine',
                                    values: 'icon.itemsPerLine'
                                },
                                {
                                    key: 'noData',
                                    values: 'icon.noData'
                                },
                            ],
                            'Icon'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Icon;

