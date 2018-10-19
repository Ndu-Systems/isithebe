(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policies-policies-module"],{

/***/ "./src/app/services/policy/policy.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/policy/policy.service.ts ***!
  \***************************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
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



var PolicyService = /** @class */ (function () {
    function PolicyService(http) {
        this.http = http;
        this.url = _shared_config__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
    }
    PolicyService.prototype.addPolicy = function (data) {
        return this.http.post(this.url + "/policy/add-policy.php", data);
    };
    PolicyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PolicyService);
    return PolicyService;
}());



/***/ }),

/***/ "./src/app/views/policies/add-policy/add-policy.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/policies/add-policy/add-policy.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [@routerTransition]>\r\n    Policies  <app-page-header [heading]=\"'Add Policy'\" [icon]=\"'fa-plus'\" [menus]=\"menus\"></app-page-header>\r\n\r\n    <p-growl [(value)]=\"msgs\"></p-growl>\r\n    <div class=\"row\">\r\n      <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-header\">\r\n          </div>\r\n          <div class=\"card-body table-responsive\">\r\n            <div class=\"col-lg-10 offset-1\">\r\n              <form role=\"form\">           \r\n                \r\n                <fieldset class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <label class=\"col-md-2\"> Description:</label>\r\n                    <div class=\"input-group mb-3 col-md-6 \">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                          <li class=\"fa fa-user\"></li>\r\n                        </span>\r\n                      </div>\r\n                      <input type=\"text\" [(ngModel)]=\"Description\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Description\"\r\n                        aria-label=\"Description\" aria-describedby=\"basic-addon1\">\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n  \r\n                <!-- Surname -->\r\n                <fieldset class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <label class=\"col-md-2\">Amount:</label>\r\n                    <div class=\"input-group mb-3 col-md-6 \">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                          <li class=\"fa fa-user\"></li>\r\n                        </span>\r\n                      </div>\r\n                      <input type=\"number\" [(ngModel)]=\"Amount\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Amount\"\r\n                        aria-label=\"Amount\" aria-describedby=\"basic-addon1\">\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n           \r\n                <div class=\"justify-content-center\">\r\n                  <a  class=\"btn rounded-btn\" (click)=\"add()\">Add Policy</a> &nbsp;\r\n                  <a  class=\"btn rounded-btn\" [routerLink]=\"['/policies']\">Abort</a>\r\n                </div>\r\n              </form>\r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/views/policies/add-policy/add-policy.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/policies/add-policy/add-policy.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
            CreateUserId: this.CreateUserId
        };
        this.policyService.addPolicy(data).subscribe(function (response) {
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
    AddPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-policy',
            template: __webpack_require__(/*! ./add-policy.component.html */ "./src/app/views/policies/add-policy/add-policy.component.html"),
            styles: [__webpack_require__(/*! ./add-policy.component.scss */ "./src/app/views/policies/add-policy/add-policy.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_policy_policy_service__WEBPACK_IMPORTED_MODULE_0__["PolicyService"]])
    ], AddPolicyComponent);
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

/***/ "./src/app/views/policies/list-policies/list-policies.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/policies/list-policies/list-policies.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    Policies  <app-page-header [heading]=\"'Policies'\" [icon]=\"'fa-file'\" [menus]=\"menus\"></app-page-header>\n\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <a class=\"btn rounded-btn\" [routerLink]=\"['/policies/add']\">Add policy </a>\n            </div>\n            <div class=\"input-group mb-3 col-md-6\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\">\n                  <li class=\"fa fa-search\"></li>\n                </span>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-bordered\" *ngIf=\"policies$ | async as policies\">\n            <thead>\n              <tr>\n                <th>Amount </th>\n                <th>Description</th>\n                <th>CreateDate</th>\n                \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of policies | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                <td>{{item.Amount}}</td>\n                <td class=\"fo-{{item.StatusId}}\">{{item.Description}}</td>\n                <td>{{item.CreateDate}}</td>\n                <td><button class=\"btn rounded-btn\" (click)=\"view(item)\" >View</button></td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"justify-content-center\">\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/policies/list-policies/list-policies.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/policies/list-policies/list-policies.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fo-1 {\n  color: green; }\n\n.fo-2 {\n  color: red; }\n"

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
        localStorage.setItem(_shared_config__WEBPACK_IMPORTED_MODULE_4__["SELECTED_POLICY"], JSON.stringify(item));
        this.router.navigate(["policies/view"]);
    };
    ListPoliciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-policies',
            template: __webpack_require__(/*! ./list-policies.component.html */ "./src/app/views/policies/list-policies/list-policies.component.html"),
            styles: [__webpack_require__(/*! ./list-policies.component.scss */ "./src/app/views/policies/list-policies/list-policies.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_select_service__WEBPACK_IMPORTED_MODULE_1__["SelectService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ListPoliciesComponent);
    return ListPoliciesComponent;
}());



/***/ }),

/***/ "./src/app/views/policies/policies.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/policies/policies.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</main> \n\n"

/***/ }),

