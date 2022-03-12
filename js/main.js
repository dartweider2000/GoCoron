/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/js/main.min.js":
/*!*****************************!*\
  !*** ./dist/js/main.min.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(()=>{\"use strict\";(()=>{const e=document.querySelector(\".header__burger\"),t=document.querySelector(\".menu-header__body\"),n=()=>{e.classList.remove(\"active\"),t.classList.remove(\"active\"),document.body.classList.remove(\"lock\"),document.body.dataset.actives=\"\"};document.addEventListener(\"click\",(e=>{e.target.closest(\".header\")||n(),\"burger\"!==document.body.dataset.actives&&n()})),e.addEventListener(\"click\",(n=>{e.classList.toggle(\"active\"),t.classList.toggle(\"active\"),document.body.classList.toggle(\"lock\"),t.scrollTo(0,0),e.classList.contains(\"active\")?document.body.dataset.actives=\"burger\":document.body.dataset.actives=\"\"})),window.addEventListener(\"resize\",(e=>{window.innerWidth>=768&&n()}))})(),(()=>{const e=Array.from(document.querySelectorAll(\"[data-ad]\")),t=[],n=e=>{const t=+e;return isNaN(t)?e:t},r=()=>{t.forEach((e=>{e.brackpoint>=window.innerWidth&&!e.element.classList.contains(\"_done\")?(0===e.in.order||\"prepend\"===e.in.order?e.in.place.prepend(e.element):\"append\"===e.in.order?e.in.place.append(e.element):\"before\"===e.in.order?e.in.place.before(e.element):\"after\"===e.in.order?e.in.place.after(e.element):e.in.place.children.length<e.in.order?e.in.place.append(e.element):e.in.order<0?e.in.place.prepend(e.element):e.in.place.children[e.in.order-1].after(e.element),e.element.classList.add(\"_done\")):e.brackpoint<window.innerWidth&&e.element.classList.contains(\"_done\")&&(0===e.back.order?e.back.parent.prepend(e.element):e.back.parent.children[e.back.order-1].after(e.element),e.element.classList.remove(\"_done\"))}))};e.forEach((e=>{const r=e.dataset.ad.split(\",\").map((e=>e.trim())),a={in:{place:document.querySelector(r[0]),order:n(r[2])},back:{parent:e.parentElement,order:(i=e,Array.from(i.parentElement.children).reduce(((e,t,n)=>(null!==e||t===i&&(e=n),e)),null))},element:e,brackpoint:+r[1]};var i;t.push(a)})),r(),window.addEventListener(\"resize\",r)})(),(()=>{const e=document.querySelector(\".header-little-big\"),t=e.dataset.headerChangeDirection,n=document.querySelector(t);let r=n.offsetTop;const a=(()=>{let e=pageYOffset;return()=>{let t=pageYOffset,n=e-t;return e=t,n}})(),i=()=>{r=n.offsetTop,window.innerWidth<768?e.classList.remove(\"little-big\"):pageYOffset+e.offsetHeight>=r&&e.classList.add(\"little-big\")};i(),window.addEventListener(\"resize\",(()=>{setTimeout((()=>i),300)})),window.addEventListener(\"scroll\",(()=>{const t=a();t<0?pageYOffset+e.offsetHeight>=r&&e.classList.add(\"little-big\"):t>0&&pageYOffset+e.offsetHeight<r&&e.classList.remove(\"little-big\"),r=n.offsetTop}))})()})();\n\n//# sourceURL=webpack://gulp_train_4/./dist/js/main.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/js/main.min.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;