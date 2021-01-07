import React from 'react';

import { Table, PagerDynamic, SourceCode, Clipboard, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

import generateArticles from '../Globals/generateArticles';

const codeExample1 = `import { PagerDynamic, LoadingBoxTop } from 'react-revolution';
// import PagerDynamic from 'react-revolution/PagerDynamic';
// import LoadingBoxTop from 'react-revolution/LoadingBoxTop';

<div className="rr-revolution-pager-example">
    <PagerDynamic
        getDataCallback={this.pageData}
        globalStyle={true}
        data={this.getData()}
        itemsPerSite={10}
        globalCount={100}
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        prevPages={2}
        nextPages={2}
        totalPages={10}
        paginationPages={true}
        alignPagination={1}
        alignPagesItems={2}
        display={
            [
                'name'
            ]
        }
        displayCount={true}
        previousButton=''
        nextButton=''
        paginationTitle='Dynamic Pager Title'
        fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoadingPage={
            (
                <div className='pager-loading'>
                    <p>
                        Loading...
                    </p>
                </div>
            )
        }
        liCallback={this.liCallback}
        lineNumber={true}
    />
</div>`;

const codeExample2 = `import { PagerDynamic, uuid } from 'react-revolution';
// import PagerDynamic from 'react-revolution/PagerDynamic';

<div className="rr-revolution-pager-example">
    <PagerDynamic
        getDataCallback={this.pageData}
        globalStyle={true}
        data={this.getData()}
        itemsPerSite={10}
        globalCount={100}
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        prevPages={2}
        nextPages={2}
        totalPages={10}
        paginationPages={true}
        alignPagination={1}
        alignPagesItems={2}
        display={
            [
                'name'
            ]
        }
        displayCount={true}
        resetCountOnEachPage={false}
        previousButton=''
        nextButton=''
        searchActive={true}
        searchPlaceholder='Search'
        searchIcon=''
        searchSensitive={false}
        searchOnKeys={
            [
                'name'
            ]
        }
        searchOnKeyDown={true}
        searchTitle='search'
        paginationTitle='TITLE'
        fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoadingPage={
            (
                <div className='pager-loading'>
                    <p>
                        Loading...
                    </p>
                </div>
            )
        }
        fallbackLoadingTime={100}
        fallbackNoData='NO DATA'
        fallbackNoDataSearch={
            (
                <div className="no-data">
                    <p>
                        No search result
                    </p>
                </div>
            )
        }
        liCallback={this.liCallback}
        lineNumber={true}
    />
</div>`;

const jsExample1 = `constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
    this.getDataExample1 = this.getDataExample1.bind(this);
}

callback(clickEvent, object) {
    console.info(object);
}

getDataExample1() {
    const dataToDisplay = [];
    const moduleStructure = [];

    for (let x = 1; x <= 50; x++) {
        dataToDisplay.push(
            {
                index: x,
                name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            }
        );
    }

    dataToDisplay.map(object => {
        const { name } = object;

        moduleStructure.push(
            {
                name
            }
        );
    });

    return moduleStructure;
}`;

const jsExample2 = `constructor(props) {
    super(props);
    this.pageData = this.pageData.bind(this);
}

/**
 * On (<li>) click event callback
 */
liCallback(clickEvent, object) {
    console.info(object);
}

/**
 * Dynamic data from database (has to be a promise!)
 */
pageData(currentPage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = this.getData(currentPage);
            return resolve(data);
        }, 500)
    })
}

/**
 * Datas structura passed to the pager
 */
getData(site = 1) {
    let structure = [];

    for (let x = 0; x < 10; x++) {
        structure.push(
            {
                index: x,
                name: \`You are on the site number \${site}\`
            }
        );
    }

    return structure;
}`;

const cssExample = `.rr-pager-dynamic {

    ul{
        box-sizing: border-box;
        padding: 10px;
        height: 320px;
        border: 1px solid rgb(222,222,222);
        margin: 10px 0;
        border-radius: 3px;
    }

    .pagination-paging{
        display: flex;
        justify-content: space-around;
        min-width: 200px;
    }

    .previous-page,
    .current-page,
    .next-page{
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 3px;
        border:1px solid rgb(222,222,222);
        margin: 0 5px;
    }

    .current-page{
        background-color: #1873cc;
        color: rgb(255,255,255)
    }
}

.rr-pager-dynamic{
    ul{
        position: relative;

        .pager-loading{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(222,222,222,.44);
            text-align: center;
            display: flex;
            vertical-align: middle;

            p{
                margin: auto;
            }
        }
    }
}`;

class _PagerDynamic extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.pageData = this.pageData.bind(this);
        this.countCallbacks = 0;

        this.state = {
            ignoreIndexes: []
        };

        this.examples = [
            {
                title: 'PagerDynamic',
                description: trans('pager.dynamic.description'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-pager-example">
                        <PagerDynamic
                            getDataCallback={this.pageData}
                            globalStyle={true}
                            data={this.getData()}
                            itemsPerSite={10}
                            globalCount={100}
                            paginationTextPrefix='page'
                            paginationTextMiddle='of'
                            prevPages={2}
                            nextPages={2}
                            totalPages={10}
                            paginationPages={true}
                            alignPagination={1}
                            alignPagesItems={2}
                            display={
                                [
                                    'name'
                                ]
                            }
                            displayCount={true}
                            previousButton=''
                            nextButton=''
                            paginationTitle='Dynamic Pager Title'
                            fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
                            fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
                            fallbackLoadingPage={
                                (
                                    <div className='pager-loading'>
                                        <p>
                                            Loading...
                                        </p>
                                    </div>
                                )
                            }
                            liCallback={this.liCallback}
                            lineNumber={true}
                        />
                    </div>
                )
            }
        ];
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

    liCallback(clickEvent, object) {
        console.info(object);
    }

    pageData(currentPage) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = this.getData(currentPage);
                return resolve(data);
            }, 500)
        })
    }

    getData(site = 1) {
        let structure = [];

        for (let x = 0; x < 10; x++) {
            structure.push(
                {
                    index: x,
                    name: `You are on the site number ${site}`
                }
            );
        }

        return structure;
    }

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={30}
                    fireScrollBack={true} 
                />
                <h1
                    title={`${trans('exampleTitle')} 2`}
                    className="h1-example"
                >
                    <i className="fas fa-user" />
                    {
                        trans('exampleTitle')
                    }
                </h1>
                <div className="rr-revolution-pager-example">
                    <PagerDynamic
                        getDataCallback={this.pageData}
                        globalStyle={true}
                        data={this.getData()}
                        itemsPerSite={10}
                        globalCount={100}
                        paginationTextPrefix='page'
                        paginationTextMiddle='of'
                        prevPages={2}
                        nextPages={2}
                        totalPages={10}
                        paginationPages={true}
                        alignPagination={1}
                        alignPagesItems={2}
                        display={
                            [
                                'name'
                            ]
                        }
                        displayCount={true}
                        resetCountOnEachPage={false}
                        previousButton=''
                        nextButton=''
                        searchActive={true}
                        searchPlaceholder='Search'
                        searchIcon=''
                        searchSensitive={false}
                        searchOnKeys={
                            [
                                'name'
                            ]
                        }
                        searchOnKeyDown={true}
                        searchTitle='search'
                        paginationTitle='TITLE'
                        fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
                        fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
                        fallbackLoadingPage={
                            (
                                <div className='pager-loading'>
                                    <p>
                                        Loading...
                                    </p>
                                </div>
                            )
                        }
                        fallbackLoadingTime={100}
                        fallbackNoData='NO DATA'
                        fallbackNoDataSearch={
                            (
                                <div className="no-data">
                                    <p>
                                        No search result
                                    </p>
                                </div>
                            )
                        }
                        liCallback={this.liCallback}
                        lineNumber={true}
                    />
                </div>
                {
                    generateArticles(
                        (
                            <h1
                                title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 2`}
                                className="h1-example"
                            >
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
                                    code={codeExample2}
                                />
                                <Clipboard
                                    animation='jump' // scale, jump
                                    data={(
                                        <div title={trans('copyToClipboard')} className="button-action">
                                            <i className="far fa-clipboard"></i>
                                        </div>
                                    )}
                                    clipboard={codeExample2}
                                />
                            </span>
                        )
                    )
                }
                {
                    generateArticles(
                        (
                            <h1
                                title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 2`}
                                className="h1-example"
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
                                    code={jsExample2}
                                />
                                <Clipboard
                                    animation='jump' // scale, jump
                                    data={(
                                        <div title={trans('copyToClipboard')} className="button-action">
                                            <i className="far fa-clipboard"></i>
                                        </div>
                                    )}
                                    clipboard={jsExample2}
                                />
                            </span>
                        )
                    )
                }
                {
                    generateArticles(
                        (
                            <h1
                                title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 2`}
                                className="h1-example"
                            >
                                <i className="fab fa-node-js" />
                                {
                                    trans('cssCodeTitle')
                                }
                            </h1>
                        ),
                        (
                            <span>
                                <SourceCode
                                    lineNumber={true}
                                    layout='dark'
                                    code={cssExample}
                                />
                                <Clipboard
                                    animation='jump' // scale, jump
                                    data={(
                                        <div title={trans('copyToClipboard')} className="button-action">
                                            <i className="far fa-clipboard"></i>
                                        </div>
                                    )}
                                    clipboard={cssExample}
                                />
                            </span>
                        )
                    )
                }
                {
                    getDescriptionForstyle('rr-pager-dynamic')
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
                                    key: "data",
                                    values: "pagination.data"
                                },
                                {
                                    key: "searchOnKeys",
                                    values: "pagination.searchOnKeys"
                                },
                                {
                                    key: "itemsPerSite",
                                    values: "pagination.itemsPerSite"
                                },
                                {
                                    key: "keysToRender",
                                    values: "pagination.keysToRender"
                                },
                                {
                                    key: "liCallback",
                                    values: "pagination.liCallback"
                                },
                                {
                                    key: "inputCallback",
                                    values: "pagination.inputCallback"
                                },
                                {
                                    key: "lineNumber",
                                    values: "pagination.lineNumber"
                                },
                                {
                                    key: "resetLineNumber",
                                    values: "pagination.resetLineNumber"
                                },
                                {
                                    key: "displayTotal",
                                    values: "pagination.displayTotal"
                                },
                                {
                                    key: "totalPrefix",
                                    values: "pagination.totalPrefix"
                                },
                                {
                                    key: "totalSufix",
                                    values: "pagination.totalSufix"
                                },
                                {
                                    key: "paginationPages",
                                    values: "pagination.paginationPages"
                                },
                                {
                                    key: "paginationTextPrefix",
                                    values: "pagination.paginationTextPrefix"
                                },
                                {
                                    key: "paginationTextMiddle",
                                    values: "pagination.paginationTextMiddle"
                                },
                                {
                                    key: "prevPages",
                                    values: "pagination.prevPages"
                                },
                                {
                                    key: "nextPages",
                                    values: "pagination.nextPages"
                                },
                                {
                                    key: "alignPagesItems",
                                    values: "pagination.alignPagesItems"
                                },
                                {
                                    key: "alignPagination",
                                    values: "pagination.alignPagination"
                                },
                                {
                                    key: "previousButton",
                                    values: "pagination.previousButton"
                                },
                                {
                                    key: "nextButton",
                                    values: "pagination.nextButton"
                                },
                                {
                                    key: "searchActive",
                                    values: "pagination.searchActive"
                                },
                                {
                                    key: "searchPlaceholder",
                                    values: "pagination.searchPlaceholder"
                                },
                                {
                                    key: "searchIcon",
                                    values: "pagination.searchIcon"
                                },
                                {
                                    key: "searchSensitive",
                                    values: "pagination.searchSensitive"
                                },
                                {
                                    key: "searchValue",
                                    values: "pagination.searchValue"
                                },
                                {
                                    key: "searchOnKeyDown",
                                    values: "pagination.searchOnKeyDown"
                                },
                                {
                                    key: "searchTitle",
                                    values: "pagination.searchTitle"
                                },
                                {
                                    key: "paginationTitle",
                                    values: "pagination.paginationTitle"
                                },
                                {
                                    key: "fallbackLoading",
                                    values: "pagination.fallbackLoading"
                                },
                                {
                                    key: "fallbackLoadingTime",
                                    values: "pagination.fallbackLoadingTime"
                                },
                                {
                                    key: "fallbackNoData",
                                    values: "pagination.fallbackNoData"
                                },
                                {
                                    key: "fallbackNoDataSearch",
                                    values: "pagination.fallbackNoDataSearch"
                                },
                                {
                                    key: "fallbackMounting",
                                    values: "pagination.fallbackMounting"
                                },

                            ],
                            'rr-pager-dynamic'
                        )
                    }
                />
            </div>
        );
    }
};

export default _PagerDynamic;

