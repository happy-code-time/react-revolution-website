

import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from './Website/Pages/Root';
import ScrollTop from './Website/Modules/ScrollTop';
import { ContainerSidebar, Astronaut404, MenuHeight, SideBar, InputSuggestionObject, PopupHover } from './react-revolution/react-revolution';
import { appNameShort, version } from './Website/Globals';
import trans from './Website/Translations/trans';
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
import _Boxes from './Website/Pages/Boxes';
import _Breadcrumbs from './Website/Pages/Breadcrumbs';
import _Cards from './Website/Pages/Cards';
import _CardsScroll from './Website/Pages/CardsScroll';
import _CardsScrollCallback from './Website/Pages/CardsScrollCallback';
import _Carousel from './Website/Pages/Carousel';
import _Clipboard from './Website/Pages/Clipboard';
import _Clouds404 from './Website/Pages/Clouds404';
import _CloudsMountains404 from './Website/Pages/CloudsMountains404';
import _Container from './Website/Pages/Container';
import _ContainerPopup from './Website/Pages/ContainerPopup';
import _ContainerSidebar from './Website/Pages/ContainerSidebar';
import _CustomSuggestion from './Website/Pages/CustomSuggestion';
import _DarkLines404 from './Website/Pages/DarkLines404';
import _DragDropArea from './Website/Pages/DragDropArea';
import _DragDropList from './Website/Pages/DragDropList';
import _FullScreenListArray from './Website/Pages/FullScreenListArray';
import _FullScreenListObject from './Website/Pages/FullScreenListObject';
import _FullScreenOverlay from './Website/Pages/FullScreenOverlay';
import _GlobalMessages from './Website/Pages/GlobalMessages';
import _Icons from './Website/Pages/Icons';
import _ImageBox from './Website/Pages/ImageBox';
import _ImageCarousel from './Website/Pages/ImageCarousel';
import _InputAnimation from './Website/Pages/InputAnimation';
import _InputFile from './Website/Pages/InputFile';
import _InputFileDragDrop from './Website/Pages/InputFileDragDrop';
import _InputSuggestionArray from './Website/Pages/InputSuggestionArray';
import _InputSuggestionObject from './Website/Pages/InputSuggestionObject';
import _Lightbulb404 from './Website/Pages/Lightbulb404';
import _ListSwitch from './Website/Pages/ListSwitch';
import _LoadingBoxTop from './Website/Pages/LoadingBoxTop';
import _Menu from './Website/Pages/Menu';
import _MenuDropDown from './Website/Pages/MenuDropDown';
import _MenuHeight from './Website/Pages/MenuHeight';
import _MenuHoverX from './Website/Pages/MenuHoverX';
import _MenuHoverY from './Website/Pages/MenuHoverY';
import _Modal from './Website/Pages/Modal';
import _Overlay from './Website/Pages/Overlay';
import _PagerStatic from './Website/Pages/PagerStatic';
import _PagerDynamic from './Website/Pages/PagerDynamic';
import _Picture404 from './Website/Pages/Picture404';
import _Pills from './Website/Pages/Pills';
import _PopupBox from './Website/Pages/PopupBox';
import _PopupData from './Website/Pages/PopupData';
import _PopupHover from './Website/Pages/PopupHover';
import _LoadOnScroll from './Website/Pages/LoadOnScroll';
import _ReadMore from './Website/Pages/ReadMore';
import _ReadMoreCallback from './Website/Pages/ReadMoreCallback';
import _Ribbon from './Website/Pages/Ribbon';
import _RibbonMultiple from './Website/Pages/RibbonMultiple';
import _ScrollTo from './Website/Pages/ScrollTo';
import _SourceCode from './Website/Pages/SourceCode';
import _Sidebar from './Website/Pages/Sidebar';
import _Slider from './Website/Pages/Slider';
import _SliderCards from './Website/Pages/SliderCards'
import _SliderFullscreen from './Website/Pages/SliderFullscreen'
import _SliderItems from './Website/Pages/SliderItems';
import _Stars from './Website/Pages/Stars';
import _Steps from './Website/Pages/Steps';
import _StepsGenerator from './Website/Pages/StepsGenerator';
import _StepsGeneratorDragDrop from './Website/Pages/StepsGeneratorDragDrop';
import _Suggestions from './Website/Pages/Suggestions';
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
import _FunctionIsOject from './Website/Pages/FunctionIsObject';
import _FunctionIsArray from './Website/Pages/FunctionIsArray';
import _FunctionIsInViewport from './Website/Pages/FunctionIsInViewport';
/**
 * Releases
 */
