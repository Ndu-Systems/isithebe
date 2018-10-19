(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./src/app/home/index/index.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/index/index.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<div [@routerTransition]>\r\n    <!-- Masthead -->\r\n    <header class=\"masthead text-white text-center\">\r\n        <div class=\"overlay\"></div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-9 mx-auto\">\r\n                    <h1 class=\"mb-5\">Be a part of the family, we will call you back</h1>\r\n                </div>\r\n                <div class=\"col-md-12 col-lg-8 col-xl-7 mx-auto\">\r\n                    <form>\r\n                        <div class=\"form-row align-items-center\">\r\n                            <div class=\"form-group col-md-5\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-user\"></i></div>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Name\" [ngModelOptions]=\"{standalone: true}\" id=\"fullname\" name=\"fullname\" placeholder=\"Enter Your Full Name\"\r\n                                        required>\r\n \r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-5\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-phone\"></i></div>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Cellphone\" [ngModelOptions]=\"{standalone: true}\" id=\"contactnumber\" name=\"contactnumber\"\r\n                                        placeholder=\"Enter Your Cellphone Number\" required>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-2\">\r\n                                <div class=\"input-group\">\r\n                                    <button type=\"submit\" (click)=\"logCallBack()\" class=\"btn btn-primary\">Call Me Back!</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n    <!-- Icons Grid -->\r\n    <section class=\"features-icons text-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n                        <div class=\"features-icons-icon d-flex\">\r\n                            <i class=\"fa fa-desktop m-auto fa-4x\"></i>\r\n                        </div>\r\n                        <h3>Ease Of Access</h3>\r\n                        <p class=\"lead mb-0\">Access your policy information anywhere any time, over the internet of\r\n                            things.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n                        <div class=\"features-icons-icon d-flex\">\r\n                            <i class=\"fa fa-address-card m-auto fa-4x\"></i>\r\n                        </div>\r\n                        <h3>Personalised Products</h3>\r\n                        <p class=\"lead mb-0\">Enjoy a wide range of products which are tailored to your personal\r\n                            preferences.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\r\n                        <div class=\"features-icons-icon d-flex\">\r\n                            <i class=\"fa fa-eye m-auto fa-4x\"></i>\r\n                        </div>\r\n                        <h3>Secured Data</h3>\r\n                        <p class=\"lead mb-0\">We have implemented the lates technology in data protection. Your policy\r\n                            for\r\n                            your eyes only!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Image Showcases -->\r\n    <section class=\"showcase\">\r\n        <div class=\"container-fluid p-0\">\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-lg-4 text-white showcase-img\" style=\"background-image: url('assets/images/family1.jpg');\"></div>\r\n                <div class=\"col-lg-8 showcase-text\">\r\n                    <h2>Welcome to Isithebe Burial Society</h2>\r\n                    <p class=\"lead mb-0\">In the unfortunate, but certain event of death, your family should not have to\r\n                        worry about the money for the funeral.</p>\r\n                    <p class=\"lead mb-0\">Why do you need funeral cover? Because at 1Life we know you shouldn’t have to\r\n                        worry about spending your hard-earned savings or borrowing money to bury your family members.</p>\r\n                    <p class=\"lead mb-0\">Get the cover your family needs today with no medicals and no paperwork\r\n                        required!</p>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"row no-gutters\">\r\n            <div class=\"overlay\"></div>\r\n            <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-image: url('assets/images/family4.jpg');\"></div>\r\n            <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n                <h2>Fully Responsive Design</h2>\r\n                <p class=\"lead mb-0\">When you use a theme created by Start Bootstrap, you know that the theme will look\r\n                    great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>\r\n            </div>\r\n        </div> -->\r\n            <!-- <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-6 text-white showcase-img\" style=\"background-image: url('assets/images/family4.jpg');\"></div>\r\n            <div class=\"col-lg-6 my-auto showcase-text\">\r\n                <h2>Updated For Bootstrap 4</h2>\r\n                <p class=\"lead mb-0\">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way\r\n                    in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap\r\n                    4!</p>\r\n            </div>\r\n        </div> -->\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "./src/app/home/index/index.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/index/index.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header.masthead {\n  position: relative;\n  background-color: #f5f6fa;\n  background: url('family4.jpg') no-repeat center center;\n  background-size: cover;\n  padding-top: 8rem;\n  padding-bottom: 8rem; }\n  header.masthead .overlay {\n    position: absolute;\n    background-color: #f5f6fa;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0.3; }\n  header.masthead h1 {\n    font-size: 2rem; }\n  @media (min-width: 768px) {\n    header.masthead {\n      padding-top: 12rem;\n      padding-bottom: 12rem; }\n      header.masthead h1 {\n        font-size: 3rem; } }\n  .input-group-text {\n  height: 38px; }\n  .input-group-text .fa {\n    color: #192a56; }\n  .features-icons {\n  padding-top: 3rem;\n  padding-bottom: 3rem; }\n  .features-icons .fa {\n    color: #192a56; }\n  .showcase .showcase-img {\n  min-height: 30rem;\n  background-size: cover; }\n  .showcase .no-gutters > .col, .showcase .no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0; }\n  .showcase .text-white {\n  color: #fff !important; }\n  .showcase h2 {\n  font-weight: 700;\n  color: #192a56; }\n  .showcase[_ngcontent-c3] .no-gutters[_ngcontent-c3] > [class*=col-][_ngcontent-c3] {\n  padding-right: 0px;\n  padding-left: 50px; }\n"

/***/ }),

/***/ "./src/app/home/index/index.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/index/index.component.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(callBackService) {
        this.callBackService = callBackService;
        this.UserId = " ";
        this.msgs = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success!', detail: 'Thank you for taking this decision our representative will call you soon' });
    };
    IndexComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: "" + msg });
    };
    IndexComponent.prototype.logCallBack = function () {
        var _this = this;
        if (this.Name === undefined || this.Name === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.Cellphone === undefined || this.Cellphone === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        this.data = {
            Name: this.Name,
            Cellphone: this.Cellphone,
            UserId: this.UserId
        };
        debugger;
        this.callBackService.logCallBack(this.data)
            .subscribe(function (response) {
            if (response == 1) {
                _this.showSuccess();
                setTimeout(function () {
                    _this.Name = "";
                    _this.Cellphone = "";
                }, 5000);
            }
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/home/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/home/index/index.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CallBackService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/home/index/index.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/index/index.module.ts ***!
  \********************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component */ "./src/app/home/index/index.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _index_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.routing */ "./src/app/home/index/index.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"]].concat(_shared__WEBPACK_IMPORTED_MODULE_7__["PrimeNg"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"], _index_routing__WEBPACK_IMPORTED_MODULE_8__["IndexRouting"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()]),
            declarations: [_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            exports: _shared__WEBPACK_IMPORTED_MODULE_7__["PrimeNg"].slice(),
            providers: []
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ }),

/***/ "./src/app/home/index/index.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/home/index/index.routing.ts ***!
  \*********************************************/
/*! exports provided: IndexRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRouting", function() { return IndexRouting; });
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component */ "./src/app/home/index/index.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"] }
];
var IndexRouting = /** @class */ (function () {
    function IndexRouting() {
    }
    IndexRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IndexRouting);
    return IndexRouting;
}());



/***/ })

}]);
//# sourceMappingURL=index-index-module.js.map