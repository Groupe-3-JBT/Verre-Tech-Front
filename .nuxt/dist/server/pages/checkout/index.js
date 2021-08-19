exports.ids = [17,1,8,9,10];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-select{position:relative;font-family:inherit}.v-select,.v-select *{box-sizing:border-box}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;transition:opacity .15s cubic-bezier(1,.5,.8,1)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{cursor:not-allowed;background-color:#f8f8f8}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;padding:0 0 4px;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:flex;align-items:center;padding:4px 6px 0 3px}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:rgba(60,60,60,.5);transform:scale(1);transition:transform .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.vs--open .vs__open-indicator{transform:rotate(180deg) scale(1)}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;box-sizing:border-box;position:absolute;top:calc(100% - 1px);left:0;z-index:1000;padding:5px 0;margin:0;width:100%;max-height:350px;min-width:160px;overflow-y:auto;box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border:1px solid rgba(60,60,60,.26);border-top-style:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.vs__dropdown-option:hover{cursor:pointer}.vs__dropdown-option--highlight{background:#5897fb;color:#fff}.vs__dropdown-option--disabled{background:inherit;color:rgba(60,60,60,.5)}.vs__dropdown-option--disabled:hover{cursor:inherit}.vs__selected{display:flex;align-items:center;background-color:#f0f0f0;border:1px solid rgba(60,60,60,.26);border-radius:4px;color:#333;line-height:1.4;margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:rgba(60,60,60,.5);text-shadow:0 1px 0 #fff}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.4;font-size:1em;border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;box-shadow:none;width:0;max-width:100%;flex-grow:1;z-index:1}.vs__search::-moz-placeholder{color:inherit}.vs__search:-ms-input-placeholder{color:inherit}.vs__search::placeholder{color:inherit}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search:hover{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border:.9em solid hsla(0,0%,39.2%,.1);border-left-color:rgba(60,60,60,.45);transform:translateZ(0);-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em}.vs--loading .vs__spinner{opacity:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pin.4de6e11.svg";

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("49091b94", content, true, context)
};

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0e5950d9", content, true, context)
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clock.0b6170e.svg";

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDM3LjY3NiA0MzcuNjc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzcuNjc2IDQzNy42NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBwb2ludHM9IjIxOC44NDEsMjU2LjY1OSAxOS43NDQsODEuODI0IDQxNy45MzEsODEuODI0IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDEwMDAyOyIgcG9pbnRzPSIxMzkuNTI5LDIxOC43ODEgMCwzNDEuMzExIDAsOTYuMjUyIAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDEwMDAyOyIgcG9pbnRzPSIxNTcuNjE1LDIzNC42NjUgMjE4Ljg0MSwyODguNDI3IDI4MC4wNTUsMjM0LjY2NSA0MTguMDU3LDM1NS44NTIgMTkuNjE5LDM1NS44NTIgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBwb2ludHM9IjI5OC4xNDEsMjE4Ljc4NyA0MzcuNjc2LDk2LjI1MiA0MzcuNjc2LDM0MS4zMTEgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iYm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE4Ljc1IDloLS43NXYtM2MwLTMuMzA5LTIuNjkxLTYtNi02cy02IDIuNjkxLTYgNnYzaC0uNzVjLTEuMjQgMC0yLjI1IDEuMDA5LTIuMjUgMi4yNXYxMC41YzAgMS4yNDEgMS4wMSAyLjI1IDIuMjUgMi4yNWgxMy41YzEuMjQgMCAyLjI1LTEuMDA5IDIuMjUtMi4yNXYtMTAuNWMwLTEuMjQxLTEuMDEtMi4yNS0yLjI1LTIuMjV6bS0xMC43NS0zYzAtMi4yMDYgMS43OTQtNCA0LTRzNCAxLjc5NCA0IDR2M2gtOHptNSAxMC43MjJ2Mi4yNzhjMCAuNTUyLS40NDcgMS0xIDFzLTEtLjQ0OC0xLTF2LTIuMjc4Yy0uNTk1LS4zNDctMS0uOTg1LTEtMS43MjIgMC0xLjEwMy44OTctMiAyLTJzMiAuODk3IDIgMmMwIC43MzctLjQwNSAxLjM3NS0xIDEuNzIyeiIvPjwvc3ZnPg=="

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_0_id_6830b9a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_0_id_6830b9a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_0_id_6830b9a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_0_id_6830b9a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_0_id_6830b9a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".conteneur[data-v-6830b9a8]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:100%;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#myPaymentForm,.kr-embedded{width:100%!important}.kr-embedded .kr-payment-button{background-color:var(--color1)!important;width:100%;border:2px solid var(--color1);color:var(--color2);padding:.5rem 1rem;font-size:1.2rem;text-transform:uppercase;border-radius:10px;align-items:center;font-family:var(--font1);outline:none;cursor:pointer;position:relative;display:flex;text-align:center;justify-content:center;flex-direction:row;transition:all .3s ease-in-out;width:100%!important}.kr-embedded .kr-payment-button:hover{background-color:var(--color2)!important;color:var(--color1);transition:all .3s ease-in-out;border:2px solid var(--color1);width:100%!important}.kr-form-error{width:100%!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/delete.ef20552.svg";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(118)(module)))

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/auth/Login.vue?vue&type=template&id=aaf183a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container identification"},[_vm._ssrNode("<div class=\"row-bootstrap m-0\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-5 col-lg-4 half\">","</div>",[(!_vm.username)?_vm._ssrNode("<form data-vv-scope=\"formLogIn\" action class=\"formLogIn\">","</form>",[_vm._ssrNode("<h2>J'AI DÉJÀ UN COMPTE</h2> "),_vm._ssrNode("<div class=\"input-style\">","</div>",[_vm._ssrNode("<label for=\"formLogInEmailLogin\">Adresse e-mail</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formLog.mail),expression:"formLog.mail"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],attrs:{"type":"email","id":"formLogInEmailLogin","name":"emailLogin"},domProps:{"value":(_vm.formLog.mail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formLog, "mail", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formLogIn.emailLogin')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formLogIn.emailLogin")))+"</span> <img"+(_vm._ssrAttr("src",__webpack_require__(110)))+" alt=\"mail\" class=\"inputImg\">")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"input-style\">","</div>",[_vm._ssrNode("<label for=\"formLogInPasswordLogin\">Mot de passe</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formLog.password),expression:"formLog.password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],attrs:{"type":"password","id":"formLogInPasswordLogin","name":"passwordLogin"},domProps:{"value":(_vm.formLog.password)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.logIn()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formLog, "password", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formLogIn.passwordLogin')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formLogIn.passwordLogin")))+"</span> <img"+(_vm._ssrAttr("src",__webpack_require__(111)))+" alt=\"password\" class=\"inputImg\"> <a href=\"#\" class=\"forgot\">Mot de passe oublié ?</a>")],2),_vm._ssrNode(" <div class=\"btn-login\" style=\"width: 100%\"><button type=\"button\"><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt=\"connexion\"> <p>CONNEXION</p></button></div>")],2):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12 col-md-7 col-lg-8 half\">","</div>",[(!_vm.username && !_vm.isSignedUp)?_vm._ssrNode("<form data-vv-scope=\"formSignUp\" class=\"formSignUp\">","</form>",[_vm._ssrNode("<h2>JE N'AI PAS DE COMPTE</h2> <p style=\"\\n            color: var(--color3);\\n            font-style: italic;\\n            margin-bottom: 20px;\\n          \">\n          Inscrivez vous dès maintenant pour commander encore plus vite,\n          suivre l'avancé de vos commandes et recevoir nos offres.\n        </p> "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-lg-6\">","</div>",[_vm._ssrNode("<div style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formSignUpLastName\">Nom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.lastName),expression:"formSignUp.lastName"}],attrs:{"type":"text","id":"formSignUpLastName","name":"lastName"},domProps:{"value":(_vm.formSignUp.lastName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "lastName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.lastName')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formSignUp.lastName")))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12 col-lg-6\">","</div>",[_vm._ssrNode("<div style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formSignUpPrenom\">Prénom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.firstName),expression:"formSignUp.firstName"}],attrs:{"type":"text","id":"formSignUpPrenom","name":"firstName"},domProps:{"value":(_vm.formSignUp.firstName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "firstName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.firstName')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formSignUp.firstName")))+"</span>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-lg-6\">","</div>",[_vm._ssrNode("<div style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formSignUpEmail\">Adresse e-mail</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.mail),expression:"formSignUp.mail"}],attrs:{"type":"email","id":"formSignUpEmail","name":"email"},domProps:{"value":(_vm.formSignUp.mail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "mail", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.email')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formSignUp.email")))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12 col-lg-6\">","</div>",[_vm._ssrNode("<div style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formSignPhone\">Numéro de Téléphone</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('numeric|max:10'),expression:"'numeric|max:10'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.phone),expression:"formSignUp.phone"}],attrs:{"type":"text","id":"formSignPhone","name":"phone"},domProps:{"value":(_vm.formSignUp.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "phone", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.phone')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formSignUp.phone")))+"</span>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-lg-12\">","</div>",[_vm._ssrNode("<div style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formSignUpAddress\">Adresse postale</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|'),expression:"'required|'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.address),expression:"formSignUp.address"}],attrs:{"id":"formSignUpAddress","name":"address"},domProps:{"value":(_vm.formSignUp.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "address", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.address')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formSignUp.address")))+"</span>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-lg-6\">","</div>",[_vm._ssrNode("<div style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formSignUpPassword\">Mot de passe</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|min:6'),expression:"'required|min:6'"},{name:"model",rawName:"v-model",value:(_vm.formSignUp.password),expression:"formSignUp.password"}],ref:"password",attrs:{"type":"password","id":"formSignUpPassword","name":"password"},domProps:{"value":(_vm.formSignUp.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSignUp, "password", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.password')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formSignUp.password")))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12 col-lg-6\">","</div>",[_vm._ssrNode("<div style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formSignUpConfirmedPassword\">Confirmer le mot de passe</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|confirmed:password'),expression:"'required|confirmed:password'"},{name:"model",rawName:"v-model",value:(_vm.confirmedPassword),expression:"confirmedPassword"}],attrs:{"type":"password","id":"formSignUpConfirmedPassword","name":"confirmedPassword"},domProps:{"value":(_vm.confirmedPassword)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.signUp()},"input":function($event){if($event.target.composing){ return; }_vm.confirmedPassword=$event.target.value}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('formSignUp.confirmedPassword')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("formSignUp.confirmedPassword")))+"</span>")],2)])],2),_vm._ssrNode(" <div class=\"row-cgv\"><input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.formSignUp.newsletter)?_vm._i(_vm.formSignUp.newsletter,null)>-1:(_vm.formSignUp.newsletter)))+"> <p>Je souhaite recevoir des offres promotionnelles</p></div> <div class=\"flex footer-buttons\"><div class=\"btn-signup\" style=\"margin-top: 20px\"><button type=\"button\" class=\"inscr\"><p>CREER UN COMPTE</p> <img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt=\"connexion\" style=\"height: 1rem\"></button></div></div>")],2):_vm._e()])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/auth/Login.vue?vue&type=template&id=aaf183a6&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(10);
var external_vee_validate_default = /*#__PURE__*/__webpack_require__.n(external_vee_validate_);

// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(11);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/auth/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.use(external_vee_validate_default.a);




const dict = {
  custom: {
    conditionsAccepted: {
      required: () => "Merci d'accepter les Conditions Générales de Ventes sur internet (CGV)"
    },
    email: {
      required: () => "Merci d'entrer un email",
      email: () => "Merci d'entrer une adresse email valide"
    },
    firstName: {
      required: () => "Merci de renseigner un prénom"
    },
    lastName: {
      required: () => "Merci de renseigner un nom"
    },
    password: {
      required: () => "Merci de renseigner un mot de passe",
      min: () => "Le mot de passe doit contenir au moins 6 caractères"
    },
    confirmedPassword: {
      required: () => "Merci de renseigner un mot de passe",
      confirmed: () => "Les deux mots de passes ne sont pas identiques"
    },
    address: {
      required: () => "Merci de renseigner une adresse postale"
    },
    passwordEdit: {
      required: () => "Merci de renseigner votre mot de passe"
    },
    newPassword: {
      min: () => "Le mot de passe doit contenir au moins 6 caractères"
    },
    confirmedNewPassword: {
      confirmed: () => "Les deux mots de passes ne sont pas identiques"
    },
    emailLogin: {
      required: () => "Merci d'entrer un email",
      email: () => "Merci d'entrer une adresse email valide"
    },
    passwordLogin: {
      required: () => "Merci d'entrer votre mot de passe"
    },
    phone: {
      numeric: () => "Merci d'entrer un numéro de téléphone valide",
      max: () => "Merci d'entrer un numéro de téléphone valide"
    }
  }
};
external_vee_validate_["Validator"].localize("fr", dict);
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  data() {
    return {
      formLog: {
        mail: "",
        password: ""
      },
      formSignUp: {
        firstName: "",
        lastName: "",
        // conditionsAccepted: false,
        newsletter: false,
        mail: "",
        password: ""
      },
      isSignedUp: false,
      confirmedPassword: ""
    };
  },

  mounted() {},

  methods: { ...Object(external_vuex_["mapMutations"])({
      setUser: "auth/setUser",
      logout: "auth/logout"
    }),

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

    affectValue(data) {
      return new Promise((resolve, reject) => {
        var newValue = {
          name: data.firstName,
          surname: data.lastName,
          mail: data.mail,
          address: data.address,
          password: data.password
        };
        resolve(newValue);
      });
    },

    signUp() {
      this.$validator.validateAll("formSignUp").then(res => {
        if (res) {
          this.affectValue(this.formSignUp).then(result => {
            external_axios_default.a.post("http://3.21.236.175:9000/users/", result).then(response => {
              this.formSignUp = {
                // conditionsAccepted: false,
                newsletter: false,
                firstName: "",
                lastName: "",
                mail: "",
                password: "",
                address: "" // zipcode: ""

              };
            }).catch(error => {
              console.error(error);
            });
          });
        } else {
          console.error("Le formulaire contient une erreur");
        }
      });
    },

    logIn() {
      this.logout();
      this.$validator.validateAll("formLogIn").then(res => {
        if (res) {
          external_axios_default.a.post("http://3.21.236.175:9000/auth/login", {
            email: this.formLog.mail,
            password: this.formLog.password
          }).then(response => {
            console.log(response);
            localStorage.setItem("accessToken", response.data.accessToken);
            external_axios_default.a.get("http://3.21.236.175:9000/users/" + this.formLog.mail).then(response => {
              this.setUser({
                lastName: response.data.user.Name,
                firstName: response.data.user.Surname,
                id: response.data.user.Id,
                deleteDate: null,
                mail: response.data.user.Mail,
                newsletter: false,
                password: response.data.user.Password,
                type: "customer"
              });
            });
          }).catch(error => {
            console.error(error);
          });
        } else {
          console.error("Le formulaire contient une erreur");
        }
      });
    }

  },
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    },

    userInfo() {
      return JSON.parse(JSON.stringify(this.$store.getters["auth/user"]));
    }

  },
  watch: {}
});
// CONCATENATED MODULE: ./components/auth/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/auth/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "301f99d8"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/checkout/Payment.vue?vue&type=template&id=6830b9a8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container delivery"},[_vm._ssrNode("<div class=\"row-bootstrap m-0\" data-v-6830b9a8><div class=\"col-12 col-md-4 half\" data-v-6830b9a8><h2 data-v-6830b9a8>MON PANIER</h2> <div class=\"cart\" data-v-6830b9a8><ul class=\"cart-items\" data-v-6830b9a8>"+(_vm._ssrList((_vm.items),function(item,index){return ("<li data-v-6830b9a8><div class=\"flex\" data-v-6830b9a8><h3 data-v-6830b9a8>"+_vm._ssrEscape("\n                "+_vm._s(item.name +
                  (item.itemQuantity > 1 ? " x" + item.itemQuantity : ""))+"\n              ")+"</h3> <p class=\"price\" data-v-6830b9a8>"+_vm._ssrEscape("\n                "+_vm._s((_vm.getItemPrice(item) * item.itemQuantity).toFixed(2).replace(".",","))+"€\n              ")+"</p></div></li>")}))+"</ul> <div class=\"cart-footer\" data-v-6830b9a8><div class=\"flex row-subtotal\" data-v-6830b9a8><p data-v-6830b9a8>Total HT</p> <p data-v-6830b9a8>"+_vm._ssrEscape(_vm._s(_vm.getTotalPriceHt())+"€")+"</p></div> "+(_vm._ssrList((_vm.listTva),function(item,i){return ("<div class=\"flex\" data-v-6830b9a8><p data-v-6830b9a8>"+_vm._ssrEscape("TVA "+_vm._s(item[0].tva)+" %")+"</p> <p data-v-6830b9a8>"+_vm._ssrEscape(_vm._s(_vm.getTva(item, item[0].tva))+"€")+"</p></div>")}))+" <div class=\"flex row-total\" data-v-6830b9a8><p data-v-6830b9a8>Total TTC</p> <p data-v-6830b9a8>"+_vm._ssrEscape(_vm._s(_vm.ttcTotalProductPrice)+"€")+"</p></div></div></div></div> <div class=\"col-12 col-md-8 half\" data-v-6830b9a8><div class=\"conteneur\" data-v-6830b9a8><div id=\"myPaymentForm\" data-v-6830b9a8></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/checkout/Payment.vue?vue&type=template&id=6830b9a8&scoped=true&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@lyracom/embedded-form-glue"
