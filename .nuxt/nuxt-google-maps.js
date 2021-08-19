import Vue from 'vue';
import GMap from "\u002FApplications\u002FMAMP\u002Fhtdocs\u002FVerre-Tech-Front\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMap.vue";
import GMapMarker from "\u002FApplications\u002FMAMP\u002Fhtdocs\u002FVerre-Tech-Front\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMapMarker.vue";
import GMapCircle from "\u002FApplications\u002FMAMP\u002Fhtdocs\u002FVerre-Tech-Front\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMapCircle.vue";
import GMapInfoWindow from "\u002FApplications\u002FMAMP\u002Fhtdocs\u002FVerre-Tech-Front\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "AIzaSyCCbUTAKTJzn7n6TumBfTir_GU9AKBIHsw", loaded: false, libraries: undefined})
}