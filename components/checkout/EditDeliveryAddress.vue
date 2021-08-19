<template>
    <div>
        <h1 >Modifier une adresse de livraison</h1>
            <v-select ref="select" :options="citiesList" :filterable="false" v-model="address"  @search="onSearch">
                <div slot="no-options">{{searchText.length > 0 ? '' : 'Renseigner votre adresse'}}</div>
                <template v-slot:option="option">
                    <span>{{option.label}}</span>
                </template>
            </v-select>
            <div class="btn--group">
                <button v-if="address" @click="editAddress" class="btn--green">Ajouter</button>
                <button v-if="address" @click="deleteAddress" class="btn--green">Supprimer</button>
            </div>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'; 
import axios from 'axios'
import { db } from "~/plugins/firebase/firebaseConfig.js";
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
var debounce = require('debounce');

export default {
    data () {
        return {
            searchText: "",
            address: null,
            citiesList: [],
        }
    },
    mounted() {
        this.address = this.addressToEdit
    },
    methods: {
        ...mapActions({
            close: 'popup/hide'
        }),
        ...mapMutations({
            setLocation: 'location/setLocation',
        }),
        //Fonction de suppression de l'adresse
        deleteAddress() {
            // db.collection("customers")
            //     .doc(process.env.ID_CUSTOMER)
            //     .collection("sites")
            //     .doc(process.env.ID_SITE)
            //     .collection("users")
            //     .doc(this.user.mail)
            //     .collection("addresses")
            //     .doc(this.addressToEdit.id)
            //     .delete().then(() => {
                    this.close()
                // })
        },
        //Fonction de mise à jour de l'adresse
        editAddress() {
            this.address.type = "deliveryAddress"
            this.address.id = this.addressToEdit.id
            // db.collection("customers")
            //     .doc(process.env.ID_CUSTOMER)
            //     .collection("sites")
            //     .doc(process.env.ID_SITE)
            //     .collection("users")
            //     .doc(this.user.mail)
            //     .collection("addresses")
            //     .doc(this.addressToEdit.id)
            //     .set(this.address).then((res) => {
                    this.close()
                // })
        },
        //Fonction qui s'execute à chaque fois que l'utilisateur recherche une adresse
        //search: String, adresse recherchée
        //loading: fonction, active ou désactive le chargement du select
        onSearch(search, loading) {
            if(search.length > 5) {
                this.searchText = JSON.parse(JSON.stringify(search))
                loading(true);
                this.search(loading, search, this);
            }
            else {
                this.citiesList = []
            }
        },
        //Fonction qui s'execute à chaque fois que la recherche dépasse 5 caractères
        //search: String, adresse recherchée
        //loading: fonction, active ou désactive le chargement du select
        //vm: this, instance actuelle de Vue
        search: debounce((loading, search, vm) => {
            axios.get("https://api-adresse.data.gouv.fr/search/?", {
                    params: {
                        q:search,
                    },
                })
                .then((res) => {
                    vm.citiesList = []
                        res.data.features.forEach((elem) => {
                                    vm.citiesList.push(elem.properties)
                                    vm.$refs.select.open = true
                        });
                        loading(false);
            }, 350)
        }),
    },
    computed: {
        user() {
            return this.$store.getters['auth/user']
        },
        addressToEdit() {
            return this.$store.getters['location/location']
        },
    },
}
</script>

<style scoped>
    h1{
        color: var(--color1);
        font-size: 1.6rem;
        width: 100%;
        text-align: center;
        margin-bottom: 10px
    }
    p{
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
        width: 100%
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