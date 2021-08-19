<template>
    <div class="container identification"> 
        <!-- <h1>CONNEXION / INSCRIPTION</h1> -->
        <div class="row-bootstrap m-0">
            <div class="col-12 col-md-5 col-lg-4 half">
                <form class="formLogIn" data-vv-scope="formLogIn" v-if="!username" action="">
                    <h2>J'AI DÉJÀ UN COMPTE</h2>
                    <div class="input-style">
                        <label for="formLogInEmailLogin">Adresse e-mail</label>
                        <input
                            v-model="formLog.mail"
                            type="email"
                            id="formLogInEmailLogin"
                            name="emailLogin"
                            v-validate="'required|email'"
                        />
                        <span v-show="errors.has('formLogIn.emailLogin')" class="is-danger">{{ errors.first('formLogIn.emailLogin') }}</span>
                        <img class="inputImg" src="~/assets/medias/mail.svg" alt="mail">
                    </div>
                    <div class="input-style">
                        <label for="formLogInPasswordLogin">Mot de passe</label>
                        <input
                            @keyup.enter="logIn()"
                            v-model="formLog.password"
                            type="password"
                            id="formLogInPasswordLogin"
                            name="passwordLogin"
                            v-validate="'required'"
                        />
                        <span v-show="errors.has('formLogIn.passwordLogin')" class="is-danger">{{ errors.first('formLogIn.passwordLogin') }}</span>
                        <img class="inputImg" src="~/assets/medias/password.svg" alt="password">
                        <a class="forgot" href="#">Mot de passe oublié ?</a>
                    </div>
                    <div class="btn-login" style="width: 100%">
                        <button type="button" @click="logIn()">
                            <img src="~/assets/medias/logout.svg" alt="connexion">
                            <p>CONNEXION</p>
                        </button>
                    </div>
                    <div @click="$emit('loggedIn', 'guest')" class="btn-guest">
                        <button type="button" class="secondary">
                            <p>CONTINUER SANS COMPTE</p>
                            <img src="~/assets/medias/anonymous.svg" alt="Commande anonyme">
                        </button>
                    </div>
                </form>
            </div>
            <div class="col-12 col-md-7 col-lg-8 half">
                <form class="formSignUp" data-vv-scope="formSignUp" v-if="!username && !isSignedUp" >
                    <h2>JE N'AI PAS DE COMPTE</h2>
                    <p style="color: var(--color3); font-style: italic; margin-bottom: 20px">Inscrivez vous dès maintenant pour commander encore plus vite, suivre l'avancé de vos commandes et recevoir nos offres.</p>
                    <div class="row-bootstrap">
                        <div class="col-12 col-lg-6">
                            <div style="margin-bottom: 20px; width: 100%">
                            <label for="formSignUpLastName">Nom</label>
                            <input v-validate="'required'" v-model="formSignUp.lastName" type="text" id="formSignUpLastName" name="lastName" />
                            <span v-show="errors.has('formSignUp.lastName')" class="is-danger">{{ errors.first('formSignUp.lastName') }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div style="margin-bottom: 20px; width: 100%">
                            <label for="formSignUpPrenom">Prénom</label>
                            <input v-validate="'required'" v-model="formSignUp.firstName" type="text" id="formSignUpPrenom" name="firstName" />
                            <span v-show="errors.has('formSignUp.firstName')" class="is-danger">{{ errors.first('formSignUp.firstName') }}</span>
                            </div>
                        </div>
                    </div>    
                    <div class="row-bootstrap">
                        <div class="col-12 col-lg-6">
                            <div style="margin-bottom: 20px; width: 100%">
                            <label for="formSignUpEmail">Adresse e-mail</label>
                            <input
                                v-validate="'required|email'"
                                v-model="formSignUp.mail"
                                type="email"
                                id="formSignUpEmail"
                                name="email"
                            />
                            <span v-show="errors.has('formSignUp.email')" class="is-danger">{{ errors.first('formSignUp.email') }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div style="margin-bottom: 20px; width: 100%">
                            <label for="formSignPhone">Numéro de Téléphone</label>
                            <input v-validate="'numeric|max:10'" v-model="formSignUp.phone" type="text" id="formSignPhone" name="phone" />
                            <span v-show="errors.has('formSignUp.phone')" class="is-danger">{{ errors.first('formSignUp.phone') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row-bootstrap">
                        <div class="col-12 col-lg-6">
                            <div style="margin-bottom: 20px; width: 100%">
                            <label for="formSignUpPassword">Mot de passe</label>
                            <input
                                v-validate="'required|min:6'"
                                v-model="formSignUp.password"
                                type="password"
                                ref="password"
                                id="formSignUpPassword"
                                name="password"
                            />
                            <span v-show="errors.has('formSignUp.password')" class="is-danger">{{ errors.first('formSignUp.password') }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div style="margin-bottom: 20px; width: 100%">
                            <label for="formSignUpConfirmedPassword">Confirmer le mot de passe</label>
                            <input
                                @keyup.enter="signUp()"
                                v-validate="'required|confirmed:password'"
                                v-model="confirmedPassword"
                                type="password"
                                id="formSignUpConfirmedPassword"
                                name="confirmedPassword"
                            />
                            <span v-show="errors.has('formSignUp.confirmedPassword')" class="is-danger">{{ errors.first('formSignUp.confirmedPassword') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row-cgv">
                        <input v-model="formSignUp.newsletter" type="checkbox"> 
                        <p>Je souhaite recevoir des offres promotionnelles</p>
                    </div>
                    <div class="flex footer-buttons">
                        <div @click="signUp()" class="btn-signup" style="margin-top: 20px;">
                            <button type="button" class="inscr">
                            <p>CREER UN COMPTE</p>
                            <img src="~/assets/medias/plus.svg" alt="connexion" style="height: 1rem">
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- <div v-if="username">
                <span class="alert">Vous êtes déjà connecté</span>
            </div> -->
        </div>
    </div>
</template>

<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
import bcrypt from 'bcryptjs';
import { Validator } from 'vee-validate';
import { mapMutations } from 'vuex'
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
    phone: {
      numeric: () => 'Merci d\'entrer un numéro de téléphone valide',
      max: () => 'Merci d\'entrer un numéro de téléphone valide'
    },
  }
};
Validator.localize('fr', dict);
export default {
    
    data () {
        return {
            formLog: {
                mail: "",
                password: "",
            },
            formSignUp: {
                firstName: "",
                lastName: "",
                // conditionsAccepted: false,
                newsletter: false,
                mail: "",
                password: "",
            },
            isSignedUp: false,
            confirmedPassword: "",
        }
    },
    mounted() {

    },
    methods: {
        ...mapMutations({
            setUser: 'auth/setUser',
            logout: 'auth/logout',
        }),
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
                    alert("Compte deja existant");
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
                console.log(this.$validator)
                console.error('Le formulaire contient une erreur')
                }
            })
        },
        logIn() {
            this.logout();
            this.$validator.validateAll('formLogIn').then((res)=> {
                if (res) {
                var _this = this;
                var ref = db
                    .collection("customers")
                    .doc(process.env.ID_CUSTOMER)
                    .collection("sites")
                    .doc(process.env.ID_SITE)
                    .collection("users")
                    .doc(this.formLog.mail);
                ref
                .get()
                .then((doc) => {
                    if (doc.exists && doc.data().deleteDate == null) {
                    this.checkPassword(this.formLog.password, doc.data().password).then((res) => {
                        if (res) {
                            this.setUser(doc.data())
                            this.$emit("loggedIn")
                        }
                        else {
                            alert("Mot de passe incorrecte");
                        }
                    })
                    } else {
                    alert("compte inexistant");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
                }
                else {
                    console.error('Le formulaire contient une erreur')
                }
            })
        },
    },
    computed: {
        username() {
            return this.$store.getters['auth/username']
        },
        userInfo() {
            return JSON.parse(JSON.stringify(this.$store.getters['auth/user']));
        },
    },
    watch: {
    }
}
</script>
