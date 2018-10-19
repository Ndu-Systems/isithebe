(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["benefits-benefits-module"],{

/***/ "./src/app/services/benefit/benefit.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/benefit/benefit.service.ts ***!
  \*****************************************************/
/*! exports provided: BenefitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitService", function() { return BenefitService; });
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



var BenefitService = /** @class */ (function () {
    function BenefitService(httpClient) {
        this.httpClient = httpClient;
        this.url = _shared_config__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
    }
    BenefitService.prototype.addBenefit = function (data) {
        return this.httpClient.post(this.url + "/benefit/add.php", data);
    };
    BenefitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BenefitService);
    return BenefitService;
}());



/***/ }),

/***/ "./src/app/services/benefit/index.ts":
/*!*******************************************!*\
  !*** ./src/app/services/benefit/index.ts ***!
  \*******************************************/
/*! exports provided: BenefitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _benefit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benefit.service */ "./src/app/services/benefit/benefit.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BenefitService", function() { return _benefit_service__WEBPACK_IMPORTED_MODULE_0__["BenefitService"]; });




/***/ }),

/***/ "./src/app/views/benefits/add-benefit/add-benefit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/benefits/add-benefit/add-benefit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [@routerTransition]>\r\n    Benefits  <app-page-header [heading]=\"'Add Benefit'\" [icon]=\"'fa-plus'\" [menus]=\"menus\"></app-page-header>\r\n\r\n    <p-growl [(value)]=\"msgs\"></p-growl>\r\n    <div class=\"row\">\r\n      <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-header\">\r\n          </div>\r\n          <div class=\"card-body table-responsive\">\r\n            <div class=\"col-lg-10 offset-1\">\r\n              <form role=\"form\">           \r\n                \r\n                <fieldset class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <label class=\"col-md-2\"> Description:</label>\r\n                    <div class=\"input-group mb-3 col-md-6 \">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                          <li class=\"fa fa-user\"></li>\r\n                        </span>\r\n                      </div>\r\n                      <input type=\"text\" [(ngModel)]=\"Description\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Description\"\r\n                        aria-label=\"Description\" aria-describedby=\"basic-addon1\">\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n  \r\n            \r\n                <fieldset class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <label class=\"col-md-2\">Amount:</label>\r\n                    <div class=\"input-group mb-3 col-md-6 \">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                          <li class=\"fa fa-user\"></li>\r\n                        </span>\r\n                      </div>\r\n                      <input type=\"number\" [(ngModel)]=\"Amount\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Amount\"\r\n                        aria-label=\"Amount\" aria-describedby=\"basic-addon1\">\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n           \r\n                <div class=\"justify-content-center\">\r\n                  <a  class=\"btn rounded-btn\" (click)=\"add()\">Add Benefit</a> &nbsp;\r\n                  <a  class=\"btn rounded-btn\" [routerLink]=\"['/benefits']\">Abort</a>\r\n                </div>\r\n              </form>\r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/views/benefits/add-benefit/add-benefit.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/benefits/add-benefit/add-benefit.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/benefits/add-benefit/add-benefit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/benefits/add-benefit/add-benefit.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddBenefitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBenefitComponent", function() { return AddBenefitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_benefit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/benefit */ "./src/app/services/benefit/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBenefitComponent = /** @class */ (function () {
    function AddBenefitComponent(router, benefitService) {
        this.router = router;
        this.benefitService = benefitService;
        this.msgs = [];
    }
    AddBenefitComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Benefits', url: '/benefits', icon: 'cubes' },
        ];
    };
    AddBenefitComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({
            severity: "success",
            summary: "Success Message",
            detail: "Benefit Added Successfully"
        });
    };
    AddBenefitComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({
            severity: "warn",
            summary: "Validation Message",
            detail: "" + msg
        });
    };
    AddBenefitComponent.prototype.add = function () {
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
            Amount: this.Amount
        };
        this.benefitService.addBenefit(data)
            .subscribe(function (response) {
            if (response == 1) {
                _this.showSuccess();
                setTimeout(function () {
                    _this.router.navigate(["/benefits"]);
                }, 2000);
            }
            else {
                _this.showError(response);
            }
        });
    };
    AddBenefitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-benefit',
            template: __webpack_require__(/*! ./add-benefit.component.html */ "./src/app/views/benefits/add-benefit/add-benefit.component.html"),
            styles: [__webpack_require__(/*! ./add-benefit.component.scss */ "./src/app/views/benefits/add-benefit/add-benefit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_benefit__WEBPACK_IMPORTED_MODULE_2__["BenefitService"]])
    ], AddBenefitComponent);
    return AddBenefitComponent;
}());



/***/ }),

