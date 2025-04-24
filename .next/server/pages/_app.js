"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDrive: () => (/* binding */ useDrive),\n/* harmony export */   useMirror: () => (/* binding */ useMirror),\n/* harmony export */   usePulse: () => (/* binding */ usePulse),\n/* harmony export */   useSync: () => (/* binding */ useSync)\n/* harmony export */ });\n// core/index.js\n// Stub implementations so Frontend compiles standalone.\n// You can replace these with real logic when your core package is ready.\nfunction usePulse() {\n    // no‑op or simple console.log\n    return null;\n}\nfunction useDrive() {\n    return null;\n}\nfunction useMirror() {\n    return null;\n}\nfunction useSync() {\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvcmUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQix3REFBd0Q7QUFDeEQseUVBQXlFO0FBRWxFLFNBQVNBO0lBQ1osOEJBQThCO0lBQzlCLE9BQU87QUFDWDtBQUVPLFNBQVNDO0lBQ1osT0FBTztBQUNYO0FBRU8sU0FBU0M7SUFDWixPQUFPO0FBQ1g7QUFFTyxTQUFTQztJQUNaLE9BQU87QUFDWCIsInNvdXJjZXMiOlsiL1VzZXJzL21pY2hhZWxzb21tZXIvRG93bmxvYWRzLzFwcm9qZWN0L2F2YW50YXNvbW1lcl9mcm9udGVuZC9jb3JlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvcmUvaW5kZXguanNcbi8vIFN0dWIgaW1wbGVtZW50YXRpb25zIHNvIEZyb250ZW5kIGNvbXBpbGVzIHN0YW5kYWxvbmUuXG4vLyBZb3UgY2FuIHJlcGxhY2UgdGhlc2Ugd2l0aCByZWFsIGxvZ2ljIHdoZW4geW91ciBjb3JlIHBhY2thZ2UgaXMgcmVhZHkuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQdWxzZSgpIHtcbiAgICAvLyBub+KAkW9wIG9yIHNpbXBsZSBjb25zb2xlLmxvZ1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJpdmUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNaXJyb3IoKSB7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTeW5jKCkge1xuICAgIHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbInVzZVB1bHNlIiwidXNlRHJpdmUiLCJ1c2VNaXJyb3IiLCJ1c2VTeW5jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./core/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AvantaCoreProvider: () => (/* binding */ AvantaCoreProvider),\n/* harmony export */   useCore: () => (/* binding */ useCore)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ \"(pages-dir-node)/./core/index.js\");\n// provider/AvantaCoreProvider.js\n\n\n // adjust if your core package path differs\nconst CoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AvantaCoreProvider({ children }) {\n    const pulse = (0,_core__WEBPACK_IMPORTED_MODULE_2__.usePulse)();\n    const drive = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useDrive)();\n    const mirror = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useMirror)();\n    const sync = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useSync)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoreContext.Provider, {\n        value: {\n            pulse,\n            drive,\n            mirror,\n            sync\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/michaelsommer/Downloads/1project/avantasommer_frontend/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\nfunction useCore() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CoreContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQzs7QUFDd0I7QUFDUSxDQUFDLDJDQUEyQztBQUU3RyxNQUFNTyw0QkFBY04sb0RBQWFBLENBQUM7QUFFM0IsU0FBU08sbUJBQW1CLEVBQUVDLFFBQVEsRUFBRTtJQUMzQyxNQUFNQyxRQUFRUCwrQ0FBUUE7SUFDdEIsTUFBTVEsUUFBUVAsK0NBQVFBO0lBQ3RCLE1BQU1RLFNBQVNQLGdEQUFTQTtJQUN4QixNQUFNUSxPQUFPUCw4Q0FBT0E7SUFFcEIscUJBQ0ksOERBQUNDLFlBQVlPLFFBQVE7UUFBQ0MsT0FBTztZQUFFTDtZQUFPQztZQUFPQztZQUFRQztRQUFLO2tCQUNyREo7Ozs7OztBQUdiO0FBRU8sU0FBU087SUFDWixPQUFPZCxpREFBVUEsQ0FBQ0s7QUFDdEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsc29tbWVyL0Rvd25sb2Fkcy8xcHJvamVjdC9hdmFudGFzb21tZXJfZnJvbnRlbmQvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwcm92aWRlci9BdmFudGFDb3JlUHJvdmlkZXIuanNcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQdWxzZSwgdXNlRHJpdmUsIHVzZU1pcnJvciwgdXNlU3luYyB9IGZyb20gXCIuLi9jb3JlXCI7IC8vIGFkanVzdCBpZiB5b3VyIGNvcmUgcGFja2FnZSBwYXRoIGRpZmZlcnNcblxuY29uc3QgQ29yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXZhbnRhQ29yZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IHB1bHNlID0gdXNlUHVsc2UoKTtcbiAgICBjb25zdCBkcml2ZSA9IHVzZURyaXZlKCk7XG4gICAgY29uc3QgbWlycm9yID0gdXNlTWlycm9yKCk7XG4gICAgY29uc3Qgc3luYyA9IHVzZVN5bmMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwdWxzZSwgZHJpdmUsIG1pcnJvciwgc3luYyB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db3JlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29yZSgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChDb3JlQ29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVB1bHNlIiwidXNlRHJpdmUiLCJ1c2VNaXJyb3IiLCJ1c2VTeW5jIiwiQ29yZUNvbnRleHQiLCJBdmFudGFDb3JlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInB1bHNlIiwiZHJpdmUiLCJtaXJyb3IiLCJzeW5jIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvcmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();