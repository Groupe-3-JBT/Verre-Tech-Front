<template>
  <main id="products-list">
    <div class="container">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :infoProduct="product"
        @moveCard="moveCard"
      >
      </product-card>
    </div>
  </main>
</template>
<script>

import { db } from "~/plugins/firebase/firebaseConfig.js";
import $ from 'jquery';
import productCard from "@/components/produits/productCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
      
    moveCard(id) {
      $("#" + id).addClass("move-icone-cart");
      setTimeout(() => {
        $("#" + id).removeClass("move-icone-cart");
      }, 900);
    },
    getProducts() {
      axios.get("http://3.21.236.175:9000/products/").then((result) => {
          this.products = result.data.products.filter((elem) => elem.category == this.$route.params.route)
        }).catch((error) => {
          console.error("error", error)
        })
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
  },
  components: {
    productCard,
  },
};
</script>


