<template>
  <div>
    <GMap
    v-if="mapLoaded"
    ref="gMap"
    language="en"
    :cluster="{options: {styles: clusterStyle}}"
    :center="{lat: parseFloat(locations[0].gpsCoordinate.lat), lng: parseFloat(locations[0].gpsCoordinate.lng)+0.5}"
    :options="{fullscreenControl: false, styles: mapStyle}"
    :zoom="11"
    >
        <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{lat: location.gpsCoordinate.lat, lng: location.gpsCoordinate.lng}"
            :options="{icon: markerIcon}"
            @click="currentLocation = location"
        >
            <GMapInfoWindow :options="{maxWidth: 200, height:400, maxHeight: 500}">
            <code >
                <div class="column" style="display: flex; justify-content: center; text-align: center">
                        <img
                        :src="location.img"
                        alt="image"
                        />
                        <div style="color: var(--color1)">
                            <h4><b>{{location.label}}</b></h4>                            
                        </div>
                        <div>
                            <h4><b>{{location.address}}</b></h4>                            
                        </div>
                    </div>
            </code>
            </GMapInfoWindow>
        </GMapMarker>
    </GMap>
    <h2 style="margin-top:40px;color: var(--color7);font-weight:bold; text-align:center; margin-bottom:50px; letter-spacing:normal">
        <span style="color: var(--color1);" >GRAND PARIS</span>
        <span>COMBUSTIBLES</span>
        , c'est aussi un réseau
        <br>
        composé d'un
        <span style="color: var(--color1);">dépot</span>
        , d'une
        <span style="color: var(--color1);">agence</span>
        et d'une
        <span style="color: var(--color1);">boutique</span>
    </h2>
    <div style="display: flex; justify-content: center;">
        <div id="products-list" class="products-list container" style="display: flex; justify-content: center;">
            <div :key="index" v-for="(item, index) in locations" class="card-column">
                <div class="card-content">
                    <div class="column" style="display: flex; justify-content: center;">
                        <img
                            style="width:100%"
                            :src="item.img"
                            alt="image"
                        />
                        <div style="padding:15px">
                            <h4><b>{{item.label}}</b></h4>
                            <div style="color:var(--color3)">
                                <p class="contact-address">
                                    <span class="contact-adresse-icone">
                                        <i></i>
                                        <span>Adresse :</span>
                                        &nbsp;
                                    </span>
                                    <span style="float: none">
                                        {{item.address.substring(0,item.address.search(/\d{5}/))}}
                                        <br>
                                        {{item.address.substring(item.address.search(/\d{5}/))}}
                                    </span>
                                </p>
                                <p class="contact-address">
                                    <span class="contact-adresse-icone">
                                        <i></i>
                                        <span>Tél :</span>
                                        &nbsp;
                                    </span>
                                    <span style="color:var(--color1); float: none">
                                        {{item.phone}}
                                    </span>
                                </p>
                                <p class="contact-address">
                                    <span class="contact-adresse-icone">
                                        <i></i>
                                        <span>Email :</span>
                                        &nbsp;
                                    </span>
                                    <span style="color:var(--color1); float: none">
                                        {{item.email}}
                                    </span>
                                </p>
                                <p class="contact-address">
                                    <span class="contact-adresse-icone">
                                        <i></i>
                                        <span>Horaires :</span>
                                        &nbsp;
                                    </span>
                                    <span style="float: none">
                                        {{item.hours.substring(0, item.hours.indexOf("de"))}}
                                        <br>
                                        {{item.hours.substring(item.hours.indexOf("de"))}}
                                    </span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 style="margin-top:40px;color: var(--color7);font-weight:bold; text-align:center; margin-bottom:50px; letter-spacing:normal">
        <span>Vous avez une question ?</span>
        <span style="color: var(--color1);" >contactez-nous !</span>
    </h2>
    <div style="display: flex; justify-content:center">
        <div style=" width:50%; background-color: var(--color1)">
            <div class="row" style='padding:15px; border-bottom:1px solid #fff; margin-bottom:20px; width:100%'>
                <p style='color:#fff; font-size:16px'>
                    Vous souhaitez obtenir plus de renseignements sur un produit?<br>
                    Vous voulez connaitre le statut d'une commande en cours?<br>
                    Vous souhaitez passer une commande dans un secteur qui n'est pas accepté par notre site web? <br>
                    <b>Posez-nous vos questions, nous vous répondrons dans nos meilleurs délais.</b>
                </p>
            </div>
        <form  data-vv-scope="contactForm" class="formContact">
            
            <div class="column" style="width: 50%; padding: 15px">
                <div class="column" style="margin-bottom: 20px; width: 100%">
                    <label for="formContactLastName">Nom</label>
                    <input
                    v-validate="'required'"
                    v-model="contactForm.lastName"
                    type="text"
                    id="formContactLastName"
                    name="lastName"
                    />
                    <span
                    v-show="errors.has('contactForm.lastName')"
                    class="is-danger alert"
                    >{{ errors.first("contactForm.lastName") }}</span
                    >
                </div>
                <div class="column" style="margin-bottom: 20px; width: 100%">
                    <label for="formContactFirstName">Prénom</label>
                    <input
                    v-validate="'required'"
                    v-model="contactForm.firstName"
                    type="text"
                    id="formContactFirstName"
                    name="firstName"
                    />
                    <span
                    v-show="errors.has('contactForm.firstName')"
                    class="is-danger alert"
                    >{{ errors.first("contactForm.firstName") }}</span
                    >
                </div>
                <div class="column" style="margin-bottom: 20px; width: 100%">
                    <label for="formContactEmail">Email</label>
                    <input
                    v-validate="'required|email'"
                    v-model="contactForm.mail"
                    type="text"
                    id="formContactEmail"
                    name="mail"
                    />
                    <span
                    v-show="errors.has('contactForm.mail')"
                    class="is-danger alert"
                    >{{ errors.first("contactForm.mail") }}</span
                    >
                </div>
                <div class="column" style="margin-bottom: 20px; width: 100%">
                    <label for="formContactEmailPhone">Téléphone</label>
                    <input
                    v-validate="'required|numeric|max:10'"
                    v-model="contactForm.phone"
                    type="text"
                    id="formContactEmailPhone"
                    name="phone"
                    />
                    <span
                    v-show="errors.has('contactForm.phone')"
                    class="is-danger alert"
                    >{{ errors.first("contactForm.phone") }}</span
                    >
                </div>
            </div>
            <div class="column" style="width: 50%; padding: 15px">
                <div class="column" style="margin-bottom: 20px; width: 100%">
                    <label for="formContactAbout">À propos</label>
                    <input
                    v-validate="'required'"
                    v-model="contactForm.about"
                    type="text"
                    id="formContactAbout"
                    name="about"
                    />
                    <span
                    v-show="errors.has('contactForm.about')"
                    class="is-danger alert"
                    >{{ errors.first("contactForm.about") }}</span
                    >
                </div>
                <div class="column" style="margin-bottom: 20px; width: 100%">
                    <label for="formContactMessage">Message</label>
                    <textarea
                    style="height:140px"
                    v-validate="'required'"
                    v-model="contactForm.message"
                    type="text"
                    id="formContactMessage"
                    name="message"
                    />
                    <span
                    v-show="errors.has('contactForm.message')"
                    class="is-danger alert"
                    >{{ errors.first("contactForm.message") }}</span
                    >
                </div>
                <button type="button" @click="sendContact">Envoyer</button>
            </div>
        </form>
        </div>
    </div>
    
  </div>
