module.exports=(()=>{var e={404:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>_});var s=i(221),a=i.n(s),o=i(837),n=i.n(o),r=i(924),l=i.n(r),u=i(946),c=i.n(u),d=i(33),v=i.n(d),h=i(491),p=i.n(h),m=i(22),w=i.n(m),g=i(246),f=i.n(g),y=i(323),M=i.n(y);const x=require("react");var b=i.n(x);const k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=!1;return e.map((function(e){i[e]!==t[e]&&(s=!0)})),s};var D=void 0;const S=function e(){var t=Math.floor(Date.now()/1e3),i="".concat(t).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(D!==i)return D=i,i;e()};function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,s=M()(e);if(t){var a=M()(this).constructor;i=Reflect.construct(s,arguments,a)}else i=s.apply(this,arguments);return f()(this,i)}}const _=function(e){w()(i,e);var t=T(i);function i(e){var s,a;return c()(this,i),(a=t.call(this,e)).handleTouchStart=a.handleTouchStart.bind(p()(a)),a.handleTouchMove=a.handleTouchMove.bind(p()(a)),a.handleTouchEnd=a.handleTouchEnd.bind(p()(a)),a.handleMouseDown=a.handleMouseDown.bind(p()(a)),a.processMouseDown=a.processMouseDown.bind(p()(a)),a.handleMouseMove=a.handleMouseMove.bind(p()(a)),a.handleMouseUp=a.handleMouseUp.bind(p()(a)),a.handleMouseLeave=a.handleMouseLeave.bind(p()(a)),a.resizeView=a.resizeView.bind(p()(a)),a.mouseDownListeners=a.mouseDownListeners.bind(p()(a)),a.mouseMoveListeners=a.mouseMoveListeners.bind(p()(a)),a.autoplay=a.autoplay.bind(p()(a)),a.toggleAutoplay=a.toggleAutoplay.bind(p()(a)),a.EscListener=a.EscListener.bind(p()(a)),a.preview_mouseDownListeners=a.preview_mouseDownListeners.bind(p()(a)),a.preview_mouseMoveListeners=a.preview_mouseMoveListeners.bind(p()(a)),a.preview_processMouseDown=a.preview_processMouseDown.bind(p()(a)),a.preview_handleMouseDown=a.preview_handleMouseDown.bind(p()(a)),a.preview_handleMouseMove=a.preview_handleMouseMove.bind(p()(a)),a.preview_handleMouseLeave=a.preview_handleMouseLeave.bind(p()(a)),a.preview_handleTouchStart=a.preview_handleTouchStart.bind(p()(a)),a.preview_handleTouchMove=a.preview_handleTouchMove.bind(p()(a)),a.preview_handleTouchEnd=a.preview_handleTouchEnd.bind(p()(a)),a.state=(s={slidesTransform:"translate3d(-0px,0,0)",slidesWidth:100,slideWrapperWidth:"100%",imagesTransform:"translate3d(-0px,0,0)",index:0,renderPreview:!0,autoplay:!1,sliderPreviewTransformation:0,ulAnimationDisabled:!0},n()(s,"autoplay",!1),n()(s,"moduleStyle",l()(!0)==l()(e.moduleStyle)&&e.moduleStyle),n()(s,"globalStyle",l()(!0)==l()(e.globalStyle)&&e.globalStyle),n()(s,"addClass",e.addClass&&l()("8")==l()(e.addClass)?e.addClass:""),n()(s,"defaultClass",e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-slider-fullscreen"),n()(s,"id",e.id&&l()("8")==l()(e.id)?e.id:""),n()(s,"data",e.data&&l()([])==l()(e.data)&&e.data.length?e.data:[]),n()(s,"slidersUuid",e.slidersUuid&&l()("8")===l()(e.slidersUuid)?e.slidersUuid:"".concat(S())),n()(s,"displayPagination",l()(!0)!=l()(e.displayPagination)||e.displayPagination),n()(s,"slideAfterMove",l()(8)==l()(e.slideAfterMove)?e.slideAfterMove:50),n()(s,"displayDots",l()(!0)!=l()(e.displayDots)||e.displayDots),n()(s,"displayDotsIndex",l()(!0)==l()(e.displayDotsIndex)&&e.displayDotsIndex),n()(s,"imageAsBackground",l()(!0)==l()(e.imageAsBackground)&&e.imageAsBackground),n()(s,"autoplayTime",e.autoplayTime&&l()(8)==l()(e.autoplayTime)&&0<e.autoplayTime?e.autoplayTime:5e3),n()(s,"autoplayNext",l()(!0)!=l()(e.autoplayNext)||e.autoplayNext),n()(s,"animationTime",e.animationTime&&l()("8")==l()(e.animationTime)?e.animationTime:"05"),n()(s,"wrapDirection",l()(!0)!=l()(e.wrapDirection)||e.wrapDirection),n()(s,"useLayerX",l()(!0)!=l()(e.useLayerX)||e.useLayerX),n()(s,"autoplayStopOnLast",l()(!0)!=l()(e.autoplayStopOnLast)||e.autoplayStopOnLast),n()(s,"displayPreview",l()(!0)!=l()(e.displayPreview)||e.displayPreview),n()(s,"previewWidth",e.previewWidth&&l()(8)==l()(e.previewWidth)?e.previewWidth:80),n()(s,"previewHeight",e.previewHeight&&l()(8)==l()(e.previewHeight)?e.previewHeight:70),n()(s,"previewMarginX",e.previewMarginX&&l()(8)==l()(e.previewMarginX)?e.previewMarginX:10),n()(s,"previewMarginY",e.previewMarginY&&l()(8)==l()(e.previewMarginY)?e.previewMarginY:10),n()(s,"previewToggle",e.previewToggle?e.previewToggle:"⇩"),n()(s,"toggleDirection",e.toggleDirection&&l()("8")==l()(e.toggleDirection)&&["left","right"].includes(e.toggleDirection)?e.toggleDirection:"right"),n()(s,"next",e.next?e.next:">>"),n()(s,"previous",e.previous?e.previous:"<<"),n()(s,"autoplayIcon",e.autoplayIcon?e.autoplayIcon:"🎞"),n()(s,"closeIcon",e.closeIcon?e.closeIcon:"x"),n()(s,"autoplayStopIcon",e.autoplayStopIcon?e.autoplayStopIcon:"🛑"),n()(s,"closeCallback",e.closeCallback&&l()((function(){}))===l()(e.closeCallback)?e.closeCallback:void 0),n()(s,"closeCallbackProps",e.closeCallbackProps),n()(s,"closeOnEsc",l()(!0)!=l()(e.closeOnEsc)||e.closeOnEsc),s),a.maxSlidePreviewSlide=a.state.data.length*a.state.previewWidth+a.state.data.length*a.state.previewMarginX,a.slideWidth=0,a.movex=0,a.longTouch=!1,a.mousestartx=0,a.blockMove=!1,a.mouseClicksStart=0,a.userMoving=!1,a.oldX=0,a.mouseDirection="r",a.abs=0,a.preview_movex=0,a.preview_mouseClicksStart=0,a.preview_oldX=0,a.preview_mouseDirection="r",a.preview_abs=0,a.previewWasMove=!1,a.moveTimeoutReset=void 0,a.tempTimeout=void 0,a.timeouterAutoplay=void 0,a}return v()(i,[{key:"componentDidMount",value:function(){this.state.data.length&&(this.addEscEventListener(),this.slideWidth=this.getSlidersWidth(),this.setSlidesWidth(),this.setResizeListener(),this.mouseDownListeners(),this.preview_mouseDownListeners(),this.setResizeListener(),this.resizeView())}},{key:"componentWillUnmount",value:function(){this.removeEscEventListener(),this.setResizeListener(!1),this.mouseDownListeners(!1),this.mouseMoveListeners(!1),this.preview_mouseDownListeners(!1),this.preview_mouseMoveListeners(!1),clearTimeout(this.timeouterAutoplay)}},{key:"autoplay",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=this.state.autoplay;if(clearTimeout(this.timeouterAutoplay),i&&t){var s=this.state,a=s.autoplayTime,o=s.autoplayNext;this.timeouterAutoplay=setTimeout((function(){return o&&e.state.index===e.state.data.length-1&&e.state.autoplayStopOnLast||!o&&0===e.state.index&&e.state.autoplayStopOnLast?(clearTimeout(e.timeouterAutoplay),e.setState({autoplay:!1,renderPreview:!0})):(o?e.slideNext():e.slidePrevious(),void e.autoplay(e.state.autoplay))}),a)}}},{key:"addEscEventListener",value:function(){this.state.closeOnEsc&&window.addEventListener("keydown",this.EscListener,!1)}},{key:"removeEscEventListener",value:function(){this.state.closeOnEsc&&window.removeEventListener("keydown",this.EscListener,!1)}},{key:"EscListener",value:function(e){"Escape"!==e.key&&"Esc"!==e.key&&27!==e.keyCode&&27!==e.which||this.closeFullscreenSlider()}},{key:"setResizeListener",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];window.removeEventListener("resize",this.resizeView),e&&window.addEventListener("resize",this.resizeView)}},{key:"resizeView",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.slideWidth=this.getSlidersWidth(),this.setSlidesWidth(),this.slide(),i&&setTimeout((function(){t.resizeView(null,!1)}),300)}},{key:"setSlidesWidth",value:function(){this.setState({slidesWidth:this.getSlidersWidth()*this.state.data.length,slideWrapperWidth:this.getSlidersWidth()*this.state.data.length/this.state.data.length})}},{key:"getSlidersWidth",value:function(){return this.wrapper?this.wrapper.getBoundingClientRect().width:0}},{key:"getMaxItemsInRow",value:function(){var e=this.state,t=e.previewWidth,i=e.previewMarginX;return parseInt(document.documentElement.getBoundingClientRect().width/(t+i))}},{key:"slide",value:function(){var e=this,t=this.state,i=t.data,s=t.index,a=t.previewMarginX,o=t.previewWidth,n=t.displayPreview;if(i&&i[s]&&i[s].callback&&l()((function(){}))==l()(i[s].callback)&&i[s].callback(s,i[s].callbackProps),n&&s&&s>this.getMaxItemsInRow()/2){var r=parseInt(s-this.getMaxItemsInRow()/2),u=r*o+r*a;0<=u&&document.documentElement.getBoundingClientRect().width+u-a<this.maxSlidePreviewSlide&&(this.preview_movex=u),u>this.maxSlidePreviewSlide&&(this.preview_movex=this.maxSlidePreviewSlide-o)}else this.preview_movex=0;this.setState({ulAnimationDisabled:!1,dataTransform:"translate3d(-(".concat(0,")px,0,0)"),slidesTransform:"translate3d(-".concat(s*this.state.slideWrapperWidth,"px,0,0)"),sliderPreviewTransformation:"translate3d(-".concat(this.preview_movex,"px,0,0)")},(function(){clearTimeout(e.tempTimeout),e.tempTimeout=setTimeout((function(){e.setState({ulAnimationDisabled:!0})}),300)}))}},{key:"slidePrevious",value:function(){var e=this.state.index;0===e&&(e=this.state.wrapDirection?this.state.data.length:1),e-=1,this.setState({index:e},this.slide)}},{key:"slideNext",value:function(){var e=this.state.index;e===this.state.data.length-1&&(e=this.state.wrapDirection?-1:this.state.data.length-2),e+=1,this.setState({index:e},this.slide)}},{key:"setSlide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.state.autoplay&&t||(l()("8")==l()(e)&&(e=parseInt(e)),this.setState({index:e},this.slide))}},{key:"setDirection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.oldX<e?this.mouseDirection="l":this.mouseDirection="r",this.oldX=e}},{key:"getDirection",value:function(){return this.mouseDirection}},{key:"setAbs",value:function(e){this.abs=e}},{key:"getAbs",value:function(){return this.abs}},{key:"allowSlideRight",value:function(){return"r"==this.getDirection()&&this.state.index<this.state.data.length-1}},{key:"allowSlideLeft",value:function(){return"l"==this.getDirection()&&0<this.state.index}},{key:"preview_setDirection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.preview_oldX<e?this.preview_mouseDirection="r":this.preview_mouseDirection="l",this.preview_oldX=e}},{key:"preview_getDirection",value:function(){return this.preview_mouseDirection}},{key:"mouseDownListeners",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.wrapper&&(this.wrapper.removeEventListener("mousedown",this.processMouseDown),e&&this.wrapper.addEventListener("mousedown",this.processMouseDown))}},{key:"mouseMoveListeners",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.wrapper&&(this.wrapper.removeEventListener("mousemove",this.handleMouseMove),e&&this.wrapper.addEventListener("mousemove",this.handleMouseMove))}},{key:"processMouseDown",value:function(e){e.preventDefault(),this.handleMouseDown(e)}},{key:"handleMouseDown",value:function(e){var t=this;this.state.useLayerX?this.mousestartx=e.layerX:this.mousestartx=e.clientX,this.mouseClicksStart=performance.now(),this.blockMove=!1,this.userMoving=!1,this.mouseMoveListeners(),setTimeout((function(){t.userMoving&&!t.blockMove||t.mouseMoveListeners(!1)}),200)}},{key:"handleMouseMove",value:function(e){if(!this.state.autoplay)if(this.userMoving=!0,this.blockMove)this.mouseMoveListeners(!1);else{var t=this.state.index;this.state.useLayerX?this.setDirection(e.pageX):this.setDirection(e.clientX),this.setAbs(Math.abs(t*this.slideWidth-this.movex)),this.state.useLayerX?this.movex=t*this.slideWidth+(this.mousestartx-e.layerX):this.movex=t*this.slideWidth+(this.mousestartx-e.clientX),this.movex<this.slideWidth*(this.state.data.length-1)&&this.setState({slidesTransform:"translate3d(-".concat(this.movex,"px,0,0)")})}}},{key:"handleMouseUp",value:function(){if(!this.state.autoplay){if(this.blockMove=!0,115>=performance.now()-this.mouseClicksStart||!this.userMoving)return this.userMoving=!1,void this.mouseMoveListeners(!1);var e=this.state,t=e.index,i=e.slideAfterMove;this.getAbs()>i&&(this.allowSlideRight()&&(t+=1),this.allowSlideLeft()&&(t-=1)),this.userMoving=!1,this.mouseMoveListeners(!1),this.setState({index:t},this.slide)}}},{key:"handleMouseLeave",value:function(){if(!this.state.autoplay){var e=this.state,t=e.index,i=e.slideAfterMove;this.blockMove=!0,this.userMoving&&(this.mouseMoveListeners(!1),this.getAbs()>i&&(this.allowSlideRight()&&(t+=1),this.allowSlideLeft()&&(t-=1)),this.userMoving=!1,this.mouseMoveListeners(!1),this.setState({index:t},this.slide))}}},{key:"handleClick",value:function(){var e=this;if(!this.state.autoplay)return this.blockMove=!0,this.mouseMoveListeners(!1),this.userMoving=!1,setTimeout((function(){e.blockMove=!1}),100)}},{key:"preview_mouseDownListeners",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.sliderPreviewRef&&(this.sliderPreviewRef.removeEventListener("mousedown",this.preview_processMouseDown),e&&this.sliderPreviewRef.addEventListener("mousedown",this.preview_processMouseDown))}},{key:"preview_mouseMoveListeners",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.sliderPreviewRef&&(this.sliderPreviewRef.removeEventListener("mousemove",this.preview_handleMouseMove),e&&this.sliderPreviewRef.addEventListener("mousemove",this.preview_handleMouseMove))}},{key:"preview_processMouseDown",value:function(e){this.state.autoplay||(e.preventDefault(),this.preview_handleMouseDown())}},{key:"preview_handleMouseDown",value:function(){var e=this;this.state.autoplay||(this.preview_userMoving=!1,this.preview_mouseMoveListeners(),setTimeout((function(){e.preview_userMoving||e.preview_mouseMoveListeners(!1)}),200))}},{key:"preview_handleMouseMove",value:function(e){var t=this;if(!this.state.autoplay){this.preview_userMoving=!0;var i=this.state,s=i.previewMarginX,a=i.previewWidth;this.state.useLayerX?this.preview_setDirection(e.pageX):this.preview_setDirection(e.clientX),this.state.useLayerX,"l"==this.preview_getDirection()&&document.documentElement.getBoundingClientRect().width+this.preview_movex-(a+s)<=this.maxSlidePreviewSlide&&(this.preview_movex+=10),"r"==this.preview_getDirection()&&-s<this.preview_movex&&(this.preview_movex-=10),0>this.preview_movex&&(this.preview_movex=0),0<=this.preview_movex&&document.documentElement.getBoundingClientRect().width+this.preview_movex<=this.maxSlidePreviewSlide&&this.setState({sliderPreviewTransformation:"translate3d(-".concat(this.preview_movex,"px,0,0)")}),this.previewWasMove=!0,clearTimeout(this.moveTimeoutReset),this.moveTimeoutReset=setTimeout((function(){t.previewWasMove=!1}),500)}}},{key:"preview_handleMouseLeave",value:function(e){this.state.autoplay||(e.preventDefault(),this.previewWasMove=!1,this.preview_mouseMoveListeners(!1),this.enableAnimationTime())}},{key:"handleTouchStart",value:function(e){this.state.autoplay||(this.longTouch=!1,setTimeout((function(){this.longTouch=!0}),250),this.touchstartx=e.touches[0].pageX)}},{key:"handleTouchMove",value:function(e){if(!this.state.autoplay){this.userMoving=!0;var t=this.state.index;this.movex=t*this.slideWidth+(this.touchstartx-e.touches[0].pageX),this.setDirection(e.touches[0].pageX),this.setAbs(Math.abs(t*this.slideWidth-this.movex)),this.movex<this.slideWidth*(this.state.data.length-1)&&this.setState({slidesTransform:"translate3d(-".concat(this.movex,"px,0,0)")})}}},{key:"handleTouchEnd",value:function(){if(!this.state.autoplay){var e=this.state,t=e.index,i=e.slideAfterMove;this.blockMove=!0,this.userMoving&&(this.mouseMoveListeners(!1),this.getAbs()>i&&(this.allowSlideRight()&&(t+=1),this.allowSlideLeft()&&(t-=1)),this.userMoving=!1,this.mouseMoveListeners(!1),this.setState({index:t},this.slide))}}},{key:"preview_handleTouchStart",value:function(){this.state.autoplay||(this.preview_userMoving=!1)}},{key:"preview_handleTouchMove",value:function(e){var t=this;if(!this.state.autoplay){this.preview_userMoving=!0;var i=this.state.previewMarginX;this.preview_setDirection(e.touches[0].pageX),this.state.useLayerX,"l"==this.preview_getDirection()&&document.documentElement.getBoundingClientRect().width+this.preview_movex<=this.maxSlidePreviewSlide&&(this.preview_movex+=10),"r"==this.preview_getDirection()&&-i<this.preview_movex&&(this.preview_movex-=10),0>this.preview_movex&&(this.preview_movex=0),0<=this.preview_movex&&document.documentElement.getBoundingClientRect().width+this.preview_movex-i<=this.maxSlidePreviewSlide&&this.setState({sliderPreviewTransformation:"translate3d(-".concat(this.preview_movex,"px,0,0)")}),this.previewWasMove=!0,clearTimeout(this.moveTimeoutReset),this.moveTimeoutReset=setTimeout((function(){t.previewWasMove=!1}),500)}}},{key:"preview_handleTouchEnd",value:function(){this.state.autoplay||(this.previewWasMove=!1)}},{key:"getButtonPreviousJsx",value:function(){var e=this,t=this.state,i=t.previous,s=t.data;if(t.index>0&&2<=s.length)return b().createElement("span",{className:"button-previous-wrapper"},b().createElement("span",{className:"button-previous",onClick:function(){return e.slidePrevious()}},i))}},{key:"getButtonNextJsx",value:function(){var e=this,t=this.state,i=t.next,s=t.data;if(t.index<s.length-1&&2<=s.length)return b().createElement("span",{className:"button-next-wrapper"},b().createElement("span",{className:"button-next",onClick:function(){return e.slideNext()}},i))}},{key:"getDotsJsx",value:function(){var e=this,t=this.state,i=t.data,s=t.displayDotsIndex,a=t.index;if(!(2>i.length)){return b().createElement("div",{className:"pagination"},b().createElement("div",{className:"actions"},i.map((function(t,o){return b().createElement("span",{className:"action ".concat(a===o?"active":""),onClick:function(){return e.setSlide(o)},key:"paginations-dot-".concat(o)},s&&"".concat(o+1),!s&&function(e){return i&&void 0!==i[e]&&void 0!==i[e].dot?i[e].dot:null}(o))}))))}}},{key:"togglePreview",value:function(){this.setState({renderPreview:!this.state.renderPreview})}},{key:"closeFullscreenSlider",value:function(){var e=this.state,t=e.closeCallback,i=e.closeCallbackProps;t&&t(i)}},{key:"disableAnimationTime",value:function(e){e.preventDefault(),this.state.ulAnimationDisabled||this.setState({ulAnimationDisabled:!0})}},{key:"enableAnimationTime",value:function(){this.state.ulAnimationTime&&this.setState({ulAnimationDisabled:!1})}},{key:"toggleAutoplay",value:function(){var e=this;this.setState({autoplay:!this.state.autoplay,renderPreview:!1==!this.state.autoplay},(function(){e.autoplay(e.state.autoplay),e.state.autoplay?e.mouseDownListeners(!1):e.mouseDownListeners()}))}},{key:"render",value:function(){var e=this,t=this.state,i=t.addClass,s=t.defaultClass,o=t.id,n=t.animationTime,r=t.previewToggle,u=t.displayDots,c=t.autoplay,d=t.autoplayStopIcon,v=t.autoplayIcon,h=t.ulAnimationDisabled,p=t.closeIcon,m=t.displayPagination,w=t.renderPreview,g=t.toggleDirection,f=t.slidersUuid,y=t.data,M=t.index,x=t.displayPreview,k=t.slidesWidth,D=t.previewMarginX,S=t.previewMarginY,T=t.previewWidth,_=t.previewHeight,L=t.sliderPreviewTransformation,E=t.imageAsBackground,P=t.slidesTransform,C=t.imagesTransform,W=t.slideWrapperWidth;return b().createElement("div",{className:"".concat(s," ").concat(i," animate-").concat(n),id:o},b().createElement("div",{key:"wrapper-".concat(f),className:"slider-wrapper",ref:function(t){return e.wrapper=t},onTouchStart:function(t){return e.handleTouchStart(t)},onTouchMove:function(t){return e.handleTouchMove(t)},onTouchEnd:function(t){return e.handleTouchEnd(t)},onClick:function(t){return e.handleClick(t)},onMouseUp:function(t){return e.handleMouseUp(t)},onMouseLeave:function(t){return e.handleMouseLeave(t)}},b().createElement("div",{className:"fullscreen-media"},b().createElement("div",{className:"media"},b().createElement("span",{className:"action action-close",onClick:function(){return e.closeFullscreenSlider()}},p),v&&b().createElement("span",{className:"action action-autplay",onClick:function(){return e.toggleAutoplay()}},!c&&v,c&&d&&d,c&&!d&&v))),m&&!c&&this.getButtonPreviousJsx(),b().createElement("div",{className:"slides user-select-none animate-".concat(n),style:{transform:"".concat(P),width:"".concat(k,"px")}},0!==y.length&&y.map((function(e,t){if(l()({})===l()(e)&&null!=e.image&&l()("8")===l()(e.image)){var i=e.image,s=e.data;return b().createElement("div",{key:"slide-wrapper-".concat(f,"-").concat(t),className:"slide-wrapper",style:{width:"".concat(W,"px")}},b().createElement("div",{className:"slide"},b().createElement("span",{className:"slide-image-span"},E&&b().createElement("div",{className:"slide-image slide-image-data-wrapper animate-".concat(n),style:{transform:"".concat(C),backgroundImage:"url(".concat(i,")")}},s&&b().createElement("div",{className:"slide-image-data"},s)),!E&&b().createElement("img",{className:"slide-image animate-".concat(n),src:i,style:{transform:"".concat(C)}}))))}}))),u&&!c&&this.getDotsJsx(),m&&!c&&this.getButtonNextJsx()),x&&b().createElement("div",{className:"slider-preview ".concat(w?"show":"hidden")},r&&b().createElement("div",{className:"preview-toggle ".concat(g),onClick:function(){return e.togglePreview()}},b().createElement("span",{className:"data"},r)),b().createElement("div",{className:"preview"},b().createElement("ul",{ref:function(t){return e.sliderPreviewRef=t},style:{width:"".concat(this.maxSlidePreviewSlide,"px"),transform:"".concat(L)},className:"preview-ul ".concat(h?"animation-time-0":""),onTouchStart:function(t){return e.preview_handleTouchStart(t)},onTouchMove:function(t){return e.preview_handleTouchMove(t)},onTouchEnd:function(t){return e.preview_handleTouchEnd(t)},onMouseLeave:function(t){return e.preview_handleMouseLeave(t)},onClick:function(t){return e.preview_handleMouseLeave(t)},onMouseUp:function(t){return e.preview_handleMouseLeave(t)}},y.map((function(t,i){if(l()({})===l()(t)&&null!=t.image&&l()("8")===l()(t.image)){var s=t.image,o=t.data;return b().createElement("li",a()({key:"slide-image-".concat(i,"-").concat(f),onClick:function(){return e.setSlide(i,!0)},className:"preview-li ".concat(M==i?"active":"")},(10!==D||10!==S||80!==T||70!==_)&&{style:{width:"".concat(T,"px"),height:"".concat(_,"px"),margin:"".concat(D,"px ").concat(S)}}),b().createElement("span",{className:"slide-image-span"},E&&b().createElement("div",{className:"slide-image slide-image-data-wrapper animate-".concat(n),style:{transform:"".concat(C),backgroundImage:"url(".concat(s,")")}},o&&b().createElement("div",{className:"slide-image-data"},o)),!E&&b().createElement("img",{className:"slide-image animate-".concat(n),src:s,style:{transform:"".concat(C)}})))}}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return k(["addClass","defaultClass","id","displayPagination","slideAfterMove","previewWidth","previewHeight","previewMarginX","previewMarginY","displayPreview","wrapDirection","previewToggle","toggleDirection","next","previous","imageAsBackground","autoplayIcon","closeIcon","useLayerX","autoplayTime","autoplayNext","animationTime","data","displayDots","displayDotsIndex","autoplayStopOnLast","autoplayStopIcon","closeCallback","closeCallbackProps","closeOnEsc"],e,t)?{addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-slider-fullscreen",id:e.id&&l()("8")==l()(e.id)?e.id:"",data:e.data&&l()([])==l()(e.data)&&e.data.length?e.data:[],displayPagination:l()(!0)!=l()(e.displayPagination)||e.displayPagination,slideAfterMove:l()(8)==l()(e.slideAfterMove)?e.slideAfterMove:50,displayDots:l()(!0)!=l()(e.displayDots)||e.displayDots,displayDotsIndex:l()(!0)==l()(e.displayDotsIndex)&&e.displayDotsIndex,imageAsBackground:l()(!0)==l()(e.imageAsBackground)&&e.imageAsBackground,autoplayTime:e.autoplayTime&&l()(8)==l()(e.autoplayTime)&&0<e.autoplayTime?e.autoplayTime:5e3,autoplayNext:l()(!0)!=l()(e.autoplayNext)||e.autoplayNext,animationTime:e.animationTime&&l()("8")==l()(e.animationTime)?e.animationTime:"05",wrapDirection:l()(!0)!=l()(e.wrapDirection)||e.wrapDirection,useLayerX:l()(!0)!=l()(e.useLayerX)||e.useLayerX,autoplayStopOnLast:l()(!0)!=l()(e.autoplayStopOnLast)||e.autoplayStopOnLast,displayPreview:l()(!0)!=l()(e.displayPreview)||e.displayPreview,previewWidth:e.previewWidth&&l()(8)==l()(e.previewWidth)?e.previewWidth:80,previewHeight:e.previewHeight&&l()(8)==l()(e.previewHeight)?e.previewHeight:70,previewMarginX:e.previewMarginX&&l()(8)==l()(e.previewMarginX)?e.previewMarginX:10,previewMarginY:e.previewMarginY&&l()(8)==l()(e.previewMarginY)?e.previewMarginY:10,previewToggle:e.previewToggle?e.previewToggle:"⇩",toggleDirection:e.toggleDirection&&l()("8")==l()(e.toggleDirection)&&["left","right"].includes(e.toggleDirection)?e.toggleDirection:"right",next:e.next?e.next:">>",previous:e.previous?e.previous:"<<",autoplayIcon:e.autoplayIcon?e.autoplayIcon:"🎞",closeIcon:e.closeIcon?e.closeIcon:"x",autoplayStopIcon:e.autoplayStopIcon?e.autoplayStopIcon:"🛑",closeCallback:e.closeCallback&&l()((function(){}))===l()(e.closeCallback)?e.closeCallback:void 0,closeCallbackProps:e.closeCallbackProps,closeOnEsc:l()(!0)!=l()(e.closeOnEsc)||e.closeOnEsc}:null}}]),i}(b().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}e.exports=function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}},837:e=>{e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(i){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(i)}e.exports=t},22:(e,t,i)=>{var s=i(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}},246:(e,t,i)=>{var s=i(924),a=i(491);e.exports=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?a(e):t}},596:e=>{function t(i,s){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(i,s)}e.exports=t},924:e=>{function t(i){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(i)}e.exports=t}},t={};function i(s){if(t[s])return t[s].exports;var a=t[s]={exports:{}};return e[s](a,a.exports,i),a.exports}return i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(404)})();