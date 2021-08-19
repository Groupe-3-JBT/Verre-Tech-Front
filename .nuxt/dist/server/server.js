module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/auth-login","2":"components/checkout-add-billing-address","3":"components/checkout-add-delivery-address","4":"components/checkout-alert","5":"components/checkout-edit-billing-address","6":"components/checkout-edit-delivery-address","7":"components/checkout-item","8":"components/checkout-payment","9":"components/checkout-personnal-info","10":"components/checkout-summary","11":"components/location","12":"components/logo","13":"components/popups-popup-newsletter","14":"components/produits-product-card","15":"pages/_route","16":"pages/categories/_route","17":"pages/checkout/index","18":"pages/commandes/_id","19":"pages/commandes/index","20":"pages/contact/index","21":"pages/index","22":"pages/panier/LineChart","23":"pages/panier/index","24":"pages/produits/_route","25":"pages/produits/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyC0GgM-HUOeE1riBjkVdIl-0pgDL_daLVQ",
    authDomain: "web-app-43811.firebaseapp.com",
    databaseURL: "https://web-app-43811.firebaseio.com",
    projectId: "web-app-43811",
    storageBucket: "web-app-43811.appspot.com",
    messagingSenderId: "269912740152"
  };
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig); // firebase.firestore().settings({timestampsInSnapshots: true})
}

const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore(); // const fireDb = firebase.firestore()



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vee-validate");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Cookies',
  barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
  acceptAll: 'Accept all',
  declineAll: 'Delete all',
  manageCookies: 'Manage cookies',
  unsaved: 'You have unsaved settings',
  close: 'Close',
  save: 'Save',
  necessary: 'Necessary cookies',
  optional: 'Optional cookies',
  functional: 'Functional cookies',
  blockedIframe: 'To see this, please enable functional cookies',
  here: 'here'
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/Popup.vue?vue&type=template&id=109196a5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal"}},[_c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal-container"},[(_vm.closeBtn)?_c('button',{staticClass:"close-btn fas fa-times",on:{"click":_vm.close}},[_c('img',{attrs:{"stroke":0,"src":__webpack_require__(74)}})]):_vm._e(),_vm._v(" "),_vm._t("body")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup.vue?vue&type=template&id=109196a5&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/Popup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Popupvue_type_script_lang_js_ = ({
  props: {
    closeBtn: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      close: 'popup/hide'
    })
  }
});
// CONCATENATED MODULE: ./components/Popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Popupvue_type_script_lang_js_ = (Popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "109196a5",
  "e2932374"
  
)

