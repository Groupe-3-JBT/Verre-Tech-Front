<template>
  <div :style="getStyle">
    <vs-button
      v-if="!preview"
      style="cursor: pointer;"
      radius
      color="danger"
      type="flat"
      icon-pack="feather"
      icon="icon-trash"
      @click="remove()"
    ></vs-button>
    <div>
      <vs-dropdown v-if="!preview" vs-custom-content vs-trigger-click>
        <vs-button
          v-if="!preview"
          style="cursor: pointer;"
          radius
          color="primary"
          type="flat"
          icon-pack="feather"
          icon="icon-camera"
        ></vs-button>
        <vs-dropdown-menu class="dropdown-login">
          <div class="dropdownMenu">
            <div class="d-flex" style="justify-content:space-between">
              <h3 class="mb-3">Paramètres</h3>
              <vs-switch style="width:60px" v-model="switch1">
                <span slot="on">IMAGE</span>
                <span slot="off">URL</span>
              </vs-switch>
            </div>
            <vs-button
              v-if="switch1"
              style="cursor: pointer;"
              color="primary"
              type="filled"
              icon-pack="feather"
              icon="icon-folder"
              class="éedit mb-4 mt-3"
              @click="togglePopupFiles(true)"
            >
              Gestion documentaire
            </vs-button>
            <vs-input
              label="Url"
              class="form-control edit mb-4"
              type="text"
              style="width:100%"
              v-model="item.location"
              @blur="save"
              v-if="!switch1"
            />
            <vs-input-number
              label="Taille"
              class="mb-4"
              v-model="item.height"
              value="0"
              step="5"
              @blur="saveHeight"
            />
            <vs-input
              label="Alt"
              class="form-control edit mb-4"
              type="text"
              style="width:100%"
              v-model="item.alt"
              @blur="save"
            />
          </div>
        </vs-dropdown-menu>
      </vs-dropdown>
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
      editImage: false,
      switch1: true,
      activePopupFiles: false,
    };
  },
  computed: {
    getStyle() {
      return (
        "background-image:url(" +
        this.item.location +
        "); height:" +
        this.item.height +
        "px; background-size: contain; background-repeat: no-repeat; border-radius: 5px; background-position: center;"
      );
    },
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
    save(e) {
      this.item.location = e.target.value;
    },
    saveHeight(e) {
      this.item.height = e.target.value;
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
