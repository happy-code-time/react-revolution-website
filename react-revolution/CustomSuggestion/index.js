module.exports=(()=>{var t={288:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>j});var r=n(221),o=n.n(r),a=n(264),i=n.n(a),c=n(564),l=n.n(c),u=n(924),s=n.n(u),p=n(946),f=n.n(p),h=n(33),d=n.n(h),v=n(491),y=n.n(v),g=n(22),m=n.n(g),b=n(246),w=n.n(b),k=n(323),x=n.n(k);const S=require("react");var E=void 0;const O=function t(){var e="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return E!==e?(E=e,e):t()};const L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;return t.map((function(t){n[t]!==e[t]&&(r=!0)})),r};var P="https://react-revolution.j.pl/";const T=function(t,e,n){var r="".concat(P,"public/react-revolution/").concat("v4.0.7","/css/").concat(n,".css"),o="".concat(P,"public/react-revolution/").concat("v4.0.7","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var i=function(){document.getElementsByTagName("head")[0].prepend(a)};if(t){var c="react-revolution-".concat(n);null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",r),i())}if(e){var l="react-revolution-react-revolution";null==document.getElementById(l)&&(a.setAttribute("id",l),a.setAttribute("href",o),i())}};function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x()(t);if(e){var o=x()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w()(this,n)}}const j=function(t){m()(r,t);var e,n=_(r);function r(t){var e;return f()(this,r),(e=n.call(this,t)).callback=e.callback.bind(y()(e)),e.setValue=e.setValue.bind(y()(e)),e.callbackEsc=e.callbackEsc.bind(y()(e)),e.handleMouseDown=e.handleMouseDown.bind(y()(e)),e.setFocusUpdater=e.setFocusUpdater.bind(y()(e)),e.setValueToInputField=e.setValueToInputField.bind(y()(e)),e.state={isLoading:!1,moduleStyle:s()(!0)==s()(t.moduleStyle)&&t.moduleStyle,globalStyle:s()(!0)==s()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&s()("8")==s()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&s()("8")==s()(t.defaultClass)?t.defaultClass:"rr-custom-suggestion",id:t.id&&s()("8")==s()(t.id)?t.id:"",plainValue:t.value&&s()("8")==s()(t.value)?t.value:"",callback:t.callback&&"function"==typeof t.callback?t.callback:void 0,suggestions:t.suggestions&&s()([])==s()(t.suggestions)?t.suggestions:[],inputPlaceholder:t.inputPlaceholder&&s()("8")==s()(t.inputPlaceholder)?t.inputPlaceholder:"",props:t.props&&s()({})==s()(t.props)?t.props:{},inputType:t.inputType&&s()("8")==s()(t.inputType)?t.inputType:"text",callbackRerender:s()(!0)==s()(t.callbackRerender)&&t.callbackRerender,allowOnlyAZ:s()(!0)==s()(t.allowOnlyAZ)&&t.allowOnlyAZ,searchSensitive:s()(!0)!=s()(t.searchSensitive)||t.searchSensitive,loading:t.loading?t.loading:void 0},e.availableSorts=["asc","desc"],e}return d()(r,[{key:"componentDidMount",value:function(){T(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.setFocusUpdater(!0),document.addEventListener("mousedown",this.handleMouseDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleMouseDown)}},{key:"setFocusUpdater",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=e?100:0;setTimeout((function(){if(t.inputNode){var e=t.inputNode.value||t.inputNode.defaultValue;t.setState({plainValue:e},(function(){t.callback(e)}))}}),n)}},{key:"handleMouseDown",value:function(t){this.refNodeUl&&!this.refNodeUl.contains(t.target)&&this.setState({suggestions:[]})}},{key:"callback",value:(e=l()(i().mark((function t(e){var n,r,o,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>1&&void 0!==a[1]&&a[1],!(r=this.state.callback)){t.next=9;break}return t.next=5,r(e,n);case 5:o=t.sent,this.setState({suggestions:n?[]:o}),t.next=10;break;case 9:this.setState({suggestions:[]});case 10:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"callbackPromise",value:function(t){var e=this.state.callback;return new Promise(function(){var n=l()(i().mark((function n(r,o){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,e(t).then((function(t){r(t)})).catch((function(t){r([])}));case 3:n.next=6;break;case 5:r([]);case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}())}},{key:"callbackEsc",value:function(){this.setState({suggestions:[]})}},{key:"setValue",value:function(t){var e=t.target.value;this.setValueToInputField(e)}},{key:"handleKeyDown",value:function(t){if(t.persist(),"Escape"===t.key)return this.callbackEsc()}},{key:"setInputValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.setValueToInputField(t,e)}},{key:"setValueToInputField",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.state,o=r.allowOnlyAZ,a=r.loading,c=r.isLoading;o&&(t=(t=t.replace(/[^a-zA-Z ]/gim,"")).trim()),this.setState({plainValue:t,suggestions:[]},(function(){var t=e.state.plainValue;if(a&&!c&&!n)return clearTimeout(e.timeout),""==t?e.setState({isLoading:!1,suggestions:[]}):e.timeout=setTimeout((function(){e.setState({isLoading:!0,suggestions:[]},l()(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.callbackPromise(t).then((function(t){e.setState({isLoading:!1,suggestions:n?[]:t&&s()([])==s()(t)&&t.length?t:[]})})).catch((function(){e.setState({isLoading:!1,suggestions:[]})}));case 2:case"end":return r.stop()}}),r)}))))}),200);e.callback(t,n)}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.addClass,r=e.defaultClass,a=e.id,i=e.props,c=e.suggestions,l=e.plainValue,u=e.inputPlaceholder,s=e.inputType,p=e.loading,f=e.isLoading;return S.createElement("div",{className:"".concat(r," ").concat(n)},S.createElement("div",{className:"input"},S.createElement("input",o()({type:s,value:l,onChange:function(e){return t.setValue(e)},placeholder:u,onKeyDown:function(e){return t.handleKeyDown(e)},id:a},i)),p&&f&&S.createElement("div",{className:"loading-area"},p),""!==l&&c&&0!==c.length&&S.createElement("div",{className:"suggestions-area"},S.createElement("ul",{className:"ul",ref:function(e){return t.refNodeUl=e}},S.createElement("span",{className:"suggestions",ref:function(e){return t.suggestionsHolder=e}},c.map((function(e){var n=e.href,r=e.props,a=e.jsx,i=e.onClickValue;return S.createElement("li",{key:O(),onClick:function(){return t.setInputValue(i,!0)}},S.createElement("a",o()({href:n},r),a))})))))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return L(["value","suggestions","callback","inputPlaceholder","props","inputType","callbackRerender","allowOnlyAZ","searchSensitive","loading"],t,e)?e.callbackRerender?{suggestions:e.suggestions,callback:t.callback&&"function"==typeof t.callback?t.callback:void 0,inputPlaceholder:t.inputPlaceholder&&s()("8")==s()(t.inputPlaceholder)?t.inputPlaceholder:"",props:t.props&&s()({})==s()(t.props)?t.props:{},inputType:t.inputType&&s()("8")==s()(t.inputType)?t.inputType:"text",callbackRerender:s()(!0)==s()(t.callbackRerender)&&t.callbackRerender,allowOnlyAZ:s()(!0)==s()(t.allowOnlyAZ)&&t.allowOnlyAZ,searchSensitive:s()(!0)!=s()(t.searchSensitive)||t.searchSensitive,loading:t.loading?t.loading:void 0}:{suggestions:t.suggestions,plainValue:e.plainValue,callback:t.callback&&"function"==typeof t.callback?t.callback:void 0,inputPlaceholder:t.inputPlaceholder&&s()("8")==s()(t.inputPlaceholder)?t.inputPlaceholder:"",props:t.props&&s()({})==s()(t.props)?t.props:{},inputType:t.inputType&&s()("8")==s()(t.inputType)?t.inputType:"text",callbackRerender:s()(!0)==s()(t.callbackRerender)&&t.callbackRerender,allowOnlyAZ:s()(!0)==s()(t.allowOnlyAZ)&&t.allowOnlyAZ,searchSensitive:s()(!0)!=s()(t.searchSensitive)||t.searchSensitive,loading:t.loading?t.loading:void 0}:null}}]),r}(S.Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},564:t=>{function e(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function c(t){e(i,o,a,c,l,"next",t)}function l(t){e(i,o,a,c,l,"throw",t)}c(void 0)}))}}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},221:t=>{function e(){return t.exports=e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e.apply(this,arguments)}t.exports=e},323:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},22:(t,e,n)=>{var r=n(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},246:(t,e,n)=>{var r=n(924),o=n(491);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},596:t=>{function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e},924:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},264:(t,e,n)=>{t.exports=n(588)},588:t=>{var e=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function p(){}function f(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==e&&n.call(y,o)&&(d=y);var g=h.prototype=p.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=g.constructor=h,h.constructor=f,f.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(g),c(g,i,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(288)})();