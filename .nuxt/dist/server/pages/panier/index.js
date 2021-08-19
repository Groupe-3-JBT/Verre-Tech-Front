exports.ids = [23,22];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);

const {
  reactiveProp
} = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"];
/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [reactiveProp],
  props: ['options'],

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }

});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("b023367e", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".small{max-width:600px;margin:150px auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/panier/index.vue?vue&type=template&id=0454f6ca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"small"},[_c('line-chart',{key:_vm.key,attrs:{"chart-data":_vm.datacollection}}),_vm._ssrNode(" <button>Randomize</button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/panier/index.vue?vue&type=template&id=0454f6ca&

// EXTERNAL MODULE: ./pages/panier/LineChart.js
var LineChart = __webpack_require__(120);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/panier/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var paniervue_type_script_lang_js_ = ({
  components: {
    LineChart: LineChart["default"]
  },

  data() {
    return {
      datacollection: null,
      key: 0
    };
  },

  mounted() {
    this.fillData();
  },

  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [this.getRandomInt(), this.getRandomInt()]
        }, {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [this.getRandomInt(), this.getRandomInt()]
        }]
      };
    },

    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }

  }
});
// CONCATENATED MODULE: ./pages/panier/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_paniervue_type_script_lang_js_ = (paniervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/panier/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_paniervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ac24340c"
  
)

/* harmony default export */ var panier = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map