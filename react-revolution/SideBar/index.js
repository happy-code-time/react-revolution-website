module.exports=(()=>{var e={291:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var o=r(221),n=r.n(o),a=r(924),l=r.n(a),s=r(946),u=r.n(s),i=r(33),c=r.n(i),f=r(22),d=r.n(f),p=r(246),m=r.n(p),v=r(323),h=r.n(v);const y=require("react");var g=r.n(y);const b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1;return e.map((function(e){r[e]!==t[e]&&(o=!0)})),o};var x="https://react-revolution.j.pl/";const S=function(e,t,r){var o="".concat(x,"public/react-revolution/").concat("v4.0.6","/css/").concat(r,".css"),n="".concat(x,"public/react-revolution/").concat("v4.0.6","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var s="react-revolution-".concat(r);null==document.getElementById(s)&&(a.setAttribute("id",s),a.setAttribute("href",o),l())}if(t){var u="react-revolution-react-revolution";null==document.getElementById(u)&&(a.setAttribute("id",u),a.setAttribute("href",n),l())}};function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=h()(e);if(t){var n=h()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return m()(this,r)}}const P=function(e){d()(r,e);var t=C(r);function r(e){var o;return u()(this,r),(o=t.call(this,e)).state={moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-sidebar",id:e.id&&l()("8")==l()(e.id)?e.id:"",image:e.image&&l()({})==l()(e.image)?e.image:void 0,moduleMenu:e.moduleMenu&&l()({})==l()(e.moduleMenu)?e.moduleMenu:void 0,textLong:e.textLong?e.textLong:void 0,textShort:e.textShort?e.textShort:void 0,href:e.href&&l()("8")==l()(e.href)?e.href:void 0,hrefProps:e.hrefProps&&l()({})==l()(e.hrefProps)?e.hrefProps:void 0},o}return c()(r,[{key:"componentDidMount",value:function(){S(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"render",value:function(){var e=this.state,t=e.defaultClass,r=e.id,o=e.addClass,a=e.moduleMenu,s=e.image,u=e.textLong,i=e.textShort,c=e.href,f=e.hrefProps;return g().createElement("div",{className:"".concat(t," ").concat(o),id:r},g().createElement("div",{className:"logo-text"},c&&g().createElement("a",n()({href:c,className:"logo-text-href flex"},f),s&&g().createElement("div",{className:"logo"},s),g().createElement("div",{className:"text"},u&&l()("8")==l()(u)&&g().createElement("span",{className:"long"},u),u&&l()("8")!==l()(u)&&u,i&&l()("8")==l()(i)&&g().createElement("span",{className:"short"},i),i&&l()("8")!==l()(i)&&i)),!c&&g().createElement("div",{className:"logo-text flex"},s&&g().createElement("div",{className:"logo"},s),g().createElement("div",{className:"text"},u&&g().createElement("span",{className:"long"},u),i&&g().createElement("span",{className:"short"},i)))),a&&a)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return b(["addClass","defaultClass","id","image","moduleMenu","textLong","textShort","href","hrefProps"],e,t)?{addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-sidebar",id:e.id&&l()("8")==l()(e.id)?e.id:"",image:e.image&&l()({})==l()(e.image)?e.image:void 0,moduleMenu:e.moduleMenu&&l()({})==l()(e.moduleMenu)?e.moduleMenu:void 0,textLong:e.textLong?e.textLong:void 0,textShort:e.textShort?e.textShort:void 0,href:e.href&&l()("8")==l()(e.href)?e.href:void 0,hrefProps:e.hrefProps&&l()({})==l()(e.hrefProps)?e.hrefProps:void 0}:null}}]),r}(g().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},22:(e,t,r)=>{var o=r(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},246:(e,t,r)=>{var o=r(924),n=r(491);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?n(e):t}},596:e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,o)}e.exports=t},924:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t}},t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(291)})();