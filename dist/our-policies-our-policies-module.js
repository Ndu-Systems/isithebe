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

module.exports = "<section>\n\t<div class=\"container\">\n\t\t<div class=\"jumbotron\">\n\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t<h1>Our Policies</h1>\n\t\t\t<p>Here are our range of Policies.</p>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 col-lg-4\">\n\t\t\t\t<!-- Card Flip -->\n\t\t\t\t<div class=\"card-flip\">\n\t\t\t\t\t<div class=\"flip\">\n\t\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t\t\t<mdb-card>\n\t\t\t\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\n\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/family4.jpg\"></mdb-card-img>\n\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--/.Card image-->\n\n\t\t\t\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t\t\t\t<mdb-card-body>\n\n\t\t\t\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t\t\t\t<mdb-card-title>\n\t\t\t\t\t\t\t\t\t\t<h4>Ithemba <small>General Funeral Plan</small></h4>\n\t\t\t\t\t\t\t\t\t</mdb-card-title>\n\n\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t<!--Text-->\n\t\t\t\t\t\t\t\t\t<h6 class=\" grey-dark-text mb-0\">Get a funeral cover for as little as from R48 p/m</h6>\n\t\t\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t\t\t\t<!--/.Card content-->\n\t\t\t\t\t\t\t\t<!-- Card footer -->\n\t\t\t\t\t\t\t\t<mdb-card-footer class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-inline font-small mt-3\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item pr-2 white-text\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o pr-1\"></i>Isithebe Burial Society\n\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</mdb-card-footer>\n\t\t\t\t\t\t\t\t<!-- Card footer -->\n\t\t\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\t\t<!--/.Card-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"back\">\t\t\t\t\t\t \n\t\t\t\t\t\t\t<!--Card-->\n\t\t\t\t\t\t\t<mdb-card dark=\"true\">\n\n\t\t\t\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\n\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/slider2.jpg\"></mdb-card-img>\n\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--/.Card image-->\n\n\t\t\t\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t\t\t\t<mdb-card-body class=\"white-text\">\n\t\t\t\t\t\t\t\t\t<a class=\"activator px-3 mr-2\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-alt white-text\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t\t\t\t<mdb-card-title>\n\t\t\t\t\t\t\t\t\t\t<h4>Ithemba <small>from</small> R48/pm*</h4>\n\t\t\t\t\t\t\t\t\t</mdb-card-title>\n\n\t\t\t\t\t\t\t\t\t<hr class=\"hr-light\">\n\n\t\t\t\t\t\t\t\t\t<!--Text-->\n\n\t\t\t\t\t\t\t\t\t<mdb-card-text class=\"white-text\">\n\t\t\t\t\t\t\t\t\t\tCover yourself and your family residing in South Africa under one policy and ensure that you and your family\n\t\t\t\t\t\t\t\t\t\treceive a dignified funeral and repatriation services.\n\n\t\t\t\t\t\t\t\t\t\t<h4>Benefits include:</h4>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\tNo medical test required\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t1 Day claim stage.\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>3 Month Waiting Period </b>\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</mdb-card-text>\n\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/home/our-policies\" class=\"white-text d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"waves-light white-text\" mdbWavesEffect>Read more <small>(t&c's apply)</small>\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t\t\t\t<!--/.Card content-->\n\t\t\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\t\t<!--/.Card-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Card Flip -->\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 col-lg-4\">\n\t\t\t\t\t<!-- Card Flip -->\n\t\t\t\t\t<div class=\"card-flip\">\n\t\t\t\t\t\t<div class=\"flip\">\n\t\t\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t\t\t\t<mdb-card>\n\t\t\t\t\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/family4.jpg\"></mdb-card-img>\n\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\n\t\n\t\t\t\t\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t\t\t\t\t<mdb-card-body>\n\t\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Vuka-Wakhe <small>Funeral Plan Plus</small></h4>\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\n\t\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\n\t\t\t\t\t\t\t\t\t\t<h6 class=\" grey-dark-text mb-0\">Get a funeral cover with unveiling for as little as from R99 p/m</h6>\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n\t\t\t\t\t\t\t\t\t<mdb-card-footer class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-inline font-small mt-3\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item pr-2 white-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o pr-1\"></i>Isithebe Burial Society\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</mdb-card-footer>\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n\t\t\t\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\t\t\t<!--/.Card-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"back\">\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<!--Card-->\n\t\t\t\t\t\t\t\t<mdb-card dark=\"true\">\n\t\n\t\t\t\t\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/slider2.jpg\"></mdb-card-img>\n\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\n\t\n\t\t\t\t\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t\t\t\t\t<mdb-card-body class=\" white-text\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"activator px-3 mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-alt white-text\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Vuka-Wakhe <small>from</small> R99/pm*</h4>\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\n\t\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-light\">\n\t\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\n\t\n\t\t\t\t\t\t\t\t\t\t<mdb-card-text class=\"white-text\">\n\t\t\t\t\t\t\t\t\t\t\tCover yourself and your family residing in South Africa under one policy and ensure that you and your family\n\t\t\t\t\t\t\t\t\t\t\treceive a dignified funeral and repatriation services.\n\t\n\t\t\t\t\t\t\t\t\t\t\t<h4>Benefits include:</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo medical test required\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 Day claim stage.\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tTomb stone unveiling\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>3 Month Waiting Period </b>\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</mdb-card-text>\n\t\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/home/our-policies\" class=\"white-text d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"waves-light white-text\" mdbWavesEffect>Read more <small>(t&c's apply)</small>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\n\t\t\t\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\t\t\t<!--/.Card-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- End Card Flip -->\n\t\t\t\t</div>\n\n\t\t\t\t\n\t\t\t<div class=\"col-sm-12 col-lg-4\">\n\t\t\t\t\t<!-- Card Flip -->\n\t\t\t\t\t<div class=\"card-flip\">\n\t\t\t\t\t\t<div class=\"flip\">\n\t\t\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t\t\t\t<mdb-card>\n\t\t\t\t\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/family4.jpg\"></mdb-card-img>\n\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\n\t\n\t\t\t\t\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t\t\t\t\t<mdb-card-body>\n\t\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Ithemba X <small>Funeral Plan Plus</small></h4>\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\n\t\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\n\t\t\t\t\t\t\t\t\t\t<h6 class=\" grey-dark-text mb-0\">Get a funeral cover with unveiling for as little as from R99 p/m</h6>\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n\t\t\t\t\t\t\t\t\t<mdb-card-footer class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-inline font-small mt-3\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item pr-2 white-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o pr-1\"></i>Isithebe Burial Society\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</mdb-card-footer>\n\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n\t\t\t\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\t\t\t<!--/.Card-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"back\">\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<!--Card-->\n\t\t\t\t\t\t\t\t<mdb-card dark=\"true\">\n\t\n\t\t\t\t\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t\t\t\t\t<div class=\"view overlay waves-light\" mdbWavesEffect>\n\t\t\t\t\t\t\t\t\t\t<mdb-card-img src=\"assets/images/slider2.jpg\"></mdb-card-img>\n\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--/.Card image-->\n\t\n\t\t\t\t\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t\t\t\t\t<mdb-card-body class=\"white-text\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"activator px-3 mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-alt white-text\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\n\t\t\t\t\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t\t\t\t\t<mdb-card-title>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Ithemba X <small>from</small> R150/pm*</h4>\n\t\t\t\t\t\t\t\t\t\t</mdb-card-title>\n\t\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-light\">\n\t\n\t\t\t\t\t\t\t\t\t\t<!--Text-->\n\t\n\t\t\t\t\t\t\t\t\t\t<mdb-card-text class=\"white-text\">\n\t\t\t\t\t\t\t\t\t\t\tCover yourself and your family including extended family members residing in South Africa under one policy and ensure that you and your family\n\t\t\t\t\t\t\t\t\t\t\treceive a dignified funeral and repatriation services.\n\t\n\t\t\t\t\t\t\t\t\t\t\t<h4>Benefits include:</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo medical test required\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 Day claim stage.\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tTomb stone unveiling\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd up to 10 Extended Family members\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary badge-pill\"><li class=\"fa fa-user\"></li></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>3 Month Waiting Period </b>\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</mdb-card-text>\n\t\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/home/our-policies\" class=\"white-text d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"waves-light white-text\" mdbWavesEffect>Read more <small>(t&c's apply)</small>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</mdb-card-body>\n\t\t\t\t\t\t\t\t\t<!--/.Card content-->\n\t\t\t\t\t\t\t\t</mdb-card>\n\t\t\t\t\t\t\t\t<!--/.Card-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- End Card Flip -->\n\t\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

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