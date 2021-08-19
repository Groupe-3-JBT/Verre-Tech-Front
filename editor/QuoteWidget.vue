<template>
  <div v-if="item.type == 'quote'" class="pb-quote " style="position:relative">
    <p class="">
      <!-- <quill-editor
        v-model="item.title"
        :disabled="!contenteditable"
        :options="editorOption"
        >{{ item.title }}</quill-editor
      > -->
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import map from "lodash/map";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["clean"], // remove formatting button
];

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
        placeholder: "Entrez votre texte ici...",
        modules: {
          toolbar: toolbarOptions,
        },
      },
    };
  },
  methods: {
    remove() {
      this.layout[this.rowIndex].col[this.colIndex].content.splice(
        this.index,
        1
      );
    },
  },
  components: {
    // quillEditor,
  },
};
</script>

<style scoped>
[contenteditable]:focus {
  pointer-events: none;
  outline: 0px solid transparent;
}
</style>
