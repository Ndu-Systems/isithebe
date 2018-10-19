(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./node_modules/primeng/api.js":
/*!*************************************!*\
  !*** ./node_modules/primeng/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/common/api */ "./node_modules/primeng/components/common/api.js"));

/***/ }),

/***/ "./node_modules/primeng/components/common/api.js":
/*!*******************************************************!*\
  !*** ./node_modules/primeng/components/common/api.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
exports.DomHandler = domhandler_1.DomHandler;
var treedragdropservice_1 = __webpack_require__(/*! ./treedragdropservice */ "./node_modules/primeng/components/common/treedragdropservice.js");
exports.TreeDragDropService = treedragdropservice_1.TreeDragDropService;
var confirmationservice_1 = __webpack_require__(/*! ./confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
exports.ConfirmationService = confirmationservice_1.ConfirmationService;
var messageservice_1 = __webpack_require__(/*! ./messageservice */ "./node_modules/primeng/components/common/messageservice.js");
exports.MessageService = messageservice_1.MessageService;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/treedragdropservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/treedragdropservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs_1.Subject();
        this.dragStopSource = new rxjs_1.Subject();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService = __decorate([
        core_1.Injectable()
    ], TreeDragDropService);
    return TreeDragDropService;
}());
exports.TreeDragDropService = TreeDragDropService;
//# sourceMappingURL=treedragdropservice.js.map

/***/ }),

/***/ "./src/app/views/clients/add-client/add-client.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/clients/add-client/add-client.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<div class=\"row\" [@routerTransition]>\r\n    <app-page-header [heading]=\"'Add Clients'\" [icon]=\"'fa-plus'\" [menus]=\"menus\"></app-page-header>\r\n\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <div class=\"col-lg-10 offset-1\">\r\n            <form role=\"form\">           \r\n              \r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">First Name:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-user\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"FirstName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"First Name\"\r\n                      aria-label=\"FirstName\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Surname -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Surname:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-user\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"Surname\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Surname\"\r\n                      aria-label=\"Surname\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n              <!-- ID Number -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">ID Number:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-id-card\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"IDNumber\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"ID Number\"\r\n                      aria-label=\"Surname\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Email -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Email:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-envelope\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"email\" [(ngModel)]=\"Email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Cellphone -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Cellphone #:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-phone\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"Cellphone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Cellphone Number\"\r\n                      aria-label=\"Cellphone\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- AddressLine1 -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 1:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"AddressLine1\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 1\"\r\n                      aria-label=\"AddressLine1\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- AddressLine2 -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 2:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"AddressLine2\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"AddressLine2\"\r\n                      aria-label=\"AddressLine2\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--AddressLine3-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 3:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"AddressLine3\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 3\"\r\n                      aria-label=\"AddressLine3\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--City-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">City:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"City\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"City\" aria-label=\"City\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--PostCode-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">PostCode:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"PostCode\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Postal Code\"\r\n                      aria-label=\"PostCode\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n              <div class=\"justify-content-center\">\r\n                <a  class=\"btn rounded-btn\" (click)=\"add()\">Add Client</a> &nbsp;\r\n                <a  class=\"btn rounded-btn\" [routerLink]=\"['/clients']\">Abort</a>\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>"

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
    AddClientComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Clients', url: '/clients' },
        ];
    };
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

