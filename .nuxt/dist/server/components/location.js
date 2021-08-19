exports.ids = [11];
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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("507cd7d7", content, true, context)
};

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Location_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Location_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Location_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Location_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Location_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#popupLocation{border-radius:14px;border-bottom-left-radius:39px}#popupLocation .popup-content,#popupLocation .popup-header{padding:1.5rem}#popupLocation .popup-header{background:var(--color1);border-bottom-right-radius:39px}#popupLocation .popup-content{background:var(--color2);border-bottom-left-radius:14px;border-bottom-right-radius:39px}#popupLocation h1{color:var(--color2);font-size:1.6rem;text-align:left;margin-bottom:1rem}#popupLocation p{color:var(--color4);font-size:1rem;text-align:left;font-weight:400}#popupLocation h2{color:var(--color1);font-size:1.2rem;font-weight:300!important;text-align:left;margin-bottom:1rem}#popupLocation h2 span{font-weight:500!important}#popupLocation .v-select{margin-bottom:2rem;display:block}#popupLocation .vs--disabled .vs__clear,#popupLocation .vs--disabled .vs__dropdown-toggle,#popupLocation .vs--disabled .vs__open-indicator,#popupLocation .vs--disabled .vs__search,#popupLocation .vs--disabled .vs__selected{cursor:not-allowed;background-color:var(--color4)!important}#popupLocation .v-select .vs__dropdown-toggle,#popupLocation .vs--searchable .vs__dropdown-toggle,#popupLocation .vs__dropdown-toggle{background-color:var(--color4)!important;line-height:2.6rem!important;height:35px!important}#popupLocation .v-select .vs__search,#popupLocation .v-select .vs__search:focus,#popupLocation .vs--single .vs__selected,#popupLocation .vs__selected-options{margin:0;line-height:35px;height:35px;padding:0 7px}#popupLocation button.validate{background-color:var(--color2);border:2px solid var(--color1);color:var(--color1);width:100%;max-width:200px;padding:10px;border-radius:10px 10px 40px 10px;align-items:center;font-family:var(--font1);outline:none;cursor:pointer;position:relative;display:flex;flex-direction:row;justify-content:space-between}#popupLocation button.validate p{color:var(--color1)}#popupLocation button.validate img{width:60px;filter:invert(37%) sepia(92%) saturate(4009%) hue-rotate(14deg) brightness(100%) contrast(109%)}#popupLocation button.validate:hover{background-color:var(--color1);color:var(--color2)}#popupLocation button.validate:hover p{color:var(--color2)}#popupLocation button.validate:hover>img{filter:invert(93%) sepia(94%) saturate(0) hue-rotate(248deg) brightness(106%) contrast(106%)}#popupLocation button.disabled,#popupLocation button.disabled:hover{border:2px solid var(--color3);color:var(--color3);cursor:default}#popupLocation button.disabled:hover{background-color:var(--color2);color:var(--color2)}#popupLocation button.disabled:hover p,#popupLocation button.disabled p{color:var(--color3)}#popupLocation button.disabled:hover>img,#popupLocation button.disabled img{filter:invert(71%) sepia(4%) saturate(22%) hue-rotate(344deg) brightness(85%) contrast(92%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/location/Location.vue?vue&type=template&id=25102471&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"popupLocation"}},[_vm._ssrNode("<div class=\"popup-header\"><h1>Bonjour, c'est votre première visite ?</h1> <p>Mémoriser vos préférences de commande afin d'obtenir instantanément le prix total de votre commande</p></div> "),_vm._ssrNode("<div class=\"popup-content\">","</div>",[_vm._ssrNode("<h2>Optez pour le <span>retrait</span> dans l'un de nos dépots :</h2> "),_c('v-select',{ref:"selectDepot",attrs:{"options":_vm.depots,"placeholder":"Sélectionnez un dépôt"},scopedSlots:_vm._u([{key:"option",fn:function(option){return [_c('span',[_vm._v(_vm._s(option.label))])]}}]),model:{value:(_vm.retraitLocation),callback:function ($$v) {_vm.retraitLocation=$$v},expression:"retraitLocation"}},[_c('div',{attrs:{"slot":"no-options"},slot:"no-options"},[_vm._v(_vm._s('Aucun point de retrait disponible'))])]),_vm._ssrNode(" <div class=\"row bottom-buttons\" style=\"justify-content:flex-end\"><button type=\"button\""+(_vm._ssrClass("validate",!_vm.enableValidate ? 'disabled' : ''))+"><p>VALIDER</p> <img"+(_vm._ssrAttr("src",__webpack_require__(19)))+" alt=\"connexion\" style=\"height: 1rem\"></button></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/location/Location.vue?vue&type=template&id=25102471&

