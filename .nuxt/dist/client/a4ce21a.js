(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1334:function(t,e,r){"use strict";r.r(e);r(22),r(21),r(20),r(31),r(19),r(32);var o=r(8),n=(r(53),r(60),r(189),r(29),r(16));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Summary",props:{},data:function(){return{order:null}},computed:c(c({user:function(){return this.$store.getters["auth/user"]}},Object(n.c)({totalPrice:"localStorage/price",getItemPrice:"localStorage/itemPrice",getOptionLivraison:"optionLivraison/optionLivraison",discountCode:"localStorage/discountCode"})),{},{ttcTotalProductPrice:function(){return parseFloat(this.totalPrice()).toFixed(2).replace(".",",")},listTva:function(){return this.order.cart.reduce((function(t,e){return(t[e.taxRule.value]=t[e.taxRule.value]||[]).push(e),t}),{})}}),created:function(){this.getOrder()},methods:c({downloadPdf:function(){var t=r(812).jsPDF;r(919),(new t).html(document.body,{callback:function(t){t.save("a4.pdf")},x:10,y:10})},getOrder:function(){},getTotalPriceHt:function(){var t=this;return parseFloat(this.order.cart.reduce((function(e,r){return e+parseFloat(t.getItemPrice(r)*r.itemQuantity)-parseFloat(t.getItemPrice(r)*r.itemQuantity)*r.taxRule.value/100}),0)).toFixed(2).replace(".",",")},getTva:function(t,e){var r=this;return parseFloat(t.reduce((function(t,o){return t+parseFloat(r.getItemPrice(o)*o.itemQuantity)*e/100}),0)).toFixed(2).replace(".",",")}},Object(n.d)({deleteItemFromCart:"localStorage/delete",setDiscountCode:"localStorage/setDiscountCode",removeDiscountCode:"localStorage/removeDiscountCode",addToCart:"localStorage/add",removeFromCart:"localStorage/remove"})),components:{}},v=(r(920),r(12)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("no-ssr",[o("div",{attrs:{id:"checkout"}},[t.order?o("div",{staticClass:"container cart"},[o("div",{staticClass:"row title"},[o("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.go(-1)}}},[o("img",{attrs:{src:r(192),alt:""}})]),t._v(" "),o("h1",[t._v(t._s("Commande du "+new Date(1e3*t.order.addDate.seconds).toLocaleDateString()))])]),t._v(" "),o("div",{staticClass:"row depots-items",staticStyle:{padding:"20px"}},["retrait"==t.order.mode?o("div",{staticClass:"column",staticStyle:{width:"50%"}},[o("div",{staticClass:"row"},[o("h3",{staticClass:"name"},[t._v("Adresse de retrait")])]),t._v(" "),o("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[o("label",{staticClass:"flex"},[o("div",[o("p",{staticClass:"name"},[o("span",[t._v(t._s(t.order.warehouse.label))])]),t._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:r(571)}}),t._v(" "),o("p",[t._v(t._s(t.order.warehouse.address))])]),t._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:r(328)}}),t._v(" "),o("p",{staticClass:"tel"},[t._v(t._s(t.order.warehouse.phone))])]),t._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:r(593)}}),t._v(" "),o("p",[t._v(t._s(t.order.warehouse.hours))])])])])])]):o("div",{staticClass:"column",staticStyle:{width:"50%"}},[o("div",{staticClass:"row"},[o("h3",{staticClass:"name"},[t._v("Adresse de livraison")])]),t._v(" "),o("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[o("label",{staticClass:"flex"},[o("div",[o("div",{staticClass:"flex"},[o("p",[t._v(t._s(t.order.deliveryAddress.firstName+" "+t.order.deliveryAddress.lastName))])]),t._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:r(571)}}),t._v(" "),o("p",[t._v(t._s(t.order.deliveryAddress.address))])]),t._v(" "),o("div",{staticClass:"flex"},[o("p",{staticClass:"tel"},[t._v(t._s(t.order.deliveryAddress.zipCode+" "+t.order.deliveryAddress.city))])]),t._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:r(328)}}),t._v(" "),o("p",[t._v(t._s(t.order.deliveryAddress.phone))])])])])])]),t._v(" "),o("div",{staticClass:"column",staticStyle:{width:"50%"}},[o("div",{staticClass:"row"},[o("h3",{staticClass:"name"},[t._v("Adresse de facturation")])]),t._v(" "),o("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[o("label",{staticClass:"flex"},[o("div",[o("div",{staticClass:"flex"},[o("p",[t._v(t._s(t.order.billingAddress.firstName+" "+t.order.billingAddress.lastName))])]),t._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:r(571)}}),t._v(" "),o("p",[t._v(t._s(t.order.billingAddress.address))])]),t._v(" "),o("div",{staticClass:"flex"},[o("p",{staticClass:"tel"},[t._v(t._s(t.order.billingAddress.zipCode+" "+t.order.billingAddress.city))])]),t._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:r(328)}}),t._v(" "),o("p",[t._v(t._s(t.order.billingAddress.phone))])])])])])])]),t._v(" "),o("table",{staticClass:"list-article"},[o("tr",[o("th",[t._v("Produits")]),t._v(" "),o("th",[t._v("Prix unitaire")]),t._v(" "),o("th",{staticClass:"align-center"},[t._v("Quantité")]),t._v(" "),o("th",[t._v("Total")]),t._v(" "),o("th")]),t._v(" "),t._l(t.order.cart,(function(e,i){return o("tr",{key:i,attrs:{item:e}},[o("NuxtLink",{attrs:{to:"/produits/"+e.route}},[o("td",[o("img",{attrs:{src:e.imgList[0].download,alt:""}}),t._v(" "),o("div",[o("h3",[t._v(t._s(e.name))]),t._v(" "),o("p",[t._v("\n                Conditionnement :\n                "+t._s(e.customVarProduct[e.conditionnement]?e.customVarProduct[e.conditionnement].td[0].value:e.customVarProduct[0].td[0].value)+"\n              ")])])])]),t._v(" "),o("td",[o("p",[t._v(t._s(e.price)+"€")])]),t._v(" "),o("td",[o("div",{staticClass:"flex justify-center"},[o("span",[t._v("\n                "+t._s(e.itemQuantity)+"\n              ")])])]),t._v(" "),o("td",[o("p",[t._v(t._s((e.price*e.itemQuantity).toFixed(2))+"€")])]),t._v(" "),o("td")],1)}))],2),t._v(" "),o("ul",{staticClass:"list-article-mobile"},t._l(t.order.cart,(function(e,i){return o("li",{key:i,attrs:{item:e}},[o("div",{staticStyle:{display:"flex","align-items":"center"}},[o("NuxtLink",{attrs:{to:"/produits/"+e.route}},[o("img",{attrs:{src:e.imgList[0].download,alt:"image de l'article"}})]),t._v(" "),o("div",{staticClass:"column"},[o("p",{staticClass:"titre"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"row"},[o("p",[t._v("Conditionnement :")]),t._v(" "),o("p",[t._v(t._s(e.customVarProduct[e.conditionnement]?e.customVarProduct[e.conditionnement].td[0].value:e.customVarProduct[0].td[0].value))])]),t._v(" "),o("div",{staticClass:"row"},[o("p",[t._v("Prix unitaire :")]),t._v(" "),o("p",[t._v(t._s(t.getItemPrice(e).replace(".",","))+"€")])]),t._v(" "),o("div",{staticClass:"row"},[o("p",[t._v("Quantité :")]),t._v(" "),o("div",{staticClass:"flex",staticStyle:{"justify-content":"flex-end"}},[e.itemQuantity>1?o("p",{staticClass:"quantity-item-change",on:{click:function(r){return t.removeFromCart(e)}}},[t._v("-")]):o("p",{staticClass:"quantity-item-change",on:{click:function(r){return t.deleteItemFromCart(e)}}},[t._v("suppr")]),t._v(" "),o("p",[t._v(t._s(e.itemQuantity))]),t._v(" "),o("p",{staticClass:"quantity-item-change",on:{click:function(r){return t.addToCart(e)}}},[t._v("+")])])]),t._v(" "),o("div",{staticClass:"row row-sum"},[o("p",[t._v("Total TTC :")]),t._v(" "),o("p",[t._v(t._s((t.getItemPrice(e)*e.itemQuantity).toFixed(2).replace(".",","))+"€")])])])],1)])})),0),t._v(" "),o("div",{staticClass:"cart-footer"},[o("div",{staticClass:"zone-promo"},[o("button",{staticClass:"button",on:{click:function(e){return t.downloadPdf()}}},[t._v("Télécharger ma facture")])]),t._v(" "),o("div",{staticClass:"zone-totaux"},[o("div",{staticClass:"ligne-total dashed"},[o("p",[t._v("Status de la commande")]),t._v(" "),o("h3",{staticClass:"orangeText"},[t._v(t._s(t.order.status))])]),t._v(" "),o("div",{staticClass:"ligne-total dashed"},[o("p",[t._v("Nombre de produit")]),t._v(" "),o("p",[t._v(t._s(t.order.cart.map((function(t){return t.itemQuantity})).reduce((function(t,e){return t+e}))))])]),t._v(" "),t.discountCode.amount&&t.discountCode.type?o("div",{staticClass:"ligne-subtotal dashed"},[o("p",[t._v("Total des produits HT")]),t._v(" "),o("p",[t._v(t._s(t.totalPrice(!1)))])]):t._e(),t._v(" "),t.order.discountCode.amount&&t.discountCode.type?o("div",{staticClass:"ligne-total dashed"},[o("p",[t._v("Code promotionnel")]),t._v(" "),o("div",{staticClass:"row"},[o("p",{staticStyle:{"margin-top":"5px"}},[t._v("-"+t._s(t.order.discountCode.amount+t.order.discountCode.type))])])]):t._e(),t._v(" "),o("div",{staticClass:"ligne-subtotal dashed"},[o("p",[t._v("Total HT")]),t._v(" "),o("p",[t._v(t._s(t.getTotalPriceHt())+"€")])]),t._v(" "),t._l(t.listTva,(function(e,i){return o("div",{key:i,staticClass:"ligne-total"},[o("p",[t._v("TVA "+t._s(e[0].taxRule.value)+" %")]),t._v(" "),o("p",[t._v(t._s(t.getTva(e,e[0].taxRule.value))+"€")])])})),t._v(" "),o("div",{staticClass:"ligne-total-ttc"},[o("p",[t._v("Total TTC")]),t._v(" "),o("p",[t._v(t._s(t.order.totalTTC)+"€")])])],2)])]):t._e()])])}),[],!1,null,"1f831e06",null);e.default=component.exports},571:function(t,e,r){t.exports=r.p+"img/pin.4de6e11.svg"},593:function(t,e,r){t.exports=r.p+"img/clock.0b6170e.svg"},813:function(t,e,r){var content=r(921);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("19a779c2",content,!0,{sourceMap:!1})},920:function(t,e,r){"use strict";r(813)},921:function(t,e,r){var o=r(47),n=r(338),l=r(339),c=o(!1),d=n(l);c.push([t.i,'.title[data-v-1f831e06]{margin-bottom:2rem}.title img[data-v-1f831e06]{width:30px;margin-right:1rem}.title h1[data-v-1f831e06]{width:100vw;color:var(--color1);font-weight:400;height:30px}.button[data-v-1f831e06],.title h1[data-v-1f831e06]{align-items:center;display:flex}.button[data-v-1f831e06]{background-color:var(--color1);width:50%;border:2px solid var(--color1);color:var(--color2);padding:.5rem 1rem;font-size:1.2rem;text-transform:uppercase;border-radius:10px;font-family:var(--font1);outline:none;cursor:pointer;position:relative;text-align:center;justify-content:center;flex-direction:row}.button[data-v-1f831e06],.button[data-v-1f831e06]:hover{transition:all .3s ease-in-out}.button[data-v-1f831e06]:hover{background-color:transparent;color:var(--color1);border:2px solid var(--color1)}.orangeText[data-v-1f831e06]{color:var(--color1);font-size:1.1rem;font-weight:500}.depots-items li[data-v-1f831e06]{content:"";width:50px;height:50px;background:url('+d+");background-repeat:no-repeat;background-position:100%;background-size:100% auto;top:.5rem;right:1rem;display:block;position:absolute}.depots-items p[data-v-1f831e06]{line-height:1.2rem;font-weight:300;margin-bottom:.25rem}.depots-items .name[data-v-1f831e06]{font-size:1.2rem}.depots-items .name[data-v-1f831e06],.depots-items .tel[data-v-1f831e06]{color:var(--color1);font-weight:500}.depots-items img[data-v-1f831e06]{width:20px;filter:invert(0) sepia(84%) saturate(7500%) hue-rotate(207deg) brightness(0) contrast(114%);margin-right:10px}",""]),t.exports=c}}]);