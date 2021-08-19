exports.ids = [20];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("893e4de4", content, true, context)
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-basic-background.cabbffd.jpg";

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-address{padding-left:0;border-bottom:1px solid #fff;padding-bottom:5px}.contact-adresse-icone{float:left;font-weight:100}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/contact/index.vue?vue&type=template&id=21df02da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.mapLoaded)?_c('GMap',{ref:"gMap",attrs:{"language":"en","cluster":{options: {styles: _vm.clusterStyle}},"center":{lat: parseFloat(_vm.locations[0].gpsCoordinate.lat), lng: parseFloat(_vm.locations[0].gpsCoordinate.lng)+0.5},"options":{fullscreenControl: false, styles: _vm.mapStyle},"zoom":11}},_vm._l((_vm.locations),function(location){return _c('GMapMarker',{key:location.id,attrs:{"position":{lat: location.gpsCoordinate.lat, lng: location.gpsCoordinate.lng},"options":{icon: _vm.markerIcon}},on:{"click":function($event){_vm.currentLocation = location}}},[_c('GMapInfoWindow',{attrs:{"options":{maxWidth: 200, height:400, maxHeight: 500}}},[_c('code',[_c('div',{staticClass:"column",staticStyle:{"display":"flex","justify-content":"center","text-align":"center"}},[_c('img',{attrs:{"src":location.img,"alt":"image"}}),_vm._v(" "),_c('div',{staticStyle:{"color":"var(--color1)"}},[_c('h4',[_c('b',[_vm._v(_vm._s(location.label))])])]),_vm._v(" "),_c('div',[_c('h4',[_c('b',[_vm._v(_vm._s(location.address))])])])])])])],1)}),1):_vm._e(),_vm._ssrNode(" <h2 style=\"margin-top:40px;color: var(--color7);font-weight:bold; text-align:center; margin-bottom:50px; letter-spacing:normal\"><span style=\"color: var(--color1);\">GRAND PARIS</span> <span>COMBUSTIBLES</span>\n      , c'est aussi un réseau\n      <br>\n      composé d'un\n      <span style=\"color: var(--color1);\">dépot</span>\n      , d'une\n      <span style=\"color: var(--color1);\">agence</span>\n      et d'une\n      <span style=\"color: var(--color1);\">boutique</span></h2> <div style=\"display: flex; justify-content: center;\"><div id=\"products-list\" class=\"products-list container\" style=\"display: flex; justify-content: center;\">"+(_vm._ssrList((_vm.locations),function(item,index){return ("<div class=\"card-column\"><div class=\"card-content\"><div class=\"column\" style=\"display: flex; justify-content: center;\"><img"+(_vm._ssrAttr("src",item.img))+" alt=\"image\" style=\"width:100%\"> <div style=\"padding:15px\"><h4><b>"+_vm._ssrEscape(_vm._s(item.label))+"</b></h4> <div style=\"color:var(--color3)\"><p class=\"contact-address\"><span class=\"contact-adresse-icone\"><i></i> <span>Adresse :</span>\n                                       \n                                  </span> <span style=\"float: none\">"+_vm._ssrEscape("\n                                      "+_vm._s(item.address.substring(0,item.address.search(/\d{5}/)))+"\n                                      ")+"<br>"+_vm._ssrEscape("\n                                      "+_vm._s(item.address.substring(item.address.search(/\d{5}/)))+"\n                                  ")+"</span></p> <p class=\"contact-address\"><span class=\"contact-adresse-icone\"><i></i> <span>Tél :</span>\n                                       \n                                  </span> <span style=\"color:var(--color1); float: none\">"+_vm._ssrEscape("\n                                      "+_vm._s(item.phone)+"\n                                  ")+"</span></p> <p class=\"contact-address\"><span class=\"contact-adresse-icone\"><i></i> <span>Email :</span>\n                                       \n                                  </span> <span style=\"color:var(--color1); float: none\">"+_vm._ssrEscape("\n                                      "+_vm._s(item.email)+"\n                                  ")+"</span></p> <p class=\"contact-address\"><span class=\"contact-adresse-icone\"><i></i> <span>Horaires :</span>\n                                       \n                                  </span> <span style=\"float: none\">"+_vm._ssrEscape("\n                                      "+_vm._s(item.hours.substring(0, item.hours.indexOf("de")))+"\n                                      ")+"<br>"+_vm._ssrEscape("\n                                      "+_vm._s(item.hours.substring(item.hours.indexOf("de")))+"\n                                  ")+"</span></p></div></div></div></div></div>")}))+"</div></div> <h2 style=\"margin-top:40px;color: var(--color7);font-weight:bold; text-align:center; margin-bottom:50px; letter-spacing:normal\"><span>Vous avez une question ?</span> <span style=\"color: var(--color1);\">contactez-nous !</span></h2> "),_vm._ssrNode("<div style=\"display: flex; justify-content:center\">","</div>",[_vm._ssrNode("<div style=\" width:50%; background-color: var(--color1)\">","</div>",[_vm._ssrNode("<div class=\"row\" style=\"padding:15px; border-bottom:1px solid #fff; margin-bottom:20px; width:100%\"><p style=\"color:#fff; font-size:16px\">\n                  Vous souhaitez obtenir plus de renseignements sur un produit?<br>\n                  Vous voulez connaitre le statut d'une commande en cours?<br>\n                  Vous souhaitez passer une commande dans un secteur qui n'est pas accepté par notre site web? <br> <b>Posez-nous vos questions, nous vous répondrons dans nos meilleurs délais.</b></p></div> "),_vm._ssrNode("<form data-vv-scope=\"contactForm\" class=\"formContact\">","</form>",[_vm._ssrNode("<div class=\"column\" style=\"width: 50%; padding: 15px\">","</div>",[_vm._ssrNode("<div class=\"column\" style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formContactLastName\">Nom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.contactForm.lastName),expression:"contactForm.lastName"}],attrs:{"type":"text","id":"formContactLastName","name":"lastName"},domProps:{"value":(_vm.contactForm.lastName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.contactForm, "lastName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger alert\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('contactForm.lastName')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("contactForm.lastName")))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formContactFirstName\">Prénom</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.contactForm.firstName),expression:"contactForm.firstName"}],attrs:{"type":"text","id":"formContactFirstName","name":"firstName"},domProps:{"value":(_vm.contactForm.firstName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.contactForm, "firstName", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger alert\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('contactForm.firstName')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("contactForm.firstName")))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formContactEmail\">Email</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"},{name:"model",rawName:"v-model",value:(_vm.contactForm.mail),expression:"contactForm.mail"}],attrs:{"type":"text","id":"formContactEmail","name":"mail"},domProps:{"value":(_vm.contactForm.mail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.contactForm, "mail", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger alert\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('contactForm.mail')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("contactForm.mail")))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formContactEmailPhone\">Téléphone</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|numeric|max:10'),expression:"'required|numeric|max:10'"},{name:"model",rawName:"v-model",value:(_vm.contactForm.phone),expression:"contactForm.phone"}],attrs:{"type":"text","id":"formContactEmailPhone","name":"phone"},domProps:{"value":(_vm.contactForm.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.contactForm, "phone", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger alert\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('contactForm.phone')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("contactForm.phone")))+"</span>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"width: 50%; padding: 15px\">","</div>",[_vm._ssrNode("<div class=\"column\" style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formContactAbout\">À propos</label> "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.contactForm.about),expression:"contactForm.about"}],attrs:{"type":"text","id":"formContactAbout","name":"about"},domProps:{"value":(_vm.contactForm.about)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.contactForm, "about", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger alert\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('contactForm.about')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("contactForm.about")))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\" style=\"margin-bottom: 20px; width: 100%\">","</div>",[_vm._ssrNode("<label for=\"formContactMessage\">Message</label> "),_c('textarea',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"model",rawName:"v-model",value:(_vm.contactForm.message),expression:"contactForm.message"}],staticStyle:{"height":"140px"},attrs:{"type":"text","id":"formContactMessage","name":"message"},domProps:{"value":(_vm.contactForm.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.contactForm, "message", $event.target.value)}}},[]),_vm._ssrNode(" <span class=\"is-danger alert\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('contactForm.message')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first("contactForm.message")))+"</span>")],2),_vm._ssrNode(" <button type=\"button\">Envoyer</button>")],2)],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=template&id=21df02da&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(10);
var external_vee_validate_default = /*#__PURE__*/__webpack_require__.n(external_vee_validate_);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/contact/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    firstName: {
      required: () => 'Veuillez renseigner votre prénom'
    },
    lastName: {
      required: () => 'Veuillez renseigner votre nom'
    },
    phone: {
      required: () => 'Veuillez renseigner votre téléphone',
      max: () => 'Votre numéro ne peut pas contenir plus de 10 caractères',
      numeric: () => 'Votre numéro ne peut contenir que des chiffres'
    },
    mail: {
      required: () => 'Veuillez renseigner votre adresse email',
      email: () => 'Merci d\'entrer une adresse email valide'
    },
    about: {
      required: () => 'Veuillez renseigner un sujet'
    },
    message: {
      required: () => 'Veuillez renseigner votre message'
    }
  }
};
external_vee_validate_["Validator"].localize('fr', dict);
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {},

  data() {
    return {
      contactForm: {
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
        about: "",
        message: ""
      },
      markerIcon: __webpack_require__(154),
      //{url: },
      mapLoaded: false,
      currentLocation: {},
      circleOptions: {},
      locations: [],
      pins: {// selected: "data:image/png;base64,iVBORw0KGgo...",
        // notSelected: "data:image/png;base64,iVBORw0KGgo..."
      },
      mapStyle: [],
      clusterStyle: [{
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }]
    };
  },

  mounted() {
    this.getDepots();
  },

  methods: {
    sendContact() {
      this.contactForm.addDate = new Date();
      this.contactForm.deleteDate = null; // this.$validator.validateAll('contactForm').then((res) => {
      //     if(res) {
      //         db.collection("customers")
      //         .doc(process.env.ID_CUSTOMER)
      //         .collection("sites")
      //         .doc(process.env.ID_SITE)
      //         .collection("leads")
      //         .doc()
      //         .set(this.contactForm).then((res) => {
      //             this.contactForm = {
      //                 firstName: "",
      //                 lastName: "",
      //                 mail: "",
      //                 phone: "",
      //                 about: "",
      //                 message: ""
      //             }
      //             this.$validator.reset()
      //         })
      //         .catch((err) => {
      //             console.error(err)
      //         })
      //     }
      // })
    },

    getDepots() {// var _this = this;
      // db.collection("customers")
      // .doc(process.env.ID_CUSTOMER)
      // .collection("sites")
      // .doc(process.env.ID_SITE)
      // .collection("customizableVarProducts")
      // .where("label", "==", "Lieu de retrait")
      // .limit(1)
      // .onSnapshot((snap) => {
      //     snap.forEach((doc) => {
      //         if (doc.data().deleteDate == null) {
      //             _this.locations = doc.data().selectItems
      //             _this.mapLoaded = true
      //         }
      //     });
      // });
    }

  }
});
// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0d5d0216"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map