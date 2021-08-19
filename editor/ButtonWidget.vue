<template>
  <div v-if="item.type == 'button'" style="position:relative" class="item-button">
      <div :style="'display:flex;width:100%;justify-content:' + item.flexPosition">
        <a
          :href="item.location"
          :target="item.typeLocation ? '' : '_blank'"
          class="button"
          ref="btnConten"
          :style="'width:' + item.width"
        >
          <div v-html="item.content"></div>
        </a>
      </div>
  </div>
</template>
<script>

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
      flexPosition: "center",
      editLink: false,
      link: "",
      switch1: true,
      activePopupFiles: false,
      switch2: false,
    };
  },
  computed: {
    widthElement() {
      if(!this.item.width || this.item.width=="auto"){
        return 0
      }else{
        return this.item.width.substring(0, -1);
      }
    },
  },
  watch:{
    flexPosition: function (newVal, oldVal) {
      this.item.flexPosition=newVal
      this.flexPosition=newVal
    },
    widthElement: function (newVal, oldVal) {
      if(newVal==0){
        this.item.width="auto"
        this.widthElement="0"
      }else{
        this.item.width=newVal+"%"
        this.widthElement=newVal
      }
    },
  },
  created(){
    if(!this.item.flexPosition){
      this.item.flexPosition="center"
    }
  },
  methods: {
    togglePopupFiles(val = false) {
      this.activePopupFiles = val;
    },
    fileSrc(data) {
      this.item.location = data;
    },
    saveFlexPosition(e){
      this.item.flexPosition=this.flexPosition
    },
    saveLocation(e) {
      this.item.location = e.target.value;
    },
    remove() {
      this.layout[this.rowIndex].col[this.colIndex].content.splice(
        this.index,
        1
      );
    },
    save(e) {
      this.item.location = e.target.value;
    },
  },
  components: {
    // quillEditor,
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

.dropdownMenu {
  padding: 10px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}


</style>
