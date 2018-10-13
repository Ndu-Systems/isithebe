(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["our-policies-our-policies-module"],{

/***/ "./src/app/home/our-policies/our-policies-module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/our-policies/our-policies-module.ts ***!
  \**********************************************************/
/*! exports provided: OurPoliciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPoliciesModule", function() { return OurPoliciesModule; });
/* harmony import */ var _our_policies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-policies.component */ "./src/app/home/our-policies/our-policies.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _our_policies_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-policies.routing */ "./src/app/home/our-policies/our-policies.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OurPoliciesModule = /** @class */ (function () {
    function OurPoliciesModule() {
    }
    OurPoliciesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _our_policies_routing__WEBPACK_IMPORTED_MODULE_4__["OurPoliciesRoutes"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot()],
            declarations: [_our_policies_component__WEBPACK_IMPORTED_MODULE_0__["OurPoliciesComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            exports: [],
            providers: []
        })
    ], OurPoliciesModule);
    return OurPoliciesModule;
}());



/***/ }),

/***/ "./src/app/home/our-policies/our-policies.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/our-policies/our-policies.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t<h1>Our Policies</h1>\r\n\t\t\t<p>Here are our range of Policies.</p>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-12 col-lg-4\">\r\n\t\t\t\t<!-- Card Flip -->\r\n\t\t\t\t<div class=\"card-flip\">\r\n\t\t\t\t\t<div class=\"flip\">\r\n\t\t\t\t\t\t<div class=\"front\">\r\n\t\t\t\t\t\t\t\t<mdb-card>\r\n\t\t\t\t\t\t\t\t<!--Card image-->\r\n\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\r\n\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/family4.jpg\"></mdb-card-img>\r\n\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!--/.Card image-->\r\n\r\n\t\t\t\t\t\t\t\t<!--Card content-->\r\n\t\t\t\t\t\t\t\t<mdb-card-body>\r\n\r\n\t\t\t\t\t\t\t\t\t<!--Title-->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-title>\r\n\t\t\t\t\t\t\t\t\t\t<h4>Ithemba <small>General Funeral Plan</small></h4>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-title>\r\n\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<!--Text-->\r\n\t\t\t\t\t\t\t\t\t<h6 class=\" grey-dark-text mb-0\">Get a funeral cover for as little as from R48 p/m</h6>\r\n\t\t\t\t\t\t\t\t</mdb-card-body>\r\n\t\t\t\t\t\t\t\t<!--/.Card content-->\r\n\t\t\t\t\t\t\t\t<!-- Card footer -->\r\n\t\t\t\t\t\t\t\t<mdb-card-footer class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-inline font-small mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item pr-2 white-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o pr-1\"></i>Isithebe Burial Society\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</mdb-card-footer>\r\n\t\t\t\t\t\t\t\t<!-- Card footer -->\r\n\t\t\t\t\t\t\t</mdb-card>\r\n\t\t\t\t\t\t\t<!--/.Card-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"back\">\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t<!--Card-->\r\n\t\t\t\t\t\t\t<mdb-card dark=\"true\">\r\n\r\n\t\t\t\t\t\t\t\t<!--Card image-->\r\n\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\r\n\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/slider2.jpg\"></mdb-card-img>\r\n\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!--/.Card image-->\r\n\r\n\t\t\t\t\t\t\t\t<!--Card content-->\r\n\t\t\t\t\t\t\t\t<mdb-card-body class=\"white-text\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"activator px-3 mr-2\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-alt white-text\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t<!--Title-->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-title>\r\n\t\t\t\t\t\t\t\t\t\t<h4>Ithemba <small>from</small> R48/pm*</h4>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-title>\r\n\r\n\t\t\t\t\t\t\t\t\t<hr class=\"hr-light\">\r\n\r\n\t\t\t\t\t\t\t\t\t<!--Text-->\r\n\r\n\t\t\t\t\t\t\t\t\t<mdb-card-text class=\"white-text\">\r\n\t\t\t\t\t\t\t\t\t\tCover yourself and your family residing in South Africa under one policy and ensure that you and your family\r\n\t\t\t\t\t\t\t\t\t\treceive a dignified funeral and repatriation services.\r\n\r\n\t\t\t\t\t\t\t\t\t\t<h4>Benefits include:</h4>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tNo medical test required\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t1 Day claim stage.\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>3 Month Waiting Period </b>\t\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-text>\r\n\r\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/home/our-policies\" class=\"white-text d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"waves-light white-text\" mdbWavesEffect>Read more <small>(t&c's apply)</small>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</mdb-card-body>\r\n\t\t\t\t\t\t\t\t<!--/.Card content-->\r\n\t\t\t\t\t\t\t</mdb-card>\r\n\t\t\t\t\t\t\t<!--/.Card-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- End Card Flip -->\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-sm-12 col-lg-4\">\r\n\t\t\t\t\t<!-- Card Flip -->\r\n\t\t\t\t\t<div class=\"card-flip\">\r\n\t\t\t\t\t\t<div class=\"flip\">\r\n\t\t\t\t\t\t\t<div class=\"front\">\r\n\t\t\t\t\t\t\t\t\t<mdb-card>\r\n\t\t\t\t\t\t\t\t\t<!--Card image-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/family4.jpg\"></mdb-card-img>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\r\n\t\r\n\t\t\t\t\t\t\t\t\t<!--Card content-->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-body>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Vuka-Wakhe <small>Funeral Plan Plus</small></h4>\r\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\" grey-dark-text mb-0\">Get a funeral cover with unveiling for as little as from R99 p/m</h6>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\r\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-footer class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-inline font-small mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item pr-2 white-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o pr-1\"></i>Isithebe Burial Society\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-footer>\r\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\r\n\t\t\t\t\t\t\t\t</mdb-card>\r\n\t\t\t\t\t\t\t\t<!--/.Card-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"back\">\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t<!--Card-->\r\n\t\t\t\t\t\t\t\t<mdb-card dark=\"true\">\r\n\t\r\n\t\t\t\t\t\t\t\t\t<!--Card image-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/slider2.jpg\"></mdb-card-img>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\r\n\t\r\n\t\t\t\t\t\t\t\t\t<!--Card content-->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-body class=\" white-text\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"activator px-3 mr-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-alt white-text\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Vuka-Wakhe <small>from</small> R99/pm*</h4>\r\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-light\">\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-text class=\"white-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tCover yourself and your family residing in South Africa under one policy and ensure that you and your family\r\n\t\t\t\t\t\t\t\t\t\t\treceive a dignified funeral and repatriation services.\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Benefits include:</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo medical test required\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 Day claim stage.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tTomb stone unveiling\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>3 Month Waiting Period </b>\t\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</mdb-card-text>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/home/our-policies\" class=\"white-text d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"waves-light white-text\" mdbWavesEffect>Read more <small>(t&c's apply)</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\r\n\t\t\t\t\t\t\t\t</mdb-card>\r\n\t\t\t\t\t\t\t\t<!--/.Card-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- End Card Flip -->\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\t\t\t<div class=\"col-sm-12 col-lg-4\">\r\n\t\t\t\t\t<!-- Card Flip -->\r\n\t\t\t\t\t<div class=\"card-flip\">\r\n\t\t\t\t\t\t<div class=\"flip\">\r\n\t\t\t\t\t\t\t<div class=\"front\">\r\n\t\t\t\t\t\t\t\t\t<mdb-card>\r\n\t\t\t\t\t\t\t\t\t<!--Card image-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/family4.jpg\"></mdb-card-img>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\r\n\t\r\n\t\t\t\t\t\t\t\t\t<!--Card content-->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-body>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Ithemba X <small>Funeral Plan Plus</small></h4>\r\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\" grey-dark-text mb-0\">Get a funeral cover with unveiling for as little as from R99 p/m</h6>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\r\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-footer class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-inline font-small mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item pr-2 white-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o pr-1\"></i>Isithebe Burial Society\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-footer>\r\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\r\n\t\t\t\t\t\t\t\t</mdb-card>\r\n\t\t\t\t\t\t\t\t<!--/.Card-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"back\">\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t<!--Card-->\r\n\t\t\t\t\t\t\t\t<mdb-card dark=\"true\">\r\n\t\r\n\t\t\t\t\t\t\t\t\t<!--Card image-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/slider2.jpg\"></mdb-card-img>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\r\n\t\r\n\t\t\t\t\t\t\t\t\t<!--Card content-->\r\n\t\t\t\t\t\t\t\t\t<mdb-card-body class=\"white-text\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"activator px-3 mr-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-alt white-text\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Ithemba X <small>from</small> R150/pm*</h4>\r\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-light\">\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<mdb-card-text class=\"white-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tCover yourself and your family including extended family members residing in South Africa under one policy and ensure that you and your family\r\n\t\t\t\t\t\t\t\t\t\t\treceive a dignified funeral and repatriation services.\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Benefits include:</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo medical test required\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 Day claim stage.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tTomb stone unveiling\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd up to 10 Extended Family members\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>3 Month Waiting Period </b>\t\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</mdb-card-text>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/home/our-policies\" class=\"white-text d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"waves-light white-text\" mdbWavesEffect>Read more <small>(t&c's apply)</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\r\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\r\n\t\t\t\t\t\t\t\t</mdb-card>\r\n\t\t\t\t\t\t\t\t<!--/.Card-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- End Card Flip -->\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/our-policies/our-policies.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/our-policies/our-policies.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-flip {\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n  .card-flip:hover .flip,\n  .card-flip.hover .flip {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  .card-flip,\n.front,\n.back {\n  width: 100%;\n  height: 480px; }\n  .flip {\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n  .front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .front {\n  z-index: 2;\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg); }\n  .back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n  .back mdb-card-body {\n    height: 660px;\n    background-color: #353B48; }\n  .btn {\n  width: 339px;\n  border: 0.5rem;\n  border-width: 0.5rem; }\n  mdb-card-footer {\n  background-color: #353B48; }\n  mdb-card-text .list-group {\n  color: #353B48; }\n  .jumbotron {\n  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/home/our-policies/our-policies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/our-policies/our-policies.component.ts ***!
  \*************************************************************/
