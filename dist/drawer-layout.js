!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("dom-factory")):"function"==typeof define&&define.amd?define(["dom-factory"],e):"object"==typeof exports?exports.mdkDrawerLayout=e(require("dom-factory")):t.mdkDrawerLayout=e(t.domFactory)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawerLayoutComponent=void 0;var n=r(14);Object.defineProperty(e,"drawerLayoutComponent",{enumerable:!0,get:function(){return n.drawerLayoutComponent}}),r(42)},function(t,e,r){var n=r(34)("wks"),o=r(38),i=r(4).Symbol;t.exports=function(t){return n[t]||(n[t]=i&&i[t]||(i||o)("Symbol."+t))}},function(t,e){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,e){var r=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(2),o=r(11);t.exports=r(24)?function(t,e,r){return n.setDesc(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){t.exports={}},function(t,e,r){var n=r(20);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(4),o=r(3),i=r(7),u="prototype",a=function(t,e,r){var c,s,f,l=t&a.F,h=t&a.G,p=t&a.S,_=t&a.P,d=t&a.B,v=t&a.W,y=h?o:o[e]||(o[e]={}),g=h?n:p?n[e]:(n[e]||{})[u];h&&(r=e);for(c in r)s=!l&&g&&c in g,s&&c in y||(f=s?g[c]:r[c],y[c]=h&&"function"!=typeof g[c]?r[c]:d&&s?i(f,n):v&&g[c]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(f):_&&"function"==typeof f?i(Function.call,f):f,_&&((y[u]||(y[u]={}))[c]=f))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(2).setDesc,o=r(10),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.drawerLayoutComponent=void 0;var o=r(18),i=n(o),u=r(15),a=r(44),c=e.drawerLayoutComponent=function(){return{properties:{forceNarrow:{type:Boolean,reflectToAttribute:!0},push:{type:Boolean,reflectToAttribute:!0},responsiveWidth:{reflectToAttribute:!0,value:"554px"},hasScrollingRegion:{type:Boolean,reflectToAttribute:!0},fullbleed:{type:Boolean,reflectToAttribute:!0}},observers:["_resetLayout(narrow, forceNarrow)","_onQueryMatches(mediaQuery.queryMatches)","_updateScroller(hasScrollingRegion)","_updateDocument(fullbleed)"],listeners:["drawer._onDrawerChange(mdk-drawer-change)"],_narrow:null,_mediaQuery:null,get mediaQuery(){return this._mediaQuery||(this._mediaQuery=(0,u.mediaQuery)(this.responsiveMediaQuery)),this._mediaQuery},get narrow(){return!!this.forceNarrow||this._narrow},set narrow(t){this._narrow=!(t||!this.forceNarrow)||t},get contentContainer(){return this.element.querySelector(".mdk-drawer-layout__content")},get drawer(){var t=this.element.querySelector(".mdk-drawer");if(t)return t.mdkDrawer},get responsiveMediaQuery(){return this.forceNarrow?"(min-width: 0px)":"(max-width: "+this.responsiveWidth+")"},_updateDocument:function(){var t=[].concat((0,i.default)(document.querySelectorAll("html, body")));this.fullbleed&&t.forEach(function(t){t.style.height="100%"})},_updateScroller:function(){var t=[].concat((0,i.default)(document.querySelectorAll("html, body")));this.hasScrollingRegion&&t.forEach(function(t){t.style.overflow="hidden",t.style.position="relative"})},_resetLayout:function(){this.drawer.opened=this.drawer.persistent=!this.narrow,this._onDrawerChange();var t=this.element.querySelector(".mdk-drawer-layout");t&&(t.style.paddingBottom=t.offsetTop+"px")},_resetContent:function(){var t=this.drawer,e=this.drawer.getWidth(),r=this.contentContainer,n=t._isRTL();return t.opened?void("right"===t.position||!t.position&&n?(r.style.marginLeft="",r.style.marginRight=e+"px"):(r.style.marginLeft=e+"px",r.style.marginRight="")):(r.style.marginLeft="",void(r.style.marginRight=""))},_resetPush:function(){var t=this.drawer,e=this.drawer.getWidth(),r=this.contentContainer,n=t._isRTL();return t.opened?void("right"===t.position||!t.position&&n?(a.util.transform("translate3d("+-1*e+"px, 0, 0)",r),this.narrow||(r.style.marginLeft=e+"px",r.style.marginRight="")):(a.util.transform("translate3d("+e+"px, 0, 0)",r),this.narrow||(r.style.marginLeft="",r.style.marginRight=e+"px"))):(a.util.transform("translate3d(0, 0, 0)",r),r.style.marginLeft="",void(r.style.marginRight=""))},_setContentTransitionDuration:function(t){this.contentContainer.style.transitionDuration=t},_onDrawerChange:function(){return this.push?this._resetPush():void this._resetContent()},_onQueryMatches:function(t){this.narrow=t},init:function(){var t=this;this._setContentTransitionDuration("0s"),setTimeout(function(){return t._setContentTransitionDuration("")},0),this._updateDocument(),this._updateScroller(),this.mediaQuery.init()},destroy:function(){this.mediaQuery.destroy()}}};a.handler.register("mdk-drawer-layout",c)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(16);Object.defineProperty(e,"mediaQuery",{enumerable:!0,get:function(){return n.mediaQuery}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mediaQuery=void 0;var n=r(43);e.mediaQuery=function t(e){var t={query:e,queryMatches:null,_reset:function(){this._removeListener(),this.queryMatches=null,this.query&&(this._mq=window.matchMedia(this.query),this._addListener(),this._handler(this._mq))},_handler:function(t){this.queryMatches=t.matches},_addListener:function(){this._mq&&this._mq.addListener(this._handler)},_removeListener:function(){this._mq&&this._mq.removeListener(this._handler),this._mq=null},init:function(){(0,n.watch)(this,"query",this._reset),this._reset()},destroy:function(){(0,n.unwatch)(this,"query",this._reset),this._removeListener()}};return t._reset=t._reset.bind(t),t._handler=t._handler.bind(t),t.init(),t}},function(t,e,r){t.exports={default:r(19),__esModule:!0}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(17),i=n(o);e.default=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return(0,i.default)(t)}},function(t,e,r){r(41),r(40),t.exports=r(3).Array.from},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(27);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(23),o=r(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=(e=Object(t))[o])?r:i?n(e):"Object"==(u=n(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){t.exports=!r(25)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(6),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(21);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){"use strict";var n=r(2),o=r(11),i=r(12),u={};r(5)(u,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n.create(u,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(32),o=r(9),i=r(33),u=r(5),a=r(10),c=r(6),s=r(29),f=r(12),l=r(2).getProto,h=r(1)("iterator"),p=!([].keys&&"next"in[].keys()),_="@@iterator",d="keys",v="values",y=function(){return this};t.exports=function(t,e,r,g,w,m,b){s(r,e,g);var x,j,O=function(t){if(!p&&t in A)return A[t];switch(t){case d:return function(){return new r(this,t)};case v:return function(){return new r(this,t)}}return function(){return new r(this,t)}},S=e+" Iterator",P=w==v,M=!1,A=t.prototype,D=A[h]||A[_]||w&&A[w],L=D||O(w);if(D){var q=l(L.call(new t));f(q,S,!0),!n&&a(A,_)&&u(q,h,y),P&&D.name!==v&&(M=!0,L=function(){return D.call(this)})}if(n&&!b||!p&&!M&&A[h]||u(A,h,L),c[e]=L,c[S]=y,w)if(x={values:P?L:O(v),keys:m?L:O(d),entries:P?O("entries"):L},b)for(j in x)j in A||i(A,j,x[j]);else o(o.P+o.F*(p||M),e,x);return x}},function(t,e,r){var n=r(1)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],u=i[n]();u.next=function(){return{done:r=!0}},i[n]=function(){return u},t(i)}catch(t){}return r}},function(t,e){t.exports=!0},function(t,e,r){t.exports=r(5)},function(t,e,r){var n=r(4),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,r){var n=r(13),o=r(8);t.exports=function(t){return function(e,r){var i,u,a=String(o(e)),c=n(r),s=a.length;return c<0||c>=s?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,r){var n=r(13),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(8);t.exports=function(t){return Object(n(t))}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=r(22),o=r(1)("iterator"),i=r(6);t.exports=r(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){"use strict";var n=r(7),o=r(9),i=r(37),u=r(28),a=r(26),c=r(36),s=r(39);o(o.S+o.F*!r(31)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,o,f,l=i(t),h="function"==typeof this?this:Array,p=arguments,_=p.length,d=_>1?p[1]:void 0,v=void 0!==d,y=0,g=s(l);if(v&&(d=n(d,_>2?p[2]:void 0,2)),void 0==g||h==Array&&a(g))for(e=c(l.length),r=new h(e);e>y;y++)r[y]=v?d(l[y],y):l[y];else for(f=g.call(l),r=new h;!(o=f.next()).done;y++)r[y]=v?u(f,d,[o.value,y],!0):o.value;return r.length=y,r}})},function(t,e,r){"use strict";var n=r(35)(!0);r(30)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e){},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.unwatch=e.watch=void 0;var o=r(4),i=n(o),u=r(3),a=n(u),c=(e.watch=function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];var n=e[1];f(n)?g.apply(void 0,e):c(n)?m.apply(void 0,e):w.apply(void 0,e)},e.unwatch=function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];var n=e[1];f(n)||void 0===n?O.apply(void 0,e):c(n)?x.apply(void 0,e):b.apply(void 0,e)},function(t){return"[object Array]"==={}.toString.call(t)}),s=function(t){return"[object Object]"==={}.toString.call(t)},f=function(t){return"[object Function]"==={}.toString.call(t)},l=function(t,e,r){(0,a.default)(t,e,{enumerable:!1,configurable:!0,writable:!1,value:r})},h=function(t,e,r,n){(0,a.default)(t,e,{get:r,set:function(t){n.call(this,t)},enumerable:!0,configurable:!0})},p=function(t,e,r,n,o){var i=void 0,u=t.__watchers__[e];(i=t.__watchers__.__watchall__)&&(u=u?u.concat(i):i);for(var a=u?u.length:0,c=0;a>c;c++)u[c].call(t,r,n,e,o)},_=["pop","push","reverse","shift","sort","unshift","splice"],d=function(t,e,r,n){l(t,r,function(){for(var o=0,i=void 0,u=void 0,a=arguments.length,c=Array(a),s=0;a>s;s++)c[s]=arguments[s];if("splice"===r){var f=c[0],l=f+c[1];i=t.slice(f,l),u=[];for(var h=2;h<c.length;h++)u[h-2]=c[h];o=f}else u="push"===r||"unshift"===r?c.length>0?c:void 0:c.length>0?c[0]:void 0;var p=e.apply(t,c);return"pop"===r?(i=p,o=t.length):"push"===r?o=t.length-1:"shift"===r?i=p:"unshift"!==r&&void 0===u&&(u=p),n.call(t,o,r,u,i),p})},v=function(t,e){if(f(e)&&t&&!(t instanceof String)&&c(t))for(var r=_.length;r>0;r--){var n=_[r-1];d(t,t[n],n,e)}},y=function(t,e,r,n){var o=!1,u=c(t);void 0===t.__watchers__&&(l(t,"__watchers__",{}),u&&v(t,function(r,o,i,u){if(p(t,r,i,u,o),0!==n&&i&&(s(i)||c(i))){var a=void 0,f=t.__watchers__[e];(a=t.__watchers__.__watchall__)&&(f=f?f.concat(a):a);for(var l=f?f.length:0,h=0;l>h;h++)if("splice"!==o)g(i,f[h],void 0===n?n:n-1);else for(var _=0;_<i.length;_++)g(i[_],f[h],void 0===n?n:n-1)}})),void 0===t.__proxy__&&l(t,"__proxy__",{}),void 0===t.__watchers__[e]&&(t.__watchers__[e]=[],u||(o=!0));for(var f=0;f<t.__watchers__[e].length;f++)if(t.__watchers__[e][f]===r)return;t.__watchers__[e].push(r),o&&!function(){var r=(0,i.default)(t,e);void 0!==r?!function(){var n={enumerable:r.enumerable,configurable:r.configurable},o=["get","set"];o.forEach(function(e){void 0!==r[e]&&(n[e]=function(){for(var n=arguments.length,o=Array(n),i=0;n>i;i++)o[i]=arguments[i];return r[e].apply(t,o)})});var i=["writable","value"];i.forEach(function(t){void 0!==r[t]&&(n[t]=r[t])}),(0,a.default)(t.__proxy__,e,n)}():t.__proxy__[e]=t[e];var o=function(){return t.__proxy__[e]},u=function(r){var o=t.__proxy__[e];if(0!==n&&t[e]&&(s(t[e])||c(t[e]))&&!t[e].__watchers__)for(var i=0;i<t.__watchers__[e].length;i++)g(t[e],t.__watchers__[e][i],void 0===n?n:n-1);o!==r&&(t.__proxy__[e]=r,p(t,e,r,o,"set"))};h(t,e,o,u)}()},g=function t(e,r,n){if("string"!=typeof e&&(e instanceof Object||c(e)))if(c(e)){if(y(e,"__watchall__",r,n),void 0===n||n>0)for(var o=0;o<e.length;o++)t(e[o],r,n)}else{var i=[];for(var u in e)({}).hasOwnProperty.call(e,u)&&i.push(u);m(e,i,r,n)}},w=function(t,e,r,n){"string"!=typeof t&&(t instanceof Object||c(t))&&(f(t[e])||(null!==t[e]&&(void 0===n||n>0)&&g(t[e],r,void 0!==n?n-1:n),y(t,e,r,n)))},m=function(t,e,r,n){if("string"!=typeof t&&(t instanceof Object||c(t)))for(var o=0;o<e.length;o++){var i=e[o];w(t,i,r,n)}},b=function(t,e,r){if(void 0!==t.__watchers__&&void 0!==t.__watchers__[e])if(void 0===r)delete t.__watchers__[e];else for(var n=0;n<t.__watchers__[e].length;n++)t.__watchers__[e][n]===r&&t.__watchers__[e].splice(n,1)},x=function(t,e,r){for(var n in e)e.hasOwnProperty(n)&&b(t,e[n],r)},j=function t(e,r){var n=[];for(var o in e)e.hasOwnProperty(o)&&(e[o]instanceof Object&&t(e[o],r),n.push(o));x(e,n,r)},O=function(t,e){if(!(t instanceof String||!t instanceof Object&&!c(t)))if(c(t)){for(var r=["__watchall__"],n=0;n<t.length;n++)r.push(n);x(t,r,e)}else j(t,e)}},function(t,e){var r=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(t,e){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,e,r){t.exports={default:r(5),__esModule:!0}},function(t,e,r){t.exports={default:r(6),__esModule:!0}},function(t,e,r){var n=r(2);t.exports=function(t,e,r){return n.setDesc(t,e,r)}},function(t,e,r){var n=r(2);r(17),t.exports=function(t,e){return n.getDesc(t,e)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(7);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(13),o=r(1),i=r(9),u="prototype",a=function(t,e,r){var c,s,f,l=t&a.F,h=t&a.G,p=t&a.S,_=t&a.P,d=t&a.B,v=t&a.W,y=h?o:o[e]||(o[e]={}),g=h?n:p?n[e]:(n[e]||{})[u];h&&(r=e);for(c in r)s=!l&&g&&c in g,s&&c in y||(f=s?g[c]:r[c],y[c]=h&&"function"!=typeof g[c]?r[c]:d&&s?i(f,n):v&&g[c]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(f):_&&"function"==typeof f?i(Function.call,f):f,_&&((y[u]||(y[u]={}))[c]=f))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(11),o=r(1),i=r(12);t.exports=function(t,e){var r=(o.Object||{})[t]||Object[t],u={};u[t]=e(r),n(n.S+n.F*i(function(){r(1)}),"Object",u)}},function(t,e,r){var n=r(14),o=r(10);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(16);r(15)("getOwnPropertyDescriptor",function(t){return function(e,r){return t(n(e),r)}})}])})},function(e,r){e.exports=t}])});