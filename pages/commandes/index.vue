<template>
  <div class="container orders">
    <table class="list-orders">
        <tr>
            <th>Date de commande</th>
            <th >Nombre de produits</th>
            <th>Total</th>
            <th>Status</th>
        </tr>
        <tr style="cursor:pointer"  :key="i" v-for="(item, i) in ordersList" :item="item" @click="goToOrder(item)">
            <td>
                <div>
                    <h3>{{ new Date(item.addDate.seconds*1000).toLocaleDateString() }}</h3>
                </div>
            </td>
            <td>
                <p>{{ item.cart.map(item => item.itemQuantity).reduce((prev, next) => prev + next) }}</p>
            </td>
            <td>
                <p>{{ item.totalTTC }}€</p>
            </td>
            <td>
                <p>{{ item.status }}</p>
            </td>
        </tr>
    </table>

    <!-- LISTE ARTICLES MOBILE -->
    <!-- <ul class="list-article-mobile">
      <li :key="i" v-for="(item, i) in items" :item="item">
        <div style="display: flex; align-items: center;">
          <NuxtLink :to="'/produits/' + item.route">
            <img :src="item.imgList[0].download" alt="image de l'article" />
          </NuxtLink>
          <div class="column">
            <p class="titre">{{ item.name }}</p>
            <div class="row">
              <p>Conditionnement :</p>
              <p>{{
                item.customVarProduct[item.conditionnement]
                  ? item.customVarProduct[item.conditionnement].td[0].value
                  : item.customVarProduct[0].td[0].value
              }}</p>
            </div>
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
    </ul> -->

    <!-- <div class="cart-footer">
      <div class="zone-promo">
        <label for="">Avez-vous un code promotionnel ?</label>
        <div class="input">
          <input
            @keyup.enter="checkCodePromo"
            @blur="errorCodePromo = ''"
            v-model="codePromo"
            type="text"
          />
          <p style="cursor: pointer" @click="checkCodePromo">Ajouter</p>
          <span v-show="errorCodePromo.length" class="alert-promo">{{
            errorCodePromo
          }}</span>
        </div>
      </div>

      <div class="zone-totaux">
        <div class="ligne-total dashed">
          <p>Nombre de produit</p>
          <p>{{ items.length }}</p>
        </div>
        <div v-if="discountCode.amount && discountCode.type" class="ligne-subtotal dashed">
          <p>Total des produits HT</p>
          <p>{{ totalPrice(false) }}</p>
        </div>
        <div
          v-if="discountCode.amount && discountCode.type"
          class="ligne-total dashed"
        >
          <p>Code promotionnel</p>
          <div class="row">
            <p style="margin-top: 5px;">-{{ discountCode.amount + discountCode.type }}</p>
            <div id="cross" @click="removeDiscountCode()">
              <div class="mdiv">
                <div class="md"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="ligne-subtotal dashed">
          <p>Total HT</p> 
          <p>{{ getTotalPriceHt() }}€</p>
        </div>
        <div class="ligne-total" :key="i" v-for="(item, i) in listTva">
          <p>TVA {{item[0].taxRule.value}} %</p>
          <p>{{ getTva(item, item[0].taxRule.value) }}€</p>
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
        <div v-if="totalPrice(false) < parseFloat(discountCode.minAmount)" class="ligne-alert">
            <p>Votre panier doit atteindre le montant minimum de <b>{{discountCode.minAmount+'€ HT'}}</b> pour appliquer ce code promo.</p>
        </div>
        
      </div>
    </div> -->
  </div>
</template>

<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import { mapGetters, mapMutations } from "vuex";


export default {
  name: "Commande",
  props: {
    items: Array,
    cgvAccept:Boolean
  },
  data() {
    return {
        ordersList: []
    };
  },
  computed: {
        user() {
            return this.$store.getters["auth/user"];
        },
  },
  watch: {

  },
  created(){
    this.getOrders()
  }, 
  methods: {
      goToOrder(item) {
        //   this.$router.push('/commande/' + item.id);
          this.$router.push({name:'commandes-id', params:{id:item.id}})
      },
      getOrders() {
        // ICI LA LISTE DES COMMANDES
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
      },
  },

  components: {},
};
</script>