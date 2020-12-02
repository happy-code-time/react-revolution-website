import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Website/Pages/Home';
import ScrollTop from './Website/Modules/ScrollTop';
import { uuid, Container, CloudsMountains404, MenuHeight, SideBar, PopupBox, InputSuggestionObject } from './react-revolution/react-revolution';
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
import ReactRevolutionAccordion from './Website/Pages/ReactRevolutionAccordion';
import ReactRevolutionArticles from './Website/Pages/ReactRevolutionArticles';
import ReactRevolutionArticlesImages from './Website/Pages/ReactRevolutionArticlesImages';
import ReactRevolutionBreadcrumbs from './Website/Pages/ReactRevolutionBreadcrumbs';
import ReactRevolutionCards from './Website/Pages/ReactRevolutionCards';
import ReactRevolutionCardsScroll from './Website/Pages/ReactRevolutionCardsScroll';
import ReactRevolutionCardsScrollCallback from './Website/Pages/ReactRevolutionCardsScrollCallback';
import ReactRevolutionClipboard from './Website/Pages/ReactRevolutionClipboard';
import ReactRevolutionClouds404 from './Website/Pages/ReactRevolutionClouds404';
import ReactRevolutionCloudsMountains404 from './Website/Pages/ReactRevolutionCloudsMountains404';
import ReactRevolutionContainer from './Website/Pages/ReactRevolutionContainer';
import ReactRevolutionCustomSuggestion from './Website/Pages/ReactRevolutionCustomSuggestion';
import ReactRevolutionDarkLines404 from './Website/Pages/ReactRevolutionDarkLines404';
import ReactRevolutionDragDropArea from './Website/Pages/ReactRevolutionDragDropArea';
import ReactRevolutionDragDropList from './Website/Pages/ReactRevolutionDragDropList';
import ReactRevolutionFullScreenListArray from './Website/Pages/ReactRevolutionFullScreenListArray';
import ReactRevolutionFullScreenListObject from './Website/Pages/ReactRevolutionFullScreenListObject';
import ReactRevolutionFullScreenOverlay from './Website/Pages/ReactRevolutionFullScreenOverlay';
import ReactRevolutionGlobalMessages from './Website/Pages/ReactRevolutionGlobalMessages';
import ReactRevolutionIcons from './Website/Pages/ReactRevolutionIcons';
import ReactRevolutionInputAnimation from './Website/Pages/ReactRevolutionInputAnimation';
import ReactRevolutionInputFile from './Website/Pages/ReactRevolutionInputFile';
import ReactRevolutionInputFileDragDrop from './Website/Pages/ReactRevolutionInputFileDragDrop';
import ReactRevolutionInputSuggestionArray from './Website/Pages/ReactRevolutionInputSuggestionArray';
import ReactRevolutionInputSuggestionObject from './Website/Pages/ReactRevolutionInputSuggestionObject';
import ReactRevolutionLightbulb404 from './Website/Pages/ReactRevolutionLightbulb404';
import ReactRevolutionLoadingBoxTop from './Website/Pages/ReactRevolutionLoadingBoxTop';
import ReactRevolutionMenu from './Website/Pages/ReactRevolutionMenu';
import ReactRevolutionMenuHeight from './Website/Pages/ReactRevolutionMenuHeight';
import ReactRevolutionModal from './Website/Pages/ReactRevolutionModal';
import ReactRevolutionPagerStatic from './Website/Pages/ReactRevolutionPagerStatic';
import ReactRevolutionPagerDynamic from './Website/Pages/ReactRevolutionPagerDynamic';
import ReactRevolutionPopupBox from './Website/Pages/ReactRevolutionPopupBox';
import ReactRevolutionLoadOnScroll from './Website/Pages/ReactRevolutionLoadOnScroll';
import ReactRevolutionReadMore from './Website/Pages/ReactRevolutionReadMore';
import ReactRevolutionReadMoreCallback from './Website/Pages/ReactRevolutionReadMoreCallback';
import ReactRevolutionScrollTo from './Website/Pages/ReactRevolutionScrollTo';
import ReactRevolutionSourceCode from './Website/Pages/ReactRevolutionSourceCode';
import ReactRevolutionSidebar from './Website/Pages/ReactRevolutionSidebar';
import ReactRevolutionStars from './Website/Pages/ReactRevolutionStars';
import ReactRevolutionTable from './Website/Pages/ReactRevolutionTable';
import ReactRevolutionTextWriter from './Website/Pages/ReactRevolutionTextWriter';
import ReactRevolutionTimeline from './Website/Pages/ReactRevolutionTimeline';
import ReactRevolutionWater404 from './Website/Pages/ReactRevolutionWater404';

