exports.ids = [19];
exports.modules = {

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/commandes/index.vue?vue&type=template&id=5b4c7247&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container orders"},[_vm._ssrNode("<table class=\"list-orders\"><tr><th>Date de commande</th> <th>Nombre de produits</th> <th>Total</th> <th>Status</th></tr> "+(_vm._ssrList((_vm.ordersList),function(item,i){return ("<tr"+(_vm._ssrAttr("item",item))+" style=\"cursor:pointer\"><td><div><h3>"+_vm._ssrEscape(_vm._s(new Date(item.addDate.seconds*1000).toLocaleDateString()))+"</h3></div></td> <td><p>"+_vm._ssrEscape(_vm._s(item.cart.map(function (item) { return item.itemQuantity; }).reduce(function (prev, next) { return prev + next; })))+"</p></td> <td><p>"+_vm._ssrEscape(_vm._s(item.totalTTC)+"€")+"</p></td> <td><p>"+_vm._ssrEscape(_vm._s(item.status))+"</p></td></tr>")}))+"</table>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/commandes/index.vue?vue&type=template&id=5b4c7247&

// EXTERNAL MODULE: ./plugins/firebase/firebaseConfig.js
var firebaseConfig = __webpack_require__(6);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/commandes/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var commandesvue_type_script_lang_js_ = ({
  name: "Commande",
  props: {
    items: Array,
    cgvAccept: Boolean
  },

  data() {
    return {
      ordersList: []
    };
  },

  computed: {
    user() {
      return this.$store.getters["auth/user"];
    }

  },
  watch: {},

  created() {
    this.getOrders();
  },

  methods: {
    goToOrder(item) {
      //   this.$router.push('/commande/' + item.id);
      this.$router.push({
        name: 'commandes-id',
        params: {
          id: item.id
        }
      });
    },

    getOrders() {// ICI LA LISTE DES COMMANDES
      // db.collection("customers")
      // .doc(process.env.ID_CUSTOMER)
      // .collection("sites")
      // .doc(process.env.ID_SITE)
      // .collection("users")
      // .doc(this.user.mail)
      // .collection("orders")
      // .get()
      // .then((snap) => {
      //   snap.forEach((doc) => {
      //     if (doc.exists && doc.data().deleteDate == null) {
      //         this.ordersList.push({...doc.data(), id: doc.id})
      //     }
      //   });
      // });
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/commandes/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_commandesvue_type_script_lang_js_ = (commandesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/commandes/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_commandesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "560dce4e"
  
)

/* harmony default export */ var commandes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map