var embedded_form_glue_ = __webpack_require__(94);
var embedded_form_glue_default = /*#__PURE__*/__webpack_require__.n(embedded_form_glue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/checkout/Payment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* import embedded-form-glue library */

 // import ""

/* define the public key, you should use your personal key */

/* harmony default export */ var Paymentvue_type_script_lang_js_ = ({
  data() {
    return {
      msg: "paiement",
      base64Auth: ""
    };
  },

  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },

    totalPriceWithoutDiscountCode() {
      return this.totalPrice(false);
    },

    ...Object(external_vuex_["mapGetters"])({
      totalPrice: "localStorage/price",
      items: "localStorage/items",
      getItemPrice: "localStorage/itemPrice",
      getOptionLivraison: "optionLivraison/optionLivraison",
      discountCode: "localStorage/discountCode"
    }),

    calcTva() {
      var tvaCost = this.totalPrice() - this.totalPrice() / 1.2;
      return tvaCost.toFixed(2);
    },

    ttcTotalProductPrice() {
      return parseFloat(this.totalPrice()).toFixed(2).replace(".", ",");
    },

    listTva() {
      var resultList = this.items.reduce((result, currentValue) => {
        (result[currentValue.tva] = result[currentValue.tva] || []).push(currentValue);
        return result;
      }, {});
      return resultList;
    }

  },

  mounted() {
    const endpoint = 'https://api.systempay.fr';
    const publicKey = '73239078:testpublickey_Zr3fXIKKx0mLY9YNBQEan42ano2QsdrLuyb2W54QWmUJQ';
    this.base64Auth = btoa('69876357:testpassword_DEMOPRIVATEKEY23G4475zXZQ2UA5x7M');
    const headers = {
      "Authorization": "Basic " + this.base64Auth,
      "Content-Type": "application/json"
    };
    const params = {
      "amount": parseFloat(parseFloat(this.totalPrice()).toFixed(2) * 100).toFixed(0),
      //EN CENTIMES
      "currency": "EUR",
      "orderId": "myOrderId-999999",
      "customer": {
        "email": 'testMail@test.fr' //this.user.mail

      }
    };
    external_axios_default.a.post('https://api.systempay.fr/api-payment/V4/Charge/CreatePayment', params, {
      headers
    }).then(res => {
      embedded_form_glue_default.a.loadLibrary(endpoint, publicKey).then(({
        KR
      }) => KR.setFormConfig({
        formToken: res.data.answer.formToken,
        'kr-language': 'en-US'
      })).then(({
        KR
      }) => KR.addForm('#myPaymentForm')).then(({
        KR,
        result
      }) => KR.showForm(result.formId)).then(({
        KR
      }) => {
        KR.onFormReady(() => {
          this.fixFrenchPaymentButton();
        });
        return KR.setFormConfig({
          'kr-language': 'fr-FR'
        });
      }).then(({
        KR
      }) => {
        KR.onSubmit(res => {
          //retour du paiement
          //si le paiement est ok, on emit @paiement avec le status du paiement pour que la commande soit insérée dans firebase
          console.log('submitted', res); //exemple de retour :
          // {
          //     "shopId": "69876357",
          //     "orderCycle": "CLOSED",
          //     "orderStatus": "PAID",
          //     "serverDate": "2018-09-27T14:02:17+00:00",
          //     "orderDetails": {
          //         "orderTotalAmount": 990,
          //         "orderCurrency": "EUR",
          //         "mode": "TEST",
          //         "orderId": null,
          //         "_type": "V4/OrderDetails"
          //     },
          //     "customer": {
          //         "billingDetails": {
          //             "address": null,
          //             "category": null,
          //             "cellPhoneNumber": null,
          //             "city": null,
          //             "country": null,
          //             "district": null,
          //             "firstName": null,
          //             "identityCode": null,
          //             "language": "EN",
          //             "lastName": null,
          //             "phoneNumber": null,
          //             "state": null,
          //             "streetNumber": null,
          //             "title": null,
          //             "zipCode": null,
          //             "_type": "V4/Customer/BillingDetails"
          //         },
          //         "email": "sample@example.com",
          //         "reference": null,
          //         "shippingDetails": {
          //             "address": null,
          //             "address2": null,
          //             "category": null,
          //             "city": null,
          //             "country": null,
          //             "deliveryCompanyName": null,
          //             "district": null,
          //             "firstName": null,
          //             "identityCode": null,
          //             "lastName": null,
          //             "legalName": null,
          //             "phoneNumber": null,
          //             "shippingMethod": null,
          //             "shippingSpeed": null,
          //             "state": null,
          //             "streetNumber": null,
          //             "zipCode": null,
          //             "_type": "V4/Customer/ShippingDetails"
          //         },
          //         "extraDetails": {
          //             "browserAccept": null,
          //             "fingerPrintId": null,
          //             "ipAddress": "90.71.64.161",
          //             "browserUserAgent": "Mozilla/5.0",
          //             "_type": "V4/Customer/ExtraDetails"
          //         },
          //         "shoppingCart": {
          //             "insuranceAmount": null,
          //             "shippingAmount": null,
          //             "taxAmount": null,
          //             "cartItemInfo": null,
          //             "_type": "V4/Customer/ShoppingCart"
          //         },
          //         "_type": "V4/Customer/Customer"
          //     },
          //     "transactions": [{
          //         "shopId": "69876357",
          //         "uuid": "5b158f084502428499b2d34ad074df05",
          //         "amount": 990,
          //         "currency": "EUR",
          //         "paymentMethodType": "CARD",
          //         "paymentMethodToken": null,
          //         "status": "PAID",
          //         "detailedStatus": "AUTHORISED",
          //         "operationType": "DEBIT",
          //         "effectiveStrongAuthentication": "DISABLED",
          //         "creationDate": "2018-09-27T14:02:16+00:00",
          //         "errorCode": null,
          //         "errorMessage": null,
          //         "detailedErrorCode": null,
          //         "detailedErrorMessage": null,
          //         "metadata": null,
          //         "transactionDetails": {
          //             "liabilityShift": "NO",
          //             "effectiveAmount": 990,
          //             "effectiveCurrency": "EUR",
          //             "creationContext": "CHARGE",
          //             "cardDetails": {
          //                 "paymentSource": "EC",
          //                 "manualValidation": "NO",
          //                 "expectedCaptureDate": "2018-09-27T14:02:16+00:00",
          //                 "effectiveBrand": "CB",
          //                 "pan": "497010XXXXXX0055",
          //                 "expiryMonth": 11,
          //                 "expiryYear": 2021,
          //                 "country": "FR",
          //                 "emisorCode": null,
          //                 "effectiveProductCode": "F",
          //                 "legacyTransId": "927516",
          //                 "legacyTransDate": "2018-09-27T14:02:05+00:00",
          //                 "paymentMethodSource": "NEW",
          //                 "authorizationResponse": {
          //                     "amount": 990,
          //                     "currency": "EUR",
          //                     "authorizationDate": "2018-09-27T14:02:16+00:00",
          //                     "authorizationNumber": "3fe7a1",
          //                     "authorizationResult": "0",
          //                     "authorizationMode": "FULL",
          //                     "_type": "V4/PaymentMethod/Details/Cards/CardAuthorizationResponse"
          //                 },
          //                 "captureResponse": {
          //                     "refundAmount": null,
          //                     "captureDate": null,
          //                     "captureFileNumber": null,
          //                     "refundCurrency": null,
          //                     "_type": "V4/PaymentMethod/Details/Cards/CardCaptureResponse"
          //                 },
          //                 "threeDSResponse": {
          //                     "authenticationResultData": {
          //                         "transactionCondition": "COND_3D_ERROR",
          //                         "enrolled": "UNKNOWN",
          //                         "status": "UNKNOWN",
          //                         "eci": null,
          //                         "xid": null,
          //                         "cavvAlgorithm": null,
          //                         "cavv": null,
          //                         "signValid": null,
          //                         "brand": "VISA",
          //                         "_type": "V4/PaymentMethod/Details/Cards/CardAuthenticationResponse"
          //                     },
          //                     "_type": "V4/PaymentMethod/Details/Cards/ThreeDSResponse"
          //                 },
          //                 "installmentNumber": null,
          //                 "markAuthorizationResponse": {
          //                     "amount": null,
          //                     "currency": null,
          //                     "authorizationDate": null,
          //                     "authorizationNumber": null,
          //                     "authorizationResult": null,
          //                     "_type": "V4/PaymentMethod/Details/Cards/MarkAuthorizationResponse"
          //                 },
          //                 "_type": "V4/PaymentMethod/Details/CardDetails"
          //             },
          //             "parentTransactionUuid": null,
          //             "mid": "6969696",
          //             "sequenceNumber": 1,
          //             "_type": "V4/TransactionDetails"
          //         },
          //         "_type": "V4/PaymentTransaction"
          //     }],
          //     "_type": "V4/Payment"
          // }
        });
        KR.onError(err => {
          //En cas d'erreur
          this.$emit("paiement");
          console.error(err);
        });
      }).catch(error => {
        console.log(error);
      });
    });
  },

  methods: {
    fixFrenchPaymentButton() {
      const elem = document.getElementById('myPaymentForm');
      const elements = elem.querySelectorAll('.kr-payment-button');
      const paymentButton = elements[0].childNodes[0];
      paymentButton.textContent = 'Payer ' + parseFloat(parseFloat(this.totalPrice()).toFixed(2)) + ' EUR';
    },

    getTotalPriceHt() {
      return parseFloat(this.items.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) - parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * currentValue.tva / 100;
      }, 0)).toFixed(2).replace(".", ",");
    },

    getTva(items, taux) {
      return parseFloat(items.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * taux / 100;
      }, 0)).toFixed(2).replace(".", ",");
    }

  }
});
// CONCATENATED MODULE: ./components/checkout/Payment.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkout_Paymentvue_type_script_lang_js_ = (Paymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/checkout/Payment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(114)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  checkout_Paymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6830b9a8",
  "26daffd3"
  
)

