

<template> 
    <div id="popupNewsletter">
        <div class="popup-header">
            <h1>Inscrivez-nous à la newsletter</h1>
            <p>Recevez en avant première nos codes promotionnels, nos nouveautés et nos actualités.</p>
        </div>
        <div class="popup-content">
          <form data-vv-scope="formNewsletter" class="formNewsletter">
            <div class="row-bootstrap">
              <div class="col-12 col-md-6">
                <label for="formNewsletterFirstname">Prénom</label>
                <input
                  v-validate="'required'"
                  v-model="dataForm.firstname"
                  type="text"
                  id="formNewsletterFirstname"
                  name="firstName"
                />
                <span
                  v-show="errors.has('formNewsletter.firstName')"
                  class="is-danger"
                  >{{ errors.first("formNewsletter.firstName") }}</span
                >
              </div>
              <div class="col-12 col-md-6">
                <label for="formNewsletterLastname">Nom</label>
                <input
                  v-validate="'required'"
                  v-model="dataForm.lastname"
                  type="text"
                  id="formNewsletterLastname"
                  name="lastName"
                />
                <span
                  v-show="errors.has('formNewsletter.lastName')"
                  class="is-danger"
                  >{{ errors.first("formNewsletter.lastName") }}</span
                >
              </div>
            </div>
            <div class="row-bootstrap">
              <div class="col-12">
                <label for="formNewsletterEmail">Adresse email</label>
                <input
                  v-validate="'required|email'"
                  v-model="dataForm.email"
                  type="text"
                  id="formNewsletterEmail"
                  name="email"
                />
                <span
                  v-show="errors.has('formNewsletter.email')"
                  class="is-danger"
                  >{{ errors.first("formNewsletter.email") }}</span
                >
              </div>
            </div>
            <div class="row-bootstrap">
              <div class="col-12">
                <label for="formNewsletterCheck" class="flex align-items-center">
                  <input type="checkbox" id="formNewsletterCheck" v-model="dataForm.newsletter" /> Recevoir la newsletter
                </label>
              </div>
            </div>
            <div class="row bottom-buttons" style="justify-content:flex-end">
                <button type="button" class="validate" @click="addLead" :class="!enableValidate ? 'disabled' : ''">
                    <p>VALIDER</p>
                    <img src="~/assets/medias/right-arrow2.svg" alt="connexion" style="height: 1rem">
                </button>
            </div>
          </form>
        </div>

    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { db } from "~/plugins/firebase/firebaseConfig.js";
import { mapActions } from "vuex";

import { Validator } from 'vee-validate';
const dict = {
  custom: {
    firstName: {
        required: () => 'Veuillez renseigner votre prénom'
    },
    lastName: {
        required: () => 'Veuillez renseigner votre nom'
    },
    email: {
      required: () => 'Veuillez renseigner votre adresse email',
      email: () => 'Merci d\'entrer une adresse email valide'
    }
  }
};
Validator.localize('fr', dict);
export default {
  data() {
    return {
      enableValidate:true,
      dataForm: {
        email: "",
        firstname: "",
        lastname: "",
        newsletter: true,
        phone: "",
        id: "",
        status: "Non traité",
        addDate: new Date(),
      },
    };
  },
  mounted() {
    this.dataForm.email = JSON.parse(JSON.stringify(this.getProps)).email;
  },
  methods: {
    ...mapActions({
      close: "popup/hide",
    }),
    addLead() {
    },
  },
  computed: {
    ...mapGetters({
      getProps: "popup/getProps",
    }),
  },
};
</script>
        
<style>
#popupNewsletter{
    border-radius: 14px;
    border-bottom-left-radius: 39px;
}
#popupNewsletter .popup-header, #popupNewsletter .popup-content{
    padding: 1.5rem;
}
#popupNewsletter .popup-header{
    background:var(--color6);
    border-bottom-right-radius: 39px;
}
#popupNewsletter .popup-content{
    background:var(--color2);
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 39px;
}
#popupNewsletter h1{
    color: var(--color2);
    font-size: 1.6rem;
    text-align: left;
    margin-bottom: 1rem;
}
#popupNewsletter p{
    color: var(--color4);
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
}
#popupNewsletter h2{
    color: var(--color6);
    font-size: 1.2rem;
    font-weight: 300 !important;
    text-align: left;
    margin-bottom: 1rem;
}
#popupNewsletter h2 span{
    font-weight: 500 !important;
}
#popupNewsletter .row-bootstrap{
    margin: 0px -15px;
    display: flex;
}
#popupNewsletter .row-bootstrap > [class*="col-"] {
    margin-bottom:1rem
}
#popupNewsletter input {
    width: 100%;
    background-color: var(--color4);
    border: var(--color4) 1px solid;
    margin: 5px 0;
    padding: 10px;
    width: 100%;
    outline: none;
}
#popupNewsletter input:focus {
    background-color: var(--color2);
    border: var(--color6) 1px solid;
}
#popupNewsletter input[type='checkbox']{
    width: 30px;
}
#popupNewsletter .v-select{
    margin-bottom: 2rem;
    display: block;
}
#popupNewsletter .vs--disabled .vs__clear, 
#popupNewsletter .vs--disabled .vs__dropdown-toggle, 
#popupNewsletter .vs--disabled .vs__open-indicator, 
#popupNewsletter .vs--disabled .vs__search, 
#popupNewsletter .vs--disabled .vs__selected {
    cursor: not-allowed;
    background-color: var(--color4) !important;
}
#popupNewsletter .vs__dropdown-toggle,
#popupNewsletter .vs--searchable .vs__dropdown-toggle,
#popupNewsletter .v-select .vs__dropdown-toggle {
    background-color: var(--color4) !important;
    line-height: 2.6rem !important;
    height: 35px !important;
}
#popupNewsletter .vs__selected-options,
#popupNewsletter .vs--single .vs__selected,
#popupNewsletter .v-select .vs__search, 
#popupNewsletter .v-select .vs__search:focus{
    margin:0px;
    line-height: 35px;
    height: 35px;
    padding: 0 7px;
}
#popupNewsletter button.validate {
    background-color: var(--color2);
    border:  var(--color6) 2px solid;
    color: var(--color6);
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
#popupNewsletter button.validate p{
    color: var(--color6);
}
#popupNewsletter button.validate img{
    width: 60px;
    filter: invert(60%) sepia(56%) saturate(6487%) hue-rotate(53deg) brightness(100%) contrast(101%);
}
#popupNewsletter button.validate:hover {
    background-color: var(--color6);
    color: var(--color2);
}
#popupNewsletter button.validate:hover p{
    color: var(--color2);
}
#popupNewsletter button.validate:hover > img{
    filter: invert(93%) sepia(94%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);
}


#popupNewsletter button.disabled,
#popupNewsletter button.disabled:hover{
    border:  var(--color3) 2px solid;
    color: var(--color3);
    cursor:default
}
#popupNewsletter button.disabled:hover {
    background-color: var(--color2);
    color: var(--color2);
}
#popupNewsletter button.disabled p,
#popupNewsletter button.disabled:hover p{
    color: var(--color3);
}
#popupNewsletter button.disabled img,
#popupNewsletter button.disabled:hover > img{
    filter: invert(71%) sepia(4%) saturate(22%) hue-rotate(344deg) brightness(85%) contrast(92%);
}

#popupNewsletter span.is-danger{
    font-size: 0.8rem;
    color: var(--color1)
}
</style>