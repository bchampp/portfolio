webpackHotUpdate_N_E("pages/work",{

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
      columnNumber: 6
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTmF2LnRzeCJdLCJuYW1lcyI6WyJsaW5rcyIsInJlc3VtZUxpbmsiLCJTdHlsZWRNZW51Iiwid2l0aFN0eWxlcyIsInBhcGVyIiwiYm9yZGVyIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJTdHlsZWRNZW51SXRlbSIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJNZW51SXRlbSIsIk5hdiIsInBhZ2UiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJjb2xvclN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwYWdlU3R5bGVzIiwibmF2IiwibWFwIiwibGluayIsImluYWN0aXZlIiwiY2hlY2tib3giLCJsYWJlbCIsImJhbGwiLCJpY29uIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQUUsT0FBRixFQUFXLE1BQVgsRUFBbUIsVUFBbkIsRUFBK0IsT0FBL0IsQ0FBZDtBQUNBLElBQU1DLFVBQVUsR0FBRyxvRkFBbkI7QUFFQSxJQUFNQyxVQUFlLEdBQUdDLDJFQUFVLENBQUM7QUFDbENDLE9BQUssRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERjtBQUQyQixDQUFELENBQVYsQ0FJckIsVUFBQ0MsS0FBRDtBQUFBLFNBQ0Ys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QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FERCxDQXBCRCxFQTJCQyxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0VBQUQ7QUFBYyxXQUFPLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FERCxDQTNCRCxFQWtDQyxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU3QixVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNFQUFEO0FBQWMsV0FBTyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREQsQ0FsQ0QsQ0F0Q0QsQ0FERDtBQW1GQTs7R0F6R3VCbUIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93b3JrLjdmZjMxYzQ0YWMyODJmYjRmMTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOYXYgQ29tcG9uZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHBhZ2VTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgbGlua3MgPSBbICdhYm91dCcsICd3b3JrJywgJ3Byb2plY3RzJywgJ3Bvc3RzJyBdO1xyXG5jb25zdCByZXN1bWVMaW5rID0gXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNbHowLXF6MUg4b2xhSkh1UkpvRzFlWWlJYUZDWWpwLS92aWV3P3VzcD1zaGFyaW5nXCJcclxuXHJcbmNvbnN0IFN0eWxlZE1lbnU6IGFueSA9IHdpdGhTdHlsZXMoe1xyXG5cdHBhcGVyOiB7XHJcblx0XHRib3JkZXI6ICcxcHggc29saWQgI0ZGRkZGRidcclxuXHR9XHJcbn0pKChwcm9wczogYW55KSA9PiAoXHJcblx0PE1lbnVcclxuXHRcdG9wZW49e251bGx9XHJcblx0XHRlbGV2YXRpb249ezB9XHJcblx0XHRnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XHJcblx0XHRhbmNob3JPcmlnaW49e3tcclxuXHRcdFx0dmVydGljYWw6ICdib3R0b20nLFxyXG5cdFx0XHRob3Jpem9udGFsOiAnY2VudGVyJ1xyXG5cdFx0fX1cclxuXHRcdHRyYW5zZm9ybU9yaWdpbj17e1xyXG5cdFx0XHR2ZXJ0aWNhbDogJ3RvcCcsXHJcblx0XHRcdGhvcml6b250YWw6ICdjZW50ZXInXHJcblx0XHR9fVxyXG5cdFx0ey4uLnByb3BzfVxyXG5cdC8+XHJcbikpO1xyXG5cclxuY29uc3QgU3R5bGVkTWVudUl0ZW0gPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHQnJjpmb2N1cyc6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuXHRcdFx0JyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcclxuXHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSkpKE1lbnVJdGVtKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdih7IHBhZ2UgfSkge1xyXG5cdGNvbnN0IFsgYW5jaG9yRWwsIHNldEFuY2hvckVsIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbY29sb3JTdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuXHRcdHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdFx0c2V0QW5jaG9yRWwobnVsbCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQ2hhbmdpbmcgQ29sb3IgU2NoZW1lXCIpO1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpO1xyXG5cdFx0fSBcclxuXHRcdHNldFN0YXRlKCFjb2xvclN0YXRlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17cGFnZVN0eWxlcy5uYXZ9PlxyXG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxhPmJyZW50IGNoYW1waW9uPC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHRcdHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gKi99XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHR7bGlua3MgJiZcclxuXHRcdFx0XHRcdGxpbmtzLm1hcCgobGluaykgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtsaW5rfT5cclxuXHRcdFx0XHRcdFx0XHR7cGFnZSA9PT0gbGluayA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLmluYWN0aXZlfT57bGlua308L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC8ke2xpbmt9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPntsaW5rfTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj17cmVzdW1lTGlua30+XHJcblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiPnJlc3VtZTwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT17cGFnZVN0eWxlcy5jaGVja2JveH0gaWQ9XCJjaGtcIiAvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17cGFnZVN0eWxlcy5sYWJlbH0gZm9yPVwiY2hrXCI+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb29uXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3VuXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cGFnZVN0eWxlcy5iYWxsfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLmljb259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuXHRcdFx0XHQ8TWVudUljb24gLz5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHR7LyogUmVzcG9uc2l2ZSBOYXZpZ2F0aW9uICovfVxyXG5cdFx0XHQ8U3R5bGVkTWVudVxyXG5cdFx0XHRcdGFuY2hvckVsPXthbmNob3JFbH1cclxuXHRcdFx0XHRrZWVwTW91bnRlZFxyXG5cdFx0XHRcdG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG5cdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJhYm91dFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L1N0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdDxTdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvd29ya1wiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJ3b3JrXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cInByb2plY3RzXCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cInByb2plY3RzXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wb3N0c1wiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJwb3N0c1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L1N0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdDxTdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e3Jlc3VtZUxpbmt9PlxyXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJyZXN1bWVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9TdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0PC9TdHlsZWRNZW51PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9