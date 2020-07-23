import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import Home from './Website/Pages/Home';

import WebsiteContainer from './Website/Modules/WebsiteContainer';

import { scrollTopListener, MenuClickHorizontal, SideBar, PopupBox, uuid, CustomSuggestion } from './react-revolution/public/react-revolution';

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
import ReactRevolutionAccordion from './Website/Pages/Modules/ReactRevolutionAccordion';

import ReactRevolutionCards from './Website/Pages/Modules/ReactRevolutionCards';

import ReactRevolutionCardsScroll from './Website/Pages/Modules/ReactRevolutionCardsScroll';

import ReactRevolutionCardsScrollCallback from './Website/Pages/Modules/ReactRevolutionCardsScrollCallback';

import ReactRevolutionClipboard from './Website/Pages/Modules/ReactRevolutionClipboard';

import ReactRevolutionCustomSuggestion from './Website/Pages/Modules/ReactRevolutionCustomSuggestion';

import ReactRevolutionFullScreenListArray from './Website/Pages/Modules/ReactRevolutionFullScreenListArray';

import ReactRevolutionFullScreenListObject from './Website/Pages/Modules/ReactRevolutionFullScreenListObject';

import ReactRevolutionFullScreenOverlay from './Website/Pages/Modules/ReactRevolutionFullScreenOverlay';

import ReactRevolutionGlobalMessages from './Website/Pages/Modules/ReactRevolutionGlobalMessages';

import ReactRevolutionIcons from './Website/Pages/Modules/ReactRevolutionIcons';

import ReactRevolutionInputAnimation from './Website/Pages/Modules/ReactRevolutionInputAnimation';

import ReactRevolutionInputFile from './Website/Pages/Modules/ReactRevolutionInputFile';

import ReactRevolutionInputFileDragDrop from './Website/Pages/Modules/ReactRevolutionInputFileDragDrop';

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
      inputValue: ''
    };

    this.href = window.location.href;
  }

  componentDidMount() {
    scrollTopListener(300);
    this.setOnClickEvent();
    this.changeSidebarMinifiedState();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.checkLocation);
  }

  /**
 * Check if the website using a react-router
 * and if the url changed then reload the protector functionalitty
 */
  setOnClickEvent() {
    document.removeEventListener('click', this.checkLocation);
    document.addEventListener('click', this.checkLocation);
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
      return this.setState({ minifySidebard: true });
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
    const { host } = this.state;
    const allModules = getAllAvailableModulesNames();
    const suggestions = [];

    allModules.map(i => {
      if (-1 !== i.toLowerCase().indexOf(inputValue.toLowerCase())) {
        suggestions.push(
          {
            href: `${host}#/${i}`,
            jsx: (
              <p>
                {
                  i
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
        sidebarMinifiedAt={720}
        sidebarMaxifiedAt={1024}
        displayMinifyMaxifyIcon={true}
        minify={minifySidebard}
        moduleSidebar={
          <SideBar
            image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong={appNameShort}
            textShort={`v${version}`}
            href={`${host}`}
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
                      text: 'Accordion',
                      href: `${host}#/react-revolution-accordion`,
                    },
                    {
                      text: 'Breadcrumbs',
                      href: `${host}#/breadcrumbs`,
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
                          text: 'InputSuggestion',
                          href: `${host}#/InputSuggestion`,
                        }
                      ]
                    },
                    {
                      text: 'LoadingBoxTop',
                      href: `${host}#/LoadingBoxTop`,
                    },
                    {
                      text: 'MenuClickHorizontal',
                      href: `${host}#/MenuClickHorizontal`,
                    },
                    {
                      text: 'PopupBox',
                      href: `${host}#/PopupBox`,
                    },
                    {
                      text: 'SideBar',
                      href: `${host}#/SideBar`,
                    },
                    {
                      text: 'SourceCode',
                      href: `${host}#/SourceCode`,
                    },
                    {
                      text: 'TextWriter',
                      href: `${host}#/TextWriter`,
                    }
                  ]
                }
              />
            }
          />
        }
        headerClassName={''}
        headerData={
          <span>
            <PopupBox
              defaultClass={false}
              id={false}
              animationTime={300}
              animationType='top-right' // top-left, top-right, bottom-left, bottom-right
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
              animationType='top-right' // top-left, top-right, bottom-left, bottom-right
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
              animationType='top-right' // top-left, top-right, bottom-left, bottom-right
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
                    placeholder={`${trans('searchForModule')}`}
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
              <Route exact path="/react-revolution-accordion" render={(props) => (<ReactRevolutionAccordion {...props} />)} />
              <Route exact path="/react-revolution-cards" render={(props) => (<ReactRevolutionCards {...props} />)} />
              <Route exact path="/react-revolution-cards-scroll" render={(props) => (<ReactRevolutionCardsScroll {...props} />)} />
              <Route exact path="/react-revolution-cards-scroll-callback" render={(props) => (<ReactRevolutionCardsScrollCallback {...props} />)} />
              <Route exact path="/react-revolution-clipboard" render={(props) => (<ReactRevolutionClipboard {...props} />)} />
              <Route exact path="/react-revolution-custom-suggestion" render={(props) => (<ReactRevolutionCustomSuggestion {...props} />)} />
              <Route exact path="/react-revolution-fullscreen-list-array" render={(props) => (<ReactRevolutionFullScreenListArray {...props} />)} />
              <Route exact path="/react-revolution-fullscreen-list-object" render={(props) => (<ReactRevolutionFullScreenListObject {...props} />)} />
              <Route exact path="/react-revolution-fullscreen-overlay" render={(props) => (<ReactRevolutionFullScreenOverlay {...props} />)} />
              <Route exact path="/react-revolution-global-messages" render={(props) => (<ReactRevolutionGlobalMessages {...props} />)} />
              <Route exact path="/react-revolution-icons" render={(props) => (<ReactRevolutionIcons {...props} />)} />
              <Route exact path="/react-revolution-input-animation" render={(props) => (<ReactRevolutionInputAnimation {...props} />)} />
              <Route exact path="/react-revolution-input-file" render={(props) => (<ReactRevolutionInputFile {...props} />)} />
              <Route exact path="/react-revolution-input-file-drag-drop" render={(props) => (<ReactRevolutionInputFileDragDrop {...props} />)} />
            </Switch>
          </Router>
        }
        footerData={''}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
