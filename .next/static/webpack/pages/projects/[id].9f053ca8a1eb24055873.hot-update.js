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

 // Page constants

var name = 'Brent Champion';
var siteTitle = 'Portfolio';
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
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 129,
      columnNumber: 5
    }
  });

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Learn how to build a personal website using Next.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://og-image.now.sh/".concat(encodeURI(siteTitle), ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    content: siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    color: "primary",
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, name), __jsx("div", {
    className: classes.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 169,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, "Test"), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJncm93IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwic2VhcmNoSWNvbiIsInBhZGRpbmciLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiY29sb3IiLCJpbnB1dElucHV0IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhvbWUiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImlzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVNb2JpbGVNZW51T3BlbiIsIm1lbnVJZCIsInJlbmRlck1lbnUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtb2JpbGVNZW51SWQiLCJyZW5kZXJNb2JpbGVNZW51IiwiZW5jb2RlVVJJ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MDUzY2E4YTFlYjI0MDU1ODczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8vIE1hdGVyaWFsIFVJIENvbXBvbmVudHNcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLCBCYWRnZSxcclxuICBJY29uQnV0dG9uLCBJbnB1dEJhc2UsXHJcbiAgTWVudUl0ZW0sIE1lbnUsXHJcbiAgVG9vbGJhciwgVHlwb2dyYXBoeVxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcblxyXG4vLyBHbG9iYWwgU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuXHJcbi8vIFBhZ2UgY29uc3RhbnRzXHJcbmNvbnN0IG5hbWUgPSAnQnJlbnQgQ2hhbXBpb24nXHJcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnUG9ydGZvbGlvJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6ICdpbmhlcml0JyxcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgd2lkdGg6ICcyMGNoJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uRGVza3RvcDoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBob21lIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpc01vYmlsZU1lbnVPcGVuID0gQm9vbGVhbihtb2JpbGVNb3JlQW5jaG9yRWwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIGhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWVudUlkID0gJ3ByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudSc7XHJcbiAgY29uc3QgcmVuZGVyTWVudSA9IChcclxuICAgIDxNZW51XHJcbiAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBpZD17bWVudUlkfVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAncmlnaHQnIH19XHJcbiAgICAgIG9wZW49e2lzTWVudU9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZU1lbnVDbG9zZX1cclxuICAgID5cclxuICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbG9zZX0+UHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1vYmlsZU1lbnVJZCA9ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUtbW9iaWxlJztcclxuICBjb25zdCByZW5kZXJNb2JpbGVNZW51ID0gKFxyXG4gICAgPE1lbnVcclxuICAgICAgYW5jaG9yRWw9e21vYmlsZU1vcmVBbmNob3JFbH1cclxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBpZD17bW9iaWxlTWVudUlkfVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAncmlnaHQnIH19XHJcbiAgICAgIG9wZW49e2lzTW9iaWxlTWVudU9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZU1vYmlsZU1lbnVDbG9zZX1cclxuICAgID5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIFBhZ2UgSGVhZCAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkxlYXJuIGhvdyB0byBidWlsZCBhIHBlcnNvbmFsIHdlYnNpdGUgdXNpbmcgTmV4dC5qc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9vZy1pbWFnZS5ub3cuc2gvJHtlbmNvZGVVUkkoXHJcbiAgICAgICAgICAgIHNpdGVUaXRsZVxyXG4gICAgICAgICAgKX0ucG5nP3RoZW1lPWxpZ2h0Jm1kPTAmZm9udFNpemU9NzVweCZpbWFnZXM9aHR0cHMlM0ElMkYlMkZhc3NldHMudmVyY2VsLmNvbSUyRmltYWdlJTJGdXBsb2FkJTJGZnJvbnQlMkZhc3NldHMlMkZkZXNpZ24lMkZuZXh0anMtYmxhY2stbG9nby5zdmdgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIFRPRE86IE1ha2UgaW50byBjdXN0b20gY29tcG9uZW50ICovfVxyXG4gICAgICA8QXBwQmFyIGNvbG9yPVwicHJpbWFyeVwiIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cclxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cclxuICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgeyFob21lICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tUb0hvbWV9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9