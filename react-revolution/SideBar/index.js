module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=require("react")},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}},function(e,t,r){var o=r(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,r){var o=r(0),n=r(9);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?n(e):t}},function(e,t){function r(t,o){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,o)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){"use strict";r.r(t);var o=r(3),n=r.n(o),a=r(0),l=r.n(a),u=r(4),i=r.n(u),s=r(5),c=r.n(s),f=r(6),d=r.n(f),p=r(7),m=r.n(p),v=r(2),h=r.n(v),y=r(1),g=r.n(y),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1;return e.map((function(e){r[e]!==t[e]&&(o=!0)})),o},x="https://react-revolution.j.pl/";x="http://localhost:3000/";var S=function(e,t,r){var o="".concat(x,"/public/react-revolution/").concat("v2.0.0","/css/").concat(r,".css"),n="".concat(x,"/public/react-revolution/").concat("v2.0.0","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var u="react-revolution-".concat(r);null==document.getElementById(u)&&(a.setAttribute("id",u),a.setAttribute("href",o),l())}if(t){var i="react-revolution-react-revolution";null==document.getElementById(i)&&(a.setAttribute("id",i),a.setAttribute("href",n),l())}};function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=h()(e);if(t){var n=h()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return m()(this,r)}}var C=function(e){d()(r,e);var t=P(r);function r(e){var o;return i()(this,r),(o=t.call(this,e)).state={moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-sidebar",id:e.id&&l()("8")==l()(e.id)?e.id:"",image:e.image&&l()({})==l()(e.image)?e.image:void 0,moduleMenu:e.moduleMenu&&l()({})==l()(e.moduleMenu)?e.moduleMenu:void 0,textLong:e.textLong&&l()("8")==l()(e.textLong)?e.textLong:void 0,textShort:e.textShort&&l()("8")==l()(e.textShort)?e.textShort:void 0,href:e.href&&l()("8")==l()(e.href)?e.href:void 0,hrefProps:e.hrefProps&&l()({})==l()(e.hrefProps)?e.hrefProps:void 0},o}return c()(r,[{key:"componentDidMount",value:function(){S(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"render",value:function(){var e=this.state,t=e.addClass,r=e.defaultClass,o=e.id,a=e.moduleMenu,l=e.image,u=e.textLong,i=e.textShort,s=e.href,c=e.hrefProps;return g.a.createElement("div",{className:"".concat(r," ").concat(t),id:o},g.a.createElement("div",{className:"logo-text"},s&&g.a.createElement("a",n()({href:s,className:"logo-text"},c),l&&g.a.createElement("div",{className:"logo"},l),g.a.createElement("div",{className:"text"},u&&g.a.createElement("span",{className:"long"},u),i&&g.a.createElement("span",{className:"short"},i))),!s&&g.a.createElement("div",{className:"logo-text"},l&&g.a.createElement("div",{className:"logo"},l),g.a.createElement("div",{className:"text"},u&&g.a.createElement("span",{className:"long"},u),i&&g.a.createElement("span",{className:"short"},i)))),a&&a)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return b(["defaultClass","id","image","moduleMenu","textLong","textShort","href","hrefProps"],e,t)?{addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-sidebar",id:e.id&&l()("8")==l()(e.id)?e.id:"",image:e.image&&l()({})==l()(e.image)?e.image:void 0,moduleMenu:e.moduleMenu&&l()({})==l()(e.moduleMenu)?e.moduleMenu:void 0,textLong:e.textLong&&l()("8")==l()(e.textLong)?e.textLong:void 0,textShort:e.textShort&&l()("8")==l()(e.textShort)?e.textShort:void 0,href:e.href&&l()("8")==l()(e.href)?e.href:void 0,hrefProps:e.hrefProps&&l()({})==l()(e.hrefProps)?e.hrefProps:void 0}:null}}]),r}(g.a.Component);t.default=C}]);