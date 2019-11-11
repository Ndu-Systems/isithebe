(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policies-policies-module-ngfactory"],{

/***/ "./src/app/services/policy/policy.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/policy/policy.service.ts ***!
  \***************************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var PolicyService = /** @class */ (function () {
    function PolicyService(http) {
        this.http = http;
        this.url = _shared_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"];
    }
    PolicyService.prototype.addPolicy = function (data) {
        return this.http.post(this.url + "/policy/add-policy.php", data);
    };
    PolicyService.prototype.editPolicy = function (data) {
        return this.http.post(this.url + "/policy/edit-policy.php", data);
    };
    PolicyService.prototype.addBenefitToApolicy = function (data) {
        return this.http.post(this.url + "/policy/add-benefits-to-policy.php", data);
    };
    PolicyService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function PolicyService_Factory() { return new PolicyService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: PolicyService, providedIn: "root" });
    return PolicyService;
}());



/***/ }),

/***/ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: RenderType_AddBenefityToPolicyComponent, View_AddBenefityToPolicyComponent_0, View_AddBenefityToPolicyComponent_Host_0, AddBenefityToPolicyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AddBenefityToPolicyComponent", function() { return RenderType_AddBenefityToPolicyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddBenefityToPolicyComponent_0", function() { return View_AddBenefityToPolicyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddBenefityToPolicyComponent_Host_0", function() { return View_AddBenefityToPolicyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBenefityToPolicyComponentNgFactory", function() { return AddBenefityToPolicyComponentNgFactory; });
/* harmony import */ var _add_benefity_to_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-benefity-to-policy.component.scss.shim.ngstyle */ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/primeng/components/growl/growl.ngfactory */ "./node_modules/primeng/components/growl/growl.ngfactory.js");
/* harmony import */ var primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
/* harmony import */ var primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/growl/growl */ "./node_modules/primeng/components/growl/growl.js");
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_primeng_components_confirmdialog_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../node_modules/primeng/components/confirmdialog/confirmdialog.ngfactory */ "./node_modules/primeng/components/confirmdialog/confirmdialog.ngfactory.js");
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/confirmdialog/confirmdialog */ "./node_modules/primeng/components/confirmdialog/confirmdialog.js");
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/components/common/confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component.ngfactory */ "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
/* harmony import */ var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-benefity-to-policy.component */ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_select_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/select.service */ "./src/app/shared/services/select.service.ts");
/* harmony import */ var _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/policy/policy.service */ "./src/app/services/policy/policy.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_AddBenefityToPolicyComponent = [_add_benefity_to_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AddBenefityToPolicyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AddBenefityToPolicyComponent, data: { "animation": [{ type: 7, name: "routerTransition", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { transform: "translateY(100%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { transform: "translateY(0%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }], options: {} }] } });

function View_AddBenefityToPolicyComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["class", "btn rounded-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.add(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.Amount, "R", true)); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fo-", _v.context.$implicit.StatusId, ""); _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.Description; _ck(_v, 5, 0, currVal_2); }); }
function View_AddBenefityToPolicyComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 4, null, View_AddBenefityToPolicyComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, { itemsPerPage: 0, currentPage: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).transform(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).transform(_v.parent.context.ngIf, _co.searchText)), _ck(_v, 11, 0, 10, _co.p))); _ck(_v, 9, 0, currVal_0); }, null); }
function View_AddBenefityToPolicyComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "alert alert-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" No Policy found for ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.client.FirstName; _ck(_v, 2, 0, currVal_0); }); }
function View_AddBenefityToPolicyComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddBenefityToPolicyComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["nobefits", 2]], null, 0, null, View_AddBenefityToPolicyComponent_4))], function (_ck, _v) { var currVal_0 = ((_v.context.ngIf == null) ? null : _v.context.ngIf.length); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AddBenefityToPolicyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "p-growl", [], null, [[null, "valueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = ((_co.msgs = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_Growl_0"], _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_Growl"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4636672, null, 0, primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_7__["Growl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__["MessageService"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { value: [0, "value"] }, { valueChange: "valueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "p-confirmDialog", [["header", "Confirmation"], ["icon", "pi pi-exclamation-triangle"], ["width", "425"]], null, null, null, _node_modules_primeng_components_confirmdialog_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ConfirmDialog_0"], _node_modules_primeng_components_confirmdialog_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ConfirmDialog"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 1, primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialog"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { header: [0, "header"], icon: [1, "icon"], width: [2, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { footer: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "row"]], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__["PageHeaderComponent"], [], { heading: [0, "heading"], icon: [1, "icon"], menus: [2, "menus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 21, "div", [["class", "col col-xl-12 col-lg-12 col-md-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 14, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" Select Benefit for ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 10, "div", [["class", "input-group mb-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "li", [["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 6, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Search"], ["class", "form-control"], ["placeholder", "Search..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.searchText = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 4, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "div", [["class", "col-lg-10 offset-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_AddBenefityToPolicyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.msgs; _ck(_v, 3, 0, currVal_0); var currVal_1 = "Confirmation"; var currVal_2 = "pi pi-exclamation-triangle"; var currVal_3 = "425"; _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3); var currVal_5 = "Add Benefit to a  policy"; var currVal_6 = "fa-plus"; var currVal_7 = _co.menus; _ck(_v, 10, 0, currVal_5, currVal_6, currVal_7); var currVal_16 = _co.searchText; var currVal_17 = _ck(_v, 25, 0, true); _ck(_v, 24, 0, currVal_16, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).transform(_co.benefits$)); var currVal_19 = _co.loadingBenefits; _ck(_v, 31, 0, currVal_18, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = undefined; _ck(_v, 8, 0, currVal_4); var currVal_8 = _co.policy.Description; _ck(_v, 16, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 21, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }); }
function View_AddBenefityToPolicyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-benefity-to-policy", [], null, null, null, View_AddBenefityToPolicyComponent_0, RenderType_AddBenefityToPolicyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_15__["AddBenefityToPolicyComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _shared_services_select_service__WEBPACK_IMPORTED_MODULE_17__["SelectService"], primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"], _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_18__["PolicyService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddBenefityToPolicyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-benefity-to-policy", _add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_15__["AddBenefityToPolicyComponent"], View_AddBenefityToPolicyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.scss.shim.ngstyle.js":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddBenefityToPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBenefityToPolicyComponent", function() { return AddBenefityToPolicyComponent; });
/* harmony import */ var _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/policy/policy.service */ "./src/app/services/policy/policy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");






var AddBenefityToPolicyComponent = /** @class */ (function () {
    function AddBenefityToPolicyComponent(router, selectService, confirmationService, policyService) {
        this.router = router;
        this.selectService = selectService;
        this.confirmationService = confirmationService;
        this.policyService = policyService;
        this.msgs = [];
        var policy = localStorage.getItem(_shared_config__WEBPACK_IMPORTED_MODULE_5__["SELECTED_POLICY"]);
        if (!policy)
            this.router.navigate(['clients']);
        this.policy = JSON.parse(policy);
        // user 
        var currentUser = localStorage.getItem(_shared_config__WEBPACK_IMPORTED_MODULE_5__["CURRENT_LOGGED_IN_USER"]);
        if (!currentUser)
            this.router.navigate(['login']);
        this.loggedinUser = JSON.parse(currentUser);
    }
    AddBenefityToPolicyComponent.prototype.ngOnInit = function () {
        this.benefits$ = this.selectService.select("benefits WHERE StatusId = 1");
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Policies', url: '/policies', icon: 'file' },
            { name: this.policy.Description, url: '/policies/view', icon: 'user' },
        ];
    };
    AddBenefityToPolicyComponent.prototype.add = function (benefit) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                var data = {
                    PolicyId: _this.policy.PolicyId,
                    BenefitId: benefit.BenefitId,
                    CreateUserId: _this.loggedinUser.userid,
                    StatusId: 1
                };
                Object(_shared_config__WEBPACK_IMPORTED_MODULE_5__["loadScreen"])();
                _this.policyService.addBenefitToApolicy(data)
                    .subscribe(function (response) {
                    Object(_shared_config__WEBPACK_IMPORTED_MODULE_5__["stopLoadingScreen"])();
                    if (response === 1) {
                        _this.showSuccess();
                        setTimeout(function () {
                            _this.router.navigate(["/policies/view"]);
                        }, 2000);
                    }
                    if (response === _shared_config__WEBPACK_IMPORTED_MODULE_5__["POLICY_BENEFIT_HOLDER_EXIST"]) {
                        _this.showError("Benefit  holder alreay exists for this policy");
                    }
                });
            }
        });
    };
    AddBenefityToPolicyComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({
            severity: "success",
            summary: "Success Message",
            detail: "Policy Holder Added Successfully"
        });
    };
    AddBenefityToPolicyComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({
            severity: "warn",
            summary: "Validation Message",
            detail: "" + msg
        });
    };
    return AddBenefityToPolicyComponent;
}());