/*! exports provided: OurPoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPoliciesComponent", function() { return OurPoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurPoliciesComponent = /** @class */ (function () {
    function OurPoliciesComponent() {
    }
    OurPoliciesComponent.prototype.ngOnInit = function () {
    };
    OurPoliciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-policies',
            template: __webpack_require__(/*! ./our-policies.component.html */ "./src/app/home/our-policies/our-policies.component.html"),
            styles: [__webpack_require__(/*! ./our-policies.component.scss */ "./src/app/home/our-policies/our-policies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurPoliciesComponent);
    return OurPoliciesComponent;
}());



/***/ }),

/***/ "./src/app/home/our-policies/our-policies.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/our-policies/our-policies.routing.ts ***!
  \***********************************************************/
/*! exports provided: OurPoliciesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPoliciesRoutes", function() { return OurPoliciesRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _our_policies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./our-policies.component */ "./src/app/home/our-policies/our-policies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _our_policies_component__WEBPACK_IMPORTED_MODULE_2__["OurPoliciesComponent"] },
];
var OurPoliciesRoutes = /** @class */ (function () {
    function OurPoliciesRoutes() {
    }
    OurPoliciesRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], OurPoliciesRoutes);
    return OurPoliciesRoutes;
}());



/***/ })

}]);
//# sourceMappingURL=our-policies-our-policies-module.js.map