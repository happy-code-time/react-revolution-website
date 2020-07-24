import React from 'react';

import { Icons, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

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
    console.log(icon);
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
                description: 'Icons module with all icons set, NO translations and default selected icons set: Smileys. After the click event, look into the console for an icon.',
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
                description: 'Icons module with selected icons set: Smileys, Activity, Travel, Peoples, Objects, NO translations yet and default selected icons set: Activity. After the click event, look into the console for an icon.',
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
                description: 'Icons module with selected icons set: Smileys, Activity, Travel, Peoples, Objects and 2 translated icons titles. After the click event, look into the console for an icon.',
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
        console.log(icon);
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
            </div>
        );
    }
};

export default ReactRevolutionIcons;

