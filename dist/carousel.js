!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("dom-factory")):"function"==typeof define&&define.amd?define(["dom-factory"],n):"object"==typeof exports?exports.mdkCarousel=n(require("dom-factory")):t.mdkCarousel=n(t.domFactory)}(this,function(t){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.carouselComponent=void 0;var r=e(14);Object.defineProperty(n,"carouselComponent",{enumerable:!0,get:function(){return r.carouselComponent}}),e(40)},function(t,n,e){var r=e(32)("wks"),i=e(36),o=e(4).Symbol;t.exports=function(t){return r[t]||(r[t]=o&&o[t]||(o||i)("Symbol."+t))}},function(t,n){var e=Object;t.exports={create:e.create,getProto:e.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:e.getOwnPropertyDescriptor,setDesc:e.defineProperty,setDescs:e.defineProperties,getKeys:e.keys,getNames:e.getOwnPropertyNames,getSymbols:e.getOwnPropertySymbols,each:[].forEach}},function(t,n){var e=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(2),i=e(11);t.exports=e(22)?function(t,n,e){return r.setDesc(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports={}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(4),i=e(3),o=e(7),s="prototype",u=function(t,n,e){var a,c,f,h=t&u.F,l=t&u.G,d=t&u.S,_=t&u.P,g=t&u.B,p=t&u.W,m=l?i:i[n]||(i[n]={}),v=l?r:d?r[n]:(r[n]||{})[s];l&&(e=n);for(a in e)c=!h&&v&&a in v,c&&a in m||(f=c?v[a]:e[a],m[a]=l&&"function"!=typeof v[a]?e[a]:g&&c?o(f,r):p&&v[a]==f?function(t){var n=function(n){return this instanceof t?new t(n):t(n)};return n[s]=t[s],n}(f):_&&"function"==typeof f?o(Function.call,f):f,_&&((m[s]||(m[s]={}))[a]=f))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2).setDesc,i=e(10),o=e(1)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.carouselComponent=void 0;var i=e(16),o=r(i),s=e(41),u=function(){return"ontouchstart"in window},a=function(t){"none"===t&&(t="matrix(0,0,0,0,0)");var n={},e=t.match(/([-+]?[\d\.]+)/g);return n.translate={x:parseInt(e[4],10)||0,y:parseInt(e[5],10)||0},n},c=function(t){var n=window.getComputedStyle(t,null),e=n.getPropertyValue("-webkit-transform")||n.getPropertyValue("-moz-transform")||n.getPropertyValue("-ms-transform")||n.getPropertyValue("-o-transform")||n.getPropertyValue("transform");return a(e)},f=function(t){return t=t.originalEvent||t||window.event,t=t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,{x:t.pageX?t.pageX:t.clientX,y:t.pageY?t.pageY:t.clientY}},h=function(t,n){return{x:t.x-n.x,y:t.y-n.y}},l=n.carouselComponent=function(){return{listeners:["_onEnter(mouseenter)","_onLeave(mouseleave)","_onTransitionend(transitionend)","_onDragStart(mousedown, touchstart)","_onMouseDrag(dragstart, selectstart)","document._onDragMove(mousemove, touchmove)","document._onDragEnd(mouseup, touchend)","window._debounceResize(resize)"],_items:[],_isMoving:!1,_content:null,_current:null,_drag:{},_reset:function(){this._content=this.element.querySelector(".mdk-carousel__content"),this._items=[].concat((0,o.default)(this._content.children)),this._content.style.width="",this._items.forEach(function(t){t.style.width=""});var t=this.element.offsetWidth,n=this._items[0].offsetWidth,e=t/n;if(this._itemWidth=n,this._visible=Math.round(e),this._max=this._items.length-this._visible,this.element.style.overflow="hidden",this._content.style.width=n*this._items.length+"px",this._items.forEach(function(t){t.classList.add("mdk-carousel__item"),t.style.width=n+"px"}),this._current||(this._current=this._items[0]),!(this._items.length<2)){var r=this._items.indexOf(this._current);this._transform(r*n*-1,0),this.start()}},start:function(){this.stop(),this._items.length<2||this._items.length<=this._visible||(this._setContentTransitionDuration(""),this._interval=setInterval(this.next.bind(this),2e3))},stop:function(){clearInterval(this._interval),this._interval=null},next:function(){if(!(this._items.length<2||this._isMoving||document.hidden)&&this._isOnScreen()){var t=this._items.indexOf(this._current),n=void 0!==this._items[t+1]?t+1:0,e=this._items.length-t;e===this._visible&&(n=0),this._to(n)}},prev:function(){if(!(this._items.length<2||this._isMoving)){var t=this._items.indexOf(this._current),n=void 0!==this._items[t-1]?t-1:this._items.length;this._to(n)}},_transform:function(t,n,e){void 0!==n&&this._setContentTransitionDuration(n+"ms");var r=c(this._content);r.translate.x===t?"function"==typeof e&&e.call(this):requestAnimationFrame(function(){0!==n&&(this._isMoving=!0),s.util.transform("translate3d("+t+"px, 0, 0)",this._content),"function"==typeof e&&e.call(this)}.bind(this))},_to:function(t){if(!(this._items.length<2||this._isMoving)){t>this._max&&(t=this._max),t<0&&(t=0);var n=t*this._itemWidth*-1;this._transform(n,!1,function(){this._current=this._items[t]})}},_debounceResize:function(){clearTimeout(this._resizeTimer),this._resizeWidth!==window.innerWidth&&(this._resizeTimer=setTimeout(function(){this._resizeWidth=window.innerWidth,this.stop(),this._reset()}.bind(this),50))},_setContentTransitionDuration:function(t){this._content.style.transitionDuration=t},_onEnter:function(){this.stop()},_onLeave:function(){this._drag.wasDragging||this.start()},_onTransitionend:function(){this._isMoving=!1},_onDragStart:function(t){if(!this._drag.isDragging&&!this._isMoving&&3!==t.which){this.stop();var n=c(this._content).translate;this._drag.isDragging=!0,this._drag.isScrolling=!1,this._drag.time=(new Date).getTime(),this._drag.start=n,this._drag.current=n,this._drag.delta={x:0,y:0},this._drag.pointer=f(t),this._drag.target=t.target}},_onDragMove:function(t){if(this._drag.isDragging){var n=h(this._drag.pointer,f(t)),e=h(this._drag.start,n),r=u()&&Math.abs(n.x)<Math.abs(n.y);r||(t.preventDefault(),this._transform(e.x,0)),this._drag.delta=n,this._drag.current=e,this._drag.isScrolling=r,this._drag.target=t.target}},_onDragEnd:function(t){if(this._drag.isDragging){this._setContentTransitionDuration(""),this._drag.duration=(new Date).getTime()-this._drag.time;var n=Math.abs(this._drag.delta.x),e=n>20||n>this._itemWidth/3,r=Math.max(Math.round(n/this._itemWidth),1),i=this._drag.delta.x>0;if(e){var o=this._items.indexOf(this._current),s=i?o+r:o-r;this._to(s)}else this._transform(this._drag.start.x);this._drag.isDragging=!1,this._drag.wasDragging=!0}},_onMouseDrag:function(t){t.preventDefault(),t.stopPropagation()},_isOnScreen:function(){var t=this.element.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth},init:function(){this._resizeWidth=window.innerWidth,this._reset()},destroy:function(){this.stop(),clearTimeout(this._resizeTimer)}}};s.handler.register("mdk-carousel",l)},function(t,n,e){t.exports={default:e(17),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var i=e(15),o=r(i);n.default=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,o.default)(t)}},function(t,n,e){e(39),e(38),t.exports=e(3).Array.from},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(25);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(21),i=e(1)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=(n=Object(t))[i])?e:o?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){t.exports=!e(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(6),i=e(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(19);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){"use strict";var r=e(2),i=e(11),o=e(12),s={};e(5)(s,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r.create(s,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){"use strict";var r=e(30),i=e(9),o=e(31),s=e(5),u=e(10),a=e(6),c=e(27),f=e(12),h=e(2).getProto,l=e(1)("iterator"),d=!([].keys&&"next"in[].keys()),_="@@iterator",g="keys",p="values",m=function(){return this};t.exports=function(t,n,e,v,y,x,w){c(e,n,v);var b,M,D=function(t){if(!d&&t in O)return O[t];switch(t){case g:return function(){return new e(this,t)};case p:return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",P=y==p,T=!1,O=t.prototype,A=O[l]||O[_]||y&&O[y],C=A||D(y);if(A){var W=h(C.call(new t));f(W,S,!0),!r&&u(O,_)&&s(W,l,m),P&&A.name!==p&&(T=!0,C=function(){return A.call(this)})}if(r&&!w||!d&&!T&&O[l]||s(O,l,C),a[n]=C,a[S]=m,y)if(b={values:P?C:D(p),keys:x?C:D(g),entries:P?D("entries"):C},w)for(M in b)M in O||o(O,M,b[M]);else i(i.P+i.F*(d||T),n,b);return b}},function(t,n,e){var r=e(1)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:e=!0}},o[r]=function(){return s},t(o)}catch(t){}return e}},function(t,n){t.exports=!0},function(t,n,e){t.exports=e(5)},function(t,n,e){var r=e(4),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(13),i=e(8);t.exports=function(t){return function(n,e){var o,s,u=String(i(n)),a=r(e),c=u.length;return a<0||a>=c?t?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):o:t?u.slice(a,a+2):(o-55296<<10)+(s-56320)+65536)}}},function(t,n,e){var r=e(13),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n,e){var r=e(8);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(20),i=e(1)("iterator"),o=e(6);t.exports=e(3).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){"use strict";var r=e(7),i=e(9),o=e(35),s=e(26),u=e(24),a=e(34),c=e(37);i(i.S+i.F*!e(29)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,i,f,h=o(t),l="function"==typeof this?this:Array,d=arguments,_=d.length,g=_>1?d[1]:void 0,p=void 0!==g,m=0,v=c(h);if(p&&(g=r(g,_>2?d[2]:void 0,2)),void 0==v||l==Array&&u(v))for(n=a(h.length),e=new l(n);n>m;m++)e[m]=p?g(h[m],m):h[m];else for(f=v.call(h),e=new l;!(i=f.next()).done;m++)e[m]=p?s(f,g,[i.value,m],!0):i.value;return e.length=m,e}})},function(t,n,e){"use strict";var r=e(33)(!0);e(28)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n){},function(n,e){n.exports=t}])});