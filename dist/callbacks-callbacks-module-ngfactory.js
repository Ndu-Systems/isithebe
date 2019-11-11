(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["callbacks-callbacks-module-ngfactory"],{

/***/ "./src/app/views/callbacks/callbacks.module.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.module.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: CallbacksModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbacksModuleNgFactory", function() { return CallbacksModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _callbacks_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callbacks.module */ "./src/app/views/callbacks/callbacks.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _list_callbacks_list_callbacks_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-callbacks/list-callbacks.component.ngfactory */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/progressspinner/progressspinner */ "./node_modules/primeng/components/progressspinner/progressspinner.js");
/* harmony import */ var primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_modules_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/modules/spinner/spinner.module */ "./src/app/shared/modules/spinner/spinner.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _callbacks_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./callbacks.routing */ "./src/app/views/callbacks/callbacks.routing.ts");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/components/chart/chart */ "./node_modules/primeng/components/chart/chart.js");
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/components/growl/growl */ "./node_modules/primeng/components/growl/growl.js");
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/components/button/button */ "./node_modules/primeng/components/button/button.js");
/* harmony import */ var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_components_button_button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/components/common/shared */ "./node_modules/primeng/components/common/shared.js");
/* harmony import */ var primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/components/confirmdialog/confirmdialog */ "./node_modules/primeng/components/confirmdialog/confirmdialog.js");
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/components/schedule/schedule */ "./node_modules/primeng/components/schedule/schedule.js");
/* harmony import */ var primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/components/blockui/blockui */ "./node_modules/primeng/components/blockui/blockui.js");
/* harmony import */ var primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _list_callbacks_list_callbacks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./list-callbacks/list-callbacks.component */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var CallbacksModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_callbacks_module__WEBPACK_IMPORTED_MODULE_1__["CallbacksModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _list_callbacks_list_callbacks_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ListCallbacksComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_7__["ProgressSpinnerModule"], primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_7__["ProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_8__["SpinnerModule"], _shared_modules_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_8__["SpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _callbacks_routing__WEBPACK_IMPORTED_MODULE_10__["CallbacksRoutes"], _callbacks_routing__WEBPACK_IMPORTED_MODULE_10__["CallbacksRoutes"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"], _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_14__["GrowlModule"], primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_14__["GrowlModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_button_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"], primeng_components_button_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogModule"], primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_18__["ScheduleModule"], primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_18__["ScheduleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_19__["BlockUIModule"], primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_19__["BlockUIModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _callbacks_module__WEBPACK_IMPORTED_MODULE_1__["CallbacksModule"], _callbacks_module__WEBPACK_IMPORTED_MODULE_1__["CallbacksModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", component: _list_callbacks_list_callbacks_component__WEBPACK_IMPORTED_MODULE_20__["ListCallbacksComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/views/callbacks/callbacks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.module.ts ***!
  \*****************************************************/
/*! exports provided: CallbacksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbacksModule", function() { return CallbacksModule; });
var CallbacksModule = /** @class */ (function () {
    function CallbacksModule() {
    }
    return CallbacksModule;
}());



/***/ }),

/***/ "./src/app/views/callbacks/callbacks.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.routing.ts ***!
  \******************************************************/
/*! exports provided: CallbacksRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbacksRoutes", function() { return CallbacksRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-callbacks */ "./src/app/views/callbacks/list-callbacks/index.ts");


var routes = [
    { path: '', component: _list_callbacks__WEBPACK_IMPORTED_MODULE_1__["ListCallbacksComponent"] },
];
var CallbacksRoutes = /** @class */ (function () {
    function CallbacksRoutes() {
    }
    return CallbacksRoutes;
}());



/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/index.ts ***!
  \*********************************************************/
/*! exports provided: ListCallbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_callbacks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-callbacks.component */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListCallbacksComponent", function() { return _list_callbacks_component__WEBPACK_IMPORTED_MODULE_0__["ListCallbacksComponent"]; });




