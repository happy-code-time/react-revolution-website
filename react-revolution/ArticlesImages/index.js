module.exports=(()=>{var t={91:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>P});var n=a(221),o=a.n(n),i=a(924),r=a.n(i),l=a(946),s=a.n(l),c=a(33),u=a.n(c),d=a(491),g=a.n(d),f=a(22),m=a.n(f),p=a(246),h=a.n(p),y=a(323),v=a.n(y);const b=require("react");var k=a.n(b),C="https://react-revolution.j.pl/";const O=function(t,e,a){var n="".concat(C,"public/react-revolution/").concat("v4.0.5","/css/").concat(a,".css"),o="".concat(C,"public/react-revolution/").concat("v4.0.5","/css/react-revolution.css"),i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css");var r=function(){document.getElementsByTagName("head")[0].prepend(i)};if(t){var l="react-revolution-".concat(a);null==document.getElementById(l)&&(i.setAttribute("id",l),i.setAttribute("href",n),r())}if(e){var s="react-revolution-react-revolution";null==document.getElementById(s)&&(i.setAttribute("id",s),i.setAttribute("href",o),r())}};var x=void 0;const S=function t(){var e=Math.floor(Date.now()/1e3),a="".concat(e).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(x!==a)return x=a,a;t()};const w=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=[],o=function t(){var e="".concat(S());return n.includes(e)&&t(),e};if(e&&e.length)for(var i=0;i<=e.length-1;i++)null==e[i].toggled&&(e[i].toggled=!1),null==e[i].uuid&&(e[i].unique="".concat(o())),null==e[i].key&&(e[i].key=e[i].text?"single-entry-".concat(i,"-").concat(e[i].text):"".concat(o())),null==e[i].classList&&(e[i].classList=""),null==e[i].loopCount&&(e[i].loopCount=1),null==e[i].isActive&&(e[i].isActive=!1),null==e[i].classListChildren&&(e[i].classListChildren=""),a&&e[i].data&&r()([])==r()(e[i].data)&&e[i].data.length&&(e[i].childrensNestedCount=a.childrensNestedCount+1),a||(e[i].childrensNestedCount=1),e[i].parentElement=a,e[i].data&&r()([])==r()(e[i].data)&&e[i].data.length?(t(e[i].data,e[i]),e[i].isParent=!0):e[i].isParent=!1;return e};const B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return t.map((function(t){a[t]!==e[t]&&(n=!0)})),n};function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=v()(t);if(e){var o=v()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return h()(this,a)}}const P=function(t){m()(a,t);var e=E(a);function a(t){var n;return s()(this,a),(n=e.call(this,t)).buildData=n.buildData.bind(g()(n)),n.toggleAllBack=n.toggleAllBack.bind(g()(n)),n.resize=n.resize.bind(g()(n)),n.handleBlur=n.handleBlur.bind(g()(n)),n.state={isMinified:!1,moduleStyle:r()(!0)==r()(t.moduleStyle)&&t.moduleStyle,globalStyle:r()(!0)==r()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&r()("8")==r()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&r()("8")==r()(t.defaultClass)?t.defaultClass:"rr-articles-images",id:t.id&&r()("8")==r()(t.id)?t.id:"",closeOnClickOutside:r()(!0)==r()(t.closeOnClickOutside)&&t.closeOnClickOutside,data:t.data&&r()([])==r()(t.data)?w(t.data):[],animation:t.animation&&r()("8")==r()(t.animation)?t.animation:void 0,itemsPerLine:r()(8)==r()(t.itemsPerLine)?t.itemsPerLine:3,mediaBreak:t.mediaBreak&&r()(8)==r()(t.mediaBreak)?t.mediaBreak:void 0,toggleOn:t.toggleOn&&r()("8")==r()(t.toggleOn)?t.toggleOn:"",toggleForwards:t.toggleForwards?t.toggleForwards:"",toggleBackwards:t.toggleBackwards?t.toggleBackwards:"",persist:r()(!0)==r()(t.persist)&&t.persist},n.refNode=k().createRef(),n}return u()(a,[{key:"componentDidMount",value:function(){O(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.state.mediaBreak&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"componentWillUnmount",value:function(){this.state.mediaBreak&&window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var t=this.state,e=t.mediaBreak,a=t.isMinified;document.documentElement.getBoundingClientRect().width<=e?a||this.setState({isMinified:!0},this.buildData):a&&this.setState({isMinified:!1},this.buildData)}},{key:"handleBlur",value:function(t){t.currentTarget.contains(t.relatedTarget)||this.toggleAllBack()}},{key:"buildData",value:function(t){var e=this,a=this.state,n=a.itemsPerLine,i=a.isMinified,l=a.toggleForwards,s=a.toggleBackwards,c=this.state,u=c.toggleOn,d=c.persist,g="group flex ".concat(i?"flex-column isMinified":"flex-row"),f=[],m=[];if(t&&t.length){u&&["title","text"].includes(u)||(u="box");for(var p=function(a){var i=!0,c=t[a],p=c.title,h=c.titleProps,y=c.text,v=c.textProps,b=c.image,C=c.imageProps,O=c.imageData,x=c.toggled,w=c.unique,B=c.classList,E=c.href,P=(c.icon,c.childrensNestedCount,c.key),L=c.dataToggle,N=c.border;L&&x&&d&&(i=!1),E&&r()("8")==r()(E)&&(E=E.toLowerCase()),B||(B=""),h&&r()(h)===r()({})||(h={}),C&&r()(C)===r()({})||(C={});try{Object.keys(h),Object.keys(C)}catch(t){h={},C={}}var j=[];p&&(r()("8")==r()(p)?j.push(k().createElement("h1",o()({key:S(),className:"title ".concat("title"==u&&L&&x&&d?"data-toggled":"")},h,"title"==u&&!l&&i&&{onClick:function(t){return e.toggle(w)}}),p)):j.push(k().createElement("div",o()({key:S(),className:"title ".concat("title"==u&&L&&x&&d?"data-toggled":"")},h,"title"==u&&!l&&i&&{onClick:function(t){return e.toggle(w)}}),p))),y&&(r()("8")==r()(p)?j.push(k().createElement("span",o()({key:S(),className:"text ".concat("text"==u&&L&&x&&d?"data-toggled":"")},v,"text"==u&&!l&&i&&{onClick:function(t){return e.toggle(w)}}),y)):j.push(k().createElement("span",o()({key:S(),className:"text ".concat("text"==u&&L&&x&&d?"data-toggled":"")},v,"text"==u&&!l&&i&&{onClick:function(t){return e.toggle(w)}}),y,L&&x&&k().createElement("span",{key:S(),className:B},L))));var M=!1,A={};if(N&&r()({})==r()(N)){var D=N.site,_=N.width,T=N.color;if(D&&_&&T)if(r()("8")==r()(D)&&["top","right","bottom","left"].includes(D)&&r()(8)==r()(_)&&r()("8")==r()(T))A["border".concat(D.charAt(0).toUpperCase()).concat(D.substring(1,D.length))]="".concat(_,"px solid ").concat(T),M=!0}m.push(k().createElement("div",o()({key:P,className:"single-entry ".concat("box"==u&&L&&x&&d?"data-toggled":"")},"box"==u&&!l&&i&&{onClick:function(t){return e.toggle(w)}}),M&&k().createElement("div",{className:"border",style:A}),b&&r()("8")==r()(b)&&k().createElement("div",{className:"image-holder"},k().createElement("div",o()({className:"image"},C,{style:{backgroundImage:"url(".concat(b,")")}}),O&&k().createElement("div",{className:"image-data"},O))),j&&j,!x&&l&&k().createElement("span",l&&i&&{onClick:function(t){return e.toggle(w)}},l),L&&x&&k().createElement("span",{key:S(),className:B},L),x&&s&&!d&&k().createElement("span",s&&i&&{onClick:function(t){return e.toggle(w)}},s))),(m.length==n||m.length&&a==t.length-1)&&(f.push(k().createElement("div",{key:S(),className:g},m)),m=[])},h=0;h<=t.length-1;h++)p(h)}return f}},{key:"toggle",value:function(t){var e,a=this,n=this.state,o=n.data,i=n.persist,l=this.state.animation,s=0;if(["height","scale","opacity"].includes(l)||(l=void 0),o&&o.length)for(var c=function(n){if(o[n].unique==t)return l&&(s=300),i&&0==!o[n].toggled?{v:null}:(0==(e=!o[n].toggled)?o[n].classList="".concat(o[n].classList," ").concat(l?"animation-".concat(l,"-back"):""):(o[n].classList="toggling ".concat(l?"animation-".concat(l):""),o[n].toggled=!0,setTimeout((function(){o[n].classList="toggled ".concat(l?"animation-".concat(l):""),a.setState({data:o})}),s)),e?a.setState({data:o}):a.setState({data:o},(function(){setTimeout((function(){o[n].classList="",o[n].toggled=!1,a.setState({data:o})}),s)})),"break")},u=0;u<=o.length-1;u++){var d=c(u);if("break"===d)break;if("object"===r()(d))return d.v}}},{key:"toggleAllBack",value:function(){var t=this,e=this.state,a=e.data,n=e.persist,o=this.state.animation,i=0;if(["height","scale","opacity"].includes(o)||(o=void 0),a&&a.length)for(var r=function(e){o&&(i=300),a[e].classList="".concat(a[e].classList," ").concat(o?"animation-".concat(o,"-back"):"");t.setState({data:a},(function(){setTimeout((function(){a[e].toggled=!!n,a[e].classList="",t.setState({data:a})}),i)}))},l=0;l<=a.length-1;l++)r(l)}},{key:"render",value:function(){var t=this,e=this.state,a=e.addClass,n=e.defaultClass,i=e.id,r=e.data,l=e.closeOnClickOutside;return k().createElement("div",o()({className:"".concat(n," ").concat(a),id:i},1==l&&{onBlur:function(e){return t.handleBlur(e)}},{tabIndex:"0"}),this.buildData(r))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return B(["moduleStyle","globalStyle","addClass","defaultClass","id","data","animation","itemsPerLine","mediaBreak","toggleOn","toggleForwards","persist","toggleBackwards"],t,e)?{moduleStyle:r()(!0)==r()(t.moduleStyle)&&t.moduleStyle,globalStyle:r()(!0)==r()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&r()("8")==r()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&r()("8")==r()(t.defaultClass)?t.defaultClass:"rr-articles-images",id:t.id&&r()("8")==r()(t.id)?t.id:"",closeOnClickOutside:r()(!0)==r()(t.closeOnClickOutside)&&t.closeOnClickOutside,data:t.data&&r()([])==r()(t.data)?w(t.data):[],animation:t.animation&&r()("8")==r()(t.animation)?t.animation:void 0,itemsPerLine:r()(8)==r()(t.itemsPerLine)?t.itemsPerLine:3,mediaBreak:t.mediaBreak&&r()(8)==r()(t.mediaBreak)?t.mediaBreak:void 0,toggleOn:t.toggleOn&&r()("8")==r()(t.toggleOn)?t.toggleOn:"",toggleForwards:t.toggleForwards?t.toggleForwards:"",toggleBackwards:t.toggleBackwards?t.toggleBackwards:"",persist:r()(!0)==r()(t.persist)&&t.persist}:null}}]),a}(k().Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}},221:t=>{function e(){return t.exports=e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},e.apply(this,arguments)}t.exports=e},323:t=>{function e(a){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(a)}t.exports=e},22:(t,e,a)=>{var n=a(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},246:(t,e,a)=>{var n=a(924),o=a(491);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},596:t=>{function e(a,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(a,n)}t.exports=e},924:t=>{function e(a){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(a)}t.exports=e}},e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}return a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a(91)})();