/***/ }),

/***/ "./src/app/views/policies/add-policy/add-policy.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/views/policies/add-policy/add-policy.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_AddPolicyComponent, View_AddPolicyComponent_0, View_AddPolicyComponent_Host_0, AddPolicyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AddPolicyComponent", function() { return RenderType_AddPolicyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddPolicyComponent_0", function() { return View_AddPolicyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddPolicyComponent_Host_0", function() { return View_AddPolicyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPolicyComponentNgFactory", function() { return AddPolicyComponentNgFactory; });
/* harmony import */ var _add_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-policy.component.scss.shim.ngstyle */ "./src/app/views/policies/add-policy/add-policy.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component.ngfactory */ "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
/* harmony import */ var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
/* harmony import */ var _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/primeng/components/growl/growl.ngfactory */ "./node_modules/primeng/components/growl/growl.ngfactory.js");
/* harmony import */ var primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
/* harmony import */ var primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/growl/growl */ "./node_modules/primeng/components/growl/growl.js");
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_policy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-policy.component */ "./src/app/views/policies/add-policy/add-policy.component.ts");
/* harmony import */ var _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/policy/policy.service */ "./src/app/services/policy/policy.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_AddPolicyComponent = [_add_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AddPolicyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AddPolicyComponent, data: { "animation": [{ type: 7, name: "routerTransition", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { transform: "translateY(100%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { transform: "translateY(0%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }], options: {} }] } });

function View_AddPolicyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 56, "div", [], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Policies "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], [], { heading: [0, "heading"], icon: [1, "icon"], menus: [2, "menus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "p-growl", [], null, [[null, "valueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = ((_co.msgs = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_Growl_0"], _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_Growl"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_5__["DomHandler"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_5__["DomHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4636672, null, 0, primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_6__["Growl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_5__["DomHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__["MessageService"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { value: [0, "value"] }, { valueChange: "valueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 49, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 48, "div", [["class", "col col-xl-12 col-lg-12 col-md-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 47, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 45, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 44, "div", [["class", "col-lg-10 offset-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 43, "form", [["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 14, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "label", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Description:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 10, "div", [["class", "input-group mb-3 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "li", [["class", "fa fa-clipboard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 6, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Description"], ["class", "form-control"], ["placeholder", "Description"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.Description = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](30, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 15, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "label", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 11, "div", [["class", "input-group mb-3 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "li", [["class", "fa fa-dollar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 7, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Amount"], ["class", "form-control"], ["placeholder", "Amount"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.Amount = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_bd"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_bd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](46, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 7, "div", [["class", "justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "a", [["class", "btn rounded-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.add() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 3, "a", [["class", "btn rounded-btn"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](55, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Abort"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Add Policy"; var currVal_2 = "fa-plus"; var currVal_3 = _co.menus; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.msgs; _ck(_v, 6, 0, currVal_4); var currVal_19 = _co.Description; var currVal_20 = _ck(_v, 30, 0, true); _ck(_v, 29, 0, currVal_19, currVal_20); var currVal_28 = _co.Amount; var currVal_29 = _ck(_v, 46, 0, true); _ck(_v, 45, 0, currVal_28, currVal_29); var currVal_32 = _ck(_v, 55, 0, "/policies"); _ck(_v, 54, 0, currVal_32); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 13, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 26, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassUntouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassTouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPristine; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassDirty; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassValid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassInvalid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPending; _ck(_v, 41, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).target; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).href; _ck(_v, 53, 0, currVal_30, currVal_31); }); }
function View_AddPolicyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-policy", [], null, null, null, View_AddPolicyComponent_0, RenderType_AddPolicyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_policy_component__WEBPACK_IMPORTED_MODULE_11__["AddPolicyComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_12__["PolicyService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddPolicyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-policy", _add_policy_component__WEBPACK_IMPORTED_MODULE_11__["AddPolicyComponent"], View_AddPolicyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/policies/add-policy/add-policy.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/views/policies/add-policy/add-policy.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/views/policies/add-policy/add-policy.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/policies/add-policy/add-policy.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPolicyComponent", function() { return AddPolicyComponent; });
/* harmony import */ var _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/policy/policy.service */ "./src/app/services/policy/policy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");




var AddPolicyComponent = /** @class */ (function () {
    function AddPolicyComponent(router, policyService) {
        this.router = router;
        this.policyService = policyService;
        this.CreateUserId = 1;
        this.msgs = [];
    }
    AddPolicyComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Policies', url: '/policies', icon: 'file' },
        ];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    AddPolicyComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({
            severity: "success",
            summary: "Success Message",
            detail: "Policy Added Successfully"
        });
    };
    AddPolicyComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({
            severity: "warn",
            summary: "Validation Message",
            detail: "" + msg
        });
    };
    AddPolicyComponent.prototype.add = function () {
        var _this = this;
        this.msg = undefined;
        if (!this.Amount) {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (!this.Description) {
            this.showError("Please fill in Required Fields");
            return false;
        }
        var data = {
            Description: this.Description,
            Amount: this.Amount,
            CreateUserId: this.currentUser.userid
        };
        Object(_shared_config__WEBPACK_IMPORTED_MODULE_3__["loadScreen"])();
        this.policyService.addPolicy(data).subscribe(function (response) {
            Object(_shared_config__WEBPACK_IMPORTED_MODULE_3__["stopLoadingScreen"])();
            if (response === 1) {
                _this.showSuccess();
                setTimeout(function () {
                    _this.router.navigate(["/policies"]);
                }, 2000);
            }
            if (response === "500") {
                _this.showError("Policy alreay exists");
            }
        });
    };
    return AddPolicyComponent;
}());



/***/ }),

/***/ "./src/app/views/policies/add-policy/index.ts":
/*!****************************************************!*\
  !*** ./src/app/views/policies/add-policy/index.ts ***!
  \****************************************************/
/*! exports provided: AddPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-policy.component */ "./src/app/views/policies/add-policy/add-policy.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPolicyComponent", function() { return _add_policy_component__WEBPACK_IMPORTED_MODULE_0__["AddPolicyComponent"]; });




/***/ }),

/***/ "./src/app/views/policies/edit-policy/edit-policy.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/views/policies/edit-policy/edit-policy.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_EditPolicyComponent, View_EditPolicyComponent_0, View_EditPolicyComponent_Host_0, EditPolicyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EditPolicyComponent", function() { return RenderType_EditPolicyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EditPolicyComponent_0", function() { return View_EditPolicyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EditPolicyComponent_Host_0", function() { return View_EditPolicyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPolicyComponentNgFactory", function() { return EditPolicyComponentNgFactory; });
/* harmony import */ var _edit_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-policy.component.scss.shim.ngstyle */ "./src/app/views/policies/edit-policy/edit-policy.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component.ngfactory */ "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
/* harmony import */ var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
/* harmony import */ var _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/primeng/components/growl/growl.ngfactory */ "./node_modules/primeng/components/growl/growl.ngfactory.js");
/* harmony import */ var primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
/* harmony import */ var primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/components/growl/growl */ "./node_modules/primeng/components/growl/growl.js");
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_primeng_components_confirmdialog_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/primeng/components/confirmdialog/confirmdialog.ngfactory */ "./node_modules/primeng/components/confirmdialog/confirmdialog.ngfactory.js");
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/components/confirmdialog/confirmdialog */ "./node_modules/primeng/components/confirmdialog/confirmdialog.js");
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/components/common/confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _edit_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-policy.component */ "./src/app/views/policies/edit-policy/edit-policy.component.ts");
/* harmony import */ var _shared_services_select_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/select.service */ "./src/app/shared/services/select.service.ts");
/* harmony import */ var _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/policy/policy.service */ "./src/app/services/policy/policy.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_EditPolicyComponent = [_edit_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EditPolicyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EditPolicyComponent, data: { "animation": [{ type: 7, name: "routerTransition", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { transform: "translateY(100%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { transform: "translateY(0%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }], options: {} }] } });

function View_EditPolicyComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 43, "form", [["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "label", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Description:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "div", [["class", "input-group mb-3 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "li", [["class", "fa fa-clipboard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Description"], ["class", "form-control"], ["placeholder", "Description"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_v.context.ngIf[0].Description = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](17, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 15, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "label", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 11, "div", [["class", "input-group mb-3 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "li", [["class", "fa fa-dollar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 7, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Amount"], ["class", "form-control"], ["placeholder", "Amount"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_v.context.ngIf[0].Amount = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bd"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](33, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 7, "div", [["class", "justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "a", [["class", "btn rounded-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit(_v.context.ngIf[0]) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Update Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 3, "a", [["class", "btn rounded-btn"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](42, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Abort"]))], function (_ck, _v) { var currVal_14 = _v.context.ngIf[0].Description; var currVal_15 = _ck(_v, 17, 0, true); _ck(_v, 16, 0, currVal_14, currVal_15); var currVal_23 = _v.context.ngIf[0].Amount; var currVal_24 = _ck(_v, 33, 0, true); _ck(_v, 32, 0, currVal_23, currVal_24); var currVal_27 = _ck(_v, 42, 0, "/policies"); _ck(_v, 41, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending; _ck(_v, 13, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 28, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).target; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).href; _ck(_v, 40, 0, currVal_25, currVal_26); }); }
function View_EditPolicyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], [], { heading: [0, "heading"], icon: [1, "icon"], menus: [2, "menus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "p-growl", [], null, [[null, "valueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = ((_co.msgs = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_Growl_0"], _node_modules_primeng_components_growl_growl_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_Growl"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__["DomHandler"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__["DomHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4636672, null, 0, primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_9__["Growl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__["DomHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__["MessageService"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { value: [0, "value"] }, { valueChange: "valueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "p-confirmDialog", [["header", "Confirmation"], ["icon", "pi pi-exclamation-triangle"], ["width", "425"]], null, null, null, _node_modules_primeng_components_confirmdialog_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ConfirmDialog_0"], _node_modules_primeng_components_confirmdialog_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ConfirmDialog"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__["DomHandler"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__["DomHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 1, primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialog"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], primeng_components_dom_domhandler__WEBPACK_IMPORTED_MODULE_8__["DomHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { header: [0, "header"], icon: [1, "icon"], width: [2, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { footer: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "col col-xl-12 col-lg-12 col-md-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "div", [["class", "col-lg-10 offset-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_EditPolicyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Edit Policy"; var currVal_2 = "fa-edit"; var currVal_3 = _co.menus; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.msgs; _ck(_v, 5, 0, currVal_4); var currVal_5 = "Confirmation"; var currVal_6 = "pi pi-exclamation-triangle"; var currVal_7 = "425"; _ck(_v, 8, 0, currVal_5, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).transform(_co.policy$)); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EditPolicyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-edit-policy", [], null, null, null, View_EditPolicyComponent_0, RenderType_EditPolicyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _edit_policy_component__WEBPACK_IMPORTED_MODULE_14__["EditPolicyComponent"], [_shared_services_select_service__WEBPACK_IMPORTED_MODULE_15__["SelectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_16__["PolicyService"], primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EditPolicyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-edit-policy", _edit_policy_component__WEBPACK_IMPORTED_MODULE_14__["EditPolicyComponent"], View_EditPolicyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/policies/edit-policy/edit-policy.component.scss.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/views/policies/edit-policy/edit-policy.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/views/policies/edit-policy/edit-policy.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/policies/edit-policy/edit-policy.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPolicyComponent", function() { return EditPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/policy/policy.service */ "./src/app/services/policy/policy.service.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");






var EditPolicyComponent = /** @class */ (function () {
    function EditPolicyComponent(selectService, route, router, policyService, confirmationService) {
        this.selectService = selectService;
        this.route = route;
        this.router = router;
        this.policyService = policyService;
        this.confirmationService = confirmationService;
        this.msgs = [];
    }
    EditPolicyComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Policies', url: '/policies' },
        ];
        this.policyId = this.route.snapshot.paramMap.get("id");
        this.policy$ = this.selectService.select("policies WHERE PolicyId = '" + this.policyId + "'");
        this.currentUser = JSON.parse(localStorage.getItem(_shared_config__WEBPACK_IMPORTED_MODULE_5__["CURRENT_LOGGED_IN_USER"]));
    };
    EditPolicyComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({
            severity: "success",
            summary: "Success Message",
            detail: "Policy Updated Successfully"
        });
    };
    EditPolicyComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({
            severity: "warn",
            summary: "Validation Message",
            detail: "" + msg
        });
    };
    EditPolicyComponent.prototype.edit = function (policy) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                _this.msg = undefined;
                if (!policy.Amount) {
                    _this.showError("Please fill in Required Fields");
                    return false;
                }
                if (!policy.Description) {
                    _this.showError("Please fill in Required Fields");
                    return false;
                }
                var data = {
                    Description: policy.Description,
                    Amount: policy.Amount,
                    PolicyId: policy.PolicyId,
                    ModifyUserId: _this.currentUser.userid,
                    StatusId: policy.StatusId
                };
                _this.policyService.editPolicy(data).subscribe(function (response) {
                    if (response === 1) {
                        _this.showSuccess();
                        setTimeout(function () {
                            _this.router.navigate(["/policies"]);
                        }, 2000);
                    }
                    if (response === "500") {
                        _this.showError("Policy alreay exists");
                    }
                });
            }
        });
    };
    return EditPolicyComponent;
}());



/***/ }),

/***/ "./src/app/views/policies/edit-policy/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/policies/edit-policy/index.ts ***!
  \*****************************************************/
/*! exports provided: EditPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-policy.component */ "./src/app/views/policies/edit-policy/edit-policy.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditPolicyComponent", function() { return _edit_policy_component__WEBPACK_IMPORTED_MODULE_0__["EditPolicyComponent"]; });




/***/ }),

/***/ "./src/app/views/policies/list-policies/list-policies.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/views/policies/list-policies/list-policies.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_ListPoliciesComponent, View_ListPoliciesComponent_0, View_ListPoliciesComponent_Host_0, ListPoliciesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListPoliciesComponent", function() { return RenderType_ListPoliciesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListPoliciesComponent_0", function() { return View_ListPoliciesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListPoliciesComponent_Host_0", function() { return View_ListPoliciesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPoliciesComponentNgFactory", function() { return ListPoliciesComponentNgFactory; });
/* harmony import */ var _list_policies_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-policies.component.scss.shim.ngstyle */ "./src/app/views/policies/list-policies/list-policies.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/spinner/spinner.component.ngfactory */ "./src/app/shared/modules/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _shared_modules_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/spinner/spinner.component */ "./src/app/shared/modules/spinner/spinner.component.ts");
/* harmony import */ var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component.ngfactory */ "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
/* harmony import */ var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */ "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js");
/* harmony import */ var _list_policies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-policies.component */ "./src/app/views/policies/list-policies/list-policies.component.ts");
/* harmony import */ var _shared_services_select_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/select.service */ "./src/app/shared/services/select.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_ListPoliciesComponent = [_list_policies_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ListPoliciesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ListPoliciesComponent, data: { "animation": [{ type: 7, name: "routerTransition", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { transform: "translateY(100%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { transform: "translateY(0%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }], options: {} }] } });

function View_ListPoliciesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["class", "btn rounded-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.view(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "button", [["class", "btn rounded-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Edit"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.Amount; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fo-", _v.context.$implicit.StatusId, ""); _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.context.$implicit.Description; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.CreateDate; _ck(_v, 6, 0, currVal_3); }); }
function View_ListPoliciesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CreateDate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 4, null, View_ListPoliciesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](15, { itemsPerPage: 0, currentPage: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform(_v.context.ngIf, _co.searchText)), _ck(_v, 15, 0, 10, _co.p))); _ck(_v, 13, 0, currVal_0); }, null); }
function View_ListPoliciesComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-spinner", [], null, null, null, _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_modules_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ListPoliciesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, "div", [], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Policies "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], [], { heading: [0, "heading"], icon: [1, "icon"], menus: [2, "menus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 28, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 27, "div", [["class", "col col-xl-12 col-lg-12 col-md-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 26, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 17, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "a", [["class", "btn rounded-btn"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add policy "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "div", [["class", "input-group mb-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "li", [["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 6, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Search"], ["class", "form-control"], ["placeholder", "Search..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.searchText = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](22, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 7, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ListPoliciesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["loading", 2]], null, 0, null, View_ListPoliciesComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "div", [["class", "justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "pagination-controls", [], null, [[null, "pageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = ((_co.p = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], [], null, { pageChange: "pageChange" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Policies"; var currVal_2 = "fa-file"; var currVal_3 = _co.menus; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); var currVal_6 = _ck(_v, 12, 0, "/policies/add"); _ck(_v, 11, 0, currVal_6); var currVal_14 = _co.searchText; var currVal_15 = _ck(_v, 22, 0, true); _ck(_v, 21, 0, currVal_14, currVal_15); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).transform(_co.policies$)); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29); _ck(_v, 27, 0, currVal_16, currVal_17); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_4, currVal_5); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 18, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); }); }
function View_ListPoliciesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-list-policies", [], null, null, null, View_ListPoliciesComponent_0, RenderType_ListPoliciesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _list_policies_component__WEBPACK_IMPORTED_MODULE_12__["ListPoliciesComponent"], [_shared_services_select_service__WEBPACK_IMPORTED_MODULE_13__["SelectService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListPoliciesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-list-policies", _list_policies_component__WEBPACK_IMPORTED_MODULE_12__["ListPoliciesComponent"], View_ListPoliciesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/policies/list-policies/list-policies.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/policies/list-policies/list-policies.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
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
var styles = [".fo-1[_ngcontent-%COMP%]{color:green}.fo-2[_ngcontent-%COMP%]{color:red}"];



/***/ }),

