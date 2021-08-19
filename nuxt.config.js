const env = require('dotenv').config();
console.log(env)
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VERRE TECH',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://api.systempay.fr/static/js/krypton-client/V4.0/ext/classic-reset.css" }
    ],
    script: [
      { hid: "embedded-form-glue", src: "https://api.systempay.fr/static/js/krypton-client/V4.0/ext/classic.js", defer: true}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase/firebaseConfig.js',
    {
      src: "~/plugins/waypoints/v-waypoint.client.js",
      mode: 'client'
    },
    {
      src:'~/plugins/route.js' ,
      mode: 'client'
    },
    
  ],
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'nuxt-vuex-localstorage',
    [
      "nuxt-cookie-control",
      {
        sameSite: true,
        barPosition: "bottom-right",
        blockIframe: true,
        blockIframe: {
          initialState: false
        },
        colors: {
          barTextColor: "#fff",
          barBackground: "var(--color1)",
          barButtonColor: "#fff",
          barButtonBackground: "var(--color1)",
          barButtonHoverColor: "var(--color1)",
          barButtonHoverBackground: "#fff",

          modalButtonBackground: "var(--color1)",
          modalButtonHoverColor: "var(--color1)",
          modalButtonHoverBackground: "#fff",
          modalButtonColor: "#fff",

          controlButtonBackground: "var(--color1)",
          controlButtonHoverBackground: "#fff",
          controlButtonIconHoverColor: "var(--color1)",
          controlButtonIconColor: "#fff",

          
          checkboxActiveBackground: "#ede1e1",
          checkboxInactiveBackground: "#ede1e1",
          checkboxActiveCircleBackground: "var(--color1)",
          checkboxInactiveCircleBackground: "#fff",
          checkboxDisabledBackground: "#2e495e",
          checkboxDisabledCircleBackground: "#ede1e1"
        }
      }
    ],
    ['nuxt-gmaps', {
      key: 'AIzaSyCCbUTAKTJzn7n6TumBfTir_GU9AKBIHsw',
      //you can use libraries: ['places']
    }]
  ],

  cookies: {
    necessary: [
      {
        name: {
          fr: "Cookies par défaut",
          en: "Default cookies",
          hr: "Osnovni kolačići"
        },

        description: {
          en: "Used for cookie control.",
          fr: "Utilisé pour le contrôle des cookies."
        },
        // cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }
    ],
    optional: [
      {
        name: "Google Analytics",
        description: "Google Analytics est un service d'analyse web proposé par Google qui suit et rapporte le trafic du site web.",
        initialState: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-138616567-1",
        async: true,
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "UA-138616567-1");
        },
        declined: () =>{

        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
 
  env: env.parsed,

  // ne PAS commenter pour Serveur test en LAN
  // server: {
  //   host: '0'
  // }
}