/* harmony default export */ var Popup = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNNTAzLjgsMjM2LjFMMzE4LjksNTEuMmMtNS4zLTUuMy0xMi4zLTguMi0xOS44LTguMmMtNy41LDAtMTQuNSwyLjktMTkuOCw4LjJMMjYyLjUsNjhjLTUuMyw1LjMtOC4yLDEyLjMtOC4yLDE5LjgKCQkJCWMwLDcuNSwyLjksMTQuOCw4LjIsMjBMMzcwLjQsMjE2SDI3LjdDMTIuMiwyMTYsMCwyMjguMSwwLDI0My41djIzLjdDMCwyODIuNywxMi4yLDI5NiwyNy43LDI5NmgzNDMuOUwyNjIuNSw0MDQuNwoJCQkJYy01LjMsNS4zLTguMiwxMi4xLTguMiwxOS42YzAsNy41LDIuOSwxNC40LDguMiwxOS43bDE2LjgsMTYuN2M1LjMsNS4zLDEyLjMsOC4yLDE5LjgsOC4yYzcuNSwwLDE0LjUtMi45LDE5LjgtOC4ybDE4NC45LTE4NC45CgkJCQljNS4zLTUuMyw4LjItMTIuNCw4LjItMTkuOUM1MTIsMjQ4LjUsNTA5LjEsMjQxLjQsNTAzLjgsMjM2LjF6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/left-arrow.d26f694.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3990ae42", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0063099f", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cart.a9fc3f6.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/compte.25fc8a6.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dropdown.5bac39d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("8dbe9ec8", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("5fb19842", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3294658e", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("6c45e7f6", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Cookies',
  barDescription: 'Wir verwenden unsere eigenen Cookies und Cookies von Drittanbietern, damit wir Ihnen diese Website zeigen können und verstehen wie Sie diese verwenden, um die von uns angebotenen Dienstleistungen zu verbessern. Wenn Sie weiter surfen, gehen wir davon aus, dass Sie die Cookies akzeptiert haben.',
  acceptAll: 'Alle akzeptieren',
  declineAll: 'Alle ablehnen',
  manageCookies: 'Cookies verwalten',
  unsaved: 'Sie haben nicht gespeicherte Einstellungen',
  close: 'Schließen',
  save: 'Speichern',
  necessary: 'Notwendige Cookies',
  optional: 'Optionale Cookies',
  functional: 'Funktionale Cookies',
  blockedIframe: 'Um den Inhalt zu sehen, aktivieren Sie bitte funktionale Cookies',
  here: 'hier'
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Cookies',
  barDescription: 'Utilizamos cookies propias y de terceros para poder mostrarle una página web y comprender cómo la utiliza, con el fin de mejorar los servicios que ofrecemos. Si continúa navegando, consideramos que acepta su uso.',
  acceptAll: 'Aceptar todo',
  declineAll: 'Borrar todo',
  manageCookies: 'Administrar cookies',
  unsaved: 'Tienes configuraciones no guardadas',
  close: 'Cerrar',
  save: 'Guardar',
  necessary: 'Cookies obligatorias',
  optional: 'Cookies opcionales',
  functional: 'Cookies funcionales',
  blockedIframe: 'Para ver esto, por favor habilita las cookies funcionales.',
  here: 'aquí'
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: "Cookies",
  barDescription: "Nous utilisons des cookies d’origine et des cookies tiers. Ces cookies sont destinés à vous offrir une navigation optimisée sur ce site web et de nous donner un aperçu de son utilisation, en vue de l’amélioration des services que nous offrons. En poursuivant votre navigation, nous considérons que vous acceptez l’usage des cookies.",
  acceptAll: "Tous accepter",
  declineAll: "Tout refuser",
  manageCookies: "Gérer les cookies",
  unsaved: "Vous avez des paramètres non sauvegardés",
  close: "Fermer",
  save: "Sauvegarder",
  necessary: "Les cookies obligatoires",
  optional: "Les cookies optionnels",
  functional: "Cookies fonctionnels",
  blockedIframe: "Pour voir cela, veuillez activer les cookies fonctionnels",
  here: "ici",
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Kolačići',
  barDescription: 'Koristimo vlastite kolačiće i kolačiće treće strane kako bismo Vam mogli prikazati web stranicu i razumijeti kako je koristite, s pogledom na poboljšanje usluga koje nudimo. Ako nastavite s pregledavanjem, smatramo da prihvaćate upotrebu kolačića.',
  acceptAll: 'Dozvoli sve',
  declineAll: 'Obriši sve',
  manageCookies: 'Upravljaj kolačićima',
  unsaved: 'Imate nespremljenih postavki',
  close: 'Zatvori',
  save: 'Spremi',
  necessary: 'Obavezni kolačići',
  optional: 'Neobavezni kolačići',
  functional: 'Funkcionalni kolačići',
  blockedIframe: 'Da bi vidjeli ovo, molimo Vas omogućite funkcionalne kolačiće',
  here: 'ovdje'
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Sütik',
  barDescription: 'Saját, illetve harmadik féltől származó sütiket használunk annak érdekében, hogy megmutassuk ezt a weboldalt, és jobban megértsük, hogyan használja azt, azzal a céllal, hogy javítsuk az általunk kínált szolgáltatásokat. Ha folytatod a böngészést, úgy gondoljuk, hogy elfogadtad a sütiket.',
  acceptAll: 'Összes elfogadása',
  declineAll: 'Összes elutasítása',
  manageCookies: 'Sütikk kezelése',
  unsaved: 'Mentés nélküli beállítások vannak',
  close: 'Bezár',
  save: 'Mentés',
  necessary: 'Szükséges sütikk',
  optional: 'Opcionális sütik',
  functional: 'Funkcionális sütik',
  blockedIframe: 'Ennek megtekintéséhez, engedélyezd a funkcionális sütik használatát',
  here: 'itt'
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Cookies',
  barDescription: 'Utilizziamo cookie propri e di terzi per mostrarvi la pagina web e capire come la utilizzate, nonché per migliorare i servizi che offriamo. Se continuate a navigare, consideriamo che accettate il loro utilizzo.',
  acceptAll: 'Accetta tutto',
  declineAll: 'Cancella tutto',
  manageCookies: 'Gestisci i cookie',
  unsaved: 'Ci sono impostazioni non salvate',
  close: 'Chiudi',
  save: 'Salva',
  necessary: 'Cookie necessari',
  optional: 'Cookie opzionali',
  functional: 'Cookie funzionali',
  blockedIframe: 'Per vedere questo, si prega di abilitare i cookie funzionali',
  here: 'qui'
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Cookie',
  barDescription: '当サイトでは、サービス改善を目的として当サイト及び第三者が提供するCookieを使用することにより、利用者に当サイトを表示させるとともに、利用者がどのようにサイトを利用しているかをより十分に把握することが可能となっています。このまま閲覧を続けると、Cookieの利用について同意したとみなされます。',
  acceptAll: '全て同意',
  declineAll: '全て削除',
  manageCookies: 'Cookieを管理',
  unsaved: '保存されていない設定があります',
  close: '閉じる',
  save: '保存',
  necessary: '不可欠なCookie',
  optional: '任意のcookies',
  functional: '機能性Cookie',
  blockedIframe: 'ここを表示するには、機能性Cookieを有効にしてください:',
  here: '設定'
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Informasjonskapsler',
  barDescription: 'Vi bruker våre egne informasjonskapsler og tredjeparts informasjonskapsler, slik at vi kan vise deg dette nettstedet og bedre forstå hvordan du bruker det, med tanke på å forbedre tjenestene vi tilbyr.',
  acceptAll: 'Godta alle',
  declineAll: 'Slett alle',
  manageCookies: 'Administrer informasjonskapsler',
  unsaved: 'Du har ulagrede innstillinger',
  close: 'Lukk',
  save: 'Lagre',
  necessary: 'Nødvendige informasjonskapsler',
  optional: 'Valgfrie informasjonskapsler',
  functional: 'Funksjonelle informasjonskapsler',
  blockedIframe: 'For å se dette, vennligst aktiver funksjonelle informasjonskapsler',
  here: 'her'
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  barTitle: 'Cookies',
  barDescription: 'Nós utilizamos os nossos próprios cookies e de terceiros para que possamos lhe mostrar este site e compreender a forma como o utiliza, de forma a melhorarmos os serviços que oferecemos. Ao continuar a navegar no site, consideramos que aceitou a utilização de cookies.',
  acceptAll: 'Aceitar todos',
  declineAll: 'Apagar todos',
  manageCookies: 'Gerir cookies',
  unsaved: 'Tem alterações não guardadas',
  close: 'Fechar',
  save: 'Gravar',
  necessary: 'Cookies necessários',
  optional: 'Cookies opcionais',
  functional: 'Cookies funcionais',
  blockedIframe: 'Para visualizar isto, por favor, active os cookies funcionais',
  here: 'aqui'
});

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("cookieparser");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("google-maps-api-loader");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/phone.3a8148f.svg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logout.d9c564c.svg";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ2OS4zMzMzM3B0IiB2aWV3Qm94PSIwIDAgNDY5LjMzMzMzIDQ2OS4zMzMzMyIgd2lkdGg9IjQ2OS4zMzMzM3B0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00MzcuMzMyMDMxIDE5MmgtMTYwdi0xNjBjMC0xNy42NjQwNjItMTQuMzM1OTM3LTMyLTMyLTMyaC0yMS4zMzIwMzFjLTE3LjY2NDA2MiAwLTMyIDE0LjMzNTkzOC0zMiAzMnYxNjBoLTE2MGMtMTcuNjY0MDYyIDAtMzIgMTQuMzM1OTM4LTMyIDMydjIxLjMzMjAzMWMwIDE3LjY2NDA2MyAxNC4zMzU5MzggMzIgMzIgMzJoMTYwdjE2MGMwIDE3LjY2NDA2MyAxNC4zMzU5MzggMzIgMzIgMzJoMjEuMzMyMDMxYzE3LjY2NDA2MyAwIDMyLTE0LjMzNTkzNyAzMi0zMnYtMTYwaDE2MGMxNy42NjQwNjMgMCAzMi0xNC4zMzU5MzcgMzItMzJ2LTIxLjMzMjAzMWMwLTE3LjY2NDA2Mi0xNC4zMzU5MzctMzItMzItMzJ6bTAgMCIvPjwvc3ZnPg=="

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMi4wMSA0MjUuOTUiPjx0aXRsZT5sZWZ0LWFycm93MjwvdGl0bGU+PHBhdGggZD0iTTguMTYsMjc1LjYzbDE4NC43LDE4NS4xYTI4LjEsMjguMSwwLDAsMCwzOS42NCwwTDI0OS4zLDQ0NGEyNy44MiwyNy44MiwwLDAsMCw4LjItMTkuODEsMjguMzYsMjguMzYsMCwwLDAtOC4xNS0yMC4wNUwxNDEuNTksMjk1LjkybDM0Mi43MS4zN0EyNy4zNiwyNy4zNiwwLDAsMCw1MTIsMjY4Ljc2TDUxMiwyNDVjMC0xNS40NS0xMi4xOC0yOC43OC0yNy42My0yOC44bC0zNDMuOTMtLjM3TDI0OS42NiwxMDcuMjZhMjcuNzUsMjcuNzUsMCwwLDAsMC0zOS4zNUwyMzIuOTMsNTEuMTZhMjguMSwyOC4xLDAsMCwwLTM5LjYzLDBMOC4yLDIzNS44NWEyOC4yNywyOC4yNywwLDAsMCwwLDM5Ljc4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDIuOTgpIi8+PC9zdmc+"

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.1c5f369.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
module.exports = __webpack_require__(89);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("05831c5e", content, true)

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cookieControl__Modal-enter-active,.cookieControl__Modal-leave-active{transition:opacity .25s}.cookieControl__Modal-enter,.cookieControl__Modal-leave-to{opacity:0}.cookieControl__Bar--center{top:50%;left:50%;transform:translate(-50%,-50%)}.cookieControl__Bar--bottom-full-enter-active,.cookieControl__Bar--bottom-full-leave-active,.cookieControl__Bar--bottom-left-enter-active,.cookieControl__Bar--bottom-left-leave-active,.cookieControl__Bar--bottom-right-enter-active,.cookieControl__Bar--bottom-right-leave-active,.cookieControl__Bar--center-enter-active,.cookieControl__Bar--center-leave-active,.cookieControl__Bar--top-full-enter-active,.cookieControl__Bar--top-full-leave-active,.cookieControl__Bar--top-left-enter-active,.cookieControl__Bar--top-left-leave-active,.cookieControl__Bar--top-right-enter-active,.cookieControl__Bar--top-right-leave-active{transition:transform .25s}.cookieControl__Bar--top-full-enter,.cookieControl__Bar--top-full-leave-to,.cookieControl__Bar--top-left-enter,.cookieControl__Bar--top-left-leave-to,.cookieControl__Bar--top-right-enter,.cookieControl__Bar--top-right-leave-to{transform:translateY(-100%)}.cookieControl__Bar--bottom-full-enter,.cookieControl__Bar--bottom-full-leave-to,.cookieControl__Bar--bottom-left-enter,.cookieControl__Bar--bottom-left-leave-to,.cookieControl__Bar--bottom-right-enter,.cookieControl__Bar--bottom-right-leave-to{transform:translateY(100%)}.cookieControl__Bar--center-enter,.cookieControl__Bar--center-leave-to{transform:translate(-50%,-50%) scale(.95)}.cookieControl{position:relative;z-index:100000}.cookieControl button{border:0;outline:0;font-size:16px;cursor:pointer;padding:12px 20px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:background-color .2s,color .2s}.cookieControl__Bar{position:fixed;background-color:var(--cookie-control-barBackground);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif}.cookieControl__Bar h3,.cookieControl__Bar p{color:var(--cookie-control-barTextColor);max-width:900px}.cookieControl__Bar h3{margin:0;font-size:20px}.cookieControl__Bar p{font-size:16px;margin:5px 0 0}.cookieControl__Bar button{color:var(--cookie-control-barButtonColor);background-color:var(--cookie-control-barButtonBackground)}.cookieControl__Bar button:hover{color:var(--cookie-control-barButtonHoverColor);background-color:var(--cookie-control-barButtonHoverBackground)}.cookieControl__Bar button+button{margin-left:10px}.cookieControl__BarContainer{display:flex;padding:20px;align-items:flex-end;justify-content:space-between}.cookieControl__Bar--bottom-full,.cookieControl__Bar--top-full{left:0;right:0}.cookieControl__Bar--top-full{top:0}.cookieControl__Bar--bottom-full{bottom:0}.cookieControl__Bar--bottom-left p,.cookieControl__Bar--bottom-right p,.cookieControl__Bar--center p,.cookieControl__Bar--top-left p,.cookieControl__Bar--top-right p{max-width:400px}.cookieControl__Bar--bottom-left .cookieControl__BarContainer,.cookieControl__Bar--bottom-right .cookieControl__BarContainer,.cookieControl__Bar--center .cookieControl__BarContainer,.cookieControl__Bar--top-left .cookieControl__BarContainer,.cookieControl__Bar--top-right .cookieControl__BarContainer{flex-direction:column}.cookieControl__Bar--bottom-left .cookieControl__BarButtons,.cookieControl__Bar--bottom-right .cookieControl__BarButtons,.cookieControl__Bar--center .cookieControl__BarButtons,.cookieControl__Bar--top-left .cookieControl__BarButtons,.cookieControl__Bar--top-right .cookieControl__BarButtons{margin-top:20px}.cookieControl__Bar--top-left,.cookieControl__Bar--top-right{top:20px}.cookieControl__Bar--bottom-left,.cookieControl__Bar--bottom-right{bottom:20px}.cookieControl__Bar--bottom-left,.cookieControl__Bar--top-left{left:20px}.cookieControl__Bar--bottom-right,.cookieControl__Bar--top-right{right:20px}.cookieControl__BarButtons{display:flex}.cookieControl__Modal{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1;font-size:0;text-align:center}.cookieControl__Modal:before{content:\"\";min-height:100vh;display:inline-block;vertical-align:middle}.cookieControl__Modal:after{position:absolute;content:\"\";top:0;left:0;right:0;bottom:0;z-index:-1;opacity:var(--cookie-control-modalOverlayOpacity);background-color:var(--cookie-control-modalOverlay)}.cookieControl__Modal>div{font-size:medium;padding-top:80px}.cookieControl__Modal button{color:var(--cookie-control-modalButtonColor);background-color:var(--cookie-control-modalButtonBackground)}.cookieControl__Modal button:hover{color:var(--cookie-control-modalButtonHoverColor);background-color:var(--cookie-control-modalButtonHoverBackground)}.cookieControl__ModalContent{position:relative;width:100%;padding:40px;max-width:550px;max-height:80vh;text-align:left;overflow-y:scroll;display:inline-block;vertical-align:middle;background-color:var(--cookie-control-modalBackground)}.cookieControl__ModalContent,.cookieControl__ModalContent :not(button){color:var(--cookie-control-modalTextColor)}.cookieControl__ModalContent h3{font-size:24px;margin:50px 0 25px}.cookieControl__ModalContent h3:first-of-type{margin-top:0}.cookieControl__ModalContent ul{padding:0;font-size:16px;list-style-type:none}.cookieControl__ModalContent ul ul{padding:5px 56px 0}.cookieControl__ModalContent ul ul li+li{margin-top:5px}.cookieControl__ModalContent li{align-items:center}.cookieControl__ModalContent li+li{margin-top:20px}.cookieControl__ModalContent input{display:none}.cookieControl__ModalContent input:checked+label{background-color:var(--cookie-control-checkboxActiveBackground)}.cookieControl__ModalContent input:checked+label:before{background-color:var(--cookie-control-checkboxActiveCircleBackground);transform:translate3d(100%,-50%,0)}.cookieControl__ModalContent input:checked:disabled+label{background-color:var(--cookie-control-checkboxDisabledBackground)}.cookieControl__ModalContent input:checked:disabled+label:before{background-color:var(--cookie-control-checkboxDisabledCircleBackground)}.cookieControl__ModalContent label{position:relative;min-width:36px;min-height:20px;font-size:0;display:block;margin-right:20px;border-radius:20px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:background-color .2s;background-color:var(--cookie-control-checkboxInactiveBackground)}.cookieControl__ModalContent label:before{position:absolute;content:\"\";top:50%;left:3px;width:15px;height:15px;border-radius:50%;transition:transform .2s;transform:translate3d(0,-50%,0);background-color:var(--cookie-control-checkboxInactiveCircleBackground)}.cookieControl__ModalInputWrapper{display:flex;align-items:flex-start}.cookieControl__ModalCookieName{font-weight:700;text-transform:uppercase}.cookieControl__ModalCookieName span{font-weight:400;text-transform:none}.cookieControl__ModalClose{position:absolute;top:20px;right:20px}.cookieControl__ModalButtons{display:flex;margin-top:80px;align-items:flex-start}.cookieControl__ModalButtons button+button{margin-left:20px}.cookieControl__ModalUnsaved{position:absolute;left:50%;bottom:40px;margin:0;color:var(--cookie-control-modalUnsavedColor);font-size:14px;transform:translateX(-50%)}.cookieControl__BlockedIframe{padding:20px;border:2px solid #ddd}.cookieControl__BlockedIframe a,.cookieControl__BlockedIframe p{font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif}@media screen and (max-width:768px){.cookieControl__Bar{flex-direction:column;left:0;right:0}.cookieControl__Bar h3,.cookieControl__Bar p{max-width:100%}.cookieControl__Bar--top-full,.cookieControl__Bar--top-left,.cookieControl__Bar--top-right{top:0}.cookieControl__Bar--bottom-full,.cookieControl__Bar--bottom-left,.cookieControl__Bar--bottom-right{bottom:0}.cookieControl__ModalContent{position:absolute;top:0;left:0;right:0;bottom:0;max-width:none;max-height:100%;padding:80px 20px 20px}.cookieControl__BarButtons{width:100%;margin-top:20px;justify-content:flex-end}.cookieControl__BarContainer{flex-direction:column}}.cookieControl__ControlButton{position:fixed;right:20px;bottom:20px;border:0;outline:0;width:40px;height:40px;cursor:pointer;min-width:40px;min-height:40px;border-radius:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:background-color .2s;box-shadow:0 0 10px rgba(0,0,0,.3);background:var(--cookie-control-controlButtonBackground)}.cookieControl__ControlButton svg{position:absolute;top:50%;left:50%;min-width:24px;min-height:24px;max-width:24px;max-height:24px;transition:color .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translate(-50%,-50%);color:var(--cookie-control-controlButtonIconColor)}.cookieControl__ControlButton:hover{background-color:var(--cookie-control-controlButtonHoverBackground)}.cookieControl__ControlButton:hover svg{color:var(--cookie-control-controlButtonIconHoverColor)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-basic.8006957.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icone-gpc.c5064c4.svg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/quality.084e768.svg";

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Header_vue_vue_type_style_index_0_id_daf5c8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Header_vue_vue_type_style_index_0_id_daf5c8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Header_vue_vue_type_style_index_0_id_daf5c8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Header_vue_vue_type_style_index_0_id_daf5c8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Header_vue_vue_type_style_index_0_id_daf5c8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".checkboxes[data-v-daf5c8f0]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.checkboxes[data-v-daf5c8f0]:last-child{margin-bottom:20px}.checkboxes input[data-v-daf5c8f0]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.checkboxes p[data-v-daf5c8f0]{width:auto;margin-left:20px}.dropdown[data-v-daf5c8f0]{position:relative;display:inline-block}.dropdown-content[data-v-daf5c8f0]{text-align:center;left:50%;transform:translateX(-50%);display:none;position:absolute;background-color:var(--color1);min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content a[data-v-daf5c8f0]{color:#f1f1f1;padding:12px 16px;text-decoration:none;display:block}.dropdown-content a[data-v-daf5c8f0]:hover{background-color:#f1f1f1;color:var(--color1)}.dropdown:hover .dropdown-content[data-v-daf5c8f0]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-basic-w.c206741.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("46535c94", content, true)

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{box-sizing:border-box;margin:0}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;vertical-align:baseline;text-decoration:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}img{width:100%;height:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("4c8464f6", content, true)

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(70);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(71);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(51);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,900;1,300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--color1:#ea5000;--color2:#fff;--color3:#999;--color4:#dfdfdf;--color5:#161aad;--color6:#161aad;--color7:#161aad;--color8:#161aad;--color9:#ccc;--color10:#e89065;--font1:\"Roboto\",sans-serif}.svg-color0{filter:invert(3%) sepia(100%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(200%)}.svg-color1{filter:invert(37%) sepia(92%) saturate(4009%) hue-rotate(14deg) brightness(100%) contrast(109%)}.svg-color2{filter:invert(93%) sepia(94%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(106%)}.svg-color3{filter:invert(71%) sepia(4%) saturate(22%) hue-rotate(344deg) brightness(85%) contrast(92%)}.svg-color4{filter:invert(100%) sepia(2%) saturate(1150%) hue-rotate(155deg) brightness(117%) contrast(75%)}.svg-color5{filter:invert(43%) sepia(86%) saturate(430%) hue-rotate(40deg) brightness(111%) contrast(97%)}.svg-color6{filter:invert(60%) sepia(56%) saturate(6487%) hue-rotate(53deg) brightness(100%) contrast(101%)}.svg-color7{filter:invert(61%) sepia(72%) saturate(430%) hue-rotate(39deg) brightness(99%) contrast(91%)}.svg-color8{filter:invert(36%) sepia(11%) saturate(7273%) hue-rotate(50deg) brightness(91%) contrast(99%)}.svg-color9{filter:invert(87%) sepia(8%) saturate(8%) hue-rotate(16deg) brightness(94%) contrast(90%)}.cookieControl__BarButtons button,.cookieControl__ModalButtons button,.cookieControl__ModalClose{border-radius:15px}.row{display:flex;flex-direction:row}.column{display:flex;flex-direction:column}body{font-family:\"Roboto\",sans-serif;font-family:var(--font1);height:auto}.wrapper-content,body{overflow-x:hidden;max-width:100vw}.flex{display:flex}.justify-between{justify-content:space-between!important}.justify-center{justify-content:center!important}.justify-end{justify-content:flex-end!important}.align-items-center{align-items:center!important}.align-center{text-align:center!important}.h-100{height:100%}.w-100{width:100%}strong{font-weight:400}.p-0{padding:0!important}.m-0{margin:0!important}select{width:100%;outline:none;padding:10px 0;border:none;border-radius:5px;color:#ea5000;color:var(--color1);min-height:30px}#checkout .vue-form-wizard .wizard-card-footer,.container{display:block;margin-left:auto;margin-right:auto;width:calc(100% - 10em);max-width:100%}@media only screen and (max-width:1140px){#checkout .vue-form-wizard .wizard-card-footer,.container{width:calc(100% - 4em)}}@media only screen and (max-width:1300px){#checkout .vue-form-wizard .wizard-card-footer,.container{width:calc(100% - 6em)}}@media only screen and (min-width:1440px){#checkout .vue-form-wizard .wizard-card-footer,.container{width:1440px;max-width:100%}}@media (max-width:575.98px){#checkout .vue-form-wizard .wizard-card-footer,.container{width:calc(100% - 2em)}.modal-wrapper{max-width:100%;padding:0 1.5rem!important}}header{display:contents}.top-header{display:flex;flex-direction:column}.green-bar{height:5px;background-color:#161aad;background-color:var(--color7);position:relative}.green-bar:before{left:-1999px}.green-bar:after,.green-bar:before{content:\"\";background-color:#161aad;background-color:var(--color7);height:100%;width:2000px;position:absolute}.green-bar:after{right:-1999px}.top-header .col-end{display:flex;justify-content:center;align-items:center}.top-header-content{height:40px;width:100%;display:flex;align-items:center;flex-direction:row;justify-content:space-between;position:relative;border-radius:0 0 25px 0}.top-header-content,.top-header-content:before{background-color:#dfdfdf;background-color:var(--color4)}.top-header-content:before{content:\"\";height:100%;width:2000px;left:-1999px;position:absolute}.top-header-content h3{font-weight:400;font-size:.9rem;color:#999;color:var(--color3)}.top-header-content ul{font-weight:400;font-size:.9rem;color:#ea5000;color:var(--color1);padding:5px 0}.top-header-content ul,.top-header-content ul li{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:100%}.top-header-content ul li{padding:0 12px;position:relative}.top-header-content ul li:not(:last-child){border-right:1px solid #999;border-right:1px solid var(--color3)}.top-header-content span{color:#ea5000;color:var(--color1)}.top-header-content .tel{font-size:1.3rem;background-color:#161aad;background-color:var(--color7);padding:2px 20px 0 10px;color:#fff;color:var(--color2);border-radius:0 0 25px 0;width:auto;text-align:right;display:flex;flex-direction:row;align-items:center;font-weight:600}.top-header-content .phone{width:35px;margin-right:8px;margin-bottom:3px;filter:invert(32%) sepia(0) saturate(1039%) hue-rotate(149deg) brightness(92%) contrast(87%)}@media (max-width:1000px){.top-header-content{display:none}}@media (max-width:575.98px){#menu-header{display:none}.div-logo a{display:flex;align-items:center;flex-direction:row}}.top-menu{display:flex;padding:1rem 0 .5rem}.top-menu>div{flex-grow:1;flex:1 1 0px;height:100px}.top-menu .header-items img{height:60px;margin-bottom:.5rem}.top-menu .header-items>div{flex:0 140px;align-items:center}.top-menu .header-items>div:first-child{border-right:1px solid #ccc;border-right:1px solid var(--color9)}.top-menu .header-items{height:100%}.top-menu .header-items p{color:#999;color:var(--color3)}.top-menu .div-logo{align-items:center;display:flex;justify-content:center}.top-menu .logo-basic{height:100px;width:auto}.top-menu .logo-txt{height:55px;width:auto;margin-left:15px}@media (max-width:768px){.top-menu .logo-basic{height:80px;width:auto}.top-menu .logo-txt{height:45px;margin-top:10px;width:auto;margin-left:10px}.top-menu .header-items>div{min-width:105px}.top-menu .header-items p{display:none}}@media (max-width:575.98px){.top-menu>div{height:75px}.top-menu .logo-basic{height:55px;width:auto}.top-menu .logo-txt{height:35px;width:auto;margin-left:10px;margin-top:8px}.top-menu{padding:0 1rem}.top-menu>div{display:flex}.top-menu>div:last-child{justify-content:flex-end}.top-menu .header-items>div{min-width:60px}.top-menu .header-items img{height:42px;width:50px;margin-top:5px;margin-bottom:0}}#menuToggle{padding-left:1em}#menu-header{position:sticky;position:-webkit-sticky;top:0;z-index:1;background:#fff;height:60px}#menu-header .logo-nav,#menu-header .stick-items{display:none;visibility:hidden;opacity:0;transition:all .2s ease-in-out}#menu-header .stick-items img{height:50px;margin-bottom:0;width:auto}#menu-header ul{display:flex;flex-direction:row;width:100%;align-items:center;justify-content:space-between;padding:5px 0;transition:.5s}#menu-header ul li a{color:#ea5000;color:var(--color1);font-size:1.2rem;transition:.5s}#menu-header ul li{position:relative;display:flex;justify-content:center}#menu-header ul li.separation{width:2px;height:50px;border-radius:1px;background-color:#ccc;background-color:var(--color9)}@media (max-width:1000px){#menu-header ul li a{font-size:1rem}}@media (max-width:768px){#menu-header{display:none}}.bandeau{background-color:#ea5000;background-color:var(--color1);color:#fff;color:var(--color2);align-items:center;justify-content:space-evenly;position:relative;display:flex;flex-direction:row}.bandeau:before{left:-1999px}.bandeau:after,.bandeau:before{content:\"\";background-color:#ea5000;background-color:var(--color1);height:100%;width:2000px;position:absolute}.bandeau:after{right:-1999px}.bandeau li{text-align:center;font-size:1.2rem;align-items:center;justify-content:center;padding:20px 0;display:flex}.bandeau p{width:100%}.bandeau li p span{font-weight:100}.bandeau img{width:50px;margin-right:20px}@media (max-width:575.98px){.bandeau{padding-left:20px;flex-direction:column;align-items:center;justify-content:center}.bandeau p{text-align:left;font-size:1rem}.bandeau li{padding:10px 0}.bandeau li.middle{flex-direction:row-reverse}.bandeau li.middle img{width:50px;margin-right:0;margin-left:20px}}#menu-header.sticky{width:100%;background-color:#ea5000;background-color:var(--color1);color:#dfdfdf;color:var(--color4);border-bottom:1px solid #fff;border-bottom:1px solid var(--color2)}#menu-header.sticky .container{width:100%!important;display:flex;align-items:center;justify-content:space-between}#menu-header.sticky ul{padding:0;margin:0 1rem}#menu-header.sticky ul li.separation{width:2px;height:50px;border-radius:1px;background-color:#ccc;background-color:var(--color9)}#menu-header.sticky ul li a{color:#fff;color:var(--color2)}#menu-header.sticky ul li a:hover{color:#dfdfdf;color:var(--color4)}#menu-header.sticky .logo-nav{display:flex;visibility:visible;opacity:1;align-items:center;margin-left:1rem}#menu-header.sticky .logo-nav a{max-height:59px;height:59px}#menu-header.sticky .logo-nav img{max-height:56px;height:56px;width:auto;transition:1s}#menu-header.sticky .stick-items{display:flex;visibility:visible;opacity:1;height:59px;align-items:center;background:#dfdfdf;background:var(--color4);padding-right:.5rem}#menu-header.sticky .stick-items>div{padding:0 .5rem;align-items:center;display:flex}#menu-header.sticky .stick-items>div:first-child{border-right:2px solid #fff;border-right:2px solid var(--color2)}.stopScroll{overflow:hidden;height:100vw}.top-header-mobile{display:block}.top-header-mobile>div{display:block;position:absolute;top:47px;left:0;padding-left:3em;z-index:999999}.top-header-mobile a{color:#ea5000;color:var(--color1)}.top-header-mobile input{display:block;width:40px;height:32px;position:absolute;top:0;right:0;cursor:pointer;opacity:0;z-index:2}.top-header-mobile span{display:block;width:33px;height:4px;margin-top:5px;position:relative;background:#ea5000;background:var(--color1);border-radius:3px;z-index:1;transform-origin:4px 0;transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),opacity .55s ease}.top-header-mobile span:first-child{transform-origin:0 0}.top-header-mobile span:nth-last-child(2){transform-origin:0 100%}.top-header-mobile input:checked~span{opacity:1;transform:rotate(45deg) translate(-2px,-1px);background:#ea5000;background:var(--color1)}.top-header-mobile input:checked~span:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(.2)}.top-header-mobile input:checked~span:nth-last-child(2){transform:rotate(-45deg) translateY(-1px)}.top-header-mobile input:checked~div{transform:none}.top-header-mobile .toggle-content{display:flex;flex-direction:column;justify-content:flex-start;padding-top:40px;align-items:left;position:absolute;width:100vw;height:100vh;top:-15px;left:0;transform-origin:0 0;transform:translate(-100%);transition:transform .5s cubic-bezier(.77,.2,.05,1);background-color:#fff;background-color:var(--color2)}.top-header-mobile .toggle-content p{display:flex;font-size:1rem;padding:15px 0 15px 1rem;border-bottom:1px solid #dfdfdf;border-bottom:1px solid var(--color4)}@media (max-width:575.98px){.top-header-mobile>div{top:30px;padding-left:1em}.top-header-mobile span{height:3px;margin-top:5px;border-radius:2px}}#productPage{padding-top:2rem}#productPage .title{margin-bottom:2rem}#productPage .title img{width:30px;margin-right:1rem}#productPage .title h1{width:100vw;color:#ea5000;color:var(--color1);font-weight:400;align-items:center;display:flex;height:30px}#productPage .presentation{justify-content:space-between}#productPage .presentation .fiche{width:60%;display:flex;flex-direction:row}#productPage .presentation .fiche .images{width:75%}#productPage .presentation .fiche .images .logos img{height:60px;width:auto}#productPage .presentation .fiche>.atouts{width:25%;padding-left:1.5rem;padding-right:1.5rem;padding-top:1.5rem}#productPage .presentation .fiche>.atouts label{color:#333;text-decoration:underline;font-weight:300!important}#productPage .presentation .fiche>.atouts ul{margin-bottom:2rem;margin-top:1rem;padding:0}#productPage .presentation .fiche>.atouts ul li{color:#333;margin-bottom:.5rem}#productPage .presentation .fiche>.atouts ul li img{width:15px;margin-right:.5rem}#productPage .presentation .fiche>.atouts ul.convient li img{width:80px;margin-right:.5rem}#productPage .presentation .commande{padding-left:1.5rem;width:40%}#productPage .presentation .commande>div{background-color:#dfdfdf;background-color:var(--color4);border-radius:15px 0 0 15px;padding:1.5rem 0 1.5rem 1.5rem;position:relative}#productPage .presentation .commande>div:after{content:\"\";background-color:#dfdfdf;background-color:var(--color4);height:100%;width:2000px;right:-1999px;top:0;position:absolute}#productPage .presentation .commande h2{color:#999;color:var(--color3);font-weight:400}#productPage .presentation .commande form .row{margin-top:1rem;align-items:center}#productPage .presentation .commande form label{color:#333;font-weight:300}#productPage .presentation .commande form label.conditionnement{margin-top:1.5rem}#productPage .presentation .commande form .label-mode{margin-left:10px;color:#ea5000;color:var(--color1);font-weight:500;font-size:1.3rem}#productPage .presentation .commande form span{color:#999;color:var(--color3)}#productPage .presentation .commande form select{font-size:1.2rem;color:#ea5000;color:var(--color1);width:100%;padding:10px;margin:.5rem 0 0}#productPage .presentation .commande .total{color:#ea5000;color:var(--color1);font-size:1.3rem;font-weight:400;width:100%;justify-content:space-between;align-items:center;margin-top:2rem}#productPage .presentation .commande .total p{position:relative}#productPage .presentation .commande .total span{position:absolute;font-size:.9rem;font-weight:300;bottom:-1rem;right:0}#productPage .presentation .commande .add-cart{width:100%;background-color:#ea5000;background-color:var(--color1);color:#fff;color:var(--color2);margin-top:1rem;padding:10px 30px;border-radius:15px;align-items:center;justify-content:center;font-family:\"Roboto\",sans-serif;font-family:var(--font1);outline:none;cursor:pointer;border:none;font-size:1.1rem}#productPage .presentation .commande .add-cart .row{justify-content:center}#productPage .presentation .commande .add-cart img{width:auto;height:1.1rem;margin-left:15px}#productPage .presentation .commande .form-zipcode{justify-content:space-between;align-items:center;display:flex}#productPage .presentation .commande .form-zipcode .label-zipcode{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;padding-right:.5rem}#productPage .presentation .commande .form-zipcode .select-zipcode{flex-grow:1;margin-top:.5rem}#productPage .presentation .commande .form-zipcode .select-zipcode .vs__actions{padding:0}#productPage .presentation .commande .form-zipcode .select-zipcode .vs__selected{display:flex;align-items:center;border:0;border-radius:0;color:#333;margin:0;padding:10px;position:absolute;z-index:9;font-size:1rem}#productPage .presentation .commande .form-zipcode .select-zipcode .v-select{width:100%;padding-right:.5rem;background:#fff;background:var(--color2);border-radius:5px}#productPage .presentation .commande .form-zipcode .select-zipcode .vs--searchable .vs__dropdown-toggle{width:100%;border-top-left-radius:5px;border-bottom-left-radius:5px}#productPage .presentation .commande .form-zipcode .select-zipcode .vs__selected-options{padding:0}#productPage .presentation .commande .form-zipcode .select-zipcode input{color:#ea5000;color:var(--color1);width:100%;height:100%;outline:none;border:none;border-radius:5px;background-color:#fff;background-color:var(--color2);padding:10px;margin:0;font-size:1.2rem}#productPage .presentation .commande .form-zipcode .select-zipcode button{border:none;background-color:#fff;background-color:var(--color2);height:30px;outline:none;height:42px;width:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-top-right-radius:5px;border-bottom-right-radius:5px}#productPage .presentation .commande .form-zipcode .select-zipcode button img{width:20px}#productPage .details{justify-content:space-between;margin-top:2rem;margin-bottom:3rem}#productPage .details .prix{width:45%;padding-right:1.5rem}#productPage .details .prix>div{background-color:#ea5000;background-color:var(--color1);color:#fff;color:var(--color2);border-radius:0 15px 15px 0;padding:1.5rem 1.5rem 1.5rem 0;position:relative;text-align:left}#productPage .details .prix>div:after{content:\"\";background-color:#ea5000;background-color:var(--color1);height:100%;width:2000px;left:-1999px;top:0;right:0;position:absolute}#productPage .details .prix h2{color:#fff;color:var(--color2);font-weight:400;margin-bottom:1rem}#productPage .details .prix p{font-weight:300;margin-bottom:1rem}#productPage .details .prix .form-zipcode{justify-content:space-between;align-items:center;display:flex}#productPage .details .prix .form-zipcode .label-zipcode{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;padding-right:.5rem}#productPage .details .prix .form-zipcode .select-zipcode{flex-grow:1}#productPage .details .prix .form-zipcode .select-zipcode .vs__actions{padding:0}#productPage .details .prix .form-zipcode .select-zipcode .vs__selected{display:flex;align-items:center;border:0;border-radius:0;color:#333;margin:0;padding:10px;position:absolute;z-index:9;font-size:1rem}#productPage .details .prix .form-zipcode .select-zipcode .v-select{width:100%;padding-right:.5rem;background:#fff;background:var(--color2);border-radius:5px}#productPage .details .prix .form-zipcode .select-zipcode .vs--searchable .vs__dropdown-toggle{width:100%}#productPage .details .prix .form-zipcode .select-zipcode .vs__selected-options{padding:0}#productPage .details .prix .form-zipcode .select-zipcode input{color:#ea5000;color:var(--color1);width:100%;height:100%;outline:none;border:none;border-radius:5px;background-color:#fff;background-color:var(--color2);padding:10px;margin:0;font-size:1.2rem}#productPage .details .prix .form-zipcode .select-zipcode button{border:none;background-color:#fff;background-color:var(--color2);height:30px;outline:none;height:42px;width:40px;display:flex;align-items:center;justify-content:center;cursor:pointer}#productPage .details .prix .form-zipcode .select-zipcode button img{width:20px;filter:invert(37%) sepia(92%) saturate(4009%) hue-rotate(14deg) brightness(100%) contrast(109%)}#productPage .details .prix table{font-family:arial,sans-serif;border-collapse:collapse;width:100%;margin-top:2rem;font-size:1.2rem;margin-left:1px}#productPage .details .prix table th{text-transform:uppercase;font-weight:500}#productPage .details .prix table th:not(:first-child){background-color:#ccc;background-color:var(--color9);color:#ea5000;color:var(--color1)}#productPage .details .prix table td,#productPage .details .prix table th{border:1px solid #dfdfdf;border:1px solid var(--color4);text-align:center;padding:8px}#productPage .details .prix table td:first-child,#productPage .details .prix table th:first-child{text-align:left;width:50%}#productPage .details .prix table tr:nth-child(2n){background-color:hsla(0,0%,100%,.267)}#productPage .details .prix table tr:first-child th:first-child{border:none}#productPage .details .caracteristiques{width:55%;padding-top:1.5rem;padding-left:1.5rem;font-weight:300;line-height:1.4rem}#productPage .details .caracteristiques h1,#productPage .details .caracteristiques h2,#productPage .details .caracteristiques h3,#productPage .details .caracteristiques h4{margin-bottom:1.5rem}#productPage .details .caracteristiques h2{font-weight:400;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:1.5rem;margin-right:2rem;cursor:pointer;font-size:1.4rem}#productPage .details .caracteristiques .active:after{content:\"\";position:absolute;height:4px;border-radius:10px;background-color:#ea5000;background-color:var(--color1);width:100%;left:0;bottom:-10px}#productPage .details .caracteristiques .unactive:after{content:\"\";position:absolute;height:4px;border-radius:10px;background-color:#ccc;background-color:var(--color9);width:100%;left:0;bottom:-10px}#productPage .details .caracteristiques .unactive:hover:after{background-color:#ea5000;background-color:var(--color1)}#productPage .details .caracteristiques .unactive{color:#999;color:var(--color3)}#productPage .details .caracteristiques .table--details{border:1px solid #ccc;border:1px solid var(--color9);border-radius:8px}#productPage .details .caracteristiques .table--details td,#productPage .details .caracteristiques .table--details th{border-bottom:1px solid #ccc;border-bottom:1px solid var(--color9);text-align:left;padding:10px;color:#ea5000;color:var(--color1);width:33%;font-weight:500;border-right:1px solid #ccc;border-right:1px solid var(--color9)}#productPage .details .caracteristiques .table--details td:first-child,#productPage .details .caracteristiques .table--details th:first-child{color:#333;font-weight:400}#productPage .details .caracteristiques .table--details td:last-child,#productPage .details .caracteristiques .table--details th:last-child{border-right:0}#productPage .details .caracteristiques .table--details tr:last-child td,#productPage .details .caracteristiques .table--details tr:last-child th{border-bottom:0}@media (max-width:1200px){#productPage .title h1{font-size:1.6rem}#productPage .details .caracteristiques h2{margin-right:.75rem;cursor:pointer;font-size:1.2rem}#productPage .details .prix table{font-size:1rem}#productPage .details .prix .form-zipcode .select-zipcode .vs__selected{font-size:.9rem}}@media (max-width:1000px){#productPage .presentation .fiche{width:50%;flex-direction:column}#productPage .presentation .fiche .images,#productPage .presentation .fiche>.atouts{width:100%}#productPage .presentation .fiche>.atouts>div{display:flex;flex-direction:row}#productPage .presentation .fiche>.atouts>div>div{flex-grow:1;flex:1 1 0px}#productPage .presentation .commande{width:50%}#productPage .details{flex-direction:column-reverse}#productPage .details .prix{width:75%}#productPage .details .prix table{font-size:1.2rem}#productPage .details .prix .form-zipcode .select-zipcode .vs__selected{font-size:1rem}#productPage .details .caracteristiques{width:100%;padding:0;margin-bottom:2rem}}@media (max-width:768px){#productPage .title h1{font-size:1.4rem}#productPage .presentation{flex-direction:column}#productPage .presentation .fiche{width:100%}#productPage .details .prix,#productPage .presentation .commande{width:100%;padding:0}#productPage .details .caracteristiques h2{font-weight:400;font-size:1.1rem;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:1.5rem;margin-right:.5rem;cursor:pointer}}#content{margin-top:2rem;margin-bottom:3rem}#content h1,#content h2{font-size:1.4em;color:#ea5000;color:var(--color1);margin:1rem 0 2rem;font-weight:400;line-height:1.6rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative}#content h1 strong,#content h2 strong{font-weight:600}#content .item-title{position:relative;display:flex;align-items:center}#content .about .item-title:before{content:\"\";height:2px;width:calc(100% + 5rem);left:-5rem;bottom:1.5rem;position:absolute;border-radius:2px;background:#ea5000;background:var(--color1);z-index:1}#content .row-bootstrap .colonne:first-child .item-title:before{left:0;right:-5rem}#content p{line-height:1.6rem;font-weight:300}#content .row-bootstrap .colonne:first-child img{border-bottom-right-radius:40px}#content .row-bootstrap .colonne:last-child img{border-bottom-left-radius:40px}main{display:flex;justify-content:center;width:100%;padding:2rem 0}@media (max-width:1000px){main{justify-content:center}}@media (max-width:575.98px){main{padding:2rem 1rem;justify-content:center}}main #products-list{display:flex;display:grid;margin:2rem 0}#products-list>div,main #products-list{grid-gap:2rem;gap:2rem;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}#products-list>div{display:grid;margin:0}#products-list .card{transition:.7s;border-radius:15px;width:100%;display:flex}#products-list .card.hover:hover{box-shadow:-1px 7px 36px -16px #666;transition:.7s;transform:scale(1.02)}#products-list .card:before{content:\"\";position:absolute;width:0;height:50%;bottom:0;left:50%;background-color:#ea5000;background-color:var(--color1);border-radius:0 0 20px 20px;z-index:-1;transition:.7s}#products-list .card.hover:hover:before{width:calc(100% + 30px);height:60%;left:-15px;bottom:-15px;transition:.7s;box-shadow:-1px 7px 36px -16px #666}#products-list .card .card-content{border:1px solid #dfdfdf;border:1px solid var(--color4);border-radius:15px;width:100%;font-size:1.2rem;line-height:1.35rem;padding:0 10px;color:#ea5000;color:var(--color1);transition:.7s;background-color:#fff;background-color:var(--color2);position:relative;min-height:400px;max-height:400px}#products-list .card .card-content .card-picture{width:100%;display:flex;justify-content:center;overflow:hidden;height:280px;max-height:280px}#products-list .card .card-content .card-picture img{width:auto;max-width:100%;height:280px;max-height:280px}#products-list .card .card-content .sub-title{color:#999;color:var(--color3);font-size:1.2rem;font-weight:300}#products-list .card .card-content .card-form{position:absolute;bottom:10px;width:calc(100% - 20px)}#products-list .card .card-content .card-form .price{text-align:center;margin-bottom:10px}#products-list .card .card-content .card-form span{font-size:1rem;font-weight:300}#products-list .card .card-content .card-form select{margin:20px 0;font-size:1.2rem;font-family:\"Roboto\",sans-serif;font-family:var(--font1);font-weight:500;outline:none;color:#ea5000;color:var(--color1);border:1px solid #dfdfdf;border:1px solid var(--color4);padding:0 10px;width:100%}#products-list .card .card-content .card-form button{background-color:#ea5000;background-color:var(--color1);border:none;margin:10px 0;padding-left:30px;color:#fff;color:var(--color2);font-size:1.2rem;font-weight:300;font-family:\"Roboto\",sans-serif;font-family:var(--font1);border-radius:15px;padding-top:6px;padding-bottom:6px;align-items:center;justify-content:flex-start;width:100%;position:relative}#products-list .card .card-content .card-form button img{width:20px;margin-left:10px}#products-list .card .card-content .card-form button .icone-cart{background-color:#ea5000;background-color:var(--color1);border-radius:20px;padding:5px 10px 5px 0;position:absolute;right:20px;top:0;opacity:1;display:flex;align-items:center;height:100%}#products-list .card .card-content .card-form .move-icone-cart{right:-170px;opacity:0;transition:all .7s cubic-bezier(.79,.17,.83,.61)}#checkout{width:100%;padding:2rem 0}#checkout .wizard-navigation .wizard-icone{margin-bottom:1.5rem;display:flex;justify-content:center;align-items:center;transition:all .3s ease-in-out}#checkout .wizard-navigation .wizard-icone img{width:auto;height:60px}#checkout .wizard-navigation .wizard-icone-unactive{margin-bottom:.5rem;display:flex;justify-content:center;align-items:center;filter:saturate(0) hue-rotate(137deg) opacity(50%) brightness(100%) contrast(100%);transition:all .3s ease-in-out}#checkout .wizard-navigation .wizard-icone-unactive img{width:auto;height:40px;transition:all .3s ease-out}#checkout .wizard-navigation .wizard-tab-content{padding:2rem 0}#checkout .wizard-navigation .wizard-icon-container{background-color:transparent!important}#checkout .wizard-navigation .wizard-icon-circle{border:none!important}#checkout .vue-form-wizard .wizard-card-footer{padding:0}.orders{padding:20px}.orders .list-orders-mobile{display:none;align-items:center;flex-direction:column;font-weight:300}.orders .list-orders-mobile li{padding:10px;width:100%;border-top:1px solid #dfdfdf;border-top:1px solid var(--color4)}.orders .list-orders-mobile .column{margin-left:20px;width:calc(100% - 100px)}.orders .list-orders-mobile p{font-size:.9rem;padding:2.5px 2px}.orders .list-orders-mobile img{width:80px;height:80px}.orders .list-orders-mobile .titre{font-weight:900;color:#ea5000;color:var(--color1)}.orders .list-orders-mobile .quantity-item-change{font-weight:500;color:#ea5000;color:var(--color1);cursor:pointer}.orders .list-orders-mobile .row-sum{font-weight:500}.orders .list-orders{width:100%}.orders .list-orders th{padding:1rem;vertical-align:middle;text-align:left;border:none;background-color:#dfdfdf;background-color:var(--color4);font-weight:500}.orders .list-orders tr:hover{background-color:#d3d3d3}.orders .list-orders tr th:not(:first-child){text-align:center}.orders .list-orders tr th:last-child{text-align:right}.orders .list-orders tr{border-bottom:1px solid #ea5000;border-bottom:1px solid var(--color1)}.orders .list-orders tr td:first-child{display:flex;align-items:center;flex-direction:row}.orders .list-orders tr td{position:relative;padding:1rem 0;vertical-align:middle}.orders .list-orders tr td:first-child>div{width:100%;margin-left:20px;font-size:1rem;font-weight:300;height:100%;color:#000}.orders .list-orders tr td:not(:first-child) p{text-align:center;padding:0 1rem}.orders .list-orders tr td:last-child p{text-align:right;padding:0 1rem}.orders .list-orders .delete-item{position:absolute;left:10%;top:50%;transform:translateY(-50%)}.orders .list-orders tr td img{width:100px}.orders .list-orders tr td h3{color:#ea5000;color:var(--color1);font-size:1.1rem;margin-bottom:.5rem;font-weight:500}.orders .list-orders .delete-item{width:25px;height:25px;margin-left:20px;cursor:pointer}.orders .list-orders .delete-item .mdiv{height:25px;width:2px;margin-left:12px;background-color:#999;background-color:var(--color3);transform:rotate(45deg);z-index:1}.orders .list-orders .delete-item .md{height:25px;width:2px;background-color:#999;background-color:var(--color3);transform:rotate(90deg);z-index:2}.orders .list-orders .delete-item:hover .md,.orders .list-orders .delete-item:hover .mdiv{background-color:#ea5000;background-color:var(--color1)}.orders .list-orders .quantity-item-change{border-radius:20px;height:22px;width:22px;text-align:center;background-color:transparent;transition:.2s;cursor:pointer;padding:0 10px}.orders .list-orders .quantity-item-change:active{background-color:hsla(0,0%,100%,.29412);transition:.2s}.orders .list-orders .quantity-item-delete{width:15px;height:15px;border-radius:0;padding:0}#checkout .cart span.titre{font-size:1.2rem;font-weight:500;color:#ea5000;color:var(--color1)}#checkout .cart .list-article-mobile{display:none;align-items:center;flex-direction:column;font-weight:300}#checkout .cart .list-article-mobile li{padding:10px;width:100%;border-top:1px solid #dfdfdf;border-top:1px solid var(--color4)}#checkout .cart .list-article-mobile .column{margin-left:20px;width:calc(100% - 100px)}#checkout .cart .list-article-mobile p{font-size:.9rem;padding:2.5px 2px}#checkout .cart .list-article-mobile img{width:80px;height:80px}#checkout .cart .list-article-mobile .titre{font-weight:900;color:#ea5000;color:var(--color1)}#checkout .cart .list-article-mobile .quantity-item-change{font-weight:500;color:#ea5000;color:var(--color1);cursor:pointer}#checkout .cart .list-article-mobile .row-sum{font-weight:500}#checkout .cart .list-article{width:100%}#checkout .cart .list-article th{padding:1rem;vertical-align:middle;text-align:left;border:none;background-color:#dfdfdf;background-color:var(--color4);font-weight:500}#checkout .cart .list-article tr th:not(:first-child){text-align:right}#checkout .cart .list-article th:last-child{width:60px}#checkout .cart .list-article tr{border-bottom:1px solid #ea5000;border-bottom:1px solid var(--color1)}#checkout .cart .list-article tr td:first-child{display:flex;align-items:center;flex-direction:row}#checkout .cart .list-article tr td{position:relative;padding:1rem 0;vertical-align:middle}#checkout .cart .list-article tr td:first-child>div{width:100%;margin-left:20px;font-size:1rem;font-weight:300;height:100%;color:#000}#checkout .cart .list-article tr td:not(:first-child) p{text-align:right;padding:0 1rem}#checkout .cart .list-article .delete-item{position:absolute;left:10%;top:50%;transform:translateY(-50%)}#checkout .cart .list-article tr td img{width:100px}#checkout .cart .list-article tr td h3{color:#ea5000;color:var(--color1);font-size:1.1rem;margin-bottom:.5rem;font-weight:500}#checkout .cart .list-article .delete-item{width:25px;height:25px;margin-left:20px;cursor:pointer}#checkout .cart .list-article .delete-item .mdiv{height:25px;width:2px;margin-left:12px;background-color:#999;background-color:var(--color3);transform:rotate(45deg);z-index:1}#checkout .cart .list-article .delete-item .md{height:25px;width:2px;background-color:#999;background-color:var(--color3);transform:rotate(90deg);z-index:2}#checkout .cart .list-article .delete-item:hover .md,#checkout .cart .list-article .delete-item:hover .mdiv{background-color:#ea5000;background-color:var(--color1)}#checkout .cart .list-article .quantity-item-change{border-radius:20px;height:22px;width:22px;text-align:center;background-color:transparent;transition:.2s;cursor:pointer;padding:0 10px}#checkout .cart .list-article .quantity-item-change:active{background-color:hsla(0,0%,100%,.29412);transition:.2s}#checkout .cart .list-article .quantity-item-delete{width:15px;height:15px;border-radius:0;padding:0}#checkout .cart .cart-footer{display:flex;flex-direction:row}#checkout .cart .cart-footer .zone-promo{background-color:#dfdfdf;background-color:var(--color4);width:60%;padding:30px;display:flex;justify-content:flex-end;flex-direction:column;margin-top:1px;max-height:100px;align-items:flex-end;position:relative}#checkout .cart .cart-footer .zone-promo label{margin-bottom:10px}#checkout .cart .cart-footer .zone-promo input{border:none;padding:5px 2px;outline:none;color:#ea5000;color:var(--color1);margin-right:10px;width:187px}#checkout .cart .cart-footer .zone-promo .input{display:flex;flex-direction:row;align-items:center;color:#ea5000;color:var(--color1);position:relative}#checkout .cart .cart-footer .zone-promo .alert-promo{font-size:.8rem;color:#ea5000;color:var(--color1);position:absolute;bottom:-1.6rem;left:-1px;width:calc(100% + 1px)}#checkout .cart .cart-footer .zone-totaux{border-left:1px solid #ea5000;border-left:1px solid var(--color1);width:40%}#checkout .cart .cart-footer .zone-totaux .dashed{border-bottom:1px dashed #ea5000;border-bottom:1px dashed var(--color1)}#checkout .cart .cart-footer .zone-totaux .ligne-total{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:.5rem 1rem;font-weight:300}#checkout .cart .cart-footer .zone-totaux .ligne-subtotal{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:.5rem 1rem;font-weight:500}#checkout .cart .cart-footer .zone-totaux .ligne-total p:last-child{text-align:right}#checkout .cart .cart-footer .zone-totaux .ligne-total-ttc{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:1rem;border-bottom:1px dashed #ea5000;border-bottom:1px dashed var(--color1);background-color:#ea5000;background-color:var(--color1);color:#fff;color:var(--color2);font-size:1.2rem;font-weight:500}#checkout .cart .cart-footer .zone-totaux .ligne-cgv{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;padding:.5rem 1rem;border-bottom:1px solid #ea5000;border-bottom:1px solid var(--color1)}#checkout .cart .cart-footer .zone-totaux .ligne-cgv label{font-size:.9rem;margin-left:20px}#checkout .cart .cart-footer .zone-totaux .ligne-alert{justify-content:flex-start}#checkout .cart .cart-footer .zone-totaux .ligne-alert,#checkout button.valid-cart{display:flex;flex-direction:row;align-items:center;width:100%;padding:.5rem 1rem;background-color:#ea5000;background-color:var(--color1);color:#fff;color:var(--color2)}#checkout button.valid-cart{border:2px solid #ea5000;border:2px solid var(--color1);font-size:1.2rem;text-transform:uppercase;border-radius:10px;font-family:\"Roboto\",sans-serif;font-family:var(--font1);outline:none;cursor:pointer;position:relative;text-align:center;justify-content:center;transition:all .3s ease-in-out}#checkout button.valid-cart:hover{background-color:#fff;background-color:var(--color2);color:#ea5000;color:var(--color1);transition:all .3s ease-in-out;border:2px solid #ea5000;border:2px solid var(--color1)}#checkout button.next-step,#checkout button.prev-step{padding:.5rem 1rem;text-transform:uppercase;border-radius:10px;align-items:center;font-family:\"Roboto\",sans-serif;font-family:var(--font1);outline:none;cursor:pointer;position:relative;display:flex;text-align:center;justify-content:center;flex-direction:row;transition:all .3s ease-in-out}#checkout button.prev-step{background-color:#999;background-color:var(--color3);border:2px solid #999;border:2px solid var(--color3);color:#fff;color:var(--color2);margin-top:calc(-3.5rem - 37px);margin-left:1.5rem}#checkout button.prev-step:hover{background-color:#fff;background-color:var(--color2);color:#ea5000;color:var(--color1);transition:all .3s ease-in-out;border:2px solid #ea5000;border:2px solid var(--color1)}#checkout button.next-step{background-color:#ea5000;background-color:var(--color1);border:2px solid #ea5000;border:2px solid var(--color1);color:#fff;color:var(--color2);font-size:1.2rem}#checkout button.next-step:hover{background-color:#fff;background-color:var(--color2);color:#ea5000;color:var(--color1);transition:all .3s ease-in-out;border:2px solid #ea5000;border:2px solid var(--color1)}#checkout button.next-step img,#checkout button.prev-step img{width:auto;height:15px;margin-right:1rem;filter:invert(93%) sepia(94%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(106%)}#checkout button.next-step img{margin-left:1rem;margin-right:0}#checkout .checkout-alert{border:2px solid #ea5000;border:2px solid var(--color1);color:#ea5000;color:var(--color1);border-radius:10px;padding:.51rem;margin-bottom:1rem}#checkout .checkout-alert.hide{display:none}@media (max-width:575.98px){#checkout{padding:2rem 1rem}#checkout .wizard-progress-with-circle{margin:0 -1rem}#checkout .cart .list-article{display:none!important}#checkout .cart .list-article-mobile{display:flex!important}#checkout .cart .list-article-mobile .row{justify-content:space-between!important}#checkout .cart .cart-footer{flex-direction:column!important}#checkout .cart .cart-footer .zone-promo{width:100%!important;justify-content:flex-start!important;align-items:flex-start!important;padding:30px 20px!important;max-height:none!important}#checkout .cart .cart-footer .zone-promo .alert-promo{font-size:.8rem;color:#ea5000;color:var(--color1);position:absolute;bottom:-1.6rem;width:calc(100vw - 40px)}#checkout .cart .cart-footer .zone-totaux{width:100%!important;border-left:none!important}#checkout .cart .cart-footer .zone-totaux .ligne-cgv{border-right:0!important}}#checkout .identification .half{padding:1.5rem}#checkout .identification .half:first-child{border-radius:40px 0 0 0;background-color:#dfdfdf;background-color:var(--color4)}#checkout .identification .half:last-child{border-radius:0 0 40px 0;border:2px solid #dfdfdf;border:2px solid var(--color4);flex-direction:row;flex-wrap:wrap}#checkout .identification .half:last-child input{width:100%;background-color:#dfdfdf;background-color:var(--color4);border:1px solid #dfdfdf;border:1px solid var(--color4)}#checkout .identification .half:last-child input:focus{background-color:#fff;background-color:var(--color2);border:1px solid #161aad;border:1px solid var(--color8)}#checkout .identification h2{color:#161aad;color:var(--color8);font-size:1.4rem;width:100%;text-align:left;margin-bottom:50px;z-index:1;position:relative}#checkout .identification h2:before{content:\"\";width:60px;height:60px;filter:invert(85%) sepia(32%) saturate(292%) hue-rotate(42deg) brightness(92%) contrast(90%);background-repeat:no-repeat;background-size:cover;z-index:-1;display:inline-block;position:absolute;top:-10px;left:-10px}#checkout .identification span.is-danger{font-size:.8rem;color:#ea5000;color:var(--color1)}#checkout .identification form{display:flex;justify-content:flex-start;flex-direction:column;width:100%}#checkout .identification form input{margin:5px 0;padding:10px;border:1px solid #999;border:1px solid var(--color3);width:100%;outline:none}#checkout .identification form label{text-align:left;width:100%}#checkout .identification form .input-style{display:flex;flex-direction:column;align-items:start;width:100%;margin-bottom:1rem;justify-content:flex-start;text-align:left;position:relative}#checkout .identification .formLogIn h2:before{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}#checkout .identification .formLogIn input{padding-left:45px}#checkout .identification .formLogIn .forgot{width:100%;text-align:right;font-size:.9rem;color:#161aad;color:var(--color8);text-decoration:underline;font-style:italic}#checkout .identification .formLogIn img.inputImg{position:absolute;width:20px;height:20px;z-index:999;top:30px;left:7px;filter:invert(88%) sepia(1%) saturate(0) hue-rotate(5deg) brightness(100%) contrast(99%)}#checkout .identification .formLogIn .btn-guest,#checkout .identification .formLogIn .btn-login{width:100%;display:flex;flex-direction:row;justify-content:center;margin-bottom:1.5rem}#checkout .identification .formLogIn .btn-guest button,#checkout .identification .formLogIn .btn-login button{background-color:#161aad;background-color:var(--color8);color:#fff;color:var(--color2);width:100%;border-radius:5px;align-items:center;outline:none;cursor:pointer;position:relative;display:flex;flex-direction:row;padding:.5rem 1rem;border:2px solid #161aad;border:2px solid var(--color8);font-family:\"Roboto\",sans-serif;font-family:var(--font1);justify-content:center}#checkout .identification .formLogIn .btn-guest button p,#checkout .identification .formLogIn .btn-login button p{padding:0 1rem}#checkout .identification .formLogIn .btn-login button img{width:auto;height:20px;filter:invert(93%) sepia(94%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(106%)}#checkout .identification .formLogIn .btn-guest button:hover,#checkout .identification .formLogIn .btn-login button:hover{background-color:#fff;background-color:var(--color2);color:#161aad;color:var(--color8);border:2px solid #161aad;border:2px solid var(--color8)}#checkout .identification .formLogIn .btn-login button:hover>img{filter:invert(36%) sepia(11%) saturate(7273%) hue-rotate(50deg) brightness(91%) contrast(99%)}#checkout .identification .formLogIn .btn-guest button{background-color:#ccc;background-color:var(--color9);color:#999;color:var(--color3);border:2px solid #999;border:2px solid var(--color3)}#checkout .identification .formLogIn .btn-guest button img{width:auto;height:20px;filter:invert(71%) sepia(4%) saturate(22%) hue-rotate(344deg) brightness(85%) contrast(92%)}#checkout .identification .formSignUp h2:before{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}#checkout .identification .formSignUp .row-cgv{display:flex;justify-content:flex-start;align-content:center;align-items:center}#checkout .identification .formSignUp .row-cgv input{width:auto;margin-right:1rem}#checkout .identification .formSignUp .footer-buttons{justify-content:flex-end}#checkout .identification .formSignUp .btn-signup{width:100%;display:flex;flex-direction:row;justify-content:flex-end}#checkout .identification .formSignUp .btn-signup button{background-color:#fff;background-color:var(--color2);border:2px solid #161aad;border:2px solid var(--color8);color:#161aad;color:var(--color8);border-radius:10px 10px 40px 10px;align-items:center;font-family:\"Roboto\",sans-serif;font-family:var(--font1);outline:none;cursor:pointer;position:relative;display:flex;flex-direction:row;padding:.5rem 1rem;justify-content:center}#checkout .identification .formSignUp .btn-signup button p{padding:0 1rem}#checkout .identification .formSignUp .btn-signup button img{filter:invert(36%) sepia(11%) saturate(7273%) hue-rotate(50deg) brightness(91%) contrast(99%);width:auto;height:20px}#checkout .identification .formSignUp .btn-signup button:hover{background-color:#161aad;background-color:var(--color8);color:#fff;color:var(--color2)}#checkout .identification .formSignUp .btn-signup button:hover>img{filter:invert(93%) sepia(94%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(106%)}@media (max-width:575.98px){#checkout .identification .half{width:100%!important}#checkout .identification h2{font-size:1.2rem!important}#checkout .identification .formSignUp .footer-buttons{flex-direction:column-reverse!important}#checkout .identification .formLogIn .btn-guest,#checkout .identification .formSignUp .btn-signup{width:100%!important}#checkout .identification .formLogIn .btn-guest button,#checkout .identification .formLogIn .btn-login button,#checkout .identification .formSignUp .btn-signup button{max-width:100%!important;margin:0!important}#checkout .identification .formSignUp .btn-signup button{border-radius:10px 10px 40px 10px!important}}#checkout .delivery h2{color:#ea5000;color:var(--color1);font-size:1.4rem;width:100%;text-align:left;margin-bottom:1rem;z-index:1;position:relative}#checkout .delivery h2.title{margin-top:0;margin-bottom:50px}#checkout .delivery h2.title:before{content:\"\";width:70px;height:70px;filter:invert(78%) sepia(18%) saturate(5773%) hue-rotate(312deg) brightness(145%) contrast(101%);background-repeat:no-repeat;background-size:cover;z-index:-1;display:inline-block;position:absolute;top:-15px;left:-25px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}#checkout .delivery span.is-danger{font-size:.8rem;color:#ea5000;color:var(--color1)}#checkout .delivery .half{padding:1.5rem}#checkout .delivery .half:first-child{border-radius:40px 0 0 0;background-color:#dfdfdf;background-color:var(--color4)}#checkout .delivery .half:first-child .cart ul{margin-bottom:1rem}#checkout .delivery .half:first-child .cart ul li{padding:10px 0;border-bottom:2px dotted #ea5000;border-bottom:2px dotted var(--color1)}#checkout .delivery .half:first-child .cart ul li:last-child{border:0}#checkout .delivery .half:last-child{border:2px solid #dfdfdf;border:2px solid var(--color4);border-radius:0 0 40px 0}#checkout .delivery .half .cart .cart-items h3{font-size:1rem;font-weight:500;margin-bottom:.25rem}#checkout .delivery .half .cart .cart-items p{font-size:1rem;font-weight:300;margin-bottom:.25rem}#checkout .delivery .half .cart .cart-items p.price{font-size:1rem;font-weight:500;color:#ea5000;color:var(--color1)}#checkout .delivery .half .cart .cart-items li>div{justify-content:space-between}#checkout .delivery .half .cart .cart-footer{display:flex;flex-direction:column;padding:.5rem;margin:0 -.5rem;color:#fff;color:var(--color2);background-color:#ea5000;background-color:var(--color1);font-weight:300;line-height:1.25rem}#checkout .delivery .half .cart .cart-footer .row-subtotal{font-weight:500}#checkout .delivery .half .cart .cart-footer .row-total{font-size:1.2rem;border-top:2px dotted #fff;border-top:2px dotted var(--color2);padding-top:.5rem;margin-top:.5rem;font-weight:500}#checkout .delivery .half .cart .cart-footer>div{display:flex;align-items:center;justify-content:space-between}#checkout .delivery .formDelivery,#checkout .delivery form .row-bootstrap>[class*=col-]{margin-bottom:1rem}#checkout .delivery form input{background-color:#dfdfdf;background-color:var(--color4);border:1px solid #dfdfdf;border:1px solid var(--color4);margin:5px 0;padding:10px;width:100%;outline:none}#checkout .delivery form input:focus{background-color:#fff;background-color:var(--color2);border:1px solid #ea5000;border:1px solid var(--color1)}#checkout .delivery .footer-buttons{justify-content:flex-end;margin-top:2rem}#checkout .delivery .btn-valid{width:100%;display:flex;flex-direction:row;justify-content:flex-end}#checkout .delivery .btn-valid button{background-color:#ea5000;background-color:var(--color1);border:2px solid #ea5000;border:2px solid var(--color1);color:#fff;color:var(--color2);border-radius:10px 10px 40px 10px;align-items:center;font-family:\"Roboto\",sans-serif;font-family:var(--font1);outline:none;cursor:pointer;position:relative;display:flex;flex-direction:row;padding:.5rem 1rem;justify-content:center;text-transform:uppercase}#checkout .delivery .btn-valid button p{padding:0 1rem}#checkout .delivery .btn-valid button img{filter:invert(93%) sepia(94%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(106%);width:auto;height:20px}#checkout .delivery .btn-valid button:hover{background-color:#fff;background-color:var(--color2);color:#ea5000;color:var(--color1);border:2px solid #ea5000;border:2px solid var(--color1)}#checkout .delivery .btn-valid button:hover>img{filter:invert(37%) sepia(92%) saturate(4009%) hue-rotate(14deg) brightness(100%) contrast(109%)}#checkout .delivery .checkboxes{justify-content:flex-start;color:#999;color:var(--color3);display:flex;flex-direction:row;align-items:center;margin-bottom:1rem}#checkout .delivery .checkboxes:last-child{margin-bottom:20px}#checkout .delivery .checkboxes input{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#checkout .delivery .checkboxes label{width:auto;margin-left:20px;color:#000}#checkout .delivery .depots-items{margin-bottom:30px}#checkout .delivery .depots-items li{padding:1rem;opacity:.5;align-items:center;position:relative}#checkout .delivery .depots-items li:nth-child(odd){background-color:#dfdfdf;background-color:var(--color4)}#checkout .delivery .depots-items li.active:after{content:\"\";width:50px;height:50px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");background-repeat:no-repeat;background-position:100%;background-size:100% auto;top:.5rem;right:1rem;display:block;position:absolute}#checkout .delivery .depots-items li.active,#checkout .delivery .depots-items li:hover{border:1px solid #ea5000;border:1px solid var(--color1);opacity:1}#checkout .delivery .depots-items .radio{width:40px;align-items:center;display:flex;justify-content:center}#checkout .delivery .depots-items li p{line-height:1.2rem;font-weight:300;margin-bottom:.25rem}#checkout .delivery .depots-items li .name{font-size:1.2rem}#checkout .delivery .depots-items li .name,#checkout .delivery .depots-items li .tel{color:#ea5000;color:var(--color1);font-weight:500}#checkout .delivery .depots-items img{width:20px;filter:invert(0) sepia(84%) saturate(7500%) hue-rotate(207deg) brightness(0) contrast(114%);margin-right:10px}@media (max-width:575.98px){#checkout .delivery .half:first-child{display:none}}footer{color:#fff;color:var(--color2)}footer .top-footer{background-color:#161aad;background-color:var(--color5);padding:40px 0 20px;position:relative}footer .top-footer:before{left:-1999px}footer .top-footer:after,footer .top-footer:before{content:\"\";background-color:#161aad;background-color:var(--color5);height:100%;top:0;width:2000px;position:absolute}footer .top-footer:after{right:-1999px}footer .half{width:50%;padding-right:1.5rem}footer .half:first-child{border-right:1px solid #fff;border-right:1px solid var(--color2)}footer .half:last-child{padding-left:1.5rem;padding-right:0}footer .logos{align-items:flex-end;justify-content:space-between;width:80%}footer .logos img{height:80px;width:auto}footer .logos img.logotxt{height:50px;margin-top:10px;margin-left:15px}footer .logos img:nth-child(3){padding-top:20px}footer .logos img.plantons{height:80px;margin-bottom:-5px}footer .site-map{margin-top:50px;margin-bottom:30px}footer .site-map>ul{font-weight:300;flex-grow:1;flex:1 1 0px}footer .site-map ul li.list-title{font-size:1.1rem;font-weight:500}footer .site-map>ul li:not(:first-child){margin-top:10px}footer .site-map ul li a{color:#fff;color:var(--color2)}footer .newsletter{width:80%;margin-bottom:30px}footer .newsletter button,footer .newsletter input{border:none;background-color:#fff;background-color:var(--color2);height:30px;outline:none;margin-top:10px}footer .newsletter input{width:100%;color:#ea5000;color:var(--color1);padding-left:10px}footer .newsletter button{min-height:30px;height:auto;width:60px;display:flex;align-items:center;justify-content:center}footer .newsletter button img{width:25px;filter:invert(37%) sepia(92%) saturate(4009%) hue-rotate(14deg) brightness(100%) contrast(109%)}footer .contact{width:100%;justify-content:space-between}footer .contact:not(:first-child){margin-top:30px}footer .contact a{color:#fff;color:var(--color2)}footer .contact .phone{align-items:flex-end}footer .contact .phone img{width:20px;margin-right:5px}footer .loc-hor{margin-top:15px}footer .loc-hor p{font-weight:300}footer .loc-hor img{width:15px;margin-right:5px}footer .bot-footer{background-color:#161aad;background-color:var(--color6);align-items:center;justify-content:center;font-weight:300;font-size:.9rem;padding:1rem 0;position:relative;width:100%}footer .bot-footer:before{left:-1999px}footer .bot-footer:after,footer .bot-footer:before{content:\"\";background-color:#161aad;background-color:var(--color6);height:100%;top:0;width:2000px;position:absolute}footer .bot-footer:after{right:-1999px}footer .bot-footer img{margin-top:10px;width:300px}footer .bot-footer>p{font-style:italic}footer .bot-footer div{width:100%;justify-content:space-between;margin-top:30px}footer .bot-footer a{color:#fff;color:var(--color2)}footer .bot-footer .credits{display:flex;flex-direction:row}@media (max-width:1000px){footer .top-footer{background-color:#161aad;background-color:var(--color5);padding:40px 0 20px;width:100%}footer .top-footer.flex{flex-direction:column}footer .half{width:100%}footer .half:last-child{padding:0!important}footer .site-map>ul{width:50%}footer .site-map>ul:first-child{margin-right:0}footer .half:first-child{border-right:0;border-bottom:1px solid #fff;border-bottom:1px solid var(--color2);margin-bottom:30px;padding-right:0}footer .logos{height:70px;align-items:flex-end;justify-content:space-between;width:100%}footer .contact{width:100%}footer .contact .phone .list-title{font-size:1.2rem;padding-bottom:0}footer .loc-hor p{font-weight:300;font-size:.9rem}footer .newsletter{width:100%;margin-bottom:30px}footer .newsletter input{width:100%;height:30px}footer .bot-footer,footer .top-footer{padding:20px 10px}footer .bot-footer .flex{flex-direction:column;font-size:.9rem}footer .bot-footer .credits{flex-direction:column;font-size:.8rem;line-height:1rem;text-align:center}footer .bot-footer .credits a{margin-top:10px}footer .bot-footer .flex p{margin-bottom:10px}}@media (max-width:1200px){footer .flex.contact{flex-direction:column}footer .flex.phone{margin-top:15px}}@media (max-width:1090px){footer .half:last-child{padding-left:30px}}#sidebar-cart{width:100vw;height:100vh;position:absolute;right:-100%;top:0;z-index:9999999;background-color:rgba(61,61,61,.678);display:none}#sidebar-cart #sidebar-outside{width:calc(100% - 373px);position:absolute;top:0;left:0;height:100vh}#sidebar-cart .sidebar-content{width:373px;height:100%;background-color:#ea5000;background-color:var(--color1);right:0;top:0;position:absolute;color:#fff;color:var(--color2);transition:cubic-bezier(.08,.33,.13,.99)}#sidebar-cart .sidebar-content .sidebar-header{padding:1rem;display:flex;align-items:center;justify-content:space-between;font-size:1.1rem;border-bottom:1px solid hsla(0,0%,100%,.33333)}#sidebar-cart .sidebar-content .sidebar-header>div:first-child{display:flex;align-items:center;justify-content:flex-start}[dir=ltr] #sidebar-cart .sidebar-content .sidebar-header>div{text-align:right}[dir=rtl] #sidebar-cart .sidebar-content .sidebar-header>div{text-align:left}#sidebar-cart .sidebar-content .sidebar-header>div{justify-content:flex-end}#sidebar-cart .sidebar-content .sidebar-header img{width:30px;margin-left:-5px}#sidebar-cart .sidebar-content .sidebar-details{padding:1rem;height:calc(100vh - 163px);overflow-y:scroll}#sidebar-cart .sidebar-content .sidebar-details h2{font-weight:400;font-size:1rem;text-transform:uppercase;margin-bottom:1rem}#sidebar-cart .sidebar-content .sidebar-details h2:not(:first-child){margin-top:2rem;font-weight:400;font-size:1rem}#sidebar-cart .sidebar-content .sidebar-details .mode-commande>.flex{margin-top:.5rem}#sidebar-cart .sidebar-content .sidebar-details .mode-commande label{margin-left:10px}#sidebar-cart .sidebar-content .sidebar-details .mode-commande input[type=radio]:after{width:15px;height:15px;border-radius:15px;top:-2px;left:-1px;position:relative;background-color:#fff;background-color:var(--color2);content:\"\";display:inline-block;visibility:visible;border:2.5px solid #fff}#sidebar-cart .sidebar-content .sidebar-details .mode-commande input[type=radio]:checked:after{width:15px;height:15px;border-radius:15px;top:-2px;left:-1px;position:relative;background-color:grey;content:\"\";display:inline-block;visibility:visible;border:2.5px solid #fff;border:2.5px solid var(--color2)}#sidebar-cart .sidebar-content .sidebar-details .mode-commande select{margin-top:.25rem}#sidebar-cart .sidebar-content .sidebar-details .list-items{font-size:.9rem;font-weight:300}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li{padding:.5rem 0;transition:all 1s;border-bottom:1px solid hsla(0,0%,100%,.31373)}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .name{font-size:1rem;font-weight:500}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .picture{display:flex;align-items:center}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .picture img{width:70px;height:70px;border-radius:7px;display:flex;align-items:center}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li:hover{transition:all 1s;background-color:hsla(0,0%,100%,.21961)}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .column{padding-left:10px;position:relative;width:100%}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .flex{justify-content:space-between;width:100%;margin-top:.25rem}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .flex:last-child{margin-top:.5rem}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .flex .quantity{display:flex;justify-content:flex-end;align-items:center}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .flex.row-sum p{font-weight:500}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .flex p.quantityNum{margin:0 10px}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .flex p.button{border:1px solid #fff;border:1px solid var(--color2);border-radius:15px;width:17px;height:17px;text-align:center;padding-top:1px;background-color:transparent;transition:.2s}#sidebar-cart .sidebar-content .sidebar-details .list-items ul li .flex p.button:active{background-color:hsla(0,0%,100%,.29412);transition:.2s}#sidebar-cart .sidebar-content .sidebar-details .total{justify-content:space-between;margin-top:1rem}#sidebar-cart .sidebar-content .siderbar-footer{display:flex;flex-direction:column;padding:.5rem 1rem;border-top:1px solid hsla(0,0%,100%,.33333)}#sidebar-cart button img{width:20px}#sidebar-cart .siderbar-footer button{margin:0;font-size:1rem;text-transform:uppercase;border-radius:10px;font-family:\"Roboto\",sans-serif;font-family:var(--font1);outline:none;cursor:pointer;border:none;position:relative;align-items:center;justify-content:center;width:100%}#sidebar-cart .siderbar-footer button.checkout{background-color:#fff;background-color:var(--color2);border:1px solid #fff;border:1px solid var(--color2);color:#ea5000;color:var(--color1);justify-content:center;margin-bottom:.5rem;padding:.5rem 1rem}#sidebar-cart .siderbar-footer button.continue{background-color:#ea5000;background-color:var(--color1);border:1px solid #fff;border:1px solid var(--color2);color:#fff;color:var(--color2);width:100%;margin-bottom:0;padding:.5rem 1rem;opacity:.75}#sidebar-cart .siderbar-footer button.checkout img{margin-left:.5rem;filter:invert(37%) sepia(92%) saturate(4009%) hue-rotate(14deg) brightness(100%) contrast(109%)}#sidebar-cart .siderbar-footer button.continue img{margin-right:.5rem;filter:invert(93%) sepia(94%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(106%)}#sidebar-cart .siderbar-footer button.disabled{opacity:.25}#sidebar-cart .checkout-alert{border:1px solid #fff;border:1px solid var(--color2);color:#fff;color:var(--color2);border-radius:10px;padding:.51rem;margin-bottom:.5rem;text-align:center;font-size:.9rem;font-style:italic}@-webkit-keyframes slideIn{0%{background-color:transparent;right:-100%}50%{right:0;background-color:transparent}to{background-color:rgba(61,61,61,.678);right:0}}@keyframes slideIn{0%{background-color:transparent;right:-100%}50%{right:0;background-color:transparent}to{background-color:rgba(61,61,61,.678);right:0}}@-webkit-keyframes slideOut{0%{background-color:rgba(61,61,61,.678);right:0}50%{right:0;background-color:transparent}to{background-color:transparent;right:-100%;display:none}}@keyframes slideOut{0%{background-color:rgba(61,61,61,.678);right:0}50%{right:0;background-color:transparent}to{background-color:transparent;right:-100%;display:none}}@media (max-width:575.98px){#compte .main-slide-panier{padding:20px 15px;overflow-y:scroll;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-height:90vh}}#compte{width:100vw;overflow:hidden;right:-100%;z-index:9999999;background-color:rgba(61,61,61,.678);display:none}#compte,#compte #bg-compte{height:100vh;position:absolute;top:0}#compte #bg-compte{width:calc(100% - 373px);left:0}#compte .content{width:373px;height:100%;background-color:#161aad;background-color:var(--color6);right:0;top:0;position:absolute;color:#fff;color:var(--color2);transition:cubic-bezier(.08,.33,.13,.99)}#compte .top-panier{padding:20px;align-items:center;justify-content:space-between;font-size:1.1rem;border-bottom:1px solid hsla(0,0%,100%,.33333)}.top-panier img{width:30px}.panier-titre img{width:20px;outline:none;transition:.5s}#compte .affInscr{cursor:pointer}.main-slide-panier{padding:20px 15px}#compte form .row{margin-top:10px}#compte h2{font-weight:400;font-size:1.4rem}#compte form:last-child{margin-top:30px;position:relative}#compte .is-danger{color:#a13333;font-weight:400;position:absolute;bottom:-15px;left:20px;font-size:.8rem}#compte #inscription.closedInscr{margin-top:15px;visibility:hidden;opacity:1;position:absolute;top:100%;left:0;width:100%;transform:translateY(-2.5em);z-index:100;transition:all .3s ease-in-out 0s}#compte #inscription.openedInscr{margin-top:15px;visibility:visible;opacity:1;z-index:1;transform:translateY(0);transition-delay:0s,0s,.3s;transition:all .3s ease-in-out 0s}#compte form .row{justify-content:space-between;align-items:center}#compte input{padding:5px 0 5px 10px;outline:none;border:none;border-radius:3px;color:#161aad;color:var(--color6);width:158px;margin-top:10px}#compte form .row label{margin-left:10px}#compte .articles img{width:70px;height:70px;border-radius:7px}#compte button{margin:20px 20px 0;padding:5px;border-radius:15px;align-items:center;font-family:\"Roboto\",sans-serif;font-family:var(--font1);outline:none;cursor:pointer;border:none;background-color:#fff;background-color:var(--color2);color:#161aad;color:var(--color6);font-size:1rem}.page-produit .carousel-gris{background-color:#dfdfdf;background-color:var(--color4);padding:30px 3vw;width:100vw;margin-top:30px}@media (max-width:575.98px){span.stepTitle{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user-lock.a3f8f1d.svg";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0yNTYgMGMtMTA4LjgxIDAtMTk3LjMzMyA4OC41MjMtMTk3LjMzMyAxOTcuMzMzIDAgNjEuMTk4IDMxLjY2NSAxMzIuMjc1IDk0LjExNiAyMTEuMjU3IDQ1LjY5NyA1Ny43OTQgOTAuNzM2IDk3LjczNSA5Mi42MzEgOTkuNDA3IDYuMDQ4IDUuMzM2IDE1LjEyMyA1LjMzNyAyMS4xNzIgMCAxLjg5NS0xLjY3MiA0Ni45MzQtNDEuNjEzIDkyLjYzMS05OS40MDcgNjIuNDUxLTc4Ljk4MiA5NC4xMTYtMTUwLjA1OSA5NC4xMTYtMjExLjI1NyAwLTEwOC44MS04OC41MjMtMTk3LjMzMy0xOTcuMzMzLTE5Ny4zMzN6bTAgNDc0LjE3MWMtMzguMDI1LTM2LjIzOC0xNjUuMzMzLTE2NS44NzUtMTY1LjMzMy0yNzYuODM4IDAtOTEuMTY1IDc0LjE2OC0xNjUuMzMzIDE2NS4zMzMtMTY1LjMzM3MxNjUuMzMzIDc0LjE2OCAxNjUuMzMzIDE2NS4zMzNjMCAxMTAuOTYzLTEyNy4zMSAyNDAuNjAyLTE2NS4zMzMgMjc2LjgzOHoiLz48cGF0aCBkPSJtMzc4LjQxMyAxODcuODUyLTExMi05NmMtNS45OTItNS4xMzYtMTQuODMzLTUuMTM2LTIwLjgyNSAwbC0xMTIgOTZjLTYuNzA5IDUuNzUtNy40ODYgMTUuODUyLTEuNzM1IDIyLjU2MXMxNS44NTIgNy40ODYgMjIuNTYxIDEuNzM1bDEzLjU4Ni0xMS42NDZ2NzkuNDk4YzAgOC44MzYgNy4xNjQgMTYgMTYgMTZoMTQ0YzguODM2IDAgMTYtNy4xNjQgMTYtMTZ2LTc5LjQ5OGwxMy41ODcgMTEuNjQ2YzYuNzM5IDUuNzc3IDE2LjgzNiA0Ljk0NCAyMi41NjEtMS43MzUgNS43NTEtNi43MDkgNC45NzQtMTYuODEtMS43MzUtMjIuNTYxem0tNjYuNDEzIDc2LjE0OGgtMTEydi05MC45MjdsNTYtNDggNTYgNDh6Ii8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("f24fcd88", content, true)

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row-bootstrap{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:none}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:none}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:none}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:none}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.row-bootstrap{margin-right:-15px;margin-left:-15px}.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.ql-align-center{text-align:center!important}.ql-align-left{text-align:left!important}.ql-align-right{text-align:right!important}.ql-size-small{font-size:.8rem!important}.ql-size-normal{font-size:1rem!important}.ql-size-large{font-size:1.4rem!important}.ql-size-huge{font-size:2rem!important}img{height:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cancel.19d48b0.svg";

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Popup_vue_vue_type_style_index_0_id_109196a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Popup_vue_vue_type_style_index_0_id_109196a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Popup_vue_vue_type_style_index_0_id_109196a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Popup_vue_vue_type_style_index_0_id_109196a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Popup_vue_vue_type_style_index_0_id_109196a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-mask[data-v-109196a5]{position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;overflow-y:hidden;webkit-transform:translateZ(0);background-color:rgba(0,0,0,.5);display:flex;transition:opacity .3s ease}.modal-wrapper[data-v-109196a5]{display:flex;margin:auto;max-width:760px;padding:64px;width:100%}.modal-container[data-v-109196a5]{display:flex;margin:0 auto;background-color:var(--color2);border-radius:15px;border-bottom-right-radius:40px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease;color:#35495e;position:relative}.close-btn[data-v-109196a5]{position:absolute;right:-10px;top:-10px;height:30px;width:30px;cursor:pointer;outline:none;font-size:20px;color:#35495e;border-width:0;border-radius:5px;display:flex;align-items:center;background-color:var(--color1);transition:all .5s}.close-btn[data-v-109196a5]:hover{transition:all .5s;transform:scale(1.1)}.modal-subcontainer[data-v-109196a5]{display:flex;flex-direction:column;justify-content:center;width:100%;padding:20px;min-width:404.48px}.modal-enter[data-v-109196a5],.modal-leave-active[data-v-109196a5]{opacity:0}.modal-enter .modal-container[data-v-109196a5],.modal-leave-active .modal-container[data-v-109196a5]{transform:scale(1.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{font-family:\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:var(--color2);background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:var(--color2);background-color:#35495e}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var cookieparser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var cookieparser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookieparser__WEBPACK_IMPORTED_MODULE_0__);

const actions = {
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    let user = null; // let cart = []

    let optionLivraison = {};

    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.headers.cookie);
      user = parsed.user && JSON.parse(parsed.user) || null;
      optionLivraison = parsed.optionLivraison && JSON.parse(parsed.optionLivraison) || {};
    }

    commit('auth/setUser', user);
    commit('optionLivraison/setOptionLivraison', optionLivraison);
  }

};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
 // Defining an empty state

