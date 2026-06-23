/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   storageController: () => (/* binding */ storageController)\n/* harmony export */ });\nclass Todo {\n    constructor(name, dueDate, description = undefined) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.description = description;\n    }\n}\n\nfunction storageController() {\n    let storage = {};\n\n    function addProject(name) {\n        storage[name] = {};\n    }\n\n    return {storage, addProject}\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvYXBwLmpzPzY1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RvcmFnZUNvbnRyb2xsZXIoKSB7XG4gICAgbGV0IHN0b3JhZ2UgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICAgICAgICBzdG9yYWdlW25hbWVdID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdG9yYWdlLCBhZGRQcm9qZWN0fVxufVxuXG5leHBvcnQge3N0b3JhZ2VDb250cm9sbGVyLCBUb2RvfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\nlet todo = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.storageController)();\n\n// Projects\ntodo.addProject('coding');\ntodo.addProject('school');\ntodo.addProject('personal');\n\n// Coding tasks\ntodo.storage.coding[\"Finish Todo App\"] = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n    \"Finish Todo App\",\n    \"2026-06-30\",\n    \"Implement localStorage support\"\n);\n\ntodo.storage.coding[\"Fix Webpack Config\"] = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n    \"Fix Webpack Config\",\n    \"2026-06-25\",\n    \"Clean up build process\"\n);\n\n// School tasks\ntodo.storage.school[\"Math Homework\"] = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n    \"Math Homework\",\n    \"2026-06-24\",\n    \"Chapter 8 exercises\"\n);\n\ntodo.storage.school[\"History Essay\"] = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n    \"History Essay\",\n    \"2026-07-02\",\n    \"Draft first version\"\n);\n\n// Personal tasks\ntodo.storage.personal[\"Buy Journal\"] = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n    \"Buy Journal\",\n    \"2026-06-28\"\n);\n\ntodo.storage.personal[\"Practice Piano\"] = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n    \"Practice Piano\",\n    \"2026-06-24\",\n    \"30 minutes\"\n);\n\nconsole.log(todo.storage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUQ7O0FBRW5ELFdBQVcsMERBQWlCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qyx5Q0FBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QseUNBQUk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMseUNBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLHlDQUFJO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLHlDQUFJO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMseUNBQUk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9pbmRleC5qcz9hNTE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyLCBUb2RvIH0gZnJvbSBcIi4vYXBwLmpzXCI7XG5cbmxldCB0b2RvID0gc3RvcmFnZUNvbnRyb2xsZXIoKTtcblxuLy8gUHJvamVjdHNcbnRvZG8uYWRkUHJvamVjdCgnY29kaW5nJyk7XG50b2RvLmFkZFByb2plY3QoJ3NjaG9vbCcpO1xudG9kby5hZGRQcm9qZWN0KCdwZXJzb25hbCcpO1xuXG4vLyBDb2RpbmcgdGFza3NcbnRvZG8uc3RvcmFnZS5jb2RpbmdbXCJGaW5pc2ggVG9kbyBBcHBcIl0gPSBuZXcgVG9kbyhcbiAgICBcIkZpbmlzaCBUb2RvIEFwcFwiLFxuICAgIFwiMjAyNi0wNi0zMFwiLFxuICAgIFwiSW1wbGVtZW50IGxvY2FsU3RvcmFnZSBzdXBwb3J0XCJcbik7XG5cbnRvZG8uc3RvcmFnZS5jb2RpbmdbXCJGaXggV2VicGFjayBDb25maWdcIl0gPSBuZXcgVG9kbyhcbiAgICBcIkZpeCBXZWJwYWNrIENvbmZpZ1wiLFxuICAgIFwiMjAyNi0wNi0yNVwiLFxuICAgIFwiQ2xlYW4gdXAgYnVpbGQgcHJvY2Vzc1wiXG4pO1xuXG4vLyBTY2hvb2wgdGFza3NcbnRvZG8uc3RvcmFnZS5zY2hvb2xbXCJNYXRoIEhvbWV3b3JrXCJdID0gbmV3IFRvZG8oXG4gICAgXCJNYXRoIEhvbWV3b3JrXCIsXG4gICAgXCIyMDI2LTA2LTI0XCIsXG4gICAgXCJDaGFwdGVyIDggZXhlcmNpc2VzXCJcbik7XG5cbnRvZG8uc3RvcmFnZS5zY2hvb2xbXCJIaXN0b3J5IEVzc2F5XCJdID0gbmV3IFRvZG8oXG4gICAgXCJIaXN0b3J5IEVzc2F5XCIsXG4gICAgXCIyMDI2LTA3LTAyXCIsXG4gICAgXCJEcmFmdCBmaXJzdCB2ZXJzaW9uXCJcbik7XG5cbi8vIFBlcnNvbmFsIHRhc2tzXG50b2RvLnN0b3JhZ2UucGVyc29uYWxbXCJCdXkgSm91cm5hbFwiXSA9IG5ldyBUb2RvKFxuICAgIFwiQnV5IEpvdXJuYWxcIixcbiAgICBcIjIwMjYtMDYtMjhcIlxuKTtcblxudG9kby5zdG9yYWdlLnBlcnNvbmFsW1wiUHJhY3RpY2UgUGlhbm9cIl0gPSBuZXcgVG9kbyhcbiAgICBcIlByYWN0aWNlIFBpYW5vXCIsXG4gICAgXCIyMDI2LTA2LTI0XCIsXG4gICAgXCIzMCBtaW51dGVzXCJcbik7XG5cbmNvbnNvbGUubG9nKHRvZG8uc3RvcmFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;