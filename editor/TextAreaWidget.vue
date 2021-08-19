<template>
  <div v-if="item.type == 'text'">
    <div v-html="item.content"></div>
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
  props: ["preview", "contenteditable", "item", "itemIndex"],
  data() {
    return {
      editorOption: {
        theme: "bubble",
      },
      content: "",
      options: [
        {
          title: "Attention",
          icon: "warning",
          value: "warning",
        },
        {
          title: "Info",
          icon: "info",
          value: "info",
        },
        {
          title: "Interrogation",
          icon: "help",
          value: "help",
        },
        {
          title: "Dialogue",
          icon: "question_answer",
          value: "question_answer",
        },
      ],
    };
  },
  components: {
    // quillEditor,
  },
};
</script>

<style scoped>
[contenteditable]:focus {
  outline: 0px solid transparent;
}
</style>
