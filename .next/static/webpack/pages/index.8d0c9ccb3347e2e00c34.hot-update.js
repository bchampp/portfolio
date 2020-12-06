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
    className: "checkbox",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTmF2LnRzeCJdLCJuYW1lcyI6WyJsaW5rcyIsInJlc3VtZUxpbmsiLCJTdHlsZWRNZW51Iiwid2l0aFN0eWxlcyIsInBhcGVyIiwiYm9yZGVyIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJTdHlsZWRNZW51SXRlbSIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJNZW51SXRlbSIsIk5hdiIsInBhZ2UiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJjb2xvclN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwYWdlU3R5bGVzIiwibmF2IiwibWFwIiwibGluayIsImluYWN0aXZlIiwiaWNvbiIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFFLE9BQUYsRUFBVyxNQUFYLEVBQW1CLFVBQW5CLEVBQStCLE9BQS9CLENBQWQ7QUFDQSxJQUFNQyxVQUFVLEdBQUcsb0ZBQW5CO0FBRUEsSUFBTUMsVUFBZSxHQUFHQywyRUFBVSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREY7QUFEMkIsQ0FBRCxDQUFWLENBSXJCLFVBQUNDLEtBQUQ7QUFBQSxTQUNGLE1BQUMsOERBQUQ7QUFDQyxRQUFJLEVBQUUs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0VBQUQ7QUFBYyxXQUFPLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FERCxDQTNCRCxFQWtDQyxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU3QixVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNFQUFEO0FBQWMsV0FBTyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREQsQ0FsQ0QsQ0F0Q0QsQ0FERDtBQW1GQTs7R0F6R3VCbUIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZDBjOWNjYjMzNDdlMmUwMGMzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmF2IENvbXBvbmVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBwYWdlU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IGxpbmtzID0gWyAnYWJvdXQnLCAnd29yaycsICdwcm9qZWN0cycsICdwb3N0cycgXTtcclxuY29uc3QgcmVzdW1lTGluayA9IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTWx6MC1xejFIOG9sYUpIdVJKb0cxZVlpSWFGQ1lqcC0vdmlldz91c3A9c2hhcmluZ1wiXHJcblxyXG5jb25zdCBTdHlsZWRNZW51OiBhbnkgPSB3aXRoU3R5bGVzKHtcclxuXHRwYXBlcjoge1xyXG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNGRkZGRkYnXHJcblx0fVxyXG59KSgocHJvcHM6IGFueSkgPT4gKFxyXG5cdDxNZW51XHJcblx0XHRvcGVuPXtudWxsfVxyXG5cdFx0ZWxldmF0aW9uPXswfVxyXG5cdFx0Z2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxyXG5cdFx0YW5jaG9yT3JpZ2luPXt7XHJcblx0XHRcdHZlcnRpY2FsOiAnYm90dG9tJyxcclxuXHRcdFx0aG9yaXpvbnRhbDogJ2NlbnRlcidcclxuXHRcdH19XHJcblx0XHR0cmFuc2Zvcm1PcmlnaW49e3tcclxuXHRcdFx0dmVydGljYWw6ICd0b3AnLFxyXG5cdFx0XHRob3Jpem9udGFsOiAnY2VudGVyJ1xyXG5cdFx0fX1cclxuXHRcdHsuLi5wcm9wc31cclxuXHQvPlxyXG4pKTtcclxuXHJcbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0JyY6Zm9jdXMnOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcblx0XHRcdCcmIC5NdWlMaXN0SXRlbUljb24tcm9vdCwgJiAuTXVpTGlzdEl0ZW1UZXh0LXByaW1hcnknOiB7XHJcblx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pKShNZW51SXRlbSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoeyBwYWdlIH0pIHtcclxuXHRjb25zdCBbIGFuY2hvckVsLCBzZXRBbmNob3JFbCBdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2NvbG9yU3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuXHRcdHNldEFuY2hvckVsKG51bGwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkNoYW5naW5nIENvbG9yIFNjaGVtZVwiKTtcclxuXHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcclxuXHRcdH0gXHJcblx0XHRzZXRTdGF0ZSghY29sb3JTdGF0ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e3BhZ2VTdHlsZXMubmF2fT5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQ8YT5icmVudCBjaGFtcGlvbjwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHR7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0e2xpbmtzICYmXHJcblx0XHRcdFx0XHRsaW5rcy5tYXAoKGxpbmspID0+IChcclxuXHRcdFx0XHRcdFx0PGxpIGtleT17bGlua30+XHJcblx0XHRcdFx0XHRcdFx0e3BhZ2UgPT09IGxpbmsgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cGFnZVN0eWxlcy5pbmFjdGl2ZX0+e2xpbmt9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHtsaW5rfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT57bGlua308L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e3Jlc3VtZUxpbmt9PlxyXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIj5yZXN1bWU8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjaGVja2JveFwiIGlkPVwiY2hrXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGZvcj1cImNoa1wiPlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9vblwiPjwvaT5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN1blwiPjwvaT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWxsXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPXtwYWdlU3R5bGVzLmljb259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuXHRcdFx0XHQ8TWVudUljb24gLz5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHR7LyogUmVzcG9uc2l2ZSBOYXZpZ2F0aW9uICovfVxyXG5cdFx0XHQ8U3R5bGVkTWVudVxyXG5cdFx0XHRcdGFuY2hvckVsPXthbmNob3JFbH1cclxuXHRcdFx0XHRrZWVwTW91bnRlZFxyXG5cdFx0XHRcdG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG5cdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJhYm91dFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L1N0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdDxTdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvd29ya1wiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJ3b3JrXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cInByb2plY3RzXCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cInByb2plY3RzXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvU3R5bGVkTWVudUl0ZW0+XHJcblx0XHRcdFx0PFN0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wb3N0c1wiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJwb3N0c1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L1N0eWxlZE1lbnVJdGVtPlxyXG5cdFx0XHRcdDxTdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e3Jlc3VtZUxpbmt9PlxyXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJyZXN1bWVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9TdHlsZWRNZW51SXRlbT5cclxuXHRcdFx0PC9TdHlsZWRNZW51PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9