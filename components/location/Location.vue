<template>
    <div id="popupLocation">
        <div class="popup-header">
            <h1>Bonjour, c'est votre première visite ?</h1>
            <p>Mémoriser vos préférences de commande afin d'obtenir instantanément le prix total de votre commande</p>
        </div>
        <div class="popup-content">
            <h2>Optez pour le <span>retrait</span> dans l'un de nos dépots :</h2>
            <v-select ref="selectDepot" v-model="retraitLocation" :options="depots" placeholder="Sélectionnez un dépôt">
                <div slot="no-options">{{'Aucun point de retrait disponible'}}</div>
                <template v-slot:option="option">
                    <span>{{option.label}}</span>
                </template>
            </v-select>
            <div class="row bottom-buttons" style="justify-content:flex-end">
                <button type="button" class="validate" @click="checkLocation" :class="!enableValidate ? 'disabled' : ''">
                    <p>VALIDER</p>
                    <img src="~/assets/medias/right-arrow2.svg" alt="connexion" style="height: 1rem">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'; 
import { mapActions } from 'vuex'
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
            isDeliveryByRetrait: false,
            loading: true,
            searchText: "",
            geolocation: null,
            deliveryLocation:null,
            retraitLocation:null,
            enableValidate:false,
            citiesList: [],
            deliveryAreasList: [],
            customVarParams: [],
            cantFindZone: false
        }
    },
    methods: {
        //Fonction qui vérifie et insert le code postal+ville / point de dépot séléctionné dans le store
        checkLocation() {
            if(this.enableValidate){
                var optionLivraison = {
                    mode: "",
                    zone: null,
                    depot: null,
                }
                var locationArea = null

                if(this.retraitLocation!=="" && this.retraitLocation!==null){
                    // option retrait
                    optionLivraison.mode = "retrait"
                    optionLivraison.depot = this.retraitLocation
                    this.setOptionLivraison(optionLivraison)
                    console.log("retrait", optionLivraison)
                    this.close()
                }else{
                    // option livraison
                    for (let i = 0; i < this.deliveryAreasList.length; i++) {
                        const area = this.deliveryAreasList[i];
                        if (area.cities.find(elem => elem.label.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "") == this.deliveryLocation.nom.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
                            locationArea = JSON.parse(JSON.stringify(area))
                            break;
                        }
                    }
                    delete locationArea.cities
                    optionLivraison.mode = "livraison"
                    optionLivraison.zone = {id: locationArea.id, minAmount: locationArea.minAmount, label: locationArea.label, zipCode: this.searchText, city: this.deliveryLocation.nom.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
                    this.setOptionLivraison(optionLivraison)
                    console.log("livraison", optionLivraison)
                    this.close()
                }
            }
        },
        onSearch(search, loading) {
            if(search.length == 5) {
                this.searchText = JSON.parse(JSON.stringify(search))
                loading(true);
                this.search(loading, search, this);
            }
            else {
                this.citiesList = []
            }
        },
        search: debounce((loading, search, vm) => {
            axios.get("https://geo.api.gouv.fr/communes?", {
                    params: {
                        codePostal: escape(search),
                    },
                })
                .then((res) => {
                    vm.deliveryAreasList.forEach((area) => {
                        area.cities.forEach((city) => {
                            res.data.forEach((elem) => {
                                if ( elem.nom.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "") == city.label.toUpperCase().replaceAll("-", " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
                                    vm.citiesList.push(elem)
                                    vm.$refs.select.open = true
                                }
                            });
                        });
                    });
                    loading(false);
            }, 350)
        }),
        ...mapMutations({
            setOptionLivraison: 'optionLivraison/setOptionLivraison'
        }),
        ...mapActions({
            close: 'popup/hide'
        }),
    },
    watch: {
        
        "deliveryLocation":function (val, oldVal) {
            if(val==null && this.retraitLocation==null){
                this.enableValidate=false
            }else{
                this.enableValidate=true
            }
        },
        "retraitLocation":function (val, oldVal) {
            if(val==null && this.deliveryLocation==null){
                this.enableValidate=false
            }else{
                this.enableValidate=true
            }
        },

        isDeliveryByRetrait(val) {
            this.deliveryLocation = null
        }
    }
}
</script>

<style>
#popupLocation{
    border-radius: 14px;
    border-bottom-left-radius: 39px;
}
#popupLocation .popup-header, #popupLocation .popup-content{
    padding: 1.5rem;
}
#popupLocation .popup-header{
    background:var(--color1);
    border-bottom-right-radius: 39px;
}
#popupLocation .popup-content{
    background:var(--color2);
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 39px;
}
#popupLocation h1{
    color: var(--color2);
    font-size: 1.6rem;
    text-align: left;
    margin-bottom: 1rem;
}
#popupLocation p{
    color: var(--color4);
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
}
#popupLocation h2{
    color: var(--color1);
    font-size: 1.2rem;
    font-weight: 300 !important;
    text-align: left;
    margin-bottom: 1rem;
}
#popupLocation h2 span{
    font-weight: 500 !important;
}
#popupLocation .v-select{
    margin-bottom: 2rem;
    display: block;
}
#popupLocation .vs--disabled .vs__clear, 
#popupLocation .vs--disabled .vs__dropdown-toggle, 
#popupLocation .vs--disabled .vs__open-indicator, 
#popupLocation .vs--disabled .vs__search, 
#popupLocation .vs--disabled .vs__selected {
    cursor: not-allowed;
    background-color: var(--color4) !important;
}
#popupLocation .vs__dropdown-toggle,
#popupLocation .vs--searchable .vs__dropdown-toggle,
#popupLocation .v-select .vs__dropdown-toggle {
    background-color: var(--color4) !important;
    line-height: 2.6rem !important;
    height: 35px !important;
}
#popupLocation .vs__selected-options,
#popupLocation .vs--single .vs__selected,
#popupLocation .v-select .vs__search, 
#popupLocation .v-select .vs__search:focus{
    margin:0px;
    line-height: 35px;
    height: 35px;
    padding: 0 7px;
}
#popupLocation button.validate {
    background-color: var(--color2);
    border:  var(--color1) 2px solid;
    color: var(--color1);
    width: 100%;
    max-width: 200px;
    padding: 10px;
    border-radius: 10px 10px 40px 10px;
    align-items: center;
    font-family: var(--font1);
    outline: none;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}
#popupLocation button.validate p{
    color: var(--color1);
}
#popupLocation button.validate img{
    width: 60px;
    filter: invert(37%) sepia(92%) saturate(4009%) hue-rotate(14deg) brightness(100%) contrast(109%);
}
#popupLocation button.validate:hover {
    background-color: var(--color1);
    color: var(--color2);
}
#popupLocation button.validate:hover p{
    color: var(--color2);
}
#popupLocation button.validate:hover > img{
    filter: invert(93%) sepia(94%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);
}


#popupLocation button.disabled,
#popupLocation button.disabled:hover{
    border:  var(--color3) 2px solid;
    color: var(--color3);
    cursor:default
}
#popupLocation button.disabled:hover {
    background-color: var(--color2);
    color: var(--color2);
}
#popupLocation button.disabled p,
#popupLocation button.disabled:hover p{
    color: var(--color3);
}
#popupLocation button.disabled img,
#popupLocation button.disabled:hover > img{
    filter: invert(71%) sepia(4%) saturate(22%) hue-rotate(344deg) brightness(85%) contrast(92%);
}
</style>