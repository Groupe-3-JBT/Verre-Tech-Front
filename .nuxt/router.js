import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _28f2a1ef = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _08058dc6 = () => interopDefault(import('../pages/commandes/index.vue' /* webpackChunkName: "pages/commandes/index" */))
const _8aba8726 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _13431982 = () => interopDefault(import('../pages/panier/index.vue' /* webpackChunkName: "pages/panier/index" */))
const _138d3f93 = () => interopDefault(import('../pages/produits/index.vue' /* webpackChunkName: "pages/produits/index" */))
const _b1619916 = () => interopDefault(import('../pages/panier/LineChart.js' /* webpackChunkName: "pages/panier/LineChart" */))
const _1a3f64e7 = () => interopDefault(import('../pages/categories/_route.vue' /* webpackChunkName: "pages/categories/_route" */))
const _0def6ca4 = () => interopDefault(import('../pages/commandes/_id.vue' /* webpackChunkName: "pages/commandes/_id" */))
const _351cca4e = () => interopDefault(import('../pages/produits/_route.vue' /* webpackChunkName: "pages/produits/_route" */))
const _141864c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4fdccdf0 = () => interopDefault(import('../pages/_route.vue' /* webpackChunkName: "pages/_route" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/checkout",
    component: _28f2a1ef,
    name: "checkout"
  }, {
    path: "/commandes",
    component: _08058dc6,
    name: "commandes"
  }, {
    path: "/contact",
    component: _8aba8726,
    name: "contact"
  }, {
    path: "/panier",
    component: _13431982,
    name: "panier"
  }, {
    path: "/produits",
    component: _138d3f93,
    name: "produits"
  }, {
    path: "/panier/LineChart",
    component: _b1619916,
    name: "panier-LineChart"
  }, {
    path: "/categories/:route?",
    component: _1a3f64e7,
    name: "categories-route"
  }, {
    path: "/commandes/:id",
    component: _0def6ca4,
    name: "commandes-id"
  }, {
    path: "/produits/:route",
    component: _351cca4e,
    name: "produits-route"
  }, {
    path: "/",
    component: _141864c8,
    name: "index"
  }, {
    path: "/:route",
    component: _4fdccdf0,
    name: "route"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
