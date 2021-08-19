<template>
  <div v-if="item.type == 'alert'" style="position:relative">
    <div
      class="in alert-dismissible "
      :class="colorClass"
      style="margin-top:18px;"
    >
      <div style="display:flex; align-items:center;">
        <vs-icon
          size="small"
          :icon="item.icon.icon ? item.icon.icon : ''"
        ></vs-icon>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";

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
    "itemIndex",
    "color",
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
  computed: {
    colorClass: function() {
      return "pb-alert-" + (this.color.value ? this.color.value : "success");
    },
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
    "v-select": vSelect,
  },
};
</script>
<style scoped>
.quill-editor{
  width: 100%;
}
</style>