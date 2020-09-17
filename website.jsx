import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import Home from './Website/Pages/Home';

import WebsiteContainer from './Website/Modules/WebsiteContainer';

import ScrollTop from './Website/Modules/ScrollTop';

import { scrollTopListener, MenuClickHorizontal, SideBar, PopupBox, uuid, CustomSuggestion } from './react-revolution';

import { appNameShort, version } from './Website/Globals';

import trans from './Website/Translations/trans';

import possibleLanguagesLong from './Website/Functions/language/possibleLanguagesLong';

import setLanguage from './Website/Functions/language/setLanguage';

import possibleLayouts from './Website/Functions/possibleLayouts';

import getAllAvailableModulesNames from './Website/Functions/getAllAvailableModulesNames';

import './Website/Scss/index.scss';

/**
 * React Revolution Modules
 */
import ReactRevolutionAccordion from './Website/Pages/ReactRevolutionAccordion';

import ReactRevolutionBreadcrumbs from './Website/Pages/ReactRevolutionBreadcrumbs';

import ReactRevolutionCards from './Website/Pages/ReactRevolutionCards';

import ReactRevolutionCardsScroll from './Website/Pages/ReactRevolutionCardsScroll';

import ReactRevolutionCardsScrollCallback from './Website/Pages/ReactRevolutionCardsScrollCallback';

import ReactRevolutionClipboard from './Website/Pages/ReactRevolutionClipboard';

import ReactRevolutionClouds404 from './Website/Pages/ReactRevolutionClouds404';

import ReactRevolutionCloudsMountains404 from './Website/Pages/ReactRevolutionCloudsMountains404';

import ReactRevolutionContainer from './Website/Pages/ReactRevolutionContainer';

import ReactRevolutionCustomSuggestion from './Website/Pages/ReactRevolutionCustomSuggestion';

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

import ReactRevolutionMenuClickHorizontal from './Website/Pages/ReactRevolutionMenuClickHorizontal';

import ReactRevolutionPagerStatic from './Website/Pages/ReactRevolutionPagerStatic';

import ReactRevolutionPagerDynamic from './Website/Pages/ReactRevolutionPagerDynamic';

import ReactRevolutionPopupBox from './Website/Pages/ReactRevolutionPopupBox';

import ReactRevolutionLoadOnScroll from './Website/Pages/ReactRevolutionLoadOnScroll';

import ReactRevolutionScrollTo from './Website/Pages/ReactRevolutionScrollTo';

import ReactRevolutionSourceCode from './Website/Pages/ReactRevolutionSourceCode';

import ReactRevolutionSidebar from './Website/Pages/ReactRevolutionSidebar';

import ReactRevolutionTable from './Website/Pages/ReactRevolutionTable';

import ReactRevolutionTextWriter from './Website/Pages/ReactRevolutionTextWriter';

import ReactRevolutionWater404 from './Website/Pages/ReactRevolutionWater404';

/**
 * React Revolution Functions
 */
import ReactRevolutionFunctionUuid from './Website/Pages/ReactRevolutionFunctionUuid';

import ReactRevolutionFunctionDisableHtmlScroll from './Website/Pages/ReactRevolutionFunctionDisableHtmlScroll';

import ReactRevolutionFunctionEnableHtmlScroll from './Website/Pages/ReactRevolutionFunctionEnableHtmlScroll';

import ReactRevolutionFunctionScrollTopListener from './Website/Pages/ReactRevolutionFunctionScrollTopListener';

