module.exports=(()=>{var e={776:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var r=o(924),n=o.n(r);const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a={errorMessage:t,errorCode:o,disappear:r,clearStack:s,persistCurrentMessage:i};if(e){var l=sessionStorage.getItem(e);try{if(null!==l){if(void 0!==s&&n()(!0)==n()(s)&&1==s)return sessionStorage.setItem(e,JSON.stringify([a]));(l=JSON.parse(l)).push(a),sessionStorage.setItem(e,JSON.stringify(l))}else sessionStorage.setItem(e,JSON.stringify([a]))}catch(t){sessionStorage.setItem(e,JSON.stringify([a]))}}}},924:e=>{function t(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(o)}e.exports=t}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}return o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(776)})();