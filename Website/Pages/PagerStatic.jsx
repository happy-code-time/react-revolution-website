import React from 'react';

import { Table, PagerStatic, SourceCode, Clipboard, LoadOnScroll, LoadingBoxTop, uuid } from '../../react-revolution/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

import generateArticles from '../Globals/generateArticles';

const codeExample1 = `import { PagerStatic } from 'react-revolution';
// import PagerStatic from 'react-revolution/PagerStatic';

<div className="rr-revolution-pager-example">
    <PagerStatic
        globalStyle={true}
        data={this.getDataExample1()}
        itemsPerSite={10}
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        prevPages={1}
        nextPages={1}
        paginationPages={true}
        alignPagination={1}
        alignPagesItems={2}
        display={
            [
                'name'
            ]
        }
        lineNumber={true}
        liCallback={this.callback}
    />
</div>`;

const codeExample2 = `import { PagerStatic } from 'react-revolution';
// import PagerStatic from 'react-revolution/PagerStatic';

<div className="rr-revolution-pager-example">
    <PagerStatic
        globalStyle={true}
        data={this.getDataExample2()}
        itemsPerSite={10}
        displayTotal={false}
        totalPrefix=''
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        prevPages={1}
        nextPages={1}
        paginationPages={true}
        alignPagination={1}
        alignPagesItems={2}
        display={
            [
                'name', 'removeJsx'
            ]
        }
        lineNumber={true}
        paginationTitle='Custom table title'
        liCallback={this.callback}
        fallbackNoData={
            (
                <div className="no-data">
                    <p>
                        No data to render
                    </p>
                </div>
            )
        }
    />
</div>`;

const codeExample3 = `import { PagerStatic, uuid } from 'react-revolution';
// import PagerStatic from 'react-revolution/PagerStatic';

<div className="rr-revolution-pager-example">
    <PagerStatic
        globalStyle={true}
        data={this.getDataExample3()}
        itemsPerSite={10}
        displayTotal={false}
        totalPrefix=''

        paginationTextPrefix='page'
        paginationTextMiddle='of'
        prevPages={2}
        nextPages={2}
        paginationPages={true}
        alignPagination={1}
        alignPagesItems={2}
        display={
            [
                'name'
            ]
        }
        lineNumber={true}
        resetLineNumber={false}
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
        searchValue=''
        searchOnKeyDown={true}
        searchTitle='Custom search title'
        paginationTitle='Custom table title'
        fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoadingTime={100}
        fallbackNoData={
            (
                <div className="no-data">
                    <p>
                        No data to render
                    </p>
                </div>
            )
        }
        fallbackNoDataSearch={
            (
                <div className="no-data">
                    <p>
                        No search result
                    </p>
                </div>
            )
        }
        inputCallback={this.callbackInput}
        liCallback={this.callback}
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
                name: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr \${x}\`,
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
    this.remove = this.remove.bind(this);
    this.callback = this.callback.bind(this);
    this.getDataExample2 = this.getDataExample2.bind(this);

    this.state = {
        ignoreIndexes: []
    };
}

callback(clickEvent, object) {
    console.info(object);
}

remove(index) {
    const { ignoreIndexes } = this.state;

    ignoreIndexes.push(index);

    this.setState({ ignoreIndexes });
}

getDataExample2() {
    const { ignoreIndexes } = this.state;
    const dataToDisplay = [];

    for (let x = 1; x <= 50; x++) {
        if (!ignoreIndexes.includes(x)) {
            dataToDisplay.push(
                {
                    index: x,
                    name: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr \${x}\`,
                }
            );
        }
    }

    const moduleStructure = [];

    dataToDisplay.map(object => {
        const { name, index } = object;

        moduleStructure.push({
            name,
            removeJsx: (
                <i
                    title='delete'
                    className="fas fa-trash-alt delete"
                    onClick={(e) => this.remove(index)}
                >
                </i>
            )
        });
    });


    return moduleStructure;
}`;

const jsExample3 = `constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
    this.getDataExample3 = this.getDataExample3.bind(this);
}

callback(clickEvent, object) {
    console.info(object);
}

callbackInput(event){
    console.info(event);
}

getDataExample3() {
    let dataToDisplay = [];

    for (let x = 1; x <= 50; x++) {
        dataToDisplay.push(
            {
                name: \`\${uuid()}\`
            }
        );
    }

    const newStructure = [];

    dataToDisplay.map(object => {
        const { name } = object;

        newStructure.push({
            name,
        });
    });

    return newStructure;
}`;

const cssExample = `.rr-pager-static {

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
}`;

