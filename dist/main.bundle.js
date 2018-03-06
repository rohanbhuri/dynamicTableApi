webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_create_update_table_create_update_table_component__ = __webpack_require__("../../../../../src/app/components/create-update-table/create-update-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tables_tables_component__ = __webpack_require__("../../../../../src/app/components/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_open_table_open_table_component__ = __webpack_require__("../../../../../src/app/components/open-table/open-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_delete_table_delete_table_component__ = __webpack_require__("../../../../../src/app/components/delete-table/delete-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_display_records_display_records_component__ = __webpack_require__("../../../../../src/app/components/display-records/display-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_create_records_create_records_component__ = __webpack_require__("../../../../../src/app/components/create-records/create-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_delete_records_delete_records_component__ = __webpack_require__("../../../../../src/app/components/delete-records/delete-records.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'tables', component: __WEBPACK_IMPORTED_MODULE_14__components_tables_tables_component__["a" /* TablesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'add-table', component: __WEBPACK_IMPORTED_MODULE_13__components_create_update_table_create_update_table_component__["a" /* CreateUpdateTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'edit-table/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_create_update_table_create_update_table_component__["a" /* CreateUpdateTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'open-table/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_open_table_open_table_component__["a" /* OpenTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'delete-table/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_delete_table_delete_table_component__["a" /* DeleteTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_18__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_17__components_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_19__components_logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'add-records/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_create_records_create_records_component__["a" /* CreateRecordsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'display-records/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_display_records_display_records_component__["a" /* DisplayRecordsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'delete-records/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_delete_records_delete_records_component__["a" /* DeleteRecordsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_create_update_table_create_update_table_component__["a" /* CreateUpdateTableComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_tables_tables_component__["a" /* TablesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_open_table_open_table_component__["a" /* OpenTableComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_delete_table_delete_table_component__["a" /* DeleteTableComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_delete_table_delete_table_component__["b" /* DeleteTableDilogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_display_records_display_records_component__["a" /* DisplayRecordsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_create_records_create_records_component__["a" /* CreateRecordsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_delete_records_delete_records_component__["a" /* DeleteRecordsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__components_delete_table_delete_table_component__["b" /* DeleteTableDilogComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_9__services_table_service__["a" /* TableService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/create-records/create-records.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n  <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n</div>\n\n<mat-card *ngIf=\"!loading\" class=\"full-height\">\n  <div class=\"row\">\n    <div class=\" small-12 columns content-center\">\n      <strong class=\"margin-top-2 margin-bottom-2\">\n        <h4>Create {{data.tableName}} Table Records</h4>\n      </strong>\n    </div>\n  </div>\n  <br>\n  <div class=\"row small-up-1 medium-up-2 large-up-3\">\n    <div class=\"column\">\n      <label>Table: </label>{{data.tableName}}\n    </div>\n    <div class=\"column\">\n      <label>Description: </label>{{data.tableDescription}}\n    </div>\n    <div class=\"column content-center\">\n      <button mat-raised-button color=\"primary\" (click)=\"addRecord()\">Add Record</button>\n      <button mat-raised-button color=\"accent\" (click)=\"createRecords()\">Create Records</button>\n      <button mat-raised-button color=\"primary\" (click)=\"location.back();\">Cancel</button>\n    </div>\n  </div>\n  <br>\n\n  <table>\n    <thead>\n      <tr>\n        <th *ngFor=\"let field of schema; let i = index\">{{field.fieldName}}</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of fieldData; let j = index\">\n        <td *ngFor=\"let field of schema; let k = index\">\n          <mat-form-field class=\"full-width\" *ngIf=\"field.type == 'String'\">\n            <input matInput [(ngModel)]=\"data[field.fieldName]\">\n          </mat-form-field>\n          <mat-form-field class=\"full-width\" *ngIf=\"field.type == 'Date'\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data[field.fieldName]\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <mat-checkbox *ngIf=\"field.type == 'Boolean'\" [(ngModel)]=\"data[field.fieldName]\"></mat-checkbox>\n          <mat-form-field class=\"full-width\" *ngIf=\"field.type == 'Number'\">\n            <input matInput type=\"number\" [(ngModel)]=\"data[field.fieldName]\">\n          </mat-form-field>\n        </td>\n        <td>\n          <button mat-icon-button (click)=\"removeRecord(j);\">\n            <mat-icon color=\"warn\">delete</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <div class=\"toolbar\">\n\n      </div>\n    </tfoot>\n  </table>\n\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/create-records/create-records.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  table thead,\n  table tfoot {\n    background: #fff;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: 500;\n    border: none; }\n  table tbody {\n    border: none;\n    background-color: #fff; }\n    table tbody tr:nth-child(even) {\n      background-color: #fff; }\n\n.toolbar mat-form-field {\n  font-size: 14px;\n  padding: 0px 4px; }\n\n.toolbar .search-bar {\n  width: 80%; }\n\n.toolbar .search-icon {\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-records/create-records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateRecordsComponent = (function () {
    function CreateRecordsComponent(route, location, tableService, snackBar) {
        this.route = route;
        this.location = location;
        this.tableService = tableService;
        this.snackBar = snackBar;
        this.document = document;
        this.records = undefined;
        this.total = 0;
        this.displayedColumns = [];
        this.fieldData = [];
        this.schema = [];
        this.loading = false;
    }
    CreateRecordsComponent.prototype.ngOnInit = function () {
        this.setFields();
    };
    CreateRecordsComponent.prototype.setFields = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = params['id'];
                var data = {
                    id: _this.id
                };
                _this.loading = true;
                _this.tableService.getTable(data).subscribe(function (res) {
                    console.log(res);
                    _this.data = res.table;
                    _this.schema = res.table._schema;
                    _this.loading = false;
                    _this.addRecord();
                });
            }
        });
    };
    CreateRecordsComponent.prototype.addRecord = function () {
        var obj = {};
        this.data._schema.forEach(function (element) {
            obj[element.fieldName] = undefined;
        });
        this.fieldData.push(obj);
        console.log(this.fieldData);
    };
    CreateRecordsComponent.prototype.removeRecord = function (i) {
        this.fieldData.splice(i, 1);
    };
    CreateRecordsComponent.prototype.createRecords = function () {
        var _this = this;
        var data = {
            id: this.id,
            records: this.fieldData
        };
        this.loading = true;
        this.tableService.createRecords(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
                _this.loading = false;
                _this.location.back();
            }
            if (res.error) {
                _this.loading = false;
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
            }
        });
    };
    CreateRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-records',
            template: __webpack_require__("../../../../../src/app/components/create-records/create-records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-records/create-records.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */]])
    ], CreateRecordsComponent);
    return CreateRecordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/create-update-table/create-update-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n  <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n</div>\n\n<mat-card *ngIf=\"!loading\" class=\"full-height\">\n  <div class=\"row\">\n    <div class=\" small-12 columns content-center\">\n      <strong class=\"margin-top-2 margin-bottom-2\">\n        <h4>\n          <span *ngIf=\"!editing\">Create Table</span>\n          <span *ngIf=\"editing\">Update Table\n            <span *ngIf=\"data\">{{data.tableName}}</span>\n          </span>\n        </h4>\n      </strong>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"columns small-12 medium-3\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Table Name\" [formControl]=\"tableName\">\n        <mat-error *ngIf=\"tableName.hasError('required')\">\n          Please fill the required field\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"columns small-12 medium-4\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Table Description\" [formControl]=\"tableDescription\">\n        <mat-error *ngIf=\"tableDescription.hasError('required')\">\n          Please fill the required field\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"columns small-12 medium-5 content-center\">\n\n      <div *ngIf=\"!editing\">\n        <button mat-raised-button color=\"primary\" (click)=\"addField()\">Add Field</button>\n        <input id=\"uploadFields\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n          (change)=\"uploadFields($event)\" />\n        <button mat-raised-button color=\"primary\" (click)=\"document.getElementById('uploadFields').click();\">Upload Fields</button>\n        <button mat-raised-button color=\"accent\" (click)=\"createTable()\">Create Table</button>\n        <button mat-raised-button color=\"primary\" (click)=\"location.back();\">Cancel</button>\n      </div>\n\n      <div *ngIf=\"editing\">\n        <button mat-raised-button color=\"primary\" (click)=\"addField()\">Add Field</button>\n        <input id=\"uploadFields\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n          (change)=\"uploadFields($event)\" />\n        <button mat-raised-button color=\"primary\" (click)=\"document.getElementById('uploadFields').click();\">Upload Fields</button>\n        <button mat-raised-button color=\"accent\" (click)=\"updateTable()\">Update Table</button>\n        <button mat-raised-button color=\"primary\" (click)=\"location.back();\">Cancel</button>\n      </div>\n\n    </div>\n  </div>\n  <br>\n  <table>\n    <thead>\n      <tr>\n        <th>Field Name</th>\n        <th>Type</th>\n        <th>Length</th>\n        <th>Unique</th>\n        <th>Null</th>\n        <th>Field Description</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let field of fields let i = index\">\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput [formControl]=\"field.fieldName\">\n            <mat-error *ngIf=\"field.fieldName.hasError('required')\">\n              Please fill the required field\n            </mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <mat-select [formControl]=\"field.type\">\n              <mat-option *ngFor=\"let type of Types\" [value]=\"type\">\n                {{ type }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"field.type.hasError('required')\">\n              Please fill the required field\n            </mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\" *ngIf=\"field.type.value === 'Double' || field.type.value === 'Integer' || field.type.value ===  'Number' || field.type.value === 'String'\">\n            <input matInput type=\"number\" [formControl]=\"field.length\">\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-checkbox [formControl]=\"field.unique\"></mat-checkbox>\n        </td>\n        <td>\n          <mat-checkbox [formControl]=\"field.null\"></mat-checkbox>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput [formControl]=\"field.fieldDescription\">\n          </mat-form-field>\n        </td>\n        <td>\n          <button mat-icon-button (click)=\"removeField(i);\">\n            <mat-icon color=\"warn\">delete</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/create-update-table/create-update-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  table thead,\n  table tfoot {\n    background: #fff;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: 500;\n    border: none; }\n  table tbody {\n    border: none;\n    background-color: #fff; }\n    table tbody tr:nth-child(even) {\n      background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-update-table/create-update-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUpdateTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateUpdateTableComponent = (function () {
    function CreateUpdateTableComponent(tableService, snackBar, route, location) {
        this.tableService = tableService;
        this.snackBar = snackBar;
        this.route = route;
        this.location = location;
        this.tableName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined, [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
        ]);
        this.tableDescription = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined);
        // Types = ['Array', 'Binary Data', 'Boolean', 'Date', 'Double', 'Integer', 'JavaScript', 'Null', 'Number', 'Object', 'Object Id',
        //   'Regular Expression', 'String', 'Symbol', 'Timestamp'];
        this.Types = ['Boolean', 'Date', 'Integer', 'Null', 'Number', 'String', 'Timestamp'];
        this.editing = false;
        this.fields = [];
        this.loading = false;
        this.document = document;
        this.setEditValues();
    }
    CreateUpdateTableComponent.prototype.ngOnInit = function () {
    };
    CreateUpdateTableComponent.prototype.setEditValues = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.loading = true;
                _this.editing = true;
                _this.id = params['id'];
                var data = {
                    id: _this.id
                };
                _this.tableService.getTable(data).subscribe(function (res) {
                    console.log(res);
                    _this.data = res.table;
                    _this.tableName.setValue(_this.data.tableName);
                    _this.tableName.disable();
                    _this.tableDescription.setValue(_this.data.tableDescription);
                    _this.data._schema.forEach(function (element) {
                        _this.fields.push({
                            fieldName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element.fieldName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]),
                            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element.type, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]),
                            length: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element.length),
                            unique: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element.unique),
                            null: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element.null),
                            fieldDescription: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element.fieldDescription)
                        });
                    });
                    _this.loading = false;
                });
            }
        });
    };
    CreateUpdateTableComponent.prototype.checkTypeAssignLength = function (element) {
        if (element.type.value === 'Double' ||
            element.type.value === 'Integer' ||
            element.type.value === 'Number' ||
            element.type.value === 'String') {
            return element.length.value;
        }
        else {
            return undefined;
        }
    };
    CreateUpdateTableComponent.prototype.createTable = function () {
        var _this = this;
        this.loading = true;
        var _schema = [];
        this.fields.forEach(function (element) {
            _schema.push({
                fieldName: element.fieldName.value,
                type: element.type.value,
                length: _this.checkTypeAssignLength(element),
                unique: element.unique.value,
                null: element.null.value,
                fieldDescription: element.fieldDescription.value
            });
        });
        var data = {
            tableName: this.tableName.value,
            tableDescription: this.tableDescription.value,
            createdBy: JSON.parse(localStorage.getItem('currentUser'))._id,
            _schema: _schema
        };
        this.tableService.createTable(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
                _this.loading = false;
                _this.location.back();
            }
            if (res.error) {
                _this.loading = false;
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
            }
        });
    };
    CreateUpdateTableComponent.prototype.updateTable = function () {
        var _this = this;
        this.loading = true;
        var _schema = [];
        this.fields.forEach(function (element) {
            _schema.push({
                fieldName: element.fieldName.value,
                type: element.type.value,
                length: _this.checkTypeAssignLength(element),
                unique: element.unique.value,
                null: element.null.value,
                fieldDescription: element.fieldDescription.value
            });
        });
        var data = {
            id: this.data._id,
            tableName: this.tableName.value,
            tableDescription: this.tableDescription.value,
            changedOn: Date.now(),
            changedBy: JSON.parse(localStorage.getItem('currentUser'))._id,
            _schema: _schema
        };
        this.tableService.updateTable(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
                _this.loading = false;
                _this.location.back();
            }
            if (res.error) {
                _this.loading = false;
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
            }
        });
    };
    CreateUpdateTableComponent.prototype.addField = function () {
        this.fields.push({
            fieldName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]),
            length: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined),
            unique: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined),
            null: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined),
            fieldDescription: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined)
        });
    };
    CreateUpdateTableComponent.prototype.removeField = function (i) {
        this.fields.splice(i, 1);
    };
    CreateUpdateTableComponent.prototype.uploadFields = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            var base64Data = e.target.result.split('base64,');
            // console.log(base64Data[1]);
            var csv = atob(base64Data[1]);
            // console.log(atob(base64Data[1]));
            console.log(_this.csvJSON(csv));
            var csvData = JSON.parse(_this.csvJSON(csv));
            csvData.forEach(function (element) {
                console.log(element['\"unique\"'].replace(/"/g, ''));
                _this.fields.push({
                    fieldName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element['\"fieldName\"'].replace(/"/g, ''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]),
                    type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element['\"type\"'].replace(/"/g, ''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]),
                    length: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element['\"length\"'].replace(/"/g, '')),
                    unique: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element['\"unique\"'].replace(/"/g, '') === 'true' ? true : false),
                    null: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element['\"null\"'].replace(/"/g, '') === 'true' ? true : false),
                    fieldDescription: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](element['\"fieldDescription\"'].replace(/"/g, ''))
                });
                // console.log(this.fields);
            });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    CreateUpdateTableComponent.prototype.csvJSON = function (csv) {
        var lines = csv.split('\n');
        var result = [];
        var headers = lines[0].split(',');
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(',');
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        // return result; //JavaScript object
        return JSON.stringify(result); // JSON
    };
    CreateUpdateTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-update-table',
            template: __webpack_require__("../../../../../src/app/components/create-update-table/create-update-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-update-table/create-update-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]])
    ], CreateUpdateTableComponent);
    return CreateUpdateTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/delete-records/delete-records.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'display-none': data}\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n  <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n</div>\n\n<mat-card class=\"full-height\" [ngClass]=\"{'display-none': !data}\">\n  <div class=\"row\">\n    <div class=\" small-12 columns content-center\">\n      <strong class=\"margin-top-2 margin-bottom-2\">\n        <h4>Delete {{data.tableName}} Table Records</h4>\n      </strong>\n    </div>\n  </div>\n  <br>\n  <div class=\"row small-up-1 medium-up-2 large-up-3\">\n    <div class=\"column\">\n      <label>Table: </label>{{data.tableName}}\n    </div>\n    <div class=\"column\">\n      <label>Description: </label>{{data.tableDescription}}\n    </div>\n    <div class=\"column content-center\">\n      <button mat-raised-button color=\"accent\" (click)=\"deleteRecords();\">Delete</button>\n      <button mat-raised-button color=\"primary\" (click)=\"location.back();\">Cancel</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"toolbar text-right\">\n    <mat-form-field class=\"relative\">\n      <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables \">\n      <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n    </mat-form-field>\n  </div>\n\n  <div [ngClass]=\"{'display-none': records}\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n    <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n  </div>\n\n  <div class=\"table-container mat-elevation-z8\" [ngClass]=\"{'display-none': !records}\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"Select\">\n        <mat-header-cell *matHeaderCellDef> Select\n          <!-- <mat-checkbox matTooltip=\"Select all\">\n            <span class=\"white\">.</span>\n          </mat-checkbox> -->\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let item\">\n          <mat-checkbox [ngModel]=\"item.select\" (ngModelChange)=\"selectUnselectItems(item)\">\n            <span class=\"white\">.</span>\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"{{field.fieldName}}\" *ngFor=\"let field of data._schema let i = index\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>{{field.fieldName}}</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\">\n          <span *ngIf=\"field.type == 'Date'\">{{item[field.fieldName] | date: 'dd/MM/yyyy'}}</span>\n          <span *ngIf=\"field.type !== 'Date'\">{{item[field.fieldName]}}</span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let item; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n\n    <div class=\"table-footer\">\n      <div class=\"toolbar\">\n        <mat-form-field class=\"relative\">\n          <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables \">\n          <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n        </mat-form-field>\n      </div>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"10\" [length]=\"total\" (page)=\"onPageChange($event)\"></mat-paginator>\n    </div>\n  </div>\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/delete-records/delete-records.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  table thead,\n  table tfoot {\n    background: #fff;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: 500;\n    border: none; }\n  table tbody {\n    border: none;\n    background-color: #fff; }\n    table tbody tr:nth-child(even) {\n      background-color: #fff; }\n\n.toolbar mat-form-field {\n  font-size: 14px;\n  padding: 0px 4px; }\n\n.toolbar .search-bar {\n  width: 80%; }\n\n.toolbar .search-icon {\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n\n.table-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: distribute;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0rem 1rem; }\n\n.white {\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delete-records/delete-records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeleteRecordsComponent = (function () {
    function DeleteRecordsComponent(ngZone, route, location, tableService, snackBar) {
        this.ngZone = ngZone;
        this.route = route;
        this.location = location;
        this.tableService = tableService;
        this.snackBar = snackBar;
        this.data = {
            tableName: undefined,
            tableDescription: undefined,
            _schema: []
        };
        this.document = document;
        this.records = undefined;
        this.total = 0;
        this.displayedColumns = ['Select'];
        this.selectedIds = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](this.records);
    }
    DeleteRecordsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setFields();
        }, 0);
    };
    DeleteRecordsComponent.prototype.setFields = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = params['id'];
                var data = {
                    id: _this.id
                };
                _this.tableService.getTable(data).subscribe(function (res) {
                    console.log(res);
                    _this.data = res.table;
                    res.table._schema.forEach(function (element) {
                        _this.displayedColumns.push(element.fieldName);
                    });
                    _this.getData();
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.sort.sortChange.subscribe(function (sort) {
                        _this.getData();
                    });
                });
            }
        });
    };
    DeleteRecordsComponent.prototype.getData = function () {
        var _this = this;
        console.log(this.paginator);
        this.records = undefined;
        var params = {
            id: this.id,
            search: this.search,
            page: this.paginator.pageIndex,
            limit: this.paginator.pageSize,
            sort: (_a = {}, _a[this.sort.active] = this.sort.direction === 'desc' ? -1 : 1, _a)
        };
        this.tableService.allRecordSearch(params).subscribe(function (res) {
            console.log(res);
            if (res.error) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
            }
            if (res.success) {
                _this.records = res.records;
                _this.total = res.total;
                _this.ngZone.run(function () {
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](_this.records);
                });
            }
        });
        var _a;
    };
    DeleteRecordsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        if (filterValue === '') {
            this.dataSource.filter = undefined;
            this.search = undefined;
        }
        else {
            this.dataSource.filter = filterValue;
            this.search = filterValue;
        }
        this.getData();
    };
    DeleteRecordsComponent.prototype.onPageChange = function (event) {
        this.getData();
    };
    DeleteRecordsComponent.prototype.selectUnselectItems = function (item) {
        if (this.selectedIds.indexOf(item._id) > -1) {
            this.selectedIds.splice(this.selectedIds.indexOf(item._id, 1));
        }
        else {
            this.selectedIds.push(item._id);
        }
        console.log(this.selectedIds);
    };
    DeleteRecordsComponent.prototype.deleteRecords = function () {
        var _this = this;
        var data = {
            id: this.id,
            delete: this.selectedIds
        };
        this.tableService.deleteRecords(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
                _this.location.back();
            }
            if (res.error) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */])
    ], DeleteRecordsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */])
    ], DeleteRecordsComponent.prototype, "sort", void 0);
    DeleteRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete-records',
            template: __webpack_require__("../../../../../src/app/components/delete-records/delete-records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/delete-records/delete-records.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]])
    ], DeleteRecordsComponent);
    return DeleteRecordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/delete-table/delete-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!data\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n  <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n</div>\n\n\n<mat-card class=\"full-height\" *ngIf=\"data\">\n  <div class=\"row\">\n    <div class=\" small-12 columns content-center\">\n      <strong class=\"margin-top-2 margin-bottom-2\">\n        <h4>Table {{data.tableName}}</h4>\n      </strong>\n    </div>\n  </div>\n  <br>\n  <div class=\"row small-up-1 medium-up-2 large-up-4\">\n    <div class=\"column\">\n      <label>Table: </label>{{data.tableName}}\n    </div>\n    <div class=\"column\">\n      <label>Description: </label>{{data.tableDescription}}\n    </div>\n    <div class=\"column content-center\">\n      <button mat-raised-button color=\"warn\" (click)=\"deleteTableDilog()\">Delete</button>\n    </div>\n    <div class=\"column content-center\">\n      <button mat-raised-button color=\"primary\" (click)=\"location.back();\">Cancel</button>\n    </div>\n  </div>\n  <br>\n  <table>\n    <thead>\n      <tr>\n        <th>Field Name</th>\n        <th>Type</th>\n        <th>Length</th>\n        <th>Unique</th>\n        <th>Null</th>\n        <th>Field Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let field of data._schema let i = index\">\n        <td>\n          {{field.fieldName}}\n        </td>\n        <td>\n          {{field.type}}\n        </td>\n        <td>\n          {{field.length}}\n        </td>\n        <td>\n          <mat-checkbox disabled [ngModel]=\"field.unique\"></mat-checkbox>\n        </td>\n        <td>\n          <mat-checkbox disabled [ngModel]=\"field.null\"></mat-checkbox>\n        </td>\n        <td>\n          {{field.fieldDescription}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/delete-table/delete-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  table thead,\n  table tfoot {\n    background: #fff;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: 500;\n    border: none; }\n  table tbody {\n    border: none;\n    background-color: #fff; }\n    table tbody tr:nth-child(even) {\n      background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delete-table/delete-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteTableDilogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DeleteTableComponent = (function () {
    function DeleteTableComponent(route, location, tableService, snackBar, dialog) {
        this.route = route;
        this.location = location;
        this.tableService = tableService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.setValues();
    }
    DeleteTableComponent.prototype.ngOnInit = function () {
    };
    DeleteTableComponent.prototype.setValues = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = params['id'];
                var data = {
                    id: _this.id
                };
                _this.tableService.getTable(data).subscribe(function (res) {
                    console.log(res);
                    _this.data = res.table;
                });
            }
        });
    };
    DeleteTableComponent.prototype.deleteTableDilog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteTableDilogComponent, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteTable();
            }
        });
    };
    DeleteTableComponent.prototype.deleteTable = function () {
        var _this = this;
        var data = {
            id: this.data._id
        };
        this.data = undefined;
        this.tableService.deleteTable(data).subscribe(function (res) {
            if (res.success) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
                _this.location.back();
            }
            else {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
                _this.setValues();
            }
        });
    };
    DeleteTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete-table',
            template: __webpack_require__("../../../../../src/app/components/delete-table/delete-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/delete-table/delete-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], DeleteTableComponent);
    return DeleteTableComponent;
}());