/***/ "./src/app/views/benefits/benefits-list/benefits-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/benefits/benefits-list/benefits-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  Policies  <app-page-header [heading]=\"'Benefits'\" [icon]=\"'fa-cubes'\" [menus]=\"menus\"></app-page-header>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"card mb-3\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <a class=\"btn rounded-btn\" [routerLink]=\"['/benefits/add']\">Add benefit </a>\r\n          </div>\r\n          <div class=\"input-group mb-3 col-md-6\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                <li class=\"fa fa-search\"></li>\r\n              </span>\r\n            </div>\r\n            <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\r\n              aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table table-bordered\" *ngIf=\" benefits$ | async as benefits\">\r\n          <thead>\r\n            <tr>\r\n              <th>Description</th>\r\n              <th>Amount </th>           \r\n             \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of benefits | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n              <td class=\"fo-{{item.StatusId}}\">{{item.Description}}</td>\r\n              <td>{{item.Amount}}</td>              \r\n              <td><button class=\"btn rounded-btn\" (click)=\"view(item)\" >View</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"justify-content-center\">\r\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/benefits/benefits-list/benefits-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/benefits/benefits-list/benefits-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/benefits/benefits-list/benefits-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/benefits/benefits-list/benefits-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: BenefitsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsListComponent", function() { return BenefitsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BenefitsListComponent = /** @class */ (function () {
    function BenefitsListComponent(selectService, router) {
        this.selectService = selectService;
        this.router = router;
        this.benefits$ = this.selectService.select("benefits");
    }
    BenefitsListComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
        ];
    };
    BenefitsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-benefits-list',
            template: __webpack_require__(/*! ./benefits-list.component.html */ "./src/app/views/benefits/benefits-list/benefits-list.component.html"),
            styles: [__webpack_require__(/*! ./benefits-list.component.scss */ "./src/app/views/benefits/benefits-list/benefits-list.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_3__["SelectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BenefitsListComponent);
    return BenefitsListComponent;
}());



/***/ }),

/***/ "./src/app/views/benefits/benefits.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/benefits/benefits.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  benefits works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/benefits/benefits.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/benefits/benefits.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/benefits/benefits.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/benefits/benefits.component.ts ***!
  \******************************************************/
/*! exports provided: BenefitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsComponent", function() { return BenefitsComponent; });
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

var BenefitsComponent = /** @class */ (function () {
    function BenefitsComponent() {
    }
    BenefitsComponent.prototype.ngOnInit = function () {
    };
    BenefitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-benefits',
            template: __webpack_require__(/*! ./benefits.component.html */ "./src/app/views/benefits/benefits.component.html"),
            styles: [__webpack_require__(/*! ./benefits.component.scss */ "./src/app/views/benefits/benefits.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BenefitsComponent);
    return BenefitsComponent;
}());



/***/ }),

/***/ "./src/app/views/benefits/benefits.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/benefits/benefits.module.ts ***!
  \***************************************************/
/*! exports provided: BenefitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsModule", function() { return BenefitsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _benefits_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./benefits.routing */ "./src/app/views/benefits/benefits.routing.ts");
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







var BenefitsModule = /** @class */ (function () {
    function BenefitsModule() {
    }
    BenefitsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _benefits_routing__WEBPACK_IMPORTED_MODULE_2__["BenefitsRoutes"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"]
            ].concat(_shared__WEBPACK_IMPORTED_MODULE_3__["PrimeNg"], [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
            ]),
            declarations: _benefits_routing__WEBPACK_IMPORTED_MODULE_2__["declarations"].slice()
        })
    ], BenefitsModule);
    return BenefitsModule;
}());



/***/ }),

/***/ "./src/app/views/benefits/benefits.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/views/benefits/benefits.routing.ts ***!
  \****************************************************/
/*! exports provided: declarations, BenefitsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsRoutes", function() { return BenefitsRoutes; });
/* harmony import */ var _benefits_list_benefits_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benefits-list/benefits-list.component */ "./src/app/views/benefits/benefits-list/benefits-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _benefits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benefits.component */ "./src/app/views/benefits/benefits.component.ts");
/* harmony import */ var _add_benefit_add_benefit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-benefit/add-benefit.component */ "./src/app/views/benefits/add-benefit/add-benefit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _benefits_list_benefits_list_component__WEBPACK_IMPORTED_MODULE_0__["BenefitsListComponent"] },
    { path: 'add', component: _add_benefit_add_benefit_component__WEBPACK_IMPORTED_MODULE_4__["AddBenefitComponent"] }
];
var declarations = [_benefits_component__WEBPACK_IMPORTED_MODULE_3__["BenefitsComponent"], _benefits_list_benefits_list_component__WEBPACK_IMPORTED_MODULE_0__["BenefitsListComponent"], _add_benefit_add_benefit_component__WEBPACK_IMPORTED_MODULE_4__["AddBenefitComponent"]];
var BenefitsRoutes = /** @class */ (function () {
    function BenefitsRoutes() {
    }
    BenefitsRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BenefitsRoutes);
    return BenefitsRoutes;
}());



/***/ })

}]);
//# sourceMappingURL=benefits-benefits-module.js.map