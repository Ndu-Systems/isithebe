(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["our-services-our-services-module"],{

/***/ "./src/app/home/our-services/our-services-module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/our-services/our-services-module.ts ***!
  \**********************************************************/
/*! exports provided: OurServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesModule", function() { return OurServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _our_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-services.component */ "./src/app/home/our-services/our-services.component.ts");
/* harmony import */ var _our_services_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-services.routing */ "./src/app/home/our-services/our-services.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OurServicesModule = /** @class */ (function () {
    function OurServicesModule() {
    }
    OurServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _our_services_routing__WEBPACK_IMPORTED_MODULE_4__["OurServicesRouting"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot()],
            declarations: [_our_services_component__WEBPACK_IMPORTED_MODULE_3__["OurServicesComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            exports: [],
            providers: []
        })
    ], OurServicesModule);
    return OurServicesModule;
}());



/***/ }),

/***/ "./src/app/home/our-services/our-services.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/our-services/our-services.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <section>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"jumbotron\">\r\n        <div class=\"overlay\"></div>\r\n        <h1>Our Services</h1>\r\n        <p>We cater for your every need with dedicated services.</p>\r\n      </div>\r\n\r\n    </div>\r\n  </section>\r\n  <!-- Icons Grid -->\r\n  <section class=\"features-icons text-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 offset-2\">\r\n          <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n            <div class=\"features-icons-icon d-flex\">\r\n              <i class=\"fa fa-edit m-auto fa-4x\"></i>\r\n            </div>\r\n            <h3>Our Services</h3>\r\n            <p class=\"lead mb-0\">A comprehensive service, including restoration art, embalming, exhumations, cremation\r\n              & chapel facilities, repatriation (national & international) is provided at most parlours. The company\r\n              subscribes to the highest ethical standards, respecting the dignity of a funeral and being sensitive to\r\n              the cultural, ethnic and religious needs of all our</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Image Showcases -->\r\n  <section class=\"showcase\">\r\n    <div class=\"container-fluid p-0\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-lg-3 text-white showcase-img\" style=\"background-image: url('assets/images/staff.jpeg');background-size: 250px 400px;background-repeat: no-repeat;\"></div>\r\n        <div class=\"col-lg-9 showcase-text\">\r\n          <h2><i class=\"fa fa-plus-circle 2x\"></i> Cover for the Unforeseen</h2>\r\n          <p class=\"lead mb-0\">More often than not, the death of a loved one is the most unexpected event we face in\r\n            the cycle of life. It is not easy to think about planning for a funeral. Taking a little time now and\r\n            choose from our funeral insurance packages can give you great peace of mind, ensuring that you can have the\r\n            funeral you want without placing a burden on your loved ones.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-lg-3 text-white showcase-img\" style=\"background-image: url('assets/images/van.jpeg');background-size: 250px 250px;background-repeat: no-repeat;\"></div>\r\n        <div class=\"col-lg-9 showcase-text\">\r\n          <h2><i class=\"fa fa-plus-circle 2x\"></i> Repatriation</h2>\r\n          <p class=\"lead mb-0\">Isithebe provide transport for human remains from the place of death to the place of\r\n            rest within the borders of South Africa and to the neighboring countries: Botswana, Lesotho, Mozambique and\r\n            Swaziland. This service is also available to National Contracts and Corporates.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-lg-3 text-white showcase-img\" style=\"background-image: url('assets/images/reg.jpg');background-size: 250px 250px;background-repeat: no-repeat;\"></div>\r\n        <div class=\"col-lg-9 showcase-text\">\r\n          <h2><i class=\"fa fa-plus-circle 2x\"></i> Service-Registration of death</h2>\r\n          <p class=\"lead mb-0\">You would need to register the death of your loved one within 5 days. Contact nearest\r\n            Isithebe Office for assistance.</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/home/our-services/our-services.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/our-services/our-services.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-flip {\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n  .card-flip:hover .flip,\n  .card-flip.hover .flip {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  .card-flip,\n.front,\n.back {\n  width: 100%;\n  height: 480px; }\n  .flip {\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n  .front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .front {\n  z-index: 2;\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg); }\n  .back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n  .back mdb-card-body {\n    height: 660px;\n    background-color: #353B48; }\n  .btn {\n  width: 339px;\n  border: 0.5rem;\n  border-width: 0.5rem; }\n  mdb-card-footer {\n  background-color: #353B48; }\n  mdb-card-text .list-group {\n  color: #353B48; }\n  .jumbotron {\n  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #ffffff; }\n  header.masthead {\n  position: relative;\n  background-color: #f5f6fa;\n  background: url('family4.jpg') no-repeat center center;\n  background-size: cover;\n  padding-top: 8rem;\n  padding-bottom: 8rem; }\n  header.masthead .overlay {\n    position: absolute;\n    background-color: #f5f6fa;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0.3; }\n  header.masthead h1 {\n    font-size: 2rem; }\n  @media (min-width: 768px) {\n    header.masthead {\n      padding-top: 12rem;\n      padding-bottom: 12rem; }\n      header.masthead h1 {\n        font-size: 3rem; } }\n  .input-group-text {\n  height: 38px; }\n  .input-group-text .fa {\n    color: #192a56; }\n  .features-icons {\n  padding-bottom: 3rem; }\n  .features-icons .fa {\n    color: #192a56; }\n  .showcase .showcase-img {\n  min-height: 30rem;\n  background-size: cover; }\n  .showcase .no-gutters > .col, .showcase .no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0; }\n  .showcase .text-white {\n  color: #fff !important; }\n  .showcase h2 {\n  font-weight: 700;\n  color: #192a56; }\n  .showcase[_ngcontent-c3] .no-gutters[_ngcontent-c3] > [class*=col-][_ngcontent-c3] {\n  padding-right: 0px;\n  padding-left: 50px; }\n"

/***/ }),

/***/ "./src/app/home/our-services/our-services.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/our-services/our-services.component.ts ***!
  \*************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
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

var OurServicesComponent = /** @class */ (function () {
    function OurServicesComponent() {
    }
    OurServicesComponent.prototype.ngOnInit = function () {
    };
    OurServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__(/*! ./our-services.component.html */ "./src/app/home/our-services/our-services.component.html"),
            styles: [__webpack_require__(/*! ./our-services.component.scss */ "./src/app/home/our-services/our-services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurServicesComponent);
    return OurServicesComponent;
}());



/***/ }),

/***/ "./src/app/home/our-services/our-services.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/our-services/our-services.routing.ts ***!
  \***********************************************************/
/*! exports provided: OurServicesRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesRouting", function() { return OurServicesRouting; });
/* harmony import */ var _our_services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-services.component */ "./src/app/home/our-services/our-services.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _our_services_component__WEBPACK_IMPORTED_MODULE_0__["OurServicesComponent"] },
];
var OurServicesRouting = /** @class */ (function () {
    function OurServicesRouting() {
    }
    OurServicesRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OurServicesRouting);
    return OurServicesRouting;
}());



/***/ })

}]);
//# sourceMappingURL=our-services-our-services-module.js.map