const state = () => {}; // Create a mutation that set a user to your state and in a 'user' cookie

const mutations = {
  setUser(state, user) {
    state.user = user;
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('user', user);
  },

  logout(state) {
    state.user = null;
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('user', null);
  }

};
const getters = {
  username: state => {
    if (state.user && state.user.lastName && state.user.firstName && state.user.type != 'guest') {
      return state.user.firstName + " " + state.user.lastName;
    } else {
      return null;
    }
  },
  user: state => {
    console.log(state);
    return state.user;
  }
};

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  items: [],
  discountCode: {
    type: null,
    amount: null,
    minAmount: null
  }
});
const mutations = {
  setItems(state, items) {
    state.items = items;
  },

  setDiscountCode(state, discountCode) {
    state.discountCode = discountCode;
  },

  removeDiscountCode(state) {
    state.discountCode = {
      type: null,
      amount: null,
      minAmount: null
    };
  },

  add(state, item) {
    const record = state.items.find(i => i.id === item.id);

    if (!record) {
      var data = item;
      data.itemQuantity = 1;
      state.items.push(data);
    } else {
      record.itemQuantity++;
    }
  },

  remove(state, item) {
    const record = state.items.find(i => i.id === item.id && i.conditionnement === item.conditionnement);

    if (record.itemQuantity > 1) {
      record.itemQuantity--;
    } else {
      const index = state.items.findIndex(i => i.id === item.id && i.conditionnement === item.conditionnement);
      state.items.splice(index, 1);
    }
  },

  delete(state, item) {
    const index = state.items.findIndex(i => i.id === item.id && i.conditionnement === item.conditionnement);
    state.items.splice(index, 1);
  },

  emptyList(state) {
    state.items = [];
  }

};
const getters = {
  items: state => {
    return state.items;
  },
  discountCode: state => {
    return state.discountCode;
  },
  itemPrice: state => item => {
    var optionLivraison = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('optionLivraison') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('optionLivraison')) : {
      mode: "retrait"
    };
    var price = 0;

    if (optionLivraison.mode == "retrait") {
      price = parseFloat(item.fields.Prix.toString().replace(/,/, '.'));
    }

    return parseFloat(price).toFixed(2);
  },
  price: state => {
    var optionLivraison = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('optionLivraison') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('optionLivraison')) : {
      mode: "retrait"
    };
    var price = 0;

    for (let i = 0; i < state.items.length; i++) {
      const item = state.items[i];

      if (optionLivraison.mode == "retrait") {
        price += parseFloat(item.fields.Prix.toString().replace(/,/, '.')) * item.itemQuantity;
      }
    }

    return parseFloat(price).toFixed(2);
  },
  numberOfItems: state => {
    return state.items.reduce((accumulator, item) => accumulator + item.itemQuantity, 0);
  }
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
const state = () => ({
  location: {},
  deliveryAddress: {}
});
const mutations = {
  setLocation(state, location) {
    state.location = location;
  },

  removeLocation(state) {
    state.location = {};
  },

  setDeliveryAddress(state, deliveryAddress) {
    state.deliveryAddress = deliveryAddress;
  }

};
const getters = {
  location: state => {
    return state.location;
  },
  deliveryAddress: state => {
    return state.deliveryAddress;
  }
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
 // Defining an empty state

const state = () => ({
  optionLivraison: {}
});
const mutations = {
  setOptionLivraison(state, optionLivraison) {
    state.optionLivraison = optionLivraison;
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('optionLivraison', optionLivraison);
  },

  setLivraisonMode(state, mode) {
    if (mode == 'livraison' || mode == 'retrait') {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('optionLivraison') == undefined) {
        optionLivraison = {
          mode: mode,
          zone: null
        };
      } else {
        var optionLivraison = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('optionLivraison'));
      }

      optionLivraison.mode = mode;
      state.optionLivraison = optionLivraison;
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('optionLivraison', optionLivraison);
    }
  },

  removeOptionLivraison(state) {
    state.optionLivraison = {};
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('optionLivraison', {});
  }

};
const getters = {
  optionLivraison: state => {
    return state.optionLivraison;
  }
};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  isVisible: false,
  modalMode: '',
  props: null
});
const getters = {
  isVisible: state => state.isVisible,
  getMode: state => state.modalMode,
  getProps: state => state.props
};
const actions = {
  show: ({
    commit
  }) => {
    return new Promise(resolve => {
      commit('show');
      resolve();
    });
  },
  hide: ({
    commit
  }) => {
    return new Promise(resolve => {
      commit('hide');
      resolve();
    });
  },
  changeMode: ({
    commit
  }, {
    mode,
    props
  }) => {
    return new Promise(resolve => {
      commit('changemode', {
        mode,
        props
      });
      resolve();
    });
  }
};
const mutations = {
  show: state => {
    state.isVisible = true;
  },
  hide: state => {
    state.isVisible = false;
    state.modalMode = '';
  },
  changemode: (state, {
    mode,
    props
  }) => {
    state.modalMode = mode;
    state.props = props;
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("node-js-marker-clusterer");

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_GMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_GMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_GMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_GMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_GMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".GMap__Wrapper{width:100%;height:400px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de": 30,
	"./de.js": 30,
	"./en": 14,
	"./en.js": 14,
	"./es": 31,
	"./es.js": 31,
	"./fr": 32,
	"./fr.js": 32,
	"./hr": 33,
	"./hr.js": 33,
	"./hu": 34,
	"./hu.js": 34,
	"./it": 35,
	"./it.js": 35,
	"./ja": 36,
	"./ja.js": 36,
	"./no": 37,
	"./no.js": 37,
	"./pt": 38,
	"./pt.js": 38
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 88;

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(5);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(39);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(40);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(17);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(13);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(18);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _28f2a1ef = () => interopDefault(__webpack_require__.e(/* import() | pages/checkout/index */ 17).then(__webpack_require__.bind(null, 208)));

const _08058dc6 = () => interopDefault(__webpack_require__.e(/* import() | pages/commandes/index */ 19).then(__webpack_require__.bind(null, 209)));

const _8aba8726 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact/index */ 20).then(__webpack_require__.bind(null, 210)));

