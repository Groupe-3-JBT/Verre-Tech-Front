<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-if="item.type == 'row'"
    class="row-bootstrap rowWidget"
    :style="!preview ? 'margin-bottom:40px' : ''"
  >
    <div
      class="colonne col-12"
      :class="'col-md-' + item.row[index]"
      v-for="(col, index) in layout[itemIndex].row.length"
      :key="index"
    >
      <content-tools
        @updateLayout="updateLayout"
        :colIndex="index"
        :rowIndex="itemIndex"
        :layout="layout"
        :item="item"
        :contenteditable="contenteditable"
        :preview="preview"
      >
      </content-tools>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import map from "lodash/map";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
import contentTools from "./contentTools";
// import { quillEditor } from "vue-quill-editor";

export default {
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
    contentTools,
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
  padding-bottom: 20px !important;
}

.rowWidget {
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
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
}
</style>