/***/ "./src/app/views/policies/list-policies/list-policies.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/policies/list-policies/list-policies.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListPoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPoliciesComponent", function() { return ListPoliciesComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_select_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/select.service */ "./src/app/shared/services/select.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");




var ListPoliciesComponent = /** @class */ (function () {
    function ListPoliciesComponent(selectService, router) {
        this.selectService = selectService;
        this.router = router;
        this.policies$ = this.selectService.select("policies");
    }
    ListPoliciesComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
        ];
    };
    ListPoliciesComponent.prototype.view = function (item) {
        localStorage.setItem(_shared_config__WEBPACK_IMPORTED_MODULE_3__["SELECTED_POLICY"], JSON.stringify(item));
        this.router.navigate(["policies/view"]);
    };
    ListPoliciesComponent.prototype.edit = function (policy) {
        this.router.navigate(['/policies/edit', policy.PolicyId]);
    };
    return ListPoliciesComponent;
}());



/***/ }),

/***/ "./src/app/views/policies/policies.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/policies/policies.component.ts ***!
  \******************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PoliciesComponent = /** @class */ (function () {
    function PoliciesComponent() {
    }
    PoliciesComponent.prototype.ngOnInit = function () {
    };
    return PoliciesComponent;
}());



/***/ }),