const _13431982 = () => interopDefault(__webpack_require__.e(/* import() | pages/panier/index */ 23).then(__webpack_require__.bind(null, 211)));

const _138d3f93 = () => interopDefault(__webpack_require__.e(/* import() | pages/produits/index */ 25).then(__webpack_require__.bind(null, 212)));

const _b1619916 = () => interopDefault(__webpack_require__.e(/* import() | pages/panier/LineChart */ 22).then(__webpack_require__.bind(null, 121)));

const _1a3f64e7 = () => interopDefault(__webpack_require__.e(/* import() | pages/categories/_route */ 16).then(__webpack_require__.bind(null, 213)));

const _0def6ca4 = () => interopDefault(__webpack_require__.e(/* import() | pages/commandes/_id */ 18).then(__webpack_require__.bind(null, 214)));

const _351cca4e = () => interopDefault(__webpack_require__.e(/* import() | pages/produits/_route */ 24).then(__webpack_require__.bind(null, 215)));

const _141864c8 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 21).then(__webpack_require__.bind(null, 216)));

const _4fdccdf0 = () => interopDefault(__webpack_require__.e(/* import() | pages/_route */ 15).then(__webpack_require__.bind(null, 207)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/checkout",
    component: _28f2a1ef,
    name: "checkout"
  }, {
    path: "/commandes",
    component: _08058dc6,
    name: "commandes"
  }, {
    path: "/contact",
    component: _8aba8726,
    name: "contact"
  }, {
    path: "/panier",
    component: _13431982,
    name: "panier"
  }, {
    path: "/produits",
    component: _138d3f93,
    name: "produits"
  }, {
    path: "/panier/LineChart",
    component: _b1619916,
    name: "panier-LineChart"
  }, {
    path: "/categories/:route?",
    component: _1a3f64e7,
    name: "categories-route"
  }, {
    path: "/commandes/:id",
    component: _0def6ca4,
    name: "commandes-id"
  }, {
    path: "/produits/:route",
    component: _351cca4e,
    name: "produits-route"
  }, {
    path: "/",
    component: _141864c8,
    name: "index"
  }, {
    path: "/:route",
    component: _4fdccdf0,
    name: "route"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ce5c3354"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "2248a60a"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/nuxt-cookie-control/lib/styles.scss
var styles = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/default.vue?vue&type=template&id=5c1c3084&
var defaultvue_type_template_id_5c1c3084_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper-content"},[_c('Header'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('CookieControl',{attrs:{"locale":"fr"}}),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('Popup',{directives:[{name:"show",rawName:"v-show",value:(_vm.popupVisible),expression:"popupVisible"}],attrs:{"closeBtn":_vm.popupMode != 'Location'}},[_c(_vm.popupMode,{tag:"component",attrs:{"slot":"body","props":_vm.getProps},slot:"body"})],1)],2)}
var defaultvue_type_template_id_5c1c3084_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=5c1c3084&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/Header.vue?vue&type=template&id=daf5c8f0&scoped=true&
var Headervue_type_template_id_daf5c8f0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div id=\"header\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"top-header\" data-v-daf5c8f0><div class=\"green-bar\" data-v-daf5c8f0></div> <div class=\"top-header-content\" data-v-daf5c8f0><div class=\"col-start\" data-v-daf5c8f0><h3 data-v-daf5c8f0>Entreprise <span data-v-daf5c8f0>familiale</span> depuis <span data-v-daf5c8f0>1955</span></h3></div> <div class=\"col-end\" data-v-daf5c8f0><div class=\"tel\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt=\"phone\" class=\"phone\" data-v-daf5c8f0> <p data-v-daf5c8f0>06 19 02 80 80</p></div></div></div></div> "),_vm._ssrNode("<div class=\"top-header-mobile\" style=\"display:none\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div data-v-daf5c8f0>","</div>",[_vm._ssrNode("<input type=\"checkbox\" name=\"menuBurger\""+(_vm._ssrAttr("checked",Array.isArray(_vm.sidebarMenu)?_vm._i(_vm.sidebarMenu,null)>-1:(_vm.sidebarMenu)))+" data-v-daf5c8f0> <span data-v-daf5c8f0></span> <span data-v-daf5c8f0></span> <span data-v-daf5c8f0></span> "),_vm._ssrNode("<div class=\"toggle-content\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<p data-v-daf5c8f0>Catégories</p> "),_vm._l((_vm.menu),function(item,i){return _vm._ssrNode("<p data-v-daf5c8f0>","</p>",[_c('NuxtLink',{attrs:{"to":item.link.split('-')[0] == 'categorie' ? '/categories/'+_vm.slug_to_url(item.link): item.link}},[_vm._v(_vm._s(item.name.toUpperCase()))])],1)})],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"scroll\" class=\"top-menu\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div data-v-daf5c8f0></div> "),_vm._ssrNode("<div data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"div-logo\" data-v-daf5c8f0>","</div>",[_c('NuxtLink',{staticStyle:{"display":"flex","align-items":"center"},attrs:{"to":'/',"title":"Retour à la page d'accueil"}},[_c('img',{staticClass:"logo-basic",attrs:{"src":__webpack_require__(60),"alt":"logo basique"}})])],1)]),_vm._ssrNode(" <div data-v-daf5c8f0>"+((!_vm.$nuxt.$route.path.includes('checkout'))?("<div class=\"header-items flex justify-end align-items-center align-center\" data-v-daf5c8f0><div id=\"panier-btn\" class=\"column\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt=\"panier\" class=\"svg-color1\" style=\"cursor: pointer\" data-v-daf5c8f0> <p data-v-daf5c8f0>MON PANIER</p></div> <div id=\"compte-btn\" class=\"column\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt=\"compte\" class=\"svg-color7\" style=\"cursor: pointer\" data-v-daf5c8f0> <p data-v-daf5c8f0>COMPTE</p></div></div>"):"<!---->")+"</div>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"menu-header\" style=\"z-index: 99999\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"logo-nav\" data-v-daf5c8f0>","</div>",[_c('NuxtLink',{attrs:{"to":'/',"title":"Retour à la page d'accueil"}},[_c('img',{staticClass:"logo-basic svg-color0",attrs:{"src":__webpack_require__(61),"alt":"logo basique"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<ul data-v-daf5c8f0>","</ul>",[_vm._ssrNode("<div style=\"display: contents\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<li data-v-daf5c8f0>","</li>",[_c('NuxtLink',{attrs:{"to":'/categories/pare-douche'}},[_vm._v("PARE DOUCHE")])],1),_vm._ssrNode(" <li class=\"separation\" data-v-daf5c8f0></li> "),_vm._ssrNode("<li data-v-daf5c8f0>","</li>",[_c('NuxtLink',{attrs:{"to":'/categories/cloisons-parois'}},[_vm._v("CLOISONS OU PAROIS")])],1),_vm._ssrNode(" <li class=\"separation\" data-v-daf5c8f0></li> "),_vm._ssrNode("<li data-v-daf5c8f0>","</li>",[_c('NuxtLink',{attrs:{"to":'/categories/inserts-de-cheminee'}},[_vm._v("INSERTS DE CHEMINÉE")])],1)],2)]),_vm._ssrNode(" "+((!_vm.$nuxt.$route.path.includes('checkout'))?("<div class=\"stick-items\" data-v-daf5c8f0><div class=\"cart\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt=\"panier\" class=\"svg-color1\" style=\"cursor: pointer\" data-v-daf5c8f0></div> <div class=\"account\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt=\"compte\" class=\"svg-color7\" style=\"cursor: pointer\" data-v-daf5c8f0></div></div>"):"<!---->"))],2)]),_vm._ssrNode(" <ul class=\"bandeau\" data-v-daf5c8f0><li class=\"row\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt=\"spécialistes\" data-v-daf5c8f0> <p data-v-daf5c8f0><span data-v-daf5c8f0>Leader</span><br data-v-daf5c8f0>\n          dans la fabrication et la distribution en magasins de produits en\n          verre techniques et décoratifs.\n        </p></li></ul> "),_vm._ssrNode("<div id=\"sidebar-cart\""+(_vm._ssrStyle(null,'top:'+_vm.scrollY+'px', null))+" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div id=\"sidebar-outside\" data-v-daf5c8f0></div> "),_vm._ssrNode("<div class=\"sidebar-content\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"sidebar-header\" data-v-daf5c8f0><div data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(20)))+" alt=\"panier\" data-v-daf5c8f0> <div data-v-daf5c8f0>MON PANIER</div></div> <div data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.ttcTotalProductPrice)+"€ TTC")+"</div></div> "),_vm._ssrNode("<div class=\"sidebar-details\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<h2 data-v-daf5c8f0>Mode de commande</h2> "),_vm._ssrNode("<div class=\"mode-commande\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"flex\" data-v-daf5c8f0><input type=\"radio\" id=\"depot\" name=\"mode-commande\" value=\"depot\" checked=\"checked\" data-v-daf5c8f0> <label for=\"depot\" data-v-daf5c8f0>Retrait en dépôt</label></div> "),(_vm.deliveryMode == 'depot')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.deliveryAgency),expression:"deliveryAgency"}],attrs:{"name":"lieu","id":"lieu"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.deliveryAgency=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.depots),function(element,index){return _c('option',{key:index},[_vm._v(_vm._s(element))])}),0):_vm._e()],2),_vm._ssrNode(" <h2 data-v-daf5c8f0>Vos produits</h2> "+((_vm.selectedItems.length == 0)?("<div class=\"checkout-alert\" data-v-daf5c8f0><p data-v-daf5c8f0>Votre panier est actuellement vide.</p></div>"):"<!---->")+" "+((_vm.$store.getters['optionLivraison/optionLivraison'].mode == 'livraison' && _vm.totalPrice() < parseFloat(_vm.$store.getters['optionLivraison/optionLivraison'].zone.minAmount))?("<div class=\"checkout-alert\" data-v-daf5c8f0><p data-v-daf5c8f0>Votre panier doit atteindre le montant minimum de <b data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.$store.getters['optionLivraison/optionLivraison'].zone.minAmount+'€'))+"</b> pour être livré dans cette zone.</p></div>"):"<!---->")+" <div class=\"list-items\" data-v-daf5c8f0><ul data-v-daf5c8f0>"+(_vm._ssrList((_vm.selectedItems),function(item,index){return ("<li class=\"row\" data-v-daf5c8f0><div class=\"picture\" data-v-daf5c8f0>"+((item.fields.Image.length>0)?("<img"+(_vm._ssrAttr("src",item.fields.Image[0].url))+" alt data-v-daf5c8f0>"):"<!---->")+"</div> <div class=\"column\" data-v-daf5c8f0><p class=\"name\" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(item.fields.Nom))+"</p> <div class=\"flex\" data-v-daf5c8f0><p data-v-daf5c8f0>Quantité :</p> <div class=\"quantity\" data-v-daf5c8f0><p class=\"button\" style=\"cursor: pointer;\" data-v-daf5c8f0>-</p> <p class=\"quantityNum\" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(item.itemQuantity))+"</p> <p class=\"button\" style=\"cursor: pointer;\" data-v-daf5c8f0>+</p></div></div> <div class=\"flex row-sum\" data-v-daf5c8f0><p data-v-daf5c8f0>Prix :  </p> <p data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s((_vm.getItemPrice(item)*item.itemQuantity).toFixed(2).replace(".",","))+"€")+"</p></div></div></li>")}))+"</ul></div> "+((_vm.selectedItems.length > 0)?("<div class=\"flex total\" data-v-daf5c8f0><p data-v-daf5c8f0>TOTAL TTC</p> <p data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.ttcTotalProductPrice)+"€")+"</p></div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"siderbar-footer\" data-v-daf5c8f0>","</div>",[_c('NuxtLink',{attrs:{"to":"/checkout"}},[_c('button',{staticClass:"flex checkout",class:_vm.selectedItems.length == 0 ? 'disabled':'',attrs:{"disabled":_vm.$store.getters['optionLivraison/optionLivraison'].mode == 'livraison' && _vm.totalPrice() < parseFloat(_vm.$store.getters['optionLivraison/optionLivraison'].zone.minAmount)},on:{"click":function($event){return _vm.closePanel('sidebar-cart')}}},[_c('p',[_vm._v("Commander maintenant")]),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(19)}})])]),_vm._ssrNode(" <button class=\"flex continue\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" data-v-daf5c8f0> <p data-v-daf5c8f0>Continuer mes achats</p></button>")],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"compte\""+(_vm._ssrStyle(null,'top:'+_vm.scrollY+'px', null))+" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div id=\"bg-compte\" data-v-daf5c8f0></div> "),_vm._ssrNode("<div class=\"content\" style=\"overflow: scroll\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"top-panier row\" data-v-daf5c8f0><img"+(_vm._ssrAttr("src",__webpack_require__(20)))+" alt=\"panier\" class=\"close-compte\" style=\"cursor:pointer\" data-v-daf5c8f0> <p data-v-daf5c8f0>MON COMPTE</p> <img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt=\"logout\" style=\"cursor:pointer\" data-v-daf5c8f0></div> "),_vm._ssrNode("<div class=\"main-slide-panier\" data-v-daf5c8f0>","</div>",[(!_vm.username)?_vm._ssrNode("<form data-vv-scope=\"formLogIn\" action class=\"column\" data-v-daf5c8f0>","</form>",[_vm._ssrNode("<h2 class=\"panier-titre\" data-v-daf5c8f0>Connexion</h2> "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin: 20px 0\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"email\" data-v-daf5c8f0>Adresse e-mail</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formLog.mail),expression:"formLog.mail"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],staticStyle:{"width":"100%"},style:(_vm.invalidAuth ? 'border:solid 1px red' : ''),attrs:{"type":"email","id":"emailLogin","name":"emailLogin"},domProps:{"value":(_vm.formLog.mail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formLog, "mail", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formLogIn.emailLogin')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formLogIn.emailLogin')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"password\" data-v-daf5c8f0>Mot de passe</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formLog.password),expression:"formLog.password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],staticStyle:{"width":"100%"},style:(_vm.invalidAuth ? 'border:solid 1px red' : ''),attrs:{"type":"password","id":"passwordLogin","name":"passwordLogin"},domProps:{"value":(_vm.formLog.password)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.logIn()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formLog, "password", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formLogIn.passwordLogin')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formLogIn.passwordLogin')))+"</span>")],2),_vm._ssrNode(" <span class=\"danger alert\""+(_vm._ssrStyle({"color":"red"},null, { display: (_vm.invalidAuth) ? '' : 'none' }))+" data-v-daf5c8f0>Vos informations de connexion sont incorrectes.</span> <div class=\"btn-panier column\" data-v-daf5c8f0><button type=\"button\" data-v-daf5c8f0>\n                Je me connecte\n              </button></div>")],2):_vm._e(),_vm._ssrNode(" "),(!_vm.username && !_vm.isSignedUp)?_vm._ssrNode("<form data-vv-scope=\"formSignUp\" class=\"column\" data-v-daf5c8f0>","</form>",[_vm._ssrNode("<div class=\"row panier-titre affInscr\" data-v-daf5c8f0><h2 data-v-daf5c8f0>S'inscrire</h2> <img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt=\"dropdown\" data-v-daf5c8f0></div> "),_vm._ssrNode("<div id=\"inscription\" class=\"closedInscr\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"column\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"lastName\" data-v-daf5c8f0>Nom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.lastName),expression:"formSignUp.lastName"}],staticStyle:{"width":"100%"},attrs:{"type":"text","id":"lastName","name":"lastName"},domProps:{"value":(_vm.formSignUp.lastName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "lastName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.lastName')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formSignUp.lastName')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"firstName\" data-v-daf5c8f0>Prénom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.firstName),expression:"formSignUp.firstName"}],staticStyle:{"width":"100%"},attrs:{"type":"text","id":"firstName","name":"firstName"},domProps:{"value":(_vm.formSignUp.firstName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "firstName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.firstName')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formSignUp.firstName')))+"</span>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"email\" data-v-daf5c8f0>Adresse e-mail</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.mail),expression:"formSignUp.mail"}],staticStyle:{"width":"100%"},attrs:{"type":"email","id":"email","name":"email"},domProps:{"value":(_vm.formSignUp.mail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "mail", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.email')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formSignUp.email')))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"password\" data-v-daf5c8f0>Mot de passe</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|min:6'),expression:"'required|min:6'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.password),expression:"formSignUp.password"}],ref:"password",staticStyle:{"width":"100%"},attrs:{"type":"password","id":"password","name":"password"},domProps:{"value":(_vm.formSignUp.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "password", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.password')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formSignUp.password')))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"confirmedPassword\" data-v-daf5c8f0>Confirmer le mot de passe</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|confirmed:password'),expression:"'required|confirmed:password'"},{name:"model",rawName:"v-model",value:(_vm.confirmedPassword),expression:"confirmedPassword"}],staticStyle:{"width":"100%"},attrs:{"type":"password","id":"confirmedPassword","name":"confirmedPassword"},domProps:{"value":(_vm.confirmedPassword)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.signUp()},"input":function($event){if($event.target.composing){ return; }_vm.confirmedPassword=$event.target.value}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.confirmedPassword')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formSignUp.confirmedPassword')))+"</span>")],2)]),_vm._ssrNode(" <div class=\"column\" data-v-daf5c8f0><div class=\"checkboxes\" style=\"color: var(--color3);\" data-v-daf5c8f0><input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.formSignUp.newsletter)?_vm._i(_vm.formSignUp.newsletter,null)>-1:(_vm.formSignUp.newsletter)))+" data-v-daf5c8f0> <p data-v-daf5c8f0>Je souhaite recevoir des offres promotionnelles</p></div></div> <div class=\"btn-panier column\" data-v-daf5c8f0><button type=\"button\" data-v-daf5c8f0>\n                  Je valide mon inscription\n                </button></div>")],2)],2):_vm._e(),_vm._ssrNode(" "),(_vm.username)?_vm._ssrNode("<div data-v-daf5c8f0>","</div>",[_vm._ssrNode("<h2 class=\"panier-titre\" data-v-daf5c8f0>"+_vm._ssrEscape("Bonjour "+_vm._s(_vm.username)+" !")+"</h2> <div class=\"btn-panier column\" data-v-daf5c8f0><button type=\"button\" style=\"margin-top: 30px\" data-v-daf5c8f0>\n                Me déconnecter\n              </button></div> "),_vm._ssrNode("<form data-vv-scope=\"formEdit\" class=\"column\" data-v-daf5c8f0>","</form>",[_vm._ssrNode("<div class=\"row panier-titre affInscr\" data-v-daf5c8f0><h2 data-v-daf5c8f0>Modifier mes informations</h2> <img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt=\"dropdown\" data-v-daf5c8f0></div> "),_vm._ssrNode("<div id=\"inscription\" class=\"closedInscr\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"lastName\" data-v-daf5c8f0>Nom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.formEdit.lastName),expression:"formEdit.lastName"}],staticStyle:{"width":"100%"},attrs:{"type":"text","id":"name","name":"lastName","value":"UserName"},domProps:{"value":(_vm.formEdit.lastName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formEdit, "lastName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formEdit.lastName')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formEdit.lastName')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"firstName\" data-v-daf5c8f0>Prénom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.formEdit.firstName),expression:"formEdit.firstName"}],staticStyle:{"width":"100%"},attrs:{"type":"text","id":"name","name":"firstName","value":"UserName"},domProps:{"value":(_vm.formEdit.firstName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formEdit, "firstName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formEdit.firstName')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formEdit.firstName')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"email\" data-v-daf5c8f0>Adresse e-mail</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formEdit.mail),expression:"formEdit.mail"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],staticStyle:{"width":"100%"},attrs:{"type":"email","id":"email","name":"email"},domProps:{"value":(_vm.formEdit.mail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formEdit, "mail", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formEdit.email')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formEdit.email')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"password\" data-v-daf5c8f0>Mot de passe actuel</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formEdit.password),expression:"formEdit.password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],staticStyle:{"width":"100%"},attrs:{"type":"password","name":"passwordEdit"},domProps:{"value":(_vm.formEdit.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formEdit, "password", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formEdit.passwordEdit')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formEdit.passwordEdit')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 20px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"password\" data-v-daf5c8f0>Nouveau mot de passe</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formEdit.newPassword),expression:"formEdit.newPassword"},{name:"validate",rawName:"v-validate",value:('min:6'),expression:"'min:6'"}],ref:"newPassword",staticStyle:{"width":"100%"},attrs:{"type":"password","name":"newPassword","id":"newPassword"},domProps:{"value":(_vm.formEdit.newPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formEdit, "newPassword", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formEdit.newPassword')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formEdit.newPassword')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"position: relative; margin-bottom: 10px\" data-v-daf5c8f0>","</div>",[_vm._ssrNode("<label for=\"password\" data-v-daf5c8f0>Confirmer le nouveau mot de passe</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmedNewPassword),expression:"confirmedNewPassword"},{name:"validate",rawName:"v-validate",value:('confirmed:newPassword'),expression:"'confirmed:newPassword'"}],staticStyle:{"width":"100%"},attrs:{"type":"password","name":"confirmedNewPassword","id":"confirmedNewPassword"},domProps:{"value":(_vm.confirmedNewPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.confirmedNewPassword=$event.target.value}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formEdit.confirmedNewPassword')) ? '' : 'none' }))+" data-v-daf5c8f0>"+_vm._ssrEscape(_vm._s(_vm.errors.first('formEdit.confirmedNewPassword')))+"</span>")],2),_vm._ssrNode(" <div class=\"btn-panier column\" data-v-daf5c8f0><button type=\"button\" data-v-daf5c8f0>\n                   Enregistrer les modifications\n                </button></div> "+((_vm.userInfo && Object.entries(_vm.userInfo).length > 0)?("<div style=\"display:flex; justify-content:center; margin-top:10px;\" data-v-daf5c8f0><span style=\"cursor:pointer;color: #F1F1F1; text-decoration:underline;\" data-v-daf5c8f0>Supprimer mon compte.</span></div>"):"<!---->"))],2)],2)],2):_vm._e()],2)],2)],2)],2)}
var Headervue_type_template_id_daf5c8f0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Header.vue?vue&type=template&id=daf5c8f0&scoped=true&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(4);

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(1);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(10);
var external_vee_validate_default = /*#__PURE__*/__webpack_require__.n(external_vee_validate_);

// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(11);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// FIREBASE





external_vue_default.a.use(external_vee_validate_default.a);



const dict = {
  custom: {
    conditionsAccepted: {
      required: () => 'Merci d\'accepter les Conditions Générales de Ventes sur internet (CGV)'
    },
    email: {
      required: () => 'Merci d\'entrer un email',
      email: () => 'Merci d\'entrer une adresse email valide'
    },
    firstName: {
      required: () => 'Merci de renseigner un prénom'
    },
    lastName: {
      required: () => 'Merci de renseigner un nom'
    },
    password: {
      required: () => 'Merci de renseigner un mot de passe',
      min: () => 'Le mot de passe doit contenir au moins 6 caractères'
    },
    confirmedPassword: {
      required: () => 'Merci de renseigner un mot de passe',
      confirmed: () => "Les deux mots de passes ne sont pas identiques"
    },
    passwordEdit: {
      required: () => 'Merci de renseigner votre mot de passe'
    },
    newPassword: {
      min: () => 'Le mot de passe doit contenir au moins 6 caractères'
    },
    confirmedNewPassword: {
      confirmed: () => "Les deux mots de passes ne sont pas identiques"
    },
    emailLogin: {
      required: () => 'Merci d\'entrer un email',
      email: () => 'Merci d\'entrer une adresse email valide'
    },
    passwordLogin: {
      required: () => 'Merci d\'entrer votre mot de passe'
    }
  }
};
external_vee_validate_["Validator"].localize('fr', dict);
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  data() {
    return {
      sidebarMenu: false,
      invalidAuth: false,
      itemsDeleted: false,
      depots: ["Entrepot de Mitry-Mory", "Entrepot de Le Pontet", "Entrepot d'Angoulème", "Entrepot d'Ipres", "Boutique de Lille", "Boutique de Versailles", "Boutique de Toulon", "Boutique de Bordeaux", "Boutique de Nantes", "Boutique de Lyon"],
      deliveryToDomicile: false,
      // intersectionOptions: {
      //   root: null,
      //   rootMargin: '0px 0px 0px 0px',
      //   threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      // },
      waypoint: null,
      menu: [],
      topHeaderMenu: [],
      isSignedUp: false,
      formSignUp: {
        // conditionsAccepted: false,
        newsletter: false,
        firstName: "",
        lastName: "",
        mail: "",
        password: "" // zipcode: ""

      },
      deliveryAgency: "Entrepot de Mitry-Mory",
      confirmedPassword: "",
      confirmedNewPassword: "",
      formLog: {
        mail: "",
        password: ""
      },
      formEdit: {
        mail: "",
        password: "",
        newPassword: "",
        firstName: "",
        lastName: "" // zipcode: ""

      },
      deliveryMode: "depot",
      scrollY: 0
    };
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    external_jquery_default()("#menu-header").removeClass("sticky");
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    external_jquery_default()("#menu-header").removeClass("sticky");
  },

  mounted() {
    this.getMenu();
    this.getTopHeaderMenu();

    if (this.username) {
      this.formEdit.firstName = this.$store.getters['auth/user'].firstName;
      this.formEdit.lastName = this.$store.getters['auth/user'].lastName;
      this.formEdit.mail = this.$store.getters['auth/user'].mail;
    }

    this.handleResize();
    external_jquery_default()("#inscription").removeClass("closedInscr");
    external_jquery_default()("#inscription").addClass("openedInscr");
    external_jquery_default()(".panier-titre img").css("transform", "rotate(-180deg");
  },

  computed: {
    loaded() {
      return this.$store.state.localStorage.status && this.$store.state.sessionStorage.status;
    },

    ...Object(external_vuex_["mapGetters"])({
      getOptionLivraison: 'optionLivraison/optionLivraison',
      getItemPrice: 'localStorage/itemPrice',
      totalPrice: "localStorage/price",
      discountCode: "localStorage/discountCode"
    }),

    userInfo() {
      return JSON.parse(JSON.stringify(this.$store.getters['auth/user']));
    },

    selectedItems() {
      return this.$store.getters['localStorage/items'];
    },

    totalPrice() {
      return this.$store.getters['localStorage/price'];
    },

    username() {
      return this.$store.getters['auth/username'];
    },

    ttcTotalProductPrice() {
      return parseFloat(this.totalPrice).toFixed(2).replace(".", ",");
    }

  },
  watch: {
    deliveryMode: function (newVal) {
      this.setDeliveryMode(newVal, this.deliveryAgency);
      var data = JSON.parse(JSON.stringify(this.selectedItems));
      this.emptyList();
      this.setItems(data);
    },
    deliveryAgency: function (newVal) {
      this.setDeliveryMode(this.deliveryMode, newVal);
    },

    userInfo(newVal) {
      if (newVal) {
        this.formEdit.firstName = newVal.firstName;
        this.formEdit.lastName = newVal.lastName;
        this.formEdit.mail = newVal.mail;
        setTimeout(() => {
          external_jquery_default()("#inscription").removeClass("closedInscr");
          external_jquery_default()("#inscription").addClass("openedInscr");
          external_jquery_default()(".panier-titre img").css("transform", "rotate(-180deg");
        }, 500);
      }
    }

  },
  methods: {
    removeAccount() {
      var validation = prompt(' Tapez "supprimer" pour effacer votre compte de notre base de données. Cette action ets irréversible.');
      var dataUpdate = {
        deleteDate: new Date()
      };

      if (validation == 'supprimer') {
        firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("users").doc(this.userInfo.mail).update(dataUpdate);
      } else {
        alert('Action annulée.');
      }

      this.logOut();
    },

    slug_to_url(link) {
      return this.string_to_slug(link).split('-').splice(1, this.string_to_slug(link).split('-').length).join('-');
    },

    string_to_slug(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim

      str = str.toLowerCase(); // remove accents, swap ñ for n, etc

      var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to = "aaaaaeeeeiiiioooouuuunc------";

      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

      return str;
    },

    setDeliveryMode(deliveryMode, deliveryAgency) {
      if (deliveryMode == "depot") {
        this.setOptionLivraison({ ...this.getOptionLivraison,
          depot: deliveryAgency,
          mode: 'retrait'
        });
      }

      if (deliveryMode == "domicile") {
        this.setOptionLivraison({ ...this.getOptionLivraison,
          mode: 'livraison'
        });
        var itemDeleted = false;

        for (let i = 0; i < this.selectedItems.length; i++) {
          const item = this.selectedItems[i];
        }
      }
    },

    ...Object(external_vuex_["mapGetters"])({
      popupVisible: 'popup/isVisible',
      popupMode: 'popup/getMode'
    }),

    editAccount() {
      this.$validator.validateAll('formEdit').then(res => {
        if (res) {
          var data = JSON.parse(JSON.stringify(this.formEdit)); // else {

          this.checkPassword(data.password, this.userInfo.password).then(res => {
            if (res) {
              var dataUpdate = {
                firstName: data.firstName,
                lastName: data.lastName,
                mail: data.mail,
                password: this.encryptPassword(data.password)
              };

              if (data.newPassword.length >= 6) {
                dataUpdate.password = this.encryptPassword(data.newPassword);
              }

              firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("users").doc(dataUpdate.mail).set(dataUpdate).then(() => {
                if (dataUpdate.mail != this.userInfo.mail) {
                  //suppression de l'ancien compte
                  firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("users").doc(this.userInfo.mail).delete().then(() => {
                    this.logout();
                  });
                } else {
                  this.setUser(dataUpdate);
                }

                this.onRegister();
                console.log("Document successfully written!");
              }).catch(error => {
                console.error("Error writing document: ", error);
              });
            } else {
              this.invalidAuth = true;
            }
          }); // }
        } else {
          console.error('Le formulaire contient une erreur');
        }
      });
    },

    handleResize() {
      if (external_jquery_default()(window).width() > 768) {
        external_jquery_default()(".top-header-mobile").hide();
      } else {
        external_jquery_default()(".top-header-mobile").show();
      }
    },

    onWaypoint({
      going,
      direction
    }) {
      if (going === 'out' && direction == "top") {
        external_jquery_default()('#scroll').addClass("floatable");
        external_jquery_default()('.bandeau').css('margin-top', '150px');
      } else if (going === 'in' && direction == "bottom") {
        external_jquery_default()('#scroll').removeClass("floatable");
        external_jquery_default()('.bandeau').css('margin-top', '0px');
      }
    },

    encryptPassword(password) {
      const salt = external_bcryptjs_default.a.genSaltSync(10);
      return external_bcryptjs_default.a.hashSync(password, salt);
    },

    checkPassword(password, hashedPassword) {
      return new Promise((resolve, reject) => {
        external_bcryptjs_default.a.compare(password, hashedPassword).then(res => {
          resolve(res);
        });
      });
    },

    ...Object(external_vuex_["mapMutations"])({
      addToCart: 'localStorage/add',
      removeFromCart: 'localStorage/remove',
      deleteItemFromCart: 'localStorage/delete',
      emptyList: 'localStorage/emptyList',
      setItems: 'localStorage/setItems',
      setUser: 'auth/setUser',
      logout: 'auth/logout',
      setOptionLivraison: 'optionLivraison/setOptionLivraison'
    }),

    handleScroll() {
      this.scrollY = window.scrollY;

      if (this.scrollY >= external_jquery_default()("#header").outerHeight()) {
        external_jquery_default()("#menu-header").addClass("sticky");
      } else {
        external_jquery_default()("#menu-header").removeClass("sticky");
      }

      if (this.scrollY >= external_jquery_default()("#header").outerHeight() + external_jquery_default()("#menu-header").outerHeight()) {
        external_jquery_default()("#menu-header").addClass("sticky-fixed");
      } else {
        external_jquery_default()("#menu-header").removeClass("sticky-fixed");
      }
    },

    openPanel(id) {
      //   this.authPanel = true;
      external_jquery_default()("body").addClass("stopScroll");
      external_jquery_default()("#" + id).css("animation", "slideIn 1s forwards");
      external_jquery_default()("#" + id).css("display", "block");
      external_jquery_default()("#" + id + ".sidebar-content").css("right", "0");
    },

    closeAccount() {
      external_jquery_default()("body").removeClass("stopScroll");
      external_jquery_default()("#compte").css("animation", "slideOut 1s forwards");
      setTimeout(() => {
        external_jquery_default()("#compte").css("display", "none");
      }, 1000);
    },

    closePanel(id) {
      external_jquery_default()("body").removeClass("stopScroll");
      external_jquery_default()("#" + id).css("animation", "slideOut 1s forwards");
      setTimeout(() => {
        external_jquery_default()("#" + id).css("display", "none");
      }, 1000);
    },

    getTopHeaderMenu() {
      var ref = firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("Top-Header_Menu").doc("OTZR0RPc0fRVGieYlQqe");

      var _this = this;

      ref.get().then(doc => {
        if (doc.exists) {
          var data = doc.data(); // console.log(data)

          data.itemsMenu.children.forEach(element => {
            _this.topHeaderMenu.push(element);
          });
        } else {// doc.data() will be undefined in this case
          // console.log("Oops ça marche pas !", process.env.ID_CUSTOMER, process.env.ID_SITE);
        }
      }).catch(error => {
        console.log("Error getting document:", error);
      });
    },

    getMenu() {
      // db.collection(localStorage.getItem('idCustomer'))
      // console.log(localStorage.getItem('idCustomer'))
      var ref = firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("En-tête_Menu").doc("EymPuk4ST0ik0Y52HIXf");

      var _this = this;

      ref.get().then(doc => {
        if (doc.exists) {
          var data = doc.data(); // console.log(data)

          data.itemsMenu.children.forEach(element => {
            _this.menu.push(element);
          });
        } else {// doc.data() will be undefined in this case
          // console.log("Oops ça marche pas !", process.env.ID_CUSTOMER, process.env.ID_SITE);
        }
      }).catch(error => {
        console.log("Error getting document:", error);
      });
    },

    signUp() {
      this.$validator.validateAll('formSignUp').then(res => {
        if (res) {
          var ref = firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("users").doc(this.formSignUp.mail);
          ref.get().then(doc => {
            if (doc.exists) {} else {
              var data = JSON.parse(JSON.stringify(this.formSignUp));
              data.password = this.encryptPassword(this.formSignUp.password);
              firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("users").doc(this.formSignUp.mail).set(data).then(() => {
                console.log("Document successfully written!");
                this.isSignedUp = true;
              }).catch(error => {
                console.error("Error writing document: ", error);
              });
            }
          });
        } else {
          console.error('Le formulaire contient une erreur');
        }
      });
    },

    logIn() {
      this.$validator.validateAll('formLogIn').then(res => {
        if (res) {
          this.setUser({
            lastName: "Baptiste",
            firstName: "Mabille",
            id: "123",
            deleteDate: null,
            mail: "baptistemabille@gmail.com",
            newsletter: false,
            password: "izneubzebf",
            type: "customer"
          });
        } else {
          console.error('Le formulaire contient une erreur');
        }
      });
    },

    logOut() {
      this.logout();
    },

    onRegister() {
      if (external_jquery_default()("#inscription").hasClass("closedInscr") == true) {
        external_jquery_default()("#inscription").removeClass("closedInscr");
        external_jquery_default()("#inscription").addClass("openedInscr");
        external_jquery_default()(".panier-titre img").css("transform", "rotate(-180deg");
      } else {
        external_jquery_default()("#inscription").addClass("closedInscr");
        external_jquery_default()("#inscription").removeClass("openedInscr");
        external_jquery_default()(".panier-titre img").css("transform", "rotate(-360deg");
      }
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./layouts/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  layouts_Headervue_type_script_lang_js_,
  Headervue_type_template_id_daf5c8f0_scoped_true_render,
  Headervue_type_template_id_daf5c8f0_scoped_true_staticRenderFns,
  false,
  Header_injectStyles,
  "daf5c8f0",
  "1e2201a6"
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/Footer.vue?vue&type=template&id=1dfa45a4&
var Footervue_type_template_id_1dfa45a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"container"},[_vm._ssrNode("<div class=\"flex top-footer\">","</div>",[_vm._ssrNode("<div class=\"half column\">","</div>",[_vm._ssrNode("<div class=\"flex logos\">","</div>",[_c('NuxtLink',{staticClass:"flex align-items-center",attrs:{"to":'/',"title":"Retour à la page d'accueil"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(65),"alt":"Logo Verr Tech"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex site-map\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li class=\"list-title\">PRODUITS</li> "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Pare douche")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Cloisons ou parois")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Insert de cheminée")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li class=\"list-title\">MON COMPTE</li> "+((_vm.username)?("<li><a href=\"#\">Mon compte</a></li>"):"<!---->")+" "),(_vm.username)?_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/commandes"}},[_c('a',{attrs:{"href":"#"}},[_vm._v("Mes commandes")])])],1):_vm._e(),_vm._ssrNode(" "+((_vm.username)?("<li><a href=\"#\">Se déconnecter</a></li>"):"<!---->")+" "+((!_vm.username)?("<li><a href=\"#\">Se connecter</a></li>"):"<!---->")+" "+((!_vm.username)?("<li><a href=\"#\">S'inscrire</a></li>"):"<!---->"))],2)],2),_vm._ssrNode(" <div class=\"column\"><p>Recevez nos promotions en avant première par email :</p> <div class=\"flex newsletter\"><input type=\"email\" placeholder=\"votre-email@domaine.fr\""+(_vm._ssrAttr("value",(_vm.emailNewsletter)))+"> <button><img"+(_vm._ssrAttr("src",__webpack_require__(19)))+" alt></button></div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bot-footer column\">","</div>",[_vm._ssrNode("<div class=\"container credits\">","</div>",[_vm._ssrNode("<p>VERRE TECH © 2021 Tous droits réservés - Réalisé par TBJ Web</p> "),_vm._ssrNode("<span>","</span>",_vm._l((_vm.menuFooterLegal),function(item,i){return _vm._ssrNode("<div style=\"display:contents\">","</div>",[_c('NuxtLink',{attrs:{"to":'/'+item.route}},[_vm._v(_vm._s(item.name)+" ")]),_vm._ssrNode(" |\n                ")],2)}),0)],2)])],2)}
var Footervue_type_template_id_1dfa45a4_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Footer.vue?vue&type=template&id=1dfa45a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { mapGetters } from "Vuex"



/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      emailNewsletter: "",
      menuProduct: [],
      menuFooterLegal: [],
      activePopNewletter: false
    };
  },

  mounted() {
    this.getMenuProduct();
    this.getMenuFooterLegal();
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      open: 'popup/show',
      close: 'popup/hide',
      changeMode: 'popup/changeMode'
    }),

    openPopupNewletter() {
      this.changeMode({
        mode: "PopupsPopupNewsletter",
        props: {
          email: this.emailNewsletter
        }
      });
      this.open();
    },

    openPanel(id) {
      //   this.authPanel = true;
      external_jquery_default()("body").addClass("stopScroll");
      external_jquery_default()("#" + id).css("animation", "slideIn 1s forwards");
      external_jquery_default()("#" + id).css("display", "block");
      external_jquery_default()("#" + id + ".content").css("right", "0");
    },

    ...Object(external_vuex_["mapMutations"])({
      logout: 'auth/logout'
    }),

    logOut() {
      this.logout();
    },

    getMenuProduct() {
      // db.collection(localStorage.getItem('idCustomer'))
      // console.log(localStorage.getItem('idCustomer'))
      var ref = firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("Footer-Account_Menu").doc("F46p8lDceNmG8zPBC4Ga");

      var _this = this;

      ref.get().then(doc => {
        if (doc.exists) {
          var data = doc.data();
          data.itemsMenu.children.forEach(element => {
            element.link ? _this.menuProduct.push(element) : null;
          });
        } else {// doc.data() will be undefined in this case
          // console.log("Oops ça marche pas !", process.env.ID_CUSTOMER, process.env.ID_SITE);
        }
      }).catch(error => {
        console.log("Error getting document:", error);
      });
    },

    getMenuFooterLegal() {
      // db.collection(localStorage.getItem('idCustomer'))
      // console.log(localStorage.getItem('idCustomer'))
      var ref = firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("Footer-Legal_Menu").doc("rj4opneS9wpHE1lUFTBe");

      var _this = this;

      ref.get().then(doc => {
        if (doc.exists) {
          var data = doc.data(); // console.log(data)

          data.itemsMenu.children.forEach(element => {
            _this.menuFooterLegal.push(element);
          });
        } else {// doc.data() will be undefined in this case
          // console.log("Oops ça marche pas !", process.env.ID_CUSTOMER, process.env.ID_SITE);
        }
      }).catch(error => {
        console.log("Error getting document:", error);
      });
    }

  },
  computed: {
    username() {
      return this.$store.getters['auth/username'];
    }

  },
  components: {// PopupNewsletter
  }
});
// CONCATENATED MODULE: ./layouts/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/Footer.vue





/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  layouts_Footervue_type_script_lang_js_,
  Footervue_type_template_id_1dfa45a4_render,
  Footervue_type_template_id_1dfa45a4_staticRenderFns,
  false,
  null,
  null,
  "0620c498"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// EXTERNAL MODULE: ./assets/style/reset.css
var style_reset = __webpack_require__(66);

// EXTERNAL MODULE: ./assets/style/style.css
var style = __webpack_require__(68);

// EXTERNAL MODULE: ./assets/style/grid.css
var grid = __webpack_require__(72);

// EXTERNAL MODULE: ./components/Popup.vue + 4 modules
var Popup = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    Header: Header,
    Footer: Footer,
    Popup: Popup["default"]
  },

  mounted() {
    if (!this.getOptionLivraison.zone && !this.getOptionLivraison.depot) {
      this.changeMode({
        mode: 'Location',
        props: null
      });
      this.open();
    }

    var analyticsAccepted = false;

    for (let i = 0; i < this.$cookies.enabled.length; i++) {
      const cookie = this.$cookies.enabled[i];

      if (cookie.name == "Google Analytics") {
        analyticsAccepted = true;
      }
    }

    console.log(analyticsAccepted);
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      open: 'popup/show',
      close: 'popup/hide',
      changeMode: 'popup/changeMode'
    })
  },
  computed: { ...Object(external_vuex_["mapGetters"])({
      popupVisible: 'popup/isVisible',
      popupMode: 'popup/getMode',
      getOptionLivraison: 'optionLivraison/optionLivraison',
      getProps: "popup/getProps"
    })
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_5c1c3084_render,
  defaultvue_type_template_id_5c1c3084_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "369684d0"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Popup: __webpack_require__(16).default})

// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_Footer": sanitizeComponent(Footer),
  "_Header": sanitizeComponent(Header)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(79), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(80), 'auth.js');
  resolveStoreModules(__webpack_require__(81), 'localStorage.js');
  resolveStoreModules(__webpack_require__(82), 'location.js');
  resolveStoreModules(__webpack_require__(83), 'optionLivraison.js');
  resolveStoreModules(__webpack_require__(84), 'popup.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  Logo: () => __webpack_require__.e(/* import() | components/logo */ 12).then(__webpack_require__.bind(null, 225)).then(c => wrapFunctional(c.default || c)),
  Popup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)).then(c => wrapFunctional(c.default || c)),
  PopupsPopupNewsletter: () => __webpack_require__.e(/* import() | components/popups-popup-newsletter */ 13).then(__webpack_require__.bind(null, 217)).then(c => wrapFunctional(c.default || c)),
  CheckoutAddBillingAddress: () => __webpack_require__.e(/* import() | components/checkout-add-billing-address */ 2).then(__webpack_require__.bind(null, 218)).then(c => wrapFunctional(c.default || c)),
  CheckoutAddDeliveryAddress: () => __webpack_require__.e(/* import() | components/checkout-add-delivery-address */ 3).then(__webpack_require__.bind(null, 219)).then(c => wrapFunctional(c.default || c)),
  CheckoutAlert: () => __webpack_require__.e(/* import() | components/checkout-alert */ 4).then(__webpack_require__.bind(null, 220)).then(c => wrapFunctional(c.default || c)),
  CheckoutEditBillingAddress: () => __webpack_require__.e(/* import() | components/checkout-edit-billing-address */ 5).then(__webpack_require__.bind(null, 221)).then(c => wrapFunctional(c.default || c)),
  CheckoutEditDeliveryAddress: () => __webpack_require__.e(/* import() | components/checkout-edit-delivery-address */ 6).then(__webpack_require__.bind(null, 222)).then(c => wrapFunctional(c.default || c)),
  CheckoutItem: () => __webpack_require__.e(/* import() | components/checkout-item */ 7).then(__webpack_require__.bind(null, 223)).then(c => wrapFunctional(c.default || c)),
  CheckoutPayment: () => __webpack_require__.e(/* import() | components/checkout-payment */ 8).then(__webpack_require__.bind(null, 146)).then(c => wrapFunctional(c.default || c)),
  CheckoutPersonnalInfo: () => __webpack_require__.e(/* import() | components/checkout-personnal-info */ 9).then(__webpack_require__.bind(null, 148)).then(c => wrapFunctional(c.default || c)),
  CheckoutSummary: () => __webpack_require__.e(/* import() | components/checkout-summary */ 10).then(__webpack_require__.bind(null, 147)).then(c => wrapFunctional(c.default || c)),
  Location: () => __webpack_require__.e(/* import() | components/location */ 11).then(__webpack_require__.bind(null, 224)).then(c => wrapFunctional(c.default || c)),
  AuthLogin: () => __webpack_require__.e(/* import() | components/auth-login */ 1).then(__webpack_require__.bind(null, 145)).then(c => wrapFunctional(c.default || c)),
  ProduitsProductCard: () => __webpack_require__.e(/* import() | components/produits-product-card */ 14).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMap.vue?vue&type=template&id=44122a06&
