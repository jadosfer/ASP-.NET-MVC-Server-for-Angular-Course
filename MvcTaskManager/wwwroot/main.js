(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+mCA":
/*!**************************************************!*\
  !*** ./src/app/directives/repeater.directive.ts ***!
  \**************************************************/
/*! exports provided: RepeaterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeaterDirective", function() { return RepeaterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RepeaterDirective {
    constructor(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.viewContainerRef.clear();
    }
    ngOnInit() {
        for (let i = 0; i < this.n; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i });
        }
    }
}
RepeaterDirective.ɵfac = function RepeaterDirective_Factory(t) { return new (t || RepeaterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
RepeaterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RepeaterDirective, selectors: [["", "appRepeater", ""]], inputs: { n: ["appRepeater", "n"] } });


/***/ }),

/***/ "/h7i":
/*!****************************************************!*\
  !*** ./src/app/admin/services/projects.service.ts ***!
  \****************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ProjectsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.MyObservers = [];
        this.MySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    toggleDetails() {
        this.MySubject.next(!this.MySubject.value);
    }
    getAllProjects() {
        return this.httpClient.get("/api/projects", { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
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
        var requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
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
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\usuario\Documents\Programacion\Angular\TaskManager\src\main.ts */"zUnb");


/***/ }),

/***/ "2cAy":
/*!*****************************************************!*\
  !*** ./src/app/admin/services/countries.service.ts ***!
  \*****************************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CountriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCountries() {
        return this.httpClient.get("/api/countries", { responseType: "json" });
    }
    getCountryByCountryID(CountryID) {
        return this.httpClient.get("/api/countries/searchbycountryid/" + CountryID, { responseType: "json" });
    }
    insertCountry(newCountry) {
        return this.httpClient.post("/api/countries", newCountry, { responseType: "json" });
    }
    updateCountry(existingCountry) {
        return this.httpClient.put("/api/countries", existingCountry, { responseType: "json" });
    }
    deleteCountry(CountryID) {
        return this.httpClient.delete("/api/countries?CountryID=" + CountryID);
    }
}
CountriesService.ɵfac = function CountriesService_Factory(t) { return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CountriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountriesService, factory: CountriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4QNZ":
/*!**************************************************************************!*\
  !*** ./src/app/directives/client-location-status-validator.directive.ts ***!
  \**************************************************************************/
/*! exports provided: ClientLocationStatusValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationStatusValidatorDirective", function() { return ClientLocationStatusValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
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

/***/ "73VF":
/*!********************************************************************!*\
  !*** ./src/app/directives/project-idunique-validator.directive.ts ***!
  \********************************************************************/
/*! exports provided: ProjectIDUniqueValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIDUniqueValidatorDirective", function() { return ProjectIDUniqueValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/services/projects.service */ "/h7i");




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
ProjectIDUniqueValidatorDirective.ɵfac = function ProjectIDUniqueValidatorDirective_Factory(t) { return new (t || ProjectIDUniqueValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"])); };
ProjectIDUniqueValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ProjectIDUniqueValidatorDirective, selectors: [["", "appProjectIDUniqueValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_ASYNC_VALIDATORS"], useExisting: ProjectIDUniqueValidatorDirective, multi: true }])] });


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
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 10, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
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

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
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

/***/ "FpAq":
/*!***********************************************!*\
  !*** ./src/app/directives/alert.directive.ts ***!
  \***********************************************/
/*! exports provided: AlertDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDirective", function() { return AlertDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AlertDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
    }
    ngOnInit() {
        this.divElement = this.renderer2.createElement("div"); //<div></div>
        this.renderer2.setAttribute(this.divElement, "role", "alert"); //<div role="alert"> </div>
        this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");
        //<div... class="alert alert-danger fade show"> </div>
        this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");
        //<div... style="transition: transform 0.5s"> </div>
        /* span */
        this.spanElement = this.renderer2.createElement("span");
        this.renderer2.setAttribute(this.spanElement, "class", "message");
        //<span class="message"></span>
        /* spanText */
        this.spanText = this.renderer2.createText(this.error);
        this.renderer2.appendChild(this.spanElement, this.spanText);
        //<span... >${this.error}</span>
        this.renderer2.appendChild(this.divElement, this.spanElement);
        //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> <span class="message">${this.error}</span> </div>
        this.elementRef.nativeElement.appendChild(this.divElement);
        // this.elementRef.nativeElement.innerHTML = `
        //   <div class="alert alert-danger fade show" role="alert" style="transition: transform 0.5s">
        //     <span>${this.error}</span>
        //   </div>
        // `;
        this.title = "Please try again!";
    }
    onMouseEnter(event) {
        //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
        this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)");
    }
    onMouseLeave() {
        //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
        this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
    }
}
AlertDirective.ɵfac = function AlertDirective_Factory(t) { return new (t || AlertDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AlertDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AlertDirective, selectors: [["", "appAlert", ""]], hostVars: 1, hostBindings: function AlertDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AlertDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); })("mouseleave", function AlertDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("title", ctx.title);
    } }, inputs: { error: "error" } });