var DeleteTableDilogComponent = (function () {
    function DeleteTableDilogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteTableDilogComponent.prototype.onYesClick = function () {
        this.dialogRef.close(true);
    };
    DeleteTableDilogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteTableDilogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete-table',
            template: "\n  <p>Are you sure you want to delete?</p>\n  <div class=\"full-width text-right\">\n  <button mat-button (click)=\"onNoClick();\">No</button>\n  <button mat-button (click)=\"onYesClick();\">Yes</button>\n  </div>\n    "
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogRef */], Object])
    ], DeleteTableDilogComponent);
    return DeleteTableDilogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/display-records/display-records.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'display-none': data}\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n  <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n</div>\n\n<mat-card class=\"full-height\" [ngClass]=\"{'display-none': !data}\">\n  <div class=\"row\">\n    <div class=\" small-12 columns content-center\">\n      <strong class=\"margin-top-2 margin-bottom-2\">\n        <h4>Table {{data.tableName}}</h4>\n      </strong>\n    </div>\n  </div>\n  <br>\n  <div class=\"row small-up-1 medium-up-2 large-up-3\">\n    <div class=\"column\">\n      <label>Table: </label>{{data.tableName}}\n    </div>\n    <div class=\"column\">\n      <label>Description: </label>{{data.tableDescription}}\n    </div>\n    <div class=\"column content-center\">\n      <button mat-raised-button color=\"primary\" (click)=\"location.back();\">Cancel</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"toolbar text-right\">\n    <mat-form-field class=\"relative\">\n      <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables \">\n      <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Add Records\" [routerLink]=\"['/add-records', this.id]\">\n      <mat-icon>library_add</mat-icon>\n    </button>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Edit Records\" [routerLink]=\"['/edit-records', this.id]\">\n      <mat-icon>mode_edit</mat-icon>\n    </button>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Delete Records\" [routerLink]=\"['/delete-records', this.id]\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <!-- <input id=\"uploadTable\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n      (change)=\"uploadTable($event)\" /> -->\n    <!-- <button mat-icon-button color=\"accent\" matTooltip=\"Upload Records\" (click)=\"document.getElementById('uploadTable').click();\">\n      <mat-icon>file_upload</mat-icon>\n    </button> -->\n    <!-- <button mat-icon-button color=\"primary\" matTooltip=\"Download Records\" (click)=\"downloadTable()\">\n      <mat-icon>file_download</mat-icon>\n    </button> -->\n  </div>\n\n\n  <div [ngClass]=\"{'display-none': records}\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n    <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n  </div>\n\n  <div class=\"table-container mat-elevation-z8\" [ngClass]=\"{'display-none': !records}\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"{{field.fieldName}}\" *ngFor=\"let field of data._schema let i = index\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>{{field.fieldName}}</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\">\n          <span *ngIf=\"field.type == 'Date'\">{{item[field.fieldName] | date: 'dd/MM/yyyy'}}</span>\n          <span *ngIf=\"field.type !== 'Date'\">{{item[field.fieldName]}}</span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let item; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n\n    <div class=\"table-footer\">\n      <div class=\"toolbar\">\n        <!-- <button mat-icon-button color=\"primary\" matTooltip=\"Download Records\" (click)=\"downloadTable()\">\n          <mat-icon>file_download</mat-icon>\n        </button> -->\n        <!-- <button mat-icon-button color=\"accent\" matTooltip=\"Upload Records\" (click)=\"document.getElementById('uploadTable').click();\">\n          <mat-icon>file_upload</mat-icon>\n        </button> -->\n        <button mat-icon-button color=\"primary\" matTooltip=\"Delete Records\" [routerLink]=\"['/delete-records', this.id]\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" matTooltip=\"Edit Records\" [routerLink]=\"['/edit-records', this.id]\">\n          <mat-icon>mode_edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" matTooltip=\"Add Records\" [routerLink]=\"['/add-records', this.id]\">\n          <mat-icon>library_add</mat-icon>\n        </button>\n        <!-- <input id=\"uploadTable\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n          (change)=\"uploadTable($event)\" /> -->\n        <mat-form-field class=\"relative\">\n          <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables \">\n          <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n        </mat-form-field>\n\n      </div>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"10\" [length]=\"total\" (page)=\"onPageChange($event)\"></mat-paginator>\n    </div>\n  </div>\n\n\n\n\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/display-records/display-records.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  table thead,\n  table tfoot {\n    background: #fff;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: 500;\n    border: none; }\n  table tbody {\n    border: none;\n    background-color: #fff; }\n    table tbody tr:nth-child(even) {\n      background-color: #fff; }\n\n.toolbar mat-form-field {\n  font-size: 14px;\n  padding: 0px 4px; }\n\n.toolbar .search-bar {\n  width: 80%; }\n\n.toolbar .search-icon {\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n\n.table-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: distribute;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0rem 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/display-records/display-records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DisplayRecordsComponent = (function () {
    function DisplayRecordsComponent(ngZone, route, location, tableService, snackBar) {
        this.ngZone = ngZone;
        this.route = route;
        this.location = location;
        this.tableService = tableService;
        this.snackBar = snackBar;
        this.data = {
            tableName: undefined,
            tableDescription: undefined,
            _schema: []
        };
        this.document = document;
        this.records = undefined;
        this.total = 0;
        this.displayedColumns = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](this.records);
    }
    DisplayRecordsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setFields();
        }, 0);
    };
    DisplayRecordsComponent.prototype.setFields = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = params['id'];
                var data = {
                    id: _this.id
                };
                _this.tableService.getTable(data).subscribe(function (res) {
                    console.log(res);
                    _this.data = res.table;
                    res.table._schema.forEach(function (element) {
                        _this.displayedColumns.push(element.fieldName);
                    });
                    _this.getData();
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.sort.sortChange.subscribe(function (sort) {
                        _this.getData();
                    });
                });
            }
        });
    };
    DisplayRecordsComponent.prototype.getData = function () {
        var _this = this;
        console.log(this.paginator);
        this.records = undefined;
        var params = {
            id: this.id,
            search: this.search,
            page: this.paginator.pageIndex,
            limit: this.paginator.pageSize,
            sort: (_a = {}, _a[this.sort.active] = this.sort.direction === 'desc' ? -1 : 1, _a)
        };
        this.tableService.allRecordSearch(params).subscribe(function (res) {
            console.log(res);
            if (res.error) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
            }
            if (res.success) {
                _this.records = res.records;
                _this.total = res.total;
                _this.ngZone.run(function () {
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](_this.records);
                });
            }
        });
        var _a;
    };
    DisplayRecordsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        if (filterValue === '') {
            this.dataSource.filter = undefined;
            this.search = undefined;
        }
        else {
            this.dataSource.filter = filterValue;
            this.search = filterValue;
        }
        this.getData();
    };
    DisplayRecordsComponent.prototype.onPageChange = function (event) {
        this.getData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */])
    ], DisplayRecordsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */])
    ], DisplayRecordsComponent.prototype, "sort", void 0);
    DisplayRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display-records',
            template: __webpack_require__("../../../../../src/app/components/display-records/display-records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/display-records/display-records.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]])
    ], DisplayRecordsComponent);
    return DisplayRecordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"header\">\n  <div class=\"row align-justify\">\n    <div class=\"small-6 large-6 columns\">\n      <button mat-button routerLink=\"/\">\n        <h5>Dynamic Table Api</h5>\n      </button>\n    </div>\n\n    <div *ngIf=\"!localStorage.getItem('currentUser')\" class=\"small-6 large-6 columns text-right\">\n      <button mat-button routerLink=\"/signup\">Sign Up</button>\n      <button mat-button routerLink=\"/signin\">Sign In</button>\n    </div>\n    <div *ngIf=\"localStorage.getItem('currentUser')\" class=\"small-6 large-6 columns text-right\">\n        <button mat-button routerLink=\"/tables\">Tables List</button>\n        <button mat-button routerLink=\"/logout\">Logout</button>\n      </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  background: #3f51b5;\n  color: WHITE; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.localStorage = localStorage;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center margin-top-4\">\n  <h1>\n    HOME PAGE\n  </h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
        localStorage.clear();
        this.router.navigate(['/home']);
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logout/logout.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/open-table/open-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!data\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n  <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n</div>\n\n<mat-card class=\"full-height\" *ngIf=\"data\">\n  <div class=\"row\">\n    <div class=\" small-12 columns content-center\">\n      <strong class=\"margin-top-2 margin-bottom-2\">\n        <h4>Table {{data.tableName}}</h4>\n      </strong>\n    </div>\n  </div>\n  <br>\n  <div class=\"row small-up-1 medium-up-2 large-up-3\">\n    <div class=\"column\">\n      <label>Table: </label>{{data.tableName}}\n    </div>\n    <div class=\"column\">\n      <label>Description: </label>{{data.tableDescription}}\n    </div>\n    <div class=\"column content-center\">\n      <button mat-raised-button color=\"primary\" (click)=\"location.back();\">Cancel</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"toolbar text-right\">\n    <mat-form-field class=\"relative\">\n      <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables \">\n      <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Add Table\" [routerLink]=\"['/add-table']\">\n      <mat-icon>library_add</mat-icon>\n    </button>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Edit Table\" [routerLink]=\"['/edit-table', this.id]\">\n      <mat-icon>mode_edit</mat-icon>\n    </button>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Delete Table\" [routerLink]=\"['/delete-table', this.id]\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <input id=\"uploadTable\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n      (change)=\"uploadTable($event)\" />\n    <button mat-icon-button color=\"accent\" matTooltip=\"Upload Tables\" (click)=\"document.getElementById('uploadTable').click();\">\n      <mat-icon>file_upload</mat-icon>\n    </button>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Download Table\" (click)=\"downloadTable()\">\n      <mat-icon>file_download</mat-icon>\n    </button>\n  </div>\n  <table>\n    <thead>\n      <tr>\n        <th>Field Name</th>\n        <th>Type</th>\n        <th>Length</th>\n        <th>Unique</th>\n        <th>Null</th>\n        <th>Field Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let field of data._schema let i = index\">\n        <td>\n          {{field.fieldName}}\n        </td>\n        <td>\n          {{field.type}}\n        </td>\n        <td>\n          {{field.length}}\n        </td>\n        <td>\n          <mat-checkbox disabled [ngModel]=\"field.unique\"></mat-checkbox>\n        </td>\n        <td>\n          <mat-checkbox disabled [ngModel]=\"field.null\"></mat-checkbox>\n        </td>\n        <td>\n          {{field.fieldDescription}}\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <div class=\"toolbar\">\n        <button mat-icon-button color=\"primary\" matTooltip=\"Download Table\" (click)=\"downloadTable()\">\n          <mat-icon>file_download</mat-icon>\n        </button>\n        <button mat-icon-button color=\"accent\" matTooltip=\"Upload Tables\" (click)=\"document.getElementById('uploadTable').click();\">\n          <mat-icon>file_upload</mat-icon>\n        </button>\n        <input id=\"uploadTable\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n          (change)=\"uploadTable($event)\" />\n        <button mat-icon-button color=\"primary\" matTooltip=\"Delete Table\" [routerLink]=\"['/delete-table', this.id]\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" matTooltip=\"Edit Table\" [routerLink]=\"['/edit-table', this.id]\">\n          <mat-icon>mode_edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" matTooltip=\"Add Table\" [routerLink]=\"['/add-table']\">\n          <mat-icon>library_add</mat-icon>\n        </button>\n        <mat-form-field class=\"relative\">\n          <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables\">\n          <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n        </mat-form-field>\n      </div>\n    </tfoot>\n  </table>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/open-table/open-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  table thead,\n  table tfoot {\n    background: #fff;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: 500;\n    border: none; }\n  table tbody {\n    border: none;\n    background-color: #fff; }\n    table tbody tr:nth-child(even) {\n      background-color: #fff; }\n\n.toolbar mat-form-field {\n  font-size: 14px;\n  padding: 0px 4px; }\n\n.toolbar .search-bar {\n  width: 80%; }\n\n.toolbar .search-icon {\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/open-table/open-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OpenTableComponent = (function () {
    function OpenTableComponent(route, location, tableService, snackBar) {
        this.route = route;
        this.location = location;
        this.tableService = tableService;
        this.snackBar = snackBar;
        this.document = document;
        this.setValues();
    }
    OpenTableComponent.prototype.ngOnInit = function () {
    };
    OpenTableComponent.prototype.setValues = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = params['id'];
                var data = {
                    id: _this.id
                };
                _this.tableService.getTable(data).subscribe(function (res) {
                    console.log(res);
                    _this.data = res.table;
                });
            }
        });
    };
    OpenTableComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        this.data._schema = [];
        var array = [];
        filterValue = filterValue.trim(); // Remove whitespace
        if (filterValue === '') {
            this.setValues();
        }
        else {
            var data = {
                id: this.id
            };
            this.tableService.getTable(data).subscribe(function (res) {
                array = res.table._schema;
                array.forEach(function (element, key) {
                    console.log(element.fieldName === filterValue);
                    if (new RegExp('^' + filterValue, 'i').test(element.fieldName)) {
                        _this.data._schema.push(element);
                    }
                    else {
                        _this.data._schema.splice(key, 1);
                    }
                });
            });
        }
    };
    OpenTableComponent.prototype.downloadTable = function () {
        var params = {
            id: this.id
        };
        this.tableService.downloadTableSchema(params).subscribe(function (res) {
            console.log(res);
            var parsedResponse = res.result;
            var blob = new Blob([parsedResponse], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            if (navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, 'TableList.csv');
            }
            else {
                var a = document.createElement('a');
                a.href = url;
                a.download = 'TableList.csv';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            window.URL.revokeObjectURL(url);
        });
    };
    OpenTableComponent.prototype.uploadTable = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            var base64Data = e.target.result.split('base64,');
            console.log(base64Data[1]);
            _this.tableService.uploadTableSchema({ id: _this.id, csv: atob(base64Data[1]) }).subscribe(function (res) {
                console.log(res);
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
                _this.setValues();
            });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    OpenTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-open-table',
            template: __webpack_require__("../../../../../src/app/components/open-table/open-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/open-table/open-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */]])
    ], OpenTableComponent);
    return OpenTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-center margin-top-4 margin-bottom-4\">\n  <mat-card>\n    <form class=\"form\">\n      <div class=\"fields text-center\">\n\n        <mat-form-field class=\"margin-bottom-1\">\n          <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n          <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"margin-bottom-2\">\n          <input matInput placeholder=\"Password\" [formControl]=\"password\" type=\"password\" required>\n          <mat-error *ngIf=\"password.invalid\">This field is required</mat-error>\n        </mat-form-field>\n\n        <a class=\"forgotPassword margin-bottom-2\">Forgot Password?</a>\n\n        <button class=\"margin-bottom-2\" [disabled]=\"!checkFormValid()\" (click)=\"submit()\" mat-raised-button color=\"primary\">\n          <strong>SIGN IN</strong>\n        </button>\n\n        <span>Don't have an account?</span>\n        <a class=\"a-login\" routerLink=\"/signup\">Click here to create one</a>\n      </div>\n    </form>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section .form {\n  background: #fff;\n  max-width: 380px;\n  width: 380px; }\n  section .form .fields {\n    padding: 0px 10px 0px 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    section .form .fields .a-label {\n      font-weight: bold;\n      color: #949494; }\n      section .form .fields .a-label .terms-condition {\n        color: #4343a1; }\n    section .form .fields span {\n      font-weight: bold;\n      color: #949494; }\n    section .form .fields .a-login {\n      color: #4343a1;\n      font-weight: bold; }\n    section .form .fields .forgotPassword {\n      -ms-flex-item-align: left;\n          -ms-grid-row-align: left;\n          align-self: left;\n      color: #3f51b5;\n      font-weight: bold; }\n  section .form .header {\n    background-color: #4343a1;\n    padding: 24px; }\n    section .form .header img {\n      max-height: 100%;\n      max-width: 100%;\n      height: 50px;\n      width: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = (function () {
    function SigninComponent(auth, snackBar, router) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    SigninComponent.prototype.submit = function () {
        var _this = this;
        if (this.checkFormValid()) {
            var user = {
                email: this.email.value,
                password: btoa(this.password.value)
            };
            this.auth.login(user).subscribe(function (res) {
                if (res.status) {
                    _this.snackBar.open(res.message, 'OK', {
                        duration: 3000,
                    });
                    localStorage.setItem('currentUser', JSON.stringify(res.user));
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.snackBar.open(res.message, 'OK', {
                        duration: 3000,
                    });
                }
            });
        }
    };
    SigninComponent.prototype.checkFormValid = function () {
        // tslint:disable-next-line:max-line-length
        return this.email.valid && this.password.valid;
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signin/signin.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-center margin-top-2 margin-bottom-2\">\n  <mat-card>\n    <form class=\"form\">\n      <div class=\"fields text-center\">\n        <mat-form-field class=\"margin-bottom-1\">\n          <input matInput placeholder=\"User Name\" [formControl]=\"username\" required>\n          <mat-error *ngIf=\"username.invalid\">This field is required</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"margin-bottom-1\">\n          <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n          <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"margin-bottom-1\">\n          <input matInput placeholder=\"Password\" [formControl]=\"password\" type=\"password\" required>\n          <mat-error *ngIf=\"password.invalid\">This field is required</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"margin-bottom-3\">\n          <input matInput placeholder=\"Password(confirm)\" [formControl]=\"confirmPassword\" type=\"password\" required>\n          <mat-error *ngIf=\"confirmPassword.invalid\">This field is required</mat-error>\n          <mat-error *ngIf=\"checkConfirmPassword()\">Password does not match</mat-error>\n        </mat-form-field>\n\n        <mat-checkbox class=\"margin-bottom-3\" [formControl]=\"terms\" required>\n          <span class=\"a-label\">I accept the\n            <a class=\"terms-condition\">terms and conditions.</a>\n          </span>\n        </mat-checkbox>\n\n        <button class=\"margin-bottom-3\" mat-raised-button color=\"primary\" [disabled]=\"!checkFormValid()\" (click)=\"submit()\">\n          <strong>JOIN</strong>\n        </button>\n\n        <span>Already have an account?</span>\n        <a class=\"a-login\" routerLink=\"/signin\">Sign in here</a>\n      </div>\n    </form>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section .form {\n  background: #fff;\n  max-width: 380px;\n  width: 380px; }\n  section .form .fields {\n    padding: 0px 10px 0px 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    section .form .fields .a-label {\n      font-weight: bold;\n      color: #949494; }\n      section .form .fields .a-label .terms-condition {\n        color: #4343a1; }\n    section .form .fields span {\n      font-weight: bold;\n      color: #949494; }\n    section .form .fields .a-login {\n      color: #4343a1;\n      font-weight: bold; }\n  section .form .header {\n    background-color: #4343a1;\n    padding: 24px; }\n    section .form .header img {\n      max-height: 100%;\n      max-width: 100%;\n      height: 50px;\n      width: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(auth, snackBar, router) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.confirmPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.terms = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](false, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.checkFormValid());
        if (this.checkFormValid()) {
            var user = {
                username: this.username.value,
                email: this.email.value,
                password: btoa(this.password.value)
            };
            this.auth.registerUser(user).subscribe(function (res) {
                console.log(res);
                if (res.status) {
                    _this.snackBar.open(res.message, 'OK', {
                        duration: 3000,
                    });
                    _this.router.navigate(['/signin']);
                }
                else {
                    _this.snackBar.open(res.message, 'OK', {
                        duration: 3000,
                    });
                }
            });
        }
    };
    SignupComponent.prototype.checkConfirmPassword = function () {
        return this.confirmPassword.value === this.password.value;
    };
    SignupComponent.prototype.checkFormValid = function () {
        // tslint:disable-next-line:max-line-length
        return this.username.valid && this.email.valid && this.password.valid && this.terms.valid && this.checkConfirmPassword() && this.confirmPassword.valid;
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"full-height\">\n\n  <div class=\"toolbar text-right\">\n\n    <mat-form-field class=\"relative\">\n      <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables \">\n      <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\" matTooltip=\"Add Table\" [routerLink]=\"['/add-table']\">\n      <mat-icon>library_add</mat-icon>\n    </button>\n    <!-- <input id=\"uploadTable\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n      (change)=\"uploadTable($event)\" /> -->\n    <!-- <button mat-icon-button color=\"accent\" matTooltip=\"Upload Tables\" (click)=\"document.getElementById('uploadTable').click();\">\n      <mat-icon>file_upload</mat-icon>\n    </button> -->\n    <button mat-icon-button color=\"primary\" matTooltip=\"Download Table\" (click)=\"downloadTable()\">\n      <mat-icon>file_download</mat-icon>\n    </button>\n  </div>\n\n  <div [ngClass]=\"{'display-none': tables}\" class=\"full-width content-center margin-top-4 margin-bottom-4\">\n    <mat-spinner class=\" margin-top-4 margin-bottom-4\"></mat-spinner>\n  </div>\n\n  <div [ngClass]=\"{'display-none': !tables}\" class=\"table-container mat-elevation-z8\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"tableName\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Table Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\" [routerLink]=\"['/display-records', item._id]\">{{item.tableName}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tableDescription\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Table Description</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\" [routerLink]=\"['/display-records', item._id]\">{{item.tableDescription}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"changedOn\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Changed On</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\" [routerLink]=\"['/display-records', item._id]\">{{item.changedOn | date: 'dd/MM/yyyy'}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"changedBy\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Changed By</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\" [routerLink]=\"['/display-records', item._id]\" matTooltip=\"{{item.changedBy?.email}}\">{{item.changedBy?.username}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdOn\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Created On</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\" [routerLink]=\"['/display-records', item._id]\">{{item.createdOn | date: 'dd/MM/yyyy'}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdBy\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Created By</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\" [routerLink]=\"['/display-records', item._id]\" matTooltip=\"{{item.createdBy?.email}}\">{{item.createdBy?.username}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n        <mat-cell *matCellDef=\"let item\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item [routerLink]=\"['/open-table', item._id]\">\n              <mat-icon>open_in_browser</mat-icon>\n              <span>Display</span>\n            </button>\n            <button mat-menu-item [routerLink]=\"['/edit-table', item._id]\">\n              <mat-icon>mode_edit</mat-icon>\n              <span>Edit</span>\n            </button>\n            <button mat-menu-item [routerLink]=\"['/delete-table', item._id]\">\n              <mat-icon>delete</mat-icon>\n              <span>Delete</span>\n            </button>\n          </mat-menu>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let item; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"table-footer\">\n      <div class=\"toolbar\">\n        <button mat-icon-button color=\"primary\" matTooltip=\"Download Table\" (click)=\"downloadTable()\">\n          <mat-icon>file_download</mat-icon>\n        </button>\n        <!-- <button mat-icon-button color=\"accent\" matTooltip=\"Upload Tables\" (click)=\"document.getElementById('uploadTable').click();\">\n          <mat-icon>file_upload</mat-icon>\n        </button> -->\n        <button mat-icon-button color=\"primary\" matTooltip=\"Add Table\" [routerLink]=\"['/add-table']\">\n          <mat-icon>library_add</mat-icon>\n        </button>\n        <!-- <input id=\"uploadTable\" style=\"width: 0px; visibility: hidden;\" type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n          (change)=\"uploadTable($event)\" /> -->\n        <mat-form-field class=\"relative\">\n          <input class=\"search-bar\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tables \">\n          <mat-icon color=\"accent\" class=\"search-icon\">search</mat-icon>\n        </mat-form-field>\n      </div>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"10\" [length]=\"total\" (page)=\"onPageChange($event)\"></mat-paginator>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: distribute;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0rem 1rem; }\n\n.toolbar mat-form-field {\n  font-size: 14px;\n  padding: 0px 4px; }\n\n.toolbar .search-bar {\n  width: 80%; }\n\n.toolbar .search-icon {\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n\nmat-row.mat-row:hover {\n  background-color: #efefef; }\n\nmat-row.mat-row {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TablesComponent = (function () {
    function TablesComponent(tableService, ngZone, dialog, snackBar) {
        this.tableService = tableService;
        this.ngZone = ngZone;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['tableName', 'tableDescription', 'changedOn', 'changedBy', 'createdOn', 'createdBy', 'actions'];
        this.tables = undefined;
        this.total = 0;
        this.document = document;
        this.search = undefined;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](this.tables);
    }
    TablesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getData();
        this.sort.sortChange.subscribe(function (sort) {
            _this.getData();
        });
    };
    TablesComponent.prototype.getData = function () {
        var _this = this;
        this.tables = undefined;
        var params = {
            search: this.dataSource.filter,
            page: this.paginator.pageIndex,
            limit: this.paginator.pageSize,
            sort: (_a = {}, _a[this.sort.active] = this.sort.direction === 'desc' ? -1 : 1, _a)
        };
        this.tableService.allTablesSearch(params).subscribe(function (res) {
            console.log(res);
            if (res.error) {
                _this.snackBar.open(res.message, 'OK', {
                    duration: 3000,
                });
            }
            if (res.success) {
                _this.tables = res.tables;
                _this.total = res.total;
                _this.ngZone.run(function () {
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](_this.tables);
                });
            }
        });
        var _a;
    };
    TablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        if (filterValue === '') {
            this.dataSource.filter = undefined;
            this.search = undefined;
        }
        else {
            this.dataSource.filter = filterValue;
            this.search = filterValue;
        }
        this.getData();
    };
    TablesComponent.prototype.onPageChange = function (event) {
        this.getData();
    };
    TablesComponent.prototype.downloadTable = function () {
        var params = {
            search: this.search,
            sort: (_a = {}, _a[this.sort.active] = this.sort.direction === 'desc' ? -1 : 1, _a)
        };
        this.tableService.downloadTableList(params).subscribe(function (res) {
            console.log(res);
            var parsedResponse = res.result;
            var blob = new Blob([parsedResponse], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            if (navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, 'TableList.csv');
            }
            else {
                var a = document.createElement('a');
                a.href = url;
                a.download = 'TableList.csv';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            window.URL.revokeObjectURL(url);
        });
        var _a;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */])
    ], TablesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */])
    ], TablesComponent.prototype, "sort", void 0);
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tables',
            template: __webpack_require__("../../../../../src/app/components/tables/tables.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/tables.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'auth/signup', data, { headers: headers })
            .map(function (res) { return res.json(); });
        // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    AuthService.prototype.login = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'auth/login', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AuthService.prototype.updateUser = function (userId, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'auth/update/' + userId, data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TableService = (function () {
    function TableService(http) {
        this.http = http;
    }
    TableService.prototype.allTablesSearch = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/list', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.getTable = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/read', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.createTable = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/create', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.updateTable = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/update', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.deleteTable = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/delete', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    // uploadTableList(data) {
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post(environment.apiUrl + 'table/list/upload', data, { headers: headers })
    //         .map((res: Response) => res.json())
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }
    TableService.prototype.downloadTableList = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/list/download', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.uploadTableSchema = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/schema/upload', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.downloadTableSchema = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'table/schema/download', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ///////////////////////////////////////////////////////////////////////////////////
    TableService.prototype.allRecordSearch = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'records/list', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.createRecords = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'records/create', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService.prototype.deleteRecords = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'records/delete', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3001/api/',
    siteUrl: 'http://localhost:3001/',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map