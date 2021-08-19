<template>
  <header>
    <div id="header">
      <div class="container">
        <div class="top-header">
          <div class="green-bar"></div>
          <div class="top-header-content">
            <div class="col-start">
              <h3>Entreprise <span>familiale</span> depuis <span>1955</span></h3>
            </div>
            <div class="col-end">
              <div class="tel">
                <img class="phone" src="~/assets/medias/phone.svg" alt="phone">
                <p >06 19 02 80 80</p>
              </div>
            </div>
          </div>
        </div>
        <!-- //FOR MOBILE JS EMPTY -->
        <div style="display:none" class="top-header-mobile">
          <div>
              <input type="checkbox" name="menuBurger" v-model="sidebarMenu" />
              <span></span> 
              <span></span>
              <span></span>
              <div class="toggle-content">
                <p>Catégories</p>
                <p v-for="(item, i) in menu" :key="i" @click="sidebarMenu=false"><NuxtLink :to="item.link.split('-')[0] == 'categorie' ? '/categories/'+slug_to_url(item.link): item.link" >{{ item.name.toUpperCase() }}</NuxtLink></p>
              </div>
          </div>
        </div>
        <div class="top-menu" id="scroll">
          <div>
          </div>
          <div>
            <div class="div-logo">
              <NuxtLink :to="'/'"  title="Retour à la page d'accueil" style="display: flex; align-items: center;">
                <img
                  class="logo-basic"
                  src="~/assets/medias/logo-basic.png"
                  alt="logo basique"
                />
              </NuxtLink>
            </div>
          </div>
          <div>
            <div v-if="!$nuxt.$route.path.includes('checkout')" class="header-items flex justify-end align-items-center align-center">
              <div @click="openPanel('sidebar-cart')" id="panier-btn" class="column" >
                <img class="svg-color1" style="cursor: pointer" src="~/assets/medias/cart.svg" alt="panier" />
                <p>MON PANIER</p>
              </div>
              <div @click="openPanel('compte')" id="compte-btn" class="column" >
                <img class="svg-color7" style="cursor: pointer" src="~/assets/medias/compte.svg" alt="compte" />
                <p>COMPTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- LOGO -->
    <div id="menu-header" style="z-index: 99999">
      <div class="container">
        <div class="logo-nav">
          <NuxtLink :to="'/'" title="Retour à la page d'accueil">
            <img
              class="logo-basic svg-color0"
              src="~/assets/medias/icone-gpc.svg"
              alt="logo basique"
            />
          </NuxtLink>
        </div>
        <ul>
          <div style="display: contents">
            <li>
              <NuxtLink :to="'/categories/pare-douche'">PARE DOUCHE</NuxtLink>
            </li>
            <li class="separation"></li>
            <li>
              <NuxtLink :to="'/categories/cloisons-parois'">CLOISONS OU PAROIS</NuxtLink>
            </li>
            <li class="separation"></li>
            <li>
              <NuxtLink :to="'/categories/inserts-de-cheminee'"
                >INSERTS DE CHEMINÉE</NuxtLink
              >
            </li>
            
          </div>
        </ul>
        <div v-if="!$nuxt.$route.path.includes('checkout')" class="stick-items">
          <div @click="openPanel('sidebar-cart')" class="cart">
            <img class="svg-color1" style="cursor: pointer" src="~/assets/medias/cart.svg" alt="panier" />
          </div>
          <div @click="openPanel('compte')" class="account">
            <img class="svg-color7" style="cursor: pointer" src="~/assets/medias/compte.svg" alt="compte" />
          </div>
        </div>
      </div>
    </div>
    <ul class="bandeau">
      <li class="row">
        <img src="~/assets/medias/quality.svg" alt="spécialistes" />
        <p>
          <span>Leader</span><br />
          dans la fabrication et la distribution en magasins de produits en
          verre techniques et décoratifs.
        </p>
      </li>
    </ul>

    <div :style="'top:'+scrollY+'px'" id="sidebar-cart">
        <div @click="closePanel('sidebar-cart')" id="sidebar-outside"></div>
        <div class='sidebar-content'>
          <div class='sidebar-header'>
            <div>
              <img @click="closePanel('sidebar-cart')" src="~/assets/medias/left-arrow.svg" alt="panier">
              <div>MON PANIER</div>
            </div>
            <div>{{ttcTotalProductPrice}}€ TTC</div>
          </div>
          <div class="sidebar-details">
            <h2>Mode de commande</h2>
            <div class="mode-commande">
              <div class="flex">
                  <input type="radio" id="depot" name="mode-commande" v-model="deliveryMode" value="depot" checked>
                  <label for="depot">Retrait en dépôt</label>
              </div>
              <select
                v-if="deliveryMode == 'depot'"
                v-model="deliveryAgency"
                name="lieu"
                id="lieu"
              >
                <option v-for="(element, index) in depots" :key="index">{{ element }}</option
                >
              </select>
            </div>
            <!-- PODUCTS -->
            <h2>Vos produits</h2>
            <div class="checkout-alert" v-if="selectedItems.length == 0" >
              <p>Votre panier est actuellement vide.</p>
            </div>
            <div class="checkout-alert" v-if="$store.getters['optionLivraison/optionLivraison'].mode == 'livraison' && totalPrice() < parseFloat($store.getters['optionLivraison/optionLivraison'].zone.minAmount)" >
              <p>Votre panier doit atteindre le montant minimum de <b>{{$store.getters['optionLivraison/optionLivraison'].zone.minAmount+'€'}}</b> pour être livré dans cette zone.</p>
            </div>
            <div class="list-items">
              <ul>
                <li class="row" :key="index" v-for="(item, index) in selectedItems">
                  <div class="picture">
                    <img v-if="item.fields.Image.length>0" :src="item.fields.Image[0].url" alt="">
                  </div>
                  <div class="column">
                      <p class="name">{{item.fields.Nom}}</p>
                      <div class="flex">
                        <p>Quantité :</p>
                        <div class="quantity">
                          <p class="button" style="cursor: pointer;" @click="removeFromCart(item)">-</p>
                          <p class="quantityNum">{{item.itemQuantity}}</p>
                          <p class="button" style="cursor: pointer;" @click="addToCart(item)">+</p>
                        </div>
                      </div>
                      <div class="flex row-sum">
                          <p>Prix : &nbsp;</p>
                          <p>{{(getItemPrice(item)*item.itemQuantity).toFixed(2).replace(".",",")}}€</p>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-if="selectedItems.length > 0" class="flex total">
                <p>TOTAL TTC</p>
                <p>{{ttcTotalProductPrice}}€</p>
            </div>
            
          </div>
          <div class="siderbar-footer">
              <NuxtLink to="/checkout">
              <button :disabled="$store.getters['optionLivraison/optionLivraison'].mode == 'livraison' && totalPrice() < parseFloat($store.getters['optionLivraison/optionLivraison'].zone.minAmount)" :class="selectedItems.length == 0 ? 'disabled':''" @click="closePanel('sidebar-cart')" class="flex checkout">
                  <p>Commander maintenant</p> <img src="~/assets/medias/right-arrow2.svg">
              </button>
              </NuxtLink>
              <button @click="closePanel('sidebar-cart')" class="flex continue">
                <img src="~/assets/medias/left-arrow2.svg">
                <p>Continuer mes achats</p>
              </button>
          </div>
        </div>
    </div>

    <div :style="'top:'+scrollY+'px'" id="compte">
      <div @click="closePanel('compte')" id="bg-compte"></div>

      <div style="overflow: scroll" class="content">
        <div class="top-panier row">
          <img
            style="cursor:pointer" 
            @click="closeAccount()"
            class="close-compte"
            src="~/assets/medias/left-arrow.svg"
            alt="panier"
          />
          <p>MON COMPTE</p>
          <img style="cursor:pointer" @click="logOut()" src="~/assets/medias/logout.svg" alt="logout" />
        </div>

        <div class="main-slide-panier">
          <form data-vv-scope="formLogIn" v-if="!username" class="column" action="">
            <h2 class="panier-titre">Connexion</h2>

            <div class="column" style="position: relative; margin: 20px 0">
              <label for="email">Adresse e-mail</label>
              <input
              :style="invalidAuth ? 'border:solid 1px red' : ''"
                v-model="formLog.mail"
                type="email"
                id="emailLogin"
                name="emailLogin"
                v-validate="'required|email'"
                style="width: 100%;"
              />
              <span v-show="errors.has('formLogIn.emailLogin')" class="is-danger">{{ errors.first('formLogIn.emailLogin') }}</span>
            </div>

              <div class="column" style="position: relative; margin-bottom: 20px">
                <label for="password">Mot de passe</label>
                <input
              :style="invalidAuth ? 'border:solid 1px red' : ''"

                  @keyup.enter="logIn()"
                  v-model="formLog.password"
                  type="password"
                  id="passwordLogin"
                  name="passwordLogin"
                  v-validate="'required'"
                  style="width: 100%;"
                />
                <span v-show="errors.has('formLogIn.passwordLogin')" class="is-danger">{{ errors.first('formLogIn.passwordLogin') }}</span>
              </div>
                <span v-show="invalidAuth" style="color:red"  class="danger alert">Vos informations de connexion sont incorrectes.</span>    
            
            <div class="btn-panier column">
              <button type="button" @click="logIn()">
                Je me connecte
              </button>
            </div>
          </form>

          <form data-vv-scope="formSignUp" v-if="!username && !isSignedUp" class="column">
            <div @click="onRegister()" class="row panier-titre affInscr">
              <h2>S'inscrire</h2>
              <img
                src="~/assets/medias/dropdown.svg"
                alt="dropdown"
              />
            </div>

            <div id="inscription" class="closedInscr" >
              <div class="column">
                <div class="column" style="position: relative; margin-bottom: 20px">
                  <label for="lastName">Nom</label>
                  <input v-validate="'required'" v-model="formSignUp.lastName" type="text" id="lastName" name="lastName" style="width: 100%;" />
                  <span v-show="errors.has('formSignUp.lastName')" class="is-danger">{{ errors.first('formSignUp.lastName') }}</span>
                </div>
                <div class="column" style="position: relative; margin-bottom: 20px">
                  <label for="firstName">Prénom</label>
                  <input v-validate="'required'" v-model="formSignUp.firstName" type="text" id="firstName" name="firstName" style="width: 100%;" />
                  <span v-show="errors.has('formSignUp.firstName')" class="is-danger">{{ errors.first('formSignUp.firstName') }}</span>
                </div>
              </div>

              <div class="column">
                <div class="column" style="position: relative; margin-bottom: 20px">
                  <label for="email">Adresse e-mail</label>
                  <input
                    v-validate="'required|email'"
                    v-model="formSignUp.mail"
                    type="email"
                    id="email"
                    name="email"
                    style="width: 100%;"
                  />
                  <span v-show="errors.has('formSignUp.email')" class="is-danger">{{ errors.first('formSignUp.email') }}</span>
                </div>
              </div>

              <div class="column">
                <div class="column" style="position: relative; margin-bottom: 20px">
                  <label for="password">Mot de passe</label>
                  <input
                    v-validate="'required|min:6'"
                    v-model="formSignUp.password"
                    type="password"
                    ref="password"
                    id="password"
                    name="password"
                    style="width: 100%;"
                  />
                  <span v-show="errors.has('formSignUp.password')" class="is-danger">{{ errors.first('formSignUp.password') }}</span>
                </div>
              </div>
              <div class="column">
                <div class="column" style="position: relative; margin-bottom: 20px">
                  <label for="confirmedPassword">Confirmer le mot de passe</label>
                  <input
                    @keyup.enter="signUp()"
                    v-validate="'required|confirmed:password'"
                    v-model="confirmedPassword"
                    type="password"
                    id="confirmedPassword"
                    name="confirmedPassword"
                    style="width: 100%;"
                  />
                  <span v-show="errors.has('formSignUp.confirmedPassword')" class="is-danger">{{ errors.first('formSignUp.confirmedPassword') }}</span>
                </div>
              </div>

              <div class="column">
                <div class="checkboxes" style="color: var(--color3);">
                    <input v-model="formSignUp.newsletter" type="checkbox"> 
                    <p>Je souhaite recevoir des offres promotionnelles</p>
                </div>
              </div>
              <div @click="signUp()" class="btn-panier column">
                <button type="button">
                  Je valide mon inscription
                </button>
              </div>
            </div>
          </form>
          <div v-if="username">
            <h2 class="panier-titre">Bonjour {{username}} !</h2>
            <div class="btn-panier column">
              <button type="button" @click="logOut()" style="margin-top: 30px">
                Me déconnecter
              </button>
            </div>
            <form  class="column" data-vv-scope="formEdit">
            <div @click="onRegister()" class="row panier-titre affInscr">
              <h2>Modifier mes informations</h2>
              <img
                src="~/assets/medias/dropdown.svg"
                alt="dropdown"
              />
            </div>
            <div id="inscription" class="closedInscr">
              <div class="column" style="position: relative; margin-bottom: 20px">
                <label for="lastName">Nom</label>
                <input v-validate="'required'" v-model="formEdit.lastName" type="text" id="name" name="lastName" value="UserName" style="width: 100%;" />
                <span v-show="errors.has('formEdit.lastName')" class="is-danger">{{ errors.first('formEdit.lastName') }}</span>
              </div>
              <div class="column" style="position: relative; margin-bottom: 20px">
                <label for="firstName">Prénom</label>
                <input v-validate="'required'" v-model="formEdit.firstName" type="text" id="name" name="firstName" value="UserName" style="width: 100%;" />
                <span v-show="errors.has('formEdit.firstName')" class="is-danger">{{ errors.first('formEdit.firstName') }}</span>
              </div>
              <div class="column" style="position: relative; margin-bottom: 20px">
                <label for="email">Adresse e-mail</label>
                <input
                  v-model="formEdit.mail"
                  type="email"
                  id="email"
                  name="email"
                  v-validate="'required|email'"
                  style="width: 100%;"
                />
                <span v-show="errors.has('formEdit.email')" class="is-danger">{{ errors.first('formEdit.email') }}</span>
              </div>

              <div class="column" style="position: relative; margin-bottom: 20px">
                <label for="password">Mot de passe actuel</label>
                <input
                  v-model="formEdit.password"
                  type="password"
                  v-validate="'required'"
                  name="passwordEdit"
                  style="width: 100%;"
                />
                <span v-show="errors.has('formEdit.passwordEdit')" class="is-danger">{{ errors.first('formEdit.passwordEdit') }}</span>
              </div>
              <div class="column" style="position: relative; margin-bottom: 20px">
                <label for="password">Nouveau mot de passe</label>
                <input
                  v-model="formEdit.newPassword"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  v-validate="'min:6'"
                  ref="newPassword"
                  style="width: 100%;"
                />
                <span v-show="errors.has('formEdit.newPassword')" class="is-danger">{{ errors.first('formEdit.newPassword') }}</span>
              </div>
              <div class="column" style="position: relative; margin-bottom: 10px">
                <label for="password">Confirmer le nouveau mot de passe</label>
                <input
                  v-model="confirmedNewPassword"
                  type="password"
                  name="confirmedNewPassword"
                  id="confirmedNewPassword"
                  v-validate="'confirmed:newPassword'"
                  style="width: 100%;"
                />
                <span v-show="errors.has('formEdit.confirmedNewPassword')" class="is-danger">{{ errors.first('formEdit.confirmedNewPassword') }}</span>
              </div>
              <div class="btn-panier column">
                <button type="button" @click="editAccount()">
                   Enregistrer les modifications
                </button>
              </div>
              <div  v-if="userInfo && Object.entries(userInfo).length > 0" style="display:flex; justify-content:center; margin-top:10px;">
                <span @click="removeAccount()" style="cursor:pointer;color: #F1F1F1; text-decoration:underline;">Supprimer mon compte.</span>  
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
</header>
</template>

