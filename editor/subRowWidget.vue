<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-if="item.type == 'row'"
    class="row rowWidget"
    :style="!preview ? 'margin-bottom:40px' : ''"
  >
    <div v-if="hover && !preview" class="panelOverlay">
      <div class="toolsBar">
        <vs-button

          radius
          color="danger"
          type="border"
          icon-pack="feather"
          icon="icon-trash"
          class="btnTrash"
          @click="openConfirm(itemIndex)"
        ></vs-button>
      </div>
    </div>
    <div
      class="colonne"
      :class="'col-md-' + item.row[index]"
      v-for="(col, index) in layout[itemIndex].row.length"
      :key="index"
    >
      <sub-content-tools
        @updateLayout="updateLayout"
        :colIndex="index"
        :rowIndex="itemIndex"
        :layout="layout"
        :item="item"
        :contenteditable="contenteditable"
        :preview="preview"
      >
      </sub-content-tools>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import map from "lodash/map";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
import subContentTools from "./subContentTools";
// import { quillEditor } from "vue-quill-editor";

export default {
  name:"row-widget",
  props: ["preview", "contenteditable", "item", "itemIndex", "layout"],
  data() {
    return {
      itemSelect: null,
      popupDelete: false,
      hover: false,
      editorOption: {
        theme: "bubble",
      },
      cols: [{}],
      content: "",
    };
  },
  methods: {
      row(arrayCol) {
      var colRender = [];
      for (let i = 0; i < arrayCol.length; i++) {
        colRender.push({
          content: [],
        });
      }
      return {
        type: "row",
        content: "",
        row: arrayCol,
        col: colRender,
        hover: false,
      };
    },
    updateLayout(row, col, newIndex, oldIndex) {
      this.$emit("updateLayout", row, col, newIndex, oldIndex);
    },
    openConfirm(item) {
      this.$vs.dialog({
        acceptText: "Supprimer",
        cancelText: "Annuler",
        type: "confirm",
        color: "danger",
        title: `Êtes-vous sûr de vouloir supprimer cette rangé ?`,
        text: "Attention, cette action est irreversible !",
        accept: this.acceptAlert,
      });
      this.itemSelect = item;
    },
    acceptAlert() {
      this.$emit("removeRow", this.itemSelect);
    },
  },
  components: {
    // quillEditor,
    subContentTools,
  },
};
</script>

<style scoped>
[contenteditable]:focus {
  pointer-events: none;
  outline: 0px solid transparent;
}

.toolsBar {
  margin: 3px;
  position: absolute;
  bottom: 0px;
  width: 50%;
  height: 50px;
  right: 5px;
  display: flex;
  justify-content: flex-end;
}

.toolsBar .btnTrash {
  margin-left: 100px;
}

.colonne {
  position: relative;
  display: block;
  clear: both;
}

.editMode .colonne {
  min-height: 150px;
}

.rowWidget {
  width: 100%;
  position: relative;
}

.btnLeft {
  position: absolute;
  right: -50px;
  width: 50px;
}

.btnRight {
  position: absolute;
  left: -50px;
  width: 50px;
}

.row {
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0px !important;
  padding-bottom: 20px !important;
}
</style>
