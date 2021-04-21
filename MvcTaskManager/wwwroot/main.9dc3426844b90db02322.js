(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\usuario\Documents\Programacion\Angular\TaskManager\src\main.ts */"zUnb");


/***/ }),

/***/ "0HgP":
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashboardService {
    getTeamMembersSummary() {
        var TeamMembersSummary = [
            {
                Region: 'East',
                TeamMembersCount: 20,
                TemporarilyUnavailableMembers: 4,
            },
            {
                Region: 'West',
                TeamMembersCount: 15,
                TemporarilyUnavailableMembers: 8,
            },
            {
                Region: 'South',
                TeamMembersCount: 17,
                TemporarilyUnavailableMembers: 1,
            },
            {
                Region: 'North',
                TeamMembersCount: 15,
                TemporarilyUnavailableMembers: 6,
            },
        ];
        return TeamMembersSummary;
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });


/***/ }),

/***/ "19cX":
/*!****************************************************!*\
  !*** ./src/app/admin/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/projects.service */ "zbRu");
/* harmony import */ var _number_to_words_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../number-to-words.pipe */ "QqWU");




const _c0 = ["selectionBox"];
const _c1 = ["*"];
class ProjectComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideDetails = false;
    }
    ngOnChanges(simpleChanges) {
        console.info("------------ngOnChanges called");
        for (let propName in simpleChanges) {
            let chng = simpleChanges[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
        if (simpleChanges["project"]) {
            //this.project.teamSize += 1; //esto fue un ejercicio para ver qué se puede hacer en ngOnChanges
        }
    }
    ngOnInit() {
        console.info("------------ngOnInit called");
        this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
            this.hideDetails = hide;
        });
    }
    ngDoCheck() {
        console.info("------------ngDoCheck called");
    }
    onEditClick(event, i) {
        this.editClick.emit({ event, i });
    }
    onDeleteClick(event, i) {
        this.deleteClick.emit({ event, i });
    }
    ngOnDestroy() {
        console.info("----------------------------------------------------ngOnDestroy called");
        this.MySubscription.unsubscribe();
    }
    isAllCheckedChange(b) {
        let selectionBox = this.selectionBoxes.toArray();
        if (b) {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].check();
            }
        }
        else {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].unCheck();
            }
        }
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], contentQueries: function ProjectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectionBoxes = _t);
    } }, inputs: { project: ["currentProject", "project"], i: ["recordIndex", "i"] }, outputs: { editClick: "editClick", deleteClick: "deleteClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 42, vars: 11, consts: [[1, "card", "card-primary"], [1, "card-header"], [1, "row"], [1, "col-11"], [1, "col-1"], [1, "card-body"], [1, "table", "table-borderless", 3, "hidden"], [1, "text-info"], [1, "card-footer"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "numberToWords");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_37_listener($event) { return ctx.onEditClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_40_listener($event) { return ctx.onDeleteClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.project.projectID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.teamSize + " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 8, ctx.project.teamSize, " and "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.status);
    } }, pipes: [_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_2__["NumberToWordsPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "4aDr":
/*!************************************************************************!*\
  !*** ./src/app/admin/check-box-printer/check-box-printer.component.ts ***!
  \************************************************************************/
/*! exports provided: CheckBoxPrinterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxPrinterComponent", function() { return CheckBoxPrinterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");


class CheckBoxPrinterComponent {
    constructor() {
        this.isChecked = false;
    }
    ngOnInit() {
    }
    check() {
        this.isChecked = true;
    }
    unCheck() {
        this.isChecked = false;
    }
}
CheckBoxPrinterComponent.ɵfac = function CheckBoxPrinterComponent_Factory(t) { return new (t || CheckBoxPrinterComponent)(); };
CheckBoxPrinterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBoxPrinterComponent, selectors: [["app-check-box-printer"]], decls: 2, vars: 1, consts: [["type", "checkbox", "value", "true", "name", "isChecked", "id", "isChecked", 3, "ngModel", "ngModelChange"]], template: function CheckBoxPrinterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckBoxPrinterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3gtcHJpbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "8IOY":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _client_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-location */ "K1vk");

class Project {
    constructor() {
        this.projectID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.clientLocationID = null;
        this.clientLocation = new _client_location__WEBPACK_IMPORTED_MODULE_0__["ClientLocation"]();
    }
}


/***/ }),

/***/ "8Yq7":
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ep2G":
/*!*********************************************!*\
  !*** ./src/app/client-locations.service.ts ***!
  \*********************************************/
/*! exports provided: ClientLocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationsService", function() { return ClientLocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class ClientLocationsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getClientLocations() {
        return this.httpClient.get("/api/clientlocations", { responseType: "json" });
    }
}
ClientLocationsService.ɵfac = function ClientLocationsService_Factory(t) { return new (t || ClientLocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ClientLocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientLocationsService, factory: ClientLocationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GAAL":
/*!******************************************************!*\
  !*** ./src/app/admin/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../project */ "8IOY");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/filter.pipe */ "i6q1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects.service */ "zbRu");
/* harmony import */ var _client_locations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client-locations.service */ "Ep2G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client-location-status-validator.directive */ "V8DU");
/* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../project-idunique-validator.directive */ "bWFg");
/* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../team-size-validator.directive */ "bsir");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../project/project.component */ "19cX");
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../check-box-printer/check-box-printer.component */ "4aDr");
/* harmony import */ var _paging_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../paging.pipe */ "YmCU");