/***/ "./src/app/views/policies/policies.module.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/views/policies/policies.module.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: PoliciesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesModuleNgFactory", function() { return PoliciesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _policies_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies.module */ "./src/app/views/policies/policies.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _list_policies_list_policies_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-policies/list-policies.component.ngfactory */ "./src/app/views/policies/list-policies/list-policies.component.ngfactory.js");
/* harmony import */ var _add_policy_add_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-policy/add-policy.component.ngfactory */ "./src/app/views/policies/add-policy/add-policy.component.ngfactory.js");
/* harmony import */ var _edit_policy_edit_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-policy/edit-policy.component.ngfactory */ "./src/app/views/policies/edit-policy/edit-policy.component.ngfactory.js");
/* harmony import */ var _view_policy_view_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-policy/view-policy.component.ngfactory */ "./src/app/views/policies/view-policy/view-policy.component.ngfactory.js");
/* harmony import */ var _add_benefity_to_policy_add_benefity_to_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-benefity-to-policy/add-benefity-to-policy.component.ngfactory */ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/components/common/confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _policies_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./policies.routing */ "./src/app/views/policies/policies.routing.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/components/chart/chart */ "./node_modules/primeng/components/chart/chart.js");
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/components/growl/growl */ "./node_modules/primeng/components/growl/growl.js");
/* harmony import */ var primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/components/button/button */ "./node_modules/primeng/components/button/button.js");
/* harmony import */ var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_components_button_button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/components/common/shared */ "./node_modules/primeng/components/common/shared.js");
/* harmony import */ var primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/components/confirmdialog/confirmdialog */ "./node_modules/primeng/components/confirmdialog/confirmdialog.js");
/* harmony import */ var primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/components/schedule/schedule */ "./node_modules/primeng/components/schedule/schedule.js");
/* harmony import */ var primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/components/blockui/blockui */ "./node_modules/primeng/components/blockui/blockui.js");
/* harmony import */ var primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/components/progressspinner/progressspinner */ "./node_modules/primeng/components/progressspinner/progressspinner.js");
/* harmony import */ var primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _shared_modules_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/modules/spinner/spinner.module */ "./src/app/shared/modules/spinner/spinner.module.ts");
/* harmony import */ var _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list-policies/list-policies.component */ "./src/app/views/policies/list-policies/list-policies.component.ts");
/* harmony import */ var _add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-policy/add-policy.component */ "./src/app/views/policies/add-policy/add-policy.component.ts");
/* harmony import */ var _edit_policy_edit_policy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-policy/edit-policy.component */ "./src/app/views/policies/edit-policy/edit-policy.component.ts");
/* harmony import */ var _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./view-policy/view-policy.component */ "./src/app/views/policies/view-policy/view-policy.component.ts");
/* harmony import */ var _add_benefity_to_policy_add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./add-benefity-to-policy/add-benefity-to-policy.component */ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






























var PoliciesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_policies_module__WEBPACK_IMPORTED_MODULE_1__["PoliciesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _list_policies_list_policies_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ListPoliciesComponentNgFactory"], _add_policy_add_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AddPolicyComponentNgFactory"], _edit_policy_edit_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["EditPolicyComponentNgFactory"], _view_policy_view_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ViewPolicyComponentNgFactory"], _add_benefity_to_policy_add_benefity_to_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddBenefityToPolicyComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"], primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _policies_routing__WEBPACK_IMPORTED_MODULE_13__["PoliciesRoutes"], _policies_routing__WEBPACK_IMPORTED_MODULE_13__["PoliciesRoutes"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_15__["ChartModule"], primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_15__["ChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_16__["GrowlModule"], primeng_components_growl_growl__WEBPACK_IMPORTED_MODULE_16__["GrowlModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_button_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"], primeng_components_button_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], primeng_components_common_shared__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogModule"], primeng_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_20__["ScheduleModule"], primeng_components_schedule_schedule__WEBPACK_IMPORTED_MODULE_20__["ScheduleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_21__["BlockUIModule"], primeng_components_blockui_blockui__WEBPACK_IMPORTED_MODULE_21__["BlockUIModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_22__["PageHeaderModule"], _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_22__["PageHeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_23__["ProgressSpinnerModule"], primeng_components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_23__["ProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_24__["SpinnerModule"], _shared_modules_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_24__["SpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _policies_module__WEBPACK_IMPORTED_MODULE_1__["PoliciesModule"], _policies_module__WEBPACK_IMPORTED_MODULE_1__["PoliciesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "", component: _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_25__["ListPoliciesComponent"] }, { path: "add", component: _add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_26__["AddPolicyComponent"] }, { path: "edit/:id", component: _edit_policy_edit_policy_component__WEBPACK_IMPORTED_MODULE_27__["EditPolicyComponent"] }, { path: "view", component: _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_28__["ViewPolicyComponent"] }, { path: "add-benefits", component: _add_benefity_to_policy_add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_29__["AddBenefityToPolicyComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/views/policies/policies.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/policies/policies.module.ts ***!
  \***************************************************/
/*! exports provided: PoliciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesModule", function() { return PoliciesModule; });
var PoliciesModule = /** @class */ (function () {
    function PoliciesModule() {
    }
    return PoliciesModule;
}());



/***/ }),

/***/ "./src/app/views/policies/policies.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/views/policies/policies.routing.ts ***!
  \****************************************************/
/*! exports provided: declarations, PoliciesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesRoutes", function() { return PoliciesRoutes; });
/* harmony import */ var _add_benefity_to_policy_add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-benefity-to-policy/add-benefity-to-policy.component */ "./src/app/views/policies/add-benefity-to-policy/add-benefity-to-policy.component.ts");
/* harmony import */ var _policies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies.component */ "./src/app/views/policies/policies.component.ts");
/* harmony import */ var _add_policy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-policy */ "./src/app/views/policies/add-policy/index.ts");
/* harmony import */ var _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-policies/list-policies.component */ "./src/app/views/policies/list-policies/list-policies.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-policy/view-policy.component */ "./src/app/views/policies/view-policy/view-policy.component.ts");
/* harmony import */ var _edit_policy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-policy */ "./src/app/views/policies/edit-policy/index.ts");







