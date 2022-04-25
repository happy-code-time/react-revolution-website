import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './Website/Pages/Root';
/**
 * React Revolution Modules
 */
import _Accordion from './Website/Pages/Accordion';
// import _Article from './Website/Pages/Article';
// import _ArticleImage from './Website/Pages/ArticleImage';
// import _Astronaut404 from './Website/Pages/Astronaut404';
// import _Box from './Website/Pages/Box';
// import _Breadcrumb from './Website/Pages/Breadcrumb';
// import _Card from './Website/Pages/Card';
// import _CardScroll from './Website/Pages/CardScroll';
// import _CardScrollCallback from './Website/Pages/CardScrollCallback';
// import _Carousel from './Website/Pages/Carousel';
// import _Clipboard from './Website/Pages/Clipboard';
// import _Cloud404 from './Website/Pages/Cloud404';
// import _CloudMountain404 from './Website/Pages/CloudMountain404';
// import _ContainerCompact from './Website/Pages/ContainerCompact';
// import _CustomSuggestion from './Website/Pages/CustomSuggestion';
// import _DragDropArea from './Website/Pages/DragDropArea';
// import _DragDropList from './Website/Pages/DragDropList';
// import _Filter from './Website/Pages/Filter';
// import _FilterMapping from './Website/Pages/FilterMapping';
// import _FullScreenListObject from './Website/Pages/FullScreenListObject';
// import _FullScreenOverlay from './Website/Pages/FullScreenOverlay';
// import _GlobalMessage from './Website/Pages/GlobalMessage';
// import _Icon from './Website/Pages/Icon';
// import _IconText from './Website/Pages/IconText';
// import _ImageBanner from './Website/Pages/ImageBanner';
// import _ImageBox from './Website/Pages/ImageBox';
// import _ImageCarousel from './Website/Pages/CarouselImage';
// import _InputAnimation from './Website/Pages/InputIcon';
// import _InputFile from './Website/Pages/InputFile';
// import _InputFileDragDrop from './Website/Pages/InputFileDragDrop';
// import _InputSuggestionObject from './Website/Pages/InputSuggestionObject';
// import _ListSwitch from './Website/Pages/ListSwitch';
// import _LoadingBoxTop from './Website/Pages/LoadingBoxTop';
// import _Menu from './Website/Pages/Menu';
// import _MenuDropDown from './Website/Pages/MenuDropDown';
// import _MenuHeight from './Website/Pages/MenuHeight';
// import _MenuHoverX from './Website/Pages/MenuHoverX';
// import _MenuHoverY from './Website/Pages/MenuHoverY';
// import _Modal from './Website/Pages/Modal';
// import _Overlay from './Website/Pages/Overlay';
// import _PagerStatic from './Website/Pages/PagerStatic';
// import _PagerDynamic from './Website/Pages/PagerDynamic';
// import _Picture404 from './Website/Pages/Picture404';
// import _Pill from './Website/Pages/Pill';
// import _PopupBox from './Website/Pages/PopupBox';
// import _PopupData from './Website/Pages/PopupData';
// import _PopupHover from './Website/Pages/PopupHover';
// import _Preloader from './Website/Pages/Preloader';
// import _LoadOnScroll from './Website/Pages/LoadOnScroll';
// import _ReadMore from './Website/Pages/ReadMore';
// import _ReadMoreCallback from './Website/Pages/ReadMoreCallback';
// import _Ribbon from './Website/Pages/Ribbon';
// import _RibbonMultiple from './Website/Pages/RibbonMultiple';
// import _ScrollTo from './Website/Pages/ScrollTo';
// import _SourceCode from './Website/Pages/SourceCode';
// import _Sidebar from './Website/Pages/Sidebar';
// import _Slider from './Website/Pages/Slider';
// import _SliderCard from './Website/Pages/SliderCard'
// import _SliderFullscreen from './Website/Pages/SliderFullscreen'
// import _SliderItem from './Website/Pages/SliderItem';
// import _Star from './Website/Pages/Star';
// import _Step from './Website/Pages/Step';
// import _StepGenerator from './Website/Pages/StepGenerator';
// import _StepGeneratorDragDrop from './Website/Pages/StepGeneratorDragDrop';
// import _Suggestion from './Website/Pages/Suggestion';
// import _Range from './Website/Pages/Range';
// import _Table from './Website/Pages/Table';
// import _TextWriter from './Website/Pages/TextWriter';
// import _Timeline from './Website/Pages/Timeline';

