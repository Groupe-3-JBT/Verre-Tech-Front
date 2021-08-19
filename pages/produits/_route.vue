<template>
  <div id="productPage">
    <main v-if="loadedProduct" class="page-produit">
      <div class="container">
        <div class="row title">
          <div @click="$router.go(-1)" style="cursor: pointer">
            <img src="~/assets/medias/left-arrow.svg" alt="" />
          </div>
          <h1>{{ product.fields.Nom }}</h1>
        </div>
        <div class="row presentation">
          <div class="column fiche">
            <div class="column images">
              <img
                class="produit"
                :src="product.fields.Image[0].url"
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
              v-html="product.fields.Description"
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
      records: [
        {
          id: "rec1E6ZZvl74yoaOd",
          fields: {
            TVA: 10,
            Catégorie: "pare-douche",
            Nom: "Vitre De Douche",
            Prix: 70,
            Description: "Une vitre mais pour les douches",
            Image: [
              {
                id: "attl5cgbRmUfbL7Q6",
                width: 700,
                height: 700,
                url: "https://dl.airtable.com/.attachments/0684be7e5343c2efe0b9438b7bc08ebd/9863af87/pare-douche-paroi-de-douche-150x200cm-en-verre-b.jpg",
                filename:
                  "pare-douche-paroi-de-douche-150x200cm-en-verre-b.jpg",
                size: 22996,
                type: "image/jpeg",
                thumbnails: {
                  small: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/f0c00e3e15f2b2fcd12a30e2d0fb12e7/8f4f3e18",
                    width: 36,
                    height: 36,
                  },
                  large: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/b3cfaf3dc49fe51bbb4be0f8b92d1128/1b4e9cc5",
                    width: 512,
                    height: 512,
                  },
                  full: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/73ecc73fe7af6c12d1335530bae52ef8/eaa9d889",
                    width: 3000,
                    height: 3000,
                  },
                },
              },
            ],
          },
          createdTime: "2021-08-17T14:12:33.000Z",
        },
        {
          id: "recXwlY9n8GdNHO7m",
          fields: {
            TVA: 10,
            Catégorie: "inserts-de-cheminee",
            Nom: "Insert Cheminée",
            Prix: 250,
            Description:
              "C'est pratique pour empêcher votre maison de prendre feu",
            Image: [
              {
                id: "attMLku4d7gsSCrAL",
                width: 640,
                height: 360,
                url: "https://dl.airtable.com/.attachments/813187a15b31845d599b5e3d55ae9dbd/3c3bdc7c/un-insert-pour-diffuser-rapidement-la-chaleur_5121222.jpg",
                filename:
                  "un-insert-pour-diffuser-rapidement-la-chaleur_5121222.jpg",
                size: 35378,
                type: "image/jpeg",
                thumbnails: {
                  small: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/895155e092c7af0d37a02bb901eed656/e113ae70",
                    width: 64,
                    height: 36,
                  },
                  large: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/f61dfa743fc62fd5643e70a288164906/8d8d6d01",
                    width: 640,
                    height: 360,
                  },
                  full: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/bb74926a124d13337251d7edac177903/ccc6d416",
                    width: 3000,
                    height: 3000,
                  },
                },
              },
            ],
          },
          createdTime: "2021-08-17T14:27:39.000Z",
        },
        {
          id: "recjTp3cQiVdDWb14",
          fields: {
            TVA: 10,
            Catégorie: "cloisons-parois",
            Nom: "Vitre Simple",
            Prix: 40.5,
            Description: "Une vitre plutôt simple mais ma foi très jolie",
            Image: [
              {
                id: "att3qKBgeauyKAQbR",
                width: 648,
                height: 741,
                url: "https://dl.airtable.com/.attachments/0074e5e2bb93f48b9a3efeddcde828d4/36b18def/vitrier.jpg",
                filename: "vitrier.jpg",
                size: 121607,
                type: "image/jpeg",
                thumbnails: {
                  small: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/76574ac42c24bb37f7611dc98326dd19/1b72465a",
                    width: 31,
                    height: 36,
                  },
                  large: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/bd95e8a206f7421268719c4b78c064b0/c48a7c68",
                    width: 512,
                    height: 585,
                  },
                  full: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/e6ba7768cf790d3777f2f172f25b6450/6f9cf2f3",
                    width: 3000,
                    height: 3000,
                  },
                },
              },
            ],
          },
          createdTime: "2021-08-17T14:12:33.000Z",
        },
        {
          id: "recq1iyRiTB6zAN0s",
          fields: {
            TVA: 10,
            Catégorie: "cloisons-parois",
            Nom: "Baie Vitrée",
            Prix: 400,
            Description: "Une baie mais vitéee",
            Image: [
              {
                id: "attyx11dsn2RM4W0h",
                width: 607,
                height: 437,
                url: "https://dl.airtable.com/.attachments/3ff4bde1151c8a9aae82f73e4120fd9d/d89aaf3a/xslider-3.jpg.pagespeed.ic.v8aDvy9z5F.jpg",
                filename: "xslider-3.jpg.pagespeed.ic.v8aDvy9z5F.jpg",
                size: 66172,
                type: "image/jpeg",
                thumbnails: {
                  small: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/15d85ec442a07ab8e39e76b1a271085d/fb72bcd2",
                    width: 50,
                    height: 36,
                  },
                  large: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/ae6c69bb0416770ac72c6988dc01c9aa/53854dac",
                    width: 607,
                    height: 437,
                  },
                  full: {
                    url: "https://dl.airtable.com/.attachmentThumbnails/39e8b8276e8db24c8218fb45ccedf0ab/f4bf16da",
                    width: 3000,
                    height: 3000,
                  },
                },
              },
            ],
          },
          createdTime: "2021-08-17T14:23:15.000Z",
        },
      ],
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
    this.getProduct2();
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
      this.product = this.records.find((elem) => elem.id == this.$route.params.route)
      this.loadedProduct = true
      console.log(this.product)
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
            this.product.fields.Prix.toString()
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
