import React from 'react';
import trans from '../../Translations/trans';
import { Table } from '../../../react-revolution/react-revolution';

class Releases extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastUrl: window.location.href,
            release: '',
            loaded: false,
            releases: {
                '1.1.7': {
                    data: [
                        {
                            key: 'Articles',
                            value: 'New component.'
                        },
                        {
                            key: 'ArticlesImages',
                            value: 'New component.'
                        }
                    ]
                },
                '1.1.8': {
                    data: [
                        {
                            key: 'ReadMore',
                            value: 'New component.'
                        },
                        {
                            key: 'ReadMoreCallback',
                            value: 'New component.'
                        }
                    ]
                },
                '1.1.9': {
                    data: [
                        {
                            key: 'Modal',
                            value: 'New component.'
                        },
                        {
                            key: 'CardsScrollCallback',
                            value: 'Added Promise.reject() support.'
                        },
                        {
                            key: 'CardsScrollCallback',
                            value: 'Added new key "persistReject".'
                        },
                        {
                            key: 'CardsScrollCallback',
                            value: 'Added new key "onReject".'
                        },
                        {
                            key: 'Articles',
                            value: 'Added new keys "toggleForwards".'
                        },
                        {
                            key: 'Articles',
                            value: 'Added new keys "toggleBackwards".'
                        },
                        {
                            key: 'ArticlesImages',
                            value: 'Added new key "toggleForwards".'
                        },
                        {
                            key: 'ArticlesImages',
                            value: 'Added new key "toggleBackwards".'
                        },
                    ]
                },
                '1.2.0': {
                    data: [
                        {
                            key: 'LoadOnScroll',
                            value: 'Renamed key from "loadMoreLoadingIcon" to "loading".'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "callbackProps".'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added Promise.reject() support.'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "persistReject".'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "onReject".'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "fireScrollEvent".'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "fireScrollBack".'
                        },
                    ]
                },
                '2.0.0': {
                    data: [
                        {
                            key: 'Timeline',
                            value: 'New component.'
                        },
                        {
                            key: 'DarkLines404',
                            value: 'New component.'
                        },
                        {
                            key: 'Clipboard',
                            value: 'Bugfix of the callback function.'
                        },
                        {
                            key: 'Clipboard',
                            value: 'Added new key "callbackProps".'
                        },
                        {
                            key: 'Modules import',
                            value: 'Added functionality to import each single module from the library as: import <ModuleName> from "/react-revolution/public/<ModuleName>".'
                        },
                        {
                            key: 'Modules style',
                            value: 'Fixed bug to load style for each single module.'
                        },
                    ]
                },
                '3.0.0': {
                    data: [
                        {
                            key: 'DragDropArea',
                            value: 'New component.'
                        },
                        {
                            key: 'DragDropList',
                            value: 'New component.'
                        },
                        {
                            key: 'Modules import',
                            value: 'Added functionality to import each single module from the library as: import <ModuleName> from "/react-revolution/<ModuleName>".'
                        },
                    ]
                },
                '3.0.1': {
                    data: [
                        {
                            key: 'DragDropArea',
                            value: 'Changed areas HTML structure.'
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.'
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.'
                        },
                    ]
                },
                '3.0.2': {
                    data: [
                        {
                            key: 'package.json',
                            value: 'Fixed wrong dependencies versions.'
                        }
                    ]
                },
                '3.0.3': {
                    data: [
                        {
                            key: 'package.json',
                            value: 'Fixed wrong dependencies versions.'
                        }
                    ]
                },
                '3.0.4': {
                    data: [
                        {
                            key: 'Stars',
                            value: 'New component.'
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.'
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.'
                        },
                        {
                            key: 'CustomSuggestion',
                            value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.'
                        },
                        {
                            key: 'CustomSuggestion',
                            value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.'
                        },
                    ]
                },
                '3.0.5': {
                    data: [
                        {
                            key: 'MenuClickHorizontal',
                            value: 'Renamed component from "MenuClickHorizontal" to "Menu".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "headData".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "activeClassName".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "toggledClassName".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "isActiveTree".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "forceClose".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "forceCloseAll".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "align".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "alignIcon".'
                        },
                        {
                            key: 'Container',
                            value: 'Added new key "align".'
                        },
                    ]
                },
                '3.0.6': {
                    data: [
                        {
                            key: 'addGlobalMessage',
                            value: 'Added new argument "clearStack".'
                        },
                    ]
                },
                '4.0.0': {
                    data: [
                        {
                            key: 'Funtions',
                            value: 'Added Functions with default import type.'
                        },
                        {
                            key: 'addGlobalMessage',
                            value: 'Added new argument "persistCurrentMessage".'
                        },
                    ]
                },
                '4.0.1': {
                    data: [
                        {
                            key: 'Menu',
                            value: 'Apply new menu data based on the getDerivedStateFromProps check.'
                        },
                    ]
                },
                '4.0.2': {
                    data: [
                        {
                            key: 'MenuHeight',
                            value: 'New component.'
                        },
                    ]
                },
                '4.0.3': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Removed keys "persistUserSelection", "clearPersistUserSelection", "minify", "autopilot".'
                        },
                        {
                            key: 'Container',
                            value: 'Renamed key from "minifyAt" to "minifyAt".'
                        },
                        {
                            key: 'Container',
                            value: 'Renamed key from "maxifyAt" to "maxifyAt".'
                        },
                        {
                            key: 'Container',
                            value: 'Added key "hideAt".'
                        },
                        {
                            key: 'Container',
                            value: 'Added key "minifySidebarOn".'
                        },
                    ]
                },
                '4.0.4': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Removed background color on css file for the Sidebar.'
                        },
                        {
                            key: 'Sidebar',
                            value: 'Added support for the key "addClass".'
                        },
                    ]
                },
                '4.0.5': {
                    data: [
                        {
                            key: 'Sidebar',
                            value: 'Added JSX support for the keys "textLong" and "textShort".'
                        },
                    ]
                },
                '4.0.6': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Added new key "headerDataRight".'
                        },
                    ]
                },
                '4.0.7': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Added support for "url change detection".'
                        },
                    ]
                },
                '4.0.8': {
                    data: [
                        {
                            key: 'Astronaut404',
                            value: 'New component.'
                        },
                        {
                            key: 'Picture404',
                            value: 'New component.'
                        },
                    ]
                },
                '4.0.9': {
                    data: [
                        {
                            key: 'InputFileDragDrop',
                            value: 'Added arguments: name, size, type to the custom callback function and moved the attribute "id" from input tag to the main HTML root HTML node.'
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Moved the attribute "id" from input tag to the main HTML root HTML node.'
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Moved the attribute "id" from input tag to the main HTML root HTML node.'
                        },
                        {
                            key: 'InputFile',
                            value: 'Moved the attribute "id" from input tag to the main HTML root HTML node.'
                        },
                        {
                            key: 'Container',
                            value: 'Fixed sidebar flash. No more sidebar flash on initial Container loading while the key="minifySidebarOn" are not empty.'
                        },
                    ]
                },
                '4.1.0': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'New component.'
                        },
                        {
                            key: 'SliderCards',
                            value: 'New component.'
                        },
                        {
                            key: 'SliderItems',
                            value: 'New component.'
                        },
                        {
                            key: 'Steps',
                            value: 'New component.'
                        },
                        {
                            key: 'Menu',
                            value: 'Fixed onClick event. Previously the onClick event was attached to all childs. Now the onClick event are attached, only if the element has nested childrens.'
                        },
                        {
                            key: 'Menu',
                            value: 'Fixed tag generation from <a> to <div> if the key "href" are not passed to the single menu entry, this means href is undefined, null or other then typeof "string".'
                        },
                        {
                            key: 'Menu',
                            value: 'Added to data tree new keys: callback, callbackProps, externalLink.'
                        },
                        {
                            key: 'MenuHeight',
                            value: 'Fixed onClick event. Previously the onClick event was attached to all childs. Now the onClick event are attached, only if the element has nested childrens.'
                        },
                        {
                            key: 'MenuHeight',
                            value: 'Added to data tree new keys: callback, callbackProps, externalLink.'
                        },
                        {
                            key: 'MenuHeight',
                            value: 'Fixed tag generation from <a> to <div> if the key "href" are not passed to the single menu entry, this means href is undefined, null or other then typeof "string".'
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Added new key "applySelected".'
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Added new key "applySelected".'
                        },

                    ]
                },
                '4.1.1': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Improvement of listeners and slide move action to avoid (on mouse move) slide "flipping".'
                        },
                        {
                            key: 'Slider',
                            value: 'Added new keys: "paginationInside", "dotsInside", "slideAfterMove", "data.dot".'
                        },
                        {
                            key: 'SliderCards',
                            value: 'Improvement of listeners and slide move action to avoid (on mouse move) slide "flipping".'
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new keys: "paginationInside", "slideAfterMove", "data.dot".'
                        },
                        {
                            key: 'SliderCards',
                            value: 'Removed keys: "cardWidthS", "cardWidthL", "cardWidthXL".'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Improvement of listeners and slide move action to avoid (on mouse move) slide "flipping".'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new keys: "paginationInside", "dotsInside", "slideAfterMove", "data.dot".'
                        },
                    ]
                },
                '4.1.2': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Added new keys: "paginationType", "autoplay", "autoplayTime", "autoplayNext", "animationTime", "allowMouseTouch".'
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new keys: "buttonsAlwaysVisible", "paginationType", "autoplay", "autoplayTime", "autoplayNext", "animationTime", "allowMouseTouch".'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new keys: "paginationType", "autoplay", "autoplayTime", "autoplayNext", "animationTime", "allowMouseTouch".'
                        },
                    ]
                },
                '4.1.3': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Added new key: "inlineStyle".'
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new key: "inlineStyle".'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new key: "inlineStyle".'
                        },
                    ]
                },
                '4.1.4': {
                    data: [
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key: "scrolledToBottom".'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Fixed "Document listener" if the key scrollReference={false} and scrolledToBottom={true}.'
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added support for resolving data as array of Jsx elements. Currently the module expects single data as one single JSX element. Now if data is typeof JSX[], then this items rendered as single element.'
                        },
                    ]
                },
                '4.1.5': {
                    data: [
                        {
                            key: 'LoadOnScroll',
                            value: 'Bugfix JSX[] (fixed incoming data map function).'
                        },
                    ]
                },
                '4.1.6': {
                    data: [
                        {
                            key: 'SliderCards',
                            value: 'Added new keys: "itemsXS", "slideItemsXS".'
                        },
                        {
                            key: 'SliderCards',
                            value: 'Improved resize check.'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new keys: "itemsXS".'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Improved resize check.'
                        },
                    ]
                },
                '4.1.7': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Added new key: "useLayerX".'
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new key: "useLayerX".'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new key: "useLayerX".'
                        },
                    ]
                },
                '4.1.8': {
                    data: [
                        {
                            key: 'Steps',
                            value: 'Added new keys: "errorDataInside", "errorAlignTop", "liveGeneration", "data.callbackOnError", "data.callbackOnErrorProps", "data.liveGeneration".'
                        },
                    ]
                },
                '4.1.9': {
                    data: [
                        {
                            key: 'Steps',
                            value: 'Added new keys: "iconBg", "buttonsBg", "progressBgBlank", "progressBgStripe", "progressBgStripe".'
                        },
                    ]
                },
            }
        }
    }

    componentDidMount() {
        const { releases } = this.state;
        let dataFromUrl = window.location.href.split('/');
        dataFromUrl = dataFromUrl[dataFromUrl.length - 1];

        if (undefined !== releases[dataFromUrl]) {
            return this.setState({ loading: true }, () => {
                this.setState({
                    loading: false,
                    loaded: true,
                    lastUrl: window.location.href,
                    version: dataFromUrl,
                    data: releases[dataFromUrl].data
                });
            });
        }

        this.setState({
            lastUrl: window.location.href,
            loaded: true
        });
    }

    componentDidUpdate() {
        const { lastUrl } = this.state;

        if (lastUrl !== window.location.href) {
            this.componentDidMount();
        }
    }

    render() {
        const { version, loaded, data, loading } = this.state;

        return (
            <div className="Generator">
                {
                    loaded && !version && 'Requested release was not found.'
                }
                {
                    version && !loading &&
                    <span>
                        <h1 className="h1-example">
                            {
                                `${trans('releaseNotes')} - ${version}`
                            }
                        </h1>
                        <Table
                            addClass='rr-table-releases'
                            mediaBreak={1024}
                            title={[trans('releaseNotesKey'), trans('releaseNotesDescription'),]}
                            keysToRead={['key', 'value']}
                            data={data}
                        />
                    </span>
                }
            </div>
        );
    }
}

export default Releases;