<script>
// FIREBASE
import { db } from "~/plugins/firebase/firebaseConfig.js";
import { mapMutations } from 'vuex'
import $ from "jquery";
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
import bcrypt from 'bcryptjs';
import { Validator } from 'vee-validate';
import { mapGetters } from 'vuex'
const dict = {
  custom: {
    conditionsAccepted: {
        required: () => 'Merci d\'accepter les Conditions Générales de Ventes sur internet (CGV)'
    },
    email: {
      required: () => 'Merci d\'entrer un email',
      email: () => 'Merci d\'entrer une adresse email valide'
    },
    firstName: {
      required: () => 'Merci de renseigner un prénom'
    },
    lastName: {
      required: () => 'Merci de renseigner un nom'
    },
    password: {
      required: () => 'Merci de renseigner un mot de passe',
      min: () => 'Le mot de passe doit contenir au moins 6 caractères'
    },
    confirmedPassword: {
      required: () => 'Merci de renseigner un mot de passe',
      confirmed: () => "Les deux mots de passes ne sont pas identiques"
    },
    passwordEdit: {
      required: () => 'Merci de renseigner votre mot de passe'
    },
    newPassword: {
      min: () => 'Le mot de passe doit contenir au moins 6 caractères'
    },
    confirmedNewPassword: {
      confirmed: () => "Les deux mots de passes ne sont pas identiques"
    },
    emailLogin: {
      required: () => 'Merci d\'entrer un email',
      email: () => 'Merci d\'entrer une adresse email valide'
    },
    passwordLogin: {
      required: () => 'Merci d\'entrer votre mot de passe',
    },
  }
};
Validator.localize('fr', dict);
export default {
  data() {
    return {
      sidebarMenu:false,
      invalidAuth: false,
      itemsDeleted: false,
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
      deliveryToDomicile:false, 
      // intersectionOptions: {
      //   root: null,
      //   rootMargin: '0px 0px 0px 0px',
      //   threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      // },
      waypoint: null,
      menu: [],
      topHeaderMenu: [],
      isSignedUp: false,
      formSignUp: {
        // conditionsAccepted: false,
        newsletter: false,
        firstName: "",
        lastName: "",
        mail: "",
        password: "",
        // zipcode: ""
      },
      deliveryAgency: "Entrepot de Mitry-Mory",
      confirmedPassword: "",
      confirmedNewPassword: "",
      formLog: {
        mail: "",
        password: "",
      },
      formEdit: {
        mail:"",
        password:"",
        newPassword: "",
        firstName:"",
        lastName:"",
        // zipcode: ""
      },
      deliveryMode: "depot",
      scrollY: 0
    };
  },
  
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    $("#menu-header").removeClass("sticky");
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    $("#menu-header").removeClass("sticky");
  },
  mounted() {
    this.getMenu();
    this.getTopHeaderMenu();
    if (this.username) {
      this.formEdit.firstName = this.$store.getters['auth/user'].firstName
      this.formEdit.lastName = this.$store.getters['auth/user'].lastName
      this.formEdit.mail = this.$store.getters['auth/user'].mail 
    }
    this.handleResize();

    $("#inscription").removeClass("closedInscr");
    $("#inscription").addClass("openedInscr");
    $(".panier-titre img").css("transform", "rotate(-180deg");

    
  },
  computed: {
    loaded() {
      return this.$store.state.localStorage.status && this.$store.state.sessionStorage.status
    },
    ...mapGetters ({
      getOptionLivraison: 'optionLivraison/optionLivraison',
      getItemPrice: 'localStorage/itemPrice',
      totalPrice: "localStorage/price",
      discountCode: "localStorage/discountCode"
    }),
    userInfo() {
      return JSON.parse(JSON.stringify(this.$store.getters['auth/user']));
    },
    selectedItems() {
      return this.$store.getters['localStorage/items']
    },
    totalPrice() {
      return this.$store.getters['localStorage/price']
    },
    username() {
      return this.$store.getters['auth/username']
    },
    ttcTotalProductPrice() {
      return (parseFloat(this.totalPrice)).toFixed(
        2
      ).replace(".",",");
    },
  },
  watch: {
    deliveryMode: function(newVal) {
      this.setDeliveryMode(newVal, this.deliveryAgency)
      var data = JSON.parse(JSON.stringify(this.selectedItems))
      this.emptyList();
      this.setItems(data);
    },
    deliveryAgency: function(newVal) {
      this.setDeliveryMode(this.deliveryMode, newVal)
    },
    userInfo(newVal) {
      if (newVal) {
        this.formEdit.firstName = newVal.firstName
        this.formEdit.lastName = newVal.lastName
        this.formEdit.mail = newVal.mail
        setTimeout(() => {
          $("#inscription").removeClass("closedInscr");
          $("#inscription").addClass("openedInscr");
          $(".panier-titre img").css("transform", "rotate(-180deg");
        }, 500);
      }
    },
    
  },
  methods: {
    removeAccount(){
     var validation = prompt(' Tapez "supprimer" pour effacer votre compte de notre base de données. Cette action ets irréversible.');
     var dataUpdate = {
       deleteDate : new Date()
     }
     if(validation == 'supprimer'){
         db
                  .collection("customers")
                  .doc(process.env.ID_CUSTOMER)
                  .collection("sites")
                  .doc(process.env.ID_SITE)
                  .collection("users")
                  .doc(this.userInfo.mail)
                  .update(dataUpdate)
        
     }else{
       alert('Action annulée.')
     }
     this.logOut()
    },
   slug_to_url(link){
      return this.string_to_slug(link).split('-').splice(1, this.string_to_slug(link).split('-').length).join('-')
    },
     string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
},
    setDeliveryMode(deliveryMode, deliveryAgency) {
      if (deliveryMode == "depot") {
        this.setOptionLivraison({...this.getOptionLivraison,depot: deliveryAgency ,mode: 'retrait'})
      }
      if (deliveryMode == "domicile") {  
        this.setOptionLivraison({...this.getOptionLivraison, mode: 'livraison'})  
        var itemDeleted = false  
        for (let i = 0; i < this.selectedItems.length; i++) {
          const item = this.selectedItems[i];
        }
      }
    },
    ...mapGetters ({
        popupVisible: 'popup/isVisible',
        popupMode: 'popup/getMode',
    }),
    editAccount() {
      this.$validator.validateAll('formEdit').then((res)=> {
        if (res) {
          var data = JSON.parse(JSON.stringify(this.formEdit))
          // else {
              this.checkPassword(data.password, this.userInfo.password).then((res) => {
                if (res) {                  
                  var dataUpdate = {
                    firstName:data.firstName,
                    lastName:data.lastName,
                    mail:data.mail,
                    password: this.encryptPassword(data.password)
                  }
                  if (data.newPassword.length >= 6) {
                    dataUpdate.password = this.encryptPassword(data.newPassword)
                  }
                  db
                  .collection("customers")
                  .doc(process.env.ID_CUSTOMER)
                  .collection("sites")
                  .doc(process.env.ID_SITE)
                  .collection("users")
                  .doc(dataUpdate.mail)
                  .set(dataUpdate)
                  .then(() => {
                    if (dataUpdate.mail != this.userInfo.mail) {
                      //suppression de l'ancien compte
                       db
                      .collection("customers")
                      .doc(process.env.ID_CUSTOMER)
                      .collection("sites")
                      .doc(process.env.ID_SITE)
                      .collection("users")
                      .doc(this.userInfo.mail)
                      .delete().then(() => {
                        this.logout()
                      })
                    }
                    else {
                      this.setUser(dataUpdate)
                    }
                    this.onRegister()
                    console.log("Document successfully written!");
                  })
                  .catch((error) => {
                    console.error("Error writing document: ", error);
                  });

                }
                else {
                  this.invalidAuth= true;
                }
              })
          // }
        }
        else {
          console.error('Le formulaire contient une erreur')
        }
      })



    },
    handleResize() {
      if ($(window).width() > 768) {
        $(".top-header-mobile").hide();
      }
      else {
        $(".top-header-mobile").show();
      }
    },
    onWaypoint ({ going, direction }) {
      if (going === 'out' && direction == "top") {
        $('#scroll').addClass("floatable");
        $('.bandeau').css('margin-top', '150px');
      }
      else if(going === 'in' && direction == "bottom") {
        $('#scroll').removeClass("floatable");
        $('.bandeau').css('margin-top', '0px');
      }
    },
    encryptPassword(password) {
      const salt = bcrypt.genSaltSync(10)
      return bcrypt.hashSync(password, salt)
    },
    checkPassword(password, hashedPassword) {
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword).then((res) => {
          resolve(res);
        });
      })
    },
    ...mapMutations({
        addToCart: 'localStorage/add',
        removeFromCart: 'localStorage/remove',
        deleteItemFromCart: 'localStorage/delete',
        emptyList: 'localStorage/emptyList',
        setItems: 'localStorage/setItems',
        setUser: 'auth/setUser',
        logout: 'auth/logout',
        setOptionLivraison: 'optionLivraison/setOptionLivraison'
    }),
    handleScroll () {
      this.scrollY = window.scrollY;

      if (this.scrollY >= $("#header").outerHeight()) {
        $("#menu-header").addClass("sticky");
      } else {
        $("#menu-header").removeClass("sticky");
      }
      if (this.scrollY >= $("#header").outerHeight()+$("#menu-header").outerHeight()) {
        $("#menu-header").addClass("sticky-fixed");
      } else {
        $("#menu-header").removeClass("sticky-fixed");
      }

    },
    openPanel(id) {
      //   this.authPanel = true;
      $("body").addClass("stopScroll");
      $("#"+id).css("animation", "slideIn 1s forwards");
      $("#"+id).css("display", "block");
      $("#"+id+ ".sidebar-content").css("right", "0");
    },
    closeAccount() {
      $("body").removeClass("stopScroll");
      $("#compte").css("animation", "slideOut 1s forwards");
      setTimeout(() => {
        $("#compte").css("display", "none");
      }, 1000);
    },
    closePanel(id) {
      $("body").removeClass("stopScroll");
      $("#"+id).css("animation", "slideOut 1s forwards");
      setTimeout(() => {
        $("#"+id).css("display", "none");
      }, 1000);
    },
    getTopHeaderMenu() {
      var ref = db
        .collection("customers")
        .doc(process.env.ID_CUSTOMER)
        .collection("sites")
        .doc(process.env.ID_SITE)
        .collection("Top-Header_Menu")
        .doc("OTZR0RPc0fRVGieYlQqe");
      var _this = this;
      ref
        .get()
        .then((doc) => {
          if (doc.exists) {
            var data = doc.data();
            // console.log(data)

            data.itemsMenu.children.forEach((element) => {
              _this.topHeaderMenu.push(element);
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
    getMenu() {
      // db.collection(localStorage.getItem('idCustomer'))
      // console.log(localStorage.getItem('idCustomer'))
      var ref = db
        .collection("customers")
        .doc(process.env.ID_CUSTOMER)
        .collection("sites")
        .doc(process.env.ID_SITE)
        .collection("En-tête_Menu")
        .doc("EymPuk4ST0ik0Y52HIXf");
      var _this = this;
      ref
        .get()
        .then((doc) => {
          if (doc.exists) {
            var data = doc.data();
            // console.log(data)

            data.itemsMenu.children.forEach((element) => {
              _this.menu.push(element);
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
    signUp() {
      this.$validator.validateAll('formSignUp').then((res) => {
        if (res) {
            var ref = db
            .collection("customers")
            .doc(process.env.ID_CUSTOMER)
            .collection("sites")
            .doc(process.env.ID_SITE)
            .collection("users")
            .doc(this.formSignUp.mail);
          ref.get().then((doc) => {
            if (doc.exists) {
             
            } else {
              var data = JSON.parse(JSON.stringify(this.formSignUp));
              data.password = this.encryptPassword(this.formSignUp.password);
                db
                .collection("customers")
                .doc(process.env.ID_CUSTOMER)
                .collection("sites")
                .doc(process.env.ID_SITE)
                .collection("users")
                .doc(this.formSignUp.mail)
                .set(data)
                .then(() => {
                  console.log("Document successfully written!");
                  this.isSignedUp = true;
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                });
            }
          });
        }
        else {
          console.error('Le formulaire contient une erreur')
        }
      })
      
    },
    logIn() {
      this.$validator.validateAll('formLogIn').then((res)=> {
        if (res) {
          this.setUser({lastName: "Baptiste", firstName: "Mabille", id: "123", deleteDate: null, mail: "baptistemabille@gmail.com", newsletter: false, password: "izneubzebf", type: "customer"})
        } else {
          console.error('Le formulaire contient une erreur')
        }
      })
    },
    logOut(){
        this.logout();
    },
    onRegister() {
      if ($("#inscription").hasClass("closedInscr") == true) {
        $("#inscription").removeClass("closedInscr");
        $("#inscription").addClass("openedInscr");
        $(".panier-titre img").css("transform", "rotate(-180deg");
      } else {
        $("#inscription").addClass("closedInscr");
        $("#inscription").removeClass("openedInscr");
        $(".panier-titre img").css("transform", "rotate(-360deg");
      }
    },
  },
  components: {},
};
</script>
<style scoped>
    .checkboxes{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .checkboxes:last-child{
        margin-bottom: 20px;
    }
    .checkboxes input{
        width: fit-content;
    }
    .checkboxes p{
        width: auto;
        margin-left: 20px;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
      position: relative;
      display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
      text-align: center;
      left: calc(100%/2);
      transform: translateX(-50%);
      display: none;
      position: absolute;
      background-color: var(--color1);
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
      color: #f1f1f1;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
      background-color: #f1f1f1;
      color: var(--color1);
    }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown
    .dropdown:hover .dropbtn {
      background-color: #3e8e41;
    } */
</style>
