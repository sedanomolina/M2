(()=>{var t={791:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}r.r(e),r.d(e,{__DO_NOT_USE__ActionTypes:()=>p,applyMiddleware:()=>b,bindActionCreators:()=>E,combineReducers:()=>s,compose:()=>v,createStore:()=>y,legacy_createStore:()=>l});var f="function"==typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function y(t,e,r){var n;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error(u(1));return r(y)(t,e)}if("function"!=typeof t)throw new Error(u(2));var o=t,i=e,c=[],a=c,l=!1;function s(){a===c&&(a=c.slice())}function d(){if(l)throw new Error(u(3));return i}function E(t){if("function"!=typeof t)throw new Error(u(4));if(l)throw new Error(u(5));var e=!0;return s(),a.push(t),function(){if(e){if(l)throw new Error(u(6));e=!1,s();var r=a.indexOf(t);a.splice(r,1),c=null}}}function v(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t))throw new Error(u(7));if(void 0===t.type)throw new Error(u(8));if(l)throw new Error(u(9));try{l=!0,i=o(i,t)}finally{l=!1}for(var e=c=a,r=0;r<e.length;r++)(0,e[r])();return t}return v({type:p.INIT}),(n={dispatch:v,subscribe:E,getState:d,replaceReducer:function(t){if("function"!=typeof t)throw new Error(u(10));o=t,v({type:p.REPLACE})}})[f]=function(){var t,e=E;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(u(11));function r(){t.next&&t.next(d())}return r(),{unsubscribe:e(r)}}})[f]=function(){return this},t},n}var l=y;function s(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,c=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:p.INIT}))throw new Error(u(12));if(void 0===r(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(r)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},f=0;f<c.length;f++){var a=c[f],p=r[a],y=t[a],l=p(y,e);if(void 0===l)throw e&&e.type,new Error(u(14));o[a]=l,n=n||l!==y}return(n=n||c.length!==Object.keys(t).length)?o:t}}function d(t,e){return function(){return e(t.apply(this,arguments))}}function E(t,e){if("function"==typeof t)return d(t,e);if("object"!=typeof t||null===t)throw new Error(u(16));var r={};for(var n in t){var o=t[n];"function"==typeof o&&(r[n]=d(o,e))}return r}function v(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function b(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(u(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=v.apply(void 0,i)(r.dispatch),c(c({},r),{},{dispatch:n})}}}},883:t=>{t.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",INCREMENTO_IMPAR:"INCREMENTO_IMPAR",INCREMENTO_ASYNC:"INCREMENTO_ASYNC"}},518:(t,e,r)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTO_IMPAR:i,INCREMENTO_ASYNC:c}=r(883);t.exports={incremento:t=>({type:n,payload:t}),decremento:t=>({type:o,payload:t}),incremento_impar:()=>({type:i,payload:{isPair:1,isUnPaired:2}}),incrementoAsync:()=>({type:c,payload:null})}},616:(t,e,r)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTO_IMPAR:i,INCREMENTO_ASYNC:c}=r(883),u={count:0};t.exports=function(t=u,e){switch(e.type){case n:return{...t,count:t.count+e.payload};case o:return{...t,count:t.count-e.payload};case i:return t.count%2==0?{...t,count:t.count+e.payload.isPair}:{...t,count:t.count+e.payload.isUnPaired};case c:return{};default:return{...t}}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{createStore:t}=r(791),e=r(616),{incremento:n,decremento:o,incremento_impar:i}=r(518);var c=t(e),u=document.getElementById("valor");function f(){const{count:t}=c.getState();u.innerHTML=t}f(),c.subscribe(f);var a=document.getElementById("incremento"),p=document.getElementById("decremento"),y=document.getElementById("incrementoImpar"),l=document.getElementById("incrementoAsync");a.addEventListener("click",(()=>c.dispatch(n(1)))),p.addEventListener("click",(()=>c.dispatch(o(1)))),y.addEventListener("click",(()=>c.dispatch(i()))),l.addEventListener("click",(()=>setTimeout((()=>c.dispatch(n(1))),1e3)))})()})();