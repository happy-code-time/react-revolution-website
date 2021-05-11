

import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from './Website/Pages/Root';
import ScrollTop from './Website/Modules/ScrollTop';
import { ContainerSidebar, Astronaut404, MenuHeight, Sidebar, InputSuggestionObject, PopupHover } from './react-revolution/react-revolution';
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
import _Article from './Website/Pages/Article';
import _ArticleImage from './Website/Pages/ArticleImage';
import _Astronaut404 from './Website/Pages/Astronaut404';
import _Box from './Website/Pages/Box';
import _Breadcrumb from './Website/Pages/Breadcrumb';
import _Card from './Website/Pages/Card';
import _CardScroll from './Website/Pages/CardScroll';
import _CardScrollCallback from './Website/Pages/CardScrollCallback';
import _Carousel from './Website/Pages/Carousel';
import _Clipboard from './Website/Pages/Clipboard';
import _Cloud404 from './Website/Pages/Cloud404';
import _CloudMountain404 from './Website/Pages/CloudMountain404';
import _Container from './Website/Pages/Container';
import _ContainerCompact from './Website/Pages/ContainerCompact';
import _ContainerPopup from './Website/Pages/ContainerPopup';
import _ContainerSidebar from './Website/Pages/ContainerSidebar';
import _CustomSuggestion from './Website/Pages/CustomSuggestion';
import _DarkLine404 from './Website/Pages/DarkLine404';
import _DragDropArea from './Website/Pages/DragDropArea';
import _DragDropList from './Website/Pages/DragDropList';
import _Filter from './Website/Pages/Filter';
import _FilterMapping from './Website/Pages/FilterMapping';
import _FullScreenListArray from './Website/Pages/FullScreenListArray';
import _FullScreenListObject from './Website/Pages/FullScreenListObject';
import _FullScreenOverlay from './Website/Pages/FullScreenOverlay';
import _GlobalMessage from './Website/Pages/GlobalMessage';
import _Icon from './Website/Pages/Icon';
import _IconText from './Website/Pages/IconText';
import _ImageBanner from './Website/Pages/ImageBanner';
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
import _Pill from './Website/Pages/Pill';
import _PopupBox from './Website/Pages/PopupBox';
import _PopupData from './Website/Pages/PopupData';
import _PopupHover from './Website/Pages/PopupHover';
import _Preloader from './Website/Pages/Preloader';
import _LoadOnScroll from './Website/Pages/LoadOnScroll';
import _ReadMore from './Website/Pages/ReadMore';
import _ReadMoreCallback from './Website/Pages/ReadMoreCallback';
import _Ribbon from './Website/Pages/Ribbon';
import _RibbonMultiple from './Website/Pages/RibbonMultiple';
import _ScrollTo from './Website/Pages/ScrollTo';
import _SourceCode from './Website/Pages/SourceCode';
import _Sidebar from './Website/Pages/Sidebar';
import _Slider from './Website/Pages/Slider';
import _SliderCard from './Website/Pages/SliderCard'
import _SliderFullscreen from './Website/Pages/SliderFullscreen'
import _SliderItem from './Website/Pages/SliderItem';
import _Star from './Website/Pages/Star';
import _Step from './Website/Pages/Step';
import _StepGenerator from './Website/Pages/StepGenerator';
import _StepGeneratorDragDrop from './Website/Pages/StepGeneratorDragDrop';
import _Suggestion from './Website/Pages/Suggestion';
import _Range from './Website/Pages/Range';
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
import _FunctionScrollToTop from './Website/Pages/FunctionScrollToTop';
import _FunctionUrlExtract from './Website/Pages/FunctionUrlExtract';
import _FunctionIsOject from './Website/Pages/FunctionIsObject';
import _FunctionIsArray from './Website/Pages/FunctionIsArray';
import _FunctionIsInViewport from './Website/Pages/FunctionIsInViewport';
import _FunctionCopyArray from './Website/Pages/FunctionCopyArray';
import _FunctionCopyObject from './Website/Pages/FunctionCopyObject';
import _FunctionIsBoolean from './Website/Pages/FunctionIsBoolean';
import _FunctionIsFunction from './Website/Pages/FunctionIsFunction';
import _FunctionIsNumber from './Website/Pages/FunctionIsNumber';
import _FunctionIsString from './Website/Pages/FunctionIsString';
/**
 * Releases
 */
