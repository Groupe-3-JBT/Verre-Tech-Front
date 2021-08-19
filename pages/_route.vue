<template>
  <div id="content">
    <div
      class="container"
      v-for="(item, index) in layout"
      :key="index"
      :class="item.styleClass"
      :style="item.style"
      :id="item.styleId"
    >
      <row-widget
        v-if="item.type == 'row'"
        :layout="layout"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
        class="mb-2"
      ></row-widget>
      <col-widget
        v-if="item.type == 'col'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
      ></col-widget>
      <text-widget
        v-if="item.type == 'text'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
        :themeColors="themeColors"
      ></text-widget>
      <text-area-widget
        v-if="item.type == 'content'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
      ></text-area-widget>
      <image-widget
        v-if="item.type == 'image'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
      ></image-widget>
      <alert-widget
        v-if="item.type == 'alert'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
        :color="item.color"
      >
      </alert-widget>
      <button-widget
        v-if="item.type == 'button'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
      >
      </button-widget>
      <link-widget
        v-if="item.type == 'link'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
      >
      </link-widget>
      <title-widget
        v-if="item.type == 'title'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
      ></title-widget>
      <quote-widget
        v-if="item.type == 'quote'"
        :preview="preview"
        :contenteditable="contenteditable"
        :item="item"
        :itemIndex="index"
      ></quote-widget>
    </div>
  </div>
</template>
<script>
import { db } from "~/plugins/firebase/firebaseConfig.js";
import axios from "axios";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import Vue from "vue";
// import "~/assets/style/builder.css"
import RowWidget from "../editor/RowWidget";
import ColWidget from "../editor/ColWidget";
import TextWidget from "../editor/TextWidget";
import TextAreaWidget from "../editor/TextAreaWidget";
import ImageWidget from "../editor/ImageWidget";
import AlertWidget from "../editor/alertWidget";
import ButtonWidget from "../editor/ButtonWidget";
import LinkWidget from "../editor/LinkWidget";
import TitleWidget from "../editor/TitleWidget";
import QuoteWidget from "../editor/QuoteWidget";
export default {
  data() {
    return {
      contenteditable: false,
      preview: true,
      dataPage: {
        metaTitle: "",
        metaDescription: "",
        gridLayout: [],
      },
    };
  },
  head() {
    return {
      title: this.dataPage.metaTitle ? this.dataPage.metaTitle : "Grand Paris Combustibles",
      meta: [
        // `hid` est un identifiant unique. N'utilisez pas `vmid` pour cela car cela ne marchera pas.
        {
          hid: this.$route.params.route,
          name: "description",
          content: this.dataPage.metaDescription ? this.dataPage.metaDescription : "Numéro 1 sur le combustible de chauffage en Ile de France",
        }
      ]
    }
  },
  mounted() {
    this.getDataPage();
  },
  methods: {
    getDataPage() {
      db.collection("customers")
        .doc(process.env.ID_CUSTOMER)
        .collection("sites")
        .doc(process.env.ID_SITE)
        .collection("pages")
        .where("route", "==", this.$route.params.route)
        .limit(1)
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.dataPage = doc.data();
          });
        });
      //récupération des données de la page par sa route
    },
  },
  computed: {
    layout: function () {
      if (this.dataPage.gridLayout.length > 0) {
        return this.dataPage.gridLayout || "";
      } else {
        return "";
      }
    },
  },
  watch: {},
  components: {
    RowWidget,
    ColWidget,
    TextWidget,
    TextAreaWidget,
    ImageWidget,
    AlertWidget,
    ButtonWidget,
    LinkWidget,
    TitleWidget,
    QuoteWidget,
  },
};
</script>

<style>
</style>
