<template>
    <footer class="container">
        <div class="flex top-footer">
            <div class="half column">
                <div class="flex logos">
                    <NuxtLink :to="'/'" title="Retour à la page d'accueil" class="flex align-items-center">
                        <img src="~/assets/medias/logo-basic-w.png" alt="Logo Verr Tech" class="logo">
                    </NuxtLink>
                </div>
                <div class="flex site-map">
                    <ul>
                        <li class="list-title">PRODUITS</li>
                        <li>
                            <NuxtLink to="/">Pare douche</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Cloisons ou parois</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Insert de cheminée</NuxtLink>
                        </li>
                    </ul>
                    <ul>
                        <li class="list-title">MON COMPTE</li>
                        <li @click="openPanel('compte')" v-if="username"><a href="#">Mon compte</a></li>
                        <li v-if="username"><NuxtLink to="/commandes"><a href="#">Mes commandes</a></NuxtLink></li>
                        <li @click="logOut()" v-if="username"><a href="#">Se déconnecter</a></li>
                        <li @click="openPanel('compte')"  v-if="!username"><a href="#">Se connecter</a></li>
                        <li @click="openPanel('compte')"  v-if="!username"><a href="#">S'inscrire</a></li>
                    </ul>
                </div>
                <div class="column">
                    <p>Recevez nos promotions en avant première par email :</p>
                    <div class="flex newsletter">
                        <input v-model="emailNewsletter" type="email" placeholder="votre-email@domaine.fr">
                        <button @click="openPopupNewletter()"><img src="~/assets/medias/right-arrow2.svg" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bot-footer column">
            <div class="container credits">
                <p>VERRE TECH © 2021 Tous droits réservés - Réalisé par TBJ Web</p>
                <span>
                    <div v-for="(item, i) in menuFooterLegal" :key="i" style="display:contents">
                    <NuxtLink :to="'/'+item.route">{{ item.name }} </NuxtLink> |
                    </div>
                </span>
            </div>
        </div>

    </footer>
</template>
<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
// import { mapGetters } from "Vuex"
import { mapMutations, mapActions } from 'vuex'
import $ from "jquery";

export default {
    data(){
        return{
            emailNewsletter: "",
            menuProduct: [],
            menuFooterLegal: [],
            activePopNewletter:false
        }
    },
    mounted() {
        this.getMenuProduct();
        this.getMenuFooterLegal();
    },
    methods:{
         ...mapActions({
            open: 'popup/show',
            close: 'popup/hide',
            changeMode: 'popup/changeMode'
        }),
        openPopupNewletter(){
            this.changeMode({mode : "PopupsPopupNewsletter", props : {email : this.emailNewsletter}});
            this.open()
        },
        openPanel(id) {
            //   this.authPanel = true;
            $("body").addClass("stopScroll");
            $("#"+id).css("animation", "slideIn 1s forwards");
            $("#"+id).css("display", "block");
            $("#"+id+ ".content").css("right", "0");
        },
        ...mapMutations({
              logout: 'auth/logout',
        }),
        logOut(){
            this.logout();
        },
        getMenuProduct() {
            // db.collection(localStorage.getItem('idCustomer'))
            // console.log(localStorage.getItem('idCustomer'))
            var ref = db
                .collection("customers")
                .doc(process.env.ID_CUSTOMER)
                .collection("sites")
                .doc(process.env.ID_SITE)
                .collection("Footer-Account_Menu")
                .doc("F46p8lDceNmG8zPBC4Ga");
            var _this = this;
            ref
                .get()
                .then((doc) => {
                if (doc.exists) {
                    var data = doc.data();
                    data.itemsMenu.children.forEach((element) => {
                    element.link ? _this.menuProduct.push(element) : null;
                    });
                } else {
                    // doc.data() will be undefined in this case
                    // console.log("Oops ça marche pas !", process.env.ID_CUSTOMER, process.env.ID_SITE);
                }
                })
                .catch((error) => {
                console.log("Error getting document:", error);
                });
        },
        getMenuFooterLegal() {
            // db.collection(localStorage.getItem('idCustomer'))
            // console.log(localStorage.getItem('idCustomer'))
            var ref = db
                .collection("customers")
                .doc(process.env.ID_CUSTOMER)
                .collection("sites")
                .doc(process.env.ID_SITE)
                .collection("Footer-Legal_Menu")
                .doc("rj4opneS9wpHE1lUFTBe");
            var _this = this;
            ref
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        var data = doc.data();
                        // console.log(data)

                        data.itemsMenu.children.forEach((element) => {
                            _this.menuFooterLegal.push(element);
                        });
                    } else {
                        // doc.data() will be undefined in this case
                        // console.log("Oops ça marche pas !", process.env.ID_CUSTOMER, process.env.ID_SITE);
                    }
                })
                .catch((error) => {
                    console.log("Error getting document:", error);
                });
        },
    
    },
    computed: {
        username() {
            return this.$store.getters['auth/username']
        },    
    },
    components: {
        // PopupNewsletter
    }
}
</script>