import Releases from './Website/Pages/Releases/Releases';
import Components from './Website/Modules/Components';
import Footer from './Website/Modules/Footer';
// Style
// import './react-revolution/css/react-revolution.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setOnClickEvent = this.setOnClickEvent.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.getSuggestion = this.getSuggestion.bind(this);
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

  getSuggestion() {
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

    ['left', 'right'].map(r => {
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
      'copyArray',
      'copyObject',
      'disableHtmlScroll',
      'enableHtmlScroll',
      'isArray',
      'isBoolean',
      'isFunction',
      'isInViewport',
      'isNumber',
      'isObject',
      'isString',
      'scrollTopListener',
      'scrollToTop',
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
        version: '6.0',
        start: 0,
        end: 3
      },
      {
        version: '5.6',
        start: 0,
        end: 2
      },
      {
        version: '5.5',
        start: 0,
        end: 0
      },
      {
        version: '5.4',
        start: 0,
        end: 9
      },
      {
        version: '5.3',
        start: 0,
        end: 0
      },
      {
        version: '5.2',
        start: 0,
        end: 3
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
        id="Container"
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
          <Sidebar
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
                                Article
                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Article',
                              href: `${host}#/components/article`,
                            },
                            {
                              text: 'ArticleImage',
                              href: `${host}#/components/articleimage`,
                            },
                          ]
                        },
                        {
                          text: 'Box',
                          href: `${host}#/components/box`,
                        },
                        {
                          text: 'Breadcrumb',
                          href: `${host}#/components/breadcrumb`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Card
                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Card',
                              href: `${host}#/components/card`,
                            },
                            {
                              text: 'CardScroll',
                              href: `${host}#/components/cardscroll`,
                            },
                            {
                              text: 'CardScrollCallback',
                              href: `${host}#/components/cardscrollcallback`,
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
                                Container
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
                              text: 'ContainerCompact',
                              href: `${host}#/components/containercompact`,
                            },
                            {
                              text: 'ContainerPopup',
                              href: `${host}#/components/containerpopup`,
                            },
                            {
                              text: 'ContainerSidebar',
                              href: `${host}#/components/containersidebar`,
                            }
                          ]
                        },
                        {
                          text: 'CustomSuggestion',
                          href: `${host}#/components/customsuggestion`,
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
                              href: `${host}#/components/dragdroparea`,
                            },
                            {
                              text: 'DragDropList',
                              href: `${host}#/components/dragdroplist`,
                            }
                          ]
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Filter
                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Filter',
                              href: `${host}#/components/filter`,
                            },
                            {
                              text: 'FilterMapping',
                              href: `${host}#/components/filtermapping`,
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
                              href: `${host}#/components/fullscreenlistarray`,
                            },
                            {
                              text: 'FullScreenListObject',
                              href: `${host}#/components/fullscreenlistobject`,
                            },
                            {
                              text: 'FullScreenOverlay',
                              href: `${host}#/components/fullscreenoverlay`,
                            }
                          ]
                        },
                        {
                          text: 'GlobalMessage',
                          href: `${host}#/components/globalmessage`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Icon
                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'Icon',
                              href: `${host}#/components/icon`,
                            },
                            {
                              text: 'IconText',
                              href: `${host}#/components/icontext`,
                            },
                          ]
                        },
                        {
                          text: 'ImageBanner',
                          href: `${host}#/components/imagebanner`,
                        },
                        {
                          text: 'ImageBox',
                          href: `${host}#/components/imagebox`,
                        },
                        {
                          text: 'ImageCarousel',
                          href: `${host}#/components/imagecarousel`,
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
                              href: `${host}#/components/inputanimation`,
                            },
                            {
                              text: 'InputFile',
                              href: `${host}#/components/inputfile`,
                            },
                            {
                              text: 'InputFileDragDrop',
                              href: `${host}#/components/inputfiledragdrop`,
                            },
                            {
                              text: 'InputSuggestionArray',
                              href: `${host}#/components/inputsuggestionarray`,
                            },
                            {
                              text: 'InputSuggestionObject',
                              href: `${host}#/components/inputsuggestionobject`,
                            },
                          ]
                        },
                        {
                          text: 'ListSwitch',
                          href: `${host}#/components/listswitch`,
                        },
                        {
                          text: 'LoadingBoxTop',
                          href: `${host}#/components/loadingboxtop`,
                        },
                        {
                          text: 'LoadOnScroll',
                          href: `${host}#/components/loadonscroll`,
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
                              text: 'MenuDropDown',
                              href: `${host}#/components/menudropdown`,
                            },
                            {
                              text: 'MenuHeight',
                              href: `${host}#/components/menuheight`,
                            },
                            {
                              text: 'MenuHoverX',
                              href: `${host}#/components/menuhoverx`,
                            },
                            {
                              text: 'MenuHoverY',
                              href: `${host}#/components/menuhovery`,
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
                              href: `${host}#/components/astronaut404`,
                            },
                            {
                              text: 'Cloud404',
                              href: `${host}#/components/cloud404`,
                            },
                            {
                              text: 'CloudMountain404',
                              href: `${host}#/components/cloudmountain404`,
                            },
                            {
                              text: 'DarkLine404',
                              href: `${host}#/components/darkline404`,
                            },
                            {
                              text: 'Lightbulb404',
                              href: `${host}#/components/lightbulb404`,
                            },
                            {
                              text: 'Picture404',
                              href: `${host}#/components/picture404`,
                            },
                            {
                              text: 'Water404',
                              href: `${host}#/components/water404`,
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
                              href: `${host}#/components/pagerstatic`,
                            },
                            {
                              text: 'PagerDynamic',
                              href: `${host}#/components/pagerdynamic`,
                            },
                          ]
                        },
                        {
                          text: 'Pill',
                          href: `${host}#/components/pill`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Popup
                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'PopupBox',
                              href: `${host}#/components/popupbox`,
                            },
                            {
                              text: 'PopupData',
                              href: `${host}#/components/popupdata`,
                            },
                            {
                              text: 'PopupHover',
                              href: `${host}#/components/popuphover`,
                            },
                          ]
                        },
                        {
                          text: 'Preloader',
                          href: `${host}#/components/preloader`,
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
                              href: `${host}#/components/readmore`,
                            },
                            {
                              text: 'ReadMoreCallback',
                              href: `${host}#/components/readmorecallback`,
                            }
                          ],
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Ribbon
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
                              href: `${host}#/components/ribbonmultiple`,
                            },
                          ],
                        },
                        {
                          text: 'ScrollTo',
                          href: `${host}#/components/scrollto`,
                        },
                        {
                          text: 'Sidebar',
                          href: `${host}#/components/sidebar`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Slider
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
                              text: 'SliderCard',
                              href: `${host}#/components/slidercard`,
                            },
                            {
                              text: 'SliderFullscreen',
                              href: `${host}#/components/sliderfullscreen`,
                            },
                            {
                              text: 'SliderItem',
                              href: `${host}#/components/slideritem`,
                            }
                          ]
                        },
                        {
                          text: 'SourceCode',
                          href: `${host}#/components/sourcecode`,
                        },
                        {
                          text: 'Star',
                          href: `${host}#/components/star`,
                        },
                        {
                          text: 'Step',
                          href: `${host}#/components/step`,
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                StepGenerator
                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'StepGenerator',
                              href: `${host}#/components/stepgenerator`,
                            },
                            {
                              text: 'StepGeneratorDragDrop',
                              href: `${host}#/components/stepgeneratordragdrop`,
                            },
                          ]
                        },
                        {
                          text: (
                            <span>
                              <span className="data-title">
                                Suggestion
                              </span>
                              <span className="drop-down-icon">
                                <i className='fas fa-angle-down'></i>
                              </span>
                            </span>
                          ),
                          data: [
                            {
                              text: 'CustomSuggestion',
                              href: `${host}#/components/customsuggestion`,
                            },
                            {
                              text: 'InputSuggestionArray',
                              href: `${host}#/components/inputsuggestionarray`,
                            },
                            {
                              text: 'InputSuggestionObject',
                              href: `${host}#/components/inputsuggestionobject`,
                            },
                            {
                              text: 'Suggestion',
                              href: `${host}#/components/suggestion`,
                            },
                          ]
                        },
                        {
                          text: 'Range',
                          href: `${host}#/components/range`,
                        },
                        {
                          text: 'Table',
                          href: `${host}#/components/table`,
                        },
                        {
                          text: 'TextWriter',
                          href: `${host}#/components/textwriter`,
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
                suggestions={this.getSuggestion()}
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
              <Route exact path="/components/article" render={(props) => (<_Article {...props} />)} />
              <Route exact path="/components/articleimage" render={(props) => (<_ArticleImage {...props} />)} />
              <Route exact path="/components/astronaut404" render={(props) => (<_Astronaut404 {...props} />)} />
              <Route exact path="/components/box" render={(props) => (<_Box {...props} />)} />
              <Route exact path="/components/breadcrumb" render={(props) => (<_Breadcrumb {...props} />)} />
              <Route exact path="/components/card" render={(props) => (<_Card {...props} />)} />
              <Route exact path="/components/cardscroll" render={(props) => (<_CardScroll {...props} />)} />
              <Route exact path="/components/cardscrollcallback" render={(props) => (<_CardScrollCallback {...props} />)} />
              <Route exact path="/components/carousel" render={(props) => (<_Carousel {...props} />)} />
              <Route exact path="/components/clipboard" render={(props) => (<_Clipboard {...props} />)} />
              <Route exact path="/components/cloud404" render={(props) => (<_Cloud404 {...props} />)} />
              <Route exact path="/components/cloudmountain404" render={(props) => (<_CloudMountain404 {...props} />)} />
              <Route exact path="/components/container" render={(props) => (<_Container {...props} />)} />
              <Route exact path="/components/containercompact" render={(props) => (<_ContainerCompact {...props} />)} />
              <Route exact path="/components/containerpopup" render={(props) => (<_ContainerPopup {...props} />)} />
              <Route exact path="/components/containersidebar" render={(props) => (<_ContainerSidebar {...props} />)} />
              <Route exact path="/components/customsuggestion" render={(props) => (<_CustomSuggestion {...props} />)} />
              <Route exact path="/components/darkline404" render={(props) => (<_DarkLine404 {...props} />)} />
              <Route exact path="/components/dragdroparea" render={(props) => (<_DragDropArea {...props} />)} />
              <Route exact path="/components/dragdroplist" render={(props) => (<_DragDropList {...props} />)} />
              <Route exact path="/components/filter" render={(props) => (<_Filter {...props} />)} />
              <Route exact path="/components/filtermapping" render={(props) => (<_FilterMapping {...props} />)} />
              <Route exact path="/components/fullscreenlistarray" render={(props) => (<_FullScreenListArray {...props} />)} />
              <Route exact path="/components/fullscreenlistobject" render={(props) => (<_FullScreenListObject {...props} />)} />
              <Route exact path="/components/fullscreenoverlay" render={(props) => (<_FullScreenOverlay {...props} />)} />
              <Route exact path="/components/globalmessage" render={(props) => (<_GlobalMessage {...props} />)} />
              <Route exact path="/components/icon" render={(props) => (<_Icon {...props} />)} />
              <Route exact path="/components/icontext" render={(props) => (<_IconText {...props} />)} />
              <Route exact path="/components/imagebanner" render={(props) => (<_ImageBanner {...props} />)} />
              <Route exact path="/components/imagebox" render={(props) => (<_ImageBox {...props} />)} />
              <Route exact path="/components/imagecarousel" render={(props) => (<_ImageCarousel {...props} />)} />
              <Route exact path="/components/inputanimation" render={(props) => (<_InputAnimation {...props} />)} />
              <Route exact path="/components/inputfile" render={(props) => (<_InputFile {...props} />)} />
              <Route exact path="/components/inputfiledragdrop" render={(props) => (<_InputFileDragDrop {...props} />)} />
              <Route exact path="/components/inputsuggestionarray" render={(props) => (<_InputSuggestionArray {...props} />)} />
              <Route exact path="/components/inputsuggestionobject" render={(props) => (<_InputSuggestionObject {...props} />)} />
              <Route exact path="/components/loadingboxtop" render={(props) => (<_LoadingBoxTop {...props} />)} />
              <Route exact path="/components/menu" render={(props) => (<_Menu {...props} />)} />
              <Route exact path="/components/menudropdown" render={(props) => (<_MenuDropDown {...props} />)} />
              <Route exact path="/components/menuheight" render={(props) => (<_MenuHeight {...props} />)} />
              <Route exact path="/components/menuhoverx" render={(props) => (<_MenuHoverX {...props} />)} />
              <Route exact path="/components/menuhovery" render={(props) => (<_MenuHoverY {...props} />)} />
              <Route exact path="/components/modal" render={(props) => (<_Modal {...props} />)} />
              <Route exact path="/components/overlay" render={(props) => (<_Overlay {...props} />)} />
              <Route exact path="/components/pagerstatic" render={(props) => (<_PagerStatic {...props} />)} />
              <Route exact path="/components/pagerdynamic" render={(props) => (<_PagerDynamic {...props} />)} />
              <Route exact path="/components/picture404" render={(props) => (<_Picture404 {...props} />)} />
              <Route exact path="/components/pill" render={(props) => (<_Pill {...props} />)} />
              <Route exact path="/components/popupbox" render={(props) => (<_PopupBox {...props} />)} />
              <Route exact path="/components/popupdata" render={(props) => (<_PopupData {...props} />)} />
              <Route exact path="/components/popuphover" render={(props) => (<_PopupHover {...props} />)} />
              <Route exact path="/components/preloader" render={(props) => (<_Preloader {...props} />)} />
              <Route exact path="/components/loadonscroll" render={(props) => (<_LoadOnScroll {...props} />)} />
              <Route exact path="/components/lightbulb404" render={(props) => (<_Lightbulb404 {...props} />)} />
              <Route exact path="/components/listswitch" render={(props) => (<_ListSwitch {...props} />)} />
              <Route exact path="/components/readmore" render={(props) => (<_ReadMore {...props} />)} />
              <Route exact path="/components/readmorecallback" render={(props) => (<_ReadMoreCallback {...props} />)} />
              <Route exact path="/components/ribbon" render={(props) => (<_Ribbon {...props} />)} />
              <Route exact path="/components/ribbonmultiple" render={(props) => (<_RibbonMultiple {...props} />)} />
              <Route exact path="/components/sidebar" render={(props) => (<_Sidebar {...props} />)} />
              <Route exact path="/components/slider" render={(props) => (<_Slider {...props} />)} />
              <Route exact path="/components/slidercard" render={(props) => (<_SliderCard {...props} />)} />
              <Route exact path="/components/sliderfullscreen" render={(props) => (<_SliderFullscreen {...props} />)} />
              <Route exact path="/components/slideritem" render={(props) => (<_SliderItem {...props} />)} />
              <Route exact path="/components/scrollto" render={(props) => (<_ScrollTo {...props} />)} />
              <Route exact path="/components/sourcecode" render={(props) => (<_SourceCode {...props} />)} />
              <Route exact path="/components/star" render={(props) => (<_Star {...props} />)} />
              <Route exact path="/components/step" render={(props) => (<_Step {...props} />)} />
              <Route exact path="/components/stepgenerator" render={(props) => (<_StepGenerator {...props} />)} />
              <Route exact path="/components/stepgeneratordragdrop" render={(props) => (<_StepGeneratorDragDrop {...props} />)} />
              <Route exact path="/components/suggestion" render={(props) => (<_Suggestion {...props} />)} />
              <Route exact path="/components/range" render={(props) => (<_Range {...props} />)} />
              <Route exact path="/components/table" render={(props) => (<_Table {...props} />)} />
              <Route exact path="/components/textwriter" render={(props) => (<_TextWriter {...props} />)} />
              <Route exact path="/components/timeline" render={(props) => (<_Timeline {...props} />)} />
              <Route exact path="/components/water404" render={(props) => (<_Water404 {...props} />)} />
              {/* Functions */}
              <Route exact path="/functions/addGlobalMessage" render={(props) => (<_FunctionAddGlobalMessage {...props} />)} />
              <Route exact path="/functions/uuid" render={(props) => (<_FunctionUuid {...props} />)} />
              <Route exact path="/functions/disableHtmlScroll" render={(props) => (<_FunctionDisableHtmlScroll {...props} />)} />
              <Route exact path="/functions/enableHtmlScroll" render={(props) => (<_FunctionEnableHtmlScroll {...props} />)} />
              <Route exact path="/functions/scrollTopListener" render={(props) => (<_FunctionScrollTopListener {...props} />)} />
              <Route exact path="/functions/scrollToTop" render={(props) => (<_FunctionScrollToTop {...props} />)} />
              <Route exact path="/functions/urlExtract" render={(props) => (<_FunctionUrlExtract {...props} />)} />
              <Route exact path="/functions/isObject" render={(props) => (<_FunctionIsOject {...props} />)} />
              <Route exact path="/functions/isArray" render={(props) => (<_FunctionIsArray {...props} />)} />
              <Route exact path="/functions/isInViewport" render={(props) => (<_FunctionIsInViewport {...props} />)} />
              <Route exact path="/functions/copyArray" render={(props) => (<_FunctionCopyArray {...props} />)} />
              <Route exact path="/functions/copyObject" render={(props) => (<_FunctionCopyObject {...props} />)} />
              <Route exact path="/functions/isBoolean" render={(props) => (<_FunctionIsBoolean {...props} />)} />
              <Route exact path="/functions/isFunction" render={(props) => (<_FunctionIsFunction {...props} />)} />
              <Route exact path="/functions/isNumber" render={(props) => (<_FunctionIsNumber {...props} />)} />
              <Route exact path="/functions/isString" render={(props) => (<_FunctionIsString {...props} />)} />

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
