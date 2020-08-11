import React from 'react';

import { Table, PagerDynamic, SourceCode, Clipboard, LoadOnScroll, LoadingBoxTop } from '../../../react-revolution/public/react-revolution';

import trans from '../../Translations/trans';

import buildModulesJsx from '../../Functions/buildModulesJsx';

import buildTableKeysStructure from '../../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../../Functions/getDescriptionForstyle';

const codeExample1 = `import { PagerDynamic, LoadingBoxTop } from 'react-revolution';

<div className="rr-revolution-pager-example">
    <PagerDynamic
        getDataCallback={this.pageData}
        globalStyle={true}
        data={this.getData()}
        itemsPerSite={10}
        globalCount={100}
        displayPagesInfo={true}
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        prevPages={2}
        nextPages={2}
        totalPages={10}
        displayPaginationPages={true}
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
        liOnClickCallback={this.liOnClickCallback}
        displayLineNumber={true}
    />
</div>`;

const codeExample2 = `import { PagerStatic, uuid } from 'react-revolution';

<div className="rr-revolution-pager-example">
    <PagerDynamic
        getDataCallback={this.pageData}
        globalStyle={true}
        data={this.getData()}
        itemsPerSite={10}
        globalCount={100}
        displayPagesInfo={true}
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        prevPages={2}
        nextPages={2}
        totalPages={10}
        displayPaginationPages={true}
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
        displaySearch={true}
        searchPlaceholder='Search'
        searchIcon=''
        searchSensisitve={false}
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
        liOnClickCallback={this.liOnClickCallback}
        displayLineNumber={true}
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
liOnClickCallback(clickEvent, object) {
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

    .delete{
        display: inline-block;
        width: 30px;
        text-align: center;
        color: #FF4469;
    }

    .delete:hover{
        cursor: pointer;
    }
}

.pager-loading{
    box-sizing: border-box;
    padding: 10px;
    height: 320px;
    border: 1px solid rgb(222,222,222);
    margin: 10px 0;
    border-radius: 3px;        
}`;

class ReactRevolutionPagerDynamic extends React.Component {
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
                            displayPagesInfo={true}
                            paginationTextPrefix='page'
                            paginationTextMiddle='of'
                            prevPages={2}
                            nextPages={2}
                            totalPages={10}
                            displayPaginationPages={true}
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
                            liOnClickCallback={this.liOnClickCallback}
                            displayLineNumber={true}
                        />
                    </div>
                )
            }
        ];
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

    liOnClickCallback(clickEvent, object) {
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
                    minify={40}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
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
                        displayPagesInfo={true}
                        paginationTextPrefix='page'
                        paginationTextMiddle='of'
                        prevPages={2}
                        nextPages={2}
                        totalPages={10}
                        displayPaginationPages={true}
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
                        displaySearch={true}
                        searchPlaceholder='Search'
                        searchIcon=''
                        searchSensisitve={false}
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
                        liOnClickCallback={this.liOnClickCallback}
                        displayLineNumber={true}
                    />
                </div>
                <h1
                    title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 2`}
                    className="h1-example"
                >
                    <i className="fas fa-atom" />
                    {
                        trans('reactCodeTitle')
                    }
                </h1>
                <SourceCode
                    displayLineNumber={true}
                    layout='dark'
                    code={codeExample2}
                />
                <Clipboard
                    animation='jump' // scale, jump
                    data={(
                        <div className="button-action">
                            {
                                trans('copyToClipboard')
                            }
                        </div>
                    )}
                    clipboard={codeExample2}
                />
                <h1
                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 2`}
                    className="h1-example"
                >
                    <i className="fab fa-node-js" />
                    {
                        trans('jsCodeTitle')
                    }
                </h1>
                <SourceCode
                    displayLineNumber={true}
                    layout='dark'
                    code={jsExample2}
                />
                <Clipboard
                    animation='jump' // scale, jump
                    data={(
                        <div className="button-action">
                            {
                                trans('copyToClipboard')
                            }
                        </div>
                    )}
                    clipboard={jsExample2}
                />
                <h1
                    title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 2`}
                    className="h1-example"
                >
                    <i className="fab fa-node-js" />
                    {
                        trans('cssCodeTitle')
                    }
                </h1>
                <SourceCode
                    displayLineNumber={true}
                    layout='dark'
                    code={cssExample}
                />
                <Clipboard
                    animation='jump' // scale, jump
                    data={(
                        <div className="button-action">
                            {
                                trans('copyToClipboard')
                            }
                        </div>
                    )}
                    clipboard={cssExample}
                />
                {
                    getDescriptionForstyle('rr-pager-dynamic')
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
                                    key: "liOnClickCallback",
                                    values: "pagination.liOnClickCallback"
                                },
                                {
                                    key: "inputOnChangeCallback",
                                    values: "pagination.inputOnChangeCallback"
                                },
                                {
                                    key: "displayLineNumber",
                                    values: "pagination.displayLineNumber"
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
                                    key: "displayPaginationPages",
                                    values: "pagination.displayPaginationPages"
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
                                    key: "displaySearch",
                                    values: "pagination.displaySearch"
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
                                    key: "searchSensisitve",
                                    values: "pagination.searchSensisitve"
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

export default ReactRevolutionPagerDynamic;