/**
 * React Revolution Functions
 */
import ReactRevolutionFunctionAddGlobalMessage from './Website/Pages/ReactRevolutionFunctionAddGlobalMessage';
import ReactRevolutionFunctionUuid from './Website/Pages/ReactRevolutionFunctionUuid';
import ReactRevolutionFunctionDisableHtmlScroll from './Website/Pages/ReactRevolutionFunctionDisableHtmlScroll';
import ReactRevolutionFunctionEnableHtmlScroll from './Website/Pages/ReactRevolutionFunctionEnableHtmlScroll';
import ReactRevolutionFunctionScrollTopListener from './Website/Pages/ReactRevolutionFunctionScrollTopListener';
import ReactRevolutionFunctionUrlExtract from './Website/Pages/ReactRevolutionFunctionUrlExtract';

/**
 * Releases
 */
import Release117 from './Website/Releases/Release117';
import Release118 from './Website/Releases/Release118';
import Release119 from './Website/Releases/Release119';
import Release120 from './Website/Releases/Release120';
import Release200 from './Website/Releases/Release200';
import Release300 from './Website/Releases/Release300';
import Release301 from './Website/Releases/Release301';
import Release302 from './Website/Releases/Release302';
import Release303 from './Website/Releases/Release303';
import Release304 from './Website/Releases/Release304';
import Release305 from './Website/Releases/Release305';
import Release306 from './Website/Releases/Release306';
import Release400 from './Website/Releases/Release400';
import Release401 from './Website/Releases/Release401';
import Release402 from './Website/Releases/Release402';
import Release403 from './Website/Releases/Release403';
import Release404 from './Website/Releases/Release404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.setOnClickEvent = this.setOnClickEvent.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.toggleDashboardDirection = this.toggleDashboardDirection.bind(this);

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

  generateLayouts() {
    const items = [];

    possibleLayouts.map(name => {
      items.push(
        <li className="ellipsis" key={uuid()} onClick={() => this.setLayout(name)}>
          {
            trans(`${name}Theme`)
          }
        </li>
      );
    })

    return (
      <ul>
        {
          items
        }
      </ul>
    );
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
                      toggled: true,
                      data: [
                        {
                          text: 'Accordion',
                          href: `${host}#/react-revolution-accordion`,
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
                              href: `${host}#/react-revolution-articles`,
                            },
                            {
                              text: 'ArticlesImages',
                              href: `${host}#/react-revolution-articles-images`,
                            },
                          ]
                        },
                        {
                          text: 'Breadcrumbs',
                          href: `${host}#/react-revolution-breadcrumbs`,
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
                              href: `${host}#/react-revolution-cards`,
                            },
                            {
                              text: 'CardsScroll',
                              href: `${host}#/react-revolution-cards-scroll`,
                            },
                            {
                              text: 'CardsScrollCallback',
                              href: `${host}#/react-revolution-cards-scroll-callback`,
                            },
                          ]
                        },
                        {
                          text: 'Clipboard',
                          href: `${host}#/react-revolution-clipboard`,
                        },
                        {
                          text: 'Container',
                          href: `${host}#/react-revolution-container`,
                        },
                        {
                          text: 'CustomSuggestion',
                          href: `${host}#/react-revolution-custom-suggestion`,
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
                              href: `${host}#/react-revolution-drag-drop-area`,
                            },
                            {
                              text: 'DragDropList',
                              href: `${host}#/react-revolution-drag-drop-list`,
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
                              href: `${host}#/react-revolution-fullscreen-list-array`,
                            },
                            {
                              text: 'FullScreenListObject',
                              href: `${host}#/react-revolution-fullscreen-list-object`,
                            },
                            {
                              text: 'FullScreenOverlay',
                              href: `${host}#/react-revolution-fullscreen-overlay`,
                            }
                          ]
                        },
                        {
                          text: 'GlobalMessages',
                          href: `${host}#/react-revolution-global-messages`,
                        },
                        {
                          text: 'Icons',
                          href: `${host}#/react-revolution-icons`,
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
                              href: `${host}#/react-revolution-input-animation`,
                            },
                            {
                              text: 'InputFile',
                              href: `${host}#/react-revolution-input-file`,
                            },
                            {
                              text: 'InputFileDragDrop',
                              href: `${host}#/react-revolution-input-file-drag-drop`,
                            },
                            {
                              text: 'InputSuggestionArray',
                              href: `${host}#/react-revolution-input-suggestion-array`,
                            },
                            {
                              text: 'InputSuggestionObject',
                              href: `${host}#/react-revolution-input-suggestion-object`,
                            },
                          ]
                        },
                        {
                          text: 'LoadingBoxTop',
                          href: `${host}#/react-revolution-loading-box-top`,
                        },
                        {
                          text: 'LoadOnScroll',
                          href: `${host}#/react-revolution-load-on-scroll`,
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
                              href: `${host}#/react-revolution-menu`,
                            },
                            {
                              text: 'MenuHeight',
                              href: `${host}#/react-revolution-menu-height`,
                            },
                          ]
                        },
                        {
                          text: 'Modal',
                          href: `${host}#/react-revolution-modal`,
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
                              text: 'Clouds404',
                              href: `${host}#/react-revolution-clouds-404`,
                            },
                            {
                              text: 'CloudsMountains404',
                              href: `${host}#/react-revolution-clouds-mountains-404`,
                            },
                            {
                              text: 'DarkLines404',
                              href: `${host}#/react-revolution-dark-lines-404`,
                            },
                            {
                              text: 'Water404',
                              href: `${host}#/react-revolution-water-404`,
                            },
                            {
                              text: 'Lightbulb404',
                              href: `${host}#/react-revolution-lightbulb-404`,
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
                              href: `${host}#/react-revolution-pager-static`,
                            },
                            {
                              text: 'PagerDynamic',
                              href: `${host}#/react-revolution-pager-dynamic`,
                            },
                          ]
                        },
                        {
                          text: 'PopupBox',
                          href: `${host}#/react-revolution-popup-box`,
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
                              href: `${host}#/react-revolution-read-more`,
                            },
                            {
                              text: 'ReadMoreCallback',
                              href: `${host}#/react-revolution-read-more-callback`,
                            }
                          ],
                        },
                        {
                          text: 'ScrollTo',
                          href: `${host}#/react-revolution-scroll-to`,
                        },
                        {
                          text: 'SideBar',
                          href: `${host}#/react-revolution-sidebar`,
                        },
                        {
                          text: 'SourceCode',
                          href: `${host}#/react-revolution-source-code`,
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
                              href: `${host}#/react-revolution-custom-suggestion`,
                            },
                            {
                              text: 'InputSuggestionArray',
                              href: `${host}#/react-revolution-input-suggestion-array`,
                            },
                            {
                              text: 'InputSuggestionObject',
                              href: `${host}#/react-revolution-input-suggestion-object`,
                            },
                          ]
                        },
                        {
                          text: 'Stars',
                          href: `${host}#/react-revolution-stars`,
                        },
                        {
                          text: 'Table',
                          href: `${host}#/react-revolution-table`,
                        },
                        {
                          text: 'TextWriter',
                          href: `${host}#/react-revolution-text-writer`,
                        },
                        {
                          text: 'Timeline',
                          href: `${host}#/react-revolution-timeline`,
                        },
                      ]
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('functions'),
                      toggled: true,
                      data: [
                        {
                          text: 'addGlobalMessage',
                          href: `${host}#/react-revolution-function-add-global-message`,
                        },
                        {
                          text: 'disableHtmlScroll',
                          href: `${host}#/react-revolution-function-disable-html-scroll`,
                        },
                        {
                          text: 'enableHtmlScroll',
                          href: `${host}#/react-revolution-function-enable-html-scroll`,
                        },
                        {
                          text: 'scrollTopListener',
                          href: `${host}#/react-revolution-function-scroll-top-listener`,
                        },
                        {
                          text: 'urlExtract',
                          href: `${host}#/react-revolution-function-url-extract`,
                        },
                        {
                          text: 'uuid',
                          href: `${host}#/react-revolution-function-uuid`,
                        },
                      ]
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('releaseNotes'),
                      toggled: true,
                      data: [
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Releases 4.0
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: '4.0.4',
                              href: `${host}#/react-revolution-release-4-0-4`,
                            },
                            {
                              text: '4.0.3',
                              href: `${host}#/react-revolution-release-4-0-3`,
                            },
                            {
                              text: '4.0.2',
                              href: `${host}#/react-revolution-release-4-0-2`,
                            },
                            {
                              text: '4.0.1',
                              href: `${host}#/react-revolution-release-4-0-1`,
                            },
                            {
                              text: '4.0.0',
                              href: `${host}#/react-revolution-release-4-0-0`,
                            },
                          ]
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Releases 3.0
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: '3.0.6',
                              href: `${host}#/react-revolution-release-3-0-6`,
                            },
                            {
                              text: '3.0.5',
                              href: `${host}#/react-revolution-release-3-0-5`,
                            },
                            {
                              text: '3.0.4',
                              href: `${host}#/react-revolution-release-3-0-4`,
                            },
                            {
                              text: '3.0.3',
                              href: `${host}#/react-revolution-release-3-0-3`,
                            },
                            {
                              text: '3.0.2',
                              href: `${host}#/react-revolution-release-3-0-2`,
                            },
                            {
                              text: '3.0.1',
                              href: `${host}#/react-revolution-release-3-0-1`,
                            },
                            {
                              text: '3.0.0',
                              href: `${host}#/react-revolution-release-3-0-0`,
                            },
                          ]
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Releases 2.0
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: '2.0.0',
                              href: `${host}#/react-revolution-release-2-0-0`,
                            },
                          ]
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Releases 1.0
                                </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: '1.2.0',
                              href: `${host}#/react-revolution-release-1-2-0`,
                            },
                            {
                              text: '1.1.9',
                              href: `${host}#/react-revolution-release-1-1-9`,
                            },
                            {
                              text: '1.1.8',
                              href: `${host}#/react-revolution-release-1-1-8`,
                            },
                            {
                              text: '1.1.7',
                              href: `${host}#/react-revolution-release-1-1-7`,
                            },
                          ]
                        },
                      ]
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
              className='fas fa-stream icon-dashbord toggle-dashboard'
              onClick={() => this.toggleDashboardDirection()}
            ></i>
            <PopupBox
              animation='top-right' // top-left, top-right, bottom-left, bottom-right
              icon={
                <i className='fas fa-globe-europe popup-box-icon'></i>
              }
              data={
                <span>
                  <h1 className="ellipsis">
                    <i className='fas fa-globe-europe' />
                    {
                      trans('changeLanguageTitle')
                    }
                  </h1>
                  <ul>
                    {
                      possibleLanguagesLong.map(language => {
                        return (
                          <li className="ellipsis" key={uuid()} onClick={() => this.setLanguage(language)}>
                            {
                              language
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                </span>
              }
            />
            <PopupBox
              animation='top-right' // top-left, top-right, bottom-left, bottom-right
              icon={
                <i className='fas fa-tint popup-box-icon'></i>
              }
              data={
                <span>
                  <h1 className="ellipsis">
                    <i className='fas fa-tint' />
                    {
                      trans('changeTintTitle')
                    }
                  </h1>
                  {
                    this.generateLayouts()
                  }
                </span>
              }
            />
            <PopupBox
              animation='top-right' // top-left, top-right, bottom-left, bottom-right
              icon={
                <i className='fas fa-search popup-box-icon'></i>
              }
              data={
                <span>
                  <h1 className="ellipsis">
                    <i className='fas fa-search' />
                    {
                      trans('searchForModule')
                    }
                  </h1>
                  <InputSuggestionObject
                    addClass='rr-custom-suggestion-website'
                    inputPlaceholder={`${trans('searchForModule')}`}
                    suggestions={this.getSuggestions()}
                    callbackSelection={this.callbackSelection}
                    callbackRerender={true}
                    value={inputValue}
                    searchSensitive={false}
                    type='text'
                  />
                </span>
              }
            />
            <PopupBox
              addClass='rr-popupbox-fast-links'
              animation='top-left' // top-left, top-right, bottom-left, bottom-right
              icon={
                <i className='fas fa-directions popup-box-icon'></i>
              }
              data={
                <span>
                  <h1 className="ellipsis">
                    <i className='fas fa-directions' />
                    {
                      trans('fastActions')
                    }
                  </h1>
                  <a className="link" href={`${host}#/react-revolution-accordion`}>
                    {
                      trans('getStarted')
                    }
                  </a>
                  <a className="link" target='_blank' href='https://github.com/janitzed/react-revolution'>
                    Github
                  </a>
                  <a className="link" target='_blank' href='http://dj.j.pl/'>
                    David Janitzek
                  </a>
                </span>
              }
            />
          </span>
        }
        contentData={
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => (<Home {...props} />)} />
              {/* Components */}
              <Route exact path="/react-revolution-accordion" render={(props) => (<ReactRevolutionAccordion {...props} />)} />
              <Route exact path="/react-revolution-articles" render={(props) => (<ReactRevolutionArticles {...props} />)} />
              <Route exact path="/react-revolution-articles-images" render={(props) => (<ReactRevolutionArticlesImages {...props} />)} />
              <Route exact path="/react-revolution-breadcrumbs" render={(props) => (<ReactRevolutionBreadcrumbs {...props} />)} />
              <Route exact path="/react-revolution-cards" render={(props) => (<ReactRevolutionCards {...props} />)} />
              <Route exact path="/react-revolution-cards-scroll" render={(props) => (<ReactRevolutionCardsScroll {...props} />)} />
              <Route exact path="/react-revolution-cards-scroll-callback" render={(props) => (<ReactRevolutionCardsScrollCallback {...props} />)} />
              <Route exact path="/react-revolution-clipboard" render={(props) => (<ReactRevolutionClipboard {...props} />)} />
              <Route exact path="/react-revolution-clouds-404" render={(props) => (<ReactRevolutionClouds404 {...props} />)} />
              <Route exact path="/react-revolution-clouds-mountains-404" render={(props) => (<ReactRevolutionCloudsMountains404 {...props} />)} />
              <Route exact path="/react-revolution-container" render={(props) => (<ReactRevolutionContainer {...props} />)} />
              <Route exact path="/react-revolution-custom-suggestion" render={(props) => (<ReactRevolutionCustomSuggestion {...props} />)} />
              <Route exact path="/react-revolution-dark-lines-404" render={(props) => (<ReactRevolutionDarkLines404 {...props} />)} />
              <Route exact path="/react-revolution-drag-drop-area" render={(props) => (<ReactRevolutionDragDropArea {...props} />)} />
              <Route exact path="/react-revolution-drag-drop-list" render={(props) => (<ReactRevolutionDragDropList {...props} />)} />
              <Route exact path="/react-revolution-fullscreen-list-array" render={(props) => (<ReactRevolutionFullScreenListArray {...props} />)} />
              <Route exact path="/react-revolution-fullscreen-list-object" render={(props) => (<ReactRevolutionFullScreenListObject {...props} />)} />
              <Route exact path="/react-revolution-fullscreen-overlay" render={(props) => (<ReactRevolutionFullScreenOverlay {...props} />)} />
              <Route exact path="/react-revolution-global-messages" render={(props) => (<ReactRevolutionGlobalMessages {...props} />)} />
              <Route exact path="/react-revolution-icons" render={(props) => (<ReactRevolutionIcons {...props} />)} />
              <Route exact path="/react-revolution-input-animation" render={(props) => (<ReactRevolutionInputAnimation {...props} />)} />
              <Route exact path="/react-revolution-input-file" render={(props) => (<ReactRevolutionInputFile {...props} />)} />
              <Route exact path="/react-revolution-input-file-drag-drop" render={(props) => (<ReactRevolutionInputFileDragDrop {...props} />)} />
              <Route exact path="/react-revolution-input-suggestion-array" render={(props) => (<ReactRevolutionInputSuggestionArray {...props} />)} />
              <Route exact path="/react-revolution-input-suggestion-object" render={(props) => (<ReactRevolutionInputSuggestionObject {...props} />)} />
              <Route exact path="/react-revolution-loading-box-top" render={(props) => (<ReactRevolutionLoadingBoxTop {...props} />)} />
              <Route exact path="/react-revolution-menu" render={(props) => (<ReactRevolutionMenu {...props} />)} />
              <Route exact path="/react-revolution-menu-height" render={(props) => (<ReactRevolutionMenuHeight {...props} />)} />
              <Route exact path="/react-revolution-modal" render={(props) => (<ReactRevolutionModal {...props} />)} />
              <Route exact path="/react-revolution-pager-static" render={(props) => (<ReactRevolutionPagerStatic {...props} />)} />
              <Route exact path="/react-revolution-pager-dynamic" render={(props) => (<ReactRevolutionPagerDynamic {...props} />)} />
              <Route exact path="/react-revolution-popup-box" render={(props) => (<ReactRevolutionPopupBox {...props} />)} />
              <Route exact path="/react-revolution-load-on-scroll" render={(props) => (<ReactRevolutionLoadOnScroll {...props} />)} />
              <Route exact path="/react-revolution-lightbulb-404" render={(props) => (<ReactRevolutionLightbulb404 {...props} />)} />
              <Route exact path="/react-revolution-table" render={(props) => (<ReactRevolutionTable {...props} />)} />
              <Route exact path="/react-revolution-text-writer" render={(props) => (<ReactRevolutionTextWriter {...props} />)} />
              <Route exact path="/react-revolution-timeline" render={(props) => (<ReactRevolutionTimeline {...props} />)} />
              <Route exact path="/react-revolution-read-more" render={(props) => (<ReactRevolutionReadMore {...props} />)} />
              <Route exact path="/react-revolution-read-more-callback" render={(props) => (<ReactRevolutionReadMoreCallback {...props} />)} />
              <Route exact path="/react-revolution-sidebar" render={(props) => (<ReactRevolutionSidebar {...props} />)} />
              <Route exact path="/react-revolution-scroll-to" render={(props) => (<ReactRevolutionScrollTo {...props} />)} />
              <Route exact path="/react-revolution-source-code" render={(props) => (<ReactRevolutionSourceCode {...props} />)} />
              <Route exact path="/react-revolution-stars" render={(props) => (<ReactRevolutionStars {...props} />)} />
              <Route exact path="/react-revolution-water-404" render={(props) => (<ReactRevolutionWater404 {...props} />)} />
              {/* Functions */}
              <Route exact path="/react-revolution-function-add-global-message" render={(props) => (<ReactRevolutionFunctionAddGlobalMessage {...props} />)} />
              <Route exact path="/react-revolution-function-uuid" render={(props) => (<ReactRevolutionFunctionUuid {...props} />)} />
              <Route exact path="/react-revolution-function-disable-html-scroll" render={(props) => (<ReactRevolutionFunctionDisableHtmlScroll {...props} />)} />
              <Route exact path="/react-revolution-function-enable-html-scroll" render={(props) => (<ReactRevolutionFunctionEnableHtmlScroll {...props} />)} />
              <Route exact path="/react-revolution-function-scroll-top-listener" render={(props) => (<ReactRevolutionFunctionScrollTopListener {...props} />)} />
              <Route exact path="/react-revolution-function-url-extract" render={(props) => (<ReactRevolutionFunctionUrlExtract {...props} />)} />
              {/* Releases */}
              <Route exact path="/react-revolution-release-1-1-7" render={(props) => (<Release117 {...props} />)} />
              <Route exact path="/react-revolution-release-1-1-8" render={(props) => (<Release118 {...props} />)} />
              <Route exact path="/react-revolution-release-1-1-9" render={(props) => (<Release119 {...props} />)} />
              <Route exact path="/react-revolution-release-1-2-0" render={(props) => (<Release120 {...props} />)} />
              <Route exact path="/react-revolution-release-2-0-0" render={(props) => (<Release200 {...props} />)} />
              <Route exact path="/react-revolution-release-3-0-0" render={(props) => (<Release300 {...props} />)} />
              <Route exact path="/react-revolution-release-3-0-1" render={(props) => (<Release301 {...props} />)} />
              <Route exact path="/react-revolution-release-3-0-2" render={(props) => (<Release302 {...props} />)} />
              <Route exact path="/react-revolution-release-3-0-3" render={(props) => (<Release303 {...props} />)} />
              <Route exact path="/react-revolution-release-3-0-4" render={(props) => (<Release304 {...props} />)} />
              <Route exact path="/react-revolution-release-3-0-5" render={(props) => (<Release305 {...props} />)} />
              <Route exact path="/react-revolution-release-3-0-6" render={(props) => (<Release306 {...props} />)} />
              <Route exact path="/react-revolution-release-4-0-0" render={(props) => (<Release400 {...props} />)} />
              <Route exact path="/react-revolution-release-4-0-1" render={(props) => (<Release401 {...props} />)} />
              <Route exact path="/react-revolution-release-4-0-2" render={(props) => (<Release402 {...props} />)} />
              <Route exact path="/react-revolution-release-4-0-3" render={(props) => (<Release403 {...props} />)} />
              <Route exact path="/react-revolution-release-4-0-4" render={(props) => (<Release404 {...props} />)} />
              {/* 404 */}
              <Route
                render={(props) => (
                  <CloudsMountains404
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
