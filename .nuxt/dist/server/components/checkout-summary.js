exports.ids = [10];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/delete.ef20552.svg";

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/checkout/Summary.vue?vue&type=template&id=5c562467&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container cart"},[_vm._ssrNode("<table class=\"list-article\">","</table>",[_vm._ssrNode("<tr><th>Produits</th> <th>Prix unitaire</th> <th class=\"align-center\">Quantité</th> <th>Total</th> <th></th></tr> "),_vm._l((_vm.items),function(item,i){return _vm._ssrNode("<tr"+(_vm._ssrAttr("item",item))+">","</tr>",[_c('NuxtLink',{attrs:{"to":'/produits/' + item.id}},[_c('td',[_c('img',{attrs:{"src":item.fields.Image[0].url,"alt":""}}),_vm._v(" "),_c('div',[_c('h3',[_vm._v(_vm._s(item.fields.Nom))])])])]),_vm._ssrNode(" <td><p>"+_vm._ssrEscape(_vm._s(_vm.getItemPrice(item))+"€")+"</p></td> <td><div class=\"flex justify-center\">"+((item.itemQuantity == 1)?("<img"+(_vm._ssrAttr("src",__webpack_require__(117)))+" class=\"quantity-item-delete\" style=\"margin-right:10px\">"):("<span class=\"quantity-item-change\">-</span>"))+" <span>"+_vm._ssrEscape("\n              "+_vm._s(item.itemQuantity)+"\n            ")+"</span> <span class=\"quantity-item-change\">+</span></div></td> <td><p>"+_vm._ssrEscape(_vm._s((_vm.getItemPrice(item) * item.itemQuantity).toFixed(2))+"€")+"</p></td> <td>"+((
            _vm.items.length > 1 &&
            (_vm.$store.getters['optionLivraison/optionLivraison'].mode ==
              'retrait' ||
              (_vm.$store.getters['optionLivraison/optionLivraison'].mode ==
                'livraison' &&
                _vm.totalPrice() - _vm.getItemPrice(item) * item.itemQuantity >
                  _vm.$store.getters['optionLivraison/optionLivraison'].zone
                    .minAmount))
          )?("<div class=\"delete-item\"><div class=\"mdiv\"><div class=\"md\"></div></div></div>"):"<!---->")+"</td>")],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"list-article-mobile\">","</ul>",_vm._l((_vm.items),function(item,i){return _vm._ssrNode("<li"+(_vm._ssrAttr("item",item))+">","</li>",[_vm._ssrNode("<div style=\"display: flex; align-items: center;\">","</div>",[_c('NuxtLink',{attrs:{"to":'/produits/' + item.id}},[_c('img',{attrs:{"src":item.fields.Image[0].url,"alt":"image de l'article"}})]),_vm._ssrNode(" <div class=\"column\"><p class=\"titre\">"+_vm._ssrEscape(_vm._s(item.fields.Nom))+"</p> <div class=\"row\"><p>Prix unitaire :</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getItemPrice(item).replace(".",","))+"€")+"</p></div> <div class=\"row\"><p>Quantité :</p> <div class=\"flex\" style=\"justify-content: flex-end;\">"+((item.itemQuantity > 1)?("<p class=\"quantity-item-change\">-</p>"):("<p class=\"quantity-item-change\">suppr</p>"))+" <p>"+_vm._ssrEscape(_vm._s(item.itemQuantity))+"</p> <p class=\"quantity-item-change\">+</p></div></div> <div class=\"row row-sum\"><p>Total TTC :</p> <p>"+_vm._ssrEscape(_vm._s((_vm.getItemPrice(item) * item.itemQuantity).toFixed(2).replace(".",","))+"€")+"</p></div></div>")],2)])}),0),_vm._ssrNode(" <div class=\"cart-footer\"><div class=\"zone-promo\"></div> <div class=\"zone-totaux\"><div class=\"ligne-total dashed\"><p>Nombre de produit</p> <p>"+_vm._ssrEscape(_vm._s(_vm.items.length))+"</p></div> <div class=\"ligne-subtotal dashed\"><p>Total HT</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getTotalPriceHt())+"€")+"</p></div> "+(_vm._ssrList((_vm.listTva),function(item,i){return ("<div class=\"ligne-total\"><p>"+_vm._ssrEscape("TVA "+_vm._s(item[0].fields.TVA)+" %")+"</p> <p>"+_vm._ssrEscape(_vm._s(_vm.getTva(item, item[0].fields.TVA))+"€")+"</p></div>")}))+" <div class=\"ligne-total-ttc\"><p>Total TTC</p> <p>"+_vm._ssrEscape(_vm._s(_vm.ttcTotalProductPrice)+"€")+"</p></div> <div class=\"ligne-cgv\"><input type=\"checkbox\" id=\"acceptConditions\""+(_vm._ssrAttr("checked",Array.isArray(_vm.isConditionsAccepted)?_vm._i(_vm.isConditionsAccepted,null)>-1:(_vm.isConditionsAccepted)))+"> <label aria-describedby=\"label\" for=\"acceptConditions\">J'ai lu et j'accepte les Conditions Générales de Vente.</label></div> "+((_vm.getOptionLivraison.mode == 'livraison' && _vm.totalPrice(false) < parseFloat(_vm.getOptionLivraison.zone.minAmount))?("<div class=\"ligne-alert\"><p>Votre panier doit atteindre le montant minimum de <b>"+_vm._ssrEscape(_vm._s(_vm.getOptionLivraison.zone.minAmount+'€ HT'))+"</b> pour être livré dans votre zone.</p></div>"):"<!---->")+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/checkout/Summary.vue?vue&type=template&id=5c562467&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(4);

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
        (result[currentValue.fields.TVA] = result[currentValue.fields.TVA] || []).push(currentValue);
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
        return sum + parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) - parseFloat(this.getItemPrice(currentValue) * currentValue.itemQuantity) * currentValue.fields.TVA / 100;
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

/***/ })

};;
//# sourceMappingURL=checkout-summary.js.map