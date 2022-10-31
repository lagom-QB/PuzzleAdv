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
exports.id = "pages/HTP";
exports.ids = ["pages/HTP"];
exports.modules = {

/***/ "./components/body/HowToPlay.js":
/*!**************************************!*\
  !*** ./components/body/HowToPlay.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fetchers_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchers/About */ \"./components/body/fetchers/About.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// Styles ------\nconst AboutText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h2.withConfig({\n    displayName: \"HowToPlay__AboutText\",\n    componentId: \"sc-e484c904-0\"\n})`\n    font-size: 1.6rem;\n    font-weight: 150;\n    line-height: 2.5rem;\n    white-space: pre-wrap;\n    overflow: visible;\n  `, HeroContext = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h2.withConfig({\n    displayName: \"HowToPlay__HeroContext\",\n    componentId: \"sc-e484c904-1\"\n})`\n    font-style: normal;\n    font-weight: 300;\n    font-size: 3rem;\n    margin: 5% 10%;\n  `, RulesContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n    displayName: \"HowToPlay__RulesContainer\",\n    componentId: \"sc-e484c904-2\"\n})`\n    height: 100vh;\n    transform: scale(0.7);\n  `, Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n    displayName: \"HowToPlay__Container\",\n    componentId: \"sc-e484c904-3\"\n})`\n    color: white;\n    overflow-y: scroll;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n    &::-ms-scrollbar {\n      display: none;\n    }\n  `;\n// -------------\nfunction HowToPlayText() {\n    const { loading , error , data  } = (0,_fetchers_About__WEBPACK_IMPORTED_MODULE_4__.useAboutQuery)();\n    let allAboutMes = [];\n    if (loading) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/project/PuzzleAdv/components/body/HowToPlay.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, this);\n    }\n    if (error) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n            children: \"An Error occured while fetching the data\"\n        }, void 0, false, {\n            fileName: \"/project/PuzzleAdv/components/body/HowToPlay.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, this);\n    }\n    if (data) {\n        data.aboutMes.forEach((aboutMe)=>{\n            if (aboutMe.sectionName === \"C\\xf3mo jugar\") {\n                allAboutMes.push(aboutMe.aboutUs);\n            }\n        });\n    }\n    //   console.log(allAboutMes[0]?.split(\"\\n\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RulesContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroContext, {\n                style: {\n                    textDecoration: \"underline\"\n                },\n                children: \"C\\xf3mo jugar\"\n            }, void 0, false, {\n                fileName: \"/project/PuzzleAdv/components/body/HowToPlay.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AboutText, {\n                children: allAboutMes[0]?.split(\"\\n\").join(\"\\n\")\n            }, void 0, false, {\n                fileName: \"/project/PuzzleAdv/components/body/HowToPlay.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/PuzzleAdv/components/body/HowToPlay.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n// --------------\nfunction GuideContent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HowToPlayText, {}, void 0, false, {\n            fileName: \"/project/PuzzleAdv/components/body/HowToPlay.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/project/PuzzleAdv/components/body/HowToPlay.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuideContent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvZHkvSG93VG9QbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2E7QUFFQTtBQUVVO0FBRWpELGdCQUFnQjtBQUNoQixNQUFNSSxTQUFTLEdBQUdGLHNFQUFTOzs7RUFBQSxDQUFDOzs7Ozs7RUFNMUIsQ0FBQyxFQUNESSxXQUFXLEdBQUdKLHNFQUFTOzs7RUFBQSxDQUFDOzs7OztFQUt4QixDQUFDLEVBQ0RLLGNBQWMsR0FBR0wsdUVBQVU7OztFQUFBLENBQUM7OztFQUc1QixDQUFDLEVBQ0RPLFNBQVMsR0FBR1AsdUVBQVU7OztFQUFBLENBQUM7Ozs7Ozs7Ozs7O0VBV3ZCLENBQUM7QUFDSCxnQkFBZ0I7QUFDaEIsU0FBU1EsYUFBYSxHQUFHO0lBQ3ZCLE1BQU0sRUFBRUMsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFHViw4REFBYSxFQUFFO0lBRWhELElBQUlXLFdBQVcsR0FBRyxFQUFFO0lBRXBCLElBQUlILE9BQU8sRUFBRTtzQkFDWCw4REFBQ0ksS0FBRztzQkFBQyxZQUFVOzs7OztnQkFBTSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJSCxLQUFLLEVBQUU7c0JBQ1QsOERBQUNHLEtBQUc7c0JBQUMsMENBQXdDOzs7OztnQkFBTSxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFJRixJQUFJLEVBQUU7UUFDUkEsSUFBSSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEdBQUs7WUFDakMsSUFBSUEsT0FBTyxDQUFDQyxXQUFXLEtBQUssZUFBWSxFQUFFO2dCQUN4Q0wsV0FBVyxDQUFDTSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDhDQUE4QztJQUU1QyxxQkFDRSw4REFBQ2QsY0FBYzs7MEJBQ2IsOERBQUNELFdBQVc7Z0JBQUNnQixLQUFLLEVBQUU7b0JBQUVDLGNBQWMsRUFBRSxXQUFXO2lCQUFFOzBCQUFFLGVBRXJEOzs7OztvQkFBYzswQkFDZCw4REFBQ25CLFNBQVM7MEJBQUVVLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRVUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBUSxDQUFDOzs7OztvQkFBYTs7Ozs7O1lBQ3BELENBQ2pCO0FBQ0osQ0FBQztBQUNELGlCQUFpQjtBQUVqQixTQUFTQyxZQUFZLEdBQUc7SUFDdEIscUJBQ0UsOERBQUNqQixTQUFTO2tCQUNSLDRFQUFDQyxhQUFhOzs7O2dCQUFHOzs7OztZQUNQLENBQ1o7QUFDSixDQUFDO0FBQ0QsaUVBQWVnQixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXp6bGVfYmFzZS8uL2NvbXBvbmVudHMvYm9keS9Ib3dUb1BsYXkuanM/NjRiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyB1c2VBYm91dFF1ZXJ5IH0gZnJvbSBcIi4vZmV0Y2hlcnMvQWJvdXRcIjtcblxuLy8gU3R5bGVzIC0tLS0tLVxuY29uc3QgQWJvdXRUZXh0ID0gc3R5bGVkLmgyYFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxNTA7XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGAsXG4gIEhlcm9Db250ZXh0ID0gc3R5bGVkLmgyYFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW46IDUlIDEwJTtcbiAgYCxcbiAgUnVsZXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICBgLFxuICBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAmOjotbXMtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBgO1xuLy8gLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gSG93VG9QbGF5VGV4dCgpIHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlQWJvdXRRdWVyeSgpO1xuXG4gIGxldCBhbGxBYm91dE1lcyA9IFtdO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgPHByZT5Mb2FkaW5nLi4uPC9wcmU+O1xuICB9XG4gIGlmIChlcnJvcikge1xuICAgIDxwcmU+QW4gRXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YTwvcHJlPjtcbiAgfVxuICBpZiAoZGF0YSkge1xuICAgIGRhdGEuYWJvdXRNZXMuZm9yRWFjaCgoYWJvdXRNZSkgPT4ge1xuICAgICAgaWYgKGFib3V0TWUuc2VjdGlvbk5hbWUgPT09IFwiQ8OzbW8ganVnYXJcIikge1xuICAgICAgICBhbGxBYm91dE1lcy5wdXNoKGFib3V0TWUuYWJvdXRVcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbi8vICAgY29uc29sZS5sb2coYWxsQWJvdXRNZXNbMF0/LnNwbGl0KFwiXFxuXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxSdWxlc0NvbnRhaW5lcj5cbiAgICAgIDxIZXJvQ29udGV4dCBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9fT5cbiAgICAgICAgQ8OzbW8ganVnYXJcbiAgICAgIDwvSGVyb0NvbnRleHQ+XG4gICAgICA8QWJvdXRUZXh0PnthbGxBYm91dE1lc1swXT8uc3BsaXQoXCJcXG5cIikuam9pbihcIlxcdTAwMEFcIil9PC9BYm91dFRleHQ+XG4gICAgPC9SdWxlc0NvbnRhaW5lcj5cbiAgKTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIEd1aWRlQ29udGVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhvd1RvUGxheVRleHQgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEd1aWRlQ29udGVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInN0eWxlZCIsInVzZUFib3V0UXVlcnkiLCJBYm91dFRleHQiLCJoMiIsIkhlcm9Db250ZXh0IiwiUnVsZXNDb250YWluZXIiLCJkaXYiLCJDb250YWluZXIiLCJIb3dUb1BsYXlUZXh0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImFsbEFib3V0TWVzIiwicHJlIiwiYWJvdXRNZXMiLCJmb3JFYWNoIiwiYWJvdXRNZSIsInNlY3Rpb25OYW1lIiwicHVzaCIsImFib3V0VXMiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwic3BsaXQiLCJqb2luIiwiR3VpZGVDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/body/HowToPlay.js\n");