var routes = [
    { path: '', component: _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_3__["ListPoliciesComponent"] },
    { path: 'add', component: _add_policy__WEBPACK_IMPORTED_MODULE_2__["AddPolicyComponent"] },
    { path: 'edit/:id', component: _edit_policy__WEBPACK_IMPORTED_MODULE_6__["EditPolicyComponent"] },
    { path: 'view', component: _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_5__["ViewPolicyComponent"] },
    { path: 'add-benefits', component: _add_benefity_to_policy_add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_0__["AddBenefityToPolicyComponent"] },
];
var declarations = [_policies_component__WEBPACK_IMPORTED_MODULE_1__["PoliciesComponent"], _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_3__["ListPoliciesComponent"], _edit_policy__WEBPACK_IMPORTED_MODULE_6__["EditPolicyComponent"], _add_policy__WEBPACK_IMPORTED_MODULE_2__["AddPolicyComponent"], _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_5__["ViewPolicyComponent"], _add_benefity_to_policy_add_benefity_to_policy_component__WEBPACK_IMPORTED_MODULE_0__["AddBenefityToPolicyComponent"]];
var PoliciesRoutes = /** @class */ (function () {
    function PoliciesRoutes() {
    }
    return PoliciesRoutes;
}());



/***/ }),

/***/ "./src/app/views/policies/view-policy/view-policy.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/views/policies/view-policy/view-policy.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_ViewPolicyComponent, View_ViewPolicyComponent_0, View_ViewPolicyComponent_Host_0, ViewPolicyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ViewPolicyComponent", function() { return RenderType_ViewPolicyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewPolicyComponent_0", function() { return View_ViewPolicyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewPolicyComponent_Host_0", function() { return View_ViewPolicyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPolicyComponentNgFactory", function() { return ViewPolicyComponentNgFactory; });
/* harmony import */ var _view_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-policy.component.scss.shim.ngstyle */ "./src/app/views/policies/view-policy/view-policy.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/spinner/spinner.component.ngfactory */ "./src/app/shared/modules/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _shared_modules_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/spinner/spinner.component */ "./src/app/shared/modules/spinner/spinner.component.ts");
/* harmony import */ var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component.ngfactory */ "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
/* harmony import */ var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-policy.component */ "./src/app/views/policies/view-policy/view-policy.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_select_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/select.service */ "./src/app/shared/services/select.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_ViewPolicyComponent = [_view_policy_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ViewPolicyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ViewPolicyComponent, data: { "animation": [{ type: 7, name: "routerTransition", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { transform: "translateY(100%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { transform: "translateY(0%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }], options: {} }] } });

