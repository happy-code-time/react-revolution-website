import React from 'react';
import { Table, PopupHover, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';
import buildModulesJsx from '../Functions/buildModulesJsx';
import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

const codeExample1 = `import { PopupHover } from 'react-revolution';
// import PopupHover from 'react-revolution/PopupHover';

<div style={{ marginBottom: '30px' }}>
    <style dangerouslySetInnerHTML={{
        __html: \`
            .PopupHoverStyle {
                float: left;
                box-sizing: border-box;
                padding: 5px 10px;
                margin-right: 10px;
            }
    \`}} />
    <PopupHover
        addClass='PopupHoverStyle'
        direction='left'
        holderData='long data holder text'
        displayOnHover={true}
        hideOnLeave={true}
        animation={true}
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
    <PopupHover
        addClass='PopupHoverStyle'
        direction='left'
        holderData='hamburger'
        displayOnHover={true}
        hideOnLeave={true}
        animation={true}
        contentData={
            (
                <div>
                    <br />
                    <h1>First header</h1>
                    <br />
                    <hr />
                    <br />
                    <p>Menu entry 1</p>
                    <br />
                    <p>Menu entry 2</p>
                    <br />
                    <p>Menu entry 3</p>
                    <br />
                    <hr />
                    <br />
                    <h1>Second header</h1>
                    <br />
                    <p>Single child entry 1</p>
                    <br />
                    <p>Single child entry 2</p>
                    <br />
                    <p>Single child entry 3</p>
                    <br />
                    <hr />
                    <br />
                </div>
            )
        }
    />
</div>`;

const codeExample2 = `import { PopupHover } from 'react-revolution';
// import PopupHover from 'react-revolution/PopupHover';

<div style={{ marginBottom: '30px' }}>
    <style dangerouslySetInnerHTML={{
        __html: \`
        .PopupHoverStyle {
            float: left;
            box-sizing: border-box;
            padding: 5px 10px;
            margin-right: 10px;
        }
    \`}} />
    <PopupHover
        addClass='PopupHoverStyle'
        direction='right'
        holderData='long data holder text'
        displayOnHover={true}
        hideOnLeave={true}
        animation={true}
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
    <PopupHover
        addClass='PopupHoverStyle'
        direction='right'
        holderData='square'
        displayOnHover={true}
        hideOnLeave={true}
        animation={true}
        contentData={
            (
                <div>
                    <br />
                    <h1>First header</h1>
                    <br />
                    <hr />
                    <br />
                    <p>Menu entry 1</p>
                    <br />
                    <p>Menu entry 2</p>
                    <br />
                    <p>Menu entry 3</p>
                    <br />
                    <hr />
                    <br />
                    <h1>Second header</h1>
                    <br />
                    <p>Single child entry 1</p>
                    <br />
                    <p>Single child entry 2</p>
                    <br />
                    <p>Single child entry 3</p>
                    <br />
                    <hr />
                    <br />
                </div>
            )
        }
    />
</div>`;

const codeExample3 = `import { PopupHover } from 'react-revolution';
// import PopupHover from 'react-revolution/PopupHover';

<div style={{ marginBottom: '30px' }}>
    <style dangerouslySetInnerHTML={{
        __html: \`
        .PopupHoverStyle {
            float: left;
            box-sizing: border-box;
            padding: 5px 10px;
            margin-right: 10px;
        }
    \`}} />
    <PopupHover
        addClass='PopupHoverStyle'
        direction='center'
        holderData='long data holder text'
        displayOnHover={true}
        hideOnLeave={true}
        animation={true}
        contentData={
            [
                {
                    data: (
                        <a href="#">
                            link 1
                        </a>
                    )
                },
                {
                    data: (
                        <a href="#">
                            link 2
                        </a>
                    )
                }
            ]
        }
    />
    <PopupHover
        addClass='PopupHoverStyle'
        direction='center'
        holderData='square'
        displayOnHover={true}
        hideOnLeave={true}
        animation={true}
        contentData={
            (
                <div>
                    <br />
                    <h1>First header</h1>
                    <br />
                    <hr />
                    <br />
                    <p>Menu entry 1</p>
                    <br />
                    <p>Menu entry 2</p>
                    <br />
                    <p>Menu entry 3</p>
                    <br />
                    <hr />
                    <br />
                    <h1>Second header</h1>
                    <br />
                    <p>Single child entry 1</p>
                    <br />
                    <p>Single child entry 2</p>
                    <br />
                    <p>Single child entry 3</p>
                    <br />
                    <hr />
                    <br />
                </div>
            )
        }
    />
</div>`;

class _PopupHover extends React.Component {
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        this.examples = [
            {
                title: 'PopupHover',
                description: trans('popupHover.description'),
                reactTextBefore: trans('popupHover.example1'),
                react: codeExample1,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginBottom: '30px' }}>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                .PopupHoverStyle {
                                    float: left;
                                    box-sizing: border-box;
                                    padding: 5px 10px;
                                    margin-right: 10px;
                                }
                        `}} />
                        <PopupHover
                            addClass='PopupHoverStyle'
                            direction='left'
                            holderData='long data holder text'
                            displayOnHover={true}
                            hideOnLeave={true}
                            animation={true}
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                        <PopupHover
                            addClass='PopupHoverStyle'
                            direction='left'
                            holderData='hamburger'
                            displayOnHover={true}
                            hideOnLeave={true}
                            animation={true}
                            contentData={
                                (
                                    <div>
                                        <br />
                                        <h1>First header</h1>
                                        <br />
                                        <hr />
                                        <br />
                                        <p>Menu entry 1</p>
                                        <br />
                                        <p>Menu entry 2</p>
                                        <br />
                                        <p>Menu entry 3</p>
                                        <br />
                                        <hr />
                                        <br />
                                        <h1>Second header</h1>
                                        <br />
                                        <p>Single child entry 1</p>
                                        <br />
                                        <p>Single child entry 2</p>
                                        <br />
                                        <p>Single child entry 3</p>
                                        <br />
                                        <hr />
                                        <br />
                                    </div>
                                )
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupHover',
                description: trans('popupHover.example2'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginBottom: '30px' }}>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            .PopupHoverStyle {
                                float: left;
                                box-sizing: border-box;
                                padding: 5px 10px;
                                margin-right: 10px;
                            }
                        `}} />
                        <PopupHover
                            addClass='PopupHoverStyle'
                            direction='right'
                            holderData='long data holder text'
                            displayOnHover={true}
                            hideOnLeave={true}
                            animation={true}
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                        <PopupHover
                            addClass='PopupHoverStyle'
                            direction='right'
                            holderData='square'
                            displayOnHover={true}
                            hideOnLeave={true}
                            animation={true}
                            contentData={
                                (
                                    <div>
                                        <br />
                                        <h1>First header</h1>
                                        <br />
                                        <hr />
                                        <br />
                                        <p>Menu entry 1</p>
                                        <br />
                                        <p>Menu entry 2</p>
                                        <br />
                                        <p>Menu entry 3</p>
                                        <br />
                                        <hr />
                                        <br />
                                        <h1>Second header</h1>
                                        <br />
                                        <p>Single child entry 1</p>
                                        <br />
                                        <p>Single child entry 2</p>
                                        <br />
                                        <p>Single child entry 3</p>
                                        <br />
                                        <hr />
                                        <br />
                                    </div>
                                )
                            }
                        />
                    </div>
                )
            },
            {
                title: 'PopupHover',
                description: trans('popupHover.example3'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: '',
                css: '',
                html: '',
                live: (
                    <div style={{ marginBottom: '30px' }}>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            .PopupHoverStyle {
                                float: left;
                                box-sizing: border-box;
                                padding: 5px 10px;
                                margin-right: 10px;
                            }
                        `}} />
                        <PopupHover
                            addClass='PopupHoverStyle'
                            direction='center'
                            holderData='long data holder text'
                            displayOnHover={true}
                            hideOnLeave={true}
                            animation={true}
                            contentData={
                                [
                                    {
                                        data: (
                                            <a href="#">
                                                link 1
                                            </a>
                                        )
                                    },
                                    {
                                        data: (
                                            <a href="#">
                                                link 2
                                            </a>
                                        )
                                    }
                                ]
                            }
                        />
                        <PopupHover
                            addClass='PopupHoverStyle'
                            direction='center'
                            holderData='square'
                            displayOnHover={true}
                            hideOnLeave={true}
                            animation={true}
                            contentData={
                                (
                                    <div>
                                        <br />
                                        <h1>First header</h1>
                                        <br />
                                        <hr />
                                        <br />
                                        <p>Menu entry 1</p>
                                        <br />
                                        <p>Menu entry 2</p>
                                        <br />
                                        <p>Menu entry 3</p>
                                        <br />
                                        <hr />
                                        <br />
                                        <h1>Second header</h1>
                                        <br />
                                        <p>Single child entry 1</p>
                                        <br />
                                        <p>Single child entry 2</p>
                                        <br />
                                        <p>Single child entry 3</p>
                                        <br />
                                        <hr />
                                        <br />
                                    </div>
                                )
                            }
                        />
                    </div>
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
                    minify={undefined}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example
                    fireScrollEvent={300}
                    fireScrollBack={true}
                />
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
                                    key: 'direction',
                                    values: 'popupHover.direction'
                                },
                                {
                                    key: 'animation',
                                    values: 'popupHover.animation'
                                },
                                {
                                    key: 'animationTimeout',
                                    values: 'popupHover.animationTimeout'
                                },
                                {
                                    key: 'holderData',
                                    values: 'popupHover.holderData'
                                },
                                {
                                    key: 'contentData',
                                    values: 'popupHover.contentData'
                                },
                                {
                                    key: 'contentData.data',
                                    values: 'popupHover.contentData.data'
                                },
                            ],
                            'rr-popup-hover'
                        )
                    }
                />
            </div>
        );
    }
};

export default _PopupHover;

