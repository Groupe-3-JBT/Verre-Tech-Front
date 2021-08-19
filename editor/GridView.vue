<template>
  <div>
    <div class="panel"></div>
    <div class="editor d-flex">

      <div ref="builder" class="container">
      <h1 style="text-decoration:underline">
        {{ this.dataPage.title }}
      </h1>
      <vs-divider ></vs-divider>
        <draggable
          v-bind="dragOptions"
          v-model="layout"
          :class="preview ? '' : 'cursor-move'"
          :multi-drag="false"
        >
          <transition-group>
            <div
              :class="{ editMode: !preview }"
              v-for="(item, index) in layout"
              class="item"
              :key="index"
            >
              <row-widget
                v-if="item.type == 'row'"
                :layout="layout"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
                @removeRow="removeRow"
                @updateLayout="updateLayout"
              ></row-widget>
              <div
                id="rowControllersActions"
                class="w-full text-center"
                v-if="!preview"
              >
                <vs-dropdown>
                  <a class="flex items-center" href="#">
                    <vs-avatar
                      color="primary"
                      icon-pack="feather"
                      icon="icon-plus"
                    />
                  </a>
                  <vs-dropdown-menu>
                    <vs-dropdown-item @click="insertItem(row([12]), index)">
                      12
                    </vs-dropdown-item>

                    <vs-dropdown-item
                      @click="insertItem(row([6, 6]), index)"
                      divider
                    >
                      6/6
                    </vs-dropdown-item>

                    <vs-dropdown-item
                      @click="insertItem(row([4, 4, 4]), index)"
                      divider
                    >
                      3/3/3
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([3, 3, 3, 3]), index)"
                      divider
                    >
                      4/4/4/4
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([2, 2, 2, 2, 2, 2]), index)"
                      divider
                    >
                      2/2/2/2/2/2
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([4, 8]), index)"
                      divider
                    >
                      4/8
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([8, 4]), index)"
                      divider
                    >
                      8/4
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([3, 9]), index)"
                      divider
                    >
                      3/9
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([9, 3]), index)"
                      divider
                    >
                      9/3
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([2, 10]), index)"
                      divider
                    >
                      2/10
                    </vs-dropdown-item>
                    <vs-dropdown-item
                      @click="insertItem(row([10, 2]), index)"
                      divider
                    >
                      10/2
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
              <col-widget
                v-if="item.type == 'col'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              ></col-widget>
              <text-widget
                v-if="item.type == 'text'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              ></text-widget>
              <text-area-widget
                v-if="item.type == 'content'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              ></text-area-widget>
              <image-widget
                v-if="item.type == 'image'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              ></image-widget>
              <alert-widget
                v-if="item.type == 'alert'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
                :color="item.color"
              >
              </alert-widget>
              <button-widget
                v-if="item.type == 'button'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              >
              </button-widget>
              <link-widget
                v-if="item.type == 'link'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              >
              </link-widget>
              <title-widget
                v-if="item.type == 'title'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              ></title-widget>
              <quote-widget
                v-if="item.type == 'quote'"
                :preview="preview"
                :contenteditable="contenteditable"
                :item="item"
                :itemIndex="index"
              ></quote-widget>
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
    <div class=" flex " style="position:fixed; left:10px;bottom:20px; z-index:100000000">
      <vs-button
        @click="disableGrid(preview == true ? true : false)"
        class="m-3"
        color="primary"
        type="filled"
        style="margin: 10px 5px 0 0 !important"
        >{{ preview == false ? "Aperçu" : "Modifier" }}</vs-button
      >
      <div class="btn-group">
        <vs-button
          @click="saveGridLayout('Save')"
          class="m-3"
          color="primary"
          type="filled"
          style="margin: 10px 0 0 0 !important"
          >Sauvegarder</vs-button
        >
        <vs-button
          @click="popupActive = true"
          class="m-3"
          color="warning"
          type="filled"
          style="margin: 10px 0 0 0 !important"
          >Sauvegarder comme model</vs-button
        >
        <vs-button
          @click="popupActiveLoadModel = true"
          class="m-3"
          color="warning"
          type="filled"
          style="margin: 10px 0 0 0 !important"
          >Charger un model</vs-button
        >
      </div>
    </div>
    <vs-popup
      class="holamundo"
      title="Enregistrer un model"
      :active.sync="popupActive"
    >
      <div>
        <vs-input
          icon-pack="feather"
          icon="icon-edit-2"
          icon-after
          placeholder="Nom du model"
          vs-placeholder="Nombre"
          v-model="dataModel.templateName"
        />
        <vs-button
          @click="saveGridLayoutModel()"
          class="mt-3 float-right"
          color="success"
          >Enregistrer</vs-button
        >
      </div>
    </vs-popup>
    <vs-popup
      class="holamundo"
      title="Enregistrer un model"
      :active.sync="popupActiveLoadModel"
    >
      <div>
        <vs-table :data="modelArray">
          <template slot="thead">
            <vs-th style="width:50%">Model </vs-th>
            <vs-th style="width:50%; float:right">Action</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].templateName">
                {{ data[indextr].templateName }}
              </vs-td>
              <vs-td style="float:right" :data="data[indextr].username">
                <vs-button @click="loadModel(data[indextr].gridLayout)"
                  >Charger</vs-button
                >
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import { VueContext } from "vue-context";
import { setSubCollection } from "@/../script/global";
import { mapGetters, mapActions } from "vuex";
import RowWidget from "./RowWidget";
import ColWidget from "./ColWidget";
import TextWidget from "./TextWidget";
import TextAreaWidget from "./TextAreaWidget";
import ImageWidget from "./ImageWidget";
import AlertWidget from "./alertWidget";
import ButtonWidget from "./ButtonWidget";
import LinkWidget from "./LinkWidget";
import TitleWidget from "./TitleWidget";
import QuoteWidget from "./QuoteWidget";
import { GridLayout, GridItem } from "vue-grid-layout";
import draggable from "vuedraggable";
import $ from "jquery";