/* harmony default export */ var Payment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/checkout/Summary.vue?vue&type=template&id=380a8d6c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container cart"},[_vm._ssrNode("<table class=\"list-article\">","</table>",[_vm._ssrNode("<tr><th>Produits</th> <th>Prix unitaire</th> <th class=\"align-center\">Quantité</th> <th>Total</th> <th></th></tr> "),_vm._l((_vm.items),function(item,i){return _vm._ssrNode("<tr"+(_vm._ssrAttr("item",item))+">","</tr>",[_c('NuxtLink',{attrs:{"to":'/produits/' + item.id}},[_c('td',[_c('img',{attrs:{"src":item.image,"alt":""}}),_vm._v(" "),_c('div',[_c('h3',[_vm._v(_vm._s(item.name))])])])]),_vm._ssrNode(" <td><p>"+_vm._ssrEscape(_vm._s(_vm.getItemPrice(item))+"€")+"</p></td> <td><div class=\"flex justify-center\">"+((item.itemQuantity == 1)?("<img"+(_vm._ssrAttr("src",__webpack_require__(116)))+" class=\"quantity-item-delete\" style=\"margin-right:10px\">"):("<span class=\"quantity-item-change\">-</span>"))+" <span>"+_vm._ssrEscape("\n              "+_vm._s(item.itemQuantity)+"\n            ")+"</span> <span class=\"quantity-item-change\">+</span></div></td> <td><p>"+_vm._ssrEscape(_vm._s((_vm.getItemPrice(item) * item.itemQuantity).toFixed(2))+"€")+"</p></td> <td>"+((
            _vm.items.length > 1 &&
            (_vm.$store.getters['optionLivraison/optionLivraison'].mode ==
              'retrait' ||
              (_vm.$store.getters['optionLivraison/optionLivraison'].mode ==
                'livraison' &&
                _vm.totalPrice() - _vm.getItemPrice(item) * item.itemQuantity >
                  _vm.$store.getters['optionLivraison/optionLivraison'].zone
                    .minAmount))
          )?("<div class=\"delete-item\"><div class=\"mdiv\"><div class=\"md\"></div></div></div>"):"<!---->")+"</td>")],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"list-article-mobile\">","</ul>",_vm._l((_vm.items),function(item,i){return _vm._ssrNode("<li"+(_vm._ssrAttr("item",item))+">","</li>",[_vm._ssrNode("<div style=\"display: flex; align-items: center;\">","</div>",[_c('NuxtLink',{attrs:{"to":'/produits/' + item.id}},[_c('img',{attrs:{"src":item.image,"alt":"image de l'article"}})]),_vm._ssrNode(" <div class=\"column\"><p class=\"titre\">"+_vm._ssrEscape(_vm._s(item.name))+"</p> <div class=\"row\"><p>Prix unitaire :</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getItemPrice(item).replace(".",","))+"€")+"</p></div> <div class=\"row\"><p>Quantité :</p> <div class=\"flex\" style=\"justify-content: flex-end;\">"+((item.itemQuantity > 1)?("<p class=\"quantity-item-change\">-</p>"):("<p class=\"quantity-item-change\">suppr</p>"))+" <p>"+_vm._ssrEscape(_vm._s(item.itemQuantity))+"</p> <p class=\"quantity-item-change\">+</p></div></div> <div class=\"row row-sum\"><p>Total TTC :</p> <p>"+_vm._ssrEscape(_vm._s((_vm.getItemPrice(item) * item.itemQuantity).toFixed(2).replace(".",","))+"€")+"</p></div></div>")],2)])}),0),_vm._ssrNode(" <div class=\"cart-footer\"><div class=\"zone-promo\"></div> <div class=\"zone-totaux\"><div class=\"ligne-total dashed\"><p>Nombre de produit</p> <p>"+_vm._ssrEscape(_vm._s(_vm.items.length))+"</p></div> <div class=\"ligne-subtotal dashed\"><p>Total HT</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getTotalPriceHt())+"€")+"</p></div> "+(_vm._ssrList((_vm.listTva),function(item,i){return ("<div class=\"ligne-total\"><p>"+_vm._ssrEscape("TVA "+_vm._s(item[0].tva)+" %")+"</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getTva(item, item[0].tva))+"€")+"</p></div>")}))+" <div class=\"ligne-total-ttc\"><p>Total TTC</p> <p>"+_vm._ssrEscape(_vm._s(_vm.ttcTotalProductPrice)+"€")+"</p></div> <div class=\"ligne-cgv\"><input type=\"checkbox\" id=\"acceptConditions\""+(_vm._ssrAttr("checked",Array.isArray(_vm.isConditionsAccepted)?_vm._i(_vm.isConditionsAccepted,null)>-1:(_vm.isConditionsAccepted)))+"> <label aria-describedby=\"label\" for=\"acceptConditions\">J'ai lu et j'accepte les Conditions Générales de Vente.</label></div> "+((_vm.getOptionLivraison.mode == 'livraison' && _vm.totalPrice(false) < parseFloat(_vm.getOptionLivraison.zone.minAmount))?("<div class=\"ligne-alert\"><p>Votre panier doit atteindre le montant minimum de <b>"+_vm._ssrEscape(_vm._s(_vm.getOptionLivraison.zone.minAmount+'€ HT'))+"</b> pour être livré dans votre zone.</p></div>"):"<!---->")+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/checkout/Summary.vue?vue&type=template&id=380a8d6c&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/checkout/Summary.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Summaryvue_type_script_lang_js_ = ({
  name: "Summary",
  props: {
    items: Array,
    cgvAccept: Boolean
  },

  data() {
    return {
      codePromo: "",
      isConditionsAccepted: false,
      errorCodePromo: ""
    };
  },

  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },

    totalPriceWithoutDiscountCode() {
      return this.totalPrice();
    },

    ...Object(external_vuex_["mapGetters"])({
      totalPrice: "localStorage/price",
      getItemPrice: "localStorage/itemPrice",
      getOptionLivraison: "optionLivraison/optionLivraison",
      discountCode: "localStorage/discountCode"
    }),

    calcTva() {
      var tvaCost = this.totalPrice() - this.totalPrice() / 1.2;
      return tvaCost.toFixed(2);
    },

    ttcTotalProductPrice() {
      return parseFloat(this.totalPrice).toFixed(2).replace(".", ",");
    },

    listTva() {
      var resultList = this.items.reduce((result, currentValue) => {
        (result[currentValue.tva] = result[currentValue.tva] || []).push(currentValue);
        return result;
      }, {});
      return resultList;
    }

  },
  watch: {
    isConditionsAccepted(newVal) {
      this.emitChange(newVal);
    }

  },
  methods: {
    getTotalPriceHt() {
      return parseFloat(this.items.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) - parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * currentValue.tva / 100;
      }, 0)).toFixed(2).replace(".", ",");
    },

    getTva(items, taux) {
      return parseFloat(items.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * taux / 100;
      }, 0)).toFixed(2).replace(".", ",");
    },

    ...Object(external_vuex_["mapMutations"])({
      deleteItemFromCart: "localStorage/delete",
      setDiscountCode: "localStorage/setDiscountCode",
      removeDiscountCode: "localStorage/removeDiscountCode",
      addToCart: "localStorage/add",
      removeFromCart: "localStorage/remove"
    }),

    checkout() {
      this.items.forEach(elem => {
        elem["chosenPrice"] = this.getItemPrice(elem);
        elem["chosenTotalPrice"] = this.getItemPrice(elem);
      });
      var ref = firebaseConfig["a" /* db */].collection("customers").doc(process.env.ID_CUSTOMER).collection("sites").doc(process.env.ID_SITE).collection("users").doc(this.user.mail).collection("orders");
      ref.add({
        checkout: this.items,
        ttcTotalProductPrice: this.ttcTotalProductPrice
      });
    },

    emitChange(value) {
      this.$emit("conditionsChange", value);
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./components/checkout/Summary.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkout_Summaryvue_type_script_lang_js_ = (Summaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/checkout/Summary.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  checkout_Summaryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b91a573"
  
)

/* harmony default export */ var Summary = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/checkout/PersonnalInfo.vue?vue&type=template&id=4faff8f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container delivery"},[_vm._ssrNode("<div class=\"row-bootstrap m-0\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-4 half\"><h2>MON PANIER</h2> <div class=\"cart\"><ul class=\"cart-items\">"+(_vm._ssrList((_vm.selectedItems),function(item,index){return ("<li><div class=\"flex\"><h3>"+_vm._ssrEscape("\n                "+_vm._s(item.name +
                  (item.itemQuantity > 1 ? " x" + item.itemQuantity : ""))+"\n              ")+"</h3> <p class=\"price\">"+_vm._ssrEscape("\n                "+_vm._s((_vm.getItemPrice(item) * item.itemQuantity)
                    .toFixed(2)
                    .replace(".", ","))+"€\n              ")+"</p></div></li>")}))+"</ul> <div class=\"cart-footer\"><div class=\"flex row-subtotal\"><p>Total HT</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getTotalPriceHt())+"€")+"</p></div> "+(_vm._ssrList((_vm.listTva),function(item,i){return ("<div class=\"flex\"><p>"+_vm._ssrEscape("TVA "+_vm._s(item[0].tva)+" %")+"</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getTva(item, item[0].tva))+"€")+"</p></div>")}))+" <div class=\"flex row-total\"><p>Total TTC</p> <p>"+_vm._ssrEscape(_vm._s((_vm.getPrice * 1).toFixed(2))+"€")+"</p></div></div></div></div> "),_vm._ssrNode("<div class=\"col-12 col-md-8 half\">","</div>",[_vm._ssrNode(((_vm.getOptionLivraison.mode == 'retrait')?("<div><h2 class=\"title\">MON DÉPOT DE RETRAIT</h2> <p style=\"\\n            color: var(--color3);\\n            font-style: italic;\\n            margin-bottom: 20px;\\n          \">\n          Vous avez choisi le retrait dans un de nos dépots, merci de préciser\n          un dépot.\n        </p> <ul class=\"depots-items\">"+(_vm._ssrList((_vm.depots),function(item,index){return ("<li"+(_vm._ssrClass(null,_vm.selectedDeliveryAddress == item ? 'active' : ''))+"><label class=\"flex\"><div class=\"radio\"><input"+(_vm._ssrAttr("id",item))+(_vm._ssrAttr("name",item.label))+" type=\"radio\""+(_vm._ssrAttr("value",item))+(_vm._ssrAttr("checked",_vm._q(_vm.selectedDeliveryAddress,item)))+"></div> <div><p class=\"name\"><span>"+_vm._ssrEscape(_vm._s(item.label))+"</span></p> <div class=\"flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(103)))+"> <p>"+_vm._ssrEscape(_vm._s(item.address))+"</p></div> <div class=\"flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+"> <p class=\"tel\">"+_vm._ssrEscape(_vm._s(item.phone))+"</p></div> <div class=\"flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(109)))+"> <p>"+_vm._ssrEscape(_vm._s(item.hours))+"</p></div></div></label></li>")}))+"</ul></div>"):"<!---->")+" <h2>MON ADRESSE DE FACTURATION</h2> "),(!_vm.sameAddress || _vm.getOptionLivraison.mode == 'retrait')?_vm._ssrNode("<div>","</div>",[(!_vm.sameAddress || _vm.getOptionLivraison.mode == 'retrait')?_vm._ssrNode("<form data-vv-scope=\"billingAddressForm\" class=\"formInvoice\">","</form>",[_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-6\">","</div>",[_vm._ssrNode("<label for=\"formInvoiceLastName\">Nom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.billingAddressForm.lastName),expression:"billingAddressForm.lastName"}],attrs:{"type":"text","id":"formInvoiceLastName","name":"lastName"},domProps:{"value":(_vm.billingAddressForm.lastName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.billingAddressForm, "lastName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.lastName')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.lastName")))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12 col-md-6\">","</div>",[_vm._ssrNode("<label for=\"formInvoiceFirstName\">Prénom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.billingAddressForm.firstName),expression:"billingAddressForm.firstName"}],attrs:{"type":"text","id":"formInvoiceFirstName","name":"firstName"},domProps:{"value":(_vm.billingAddressForm.firstName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.billingAddressForm, "firstName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.firstName')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.firstName")))+"</span>")],2)],2),_vm._ssrNode(" <div class=\"row-bootstrap\"><div class=\"col-12\"><label for=\"formInvoiceCompany\">Société (optionnel)</label> <input type=\"text\" id=\"formInvoiceCompany\" name=\"company\""+(_vm._ssrAttr("value",(_vm.billingAddressForm.company)))+"></div></div> "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<label for=\"formInvoiceAddress\">Adresse</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.billingAddressForm.address),expression:"billingAddressForm.address"}],attrs:{"type":"text","id":"formInvoiceAddress","name":"address"},domProps:{"value":(_vm.billingAddressForm.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.billingAddressForm, "address", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.address')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.address")))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-4\">","</div>",[_vm._ssrNode("<label for=\"formInvoiceZipCode\">Code Postal</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|max:5'),expression:"'required|max:5'"},{name:"model",rawName:"v-model",value:(_vm.billingAddressForm.zipCode),expression:"billingAddressForm.zipCode"}],attrs:{"type":"text","id":"formInvoiceZipCode","name":"zipCode"},domProps:{"value":(_vm.billingAddressForm.zipCode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.billingAddressForm, "zipCode", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.zipCode')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.zipCode")))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-8\">","</div>",[_vm._ssrNode("<label for=\"formInvoiceCity\">Ville</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.billingAddressForm.city),expression:"billingAddressForm.city"}],attrs:{"type":"text","id":"formInvoiceCity","name":"city"},domProps:{"value":(_vm.billingAddressForm.city)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.billingAddressForm, "city", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.city')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.city")))+"</span>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<label for=\"formInvoiceCountry\">Pays</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.billingAddressForm.country),expression:"billingAddressForm.country"}],attrs:{"type":"text","id":"formInvoiceCountry","name":"country"},domProps:{"value":(_vm.billingAddressForm.country)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.billingAddressForm, "country", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.country')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.country")))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row-bootstrap\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-6\">","</div>",[_vm._ssrNode("<label for=\"formInvoicePhone\">Téléphone</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|numeric|max:10'),expression:"'required|numeric|max:10'"},{name:"model",rawName:"v-model",value:(_vm.billingAddressForm.phone),expression:"billingAddressForm.phone"}],attrs:{"type":"text","id":"formInvoicePhone","name":"phone"},domProps:{"value":(_vm.billingAddressForm.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.billingAddressForm, "phone", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.phone')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.phone")))+"</span>")],2),_vm._ssrNode(" "),(
                _vm.user &&
                _vm.user.type == 'guest' &&
                _vm.getOptionLivraison.mode == 'retrait'
              )?_vm._ssrNode("<div class=\"col-12 col-md-6\">","</div>",[_vm._ssrNode("<label for=\"formInvoiceEmailGuest\">Email</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"},{name:"model",rawName:"v-model",value:(_vm.emailGuest),expression:"emailGuest"}],attrs:{"type":"text","id":"formInvoiceEmailGuest","name":"emailGuest"},domProps:{"value":(_vm.emailGuest)},on:{"input":function($event){if($event.target.composing){ return; }_vm.emailGuest=$event.target.value}}},[]),_vm._ssrNode(" <span class=\"is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('billingAddressForm.emailGuest')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("billingAddressForm.emailGuest")))+"</span>")],2):_vm._e()],2)],2):_vm._e()]):_vm._e(),_vm._ssrNode(" <div class=\"flex footer-buttons\"><div class=\"btn-valid\"><button type=\"button\"><p>Commander</p> <img"+(_vm._ssrAttr("src",__webpack_require__(19)))+" alt=\"connexion\" style=\"height: 1rem\"></button></div></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/checkout/PersonnalInfo.vue?vue&type=template&id=4faff8f4&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-select"
var external_vue_select_ = __webpack_require__(90);
var external_vue_select_default = /*#__PURE__*/__webpack_require__.n(external_vue_select_);

// EXTERNAL MODULE: ./node_modules/vue-select/dist/vue-select.css
var vue_select = __webpack_require__(99);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(10);
var external_vee_validate_default = /*#__PURE__*/__webpack_require__.n(external_vee_validate_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/checkout/PersonnalInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




external_vue_default.a.component("v-select", external_vue_select_default.a);


external_vue_default.a.use(external_vee_validate_default.a);

var isEqual = __webpack_require__(117);



const dict = {
  custom: {
    firstName: {
      required: () => "Veuillez renseigner votre prénom"
    },
    lastName: {
      required: () => "Veuillez renseigner votre nom"
    },
    address: {
      required: () => "Veuillez renseigner votre adresse"
    },
    city: {
      required: () => "Veuillez renseigner votre ville"
    },
    country: {
      required: () => "Veuillez renseigner votre pays"
    },
    zipCode: {
      required: () => "Veuillez renseigner votre code postal",
      max: () => "Le code postal ne peut pas contenir plus de 5 caractères"
    },
    phone: {
      required: () => "Veuillez renseigner votre téléphone",
      max: () => "Votre numéro ne peut pas contenir plus de 10 caractères",
      numeric: () => "Votre numéro ne peut contenir que des chiffres"
    },
    emailGuest: {
      required: () => "Veuillez renseigner votre adresse email",
      email: () => "Merci d'entrer une adresse email valide"
    }
  }
};
external_vee_validate_["Validator"].localize("fr", dict);
/* harmony default export */ var PersonnalInfovue_type_script_lang_js_ = ({
  name: "PersonnalInfo",

  data() {
    return {
      customVarParams: [],
      sameAddress: true,
      emailGuest: "",
      depots: [{
        label: "Entrepot de Mitry-Mory",
        address: "9 route de bosc mare 76560 DOUDEVILLE",
        phone: "06 19 à2 80 80",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Entrepot de Le Pontet",
        address: "19 boulevard de la Marne 76000 ROUEN",
        phone: "08 67 65 54 33",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Entrepot d'Angoulème",
        address: "76 rue la croix blanche 76190 YVETOT",
        phone: "06 18 63 67 63",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Entrepot d'Ipres",
        address: "93 rue Banaudon 69006 LYON",
        phone: "06 15 36 74 23",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Boutique de Lille",
        address: "93 rue Jean-Monnet 95190 GOUSSAINVILLE",
        phone: "08 53 24 35 46",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Boutique de Versailles",
        address: "70 avenue de Provence 59300 VALENCIENNES",
        phone: "06 16 23 35 25",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Boutique de Toulon",
        address: "77 rue de Lille 62000 ARRAS",
        phone: "06 16 23 45 09",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Boutique de Bordeaux",
        address: "85 Place du Jeu de Paume 18100 VIERZON",
        phone: "06 45 67 78 89",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Boutique de Nantes",
        address: "61 boulevard Bryas 94000 CRÉTEIL",
        phone: "06 12 34 35 56",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }, {
        label: "Boutique de Lyon",
        address: "36 rue Léon Dierx 93190 LIVRY-GARGAN",
        phone: "06 65 66 55 44",
        hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30"
      }],
      deliveryAddressForm: {
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        phone: ""
      },
      initialBillingAddress: {},
      initialDeliveryAddress: {},
      billingAddressForm: {
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        phone: ""
      },
      optionLivraison: {
        mode: "",
        zone: null,
        depot: null
      },
      selectedDeliveryAddress: null,
      selectedBillingAddress: null,
      formInfo: {
        firstName: "",
        lastName: "",
        mail: "",
        phone: ""
      }
    };
  },

  mounted() {
    this.preCompleteForm();
  },

  computed: {
    discountCode() {
      return this.$store.getters["localStorage/discountCode"];
    },

    username() {
      return this.$store.getters["auth/username"];
    },

    user() {
      return this.$store.getters["auth/user"];
    },

    isDelivery() {
      if (this.getOptionLivraison.mode == "livraison") {
        return true;
      } else {
        return false;
      }
    },

    ...Object(external_vuex_["mapGetters"])({
      getOptionLivraison: "optionLivraison/optionLivraison",
      deliveryAddress: "location/deliveryAddress",
      selectedItems: "localStorage/items",
      getItemPrice: "localStorage/itemPrice",
      getPrice: "localStorage/price"
    }),

    listTva() {
      var resultList = this.selectedItems.reduce((result, currentValue) => {
        (result[currentValue.tva] = result[currentValue.tva] || []).push(currentValue);
        return result;
      }, {});
      return resultList;
    }

  },
  watch: {
    selectedDeliveryAddress(newVal) {
      this.setOptionLivraison({ ...this.getOptionLivraison,
        depot: newVal,
        mode: "retrait"
      });
    },

    user() {
      this.preCompleteForm();
    }

  },
  methods: {
    saveOrder() {
      return new Promise((resolve, reject) => {
        var order = {
          user_name: this.user.firstName + " " + this.user.lastName,
          warehouse: this.selectedDeliveryAddress.address,
          orders: []
        };

        for (let i = 0; i < this.selectedItems.length; i++) {
          const element = this.selectedItems[i];
          var product = {
            product_id: element.id,
            product_name: element.name,
            product_qty: element.itemQuantity.toString()
          };
          order.orders.push(product);
        }

        resolve(order);
      });
    },

    save() {
      this.saveOrder().then(result => {
        external_axios_default.a.post("http://3.21.236.175:9000/orders/", result).then(response => {
          console.log("Commande validée");
          this.$router.push("/");
        }).catch(error => {
          console.error(error);
        });
      });
    },

    getTotalPriceHt() {
      return parseFloat(this.selectedItems.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) - parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * currentValue.tva / 100;
      }, 0)).toFixed(2).replace(".", ",");
    },

    getTva(items, taux) {
      return parseFloat(items.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * taux / 100;
      }, 0)).toFixed(2).replace(".", ",");
    },

    preCompleteForm() {
      if (this.user) {
        this.deliveryAddressForm.firstName = this.user.firstName;
        this.deliveryAddressForm.lastName = this.user.lastName;
        this.billingAddressForm.firstName = this.user.firstName;
        this.billingAddressForm.lastName = this.user.lastName;
      }

      this.$validator.reset();
    },

    ...Object(external_vuex_["mapMutations"])({
      setLocation: "location/setLocation",
      setOptionLivraison: "optionLivraison/setOptionLivraison",
      setLivraisonMode: "optionLivraison/setLivraisonMode",
      deleteItemFromCart: "localStorage/delete",
      setUser: "auth/setUser"
    }),
    ...Object(external_vuex_["mapActions"])({
      open: "popup/show",
      changeMode: "popup/changeMode"
    })
  }
});
// CONCATENATED MODULE: ./components/checkout/PersonnalInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkout_PersonnalInfovue_type_script_lang_js_ = (PersonnalInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/checkout/PersonnalInfo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  checkout_PersonnalInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "600c9702"
  
)