import Releases from './Website/Pages/Releases/Releases';
import Components from './Website/Modules/Components';
import Footer from './Website/Modules/Footer';
// Style
import './react-revolution/css/react-revolution.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setOnClickEvent = this.setOnClickEvent.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSidebarDirectionsJsx = this.getSidebarDirectionsJsx.bind(this);
    this.setLayout = this.setLayout.bind(this);

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
  setSidebarDirection(d) {
    if ('left' == d && 'left' !== this.state.align) {
      setDataLocalStorage('ALIGN', 'left');
      return this.setState({ align: 'left' });
    }

    if ('right' == d && 'right' !== this.state.align) {
      setDataLocalStorage('ALIGN', 'right');
      return this.setState({ align: 'right' });
    }
  }

  getSidebarDirectionsJsx() {
    const data = [];

    ['left', 'right'].map( r => {
      data.push(
        <p 
          className='change-theme'
          key={`sidebar-direction-${r}`} 
          onClick={() => this.setSidebarDirection(r)}
        >
          {`Sidebar ${r}`}
        </p>
      );
    });

    return data;
  }

  getSkinsJsx() {
    const data = [];

    possibleLayouts.map(name => {
      data.push(
        <p 
          className='change-theme'
          key={`skin-${name}`} 
          onClick={() => this.setLayout(name)}
        >
          {`${trans(`${name}Theme`)} skin`}
        </p>
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
      'isArray',
      'isInViewport',
      'isObject',
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

  generateReleasesMenu() {
    const menu = [];

    [
      {
        version: '5.2',
        start: 0,
        end: 2
      },
      {
        version: '5.1',
        start: 0,
        end: 3
      },
      {
        version: '5.0',
        start: 0,
        end: 14
      },
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
      <ContainerSidebar
        id="rr-container"
        hideAt={1024}
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
        animationDuration={200}
        moduleSidebar={
          <SideBar
            // image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong={appNameShort}
            textShort={`v${version}`}
            href={`${host}#/`}
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
                          text: 'Boxes',
                          href: `${host}#/components/boxes`,
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
                          text: 'Carousel',
                          href: `${host}#/components/carousel`,
                        },
                        {
                          text: 'Clipboard',
                          href: `${host}#/components/clipboard`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Containers
                                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Container',
                              href: `${host}#/components/container`,
                            },
                            {
                              text: 'ContainerPopup',
                              href: `${host}#/components/container-popup`,
                            },
                            {
                              text: 'ContainerSidebar',
                              href: `${host}#/components/container-sidebar`,
                            }
                          ]
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
                          text: 'ImageBox',
                          href: `${host}#/components/image-box`,
                        },
                        {
                          text: 'ImageCarousel',
                          href: `${host}#/components/image-carousel`,
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
                          text: 'ListSwitch',
                          href: `${host}#/components/list-switch`,
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
                                Menus
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
                              text: 'MenuDropDown',
                              href: `${host}#/components/menu-dropdown`,
                            },
                            {
                              text: 'MenuHeight',
                              href: `${host}#/components/menu-height`,
                            },
                            {
                              text: 'MenuHoverX',
                              href: `${host}#/components/menu-hover-x`,
                            },
                            {
                              text: 'MenuHoverY',
                              href: `${host}#/components/menu-hover-y`,
                            },
                          ]
                        },
                        {
                          text: 'Modal',
                          href: `${host}#/components/modal`,
                        },
                        {
                          text: 'Overlay',
                          href: `${host}#/components/overlay`,
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
                          text: 'Pills',
                          href: `${host}#/components/pills`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Popups
                                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'PopupBox',
                              href: `${host}#/components/popup-box`,
                            },
                            {
                              text: 'PopupData',
                              href: `${host}#/components/popup-data`,
                            },
                            {
                              text: 'PopupHover',
                              href: `${host}#/components/popup-hover`,
                            },
                          ]
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
                          text: (
                            <span>
                              <span className="data-title">
                                Ribbons
                                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Ribbon',
                              href: `${host}#/components/ribbon`,
                            },
                            {
                              text: 'RibbonMultiple',
                              href: `${host}#/components/ribbon-multiple`,
                            },
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
                              text: 'SliderFullscreen',
                              href: `${host}#/components/slider-fullscreen`,
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
                          text: 'Stars',
                          href: `${host}#/components/stars`,
                        },
                        {
                          text: 'Steps',
                          href: `${host}#/components/steps`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                StepsGenerators
                                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'StepsGenerator',
                              href: `${host}#/components/steps-generator`,
                            },
                            {
                              text: 'StepsGeneratorDragDrop',
                              href: `${host}#/components/steps-generator-drag-drop`,
                            },
                          ]
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
                            {
                              text: 'Suggestions',
                              href: `${host}#/components/suggestions`,
                            },
                          ]
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
                          href: `${host}#/components/Timeline`,
                        },
                      ]
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('functions'),
                      toggled: true,
                      data: this.getFunctionsMenu()
                    },
                    {
                      icon: <i className="far fa-circle circle"></i>,
                      text: trans('releaseNotes'),
                      toggled: true,
                      data: this.generateReleasesMenu()
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
            <PopupHover
              addClass='toggle-dashboard'
              useMouseEnter={false}
              direction='right'
              holderData={<i className="fas fa-arrows-alt-h icon-dashbord list-switch-website change-theme-holder"></i>}
              displayOnHover={true}
              hideOnLeave={true}
              animation={true}
              contentData={
                (
                  <div>
                    {
                      this.getSidebarDirectionsJsx()
                    }
                  </div>
                )
              }
            />
            <PopupHover
              addClass='toggle-dashboard'
              useMouseEnter={false}
              direction='right'
              holderData={<i className="fas fa-tint icon-dashbord list-switch-website change-theme-holder"></i>}
              displayOnHover={true}
              hideOnLeave={true}
              animation={true}
              contentData={
                (
                  <div>
                    {
                      this.getSkinsJsx()
                    }
                  </div>
                )
              }
            />
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
              <Route exact path="/components/boxes" render={(props) => (<_Boxes {...props} />)} />
              <Route exact path="/components/breadcrumbs" render={(props) => (<_Breadcrumbs {...props} />)} />
              <Route exact path="/components/cards" render={(props) => (<_Cards {...props} />)} />
              <Route exact path="/components/cards-scroll" render={(props) => (<_CardsScroll {...props} />)} />
              <Route exact path="/components/cards-scroll-callback" render={(props) => (<_CardsScrollCallback {...props} />)} />
              <Route exact path="/components/carousel" render={(props) => (<_Carousel {...props} />)} />
              <Route exact path="/components/clipboard" render={(props) => (<_Clipboard {...props} />)} />
              <Route exact path="/components/clouds-404" render={(props) => (<_Clouds404 {...props} />)} />
              <Route exact path="/components/clouds-mountains-404" render={(props) => (<_CloudsMountains404 {...props} />)} />
              <Route exact path="/components/container" render={(props) => (<_Container {...props} />)} />
              <Route exact path="/components/container-popup" render={(props) => (<_ContainerPopup {...props} />)} />
              <Route exact path="/components/container-sidebar" render={(props) => (<_ContainerSidebar {...props} />)} />
              <Route exact path="/components/custom-suggestion" render={(props) => (<_CustomSuggestion {...props} />)} />
              <Route exact path="/components/dark-lines-404" render={(props) => (<_DarkLines404 {...props} />)} />
              <Route exact path="/components/drag-drop-area" render={(props) => (<_DragDropArea {...props} />)} />
              <Route exact path="/components/drag-drop-list" render={(props) => (<_DragDropList {...props} />)} />
              <Route exact path="/components/fullscreen-list-array" render={(props) => (<_FullScreenListArray {...props} />)} />
              <Route exact path="/components/fullscreen-list-object" render={(props) => (<_FullScreenListObject {...props} />)} />
              <Route exact path="/components/fullscreen-overlay" render={(props) => (<_FullScreenOverlay {...props} />)} />
              <Route exact path="/components/global-messages" render={(props) => (<_GlobalMessages {...props} />)} />
              <Route exact path="/components/icons" render={(props) => (<_Icons {...props} />)} />
              <Route exact path="/components/image-box" render={(props) => (<_ImageBox {...props} />)} />
              <Route exact path="/components/image-carousel" render={(props) => (<_ImageCarousel {...props} />)} />
              <Route exact path="/components/input-animation" render={(props) => (<_InputAnimation {...props} />)} />
              <Route exact path="/components/input-file" render={(props) => (<_InputFile {...props} />)} />
              <Route exact path="/components/input-file-drag-drop" render={(props) => (<_InputFileDragDrop {...props} />)} />
              <Route exact path="/components/input-suggestion-array" render={(props) => (<_InputSuggestionArray {...props} />)} />
              <Route exact path="/components/input-suggestion-object" render={(props) => (<_InputSuggestionObject {...props} />)} />
              <Route exact path="/components/loading-box-top" render={(props) => (<_LoadingBoxTop {...props} />)} />
              <Route exact path="/components/menu" render={(props) => (<_Menu {...props} />)} />
              <Route exact path="/components/menu-dropdown" render={(props) => (<_MenuDropDown {...props} />)} />
              <Route exact path="/components/menu-height" render={(props) => (<_MenuHeight {...props} />)} />
              <Route exact path="/components/menu-hover-x" render={(props) => (<_MenuHoverX {...props} />)} />
              <Route exact path="/components/menu-hover-y" render={(props) => (<_MenuHoverY {...props} />)} />
              <Route exact path="/components/modal" render={(props) => (<_Modal {...props} />)} />
              <Route exact path="/components/overlay" render={(props) => (<_Overlay {...props} />)} />
              <Route exact path="/components/pager-static" render={(props) => (<_PagerStatic {...props} />)} />
              <Route exact path="/components/pager-dynamic" render={(props) => (<_PagerDynamic {...props} />)} />
              <Route exact path="/components/picture-404" render={(props) => (<_Picture404 {...props} />)} />
              <Route exact path="/components/pills" render={(props) => (<_Pills {...props} />)} />
              <Route exact path="/components/popup-box" render={(props) => (<_PopupBox {...props} />)} />
              <Route exact path="/components/popup-data" render={(props) => (<_PopupData {...props} />)} />
              <Route exact path="/components/popup-hover" render={(props) => (<_PopupHover {...props} />)} />
              <Route exact path="/components/load-on-scroll" render={(props) => (<_LoadOnScroll {...props} />)} />
              <Route exact path="/components/lightbulb-404" render={(props) => (<_Lightbulb404 {...props} />)} />
              <Route exact path="/components/list-switch" render={(props) => (<_ListSwitch {...props} />)} />
              <Route exact path="/components/read-more" render={(props) => (<_ReadMore {...props} />)} />
              <Route exact path="/components/read-more-callback" render={(props) => (<_ReadMoreCallback {...props} />)} />
              <Route exact path="/components/ribbon" render={(props) => (<_Ribbon {...props} />)} />
              <Route exact path="/components/ribbon-multiple" render={(props) => (<_RibbonMultiple {...props} />)} />
              <Route exact path="/components/sidebar" render={(props) => (<_Sidebar {...props} />)} />
              <Route exact path="/components/slider" render={(props) => (<_Slider {...props} />)} />
              <Route exact path="/components/slider-cards" render={(props) => (<_SliderCards {...props} />)} />
              <Route exact path="/components/slider-fullscreen" render={(props) => (<_SliderFullscreen {...props} />)} />
              <Route exact path="/components/slider-items" render={(props) => (<_SliderItems {...props} />)} />
              <Route exact path="/components/scroll-to" render={(props) => (<_ScrollTo {...props} />)} />
              <Route exact path="/components/source-code" render={(props) => (<_SourceCode {...props} />)} />
              <Route exact path="/components/stars" render={(props) => (<_Stars {...props} />)} />
              <Route exact path="/components/steps" render={(props) => (<_Steps {...props} />)} />
              <Route exact path="/components/steps-generator" render={(props) => (<_StepsGenerator {...props} />)} />
              <Route exact path="/components/steps-generator-drag-drop" render={(props) => (<_StepsGeneratorDragDrop {...props} />)} />
              <Route exact path="/components/suggestions" render={(props) => (<_Suggestions {...props} />)} />
              <Route exact path="/components/table" render={(props) => (<_Table {...props} />)} />
              <Route exact path="/components/text-writer" render={(props) => (<_TextWriter {...props} />)} />
              <Route exact path="/components/timeline" render={(props) => (<_Timeline {...props} />)} />
              <Route exact path="/components/water-404" render={(props) => (<_Water404 {...props} />)} />
              {/* Functions */}
              <Route exact path="/functions/addGlobalMessage" render={(props) => (<_FunctionAddGlobalMessage {...props} />)} />
              <Route exact path="/functions/uuid" render={(props) => (<_FunctionUuid {...props} />)} />
              <Route exact path="/functions/disableHtmlScroll" render={(props) => (<_FunctionDisableHtmlScroll {...props} />)} />
              <Route exact path="/functions/enableHtmlScroll" render={(props) => (<_FunctionEnableHtmlScroll {...props} />)} />
              <Route exact path="/functions/scrollTopListener" render={(props) => (<_FunctionScrollTopListener {...props} />)} />
              <Route exact path="/functions/urlExtract" render={(props) => (<_FunctionUrlExtract {...props} />)} />
              <Route exact path="/functions/isObject" render={(props) => (<_FunctionIsOject {...props} />)} />
              <Route exact path="/functions/isArray" render={(props) => (<_FunctionIsArray {...props} />)} />
              <Route exact path="/functions/isInViewport" render={(props) => (<_FunctionIsInViewport {...props} />)} />
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
        footerData={
          <span>
            <ScrollTop />
            <Components />
            <Footer />
          </span>
        }
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