/***/ }),

/***/ "I5Q0":
/*!********************************************************!*\
  !*** ./src/app/guards/can-deactivate-guard.service.ts ***!
  \********************************************************/
/*! exports provided: CanDeactivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuardService", function() { return CanDeactivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CanDeactivateGuardService {
    canDeactivate(component) {
        if (component.canLeave == true) {
            return true; //user can leave the current route
        }
        else {
            return confirm("Do you want to discard changes?");
        }
    }
}
CanDeactivateGuardService.ɵfac = function CanDeactivateGuardService_Factory(t) { return new (t || CanDeactivateGuardService)(); };
CanDeactivateGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanDeactivateGuardService, factory: CanDeactivateGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ib1u":
/*!******************************************************!*\
  !*** ./src/app/guards/can-activate-guard.service.ts ***!
  \******************************************************/
/*! exports provided: CanActivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuardService", function() { return CanActivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/services/login.service */ "UCZv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");




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
CanActivateGuardService.ɵfac = function CanActivateGuardService_Factory(t) { return new (t || CanActivateGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
CanActivateGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanActivateGuardService, factory: CanActivateGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KnUO":
/*!*************************************************************!*\
  !*** ./src/app/directives/team-size-validator.directive.ts ***!
  \*************************************************************/
/*! exports provided: TeamSizeValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSizeValidatorDirective", function() { return TeamSizeValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
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

/***/ "NIOa":
/*!*************************************************************!*\
  !*** ./src/app/admin/services/custom-validators.service.ts ***!
  \*************************************************************/
/*! exports provided: CustomValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function() { return CustomValidatorsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "UCZv");



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

/***/ "O3og":
/*!***********************************************************************!*\
  !*** ./src/app/interceptors/jwt-un-authorized-interceptor.service.ts ***!
  \***********************************************************************/
/*! exports provided: JwtUnAuthorizedInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUnAuthorizedInterceptorService", function() { return JwtUnAuthorizedInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
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

/***/ "OsQp":
/*!**********************************************************!*\
  !*** ./src/app/directives/component-loader.directive.ts ***!
  \**********************************************************/
/*! exports provided: ComponentLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderDirective", function() { return ComponentLoaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ComponentLoaderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ComponentLoaderDirective.ɵfac = function ComponentLoaderDirective_Factory(t) { return new (t || ComponentLoaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ComponentLoaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ComponentLoaderDirective, selectors: [["", "appComponentLoader", ""]] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/team-size-validator.directive */ "KnUO");
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/client-location-status-validator.directive */ "4QNZ");
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/project-idunique-validator.directive */ "73VF");
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/number-to-words.pipe */ "giDM");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/filter.pipe */ "BhhM");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/component-loader.directive */ "OsQp");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/sort.pipe */ "eLiO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_1__["TeamSizeValidatorDirective"],
        _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_2__["ClientLocationStatusValidatorDirective"],
        _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_3__["ProjectIDUniqueValidatorDirective"],
        _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberToWordsPipe"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
        _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_6__["PagingPipe"],
        _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderDirective"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__["SortPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_1__["TeamSizeValidatorDirective"],
        _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_2__["ClientLocationStatusValidatorDirective"],
        _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_3__["ProjectIDUniqueValidatorDirective"],
        _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberToWordsPipe"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
        _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_6__["PagingPipe"],
        _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderDirective"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__["SortPipe"]] }); })();


/***/ }),

/***/ "PgJR":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "XfhA");
/* harmony import */ var _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-routing/employee-routing.module */ "SL9j");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class EmployeeModule {
}
EmployeeModule.ɵfac = function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); };
EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__["TasksComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"]], exports: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__["TasksComponent"]] }); })();


/***/ }),

/***/ "SL9j":
/*!**********************************************************************!*\
  !*** ./src/app/employee/employee-routing/employee-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tasks/tasks.component */ "XfhA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/can-activate-guard.service */ "Ib1u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: "employee", canActivate: [src_app_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateGuardService"]], data: { expectedRole: "Employee" }, children: [
            { path: "tasks", component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__["TasksComponent"], data: { linkIndex: 1 } },
        ] },
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); };
EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-animations */ "jCF0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/services/login.service */ "UCZv");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _admin_services_router_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/services/router-logger.service */ "nimn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









