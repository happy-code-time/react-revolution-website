module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=require("react")},function(t,e,r){t.exports=r(10)},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,l,"next",t)}function l(t){r(a,o,i,c,l,"throw",t)}c(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=r(11);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){var n=r(0),o=r(1);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function f(){}function d(){}function h(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&r.call(y,o)&&(p=y);var m=h.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=m.constructor=h,h.constructor=d,d.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e,r){"use strict";r.r(e);var n=r(3),o=r.n(n),i=r(5),a=r.n(i),c=r(0),l=r.n(c),s=r(6),u=r.n(s),f=r(7),d=r.n(f),h=r(1),p=r.n(h),v=r(8),y=r.n(v),m=r(9),g=r.n(m),b=r(4),E=r.n(b),R=r(2),w=r.n(R),x=void 0,S=function t(){var e="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return x!==e?(x=e,e):t()},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return t.map((function(t){r[t]!==e[t]&&(n=!0)})),n},j="https://react-revolution.j.pl/";var L=function(t,e,r){var n="".concat(j,"public/react-revolution/").concat("v3.0.3","/css/").concat(r,".css"),o="".concat(j,"public/react-revolution/").concat("v3.0.3","/css/react-revolution.css"),i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css");var a=function(){document.getElementsByTagName("head")[0].prepend(i)};if(t){var c="react-revolution-".concat(r);null==document.getElementById(c)&&(i.setAttribute("id",c),i.setAttribute("href",n),a())}if(e){var l="react-revolution-react-revolution";null==document.getElementById(l)&&(i.setAttribute("id",l),i.setAttribute("href",o),a())}};function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=E()(t);if(e){var o=E()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var _=function(t){y()(r,t);var e=O(r);function r(t){var n;return u()(this,r),(n=e.call(this,t)).scrollEvent=n.scrollEvent.bind(p()(n)),n.buildData=n.buildData.bind(p()(n)),n.loadMore=n.loadMore.bind(p()(n)),n.attachScrollEvent=n.attachScrollEvent.bind(p()(n)),n.removeScrollEvent=n.removeScrollEvent.bind(p()(n)),n.state={dataJsx:[],loadingData:!1,isError:!1,moduleStyle:l()(!0)==l()(t.moduleStyle)&&t.moduleStyle,globalStyle:l()(!0)==l()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&l()("8")==l()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&l()("8")==l()(t.defaultClass)?t.defaultClass:"rr-load-on-scroll",id:t.id&&l()("8")==l()(t.id)?t.id:"",data:t.data&&l()([])==l()(t.data)?t.data:"",loading:t.loading?t.loading:"",callback:t.callback&&"function"==typeof t.callback?t.callback:void 0,callbackProps:t.callbackProps?t.callbackProps:void 0,minify:l()(8)==l()(t.minify)?t.minify:0,scrollReference:l()(!0)!=l()(t.scrollReference)||t.scrollReference,onReject:t.onReject?t.onReject:"",persistReject:l()(!0)==l()(t.persistReject)&&t.persistReject,fireScrollEvent:l()(8)==l()(t.fireScrollEvent)?t.fireScrollEvent:0,fireScrollBack:l()(!0)!=l()(t.fireScrollBack)||t.fireScrollBack},n.loadingAllowed=!0,n}return d()(r,[{key:"componentDidMount",value:function(){L(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var t=this.state,e=t.data,r=t.fireScrollEvent,n=t.fireScrollBack,o=t.scrollReference;this.attachScrollEvent(),this.buildData(e),r&&(this.scrollReference&&o&&(this.scrollReference.scrollTop=r),o||(document.documentElement.scrollTop=r)),n&&(this.scrollReference&&o&&(this.scrollReference.scrollTop=0),o||n&&(this.scrollReference.scrollTop=0))}},{key:"attachScrollEvent",value:function(){var t=this.state.scrollReference;this.scrollReference&&t&&(this.scrollReference.removeEventListener("scroll",this.scrollEvent),this.scrollReference.addEventListener("scroll",this.scrollEvent)),t||(document.removeEventListener("scroll",this.scrollEvent),document.addEventListener("scroll",this.scrollEvent))}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent()}},{key:"removeScrollEvent",value:function(){var t=this.state.scrollReference;this.scrollReference&&this.scrollReference.removeEventListener("scroll",this.scrollEvent),t||document.removeEventListener("scroll",this.scrollEvent)}},{key:"scrollToBottom",value:function(){var t=this.state.scrollReference;try{t||(document.documentElement.scrollTop=document.documentElement.getBoundingClientRect().height),t&&this.scrollReference&&(this.scrollReference.scrollTop=this.scrollReference.getBoundingClientRect().height)}catch(t){}}},{key:"loadMore",value:function(t){var e=this,r=this,n=this.state,i=n.callback,c=n.persistReject,l=n.callbackProps;this.removeScrollEvent(),i?this.setState({loadingData:!0,isError:!1},a()(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.scrollToBottom(),n.next=3,i(t,l).then((function(t){return"break"==t?r.setState({loadingData:!1}):(r.buildData(t),c?null:r.attachScrollEvent())})).catch((function(t){return null==t?r.setState({loadingData:!1,isError:!0},(function(){c||setTimeout((function(){r.attachScrollEvent(),r.callbackRendered=!0}),500)})):r.setState({errorData:t,isError:!0,loadingData:!1},(function(){if(c)for(var t=[100,200],e=0;e<=t.length-1;e++)setTimeout((function(){r.scrollToBottom()}),t[e]);c||setTimeout((function(){r.attachScrollEvent(),r.callbackRendered=!0}),500)}))}));case 3:case"end":return n.stop()}}),n)})))):r.setState({loadingData:!1,isError:!1})}},{key:"buildData",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.state.dataJsx;r.push(w.a.createElement("span",{key:S(),className:"section"},e)),this.setState({dataJsx:r,loadingData:!1},(function(){t.callbackRendered=!0}))}},{key:"scrollEvent",value:function(t){var e=this.state,r=e.minify,n=e.scrollReference,o=parseInt(r);this.scrollReference&&this.callbackRendered&&n&&this.scrollReference.offsetHeight+this.scrollReference.scrollTop>=this.scrollReference.scrollHeight-o&&(this.callbackRendered=!1,this.loadMore(t)),!n&&document.body&&window.innerHeight+window.pageYOffset>=document.body.offsetHeight-o&&(this.callbackRendered=!1,this.loadMore(t))}},{key:"render",value:function(){var t=this,e=this.state,r=e.addClass,n=e.dataJsx,o=e.defaultClass,i=e.loadingData,a=e.errorData,c=e.loading,l=e.id,s=e.scrollReference,u=e.isError,f=e.onReject;e.persistReject;return w.a.createElement("div",{ref:function(e){return t.scrollReference=e},className:"".concat(o," ").concat(r," ").concat(s?"":"ignore"),id:l},n&&n.map((function(t){return t})),i&&c,u&&a&&a,u&&f&&w.a.createElement("span",{onClick:function(e){return t.loadMore(e)}},f))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return k(["defaultClass","id","data","loading","minify","scrollReference","callbackProps","onReject","persistReject"],t,e)?{addClass:t.addClass&&l()("8")==l()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&l()("8")==l()(t.defaultClass)?t.defaultClass:"rr-load-on-scroll",id:t.id&&l()("8")==l()(t.id)?t.id:"",data:t.data&&l()([])==l()(t.data)?t.data:"",loading:t.loading?t.loading:"",callbackProps:t.callbackProps?t.callbackProps:void 0,dataJsx:e.dataJsx,minify:l()(8)==l()(t.minify)?t.minify:0,scrollReference:l()(!0)!=l()(t.scrollReference)||t.scrollReference,onReject:t.onReject?t.onReject:"",persistReject:l()(!0)==l()(t.persistReject)&&t.persistReject}:null}}]),r}(w.a.Component);e.default=_}]);