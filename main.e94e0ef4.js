parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return d(e)||o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return r(e)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var a=document.querySelector("table"),i=document.createElement("tbody");a.innerHTML="",a.append(i);var l=document.querySelector("tbody"),u=document.querySelector(".append-row"),c=document.querySelector(".remove-row"),m=document.querySelector(".append-column"),p=document.querySelector(".remove-column"),b={width:4,height:4},s={apppendRowButton:"enabled",removeRowButton:"enabled",appendColumnButton:"enabled",removeColumnButton:"enabled"};function h(){l.innerHTML="";for(var e=0;e<b.height;e++){for(var t=document.createElement("tr"),n=0;n<b.width;n++){var o=document.createElement("td");t.append(o)}l.append(t)}}u.addEventListener("click",function(){if("disabled"!==s.apppendRowButton){b.height++;var e=l.lastElementChild.cloneNode(!0);l.append(e),"disabled"===s.removeRowButton&&(s.removeRowButton="enabled",c.disabled=!1),b.height>=10&&(u.disabled=!0,s.apppendRowButton="disabled")}}),c.addEventListener("click",function(){if("disabled"!==s.removeRowButton){b.height--;var e=l.lastElementChild;e&&l.removeChild(e),"disabled"===s.apppendRowButton&&(s.apppendRowButton="enabled",u.disabled=!1),b.height<=2&&(c.disabled=!0,s.removeRowButton="disabled")}}),m.addEventListener("click",function(){"disabled"!==s.appendColumnButton&&(b.width++,e(l.children).forEach(function(e){var t=document.createElement("td");e.append(t)}),"disabled"===s.removeColumnButton&&(s.removeColumnButton="enabled",p.disabled=!1),b.width>=10&&(m.disabled=!0,s.appendColumnButton="disabled"))}),p.addEventListener("click",function(){"disabled"!==s.removeColumnButton&&(b.width--,e(l.children).forEach(function(e){var t=e.lastElementChild;t&&e.removeChild(t)}),"disabled"===s.appendColumnButton&&(s.appendColumnButton="enabled",m.disabled=!1),b.width<=2&&(p.disabled=!0,s.removeColumnButton="disabled"))}),h();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e94e0ef4.js.map