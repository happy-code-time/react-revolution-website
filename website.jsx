import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from './Website/Pages/Root';
import ScrollTop from './Website/Modules/ScrollTop';
import { Container, Astronaut404, MenuHeight, SideBar, InputSuggestionObject } from './react-revolution/react-revolution';
import { appNameShort, version } from './Website/Globals';
import trans from './Website/Translations/trans';
import possibleLanguagesLong from './Website/Functions/language/possibleLanguagesLong';
import setLanguage from './Website/Functions/language/setLanguage';
import possibleLayouts from './Website/Functions/possibleLayouts';
import getAllAvailableModulesNames from './Website/Functions/getAllAvailableModulesNames';
import getDataLocalStorage from './Website/Functions/getDataLocalStorage';
import setDataLocalStorage from './Website/Functions/setDataLocalStorage';

/**
 * React Revolution Modules
 */
import _Accordion from './Website/Pages/Accordion';
import _Articles from './Website/Pages/Articles';
import _ArticlesImages from './Website/Pages/ArticlesImages';
import _Astronaut404 from './Website/Pages/Astronaut404';
import _Breadcrumbs from './Website/Pages/Breadcrumbs';
import _Cards from './Website/Pages/Cards';
import _CardsScroll from './Website/Pages/CardsScroll';
import _CardsScrollCallback from './Website/Pages/CardsScrollCallback';
import _Clipboard from './Website/Pages/Clipboard';
import _Clouds404 from './Website/Pages/Clouds404';
import _CloudsMountains404 from './Website/Pages/CloudsMountains404';
import _Container from './Website/Pages/Container';
import _CustomSuggestion from './Website/Pages/CustomSuggestion';
import _DarkLines404 from './Website/Pages/DarkLines404';
import _DragDropArea from './Website/Pages/DragDropArea';
import _DragDropList from './Website/Pages/DragDropList';
import _FullScreenListArray from './Website/Pages/FullScreenListArray';
import _FullScreenListObject from './Website/Pages/FullScreenListObject';
import _FullScreenOverlay from './Website/Pages/FullScreenOverlay';
import _GlobalMessages from './Website/Pages/GlobalMessages';
import _Icons from './Website/Pages/Icons';
import _InputAnimation from './Website/Pages/InputAnimation';
import _InputFile from './Website/Pages/InputFile';
import _InputFileDragDrop from './Website/Pages/InputFileDragDrop';
import _InputSuggestionArray from './Website/Pages/InputSuggestionArray';
import _InputSuggestionObject from './Website/Pages/InputSuggestionObject';
import _Lightbulb404 from './Website/Pages/Lightbulb404';
import _LoadingBoxTop from './Website/Pages/LoadingBoxTop';
import _Menu from './Website/Pages/Menu';
import _MenuHeight from './Website/Pages/MenuHeight';
import _Modal from './Website/Pages/Modal';
import _PagerStatic from './Website/Pages/PagerStatic';
import _PagerDynamic from './Website/Pages/PagerDynamic';
import _Picture404 from './Website/Pages/Picture404';
import _PopupBox from './Website/Pages/PopupBox';
import _LoadOnScroll from './Website/Pages/LoadOnScroll';
import _ReadMore from './Website/Pages/ReadMore';
import _ReadMoreCallback from './Website/Pages/ReadMoreCallback';
import _ScrollTo from './Website/Pages/ScrollTo';
import _SourceCode from './Website/Pages/SourceCode';
import _Sidebar from './Website/Pages/Sidebar';
import _Slider from './Website/Pages/Slider';
import _SliderCards from './Website/Pages/SliderCards';
import _SliderItems from './Website/Pages/SliderItems';
import _Stars from './Website/Pages/Stars';
import _Steps from './Website/Pages/Steps';
import _Table from './Website/Pages/Table';
import _TextWriter from './Website/Pages/TextWriter';
import _Timeline from './Website/Pages/Timeline';
import _Water404 from './Website/Pages/Water404';

/**
 * React Revolution Functions
 */
