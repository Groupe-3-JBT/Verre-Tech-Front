<template>
  <div id="checkout">
    <!-- <h1 v-if="$refs.formWizard">{{$refs.formWizard.tabs[$refs.formWizard.activeTabIndex].title}}</h1> -->
    <form-wizard ref="formWizard" :stepSize="'xs'" :title="''" :subtitle="''" @on-complete="onComplete" color="var(--color1)">
        <template slot="step" slot-scope="props">
          <wizard-step
            style="cursor: not-allowed;"
            class="wizard-active"
            :tab="props.tab"
            slot="step"
            :transition="props.transition"
            :key="props.tab.title"
            :index="props.index">
            <div class="wizard-icone" slot="active-step">
              <img :src="username && props.index != 0 ? stepImageList[props.index+1] : stepImageList[props.index]" />
            </div>
            <div class="wizard-icone-unactive" :style="props.index == 0 ? 'margin-right:8px;' : ''" >
              <img :src="username && props.index != 0 ? stepImageList[props.index+1] : stepImageList[props.index]" />
            </div>
          </wizard-step>
        </template>
        <tab-content title="Panier" icon="">
          <Summary @conditionsChange="setConditionsAccepted" :items="items" :cgvAccept="cgvAccept"></Summary>
        </tab-content>
        <tab-content v-if="!username" title="Identification" icon="" >
          <Login @loggedIn="logging"></Login> 
        </tab-content>   
        <tab-content :title="deliveryMode.mode == 'retrait' ? 'Retrait en dépot' : 'Livraison' " icon="">
          <PersonnalInfo @emitDeliveryAddress="setDeliveryAddress" @emitWarehouse="setWarehouse" @emitBillingAddress="setBillingAddress" @completed="$refs.formWizard.nextTab()"></PersonnalInfo>
        </tab-content>
        <template slot="footer" slot-scope="props">
          <div class="checkout-alert" :class="cgvAccept ? 'hide' : ''">
            Attention ! Vous devez accepter les conditions générales de ventes pour continuer votre commande
          </div>
          <button v-if="props.activeTabIndex==0" type="button" :disabled="!isDeliveryAvailable" @click="validCart(props)" class="valid-cart" :class="!isDeliveryAvailable ? 'disabled' :''" >
              Je valide mon panier
          </button>
          <!-- <button  v-else-if="props.isLastStep"  @click="insertOrder" type="button" class="valid-cart">
              Confirmer et payer
          </button> -->
          <div v-else>
            <div class="wizard-footer-left">
              <button v-if="props.activeTabIndex > 0 && !props.isLastStep" type="button" @click="props.prevTab()" class="prev-step" >
                  <img src="~/assets/medias/left-arrow2.svg" alt="Etape précédente">
                  Retour
              </button>
            </div>
            <div class="wizard-footer-right">
              <button v-if="!props.isLastStep && props.activeTabIndex != 1 && props.activeTabIndex != 2" type="button" :disabled="!order.isConditionsAccepted || !isDeliveryAvailable" @click="props.nextTab()" class="next-step" >
                  Continuer
                  <img src="~/assets/medias/right-arrow2.svg" alt="Etape précédente">
              </button>
            </div>
          </div>
        </template>
    </form-wizard>
        <!-- <Alert :visible="alertVisible" position="top-right" color="success" title="Succès" description="Votre paiement a été effectué avec succès" /> -->
  </div>
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Payment from "@/components/checkout/Payment.vue";
import Summary from "@/components/checkout/Summary.vue";
import PersonnalInfo from "@/components/checkout/PersonnalInfo.vue";
// import Alert from "@/components/checkout/Alert.vue";
import {FormWizard, TabContent, WizardButton, WizardStep} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { db } from "~/plugins/firebase/firebaseConfig.js";
export default {
  name: "CheckoutPage",
  components: {
    Payment,
    Summary,
    FormWizard,
    TabContent,
    WizardButton,
    PersonnalInfo,
    Login,
    WizardStep
  },
  data() {
    return {
      usersToDelete: [],
      items: [],
      stepImageList: [
        require('~/assets/medias/icone-cart-gpc.png'),
        require('~/assets/medias/icone-identification-gpc.png'),
        require('~/assets/medias/icone-delivery-gpc.png'),
        require('~/assets/medias/icone-payment-gpc.png')
      ],
      alertVisible: false,
      cgvAccept:true,
      isCard: false,
      guestId: null,
      order: {
        isConditionsAccepted: false,
        mode: null,
        billingAddress: null,
        deliveryAddress: null,
        warehouse: null,
        cart: [],
        discountCode: null,
        totalTTC: null,
        totalHT: null,
        totalTVA: null,
      }
    };
  },
  mounted() {
    this.items = this.getItems
  },
  computed: {
    isDeliveryAvailable() {
      if (this.getOptionLivraison.mode == 'livraison') {
        if (this.totalPrice() < parseFloat(this.getOptionLivraison.zone.minAmount)) {
          return false
        }
        else {
          return true
        }
      }
      else {
        return true
      }
    },
    discountCode() {
      return this.$store.getters['localStorage/discountCode']
    },
    deliveryMode() {
        return this.$store.getters['optionLivraison/optionLivraison']
    },
    ...mapGetters ({
        getItemPrice: "localStorage/itemPrice",
        getItems: 'localStorage/items',
        getOptionLivraison: 'optionLivraison/optionLivraison',
        totalPrice: "localStorage/price",
    }),
    username() {
      return this.$store.getters['auth/username']
    },
    user() {
      return this.$store.getters['auth/user']
    },
   
  },
  methods: {
    setWarehouse(warehouse) {
      this.order.warehouse = warehouse
    },
    getTotalPriceHt(){
      return parseFloat(this.getItems.reduce((sum, currentValue) => {
        return sum + parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity) - (parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity)*currentValue.taxRule.value/100);
      }, 0)).toFixed(2);
    },
    validCart(props){
      if(!this.order.isConditionsAccepted){
        this.cgvAccept = false
      }else{
        this.cgvAccept = true
        props.nextTab()
      }
    },
    //fonction permettant d'inserer la commande dans le user 
    insertOrder() {
      for (let i = 0; i < this.getItems.length; i++) {
        const item = this.getItems[i];
        this.order.cart.push({
          price: this.getItemPrice(item),
          imgList: item.imgList,
          itemQuantity: item.itemQuantity,
          title: item.title,
          subTitle: item.subTitle,
          taxRule: item.taxRule,
          type: item.type,
          id: item.id,
          name: item.name,
          customVarProduct: item.customVarProduct,
          conditionnement: item.conditionnement,
          route: item.route
        })
      }
      this.order.addDate = new Date()
      this.order.updateDate = null
      this.order.deleteDate = null
      this.order.mode = this.deliveryMode.mode
      this.order.discountCode = this.discountCode
      this.order.totalTTC = this.totalPrice()
      this.order.totalHT = this.getTotalPriceHt()
      this.order.totalTVA = this.totalPrice() - this.getTotalPriceHt()
      console.log('totalPrice', this.totalPrice())
      console.log('getTotalPriceHt', this.getTotalPriceHt())
      console.log('cart', this.order.cart)
      
      // ICI AJOUT DE LA COMMANDE EN BASE DE DONNEE
      // db.collection("customers")
      //   .doc(process.env.ID_CUSTOMER)
      //   .collection("sites")
      //   .doc(process.env.ID_SITE)
      //   .collection("users")
      //   .doc(this.user.type == 'guest' ? this.user.id : this.user.mail)
      //   .collection("orders")
      //   .add(this.order)
      //   .then((doc) => {
      //     console.log('la commande a bien été ajoutée')
      //     //suppression du panier localStorage
      //     //afficher merci pour votre commande etc
      //   })
      //   .catch((err) => {

      //   })
    },
    setDeliveryAddress(deliveryAddress) {
      this.order.deliveryAddress = deliveryAddress
    },
    setBillingAddress(billingAddress) {
      console.log('billingAddress', billingAddress)
      this.order.billingAddress = billingAddress
    },
    continueAsGuest() {
      this.setUser({firstName: null, lastName: null, type: "guest"})
    },
    logging(type = 'user'){
      if(type == 'guest') {
        this.continueAsGuest()
      }
      this.$refs.formWizard.nextTab()
    },
    ...mapMutations({
      guestConnection : 'auth/setGuest',
      setUser: 'auth/setUser',
    }),
    setConditionsAccepted(value) {
      this.order.isConditionsAccepted = value
      if(!value){
        this.cgvAccept = false
      }else{
        this.cgvAccept = true
      }
    },
    onComplete() {
      console.log('finished')
    },
    handleAlert() {
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 4000);
    },
    handleCard() {
      this.isCard = true;
    }
  }
};
</script>
