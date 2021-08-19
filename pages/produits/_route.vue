<template>
  <div id="productPage">
    <main v-if="loadedProduct" class="page-produit">
      <div class="container">
        <div class="row title">
          <div @click="$router.go(-1)" style="cursor: pointer">
            <img src="~/assets/medias/left-arrow.svg" alt="" />
          </div>
          <h1>{{ product.name }}</h1>
        </div>
        <div class="row presentation">
          <div class="column fiche">
            <div class="column images">
              <img
                class="produit"
                :src="product.image"
                alt="Image"
              />
              <div class="logos">
                <img src="~/assets/medias/logos.png" />
              </div>
            </div>
          </div>
          <div class="column commande">
            <div>
              <form class="column" action="">
                <label>Mode de commande :</label>

                <div class="row">
                  <input
                    type="radio"
                    id="depot"
                    name="mode-commande"
                    value="depot"
                    v-model="deliveryMode"
                    checked
                  />
                  <label 
                    class="label-mode"
                    for="depot">Retrait en dépôt</label>
                </div>
                <!-- <span>{{
                  customVarList.find((el) => el.label === "Lieu de retrait")
                }}</span> -->
                <select
                  v-if="
                    deliveryMode == 'depot'
                  "
                  v-model="deliveryAgency"
                  name="lieu"
                  id="livraison"
                >
                  <!-- <option :value="-1">-- Choisissez un lieu de retrait</option> -->
                  <option
                    v-for="(element, index) in depots"
                    :key="index"
                  >
                    {{ element }}
                  </option>
                </select>
              </form>

              <div v-if="calculPrix > 0" class="row total">
                <p>Votre prix :</p>

                <p>
                  {{ this.calculPrix }}
                  TTC
                </p>
              </div>
              <button
                v-if="calculPrix > 0"
                class="row add-cart"
                style="cursor: pointer"
                @click.prevent="addItem()"
              >
                <p>Ajouter au panier</p>
                <div class="cart" id="AddBtn">
                  <img src="~/assets/medias/cart-w.svg" />
                </div>
              </button>
              <button style="background-color: grey" class="row add-cart" v-else>
                <p>Indisponible</p>
                <div class="cart" id="AddBtn">
                  <img src="~/assets/medias/cart-w.svg" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="row details">
          <div class="column caracteristiques">
            <div class="flex">
              <h2
                @click="tabSelect = 'Présentation'"
                :class="tabSelect == 'Présentation' ? 'active' : 'unactive'"
              >
                Présentation
              </h2>
            </div>
            <p
              v-show="tabSelect == 'Présentation'"
              v-html="product.description"
            ></p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import axios from "axios";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import $ from "jquery";
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
var debounce = require("debounce");
export default {
  data() {
    return {
      deliveryAreasList: [],
      searchText: "",
      geolocation: null,
      citiesList: [],
      product: {
        metaTitle: "",
        metaDescription: ""
      },
      depots: [
        "Entrepot de Mitry-Mory",
        "Entrepot de Le Pontet",
        "Entrepot d'Angoulème",
        "Entrepot d'Ipres",
        "Boutique de Lille",
        "Boutique de Versailles",
        "Boutique de Toulon",
        "Boutique de Bordeaux",
        "Boutique de Nantes",
        "Boutique de Lyon",
      ],
      loadedProduct: false,
      conditionnementSelected: 0,
      customVarList: [],
      tabSelect: "Présentation",
      loadedCustomVar: false,
      customVarParams: [],
      zones: [],
      zipCode: "",
      cacheCity: [],
      deliveryMode: "depot",
      deliveryAgency: "Dépot de Maison-Alfort",
      deliveryToDomicile: false,
    };
  },
  head() {
    return {
      title: this.product.metaTitle ? this.product.metaTitle : "Grand Paris Combustibles",
      meta: [
        // `hid` est un identifiant unique. N'utilisez pas `vmid` pour cela car cela ne marchera pas.
        {
          hid: this.$route.params.route,
          name: "description",
          content: this.product.metaDescription ? this.product.metaDescription : "Numéro 1 sur le combustible de chauffage en Ile de France",
        }
      ]
    }
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    ...mapMutations({
      addToCart: "localStorage/add",
      removeFromCart: "localStorage/remove",
      deleteItemFromCart: "localStorage/delete",
      setOptionLivraison: "optionLivraison/setOptionLivraison",
    }),
    checkLocation() {
      var optionLivraison = {
        mode: "",
        zone: null,
        depot: null,
      };
      var locationArea = null;
      for (let i = 0; i < this.deliveryAreasList.length; i++) {
        const area = this.deliveryAreasList[i];
        if (
          area.cities.find(
            (elem) =>
              elem.label
                .toUpperCase()
                .replaceAll("-", " ")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") ==
              this.geolocation.nom
                .toUpperCase()
                .replaceAll("-", " ")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
          )
        ) {
          locationArea = JSON.parse(JSON.stringify(area));
          break;
        }
      }
      delete locationArea.cities;
      optionLivraison.mode = "livraison";
      optionLivraison.zone = {
        id: locationArea.id,
        label: locationArea.label,
        minAmount: locationArea.minAmount,
        zipCode: this.searchText,
        city: this.geolocation.nom
          .toUpperCase()
          .replaceAll("-", " ")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""),
      };
      // for (let i = 0; i < this.selectedItems.length; i++) {
      //   const item = this.selectedItems[i];
      //   if (item.customVarProduct[this.conditionnementSelected].td.find(elem => elem.label == optionLivraison.zone.label).value == 0) {
      //     this.deleteItemFromCart(item)
      //   }
      // }
      this.setOptionLivraison(optionLivraison);
      // this.geolocation = null;
    },
    setDeliveryMode() {
      if (this.deliveryMode == "depot") {
        this.setOptionLivraison({
          ...this.getOptionLivraison,
          depot: this.deliveryAgency,
          mode: "retrait",
        });
      }
    }, 
    openPanel() {
      //   this.authPanel = true;
      let id="sidebar-cart"
      $("body").addClass("stopScroll");
      $("#"+id).css("animation", "slideIn 1s forwards");
      $("#"+id).css("display", "block");
      $("#"+id+ ".sidebar-content").css("right", "0");
    },
    addItem() {
      this.addToCart({
        ...this.product,
        conditionnement: this.conditionnementSelected,
      });
      this.setDeliveryMode();
      this.openPanel();
      $("#AddBtn").addClass("move-icone-cart");
      setTimeout(() => {
        $("#AddBtn").removeClass("move-icone-cart");
      }, 900);
    },
    ...mapGetters({
      popupVisible: "popup/isVisible",
      popupMode: "popup/getMode",
    }),
    getProduct() {
      axios.get("http://3.21.236.175:9000/products/"+this.$route.params.route).then((result) => {
        console.log(result)
          this.product = result.data.product
          this.loadedProduct = true
        }).catch((error) => {
          console.error("error", error)
        })
    },
  },
  computed: {
    selectedItems() {
      return this.$store.getters["localStorage/items"];
    },
    ...mapGetters({
      getOptionLivraison: "optionLivraison/optionLivraison",
    }),
    calculPrix() {
      var price = NaN;
      if (this.deliveryMode == "depot") {
          price = parseFloat(
            this.product.price.toString()
              .replace(/,/, ".")
          ).toFixed(2);
          return price;
      }
    },
  },
};
</script>

<style>
.vs--searchable .vs__dropdown-toggle{
  background-color: var(--color2);
  padding: 0;
  outline: none;
  border: 0;
}

</style>
