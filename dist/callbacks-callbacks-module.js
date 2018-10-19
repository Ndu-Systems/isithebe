(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["callbacks-callbacks-module"],{

/***/ "./src/app/views/callbacks/callbacks.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  callbacks works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/callbacks/callbacks.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/callbacks/callbacks.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.component.ts ***!
  \********************************************************/
/*! exports provided: CallbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbacksComponent", function() { return CallbacksComponent; });
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

var CallbacksComponent = /** @class */ (function () {
    function CallbacksComponent() {
    }
    CallbacksComponent.prototype.ngOnInit = function () {
    };
    CallbacksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callbacks',
            template: __webpack_require__(/*! ./callbacks.component.html */ "./src/app/views/callbacks/callbacks.component.html"),
            styles: [__webpack_require__(/*! ./callbacks.component.scss */ "./src/app/views/callbacks/callbacks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbacksComponent);
    return CallbacksComponent;
}());



/***/ }),

/***/ "./src/app/views/callbacks/callbacks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.module.ts ***!
  \*****************************************************/
/*! exports provided: CallbacksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbacksModule", function() { return CallbacksModule; });
/* harmony import */ var _callbacks_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callbacks.routing */ "./src/app/views/callbacks/callbacks.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _callbacks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callbacks.component */ "./src/app/views/callbacks/callbacks.component.ts");
/* harmony import */ var _list_callbacks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-callbacks */ "./src/app/views/callbacks/list-callbacks/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CallbacksModule = /** @class */ (function () {
    function CallbacksModule() {
    }
    CallbacksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _callbacks_routing__WEBPACK_IMPORTED_MODULE_0__["CallbacksRoutes"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
            ].concat(_shared__WEBPACK_IMPORTED_MODULE_5__["PrimeNg"], [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]),
            exports: _shared__WEBPACK_IMPORTED_MODULE_5__["PrimeNg"].slice(),
            declarations: [_callbacks_component__WEBPACK_IMPORTED_MODULE_3__["CallbacksComponent"], _list_callbacks__WEBPACK_IMPORTED_MODULE_4__["ListCallbacksComponent"]]
        })
    ], CallbacksModule);
    return CallbacksModule;
}());



/***/ }),

/***/ "./src/app/views/callbacks/callbacks.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/callbacks/callbacks.routing.ts ***!
  \******************************************************/
/*! exports provided: CallbacksRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbacksRoutes", function() { return CallbacksRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-callbacks */ "./src/app/views/callbacks/list-callbacks/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _list_callbacks__WEBPACK_IMPORTED_MODULE_2__["ListCallbacksComponent"] },
];
var CallbacksRoutes = /** @class */ (function () {
    function CallbacksRoutes() {
    }
    CallbacksRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], CallbacksRoutes);
    return CallbacksRoutes;
}());



/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/index.ts ***!
  \*********************************************************/
/*! exports provided: ListCallbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_callbacks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-callbacks.component */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListCallbacksComponent", function() { return _list_callbacks_component__WEBPACK_IMPORTED_MODULE_0__["ListCallbacksComponent"]; });




/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/list-callbacks.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  Policies  <app-page-header [heading]=\"'Call-Backs'\" [icon]=\"'fa-phone'\" [menus]=\"menus\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <!-- <a class=\"btn rounded-btn\" [routerLink]=\"['/clients/add']\">Add Client </a> -->\r\n            </div>\r\n            <div class=\"input-group mb-3 col-md-6\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                  <li class=\"fa fa-search\"></li>\r\n                </span>\r\n              </div>\r\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\r\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table table-bordered\" *ngIf=\"callbacks$ | async as callbacks\">\r\n            <thead>\r\n              <tr>\r\n                 <th>Name</th>\r\n                <th>Cellphone</th>\r\n                <th>Last Called By</th>\r\n                 \r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of callbacks | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                \r\n                <td>{{item.Name}}</td>\r\n                <td>{{item.Cellphone}}</td>\r\n                <td>{{item.UserId}}</td>\r\n                \r\n                <td><a class=\"btn rounded-btn\" [routerLink]=\"\" (click)=\"closeCall(item)\" >Close Call</a></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"justify-content-center\">\r\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/list-callbacks.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/callbacks/list-callbacks/list-callbacks.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListCallbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCallbacksComponent", function() { return ListCallbacksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListCallbacksComponent = /** @class */ (function () {
    function ListCallbacksComponent(selectService) {
        this.selectService = selectService;
        this.callbacks$ = this.selectService.select("callbacks where StatusId = 1");
    }
    ListCallbacksComponent.prototype.ngOnInit = function () {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' }
        ];
    };
    ListCallbacksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-callbacks',
            template: __webpack_require__(/*! ./list-callbacks.component.html */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.html"),
            styles: [__webpack_require__(/*! ./list-callbacks.component.scss */ "./src/app/views/callbacks/list-callbacks/list-callbacks.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_2__["SelectService"]])
    ], ListCallbacksComponent);
    return ListCallbacksComponent;
}());



/***/ })

}]);
//# sourceMappingURL=callbacks-callbacks-module.js.map