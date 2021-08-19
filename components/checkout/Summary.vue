<template>
  <div class="container cart">
    <table class="list-article">
      <tr>
        <th>Produits</th>
        <th>Prix unitaire</th>
        <th class="align-center">Quantité</th>
        <th>Total</th>
        <th></th>
      </tr>
      <tr :key="i" v-for="(item, i) in items" :item="item">
        <NuxtLink :to="'/produits/' + item.id">
          <td>
            <img :src="item.fields.Image[0].url" alt="" />
            <div>
              <h3>{{ item.fields.Nom }}</h3>
            </div>
          </td>
        </NuxtLink>
        <td>
          <p>{{ getItemPrice(item) }}€</p>
        </td>
        <td>
          <div class="flex justify-center">
            <img v-if="item.itemQuantity == 1"
              style="margin-right:10px"
              @click="removeFromCart(item)"
              class="quantity-item-delete" src="~/assets/medias/delete.svg"
            >
              <span
              v-else
              @click="removeFromCart(item)"
              class="quantity-item-change"
              >-</span>
              <span>
                {{ item.itemQuantity}}
              </span>
            <span @click="addToCart(item)" class="quantity-item-change">+</span>
          </div>
        </td>
        <td>
          <p>{{ (getItemPrice(item) * item.itemQuantity).toFixed(2) }}€</p>
        </td>
        <td>
          <div
            v-if="
              items.length > 1 &&
              ($store.getters['optionLivraison/optionLivraison'].mode ==
                'retrait' ||
                ($store.getters['optionLivraison/optionLivraison'].mode ==
                  'livraison' &&
                  totalPrice() - getItemPrice(item) * item.itemQuantity >
                    $store.getters['optionLivraison/optionLivraison'].zone
                      .minAmount))
            "
            @click="deleteItemFromCart(item)"
            class="delete-item"
          >
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>
        </td>
      </tr>
    </table>

    <!-- LISTE ARTICLES MOBILE -->
    <ul class="list-article-mobile">
      <li :key="i" v-for="(item, i) in items" :item="item">
        <div style="display: flex; align-items: center;">
          <NuxtLink :to="'/produits/' + item.id">
            <img :src="item.fields.Image[0].url" alt="image de l'article" />
          </NuxtLink>
          <div class="column">
            <p class="titre">{{ item.fields.Nom }}</p>
            <div class="row">
              <p>Prix unitaire :</p>
              <p>{{ getItemPrice(item).replace(".",",") }}€</p>
            </div>
            <div class="row">
              <p>Quantité :</p>
              <div class="flex" style="justify-content: flex-end;">
                <p class="quantity-item-change" v-if="item.itemQuantity > 1" @click="removeFromCart(item)">-</p>
                <p class="quantity-item-change" v-else @click="deleteItemFromCart(item)">suppr</p>
                <p>{{ item.itemQuantity}}</p>
                <p class="quantity-item-change"  @click="addToCart(item)">+</p>
              </div>
            </div>
            <div class="row row-sum">
              <p>Total TTC :</p>
              <p>{{ (getItemPrice(item) * item.itemQuantity).toFixed(2).replace(".",",") }}€</p>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="cart-footer">
      <div class="zone-promo">
      </div>

      <div class="zone-totaux">
        <div class="ligne-total dashed">
          <p>Nombre de produit</p>
          <p>{{ items.length }}</p>
        </div>
        <div class="ligne-subtotal dashed">
          <p>Total HT</p> 
          <p>{{ getTotalPriceHt() }}€</p>
        </div>
        <div class="ligne-total" :key="i" v-for="(item, i) in listTva">
          <p>TVA {{item[0].fields.TVA}} %</p>
          <p>{{ getTva(item, item[0].fields.TVA) }}€</p>
        </div>
        <div class="ligne-total-ttc">
          <p>Total TTC</p>
          <p>{{ ttcTotalProductPrice }}€</p>
        </div>
        <div class="ligne-cgv">
          <input
            v-model="isConditionsAccepted"
            type="checkbox"
            id="acceptConditions"
          />
          <label aria-describedby="label" for="acceptConditions"
            >J'ai lu et j'accepte les Conditions Générales de Vente.</label
          >
        </div>
        <div v-if="getOptionLivraison.mode == 'livraison' && totalPrice(false) < parseFloat(getOptionLivraison.zone.minAmount)" class="ligne-alert">
            <p>Votre panier doit atteindre le montant minimum de <b>{{getOptionLivraison.zone.minAmount+'€ HT'}}</b> pour être livré dans votre zone.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import { mapGetters, mapMutations } from "vuex";


export default {
  name: "Summary",
  props: {
    items: Array,
    cgvAccept:Boolean
  },
  data() {
    return {
      codePromo: "",
      isConditionsAccepted: false,
      errorCodePromo: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
    totalPriceWithoutDiscountCode() {
      return this.totalPrice()
    },
    ...mapGetters({
      totalPrice: "localStorage/price",
      getItemPrice: "localStorage/itemPrice",
      getOptionLivraison: "optionLivraison/optionLivraison",
      discountCode: "localStorage/discountCode"
    }),
    calcTva() {
      var tvaCost = this.totalPrice() - (this.totalPrice() / 1.2);
      return tvaCost.toFixed(2);
    },
    ttcTotalProductPrice() {
      return (parseFloat(this.totalPrice)).toFixed(
        2
      ).replace(".",",");
    },
    listTva() {
      var resultList = this.items.reduce((result, currentValue) => {
          (result[currentValue.fields.TVA] = result[currentValue.fields.TVA] || []).push(currentValue);
          return result;
        }, {});
      return resultList
    }
  },
  watch: {
    isConditionsAccepted(newVal) {
      this.emitChange(newVal);
    },
  },
  methods: {
    getTotalPriceHt(){
      return parseFloat(this.items.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity) - (parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity)*currentValue.fields.TVA/100);
      }, 0)).toFixed(2).replace(".",",");
    },
    getTva(items, taux){
      return parseFloat(items.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity)*taux/100;
      }, 0)).toFixed(2).replace(".",",");
    },
    ...mapMutations({
      deleteItemFromCart: "localStorage/delete",
      setDiscountCode: "localStorage/setDiscountCode",
      removeDiscountCode: "localStorage/removeDiscountCode",
      addToCart: "localStorage/add",
      removeFromCart: "localStorage/remove",
    }),
    checkout() {
      this.items.forEach((elem) => {
        elem["chosenPrice"] = this.getItemPrice(elem);
        elem["chosenTotalPrice"] = this.getItemPrice(elem);
      });
      var ref = db
        .collection("customers")
        .doc(process.env.ID_CUSTOMER)
        .collection("sites")
        .doc(process.env.ID_SITE)
        .collection("users")
        .doc(this.user.mail)
        .collection("orders");
      ref.add({
        checkout: this.items,
        ttcTotalProductPrice: this.ttcTotalProductPrice,
      });
    },
    emitChange(value) {
      this.$emit("conditionsChange", value);
    },
  },

  components: {},
};
</script>