webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\Brent Champion\\Documents\\Coding\\portfolio\\components\\layout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // Material UI Components



 // Global Styles

 // Page Constants

var name = 'Brent Champion';
var siteTitle = 'Portfolio'; // Generate NavBar Constants

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }),
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '20ch'
    }),
    sectionDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex'
    }, theme.breakpoints.up('md'), {
      display: 'none'
    })
  };
});
function Layout(_ref) {
  _s();

  var children = _ref.children,
      home = _ref.home;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      mobileMoreAnchorEl = _React$useState4[0],
      setMobileMoreAnchorEl = _React$useState4[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };

  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var menuId = 'primary-search-account-menu';

  var renderMenu = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "My account"));

  var mobileMenuId = 'primary-search-account-menu-mobile';

  var renderMobileMenu = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  });

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Learn how to build a personal website using Next.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://og-image.now.sh/".concat(encodeURI(siteTitle), ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    content: siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    color: "primary",
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, name), __jsx("div", {
    className: classes.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputBase"], {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 33
    }
  }, "About"))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, "\u2190 Back to home"))));
}

_s(Layout, "QbuE0by0825GObi+FvhMymLYB/U=", false, function () {
  return [useStyles];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJncm93IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwic2VhcmNoSWNvbiIsInBhZGRpbmciLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiY29sb3IiLCJpbnB1dElucHV0IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhvbWUiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImlzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVNb2JpbGVNZW51T3BlbiIsIm1lbnVJZCIsInJlbmRlck1lbnUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtb2JpbGVNZW51SWQiLCJyZW5kZXJNb2JpbGVNZW51IiwiZW5jb2RlVVJJ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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsQ0E5Q0osQ0FERjtBQXVERDs7R0E5R3VCN0IsTTtVQUNOdEMsUzs7O0tBRE1zQyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1tpZF0uNDYwMjljOTdjZDEyMzU3YTcyNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuLy8gTWF0ZXJpYWwgVUkgQ29tcG9uZW50c1xyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsIEJhZGdlLFxyXG4gIEljb25CdXR0b24sIElucHV0QmFzZSxcclxuICBNZW51SXRlbSwgTWVudSxcclxuICBUb29sYmFyLCBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuXHJcbi8vIEdsb2JhbCBTdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gUGFnZSBDb25zdGFudHNcclxuY29uc3QgbmFtZSA9ICdCcmVudCBDaGFtcGlvbidcclxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdQb3J0Zm9saW8nXHJcblxyXG4vLyBHZW5lcmF0ZSBOYXZCYXIgQ29uc3RhbnRzXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGdyb3c6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4xNSksXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjI1KSxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnKSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMjBjaCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2t0b3A6IHtcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vYmlsZU1vcmVBbmNob3JFbCwgc2V0TW9iaWxlTW9yZUFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBpc01lbnVPcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaXNNb2JpbGVNZW51T3BlbiA9IEJvb2xlYW4obW9iaWxlTW9yZUFuY2hvckVsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51T3BlbiA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTW9yZUFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVJZCA9ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUnO1xyXG4gIGNvbnN0IHJlbmRlck1lbnUgPSAoXHJcbiAgICA8TWVudVxyXG4gICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdyaWdodCcgfX1cclxuICAgICAgaWQ9e21lbnVJZH1cclxuICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBvcGVuPXtpc01lbnVPcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xvc2V9PlByb2ZpbGU8L01lbnVJdGVtPlxyXG4gICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTWVudUNsb3NlfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG5cclxuICBjb25zdCBtb2JpbGVNZW51SWQgPSAncHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51LW1vYmlsZSc7XHJcbiAgY29uc3QgcmVuZGVyTW9iaWxlTWVudSA9IChcclxuICAgIDxNZW51XHJcbiAgICAgIGFuY2hvckVsPXttb2JpbGVNb3JlQW5jaG9yRWx9XHJcbiAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdyaWdodCcgfX1cclxuICAgICAgaWQ9e21vYmlsZU1lbnVJZH1cclxuICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBvcGVuPXtpc01vYmlsZU1lbnVPcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVNb2JpbGVNZW51Q2xvc2V9XHJcbiAgICA+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiBQYWdlIEhlYWQgKi99XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vb2ctaW1hZ2Uubm93LnNoLyR7ZW5jb2RlVVJJKFxyXG4gICAgICAgICAgICBzaXRlVGl0bGVcclxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnZlcmNlbC5jb20lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiBUT0RPOiBNYWtlIGludG8gY3VzdG9tIGNvbXBvbmVudCAqL31cclxuICAgICAgPEFwcEJhciBjb2xvcj1cInByaW1hcnlcIiBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWFyY2gnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICB7IWhvbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RvSG9tZX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=