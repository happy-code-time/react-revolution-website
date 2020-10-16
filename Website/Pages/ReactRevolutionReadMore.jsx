
import React from 'react';

import { Table, ReadMore, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { ReadMore } from 'react-revolution';
// import ReadMore from 'react-revolution/readMore';

<ReadMore
    addClass='rr-read-more-example'
    animation='opacity'
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.\`
    }
    toggleForwards={
        (
            <span className='read-more-button'>
                read more
            </span>
        )
    }
    dataToggle={\`
        (more) Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.\`
    }
/>`;

const codeExample2 = `import { ReadMore } from 'react-revolution';

<ReadMore
    addClass='rr-read-more-example'
    animation='opacity'
    data={\`
        Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.\`
    }
    toggleForwards={
        (
            <span className='read-more-button'>
                read more
            </span>
        )
    }
    dataToggle={\`
        (more) Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore 
        magna aliquyam erat, sed diam 
        voluptua.\`
    }
    toggleBackwards={
        (
            <span className='read-less-button'>
                read less
            </span>
        )
    }
/>`;

const cssExample = `.rr-read-more-example{
    line-height: 30px;

    .read-more-button,
    .read-less-button{
        box-sizing: border-box;
        padding: 3px 5px;
        width: 120px;
        height: 20px;
        background: dodgerblue;
        color: rgb(255,255,255);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        margin: 0 10px;
        font-size: 0.87rem;
    }

    .read-more-button:hover,
    .read-less-button:hover{
        cursor: pointer;
    }
}`;

class ReactRevolutionReadMore extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ReadMore',
                description: trans('readmore-description-1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <ReadMore
                        addClass='rr-read-more-example'
                        animation='opacity'
                        data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.`
                        }
                        toggleForwards={
                            (
                                <span className='read-more-button'>
                                    read more
                                </span>
                            )
                        }
                        dataToggle={`
                            (more) Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.`
                        }
                    />
                )
            },
            {
                title: 'ReadMore',
                description: trans('readmore-description-2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <ReadMore
                        addClass='rr-read-more-example'
                        animation='opacity'
                        data={`
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.`
                        }
                        toggleForwards={
                            (
                                <span className='read-more-button'>
                                    read more
                                </span>
                            )
                        }
                        dataToggle={`
                            (more) Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam 
                            voluptua.`
                        }
                        toggleBackwards={
                            (
                                <span className='read-less-button'>
                                    read less
                                </span>
                            )
                        }
                    />
                )
            },
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
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={500}
                    fireScrollBack={true} 
                />
                {
                    getDescriptionForstyle('rr-read-more')
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
                                    key: 'animation',
                                    values: 'readmore.animation'
                                },
                                {
                                    key: 'toggleForwards',
                                    values: 'readmore.toggleForwards'
                                },
                                {
                                    key: 'toggleBackwards',
                                    values: 'readmore.toggleBackwards'
                                },
                                {
                                    key: 'data',
                                    values: 'readmore.data'
                                },
                                {
                                    key: 'dataToggle',
                                    values: 'readmore.dataToggle'
                                },
                            ],
                            'rr-read-more'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionReadMore;

