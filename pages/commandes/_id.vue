<template>
<no-ssr>
<div id="checkout">
  <div v-if="order" class="container cart">
      <div class="row title">
        <div @click="$router.go(-1)" style="cursor: pointer">
        <img src="~/assets/medias/left-arrow.svg" alt="" />
        </div>
        <h1>{{ 'Commande du '+ new Date(order.addDate.seconds*1000).toLocaleDateString()}}</h1>
    </div>
    <div style="padding:20px" class="row depots-items">
          <div v-if="order.mode == 'retrait'" style="width:50%" class="column">
              <div class="row">
                  <h3 class="name">Adresse de retrait</h3>
              </div>
              <div style="margin-top:20px" class="row">
                <label class="flex">
                  <div>
                    <p class="name"><span>{{order.warehouse.label}}</span></p>
                    <div class="flex">
                      <img src="~/assets/medias/pin.svg" />
                      <p>{{order.warehouse.address}}</p>
                    </div>
                    <div class="flex">
                      <img src="~/assets/medias/phone.svg" />
                      <p class="tel">{{order.warehouse.phone}}</p>
                    </div>
                    <div class="flex">
                      <img src="~/assets/medias/clock.svg" />
                      <p>{{order.warehouse.hours}}</p>
                    </div>
                  </div>
                </label>
              </div>
          </div>
          <div v-else style="width:50%" class="column">
              <div class="row">
                  <h3 class="name">Adresse de livraison</h3>
              </div>
              <div style="margin-top:20px" class="row">
                  <label class="flex">
                    <div>
                      <div class="flex">
                          <!-- <img src="~/assets/medias/clock.svg" /> -->
                          <p>{{order.deliveryAddress.firstName+" "+order.deliveryAddress.lastName}}</p>
                      </div>
                    <!-- <p class="name"><span>Label</span></p> -->
                    <div class="flex">
                        <img src="~/assets/medias/pin.svg" />
                        <p>{{order.deliveryAddress.address}}</p>
                    </div>
                    <div class="flex">
                        <!-- <img src="~/assets/medias/phone.svg" /> -->
                        <p class="tel">{{order.deliveryAddress.zipCode+" "+order.deliveryAddress.city}}</p>
                    </div>
                    <div class="flex">
                        <img src="~/assets/medias/phone.svg" />
                        <p >{{order.deliveryAddress.phone}}</p>
                    </div>
                    </div>
                </label>
              </div>
          </div>
          <div style="width:50%" class="column">
              <div class="row">
                  <h3 class="name">Adresse de facturation</h3>
              </div>
              <div style="margin-top:20px" class="row">
                  <label class="flex">
                    <div>
                      <div class="flex">
                          <!-- <img src="~/assets/medias/clock.svg" /> -->
                          <p>{{order.billingAddress.firstName+" "+order.billingAddress.lastName}}</p>
                      </div>
                    <!-- <p class="name"><span>Label</span></p> -->
                    <div class="flex">
                        <img src="~/assets/medias/pin.svg" />
                        <p>{{order.billingAddress.address}}</p>
                    </div>
                    <div class="flex">
                        <!-- <img src="~/assets/medias/phone.svg" /> -->
                        <p class="tel">{{order.billingAddress.zipCode+" "+order.billingAddress.city}}</p>
                    </div>
                    <div class="flex">
                        <img src="~/assets/medias/phone.svg" />
                        <p >{{order.billingAddress.phone}}</p>
                    </div>
                    </div>
                </label>
              </div>
          </div>
      </div>
    <table class="list-article">
      <tr>
        <th>Produits</th>
        <th>Prix unitaire</th>
        <th class="align-center">Quantité</th>
        <th>Total</th>
        <th></th>
      </tr>
      <tr :key="i" v-for="(item, i) in order.cart" :item="item">
        <NuxtLink :to="'/produits/' + item.route">
          <td>
            <img :src="item.imgList[0].download" alt="" />
            <div>
              <h3>{{ item.name }}</h3>
              <p>
                Conditionnement :
                {{
                  item.customVarProduct[item.conditionnement]
                    ? item.customVarProduct[item.conditionnement].td[0].value
                    : item.customVarProduct[0].td[0].value
                }}
              </p>
            </div>
          </td>
        </NuxtLink>
        <td>
          <p>{{ item.price }}€</p>
        </td>
        <td>
          <div class="flex justify-center">
              <span>
                {{ item.itemQuantity}}
              </span>
          </div>
        </td>
        <td>
          <p>{{ (item.price * item.itemQuantity).toFixed(2) }}€</p>
        </td>
        <td>
        </td>
      </tr>
    </table>

    <!-- LISTE ARTICLES MOBILE -->
    <ul class="list-article-mobile">
      <li :key="i" v-for="(item, i) in order.cart" :item="item">
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
    </ul>

    <div class="cart-footer">
      <div class="zone-promo">
        <button class="button" @click="downloadPdf()">Télécharger ma facture</button>
      </div>

      <div class="zone-totaux">
        <div class="ligne-total dashed">
          <p>Status de la commande</p>
          <h3 class="orangeText" >{{ order.status }}</h3>
        </div>
        <div class="ligne-total dashed">
          <p>Nombre de produit</p>
          <p>{{ order.cart.map(item => item.itemQuantity).reduce((prev, next) => prev + next) }}</p>
        </div>
        <div v-if="discountCode.amount && discountCode.type" class="ligne-subtotal dashed">
          <p>Total des produits HT</p>
          <p>{{ totalPrice(false) }}</p>
        </div>
        <div
          v-if="order.discountCode.amount && discountCode.type"
          class="ligne-total dashed"
        >
          <p>Code promotionnel</p>
          <div class="row">
            <p style="margin-top: 5px;">-{{ order.discountCode.amount + order.discountCode.type }}</p>
          </div>
        </div>
        <!-- TENTION LARTISTE -->
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
          <p>{{ order.totalTTC }}€</p>
        </div>
      </div>
    </div>
  </div>
