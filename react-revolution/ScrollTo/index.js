module.exports=(()=>{var t={709:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>S});var o=n(924),r=n.n(o),a=n(946),l=n.n(a),c=n(33),i=n.n(c),u=n(22),s=n.n(u),f=n(246),d=n.n(f),m=n(323),p=n.n(m);const v=require("react");var y=n.n(v),g="https://react-revolution.j.pl/";const b=function(t,e,n){var o="".concat(g,"public/react-revolution/").concat("v4.0.6","/css/").concat(n,".css"),r="".concat(g,"public/react-revolution/").concat("v4.0.6","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(a)};if(t){var c="react-revolution-".concat(n);null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",o),l())}if(e){var i="react-revolution-react-revolution";null==document.getElementById(i)&&(a.setAttribute("id",i),a.setAttribute("href",r),l())}};var h=void 0;const T=function t(){var e=Math.floor(Date.now()/1e3),n="".concat(e).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(h!==n)return h=n,n;t()};function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p()(t);if(e){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d()(this,n)}}const S=function(t){s()(n,t);var e=E(n);function n(t){var o;return l()(this,n),(o=e.call(this,t)).state={moduleStyle:r()(!0)==r()(t.moduleStyle)&&t.moduleStyle,globalStyle:r()(!0)==r()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&r()("8")==r()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&r()("8")==r()(t.defaultClass)?t.defaultClass:"rr-scroll-to",id:t.id&&r()("8")==r()(t.id)?t.id:T(),navigationTime:t.navigationTime&&r()(8)==r()(t.navigationTime)?t.navigationTime:300,navigationTarget:t.navigationTarget&&r()("8")==r()(t.navigationTarget)?t.navigationTarget:"",html:t.html?t.html:void 0,callback:t.callback&&"function"==typeof t.callback?t.callback:void 0},o}return i()(n,[{key:"componentDidMount",value:function(){b(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"navigateWindowToElement",value:function(t,e){var n=this.state,o=n.navigationTarget,r=n.navigationTime,a=n.callback;if(a&&a(t),"#"==o.charAt(0)){var l=o.replace("#","");if(document.getElementById(l)){var c=document.getElementById(l);return this.scrollToElement(t,r,c,e)}}if("."==o.charAt(0)&&document.querySelector(o)){var i=document.querySelector(o);return this.scrollToElement(t,r,i,e)}if("#"!=o.charAt(0)&&"."!=o.charAt(0))switch(o){case"top":this.navigationTargetTopOfWebpage(r);break;case"bottom":this.navigationTargetBottomOfWebpage(r);break;default:this.navigationTargetTopOfWebpage(r)}}},{key:"navigationTargetTopOfWebpage",value:function(t){t/=10;var e=document.documentElement.scrollTop;if(0==e)return null;var n=e/t*4,o=setInterval((function(){e-=n,document.documentElement.scrollTop=e,-10>=e&&clearInterval(o)}),1)}},{key:"navigationTargetBottomOfWebpage",value:function(t){var e=document.documentElement.scrollTop,n=document.documentElement.scrollHeight,o=(n=parseInt(n)-50)-e,r=parseInt(t,10),a=o/r*4;e=Math.abs(e);var l=e=parseInt(e),c=setInterval((function(){l+=a,document.documentElement.scrollTop=l,l>=o&&clearInterval(c)}),1)}},{key:"scrollToElement",value:function(t,e,n,o){var r=document.getElementById(o);if(null!==n){var a=t.target.getBoundingClientRect().top,l=n.getBoundingClientRect().top,c=a;if(0<l-a){var i=((l+=document.documentElement.scrollTop)-a)/e*4,u=setInterval((function(){c+=i,document.documentElement.scrollTop=c,c>=l-50&&clearInterval(u)}),e/100);return}if(0>l-a&&null!==r){var s=document.documentElement.scrollTop,f=s-Math.abs(l),d=0,m=s/e,p=setInterval((function(){d+=m,document.documentElement.scrollTop-=d,document.documentElement.scrollTop<=f&&clearInterval(p)}),e/100);return}}}},{key:"render",value:function(){var t=this,e=this.state,n=e.addClass,o=e.html,r=e.defaultClass,a=e.id,l=e.navigationTarget;return y().createElement("div",{className:"".concat(r," ").concat(n),id:a,onClick:function(e){return t.navigateWindowToElement(e,a)}},!o&&"top"===l&&y().createElement("div",{className:"to-top"},y().createElement("div",{className:"arrow"},"↑")),!o&&"bottom"===l&&y().createElement("div",{className:"to-bottom"},y().createElement("div",{className:"arrow"},"↓")),o&&o)}}]),n}(y().Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}},323:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},22:(t,e,n)=>{var o=n(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},246:(t,e,n)=>{var o=n(924),r=n(491);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},596:t=>{function e(n,o){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,o)}t.exports=e},924:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(709)})();