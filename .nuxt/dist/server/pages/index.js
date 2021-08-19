exports.ids = [21,14];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cart-w.997f428.svg";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("2d92fddc", content, true, context)
};

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_productCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_productCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_productCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_productCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_productCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#indispo{background-color:hsla(0,0%,43.1%,.637);width:100%;height:100%;position:absolute;top:0;left:0;z-index:2;border-radius:15px;display:flex;align-items:flex-start;padding-top:90px;justify-content:center}#indispo p{z-index:3;text-align:center;font-size:1.5rem;letter-spacing:2px;line-height:30px;font-weight:500;color:var(--color2)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/produits/productCard.vue?vue&type=template&id=7e4fdecd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hover card column"},[_vm._ssrNode("<div class=\"card-content\">","</div>",[_c('NuxtLink',{attrs:{"to":'/produits/' + _vm.infoProduct.id}},[_c('div',{staticClass:"card-picture"},[_c('img',{attrs:{"src":_vm.infoProduct.image}})])]),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(_vm.infoProduct.name))+"</p> <div class=\"card-form\">"+((_vm.calculPrix > 0)?("<p class=\"price\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.calculPrix)+"€ TTC\n      ")+"</p>"):"<!---->")+" "+((_vm.calculPrix != 0)?("<button class=\"row\" style=\"cursor:pointer\"><p>Ajouter au panier</p> <div"+(_vm._ssrAttr("id",_vm.infoProduct.id))+" class=\"icone-cart\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt=\"panier\"></div></button>"):("<button class=\"row\" style=\"background-color: grey\"><p>Indisponible</p> <div"+(_vm._ssrAttr("id",_vm.infoProduct.id))+" class=\"cart\" style=\"background-color: grey\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt=\"panier\"></div></button>"))+"</div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/produits/productCard.vue?vue&type=template&id=7e4fdecd&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(1);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/produits/productCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var productCardvue_type_script_lang_js_ = ({
  data() {
    return {
      itemSelected: 0,
      available: true
    };
  },

  props: {
    infoProduct: {}
  },
  methods: { ...Object(external_vuex_["mapMutations"])({
      addToCart: "localStorage/add",
      removeFromCart: "localStorage/remove"
    }),

    addItem() {
      this.addToCart({ ...this.infoProduct,
        conditionnement: this.itemSelected
      });
      this.openPanel();
      this.$emit("moveCard", this.infoProduct.id);
    },

    openPanel() {
      //   this.authPanel = true;
      let id = "sidebar-cart";
      external_jquery_default()("body").addClass("stopScroll");
      external_jquery_default()("#" + id).css("animation", "slideIn 1s forwards");
      external_jquery_default()("#" + id).css("display", "block");
      external_jquery_default()("#" + id + ".sidebar-content").css("right", "0");
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])({
      getOptionLivraison: "optionLivraison/optionLivraison"
    }),

    calculPrix() {
      var price = NaN;
      price = parseFloat(this.infoProduct.price.toString().replace(/,/, ".")).toFixed(2);
      return price;
    }

  }
});
// CONCATENATED MODULE: ./components/produits/productCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var produits_productCardvue_type_script_lang_js_ = (productCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/produits/productCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  produits_productCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "013d7e30"
  
)

/* harmony default export */ var productCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/index.vue?vue&type=template&id=44d96b90&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{attrs:{"id":"products-list"}},[_vm._ssrNode("<div class=\"container\">","</div>",_vm._l((_vm.products),function(product,i){return _c('product-card',{key:i,attrs:{"infoProduct":product},on:{"moveCard":_vm.moveCard}})}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=44d96b90&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(1);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/produits/productCard.vue + 4 modules
var productCard = __webpack_require__(106);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
// import { gsap } from "gsap";




/* harmony default export */ var string_replace_loader_ref_12_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      products: []
    };
  },

  mounted() {
    this.getHomeProduct();
  },

  methods: {
    moveCard(id) {
      external_jquery_default()("#" + id).addClass("move-icone-cart");
      setTimeout(() => {
        external_jquery_default()("#" + id).removeClass("move-icone-cart");
      }, 900);
    },

    getHomeProduct() {
      external_axios_default.a.get("http://3.21.236.175:9000/products/").then(result => {
        this.products = result.data.products;
      }).catch(error => {
        console.error("error", error);
      });
    }

  },
  components: {
    productCard: productCard["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (string_replace_loader_ref_12_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7db19824"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map