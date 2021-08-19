<template>
  <div class="hover card column">
    <div class="card-content">
      <NuxtLink :to="'/produits/' + infoProduct.id">
      <div class="card-picture">
        <img
          :src="infoProduct.fields.Image[0].url"
        />
      </div>
      </NuxtLink>
      <p>{{ infoProduct.fields.Nom }}</p>

      <div class="card-form">
        <p v-if="calculPrix > 0" class="price">
          {{ calculPrix }}€ TTC
        </p>
        <button
          v-if="calculPrix != 0"
          style="cursor:pointer"
          class="row"
          @click.prevent="addItem()"
        >
          <p>Ajouter au panier</p>
          <div :id="infoProduct.id" class="icone-cart">
            <img src="~/assets/medias/cart-w.svg" alt="panier" />
          </div>
        </button>
        <button v-else style="background-color: grey" class="row">
          <p>Indisponible</p>
          <div
            :id="infoProduct.id"
            style="background-color: grey"
            class="cart"
          >
            <img src="~/assets/medias/cart-w.svg" alt="panier" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  data() {
    return {
      itemSelected: 0,
      available: true,
    };
  },
  props: {
    infoProduct: {},
  },
  methods: {
    ...mapMutations({
      addToCart: "localStorage/add",
      removeFromCart: "localStorage/remove",
    }),
    addItem() {
      this.addToCart({
        ...this.infoProduct,
        conditionnement: this.itemSelected,
      });
      this.openPanel()
      this.$emit("moveCard", this.infoProduct.id);
    },
    openPanel() {
      //   this.authPanel = true;
      let id="sidebar-cart"
      $("body").addClass("stopScroll");
      $("#"+id).css("animation", "slideIn 1s forwards");
      $("#"+id).css("display", "block");
      $("#"+id+ ".sidebar-content").css("right", "0");
    },
  },
  computed: {
    ...mapGetters({
      getOptionLivraison: "optionLivraison/optionLivraison",
    }),
    calculPrix() {
      var price = NaN;
          price = parseFloat(
            this.infoProduct.fields.Prix
              .toString()
              .replace(/,/, ".")
          ).toFixed(2);
          return price;

    },
  },
};
</script>

<style>
#indispo {
  background-color: rgba(110, 110, 110, 0.637);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  padding-top: 90px;
  justify-content: center;
}
#indispo p {
  z-index: 3;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 2px;
  line-height: 30px;
  font-weight: 500;
  color: var(--color2);
}
</style>