/***/ "./src/app/views/clients/add-policyholder/add-policyholder.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/clients/add-policyholder/add-policyholder.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" width=\"425\"></p-confirmDialog>\n\n<div class=\"row\" [@routerTransition]>\n    <app-page-header [heading]=\"'Add Policy holder'\" [icon]=\"'fa-plus'\" [menus]=\"menus\"></app-page-header>\n\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          Select Policy for {{client.FirstName}}\n        </div>\n        <div class=\"card-body table-responsive\">\n          <div class=\"col-lg-10 offset-1\">\n           \n            <div class=\"card-body table-responsive\" *ngIf=\"policies$ | async as policies; else loadingBenefits\">\n               \n                \n                <table class=\"table table-bordered\" *ngIf=\"policies.length; else nobefits\">\n                    <thead>\n                        <tr>\n                            <th>Amount </th>\n                            <th>Description</th>\n                            <th>CreateDate</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of policies | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                            <td>{{item.Amount |currency:'R':true}}</td>\n                            <td class=\"fo-{{item.StatusId}}\">{{item.Description}}</td>\n                            <td>{{item.CreateDate| date:'mediumDate'}}</td>\n                            <td><button class=\"btn rounded-btn\" (click)=\"add(item)\">Add</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <ng-template #nobefits>\n                  <div>\n                  \n                    <div class=\"alert alert-warning\">\n                     No Policy found for {{client.FirstName}}\n                    </div>\n                  </div>\n                </ng-template>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/views/clients/add-policyholder/add-policyholder.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/clients/add-policyholder/add-policyholder.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/clients/add-policyholder/add-policyholder.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/clients/add-policyholder/add-policyholder.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddPolicyholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPolicyholderComponent", function() { return AddPolicyholderComponent; });
/* harmony import */ var _services_client_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPolicyholderComponent = /** @class */ (function () {
    function AddPolicyholderComponent(router, selectService, confirmationService, clientService) {
        this.router = router;
        this.selectService = selectService;
        this.confirmationService = confirmationService;
        this.clientService = clientService;
        this.msgs = [];
        var client = localStorage.getItem(_shared_config__WEBPACK_IMPORTED_MODULE_3__["SELECTED_CLIENT"]);
        if (!client)
            this.router.navigate(['clients']);
        this.client = JSON.parse(client);
    }
    AddPolicyholderComponent.prototype.ngOnInit = function () {
        this.policies$ = this.selectService.select("policies WHERE StatusId = 1");
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Clients', url: '/clients' },
            { name: this.client.FirstName, url: '/clients/view', icon: 'user' },
        ];
    };
    AddPolicyholderComponent.prototype.add = function (policy) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                var data = {
                    PolicyId: policy.PolicyId,
                    UserId: _this.client.UserId,
                    PolicyTypeId: 1,
                    PolicyName: policy.Description,
                    PremiumAmount: Number(policy.Amount),
                    CreateUserId: 1,
                    StatusId: 1
                };
                _this.clientService.addPolicyHolder(data)
                    .subscribe(function (response) {
                    if (response === 1) {
                        _this.showSuccess();
                        setTimeout(function () {
                            _this.router.navigate(["/clients/view"]);
                        }, 2000);
                    }
                    if (response === _shared_config__WEBPACK_IMPORTED_MODULE_3__["POLICY_HOLDER_EXIST"]) {
                        _this.showError("Policy holder alreay exists");
                    }
                });
            }
        });
    };
    AddPolicyholderComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({
            severity: "success",
            summary: "Success Message",
            detail: "Policy Holder Added Successfully"
        });
    };
    AddPolicyholderComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({
            severity: "warn",
            summary: "Validation Message",
            detail: "" + msg
        });
    };
    AddPolicyholderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-policyholder',
            template: __webpack_require__(/*! ./add-policyholder.component.html */ "./src/app/views/clients/add-policyholder/add-policyholder.component.html"),
            styles: [__webpack_require__(/*! ./add-policyholder.component.scss */ "./src/app/views/clients/add-policyholder/add-policyholder.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["SelectService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
            _services_client_client_service__WEBPACK_IMPORTED_MODULE_0__["ClientService"]])
    ], AddPolicyholderComponent);
    return AddPolicyholderComponent;
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
/* harmony import */ var _add_policyholder_add_policyholder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-policyholder/add-policyholder.component */ "./src/app/views/clients/add-policyholder/add-policyholder.component.ts");
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-client/add-client.component */ "./src/app/views/clients/add-client/add-client.component.ts");
/* harmony import */ var _view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-clients/view-clients.component */ "./src/app/views/clients/view-clients/view-clients.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-client/view-client.component */ "./src/app/views/clients/view-client/view-client.component.ts");
/* harmony import */ var _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-client/edit-client.component */ "./src/app/views/clients/edit-client/edit-client.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_2__["ViewClientsComponent"],
    },
    {
        path: 'add', component: _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_1__["AddClientComponent"]
    }, {
        path: 'view', component: _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_10__["ViewClientComponent"]
    },
    {
        path: 'add-policyholder', component: _add_policyholder_add_policyholder_component__WEBPACK_IMPORTED_MODULE_0__["AddPolicyholderComponent"]
    },
    {
        path: 'edit/:id', component: _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_11__["EditClientComponent"]
    }
];
var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]
            ].concat(_shared__WEBPACK_IMPORTED_MODULE_6__["PrimeNg"], [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ]),
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]].concat(_shared__WEBPACK_IMPORTED_MODULE_6__["PrimeNg"]),
            declarations: [_view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_2__["ViewClientsComponent"], _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_1__["AddClientComponent"], _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_10__["ViewClientComponent"], _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_11__["EditClientComponent"], _add_policyholder_add_policyholder_component__WEBPACK_IMPORTED_MODULE_0__["AddPolicyholderComponent"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]]
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

