<template>
  <main id="products-list">
    <div class="container">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :infoProduct="product"
        @moveCard="moveCard"
      ></product-card>
    </div>
  </main>
</template>
<script>
// import { gsap } from "gsap";
import $ from "jquery";
import { db } from "~/plugins/firebase/firebaseConfig.js";
import axios from "axios";

import productCard from "@/components/produits/productCard.vue";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getHomeProduct();
  },
  methods: {
    moveCard(id) {
      $("#" + id).addClass("move-icone-cart");
      setTimeout(() => {
        $("#" + id).removeClass("move-icone-cart");
      }, 900);
    },
    getHomeProduct() {
      axios.get("http://3.21.236.175:9000/products/").then((result) => {
          this.products = result.data.products
        }).catch((error) => {
          console.error("error", error)
        })
    },
  },
  components: {
    productCard,
  },
};
</script>


