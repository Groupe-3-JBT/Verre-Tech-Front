import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Popup: () => import('../../components/Popup.vue' /* webpackChunkName: "components/popup" */).then(c => wrapFunctional(c.default || c)),
  PopupsPopupNewsletter: () => import('../../components/popups/PopupNewsletter.vue' /* webpackChunkName: "components/popups-popup-newsletter" */).then(c => wrapFunctional(c.default || c)),
  CheckoutAddBillingAddress: () => import('../../components/checkout/AddBillingAddress.vue' /* webpackChunkName: "components/checkout-add-billing-address" */).then(c => wrapFunctional(c.default || c)),
  CheckoutAddDeliveryAddress: () => import('../../components/checkout/AddDeliveryAddress.vue' /* webpackChunkName: "components/checkout-add-delivery-address" */).then(c => wrapFunctional(c.default || c)),
  CheckoutAlert: () => import('../../components/checkout/Alert.vue' /* webpackChunkName: "components/checkout-alert" */).then(c => wrapFunctional(c.default || c)),
  CheckoutEditBillingAddress: () => import('../../components/checkout/EditBillingAddress.vue' /* webpackChunkName: "components/checkout-edit-billing-address" */).then(c => wrapFunctional(c.default || c)),
  CheckoutEditDeliveryAddress: () => import('../../components/checkout/EditDeliveryAddress.vue' /* webpackChunkName: "components/checkout-edit-delivery-address" */).then(c => wrapFunctional(c.default || c)),
  CheckoutItem: () => import('../../components/checkout/Item.vue' /* webpackChunkName: "components/checkout-item" */).then(c => wrapFunctional(c.default || c)),
  CheckoutPayment: () => import('../../components/checkout/Payment.vue' /* webpackChunkName: "components/checkout-payment" */).then(c => wrapFunctional(c.default || c)),
  CheckoutPersonnalInfo: () => import('../../components/checkout/PersonnalInfo.vue' /* webpackChunkName: "components/checkout-personnal-info" */).then(c => wrapFunctional(c.default || c)),
  CheckoutSummary: () => import('../../components/checkout/Summary.vue' /* webpackChunkName: "components/checkout-summary" */).then(c => wrapFunctional(c.default || c)),
  Location: () => import('../../components/location/Location.vue' /* webpackChunkName: "components/location" */).then(c => wrapFunctional(c.default || c)),
  AuthLogin: () => import('../../components/auth/Login.vue' /* webpackChunkName: "components/auth-login" */).then(c => wrapFunctional(c.default || c)),
  ProduitsProductCard: () => import('../../components/produits/productCard.vue' /* webpackChunkName: "components/produits-product-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
