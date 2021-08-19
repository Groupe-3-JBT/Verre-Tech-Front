<template>
  <div>
    <draggable
      v-bind="dragOptions"
      :class="preview ? '' : 'cursor-move'"
      @end="handleDrop"
      :group="rowIndex + '-' + colIndex"
    >
      <transition-group>
        <div
          :class="{ editMode: !preview }"
          v-for="(item, index) in layout[rowIndex].col[colIndex].content"
          class="item"
          :key="index"
        >
          <title-widget
            v-if="item.type == 'title'"
            :preview="preview"
            :contenteditable="contenteditable"
            :item="item"
            :colIndex="colIndex"
            :rowIndex="rowIndex"
            :layout="layout"
            :index="index"
          ></title-widget>
          <text-widget
            v-if="item.type == 'text'"
            :preview="preview"
            :contenteditable="contenteditable"
            :item="item"
            :colIndex="colIndex"
            :rowIndex="rowIndex"
            :layout="layout"
            :index="index"
          ></text-widget>
          <image-widget
            v-if="item.type == 'image'"
            :preview="preview"
            :contenteditable="contenteditable"
            :item="item"
            :colIndex="colIndex"
            :rowIndex="rowIndex"
            :layout="layout"
            :index="index"
          ></image-widget>
          <quote-widget
            v-if="item.type == 'quote'"
            :preview="preview"
            :contenteditable="contenteditable"
            :item="item"
            :itemIndex="index"
            :colIndex="colIndex"
            :rowIndex="rowIndex"
            :layout="layout"
            :index="index"
          ></quote-widget>
          <button-widget
            v-if="item.type == 'button'"
            :preview="preview"
            :contenteditable="contenteditable"
            :item="item"
            :itemIndex="index"
            :colIndex="colIndex"
            :rowIndex="rowIndex"
            :layout="layout"
            :index="index"
          >
          </button-widget>
          <alert-widget
            v-if="item.type == 'alert'"
            :preview="preview"
            :contenteditable="contenteditable"
            :item="item"
            :itemIndex="index"
            :color="item.color"
            :colIndex="colIndex"
            :rowIndex="rowIndex"
            :layout="layout"
            :index="index"
          ></alert-widget>
          <subRow-widget
            v-if="item.type == 'row'"
            :layout="layout[rowIndex].col[colIndex].content"
            :preview="preview"
            :contenteditable="contenteditable"
            :rowIndex="rowIndex"
            :colIndex="colIndex"
            :item="item"
            :itemIndex="index"
          >
          <!-- @removeRow="removeRow"
            @updateLayout="updateLayout" -->
          </subRow-widget>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import TitleWidget from "./TitleWidget";
import TextWidget from "./TextWidget";
import TextAreaWidget from "./TextAreaWidget";
import ImageWidget from "./ImageWidget";
import AlertWidget from "./alertWidget";
import ButtonWidget from "./ButtonWidget";
import LinkWidget from "./LinkWidget";
import QuoteWidget from "./QuoteWidget";
import subRowWidget from "./subRowWidget";
// import { gsap } from "gsap";
import draggable from "vuedraggable";

export default {
  props: ["preview", "contenteditable", "layout", "rowIndex", "colIndex"],
  data() {
    return {
      showButton: true,
      showContentPanel: false,
      title: { type: "title", content: "<h1>Titre</h1>", i: 0 },
      text: { type: "text", content: "Paragraphe ", i: 0 },
      image: {
        type: "image",
        content: "Image",
        i: 0,
        height: 100,
        width: 100,
        alt: "",
      },
      quote: {
        i: 0,
        type: "quote",
        content: "Citation...",
      },
      button: {
        i: 0,
        type: "button",
        content: "Cliquez ici",
        location: "",
        target: "",
      },
      link: { i: 0, type: "link", content: "Lien" },
      alert: {
        i: 0,
        type: "alert",
        content: "Alert",
        color: [{ label: "Succès", value: "success" }],
        icon: "",
      },
    };
  },
  methods: {
    handleDrop(e) {
      this.$emit(
        "updateLayout",
        this.rowIndex,
        this.colIndex,
        e.newIndex,
        e.oldIndex
      );
    },
    addItem(type) {
      this.layout[this.rowIndex].col[this.colIndex].content.push(
        JSON.parse(JSON.stringify(type))
      );
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: this.preview ? true : false,
        ghostClass: "ghost",
      };
    },
  },
  components: {
    TextWidget,
    TextAreaWidget,
    ImageWidget,
    AlertWidget,
    ButtonWidget,
    LinkWidget,
    TitleWidget,
    QuoteWidget,
    draggable,
    subRowWidget,
  },
};
</script>
<style>
.btnTooltipGroup {
  border-radius: 0;
}

.btnCenter {
  position: absolute;
  left: calc(50% - 32.5px);
  bottom: -40px;
  height: 40px;
  z-index: 999;
}

.editMode .colonne {
  padding-bottom: 40px;
}

.panelOverlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.toolsBar {
  right: 0px;
  height: 32px;
  padding: 0px 0px;
  margin: 5px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.toolsBar .vs-button {
  height: 32px;
  max-height: 32px;
  width: 32px;
  max-width: 32px;
  margin-left: 80px;
  margin-right: 15px;
}

.widgetsPanelContent {
  display: flex;
  position: absolute;
  left: calc(50% - 85px);
  bottom: 0px;
  height: 28px;
  width: fit-content;
  position: absolute;
  height: 28px;
  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.widgetsPanelContent .con-vs-tooltip .vs-button {
  border-right: 1px solid rgb(87, 149, 214) !important;
}

.widgetsPanelContent .con-vs-tooltip:first-child .vs-button {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.widgetsPanelContent .con-vs-tooltip:last-child .vs-button {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: 0px !important;
}

.itemEditMode {
  border: dotted 1px grey;
  min-height: 150px;
  margin: 10px;
}
</style>