import ReactRevolutionFunctionUrlExtract from './Website/Pages/ReactRevolutionFunctionUrlExtract';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.setOnClickEvent = this.setOnClickEvent.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.changeSidebarMinifiedState = this.changeSidebarMinifiedState.bind(this);
    this.searchForModule = this.searchForModule.bind(this);

    this.state = {
      minifySidebard: '#/' == window.location.hash ? true : false,
      host: process.env.HOST,
      suggestions: [],
      inputValue: '',
    };

    this.href = window.location.href;
    this.locationCheck = '';
    this.scrollTop = false;
  }

  componentDidMount() {

    if ('' == window.location.hash || 'http:' == window.location.protocol && process.env.HOST == 'https://react-revolution.j.pl/') {
      window.location.href = `${this.state.host}#/`;
    }

    scrollTopListener(0);
    this.setOnClickEvent();
    this.changeSidebarMinifiedState();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.checkLocation);
    clearInterval(this.locationCheck);
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
        self.href = window.location.href;
        self.changeSidebarMinifiedState();
        return clearInterval(x);
      }

      if (!count) {
        return clearInterval(x);
      }

      count--;
    }, 100);
  }

  changeSidebarMinifiedState() {
    const { minifySidebard } = this.state;
    const hash = window.location.hash;

    if ('#/' == hash && !minifySidebard) {
      return this.setState({
        minifySidebard: true
      });
    }

    if ('#/' !== hash && minifySidebard) {
      this.setState({ minifySidebard: false });
    }
  }

  setLanguage(language = 'English') {
    setLanguage(language);
    window.location.reload();
  }

  setLayout(layout) {
    if (!possibleLayouts.includes(layout)) {
      layout = 'light';
    }

    localStorage.setItem('layout', layout);
  }

  searchForModule(inputValue) {

    if (!inputValue) {
      inputValue = '';
    }

    const { host } = this.state;
    const allModules = getAllAvailableModulesNames();
    const suggestions = [];

    allModules.map(object => {
      if (-1 !== object.name.toLowerCase().indexOf(inputValue.toLowerCase())) {
        suggestions.push(
          {
            href: `${host}#/${object.link}`,
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
      }
    });

    suggestions.sort();
    return suggestions;
  }

  render() {
    const { minifySidebard, host, suggestions, inputValue } = this.state;

    return (
      <WebsiteContainer
        persistUserSelection={false} // set local sotrage on click
        clearPersistUserSelection={true} // do not remove the local storage on component did mount
        sidebarMinifiedAt={1024}
        ignoreMinify={true} // ignore to render the small (60px width menu on resize)
        sidebarMaxifiedAt={1024}
        displayMinifyMaxifyIcon={true}
        minify={minifySidebard}
        moduleSidebar={
          <SideBar
            image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong={appNameShort}
            textShort={`v${version}`}
            href={`${host}#/`}
            globalStyle={true} // load css for react-revolution globally
            moduleMenu={
              <MenuClickHorizontal
                reactRouter={false}
                animation='height'
                dropDown={
                  (
                    <i className="fas fa-angle-down dropDownIcon"></i>
                  )
                }
                data={
                  [
                    {
                      text: trans('components'),
                      toggled: true,
                      data: [
                        {
                          text: 'Accordion',
                          href: `${host}#/react-revolution-accordion`,
                        },
                        {
                          text: 'Breadcrumbs',
                          href: `${host}#/react-revolution-breadcrumbs`,
                        },
                        {
                          text: 'Cards',
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
                          text: 'FullScreen',
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
                          text: 'Input',
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
                            }
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
                          text: 'MenuClickHorizontal',
                          href: `${host}#/react-revolution-menu-click-horizontal`,
                        },
                        {
                          text: 'NotFound',
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
                          text: 'Pagination',
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
                          text: 'Table',
                          href: `${host}#/react-revolution-table`,
                        },
                        {
                          text: 'TextWriter',
                          href: `${host}#/react-revolution-text-writer`,
                        },
                      ]
                    },
                    {
                      text: trans('functions'),
                      toggled: true,
                      data: [
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
                  ]
                }
              />
            }
          />
        }
        headerClassName={''}
        headerData={
          <span className="icon-container">
            <PopupBox
              defaultClass={false}
              id={false}
              animationTime={300}
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
              defaultClass={false}
              id={false}
              animationTime={300}
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
                  <ul>
                    <li className="ellipsis" key={uuid()} onClick={() => this.setLayout('light')}>
                      {
                        trans('lightTheme')
                      }
                    </li>
                    <li className="ellipsis" key={uuid()} onClick={() => this.setLayout('dark')}>
                      {
                        trans('darkTheme')
                      }
                    </li>
                  </ul>
                </span>
              }
            />
            <PopupBox
              defaultClass={false}
              id={false}
              animationTime={300}
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
                  <CustomSuggestion
                    inputPlaceholder={`${trans('searchForModule')}`}
                    suggestions={suggestions}
                    callback={this.searchForModule}
                    callbackRerender={true}
                    value={inputValue}
                    inputProps={{}}
                    type='text'
                  />
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
              <Route exact path="/react-revolution-breadcrumbs" render={(props) => (<ReactRevolutionBreadcrumbs {...props} />)} />
              <Route exact path="/react-revolution-cards" render={(props) => (<ReactRevolutionCards {...props} />)} />
              <Route exact path="/react-revolution-cards-scroll" render={(props) => (<ReactRevolutionCardsScroll {...props} />)} />
              <Route exact path="/react-revolution-cards-scroll-callback" render={(props) => (<ReactRevolutionCardsScrollCallback {...props} />)} />
              <Route exact path="/react-revolution-clipboard" render={(props) => (<ReactRevolutionClipboard {...props} />)} />
              <Route exact path="/react-revolution-clouds-404" render={(props) => (<ReactRevolutionClouds404 {...props} />)} />
              <Route exact path="/react-revolution-clouds-mountains-404" render={(props) => (<ReactRevolutionCloudsMountains404 {...props} />)} />
              <Route exact path="/react-revolution-container" render={(props) => (<ReactRevolutionContainer {...props} />)} />
              <Route exact path="/react-revolution-custom-suggestion" render={(props) => (<ReactRevolutionCustomSuggestion {...props} />)} />
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
              <Route exact path="/react-revolution-menu-click-horizontal" render={(props) => (<ReactRevolutionMenuClickHorizontal {...props} />)} />
              <Route exact path="/react-revolution-pager-static" render={(props) => (<ReactRevolutionPagerStatic {...props} />)} />
              <Route exact path="/react-revolution-pager-dynamic" render={(props) => (<ReactRevolutionPagerDynamic {...props} />)} />
              <Route exact path="/react-revolution-popup-box" render={(props) => (<ReactRevolutionPopupBox {...props} />)} />
              <Route exact path="/react-revolution-load-on-scroll" render={(props) => (<ReactRevolutionLoadOnScroll {...props} />)} />
              <Route exact path="/react-revolution-lightbulb-404" render={(props) => (<ReactRevolutionLightbulb404 {...props} />)} />
              <Route exact path="/react-revolution-sidebar" render={(props) => (<ReactRevolutionSidebar {...props} />)} />
              <Route exact path="/react-revolution-text-writer" render={(props) => (<ReactRevolutionTextWriter {...props} />)} />
              <Route exact path="/react-revolution-table" render={(props) => (<ReactRevolutionTable {...props} />)} />
              <Route exact path="/react-revolution-scroll-to" render={(props) => (<ReactRevolutionScrollTo {...props} />)} />
              <Route exact path="/react-revolution-source-code" render={(props) => (<ReactRevolutionSourceCode {...props} />)} />
              <Route exact path="/react-revolution-water-404" render={(props) => (<ReactRevolutionWater404 {...props} />)} />
              {/* Functions */}
              <Route exact path="/react-revolution-function-uuid" render={(props) => (<ReactRevolutionFunctionUuid {...props} />)} />
              <Route exact path="/react-revolution-function-disable-html-scroll" render={(props) => (<ReactRevolutionFunctionDisableHtmlScroll {...props} />)} />
              <Route exact path="/react-revolution-function-enable-html-scroll" render={(props) => (<ReactRevolutionFunctionEnableHtmlScroll {...props} />)} />
              <Route exact path="/react-revolution-function-scroll-top-listener" render={(props) => (<ReactRevolutionFunctionScrollTopListener {...props} />)} />
              <Route exact path="/react-revolution-function-url-extract" render={(props) => (<ReactRevolutionFunctionUrlExtract {...props} />)} />
            </Switch>
          </Router>
        }
        footerData={<ScrollTop />}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
