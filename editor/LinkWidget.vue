<template>
  <div v-if="item.type == 'link'">
    <a :contenteditable="contenteditable" :href="link" class="pb-link">
      {{ item.content }}
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["preview", "contenteditable", "item", "itemIndex"],
  data() {
    return {
      editLink: false,
      link: "",
    };
  },
};
</script>

<style scoped>
.preview {
  position: absolute;
  right: 4px;
  bottom: 4px;
}

.edit {
  float: right;
  width: 90%;
}

a {
  color: black;
}
</style>
