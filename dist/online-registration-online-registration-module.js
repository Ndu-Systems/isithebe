(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["online-registration-online-registration-module"],{

/***/ "./src/app/online-registration/index.ts":
/*!**********************************************!*\
  !*** ./src/app/online-registration/index.ts ***!
  \**********************************************/
/*! exports provided: OnlineRegistrationModule, OnlineRegistrationRouting, OnlineRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _online_registration_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online.registration.module */ "./src/app/online-registration/online.registration.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnlineRegistrationModule", function() { return _online_registration_module__WEBPACK_IMPORTED_MODULE_0__["OnlineRegistrationModule"]; });

/* harmony import */ var _online_registration_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./online-registration.routing */ "./src/app/online-registration/online-registration.routing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnlineRegistrationRouting", function() { return _online_registration_routing__WEBPACK_IMPORTED_MODULE_1__["OnlineRegistrationRouting"]; });

/* harmony import */ var _online_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-registration.component */ "./src/app/online-registration/online-registration.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnlineRegistrationComponent", function() { return _online_registration_component__WEBPACK_IMPORTED_MODULE_2__["OnlineRegistrationComponent"]; });






/***/ }),

/***/ "./src/app/online-registration/online-registration.component.html":
/*!************************************************************************!*\
  !*** ./src/app/online-registration/online-registration.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  online-registration works!\n</p>\n"

/***/ }),

/***/ "./src/app/online-registration/online-registration.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/online-registration/online-registration.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/online-registration/online-registration.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/online-registration/online-registration.component.ts ***!
  \**********************************************************************/
/*! exports provided: OnlineRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineRegistrationComponent", function() { return OnlineRegistrationComponent; });
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

var OnlineRegistrationComponent = /** @class */ (function () {
    function OnlineRegistrationComponent() {
    }
    OnlineRegistrationComponent.prototype.ngOnInit = function () {
    };
    OnlineRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-registration',
            template: __webpack_require__(/*! ./online-registration.component.html */ "./src/app/online-registration/online-registration.component.html"),
            styles: [__webpack_require__(/*! ./online-registration.component.scss */ "./src/app/online-registration/online-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OnlineRegistrationComponent);
    return OnlineRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/online-registration/online-registration.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/online-registration/online-registration.routing.ts ***!
  \********************************************************************/
/*! exports provided: OnlineRegistrationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineRegistrationRouting", function() { return OnlineRegistrationRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/online-registration/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_2__["OnlineRegistrationComponent"]
    }
];
var OnlineRegistrationRouting = /** @class */ (function () {
    function OnlineRegistrationRouting() {
    }
    OnlineRegistrationRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OnlineRegistrationRouting);
    return OnlineRegistrationRouting;
}());



/***/ }),

/***/ "./src/app/online-registration/online.registration.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/online-registration/online.registration.module.ts ***!
  \*******************************************************************/
/*! exports provided: OnlineRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineRegistrationModule", function() { return OnlineRegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _shared_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/primeng */ "./src/app/shared/primeng/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./src/app/online-registration/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OnlineRegistrationModule = /** @class */ (function () {
    function OnlineRegistrationModule() {
    }
    OnlineRegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]].concat(_shared_primeng__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ___WEBPACK_IMPORTED_MODULE_5__["OnlineRegistrationRouting"]]),
            declarations: [___WEBPACK_IMPORTED_MODULE_5__["OnlineRegistrationComponent"]],
            exports: _shared_primeng__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"].slice(),
            providers: [_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]]
        })
    ], OnlineRegistrationModule);
    return OnlineRegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=online-registration-online-registration-module.js.map