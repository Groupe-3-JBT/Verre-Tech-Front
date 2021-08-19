exports.ids = [22];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);

const {
  reactiveProp
} = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"];
/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [reactiveProp],
  props: ['options'],

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }

});

/***/ })

};;
//# sourceMappingURL=LineChart.js.map