function View_ViewPolicyComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 19, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "td", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "td", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.policy.Description; _ck(_v, 7, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.policy.Amount, "R", true)); _ck(_v, 13, 0, currVal_1); var currVal_2 = _co.policy.StatusId; _ck(_v, 20, 0, currVal_2); }); }
function View_ViewPolicyComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "button", [["class", "btn rounded-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewBenefit(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["View"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.Amount, "R", true)); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fo-", _v.context.$implicit.StatusId, ""); _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.Description; _ck(_v, 5, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.context.$implicit.CreateDate, "mediumDate")); _ck(_v, 7, 0, currVal_3); }); }
function View_ViewPolicyComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CreateDate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 4, null, View_ViewPolicyComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { itemsPerPage: 0, currentPage: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).transform(_v.parent.context.ngIf, _co.searchText)), _ck(_v, 13, 0, 10, _co.p))); _ck(_v, 11, 0, currVal_0); }, null); }
function View_ViewPolicyComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "alert alert-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No Benefits for this plan "]))], null, null); }
function View_ViewPolicyComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewPolicyComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["nobefits", 2]], null, 0, null, View_ViewPolicyComponent_5))], function (_ck, _v) { var currVal_0 = ((_v.context.ngIf == null) ? null : _v.context.ngIf.length); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ViewPolicyComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-spinner", [], null, null, null, _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_modules_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_modules_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ViewPolicyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 30, "div", [], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], [], { heading: [0, "heading"], icon: [1, "icon"], menus: [2, "menus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 27, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 26, "div", [["class", "col col-xl-12 col-lg-12 col-md-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 25, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " Details "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewPolicyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 15, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "a", [["class", "btn rounded-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addBefefits() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add benefit "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 10, "div", [["class", "input-group mb-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "li", [["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "input", [["aria-describedby", "basic-addon1"], ["aria-label", "Search"], ["class", "form-control"], ["placeholder", "Search..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.searchText = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](26, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ViewPolicyComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["loading", 2]], null, 0, null, View_ViewPolicyComponent_6))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.policy.Description; var currVal_2 = "fa"; var currVal_3 = _co.menus; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3); var currVal_5 = _co.policy; _ck(_v, 12, 0, currVal_5); var currVal_13 = _co.searchText; var currVal_14 = _ck(_v, 26, 0, true); _ck(_v, 25, 0, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform(_co.benefits$)); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32); _ck(_v, 30, 0, currVal_15, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 2, 0, currVal_0); var currVal_4 = _co.policy.Description; _ck(_v, 9, 0, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 22, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); }); }
function View_ViewPolicyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-view-policy", [], null, null, null, View_ViewPolicyComponent_0, RenderType_ViewPolicyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _view_policy_component__WEBPACK_IMPORTED_MODULE_10__["ViewPolicyComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _shared_services_select_service__WEBPACK_IMPORTED_MODULE_12__["SelectService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ViewPolicyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-view-policy", _view_policy_component__WEBPACK_IMPORTED_MODULE_10__["ViewPolicyComponent"], View_ViewPolicyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/policies/view-policy/view-policy.component.scss.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/views/policies/view-policy/view-policy.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************/
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
var styles = [".bold[_ngcontent-%COMP%]{font-weight:bold}"];



/***/ }),

/***/ "./src/app/views/policies/view-policy/view-policy.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/policies/view-policy/view-policy.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPolicyComponent", function() { return ViewPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");




var ViewPolicyComponent = /** @class */ (function () {
    function ViewPolicyComponent(router, selectService) {
        this.router = router;
        this.selectService = selectService;
        var policy = localStorage.getItem(_shared_config__WEBPACK_IMPORTED_MODULE_1__["SELECTED_POLICY"]);
        if (!policy)
            this.router.navigate(["policies"]);
        this.policy = JSON.parse(policy);
    }
    ViewPolicyComponent.prototype.ngOnInit = function () {
        this.benefits$ = this.selectService.select("policybenefits right join  benefits on policybenefits.BenefitId = benefits.BenefitId where PolicyId = '" + this.policy.PolicyId + "'");
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Policies', url: '/policies', icon: 'file' },
        ];
    };
    ViewPolicyComponent.prototype.viewBenefit = function (item) {
        alert('Benefit details under contruction');
    };
    ViewPolicyComponent.prototype.addBefefits = function () {
        this.router.navigate(['policies/add-benefits']);
    };
    return ViewPolicyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=policies-policies-module-ngfactory.js.map