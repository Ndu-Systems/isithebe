(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./src/app/services/client/client.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/client/client.service.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.url = _shared_config__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
    }
    ClientService.prototype.addClient = function (data) {
        return this.http.post(this.url + "/client/add-client.php", data);
    };
    ClientService.prototype.updateClient = function (data) {
        return this.http.post(this.url + "/client/edit-client.php", data);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/views/clients/add-client/add-client.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/clients/add-client/add-client.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [@routerTransition]>\n  <app-page-header [heading]=\"'Add Client'\" [icon]=\"'fa-user-plus'\"></app-page-header>\n  <p-growl [(value)]=\"msgs\"></p-growl>\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n        </div>\n        <div class=\"card-body table-responsive\">\n          <div class=\"col-lg-10 offset-1\">\n            <form role=\"form\">           \n              \n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">First Name:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-user\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"FirstName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"First Name\"\n                      aria-label=\"FirstName\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- Surname -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Surname:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-user\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"Surname\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Surname\"\n                      aria-label=\"Surname\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n              <!-- Surname -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">ID Number:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-id-card\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"IDNumber\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"ID Number\"\n                      aria-label=\"Surname\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- Email -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Email:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-envelope\"></li>\n                      </span>\n                    </div>\n                    <input type=\"email\" [(ngModel)]=\"Email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\n                      aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- Cellphone -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Cellphone #:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-phone\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"Cellphone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Cellphone Number\"\n                      aria-label=\"Cellphone\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- AddressLine1 -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Address Line 1:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"AddressLine1\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 1\"\n                      aria-label=\"AddressLine1\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- AddressLine2 -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Address Line 2:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"AddressLine2\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"AddressLine2\"\n                      aria-label=\"AddressLine2\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!--AddressLine3-->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Address Line 3:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"AddressLine3\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 3\"\n                      aria-label=\"AddressLine3\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!--City-->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">City:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"City\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"City\" aria-label=\"City\"\n                      aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!--PostCode-->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">PostCode:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"PostCode\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Postal Code\"\n                      aria-label=\"PostCode\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n              <div class=\"justify-content-center\">\n                <a  class=\"btn rounded-btn\" (click)=\"add()\">Add Client</a> &nbsp;\n                <a  class=\"btn rounded-btn\" [routerLink]=\"['/clients']\">Abort</a>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/clients/add-client/add-client.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/clients/add-client/add-client.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/clients/add-client/add-client.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/clients/add-client/add-client.component.ts ***!
  \******************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
        this.msgs = [];
    }
    AddClientComponent.prototype.ngOnInit = function () { };
    AddClientComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({
            severity: "success",
            summary: "Success Message",
            detail: "Client Added Successfully"
        });
    };
    AddClientComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({
            severity: "warn",
            summary: "Validation Message",
            detail: "" + msg
        });
    };
    AddClientComponent.prototype.add = function () {
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
            if (response === _shared_config__WEBPACK_IMPORTED_MODULE_3__["USER_EXIST"]) {
                _this.showError("Client alreay exists");
            }
        });
    };
    AddClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-client",
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/views/clients/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.scss */ "./src/app/views/clients/add-client/add-client.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_client_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/views/clients/clients.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/clients/clients.module.ts ***!
  \*************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-client/add-client.component */ "./src/app/views/clients/add-client/add-client.component.ts");
/* harmony import */ var _view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-clients/view-clients.component */ "./src/app/views/clients/view-clients/view-clients.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-client/view-client.component */ "./src/app/views/clients/view-client/view-client.component.ts");
/* harmony import */ var _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-client/edit-client.component */ "./src/app/views/clients/edit-client/edit-client.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_1__["ViewClientsComponent"],
    },
    {
        path: 'add', component: _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_0__["AddClientComponent"]
    }, {
        path: 'view/:id', component: _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_9__["ViewClientComponent"]
    },
    {
        path: 'edit/:id', component: _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_10__["EditClientComponent"]
    }
];
var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
            ].concat(_shared__WEBPACK_IMPORTED_MODULE_5__["PrimeNg"], [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]),
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]].concat(_shared__WEBPACK_IMPORTED_MODULE_5__["PrimeNg"]),
            declarations: [_view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_1__["ViewClientsComponent"], _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_0__["AddClientComponent"], _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_9__["ViewClientComponent"], _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_10__["EditClientComponent"]]
        })
    ], ClientsModule);
    return ClientsModule;
}());



