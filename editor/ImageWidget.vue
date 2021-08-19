<template>
  <div class="item-image">
    <div :style="'display:flex;width:100%;justify-content:' + item.flexPosition">
      <NuxtLink v-if="item.link" :to="item.link">
        <img :style="getSize" :src="item.location" :alt="item.alt" />
      </NuxtLink>
      <img v-else :style="getSize" :src="item.location" :alt="item.alt" />
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  props: [
    "preview",
    "contenteditable",
    "colIndex",
    "rowIndex",
    "layout",
    "index",
    "item",
  ],
  data() {
    return {
      switch1: true,
      activePopupFiles: false,
      flexPosition: "center",
    };
  },
  computed: {
    getSize() {
      return " width:" + this.item.width + "%;";
    },
  },
  watch:{
    flexPosition: function (newVal, oldVal) {
      this.item.flexPosition=newVal
      this.flexPosition=newVal
    }
  },    
  created(){
    if(!this.item.flexPosition){
      this.item.flexPosition="center"
    }
  },
  methods: {
    imageSrc(data) {
      this.item.location = data;
      this.item.height = 110;
    },
    remove() {
      this.layout[this.rowIndex].col[this.colIndex].content.splice(
        this.index,
        1
      );
    },
    saveLocation(e) {
      this.item.location = e.target.value;
    },
    saveAlt(e) {
      this.item.alt = e.target.value;
    },
    saveLink(e) {
      this.item.link = e.target.value;
    },
    saveWidth(e) {
      if (e.target.value > 100) {
        this.item.width = 100;
      }
      this.item.width = e.target.value;
    },
    togglePopupFiles(val = false) {
      this.activePopupFiles = val;
    },
  },
  components: {
    "v-select": vSelect,
  },
};
</script>

<style scoped>
.preview {
  position: absolute;
  left: 4px;
}

.edit {
  float: right;
  width: 90%;
}

.dropdownMenu {
  padding: 10px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}
</style>
