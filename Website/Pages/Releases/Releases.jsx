import React from 'react';
import trans from '../../Translations/trans';
import { TimelineList } from '../../../react-revolution/react-revolution';

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
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'ArticlesImages',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        }
                    ]
                },
                '1.1.8': {
                    data: [
                        {
                            key: 'ReadMore',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'ReadMoreCallback',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        }
                    ]
                },
                '1.1.9': {
                    data: [
                        {
                            key: 'Modal',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'CardsScrollCallback',
                            value: 'Added Promise.reject() support.',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'CardsScrollCallback',
                            value: 'Added new key "persistReject".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'CardsScrollCallback',
                            value: 'Added new key "onReject".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Articles',
                            value: 'Added new keys "toggleForwards".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Articles',
                            value: 'Added new keys "toggleBackwards".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'ArticlesImages',
                            value: 'Added new key "toggleForwards".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'ArticlesImages',
                            value: 'Added new key "toggleBackwards".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '1.2.0': {
                    data: [
                        {
                            key: 'LoadOnScroll',
                            value: 'Renamed key from "loadMoreLoadingIcon" to "loading".',
                            icon: <i className="far fa-edit"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(248, 165, 27)'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "callbackProps".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added Promise.reject() support.',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "persistReject".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "onReject".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "fireScrollEvent".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key "fireScrollBack".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '2.0.0': {
                    data: [
                        {
                            key: 'Timeline',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'DarkLines404',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Clipboard',
                            value: 'Bugfix of the callback function.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'Clipboard',
                            value: 'Added new key "callbackProps".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Modules import',
                            value: 'Added functionality to import each single module from the library as: import <ModuleName> from "/react-revolution/public/<ModuleName>".',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Modules style',
                            value: 'Fixed bug to load style for each single module.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                    ]
                },
                '3.0.0': {
                    data: [
                        {
                            key: 'DragDropArea',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'DragDropList',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Modules import',
                            value: 'Added functionality to import each single module from the library as: import <ModuleName> from "/react-revolution/<ModuleName>".',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                    ]
                },
                '3.0.1': {
                    data: [
                        {
                            key: 'DragDropArea',
                            value: 'Changed areas HTML structure.',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                    ]
                },
                '3.0.2': {
                    data: [
                        {
                            key: 'package.json',
                            value: 'Fixed wrong dependencies versions.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        }
                    ]
                },
                '3.0.3': {
                    data: [
                        {
                            key: 'package.json',
                            value: 'Fixed wrong dependencies versions.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        }
                    ]
                },
                '3.0.4': {
                    data: [
                        {
                            key: 'Stars',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'CustomSuggestion',
                            value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'CustomSuggestion',
                            value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '3.0.5': {
                    data: [
                        {
                            key: 'MenuClickHorizontal',
                            value: 'Renamed component from "MenuClickHorizontal" to "Menu".',
                            icon: <i className="far fa-edit"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(248, 165, 27)'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "headData".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "activeClassName".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "toggledClassName".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "isActiveTree".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "forceClose".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "forceCloseAll".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "align".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added new key "alignIcon".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Container',
                            value: 'Added new key "align".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '3.0.6': {
                    data: [
                        {
                            key: 'addGlobalMessage',
                            value: 'Added new key "clearStack".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
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
                            value: 'Added new key "persistCurrentMessage".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
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
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                    ]
                },
                '4.0.3': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Removed keys "persistUserSelection", "clearPersistUserSelection", "minify", "autopilot".',
                            icon: '☠'
                        },
                        {
                            key: 'Container',
                            value: 'Renamed key from "minify" to "minifyAt".',
                            icon: <i className="far fa-edit"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(248, 165, 27)'
                                }
                            },
                        },
                        {
                            key: 'Container',
                            value: 'Renamed key from "maxify" to "maxifyAt".',
                            icon: <i className="far fa-edit"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(248, 165, 27)'
                                }
                            },
                        },
                        {
                            key: 'Container',
                            value: 'Added new key "hideAt".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Container',
                            value: 'Added new key "minifySidebarOn".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.0.4': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Removed background color on css file for the Sidebar.',
                            icon: '☠'
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
                            value: 'Added JSX support for the keys "textLong" and "textShort".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.0.6': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Added new key "headerDataRight".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.0.7': {
                    data: [
                        {
                            key: 'Container',
                            value: 'Added support for "url change detection".',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                    ]
                },
                '4.0.8': {
                    data: [
                        {
                            key: 'Astronaut404',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Picture404',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                    ]
                },
                '4.0.9': {
                    data: [
                        {
                            key: 'InputFileDragDrop',
                            value: 'Added arguments: name, size, type to the custom callback function and moved the attribute "id" from input tag to the main HTML root HTML node.',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Moved the attribute "id" from input tag to the main HTML root HTML node.',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Moved the attribute "id" from input tag to the main HTML root HTML node.',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'InputFile',
                            value: 'Moved the attribute "id" from input tag to the main HTML root HTML node.',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Container',
                            value: 'Fixed sidebar flash. No more sidebar flash on initial Container loading while the key="minifySidebarOn" are not empty.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                    ]
                },
                '4.1.0': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Steps',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Fixed onClick event. Previously the onClick event was attached to all childs. Now the onClick event are attached, only if the element has nested childrens.',
                            icon: <i className='fas fa-bug'></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Fixed tag generation from <a> to <div> if the key "href" are not passed to the single menu entry, this means href is undefined, null or other then typeof "string".',
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'Menu',
                            value: 'Added to data tree new keys: callback, callbackProps, externalLink.',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'MenuHeight',
                            value: 'Fixed onClick event. Previously the onClick event was attached to all childs. Now the onClick event are attached, only if the element has nested childrens.',
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'MenuHeight',
                            value: 'Added to data tree new keys: callback, callbackProps, externalLink.',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'MenuHeight',
                            value: 'Fixed tag generation from <a> to <div> if the key "href" are not passed to the single menu entry, this means href is undefined, null or other then typeof "string".',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionArray',
                            value: 'Added new key "applySelected".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'InputSuggestionObject',
                            value: 'Added new key "applySelected".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },

                    ]
                },
                '4.1.1': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Improvement of listeners and slide move action to avoid (on mouse move) slide "flipping".',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Slider',
                            value: 'Added new keys: "paginationInside", "dotsInside", "slideAfterMove", "data.dot".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Improvement of listeners and slide move action to avoid (on mouse move) slide "flipping".',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new keys: "paginationInside", "slideAfterMove", "data.dot".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Removed keys: "cardWidthS", "cardWidthL", "cardWidthXL".',
                            icon: '☠'
                        },
                        {
                            key: 'SliderItems',
                            value: 'Improvement of listeners and slide move action to avoid (on mouse move) slide "flipping".',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new keys: "paginationInside", "dotsInside", "slideAfterMove", "data.dot".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.1.2': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Added new keys: "paginationType", "autoplay", "autoplayTime", "autoplayNext", "animationTime", "allowMouseTouch".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new keys: "buttonsAlwaysVisible", "paginationType", "autoplay", "autoplayTime", "autoplayNext", "animationTime", "allowMouseTouch".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new keys: "paginationType", "autoplay", "autoplayTime", "autoplayNext", "animationTime", "allowMouseTouch".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.1.3': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Added new key: "inlineStyle".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new key: "inlineStyle".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new key: "inlineStyle".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.1.4': {
                    data: [
                        {
                            key: 'LoadOnScroll',
                            value: 'Added new key: "scrolledToBottom".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Fixed "Document listener" if the key scrollReference={false} and scrolledToBottom={true}.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll',
                            value: 'Added support for resolving data as array of Jsx elements. Currently the module expects single data as one single JSX element. Now if data is typeof JSX[], then this items rendered as single element.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                    ]
                },
                '4.1.5': {
                    data: [
                        {
                            key: 'LoadOnScroll',
                            value: 'Bugfix JSX[] (fixed incoming data map function).',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                    ]
                },
                '4.1.6': {
                    data: [
                        {
                            key: 'SliderCards',
                            value: 'Added new keys: "itemsXS", "slideItemsXS".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Improved resize check.',
                            icon: <i className="fas fa-wrench"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new keys: "itemsXS".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'Improved resize check.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                    ]
                },
                '4.1.7': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Added new key: "useLayerX".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Added new key: "useLayerX".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'Added new key: "useLayerX".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.1.8': {
                    data: [
                        {
                            key: 'Steps',
                            value: 'Added new keys: "errorDataInside", "errorAlignTop", "liveGeneration", "data.callbackOnError", "data.callbackOnErrorProps", "data.liveGeneration".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.1.9': {
                    data: [
                        {
                            key: 'Steps',
                            value: 'Added new keys: "iconBg", "buttonsBg", "progressBgBlank", "progressBgStripe", "progressBgStripe".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '4.2.0': {
                    data: [
                        {
                            key: 'Steps',
                            value: 'Added new key: "data.liveGenerationProps".',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                    ]
                },
                '5.0.0': {
                    data: [
                        {
                            key: 'Overlay',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'PopupData',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Steps',
                            value: 'Bugfix for the last step navigation.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                    ]
                },
                '5.0.1': {
                    data: [
                        {
                            key: 'ListSwitch',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'MenuDropDown',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'MenuHoverX',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'MenuHoverY',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'StepsGenerator',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'StepsGeneratorDragDrop',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'TimelineList',
                            value: 'New component.',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'PopupData',
                            value: "Added new keys: 'closeOnEsc', 'closeOnOutsideClick' - to support (deactivation) on ESC press and mouse outside click handler.",
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'FullScreenListArray',
                            value: "Improvement of the 'Escape' keypress listener.",
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'FullScreenListObject',
                            value: "Improvement of the 'Escape' keypress listener.",
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'FullScreenOverlay',
                            value: "Improvement of the 'Escape' keypress listener.",
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Overlay',
                            value: "Improvement of the 'Escape' keypress listener.",
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'PopupData',
                            value: "Improvement of the 'Escape' keypress listener.",
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Steps',
                            value: 'Bugfix of typo (typeofliveGeneration => typeof liveGeneration) error.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
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
                    data: this.generateStructure(releases[dataFromUrl].data)
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

    generateStructure(data) {
        const s = {};

        data.map(o => {
            s[o.key] = {
                data: [
                    {
                        icon: o.icon ? o.icon : '🖲',
                        data: o.value,
                        iconProps: o.iconProps ? o.iconProps : {}
                    }
                ]
            }
        });

        return s;
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
                        <TimelineList
                            timelineStart='🕛'
                            timelineEnd='🕣'
                            data={data}
                        />
                    </span>
                }
            </div>
        );
    }
}

export default Releases;