const _c0 = ["newForm"];
const _c1 = ["editForm"];
const _c2 = ["prjID"];
const _c3 = ["prjName"];
const _c4 = ["prj"];
function ProjectsComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 104);
} }
function ProjectsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-project", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("editClick", function ProjectsComponent_div_34_Template_app_project_editClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const i_r47 = ctx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r50.onEditClick($event, i_r47); })("deleteClick", function ProjectsComponent_div_34_Template_app_project_deleteClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const i_r47 = ctx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.onDeleteClick($event, i_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-check-box-printer", null, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("currentProject", project_r46)("recordIndex", i_r47);
} }
function ProjectsComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_option_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", clientLocation_r53.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", clientLocation_r53.clientLocationName, " ");
} }
function ProjectsComponent_span_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_option_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", clientLocation_r54.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", clientLocation_r54.clientLocationName, " ");
} }
function ProjectsComponent_span_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c5 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class ProjectsComponent {
    constructor(projectsService, clientLocationsService) {
        this.projectsService = projectsService;
        this.clientLocationsService = clientLocationsService;
        this.projects = [];
        this.clientLocations = [];
        this.showLoading = true;
        this.newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
        this.editProject = new _project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
        this.editIndex = null;
        this.deleteProject = new _project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
        this.deleteIndex = null;
        this.searchBy = "ProjectName";
        this.searchText = "";
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 3;
        this.isAllChecked = false;
    }
    ngOnInit() {
        this.projectsService.getAllProjects().subscribe((response) => {
            this.projects = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        this.clientLocationsService.getClientLocations().subscribe((response) => {
            this.clientLocations = response;
        });
    }
    calculateNoOfPages() {
        let filterPipe = new src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
        var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
        this.pages = [];
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    isAllCheckedChange(event) {
        let proj = this.projs.toArray();
        for (let i = 0; i < proj.length; i++) {
            proj[i].isAllCheckedChange(this.isAllChecked); //  a cada projecto le mando el valor del checkbox que esta en projectsComponent
        }
    }
    onNewClick(event) {
        this.newForm.resetForm();
        setTimeout(() => {
            this.prjID.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            this.newProject.clientLocation.clientLocationID = 0;
            this.projectsService.insertProject(this.newProject).subscribe((response) => {
                //Add Project to Grid
                var p = new _project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                this.projects.push(p);
                //Clear New Project Dialog - TextBoxes
                this.newProject.projectID = null;
                this.newProject.projectName = null;
                this.newProject.dateOfStart = null;
                this.newProject.teamSize = null;
                this.newProject.active = false;
                this.newProject.clientLocationID = null;
                this.newProject.status = null;
                jquery__WEBPACK_IMPORTED_MODULE_1__("#newFormCancel").trigger("click");
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, index) {
        this.editForm.resetForm();
        setTimeout(() => {
            this.prjName.nativeElement.focus();
            this.editProject.projectID = this.projects[index].projectID;
            this.editProject.projectName = this.projects[index].projectName;
            this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
            this.editProject.teamSize = this.projects[index].teamSize;
            this.editProject.active = this.projects[index].active;
            this.editProject.clientLocationID = this.projects[index].clientLocationID;
            this.editProject.clientLocation = this.projects[index].clientLocation;
            this.editProject.status = this.projects[index].status;
            this.editIndex = index;
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            this.projectsService.updateProject(this.editProject).subscribe((response) => {
                var p = new _project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                this.projects[this.editIndex] = p;
                this.editProject.projectID = null;
                this.editProject.projectName = null;
                this.editProject.dateOfStart = null;
                this.editProject.teamSize = null;
                this.newProject.active = false;
                this.newProject.clientLocationID = null;
                this.newProject.status = null;
                jquery__WEBPACK_IMPORTED_MODULE_1__("#editFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, index) {
        this.deleteIndex = index;
        this.deleteProject.projectID = this.projects[index].projectID;
        this.deleteProject.projectName = this.projects[index].projectName;
        this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
        this.deleteProject.teamSize = this.projects[index].teamSize;
    }
    onDeleteConfirmClick() {
        this.projectsService.deleteProject(this.deleteProject.projectID).subscribe((response) => {
            this.projects.splice(this.deleteIndex, 1);
            this.deleteProject.projectID = null;
            this.deleteProject.projectName = null;
            this.deleteProject.teamSize = null;
            this.deleteProject.dateOfStart = null;
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchClick() {
        // this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(
        //   (response: Project[]) =>
        //   {
        //     this.projects = response;
        //   },
        //   (error) => 
        //   {
        //     console.log(error);
        //   });
    }
    onSearchTextKeyup(event) {
        this.calculateNoOfPages();
    }
    onHideShowDetails(event) {
        this.projectsService.toggleDetails();
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_client_locations_service__WEBPACK_IMPORTED_MODULE_5__["ClientLocationsService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.newForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.prjID = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.prjName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.projs = _t);
    } }, decls: 238, vars: 98, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:34px", 4, "ngIf"], [1, "row"], [1, "col-xl-12", "mx-auto"], [1, "form-group", "form-row"], [1, "col-2"], ["data-toggle", "modal", "data-target", "#newModal", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "col-1", "custom-control", "custom-checkbox"], ["type", "checkbox", "value", "true", "name", "isAllChecked", "id", "isAllChecked", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "isAllChecked", 1, "custom-control-label"], ["for", "drpSearchBy", 1, "col-form-label", "col-1", "text-right"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "projectID"], ["value", "projectName"], ["value", "dateOfStart"], ["value", "teamSize"], ["for", "textSearchText", 1, "col-form-label", "col-1", "text-right"], [1, "col-3"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-12"], ["type", "text", "name", "currentPageIndex", 3, "ngModel", "ngModelChange"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "700px"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "name", "ProjectID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectID", "ngModel", "prjID", ""], ["class", "text-danger", 4, "ngIf"], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], ["for", "col-sm-4 col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocationID", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newFormCancel", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["editForm", "ngForm"], ["role", "dialog", "id", "editModal", 1, "modal"], [1, "modal-header"], ["for", "txtEditProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control-plain-text", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectID", "ngModel"], ["for", "txtEditProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectName", "ngModel", "prjName", ""], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], [1, "col-sm-4"], ["type", "checkbox", "id", "chkEditActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocationID", "ngModel"], ["data-dismiss", "modal", "id", "editFormCancel", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtDeleteProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectName", "placeholder", "Project Name", "name", "ProjectName", "disabled", "disabled", 1, "form-control-plain-text", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], [1, "col-md-4"], [3, "currentProject", "recordIndex", "editClick", "deleteClick"], ["prj", ""], ["selectionBox", ""], [1, "text-danger"], [3, "value"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProjectsComponent_i_2_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_7_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Create Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_10_listener($event) { return ctx.onHideShowDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Hide/Show Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.isAllChecked = $event; })("change", function ProjectsComponent_Template_input_change_13_listener($event) { return ctx.isAllCheckedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_18_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_31_listener($event) { return ctx.searchText = $event; })("keyup", function ProjectsComponent_Template_input_keyup_31_listener($event) { return ctx.onSearchTextKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ProjectsComponent_div_34_Template, 5, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_39_listener($event) { return ctx.currentPageIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "form", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_56_listener($event) { return ctx.newProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ProjectsComponent_span_59_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, ProjectsComponent_span_60_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, ProjectsComponent_span_61_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_66_listener($event) { return ctx.newProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, ProjectsComponent_span_68_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, ProjectsComponent_span_69_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, ProjectsComponent_span_70_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_75_listener($event) { return ctx.newProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, ProjectsComponent_span_77_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "input", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_82_listener($event) { return ctx.newProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, ProjectsComponent_span_84_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, ProjectsComponent_span_85_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_91_listener($event) { return ctx.newProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "input", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_99_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "input", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_104_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, ProjectsComponent_span_108_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "select", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_113_listener($event) { return ctx.newProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, ProjectsComponent_option_117_Template, 2, 2, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, ProjectsComponent_span_118_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, ProjectsComponent_span_119_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_123_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "form", 23, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Edit Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "input", 71, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_141_listener($event) { return ctx.editProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](143, ProjectsComponent_span_143_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](144, ProjectsComponent_span_144_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](145, ProjectsComponent_span_145_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "input", 74, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_150_listener($event) { return ctx.editProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, ProjectsComponent_span_153_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](154, ProjectsComponent_span_154_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](155, ProjectsComponent_span_155_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "input", 77, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_160_listener($event) { return ctx.editProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](162, ProjectsComponent_span_162_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "input", 80, 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_167_listener($event) { return ctx.editProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](169, ProjectsComponent_span_169_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](170, ProjectsComponent_span_170_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_176_listener($event) { return ctx.editProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "input", 86, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_184_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "input", 89, 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_189_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "label", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](193, ProjectsComponent_span_193_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "select", 93, 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_198_listener($event) { return ctx.editProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](202, ProjectsComponent_option_202_Template, 2, 2, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](203, ProjectsComponent_span_203_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](204, ProjectsComponent_span_204_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_208_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Delete Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "Are you sure to delete this Project?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "label", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_227_listener($event) { return ctx.deleteProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_232_listener($event) { return ctx.deleteProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "button", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_236_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](57);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](67);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](76);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](83);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](100);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](114);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](126);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](142);
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](151);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](161);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](168);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](185);
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isAllChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](35, 60, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](36, 64, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.currentPageIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](68, _c5, _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted), _r3.valid && (_r3.dirty || _r3.touched || _r2.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted) && (_r3.errors == null ? null : _r3.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted) && (_r3.errors == null ? null : _r3.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted) && (_r3.errors == null ? null : _r3.errors.uniqueProjectID));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](71, _c5, _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted), _r8.valid && (_r8.dirty || _r8.touched || _r2.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted) && (_r8.errors == null ? null : _r8.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted) && (_r8.errors == null ? null : _r8.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted) && (_r8.errors == null ? null : _r8.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](74, _c5, _r12.invalid && (_r12.dirty || _r12.touched || _r2.submitted), _r12.valid && (_r12.dirty || _r12.touched || _r2.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r2.submitted) && (_r12.errors == null ? null : _r12.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](77, _c5, _r14.invalid && (_r14.dirty || _r14.touched || _r2.submitted), _r14.valid && (_r14.dirty || _r14.touched || _r2.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched || _r2.submitted) && (_r14.errors == null ? null : _r14.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched || _r2.submitted) && (_r14.errors == null ? null : _r14.errors.divisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r17.invalid && (_r17.dirty || _r17.touched || _r2.submitted) && (_r17.errors == null ? null : _r17.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](80, _c5, _r20.invalid && (_r20.dirty || _r20.touched || _r2.submitted), _r20.valid && (_r20.dirty || _r20.touched || _r2.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.clientLocations);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r20.invalid && (_r20.dirty || _r20.touched || _r2.submitted) && (_r20.errors == null ? null : _r20.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched || _r2.submitted) && (_r2.errors == null ? null : _r2.errors.clientLocationStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](83, _c5, _r25.invalid && (_r25.dirty || _r25.touched || _r2.submitted), _r25.valid && (_r25.dirty || _r25.touched || _r2.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && (_r25.errors == null ? null : _r25.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && (_r25.errors == null ? null : _r25.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && (_r25.errors == null ? null : _r25.errors.uniqueProjectID));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](86, _c5, _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted), _r29.valid && (_r29.dirty || _r29.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && (_r29.errors == null ? null : _r29.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && (_r29.errors == null ? null : _r29.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && (_r29.errors == null ? null : _r29.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](89, _c5, _r34.invalid && (_r34.dirty || _r34.touched || _r24.submitted), _r34.valid && (_r34.dirty || _r34.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r34.invalid && _r24.submitted && (_r34.errors == null ? null : _r34.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](92, _c5, _r36.invalid && (_r36.dirty || _r36.touched || _r24.submitted), _r36.valid && (_r36.dirty || _r36.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r36.invalid && (_r36.dirty || _r36.touched || _r24.submitted) && (_r36.errors == null ? null : _r36.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r36.invalid && (_r36.dirty || _r36.touched || _r24.submitted) && (_r36.errors == null ? null : _r36.errors.divisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r24.submitted) && (_r39.errors == null ? null : _r39.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.editProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](95, _c5, _r42.invalid && (_r42.dirty || _r42.touched || _r24.submitted), _r42.valid && (_r42.dirty || _r42.touched || _r24.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.clientLocations);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r42.invalid && (_r42.dirty || _r42.touched || _r24.submitted) && (_r42.errors == null ? null : _r42.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r24.invalid && (_r24.dirty || _r24.touched || _r24.submitted) && (_r24.errors == null ? null : _r24.errors.clientLocationStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_8__["ClientLocationStatusValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_9__["ProjectIDUniqueValidatorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_10__["TeamSizeValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"], _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_12__["CheckBoxPrinterComponent"]], pipes: [_paging_pipe__WEBPACK_IMPORTED_MODULE_13__["PagingPipe"], src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "GWYg":
/*!***********************************************!*\
  !*** ./src/app/can-activate-guard.service.ts ***!
  \***********************************************/
/*! exports provided: CanActivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuardService", function() { return CanActivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "edGd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "tl5U");




class CanActivateGuardService {
    constructor(loginService, router, jwtHelperService) {
        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
    }
    canActivate(route) {
        //console.log(this.router.url);
        var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.loginService.isAuthenticated() && this.jwtHelperService.decodeToken(token).role == route.data.expectedRole) {
            return true; //the user can navigate to the particular route
        }
        else {
            this.router.navigate(["login"]);
            return false; //the user can't navigate to the particular route
        }
    }
}
CanActivateGuardService.ɵfac = function CanActivateGuardService_Factory(t) { return new (t || CanActivateGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
CanActivateGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanActivateGuardService, factory: CanActivateGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GXPF":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TasksComponent {
    constructor() { }
    ngOnInit() {
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 2, vars: 0, template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tasks works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "K1vk":
/*!************************************!*\
  !*** ./src/app/client-location.ts ***!
  \************************************/
/*! exports provided: ClientLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocation", function() { return ClientLocation; });
class ClientLocation {
    constructor() {
        this.clientLocationID = null;
        this.clientLocationName = null;
    }
}


/***/ }),

/***/ "Mplv":
/*!********************************************!*\
  !*** ./src/app/jwt-interceptor.service.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class JwtInterceptorService {
    constructor() { }
    intercept(request, next) {
        var currentUser = { token: "" };
        if (sessionStorage.currentUser != null) {
            currentUser = JSON.parse(sessionStorage.currentUser);
        }
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + currentUser.token
            }
        });
        return next.handle(request);
    }
}
JwtInterceptorService.ɵfac = function JwtInterceptorService_Factory(t) { return new (t || JwtInterceptorService)(); };
JwtInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptorService, factory: JwtInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QqWU":
/*!*****************************************!*\
  !*** ./src/app/number-to-words.pipe.ts ***!
  \*****************************************/
/*! exports provided: NumberToWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToWordsPipe", function() { return NumberToWordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NumberToWordsPipe {
    constructor() {
        this.inWords = (n, separator) => {
            let a = [
                '', 'One', 'Two', 'Three', 'Four',
                'Five', 'Six', 'Seven', 'Eight', 'Nine',
                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
                'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
            ];
            let b = [
                '', '', 'Twenty', 'Thirty', 'Forty',
                'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
            ];
            let g = [
                '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion',
                'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'
            ];
            const arr = x => Array.from(x);
            const num = x => Number(x) || 0;
            const str = x => String(x);
            const isEmpty = xs => xs.length === 0;
            const take = n => xs => xs.slice(0, n);
            const drop = n => xs => xs.slice(n);
            const reverse = xs => xs.slice(0).reverse();
            const comp = f => g => x => f(g(x));
            const not = x => !x;
            const chunk = n => xs => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
            let makeGroup = ([ones, tens, huns]) => {
                return [
                    num(huns) === 0 ? '' : a[huns] + ' Hundred ',
                    num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
                    a[tens + ones] || a[ones]
                ].join('');
            };
            let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
            if (typeof n === 'number')
                return this.inWords(str(n), separator);
            else if (n === '0')
                return 'Zero';
            else
                return comp(chunk(3))(reverse)(arr(n)) //le agregué el espacio de entrada
                    .map(makeGroup)
                    .map(thousand)
                    .filter(comp(not)(isEmpty))
                    .reverse()
                    .join(separator);
        };
    }
    transform(value, separator) {
        if (value == null) {
            return null;
        }
        else {
            return this.inWords(value, separator);
        }
    }
}
NumberToWordsPipe.ɵfac = function NumberToWordsPipe_Factory(t) { return new (t || NumberToWordsPipe)(); };
NumberToWordsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberToWords", type: NumberToWordsPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "edGd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");






function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loginService.currentUserName);
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.loginService.Logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(loginService, domSanitizer) {
        this.loginService = loginService;
        this.domSanitizer = domSanitizer;
    }
    onSearchClick() {
        console.log(this.loginService.currentUserName);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 6, consts: [[1, "navbar", "navbar-expand-sm", "bg-success", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "about", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning", "my2-", "my-sm-0", 3, "click"], [1, "container-fluid"], ["routerLink", "dashboard", 1, "nav-link"], ["routerLink", "projects", 1, "nav-link"], ["href", "#", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"], ["routerLink", "login", 1, "nav-link"], ["routerLink", "signup", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Angular Task Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_li_7_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_li_15_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_22_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Uj+i":
/*!*************************************!*\
  !*** ./src/app/login-view-model.ts ***!
  \*************************************/
/*! exports provided: LoginViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewModel", function() { return LoginViewModel; });
class LoginViewModel {
}


/***/ }),

/***/ "V8DU":
/*!***************************************************************!*\
  !*** ./src/app/client-location-status-validator.directive.ts ***!
  \***************************************************************/
/*! exports provided: ClientLocationStatusValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationStatusValidatorDirective", function() { return ClientLocationStatusValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ClientLocationStatusValidatorDirective {
    constructor() {
    }
    validate(control) {
        let isValid = true;
        if (control.value.ClientLocation == 6 && control.value.Status == "Support") {
            isValid = false; //indicates invalid
        }
        if (isValid == true) {
            return null; //valid
        }
        else {
            return { clientLocationStatus: { valid: false } }; //invalid
        }
    }
}
ClientLocationStatusValidatorDirective.ɵfac = function ClientLocationStatusValidatorDirective_Factory(t) { return new (t || ClientLocationStatusValidatorDirective)(); };
ClientLocationStatusValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ClientLocationStatusValidatorDirective, selectors: [["", "appClientLocationStatusValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: ClientLocationStatusValidatorDirective, multi: true }])] });


/***/ }),

/***/ "Y6iY":
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class CountriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCountries() {
        return this.httpClient.get("/api/countries", { responseType: "json" });
    }
}
CountriesService.ɵfac = function CountriesService_Factory(t) { return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CountriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountriesService, factory: CountriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YmCU":
/*!********************************!*\
  !*** ./src/app/paging.pipe.ts ***!
  \********************************/
/*! exports provided: PagingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingPipe", function() { return PagingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PagingPipe {
    transform(value, currentPageIndex, pageSize) {
        if (value == null) {
            return value;
        }
        let resultArray = [];
        for (let i = currentPageIndex * pageSize; i < (currentPageIndex + 1) * pageSize; i++) {
            if (value[i]) {
                resultArray.push(value[i]);
            }
        }
        return resultArray;
    }
}
PagingPipe.ɵfac = function PagingPipe_Factory(t) { return new (t || PagingPipe)(); };
PagingPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paging", type: PagingPipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.module */ "jkDv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jwt-interceptor.service */ "Mplv");
/* harmony import */ var _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jwt-un-authorized-interceptor.service */ "gmeu");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "tl5U");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "dsE5");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks/tasks.component */ "GXPF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptorService"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["JwtUnAuthorizedInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null);
                    }
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_11__["TasksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"]] }); })();


/***/ }),

/***/ "ZGmD":
/*!**********************************************!*\
  !*** ./src/app/custom-validators.service.ts ***!
  \**********************************************/
/*! exports provided: CustomValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function() { return CustomValidatorsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "edGd");



class CustomValidatorsService {
    constructor(loginService) {
        this.loginService = loginService;
    }
    minimumAgeValidator(minAge) {
        return (control) => {
            if (!control.value)
                return null; //return, if the date of birth is null
            var today = new Date();
            var dateOfBirth = new Date(control.value);
            var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
            var diffYears = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;
            if (diffYears >= minAge)
                return null; //valid
            else
                return { minAge: { valid: false } }; //invalid
        };
    }
    confirmedValidator(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    DuplicateEmailValidator() {
        return (control) => {
            return this.loginService.getUserByEmail(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((existingUser) => {
                if (existingUser != null) {
                    return { uniqueEmail: { valid: false } }; //invalid
                }
                else {
                    return null;
                }
            }));
        };
    }
}
CustomValidatorsService.ɵfac = function CustomValidatorsService_Factory(t) { return new (t || CustomValidatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
CustomValidatorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomValidatorsService, factory: CustomValidatorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bWFg":
/*!*********************************************************!*\
  !*** ./src/app/project-idunique-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: ProjectIDUniqueValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIDUniqueValidatorDirective", function() { return ProjectIDUniqueValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.service */ "zbRu");




class ProjectIDUniqueValidatorDirective {
    constructor(projectService) {
        this.projectService = projectService;
    }
    validate(control) {
        return this.projectService.getProjectByProjectID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((existingProject) => {
            if (existingProject != null) {
                return { uniqueProjectID: { valid: false } };
            }
            else {
                return null;
            }
        }));
    }
}
ProjectIDUniqueValidatorDirective.ɵfac = function ProjectIDUniqueValidatorDirective_Factory(t) { return new (t || ProjectIDUniqueValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"])); };
ProjectIDUniqueValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ProjectIDUniqueValidatorDirective, selectors: [["", "appProjectIDUniqueValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_ASYNC_VALIDATORS"], useExisting: ProjectIDUniqueValidatorDirective, multi: true }])] });


/***/ }),

/***/ "bsir":
/*!**************************************************!*\
  !*** ./src/app/team-size-validator.directive.ts ***!
  \**************************************************/
/*! exports provided: TeamSizeValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSizeValidatorDirective", function() { return TeamSizeValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TeamSizeValidatorDirective {
    constructor() {
    }
    validate(control) {
        let currentValue = control.value;
        let isValid = currentValue % parseInt(this.n) == 0;
        if (isValid) {
            return null; //valid
        }
        else {
            return { divisible: { valid: false } }; //indicates invalid
        }
    }
}
TeamSizeValidatorDirective.ɵfac = function TeamSizeValidatorDirective_Factory(t) { return new (t || TeamSizeValidatorDirective)(); };
TeamSizeValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TeamSizeValidatorDirective, selectors: [["", "appTeamSizeValidator", ""]], inputs: { n: ["appTeamSizeValidator", "n"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: TeamSizeValidatorDirective, multi: true }])] });


/***/ }),

/***/ "dsE5":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countries.service */ "Y6iY");
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-validators.service */ "ZGmD");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "edGd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignUpComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mobile can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mobile is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date of Birth can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimum Age must be 18");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password and Confirm Password must be match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", gender_r19)("value", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](gender_r19);
} }
function SignUpComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please select gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r20.countryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r20.countryName, " ");
} }
function SignUpComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please select country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function SignUpComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Please Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_82_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const i_r22 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onRemoveClick(i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, skill_r21.get("skillName").invalid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.submitted), skill_r21.get("skillName").valid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, skill_r21.get("level").invalid && (skill_r21.get("level").dirty || skill_r21.get("level").touched || ctx_r18.submitted), skill_r21.get("level").valid && (skill_r21.get("level").dirty || skill_r21.get("level").touched || ctx_r18.submitted)));
} }
class SignUpComponent {
    constructor(countriesService, formBuilder, customValidatorsService, loginService, router) {
        this.countriesService = countriesService;
        this.formBuilder = formBuilder;
        this.customValidatorsService = customValidatorsService;
        this.loginService = loginService;
        this.router = router;
        this.genders = ["male", "female"];
        this.countries = [];
        this.submitted = false; //lo agregué  yo para poder determinar el submitted
        this.registerError = null;
    }
    ngOnInit() {
        this.countriesService.getCountries().subscribe((response) => {
            this.countries = response;
        });
        this.signUpForm = this.formBuilder.group({
            personName: this.formBuilder.group({
                firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
                lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
            }),
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email], [this.customValidatorsService.DuplicateEmailValidator()]],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[1-9][0-9]*$/)]],
            dateOfBirth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.customValidatorsService.minimumAgeValidator(18)]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            receiveNewsLetters: [null],
            skills: this.formBuilder.array([]),
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        }, {
            validator: this.customValidatorsService.confirmedValidator('password', 'confirmPassword')
        });
        this.signUpForm.valueChanges.subscribe((value) => {
            //console.log(value);
        });
    }
    onSubmitClick() {
        //Display current form value
        this.signUpForm["submitted"] = true;
        this.submitted = true; //esto lo agregué porque no funcionaba el submited hecho como arriba
        console.log(this.signUpForm);
        if (this.signUpForm.valid) {
            var signUpVieModel = this.signUpForm.value;
            this.loginService.Register(signUpVieModel).subscribe((response) => {
                this.router.navigate(["tasks"]);
            }, (error) => {
                console.log(error);
                this.registerError = "Unable to submit";
            });
        }
    }
    onAddSkill() {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        this.signUpForm.get("skills").push(formGroup);
    }
    onRemoveClick(index) {
        this.signUpForm.get("skills").removeAt(index);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 92, vars: 56, consts: [[1, "row"], [1, "col-md-8", "col-xl-6", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "card", "mt-1"], [1, "card-header"], [1, "card-body"], ["formGroupName", "personName", 1, "form-group", "form-row"], ["for", "firstName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "name", "firstName", "id", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "lastName", "id", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-row"], ["for", "email", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "email", "id", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "mobile", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "mobile", "id", "mobile", "placeholder", "Mobile", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["for", "dateOfBirth", 1, "col-md-4", "col-form-label"], ["type", "date", "name", "dateOfBirth", "id", "dateOfBirth", "placeholder", "Date of Birth", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "password", "id", "password", "placeholder", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "col-md-4", "col-form-label"], ["class", "form-check-label form-check-inline", 4, "ngFor", "ngForOf"], ["for", "countryID", 1, "col-md-4", "col-form-label"], ["name", "countryID", "id", "countryID", "formControlName", "countryID", 1, "form-control", 3, "ngClass"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "receiveNewsLetters", "id", "receiveNewsLetters", "value", "true", "formControlName", "receiveNewsLetters", 1, "form-check-input"], ["for", "receiveNewsLetters", 1, "form-check-label"], ["formArrayName", "skills", 1, "col-md-8"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-footer"], [1, "btn", "btn-success", "float-right"], [1, "text-danger"], [1, "form-check-label", "form-check-inline"], ["type", "radio", "name", "gender", "formControlName", "gender", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [3, "value"], [1, "row", 3, "formGroupName"], [1, "col-5"], ["type", "text", "name", "skillName", "id", "skillName", "placeholder", "Skill Name", "formControlName", "skillName", 1, "form-control", 3, "ngClass"], [1, "col-4"], ["name", "level", "id", "level", "formControlName", "level", 1, "form-control", 3, "ngClass"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Professional"], ["value", "Expert"], [1, "col-3"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmitClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SignUpComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SignUpComponent_span_14_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignUpComponent_span_20_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignUpComponent_span_21_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SignUpComponent_span_27_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SignUpComponent_span_28_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SignUpComponent_span_29_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mobile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SignUpComponent_span_35_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SignUpComponent_span_36_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Date of Birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, SignUpComponent_span_42_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SignUpComponent_span_43_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SignUpComponent_span_49_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Confirm Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, SignUpComponent_span_55_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, SignUpComponent_span_56_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, SignUpComponent_div_61_Template, 4, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, SignUpComponent_span_62_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, SignUpComponent_option_70_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, SignUpComponent_span_71_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Receive News Letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Skills:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, SignUpComponent_div_82_Template, 18, 9, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_83_listener() { return ctx.onAddSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Add Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c0, ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.submitted), ctx.signUpForm.get("personName.firstName").valid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c0, ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.submitted), ctx.signUpForm.get("personName.lastName").valid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](38, _c0, ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.submitted), ctx.signUpForm.get("email").valid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.uniqueEmail));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](41, _c0, ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.submitted), ctx.signUpForm.get("mobile").valid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](44, _c0, ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.submitted), ctx.signUpForm.get("dateOfBirth").valid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.minAge));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](47, _c0, ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.submitted), ctx.signUpForm.get("password").valid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.submitted) && (ctx.signUpForm.get("password").errors == null ? null : ctx.signUpForm.get("password").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](50, _c0, ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.submitted), ctx.signUpForm.get("confirmPassword").valid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.submitted) && (ctx.signUpForm.get("confirmPassword").errors == null ? null : ctx.signUpForm.get("confirmPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.submitted) && ctx.signUpForm.get("confirmPassword").errors.confirmedValidator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("gender").invalid && (ctx.signUpForm.get("gender").dirty || ctx.signUpForm.get("gender").touched || ctx.submitted) && (ctx.signUpForm.get("gender").errors == null ? null : ctx.signUpForm.get("gender").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](53, _c0, ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.submitted), ctx.signUpForm.get("countryID").valid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.submitted) && (ctx.signUpForm.get("countryID").errors == null ? null : ctx.signUpForm.get("countryID").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.signUpForm.get("skills")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](86, 30, ctx.signUpForm.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.registerError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "edGd":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "tl5U");





class LoginService {
    constructor(httpBackend, jwtHelperService) {
        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.currentUserName = null;
    }
    Login(loginViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](this.httpBackend); //esto tambien
        return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage.currentUser = JSON.stringify(response.body);
                sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    Register(signUpViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](this.httpBackend); //esto tambien
        return this.httpClient.post("/register", signUpViewModel, { responseType: "json", observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage.currentUser = JSON.stringify(response.body);
                sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    getUserByEmail(Email) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](this.httpBackend);
        return this.httpClient.get("/api/getUserByEmail/" + Email, { responseType: "json" });
    }
    Logout() {
        sessionStorage.removeItem("currentUser");
        this.currentUserName = null;
    }
    isAuthenticated() {
        var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.jwtHelperService.isTokenExpired()) {
            return false; //token is not valid
        }
        else {
            return true; //token is valid
        }
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpBackend"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gmeu":
/*!**********************************************************!*\
  !*** ./src/app/jwt-un-authorized-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: JwtUnAuthorizedInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUnAuthorizedInterceptorService", function() { return JwtUnAuthorizedInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class JwtUnAuthorizedInterceptorService {
    constructor() {
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                //do something with response
            }
        }, (error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (error.status == 401) {
                    console.log(error);
                    alert("401 UnAuthorized");
                }
            }
        }));
    }
}
JwtUnAuthorizedInterceptorService.ɵfac = function JwtUnAuthorizedInterceptorService_Factory(t) { return new (t || JwtUnAuthorizedInterceptorService)(); };
JwtUnAuthorizedInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtUnAuthorizedInterceptorService, factory: JwtUnAuthorizedInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "i6q1":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(value, searchBy, searchText) {
        if (value == null) {
            return value;
        }
        let resultArray = [];
        for (let item of value) {
            if (String(item[searchBy]).toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "o8Ft");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "mklW");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "8Yq7");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard.service */ "0HgP");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "GAAL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../team-size-validator.directive */ "bsir");
/* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client-location-status-validator.directive */ "V8DU");
/* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../project-idunique-validator.directive */ "bWFg");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/project.component */ "19cX");
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-box-printer/check-box-printer.component */ "4aDr");
/* harmony import */ var _number_to_words_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../number-to-words.pipe */ "QqWU");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../filter.pipe */ "i6q1");
/* harmony import */ var _paging_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../paging.pipe */ "YmCU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
        _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_7__["TeamSizeValidatorDirective"],
        _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_8__["ClientLocationStatusValidatorDirective"],
        _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_9__["ProjectIDUniqueValidatorDirective"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"],
        _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_11__["CheckBoxPrinterComponent"],
        _number_to_words_pipe__WEBPACK_IMPORTED_MODULE_12__["NumberToWordsPipe"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
        _paging_pipe__WEBPACK_IMPORTED_MODULE_14__["PagingPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]], exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_7__["TeamSizeValidatorDirective"], _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_8__["ClientLocationStatusValidatorDirective"], _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_9__["ProjectIDUniqueValidatorDirective"]] }); })();


/***/ }),

/***/ "mklW":
/*!**********************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "o8Ft":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard.service */ "0HgP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function DashboardComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, client_r5, 0, 10), " ");
} }
function DashboardComponent_a_58_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_a_58_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onProjectChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r6);
} }
function DashboardComponent_a_64_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_a_64_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_a_64_span_3_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_a_64_span_4_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_a_64_span_5_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", year_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2019);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2018);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2017);
} }
function DashboardComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teamMemberSumary_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teamMemberSumary_r18.Region);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", teamMemberSumary_r18.TeamMembersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", teamMemberSumary_r18.TemporarilyUnavailableMembers, " ");
} }
function DashboardComponent_div_105_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DashboardComponent_div_105_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" #", member_r27.ID, " ", member_r27.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r27.Status);
} }
function DashboardComponent_div_105_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_105_ng_template_8_div_0_Template, 5, 3, "div", 38);
} if (rf & 2) {
    const teamMembersGroup_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", teamMembersGroup_r19.Members);
} }
function DashboardComponent_div_105_ng_template_10_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r30.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", member_r30.Status == "Busy" ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r30.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r30.Status);
} }
function DashboardComponent_div_105_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_105_ng_template_10_tr_10_Template, 7, 5, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teamMembersGroup_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", teamMembersGroup_r19.Members);
} }
function DashboardComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_105_div_7_Template, 1, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_105_ng_template_8_Template, 1, 1, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_105_ng_template_10_Template, 11, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teamMembersGroup_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#cardbody" + i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", teamMembersGroup_r19.Region, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "cardbody" + i_r20)("ngClass", i_r20 == 0 ? "show" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r20 == 0)("ngIfThen", _r22)("ngIfElse", _r24);
} }
class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.Designation = null;
        this.Username = null;
        this.NoOfTeamMembers = 0;
        this.TotalCostOfAllProjects = 0;
        this.PendingTasks = 0;
        this.UpComingProjects = 0;
        this.ProjectCost = 0;
        this.CurrentExpenditure = 0;
        this.AvailableFunds = 0;
        this.Clients = [];
        this.Projects = [];
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
        this.ToDay = new Date();
    }
    ngOnInit() {
        this.Designation = 'Team Leader';
        this.Username = 'Scott Smith';
        this.NoOfTeamMembers = 67;
        this.TotalCostOfAllProjects = 240;
        this.PendingTasks = 15;
        this.UpComingProjects = 0.2;
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52536;
        this.Clients = [
            'ABC Infotech Ltd.',
            'DEF Software Solutions',
            'GHI Industries',
        ];
        this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
        for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
        }
        this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
        this.TeamMembers = [
            {
                Region: 'East',
                Members: [
                    { ID: 1, Name: 'Ford', Status: 'Available' },
                    { ID: 2, Name: 'Miller', Status: 'Available' },
                    { ID: 3, Name: 'Jones', Status: 'Busy' },
                    { ID: 4, Name: 'James', Status: 'Busy' },
                ],
            },
            {
                Region: 'West',
                Members: [
                    { ID: 5, Name: 'Anna', Status: 'Available' },
                    { ID: 6, Name: 'Arun', Status: 'Available' },
                    { ID: 7, Name: 'Varun', Status: 'Busy' },
                    { ID: 8, Name: 'Jasmine', Status: 'Busy' },
                ],
            },
            {
                Region: 'South',
                Members: [
                    { ID: 9, Name: 'Krishna', Status: 'Available' },
                    { ID: 10, Name: 'Mohan', Status: 'Available' },
                    { ID: 11, Name: 'Raju', Status: 'Busy' },
                    { ID: 12, Name: 'Farooq', Status: 'Busy' },
                ],
            },
            {
                Region: 'North',
                Members: [
                    { ID: 13, Name: 'Jacob', Status: 'Available' },
                    { ID: 14, Name: 'Smith', Status: 'Available' },
                    { ID: 15, Name: 'Jones', Status: 'Busy' },
                    { ID: 16, Name: 'James', Status: 'Busy' },
                ],
            },
        ];
    }
    onProjectChange($event) {
        if ($event.target.innerHTML == 'Project A') {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
        }
        else if ($event.target.innerHTML == 'Project B') {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
        }
        else if ($event.target.innerHTML == 'Project C') {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
        }
        else if ($event.target.innerHTML == 'Project D') {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 106, vars: 33, consts: [[1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-3", "pb-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "text-white", "text-center", "mx-auto", "rounded", "pt-2", "pb-2", "font-weight-bold", 2, "background-color", "#a39e9e", "font-family", "'Arial Narrow Bold', sans-serif"], [1, "col-12", "text-center", "mt-2"], ["src", "assets/user.png", "width", "120px"], [1, "col-12", "text-center", "pt-2", "pb-2", "font-weight-bold", 2, "font-family", "Tahoma"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial"], [1, "col-12", "mb-3"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-secondary", "badge-pill", 2, "font-size", "13px"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial Narrow"], [1, "col-12"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "col-12", "pt-0", "pb-2", 2, "background-color", "#e9e6e6"], [1, "row", "mt-2"], [1, "col-6", "text-left"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", "onclick", "return false", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-6", "text-right"], ["class", "dropdown-item", "href", "#", 4, "ngFor", "ngForOf"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-auto", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "table", "table-borderless"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-1", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "col-lg-12", "pt-2"], ["id", "accordion1", 1, "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", "onclick", "return false", 1, "dropdown-item", 3, "click"], ["href", "#", 1, "dropdown-item"], [3, "ngSwitch"], ["style", "color: green", 4, "ngSwitchCase"], ["style", "color: blue", 4, "ngSwitchCase"], ["style", "color: red", 4, "ngSwitchCase"], ["style", "color: black", 4, "ngSwitchDefault"], [2, "color", "green"], [2, "color", "blue"], [2, "color", "red"], [2, "color", "black"], [1, "card"], ["id", "card1", 1, "card-header", "bg-secondary"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", 1, "btn", "btn-link", "text-white"], ["data-parent", "#accordion1", 1, "collapse", 3, "id", "ngClass"], [1, "card-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["firstTemplate", ""], ["secondTemplate", ""], [1, "card-header", "bg-primary", "text-white"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " TEAM SUMMARY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " NO. OF TEAM MEMBERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " TOTAL COST OF ALL PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " PENDING TASKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " UPCOMING PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " CLIENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DashboardComponent_li_48_Template, 3, 5, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Project A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DashboardComponent_a_58_Template, 2, 1, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, DashboardComponent_a_64_Template, 6, 4, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " PROJECT BRIEFING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Project Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Current Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Available Funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " TEAM MEMBERS SUMMARY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Team Members Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Temporarily Unavailable Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, DashboardComponent_tr_98_Template, 8, 3, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " TEAM MEMBERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, DashboardComponent_div_105_Template, 12, 7, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 15, ctx.ToDay, "d/M/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, ctx.Designation), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 20, ctx.Username), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.NoOfTeamMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.TotalCostOfAllProjects, " k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PendingTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 22, ctx.UpComingProjects));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](74, 24, ctx.ProjectCost, "USD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](80, 27, ctx.CurrentExpenditure, "AR$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](86, 30, ctx.AvailableFunds, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TeamMembersSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TeamMembers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "o8Ft");
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/about/about.component */ "8Yq7");
/* harmony import */ var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/projects/projects.component */ "GAAL");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _can_activate_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./can-activate-guard.service */ "GWYg");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "dsE5");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.component */ "GXPF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "signup", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] },
    { path: "dashboard", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_5__["CanActivateGuardService"]], data: { expectedRole: "Admin" } },
    { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: "projects", component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_5__["CanActivateGuardService"]], data: { expectedRole: "Admin" } },
    { path: "tasks", component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_5__["CanActivateGuardService"]], data: { expectedRole: "Employee" } },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-view-model */ "Uj+i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "edGd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");





