webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ItemHolder/ItemHolder.tsx":
/*!**********************************************!*\
  !*** ./components/ItemHolder/ItemHolder.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ItemHolder_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemHolder.module.scss */ \"./components/ItemHolder/ItemHolder.module.scss\");\n/* harmony import */ var _ItemHolder_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ItemHolder_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/buiquang/Desktop/next-contentful/components/ItemHolder/ItemHolder.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ItemHolder = function ItemHolder(_ref) {\n  _s();\n\n  var _productImage$fields$, _productImage$fields$2;\n\n  var item = _ref.item;\n  var _item$fields = item.fields,\n      productName = _item$fields.productName,\n      productImage = _item$fields.productImage;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: router.pathname === '/' ? router.pathname + 'livingroom' + '/' + item.fields.slug : router.pathname + '/' + item.fields.slug,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _ItemHolder_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ItemHolder,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Ima, {\n        src: 'https:' + (productImage === null || productImage === void 0 ? void 0 : productImage.fields.file.url),\n        width: productImage === null || productImage === void 0 ? void 0 : (_productImage$fields$ = productImage.fields.file.details.image) === null || _productImage$fields$ === void 0 ? void 0 : _productImage$fields$.width,\n        height: productImage === null || productImage === void 0 ? void 0 : (_productImage$fields$2 = productImage.fields.file.details.image) === null || _productImage$fields$2 === void 0 ? void 0 : _productImage$fields$2.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: productName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ItemHolder, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ItemHolder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemHolder);\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemHolder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JdGVtSG9sZGVyL0l0ZW1Ib2xkZXIudHN4PzI5MDgiXSwibmFtZXMiOlsiSXRlbUhvbGRlciIsIml0ZW0iLCJmaWVsZHMiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RJbWFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwic2x1ZyIsInN0eWxlcyIsImZpbGUiLCJ1cmwiLCJkZXRhaWxzIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBOztBQU1BLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLHFCQUNGQSxJQUFJLENBQUNDLE1BREg7QUFBQSxNQUNoQ0MsV0FEZ0MsZ0JBQ2hDQSxXQURnQztBQUFBLE1BQ25CQyxZQURtQixnQkFDbkJBLFlBRG1CO0FBRXhDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxzQkFDSSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUQsTUFBTSxDQUFDRSxRQUFQLEtBQW9CLEdBQXBCLEdBQTBCRixNQUFNLENBQUNFLFFBQVAsR0FBa0IsWUFBbEIsR0FBaUMsR0FBakMsR0FBdUNOLElBQUksQ0FBQ0MsTUFBTCxDQUFZTSxJQUE3RSxHQUFvRkgsTUFBTSxDQUFDRSxRQUFQLEdBQWtCLEdBQWxCLEdBQXdCTixJQUFJLENBQUNDLE1BQUwsQ0FBWU0sSUFBcEk7QUFBQSwyQkFDSTtBQUFHLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ1QsVUFBckI7QUFBQSw4QkFDSSxxRUFBQyxHQUFEO0FBQ0ksV0FBRyxFQUFFLFlBQVdJLFlBQVgsYUFBV0EsWUFBWCx1QkFBV0EsWUFBWSxDQUFFRixNQUFkLENBQXFCUSxJQUFyQixDQUEwQkMsR0FBckMsQ0FEVDtBQUVJLGFBQUssRUFBRVAsWUFBRixhQUFFQSxZQUFGLGdEQUFFQSxZQUFZLENBQUVGLE1BQWQsQ0FBcUJRLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBcEMsMERBQUUsc0JBQXlDQyxLQUZwRDtBQUdJLGNBQU0sRUFBRVYsWUFBRixhQUFFQSxZQUFGLGlEQUFFQSxZQUFZLENBQUVGLE1BQWQsQ0FBcUJRLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBcEMsMkRBQUUsdUJBQXlDRTtBQUhyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFBLGtCQUFJWjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQWREOztHQUFNSCxVO1VBRWFNLHFEOzs7S0FGYk4sVTtBQWdCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW1Ib2xkZXIvSXRlbUhvbGRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbUhvbGRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBJSXRlbSB9IGZyb20gJy4uLy4uL3NyYy9zY2hlbWEvZ2VuZXJhdGVkL2NvbnRlbnRmdWwnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIFByb3BzUGFnZSB7XG4gICAgaXRlbTogSUl0ZW1cbn1cblxuY29uc3QgSXRlbUhvbGRlciA9ICh7IGl0ZW0gfTogUHJvcHNQYWdlKSA9PiB7XG4gICAgY29uc3QgeyBwcm9kdWN0TmFtZSwgcHJvZHVjdEltYWdlIH0gPSBpdGVtLmZpZWxkcztcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/IHJvdXRlci5wYXRobmFtZSArICdsaXZpbmdyb29tJyArICcvJyArIGl0ZW0uZmllbGRzLnNsdWcgOiByb3V0ZXIucGF0aG5hbWUgKyAnLycgKyBpdGVtLmZpZWxkcy5zbHVnfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLkl0ZW1Ib2xkZXJ9PlxuICAgICAgICAgICAgICAgIDxJbWEgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17J2h0dHBzOicgKyBwcm9kdWN0SW1hZ2U/LmZpZWxkcy5maWxlLnVybH0gXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtwcm9kdWN0SW1hZ2U/LmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2U/LndpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3Byb2R1Y3RJbWFnZT8uZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZT8uaGVpZ2h0fS8+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3ROYW1lfTwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Ib2xkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ItemHolder/ItemHolder.tsx\n");

/***/ })

})