/***/ }),

/***/ "./components/body/fetchers/About.js":
/*!*******************************************!*\
  !*** ./components/body/fetchers/About.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAboutQuery\": () => (/* binding */ useAboutQuery)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* interface AboutSection {\n  about: string;\n} */ const GET_ABOUT_CONTENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    aboutMes {\n      aboutUs\n      sectionName\n    }\n  }\n`;\nfunction useAboutQuery() {\n    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(GET_ABOUT_CONTENT);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvZHkvZmV0Y2hlcnMvQWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DOztFQUVFLEdBRUYsTUFBTUUsaUJBQWlCLEdBQUdGLCtDQUFHLENBQUM7Ozs7Ozs7QUFPOUIsQ0FBQztBQUVNLFNBQVNHLGFBQWEsR0FBRztJQUM5QixPQUFPRix3REFBUSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXp6bGVfYmFzZS8uL2NvbXBvbmVudHMvYm9keS9mZXRjaGVycy9BYm91dC5qcz9mMTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuLyogaW50ZXJmYWNlIEFib3V0U2VjdGlvbiB7XG4gIGFib3V0OiBzdHJpbmc7XG59ICovXG5cbmNvbnN0IEdFVF9BQk9VVF9DT05URU5UID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgYWJvdXRNZXMge1xuICAgICAgYWJvdXRVc1xuICAgICAgc2VjdGlvbk5hbWVcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBYm91dFF1ZXJ5KCkge1xuICByZXR1cm4gdXNlUXVlcnkoR0VUX0FCT1VUX0NPTlRFTlQpO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiR0VUX0FCT1VUX0NPTlRFTlQiLCJ1c2VBYm91dFF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/body/fetchers/About.js\n");

/***/ }),

/***/ "./pages/HTP.js":
/*!**********************!*\
  !*** ./pages/HTP.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_body_HowToPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/body/HowToPlay */ \"./components/body/HowToPlay.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_body_HowToPlay__WEBPACK_IMPORTED_MODULE_2__]);\n_components_body_HowToPlay__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"HTP__Container\",\n    componentId: \"sc-47e07bee-0\"\n})`\n  max-height: 100vh;\n  max-width: 90vw;\n  overflow: hidden;\n`;\n/* Insert into the contact schema of the CMS */ function ContactPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_body_HowToPlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/project/PuzzleAdv/pages/HTP.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/project/PuzzleAdv/pages/HTP.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9IVFAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDaUI7QUFFeEQsTUFBTUUsU0FBUyxHQUFHRix1RUFBVTs7O0VBQUEsQ0FBQzs7OztBQUk3QixDQUFDO0FBRUQsNkNBQTZDLEdBRTdDLFNBQVNJLFdBQVcsR0FBRztJQUNyQixxQkFDRSw4REFBQ0YsU0FBUztrQkFDUiw0RUFBQ0Qsa0VBQVk7Ozs7Z0JBQUc7Ozs7O1lBQ04sQ0FDWjtBQUNKLENBQUM7QUFFRCxpRUFBZUcsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHV6emxlX2Jhc2UvLi9wYWdlcy9IVFAuanM/NjU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEd1aWRlQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9ib2R5L0hvd1RvUGxheVwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuLyogSW5zZXJ0IGludG8gdGhlIGNvbnRhY3Qgc2NoZW1hIG9mIHRoZSBDTVMgKi9cblxuZnVuY3Rpb24gQ29udGFjdFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHdWlkZUNvbnRlbnQgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiR3VpZGVDb250ZW50IiwiQ29udGFpbmVyIiwiZGl2IiwiQ29udGFjdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/HTP.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/HTP.js"));
module.exports = __webpack_exports__;

})();