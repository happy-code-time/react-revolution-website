import React from 'react';
import trans from '../../Translations/trans';
import { Timeline } from '../../../react-revolution/react-revolution';

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
                            key: 'CardsScrollCallback - part 1',
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
                            key: 'CardsScrollCallback - part 2',
                            value: 'Added new keys: \n\npersistReject\nonReject\n',
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
                            value: 'Added new keys: \n\ntoggleForwards\ntoggleBackwards\n',
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
                            value: 'Added new keys: \n\ntoggleForwards\ntoggleBackwards\n',
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
                            key: 'LoadOnScroll - part 1',
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
                            key: 'LoadOnScroll - part 2',
                            value: 'Added new keys: \n\ncallbackProps\npersistReject\nonReject\nfireScrollEvent\nfireScrollBack\n',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'LoadOnScroll - part 3',
                            value: 'Added Promise.reject() support.',
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
                            key: 'Clipboard - part 1',
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
                            key: 'Clipboard - part 2',
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
                            key: 'CustomSuggestion - part 1',
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
                            key: 'CustomSuggestion - part 2',
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
                            value: 'Added new keys: \n\nheadData\nactiveClassName\ntoggledClassName\nisActiveTree\nforceClose\nforceCloseAll\nalign\nalignIcon\n',
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
                            key: 'Container - part 1',
                            value: 'Removed keys "persistUserSelection", "clearPersistUserSelection", "minify", "autopilot".',
                            icon: '☠'
                        },
                        {
                            key: 'Container - part 2',
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
                            key: 'Container - part 3',
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
                            key: 'Container - part 4',
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
                            key: 'Container - part 5',
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
                            key: 'Menu - part 1',
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
                            key: 'Menu - part 2',
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
                            key: 'Menu - part 3',
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
                            key: 'MenuHeight - part 1',
                            value: 'Fixed onClick event. Previously the onClick event was attached to all childs. Now the onClick event are attached, only if the element has nested childrens.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'MenuHeight - part 2',
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
                            key: 'MenuHeight - part 3',
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
                            key: 'Slider - part 1',
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
                            key: 'Slider - part 2',
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
                            key: 'SliderCards - part 1',
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
                            key: 'SliderCards - part 2',
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
                            key: 'SliderCards - part 3',
                            value: 'Removed keys: "cardWidthS", "cardWidthL", "cardWidthXL".',
                            icon: '☠'
                        },
                        {
                            key: 'SliderItems - part 1',
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
                            key: 'SliderItems - part 2',
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
                            key: 'LoadOnScroll - part 1',
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
                            key: 'LoadOnScroll - part 2',
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
                            key: 'LoadOnScroll - part 3',
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
                            key: 'SliderCards - part 1',
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
                            key: 'SliderCards - part 2',
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
                            key: 'SliderItems - part 1',
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
                            key: 'SliderItems - part 2',
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
                '5.0.2': {
                    data: [
                        {
                            key: 'SliderFullscreen',
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
                            key: 'Slider - part 1',
                            value: 'Added Fullscreen support.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Slider - part 2',
                            value: "Added new keys for the fullscreen support: \n\nfsActive\nfsDisplayPagination\nfsSlideAfterMove\nfsDisplayPreview\nfsPreviewWidth\nfsPreviewHeight\nfsPreviewMarginX\nfsPreviewMarginY\nfsPreviewToggle\nfsToggleDirection\nfsImageAsBackground\nfsWrapDirection\nfsCloseIcon\nfsUseLayerX\nfsAutoplayTime\nfsAutoplayIcon\nfsAutoplayNext\nfsAutoplayStopIcon\nfsAutoplayStopOnLast\nfsAnimationTime\nfsNext\nfsPrevious\nfsDisplayDots\nfsDisplayDotsIndex\nfsCloseOnEsc\n",
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
                '5.0.3': {
                    data: [
                        {
                            key: 'TimelineList',
                            value: 'Changed css property z-index from 10 to 2.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Ribbon',
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
                            key: 'RibbonMultiple',
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
                            key: 'New styles support',
                            value: `Added scss and css files to local module (inside the node_modules). 
\nImport the global css file: @import "react-revolution/css/react-revolution.css"
\nImport the global scss file: @import "react-revolution/scss/react-revolution.scss"
\nImport a single css (module) file, then import it: @import "react-revolution/css/<file-name>.css"
\nImport a single scss (module) file, then import it: @import "react-revolution/scss/<file-name>.scss"`,
                            icon: <i className="fas fa-exclamation-triangle"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                            dataProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            }
                        },
                        {
                            key: 'Styles support',
                            value: `Removed global style support. \n\nThe support of the key globalStyle={true} are no longer supported and has been removed from all modules.`,
                            icon: <i className="fas fa-exclamation-triangle"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                            dataProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            }
                        },
                    ]
                },
                '5.0.4': {
                    data: [
                        {
                            key: 'PopupHover',
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
                '5.0.5': {
                    data: [
                        {
                            key: 'Slider - part 1',
                            value: `Changed default value of the key: "inlineStyle" and "fsInlineStyle" to false.\nChanged default value of the key: "animationTime" and "fsAnimationTime" to '06'.\n`,
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Slider - part 2',
                            value: 'Added new keys \n\nonSlideTime\nfsOnSlideTime',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards - part 1',
                            value: `Changed default value of the key: "inlineStyle" to false.\nChanged default value of the key: "animationTime" to '06'.\n`,
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'SliderCards - part 2',
                            value: 'Added new key\n\nonSlideTime',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderCards - part 3',
                            value: 'Fixed bug on touch/mouse-move handler. Dont swap direction from first to the last and from last to the first card, even the swapDirection={true}. SwapDirection key supports only the previous and next button.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'SliderItems - part 1',
                            value: `Changed default value of the key: "inlineStyle" to false.\nChanged default value of the key: "animationTime" to '06'.\n`,
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'SliderItems - part 2',
                            value: 'Added new key\n\nonSlideTime',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'SliderFullscreen - part 1',
                            value: `Changed default value of the key: "inlineStyle" to false.\nChanged default value of the key: "animationTime" to '06'.\n`,
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'SliderFullscreen - part 2',
                            value: 'Added new key\n\nonSlideTime',
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
                '5.0.6': {
                    data: [
                        {
                            key: 'Slider',
                            value: 'Added new key\n\nstaticData',
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
                            value: 'Added new key\n\nstaticData',
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
                            value: 'Added new key\n\nstaticData',
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
                '5.0.7': {
                    data: [
                        {
                            key: 'Accordion - part 1',
                            value: 'Added new key\n\nanimationTimeout',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Accordion - part 2',
                            value: 'General script improvement special for the animation type "height" and added a <span> tag as holder for the text data to be able to make an animation for example: if an icon has been provided.',
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
                '5.0.8': {
                    data: [
                        {
                            key: 'Accordion',
                            value: 'Style improvement.',
                            icon: <i className="fab fa-css3"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                    ]
                },
                '5.0.9': {
                    data: [
                        {
                            key: 'Accordion',
                            value: 'Code improvement for outside click handler and for animation type "height" on single entries without nested data.',
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
                '5.0.10': {
                    data: [
                        {
                            key: 'Accordion',
                            value: 'Style improvement. The click event is suppressed when the animation is running.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'MenuHeight',
                            value: 'Style improvement. The click event is suppressed when the animation is running.',
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
                '5.0.11': {
                    data: [
                        {
                            key: 'Steps',
                            value: 'If the last step does not provide a callback function, only a submit function, then the submit function are called.',
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
                '5.0.12': {
                    data: [
                        {
                            key: 'StepsGenerator',
                            value: 'Added new keys:\n\nmaxSteps\nstepsData\nnewStepData\nmountCallback\nstepRemovedCallback',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'StepsGeneratorDragDrop',
                            value: 'Added new keys:\n\nmaxSteps\nstepsData\nnewStepData\nmountCallback\nstepRemovedCallback',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Slider',
                            value: 'Fixed "onSlideTime" that was attached to the slider by the onMouseDown event handler. Now if a click event happens on: dots, previous or next button the "onSlideTime" are ignored and the "animationTime" are applied.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'Slider - the fullscreen part',
                            value: 'Fixed "onSlideTime" that was attached to the slider by the onMouseDown event handler. Now if a click event happens on: dots, previous or next button the "onSlideTime" are ignored and the "animationTime" are applied.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'SliderCards',
                            value: 'Fixed "onSlideTime" that was attached to the slider by the onMouseDown event handler. Now if a click event happens on: dots, previous or next button the "onSlideTime" are ignored and the "animationTime" are applied.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'SliderFullscreen',
                            value: 'Fixed "onSlideTime" that was attached to the slider by the onMouseDown event handler. Now if a click event happens on: dots, previous or next button the "onSlideTime" are ignored and the "animationTime" are applied.',
                            icon: <i className="fas fa-bug"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'SliderItems',
                            value: 'Fixed "onSlideTime" that was attached to the slider by the onMouseDown event handler. Now if a click event happens on: dots, previous or next button the "onSlideTime" are ignored and the "animationTime" are applied.',
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
                '5.0.13': {
                    data: [
                        {
                            key: 'PopupHover',
                            value: 'Added new key:\n\nuseMouseEnter',
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
                '5.0.14': {
                    data: [
                        {
                            key: 'StepsGenerator',
                            value: 'Added new key:\n\ndata',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'StepsGeneratorDragDrop',
                            value: 'Added new key:\n\ndata',
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
                '5.1.0': {
                    data: [
                        {
                            key: 'Suggestions',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Pills',
                            value: 'New component',
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
                            value: 'Added new key:\n\nsingleLiHeight',
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
                            value: 'Added new key:\n\nsingleLiHeight',
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
                '5.1.1': {
                    data: [
                        {
                            key: 'Pills',
                            value: 'Added new key\n\nselected',
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
                '5.1.2': {
                    data: [
                        {
                            key: 'Pills',
                            value: 'Bugfix - back to live of killed in previous version multiple selection support.',
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
                '5.1.3': {
                    data: [
                        {
                            key: 'Pills',
                            value: 'Improvement of the multi-selection part.',
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
                '5.2.0': {
                    data: [
                        {
                            key: 'Boxes',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Carousel',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'ContainerPopup',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'ContainerSidebar',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'ImageBox',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'ImageCarousel',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'isArray',
                            value: 'New function',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'isInViewport',
                            value: 'New function',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'isObject',
                            value: 'New function',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'Container - code',
                            value: 'Code improvement.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Container - key',
                            value: 'Added new key: \n\nanimationDuration',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'ListSwitch',
                            value: 'Code improvement and removed the keys "resetSlides" and "resetData".',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'PopupHover',
                            value: 'Added outside click/ touch support.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Ribbon - code & style',
                            value: 'Code and style improvement.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Ribbon - key',
                            value: 'Added new key: \n\ntype',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'RibbonMultiple - code & style',
                            value: 'Code and style improvement.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'RibbonMultiple - key',
                            value: 'Added new key: \n\ntype',
                            icon: <i className="fas fa-key"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#ffc107'
                                }
                            },
                        },
                        {
                            key: 'Timeline',
                            value: 'Component has been removed.',
                            icon: <i className="fas fa-trash"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                        {
                            key: 'TimelineList',
                            value: '<TimelineList/> has been renamed to <Timeline/>. Timline root class name has been renamed from "rr-timeline-list" to "rr-timeline".',
                            icon: <i className="fas fa-trash"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: '#FF4459'
                                }
                            },
                        },
                    ]
                },
                '5.2.1': {
                    data: [
                        {
                            key: 'Container - code & style',
                            value: 'Code and style improvement.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'Container - keys',
                            value: 'Added new keys: \n\nsidebarWidth\nsidebarMinWidth',
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
                '5.2.2': {
                    data: [
                        {
                            key: 'FullScreenListArray',
                            value: 'Style improvement.',
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
                            value: 'Style improvement.',
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
                '5.2.3': {
                    data: [
                        {
                            key: 'StepsGenerator',
                            value: 'Code improvement to persist passed other keys (then "value") on each single object from the key data.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'StepsGeneratorDragDrop - code',
                            value: 'Code improvement to persist passed other keys (then "value") on each single object from the key data.',
                            icon: <i className="fas fa-tools"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgba(71,180,118,1)'
                                }
                            },
                        },
                        {
                            key: 'StepsGeneratorDragDrop - key',
                            value: 'Added new key: \n\ndragDrop.',
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
                '5.3.0': {
                    data: [
                        {
                            key: 'ImageBanner',
                            value: 'New component',
                            icon: <i className="fas fa-box"></i>,
                            iconProps: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    background: 'rgb(24,115,204)'
                                }
                            },
                        },
                        {
                            key: 'ImageBox',
                            value: 'Style improvement.',
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
                '5.4.0': {
                    data: [
                        {
                            key: 'ContainerCompact',
                            value: 'New component',
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
                    data: this.generateStructure(releases[dataFromUrl].data),
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
                        iconProps: o.iconProps ? o.iconProps : {},
                        data: o.value,
                        dataProps: o.dataProps ? o.dataProps : {},
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
                        <Timeline
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
