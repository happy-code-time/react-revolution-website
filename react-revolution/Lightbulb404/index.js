module.exports=(()=>{var e={993:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>L});var n=r(221),o=r.n(n),a=r(924),c=r.n(a),i=r(946),s=r.n(i),l=r(33),u=r.n(l),f=r(22),p=r.n(f),h=r(246),d=r.n(h),y=r(323),v=r.n(y);const m=require("react");var b=r.n(m),g=r(74),x=r.n(g),O=r(985),E=r.n(O);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e){return"/"===e.charAt(0)}function C(e,t){for(var r=t,n=r+1,o=e.length;n<o;r+=1,n+=1)e[r]=e[n];e.pop()}const R=function(e,t){void 0===t&&(t="");var r,n=e&&e.split("/")||[],o=t&&t.split("/")||[],a=e&&k(e),c=t&&k(t),i=a||c;if(e&&k(e)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";if(o.length){var s=o[o.length-1];r="."===s||".."===s||""===s}else r=!1;for(var l=0,u=o.length;u>=0;u--){var f=o[u];"."===f?C(o,u):".."===f?(C(o,u),l++):l&&(C(o,u),l--)}if(!i)for(;l--;l)o.unshift("..");!i||""===o[0]||o[0]&&k(o[0])||o.unshift("");var p=o.join("/");return r&&"/"!==p.substr(-1)&&(p+="/"),p};function j(e,t,r,n){var o;"string"==typeof e?(o=function(e){var t=e||"/",r="",n="",o=t.indexOf("#");-1!==o&&(n=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(r=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===r?"":r,hash:"#"===n?"":n}}(e)).state=t:(void 0===(o=w({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return r&&(o.key=r),n?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=R(o.pathname,n.pathname)):o.pathname=n.pathname:o.pathname||(o.pathname="/"),o}"undefined"==typeof window||!window.document||window.document.createElement;var S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},N=function(e){function t(){var r,n;P(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return r=n=_(this,e.call.apply(e,[this].concat(a))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!T(e)){e.preventDefault();var t=n.context.router.history,r=n.props,o=r.replace,a=r.to;o?t.replace(a):t.push(a)}},_(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);E()(this.context.router,"You should not use <Link> outside a <Router>"),E()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,a="string"==typeof t?j(t,null,null,o.location):t,c=o.createHref(a);return b().createElement("a",S({},n,{onClick:this.handleClick,href:c,ref:r}))},t}(b().Component);N.propTypes={onClick:x().func,target:x().string,replace:x().bool,to:x().oneOfType([x().string,x().object]).isRequired,innerRef:x().oneOfType([x().string,x().func])},N.defaultProps={replace:!1},N.contextTypes={router:x().shape({history:x().shape({push:x().func.isRequired,replace:x().func.isRequired,createHref:x().func.isRequired}).isRequired}).isRequired};const A=N;var I="https://react-revolution.j.pl/";const q=function(e,t,r){var n="".concat(I,"public/react-revolution/").concat("v4.0.7","/css/").concat(r,".css"),o="".concat(I,"public/react-revolution/").concat("v4.0.7","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var c=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var i="react-revolution-".concat(r);null==document.getElementById(i)&&(a.setAttribute("id",i),a.setAttribute("href",n),c())}if(t){var s="react-revolution-react-revolution";null==document.getElementById(s)&&(a.setAttribute("id",s),a.setAttribute("href",o),c())}};function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d()(this,r)}}const L=function(e){p()(r,e);var t=D(r);function r(e){var n;return s()(this,r),(n=t.call(this,e)).state={active:!0,moduleStyle:c()(!0)==c()(e.moduleStyle)&&e.moduleStyle,globalStyle:c()(!0)==c()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-lightbulb-404",id:e.id&&c()("8")==c()(e.id)?e.id:"",reactRouter:!!n.props.reactRouter&&n.props.reactRouter,link:e.link&&c()({})==c()(e.link)?e.link:{},text404:e.text404&&c()("8")==c()(e.text404)?e.text404:"404",text1:e.text1&&c()("8")==c()(e.text1)?e.text1:"requested page",text2:e.text2&&c()("8")==c()(e.text2)?e.text2:"was not found",bad:c()(!0)==c()(e.bad)&&e.bad},n}return u()(r,[{key:"componentDidMount",value:function(){q(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"callback",value:function(e){var t=this.state.link;if(t){var r=t.callback;r&&"function"==typeof r&&r(e)}}},{key:"toggleLight",value:function(e){e&&this.setState({active:!1}),e||this.setState({active:!0})}},{key:"render",value:function(){var e=this,t=this.state,r=t.active,n=t.reactRouter,a=t.link,i=t.text404,s=t.text1,l=t.text2,u=(t.bad,t.addClass),f=t.defaultClass,p=t.id,h=a.href,d=a.text,y=a.props;return b().createElement("div",{className:"".concat(f," ").concat(u),id:p},b().createElement("div",{className:"holder-404"},b().createElement("div",{className:"content-404"},b().createElement("div",{className:"container"},b().createElement("div",{className:"text-404"},i),b().createElement("hr",null),b().createElement("div",{className:"lightbulb-holder"},b().createElement("div",{className:"base"}),b().createElement("div",{className:"lightbulb-".concat(r?"on":"off")})),b().createElement("div",{className:"buttons-container"},b().createElement("div",{className:"buttons"},b().createElement("div",{className:1==r?"on active":"on",onClick:function(){return e.toggleLight(!1)}}),b().createElement("div",{className:0==r?"off active":"off",onClick:function(){return e.toggleLight(!0)}}))),b().createElement("div",{className:"text-1"},s),b().createElement("div",{className:"text-2"},l,!r&&b().createElement("div",{className:""})),h&&c()("8")==c()(h)&&1==n&&b().createElement(A,o()({className:"button-navigation",to:h},y,{onClick:function(t){return e.callback(t)}}),d),h&&c()("8")==c()(h)&&!1===n&&b().createElement("a",o()({className:"button-navigation",href:h},y,{onClick:function(t){return e.callback(t)}}),d)))))}}]),r}(m.Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},22:(e,t,r)=>{var n=r(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},246:(e,t,r)=>{var n=r(924),o=r(491);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},596:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},924:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},985:e=>{"use strict";e.exports=function(e,t,r,n,o,a,c,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,a,c,i],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},433:(e,t,r)=>{"use strict";var n=r(642);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},74:(e,t,r)=>{e.exports=r(433)()},642:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(993)})();