var GMapvue_type_template_id_44122a06_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"GMap"},[_vm._ssrNode("<div class=\"GMap__Wrapper\"></div> "),_vm._t("default")],2)}
var GMapvue_type_template_id_44122a06_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMap.vue?vue&type=template&id=44122a06&

// EXTERNAL MODULE: external "google-maps-api-loader"
var external_google_maps_api_loader_ = __webpack_require__(42);
var external_google_maps_api_loader_default = /*#__PURE__*/__webpack_require__.n(external_google_maps_api_loader_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//


const MarkerClusterer = __webpack_require__(85);

/* harmony default export */ var GMapvue_type_script_lang_js_ = ({
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    language: {},
    zoom: {
      type: Number,
      default: 10
    },
    cluster: {
      type: Object,
      default: () => {
        return {};
      }
    },
    center: {
      type: Object,
      default: () => {
        return {
          lat: 45.815,
          lng: 15.9819
        };
      }
    }
  },

  data() {
    return {
      map: null,
      google: null,
      markerCluster: null,
      markers: [],
      events: ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "heading_changed", "idle", "maptypeid_changed", "mousemove", "mouseout", "mouseover", "projection_changed", "resize", "rightclick", "tilesloaded", "tilt_changed", "zoom_changed"]
    };
  },

  async mounted() {
    if (this.$GMaps.loaded === false) {
      this.$GMaps.loaded = true;

      try {
        let GMapSettings = {
          apiKey: this.$GMaps.apiKey,
          language: this.language
        };

        if (this.$GMaps.libraries !== undefined) {
          GMapSettings["libraries"] = this.$GMaps.libraries;
        }

        const google = external_google_maps_api_loader_default()(GMapSettings);
        this.$GMaps.google = google;
      } catch (e) {}
    }

    this.google = await this.$GMaps.google;
    this.initMap();
    this.$emit("init", this.google);
    this.$emit("loaded", this.google);
  },

  beforeDestroy() {
    this.$GMaps.loaded = false;
  },

  methods: {
    initMap() {
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.center,
        zoom: this.zoom,
        ...this.options
      });
      this.initChildren();
      this.events.forEach(event => {
        this.map.addListener(event, e => {
          this.$emit(event, {
            map: this.map,
            event: e
          });
        });
      });
    },

    initChildren() {
      if (this.markers.length > 0) this.markers = [];
      this.$children.forEach(child => {
        child.init();
      });
      this.map["markers"] = this.markers;

      if (Object.keys(this.cluster).length > 0) {
        this.initCluster();
      }
    },

    initCluster() {
      if (this.markerCluster !== null) this.markerCluster.clearMarkers();
      this.markerCluster = new MarkerClusterer(this.map, this.markers.filter(m => m.getVisible()), { ...this.cluster.options
      });
    }

  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GMapvue_type_script_lang_js_ = (GMapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMap.vue



function GMap_injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var GMap_component = Object(componentNormalizer["a" /* default */])(
  components_GMapvue_type_script_lang_js_,
  GMapvue_type_template_id_44122a06_render,
  GMapvue_type_template_id_44122a06_staticRenderFns,
  false,
  GMap_injectStyles,
  null,
  "4cd352b0"
  
)

/* harmony default export */ var GMap = (GMap_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMapMarker.vue?vue&type=template&id=1ebaee3b&
var GMapMarkervue_type_template_id_1ebaee3b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.markerLoaded)?_c('div',{staticClass:"GMap__Marker"},[(_vm.marker === null)?_vm._t("default"):_vm._e()],2):_vm._e()}
var GMapMarkervue_type_template_id_1ebaee3b_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapMarker.vue?vue&type=template&id=1ebaee3b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMapMarker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var GMapMarkervue_type_script_lang_js_ = ({
  props: {
    position: Object,
    options: Object
  },

  data() {
    return {
      marker: null,
      markerLoaded: false,
      events: ['click', 'mouseover', 'mouseout']
    };
  },

  methods: {
    init() {
      let child = undefined;
      this.position.lat = parseFloat(this.position.lat);
      this.position.lng = parseFloat(this.position.lng);
      this.marker = new this.$parent.google.maps.Marker({
        position: this.position,
        map: this.$parent.map,
        ...this.options
      });
      this.$parent.markers.push(this.marker);
      this.markerLoaded = true;

      if (this.$children.length > 0) {
        child = this.$children[0];
        child.initInfoWindow();
      }

      this.events.forEach(event => {
        this.$parent.google.maps.event.addListener(this.marker, event, e => {
          if (child !== undefined && event === 'click') child.infoWindow.open(this.$parent.map, this.marker);
          this.$emit(event, {
            position: this.position,
            event: e,
            map: this.$parent.map,
            marker: this.marker
          });
        });
      });
    }

  },
  watch: {
    'options.icon'(value) {
      this.marker.setIcon(value);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapMarker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GMapMarkervue_type_script_lang_js_ = (GMapMarkervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapMarker.vue





/* normalize component */

var GMapMarker_component = Object(componentNormalizer["a" /* default */])(
  components_GMapMarkervue_type_script_lang_js_,
  GMapMarkervue_type_template_id_1ebaee3b_render,
  GMapMarkervue_type_template_id_1ebaee3b_staticRenderFns,
  false,
  null,
  null,
  "6396a40a"
  
)

/* harmony default export */ var GMapMarker = (GMapMarker_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMapCircle.vue?vue&type=template&id=59e0a527&
var GMapCirclevue_type_template_id_59e0a527_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.circleLoaded)?_c('div',{staticClass:"GMap__Marker"},[(_vm.circle === null)?_vm._t("default"):_vm._e()],2):_vm._e()}
var GMapCirclevue_type_template_id_59e0a527_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapCircle.vue?vue&type=template&id=59e0a527&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMapCircle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var GMapCirclevue_type_script_lang_js_ = ({
  props: {
    options: Object
  },

  data() {
    return {
      circle: null,
      circleLoaded: false
    };
  },

  methods: {
    init() {
      this.circle = new this.$parent.google.maps.Circle({
        map: this.$parent.map,
        ...this.options
      });
      this.circleLoaded = true;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapCircle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GMapCirclevue_type_script_lang_js_ = (GMapCirclevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapCircle.vue





/* normalize component */

var GMapCircle_component = Object(componentNormalizer["a" /* default */])(
  components_GMapCirclevue_type_script_lang_js_,
  GMapCirclevue_type_template_id_59e0a527_render,
  GMapCirclevue_type_template_id_59e0a527_staticRenderFns,
  false,
  null,
  null,
  "4236dcc0"
  
)

/* harmony default export */ var GMapCircle = (GMapCircle_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMapInfoWindow.vue?vue&type=template&id=29792f5d&
var GMapInfoWindowvue_type_template_id_29792f5d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"GMap__InfoWindow"},[_vm._t("default")],2)}
var GMapInfoWindowvue_type_template_id_29792f5d_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapInfoWindow.vue?vue&type=template&id=29792f5d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-gmaps/components/GMapInfoWindow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var GMapInfoWindowvue_type_script_lang_js_ = ({
  props: {
    options: {
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {
      infoWindow: null
    };
  },

  methods: {
    initInfoWindow() {
      this.infoWindow = new google.maps.InfoWindow({
        content: this.$el,
        ...this.options
      });
      this.$parent.marker.infoWindow = this.infoWindow;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapInfoWindow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GMapInfoWindowvue_type_script_lang_js_ = (GMapInfoWindowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/nuxt-gmaps/components/GMapInfoWindow.vue





/* normalize component */

var GMapInfoWindow_component = Object(componentNormalizer["a" /* default */])(
  components_GMapInfoWindowvue_type_script_lang_js_,
  GMapInfoWindowvue_type_template_id_29792f5d_render,
  GMapInfoWindowvue_type_template_id_29792f5d_staticRenderFns,
  false,
  null,
  null,
  "3db1f7e4"
  
)

/* harmony default export */ var GMapInfoWindow = (GMapInfoWindow_component.exports);
// CONCATENATED MODULE: ./.nuxt/nuxt-google-maps.js





/* harmony default export */ var nuxt_google_maps = ((context, inject) => {
  external_vue_default.a.component('GMap', GMap);
  external_vue_default.a.component('GMapMarker', GMapMarker);
  external_vue_default.a.component('GMapCircle', GMapCircle);
  external_vue_default.a.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {
    apiKey: "AIzaSyCCbUTAKTJzn7n6TumBfTir_GU9AKBIHsw",
    loaded: false,
    libraries: undefined
  });
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-cookie-control/components/CookieControl.vue?vue&type=template&id=2f809fe7&
var CookieControlvue_type_template_id_2f809fe7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[(_vm.cookies.text)?_c('section',{staticClass:"cookieControl"},[_c('transition',{attrs:{"name":("cookieControl__Bar--" + (_vm.cookies.barPosition))}},[(_vm.colorsSet && !_vm.cookies.consent)?_c('div',{class:("cookieControl__Bar cookieControl__Bar--" + (_vm.cookies.barPosition))},[_c('div',{staticClass:"cookieControl__BarContainer"},[_c('div',[_vm._t("bar",[_c('h3',{domProps:{"textContent":_vm._s(_vm.cookies.text.barTitle)}}),_vm._v(" "),_c('p',{domProps:{"textContent":_vm._s(_vm.cookies.text.barDescription)}})])],2),_vm._v(" "),_c('div',{staticClass:"cookieControl__BarButtons"},[_c('button',{domProps:{"textContent":_vm._s(_vm.cookies.text.manageCookies)},on:{"click":function($event){_vm.cookies.modal = true}}}),_vm._v(" "),_c('button',{domProps:{"textContent":_vm._s(_vm.cookies.text.acceptAll)},on:{"click":function($event){return _vm.setConsent({reload: false})}}})])])]):_vm._e()]),_vm._v(" "),(_vm.cookies.controlButton && _vm.colorsSet && _vm.cookies.consent)?_c('button',{staticClass:"cookieControl__ControlButton",attrs:{"aria-label":"Cookie control"},on:{"click":function($event){_vm.cookies.modal = true}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}},[_c('path',{attrs:{"fill":"currentColor","d":"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 00-57.79 57.81l-35.1 68.88a132.645 132.645 0 00-12.82 80.95l12.08 76.27a132.521 132.521 0 0037.16 72.96l54.77 54.76a132.036 132.036 0 0072.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0057.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"}})])]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"cookieControl__Modal"}},[(_vm.cookies.modal)?_c('div',{staticClass:"cookieControl__Modal"},[(!_vm.saved)?_c('p',{staticClass:"cookieControl__ModalUnsaved",domProps:{"textContent":_vm._s(_vm.cookies.text.unsaved)}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"cookieControl__ModalContent"},[_c('div',[_vm._t("modal"),_vm._v(" "),_c('button',{staticClass:"cookieControl__ModalClose",domProps:{"textContent":_vm._s(_vm.cookies.text.close)},on:{"click":function($event){_vm.cookies.modal = false}}}),_vm._v(" "),_vm._l((['necessary', 'optional']),function(type){return [_c('h3',{key:type.id,domProps:{"textContent":_vm._s(_vm.cookies.text[type])}}),_vm._v(" "),_c('ul',{key:type.id},_vm._l((_vm.cookies[type]),function(cookie){return _c('li',{key:cookie.id},[_c('div',{staticClass:"cookieControl__ModalInputWrapper"},[(type === 'necessary' && cookie.name !== 'functional')?_c('input',{attrs:{"id":_vm.getCookieFirstName(cookie.name),"type":"checkbox","disabled":"","checked":""}}):_c('input',{attrs:{"id":_vm.getCookieFirstName(cookie.name),"type":"checkbox"},domProps:{"checked":_vm.cookies.enabledList.includes(cookie.identifier || _vm.cookies.slugify(_vm.getCookieFirstName(cookie.name))) || (_vm.cookies.get('cookie_control_consent').length === 0 && cookie.initialState === true)},on:{"change":function($event){return _vm.toogleCookie(cookie)}}}),_vm._v(" "),_c('label',{attrs:{"for":_vm.getCookieFirstName(cookie.name)},domProps:{"innerHTML":_vm._s(_vm.getName(cookie.name))}}),_vm._v(" "),_c('span',{staticClass:"cookieControl__ModalCookieName"},[_vm._v("\n                      "+_vm._s(_vm.getName(cookie.name))+"\n                      "),(cookie.description)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.getDescription(cookie.description))}}):_vm._e()])]),_vm._v(" "),(cookie.cookies)?[_vm._t("cookie",[_c('ul',_vm._l((cookie.cookies),function(item){return _c('li',{key:item.id,domProps:{"innerHTML":_vm._s(item)}})}),0)],null,{config: cookie})]:_vm._e()],2)}),0)]}),_vm._v(" "),_c('div',{staticClass:"cookieControl__ModalButtons"},[_c('button',{domProps:{"textContent":_vm._s(_vm.cookies.text.save)},on:{"click":function($event){return _vm.setConsent({type: 'partial'})}}}),_vm._v(" "),_c('button',{domProps:{"textContent":_vm._s(_vm.cookies.text.acceptAll)},on:{"click":_vm.setConsent}}),_vm._v(" "),_c('button',{domProps:{"textContent":_vm._s(_vm.cookies.text.declineAll)},on:{"click":function($event){return _vm.setConsent({declineAll: true})}}})])],2)])]):_vm._e()])],1):_vm._e()])}
var CookieControlvue_type_template_id_2f809fe7_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/nuxt-cookie-control/components/CookieControl.vue?vue&type=template&id=2f809fe7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-cookie-control/components/CookieControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CookieControlvue_type_script_lang_js_ = ({
  name: 'CookieControl',
  props: {
    locale: {
      default: 'en'
    }
  },

  data() {
    return {
      saved: true,
      colorsSet: false,
      cookies: this.$cookies
    };
  },

  computed: {
    expirationDate() {
      let date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date.toUTCString();
    },

    optionalCookies() {
      return this.cookies.optional;
    }

  },
  methods: {
    toogleCookie(cookie) {
      let cookieName = cookie.identifier || this.cookies.slugify(this.getCookieFirstName(cookie.name));
      if (this.saved) this.saved = false;
      if (!this.cookies.enabledList.includes(cookieName)) this.cookies.enabledList.push(cookieName);else this.cookies.enabledList.splice(this.cookies.enabledList.indexOf(cookieName), 1);
    },

    setConsent({
      type,
      consent = true,
      reload = true,
      declineAll = false
    }) {
      this.cookies.set({
        name: 'cookie_control_consent',
        value: consent,
        expires: this.expirationDate
      });
      let enabledCookies = declineAll ? [] : type === 'partial' && consent ? this.cookies.enabledList : [...this.optionalCookies.map(c => c.identifier || this.cookies.slugify(this.getCookieFirstName(c.name)))];
      this.cookies.set({
        name: 'cookie_control_enabled_cookies',
        value: consent ? enabledCookies.join(',') : '',
        expires: this.expirationDate
      });

      if (!reload) {
        this.cookies.setConsent();
        this.$cookies.modal = false;
      } else window.location.reload(true);
    },

    getDescription(description) {
      if (typeof description === 'string') return ` ${this.cookies.dashInDescription !== false ? '-' : ''} ${description}`;else if (description[this.locale]) return ` ${this.cookies.dashInDescription !== false ? '-' : ''} ${description[this.locale]}`;
      return '';
    },

    getName(name) {
      return name === 'functional' ? this.cookies.text['functional'] : typeof name === 'string' ? name : name[this.locale] ? name[this.locale] : name[Object.keys(name)[0]];
    },

    getCookieFirstName(name) {
      return typeof name === 'string' ? name : name[Object.keys(name)[0]];
    },

    async setTexts(isChanged = false) {
      let text = null;
      let module = null;

      try {
        module = __webpack_require__(88)(`./${this.locale}`);
      } catch (e) {
        module = __webpack_require__(14);
      }

      text = module.default;

      if (this.cookies.text && Object.keys(this.cookies.text).length > 0) {
        if (this.cookies.text.locale) {
          Object.assign(text, this.cookies.text.locale[this.locale]);
        }

        if (!isChanged) Object.assign(text, this.cookies.text);
      }

      this.$set(this.$cookies, 'text', text);
    }

  },

  async beforeMount() {
    await this.setTexts();

    if (false) {}

    if (!this.cookies.get('cookie_control_consent') || this.cookies.get('cookie_control_consent').length === 0) {
      this.optionalCookies.forEach(c => {
        if (c.initialState === true) {
          this.cookies.enabledList.push(c.identifier || this.cookies.slugify(this.getCookieFirstName(c.name)));
        }
      });
    }

    this.colorsSet = true;
  },

  watch: {
    async locale() {
      await this.setTexts(true);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-cookie-control/components/CookieControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CookieControlvue_type_script_lang_js_ = (CookieControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/nuxt-cookie-control/components/CookieControl.vue





/* normalize component */

var CookieControl_component = Object(componentNormalizer["a" /* default */])(
  components_CookieControlvue_type_script_lang_js_,
  CookieControlvue_type_template_id_2f809fe7_render,
  CookieControlvue_type_template_id_2f809fe7_staticRenderFns,
  false,
  null,
  null,
  "4073fb64"
  
)

/* harmony default export */ var CookieControl = (CookieControl_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-cookie-control/components/CookieIframe.vue?vue&type=template&id=1772311c&
var CookieIframevue_type_template_id_1772311c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[(_vm.iframeEnabled)?_c('iframe'):_c('div',{staticClass:"cookieControl__BlockedIframe"},[_c('p',[_vm._v("\n      "+_vm._s(_vm.iframeText)+"\n      "),(_vm.cookies && _vm.cookies.text)?_c('a',{attrs:{"href":"#"},domProps:{"textContent":_vm._s(_vm.cookies.text.here)},on:{"click":function($event){$event.preventDefault();_vm.cookies.modal = true}}}):_vm._e()])])])}
var CookieIframevue_type_template_id_1772311c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/nuxt-cookie-control/components/CookieIframe.vue?vue&type=template&id=1772311c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-cookie-control/components/CookieIframe.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CookieIframevue_type_script_lang_js_ = ({
  name: 'CookieIframe',

  data() {
    return {
      cookies: this.$cookies
    };
  },

  computed: {
    iframeEnabled() {
      return this.cookies.enabled.filter(c => {
        return c.name === 'functional';
      }).length > 0;
    },

    iframeText() {
      return this.cookies && this.cookies.text ? this.cookies.text.blockedIframe : '';
    }

  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-cookie-control/components/CookieIframe.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CookieIframevue_type_script_lang_js_ = (CookieIframevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/nuxt-cookie-control/components/CookieIframe.vue





/* normalize component */

var CookieIframe_component = Object(componentNormalizer["a" /* default */])(
  components_CookieIframevue_type_script_lang_js_,
  CookieIframevue_type_template_id_1772311c_render,
  CookieIframevue_type_template_id_1772311c_staticRenderFns,
  false,
  null,
  null,
  "0a7c6343"
  
)

/* harmony default export */ var CookieIframe = (CookieIframe_component.exports);
// CONCATENATED MODULE: ./.nuxt/nuxt-cookie-control.js



/* harmony default export */ var nuxt_cookie_control = ((context, inject) => {
  let cookies = {
    modal: false,
    consent: false,
    enabled: [],
    enabledList: [],
    optional: []
  };
  Object.assign(cookies, {
    "necessary": [{
      "name": {
        "fr": "Cookies par défaut",
        "en": "Default cookies",
        "hr": "Osnovni kolačići"
      },
      "description": {
        "en": "Used for cookie control.",
        "fr": "Utilisé pour le contrôle des cookies."
      }
    }],
    "optional": [{
      "name": "Google Analytics",
      "description": "Google Analytics est un service d'analyse web proposé par Google qui suit et rapporte le trafic du site web.",
      "initialState": true,
      "src": "https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-138616567-1",
      "async": true,
      "accepted": () => {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }

        gtag("js", new Date());
        gtag("config", "UA-138616567-1");
      },
      "declined": () => {}
    }, {
      "name": "functional",
      "initialState": false
    }],
    "css": true,
    "cssPolyfill": true,
    "controlButton": true,
    "barPosition": "bottom-right",
    "iframe": "\u002FApplications\u002FMAMP\u002Fhtdocs\u002FVerre-Tech-Front\u002Fnode_modules\u002Fnuxt-cookie-control\u002Fcomponents\u002FCookieIframe.vue",
    "component": "\u002FApplications\u002FMAMP\u002Fhtdocs\u002FVerre-Tech-Front\u002Fnode_modules\u002Fnuxt-cookie-control\u002Fcomponents\u002FCookieControl.vue",
    "sameSite": true,
    "blockIframe": {
      "initialState": false
    },
    "colors": {
      "barTextColor": "#fff",
      "barBackground": "var(--color1)",
      "barButtonColor": "#fff",
      "barButtonBackground": "var(--color1)",
      "barButtonHoverColor": "var(--color1)",
      "barButtonHoverBackground": "#fff",
      "modalButtonBackground": "var(--color1)",
      "modalButtonHoverColor": "var(--color1)",
      "modalButtonHoverBackground": "#fff",
      "modalButtonColor": "#fff",
      "controlButtonBackground": "var(--color1)",
      "controlButtonHoverBackground": "#fff",
      "controlButtonIconHoverColor": "var(--color1)",
      "controlButtonIconColor": "#fff",
      "checkboxActiveBackground": "#ede1e1",
      "checkboxInactiveBackground": "#ede1e1",
      "checkboxActiveCircleBackground": "var(--color1)",
      "checkboxInactiveCircleBackground": "#fff",
      "checkboxDisabledBackground": "#2e495e",
      "checkboxDisabledCircleBackground": "#ede1e1"
    },
    "globalName": "nuxt"
  });

  if ({
    "barTextColor": "#fff",
    "barBackground": "var(--color1)",
    "barButtonColor": "#fff",
    "barButtonBackground": "var(--color1)",
    "barButtonHoverColor": "var(--color1)",
    "barButtonHoverBackground": "#fff",
    "modalButtonBackground": "var(--color1)",
    "modalButtonHoverColor": "var(--color1)",
    "modalButtonHoverBackground": "#fff",
    "modalButtonColor": "#fff",
    "controlButtonBackground": "var(--color1)",
    "controlButtonHoverBackground": "#fff",
    "controlButtonIconHoverColor": "var(--color1)",
    "controlButtonIconColor": "#fff",
    "checkboxActiveBackground": "#ede1e1",
    "checkboxInactiveBackground": "#ede1e1",
    "checkboxActiveCircleBackground": "var(--color1)",
    "checkboxInactiveCircleBackground": "#fff",
    "checkboxDisabledBackground": "#2e495e",
    "checkboxDisabledCircleBackground": "#ede1e1"
  } !== false) {
    cookies.colors = {
      barTextColor: '#fff',
      modalOverlay: '#000',
      barBackground: '#000',
      barButtonColor: '#000',
      modalTextColor: '#000',
      modalBackground: '#fff',
      modalOverlayOpacity: 0.8,
      modalButtonColor: '#fff',
      modalUnsavedColor: '#fff',
      barButtonHoverColor: '#fff',
      barButtonBackground: '#fff',
      modalButtonHoverColor: '#fff',
      controlButtonIconColor: '#000',
      modalButtonBackground: '#000',
      controlButtonBackground: '#fff',
      barButtonHoverBackground: '#333',
      checkboxActiveBackground: '#000',
      controlButtonIconHoverColor: '#fff',
      checkboxInactiveBackground: '#000',
      modalButtonHoverBackground: '#333',
      checkboxDisabledBackground: '#ddd',
      controlButtonHoverBackground: '#000',
      checkboxActiveCircleBackground: '#fff',
      checkboxInactiveCircleBackground: '#fff',
      checkboxDisabledCircleBackground: '#fff'
    };
    Object.assign(cookies.colors, {
      "barTextColor": "#fff",
      "barBackground": "var(--color1)",
      "barButtonColor": "#fff",
      "barButtonBackground": "var(--color1)",
      "barButtonHoverColor": "var(--color1)",
      "barButtonHoverBackground": "#fff",
      "modalButtonBackground": "var(--color1)",
      "modalButtonHoverColor": "var(--color1)",
      "modalButtonHoverBackground": "#fff",
      "modalButtonColor": "#fff",
      "controlButtonBackground": "var(--color1)",
      "controlButtonHoverBackground": "#fff",
      "controlButtonIconHoverColor": "var(--color1)",
      "controlButtonIconColor": "#fff",
      "checkboxActiveBackground": "#ede1e1",
      "checkboxInactiveBackground": "#ede1e1",
      "checkboxActiveCircleBackground": "var(--color1)",
      "checkboxInactiveCircleBackground": "#fff",
      "checkboxDisabledBackground": "#2e495e",
      "checkboxDisabledCircleBackground": "#ede1e1"
    });
  }

  let methods = {
    get: cookie => {
      if (false) {}

      return '';
    },
    set: ({
      name,
      value = '',
      expires = '',
      path = '/',
      domain
    }) => {
      let domainName = domain ? domain : cookies.domain ? `.${cookies.domain}` : domain;

      if (false) {} else if (true) {
        context.res.setHeader('Set-Cookie', [`${name}=${value}; Expires=${expires}; Path=${path}${domainName !== undefined ? `; Domain=${domainName}` : ';'}`]);
      }
    },
    isEnabled: identifier => {
      return cookies.enabledList.includes(identifier) || cookies.enabledList.includes(cookies.slugify(identifier));
    },
    setBlockedIframes: content => {
      let type = (typeof content).toLowerCase();
      let c = type !== 'string' ? JSON.stringify(content) : content;
      c = c.replace(/&lt;/g, '<');
      c = c.replace(/&gt;/g, '>');

      if (context.app.$cookies.enabled.filter(c => {
        return c.name === 'functional';
      }).length === 0) {
        c = c.replace(/<iframe/g, `<div class='cookieControl__BlockedIframe '`);
        c = c.replace(/<\/iframe/g, `<p>${context.app.$cookies.text.blockedIframe !== undefined ? context.app.$cookies.text.blockedIframe : ''} <a href='#' onclick='event.preventDefault(); $${cookies.globalName}.$cookies.modal = true'>${context.app.$cookies.text.here !== undefined ? context.app.$cookies.text.here : ''}</a></p></div`);
      }

      return type !== 'string' ? JSON.parse(c) : c;
    },
    slugify: str => {
      str = str.replace(/^\s+|\s+$/g, '');
      str = str.toLowerCase();
      let from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
      let to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";

      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      return str;
    },
    remove: name => {
      if (false) {}
    },
    setConsent: (isInit = false) => {
      cookies.consent = cookies.get('cookie_control_consent') === 'true' ? true : false;
      cookies.enabled = [];
      cookies.enabledList = [];

      if (cookies.consent === true) {
        let enabledFromCookie = cookies.get('cookie_control_enabled_cookies');
        cookies.enabled.push(...cookies.optional.filter(c => {
          let cookieName = typeof c.name === 'string' ? c.name : c.name[Object.keys(c.name)[0]];
          return enabledFromCookie.includes(c.identifier || cookies.slugify(cookieName));
        }));
        cookies.enabledList = cookies.enabled.length > 0 ? cookies.enabled.map(c => {
          let cookieName = typeof c.name === 'string' ? c.name : c.name[Object.keys(c.name)[0]];
          return c.identifier || cookies.slugify(cookieName);
        }) : [];
      }

      if (cookies.necessary) cookies.enabled.push(...cookies.necessary.filter(c => {
        return c.src || c.accepted;
      }));

      if (false) {}
    }
  };
  Object.assign(cookies, methods);

  const clearCookies = () => {
    let disabled = cookies.optional.filter(c => {
      let cookieName = typeof c.name === 'string' ? c.name : c.name[Object.keys(c.name)[0]];
      return !cookies.enabledList.includes(c.identifier || cookies.slugify(cookieName));
    });

    if (disabled.length > 0) {
      disabled.forEach(c => {
        if (c.declined) c.declined();

        if (c.cookies && c.cookies.length > 0) {
          c.cookies.forEach(i => {
            cookies.remove(i);
          });
        } // if(c.src){
        //   for(let s of [...document.head.querySelectorAll(`script[src="${c.src}"]`)]){
        //     s.parentNode.removeChild(s)
        //   }
        // }

      });
    }
  };

  const setHead = () => {
    if (cookies.enabled.length > 0) {
      let head = document.getElementsByTagName('head')[0];
      cookies.enabled.forEach(c => {
        if (c.src) {
          let script = document.createElement('script');
          script.src = c.src;
          head.appendChild(script);
          script.addEventListener('load', () => {
            if (c.accepted) c.accepted();
          });
        }
      });
    }
  };

  const callAcceptedFunctions = () => {
    if (cookies.enabled.length > 0) {
      cookies.enabled.forEach(c => {
        if (c.accepted) c.accepted();
      });
    }
  };

  const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  cookies.setConsent(true);

  if (false) {}

  inject('cookies', cookies);
  if (cookies.blockIframe) external_vue_default.a.component('CookieIframe', CookieIframe);
  external_vue_default.a.component('CookieControl', CookieControl);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(15);

// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(43);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookiz",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(44);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./nuxt-google-maps.js (mode: 'all')

 // Source: ./nuxt-cookie-control.js (mode: 'all')

 // Source: ./nuxt-vuex-localstorage.js (mode: 'client')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/firebase/firebaseConfig.js (mode: 'all')

 // Source: ../plugins/waypoints/v-waypoint.client.js (mode: 'client')

 // Source: ../plugins/route.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "VERRE TECH",
      "htmlAttrs": {
        "lang": "fr"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fapi.systempay.fr\u002Fstatic\u002Fjs\u002Fkrypton-client\u002FV4.0\u002Fext\u002Fclassic-reset.css"
      }],
      "script": [{
        "hid": "embedded-form-glue",
        "src": "https:\u002F\u002Fapi.systempay.fr\u002Fstatic\u002Fjs\u002Fkrypton-client\u002FV4.0\u002Fext\u002Fclassic.js",
        "defer": true
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof nuxt_google_maps === 'function') {
    await nuxt_google_maps(app.context, inject);
  }

  if (typeof nuxt_cookie_control === 'function') {
    await nuxt_cookie_control(app.context, inject);
  }

  if (false) {}

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof firebaseConfig["default"] === 'function') {
    await Object(firebaseConfig["default"])(app.context, inject);
  }

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.push(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("vue-select");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.string.replace-all.js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("@lyracom/embedded-form-glue");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("vue-chartjs");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("vuedraggable");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("vue-form-wizard");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map