export default {
  name: "Gridview",
  props: {
    pageName: {
      type: String,
      default: () => "Page",
    },
  },
  data() {
    return {
      canDrag: false,
      modelArray: [],
      templateName: "",
      popupActive: false,
      popupActiveLoadModel: false,
      isDraggable: false,
      isResizable: false,
      contenteditable: false,
      preview: true,
      layout: [],
      dataPage: {
        updateDate: new Date(),
      },
      lastDataPage: {},
      dataModel: {
        addDate: new Date(),
        updateDate: new Date(),
        deleteDate: null,
        templateName: null,
        gridLayout: [],
      },
      pointerLayout: false,
      col: {
        type: "col",
        content: "Col ",
      },
      link: { x: 0, y: 0, w: 2, h: 2, i: 0, type: "link", content: "Lien" },
    };
  },
  mounted() {
    this.insertItem(this.row([12]));
    this.preview =true
  },
  methods: {
    updateLayout(row, col, newIndex, oldIndex) {
      var arrayPerso = JSON.parse(JSON.stringify(this.layout));
      arrayPerso = this.array_move(
        JSON.parse(JSON.stringify(this.layout[row].col[col].content)),
        oldIndex,
        newIndex
      );
      this.layout[row].col[col].content = [];
      setTimeout(() => {
        this.layout[row].col[col].content = arrayPerso;
      }, 10);
    },
    array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr;
    },
    loadModel(gridLayout) {
      this.layout = JSON.parse(JSON.stringify(gridLayout));
    },
    row(arrayCol) {
      var colRender = [];
      for (let i = 0; i < arrayCol.length; i++) {
        colRender.push({
          content: [],
        });
      }
      return {
        type: "row",
        content: "",
        row: arrayCol,
        col: colRender,
        hover: false,
      };
    },
    removeRow(itemIndex) {
      this.layout.splice(itemIndex, 1);
    },
    insertItem(type, i = 0) {
      this.pointerLayout = true;
      this.disableGrid(true);
      type.i = i + 1;
      this.layout.splice(i + 1, 0, JSON.parse(JSON.stringify(type)));
    },
    disableGrid(bool) {
      if (bool) {
        this.pointerLayout = bool;
      }
      this.isDraggable = bool;
      this.isResizable = bool;
      this.preview = !bool;
      this.contenteditable = bool;
    },
    saveGridLayout(action) {
      if (action == "Save") {
        this.dataPage.updateDate = new Date();
        this.dataPage.gridLayout = this.layout;
        setSubCollection(
          "customers",
          "pages",
          this.dataPage,
          this.$route.params.id,
          this.lastDataPage,
          this.$route.params.idPage
        );
        let data = {
          addDate: new Date(),
          icon: "icon-file",
          title: "Page modifiée",
          subtitle:
            "La page '" +
            this.dataPage.name +
            "' a été modifiée par " +
            this.$parent.userConnect.firstname +
            " " +
            this.$parent.userConnect.lastname,
          originator: this.$parent.userConnect,
        };
        setSubCollection("customers", "log", data, this.$route.params.id);
        this.$vs.notify({
          title: "Félicitation !",
          text: "La page '" + this.dataPage.name + "' à bien été modifiée",
          color: "success",
          iconPack: "feather",
          icon: "icon-trash",
        });
        this.$router.push("/back/pages/" + this.$route.params.id);
      } else {
        this.$router.push("/back/pages/" + this.$route.params.id);
      }
    },
    saveGridLayoutModel() {
      this.popupActive = false;
      this.dataModel.gridLayout = this.layout;
      setSubCollection(
        "customers",
        "modelPage",
        this.dataModel,
        this.$route.params.id
      );
      let data = {
        addDate: new Date(),
        icon: "icon-file",
        title: "Model enregistré",
        subtitle:
          "Le model '" +
          this.dataModel.templateName +
          "' a été engistré par " +
          this.$parent.userConnect.firstname +
          " " +
          this.$parent.userConnect.lastname,
        originator: this.$parent.userConnect,
      };
      setSubCollection("customers", "log", data, this.$route.params.id);
      this.$vs.notify({
        title: "Félicitation !",
        text: "Le model '" + this.dataModel.templateName + "' à bien été créé",
        color: "success",
        iconPack: "feather",
        icon: "icon-trash",
      });
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: this.preview ? true : false && this.canDrag,
        ghostClass: "ghost",
      };
    },
  },
  components: {
    VueContext,
    RowWidget,
    ColWidget,
    TextWidget,
    TextAreaWidget,
    ImageWidget,
    AlertWidget,
    ButtonWidget,
    LinkWidget,
    TitleWidget,
    QuoteWidget,
    draggable,
  },
};
</script>
<style>
#rowControllersActions {
  margin-top: -42px;
}

.panel {
  display: flex;
  justify-content: flex-start;
}

.editor {
  display: flex;
  justify-content: center;
}

.editMode {
  border: dotted 1px grey;
}

.grid-layout {
  width: 100%;
  background: #f1f1f1;
}

.editMode {
  position: relative !important;
  border: dotted 1px #ccc;
}

.editMode:hover .panelOverlay:only-child {
  background-color: #007bff4b;
}

.editMode:hover:only-child {
  border: dotted 1px #007bff99;
}

.item.editMode > div:only-child .vs-button.vs-button-danger {
  float: right !important;
  display: flex;
}

.item.editMode:hover > div:only-child .vs-button.vs-button-danger {
  display: block !important;
}

.widgetsPanelContent {
  display: none !important;
}

.editMode .row .colonne {
  border-right: dotted 1px #ccc;
}

.editMode .row .colonne:last-child {
  border-right: dotted 0px #ccc;
}

.editMode .colonne:hover .widgetsPanelContent {
  display: flex !important;
}
.item-title{
  margin-bottom:10px;
}
</style>

<style scoped>
@import url("../../../node_modules/bootstrap/dist/css/bootstrap-grid.css");
</style>
