!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dom-factory")):"function"==typeof define&&define.amd?define(["dom-factory"],t):"object"==typeof exports?exports.mdkReveal=t(require("dom-factory")):e.mdkReveal=t(e.domFactory)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.revealComponent=void 0;var r=n(16);Object.defineProperty(t,"revealComponent",{enumerable:!0,get:function(){return r.revealComponent}}),n(45)},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(e,t){var n=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(34),o=n(7);e.exports=function(e){return r(o(e))}},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){e.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(3),o=n(2),i=n(30),u="prototype",s=function(e,t,n){var c,a,f,l=e&s.F,p=e&s.G,d=e&s.S,v=e&s.P,h=e&s.B,y=e&s.W,m=p?o:o[t]||(o[t]={}),b=p?r:d?r[t]:(r[t]||{})[u];p&&(n=t);for(c in n)a=!l&&b&&c in b,a&&c in m||(f=a?b[c]:n[c],m[c]=p&&"function"!=typeof b[c]?n[c]:h&&a?i(f,r):y&&b[c]==f?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[u]=e[u],t}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((m[u]||(m[u]={}))[c]=f))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,e.exports=s},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(9),o=n(2),i=n(5);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(3),o="__core-js_shared__",i=r[o]||(r[o]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(13)("wks"),o=n(14),i=n(3).Symbol;e.exports=function(e){return r[e]||(r[e]=i&&i[e]||(i||o)("Symbol."+e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.revealComponent=void 0;var r=n(18),o=n(46),i=function(){return"ontouchstart"in window},u=t.revealComponent=function(e){return{element:e,properties:{partialHeight:{reflectToAttribute:!0,value:0},forceReveal:{type:Boolean,reflectToAttribute:!0},hoverReveal:{type:Boolean,reflectToAttribute:!0},opened:{type:Boolean,reflectToAttribute:!0}},observers:["_onChange(opened)"],listeners:["_onEnter(mouseenter, touchstart)","_onLeave(mouseleave, touchend)"],get reveal(){return this.element.querySelector(".mdk-reveal__content")},get partial(){var e=this.reveal.querySelector(".mdk-reveal__partial");return e||(e=document.createElement("DIV"),e.classList.add("mdk-reveal__partial"),this.reveal.insertBefore(e,this.reveal.childNodes[0])),e},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},_reset:function(){var e=this,t=parseInt(window.getComputedStyle(this.reveal)["margin-top"],10),n=this.reveal.offsetHeight,o="translate3d(0, "+(n-this.partialHeight)+"px, 0)";this._translateReveal=o,this.forceReveal&&(o="translate3d(0, 0, 0)"),0!==this.partialHeight&&(this.partial.style.height=this.partialHeight+"px"),this.reveal.style.transitionDuration="0s",(0,r.transform)(o,this.reveal),this.element.style.height=t+n+"px",setTimeout(function(){return e.reveal.style.transitionDuration=""},0)},_onChange:function(){(0,r.transform)(this.opened||this.forceReveal?"translate3d(0, 0, 0)":this._translateReveal,this.reveal)},_onEnter:function(e){var t=i()&&"mouseenter"===e.type;!this.hoverReveal||this.forceReveal||t||this.open()},_onLeave:function(e){var t=i()&&"mouseleave"===e.type;!this.hoverReveal||this.forceReveal||t||this.close()},_debounceResize:function(){var e=this;clearTimeout(this._debounceResizeTimer),this._debounceResizeTimer=setTimeout(function(){e._resizeWidth!==window.innerWidth&&(e._resizeWidth=window.innerWidth,e._reset())},50)},init:function(){this._reset(),this._resizeWidth=window.innerWidth,this._debounceResize=this._debounceResize.bind(this),window.addEventListener("resize",this._debounceResize)},destroy:function(){window.removeEventListener("resize",this._debounceResize)}}};o.handler.register("mdk-reveal",u)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.assign=void 0;var o=n(20),i=r(o),u=n(22),s=r(u),c=n(21),a=r(c),f=n(23),l=r(f);t.assign=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return n.forEach(function(t){var n=(0,l["default"])(t).reduce(function(e,n){return e[n]=(0,a["default"])(t,n),e},{});(0,s["default"])(t).forEach(function(e){var r=(0,a["default"])(t,e);r.enumerable&&(n[e]=r)}),(0,i["default"])(e,n)}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17);Object.defineProperty(t,"assign",{enumerable:!0,get:function(){return r.assign}});var o=n(19);Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return o.transform}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.transform=function(e,t){var n=["transform","WebkitTransform","msTransform","MozTransform","OTransform"];n.map(function(n){return t.style[n]=e})}},function(e,t,n){e.exports={"default":n(24),__esModule:!0}},function(e,t,n){e.exports={"default":n(25),__esModule:!0}},function(e,t,n){e.exports={"default":n(26),__esModule:!0}},function(e,t,n){e.exports={"default":n(27),__esModule:!0}},function(e,t,n){var r=n(1);e.exports=function(e,t){return r.setDescs(e,t)}},function(e,t,n){var r=n(1);n(42),e.exports=function(e,t){return r.getDesc(e,t)}},function(e,t,n){n(44),e.exports=n(2).Object.getOwnPropertySymbols},function(e,t,n){n(43),e.exports=n(2).Object.keys},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(36);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){var r=n(28);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r.getKeys(e),n=r.getSymbols;if(n)for(var o,i=n(e),u=r.isEnum,s=0;i.length>s;)u.call(e,o=i[s++])&&t.push(o);return t}},function(e,t,n){var r=n(4),o=n(1).getNames,i={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(t){return u.slice()}};e.exports.get=function(e){return u&&"[object Window]"==i.call(e)?s(e):o(r(e))}},function(e,t,n){var r=n(1),o=n(12);e.exports=n(8)?function(e,t,n){return r.setDesc(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(6);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){var r=n(6);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(1),o=n(4);e.exports=function(e,t){for(var n,i=o(e),u=r.getKeys(i),s=u.length,c=0;s>c;)if(i[n=u[c++]]===t)return n}},function(e,t){e.exports=!0},function(e,t,n){e.exports=n(33)},function(e,t,n){var r=n(1).setDesc,o=n(10),i=n(15)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},function(e,t,n){var r=n(7);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(4);n(11)("getOwnPropertyDescriptor",function(e){return function(t,n){return e(r(t),n)}})},function(e,t,n){var r=n(41);n(11)("keys",function(e){return function(t){return e(r(t))}})},function(e,t,n){"use strict";var r=n(1),o=n(3),i=n(10),u=n(8),s=n(9),c=n(39),a=n(5),f=n(13),l=n(40),p=n(14),d=n(15),v=n(37),h=n(32),y=n(31),m=n(35),b=n(29),g=n(4),_=n(12),x=r.getDesc,w=r.setDesc,O=r.create,S=h.get,j=o.Symbol,P=o.JSON,E=P&&P.stringify,R=!1,T=d("_hidden"),D=r.isEnum,M=f("symbol-registry"),k=f("symbols"),z="function"==typeof j,N=Object.prototype,W=u&&a(function(){return 7!=O(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=x(N,t);r&&delete N[t],w(e,t,n),r&&e!==N&&w(N,t,r)}:w,C=function(e){var t=k[e]=O(j.prototype);return t._k=e,u&&R&&W(N,e,{configurable:!0,set:function(t){i(this,T)&&i(this[T],e)&&(this[T][e]=!1),W(this,e,_(1,t))}}),t},F=function(e){return"symbol"==typeof e},A=function(e,t,n){return n&&i(k,t)?(n.enumerable?(i(e,T)&&e[T][t]&&(e[T][t]=!1),n=O(n,{enumerable:_(0,!1)})):(i(e,T)||w(e,T,_(1,{})),e[T][t]=!0),W(e,t,n)):w(e,t,n)},B=function(e,t){b(e);for(var n,r=y(t=g(t)),o=0,i=r.length;i>o;)A(e,n=r[o++],t[n]);return e},I=function(e,t){return void 0===t?O(e):B(O(e),t)},H=function(e){var t=D.call(this,e);return t||!i(this,e)||!i(k,e)||i(this,T)&&this[T][e]?t:!0},L=function(e,t){var n=x(e=g(e),t);return!n||!i(k,t)||i(e,T)&&e[T][t]||(n.enumerable=!0),n},q=function(e){for(var t,n=S(g(e)),r=[],o=0;n.length>o;)i(k,t=n[o++])||t==T||r.push(t);return r},J=function(e){for(var t,n=S(g(e)),r=[],o=0;n.length>o;)i(k,t=n[o++])&&r.push(k[t]);return r},G=function(e){if(void 0!==e&&!F(e)){for(var t,n,r=[e],o=1,i=arguments;i.length>o;)r.push(i[o++]);return t=r[1],"function"==typeof t&&(n=t),!n&&m(t)||(t=function(e,t){return n&&(t=n.call(this,e,t)),F(t)?void 0:t}),r[1]=t,E.apply(P,r)}},K=a(function(){var e=j();return"[null]"!=E([e])||"{}"!=E({a:e})||"{}"!=E(Object(e))});z||(j=function(){if(F(this))throw TypeError("Symbol is not a constructor");return C(p(arguments.length>0?arguments[0]:void 0))},c(j.prototype,"toString",function(){return this._k}),F=function(e){return e instanceof j},r.create=I,r.isEnum=H,r.getDesc=L,r.setDesc=A,r.setDescs=B,r.getNames=h.get=q,r.getSymbols=J,u&&!n(38)&&c(N,"propertyIsEnumerable",H,!0));var V={"for":function(e){return i(M,e+="")?M[e]:M[e]=j(e)},keyFor:function(e){return v(M,e)},useSetter:function(){R=!0},useSimple:function(){R=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=d(e);V[e]=z?t:C(t)}),R=!0,s(s.G+s.W,{Symbol:j}),s(s.S,"Symbol",V),s(s.S+s.F*!z,"Object",{create:I,defineProperty:A,defineProperties:B,getOwnPropertyDescriptor:L,getOwnPropertyNames:q,getOwnPropertySymbols:J}),P&&s(s.S+s.F*(!z||K),"JSON",{stringify:G}),l(j,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)},function(e,t){},function(t,n){t.exports=e}])});