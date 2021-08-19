<template>
  <div class="container delivery">
    <div class="row-bootstrap m-0">
      <div class="col-12 col-md-4 half">
        <h2>MON PANIER</h2>
        <div class="cart">
          <ul class="cart-items">
            <li :key="index" v-for="(item, index) in selectedItems">
              <div class="flex">
                <h3>
                  {{
                    item.name +
                    (item.itemQuantity > 1 ? " x" + item.itemQuantity : "")
                  }}
                </h3>
                <p class="price">
                  {{
                    (getItemPrice(item) * item.itemQuantity)
                      .toFixed(2)
                      .replace(".", ",")
                  }}€
                </p>
              </div>
            </li>
          </ul>
          <div class="cart-footer">
            <div class="flex row-subtotal">
              <p>Total HT</p>
              <p>{{ getTotalPriceHt() }}€</p>
            </div>
            <div class="flex" :key="i" v-for="(item, i) in listTva">
              <p>TVA {{ item[0].tva }} %</p>
              <p>{{ getTva(item, item[0].tva) }}€</p>
            </div>
            <div class="flex row-total">
              <p>Total TTC</p>
              <p>{{ (getPrice * 1).toFixed(2) }}€</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 half">
        <div v-if="getOptionLivraison.mode == 'retrait'">
          <h2 class="title">MON DÉPOT DE RETRAIT</h2>
          <p
            style="
              color: var(--color3);
              font-style: italic;
              margin-bottom: 20px;
            "
          >
            Vous avez choisi le retrait dans un de nos dépots, merci de préciser
            un dépot.
          </p>
          <ul class="depots-items">
            <li
              v-for="(item, index) in depots"
              :key="index"
              :class="selectedDeliveryAddress == item ? 'active' : ''"
            >
              <label class="flex">
                <div class="radio">
                  <input
                    :id="item"
                    :value="item"
                    :name="item.label"
                    v-model="selectedDeliveryAddress"
                    type="radio"
                  />
                </div>
                <div>
                  <p class="name">
                    <span>{{ item.label }}</span>
                  </p>
                  <div class="flex">
                    <img src="~/assets/medias/pin.svg" />
                    <p>{{ item.address }}</p>
                  </div>
                  <div class="flex">
                    <img src="~/assets/medias/phone.svg" />
                    <p class="tel">{{ item.phone }}</p>
                  </div>
                  <div class="flex">
                    <img src="~/assets/medias/clock.svg" />
                    <p>{{ item.hours }}</p>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <h2>MON ADRESSE DE FACTURATION</h2>
        <div v-if="!sameAddress || getOptionLivraison.mode == 'retrait'">
          <form
            v-if="!sameAddress || getOptionLivraison.mode == 'retrait'"
            data-vv-scope="billingAddressForm"
            class="formInvoice"
          >
            <div class="row-bootstrap">
              <div class="col-12 col-md-6">
                <label for="formInvoiceLastName">Nom</label>
                <input
                  v-validate="'required'"
                  v-model="billingAddressForm.lastName"
                  type="text"
                  id="formInvoiceLastName"
                  name="lastName"
                />
                <span
                  v-show="errors.has('billingAddressForm.lastName')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.lastName") }}</span
                >
              </div>
              <div class="col-12 col-md-6">
                <label for="formInvoiceFirstName">Prénom</label>
                <input
                  v-validate="'required'"
                  v-model="billingAddressForm.firstName"
                  type="text"
                  id="formInvoiceFirstName"
                  name="firstName"
                />
                <span
                  v-show="errors.has('billingAddressForm.firstName')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.firstName") }}</span
                >
              </div>
            </div>
            <div class="row-bootstrap">
              <div class="col-12">
                <label for="formInvoiceCompany">Société (optionnel)</label>
                <input
                  v-model="billingAddressForm.company"
                  type="text"
                  id="formInvoiceCompany"
                  name="company"
                />
              </div>
            </div>
            <div class="row-bootstrap">
              <div class="col-12">
                <label for="formInvoiceAddress">Adresse</label>
                <input
                  v-validate="'required'"
                  v-model="billingAddressForm.address"
                  type="text"
                  id="formInvoiceAddress"
                  name="address"
                />
                <span
                  v-show="errors.has('billingAddressForm.address')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.address") }}</span
                >
              </div>
            </div>
            <div class="row-bootstrap">
              <div class="col-4">
                <label for="formInvoiceZipCode">Code Postal</label>
                <input
                  v-validate="'required|max:5'"
                  v-model="billingAddressForm.zipCode"
                  type="text"
                  id="formInvoiceZipCode"
                  name="zipCode"
                />
                <span
                  v-show="errors.has('billingAddressForm.zipCode')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.zipCode") }}</span
                >
              </div>
              <div class="col-8">
                <label for="formInvoiceCity">Ville</label>
                <input
                  v-validate="'required'"
                  v-model="billingAddressForm.city"
                  type="text"
                  id="formInvoiceCity"
                  name="city"
                />
                <span
                  v-show="errors.has('billingAddressForm.city')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.city") }}</span
                >
              </div>
            </div>
            <div class="row-bootstrap">
              <div class="col-12">
                <label for="formInvoiceCountry">Pays</label>
                <input
                  v-validate="'required'"
                  v-model="billingAddressForm.country"
                  type="text"
                  id="formInvoiceCountry"
                  name="country"
                />
                <span
                  v-show="errors.has('billingAddressForm.country')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.country") }}</span
                >
              </div>
            </div>
            <div class="row-bootstrap">
              <div class="col-12 col-md-6">
                <label for="formInvoicePhone">Téléphone</label>
                <input
                  v-validate="'required|numeric|max:10'"
                  v-model="billingAddressForm.phone"
                  type="text"
                  id="formInvoicePhone"
                  name="phone"
                />
                <span
                  v-show="errors.has('billingAddressForm.phone')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.phone") }}</span
                >
              </div>
              <div
                v-if="
                  user &&
                  user.type == 'guest' &&
                  getOptionLivraison.mode == 'retrait'
                "
                class="col-12 col-md-6"
              >
                <label for="formInvoiceEmailGuest">Email</label>
                <input
                  v-validate="'required|email'"
                  v-model="emailGuest"
                  type="text"
                  id="formInvoiceEmailGuest"
                  name="emailGuest"
                />
                <span
                  v-show="errors.has('billingAddressForm.emailGuest')"
                  class="is-danger"
                  >{{ errors.first("billingAddressForm.emailGuest") }}</span
                >
              </div>
            </div>
          </form>
        </div>

        <div class="flex footer-buttons">
          <div @click="save" class="btn-valid">
            <button type="button">
              <p>Commander</p>
              <img
                src="~/assets/medias/right-arrow2.svg"
                alt="connexion"
                style="height: 1rem"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