/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/list-callbacks.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_ListCallbacksComponent, View_ListCallbacksComponent_0, View_ListCallbacksComponent_Host_0, ListCallbacksComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListCallbacksComponent", function() { return RenderType_ListCallbacksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListCallbacksComponent_0", function() { return View_ListCallbacksComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListCallbacksComponent_Host_0", function() { return View_ListCallbacksComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCallbacksComponentNgFactory", function() { return ListCallbacksComponentNgFactory; });
/* harmony import */ var _list_callbacks_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-callbacks.component.scss.shim.ngstyle */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/spinner/spinner.component.ngfactory */ "./src/app/shared/modules/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _shared_modules_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/spinner/spinner.component */ "./src/app/shared/modules/spinner/spinner.component.ts");
/* harmony import */ var _pipes_call_status_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/call-status.pipe */ "./src/app/views/callbacks/pipes/call-status.pipe.ts");
/* harmony import */ var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component.ngfactory */ "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
/* harmony import */ var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */ "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js");
/* harmony import */ var _list_callbacks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-callbacks.component */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts");
/* harmony import */ var _shared_services_select_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/select.service */ "./src/app/shared/services/select.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_ListCallbacksComponent = [_list_callbacks_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ListCallbacksComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ListCallbacksComponent, data: { "animation": [{ type: 7, name: "routerTransition", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { transform: "translateY(100%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { transform: "translateY(0%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }], options: {} }] } });

function View_ListCallbacksComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "call-status ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.CallDate)), ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.Name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.Cellphone; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.CallDate; _ck(_v, 8, 0, currVal_3); }); }
function View_ListCallbacksComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cell phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Call Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 4, null, View_ListCallbacksComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { itemsPerPage: 0, currentPage: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).transform(_v.context.ngIf, _co.searchText)), _ck(_v, 13, 0, 10, _co.p))); _ck(_v, 11, 0, currVal_0); }, null); }
function View_ListCallbacksComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-spinner", [], null, null, null, _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_modules_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ListCallbacksComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_call_status_pipe__WEBPACK_IMPORTED_MODULE_7__["CallStatusPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 35, "div", [], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Policies "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderComponent"], [], { heading: [0, "heading"], icon: [1, "icon"], menus: [2, "menus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 31, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 30, "div", [["class", "col col-xl-12 col-lg-12 col-md-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 29, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 13, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 10, "div", [["class", "input-group mb-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "li", [["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Search"], ["class", "form-control"], ["placeholder", "Search..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.searchText = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](19, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 14, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ListCallbacksComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["loading", 2]], null, 0, null, View_ListCallbacksComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "span", [["class", "call-status orange"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, [" Call requested less that ", " days ago. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "span", [["class", "call-status red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, [" Call requested more that ", " days ago. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "div", [["class", "justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "pagination-controls", [], null, [[null, "pageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = ((_co.p = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], [], null, { pageChange: "pageChange" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Call-Backs"; var currVal_2 = "fa-phone"; var currVal_3 = _co.menus; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3); var currVal_11 = _co.searchText; var currVal_12 = _ck(_v, 19, 0, true); _ck(_v, 18, 0, currVal_11, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).transform(_co.callbacks$)); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26); _ck(_v, 24, 0, currVal_13, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 1, 0, currVal_0); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending; _ck(_v, 15, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_15 = _co.numberOfDays; _ck(_v, 29, 0, currVal_15); var currVal_16 = _co.numberOfDays; _ck(_v, 32, 0, currVal_16); }); }
function View_ListCallbacksComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-list-callbacks", [], null, null, null, View_ListCallbacksComponent_0, RenderType_ListCallbacksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _list_callbacks_component__WEBPACK_IMPORTED_MODULE_12__["ListCallbacksComponent"], [_shared_services_select_service__WEBPACK_IMPORTED_MODULE_13__["SelectService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListCallbacksComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-list-callbacks", _list_callbacks_component__WEBPACK_IMPORTED_MODULE_12__["ListCallbacksComponent"], View_ListCallbacksComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/list-callbacks.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".call-status[_ngcontent-%COMP%]{height:10px;width:10px;border-radius:10px;display:inline-block;margin-top:20px}.call-status[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{background:#c0392b}.call-status[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%]{background:#e67e22}"];



/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListCallbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCallbacksComponent", function() { return ListCallbacksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");



var ListCallbacksComponent = /** @class */ (function () {
    function ListCallbacksComponent(selectService) {
        this.selectService = selectService;
        this.numberOfDays = _shared_config__WEBPACK_IMPORTED_MODULE_2__["CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS"];
        this.callbacks$ = this.selectService.select("callbacks where StatusId = 1");
    }
    ListCallbacksComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' }
        ];
    };
    return ListCallbacksComponent;
}());



/***/ }),

/***/ "./src/app/views/callbacks/pipes/call-status.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/callbacks/pipes/call-status.pipe.ts ***!
  \***********************************************************/
/*! exports provided: CallStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallStatusPipe", function() { return CallStatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");


var CallStatusPipe = /** @class */ (function () {
    function CallStatusPipe() {
    }
    CallStatusPipe.prototype.transform = function (value) {
        var today = new Date();
        var diff = this.date_diff_indays(value, today);
        diff++;
        if (!diff)
            return "none";
        if (diff < _shared_config__WEBPACK_IMPORTED_MODULE_1__["CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS"])
            return "orange";
        if (diff >= _shared_config__WEBPACK_IMPORTED_MODULE_1__["CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS"])
            return "red";
    };
    CallStatusPipe.prototype.date_diff_indays = function (date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    };
    return CallStatusPipe;
}());



/***/ })

}]);
//# sourceMappingURL=callbacks-callbacks-module-ngfactory.js.map