const _c0 = function () { return ["/admin", "dashboard"]; };
function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/admin", "projects"]; };
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/admin", "masters"]; };
function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Masters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.loginService.currentUserName);
} }
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_li_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.loginService.Logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c3 = function () { return ["login"]; };
function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return ["signup"]; };
function AppComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c4));
} }
const _c5 = function () { return ["about"]; };
class AppComponent {
    constructor(loginService, domSanitizer, routerLoggerService, router) {
        this.loginService = loginService;
        this.domSanitizer = domSanitizer;
        this.routerLoggerService = routerLoggerService;
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                let userName = (this.loginService.currentUserName) ? this.loginService.currentUserName : "anonymous";
                let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;
                this.routerLoggerService.log(logMsg).subscribe();
            }
        });
    }
    onSearchClick() {
        console.log(this.loginService.currentUserName);
    }
    getState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"] : "none";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_router_logger_service__WEBPACK_IMPORTED_MODULE_5__["RouterLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 28, vars: 10, consts: [[1, "navbar", "navbar-expand-sm", "bg-success", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning", "my2-", "my-sm-0", 3, "click"], [1, "container-fluid"], ["outlet", "outlet"], ["href", "#", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Angular Task Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_li_7_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppComponent_li_15_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_li_16_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "router-outlet", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@routeAnimations", ctx.getState(_r7));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_my_animations__WEBPACK_IMPORTED_MODULE_1__["keyFrameAnimation"]] } });


/***/ }),

/***/ "UCZv":
/*!*************************************************!*\
  !*** ./src/app/admin/services/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");





class LoginService {
    constructor(httpBackend, jwtHelperService) {
        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.currentUserName = null;
    }
    Login(loginViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.httpBackend); //esto tambien
        return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage.currentUser = JSON.stringify(response.body);
                sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    Register(signUpViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.httpBackend); //esto tambien
        return this.httpClient.post("/register", signUpViewModel, { responseType: "json", observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage.currentUser = JSON.stringify(response.body);
                sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    getUserByEmail(Email) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.httpBackend);
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
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_models_login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/login-view-model */ "YHd/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/services/login.service */ "UCZv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/alert.directive */ "FpAq");







const _c0 = ["logOut"];
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("error", ctx_r0.loginError);
} }
class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new src_app_models_login_view_model__WEBPACK_IMPORTED_MODULE_0__["LoginViewModel"]();
        this.loginError = "";
    }
    ngOnInit() {
        setTimeout(() => {
            this.logOut.nativeElement.focus();
        }, 100);
    }
    onLoginClick(event) {
        this.loginService.Login(this.loginViewModel).subscribe((response) => {
            this.router.navigate(["/admin", "dashboard"]);
        }, (error) => {
            console.log(error);
            this.loginError = "Invalid Username or Password";
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.logOut = _t.first);
    } }, decls: 23, vars: 3, consts: [[1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], ["appAlert", "", 3, "error", 4, "ngIf"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "UserName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "placeholder", "Username", "name", "UserName", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["logOut", ""], ["for", "Password", 1, "col-md-4", "col-form-label"], ["type", "password", "placeholder", "Password", "name", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "btn", "btn-primary", 3, "click"], ["appAlert", "", 3, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.loginViewModel.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.loginViewModel.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener($event) { return ctx.onLoginClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginViewModel.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginViewModel.Password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__["AlertDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "XfhA":
/*!**************************************************************!*\
  !*** ./src/app/employee/components/tasks/tasks.component.ts ***!
  \**************************************************************/
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

/***/ "YHd/":
/*!********************************************!*\
  !*** ./src/app/models/login-view-model.ts ***!
  \********************************************/
/*! exports provided: LoginViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewModel", function() { return LoginViewModel; });
class LoginViewModel {
}


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
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "ujIQ");
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/alert.directive */ "FpAq");
/* harmony import */ var _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/repeater.directive */ "+mCA");
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/employee.module */ "PgJR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/jwt-interceptor.service */ "eF9N");
/* harmony import */ var _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/jwt-un-authorized-interceptor.service */ "O3og");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/about/about.component */ "8Yq7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptorService"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["JwtUnAuthorizedInterceptorService"],
            multi: true
        }
    ], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _employee_employee_module__WEBPACK_IMPORTED_MODULE_8__["EmployeeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null);
                    }
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
        _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__["AlertDirective"],
        _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_7__["RepeaterDirective"],
        _admin_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _employee_employee_module__WEBPACK_IMPORTED_MODULE_8__["EmployeeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"]] }); })();


