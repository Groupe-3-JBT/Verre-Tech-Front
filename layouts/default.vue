<template>
  <div class="wrapper-content">
  <Header />
    <Nuxt />
    <CookieControl locale="fr">
    </CookieControl>
  <Footer />
  <!-- 
  <Popup v-show="popupVisible" :closeBtn="popupMode != 'Location'"> -->
  <Popup v-show="popupVisible" :closeBtn="popupMode != 'Location'" >
      <component :props="getProps" :is="popupMode" slot="body"></component>
  </Popup>
  </div>
</template>
<script>
import Header from '~/layouts/Header.vue'
import Footer from '~/layouts/Footer.vue'
import '~/assets/style/reset.css'
import '~/assets/style/style.css'
import '~/assets/style/grid.css'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Popup from '@/components/Popup.vue'

export default{
  components:{
    Header,
    Footer,
    Popup
  },
  mounted() {
    if(!this.getOptionLivraison.zone && !this.getOptionLivraison.depot) {
        this.changeMode({mode: 'Location', props: null})
        this.open()
    }
    var analyticsAccepted = false
    for (let i = 0; i < this.$cookies.enabled.length; i++) {
      const cookie = this.$cookies.enabled[i];
      if (cookie.name == "Google Analytics") {
        analyticsAccepted = true
      }
    }
    console.log(analyticsAccepted) 
  },
  methods: {
    ...mapActions({
        open: 'popup/show',
        close: 'popup/hide',
        changeMode: 'popup/changeMode'
    }),
  },

  computed: {
    ...mapGetters ({
        popupVisible: 'popup/isVisible',
        popupMode: 'popup/getMode',
        getOptionLivraison: 'optionLivraison/optionLivraison',
        getProps : "popup/getProps"
    })
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: var(--color2);
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: var(--color2);
  background-color: #35495e;
}
</style>