var isEqual = require("lodash.isequal");
import { Validator } from "vee-validate";
import axios from "axios";

const dict = {
  custom: {
    firstName: {
      required: () => "Veuillez renseigner votre prénom",
    },
    lastName: {
      required: () => "Veuillez renseigner votre nom",
    },
    address: {
      required: () => "Veuillez renseigner votre adresse",
    },
    city: {
      required: () => "Veuillez renseigner votre ville",
    },
    country: {
      required: () => "Veuillez renseigner votre pays",
    },
    zipCode: {
      required: () => "Veuillez renseigner votre code postal",
      max: () => "Le code postal ne peut pas contenir plus de 5 caractères",
    },
    phone: {
      required: () => "Veuillez renseigner votre téléphone",
      max: () => "Votre numéro ne peut pas contenir plus de 10 caractères",
      numeric: () => "Votre numéro ne peut contenir que des chiffres",
    },
    emailGuest: {
      required: () => "Veuillez renseigner votre adresse email",
      email: () => "Merci d'entrer une adresse email valide",
    },
  },
};
Validator.localize("fr", dict);
export default {
  name: "PersonnalInfo",
  data() {
    return {
      customVarParams: [],
      sameAddress: true,
      emailGuest: "",
      depots: [
        {
          label: "Entrepot de Mitry-Mory",
          address: "9 route de bosc mare 76560 DOUDEVILLE",
          phone: "06 19 à2 80 80",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Entrepot de Le Pontet",
          address: "19 boulevard de la Marne 76000 ROUEN",
          phone: "08 67 65 54 33",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Entrepot d'Angoulème",
          address: "76 rue la croix blanche 76190 YVETOT",
          phone: "06 18 63 67 63",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Entrepot d'Ipres",
          address: "93 rue Banaudon 69006 LYON",
          phone: "06 15 36 74 23",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Boutique de Lille",
          address: "93 rue Jean-Monnet 95190 GOUSSAINVILLE",
          phone: "08 53 24 35 46",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Boutique de Versailles",
          address: "70 avenue de Provence 59300 VALENCIENNES",
          phone: "06 16 23 35 25",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Boutique de Toulon",
          address: "77 rue de Lille 62000 ARRAS",
          phone: "06 16 23 45 09",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Boutique de Bordeaux",
          address: "85 Place du Jeu de Paume 18100 VIERZON",
          phone: "06 45 67 78 89",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Boutique de Nantes",
          address: "61 boulevard Bryas 94000 CRÉTEIL",
          phone: "06 12 34 35 56",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
        {
          label: "Boutique de Lyon",
          address: "36 rue Léon Dierx 93190 LIVRY-GARGAN",
          phone: "06 65 66 55 44",
          hours: "du Lundi au Vendredi de 7h00 à 12h00 et de 13h30 à 17h30",
        },
      ],
      deliveryAddressForm: {
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        phone: "",
      },
      initialBillingAddress: {},
      initialDeliveryAddress: {},
      billingAddressForm: {
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        phone: "",
      },
      optionLivraison: {
        mode: "",
        zone: null,
        depot: null,
      },
      selectedDeliveryAddress: null,
      selectedBillingAddress: null,
      formInfo: {
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
      },
    };
  },
  mounted() {
    this.preCompleteForm();
  },
  computed: {
    discountCode() {
      return this.$store.getters["localStorage/discountCode"];
    },
    username() {
      return this.$store.getters["auth/username"];
    },
    user() {
      return this.$store.getters["auth/user"];
    },
    isDelivery() {
      if (this.getOptionLivraison.mode == "livraison") {
        return true;
      } else {
        return false;
      }
    },
    ...mapGetters({
      getOptionLivraison: "optionLivraison/optionLivraison",
      deliveryAddress: "location/deliveryAddress",
      selectedItems: "localStorage/items",
      getItemPrice: "localStorage/itemPrice",
      getPrice: "localStorage/price",
    }),
    listTva() {
      var resultList = this.selectedItems.reduce((result, currentValue) => {
        (result[currentValue.tva] = result[currentValue.tva] || []).push(
          currentValue
        );
        return result;
      }, {});
      return resultList;
    },
  },
  watch: {
    selectedDeliveryAddress(newVal) {
      this.setOptionLivraison({
        ...this.getOptionLivraison,
        depot: newVal,
        mode: "retrait",
      });
    },
    user() {
      this.preCompleteForm();
    },
  },
  methods: {
    saveOrder() {
      return new Promise((resolve, reject) => {
        var order = {
          user_name: this.user.firstName + " " + this.user.lastName,
          warehouse: this.selectedDeliveryAddress.address,
          orders: [],
        };
        for (let i = 0; i < this.selectedItems.length; i++) {
          const element = this.selectedItems[i];
          var product = {
            product_id: element.id,
            product_name: element.name,
            product_qty: element.itemQuantity.toString()
          };
          order.orders.push(product);
        }
        resolve(order);
      });
    },
    save() {
      this.saveOrder().then((result) => {
        axios
          .post("http://3.21.236.175:9000/orders/", result)
          .then((response) => {
            console.log("Commande validée")
            this.$router.push("/")
          })
          .catch((error) => {
            console.error(error)
          })
      });
    },
    getTotalPriceHt() {
      return parseFloat(
        this.selectedItems.reduce((sum, currentValue) => {
          return (
            sum +
            parseFloat(
              this.getItemPrice(currentValue) * currentValue.itemQuantity
            ) -
            (parseFloat(
              this.getItemPrice(currentValue) * currentValue.itemQuantity
            ) *
              currentValue.tva) /
              100
          );
        }, 0)
      )
        .toFixed(2)
        .replace(".", ",");
    },
    getTva(items, taux) {
      return parseFloat(
        items.reduce((sum, currentValue) => {
          return (
            sum +
            (parseFloat(
              this.getItemPrice(currentValue) * currentValue.itemQuantity
            ) *
              taux) /
              100
          );
        }, 0)
      )
        .toFixed(2)
        .replace(".", ",");
    },
    preCompleteForm() {
      if (this.user) {
        this.deliveryAddressForm.firstName = this.user.firstName;
        this.deliveryAddressForm.lastName = this.user.lastName;
        this.billingAddressForm.firstName = this.user.firstName;
        this.billingAddressForm.lastName = this.user.lastName;
      }
      this.$validator.reset();
    },
    ...mapMutations({
      setLocation: "location/setLocation",
      setOptionLivraison: "optionLivraison/setOptionLivraison",
      setLivraisonMode: "optionLivraison/setLivraisonMode",
      deleteItemFromCart: "localStorage/delete",
      setUser: "auth/setUser",
    }),
    ...mapActions({
      open: "popup/show",
      changeMode: "popup/changeMode",
    }),
  },
};
</script>