// EXTERNAL MODULE: external "core-js/modules/esnext.string.replace-all.js"
var esnext_string_replace_all_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(4);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-select"
var external_vue_select_ = __webpack_require__(90);
var external_vue_select_default = /*#__PURE__*/__webpack_require__.n(external_vue_select_);

// EXTERNAL MODULE: ./node_modules/vue-select/dist/vue-select.css
var vue_select = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/location/Location.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






external_vue_default.a.component('v-select', external_vue_select_default.a);


var debounce = __webpack_require__(92);

/* harmony default export */ var Locationvue_type_script_lang_js_ = ({
  data() {
    return {
      depots: ["Entrepot de Mitry-Mory", "Entrepot de Le Pontet", "Entrepot d'Angoulème", "Entrepot d'Ipres", "Boutique de Lille", "Boutique de Versailles", "Boutique de Toulon", "Boutique de Bordeaux", "Boutique de Nantes", "Boutique de Lyon"],
      isDeliveryByRetrait: false,
      loading: true,
      searchText: "",
      geolocation: null,
      deliveryLocation: null,
      retraitLocation: null,
      enableValidate: false,
      citiesList: [],
      deliveryAreasList: [],
      customVarParams: [],
      cantFindZone: false
    };
  },

  methods: {
    //Fonction qui vérifie et insert le code postal+ville / point de dépot séléctionné dans le store
    checkLocation() {
      if (this.enableValidate) {
        var optionLivraison = {
          mode: "",
          zone: null,
          depot: null
        };
        var locationArea = null;

        if (this.retraitLocation !== "" && this.retraitLocation !== null) {
          // option retrait
          optionLivraison.mode = "retrait";
          optionLivraison.depot = this.retraitLocation;
          this.setOptionLivraison(optionLivraison);
          console.log("retrait", optionLivraison);
          this.close();
        } else {
          // option livraison
          for (let i = 0; i < this.deliveryAreasList.length; i++) {
            const area = this.deliveryAreasList[i];

            if (area.cities.find(elem => elem.label.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "") == this.deliveryLocation.nom.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
              locationArea = JSON.parse(JSON.stringify(area));
              break;
            }
          }

          delete locationArea.cities;
          optionLivraison.mode = "livraison";
          optionLivraison.zone = {
            id: locationArea.id,
            minAmount: locationArea.minAmount,
            label: locationArea.label,
            zipCode: this.searchText,
            city: this.deliveryLocation.nom.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          };
          this.setOptionLivraison(optionLivraison);
          console.log("livraison", optionLivraison);
          this.close();
        }
      }
    },

    onSearch(search, loading) {
      if (search.length == 5) {
        this.searchText = JSON.parse(JSON.stringify(search));
        loading(true);
        this.search(loading, search, this);
      } else {
        this.citiesList = [];
      }
    },

    search: debounce((loading, search, vm) => {
      external_axios_default.a.get("https://geo.api.gouv.fr/communes?", {
        params: {
          codePostal: escape(search)
        }
      }).then(res => {
        vm.deliveryAreasList.forEach(area => {
          area.cities.forEach(city => {
            res.data.forEach(elem => {
              if (elem.nom.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "") == city.label.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
                vm.citiesList.push(elem);
                vm.$refs.select.open = true;
              }
            });
          });
        });
        loading(false);
      }, 350);
    }),
    ...Object(external_vuex_["mapMutations"])({
      setOptionLivraison: 'optionLivraison/setOptionLivraison'
    }),
    ...Object(external_vuex_["mapActions"])({
      close: 'popup/hide'
    })
  },
  watch: {
    "deliveryLocation": function (val, oldVal) {
      if (val == null && this.retraitLocation == null) {
        this.enableValidate = false;
      } else {
        this.enableValidate = true;
      }
    },
    "retraitLocation": function (val, oldVal) {
      if (val == null && this.deliveryLocation == null) {
        this.enableValidate = false;
      } else {
        this.enableValidate = true;
      }
    },

    isDeliveryByRetrait(val) {
      this.deliveryLocation = null;
    }

  }
});
// CONCATENATED MODULE: ./components/location/Location.vue?vue&type=script&lang=js&
 /* harmony default export */ var location_Locationvue_type_script_lang_js_ = (Locationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/location/Location.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(205)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  location_Locationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cc53fbae"
  
)

/* harmony default export */ var Location = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=location.js.map