/***/ }),

/***/ "./src/app/views/clients/edit-client/edit-client.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/clients/edit-client/edit-client.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-client works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/clients/edit-client/edit-client.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/clients/edit-client/edit-client.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/clients/edit-client/edit-client.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/clients/edit-client/edit-client.component.ts ***!
  \********************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
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

var EditClientComponent = /** @class */ (function () {
    function EditClientComponent() {
    }
    EditClientComponent.prototype.ngOnInit = function () {
    };
    EditClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/views/clients/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.scss */ "./src/app/views/clients/edit-client/edit-client.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/views/clients/view-client/view-client.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/clients/view-client/view-client.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  view-client works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/clients/view-client/view-client.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/clients/view-client/view-client.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/clients/view-client/view-client.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/clients/view-client/view-client.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientComponent", function() { return ViewClientComponent; });
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

var ViewClientComponent = /** @class */ (function () {
    function ViewClientComponent() {
    }
    ViewClientComponent.prototype.ngOnInit = function () {
    };
    ViewClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-client',
            template: __webpack_require__(/*! ./view-client.component.html */ "./src/app/views/clients/view-client/view-client.component.html"),
            styles: [__webpack_require__(/*! ./view-client.component.scss */ "./src/app/views/clients/view-client/view-client.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewClientComponent);
    return ViewClientComponent;
}());



/***/ }),

/***/ "./src/app/views/clients/view-clients/view-clients.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/clients/view-clients/view-clients.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Patients'\" [icon]=\"'fa-users'\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <a class=\"btn rounded-btn\" [routerLink]=\"['/clients/add']\">Add Client </a>\n            </div>\n            <div class=\"input-group mb-3 col-md-6\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\">\n                  <li class=\"fa fa-search\"></li>\n                </span>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-bordered\" *ngIf=\"patients$ | async as patients\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Surname</th>\n                <th>Email</th>\n                <th>Cellphone</th>\n                <th>City</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of patients | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                <th scope=\"row\">{{item.PatientId}}</th>\n                <td>{{item.FirstName}}</td>\n                <td>{{item.Surname}}</td>\n                <td>{{item.Email}}</td>\n                <td>{{item.ContactNumbers}}</td>\n                <td>{{item.City}}</td>\n                <td><a class=\"btn rounded-btn\" [routerLink]=\"['/patients/view']\" (click)=\"view(item)\" >View</a></td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"justify-content-center\">\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/clients/view-clients/view-clients.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/clients/view-clients/view-clients.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/clients/view-clients/view-clients.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/clients/view-clients/view-clients.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientsComponent", function() { return ViewClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewClientsComponent = /** @class */ (function () {
    function ViewClientsComponent(selectService, route) {
        this.selectService = selectService;
        this.route = route;
    }
    ViewClientsComponent.prototype.ngOnInit = function () {
        this.patients$ = this.selectService.select("users WHERE  Role = 'client' ORDER BY CreateDate DESC ");
    };
    ViewClientsComponent.prototype.view = function (client) {
        this.route.navigate(['/clients/view', client.UserId]);
    };
    ViewClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-clients',
            template: __webpack_require__(/*! ./view-clients.component.html */ "./src/app/views/clients/view-clients/view-clients.component.html"),
            styles: [__webpack_require__(/*! ./view-clients.component.scss */ "./src/app/views/clients/view-clients/view-clients.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["SelectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewClientsComponent);
    return ViewClientsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=clients-clients-module.js.map