/***/ }),

/***/ "eF9N":
/*!*********************************************************!*\
  !*** ./src/app/interceptors/jwt-interceptor.service.ts ***!
  \*********************************************************/
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

/***/ "eLiO":
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SortPipe {
    transform(value, sortBy, sortOrder) {
        if (value == null) {
            return null;
        }
        console.log(sortOrder);
        value.sort(function (a, b) {
            //less than 0        :   a comes before b
            //greater than 0  :   b comes before a
            //equal to 0         :   a and b are left unchanged
            if (a[sortBy] && b[sortBy]) {
                return a[sortBy].toString().toLowerCase()[0] - b[sortBy].toString().toLowerCase()[0];
                //a = cat  --> 99
                //b = dog --> 100
                //99 - 100 = -1     --> less than 0        :   a comes before b
            }
            else {
                return 0;
            }
        });
        if (sortOrder == "DESC") {
            value.reverse();
        }
        return value;
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });


/***/ }),

/***/ "giDM":
/*!***********************************************!*\
  !*** ./src/app/pipes/number-to-words.pipe.ts ***!
  \***********************************************/
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

/***/ "jCF0":
/*!**********************************!*\
  !*** ./src/app/my-animations.ts ***!
  \**********************************/
/*! exports provided: fadeAnimation, slideUpAnimation, zoomUpAnimation, zoomLeftAnimation, slideLeftOrRightAnimation, keyFrameAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUpAnimation", function() { return slideUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomUpAnimation", function() { return zoomUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomLeftAnimation", function() { return zoomLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideLeftOrRightAnimation", function() { return slideLeftOrRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFrameAnimation", function() { return keyFrameAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }))
            ], { optional: true })
        ])
    ])
]);
const slideUpAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-100%)" }))
            ], { optional: true })
        ])
    ])
]);
const zoomUpAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateY(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateY(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateY(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateY(-100%)" }))
            ], { optional: true })
        ])
    ])
]);
const zoomLeftAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateX(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateX(-100%)" }))
            ], { optional: true })
        ])
    ])
]);
function slideLeft() {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }))
            ], { optional: true })
        ])
    ];
}
function slideRight() {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }))
            ], { optional: true })
        ])
    ];
}
const slideLeftOrRightAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 1", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 2", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 3", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 2", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 3", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 3", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 3", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 3", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 4", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 3", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 4", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 5", slideRight()),
]);
const keyFrameAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0, transform: "scale(0.5) translateX(-100%)", "transform-origin": "center left" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.3, transform: "scale(0.5) translateX(30%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.7, transform: "scale(0.5) translateX(30%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 1, transform: "scale(1) translateX(0%)" })
                ])),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0, transform: "scale(1)", "transform-origin": "center right" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.3, transform: "scale(0.5) translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.7, transform: "scale(0.5) translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 1, transform: "scale(1) translateX(100%)" })
                ])),
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "nimn":
/*!*********************************************************!*\
  !*** ./src/app/admin/services/router-logger.service.ts ***!
  \*********************************************************/
/*! exports provided: RouterLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLoggerService", function() { return RouterLoggerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class RouterLoggerService {
    constructor(httpBackend) {
        this.httpBackend = httpBackend;
        this.currentUserName = null;
    }
    log(logMsg) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](this.httpBackend);
        return this.httpClient.post("/api/routerlogger", logMsg, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("content-type", "text/plain") });
    }
}
RouterLoggerService.ɵfac = function RouterLoggerService_Factory(t) { return new (t || RouterLoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpBackend"])); };
RouterLoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouterLoggerService, factory: RouterLoggerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tuZ1":
/*!**************************************!*\
  !*** ./src/app/pipes/paging.pipe.ts ***!
  \**************************************/
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

/***/ "ujIQ":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_services_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/services/countries.service */ "2cAy");
/* harmony import */ var src_app_admin_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/services/custom-validators.service */ "NIOa");
/* harmony import */ var src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/services/login.service */ "UCZv");
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
        this.canLeave = true;
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
            this.canLeave = false;
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
                this.canLeave = true;
                this.router.navigate(["/employee", "tasks"]);
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
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/about/about.component */ "8Yq7");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "ujIQ");
/* harmony import */ var _guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/can-deactivate-guard.service */ "I5Q0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { linkIndex: 2 } },
    { path: "signup", component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], canDeactivate: [_guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateGuardService"]], data: { linkIndex: 3 } },
    { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], data: { linkIndex: 1 } },
    { path: "admin", loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true, enableTracing: false, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
//# sourceMappingURL=main.js.map