// /**
//  * React Revolution Functions
//  */
// import _FunctionAddGlobalMessage from './Website/Pages/FunctionAddGlobalMessage';
// import _FunctionUuid from './Website/Pages/FunctionUuid';
// import _FunctionDisableHtmlScroll from './Website/Pages/FunctionDisableHtmlScroll';
// import _FunctionEnableHtmlScroll from './Website/Pages/FunctionEnableHtmlScroll';
// import _FunctionScrollTopListener from './Website/Pages/FunctionScrollTopListener';
// import _FunctionScrollToTop from './Website/Pages/FunctionScrollToTop';
// import _FunctionUrlExtract from './Website/Pages/FunctionUrlExtract';
// import _FunctionIsOject from './Website/Pages/FunctionIsObject';
// import _FunctionIsArray from './Website/Pages/FunctionIsArray';
// import _FunctionIsInViewport from './Website/Pages/FunctionIsInViewport';
// import _FunctionCopyArray from './Website/Pages/FunctionCopyArray';
// import _FunctionCopyObject from './Website/Pages/FunctionCopyObject';
// import _FunctionIsBoolean from './Website/Pages/FunctionIsBoolean';
// import _FunctionIsFunction from './Website/Pages/FunctionIsFunction';
// import _FunctionIsNumber from './Website/Pages/FunctionIsNumber';
// import _FunctionIsString from './Website/Pages/FunctionIsString';
/**
 * Releases
 */
