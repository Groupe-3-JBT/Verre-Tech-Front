<template>
  <div v-if="item.type == 'text'">
    <div v-html="item.title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import map from "lodash/map";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor, Quill } from "vue-quill-editor";
// import VideoResize from 'quill-video-resize-module2'
// Quill.register('modules/VideoResize', VideoResize)

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ['video'],
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

  //  toolbar: toolbarOptions,
  //         videoResize: {
  //           // See optional "config" below
  //         }
  data() {
    return {
      editorOption: {
        theme: 'snow',
        placeholder: "Entrez votre texte ici...",
        modules: {
          toolbar: toolbarOptions,
          VideoResize: {
        	}
        },
      },
      content: "",
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
    // VideoResize
  },
};
</script>

<style scoped>
[contenteditable]:focus {
  pointer-events: none;
  outline: 0px solid transparent;
}
</style>
<style>
.quill-editor iframe,
.quill-editor video {
    pointer-events: none;
}
</style>