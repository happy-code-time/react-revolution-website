import React from 'react';
import { Table, Breadcrumbs, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';
import { host } from '../Globals';
import StyleImplementation from '../Modules/StyleImplementation';


const codeExample1 = `import { Breadcrumbs } from 'react-revolution';
// import Breadcrumbs from 'react-revolution/Breadcrumbs';

<div className="rr-breadcrumbs-example">
    <Breadcrumbs 
        removeHashFromDomain={true}
        hashRouter={true}
    />
</div>`;

const codeExample2 = `import { Breadcrumbs } from 'react-revolution';
// import Breadcrumbs from 'react-revolution/Breadcrumbs';

<div className="rr-breadcrumbs-example">
    <Breadcrumbs
        hashRouter={true}
        reactRouter={false}
        domainName='Home'
    />
</div>`;

const codeExample3 = `import { Breadcrumbs } from 'react-revolution';
// import Breadcrumbs from 'react-revolution/Breadcrumbs';

<div className="rr-breadcrumbs-example">
    <Breadcrumbs
        hashRouter={true}
        reactRouter={false}
        domainName='Home'
        delimiter='>'
        overwriteText={false}
        moduleMenu={
            {
                closeOnClickOutside: true,
                animation: 'scale', // height, scale, opacity
                data: [
                    {
                        text: 'last entry - to toggle',
                        data: [
                            {
                                text: 'Child 1',
                                href: '#',
                            },
                            {
                                text: 'Child 2',
                                href: '#',
                            },
                            {
                                text: 'Child 3',
                                href: '#',
                            },
                        ]
                    }
                ]
            }
        }
    />
</div>`;

const cssExample = `.rr-breadcrumbs-example{
    width: 100%;
    min-height: 50px;
    line-height: 50px;

    .single-entry-delimiter{
        color: rgb(82,82,82);
    }

    span,
    a{
        color: rgb(163,163,163);
    }

    a{
        margin:0 5px;
    }

    .menu-span{    

        .text{
            min-width: 65px;
            text-align: center; 
        }

        .text:hover{
            cursor: pointer;
        }

        .hasChildren{
            border: unset;
        }

        .children{
            position: absolute;
            width: 100%;
            padding:0;
            background-color: rgb(255,255,255);
            border-radius: 3px;
            box-shadow: 0px 0px 3px rgb(122,122,122);
            z-index: 2;
            
            .child{
                box-sizing: border-box;
                margin: 5px 0;
                padding: 0 5px;
            }
        }
    }
}`;

class _Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'Breadcrumbs',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-breadcrumbs-example">
                        <Breadcrumbs
                            removeHashFromDomain={true}
                            hashRouter={true}
                        />
                    </div>
                )
            },
            {
                title: 'Breadcrumbs',
                description: '',
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-breadcrumbs-example">
                        <Breadcrumbs
                            hashRouter={true}
                            reactRouter={false}
                            domainName='Home'
                        />
                    </div>
                )
            },
            {
                title: 'Breadcrumbs',
                description: trans('breadcrumbs.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: cssExample,
                html: '',
                live: (
                    <div className="rr-breadcrumbs-example">
                        <Breadcrumbs
                            hashRouter={true}
                            reactRouter={false}
                            domainName='Home'
                            delimiter='>'
                            overwriteText={false}
                            moduleMenu={
                                {
                                    closeOnClickOutside: true,
                                    animation: 'scale', // height, scale, opacity
                                    data: [
                                        {
                                            text: 'last entry - to toggle',
                                            data: [
                                                {
                                                    text: 'Child 1',
                                                    href: `${host}#/components/breadcrumbs`,
                                                },
                                                {
                                                    text: 'Child 2',
                                                    href: `${host}#/components/breadcrumbs`,
                                                },
                                                {
                                                    text: 'Child 3',
                                                    href: `${host}#/components/breadcrumbs`,
                                                },
                                            ]
                                        }
                                    ]
                                }
                            }
                        />
                    </div>
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
                <StyleImplementation />
                <h1 className="title-border">
                    <i className="fab fa-keycdn"></i>
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
                                    key: 'removeHashFromDomain',
                                    values: 'removeHashFromDomain'
                                },
                                {
                                    key: 'hashRouter',
                                    values: 'bread.hashRouter'
                                },
                                {
                                    key: 'reactRouter',
                                    values: 'reactRouter'
                                },
                                {
                                    key: 'domainName',
                                    values: 'bread.domainName'
                                },
                                {
                                    key: 'delimiter',
                                    values: 'bread.delimiter'
                                },
                                {
                                    key: 'overwriteText',
                                    values: 'bread.overwriteText'
                                },
                                {
                                    key: 'moduleMenu',
                                    values: 'bread.moduleMenu'
                                },
                            ],
                            'rr-breadcrumbs'
                        )
                    }
                />
            </div>
        );
    }
};

export default _Breadcrumbs;