</template>

<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import VeeValidate from 'vee-validate';
import Vue from "vue";
Vue.use(VeeValidate);
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    firstName: {
        required: () => 'Veuillez renseigner votre prénom'
    },
    lastName: {
        required: () => 'Veuillez renseigner votre nom'
    },
    phone: {
        required: () => 'Veuillez renseigner votre téléphone',
        max: () => 'Votre numéro ne peut pas contenir plus de 10 caractères',
        numeric: () => 'Votre numéro ne peut contenir que des chiffres'
    },
    mail: {
      required: () => 'Veuillez renseigner votre adresse email',
      email: () => 'Merci d\'entrer une adresse email valide'
    },
    about: {
        required: () => 'Veuillez renseigner un sujet',
    },
    message: {
        required: () => 'Veuillez renseigner votre message',
    }
  }
};
Validator.localize('fr', dict);
  export default {
    components: {
      
    },
    data () {
        return {
            contactForm: {
                firstName: "",
                lastName: "",
                mail: "",
                phone: "",
                about: "",
                message: ""
            },
            markerIcon:require('~/assets/medias/logo-basic-background.jpg'), //{url: },
            mapLoaded: false,
            currentLocation: {},
            circleOptions: {},
            locations: [],
            pins: {
            // selected: "data:image/png;base64,iVBORw0KGgo...",
            // notSelected: "data:image/png;base64,iVBORw0KGgo..."
            },
            mapStyle: [],
            clusterStyle: [
            {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                width: 56,
                height: 56,
                textColor: "#fff"
            }
            ]
        }
    },
    mounted () {
        this.getDepots()
    },
    methods: {
        sendContact() {
            this.contactForm.addDate = new Date()
            this.contactForm.deleteDate = null
            // this.$validator.validateAll('contactForm').then((res) => {
            //     if(res) {
            //         db.collection("customers")
            //         .doc(process.env.ID_CUSTOMER)
            //         .collection("sites")
            //         .doc(process.env.ID_SITE)
            //         .collection("leads")
            //         .doc()
            //         .set(this.contactForm).then((res) => {
            //             this.contactForm = {
            //                 firstName: "",
            //                 lastName: "",
            //                 mail: "",
            //                 phone: "",
            //                 about: "",
            //                 message: ""
            //             }
            //             this.$validator.reset()
            //         })
            //         .catch((err) => {
            //             console.error(err)
            //         })
            //     }
            // })
        },
        getDepots() {
            // var _this = this;
            // db.collection("customers")
            // .doc(process.env.ID_CUSTOMER)
            // .collection("sites")
            // .doc(process.env.ID_SITE)
            // .collection("customizableVarProducts")
            // .where("label", "==", "Lieu de retrait")
            // .limit(1)
            // .onSnapshot((snap) => {
            //     snap.forEach((doc) => {
            //         if (doc.data().deleteDate == null) {
            //             _this.locations = doc.data().selectItems
            //             _this.mapLoaded = true
            //         }
            //     });
            // });
        },
    }
  }
</script>

<style>
.contact-address {
    padding-left: 0px;
    border-bottom: 1px solid #fff;
    padding-bottom: 5px;
}
.contact-adresse-icone {
    float: left;
    font-weight: 100;
}
</style>