import _FunctionAddGlobalMessage from './Website/Pages/FunctionAddGlobalMessage';
import _FunctionUuid from './Website/Pages/FunctionUuid';
import _FunctionDisableHtmlScroll from './Website/Pages/FunctionDisableHtmlScroll';
import _FunctionEnableHtmlScroll from './Website/Pages/FunctionEnableHtmlScroll';
import _FunctionScrollTopListener from './Website/Pages/FunctionScrollTopListener';
import _FunctionUrlExtract from './Website/Pages/FunctionUrlExtract';

/**
 * Releases
 */
import Releases from './Website/Pages/Releases/Releases';

class App extends React.Component 
{
  constructor(props) {
    super(props);
    this.setOnClickEvent = this.setOnClickEvent.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.toggleDashboardDirection = this.toggleDashboardDirection.bind(this);
    this.setLayout = this.setLayout.bind(this);
    this.setLanguage = this.setLanguage.bind(this);

    this.state = {
      host: ('dev' == process.env.MODE) ? process.env.HOST_DEV : process.env.HOST_PROD,
      suggestions: [],
      inputValue: '',
      align: getDataLocalStorage('ALIGN') && ['left', 'right'].includes(getDataLocalStorage('ALIGN')) ? getDataLocalStorage('ALIGN') : 'left',
    };

    this.href = window.location.href;
    this.locationCheck = '';
    this.scrollTop = false;
  }