// import Releases from './Website/Pages/Releases/Releases';
// import Components from './Website/Components/Components';
// import Footer from './Website/Components/Footer';
import Wrapper from './Website/Components/Wrapper';
// Style
// import './react-revolution/css/react-revolution.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route
            path="/accordion" 
            element={
              <Wrapper state={this.state}>
                <_Accordion />
              </Wrapper>
            } />
          {/* <Route exact path="/accordion" element={<_Accordion {...props} />} />
              <Route exact path="/article" element={<_Article {...props} />} />
              <Route exact path="/articleimage" element={<_ArticleImage {...props} />} />
              <Route exact path="/astronaut404" element={<_Astronaut404 {...props} />} />
              <Route exact path="/box" element={<_Box {...props} />} />
              <Route exact path="/breadcrumb" element={<_Breadcrumb {...props} />} />
              <Route exact path="/card" element={<_Card {...props} />} />
              <Route exact path="/cardscroll" element={<_CardScroll {...props} />} />
              <Route exact path="/cardscrollcallback" element={<_CardScrollCallback {...props} />} />
              <Route exact path="/carousel" element={<_Carousel {...props} />} />
              <Route exact path="/clipboard" element={<_Clipboard {...props} />} />
              <Route exact path="/cloud404" element={<_Cloud404 {...props} />} />
              <Route exact path="/cloudmountain404" element={<_CloudMountain404 {...props} />} />
              <Route exact path="/container" element={<_Container {...props} />} />
              <Route exact path="/containercompact" element={<_ContainerCompact {...props} />} />
              <Route exact path="/customsuggestion" element={<_CustomSuggestion {...props} />} />
              <Route exact path="/dragdroparea" element={<_DragDropArea {...props} />} />
              <Route exact path="/dragdroplist" element={<_DragDropList {...props} />} />
              <Route exact path="/filter" element={<_Filter {...props} />} />
              <Route exact path="/filtermapping" element={<_FilterMapping {...props} />} />
              <Route exact path="/fullscreenlistobject" element={<_FullScreenListObject {...props} />} />
              <Route exact path="/fullscreenoverlay" element={<_FullScreenOverlay {...props} />} />
              <Route exact path="/globalmessage" element={<_GlobalMessage {...props} />} />
              <Route exact path="/icon" element={<_Icon {...props} />} />
              <Route exact path="/icontext" element={<_IconText {...props} />} />
              <Route exact path="/imagebanner" element={<_ImageBanner {...props} />} />
              <Route exact path="/imagebox" element={<_ImageBox {...props} />} />
              <Route exact path="/imagecarousel" element={<_ImageCarousel {...props} />} />
              <Route exact path="/inputanimation" element={<_InputAnimation {...props} />} />
              <Route exact path="/inputfile" element={<_InputFile {...props} />} />
              <Route exact path="/inputfiledragdrop" element={<_InputFileDragDrop {...props} />} />
              <Route exact path="/inputsuggestionobject" element={<_InputSuggestionObject {...props} />} />
              <Route exact path="/loadingboxtop" element={<_LoadingBoxTop {...props} />} />
              <Route exact path="/menu" element={<_Menu {...props} />} />
              <Route exact path="/menudropdown" element={<_MenuDropDown {...props} />} />
              <Route exact path="/menuheight" element={<_MenuHeight {...props} />} />
              <Route exact path="/menuhoverx" element={<_MenuHoverX {...props} />} />
              <Route exact path="/menuhovery" element={<_MenuHoverY {...props} />} />
              <Route exact path="/modal" element={<_Modal {...props} />} />
              <Route exact path="/overlay" element={<_Overlay {...props} />} />
              <Route exact path="/pagerstatic" element={<_PagerStatic {...props} />} />
              <Route exact path="/pagerdynamic" element={<_PagerDynamic {...props} />} />
              <Route exact path="/picture404" element={<_Picture404 {...props} />} />
              <Route exact path="/pill" element={<_Pill {...props} />} />
              <Route exact path="/popupbox" element={<_PopupBox {...props} />} />
              <Route exact path="/popupdata" element={<_PopupData {...props} />} />
              <Route exact path="/popuphover" element={<_PopupHover {...props} />} />
              <Route exact path="/preloader" element={<_Preloader {...props} />} />
              <Route exact path="/loadonscroll" element={<_LoadOnScroll {...props} />} />
              <Route exact path="/listswitch" element={<_ListSwitch {...props} />} />
              <Route exact path="/readmore" element={<_ReadMore {...props} />} />
              <Route exact path="/readmorecallback" element={<_ReadMoreCallback {...props} />} />
              <Route exact path="/ribbon" element={<_Ribbon {...props} />} />
              <Route exact path="/ribbonmultiple" element={<_RibbonMultiple {...props} />} />
              <Route exact path="/sidebar" element={<_Sidebar {...props} />} />
              <Route exact path="/slider" element={<_Slider {...props} />} />
              <Route exact path="/slidercard" element={<_SliderCard {...props} />} />
              <Route exact path="/sliderfullscreen" element={<_SliderFullscreen {...props} />} />
              <Route exact path="/slideritem" element={<_SliderItem {...props} />} />
              <Route exact path="/scrollto" element={<_ScrollTo {...props} />} />
              <Route exact path="/sourcecode" element={<_SourceCode {...props} />} />
              <Route exact path="/star" element={<_Star {...props} />} />
              <Route exact path="/step" element={<_Step {...props} />} />
              <Route exact path="/stepgenerator" element={<_StepGenerator {...props} />} />
              <Route exact path="/stepgeneratordragdrop" element={<_StepGeneratorDragDrop {...props} />} />
              <Route exact path="/suggestion" element={<_Suggestion {...props} />} />
              <Route exact path="/range" element={<_Range {...props} />} />
              <Route exact path="/table" element={<_Table {...props} />} />
              <Route exact path="/textwriter" element={<_TextWriter {...props} />} />
              <Route exact path="/timeline" element={<_Timeline {...props} />} />
              <Route exact path="/water404" element={<_Water404 {...props} />} />

              <Route exact path="/addGlobalMessage" element={<_FunctionAddGlobalMessage {...props} />} />
              <Route exact path="/uuid" element={<_FunctionUuid {...props} />} />
              <Route exact path="/disableHtmlScroll" element={<_FunctionDisableHtmlScroll {...props} />} />
              <Route exact path="/enableHtmlScroll" element={<_FunctionEnableHtmlScroll {...props} />} />
              <Route exact path="/scrollTopListener" element={<_FunctionScrollTopListener {...props} />} />
              <Route exact path="/scrollToTop" element={<_FunctionScrollToTop {...props} />} />
              <Route exact path="/urlExtract" element={<_FunctionUrlExtract {...props} />} />
              <Route exact path="/isObject" element={<_FunctionIsOject {...props} />} />
              <Route exact path="/isArray" element={<_FunctionIsArray {...props} />} />
              <Route exact path="/isInViewport" element={<_FunctionIsInViewport {...props} />} />
              <Route exact path="/copyArray" element={<_FunctionCopyArray {...props} />} />
              <Route exact path="/copyObject" element={<_FunctionCopyObject {...props} />} />
              <Route exact path="/isBoolean" element={<_FunctionIsBoolean {...props} />} />
              <Route exact path="/isFunction" element={<_FunctionIsFunction {...props} />} />
              <Route exact path="/isNumber" element={<_FunctionIsNumber {...props} />} />
              <Route exact path="/isString" element={<_FunctionIsString {...props} />} />

              <Route exact path="/releases/:release" element={<Releases {...props} />} /> */}
          {/* 404 */}
          {/* <Route
                element={
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
              /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