const _c0 = ["logOut"];
class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_0__["LoginViewModel"]();
        this.loginError = "";
    }
    ngOnInit() {
        setTimeout(() => {
            this.logOut.nativeElement.focus();
        }, 100);
    }
    onLoginClick(event) {
        this.loginService.Login(this.loginViewModel).subscribe((response) => {
            this.router.navigateByUrl("/dashboard");
        }, (error) => {
            console.log(error);
            this.loginError = "Invalid Username or Password";
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.logOut = _t.first);
    } }, decls: 24, vars: 3, consts: [[1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "UserName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "placeholder", "Username", "name", "UserName", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["logOut", ""], ["for", "Password", 1, "col-md-4", "col-form-label"], ["type", "password", "placeholder", "Password", "name", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "text-danger"], [1, "btn", "btn-primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.loginViewModel.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.loginViewModel.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener($event) { return ctx.onLoginClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginViewModel.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginViewModel.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.loginError, "\u00A0");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zbRu":
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ProjectsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.MyObservers = [];
        this.MySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    toggleDetails() {
        this.MySubject.next(!this.MySubject.value);
    }
    getAllProjects() {
        return this.httpClient.get("/api/projects", { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            for (let i = 0; i < data.length; i++) {
                //data[i].teamSize = data[i].teamSize * 100;
            }
            return data;
        }));
    }
    getProjectByProjectID(ProjectID) {
        return this.httpClient.get("/api/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
    }
    insertProject(newProject) {
        var requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage.XSRFRequestToken);
        return this.httpClient.post("/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
    }
    updateProject(existingProject) {
        return this.httpClient.put("/api/projects", existingProject, { responseType: "json" });
    }
    deleteProject(ProjectID) {
        return this.httpClient.delete("/api/projects?ProjectID=" + ProjectID);
    }
    SearchProjects(searchBy, searchText) {
        return this.httpClient.get("/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.9dc3426844b90db02322.js.map