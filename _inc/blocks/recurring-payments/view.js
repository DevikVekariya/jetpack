!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=357)}({357:function(e,t,n){n(45),e.exports=n(358)},358:function(e,t,n){"use strict";n.r(t);var r=n(57),o=n.n(r);n(359);function i(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){var t=JSON.parse(e.data);t&&"close"===t.action&&(window.removeEventListener("message",i),tb_remove())}}"undefined"!=typeof window&&o()((function(){Array.prototype.slice.call(document.querySelectorAll(".wp-block-jetpack-recurring-payments a")).forEach((function(e){if("true"!==e.getAttribute("data-jetpack-block-initialized")){var t=e.getAttribute("href");try{!function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo(0,0),tb_show(null,t+"&display=alternate&TB_iframe=true",null),window.addEventListener("message",i,!1),document.querySelector("#TB_window").classList.add("jetpack-memberships-modal"),window.scrollTo(0,0)}))}(e,t)}catch(n){console.error("Problem activating Payments "+t,n)}e.setAttribute("data-jetpack-block-initialized","true")}}))}))},359:function(e,t,n){},41:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},45:function(e,t,n){"use strict";n.r(t);n(41)},57:function(e,t){!function(){e.exports=this.wp.domReady}()}}));