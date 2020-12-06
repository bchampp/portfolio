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
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "checkbox",
    "class": "checkbox",
    id: "chk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: "label",
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
    className: "ball",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTmF2LnRzeCJdLCJuYW1lcyI6WyJsaW5rcyIsInJlc3VtZUxpbmsiLCJTdHlsZWRNZW51Iiwid2l0aFN0eWxlcyIsInBhcGVyIiwiYm9yZGVyIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJTdHlsZWRNZW51SXRlbSIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJNZW51SXRlbSIsIk5hdiIsInBhZ2UiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJjb2xvclN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwYWdlU3R5bGVzIiwibmF2IiwibWFwIiwibGluayIsImluYWN0aXZlIiwiaWNvbiIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFFLE9BQUYsRUFBVyxNQUFYLEVBQW1CLFVBQW5CLEVBQStCLE9BQS9CLENBQWQ7QUFDQSxJQUFNQyxVQUFVLEdBQUcsb0ZBQW5CO0FBRUEsSUFBTUMsVUFBZSxHQUFHQywyRUFBVSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREY7QUFEMkIsQ0FBRCxDQUFWLENBSXJCLFVBQUNDLEtBQUQ7QUFBQSxTQUNGLE1BQUMsOERBQUQ7QUFDQyxRQUFJLEVBQUUs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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNFQUFEO0FBQWMsV0FBTyxFQUFDLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREQsQ0EzQkQsRUFrQ0MsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFN0IsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzRUFBRDtBQUFjLFdBQU8sRUFBQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQURELENBbENELENBdENELENBREQ7QUFtRkE7O0dBekd1Qm1CLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmZiY2Q2ZTZmNzg4MmM0ZGM3MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5hdiBDb21wb25lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcGFnZVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZS5tb2R1bGUuY3NzJztcclxuXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBsaW5rcyA9IFsgJ2Fib3V0JywgJ3dvcmsnLCAncHJvamVjdHMnLCAncG9zdHMnIF07XHJcbmNvbnN0IHJlc3VtZUxpbmsgPSBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU1sejAtcXoxSDhvbGFKSHVSSm9HMWVZaUlhRkNZanAtL3ZpZXc/dXNwPXNoYXJpbmdcIlxyXG5cclxuY29uc3QgU3R5bGVkTWVudTogYW55ID0gd2l0aFN0eWxlcyh7XHJcblx0cGFwZXI6IHtcclxuXHRcdGJvcmRlcjogJzFweCBzb2xpZCAjRkZGRkZGJ1xyXG5cdH1cclxufSkoKHByb3BzOiBhbnkpID0+IChcclxuXHQ8TWVudVxyXG5cdFx0b3Blbj17bnVsbH1cclxuXHRcdGVsZXZhdGlvbj17MH1cclxuXHRcdGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cclxuXHRcdGFuY2hvck9yaWdpbj17e1xyXG5cdFx0XHR2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcblx0XHRcdGhvcml6b250YWw6ICdjZW50ZXInXHJcblx0XHR9fVxyXG5cdFx0dHJhbnNmb3JtT3JpZ2luPXt7XHJcblx0XHRcdHZlcnRpY2FsOiAndG9wJyxcclxuXHRcdFx0aG9yaXpvbnRhbDogJ2NlbnRlcidcclxuXHRcdH19XHJcblx0XHR7Li4ucHJvcHN9XHJcblx0Lz5cclxuKSk7XHJcblxyXG5jb25zdCBTdHlsZWRNZW51SXRlbSA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdCcmOmZvY3VzJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG5cdFx0XHQnJiAuTXVpTGlzdEl0ZW1JY29uLXJvb3QsICYgLk11aUxpc3RJdGVtVGV4dC1wcmltYXJ5Jzoge1xyXG5cdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KSkoTWVudUl0ZW0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHsgcGFnZSB9KSB7XHJcblx0Y29uc3QgWyBhbmNob3JFbCwgc2V0QW5jaG9yRWwgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtjb2xvclN0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcblx0XHRzZXRBbmNob3JFbChudWxsKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCJDaGFuZ2luZyBDb2xvciBTY2hlbWVcIik7XHJcblx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcblx0XHR9IFxyXG5cdFx0c2V0U3RhdGUoIWNvbG9yU3RhdGUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLm5hdn0+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PGE+YnJlbnQgY2hhbXBpb248L2E+XHJcblx0XHRcdDwvTGluaz5cclxuXHRcdFx0ey8qIERlc2t0b3AgTmF2aWdhdGlvbiAqL31cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdHtsaW5rcyAmJlxyXG5cdFx0XHRcdFx0bGlua3MubWFwKChsaW5rKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxsaSBrZXk9e2xpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdHtwYWdlID09PSBsaW5rID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3BhZ2VTdHlsZXMuaW5hY3RpdmV9PntsaW5rfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgLyR7bGlua31gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+e2xpbmt9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPXtyZXN1bWVMaW5rfT5cclxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCI+cmVzdW1lPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIGlkPVwiY2hrXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGZvcj1cImNoa1wiPlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9vblwiPjwvaT5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN1blwiPjwvaT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWxsXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLmljb259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuXHRcdFx0XHQ8TWVudUljb24gLz5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHR7LyogUmVzcG9uc2l2ZSBOYXZpZ2F0aW9uICovfVxyXG5cdFx0XHQ8U3R5bGVkTWVudVxyXG5cdFx0XHRcdGFuY2hvckVsPXthbmNob3JFbH1cclxuXHRcdFx0XHRrZWVwTW91bnRlZFxyXG5cdFx0XHRcdG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG5cdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJhYm91dFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L1N0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdDxTdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvd29ya1wiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJ3b3JrXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cInByb2plY3RzXCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cInByb2plY3RzXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wb3N0c1wiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJwb3N0c1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L1N0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdDxTdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e3Jlc3VtZUxpbmt9PlxyXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJyZXN1bWVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9TdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0PC9TdHlsZWRNZW51PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9