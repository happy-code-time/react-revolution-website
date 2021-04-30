import React from 'react';
import { Table, ContainerCompact, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import StyleImplementation from '../Modules/StyleImplementation';

const codeExample1 = `import { ContainerCompact } from 'react-revolution';
// import ContainerCompact from 'react-revolution/ContainerCompact';

<ContainerCompact 
    addClass="overwrite-for-website"
    headerProps={
        {
            title: '1'
        }
    }
    headerData={
        <p>Header</p>
    }
    headerHeight={80}
    contentProps={
        {
            title: 'content'
        }
    }
    contentData={
        <p>Content</p>
    }
    sidebarProps={
        {
            title: 'sidebar'
        }
    }
    sidebarData={
        <span>
            Sidebar
        </span>
    }
    sidebarWidth={250}
    hideAt={720}
    callbackShow={console.info}
    callbackShowProps='show'
    callbackHide={console.info}
    callbackHideProps='hide'
/> `;

const cssExample1 = `.overwrite-for-website{
    position: relative !important;

    .area-header,
    .area-sidebar,
    .area-content{
        position: absolute !important;
    }

    .area-header
    {
        @media screen and (min-width: 720px) {
            left: 250px;
            width: calc(100% - 250px);
        }
    }
}`;


class _ContainerCompact extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'ContainerCompact',
                description: trans('container.compact.example1'),
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample1,
                html: '',
                live: (
                    <ContainerCompact 
                        addClass="overwrite-for-website"
                        headerProps={
                            {
                                title: '1'
                            }
                        }
                        headerData={
                            <p>Header</p>
                        }
                        headerHeight={80}
                        contentProps={
                            {
                                title: 'content'
                            }
                        }
                        contentData={
                            <p>Content</p>
                        }
                        sidebarProps={
                            {
                                title: 'sidebar'
                            }
                        }
                        sidebarData={
                            <span>
                                Sidebar
                            </span>
                        }
                        sidebarWidth={250}
                        hideAt={720}
                        callbackShow={console.info}
                        callbackShowProps='show'
                        callbackHide={console.info}
                        callbackHideProps='hide'
                    /> 
                )
            },
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

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
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
                                    key: 'hideAt',
                                    values: 'hideAt'
                                },
                                {
                                    key: 'headerProps',
                                    values: 'headerProps'
                                },
                                {
                                    key: 'headerData',
                                    values: 'headerData'
                                },
                                {
                                    key: 'headerHeight',
                                    values: 'container.compact.headerHeight'
                                },
                                {
                                    key: 'sidebarProps',
                                    values: 'sidebarProps'
                                },
                                {
                                    key: 'sidebarData',
                                    values: 'sidebarData'
                                },
                                {
                                    key: 'contentProps',
                                    values: 'contentProps'
                                },
                                {
                                    key: 'contentData',
                                    values: 'contentData'
                                },
                                {
                                    key: 'sidebarWidth',
                                    values: 'container.sidebarWidth'
                                },
                                {
                                    key: 'callbackShow',
                                    values: 'container.compact.callbackShow'
                                },
                                {
                                    key: 'callbackShowProps',
                                    values: 'container.compact.callbackShowProps'
                                },
                                {
                                    key: 'callbackHide',
                                    values: 'container.compact.callbackHide'
                                },
                                {
                                    key: 'callbackHideProps',
                                    values: 'container.compact.callbackHideProps'
                                },
                                {
                                    key: 'locationInterval',
                                    values: 'container.compact.locationInterval'
                                },
                            ],
                            'ContainerCompact'
                        )
                    }
                />
            </div>
        );
    }
};

export default _ContainerCompact;