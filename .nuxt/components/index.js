import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Popup } from '../../components/Popup.vue'
export { default as PopupsPopupNewsletter } from '../../components/popups/PopupNewsletter.vue'
export { default as CheckoutAddBillingAddress } from '../../components/checkout/AddBillingAddress.vue'
export { default as CheckoutAddDeliveryAddress } from '../../components/checkout/AddDeliveryAddress.vue'
export { default as CheckoutAlert } from '../../components/checkout/Alert.vue'
export { default as CheckoutEditBillingAddress } from '../../components/checkout/EditBillingAddress.vue'
export { default as CheckoutEditDeliveryAddress } from '../../components/checkout/EditDeliveryAddress.vue'
export { default as CheckoutItem } from '../../components/checkout/Item.vue'
export { default as CheckoutPayment } from '../../components/checkout/Payment.vue'
export { default as CheckoutPersonnalInfo } from '../../components/checkout/PersonnalInfo.vue'
export { default as CheckoutSummary } from '../../components/checkout/Summary.vue'
export { default as Location } from '../../components/location/Location.vue'
export { default as AuthLogin } from '../../components/auth/Login.vue'
export { default as ProduitsProductCard } from '../../components/produits/productCard.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPopup = import('../../components/Popup.vue' /* webpackChunkName: "components/popup" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupsPopupNewsletter = import('../../components/popups/PopupNewsletter.vue' /* webpackChunkName: "components/popups-popup-newsletter" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutAddBillingAddress = import('../../components/checkout/AddBillingAddress.vue' /* webpackChunkName: "components/checkout-add-billing-address" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutAddDeliveryAddress = import('../../components/checkout/AddDeliveryAddress.vue' /* webpackChunkName: "components/checkout-add-delivery-address" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutAlert = import('../../components/checkout/Alert.vue' /* webpackChunkName: "components/checkout-alert" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutEditBillingAddress = import('../../components/checkout/EditBillingAddress.vue' /* webpackChunkName: "components/checkout-edit-billing-address" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutEditDeliveryAddress = import('../../components/checkout/EditDeliveryAddress.vue' /* webpackChunkName: "components/checkout-edit-delivery-address" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutItem = import('../../components/checkout/Item.vue' /* webpackChunkName: "components/checkout-item" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutPayment = import('../../components/checkout/Payment.vue' /* webpackChunkName: "components/checkout-payment" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutPersonnalInfo = import('../../components/checkout/PersonnalInfo.vue' /* webpackChunkName: "components/checkout-personnal-info" */).then(c => wrapFunctional(c.default || c))
export const LazyCheckoutSummary = import('../../components/checkout/Summary.vue' /* webpackChunkName: "components/checkout-summary" */).then(c => wrapFunctional(c.default || c))
export const LazyLocation = import('../../components/location/Location.vue' /* webpackChunkName: "components/location" */).then(c => wrapFunctional(c.default || c))
export const LazyAuthLogin = import('../../components/auth/Login.vue' /* webpackChunkName: "components/auth-login" */).then(c => wrapFunctional(c.default || c))
export const LazyProduitsProductCard = import('../../components/produits/productCard.vue' /* webpackChunkName: "components/produits-product-card" */).then(c => wrapFunctional(c.default || c))