/***/ "./src/app/views/policies/policies.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/policies/policies.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoliciesComponent = /** @class */ (function () {
    function PoliciesComponent() {
    }
    PoliciesComponent.prototype.ngOnInit = function () {
    };
    PoliciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policies',
            template: __webpack_require__(/*! ./policies.component.html */ "./src/app/views/policies/policies.component.html"),
            styles: [__webpack_require__(/*! ./policies.component.scss */ "./src/app/views/policies/policies.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PoliciesComponent);
    return PoliciesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _policies_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policies.routing */ "./src/app/views/policies/policies.routing.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PoliciesModule = /** @class */ (function () {
    function PoliciesModule() {
    }
    PoliciesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _policies_routing__WEBPACK_IMPORTED_MODULE_2__["PoliciesRoutes"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"]
            ].concat(_shared__WEBPACK_IMPORTED_MODULE_3__["PrimeNg"], [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
            ]),
            declarations: _policies_routing__WEBPACK_IMPORTED_MODULE_2__["declarations"].slice()
        })
    ], PoliciesModule);
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
/* harmony import */ var _policies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies.component */ "./src/app/views/policies/policies.component.ts");
/* harmony import */ var _add_policy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-policy */ "./src/app/views/policies/add-policy/index.ts");
/* harmony import */ var _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-policies/list-policies.component */ "./src/app/views/policies/list-policies/list-policies.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-policy/view-policy.component */ "./src/app/views/policies/view-policy/view-policy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_2__["ListPoliciesComponent"] },
    { path: 'add', component: _add_policy__WEBPACK_IMPORTED_MODULE_1__["AddPolicyComponent"] },
    { path: 'view', component: _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_5__["ViewPolicyComponent"] },
];
var declarations = [_policies_component__WEBPACK_IMPORTED_MODULE_0__["PoliciesComponent"], _list_policies_list_policies_component__WEBPACK_IMPORTED_MODULE_2__["ListPoliciesComponent"], _add_policy__WEBPACK_IMPORTED_MODULE_1__["AddPolicyComponent"], _view_policy_view_policy_component__WEBPACK_IMPORTED_MODULE_5__["ViewPolicyComponent"]];
var PoliciesRoutes = /** @class */ (function () {
    function PoliciesRoutes() {
    }
    PoliciesRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], PoliciesRoutes);
    return PoliciesRoutes;
}());



/***/ }),

/***/ "./src/app/views/policies/view-policy/view-policy.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/policies/view-policy/view-policy.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Policy Plan - Details'\" [icon]=\"'fa-users'\"></app-page-header>\n    Policies  <app-page-header [heading]=\"policy.Description\" [icon]=\"'fa'\" [menus]=\"menus\"></app-page-header>\n\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-bordered\" *ngIf=\"policy\">\n\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <b>Description</b>\n                                </td>\n                                <td class=\"bold\">\n                                    {{policy.Description}}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <b>Amount</b>\n                                </td>\n                                <td class=\"bold\">\n                                    {{policy.Amount|currency:'R':true}}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <b>Status</b>\n                                </td>\n                                <td class=\"bold\">\n                                    {{policy.StatusId}}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n                <div class=\"col-md-6\">\n                  <a class=\"btn rounded-btn\" [routerLink]=\"['/policies/add']\">Add Benefit </a>\n                </div>\n                <div class=\"card-body table-responsive\" *ngIf=\"benefits$ | async as benefits; else nobefits\">\n                    <h2>\n                        Benefits  \n                    </h2>\n                    \n                    <table class=\"table table-bordered\" *ngIf=\"benefits.length; else nobefits\">\n                        <thead>\n                            <tr>\n                                <th>Amount </th>\n                                <th>Description</th>\n                                <th>CreateDate</th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let item of benefits | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                                <td>{{item.Amount |currency:'R':true}}</td>\n                                <td class=\"fo-{{item.StatusId}}\">{{item.Description}}</td>\n                                <td>{{item.CreateDate| date:'mediumDate'}}</td>\n                                <td><button class=\"btn rounded-btn\" (click)=\"viewBenefit(item)\">View</button></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #nobefits>\n                        <div>\n                        \n                          <div class=\"alert alert-warning\">\n                           No Benefits for this plan\n                          </div>\n                        </div>\n                      </ng-template>\n                </div>\n               \n                <ng-template #loadingBenefits>\n                    <div>\n                    \n                     <h1>\n                       Loading benefits...\n                     </h1>\n                    </div>\n                  </ng-template>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/policies/view-policy/view-policy.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/policies/view-policy/view-policy.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold {\n  font-weight: bold; }\n"

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
    ViewPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view-policy",
            template: __webpack_require__(/*! ./view-policy.component.html */ "./src/app/views/policies/view-policy/view-policy.component.html"),
            styles: [__webpack_require__(/*! ./view-policy.component.scss */ "./src/app/views/policies/view-policy/view-policy.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared__WEBPACK_IMPORTED_MODULE_3__["SelectService"]])
    ], ViewPolicyComponent);
    return ViewPolicyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=policies-policies-module.js.map