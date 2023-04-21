"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[slug]",{

/***/ "./src/pages/movies/[slug].js":
/*!************************************!*\
  !*** ./src/pages/movies/[slug].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MovieDetail = (param)=>{\n    let { movie  } = param;\n    const backgroundImage = \"https://image.tmdb.org/t/p/w500\".concat(movie.poster_path);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-cover bg-center rounded-md shadow-lg p-6 relative backdrop-blur-xl\",\n            style: {\n                backgroundImage: \"url(\".concat(backgroundImage, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-60\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-12 gap-6 bg-white bg-opacity-95 rounded-md p-6 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-1 md:col-span-4 flex flex-col items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: backgroundImage,\n                                alt: movie.title,\n                                className: \"w-full md:w-64 h-auto object-cover rounded-md\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-1 md:col-span-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl font-bold text-gray-900 mb-2\",\n                                    children: movie.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-gray-600\",\n                                            children: movie.genres.map((genre)=>genre.name).join(\", \")\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-lg font-semibold text-gray-800 mb-2\",\n                                            children: \"Overview\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                                            lineNumber: 25,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-gray-600\",\n                                            children: movie.overview\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\DjangoProject\\\\frontend\\\\src\\\\pages\\\\movies\\\\[slug].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MovieDetail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetail);\nvar _c;\n$RefreshReg$(_c, \"MovieDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW92aWVzL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUMsY0FBYyxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFO0lBQzVCLE1BQU1DLGtCQUFrQixrQ0FBb0QsT0FBbEJELE1BQU1FLFdBQVc7SUFFM0UscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQ0NDLFdBQVU7WUFDVkMsT0FBTztnQkFBRUosaUJBQWlCLE9BQXVCLE9BQWhCQSxpQkFBZ0I7WUFBRzs7OEJBRXBELDhEQUFDRTtvQkFBSUMsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRTtnQ0FDQ0MsS0FBS047Z0NBQ0xPLEtBQUtSLE1BQU1TLEtBQUs7Z0NBQ2hCTCxXQUFVOzs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FBR04sV0FBVTs4Q0FBeUNKLE1BQU1TLEtBQUs7Ozs7Ozs4Q0FDbEUsOERBQUNOO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ087NENBQUVQLFdBQVU7c0RBQXlCSixNQUFNWSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxJQUFJLEVBQUVDLElBQUksQ0FBQzs7Ozs7O3NEQUNuRiw4REFBQ0M7NENBQUdiLFdBQVU7c0RBQTJDOzs7Ozs7c0RBQ3pELDhEQUFDTzs0Q0FBRVAsV0FBVTtzREFBeUJKLE1BQU1rQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRTtLQS9CTW5COztBQStDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbW92aWVzL1tzbHVnXS5qcz85MjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTW92aWVEZXRhaWwgPSAoeyBtb3ZpZSB9KSA9PiB7XHJcbiAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke21vdmllLnBvc3Rlcl9wYXRofWA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtMTJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWNvdmVyIGJnLWNlbnRlciByb3VuZGVkLW1kIHNoYWRvdy1sZyBwLTYgcmVsYXRpdmUgYmFja2Ryb3AtYmx1ci14bFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHZpYS1wdXJwbGUtNTAwIHRvLXJlZC01MDAgb3BhY2l0eS02MFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMTIgZ2FwLTYgYmctd2hpdGUgYmctb3BhY2l0eS05NSByb3VuZGVkLW1kIHAtNiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG1kOmNvbC1zcGFuLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17YmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctNjQgaC1hdXRvIG9iamVjdC1jb3ZlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG1kOmNvbC1zcGFuLThcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIj57bW92aWUudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e21vdmllLmdlbnJlcy5tYXAoKGdlbnJlKSA9PiBnZW5yZS5uYW1lKS5qb2luKFwiLCBcIil9PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0yXCI+T3ZlcnZpZXc8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPnttb3ZpZS5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogQWRkIG1vcmUgbW92aWUgZGV0YWlscyBhcyBkZXNpcmVkICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbiAgXHJcbiAgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbW92aWVzLyR7c2x1Z31gKTtcclxuICBjb25zdCBtb3ZpZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1vdmllLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZURldGFpbDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIk1vdmllRGV0YWlsIiwibW92aWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwb3N0ZXJfcGF0aCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJoMSIsInAiLCJnZW5yZXMiLCJtYXAiLCJnZW5yZSIsIm5hbWUiLCJqb2luIiwiaDIiLCJvdmVydmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/movies/[slug].js\n"));

/***/ })

});