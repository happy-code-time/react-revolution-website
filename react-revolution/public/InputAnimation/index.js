module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=require("react")},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},function(t,e,n){t.exports=n(11)},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){function n(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(12);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(0),o=n(1);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new E(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=x(i,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function f(){}function p(){}function h(){}var d={};d[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(O([])));v&&v!==e&&n.call(v,o)&&(d=v);var m=h.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,u){var c=l(t[o],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=m.constructor=h,h.constructor=p,p.displayName=u(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new g(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(m),u(m,i,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r),a=n(4),i=n.n(a),u=n(6),c=n.n(u),l=n(0),s=n.n(l),f=n(7),p=n.n(f),h=n(8),d=n.n(h),y=n(1),v=n.n(y),m=n(9),b=n.n(m),g=n(10),x=n.n(g),w=n(5),k=n.n(w),E=n(2),O="https://react-revolution.j.pl/";var C=function(t,e,n){var r="".concat(O,"/public/react-revolution/").concat("v2.0.0","/css/").concat(n,".css"),o="".concat(O,"/public/react-revolution/").concat("v2.0.0","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var i=function(){document.getElementsByTagName("head")[0].prepend(a)};if(t){var u="react-revolution-".concat(n);null==document.getElementById(u)&&(a.setAttribute("id",u),a.setAttribute("href",r),i())}if(e){var c="react-revolution-react-revolution";null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",o),i())}};function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k()(t);if(e){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x()(this,n)}}var S=function(t){b()(r,t);var e,n=P(r);function r(t){var e;return p()(this,r),(e=n.call(this,t)).callback=e.callback.bind(v()(e)),e.onFocus=e.onFocus.bind(v()(e)),e.onBlur=e.onBlur.bind(v()(e)),e.setValue=e.setValue.bind(v()(e)),e.callbackEnter=e.callbackEnter.bind(v()(e)),e.setFocus=e.setFocus.bind(v()(e)),e.state={moduleStyle:s()(!0)==s()(t.moduleStyle)&&t.moduleStyle,globalStyle:s()(!0)==s()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&s()("8")==s()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&s()("8")==s()(t.defaultClass)?t.defaultClass:"rr-input-animation",defaultClassOrigin:t.defaultClass&&s()("8")==s()(t.defaultClass)?t.defaultClass:"rr-input-animation",id:t.id&&s()("8")==s()(t.id)?t.id:"",plainValue:t.value&&s()("8")==s()(t.value)?t.value:"",callback:t.callback&&"function"==typeof t.callback?t.callback:void 0,inputType:t.type&&s()("8")==s()(t.type)?t.type:"text",props:t.props&&s()({})==s()(t.props)?t.props:{},inputPlaceholder:t.inputPlaceholder&&s()("8")==s()(t.inputPlaceholder)?t.inputPlaceholder:"",animatePlaceholder:s()(!0)!=s()(t.animatePlaceholder)||t.animatePlaceholder,onEnter:t.onEnter&&"function"==typeof t.onEnter?t.onEnter:void 0,allowOnlyAZ:s()(!0)==s()(t.allowOnlyAZ)&&t.allowOnlyAZ,getValueFromCallback:s()(!0)==s()(t.getValueFromCallback)&&t.getValueFromCallback},e}return d()(r,[{key:"componentDidMount",value:function(){C(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.setFocus(),this.setFocusUpdater(!0)}},{key:"componentDidUpdate",value:function(){this.setFocusUpdater(!1)}},{key:"setFocusUpdater",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=e?100:0;setTimeout((function(){var n=t.state.getValueFromCallback;if(t.inputNode){var r=t.inputNode.value||t.inputNode.defaultValue;""!==r&&t.setState({plainValue:r},(function(){e&&(n?t.callback(r):t.callback()),t.setFocus()}))}}),n)}},{key:"callback",value:(e=c()(i.a.mark((function t(){var e,n,r,o,a=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.length>0&&void 0!==a[0]?a[0]:null,n=this.state.getValueFromCallback,!this.props.callback||"function"!=typeof this.props.callback){t.next=12;break}if(!n){t.next=10;break}return t.next=6,this.props.callback(e);case 6:r=t.sent,s()("8")==s()(r)&&this.setState({plainValue:r}),t.next=12;break;case 10:o=this.state.plainValue,this.props.callback(o);case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"callbackEnter",value:function(){if(this.props.onEnter&&"function"==typeof this.props.onEnter){var t=this.state.plainValue;this.props.onEnter(t)}}},{key:"onFocus",value:function(){var t=this.state,e=t.animatePlaceholder,n=t.defaultClassOrigin,r=t.defaultClass;e&&-1==r.indexOf("focus")&&this.setState({defaultClass:"".concat(n," focus")})}},{key:"onBlur",value:function(){var t=this.state,e=t.animatePlaceholder,n=t.defaultClassOrigin,r=t.plainValue;e&&""==r&&this.setState({defaultClass:n})}},{key:"setFocus",value:function(){var t=this.state,e=t.defaultClass,n=t.animatePlaceholder,r=t.defaultClassOrigin,o=t.plainValue;n&&""!==o&&-1==e.indexOf("focus")&&this.setState({defaultClass:"".concat(r," focus")})}},{key:"setValue",value:function(t){var e=this,n=this.state.getValueFromCallback,r=t.target.value;this.state.allowOnlyAZ&&(r=(r=r.replace(/[^a-zA-Z ]/gim,"")).trim()),n?(this.callback(r),this.setFocus()):this.setState({plainValue:r},(function(){e.callback(),e.setFocus()}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.addClass,r=e.animatePlaceholder,a=e.inputPlaceholder,i=e.id,u=e.defaultClass,c=e.inputType,l=e.props,s=e.plainValue;return E.createElement("div",{className:"".concat(u," ").concat(n)},r&&E.createElement("div",{className:"font-input title"},a),"textarea"==c&&E.createElement("textarea",o()({className:"font-input",onFocus:this.onFocus,onBlur:this.onBlur,type:c,value:s,onChange:function(e){return t.setValue(e)},placeholder:r?"":a,id:i},l)),"textarea"!==c&&E.createElement("input",o()({className:"font-input",onFocus:this.onFocus,onBlur:this.onBlur,type:c,value:s,onChange:function(e){return t.setValue(e)},onKeyPress:function(e){"Enter"===e.key&&t.callbackEnter()},ref:function(e){return t.inputNode=e},placeholder:r?"":a,id:i},l)))}}]),r}(E.Component);e.default=S}]);