webpackHotUpdate_N_E("pages/index",{

/***/ "./components/global/Nav.tsx":
/*!***********************************!*\
  !*** ./components/global/Nav.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/page.module.css */ "./styles/page.module.css");
/* harmony import */ var _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_page_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Brent Champion\\Documents\\Coding\\portfolio\\components\\global\\Nav.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* Nav Component */








var links = ['about', 'work', 'projects', 'posts'];
var resumeLink = "https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing";
var StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])({
  paper: {
    border: '1px solid #FFFFFF'
  }
})(function (props) {
  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: null,
    elevation: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 2
    }
  }));
});
var StyledMenuItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(function (theme) {
  return {
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white
        }
      }
    }
  };
})(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"]);
function Nav(_ref) {
  _s();

  var _this2 = this;

  var page = _ref.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      colorState = _useState2[0],
      setState = _useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleChange = function handleChange(e) {
    console.log("Changing Color Scheme");

    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    setState(!colorState);
  };

  return __jsx("header", {
    className: _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, "brent champion")), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }
  }, links && links.map(function (link) {
    return __jsx("li", {
      key: link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, page === link ? __jsx("div", {
      className: _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inactive,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, link) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(link),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 10
      }
    }, link)));
  }), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: resumeLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }, __jsx("a", {
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, "resume"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "checkbox",
    className: _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkbox,
    id: "chk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    "for": "chk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 6
    }
  }, __jsx("i", {
    className: "fas fa-moon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), __jsx("i", {
    className: "fas fa-sun",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ball,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }))))), __jsx("a", {
    className: _styles_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  })), __jsx(StyledMenu, {
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }
  }, __jsx(StyledMenuItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 8
    }
  })))), __jsx(StyledMenuItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 8
    }
  })))), __jsx(StyledMenuItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 8
    }
  })))), __jsx(StyledMenuItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 8
    }
  })))), __jsx(StyledMenuItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: resumeLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 6
    }
  }, __jsx("a", {
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "resume",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 8
    }
  }))))));
}

_s(Nav, "4FGLauP/IJKiWRSw6A6ly3X3ggU=");