module.exports = "<div [@routerTransition]>\n        <app-page-header [heading]=\"client.FirstName\" [icon]=\"'fa-user'\" [menus]=\"menus\"></app-page-header>\n        <div class=\"row\">\n      <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n          <div class=\"card mb-3\">\n              <div class=\"card-header\">\n\n              </div>\n              <div class=\"card-body table-responsive\">\n                  <table class=\"table table-bordered\" *ngIf=\"client\">\n\n                      <tbody>\n                          <tr>\n                              <td>\n                                  <b>Name</b>\n                              </td>\n                              <td class=\"bold\">\n                                  {{client.FirstName}}\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  <b>Surname</b>\n                              </td>\n                              <td class=\"bold\">\n                                  {{client.Surname}}\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  <b>ContactNumbers</b>\n                              </td>\n                              <td class=\"bold\">\n                                  {{client.ContactNumbers}}\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  <b>Email</b>\n                              </td>\n                              <td class=\"bold\">\n                                  {{client.Email}}\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  <b>Address</b>\n                              </td>\n                              <td class=\"bold\">\n                                  {{client.AddressLine1}} <br>  \n                                  {{client.AddressLine2}} <br>  \n                                  {{client.City}} <br>  \n                                  {{client.PostCode}} <br>  \n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  <b>CreateDate</b>\n                              </td>\n                              <td class=\"bold\">\n                                  {{client.CreateDate}}  \n                                \n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  <b>ID Number</b>\n                              </td>\n                              <td class=\"bold\">\n                                  {{client.IDNumber}}  \n                                \n                              </td>\n                          </tr>\n                         \n                        \n                      </tbody>\n                  </table>\n\n              </div>\n              <div class=\"col-md-6\">\n                <a class=\"btn rounded-btn\" (click)=\"addPolicyHolder()\">Add Policy </a>\n              </div>\n              <div class=\"card-body table-responsive\" *ngIf=\"policies$ | async as policies; else loadingBenefits\">\n                  <h2>\n                    Policies  \n                  </h2>\n                  \n                  <table class=\"table table-bordered\" *ngIf=\"policies.length; else nobefits\">\n                      <thead>\n                          <tr>\n                              <th>Amount </th>\n                              <th>Policy Name</th>\n                              <th>CreateDate</th>\n\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let item of policies | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                              <td>{{item.PremiumAmount |currency:'R':true}}</td>\n                              <td class=\"fo-{{item.StatusId}}\">{{item.PolicyName}}</td>\n                              <td>{{item.CreateDate| date:'mediumDate'}}</td>\n                              <td><button class=\"btn rounded-btn\" (click)=\"viewBenefit(item)\">View</button></td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <ng-template #nobefits>\n                    <div>\n                    \n                      <div class=\"alert alert-warning\">\n                       No Policy found for {{client.FirstName}}\n                      </div>\n                    </div>\n                  </ng-template>\n              </div>\n              <ng-template #loadingBenefits>\n                <div>\n                \n                 <h1>\n                   Loading policy...\n                 </h1>\n                </div>\n              </ng-template>\n            \n          </div>\n\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/clients/view-client/view-client.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/clients/view-client/view-client.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold {\n  font-weight: bold; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");
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
    function ViewClientComponent(router, selectService) {
        this.router = router;
        this.selectService = selectService;
        var client = localStorage.getItem(_shared_config__WEBPACK_IMPORTED_MODULE_4__["SELECTED_CLIENT"]);
        if (!client)
            this.router.navigate(['clients']);
        this.client = JSON.parse(client);
    }
    ViewClientComponent.prototype.ngOnInit = function () {
        console.log(this.client);
        this.policies$ = this.selectService.select("policyholder WHERE UserId = '" + this.client.UserId + "'");
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Clients', url: '/clients' },
        ];
    };
    ViewClientComponent.prototype.addPolicyHolder = function () {
        this.router.navigate(['clients/add-policyholder']);
    };
    ViewClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-client',
            template: __webpack_require__(/*! ./view-client.component.html */ "./src/app/views/clients/view-client/view-client.component.html"),
            styles: [__webpack_require__(/*! ./view-client.component.scss */ "./src/app/views/clients/view-client/view-client.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _shared__WEBPACK_IMPORTED_MODULE_3__["SelectService"]])
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

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Clients'\" [icon]=\"'fa-users'\" [menus]=\"menus\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <a class=\"btn rounded-btn\" [routerLink]=\"['/clients/add']\">Add Client </a>\n            </div>\n            <div class=\"input-group mb-3 col-md-6\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\">\n                  <li class=\"fa fa-search\"></li>\n                </span>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-bordered\" *ngIf=\"patients$ | async as patients\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Surname</th>\n                <th>Email</th>\n                <th>Cellphone</th>\n                <th>City</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of patients | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                <th scope=\"row\">{{item.PatientId}}</th>\n                <td>{{item.FirstName}}</td>\n                <td>{{item.Surname}}</td>\n                <td>{{item.Email}}</td>\n                <td>{{item.ContactNumbers}}</td>\n                <td>{{item.City}}</td>\n                <td><a class=\"btn rounded-btn\" (click)=\"view(item)\" >View</a></td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"justify-content-center\">\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

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
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");
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
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' }
        ];
    };
    ViewClientsComponent.prototype.view = function (client) {
        localStorage.setItem(_shared_config__WEBPACK_IMPORTED_MODULE_4__["SELECTED_CLIENT"], JSON.stringify(client));
        this.route.navigate(["/clients/view"]);
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