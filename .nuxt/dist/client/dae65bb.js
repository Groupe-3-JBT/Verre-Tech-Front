(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1335:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logos"},[t("img",{attrs:{src:r(922)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"cart",attrs:{id:"AddBtn"}},[t("img",{attrs:{src:r(550)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"cart",attrs:{id:"AddBtn"}},[t("img",{attrs:{src:r(550)}})])}],c=(r(22),r(21),r(20),r(31),r(19),r(32),r(8)),n=(r(332),r(53),r(60),r(770),r(87),r(189),r(23),r(76),r(29),r(88),r(16)),l=r(4),d=r.n(l),m=r(1),h=r(549),f=r.n(h);r(552);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}m.a.component("v-select",f.a);r(561);var _={data:function(){return{deliveryAreasList:[],searchText:"",geolocation:null,citiesList:[],product:{metaTitle:"",metaDescription:""},depots:["Entrepot de Mitry-Mory","Entrepot de Le Pontet","Entrepot d'Angoulème","Entrepot d'Ipres","Boutique de Lille","Boutique de Versailles","Boutique de Toulon","Boutique de Bordeaux","Boutique de Nantes","Boutique de Lyon"],loadedProduct:!1,conditionnementSelected:0,customVarList:[],tabSelect:"Présentation",loadedCustomVar:!1,customVarParams:[],zones:[],zipCode:"",cacheCity:[],deliveryMode:"depot",deliveryAgency:"Dépot de Maison-Alfort",deliveryToDomicile:!1,records:[{id:"rec1E6ZZvl74yoaOd",fields:{TVA:10,"Catégorie":"pare-douche",Nom:"Vitre De Douche",Prix:70,Description:"Une vitre mais pour les douches",Image:[{id:"attl5cgbRmUfbL7Q6",width:700,height:700,url:"https://dl.airtable.com/.attachments/0684be7e5343c2efe0b9438b7bc08ebd/9863af87/pare-douche-paroi-de-douche-150x200cm-en-verre-b.jpg",filename:"pare-douche-paroi-de-douche-150x200cm-en-verre-b.jpg",size:22996,type:"image/jpeg",thumbnails:{small:{url:"https://dl.airtable.com/.attachmentThumbnails/f0c00e3e15f2b2fcd12a30e2d0fb12e7/8f4f3e18",width:36,height:36},large:{url:"https://dl.airtable.com/.attachmentThumbnails/b3cfaf3dc49fe51bbb4be0f8b92d1128/1b4e9cc5",width:512,height:512},full:{url:"https://dl.airtable.com/.attachmentThumbnails/73ecc73fe7af6c12d1335530bae52ef8/eaa9d889",width:3e3,height:3e3}}}]},createdTime:"2021-08-17T14:12:33.000Z"},{id:"recXwlY9n8GdNHO7m",fields:{TVA:10,"Catégorie":"inserts-de-cheminee",Nom:"Insert Cheminée",Prix:250,Description:"C'est pratique pour empêcher votre maison de prendre feu",Image:[{id:"attMLku4d7gsSCrAL",width:640,height:360,url:"https://dl.airtable.com/.attachments/813187a15b31845d599b5e3d55ae9dbd/3c3bdc7c/un-insert-pour-diffuser-rapidement-la-chaleur_5121222.jpg",filename:"un-insert-pour-diffuser-rapidement-la-chaleur_5121222.jpg",size:35378,type:"image/jpeg",thumbnails:{small:{url:"https://dl.airtable.com/.attachmentThumbnails/895155e092c7af0d37a02bb901eed656/e113ae70",width:64,height:36},large:{url:"https://dl.airtable.com/.attachmentThumbnails/f61dfa743fc62fd5643e70a288164906/8d8d6d01",width:640,height:360},full:{url:"https://dl.airtable.com/.attachmentThumbnails/bb74926a124d13337251d7edac177903/ccc6d416",width:3e3,height:3e3}}}]},createdTime:"2021-08-17T14:27:39.000Z"},{id:"recjTp3cQiVdDWb14",fields:{TVA:10,"Catégorie":"cloisons-parois",Nom:"Vitre Simple",Prix:40.5,Description:"Une vitre plutôt simple mais ma foi très jolie",Image:[{id:"att3qKBgeauyKAQbR",width:648,height:741,url:"https://dl.airtable.com/.attachments/0074e5e2bb93f48b9a3efeddcde828d4/36b18def/vitrier.jpg",filename:"vitrier.jpg",size:121607,type:"image/jpeg",thumbnails:{small:{url:"https://dl.airtable.com/.attachmentThumbnails/76574ac42c24bb37f7611dc98326dd19/1b72465a",width:31,height:36},large:{url:"https://dl.airtable.com/.attachmentThumbnails/bd95e8a206f7421268719c4b78c064b0/c48a7c68",width:512,height:585},full:{url:"https://dl.airtable.com/.attachmentThumbnails/e6ba7768cf790d3777f2f172f25b6450/6f9cf2f3",width:3e3,height:3e3}}}]},createdTime:"2021-08-17T14:12:33.000Z"},{id:"recq1iyRiTB6zAN0s",fields:{TVA:10,"Catégorie":"cloisons-parois",Nom:"Baie Vitrée",Prix:400,Description:"Une baie mais vitéee",Image:[{id:"attyx11dsn2RM4W0h",width:607,height:437,url:"https://dl.airtable.com/.attachments/3ff4bde1151c8a9aae82f73e4120fd9d/d89aaf3a/xslider-3.jpg.pagespeed.ic.v8aDvy9z5F.jpg",filename:"xslider-3.jpg.pagespeed.ic.v8aDvy9z5F.jpg",size:66172,type:"image/jpeg",thumbnails:{small:{url:"https://dl.airtable.com/.attachmentThumbnails/15d85ec442a07ab8e39e76b1a271085d/fb72bcd2",width:50,height:36},large:{url:"https://dl.airtable.com/.attachmentThumbnails/ae6c69bb0416770ac72c6988dc01c9aa/53854dac",width:607,height:437},full:{url:"https://dl.airtable.com/.attachmentThumbnails/39e8b8276e8db24c8218fb45ccedf0ab/f4bf16da",width:3e3,height:3e3}}}]},createdTime:"2021-08-17T14:23:15.000Z"}]}},head:function(){return{title:this.product.metaTitle?this.product.metaTitle:"Grand Paris Combustibles",meta:[{hid:this.$route.params.route,name:"description",content:this.product.metaDescription?this.product.metaDescription:"Numéro 1 sur le combustible de chauffage en Ile de France"}]}},mounted:function(){this.getProduct()},methods:y(y(y({},Object(n.d)({addToCart:"localStorage/add",removeFromCart:"localStorage/remove",deleteItemFromCart:"localStorage/delete",setOptionLivraison:"optionLivraison/setOptionLivraison"})),{},{checkLocation:function(){for(var e=this,t={mode:"",zone:null,depot:null},r=null,i=0;i<this.deliveryAreasList.length;i++){var area=this.deliveryAreasList[i];if(area.cities.find((function(t){return t.label.toUpperCase().replaceAll("-"," ").normalize("NFD").replace(/[\u0300-\u036f]/g,"")==e.geolocation.nom.toUpperCase().replaceAll("-"," ").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}))){r=JSON.parse(JSON.stringify(area));break}}delete r.cities,t.mode="livraison",t.zone={id:r.id,label:r.label,minAmount:r.minAmount,zipCode:this.searchText,city:this.geolocation.nom.toUpperCase().replaceAll("-"," ").normalize("NFD").replace(/[\u0300-\u036f]/g,"")},this.setOptionLivraison(t)},setDeliveryMode:function(){"depot"==this.deliveryMode&&this.setOptionLivraison(y(y({},this.getOptionLivraison),{},{depot:this.deliveryAgency,mode:"retrait"}))},openPanel:function(){var e="sidebar-cart";d()("body").addClass("stopScroll"),d()("#"+e).css("animation","slideIn 1s forwards"),d()("#"+e).css("display","block"),d()("#"+e+".sidebar-content").css("right","0")},addItem:function(){this.addToCart(y(y({},this.product),{},{conditionnement:this.conditionnementSelected})),this.setDeliveryMode(),this.openPanel(),d()("#AddBtn").addClass("move-icone-cart"),setTimeout((function(){d()("#AddBtn").removeClass("move-icone-cart")}),900)}},Object(n.c)({popupVisible:"popup/isVisible",popupMode:"popup/getMode"})),{},{getProduct:function(){var e=this;this.product=this.records.find((function(t){return t.id==e.$route.params.route})),this.loadedProduct=!0,console.log(this.product)}}),computed:y(y({selectedItems:function(){return this.$store.getters["localStorage/items"]}},Object(n.c)({getOptionLivraison:"optionLivraison/optionLivraison"})),{},{calculPrix:function(){if("depot"==this.deliveryMode)return parseFloat(this.product.fields.Prix.toString().replace(/,/,".")).toFixed(2)}})},w=(r(924),r(12)),component=Object(w.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"productPage"}},[e.loadedProduct?o("main",{staticClass:"page-produit"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row title"},[o("div",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.$router.go(-1)}}},[o("img",{attrs:{src:r(192),alt:""}})]),e._v(" "),o("h1",[e._v(e._s(e.product.fields.Nom))])]),e._v(" "),o("div",{staticClass:"row presentation"},[o("div",{staticClass:"column fiche"},[o("div",{staticClass:"column images"},[o("img",{staticClass:"produit",attrs:{src:e.product.fields.Image[0].url,alt:"Image"}}),e._v(" "),e._m(0)])]),e._v(" "),o("div",{staticClass:"column commande"},[o("div",[o("form",{staticClass:"column",attrs:{action:""}},[o("label",[e._v("Mode de commande :")]),e._v(" "),o("div",{staticClass:"row"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryMode,expression:"deliveryMode"}],attrs:{type:"radio",id:"depot",name:"mode-commande",value:"depot",checked:""},domProps:{checked:e._q(e.deliveryMode,"depot")},on:{change:function(t){e.deliveryMode="depot"}}}),e._v(" "),o("label",{staticClass:"label-mode",attrs:{for:"depot"}},[e._v("Retrait en dépôt")])]),e._v(" "),"depot"==e.deliveryMode?o("select",{directives:[{name:"model",rawName:"v-model",value:e.deliveryAgency,expression:"deliveryAgency"}],attrs:{name:"lieu",id:"livraison"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.deliveryAgency=t.target.multiple?r:r[0]}}},e._l(e.depots,(function(element,t){return o("option",{key:t},[e._v("\n                  "+e._s(element)+"\n                ")])})),0):e._e()]),e._v(" "),e.calculPrix>0?o("div",{staticClass:"row total"},[o("p",[e._v("Votre prix :")]),e._v(" "),o("p",[e._v("\n                "+e._s(this.calculPrix)+"\n                TTC\n              ")])]):e._e(),e._v(" "),e.calculPrix>0?o("button",{staticClass:"row add-cart",staticStyle:{cursor:"pointer"},on:{click:function(t){return t.preventDefault(),e.addItem()}}},[o("p",[e._v("Ajouter au panier")]),e._v(" "),e._m(1)]):o("button",{staticClass:"row add-cart",staticStyle:{"background-color":"grey"}},[o("p",[e._v("Indisponible")]),e._v(" "),e._m(2)])])])]),e._v(" "),o("div",{staticClass:"row details"},[o("div",{staticClass:"column caracteristiques"},[o("div",{staticClass:"flex"},[o("h2",{class:"Présentation"==e.tabSelect?"active":"unactive",on:{click:function(t){e.tabSelect="Présentation"}}},[e._v("\n              Présentation\n            ")])]),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:"Présentation"==e.tabSelect,expression:"tabSelect == 'Présentation'"}],domProps:{innerHTML:e._s(e.product.fields.Description)}})])])])]):e._e()])}),o,!1,null,null,null);t.default=component.exports},550:function(e,t,r){e.exports=r.p+"img/cart-w.997f428.svg"},814:function(e,t,r){var content=r(925);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("56fbdec4",content,!0,{sourceMap:!1})},922:function(e,t,r){e.exports=r.p+"img/logos.722fa8d.png"},924:function(e,t,r){"use strict";r(814)},925:function(e,t,r){var o=r(47)(!1);o.push([e.i,".vs--searchable .vs__dropdown-toggle{background-color:var(--color2);padding:0;outline:none;border:0}",""]),e.exports=o}}]);