</div>
</no-ssr>
</template>

<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import { mapGetters, mapMutations } from "vuex";


export default {
  name: "Summary",
  props: {
    // items: Array,
    // cgvAccept:Boolean
  },
  data() {
    return {
      order: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
    ...mapGetters({
      totalPrice: "localStorage/price",
      getItemPrice: "localStorage/itemPrice",
      getOptionLivraison: "optionLivraison/optionLivraison",
      discountCode: "localStorage/discountCode"
    }),
    ttcTotalProductPrice() {
      return (parseFloat(this.totalPrice())).toFixed(
        2
      ).replace(".",",");
    },
    listTva() {
      var resultList = this.order.cart.reduce((result, currentValue) => {
          (result[currentValue.taxRule.value] = result[currentValue.taxRule.value] || []).push(currentValue);
          return result;
        }, {});
      return resultList
    }
  },
  created(){
    this.getOrder()
  }, 
  methods: {
      downloadPdf() {
          if (process.browser) {
            const {jsPDF} = require('jspdf');
            require('jspdf-autotable');

            let doc = new jsPDF();

            doc.html(document.body, {
            callback: function (doc) {
                doc.save("a4.pdf");
            },
            x: 10,
            y: 10
            });
            // doc.text("Hello world!", 10, 10);
            // doc.save("a4.pdf");
        }
      },
    getOrder() {
      // ICI DETAIL D'UNE COMMANDE
        // var id = this.$route.params.id
        // db.collection("customers")
        // .doc(process.env.ID_CUSTOMER)
        // .collection("sites")
        // .doc(process.env.ID_SITE)
        // .collection("users")
        // .doc(this.user.mail)
        // .collection("orders")
        // .doc(id)
        // .get()
        // .then((doc) => {
        //     if (doc.exists) {
        //         this.order = doc.data()
        //     } else {
        //         console.log("No such document!");
        //     }
        // })
        // .catch((err) => {
        //     console.log("Error getting document:", err);
        // })
    },
    getTotalPriceHt(){
      return parseFloat(this.order.cart.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity) - (parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity)*currentValue.taxRule.value/100);
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
  },

  components: {},
};
</script>
<style scoped>
.title{
    margin-bottom: 2rem;
}
.title img{
    width: 30px;
    margin-right: 1rem;
}
.title h1{
    width: 100vw;
    color: var(--color1);
    font-weight: 400;
    align-items: center;
    display: flex;
    height: 30px;
}
.button {
    background-color: var(--color1);
    width: 50%;
    border: var(--color1) 2px solid;
    color: var(--color2);
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    text-transform: uppercase;
    border-radius: 10px;
    align-items: center;
    font-family: var(--font1);
    outline: none;
    cursor: pointer;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    transition: all .3s ease-in-out;
}
.button:hover {
    background-color:transparent;
    color: var(--color1);
    transition: all .3s ease-in-out;
    border: var(--color1) 2px solid;
}
.orangeText {
    color:var(--color1);
    font-size: 1.1rem;
    font-weight: 500;
}

/* .depots-items {
    margin-bottom: 30px;
    padding:1rem;
    opacity: 0.5;
    align-items: center;
    position: relative
} */
/* .depots-items li:nth-child(odd){
    background-color: var(--color4);
} */
.depots-items li{
    content:'';
    width: 50px;
    height: 50px;
    background: url(~/assets/medias/check.svg);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% auto;
    top: 0.5rem;
    right: 1rem;
    display: block;
    position: absolute;
}

.depots-items p{
    line-height: 1.2rem;
    font-weight: 300;
    margin-bottom: 0.25rem;
}
.depots-items .name{
    font-size: 1.2rem;
    color: var(--color1);
    font-weight: 500;
}
.depots-items .tel{
    color: var(--color1);
    font-weight: 500;
}
.depots-items img{
    width: 20px;
    filter: invert(0%) sepia(84%) saturate(7500%) hue-rotate(207deg) brightness(0%) contrast(114%);
    margin-right: 10px;
}
</style>