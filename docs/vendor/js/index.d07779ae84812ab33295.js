!function(e){function t(t){for(var o,i,a=t[0],s=t[1],l=t[2],f=0,d=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;c.push([93,1]),n()}({72:function(e,t,n){},80:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);n(11),n(13),n(72);var o=n(62),r=n.n(o),c=(n(34),n(36),n(37),n(38),n(39),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if("function"!=typeof e)throw new TypeError("Expected a function");return function(){for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];t&&clearTimeout(t),t=setTimeout((function(){e.apply(null,r)}),n)}});function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.settings=a(a({},{elemSelector:".header",scrollTop:120}),t)}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this.settings,t=e.elemSelector,n=e.scrollTop,o=document.querySelector(t);window.addEventListener("scroll",c((function(){document.body.scrollTop>n||document.documentElement.scrollTop>n?o.classList.add("is-sticky"):o.classList.remove("is-sticky")}),0))}}])&&l(t.prototype,n),o&&l(t,o),e}();n(80);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.settings=d(d({},{elemClass:"js-move-to-top",scrollTop:200}),t)}var t,n,o;return t=e,(n=[{key:"render",value:function(){var e=this.settings,t=e.elemClass,n=e.scrollTop,o=document.querySelector("#moveToTop");o.classList.add(t),window.addEventListener("scroll",c((function(){document.body.scrollTop>n||document.documentElement.scrollTop>n?o.classList.remove("is-hidden"):o.classList.add("is-hidden")}),300)),o.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))}}])&&b(t.prototype,n),o&&b(t,o),e}();n(81),n(82),n(61),n(85),n(92);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.settings=v(v({},{name:"",val:"",days:"",path:"",domain:"",secure:""}),t)}var t,n,o;return t=e,(n=[{key:"getCookie",value:function(){var e=this.settings.name;if(""!==document.cookie)for(var t=document.cookie.split(/; */),n=0;n<t.length;n++){var o=t[n].split("=")[0],r=t[n].split("=")[1];if(o===decodeURIComponent(e))return decodeURIComponent(r)}return!1}},{key:"setCookie",value:function(){var e=this.settings,t=e.name,n=e.val,o=e.days,r=e.path,c=e.domain,i=e.secure;if(navigator.cookieEnabled){var a=encodeURIComponent(t),s=encodeURIComponent(n),l="".concat(a,"=").concat(s);if("number"==typeof o){var u=new Date;u.setTime(u.getTime()+24*o*60*60*1e3),l+="; expires=".concat(u.toGMTString())}r&&(l+="; path=".concat(r)),c&&(l+="; domain=".concat(c)),i&&(l+="; secure"),document.cookie=l}}},{key:"renderCookieInfo",value:function(e){var t=this,n=v(v({},{cookieName:"acceptCookies",acceptCookies:!!this.getCookie("acceptCookies"),text:"Lorem ipsum dolor..."}),e),o=document.createElement("DIV"),r=document.createElement("DIV"),c=document.createElement("P"),i=document.createElement("BUTTON");o.setAttribute("class","cookie-info"),r.setAttribute("class","cookie-info__content"),c.setAttribute("class","cookie-info__text"),c.textContent=n.text,i.setAttribute("class","cookie-info__close"),r.insertAdjacentElement("afterbegin",c),r.insertAdjacentElement("beforeend",i),o.insertAdjacentElement("afterbegin",r),n.acceptCookies||document.body.insertAdjacentElement("beforeend",o),i.addEventListener("click",(function(){t.settings.val=!0,t.setCookie(),o.classList.add("is-hidden")}))}}])&&O(t.prototype,n),o&&O(t,o),e}();window.addEventListener("DOMContentLoaded",(function(){var e=document.body,t=document.querySelector(".btn-toggle"),n=document.querySelector(".header"),o=document.querySelectorAll(".has-dropdown"),c=document.querySelectorAll(".js-email"),i="biuro",a="@",s="abmstudio.pl";c.forEach((function(e){e.innerHTML=i+a+s})),(new u).init();new r.a({elements_selector:".lazy",load_delay:300});new y({scrollTop:400}).render(),new w({name:"acceptCookies",value:!1,days:30}).renderCookieInfo({text:"Używamy plików cookies, aby zapewnić Ci najlepszą możliwą obsługę na naszej stronie. Kontynuując wyrażasz zgodę na stosowanie przez nas plików cookies."});var l=document.querySelector(".cta"),f=l.querySelector(".field"),d=l.querySelector(".field__msg"),p=l.querySelector('input[type="email"]');function b(e){f.className="field error",d.textContent=e.dataset.errorMessage}l.querySelector("button").addEventListener("click",(function(){p.value&&p.validity.valid?(f.className="field success",d.textContent=""):b(p)})),t.addEventListener("click",(function(){e.classList.toggle("overflow-hidden"),t.classList.toggle("btn-toggle--active"),n.classList.toggle("mobile-nav--active")})),document.addEventListener("click",(function(e){if(e.target.closest(".has-dropdown")){e.preventDefault();var t=e.target.closest(".has-dropdown");o.forEach((function(e){e!==t&&e.classList.remove("is-active")})),t.classList.toggle("is-active")}})),document.body.addEventListener("click",(function(o){(o.target.classList.contains("header__nav__link")||o.target.classList.contains("overlay"))&&(e.classList.remove("overflow-hidden"),t.classList.remove("btn-toggle--active"),n.classList.remove("mobile-nav--active"))}))}))}});