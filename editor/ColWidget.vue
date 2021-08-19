<template>
  <div v-if="item.type == 'col'" class="col-md"></div>
</template>

<script>
import { mapActions } from "vuex";
import map from "lodash/map";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";

export default {
  props: ["preview", "contenteditable", "item", "itemIndex"],
  data() {
    return {
      editorOption: {
        theme: "bubble",
      },
      content: "",
    };
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