_c = Nav;

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTmF2LnRzeCJdLCJuYW1lcyI6WyJsaW5rcyIsInJlc3VtZUxpbmsiLCJTdHlsZWRNZW51Iiwid2l0aFN0eWxlcyIsInBhcGVyIiwiYm9yZGVyIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJTdHlsZWRNZW51SXRlbSIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJNZW51SXRlbSIsIk5hdiIsInBhZ2UiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJjb2xvclN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwYWdlU3R5bGVzIiwibmF2IiwibWFwIiwibGluayIsImluYWN0aXZlIiwiY2hlY2tib3giLCJsYWJlbCIsImJhbGwiLCJpY29uIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQUUsT0FBRixFQUFXLE1BQVgsRUFBbUIsVUFBbkIsRUFBK0IsT0FBL0IsQ0FBZDtBQUNBLElBQU1DLFVBQVUsR0FBRyxvRkFBbkI7QUFFQSxJQUFNQyxVQUFlLEdBQUdDLDJFQUFVLENBQUM7QUFDbENDLE9BQUssRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERjtBQUQyQixDQUFELENBQVYsQ0FJckIsVUFBQ0MsS0FBRDtBQUFBLFNBQ0Ys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QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FERCxDQXBCRCxFQTJCQyxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0VBQUQ7QUFBYyxXQUFPLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FERCxDQTNCRCxFQWtDQyxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU3QixVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNFQUFEO0FBQWMsV0FBTyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREQsQ0FsQ0QsQ0F0Q0QsQ0FERDtBQW1GQTs7R0F6R3VCbUIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OTI2MTlhYTJjZjUwODEyZTU3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmF2IENvbXBvbmVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBwYWdlU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IGxpbmtzID0gWyAnYWJvdXQnLCAnd29yaycsICdwcm9qZWN0cycsICdwb3N0cycgXTtcclxuY29uc3QgcmVzdW1lTGluayA9IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTWx6MC1xejFIOG9sYUpIdVJKb0cxZVlpSWFGQ1lqcC0vdmlldz91c3A9c2hhcmluZ1wiXHJcblxyXG5jb25zdCBTdHlsZWRNZW51OiBhbnkgPSB3aXRoU3R5bGVzKHtcclxuXHRwYXBlcjoge1xyXG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNGRkZGRkYnXHJcblx0fVxyXG59KSgocHJvcHM6IGFueSkgPT4gKFxyXG5cdDxNZW51XHJcblx0XHRvcGVuPXtudWxsfVxyXG5cdFx0ZWxldmF0aW9uPXswfVxyXG5cdFx0Z2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxyXG5cdFx0YW5jaG9yT3JpZ2luPXt7XHJcblx0XHRcdHZlcnRpY2FsOiAnYm90dG9tJyxcclxuXHRcdFx0aG9yaXpvbnRhbDogJ2NlbnRlcidcclxuXHRcdH19XHJcblx0XHR0cmFuc2Zvcm1PcmlnaW49e3tcclxuXHRcdFx0dmVydGljYWw6ICd0b3AnLFxyXG5cdFx0XHRob3Jpem9udGFsOiAnY2VudGVyJ1xyXG5cdFx0fX1cclxuXHRcdHsuLi5wcm9wc31cclxuXHQvPlxyXG4pKTtcclxuXHJcbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0JyY6Zm9jdXMnOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcblx0XHRcdCcmIC5NdWlMaXN0SXRlbUljb24tcm9vdCwgJiAuTXVpTGlzdEl0ZW1UZXh0LXByaW1hcnknOiB7XHJcblx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pKShNZW51SXRlbSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoeyBwYWdlIH0pIHtcclxuXHRjb25zdCBbIGFuY2hvckVsLCBzZXRBbmNob3JFbCBdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2NvbG9yU3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuXHRcdHNldEFuY2hvckVsKG51bGwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkNoYW5naW5nIENvbG9yIFNjaGVtZVwiKTtcclxuXHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcclxuXHRcdH0gXHJcblx0XHRzZXRTdGF0ZSghY29sb3JTdGF0ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e3BhZ2VTdHlsZXMubmF2fT5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQ8YT5icmVudCBjaGFtcGlvbjwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHR7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0e2xpbmtzICYmXHJcblx0XHRcdFx0XHRsaW5rcy5tYXAoKGxpbmspID0+IChcclxuXHRcdFx0XHRcdFx0PGxpIGtleT17bGlua30+XHJcblx0XHRcdFx0XHRcdFx0e3BhZ2UgPT09IGxpbmsgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cGFnZVN0eWxlcy5pbmFjdGl2ZX0+e2xpbmt9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHtsaW5rfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT57bGlua308L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e3Jlc3VtZUxpbmt9PlxyXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIj5yZXN1bWU8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLmNoZWNrYm94fSBpZD1cImNoa1wiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLmxhYmVsfSBmb3I9XCJjaGtcIj5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vb25cIj48L2k+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdW5cIj48L2k+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLmJhbGx9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9e3BhZ2VTdHlsZXMuaWNvbn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG5cdFx0XHRcdDxNZW51SWNvbiAvPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdHsvKiBSZXNwb25zaXZlIE5hdmlnYXRpb24gKi99XHJcblx0XHRcdDxTdHlsZWRNZW51XHJcblx0XHRcdFx0YW5jaG9yRWw9e2FuY2hvckVsfVxyXG5cdFx0XHRcdGtlZXBNb3VudGVkXHJcblx0XHRcdFx0b3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XHJcblx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8U3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cImFib3V0XCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi93b3JrXCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIndvcmtcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9TdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHQ8U3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwicHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dCBwcmltYXJ5PVwicHJvamVjdHNcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9TdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHQ8U3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Bvc3RzXCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cInBvc3RzXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj17cmVzdW1lTGlua30+XHJcblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cInJlc3VtZVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L1N0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHQ8L1N0eWxlZE1lbnU+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=