class _PagerStatic extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.remove = this.remove.bind(this);
        this.callback = this.callback.bind(this);

        this.getDataExample1 = this.getDataExample1.bind(this);
        this.getDataExample2 = this.getDataExample2.bind(this);
        this.getDataExample3 = this.getDataExample3.bind(this);


        this.countCallbacks = 0;

        this.state = {
            ignoreIndexes: []
        };

        this.examples = [
            {
                title: 'PagerStatic',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsExample1,
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-revolution-pager-example">
                        <PagerStatic
                            globalStyle={true}
                            /**
                             * data
                             */
                            data={this.getDataExample1()}
                            /**
                             * How many items display per page
                             */
                            itemsPerSite={10}
                            /**
                             * Display total available items
                             * passed to the module
                             */
                            displayTotal={false}
                            /**
                             * Prefix of the total elements
                             */
                            totalPrefix=''
                            /**
                             * Pages Information
                             */
                            paginationTextPrefix='page'
                            paginationTextMiddle='of'
                            /**
                             * How many sites display: 
                             * - before main page
                             * - after main page
                             */
                            prevPages={1}
                            nextPages={1}
                            /**
                             * Display pagination pages
                             * if false then only the prev and next buttons are displayed
                             */
                            paginationPages={true}
                            /**
                             * Align ul and pagination: 1, 2
                             */
                            alignPagination={1}
                            /**
                             * Align pagination items
                             * 1, 2, 3, 4, 5
                             */
                            alignPagesItems={2}
                            /**
                             * Keys to display from object
                             */
                            display={
                                [
                                    'name'
                                ]
                            }
                            /**
                             * Display loop index as first
                             * entry for each li element
                             */
                            lineNumber={true}
                            liCallback={this.callback}
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

    getDataExample1() {
        const dataToDisplay = [];
        const moduleStructure = [];

        for (let x = 1; x <= 50; x++) {
            dataToDisplay.push(
                {
                    index: x,
                    name: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr ${x}`,
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
    }

    callback(clickEvent, object) {
        console.info(clickEvent);
        console.info(object);
    }

    callbackInput(event) {
        console.info(event);
    }

    remove(index) {
        const { ignoreIndexes } = this.state;

        ignoreIndexes.push(index);

        this.setState({ ignoreIndexes });
    }

    getDataExample2() {
        const { ignoreIndexes } = this.state;
        let dataToDisplay = [];

        for (let x = 1; x <= 50; x++) {
            if (!ignoreIndexes.includes(x)) {
                dataToDisplay.push(
                    {
                        index: x,
                        name: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr ${x}`,
                    }
                );
            }
        }

        const newStructure = [];

        dataToDisplay.map(object => {
            const { name, index } = object;

            newStructure.push({
                name,
                removeJsx: (
                    <i
                        title='delete'
                        className="fas fa-trash-alt delete"
                        onClick={(e) => this.remove(index)}
                    >
                    </i>
                )
            });
        });


        return newStructure;
    }

    getDataExample3() {
        let dataToDisplay = [];

        for (let x = 1; x <= 50; x++) {
            dataToDisplay.push(
                {
                    name: `${uuid()}`
                }
            );
        }

        const newStructure = [];

        dataToDisplay.map(object => {
            const { name } = object;

            newStructure.push({
                name,
            });
        });


        return newStructure;
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
                    <PagerStatic
                        globalStyle={true}
                        /**
                         * data
                         */
                        data={this.getDataExample2()}
                        /**
                         * How many items display per page
                         */
                        itemsPerSite={10}
                        /**
                         * Display total available items
                         * passed to the module
                         */
                        displayTotal={false}
                        /**
                         * Prefix of the total elements
                         */
                        totalPrefix=''
                        /**
                         * Pages Information
                         */
                        paginationTextPrefix='page'
                        paginationTextMiddle='of'
                        /**
                         * How many sites display: 
                         * - before main page
                         * - after main page
                         */
                        prevPages={1}
                        nextPages={1}
                        /**
                         * Display pagination pages
                         * if false then only the prev and next buttons are displayed
                         */
                        paginationPages={true}
                        /**
                         * Align ul and pagination: 1, 2
                         */
                        alignPagination={1}
                        /**
                         * Align pagination items
                         * 1, 2, 3, 4, 5
                         */
                        alignPagesItems={2}
                        /**
                         * Keys to display from object
                         */
                        display={
                            [
                                'name', 'removeJsx'
                            ]
                        }
                        /**
                         * Display loop index as first
                         * entry for each li element
                         */
                        lineNumber={true}
                        paginationTitle='Custom table title'
                        /**
                         * callbacks
                         */
                        liCallback={this.callback}
                        /**
                         * Fallback for no data in list
                         */
                        fallbackNoData={
                            (
                                <div className="no-data">
                                    <p>
                                        No data to render
                                    </p>
                                </div>
                            )
                        }
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
                <h1
                    title={`${trans('exampleTitle')} 3`}
                    className="h1-example"
                >
                    <i className="fas fa-user" />
                    {
                        trans('exampleTitle')
                    }
                </h1>
                <div className="rr-revolution-pager-example">
                    <PagerStatic
                        globalStyle={true}
                        /**
                         * data
                         */
                        data={this.getDataExample3()}
                        /**
                         * How many items display per page
                         */
                        itemsPerSite={10}
                        /**
                         * Display total available items
                         * passed to the module
                         */
                        displayTotal={false}
                        /**
                         * Prefix of the total elements
                         */
                        totalPrefix=''
                        /**
                         * Pages Information
                         */
                        paginationTextPrefix='page'
                        paginationTextMiddle='of'
                        /**
                         * How many sites display: 
                         * - before main page
                         * - after main page
                         */
                        prevPages={2}
                        nextPages={2}
                        /**
                         * Display pagination pages
                         * if false then only the prev and next buttons are displayed
                         */
                        paginationPages={true}
                        /**
                         * Align ul and pagination: 1, 2
                         */
                        alignPagination={1}
                        /**
                         * Align pagination items
                         * 1, 2, 3, 4, 5
                         */
                        alignPagesItems={2}
                        /**
                         * Keys to display from object
                         */
                        display={
                            [
                                'name'
                            ]
                        }
                        /**
                         * Display loop index as first
                         * entry for each li element
                         */
                        lineNumber={true}
                        /**
                         * Each new page should start with an: 1 
                         * or increment the counter for each page
                         */
                        resetLineNumber={false}
                        /**
                         * Buttons JSX
                         */
                        previousButton=''
                        nextButton=''
                        /**
                         * Search input field
                         */
                        searchActive={true}
                        searchPlaceholder='Search'
                        searchIcon=''
                        searchSensitive={false}
                        searchOnKeys={
                            [
                                'name'
                            ]
                        }
                        /**
                         * Search value (working only 1 single time)
                         */
                        searchValue=''
                        /**
                         * Filter data on input field change
                         */
                        searchOnKeyDown={true}
                        /**
                         * Search title
                         */
                        searchTitle='Custom search title'
                        paginationTitle='Custom table title'
                        /**
                         * No data message
                         */
                        fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
                        fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
                        fallbackLoadingTime={100}
                        /**
                         * Fallback for no data in list
                         */
                        fallbackNoData={
                            (
                                <div className="no-data">
                                    <p>
                                        No data to render
                                    </p>
                                </div>
                            )
                        }
                        /**
                         * Fallback for no data in list
                         */
                        fallbackNoDataSearch={
                            (
                                <div className="no-data">
                                    <p>
                                        No search result
                                    </p>
                                </div>
                            )
                        }
                        /**
                         * callbacks
                         */
                        inputCallback={this.callbackInput}
                        liCallback={this.callback}
                    />
                </div>
                {
                    generateArticles(
                        (
                            <h1
                                title={`${trans('reactCodeTitle')} - ${trans('exampleTitle')} 3`}
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
                                    code={codeExample3}
                                />
                                <Clipboard
                                    animation='jump' // scale, jump
                                    data={(
                                        <div title={trans('copyToClipboard')} className="button-action">
                                            <i className="far fa-clipboard"></i>
                                        </div>
                                    )}
                                    clipboard={codeExample3}
                                />
                            </span>
                        )
                    )
                }
                {
                    generateArticles(
                        (
                            <h1
                                title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 3`}
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
                                    code={jsExample3}
                                />
                                <Clipboard
                                    animation='jump' // scale, jump
                                    data={(
                                        <div title={trans('copyToClipboard')} className="button-action">
                                            <i className="far fa-clipboard"></i>
                                        </div>
                                    )}
                                    clipboard={jsExample3}
                                />
                            </span>
                        )
                    )
                }
                {
                    generateArticles(
                        (
                            <h1
                                title={`${trans('jsCodeTitle')} - ${trans('exampleTitle')} 3`}
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
                    getDescriptionForstyle('rr-pager-static')
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
                            'rr-pager-static'
                        )
                    }
                />
            </div>
        );
    }
};

export default _PagerStatic;

