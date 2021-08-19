<template>
  <div class="container delivery">
    <div class="row-bootstrap m-0">
      <div class="col-12 col-md-4 half">
        <h2>MON PANIER</h2>
        <div class="cart">
          <ul class="cart-items">
            <li :key="index" v-for="(item, index) in items">
              <div class="flex">
                <h3>
                  {{
                    item.name +
                    (item.itemQuantity > 1 ? " x" + item.itemQuantity : "")
                  }}
                </h3>
                <p class="price">
                  {{ (getItemPrice(item) * item.itemQuantity).toFixed(2).replace(".",",") }}€
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
              <p>TVA {{item[0].tva}} %</p>
              <p>{{ getTva(item, item[0].tva) }}€</p>
            </div>
            <div class="flex row-total">
              <p>Total TTC</p>
              <p>{{ ttcTotalProductPrice }}€</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 half">
        <div class="conteneur">
          <div id="myPaymentForm"></div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import { mapGetters, mapMutations } from "vuex";
import axios from 'axios'
/* import embedded-form-glue library */
import KRGlue from "@lyracom/embedded-form-glue";
// import ""
/* define the public key, you should use your personal key */
export default {
    data() {
      return {
        msg: "paiement",
        base64Auth: "",
      }
    },
    computed: {
      user() {
        return this.$store.getters["auth/user"];
      },
      totalPriceWithoutDiscountCode() {
        return this.totalPrice(false)
      },
      ...mapGetters({
        totalPrice: "localStorage/price",
        items: "localStorage/items",
        getItemPrice: "localStorage/itemPrice",
        getOptionLivraison: "optionLivraison/optionLivraison",
        discountCode: "localStorage/discountCode"
      }),
      calcTva() {
        var tvaCost = this.totalPrice() - (this.totalPrice() / 1.2);
        return tvaCost.toFixed(2);
      },
      ttcTotalProductPrice() {
        return (parseFloat(this.totalPrice())).toFixed(
          2
        ).replace(".",",");
      },
      listTva() {
        var resultList = this.items.reduce((result, currentValue) => {
            (result[currentValue.tva] = result[currentValue.tva] || []).push(currentValue);
            return result;
          }, {});
        return resultList
      }
    },
    mounted() {
      const endpoint = 'https://api.systempay.fr'
      const publicKey = '73239078:testpublickey_Zr3fXIKKx0mLY9YNBQEan42ano2QsdrLuyb2W54QWmUJQ'
      this.base64Auth = btoa('69876357:testpassword_DEMOPRIVATEKEY23G4475zXZQ2UA5x7M')
      const headers = {
        "Authorization": "Basic "+this.base64Auth,
        "Content-Type": "application/json"
      }
      const params = {
        "amount": parseFloat(parseFloat(this.totalPrice()).toFixed(2)*100).toFixed(0),//EN CENTIMES
        "currency": "EUR",
        "orderId":  "myOrderId-999999",
        "customer": {
            "email": 'testMail@test.fr'//this.user.mail
        }
      }
      axios.post('https://api.systempay.fr/api-payment/V4/Charge/CreatePayment',params, {headers})
      .then((res) => {
        KRGlue.loadLibrary(endpoint, publicKey)
        .then(({KR}) => KR.setFormConfig({
          formToken: res.data.answer.formToken,
          'kr-language': 'en-US',
        }))
        .then(({KR}) => KR.addForm('#myPaymentForm'))
        .then(({KR, result}) => KR.showForm(result.formId))
        .then(({ KR }) => {
            KR.onFormReady(() => {
                this.fixFrenchPaymentButton();
            });
            return KR.setFormConfig({ 'kr-language': 'fr-FR' });
        })
        .then(({KR}) => {
          KR.onSubmit((res) => {
            //retour du paiement
            //si le paiement est ok, on emit @paiement avec le status du paiement pour que la commande soit insérée dans firebase
            console.log('submitted', res)
            //exemple de retour :
            // {
            //     "shopId": "69876357",
            //     "orderCycle": "CLOSED",
            //     "orderStatus": "PAID",
            //     "serverDate": "2018-09-27T14:02:17+00:00",
            //     "orderDetails": {
            //         "orderTotalAmount": 990,
            //         "orderCurrency": "EUR",
            //         "mode": "TEST",
            //         "orderId": null,
            //         "_type": "V4/OrderDetails"
            //     },
            //     "customer": {
            //         "billingDetails": {
            //             "address": null,
            //             "category": null,
            //             "cellPhoneNumber": null,
            //             "city": null,
            //             "country": null,
            //             "district": null,
            //             "firstName": null,
            //             "identityCode": null,
            //             "language": "EN",
            //             "lastName": null,
            //             "phoneNumber": null,
            //             "state": null,
            //             "streetNumber": null,
            //             "title": null,
            //             "zipCode": null,
            //             "_type": "V4/Customer/BillingDetails"
            //         },
            //         "email": "sample@example.com",
            //         "reference": null,
            //         "shippingDetails": {
            //             "address": null,
            //             "address2": null,
            //             "category": null,
            //             "city": null,
            //             "country": null,
            //             "deliveryCompanyName": null,
            //             "district": null,
            //             "firstName": null,
            //             "identityCode": null,
            //             "lastName": null,
            //             "legalName": null,
            //             "phoneNumber": null,
            //             "shippingMethod": null,
            //             "shippingSpeed": null,
            //             "state": null,
            //             "streetNumber": null,
            //             "zipCode": null,
            //             "_type": "V4/Customer/ShippingDetails"
            //         },
            //         "extraDetails": {
            //             "browserAccept": null,
            //             "fingerPrintId": null,
            //             "ipAddress": "90.71.64.161",
            //             "browserUserAgent": "Mozilla/5.0",
            //             "_type": "V4/Customer/ExtraDetails"
            //         },
            //         "shoppingCart": {
            //             "insuranceAmount": null,
            //             "shippingAmount": null,
            //             "taxAmount": null,
            //             "cartItemInfo": null,
            //             "_type": "V4/Customer/ShoppingCart"
            //         },
            //         "_type": "V4/Customer/Customer"
            //     },
            //     "transactions": [{
            //         "shopId": "69876357",
            //         "uuid": "5b158f084502428499b2d34ad074df05",
            //         "amount": 990,
            //         "currency": "EUR",
            //         "paymentMethodType": "CARD",
            //         "paymentMethodToken": null,
            //         "status": "PAID",
            //         "detailedStatus": "AUTHORISED",
            //         "operationType": "DEBIT",
            //         "effectiveStrongAuthentication": "DISABLED",
            //         "creationDate": "2018-09-27T14:02:16+00:00",
            //         "errorCode": null,
            //         "errorMessage": null,
            //         "detailedErrorCode": null,
            //         "detailedErrorMessage": null,
            //         "metadata": null,
            //         "transactionDetails": {
            //             "liabilityShift": "NO",
            //             "effectiveAmount": 990,
            //             "effectiveCurrency": "EUR",
            //             "creationContext": "CHARGE",
            //             "cardDetails": {
            //                 "paymentSource": "EC",
            //                 "manualValidation": "NO",
            //                 "expectedCaptureDate": "2018-09-27T14:02:16+00:00",
            //                 "effectiveBrand": "CB",
            //                 "pan": "497010XXXXXX0055",
            //                 "expiryMonth": 11,
            //                 "expiryYear": 2021,
            //                 "country": "FR",
            //                 "emisorCode": null,
            //                 "effectiveProductCode": "F",
            //                 "legacyTransId": "927516",
            //                 "legacyTransDate": "2018-09-27T14:02:05+00:00",
            //                 "paymentMethodSource": "NEW",
            //                 "authorizationResponse": {
            //                     "amount": 990,
            //                     "currency": "EUR",
            //                     "authorizationDate": "2018-09-27T14:02:16+00:00",
            //                     "authorizationNumber": "3fe7a1",
            //                     "authorizationResult": "0",
            //                     "authorizationMode": "FULL",
            //                     "_type": "V4/PaymentMethod/Details/Cards/CardAuthorizationResponse"
            //                 },
            //                 "captureResponse": {
            //                     "refundAmount": null,
            //                     "captureDate": null,
            //                     "captureFileNumber": null,
            //                     "refundCurrency": null,
            //                     "_type": "V4/PaymentMethod/Details/Cards/CardCaptureResponse"
            //                 },
            //                 "threeDSResponse": {
            //                     "authenticationResultData": {
            //                         "transactionCondition": "COND_3D_ERROR",
            //                         "enrolled": "UNKNOWN",
            //                         "status": "UNKNOWN",
            //                         "eci": null,
            //                         "xid": null,
            //                         "cavvAlgorithm": null,
            //                         "cavv": null,
            //                         "signValid": null,
            //                         "brand": "VISA",
            //                         "_type": "V4/PaymentMethod/Details/Cards/CardAuthenticationResponse"
            //                     },
            //                     "_type": "V4/PaymentMethod/Details/Cards/ThreeDSResponse"
            //                 },
            //                 "installmentNumber": null,
            //                 "markAuthorizationResponse": {
            //                     "amount": null,
            //                     "currency": null,
            //                     "authorizationDate": null,
            //                     "authorizationNumber": null,
            //                     "authorizationResult": null,
            //                     "_type": "V4/PaymentMethod/Details/Cards/MarkAuthorizationResponse"
            //                 },
            //                 "_type": "V4/PaymentMethod/Details/CardDetails"
            //             },
            //             "parentTransactionUuid": null,
            //             "mid": "6969696",
            //             "sequenceNumber": 1,
            //             "_type": "V4/TransactionDetails"
            //         },
            //         "_type": "V4/PaymentTransaction"
            //     }],
            //     "_type": "V4/Payment"
            // }
          })
          KR.onError((err) => {
            //En cas d'erreur
            this.$emit("paiement")
            console.error(err)
          })
        })
        .catch((error) => {
            console.log(error);
        });
      })
      
    },
    methods: {
      fixFrenchPaymentButton() {
          const elem = document.getElementById('myPaymentForm')
          const elements = elem.querySelectorAll('.kr-payment-button');
          const paymentButton = elements[0].childNodes[0];
          paymentButton.textContent = 'Payer '+parseFloat(parseFloat(this.totalPrice()).toFixed(2))+' EUR';
      },
      getTotalPriceHt(){
        return parseFloat(this.items.reduce((sum, currentValue) => {
          return sum + parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity) - (parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity)*currentValue.tva/100);
        }, 0)).toFixed(2).replace(".",",");
      },
      getTva(items, taux){
        return parseFloat(items.reduce((sum, currentValue) => {
          return sum + parseFloat(this.getItemPrice(currentValue)*currentValue.itemQuantity)*taux/100;
        }, 0)).toFixed(2).replace(".",",");
      },
    }
}
</script>
<style scoped>
.conteneur {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height:100%;
    width:100%
  }
</style>
<style type="text/css">
#myPaymentForm{
    width:100% !important;
  }
  .kr-embedded{
    width:100% !important;
  }
  .kr-embedded .kr-payment-button {
    background-color: var(--color1) !important;
    width: 100%;
    border: var(--color1) 2px solid;
    color: var(--color2);
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    text-transform: uppercase;
    border-radius: 10px;
    align-items: center;
    font-family: var(--font1);
    outline: none;
    cursor: pointer;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    transition: all .3s ease-in-out;
    width:100% !important;
  } 
  .kr-embedded .kr-payment-button:hover {
    background-color: var(--color2) !important;
    color: var(--color1);
    transition: all .3s ease-in-out;
    border: var(--color1) 2px solid;
    width:100% !important;
  }
  .kr-form-error {
    width:100% !important;
  }
  /* .kr-embedded input {
    width: 100% !important;
    background-color: var(--color4) !important;
    border: var(--color4) 1px solid !important;
    margin: 5px 0 !important;
    padding: 10px !important;
    width: 100% !important;
    outline: none !important;
  }
  .kr-embedded input:focus {
    background-color: var(--color2) !important;
    border: var(--color1) 1px solid !important;
  } */
</style>
