<template>
  <div v-if="item.type == 'title'" class="item-title">
    <span v-html="item.content" class="flex">
    </span>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import map from "lodash/map";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";

export default {
  props: [
    "preview",
    "contenteditable",
    "item",
    "colIndex",
    "rowIndex",
    "layout",
    "index",
  ],
  data() {
    return {
      editorOption: {
        theme: "bubble",
        modules: {
          toolbar: [[{ header: 1 }, { header: 2 }], [{ align: [] }]],
        },
      },
      content: "",
      titleSize: "3em",
    };
  },
  methods: {
    remove() {
      var arr = this.layout[this.rowIndex].col[this.colIndex].content;
      arr.splice(this.index, 1);
    },
  },
  components: {
    // quillEditor,
  },
};
</script>