  componentDidMount() {

    if ('' == window.location.hash || 'http:' == window.location.protocol && 'dev' !== process.env.MODE) {
      window.location.href = `${this.state.host}#/`;
    }

    this.setOnClickEvent();
    const layout = this.getLocalStorageValue('layout', 'light');
    this.setAppLayout(layout);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.checkLocation);
    clearInterval(this.locationCheck);
  }

  getLocalStorageValue(valueToGet, defaultValue) {
    let value = localStorage.getItem(valueToGet);

    if (null == value) {
      value = defaultValue;
    }

    return value;
  }

  /**
   * Check if the website using a react-router
   * and if the url changed then reload the protector functionalitty
   */
  setOnClickEvent() {
    document.removeEventListener('click', this.checkLocation);
    document.addEventListener('click', this.checkLocation);
    clearInterval(this.locationCheck);
  }

  /**
   * Check location, if the stored href are changed then
   * reload the security context of this extension
   * This feature needed for websites based on
   * react framework
   */
  checkLocation() {
    const self = this;
    let count = 5;
    clearInterval(x);

    var x = setInterval(() => {
      /**
       * If the current href changed
       */
      if (self.href !== window.location.href && count > 0) {
        document.documentElement.scrollTop = 0;
        self.href = window.location.href;
        return clearInterval(x);
      }

      if (!count) {
        return clearInterval(x);
      }

      count--;
    }, 100);
  }

  setLanguage(language = 'English') {
    if (setLanguage(language)) {
      window.location.reload();
    }
  }

  setLayout(layout) {

    if (!possibleLayouts.includes(layout)) {
      layout = 'light';
    }

    localStorage.setItem('layout', layout);
    this.setAppLayout(layout);
  }

  setAppLayout(layout) {
    const app = document.getElementById('app');

    if (!possibleLayouts.includes(layout)) {
      layout = 'light';
    }

    if (app) {
      app.removeAttribute('class');

      if (layout !== 'light') {
        app.setAttribute('class', layout);
      }
    }
  }

  getSuggestions() {
    const { host } = this.state;
    const allModules = getAllAvailableModulesNames();
    const suggestions = [];

    allModules.map(object => {
      suggestions.push(
        {
          href: `${host}#/${object.link}`,
          text: object.name,
          jsx: (
            <p className="text-elipsis">
              {
                object.name
              }
            </p>
          ),
          props: {
            title: trans('clickToNavToTheModule')
          }
        }
      );
    });

    suggestions.sort();
    return suggestions;
  }

  callbackSelection(selection) {
    if (selection && selection[0] && selection[0].href) {

      if (window.location.href == selection[0].href) {
        return window.location.reload();
      }

      window.location.href = selection[0].href;
      document.documentElement.click();
    }
  }

  /**
   * Change sidebar direction
   */
  toggleDashboardDirection() {
    const { align } = this.state;

    if ('left' == align) {
      setDataLocalStorage('ALIGN', 'right');
      return this.setState({ align: 'right' });
    }

    setDataLocalStorage('ALIGN', 'left');
    return this.setState({ align: 'left' });
  }

  generateLayoutsMenu() {
    const data = [];

    possibleLayouts.map(name => {
      data.push(
        {
          text: (
            <span className="ellipsis">
              {
                trans(`${name}Theme`)
              }
            </span>
          ),
          callback: this.setLayout,
          callbackProps: name
        }
      );
    })

    return data;
  }

  getFunctionsMenu() {
    const { host } = this.state;

    return [
      'addGlobalMessage',
      'disableHtmlScroll',
      'enableHtmlScroll',
      'scrollTopListener',
      'urlExtract',
      'uuid',
    ].map(fnName => {
      return {
        text: fnName,
        href: `${host}#/functions/${fnName}`,
      }
    })
  }

  generateLanguagesMenu() {
    const data = [];

    possibleLanguagesLong.map(language => {
      data.push(
        {
          text: (
            <span>
              {
                language
              }
            </span>
          ),
          callback: this.setLanguage,
          callbackProps: language
        }
      );
    });

    return data;
  }

  generateReleasesMenu() {
    const menu = [];

    [
      {
        version: '4.2',
        start: 0,
        end: 0
      },
      {
        version: '4.1',
        start: 0,
        end: 9
      },
      {
        version: '4.0',
        start: 0,
        end: 9
      },
      {
        version: '3.0',
        start: 0,
        end: 6
      },
      {
        version: '2.0',
        start: 0,
        end: 0
      },
      {
        version: '1.2',
        start: 0,
        end: 0
      },
      {
        version: '1.1',
        start: 7,
        end: 9
      },
    ].map(v => {
      menu.push(
        {
          text: (
            <span>
              <span className="data-title">
                {
                  `Releases ${v.version}`
                }
              </span>
              <span className="drop-down-icon">
                <i className='fas fa-angle-down'></i>
              </span>
            </span>
          ),
          data: this.generateReleases(v.version, v.start, v.end)
        }
      )
    });

    return menu;
  }

  generateReleases(version, start, end) {
    const { host } = this.state;
    const links = [];

    for (let x = end; x >= start; x--) {
      links.push(
        {
          text: `${version}.${x}`,
          href: `${host}#/releases/${version}.${x}`,
        }
      )
    }

    return links;
  }

  render() {
    const { host, inputValue, align } = this.state;

    return (
      <Container
        id="rr-container"
        globalStyle={true}
        minifyAt={1024}
        maxifyAt={720}
        hideAt={420}
        minifySidebarOn={
          [
            '#/'
          ]
        }
        displayMinifyMaxifyIcon={true}
        toggleMenuHtml={<i className="fas fa-bars"></i>}
        closeMenuHtml={<i className="fas fa-angle-left"></i>}
        align={align}
        headerDataRight={true}
        moduleSidebar={
          <SideBar
            // image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong={appNameShort}
            textShort={`v${version}`}
            href={`${host}#/`}
            globalStyle={true} // load css for react-revolution globally
            moduleMenu={
              <MenuHeight
                reactRouter={false}
                align={align}
                alignIcon='left'
                isActiveTree={-1}
                activeClassName='is-active'
                toggledClassName='is-toggled'
                animation='height'
                data={
                  [
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('components'),
                      toggled: false,
                      data: [
                        {
                          text: 'Accordion',
                          href: `${host}#/components/accordion`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Articles
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Articles',
                              href: `${host}#/components/articles`,
                            },
                            {
                              text: 'ArticlesImages',
                              href: `${host}#/components/articles-images`,
                            },
                          ]
                        },
                        {
                          text: 'Breadcrumbs',
                          href: `${host}#/components/breadcrumbs`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Cards
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Cards',
                              href: `${host}#/components/cards`,
                            },
                            {
                              text: 'CardsScroll',
                              href: `${host}#/components/cards-scroll`,
                            },
                            {
                              text: 'CardsScrollCallback',
                              href: `${host}#/components/cards-scroll-callback`,
                            },
                          ]
                        },
                        {
                          text: 'Clipboard',
                          href: `${host}#/components/clipboard`,
                        },
                        {
                          text: 'Container',
                          href: `${host}#/components/container`,
                        },
                        {
                          text: 'CustomSuggestion',
                          href: `${host}#/components/custom-suggestion`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                DragDrop
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'DragDropArea',
                              href: `${host}#/components/drag-drop-area`,
                            },
                            {
                              text: 'DragDropList',
                              href: `${host}#/components/drag-drop-list`,
                            }
                          ]
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                FullScreen
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'FullScreenListArray',
                              href: `${host}#/components/fullscreen-list-array`,
                            },
                            {
                              text: 'FullScreenListObject',
                              href: `${host}#/components/fullscreen-list-object`,
                            },
                            {
                              text: 'FullScreenOverlay',
                              href: `${host}#/components/fullscreen-overlay`,
                            }
                          ]
                        },
                        {
                          text: 'GlobalMessages',
                          href: `${host}#/components/global-messages`,
                        },
                        {
                          text: 'Icons',
                          href: `${host}#/components/icons`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Input
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'InputAnimation',
                              href: `${host}#/components/input-animation`,
                            },
                            {
                              text: 'InputFile',
                              href: `${host}#/components/input-file`,
                            },
                            {
                              text: 'InputFileDragDrop',
                              href: `${host}#/components/input-file-drag-drop`,
                            },
                            {
                              text: 'InputSuggestionArray',
                              href: `${host}#/components/input-suggestion-array`,
                            },
                            {
                              text: 'InputSuggestionObject',
                              href: `${host}#/components/input-suggestion-object`,
                            },
                          ]
                        },
                        {
                          text: 'LoadingBoxTop',
                          href: `${host}#/components/loading-box-top`,
                        },
                        {
                          text: 'LoadOnScroll',
                          href: `${host}#/components/load-on-scroll`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Menu
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Menu',
                              href: `${host}#/components/menu`,
                            },
                            {
                              text: 'MenuHeight',
                              href: `${host}#/components/menu-height`,
                            },
                          ]
                        },
                        {
                          text: 'Modal',
                          href: `${host}#/components/modal`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                404
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Astronaut404',
                              href: `${host}#/components/astronaut-404`,
                            },
                            {
                              text: 'Clouds404',
                              href: `${host}#/components/clouds-404`,
                            },
                            {
                              text: 'CloudsMountains404',
                              href: `${host}#/components/clouds-mountains-404`,
                            },
                            {
                              text: 'DarkLines404',
                              href: `${host}#/components/dark-lines-404`,
                            },
                            {
                              text: 'Lightbulb404',
                              href: `${host}#/components/lightbulb-404`,
                            },
                            {
                              text: 'Picture404',
                              href: `${host}#/components/picture-404`,
                            },
                            {
                              text: 'Water404',
                              href: `${host}#/components/water-404`,
                            },
                          ]
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Pagination
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'PagerStatic',
                              href: `${host}#/components/pager-static`,
                            },
                            {
                              text: 'PagerDynamic',
                              href: `${host}#/components/pager-dynamic`,
                            },
                          ]
                        },
                        {
                          text: 'PopupBox',
                          href: `${host}#/components/popup-box`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                ReadMore
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'ReadMore',
                              href: `${host}#/components/read-more`,
                            },
                            {
                              text: 'ReadMoreCallback',
                              href: `${host}#/components/read-more-callback`,
                            }
                          ],
                        },
                        {
                          text: 'ScrollTo',
                          href: `${host}#/components/scroll-to`,
                        },
                        {
                          text: 'SideBar',
                          href: `${host}#/components/sidebar`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Sliders
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Slider',
                              href: `${host}#/components/slider`,
                            },
                            {
                              text: 'SliderCards',
                              href: `${host}#/components/slider-cards`,
                            },
                            {
                              text: 'SliderItems',
                              href: `${host}#/components/slider-items`,
                            }
                          ]
                        },
                        {
                          text: 'SourceCode',
                          href: `${host}#/components/source-code`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Suggestions
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'CustomSuggestion',
                              href: `${host}#/components/custom-suggestion`,
                            },
                            {
                              text: 'InputSuggestionArray',
                              href: `${host}#/components/input-suggestion-array`,
                            },
                            {
                              text: 'InputSuggestionObject',
                              href: `${host}#/components/input-suggestion-object`,
                            },
                          ]
                        },
                        {
                          text: 'Stars',
                          href: `${host}#/components/stars`,
                        },
                        {
                          text: 'Steps',
                          href: `${host}#/components/steps`,
                        },
                        {
                          text: 'Table',
                          href: `${host}#/components/table`,
                        },
                        {
                          text: 'TextWriter',
                          href: `${host}#/components/text-writer`,
                        },
                        {
                          text: 'Timeline',
                          href: `${host}#/components/timeline`,
                        },
                      ]
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('functions'),
                      toggled: false,
                      data: this.getFunctionsMenu()
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('releaseNotes'),
                      toggled: false,
                      data: this.generateReleasesMenu()
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('changeLanguageTitle'),
                      toggled: false,
                      data: this.generateLanguagesMenu()
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('changeTintTitle'),
                      toggled: false,
                      data: this.generateLayoutsMenu()
                    },
                  ]
                }
              />
            }
          />
        }
        headerClassName={''}
        headerData={
          <span className="icon-container">
            <i
              className='fas fa-stream icon-dashbord toggle-dashboard minify-menu'
              onClick={() => this.toggleDashboardDirection()}
            ></i>
            <span className="component-search">
              <InputSuggestionObject
                addClass='rr-custom-suggestion-website'
                inputPlaceholder={`${trans('searchForModule')}`}
                suggestions={this.getSuggestions()}
                callbackSelection={this.callbackSelection}
                value={inputValue}
                searchSensitive={false}
                applySelected={false}
                type='text'
                emptySuggestionAfterSelection={true}
              />
            </span>
          </span>
        }
        contentData={
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => (<Root {...props} />)} />
              {/* Components */}
              <Route exact path="/components/accordion" render={(props) => (<_Accordion {...props} />)} />
              <Route exact path="/components/articles" render={(props) => (<_Articles {...props} />)} />
              <Route exact path="/components/articles-images" render={(props) => (<_ArticlesImages {...props} />)} />
              <Route exact path="/components/astronaut-404" render={(props) => (<_Astronaut404 {...props} />)} />
              <Route exact path="/components/breadcrumbs" render={(props) => (<_Breadcrumbs {...props} />)} />
              <Route exact path="/components/cards" render={(props) => (<_Cards {...props} />)} />
              <Route exact path="/components/cards-scroll" render={(props) => (<_CardsScroll {...props} />)} />
              <Route exact path="/components/cards-scroll-callback" render={(props) => (<_CardsScrollCallback {...props} />)} />
              <Route exact path="/components/clipboard" render={(props) => (<_Clipboard {...props} />)} />
              <Route exact path="/components/clouds-404" render={(props) => (<_Clouds404 {...props} />)} />
              <Route exact path="/components/clouds-mountains-404" render={(props) => (<_CloudsMountains404 {...props} />)} />
              <Route exact path="/components/container" render={(props) => (<_Container {...props} />)} />
              <Route exact path="/components/custom-suggestion" render={(props) => (<_CustomSuggestion {...props} />)} />
              <Route exact path="/components/dark-lines-404" render={(props) => (<_DarkLines404 {...props} />)} />
              <Route exact path="/components/drag-drop-area" render={(props) => (<_DragDropArea {...props} />)} />
              <Route exact path="/components/drag-drop-list" render={(props) => (<_DragDropList {...props} />)} />
              <Route exact path="/components/fullscreen-list-array" render={(props) => (<_FullScreenListArray {...props} />)} />
              <Route exact path="/components/fullscreen-list-object" render={(props) => (<_FullScreenListObject {...props} />)} />
              <Route exact path="/components/fullscreen-overlay" render={(props) => (<_FullScreenOverlay {...props} />)} />
              <Route exact path="/components/global-messages" render={(props) => (<_GlobalMessages {...props} />)} />
              <Route exact path="/components/icons" render={(props) => (<_Icons {...props} />)} />
              <Route exact path="/components/input-animation" render={(props) => (<_InputAnimation {...props} />)} />
              <Route exact path="/components/input-file" render={(props) => (<_InputFile {...props} />)} />
              <Route exact path="/components/input-file-drag-drop" render={(props) => (<_InputFileDragDrop {...props} />)} />
              <Route exact path="/components/input-suggestion-array" render={(props) => (<_InputSuggestionArray {...props} />)} />
              <Route exact path="/components/input-suggestion-object" render={(props) => (<_InputSuggestionObject {...props} />)} />
              <Route exact path="/components/loading-box-top" render={(props) => (<_LoadingBoxTop {...props} />)} />
              <Route exact path="/components/menu" render={(props) => (<_Menu {...props} />)} />
              <Route exact path="/components/menu-height" render={(props) => (<_MenuHeight {...props} />)} />
              <Route exact path="/components/modal" render={(props) => (<_Modal {...props} />)} />
              <Route exact path="/components/pager-static" render={(props) => (<_PagerStatic {...props} />)} />
              <Route exact path="/components/pager-dynamic" render={(props) => (<_PagerDynamic {...props} />)} />
              <Route exact path="/components/popup-box" render={(props) => (<_PopupBox {...props} />)} />
              <Route exact path="/components/load-on-scroll" render={(props) => (<_LoadOnScroll {...props} />)} />
              <Route exact path="/components/lightbulb-404" render={(props) => (<_Lightbulb404 {...props} />)} />
              <Route exact path="/components/timeline" render={(props) => (<_Timeline {...props} />)} />
              <Route exact path="/components/read-more" render={(props) => (<_ReadMore {...props} />)} />
              <Route exact path="/components/read-more-callback" render={(props) => (<_ReadMoreCallback {...props} />)} />
              <Route exact path="/components/sidebar" render={(props) => (<_Sidebar {...props} />)} />
              <Route exact path="/components/slider" render={(props) => (<_Slider {...props} />)} />
              <Route exact path="/components/slider-cards" render={(props) => (<_SliderCards {...props} />)} />
              <Route exact path="/components/slider-items" render={(props) => (<_SliderItems {...props} />)} />
              <Route exact path="/components/scroll-to" render={(props) => (<_ScrollTo {...props} />)} />
              <Route exact path="/components/source-code" render={(props) => (<_SourceCode {...props} />)} />
              <Route exact path="/components/stars" render={(props) => (<_Stars {...props} />)} />
              <Route exact path="/components/steps" render={(props) => (<_Steps {...props} />)} />
              <Route exact path="/components/table" render={(props) => (<_Table {...props} />)} />
              <Route exact path="/components/text-writer" render={(props) => (<_TextWriter {...props} />)} />
              <Route exact path="/components/picture-404" render={(props) => (<_Picture404 {...props} />)} />
              <Route exact path="/components/water-404" render={(props) => (<_Water404 {...props} />)} />
              {/* Functions */}
              <Route exact path="/functions/addGlobalMessage" render={(props) => (<_FunctionAddGlobalMessage {...props} />)} />
              <Route exact path="/functions/uuid" render={(props) => (<_FunctionUuid {...props} />)} />
              <Route exact path="/functions/disableHtmlScroll" render={(props) => (<_FunctionDisableHtmlScroll {...props} />)} />
              <Route exact path="/functions/enableHtmlScroll" render={(props) => (<_FunctionEnableHtmlScroll {...props} />)} />
              <Route exact path="/functions/scrollTopListener" render={(props) => (<_FunctionScrollTopListener {...props} />)} />
              <Route exact path="/functions/urlExtract" render={(props) => (<_FunctionUrlExtract {...props} />)} />
              {/* Releases */}
              <Route exact path="/releases/:release" render={(props) => (<Releases {...props} />)} />
              {/* 404 */}
              <Route
                render={(props) => (
                  <Astronaut404
                    addClass='page-not-found-404'
                    link={
                      {
                        reactRouter: true,
                        text: trans('back_404'),
                        href: '/'
                      }
                    }
                    {...props}
                  />
                )}
              />
            </Switch>
          </Router>
        }
        footerData={<ScrollTop />}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
