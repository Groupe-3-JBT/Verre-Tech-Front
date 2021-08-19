<template>
    <div>
        <main v-if="customVarLoaded" >
        <product-card v-for="(product, i) in products" :key="i" :infoProduct="product" @moveCard="moveCard"></product-card>
    </main>
    
    </div>
</template>

<script>
// FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '~/plugins/firebase/firebaseConfig.js'
import $ from 'jquery';
import productCard from '@/components/produits/productCard.vue'
import { mapGetters } from 'vuex'
import axios from "axios";

export default {
    data() {
        return {
            products:[],
            customVarLoaded: false,
        }
    },
    mounted(){
        this.getProducts()
    },
    methods:{
        ...mapGetters ({
            popupVisible: 'popup/isVisible',
            popupMode: 'popup/getMode',
        }),
        moveCard(id) {
             $("#"+id).addClass("move-icone-cart");
                setTimeout(() => {
                    $("#"+id).removeClass("move-icone-cart");
                }, 900);
        },
        getProducts(){
          axios.get("http://3.21.236.175:9000/products/").then((result) => {
          this.products = result.data.products.filter((elem) => elem.category == this.$route.params.route)
        }).catch((error) => {
          console.error("error", error)
        })
        }
    },
    components: {
        productCard,
    }
}
</script>