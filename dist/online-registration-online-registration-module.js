(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["online-registration-online-registration-module"],{

/***/ "./src/app/online-registration/online-registration.component.html":
/*!************************************************************************!*\
  !*** ./src/app/online-registration/online-registration.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<div class=\"register-page\" [@routerTransition]>\r\n    <div class=\"container\">\r\n       <h1 class=\"center\">Online Registration<small><span class=\"fa fa-edit\"></span></small></h1>\r\n      \r\n       <div class=\"panel panel-default w3l-login-form\">   \r\n           <div class=\"panel-body\">\r\n            <form role=\"form\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" name=\"first_name\"  [(ngModel)]=\"FirstName\" [ngModelOptions]=\"{standalone: true}\"  id=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" name=\"last_name\" id=\"last_name\"  [(ngModel)]=\"Surname\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control input-sm\" placeholder=\"Last Name\">\r\n                  </div>\r\n                </div>\r\n              </div>  \r\n              <div class=\"form-group\">\r\n                <input type=\"email\" name=\"email\" [(ngModel)]=\"Email\" [ngModelOptions]=\"{standalone: true}\"  id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <input type=\"text\" name=\"cellphone\" id=\"cellphone\"  [(ngModel)]=\"Cellphone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control input-sm\" placeholder=\"Cellphone Number\">\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"date\" name=\"dob\" id=\"dob\"  class=\"form-control input-sm\" [(ngModel)]=\"IDNumber\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Date Of Birth\">\r\n                   </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">                   \r\n                </div>\r\n              </div>\r\n              \r\n              <input type=\"submit\" value=\"Apply\" (click)=\"apply()\" class=\"btn btn-success btn-block\">\r\n            \r\n            </form>\r\n            <p class=\" w3l-register-p\">Go Back - <a routerLink=\"/home\" class=\"register\"> Home</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n   </div>\r\n"

/***/ }),

/***/ "./src/app/online-registration/online-registration.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/online-registration/online-registration.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.register-page {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: url('family4.jpg') center center no-repeat;\n  min-height: 100vh;\n  background-size: cover; }\n\n.register-page h1 {\n    margin: 0;\n    color: #ffffff;\n    text-align: center;\n    font-size: 50px;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 50px 0; }\n\n.register-page h1 .fa {\n      font-size: 50px; }\n\n.register-page .container {\n    z-index: 2; }\n\n.register-page .fa {\n    color: #192a56;\n    font-weight: 900;\n    font-size: 20px;\n    padding: 0 10px;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1; }\n\n.register-page .w3l-login-form {\n    background: rgba(0, 0, 0, 0.411765);\n    max-width: 650px;\n    margin: 0 auto;\n    padding: 3em;\n    border-radius: 10px;\n    box-sizing: border-box; }\n\n.register-page .w3l-login-form .w3l-form-group {\n      margin: 20px 0; }\n\n.register-page .w3l-login-form label {\n      display: block;\n      text-transform: uppercase;\n      font-size: 13px;\n      color: #d2d2d2;\n      letter-spacing: 2px;\n      margin-bottom: 10px;\n      font-style: italic; }\n\n.register-page .w3l-login-form .group {\n      display: flex;\n      padding: 15px 5px;\n      background-color: #ffffff; }\n\n.register-page .w3l-login-form input {\n      width: 100%;\n      border: none;\n      box-sizing: border-box;\n      background: #ffffff;\n      color: #000; }\n\n.register-page .w3l-login-form button {\n      background: #192a56;\n      color: #ffffff;\n      font-size: 13px;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      border: none;\n      padding: 12px 60px;\n      cursor: pointer;\n      width: 100%;\n      border-radius: 6px; }\n\n.register-page .w3l-login-form p.w3l-register-p {\n      color: #eee;\n      font-size: 13px;\n      text-align: center;\n      margin-top: 2em; }\n"

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
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/client/client.service */ "./src/app/services/client/client.service.ts");
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
    function OnlineRegistrationComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
        this.msgs = [];
    }
    OnlineRegistrationComponent.prototype.ngOnInit = function () { };
    OnlineRegistrationComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({
            severity: "success",
            summary: "Success Message",
            detail: "Client Added Successfully"
        });
    };
    OnlineRegistrationComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({
            severity: "warn",
            summary: "Validation Message",
            detail: "" + msg
        });
    };
    OnlineRegistrationComponent.prototype.add = function () {
        var _this = this;
        this.msg = undefined;
        if (this.Email == undefined || this.Email === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.FirstName === undefined || this.FirstName === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.Surname === undefined || this.Surname === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.IDNumber === undefined || this.IDNumber === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.Cellphone === undefined || this.Cellphone === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.AddressLine1 === undefined || this.AddressLine1 === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.AddressLine2 === undefined || this.AddressLine2 === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.AddressLine3 === undefined || this.AddressLine3 === "") {
            this.AddressLine3 = " ";
        }
        if (this.City === undefined || this.City === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.PostCode === undefined || this.PostCode === "") {
            this.showError("Please fill in Required Fields");
            return false;
        }
        var data = {
            FirstName: this.FirstName,
            Surname: this.Surname,
            IDNumber: this.IDNumber,
            Email: this.Email,
            Cellphone: this.Cellphone,
            AddressLine1: this.AddressLine1,
            AddressLine2: this.AddressLine2,
            AddressLine3: this.AddressLine3,
            City: this.City,
            PostCode: this.PostCode
            // GlobalKey: this.GlobalKey ,
            // CreateUserId: this.CreateUserId,
            // CreateDate: this.CreateDate ,
            // ModifyUserId: this.ModifyUserId,
            // ModifyDate: this.ModifyDate,
            // StatusId: this.StatusId;
        };
        this.patientService.addClient(data).subscribe(function (response) {
            if (response === 1) {
                _this.showSuccess();
                setTimeout(function () {
                    _this.router.navigate(["/clients"]);
                }, 2000);
            }
            if (response === _shared_config__WEBPACK_IMPORTED_MODULE_2__["USER_EXIST"]) {
                _this.showError("Client alreay exists");
            }
        });
    };
    OnlineRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-registration',
            template: __webpack_require__(/*! ./online-registration.component.html */ "./src/app/online-registration/online-registration.component.html"),
            styles: [__webpack_require__(/*! ./online-registration.component.scss */ "./src/app/online-registration/online-registration.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_client_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]])
    ], OnlineRegistrationComponent);
    return OnlineRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/online-registration/online-registration.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/online-registration/online-registration.module.ts ***!
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
/* harmony import */ var _online_registration_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./online-registration.routing */ "./src/app/online-registration/online-registration.routing.ts");
/* harmony import */ var _online_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./online-registration.component */ "./src/app/online-registration/online-registration.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]].concat(_shared_primeng__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_10__["PageHeaderModule"], _online_registration_routing__WEBPACK_IMPORTED_MODULE_5__["OnlineRegistrationRouting"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBBootstrapModule"].forRoot()]),
            declarations: [_online_registration_component__WEBPACK_IMPORTED_MODULE_6__["OnlineRegistrationComponent"]],
            exports: _shared_primeng__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"].slice(),
            providers: [_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]]
        })
    ], OnlineRegistrationModule);
    return OnlineRegistrationModule;
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
/* harmony import */ var _online_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-registration.component */ "./src/app/online-registration/online-registration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _online_registration_component__WEBPACK_IMPORTED_MODULE_2__["OnlineRegistrationComponent"]
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



/***/ })

}]);
//# sourceMappingURL=online-registration-online-registration-module.js.map