/* harmony default export */ var PersonnalInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("427835a0", content, true)

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-form-wizard .wizard-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px}.vue-form-wizard .wizard-btn.disabled,.vue-form-wizard .wizard-btn[disabled],fieldset[disabled] .vue-form-wizard .wizard-btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.vue-form-wizard *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue-form-wizard a{text-decoration:none}.vue-form-wizard .wizard-nav{margin-bottom:0;padding-left:0;list-style:none}.vue-form-wizard .wizard-nav>li{position:relative;display:block}.vue-form-wizard .wizard-nav>li>a{position:relative;display:block;padding:10px 15px}.vue-form-wizard .wizard-nav>li>a:focus,.vue-form-wizard .wizard-nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-form-wizard .wizard-nav>li.disabled>a{color:#777}.vue-form-wizard .wizard-nav>li.disabled>a:focus,.vue-form-wizard .wizard-nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.vue-form-wizard .wizard-progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn,.vue-form-wizard .wizard-btn{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:2px;background-color:transparent;font-size:14px;font-weight:600;padding:6px 12px;min-width:140px}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:focus,.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:hover,.vue-form-wizard .wizard-btn:focus,.vue-form-wizard .wizard-btn:hover{outline:0!important}.vue-form-wizard .wizard-nav-pills{margin-top:0;position:relative;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.vue-form-wizard .wizard-nav-pills a,.vue-form-wizard .wizard-nav-pills li{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-positive:1;flex-grow:1}.vue-form-wizard .wizard-nav-pills>li>a,.vue-form-wizard .wizard-nav-pills a{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-form-wizard .wizard-nav-pills>li>a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0 auto;color:rgba(0,0,0,.2);position:relative;top:3px}.vue-form-wizard .wizard-nav-pills>li>a:focus,.vue-form-wizard .wizard-nav-pills>li>a:hover{background-color:transparent;color:rgba(0,0,0,.2);outline:0!important}.vue-form-wizard .wizard-nav-pills>li>a.disabled{pointer-events:none;cursor:default}.vue-form-wizard .wizard-nav-pills>li.active>a,.vue-form-wizard .wizard-nav-pills>li.active>a:focus,.vue-form-wizard .wizard-nav-pills>li.active>a:hover{background-color:transparent;-webkit-transition:font-size .2s linear;transition:font-size .2s linear}.vue-form-wizard .wizard-nav-pills>li.active>a .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:focus .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:hover .wizard-icon{color:#fff;font-size:24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .2s linear;transition:all .2s linear}.vue-form-wizard{padding-bottom:20px}.vue-form-wizard .is_error{border-color:#c84513!important}.vue-form-wizard .is_error .icon-container{background:#c84513!important}.vue-form-wizard.xs .wizard-icon-circle{width:40px;height:40px;font-size:16px}.vue-form-wizard.xs .wizard-icon-circle.tab_shape{height:25px}.vue-form-wizard.xs .wizard-nav-pills>li.active>a .wizard-icon{font-size:16px}.vue-form-wizard.xs .wizard-navigation .wizard-progress-with-circle{position:relative;top:25px;height:4px}.vue-form-wizard.sm .wizard-icon-circle{width:50px;height:50px;font-size:20px}.vue-form-wizard.sm .wizard-icon-circle.tab_shape{height:30px}.vue-form-wizard.sm .wizard-nav-pills>li.active>a .wizard-icon{font-size:20px}.vue-form-wizard.sm .wizard-navigation .wizard-progress-with-circle{position:relative;top:30px;height:4px}.vue-form-wizard.md .wizard-icon-circle{width:70px;height:70px;font-size:24px}.vue-form-wizard.md .wizard-icon-circle.tab_shape{height:40px}.vue-form-wizard.md .wizard-nav-pills>li.active>a .wizard-icon{font-size:24px}.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard.lg .wizard-icon-circle{width:90px;height:90px;font-size:28px}.vue-form-wizard.lg .wizard-icon-circle.tab_shape{height:50px}.vue-form-wizard.lg .wizard-nav-pills>li.active>a .wizard-icon{font-size:28px}.vue-form-wizard.lg .wizard-navigation .wizard-progress-with-circle{position:relative;top:50px;height:4px}.vue-form-wizard .wizard-icon-circle{font-size:18px;border:3px solid #f3f2ee;border-radius:50%;font-weight:600;width:70px;height:70px;background-color:#fff;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}.vue-form-wizard .wizard-icon-circle.square_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle.tab_shape{width:100%;min-width:100px;height:40px;border:none;background-color:#f3f2ee;border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;border-radius:40%}.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-tab-content{min-height:100px;padding:30px 20px 10px}.vue-form-wizard .wizard-header{padding:15px;position:relative;border-radius:3px 3px 0 0;text-align:center}.vue-form-wizard .wizard-title{color:#252422;font-weight:300;margin:0;text-align:center}.vue-form-wizard .category{font-size:14px;font-weight:400;color:#9a9a9a;margin-bottom:0;text-align:center}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{-webkit-box-shadow:none;box-shadow:none;-webkit-transition:width .3s ease;transition:width .3s ease}.vue-form-wizard .clearfix:after{content:\"\";clear:both;display:table}.vue-form-wizard .wizard-card-footer{padding:0 20px}.vue-form-wizard .wizard-card-footer .wizard-footer-left{float:left}.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:right}@media screen and (max-width:350px){.vue-form-wizard .wizard-card-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard .wizard-card-footer .wizard-footer-left,.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:none;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-card-footer .wizard-footer-right button{margin-top:10px}}.vue-form-wizard.vertical .wizard-card-footer{display:block}.vue-form-wizard.vertical .wizard-nav-pills{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard.vertical .wizard-navigation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.vue-form-wizard.vertical .wizard-card-footer{padding-top:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icone-cart-gpc.40ec5a8.png";

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icone-identification-gpc.c023905.png";

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icone-delivery-gpc.6bb1c2d.png";

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icone-payment-gpc.f716d3c.png";

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/checkout/index.vue?vue&type=template&id=77473eb3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"checkout"}},[_c('form-wizard',{ref:"formWizard",attrs:{"stepSize":'xs',"title":'',"subtitle":'',"color":"var(--color1)"},on:{"on-complete":_vm.onComplete},scopedSlots:_vm._u([{key:"step",fn:function(props){return [_c('wizard-step',{key:props.tab.title,staticClass:"wizard-active",staticStyle:{"cursor":"not-allowed"},attrs:{"slot":"step","tab":props.tab,"transition":props.transition,"index":props.index},slot:"step"},[_c('div',{staticClass:"wizard-icone",attrs:{"slot":"active-step"},slot:"active-step"},[_c('img',{attrs:{"src":_vm.username && props.index != 0 ? _vm.stepImageList[props.index+1] : _vm.stepImageList[props.index]}})]),_vm._v(" "),_c('div',{staticClass:"wizard-icone-unactive",style:(props.index == 0 ? 'margin-right:8px;' : '')},[_c('img',{attrs:{"src":_vm.username && props.index != 0 ? _vm.stepImageList[props.index+1] : _vm.stepImageList[props.index]}})])])]}},{key:"footer",fn:function(props){return [_c('div',{staticClass:"checkout-alert",class:_vm.cgvAccept ? 'hide' : ''},[_vm._v("\n          Attention ! Vous devez accepter les conditions générales de ventes pour continuer votre commande\n        ")]),_vm._v(" "),(props.activeTabIndex==0)?_c('button',{staticClass:"valid-cart",class:!_vm.isDeliveryAvailable ? 'disabled' :'',attrs:{"type":"button","disabled":!_vm.isDeliveryAvailable},on:{"click":function($event){return _vm.validCart(props)}}},[_vm._v("\n            Je valide mon panier\n        ")]):_c('div',[_c('div',{staticClass:"wizard-footer-left"},[(props.activeTabIndex > 0 && !props.isLastStep)?_c('button',{staticClass:"prev-step",attrs:{"type":"button"},on:{"click":function($event){return props.prevTab()}}},[_c('img',{attrs:{"src":__webpack_require__(49),"alt":"Etape précédente"}}),_vm._v("\n                Retour\n            ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"wizard-footer-right"},[(!props.isLastStep && props.activeTabIndex != 1 && props.activeTabIndex != 2)?_c('button',{staticClass:"next-step",attrs:{"type":"button","disabled":!_vm.order.isConditionsAccepted || !_vm.isDeliveryAvailable},on:{"click":function($event){return props.nextTab()}}},[_vm._v("\n                Continuer\n                "),_c('img',{attrs:{"src":__webpack_require__(19),"alt":"Etape précédente"}})]):_vm._e()])])]}}])},[_vm._v(" "),_c('tab-content',{attrs:{"title":"Panier","icon":""}},[_c('Summary',{attrs:{"items":_vm.items,"cgvAccept":_vm.cgvAccept},on:{"conditionsChange":_vm.setConditionsAccepted}})],1),_vm._v(" "),(!_vm.username)?_c('tab-content',{attrs:{"title":"Identification","icon":""}},[_c('Login',{on:{"loggedIn":_vm.logging}})],1):_vm._e(),_vm._v(" "),_c('tab-content',{attrs:{"title":_vm.deliveryMode.mode == 'retrait' ? 'Retrait en dépot' : 'Livraison',"icon":""}},[_c('PersonnalInfo',{on:{"emitDeliveryAddress":_vm.setDeliveryAddress,"emitWarehouse":_vm.setWarehouse,"emitBillingAddress":_vm.setBillingAddress,"completed":function($event){return _vm.$refs.formWizard.nextTab()}}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/checkout/index.vue?vue&type=template&id=77473eb3&

// EXTERNAL MODULE: ./components/auth/Login.vue + 4 modules
var Login = __webpack_require__(144);

// EXTERNAL MODULE: ./components/checkout/Payment.vue + 4 modules
var Payment = __webpack_require__(145);

// EXTERNAL MODULE: ./components/checkout/Summary.vue + 4 modules
var Summary = __webpack_require__(146);

// EXTERNAL MODULE: ./components/checkout/PersonnalInfo.vue + 4 modules
var PersonnalInfo = __webpack_require__(147);

// EXTERNAL MODULE: external "vue-form-wizard"
var external_vue_form_wizard_ = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css
var vue_form_wizard_min = __webpack_require__(148);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/checkout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import Alert from "@/components/checkout/Alert.vue";






/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  name: "CheckoutPage",
  components: {
    Payment: Payment["default"],
    Summary: Summary["default"],
    FormWizard: external_vue_form_wizard_["FormWizard"],
    TabContent: external_vue_form_wizard_["TabContent"],
    WizardButton: external_vue_form_wizard_["WizardButton"],
    PersonnalInfo: PersonnalInfo["default"],
    Login: Login["default"],
    WizardStep: external_vue_form_wizard_["WizardStep"]
  },

  data() {
    return {
      usersToDelete: [],
      items: [],
      stepImageList: [__webpack_require__(150), __webpack_require__(151), __webpack_require__(152), __webpack_require__(153)],
      alertVisible: false,
      cgvAccept: true,
      isCard: false,
      guestId: null,
      order: {
        isConditionsAccepted: false,
        mode: null,
        billingAddress: null,
        deliveryAddress: null,
        warehouse: null,
        cart: [],
        discountCode: null,
        totalTTC: null,
        totalHT: null,
        totalTVA: null
      }
    };
  },

  mounted() {
    this.items = this.getItems;
  },

  computed: {
    isDeliveryAvailable() {
      if (this.getOptionLivraison.mode == 'livraison') {
        if (this.totalPrice() < parseFloat(this.getOptionLivraison.zone.minAmount)) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },

    discountCode() {
      return this.$store.getters['localStorage/discountCode'];
    },

    deliveryMode() {
      return this.$store.getters['optionLivraison/optionLivraison'];
    },

    ...Object(external_vuex_["mapGetters"])({
      getItemPrice: "localStorage/itemPrice",
      getItems: 'localStorage/items',
      getOptionLivraison: 'optionLivraison/optionLivraison',
      totalPrice: "localStorage/price"
    }),

    username() {
      return this.$store.getters['auth/username'];
    },

    user() {
      return this.$store.getters['auth/user'];
    }

  },
  methods: {
    setWarehouse(warehouse) {
      this.order.warehouse = warehouse;
    },

    getTotalPriceHt() {
      return parseFloat(this.getItems.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) - parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * currentValue.taxRule.value / 100;
      }, 0)).toFixed(2);
    },

    validCart(props) {
      if (!this.order.isConditionsAccepted) {
        this.cgvAccept = false;
      } else {
        this.cgvAccept = true;
        props.nextTab();
      }
    },

    //fonction permettant d'inserer la commande dans le user 
    insertOrder() {
      for (let i = 0; i < this.getItems.length; i++) {
        const item = this.getItems[i];
        this.order.cart.push({
          price: this.getItemPrice(item),
          imgList: item.imgList,
          itemQuantity: item.itemQuantity,
          title: item.title,
          subTitle: item.subTitle,
          taxRule: item.taxRule,
          type: item.type,
          id: item.id,
          name: item.name,
          customVarProduct: item.customVarProduct,
          conditionnement: item.conditionnement,
          route: item.route
        });
      }

      this.order.addDate = new Date();
      this.order.updateDate = null;
      this.order.deleteDate = null;
      this.order.mode = this.deliveryMode.mode;
      this.order.discountCode = this.discountCode;
      this.order.totalTTC = this.totalPrice();
      this.order.totalHT = this.getTotalPriceHt();
      this.order.totalTVA = this.totalPrice() - this.getTotalPriceHt();
      console.log('totalPrice', this.totalPrice());
      console.log('getTotalPriceHt', this.getTotalPriceHt());
      console.log('cart', this.order.cart); // ICI AJOUT DE LA COMMANDE EN BASE DE DONNEE
      // db.collection("customers")
      //   .doc(process.env.ID_CUSTOMER)
      //   .collection("sites")
      //   .doc(process.env.ID_SITE)
      //   .collection("users")
      //   .doc(this.user.type == 'guest' ? this.user.id : this.user.mail)
      //   .collection("orders")
      //   .add(this.order)
      //   .then((doc) => {
      //     console.log('la commande a bien été ajoutée')
      //     //suppression du panier localStorage
      //     //afficher merci pour votre commande etc
      //   })
      //   .catch((err) => {
      //   })
    },

    setDeliveryAddress(deliveryAddress) {
      this.order.deliveryAddress = deliveryAddress;
    },

    setBillingAddress(billingAddress) {
      console.log('billingAddress', billingAddress);
      this.order.billingAddress = billingAddress;
    },

    continueAsGuest() {
      this.setUser({
        firstName: null,
        lastName: null,
        type: "guest"
      });
    },

    logging(type = 'user') {
      if (type == 'guest') {
        this.continueAsGuest();
      }

      this.$refs.formWizard.nextTab();
    },

    ...Object(external_vuex_["mapMutations"])({
      guestConnection: 'auth/setGuest',
      setUser: 'auth/setUser'
    }),

    setConditionsAccepted(value) {
      this.order.isConditionsAccepted = value;

      if (!value) {
        this.cgvAccept = false;
      } else {
        this.cgvAccept = true;
      }
    },

    onComplete() {
      console.log('finished');
    },

    handleAlert() {
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 4000);
    },

    handleCard() {
      this.isCard = true;
    }

  }
});
// CONCATENATED MODULE: ./pages/checkout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/checkout/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7fc79f32"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("1ff4c59c", content, true)

/***/ })

};;
//# sourceMappingURL=index.js.map