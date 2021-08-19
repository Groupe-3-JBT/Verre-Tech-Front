<template>
  <div id="scroll">
    <li class="row">
      <div class="img-panier">
        <img style="max-height:100px; max-width:150px;object-fit: contain" v-if="item.imgList.length>0" :src="item.imgList[0].download" alt="">
      </div>
      <div class="column">
          <p>{{item.title}}</p>
          <div class="row" style="bottom:25px">
              <p>Conditionnement : </p>&nbsp;
              <p>{{item.customVarProduct[item.conditionnement] ? item.customVarProduct[item.conditionnement].td[0].value : item.customVarProduct[0].td[0].value}}</p>
          </div>
          <div class="row">
            <p>Quantité :</p>&nbsp;
            <div class="quantity row">
              <p class="button" style="cursor: pointer;margin-right:10px" @click="removeFromCart(item)">-</p>
              <p class="quantityNum">{{item.itemQuantity}}</p>
              <p class="button" style="cursor: pointer;margin-left:10px" @click="addToCart(item)">+</p>

            </div>
          </div>
          <div class="row">
            <p>Prix :</p>&nbsp;
             <p class="button" style="cursor: pointer;margin-right:10px">{{getItemPrice(item)}}€</p>
          </div>
      </div>
    </li>
    <!-- <img class="block col-span-3 w-full h-20 rounded bg-gray-600" src alt />
    <div class="col-span-5">
      <div class="flex">
        <h6 class="text-sm font-semibold text-gray-800 flex-grow">{{ item.title }}</h6>
        <button>
          <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
      <p
        class="text-xs truncate text-gray-600"
      >{{item.description}}</p>
      <span class="text-sm text-gray-800">{{ getItemPrice(item) }} €</span>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "Item",
  props: {
    item: Object
  },
  methods: {
    ...mapMutations({
        addToCart: 'localStorage/add',
        removeFromCart: 'localStorage/remove',
    }),
  },
  computed: {
    ...mapGetters ({
        getItemPrice: 'localStorage/itemPrice',
    }),
  },
};
</script>
