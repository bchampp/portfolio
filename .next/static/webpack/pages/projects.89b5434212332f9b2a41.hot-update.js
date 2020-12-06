webpackHotUpdate_N_E("pages/projects",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\Brent Champion\\Documents\\Coding\\portfolio\\components\\layout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // Material UI Components



 // Global Styles

 // Page Constants

var name = 'Brent Champion';
var siteTitle = 'Portfolio'; // Generate NavBar Constants

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    grow: {
      flexGrow: 3
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.common.white, 0.25)
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
    inputInput: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '20ch'
    }),
    sectionDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'flex'
    }, theme.breakpoints.up('md'), {
      display: 'none'
    })
  };
});
function Layout(_ref) {
  _s();

  var children = _ref.children,
      page = _ref.page;
  var classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Learn how to build a personal website using Next.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://og-image.now.sh/".concat(encodeURI(siteTitle), ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    content: siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AppBar"], {
    color: "primary",
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 28
    }
  }, name))), __jsx("div", {
    className: classes.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputBase"], {
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
      lineNumber: 118,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, "About")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 36
    }
  }, "Projects")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, "Posts")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, children), page !== 'home' && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "\u2190 Back to home"))));
}

_s(Layout, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJncm93IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwic2VhcmNoSWNvbiIsInBhZGRpbmciLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiY29sb3IiLCJpbnB1dElucHV0IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2UiLCJjbGFzc2VzIiwiZW5jb2RlVVJJIiwicm9vdCIsImlucHV0Iiwic3R5bGVzIiwiYmFja1RvSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtDQVFBOztDQUdBOztBQUNBLElBQU1BLElBQUksR0FBRyxnQkFBYjtBQUNPLElBQU1DLFNBQVMsR0FBRyxXQUFsQixDLENBRVA7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEaUM7QUFJdkNDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUFFSixLQUFLLENB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RDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFwQixDQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBbEJGLEVBMEJFO0FBQUssYUFBUyxFQUFFSyxPQUFPLENBQUNKLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsQ0FERixDQWxCRixFQWlERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9FLFFBQVAsQ0FqREYsRUFrREdDLElBQUksS0FBSyxNQUFULElBQ0M7QUFBSyxhQUFTLEVBQUVLLHlEQUFNLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FERixDQW5ESixDQURGO0FBNEREOztHQS9EdUJSLE07VUFDTnRDLFM7OztLQURNc0MsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy44OWI1NDM0MjEyMzMyZjliMmE0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyBNYXRlcmlhbCBVSSBDb21wb25lbnRzXHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFwcEJhciwgQmFkZ2UsXHJcbiAgSWNvbkJ1dHRvbiwgSW5wdXRCYXNlLFxyXG4gIE1lbnVJdGVtLCBNZW51LFxyXG4gIFRvb2xiYXIsIFR5cG9ncmFwaHlcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5cclxuLy8gR2xvYmFsIFN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXHJcblxyXG4vLyBQYWdlIENvbnN0YW50c1xyXG5jb25zdCBuYW1lID0gJ0JyZW50IENoYW1waW9uJ1xyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ1BvcnRmb2xpbydcclxuXHJcbi8vIEdlbmVyYXRlIE5hdkJhciBDb25zdGFudHNcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDMsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6ICdpbmhlcml0JyxcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgd2lkdGg6ICcyMGNoJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uRGVza3RvcDoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBwYWdlIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogUGFnZSBIZWFkICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiTGVhcm4gaG93IHRvIGJ1aWxkIGEgcGVyc29uYWwgd2Vic2l0ZSB1c2luZyBOZXh0LmpzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL29nLWltYWdlLm5vdy5zaC8ke2VuY29kZVVSSShcclxuICAgICAgICAgICAgc2l0ZVRpdGxlXHJcbiAgICAgICAgICApfS5wbmc/dGhlbWU9bGlnaHQmbWQ9MCZmb250U2l6ZT03NXB4JmltYWdlcz1odHRwcyUzQSUyRiUyRmFzc2V0cy52ZXJjZWwuY29tJTJGaW1hZ2UlMkZ1cGxvYWQlMkZmcm9udCUyRmFzc2V0cyUyRmRlc2lnbiUyRm5leHRqcy1ibGFjay1sb2dvLnN2Z2B9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogVE9ETzogTWFrZSBpbnRvIGN1c3RvbSBjb21wb25lbnQgKi99XHJcbiAgICAgIDxBcHBCYXIgY29sb3I9XCJwcmltYXJ5XCIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg2XCIgbm9XcmFwPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz48YT57bmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWFyY2gnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj48YT5Qcm9qZWN0czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHNcIj48YT5Qb3N0czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAge3BhZ2UgIT09ICdob21lJyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==