import React from 'react';
import { Table, IconText, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { IconText } from 'react-revolution';
// import IconText from 'react-revolution/IconText';

<div
    style={
        {
            width: '50vw',
            minWidth: '500px',
            margin: '30px auto'
        }
    }
>
    <IconText
        displayTabs={true}
        iconsType='Smileys'
        callback={this.callback}
        noData='no data'
        renderItems={
            [
                'Smileys',
                'Nature',
                'Food',
            ]
        }
        text={
            {
                'Smileys': [
                    'smile-1',
                    'smile-2',
                    'smile-3',
                    'smile-4',
                    'smile-5',
                    'smile-6',
                    'smile-7',
                    'smile-8',
                    'smile-9',
                    'smile-10'
                ],
                'Nature': [
                    'nature-1',
                    'nature-2',
                    'nature-3',
                    'nature-4',
                    'nature-5',
                    'nature-6',
                    'nature-7',
                    'nature-8',
                    'nature-9',
                    'nature-10'
                ],
                'Food': [
                    'food-1',
                    'food-2',
                    'food-3',
                    'food-4',
                    'food-5',
                    'food-6',
                    'food-7',
                    'food-8',
                    'food-9',
                    'food-10'
                ]
            }
        }
        noText='---'
    />
</div>`;

const codeExample2 = `import { IconText } from 'react-revolution';
// import IconText from 'react-revolution/IconText';

<div
    style={
        {
            width: '50vw',
            minWidth: '500px',
            margin: '30px auto'
        }
    }
>
    <IconText
        itemsPerLine={5}
        displayTabs={true}
        iconsType='Smileys'
        callback={this.callback}
        noData='no icon available'
        renderItems={
            [
                'Smileys',
                'Nature',
                'Food',
                'X'
            ]
        }
        text={
            {
                'Smileys': [
                    'smile-1',
                    'smile-2',
                    'smile-3',
                    'smile-4',
                    'smile-5',
                    'smile-6',
                    'smile-7',
                    'smile-8',
                    'smile-9',
                    'smile-10'
                ],
                'Nature': [
                    'nature-1',
                    'nature-2',
                    'nature-3',
                    'nature-4',
                    'nature-5',
                    'nature-6',
                    'nature-7',
                    'nature-8',
                    'nature-9',
                    'nature-10'
                ],
                'Food': [
                    'food-1',
                    'food-2',
                    'food-3',
                    'food-4',
                    'food-5',
                    'food-6',
                    'food-7',
                    'food-8',
                    'food-9',
                    'food-10'
                ]
            }
        }
        noText={<u>[-.-]</u>}
    />
</div>`;


const jsExample = `constructor(props) 
{
    super(props);
    this.callback = this.callback.bind(this);
}

/**
 * @param {MouseEvent} e 
 * @param {string} icon
 * @param {string} text
 * 
 * @return {void} 
 */
callback(e, icon, text) 
{
   console.clear();
   console.info(icon, text);
   alert(\`\${icon}\\n\${text}\`);
}`;

class _IconText extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.callback = this.callback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'IconText',
                description: trans('icons.description'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample,
                css: '',
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
                        <IconText
                            displayTabs={true}
                            iconsType='Smileys'
                            callback={this.callback}
                            noData='no data'
                            renderItems={
                                [
                                    'Smileys',
                                    'Nature',
                                    'Food',
                                ]
                            }
                            text={
                                {
                                    'Smileys': [
                                        'smile-1',
                                        'smile-2',
                                        'smile-3',
                                        'smile-4',
                                        'smile-5',
                                        'smile-6',
                                        'smile-7',
                                        'smile-8',
                                        'smile-9',
                                        'smile-10'
                                    ],
                                    'Nature': [
                                        'nature-1',
                                        'nature-2',
                                        'nature-3',
                                        'nature-4',
                                        'nature-5',
                                        'nature-6',
                                        'nature-7',
                                        'nature-8',
                                        'nature-9',
                                        'nature-10'
                                    ],
                                    'Food': [
                                        'food-1',
                                        'food-2',
                                        'food-3',
                                        'food-4',
                                        'food-5',
                                        'food-6',
                                        'food-7',
                                        'food-8',
                                        'food-9',
                                        'food-10'
                                    ]
                                }
                            }
                            noText='---'
                        />
                    </div>
                )
            },
            {
                title: 'IconText',
                description: trans('icons.description2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsExample,
                css: '',
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
                        <IconText
                            itemsPerLine={5}
                            displayTabs={true}
                            iconsType='Smileys'
                            callback={this.callback}
                            noData='no icon available'
                            renderItems={
                                [
                                    'Smileys',
                                    'Nature',
                                    'Food',
                                    'X'
                                ]
                            }
                            text={
                                {
                                    'Smileys': [
                                        'smile-1',
                                        'smile-2',
                                        'smile-3',
                                        'smile-4',
                                        'smile-5',
                                        'smile-6',
                                        'smile-7',
                                        'smile-8',
                                        'smile-9',
                                        'smile-10'
                                    ],
                                    'Nature': [
                                        'nature-1',
                                        'nature-2',
                                        'nature-3',
                                        'nature-4',
                                        'nature-5',
                                        'nature-6',
                                        'nature-7',
                                        'nature-8',
                                        'nature-9',
                                        'nature-10'
                                    ],
                                    'Food': [
                                        'food-1',
                                        'food-2',
                                        'food-3',
                                        'food-4',
                                        'food-5',
                                        'food-6',
                                        'food-7',
                                        'food-8',
                                        'food-9',
                                        'food-10'
                                    ]
                                }
                            }
                            noText={<u>[-.-]</u>}
                        />
                    </div>
                )
            }
        ];
    }

    callback(clickEvent, icon) {
        console.info(icon);
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
                    loadMoreLoadingIconText={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
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
                                {
                                    key: 'text',
                                    values: 'icon.text'
                                },
                                {
                                    key: 'textDirection',
                                    values: 'icon.textDirection'
                                },
                            ],
                            'IconText'
                        )
                    }
                />
            </div>
        );
    }
};

export default _IconText;

