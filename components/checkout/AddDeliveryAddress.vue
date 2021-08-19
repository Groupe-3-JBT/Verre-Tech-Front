<template>
  <div>
    <h1>Ajouter une adresse de livraison</h1>
    <v-select
      ref="select"
      :options="citiesList"
      :filterable="false"
      v-model="address"
      @search="onSearch"
    >
      <div slot="no-options">
        {{ searchText.length > 0 ? "" : "Renseigner votre adresse" }}
      </div>
      <template v-slot:option="option">
        <span>{{ option.label }}</span>
      </template>
    </v-select>
    <div class="btn--group">
      <button v-show="address" @click="addAddress" class="btn--green">
        Ajouter
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import { db } from "~/plugins/firebase/firebaseConfig.js";
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
var debounce = require("debounce");
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      searchText: "",
      address: null,
      citiesList: [],
      deliveryAreasList: [],
      customVarParams: [],
    };
  },
  mounted() {
    this.getCities();
  },
  methods: {
      ...mapMutations({
          setDeliveryAddress : 'location/setDeliveryAddress'
      }),
    //Foncction d'ajout de l'adresse séléctionnée
    addAddress() {
      this.address.type = "deliveryAddress";
      if (this.user != null && this.user.type == "user") {
        // db.collection("customers")
        //   .doc(process.env.ID_CUSTOMER)
        //   .collection("sites")
        //   .doc(process.env.ID_SITE)
        //   .collection("users")
        //   .doc(this.user.mail)
        //   .collection("addresses")
        //   .add(this.address)
        //   .then((res) => {
        //     db.collection("customers")
        //       .doc(process.env.ID_CUSTOMER)
        //       .collection("sites")
        //       .doc(process.env.ID_SITE)
        //       .collection("users")
        //       .doc(this.user.mail)
        //       .collection("addresses")
        //       .doc(res.id)
        //       .update({ id: res.id })
        //       .then(() => {
        //         this.close();
        //       });
        //   });
      }else{
          this.setDeliveryAddress(this.address)
          this.close()
      }
    },
    //Fonction qui s'execute à chaque fois que l'utilisateur recherche une adresse'
    //search: String, adresse recherchée
    //loading: fonction, active ou désactive le chargement du select
    onSearch(search, loading) {
      if (search.length > 5) {
        this.searchText = JSON.parse(JSON.stringify(search));
        loading(true);
        this.search(loading, search, this);
      } else {
        this.citiesList = [];
      }
    },
    //Fonction qui s'execute à chaque fois que la recherche dépasse 5 caractères
    //search: String, adresse recherchée
    //loading: fonction, active ou désactive le chargement du select
    //vm: this, instance actuelle de Vue
    search: debounce((loading, search, vm) => {
      axios
        .get("https://api-adresse.data.gouv.fr/search/?", {
          params: {
            q: search,
          },
        })
        .then((res) => {
          vm.citiesList = [];
          vm.deliveryAreasList.forEach((area) => {
            area.cities.forEach((city) => {
              res.data.features.forEach((elem) => {
                if (
                  elem.properties.housenumber &&
                  elem.properties.city
                    .toUpperCase()
                    .replaceAll("-", " ")
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "") ==
                    city.label
                      .toUpperCase()
                      .replaceAll("-", " ")
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                ) {
                  vm.citiesList.push(elem.properties);
                  vm.$refs.select.open = true;
                }
              });
            });
          });
          loading(false);
        }, 350);
    }),
    getCities() {
      return new Promise((resolve, reject) => {
        // db.collectionGroup("deliveryAreas")
        //   .get()
        //   .then((querySnapshot) => {
        //     var foo = [];
        //     querySnapshot.forEach((doc) => {
        //       if (
        //         doc.ref.parent.parent.parent.parent.id ==
        //         process.env.ID_CUSTOMER
        //       ) {
        //         var data = doc.data();
        //         db.collectionGroup("places")
        //           .get()
        //           .then((snap) => {
        //             data.cities = [];
        //             snap.forEach((city) => {
        //               if (city.ref.parent.parent.id == doc.id) {
        //                 data.cities.push(city.data());
        //               }
        //             });
        //             foo.push(data);
        //           });
        //       }
        //     });
        //     this.deliveryAreasList = foo;
            resolve();
          // })
          // .catch((err) => {
          //   reject(err);
          // });
      });
    },
    ...mapActions({
      close: "popup/hide",
    }),
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--color1);
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
p {
  margin: 10px 0;
  width: 100%;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  padding: 30px 0 10px;
}
form input {
  margin: 5px 0;
  width: 300px;
  padding: 10px;
  border: 1px solid var(--color4);
  border-radius: 5px;
  width: 100%;
}
form input:focus {
  outline-color: var(--color1);
}
.btn--group button {
  width: 100%;
  margin-top: 15px;
  padding: 8px 5px;
  border-radius: 15px;
  align-items: center;
  font-family: var(--font1);
  outline: none;
  cursor: pointer;
  border: none;
  background-color: var(--color1);
  color: var(--color2);
}
</style>