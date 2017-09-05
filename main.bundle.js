webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-common/app-common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/app-common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/app-common/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_service__ = __webpack_require__("../../../../../src/app/app-common/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/app-common/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppCommonModule = (function () {
    function AppCommonModule() {
    }
    return AppCommonModule;
}());
AppCommonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__header_header_service__["a" /* HeaderService */]]
    })
], AppCommonModule);

//# sourceMappingURL=app-common.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-common/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setStyle {\n  width: 20%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-common/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-sm-3 setStyle\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"col-sm-9\" >\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-common/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/app-common/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-common/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-common/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerPos {\n  background-color: #fff;\n  height: 68px;\n}\n\n@media (min-width: 770px) {\n  .headerPos {\n    position: fixed;\n    z-index: 100;\n    background-color: #fff;\n    height: 80px;\n  }\n}\n\n.logoImg {\n  margin-top: 34px;\n  margin-left: 20%;\n  width: 24%;\n  height: 32%;\n  cursor: pointer;\n}\n\n.setLoginPos {\n  margin-top: 61px;\n  margin-right: 10px;\n}\n\n.setBrandNameStyle {\n  line-height: 4;\n  font-size: 18px;\n  font-weight: bold;\n  margin-left:-12%; \n  color: #D3D8E0;\n}\n\n@media (min-width: 1250px) {\n  .logoImg {\n    margin-top: 10px;\n    margin-left: 25%;\n    width: 24%;\n    height: 32%;\n    cursor: pointer;\n  }\n}\n\n@media (min-width: 1850px) and (max-width: 1950px) {\n  .logoImg {\n    margin-top: 12px;\n    margin-left: 13%;\n    width: 18%;\n    height: 25%;\n    cursor: pointer;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\"> -->\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 headerPos\">\n    <div class=\"row navBarSet\">\n      <div class=\"col-xs-6 col-md-2 col-sm-6 col-lg-1\">\n        <img class=\"logoImg img-responsive\" src=\"../assets/images/University_logo.svg\" alt=\"Logo\">\n      </div>\n      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-4 \">\n        <span class=\"setBrandNameStyle\">University.social Dashboard</span>\n      </div>\n      <div class=\"col-md-offset-1 col-lg-offset-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right\">\n        <span class=\"setBrandNameStyle\">{{username}}Francis\n          </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_service__ = __webpack_require__("../../../../../src/app/app-common/header/header.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Logger, Options } from "angular2-logger/core";
// import { MdDialog, MdDialogRef } from '@angular/material';
// import { MD_DIALOG_DATA } from '@angular/material';
var HeaderComponent = (function () {
    function HeaderComponent(route, router, headerService) {
        this.route = route;
        this.router = router;
        this.headerService = headerService;
    }
    HeaderComponent.prototype.getDateTime = function () {
        var date = new Date();
        return date;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('username');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/app-common/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-common/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__header_service__["a" /* HeaderService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-common/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderService = (function () {
    function HeaderService() {
    }
    return HeaderService;
}());
HeaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HeaderService);

//# sourceMappingURL=header.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/app-common/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/app-common/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n\n =========================================================\n * Material Dashboard - v1.1.1.0\n =========================================================\n\n * Product Page: http://www.creative-tim.com/product/material-dashboard\n * Copyright 2017 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard/blob/master/LICENSE.md)\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n\n/* ANIMATION */\n/* SHADOWS */\n/* Shadows (from mdl http://www.getmdl.io/) */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -ms-touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n}\n\n.noUi-base {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.noUi-origin {\n  position: absolute;\n  right: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n\n.noUi-handle {\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n}\n\n.noUi-stacking .noUi-handle {\n  z-index: 10;\n}\n\n.noUi-state-tap .noUi-origin {\n  transition: left 0.3s, top 0.3s;\n}\n\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n\n.noUi-horizontal {\n  height: 10px;\n}\n\n.noUi-handle {\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  left: -10px;\n  top: -6px;\n  cursor: pointer;\n  border-radius: 100%;\n  transition: all 0.2s ease-out;\n  border: 1px solid;\n  background: #FFFFFF;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.noUi-vertical .noUi-handle {\n  margin-left: 5px;\n  cursor: ns-resize;\n}\n\n.noUi-horizontal.noUi-extended {\n  padding: 0 15px;\n}\n\n.noUi-horizontal.noUi-extended .noUi-origin {\n  right: -15px;\n}\n\n.noUi-background {\n  height: 2px;\n  margin: 20px 0;\n}\n\n.noUi-origin {\n  margin: 0;\n  border-radius: 0;\n  height: 2px;\n  background: #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle {\n  background-color: #fff;\n  border: 2px solid #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle.noUi-active {\n  border-width: 1px;\n}\n\n.noUi-target {\n  border-radius: 3px;\n}\n\n.noUi-horizontal {\n  height: 2px;\n  margin: 15px 0;\n}\n\n.noUi-vertical {\n  height: 100%;\n  width: 2px;\n  margin: 0 15px;\n  display: inline-block;\n}\n\n.noUi-handle.noUi-active {\n  -webkit-transform: scale3d(2, 2, 1);\n          transform: scale3d(2, 2, 1);\n}\n\n[disabled].noUi-slider {\n  opacity: 0.5;\n}\n\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n\n.slider {\n  background: #c8c8c8;\n}\n\n.slider.noUi-connect {\n  background-color: #9c27b0;\n}\n.slider .noUi-handle {\n  border-color: #9c27b0;\n}\n.slider.slider-info .noUi-connect, .slider.slider-info.noUi-connect {\n  background-color: #00bcd4;\n}\n.slider.slider-info .noUi-handle {\n  border-color: #00bcd4;\n}\n.slider.slider-success .noUi-connect, .slider.slider-success.noUi-connect {\n  background-color: #4caf50;\n}\n.slider.slider-success .noUi-handle {\n  border-color: #4caf50;\n}\n.slider.slider-warning .noUi-connect, .slider.slider-warning.noUi-connect {\n  background-color: #ff9800;\n}\n.slider.slider-warning .noUi-handle {\n  border-color: #ff9800;\n}\n.slider.slider-danger .noUi-connect, .slider.slider-danger.noUi-connect {\n  background-color: #f44336;\n}\n.slider.slider-danger .noUi-handle {\n  border-color: #f44336;\n}\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\nh1, .h1 {\n  font-size: 3.8em;\n  line-height: 1.15em;\n}\n\nh2, .h2 {\n  font-size: 2.6em;\n}\n\nh3, .h3 {\n  font-size: 1.825em;\n  line-height: 1.4em;\n  margin: 20px 0 10px;\n}\n\nh4, .h4 {\n  font-size: 1.3em;\n  line-height: 1.4em;\n}\n\nh5, .h5 {\n  font-size: 1.25em;\n  line-height: 1.4em;\n  margin-bottom: 15px;\n}\n\nh6, .h6 {\n  font-size: 1em;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n/*.title,\n.card-title,\n.info-title,\n.footer-brand,\n.footer-big h5,\n.footer-big h4,\n.media .media-heading{\n    font-weight: $font-weight-extra-bold;\n    font-family: $font-family-serif;\n\n    &,\n    a{\n        color: $black-color;\n        text-decoration: none;\n    }\n}*/\nh2.title {\n  margin-bottom: 30px;\n}\n\n.description,\n.card-description,\n.footer-big p {\n  color: #999999;\n}\n\n.text-warning {\n  color: #ff9800;\n}\n\n.text-primary {\n  color: #9c27b0;\n}\n\n.text-danger {\n  color: #f44336;\n}\n\n.text-success {\n  color: #4caf50;\n}\n\n.text-info {\n  color: #00bcd4;\n}\n\n.text-rose {\n  color: #e91e63;\n}\n\n.text-gray {\n  color: #999999;\n}\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar,\n.off-canvas-sidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.sidebar .sidebar-wrapper,\n.off-canvas-sidebar .sidebar-wrapper {\n  position: relative;\n  height: calc(100vh - 75px);\n  overflow: auto;\n  width: 260px;\n  z-index: 4;\n}\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n.sidebar .nav,\n.off-canvas-sidebar .nav {\n  margin-top: 20px;\n}\n.sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  margin: 10px 15px;\n  border-radius: 3px;\n  color: #3C4858;\n}\n.sidebar .nav li:hover > a,\n.off-canvas-sidebar .nav li:hover > a {\n  background: rgba(200, 200, 200, 0.2);\n  color: #3C4858;\n}\n.sidebar .nav li.active > a,\n.off-canvas-sidebar .nav li.active > a {\n  color: #FFFFFF;\n}\n.sidebar .nav li.active > a i,\n.off-canvas-sidebar .nav li.active > a i {\n  color: #FFFFFF;\n}\n.sidebar .nav p,\n.off-canvas-sidebar .nav p {\n  margin: 0;\n  line-height: 30px;\n  font-size: 14px;\n}\n.sidebar .nav i,\n.off-canvas-sidebar .nav i {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  line-height: 30px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n.sidebar .sidebar-background,\n.off-canvas-sidebar .sidebar-background {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n.sidebar .sidebar-background:after,\n.off-canvas-sidebar .sidebar-background:after {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  background: #FFFFFF;\n  opacity: .93;\n}\n.sidebar .logo,\n.off-canvas-sidebar .logo {\n  position: relative;\n  padding: 15px 15px;\n  z-index: 4;\n}\n.sidebar .logo:after,\n.off-canvas-sidebar .logo:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  right: 10%;\n  height: 1px;\n  width: 80%;\n  background-color: rgba(180, 180, 180, 0.3);\n}\n.sidebar .logo p,\n.off-canvas-sidebar .logo p {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: #FFFFFF;\n  line-height: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.sidebar .logo .simple-text,\n.off-canvas-sidebar .logo .simple-text {\n  text-transform: uppercase;\n  padding: 5px 0px;\n  display: block;\n  font-size: 18px;\n  color: #3C4858;\n  text-align: center;\n  font-weight: 400;\n  line-height: 30px;\n}\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n.sidebar:after, .sidebar:before,\n.off-canvas-sidebar:after,\n.off-canvas-sidebar:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.sidebar:before,\n.off-canvas-sidebar:before {\n  opacity: .33;\n}\n.sidebar:after,\n.off-canvas-sidebar:after {\n  z-index: 3;\n  opacity: 1;\n}\n.sidebar[data-image]:after, .sidebar.has-image:after,\n.off-canvas-sidebar[data-image]:after,\n.off-canvas-sidebar.has-image:after {\n  opacity: .77;\n}\n.sidebar[data-color=\"blue\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"blue\"] .nav li.active a {\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.sidebar[data-color=\"green\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"green\"] .nav li.active a {\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.sidebar[data-color=\"orange\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"orange\"] .nav li.active a {\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.sidebar[data-color=\"red\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"red\"] .nav li.active a {\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.sidebar[data-color=\"purple\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"purple\"] .nav li.active a {\n  background-color: #9c27b0;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n\n.off-canvas-sidebar .nav > li > a,\n.off-canvas-sidebar .nav > li > a:hover {\n  color: #FFFFFF;\n}\n.off-canvas-sidebar .nav > li > a:focus {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel {\n  position: relative;\n  z-index: 2;\n  float: right;\n  overflow: auto;\n  width: calc(100% - 260px);\n  min-height: 100%;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n.main-panel > .content {\n  margin-top: 70px;\n  padding: 30px 15px;\n  min-height: calc(100% - 123px);\n}\n.main-panel > .footer {\n  border-top: 1px solid #e7e7e7;\n}\n.main-panel > .navbar {\n  margin-bottom: 0;\n}\n\n.main-panel {\n  max-height: 100%;\n  height: 100%;\n}\n\n.sidebar,\n.main-panel {\n  transition-property: top,bottom;\n  transition-duration: .2s,.2s;\n  transition-timing-function: linear,linear;\n  -webkit-overflow-scrolling: touch;\n}\n\n.btn,\n.navbar .navbar-nav > li > a.btn {\n  border: none;\n  border-radius: 3px;\n  position: relative;\n  padding: 12px 30px;\n  margin: 10px 1px;\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  will-change: box-shadow, transform;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn::-moz-focus-inner,\n.navbar .navbar-nav > li > a.btn::-moz-focus-inner {\n  border: 0;\n}\n.btn, .btn.btn-default,\n.navbar .navbar-nav > li > a.btn,\n.navbar .navbar-nav > li > a.btn.btn-default {\n  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n}\n.btn, .btn:hover, .btn:focus, .btn:active, .btn.active, .btn:active:focus, .btn:active:hover, .btn.active:focus, .btn.active:hover, .open > .btn.dropdown-toggle, .open > .btn.dropdown-toggle:focus, .open > .btn.dropdown-toggle:hover, .btn.btn-default, .btn.btn-default:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default.active, .btn.btn-default:active:focus, .btn.btn-default:active:hover, .btn.btn-default.active:focus, .btn.btn-default.active:hover, .open > .btn.btn-default.dropdown-toggle, .open > .btn.btn-default.dropdown-toggle:focus, .open > .btn.btn-default.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn.active,\n.navbar .navbar-nav > li > a.btn:active:focus,\n.navbar .navbar-nav > li > a.btn:active:hover,\n.navbar .navbar-nav > li > a.btn.active:focus,\n.navbar .navbar-nav > li > a.btn.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-default,\n.navbar .navbar-nav > li > a.btn.btn-default:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active,\n.navbar .navbar-nav > li > a.btn.btn-default.active,\n.navbar .navbar-nav > li > a.btn.btn-default:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:hover {\n  background-color: #999999;\n  color: #FFFFFF;\n}\n.btn:focus, .btn:active, .btn:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default:hover,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active,\n.navbar .navbar-nav > li > a.btn.btn-default:hover {\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);\n}\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active, fieldset[disabled] .btn, fieldset[disabled] .btn:hover, fieldset[disabled] .btn:focus, fieldset[disabled] .btn.focus, fieldset[disabled] .btn:active, fieldset[disabled] .btn.active, .btn.btn-default.disabled, .btn.btn-default.disabled:hover, .btn.btn-default.disabled:focus, .btn.btn-default.disabled.focus, .btn.btn-default.disabled:active, .btn.btn-default.disabled.active, .btn.btn-default:disabled, .btn.btn-default:disabled:hover, .btn.btn-default:disabled:focus, .btn.btn-default:disabled.focus, .btn.btn-default:disabled:active, .btn.btn-default:disabled.active, .btn.btn-default[disabled], .btn.btn-default[disabled]:hover, .btn.btn-default[disabled]:focus, .btn.btn-default[disabled].focus, .btn.btn-default[disabled]:active, .btn.btn-default[disabled].active, fieldset[disabled] .btn.btn-default, fieldset[disabled] .btn.btn-default:hover, fieldset[disabled] .btn.btn-default:focus, fieldset[disabled] .btn.btn-default.focus, fieldset[disabled] .btn.btn-default:active, fieldset[disabled] .btn.btn-default.active,\n.navbar .navbar-nav > li > a.btn.disabled,\n.navbar .navbar-nav > li > a.btn.disabled:hover,\n.navbar .navbar-nav > li > a.btn.disabled:focus,\n.navbar .navbar-nav > li > a.btn.disabled.focus,\n.navbar .navbar-nav > li > a.btn.disabled:active,\n.navbar .navbar-nav > li > a.btn.disabled.active,\n.navbar .navbar-nav > li > a.btn:disabled,\n.navbar .navbar-nav > li > a.btn:disabled:hover,\n.navbar .navbar-nav > li > a.btn:disabled:focus,\n.navbar .navbar-nav > li > a.btn:disabled.focus,\n.navbar .navbar-nav > li > a.btn:disabled:active,\n.navbar .navbar-nav > li > a.btn:disabled.active,\n.navbar .navbar-nav > li > a.btn[disabled],\n.navbar .navbar-nav > li > a.btn[disabled]:hover,\n.navbar .navbar-nav > li > a.btn[disabled]:focus,\n.navbar .navbar-nav > li > a.btn[disabled].focus,\n.navbar .navbar-nav > li > a.btn[disabled]:active,\n.navbar .navbar-nav > li > a.btn[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.active,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled],\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default.active {\n  box-shadow: none;\n}\n.btn.btn-simple, .btn.btn-default.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple {\n  background-color: transparent;\n  color: #999999;\n  box-shadow: none;\n}\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-default.btn-simple:hover, .btn.btn-default.btn-simple:focus, .btn.btn-default.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:active {\n  background-color: transparent;\n  color: #999999;\n}\n.btn.btn-primary,\n.navbar .navbar-nav > li > a.btn.btn-primary {\n  box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n}\n.btn.btn-primary, .btn.btn-primary:hover, .btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary.active, .btn.btn-primary:active:focus, .btn.btn-primary:active:hover, .btn.btn-primary.active:focus, .btn.btn-primary.active:hover, .open > .btn.btn-primary.dropdown-toggle, .open > .btn.btn-primary.dropdown-toggle:focus, .open > .btn.btn-primary.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary,\n.navbar .navbar-nav > li > a.btn.btn-primary:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.active,\n.navbar .navbar-nav > li > a.btn.btn-primary:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:hover {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n}\n.btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\n.navbar .navbar-nav > li > a.btn.btn-primary:hover {\n  box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\n}\n.btn.btn-primary.disabled, .btn.btn-primary.disabled:hover, .btn.btn-primary.disabled:focus, .btn.btn-primary.disabled.focus, .btn.btn-primary.disabled:active, .btn.btn-primary.disabled.active, .btn.btn-primary:disabled, .btn.btn-primary:disabled:hover, .btn.btn-primary:disabled:focus, .btn.btn-primary:disabled.focus, .btn.btn-primary:disabled:active, .btn.btn-primary:disabled.active, .btn.btn-primary[disabled], .btn.btn-primary[disabled]:hover, .btn.btn-primary[disabled]:focus, .btn.btn-primary[disabled].focus, .btn.btn-primary[disabled]:active, .btn.btn-primary[disabled].active, fieldset[disabled] .btn.btn-primary, fieldset[disabled] .btn.btn-primary:hover, fieldset[disabled] .btn.btn-primary:focus, fieldset[disabled] .btn.btn-primary.focus, fieldset[disabled] .btn.btn-primary:active, fieldset[disabled] .btn.btn-primary.active,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled],\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary.active {\n  box-shadow: none;\n}\n.btn.btn-primary.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple {\n  background-color: transparent;\n  color: #9c27b0;\n  box-shadow: none;\n}\n.btn.btn-primary.btn-simple:hover, .btn.btn-primary.btn-simple:focus, .btn.btn-primary.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:active {\n  background-color: transparent;\n  color: #9c27b0;\n}\n.btn.btn-info,\n.navbar .navbar-nav > li > a.btn.btn-info {\n  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);\n}\n.btn.btn-info, .btn.btn-info:hover, .btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info.active, .btn.btn-info:active:focus, .btn.btn-info:active:hover, .btn.btn-info.active:focus, .btn.btn-info.active:hover, .open > .btn.btn-info.dropdown-toggle, .open > .btn.btn-info.dropdown-toggle:focus, .open > .btn.btn-info.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-info,\n.navbar .navbar-nav > li > a.btn.btn-info:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active,\n.navbar .navbar-nav > li > a.btn.btn-info.active,\n.navbar .navbar-nav > li > a.btn.btn-info:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:hover {\n  background-color: #00bcd4;\n  color: #FFFFFF;\n}\n.btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active,\n.navbar .navbar-nav > li > a.btn.btn-info:hover {\n  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);\n}\n.btn.btn-info.disabled, .btn.btn-info.disabled:hover, .btn.btn-info.disabled:focus, .btn.btn-info.disabled.focus, .btn.btn-info.disabled:active, .btn.btn-info.disabled.active, .btn.btn-info:disabled, .btn.btn-info:disabled:hover, .btn.btn-info:disabled:focus, .btn.btn-info:disabled.focus, .btn.btn-info:disabled:active, .btn.btn-info:disabled.active, .btn.btn-info[disabled], .btn.btn-info[disabled]:hover, .btn.btn-info[disabled]:focus, .btn.btn-info[disabled].focus, .btn.btn-info[disabled]:active, .btn.btn-info[disabled].active, fieldset[disabled] .btn.btn-info, fieldset[disabled] .btn.btn-info:hover, fieldset[disabled] .btn.btn-info:focus, fieldset[disabled] .btn.btn-info.focus, fieldset[disabled] .btn.btn-info:active, fieldset[disabled] .btn.btn-info.active,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled],\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info.active {\n  box-shadow: none;\n}\n.btn.btn-info.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple {\n  background-color: transparent;\n  color: #00bcd4;\n  box-shadow: none;\n}\n.btn.btn-info.btn-simple:hover, .btn.btn-info.btn-simple:focus, .btn.btn-info.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:active {\n  background-color: transparent;\n  color: #00bcd4;\n}\n.btn.btn-success,\n.navbar .navbar-nav > li > a.btn.btn-success {\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n}\n.btn.btn-success, .btn.btn-success:hover, .btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success.active, .btn.btn-success:active:focus, .btn.btn-success:active:hover, .btn.btn-success.active:focus, .btn.btn-success.active:hover, .open > .btn.btn-success.dropdown-toggle, .open > .btn.btn-success.dropdown-toggle:focus, .open > .btn.btn-success.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-success,\n.navbar .navbar-nav > li > a.btn.btn-success:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active,\n.navbar .navbar-nav > li > a.btn.btn-success.active,\n.navbar .navbar-nav > li > a.btn.btn-success:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:hover {\n  background-color: #4caf50;\n  color: #FFFFFF;\n}\n.btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active,\n.navbar .navbar-nav > li > a.btn.btn-success:hover {\n  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);\n}\n.btn.btn-success.disabled, .btn.btn-success.disabled:hover, .btn.btn-success.disabled:focus, .btn.btn-success.disabled.focus, .btn.btn-success.disabled:active, .btn.btn-success.disabled.active, .btn.btn-success:disabled, .btn.btn-success:disabled:hover, .btn.btn-success:disabled:focus, .btn.btn-success:disabled.focus, .btn.btn-success:disabled:active, .btn.btn-success:disabled.active, .btn.btn-success[disabled], .btn.btn-success[disabled]:hover, .btn.btn-success[disabled]:focus, .btn.btn-success[disabled].focus, .btn.btn-success[disabled]:active, .btn.btn-success[disabled].active, fieldset[disabled] .btn.btn-success, fieldset[disabled] .btn.btn-success:hover, fieldset[disabled] .btn.btn-success:focus, fieldset[disabled] .btn.btn-success.focus, fieldset[disabled] .btn.btn-success:active, fieldset[disabled] .btn.btn-success.active,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled],\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success.active {\n  box-shadow: none;\n}\n.btn.btn-success.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple {\n  background-color: transparent;\n  color: #4caf50;\n  box-shadow: none;\n}\n.btn.btn-success.btn-simple:hover, .btn.btn-success.btn-simple:focus, .btn.btn-success.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:active {\n  background-color: transparent;\n  color: #4caf50;\n}\n.btn.btn-warning,\n.navbar .navbar-nav > li > a.btn.btn-warning {\n  box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12);\n}\n.btn.btn-warning, .btn.btn-warning:hover, .btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning.active, .btn.btn-warning:active:focus, .btn.btn-warning:active:hover, .btn.btn-warning.active:focus, .btn.btn-warning.active:hover, .open > .btn.btn-warning.dropdown-toggle, .open > .btn.btn-warning.dropdown-toggle:focus, .open > .btn.btn-warning.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning,\n.navbar .navbar-nav > li > a.btn.btn-warning:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.active,\n.navbar .navbar-nav > li > a.btn.btn-warning:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:hover {\n  background-color: #ff9800;\n  color: #FFFFFF;\n}\n.btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\n.navbar .navbar-nav > li > a.btn.btn-warning:hover {\n  box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2);\n}\n.btn.btn-warning.disabled, .btn.btn-warning.disabled:hover, .btn.btn-warning.disabled:focus, .btn.btn-warning.disabled.focus, .btn.btn-warning.disabled:active, .btn.btn-warning.disabled.active, .btn.btn-warning:disabled, .btn.btn-warning:disabled:hover, .btn.btn-warning:disabled:focus, .btn.btn-warning:disabled.focus, .btn.btn-warning:disabled:active, .btn.btn-warning:disabled.active, .btn.btn-warning[disabled], .btn.btn-warning[disabled]:hover, .btn.btn-warning[disabled]:focus, .btn.btn-warning[disabled].focus, .btn.btn-warning[disabled]:active, .btn.btn-warning[disabled].active, fieldset[disabled] .btn.btn-warning, fieldset[disabled] .btn.btn-warning:hover, fieldset[disabled] .btn.btn-warning:focus, fieldset[disabled] .btn.btn-warning.focus, fieldset[disabled] .btn.btn-warning:active, fieldset[disabled] .btn.btn-warning.active,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled],\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning.active {\n  box-shadow: none;\n}\n.btn.btn-warning.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple {\n  background-color: transparent;\n  color: #ff9800;\n  box-shadow: none;\n}\n.btn.btn-warning.btn-simple:hover, .btn.btn-warning.btn-simple:focus, .btn.btn-warning.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:active {\n  background-color: transparent;\n  color: #ff9800;\n}\n.btn.btn-danger,\n.navbar .navbar-nav > li > a.btn.btn-danger {\n  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);\n}\n.btn.btn-danger, .btn.btn-danger:hover, .btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger.active, .btn.btn-danger:active:focus, .btn.btn-danger:active:hover, .btn.btn-danger.active:focus, .btn.btn-danger.active:hover, .open > .btn.btn-danger.dropdown-toggle, .open > .btn.btn-danger.dropdown-toggle:focus, .open > .btn.btn-danger.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger,\n.navbar .navbar-nav > li > a.btn.btn-danger:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.active,\n.navbar .navbar-nav > li > a.btn.btn-danger:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:hover {\n  background-color: #f44336;\n  color: #FFFFFF;\n}\n.btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\n.navbar .navbar-nav > li > a.btn.btn-danger:hover {\n  box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n}\n.btn.btn-danger.disabled, .btn.btn-danger.disabled:hover, .btn.btn-danger.disabled:focus, .btn.btn-danger.disabled.focus, .btn.btn-danger.disabled:active, .btn.btn-danger.disabled.active, .btn.btn-danger:disabled, .btn.btn-danger:disabled:hover, .btn.btn-danger:disabled:focus, .btn.btn-danger:disabled.focus, .btn.btn-danger:disabled:active, .btn.btn-danger:disabled.active, .btn.btn-danger[disabled], .btn.btn-danger[disabled]:hover, .btn.btn-danger[disabled]:focus, .btn.btn-danger[disabled].focus, .btn.btn-danger[disabled]:active, .btn.btn-danger[disabled].active, fieldset[disabled] .btn.btn-danger, fieldset[disabled] .btn.btn-danger:hover, fieldset[disabled] .btn.btn-danger:focus, fieldset[disabled] .btn.btn-danger.focus, fieldset[disabled] .btn.btn-danger:active, fieldset[disabled] .btn.btn-danger.active,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled],\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger.active {\n  box-shadow: none;\n}\n.btn.btn-danger.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple {\n  background-color: transparent;\n  color: #f44336;\n  box-shadow: none;\n}\n.btn.btn-danger.btn-simple:hover, .btn.btn-danger.btn-simple:focus, .btn.btn-danger.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:active {\n  background-color: transparent;\n  color: #f44336;\n}\n.btn.btn-white, .btn.btn-white:focus, .btn.btn-white:hover,\n.navbar .navbar-nav > li > a.btn.btn-white,\n.navbar .navbar-nav > li > a.btn.btn-white:focus,\n.navbar .navbar-nav > li > a.btn.btn-white:hover {\n  background-color: #FFFFFF;\n  color: #999999;\n}\n.btn.btn-white.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-white.btn-simple {\n  color: #FFFFFF;\n  background: transparent;\n  box-shadow: none;\n}\n.btn.btn-facebook,\n.navbar .navbar-nav > li > a.btn.btn-facebook {\n  background-color: #3b5998;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12);\n}\n.btn.btn-facebook:focus, .btn.btn-facebook:active, .btn.btn-facebook:hover,\n.navbar .navbar-nav > li > a.btn.btn-facebook:focus,\n.navbar .navbar-nav > li > a.btn.btn-facebook:active,\n.navbar .navbar-nav > li > a.btn.btn-facebook:hover {\n  background-color: #3b5998;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2);\n}\n.btn.btn-facebook.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-facebook.btn-simple {\n  color: #3b5998;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-twitter,\n.navbar .navbar-nav > li > a.btn.btn-twitter {\n  background-color: #55acee;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12);\n}\n.btn.btn-twitter:focus, .btn.btn-twitter:active, .btn.btn-twitter:hover,\n.navbar .navbar-nav > li > a.btn.btn-twitter:focus,\n.navbar .navbar-nav > li > a.btn.btn-twitter:active,\n.navbar .navbar-nav > li > a.btn.btn-twitter:hover {\n  background-color: #55acee;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2);\n}\n.btn.btn-twitter.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-twitter.btn-simple {\n  color: #55acee;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-pinterest,\n.navbar .navbar-nav > li > a.btn.btn-pinterest {\n  background-color: #cc2127;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12);\n}\n.btn.btn-pinterest:focus, .btn.btn-pinterest:active, .btn.btn-pinterest:hover,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:focus,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:active,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:hover {\n  background-color: #cc2127;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2);\n}\n.btn.btn-pinterest.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-pinterest.btn-simple {\n  color: #cc2127;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-google,\n.navbar .navbar-nav > li > a.btn.btn-google {\n  background-color: #dd4b39;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12);\n}\n.btn.btn-google:focus, .btn.btn-google:active, .btn.btn-google:hover,\n.navbar .navbar-nav > li > a.btn.btn-google:focus,\n.navbar .navbar-nav > li > a.btn.btn-google:active,\n.navbar .navbar-nav > li > a.btn.btn-google:hover {\n  background-color: #dd4b39;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2);\n}\n.btn.btn-google.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-google.btn-simple {\n  color: #dd4b39;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-instagram,\n.navbar .navbar-nav > li > a.btn.btn-instagram {\n  background-color: #125688;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12);\n}\n.btn.btn-instagram:focus, .btn.btn-instagram:active, .btn.btn-instagram:hover,\n.navbar .navbar-nav > li > a.btn.btn-instagram:focus,\n.navbar .navbar-nav > li > a.btn.btn-instagram:active,\n.navbar .navbar-nav > li > a.btn.btn-instagram:hover {\n  background-color: #125688;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2);\n}\n.btn.btn-instagram.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-instagram.btn-simple {\n  color: #125688;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn:focus, .btn:active, .btn:active:focus,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn:active:focus {\n  outline: 0;\n}\n.btn.btn-round,\n.navbar .navbar-nav > li > a.btn.btn-round {\n  border-radius: 30px;\n}\n.btn:not(.btn-just-icon):not(.btn-fab) .fa,\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon):not(.btn-fab) .fa {\n  font-size: 18px;\n  margin-top: -2px;\n  position: relative;\n  top: 2px;\n}\n.btn.btn-fab,\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 56px;\n  margin: auto;\n  min-width: 56px;\n  width: 56px;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n  line-height: normal;\n}\n.btn.btn-fab .ripple-container,\n.navbar .navbar-nav > li > a.btn.btn-fab .ripple-container {\n  border-radius: 50%;\n}\n.btn.btn-fab.btn-fab-mini, .btn-group-sm .btn.btn-fab,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  height: 40px;\n  min-width: 40px;\n  width: 40px;\n}\n.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm .btn.btn-fab.material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab.material-icons {\n  top: -3.5px;\n  left: -3.5px;\n}\n.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm .btn.btn-fab .material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab .material-icons {\n  font-size: 17px;\n}\n.btn.btn-fab i.material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab i.material-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-12px, -12px);\n          transform: translate(-12px, -12px);\n  line-height: 24px;\n  width: 24px;\n  font-size: 24px;\n}\n.btn.btn-lg, .btn-group-lg .btn,\n.navbar .navbar-nav > li > a.btn.btn-lg, .btn-group-lg\n.navbar .navbar-nav > li > a.btn {\n  font-size: 14px;\n  padding: 18px 36px;\n}\n.btn.btn-sm, .btn-group-sm .btn,\n.navbar .navbar-nav > li > a.btn.btn-sm, .btn-group-sm\n.navbar .navbar-nav > li > a.btn {\n  padding: 5px 20px;\n  font-size: 11px;\n}\n.btn.btn-xs, .btn-group-xs .btn,\n.navbar .navbar-nav > li > a.btn.btn-xs, .btn-group-xs\n.navbar .navbar-nav > li > a.btn {\n  padding: 4px 15px;\n  font-size: 10px;\n}\n.btn.btn-just-icon,\n.navbar .navbar-nav > li > a.btn.btn-just-icon {\n  font-size: 20px;\n  padding: 12px 12px;\n  line-height: 1em;\n}\n.btn.btn-just-icon i,\n.navbar .navbar-nav > li > a.btn.btn-just-icon i {\n  width: 20px;\n}\n.btn.btn-just-icon.btn-lg,\n.navbar .navbar-nav > li > a.btn.btn-just-icon.btn-lg {\n  font-size: 22px;\n  padding: 13px 18px;\n}\n\n.btn .material-icons {\n  vertical-align: middle;\n  font-size: 17px;\n  top: -1px;\n  position: relative;\n}\n\n.navbar .navbar-nav > li > a.btn {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  margin: 5px 2px;\n}\n.navbar .navbar-nav > li > a:not(.btn) .material-icons {\n  margin-top: -3px;\n  top: 0px;\n  position: relative;\n  margin-right: 3px;\n}\n.navbar .navbar-nav > li > .profile-photo {\n  margin: 5px 2px;\n}\n\n.navbar-default:not(.navbar-transparent) .navbar-nav > li > a.btn.btn-white.btn-simple {\n  color: #555555;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  margin: 10px 1px;\n}\n.btn-group.open > .dropdown-toggle.btn, .btn-group.open > .dropdown-toggle.btn.btn-default,\n.btn-group-vertical.open > .dropdown-toggle.btn,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-default {\n  background-color: #FFFFFF;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-inverse,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-inverse {\n  background-color: #212121;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-primary,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-primary {\n  background-color: #9c27b0;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-success,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-success {\n  background-color: #4caf50;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-info,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-info {\n  background-color: #00bcd4;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-warning,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-warning {\n  background-color: #ff9800;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-danger,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-danger {\n  background-color: #f44336;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-rose,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-rose {\n  background-color: #e91e63;\n}\n.btn-group .dropdown-menu,\n.btn-group-vertical .dropdown-menu {\n  border-radius: 0 0 3px 3px;\n}\n.btn-group.btn-group-raised,\n.btn-group-vertical.btn-group-raised {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.btn-group .btn + .btn,\n.btn-group .btn,\n.btn-group .btn:active,\n.btn-group .btn-group,\n.btn-group-vertical .btn + .btn,\n.btn-group-vertical .btn,\n.btn-group-vertical .btn:active,\n.btn-group-vertical .btn-group {\n  margin: 0;\n}\n\n.close {\n  font-size: inherit;\n  color: #FFFFFF;\n  opacity: .9;\n  text-shadow: none;\n}\n.close:hover, .close:focus {\n  opacity: 1;\n  color: #FFFFFF;\n}\n.close i {\n  font-size: 20px;\n}\n\nbody {\n  background-color: #EEEEEE;\n  color: #3C4858;\n}\nbody.inverse {\n  background: #333333;\n}\nbody.inverse, body.inverse .form-control {\n  color: #ffffff;\n}\nbody.inverse .modal,\nbody.inverse .modal .form-control,\nbody.inverse .panel-default,\nbody.inverse .panel-default .form-control,\nbody.inverse .card,\nbody.inverse .card .form-control {\n  background-color: initial;\n  color: initial;\n}\n\n.wrapper.wrapper-full-page {\n  height: auto;\n  min-height: 100vh;\n}\n\nblockquote p {\n  font-style: italic;\n}\n\n.life-of-material-dashboard {\n  background: #FFFFFF;\n}\n\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1.5em;\n}\n\n.serif-font {\n  font-family: \"Roboto Slab\", \"Times New Roman\", serif;\n}\n\n.page-header {\n  height: 60vh;\n  background-position: center center;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na {\n  color: #9c27b0;\n}\na:hover, a:focus {\n  color: #89229b;\n  text-decoration: none;\n}\na.text-info:hover, a.text-info:focus {\n  color: #00a5bb;\n}\na .material-icons {\n  vertical-align: middle;\n}\n\n/*           Animations              */\n.animation-transition-general, .sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  transition: all 300ms linear;\n}\n\n.animation-transition-slow {\n  transition: all 370ms linear;\n}\n\n.animation-transition-fast, .navbar {\n  transition: all 150ms ease 0s;\n}\n\nlegend {\n  border-bottom: 0;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n*:focus {\n  outline: 0;\n}\n\na:focus, a:active,\nbutton:active, button:focus, button:hover,\nbutton::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0 !important;\n}\n\nlegend {\n  margin-bottom: 20px;\n  font-size: 21px;\n}\n\noutput {\n  padding-top: 8px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n\n.form-control {\n  height: 36px;\n  padding: 7px 0;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 36px;\n  }\n  input[type=\"date\"].input-sm, .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm, .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm, .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm, .input-group-sm\n  input[type=\"month\"] {\n    line-height: 24px;\n  }\n  input[type=\"date\"].input-lg, .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg, .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg, .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg, .input-group-lg\n  input[type=\"month\"] {\n    line-height: 44px;\n  }\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n}\n\n.form-control-static {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: 34px;\n}\n\n.input-sm .input-sm {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.input-sm select.input-sm {\n  height: 24px;\n  line-height: 24px;\n}\n.input-sm textarea.input-sm,\n.input-sm select[multiple].input-sm {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group-sm select.form-control {\n  height: 24px;\n  line-height: 24px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 24px;\n  min-height: 31px;\n  padding: 4px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n\n.input-lg .input-lg {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 0;\n}\n.input-lg select.input-lg {\n  height: 44px;\n  line-height: 44px;\n}\n.input-lg textarea.input-lg,\n.input-lg select[multiple].input-lg {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.form-group-lg select.form-control {\n  height: 44px;\n  line-height: 44px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 44px;\n  min-height: 38px;\n  padding: 10px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 8px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 28px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 8px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 13.0px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 4px;\n    font-size: 11px;\n  }\n}\n\n.label {\n  border-radius: 2px;\n}\n.label, .label.label-default {\n  background-color: #FFFFFF;\n}\n.label.label-inverse {\n  background-color: #212121;\n}\n.label.label-primary {\n  background-color: #9c27b0;\n}\n.label.label-success {\n  background-color: #4caf50;\n}\n.label.label-info {\n  background-color: #00bcd4;\n}\n.label.label-warning {\n  background-color: #ff9800;\n}\n.label.label-danger {\n  background-color: #f44336;\n}\n.label.label-rose {\n  background-color: #e91e63;\n}\n\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: transparent;\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n}\n.form-control::-moz-placeholder,\n.form-group .form-control::-moz-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder,\n.form-group .form-control:-ms-input-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder,\n.form-group .form-control::-webkit-input-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control[readonly], .form-control[disabled], fieldset[disabled] .form-control,\n.form-group .form-control[readonly],\n.form-group .form-control[disabled], fieldset[disabled]\n.form-group .form-control {\n  background-color: transparent;\n}\n.form-control[disabled], fieldset[disabled] .form-control,\n.form-group .form-control[disabled], fieldset[disabled]\n.form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2;\n}\n\n.form-group {\n  position: relative;\n}\n.form-group.label-static label.control-label, .form-group.label-placeholder label.control-label, .form-group.label-floating label.control-label {\n  position: absolute;\n  pointer-events: none;\n  transition: 0.3s ease all;\n}\n.form-group.label-floating label.control-label {\n  will-change: left, top, contents;\n}\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n  display: none;\n}\n.form-group .help-block {\n  position: absolute;\n  display: none;\n}\n.form-group.is-focused .form-control {\n  outline: none;\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  transition-duration: 0.3s;\n}\n.form-group.is-focused .form-control .material-input:after {\n  background-color: #9c27b0;\n}\n.form-group.is-focused.form-info .form-control {\n  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-success .form-control {\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-warning .form-control {\n  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-danger .form-control {\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-rose .form-control {\n  background-image: linear-gradient(#e91e63, #e91e63), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-white .form-control {\n  background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.label-placeholder label,\n.form-group.is-focused.label-placeholder label.control-label {\n  color: #AAAAAA;\n}\n.form-group.is-focused .help-block {\n  display: block;\n}\n.form-group.has-warning .form-control {\n  box-shadow: none;\n}\n.form-group.has-warning.is-focused .form-control {\n  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-warning label.control-label,\n.form-group.has-warning .help-block {\n  color: #ff9800;\n}\n.form-group.has-error .form-control {\n  box-shadow: none;\n}\n.form-group.has-error.is-focused .form-control {\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-error label.control-label,\n.form-group.has-error .help-block {\n  color: #f44336;\n}\n.form-group.has-success .form-control {\n  box-shadow: none;\n}\n.form-group.has-success.is-focused .form-control {\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-success label.control-label,\n.form-group.has-success .help-block {\n  color: #4caf50;\n}\n.form-group.has-info .form-control {\n  box-shadow: none;\n}\n.form-group.has-info.is-focused .form-control {\n  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-info label.control-label,\n.form-group.has-info .help-block {\n  color: #00bcd4;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group textarea ~ .form-control-highlight {\n  margin-top: -11px;\n}\n.form-group select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-group select ~ .material-input:after {\n  display: none;\n}\n\n.form-control {\n  margin-bottom: 7px;\n}\n.form-control::-moz-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n\nlabel.control-label {\n  font-size: 11px;\n  line-height: 1.07143;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n\n.help-block {\n  margin-top: 0;\n  font-size: 11px;\n}\n\n.form-group {\n  padding-bottom: 7px;\n  margin: 27px 0 0 0;\n}\n.form-group .form-control {\n  margin-bottom: 7px;\n}\n.form-group .form-control::-moz-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .form-control:-ms-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .form-control::-webkit-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .checkbox label,\n.form-group .radio label,\n.form-group label {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group label.control-label {\n  font-size: 11px;\n  line-height: 1.07143;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group .help-block {\n  margin-top: 0;\n  font-size: 11px;\n}\n.form-group.label-floating label.control-label, .form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n.form-group.label-static label.control-label, .form-group.label-floating.is-focused label.control-label, .form-group.label-floating:not(.is-empty) label.control-label {\n  top: -28px;\n  left: 0;\n  font-size: 11px;\n  line-height: 1.07143;\n}\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -28px;\n  left: 0;\n  font-size: 11px;\n  line-height: 1.07143;\n}\n\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0;\n}\n.form-group.form-group-sm .form-control {\n  margin-bottom: 3px;\n}\n.form-group.form-group-sm .form-control::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .checkbox label,\n.form-group.form-group-sm .radio label,\n.form-group.form-group-sm label {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm label.control-label {\n  font-size: 9px;\n  line-height: 1.125;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-sm .help-block {\n  margin-top: 0;\n  font-size: 9px;\n}\n.form-group.form-group-sm.label-floating label.control-label, .form-group.form-group-sm.label-placeholder label.control-label {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group.form-group-sm.label-static label.control-label, .form-group.form-group-sm.label-floating.is-focused label.control-label, .form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0;\n}\n.form-group.form-group-lg .form-control {\n  margin-bottom: 9px;\n}\n.form-group.form-group-lg .form-control::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .checkbox label,\n.form-group.form-group-lg .radio label,\n.form-group.form-group-lg label {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg label.control-label {\n  font-size: 14px;\n  line-height: 1.0;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-lg .help-block {\n  margin-top: 0;\n  font-size: 14px;\n}\n.form-group.form-group-lg.label-floating label.control-label, .form-group.form-group-lg.label-placeholder label.control-label {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.form-group.form-group-lg.label-static label.control-label, .form-group.form-group-lg.label-floating.is-focused label.control-label, .form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 1.0;\n}\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 1.0;\n}\n\nselect.form-control {\n  border: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.form-group.is-focused select.form-control {\n  box-shadow: none;\n  border-color: #D2D2D2;\n}\nselect.form-control[multiple], .form-group.is-focused select.form-control[multiple] {\n  height: 85px;\n}\n\n.input-group-btn .btn {\n  margin: 0 0 7px 0;\n}\n\n.form-group.form-group-sm .input-group-btn .btn {\n  margin: 0 0 3px 0;\n}\n.form-group.form-group-lg .input-group-btn .btn {\n  margin: 0 0 9px 0;\n}\n\n.input-group .input-group-btn {\n  padding: 0 12px;\n}\n.input-group .input-group-addon {\n  border: 0;\n  background: transparent;\n  padding: 6px 15px 0px;\n}\n\n.form-group input[type=file] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n\n.form-control-feedback {\n  opacity: 0;\n}\n.has-success .form-control-feedback {\n  color: #4caf50;\n  opacity: 1;\n}\n.has-error .form-control-feedback {\n  color: #f44336;\n  opacity: 1;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 0;\n}\n.form-horizontal .radio {\n  margin-bottom: 10px;\n}\n.form-horizontal label {\n  text-align: right;\n}\n.form-horizontal label.control-label {\n  margin: 0;\n}\n\n.form-newsletter .input-group,\n.form-newsletter .form-group {\n  float: left;\n  width: 78%;\n  margin-right: 2%;\n  margin-top: 9px;\n}\n.form-newsletter .btn {\n  float: left;\n  width: 20%;\n  margin: 9px 0 0;\n}\n\n.alert {\n  border: 0;\n  border-radius: 0;\n  position: relative;\n  padding: 20px 15px;\n  line-height: 20px;\n}\n.alert b {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.alert, .alert.alert-default {\n  background-color: white;\n  color: #555555;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.alert a, .alert .alert-link, .alert.alert-default a, .alert.alert-default .alert-link {\n  color: #555555;\n}\n.alert.alert-inverse {\n  background-color: #2e2e2e;\n  color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.alert.alert-inverse a, .alert.alert-inverse .alert-link {\n  color: #fff;\n}\n.alert.alert-primary {\n  background-color: #af2cc5;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.alert.alert-primary a, .alert.alert-primary .alert-link {\n  color: #ffffff;\n}\n.alert.alert-success {\n  background-color: #5cb860;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.alert.alert-success a, .alert.alert-success .alert-link {\n  color: #ffffff;\n}\n.alert.alert-info {\n  background-color: #00d3ee;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.alert.alert-info a, .alert.alert-info .alert-link {\n  color: #ffffff;\n}\n.alert.alert-warning {\n  background-color: #ffa21a;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.alert.alert-warning a, .alert.alert-warning .alert-link {\n  color: #ffffff;\n}\n.alert.alert-danger {\n  background-color: #f55a4e;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.alert.alert-danger a, .alert.alert-danger .alert-link {\n  color: #ffffff;\n}\n.alert.alert-rose {\n  background-color: #eb3573;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.alert.alert-rose a, .alert.alert-rose .alert-link {\n  color: #ffffff;\n}\n.alert-info, .alert-danger, .alert-warning, .alert-success {\n  color: #ffffff;\n}\n.alert-default a, .alert-default .alert-link {\n  color: rgba(0,0,0, 0.87);\n}\n.alert i[data-notify=\"icon\"] {\n  font-size: 30px;\n  display: block;\n  left: 15px;\n  position: absolute;\n  top: 50%;\n  margin-top: -15px;\n}\n.alert span {\n  display: block;\n  max-width: 89%;\n}\n.alert .alert-icon {\n  display: block;\n  float: left;\n  margin-right: 15px;\n}\n.alert .alert-icon i {\n  margin-top: -7px;\n  top: 5px;\n  position: relative;\n}\n\n.alert.alert-with-icon {\n  padding-left: 65px;\n}\n\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 1em;\n  font-weight: 300;\n}\n.table .radio,\n.table .checkbox {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 10px;\n  padding: 0;\n  width: 15px;\n}\n.table .radio .icons,\n.table .checkbox .icons {\n  position: relative;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle;\n}\n.table > thead > tr > th {\n  padding-bottom: 4px;\n}\n.table .td-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.table .td-actions .btn {\n  margin: 0px;\n  padding: 5px;\n}\n.table > tbody > tr {\n  position: relative;\n}\n\n.checkbox label {\n  cursor: pointer;\n  padding-left: 0;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .checkbox label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .checkbox label:hover, .form-group.is-focused .checkbox label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .checkbox label {\n  color: rgba(0,0,0, 0.26);\n}\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  left: 0;\n  pointer-events: none;\n}\n.checkbox .checkbox-material {\n  vertical-align: middle;\n  position: relative;\n  top: 3px;\n  padding-right: 5px;\n}\n.checkbox .checkbox-material:before {\n  display: block;\n  position: absolute;\n  left: 0;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.84);\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(2.3, 2.3, 1);\n          transform: scale3d(2.3, 2.3, 1);\n}\n.checkbox .checkbox-material .check {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 1px solid rgba(0,0,0, .54);\n  overflow: hidden;\n  z-index: 1;\n  border-radius: 3px;\n}\n.checkbox .checkbox-material .check:before {\n  position: absolute;\n  content: \"\";\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  display: block;\n  margin-top: -3px;\n  margin-left: 7px;\n  width: 0;\n  height: 0;\n  background: red;\n  box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;\n  -webkit-animation: checkbox-off 0.3s forwards;\n          animation: checkbox-off 0.3s forwards;\n}\n.checkbox input[type=checkbox]:focus + .checkbox-material .check:after {\n  opacity: 0.2;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check {\n  background: #9c27b0;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:before {\n  color: #FFFFFF;\n  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  -webkit-animation: checkbox-on 0.3s forwards;\n          animation: checkbox-on 0.3s forwards;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material:before {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:after {\n  -webkit-animation: rippleOn 500ms forwards;\n          animation: rippleOn 500ms forwards;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material:before {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\nfieldset[disabled] .checkbox, fieldset[disabled] .checkbox input[type=checkbox],\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check,\n.checkbox input[type=checkbox][disabled] + .circle {\n  opacity: 0.5;\n}\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check {\n  border-color: #000000;\n  opacity: .26;\n}\n.checkbox input[type=checkbox][disabled] + .checkbox-material .check:after {\n  background-color: rgba(0,0,0, 0.87);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n@-webkit-keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n\n@keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n@-webkit-keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.radio label {\n  cursor: pointer;\n  padding-left: 35px;\n  position: relative;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .radio label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .radio label:hover, .form-group.is-focused .radio label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .radio label {\n  color: rgba(0,0,0, 0.26);\n}\n.radio label span {\n  display: block;\n  position: absolute;\n  left: 10px;\n  top: 2px;\n  transition-duration: 0.2s;\n}\n.radio label .circle {\n  border: 1px solid rgba(0,0,0, .54);\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n}\n.radio label .check {\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n  background-color: #9c27b0;\n  -webkit-transform: scale3d(0, 0, 0);\n          transform: scale3d(0, 0, 0);\n}\n.radio label .check:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  background-color: rgba(0,0,0, 0.87);\n  left: -18px;\n  top: -18px;\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(1.5, 1.5, 1);\n          transform: scale3d(1.5, 1.5, 1);\n}\n.radio label input[type=radio]:not(:checked) ~ .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.radio label input[type=radio]:checked ~ .check:after {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.radio input[type=radio] {\n  opacity: 0;\n  height: 0;\n  width: 0;\n  overflow: hidden;\n}\n.radio input[type=radio]:checked ~ .check, .radio input[type=radio]:checked ~ .circle {\n  opacity: 1;\n}\n.radio input[type=radio]:checked ~ .check {\n  background-color: #9c27b0;\n}\n.radio input[type=radio]:checked ~ .circle {\n  border-color: #9c27b0;\n}\n.radio input[type=radio]:checked ~ .check {\n  -webkit-transform: scale3d(0.65, 0.65, 1);\n          transform: scale3d(0.65, 0.65, 1);\n}\n.radio input[type=radio][disabled] ~ .check, .radio input[type=radio][disabled] ~ .circle {\n  opacity: 0.26;\n}\n.radio input[type=radio][disabled] ~ .check {\n  background-color: #000000;\n}\n.radio input[type=radio][disabled] ~ .circle {\n  border-color: #000000;\n}\n\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.togglebutton {\n  vertical-align: middle;\n}\n.togglebutton, .togglebutton label, .togglebutton input, .togglebutton .toggle {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.togglebutton label {\n  cursor: pointer;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .togglebutton label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .togglebutton label:hover, .form-group.is-focused .togglebutton label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .togglebutton label {\n  color: rgba(0,0,0, 0.26);\n}\n.togglebutton label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.togglebutton label .toggle {\n  text-align: left;\n  margin-left: 5px;\n}\n.togglebutton label .toggle,\n.togglebutton label input[type=checkbox][disabled] + .toggle {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  background-color: rgba(80, 80, 80, 0.7);\n  border-radius: 15px;\n  margin-right: 15px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n}\n.togglebutton label .toggle:after {\n  content: \"\";\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-color: #FFFFFF;\n  border-radius: 20px;\n  position: relative;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  border: 1px solid rgba(0,0,0, .54);\n  transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\n}\n.togglebutton label input[type=checkbox][disabled] + .toggle:after, .togglebutton label input[type=checkbox][disabled]:checked + .toggle:after {\n  background-color: #BDBDBD;\n}\n.togglebutton label input[type=checkbox] + .toggle:active:after, .togglebutton label input[type=checkbox][disabled] + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n  left: 15px;\n}\n.togglebutton label input[type=checkbox]:checked + .toggle {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n  border-color: #9c27b0;\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(156, 39, 176, 0.1);\n}\n\n.withripple {\n  position: relative;\n}\n\n.ripple-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n  pointer-events: none;\n}\n.disabled .ripple-container {\n  display: none;\n}\n\n.ripple {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin-left: -10px;\n  margin-top: -10px;\n  border-radius: 100%;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.05);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.ripple.ripple-on {\n  transition: opacity 0.15s ease-in 0s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  opacity: 0.1;\n}\n\n.ripple.ripple-out {\n  transition: opacity 0.1s linear 0s !important;\n  opacity: 0;\n}\n\n.section-dark .nav-pills > li > a, .section-image .nav-pills > li > a {\n  color: #999999;\n}\n.section-dark .nav-pills > li > a:hover,\n.section-dark .nav-pills > li > a:focus, .section-image .nav-pills > li > a:hover,\n.section-image .nav-pills > li > a:focus {\n  background-color: #EEEEEE;\n}\n.nav-pills > li > a {\n  line-height: 24px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  text-align: center;\n  color: #555555;\n  transition: all .3s;\n}\n.nav-pills > li > a:hover {\n  background-color: rgba(200, 200, 200, 0.2);\n}\n.nav-pills > li i {\n  display: block;\n  font-size: 30px;\n  padding: 15px 0;\n}\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.nav-pills:not(.nav-pills-icons) > li > a {\n  border-radius: 30px;\n}\n.nav-pills.nav-stacked > li + li {\n  margin-top: 5px;\n}\n.nav-pills.nav-pills-info > li.active > a, .nav-pills.nav-pills-info > li.active > a:focus, .nav-pills.nav-pills-info > li.active > a:hover {\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.nav-pills.nav-pills-success > li.active > a, .nav-pills.nav-pills-success > li.active > a:focus, .nav-pills.nav-pills-success > li.active > a:hover {\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.nav-pills.nav-pills-warning > li.active > a, .nav-pills.nav-pills-warning > li.active > a:focus, .nav-pills.nav-pills-warning > li.active > a:hover {\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.nav-pills.nav-pills-danger > li.active > a, .nav-pills.nav-pills-danger > li.active > a:focus, .nav-pills.nav-pills-danger > li.active > a:hover {\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n\n.tab-space {\n  padding: 20px 0 50px 0px;\n}\n\n.modal-content {\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n  border-radius: 6px;\n  border: none;\n}\n.modal-content .modal-header {\n  border-bottom: none;\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 0;\n  padding-left: 24px;\n}\n.modal-content .modal-body {\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 16px;\n  padding-left: 24px;\n}\n.modal-content .modal-footer {\n  border-top: none;\n  padding: 7px;\n}\n.modal-content .modal-footer.text-center {\n  text-align: center;\n}\n.modal-content .modal-footer button {\n  margin: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: auto;\n}\n.modal-content .modal-footer button.pull-left {\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative;\n  left: -5px;\n}\n.modal-content .modal-footer button + button {\n  margin-bottom: 16px;\n}\n.modal-content .modal-body + .modal-footer {\n  padding-top: 0;\n}\n\n.modal-backdrop {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.modal .modal-dialog {\n  margin-top: 100px;\n}\n.modal .modal-header .close {\n  color: #999999;\n}\n.modal .modal-header .close:hover, .modal .modal-header .close:focus {\n  opacity: 1;\n}\n.modal .modal-header .close i {\n  font-size: 16px;\n}\n\n.modal-notice .instruction {\n  margin-bottom: 25px;\n}\n.modal-notice .picture {\n  max-width: 150px;\n}\n.modal-notice .modal-content .btn-raised {\n  margin-bottom: 15px;\n}\n\n.modal-small {\n  width: 300px;\n}\n.modal-small .modal-body {\n  margin-top: 20px;\n}\n\n.navbar {\n  border: 0;\n  border-radius: 3px;\n  border-bottom: 1px solid #ededf3;\n  padding: 10px 0;\n}\n.navbar .navbar-brand {\n  position: relative;\n  height: 50px;\n  line-height: 30px;\n  color: inherit;\n  padding: 10px 15px;\n}\n.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .notification {\n  position: absolute;\n  top: 5px;\n  border: 1px solid #FFF;\n  right: 10px;\n  font-size: 9px;\n  background: #f44336;\n  color: #FFFFFF;\n  min-width: 20px;\n  padding: 0px 5px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 19px;\n  vertical-align: middle;\n  display: block;\n}\n.navbar .navbar-text {\n  color: inherit;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.navbar .navbar-nav > li > a {\n  color: inherit;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n.navbar .navbar-nav > li > a:hover, .navbar .navbar-nav > li > a:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .navbar-nav > li > a .material-icons,\n.navbar .navbar-nav > li > a .fa {\n  font-size: 20px;\n}\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon) .fa {\n  position: relative;\n  top: 2px;\n  margin-top: -4px;\n  margin-right: 4px;\n}\n.navbar .navbar-nav > li > .dropdown-menu {\n  margin-top: -20px;\n}\n.navbar .navbar-nav > li.open > .dropdown-menu {\n  margin-top: 0;\n}\n.navbar .navbar-nav > .active > a, .navbar .navbar-nav > .active > a:hover, .navbar .navbar-nav > .active > a:focus {\n  color: inherit;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.navbar .navbar-nav > .disabled > a, .navbar .navbar-nav > .disabled > a:hover, .navbar .navbar-nav > .disabled > a:focus {\n  color: inherit;\n  background-color: transparent;\n  opacity: 0.9;\n}\n.navbar .navbar-nav .profile-photo {\n  padding: 0 5px 0;\n}\n.navbar .navbar-nav .profile-photo .profile-photo-small {\n  height: 40px;\n  width: 40px;\n}\n.navbar .navbar-toggle {\n  border: 0;\n}\n.navbar .navbar-toggle:hover, .navbar .navbar-toggle:focus {\n  background-color: transparent;\n}\n.navbar .navbar-toggle .icon-bar {\n  background-color: inherit;\n  border: 1px solid;\n}\n.navbar .navbar-default .navbar-toggle,\n.navbar .navbar-inverse .navbar-toggle {\n  border-color: transparent;\n}\n.navbar .navbar-collapse,\n.navbar .navbar-form {\n  border-top: none;\n  box-shadow: none;\n}\n.navbar .navbar-nav > .open > a, .navbar .navbar-nav > .open > a:hover, .navbar .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: inherit;\n}\n@media (max-width: 767px) {\n  .navbar .navbar-nav .navbar-text {\n    color: inherit;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border: 0;\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu .divider {\n    border-bottom: 1px solid;\n    opacity: 0.08;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a {\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a:hover, .navbar .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .disabled > a, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n}\n.navbar.navbar-default .logo-container .brand {\n  color: #555555;\n}\n.navbar .navbar-link {\n  color: inherit;\n}\n.navbar .navbar-link:hover {\n  color: inherit;\n}\n.navbar .btn {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.navbar .btn-link {\n  color: inherit;\n}\n.navbar .btn-link:hover, .navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .btn-link[disabled]:hover, .navbar .btn-link[disabled]:focus, fieldset[disabled] .navbar .btn-link:hover, fieldset[disabled] .navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .navbar-form {\n  margin: 4px 0 0;\n}\n.navbar .navbar-form .form-group {\n  margin: 0;\n  padding: 0;\n}\n.navbar .navbar-form .form-group .material-input:before, .navbar .navbar-form .form-group.is-focused .material-input:after {\n  background-color: inherit;\n}\n.navbar .navbar-form .form-group .form-control,\n.navbar .navbar-form .form-control {\n  border-color: inherit;\n  color: inherit;\n  padding: 0;\n  margin: 0;\n  height: 28px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n.navbar, .navbar.navbar-default {\n  background-color: #FFFFFF;\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar .navbar-form input.form-control::-moz-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-moz-placeholder {\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar .navbar-form input.form-control:-ms-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control:-ms-input-placeholder {\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar .navbar-form input.form-control::-webkit-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #555555;\n}\n.navbar .dropdown-menu, .navbar.navbar-default .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar .dropdown-menu li > a:hover, .navbar .dropdown-menu li > a:focus, .navbar.navbar-default .dropdown-menu li > a:hover, .navbar.navbar-default .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.navbar .dropdown-menu .active > a, .navbar.navbar-default .dropdown-menu .active > a {\n  background-color: #FFFFFF;\n  color: #555555;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.navbar .dropdown-menu .active > a:hover, .navbar .dropdown-menu .active > a:focus, .navbar.navbar-default .dropdown-menu .active > a:hover, .navbar.navbar-default .dropdown-menu .active > a:focus {\n  color: #555555;\n}\n.navbar.navbar-inverse {\n  background-color: #212121;\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-moz-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control:-ms-input-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-inverse .dropdown-menu li > a:hover, .navbar.navbar-inverse .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #212121;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.navbar.navbar-inverse .dropdown-menu .active > a {\n  background-color: #212121;\n  color: #fff;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.navbar.navbar-inverse .dropdown-menu .active > a:hover, .navbar.navbar-inverse .dropdown-menu .active > a:focus {\n  color: #fff;\n}\n.navbar.navbar-primary {\n  background-color: #9c27b0;\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-primary .dropdown-menu li > a:hover, .navbar.navbar-primary .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #9c27b0;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.navbar.navbar-primary .dropdown-menu .active > a {\n  background-color: #9c27b0;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.navbar.navbar-primary .dropdown-menu .active > a:hover, .navbar.navbar-primary .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-success {\n  background-color: #4caf50;\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-success .dropdown-menu li > a:hover, .navbar.navbar-success .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-success .dropdown-menu .active > a {\n  background-color: #4caf50;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-success .dropdown-menu .active > a:hover, .navbar.navbar-success .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-info {\n  background-color: #00bcd4;\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-info .dropdown-menu li > a:hover, .navbar.navbar-info .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.navbar.navbar-info .dropdown-menu .active > a {\n  background-color: #00bcd4;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.navbar.navbar-info .dropdown-menu .active > a:hover, .navbar.navbar-info .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-warning {\n  background-color: #ff9800;\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-warning .dropdown-menu li > a:hover, .navbar.navbar-warning .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.navbar.navbar-warning .dropdown-menu .active > a {\n  background-color: #ff9800;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.navbar.navbar-warning .dropdown-menu .active > a:hover, .navbar.navbar-warning .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-danger {\n  background-color: #f44336;\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-danger .dropdown-menu li > a:hover, .navbar.navbar-danger .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.navbar.navbar-danger .dropdown-menu .active > a {\n  background-color: #f44336;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.navbar.navbar-danger .dropdown-menu .active > a:hover, .navbar.navbar-danger .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-rose {\n  background-color: #e91e63;\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-rose .dropdown-menu li > a:hover, .navbar.navbar-rose .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #e91e63;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.navbar.navbar-rose .dropdown-menu .active > a {\n  background-color: #e91e63;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.navbar.navbar-rose .dropdown-menu .active > a:hover, .navbar.navbar-rose .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar-inverse {\n  background-color: #3f51b5;\n}\n.navbar.navbar-transparent {\n  background-color: transparent;\n  box-shadow: none;\n  border-bottom: 0;\n}\n.navbar.navbar-transparent .logo-container .brand {\n  color: #FFFFFF;\n}\n.navbar-fixed-top {\n  border-radius: 0;\n}\n@media (max-width: 1199px) {\n  .navbar {\n    /*\n        .navbar-form {\n          margin-top: 10px;\n        }\n    */\n  }\n  .navbar .navbar-brand {\n    height: 50px;\n    padding: 10px 15px;\n  }\n  .navbar .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar .alert {\n  border-radius: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 85px;\n  width: 100%;\n  z-index: 3;\n  transition: all 0.3s;\n}\n\n.nav-align-center {\n  text-align: center;\n}\n.nav-align-center .nav-pills {\n  display: inline-block;\n}\n\n.navbar-absolute {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  z-index: 1029;\n}\n\n.popover, .tooltip-inner {\n  color: #555555;\n  line-height: 1.5em;\n  background: #FFFFFF;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n\n.popover {\n  padding: 0;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.popover.left > .arrow, .popover.right > .arrow, .popover.top > .arrow, .popover.bottom > .arrow {\n  border: none;\n}\n\n.popover-title {\n  background-color: #FFFFFF;\n  border: none;\n  padding: 15px 15px 5px;\n  font-size: 1.3em;\n}\n\n.popover-content {\n  padding: 10px 15px 15px;\n  line-height: 1.4;\n}\n\n.tooltip.in {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0px, 0);\n  transform: translate3d(0, 0px, 0);\n}\n\n.tooltip {\n  opacity: 0;\n  transition: opacity, -webkit-transform .2s ease;\n  transition: opacity, transform .2s ease;\n  transition: opacity, transform .2s ease, -webkit-transform .2s ease;\n  -webkit-transform: translate3d(0, 5px, 0);\n  transform: translate3d(0, 5px, 0);\n}\n.tooltip.left .tooltip-arrow {\n  border-left-color: #FFFFFF;\n}\n.tooltip.right .tooltip-arrow {\n  border-right-color: #FFFFFF;\n}\n.tooltip.top .tooltip-arrow {\n  border-top-color: #FFFFFF;\n}\n.tooltip.bottom .tooltip-arrow {\n  border-bottom-color: #FFFFFF;\n}\n\n.tooltip-inner {\n  padding: 10px 15px;\n  min-width: 130px;\n}\n\nfooter {\n  padding: 15px 0;\n}\nfooter ul {\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n}\nfooter ul li {\n  display: inline-block;\n}\nfooter ul li a {\n  color: inherit;\n  padding: 15px;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  text-decoration: none;\n  position: relative;\n  display: block;\n}\nfooter ul li a:hover {\n  text-decoration: none;\n}\nfooter .copyright {\n  padding: 15px 0;\n  margin: 0;\n}\nfooter .copyright .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 3px;\n}\nfooter .btn {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.dropdown-menu {\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.dropdown-menu .divider {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.dropdown-menu li > a {\n  font-size: 13px;\n  padding: 10px 20px;\n  margin: 0 5px;\n  border-radius: 2px;\n  transition: all 150ms linear;\n}\n.dropdown-menu li > a:hover, .dropdown-menu li > a:focus {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.dropdown-menu.dropdown-with-icons li > a {\n  padding: 12px 20px 12px 12px;\n}\n.dropdown-menu.dropdown-with-icons li > a .material-icons {\n  vertical-align: middle;\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 1px;\n  margin-right: 12px;\n  opacity: .5;\n}\n.dropdown-menu li {\n  position: relative;\n}\n.dropdown-menu li a:hover,\n.dropdown-menu li a:focus,\n.dropdown-menu li a:active {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n}\n.dropdown-menu .divider {\n  margin: 5px 0;\n}\n.navbar .dropdown-menu li a:hover,\n.navbar .dropdown-menu li a:focus,\n.navbar .dropdown-menu li a:active, .navbar.navbar-default .dropdown-menu li a:hover,\n.navbar.navbar-default .dropdown-menu li a:focus,\n.navbar.navbar-default .dropdown-menu li a:active {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n\n.card {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0,0,0, 0.87);\n  background: #fff;\n}\n.card .card-height-indicator {\n  margin-top: 100%;\n}\n.card .title {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.card .card-image {\n  height: 60%;\n  position: relative;\n  overflow: hidden;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -30px;\n  border-radius: 6px;\n}\n.card .card-image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  pointer-events: none;\n}\n.card .card-image .card-title {\n  position: absolute;\n  bottom: 15px;\n  left: 15px;\n  color: #fff;\n  font-size: 1.3em;\n  text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);\n}\n.card .category:not([class*=\"text-\"]) {\n  color: #999999;\n}\n.card .card-content {\n  padding: 15px 20px;\n}\n.card .card-content .category {\n  margin-bottom: 0;\n}\n.card .card-header {\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  margin: -20px 15px 0;\n  border-radius: 3px;\n  padding: 15px;\n  background-color: #999999;\n}\n.card .card-header .title {\n  color: #FFFFFF;\n}\n.card .card-header .category {\n  margin-bottom: 0;\n  color: rgba(255, 255, 255, 0.62);\n}\n.card .card-header.card-chart {\n  padding: 0;\n  min-height: 160px;\n}\n.card .card-header.card-chart + .content h4 {\n  margin-top: 0;\n}\n.card .card-header .ct-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.card .card-header .ct-grid {\n  stroke: rgba(255, 255, 255, 0.2);\n}\n.card .card-header .ct-series-a .ct-point,\n.card .card-header .ct-series-a .ct-line,\n.card .card-header .ct-series-a .ct-bar,\n.card .card-header .ct-series-a .ct-slice-donut {\n  stroke: rgba(255, 255, 255, 0.8);\n}\n.card .card-header .ct-series-a .ct-slice-pie,\n.card .card-header .ct-series-a .ct-area {\n  fill: rgba(255, 255, 255, 0.4);\n}\n.card .chart-title {\n  position: absolute;\n  top: 25px;\n  width: 100%;\n  text-align: center;\n}\n.card .chart-title h3 {\n  margin: 0;\n  color: #FFFFFF;\n}\n.card .chart-title h6 {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.4);\n}\n.card .card-footer {\n  margin: 0 20px 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eeeeee;\n}\n.card .card-footer .content {\n  display: block;\n}\n.card .card-footer div {\n  display: inline-block;\n}\n.card .card-footer .author {\n  color: #999999;\n}\n.card .card-footer .stats {\n  line-height: 22px;\n  color: #999999;\n  font-size: 12px;\n}\n.card .card-footer .stats .material-icons {\n  position: relative;\n  top: 4px;\n  font-size: 16px;\n}\n.card .card-footer h6 {\n  color: #999999;\n}\n.card img {\n  width: 100%;\n  height: auto;\n}\n.card .category .material-icons {\n  position: relative;\n  top: 6px;\n  line-height: 0;\n}\n.card .category-social .fa {\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 2px;\n  margin-right: 5px;\n}\n.card .author .avatar {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.card .author a {\n  color: #3C4858;\n  text-decoration: none;\n}\n.card .author a .ripple-container {\n  display: none;\n}\n.card .table {\n  margin-bottom: 0;\n}\n.card .table tr:first-child td {\n  border-top: none;\n}\n.card [data-background-color=\"purple\"] {\n  background: linear-gradient(60deg, #ab47bc, #8e24aa);\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.card [data-background-color=\"blue\"] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.card [data-background-color=\"green\"] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.card [data-background-color=\"orange\"] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.card [data-background-color=\"red\"] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.card [data-background-color] {\n  color: #FFFFFF;\n}\n.card [data-background-color] a {\n  color: #FFFFFF;\n}\n\n.card-stats .title {\n  margin: 0;\n}\n.card-stats .card-header {\n  float: left;\n  text-align: center;\n}\n.card-stats .card-header i {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n}\n.card-stats .card-content {\n  text-align: right;\n  padding-top: 10px;\n}\n\n.card-nav-tabs .header-raised {\n  margin-top: -30px;\n}\n.card-nav-tabs .nav-tabs {\n  background: transparent;\n  padding: 0;\n}\n.card-nav-tabs .nav-tabs-title {\n  float: left;\n  padding: 10px 10px 10px 0;\n  line-height: 24px;\n}\n\n.card-plain {\n  background: transparent;\n  box-shadow: none;\n}\n.card-plain .card-header {\n  margin-left: 0;\n  margin-right: 0;\n}\n.card-plain .content {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.card-plain .card-image {\n  margin: 0;\n  border-radius: 3px;\n}\n.card-plain .card-image img {\n  border-radius: 3px;\n}\n\n.iframe-container {\n  margin: 0 -20px 0;\n}\n.iframe-container iframe {\n  width: 100%;\n  height: 500px;\n  border: 0;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.card-profile,\n.card-testimonial {\n  margin-top: 30px;\n  text-align: center;\n}\n.card-profile .btn-just-icon.btn-raised,\n.card-testimonial .btn-just-icon.btn-raised {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.card-profile .card-avatar,\n.card-testimonial .card-avatar {\n  max-width: 130px;\n  max-height: 130px;\n  margin: -50px auto 0;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.card-profile .card-avatar + .content,\n.card-testimonial .card-avatar + .content {\n  margin-top: 15px;\n}\n.card-profile.card-plain .card-avatar,\n.card-testimonial.card-plain .card-avatar {\n  margin-top: 0;\n}\n\n.nav-tabs {\n  background: #9c27b0;\n  border: 0;\n  border-radius: 3px;\n  padding: 0 15px;\n}\n.nav-tabs > li > a {\n  color: #FFFFFF;\n  border: 0;\n  margin: 0;\n  border-radius: 3px;\n  line-height: 24px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.nav-tabs > li > a:hover {\n  background-color: transparent;\n  border: 0;\n}\n.nav-tabs > li > a, .nav-tabs > li > a:hover, .nav-tabs > li > a:focus {\n  background-color: transparent;\n  border: 0 !important;\n  color: #FFFFFF !important;\n  font-weight: 500;\n}\n.nav-tabs > li.disabled > a, .nav-tabs > li.disabled > a:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n.nav-tabs > li .material-icons {\n  margin: -1px 5px 0 0;\n}\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color .1s .2s;\n}\n\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.3rem;\n  line-height: 1;\n}\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end;\n}\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px;\n}\n\n.ct-point {\n  stroke-width: 8px;\n  stroke-linecap: round;\n}\n\n.ct-line {\n  fill: none;\n  stroke-width: 3px;\n}\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.8;\n}\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px;\n}\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px;\n}\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #00bcd4;\n}\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00bcd4;\n}\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f44336;\n}\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #f44336;\n}\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #ff9800;\n}\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #ff9800;\n}\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #9c27b0;\n}\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #9c27b0;\n}\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #4caf50;\n}\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #4caf50;\n}\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #9C9B99;\n}\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #9C9B99;\n}\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #999999;\n}\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #999999;\n}\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #dd4b39;\n}\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #dd4b39;\n}\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #35465c;\n}\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #35465c;\n}\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #e52d27;\n}\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #e52d27;\n}\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #55acee;\n}\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #55acee;\n}\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #cc2127;\n}\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #cc2127;\n}\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #1769ff;\n}\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #1769ff;\n}\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2;\n}\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2;\n}\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca;\n}\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca;\n}\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-square:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 100%;\n}\n.ct-square:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-square > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 93.75%;\n}\n.ct-minor-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 88.88889%;\n}\n.ct-major-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 83.33333%;\n}\n.ct-minor-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 80%;\n}\n.ct-major-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fourth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 75%;\n}\n.ct-perfect-fourth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fourth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fifth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 66.66667%;\n}\n.ct-perfect-fifth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fifth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 62.5%;\n}\n.ct-minor-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-golden-section:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 61.8047%;\n}\n.ct-golden-section:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-golden-section > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 60%;\n}\n.ct-major-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 56.25%;\n}\n.ct-minor-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 53.33333%;\n}\n.ct-major-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 50%;\n}\n.ct-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-tenth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 40%;\n}\n.ct-major-tenth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-tenth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-eleventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 37.5%;\n}\n.ct-major-eleventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-eleventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-twelfth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 33.33333%;\n}\n.ct-major-twelfth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-twelfth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-double-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 25%;\n}\n.ct-double-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-double-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-blue {\n  stroke: #9c27b0 !important;\n}\n\n.ct-azure {\n  stroke: #00bcd4 !important;\n}\n\n.ct-green {\n  stroke: #4caf50 !important;\n}\n\n.ct-orange {\n  stroke: #ff9800 !important;\n}\n\n.ct-red {\n  stroke: #f44336 !important;\n}\n\n.ct-white {\n  stroke: #FFFFFF !important;\n}\n\n.ct-rose {\n  stroke: #e91e63 !important;\n}\n\n@media (min-width: 992px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .navbar-nav > li > .dropdown-menu,\n  .dropdown .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget {\n    transition: all 150ms linear;\n    margin-top: -20px;\n    visibility: hidden;\n    display: block;\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n\n  .navbar-nav > li.open > .dropdown-menu,\n  .dropdown.open .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget.open {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible;\n    margin-top: 0px;\n  }\n\n  /*.navbar-nav > li > .dropdown-menu:before{\n      border-bottom: 11px solid rgba(0, 0, 0, 0.2);\n      border-left: 11px solid rgba(0, 0, 0, 0);\n      border-right: 11px solid rgba(0, 0, 0, 0);\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      left: 12px;\n      top: -11px;\n  }\n  .navbar-nav > li > .dropdown-menu:after {\n      border-bottom: 11px solid #FFFFFF;\n      border-left: 11px solid rgba(0, 0, 0, 0);\n      border-right: 11px solid rgba(0, 0, 0, 0);\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      left: 12px;\n      top: -10px;\n  }*/\n  .navbar-nav.navbar-right > li > .dropdown-menu:before {\n    left: auto;\n    right: 12px;\n  }\n\n  .navbar-nav.navbar-right > li > .dropdown-menu:after {\n    left: auto;\n    right: 12px;\n  }\n\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0;\n  }\n\n  body > .navbar-collapse.collapse {\n    display: none !important;\n  }\n\n  .card form [class*=\"col-\"] {\n    padding: 6px;\n  }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px;\n  }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px;\n  }\n\n  .sidebar .navbar-form {\n    display: none !important;\n  }\n  .sidebar .nav-mobile-menu {\n    display: none;\n  }\n}\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .sidebar {\n    display: none;\n    box-shadow: none;\n  }\n  .sidebar .sidebar-wrapper {\n    padding-bottom: 60px;\n  }\n  .sidebar .nav-mobile-menu {\n    margin-top: 0;\n  }\n  .sidebar .nav-mobile-menu .notification {\n    float: left;\n    line-height: 30px;\n    margin-right: 8px;\n  }\n  .sidebar .nav-mobile-menu .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .main-panel {\n    width: 100%;\n  }\n\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45);\n  }\n\n  body {\n    position: relative;\n  }\n\n  .main-panel {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0;\n  }\n\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative;\n  }\n\n  .navbar .navbar-collapse.collapse,\n  .navbar .navbar-collapse.collapse.in,\n  .navbar .navbar-collapse.collapsing {\n    display: none !important;\n  }\n\n  .navbar-nav > li {\n    float: none;\n    position: relative;\n    display: block;\n  }\n\n  .sidebar,\n  .off-canvas-sidebar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100vh;\n    width: 260px;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #9A9A9A;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding-right: 0px;\n    padding-left: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n  .sidebar > ul,\n  .off-canvas-sidebar > ul {\n    position: relative;\n    z-index: 4;\n    overflow-y: scroll;\n    height: calc(100vh - 61px);\n    width: 100%;\n  }\n  .sidebar::before,\n  .off-canvas-sidebar::before {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: #282828;\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .sidebar .logo,\n  .off-canvas-sidebar .logo {\n    position: relative;\n    z-index: 4;\n  }\n  .sidebar .navbar-form,\n  .off-canvas-sidebar .navbar-form {\n    margin: 10px 15px;\n    float: none !important;\n  }\n  .sidebar .navbar-form .btn,\n  .off-canvas-sidebar .navbar-form .btn {\n    position: absolute;\n    top: 25px;\n    right: 15px;\n  }\n  .sidebar .table-responsive,\n  .off-canvas-sidebar .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .nav-open .navbar-collapse {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n  }\n\n  .nav-open .navbar .container {\n    left: -250px;\n  }\n\n  .nav-open .main-panel {\n    left: 0;\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0);\n  }\n\n  .nav-open .sidebar {\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  }\n\n  .nav-open .off-canvas-sidebar,\n  .nav-open .sidebar {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  .close-layer {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n    transition: all 370ms ease-in;\n  }\n  .close-layer.visible {\n    opacity: 1;\n  }\n\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto;\n  }\n\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px;\n  }\n\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent;\n  }\n\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15);\n  }\n\n  .navbar-nav {\n    margin: 1px 0;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    padding: 15px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:first-child > a {\n    padding: 5px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:last-child > a {\n    padding: 15px 15px 25px 50px;\n  }\n\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .active > a,\n  [class*=\"navbar-\"] .navbar-nav .active > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .active > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .navbar-nav .open .dropdown-menu > li > a:active {\n    color: white;\n  }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus {\n    opacity: .7;\n    background: transparent;\n  }\n  [class*=\"navbar-\"] .navbar-nav.navbar-nav .open .dropdown-menu > li > a:active {\n    opacity: 1;\n  }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:hover .caret {\n    border-bottom-color: #777;\n    border-top-color: #777;\n  }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white;\n  }\n\n  .dropdown-menu {\n    display: none;\n  }\n\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden;\n  }\n\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    right: 250px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n  }\n\n  .social-line .btn {\n    margin: 0 0 10px 0;\n  }\n\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0;\n  }\n\n  .social-line.pull-right {\n    float: none;\n  }\n\n  .footer:not(.footer-big) nav > ul li {\n    float: none;\n  }\n\n  .social-area.pull-right {\n    float: none !important;\n  }\n\n  .form-control + .form-control-feedback {\n    margin-top: -8px;\n  }\n\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important;\n  }\n\n  .btn.dropdown-toggle {\n    margin-bottom: 0;\n  }\n\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px;\n  }\n\n  .media-post .media-body {\n    width: 100%;\n  }\n\n  .navbar-collapse.collapse {\n    height: 100% !important;\n  }\n\n  .navbar-collapse.collapse.in {\n    display: block;\n  }\n\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important;\n  }\n\n  .navbar-header {\n    float: none;\n  }\n\n  .navbar-collapse .nav p {\n    font-size: 14px;\n    margin: 0;\n  }\n  .navbar-collapse [class^=\"pe-7s-\"] {\n    float: left;\n    font-size: 20px;\n    margin-right: 10px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -20px;\n    margin-right: -20px;\n  }\n}\n.sidebar  .sidebar-wrapper , .off-canvas-sidebar  .sidebar-wrapper  {\n    position: relative;\n    height: calc(100vh - 75px);\n    overflow: auto;\n    width: 40vh;\n    top: 80px;\n    z-index: 4;\n    border-top: 1px solid #ccc;\n}\n.dashboard_icn {\n  display: inline-block;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/Dashboard.svg") + ");\n  background-repeat: no-repeat;\n  width: 15%;\n  height: 25px;\n}\n.management_icn {\n  display: inline-block;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/Management.svg") + ");\n  background-repeat: no-repeat;\n  width: 15%;\n  height: 25px;\n}\n.university_icn {\n  display: inline-block;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/College.svg") + ");\n  background-repeat: no-repeat;\n  width: 15%;\n  height: 25px;\n}\n.post_icn {\n  display: inline-block;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/Post.svg") + ");\n  background-repeat: no-repeat;\n  width: 15%;\n  height: 25px;\n}\n.billing_icn {\n  display: inline-block;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/Billing.svg") + ");\n  background-repeat: no-repeat;\n  width: 15%;\n  height: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-common/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"white\">\n  <div class=\"sidebar-wrapper\">\n    <p class=\"setIconHeadStyle\">SUPER ADMIN MENU</p>\n    <ul class=\"nav\">\n      <li class=\"active\">\n        <a href=\"#\">\n          <i class=\"dashboard_icn\"></i>\n          <p>Dashboard</p>\n        </a>\n      </li>\n      <li>\n        <a  [routerLink]=\"['/enterReport']\">\n                    <i class=\"management_icn\"></i>\n                    <p>Management</p>\n                </a>\n      </li>\n      <li>\n        <a  [routerLink]=\"['/university/list']\">\n                    <i class=\"university_icn\"></i>\n                    <p>University</p>\n                </a>\n      </li>\n      <li>\n        <a  [routerLink]=\"['/post/list']\">\n                    <i class=\"post_icn\"></i>\n                    <p>Post</p>\n                </a>\n      </li>\n      <li>\n        <a >\n                    <i class=\"billing_icn\"></i>\n                    <p>Billing</p>\n                </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-common/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    SidebarComponent.prototype.eventTrigger = function () {
        this.router.navigate(['/event/list']);
        this.isClassVisible = true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/app-common/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-common/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__super_admin_super_admin_module__ = __webpack_require__("../../../../../src/app/super-admin/super-admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_common_app_common_module__ = __webpack_require__("../../../../../src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entry_login_login_component__ = __webpack_require__("../../../../../src/app/entry/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entry_register_register_component__ = __webpack_require__("../../../../../src/app/entry/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entry_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/entry/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__college_backend_college_backend_module__ = __webpack_require__("../../../../../src/app/college-backend/college-backend.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manage_posts_manage_posts_module__ = __webpack_require__("../../../../../src/app/manage-posts/manage-posts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__entry_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__entry_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__entry_sign_up_sign_up_component__["a" /* SignUpComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__super_admin_super_admin_module__["a" /* SuperAdminModule */],
            __WEBPACK_IMPORTED_MODULE_12__college_backend_college_backend_module__["a" /* CollegeBackendModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_common_app_common_module__["a" /* AppCommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__manage_posts_manage_posts_module__["a" /* ManagePostsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entry_register_register_component__ = __webpack_require__("../../../../../src/app/entry/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/entry/sign-up/sign-up.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var appRoutes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__entry_register_register_component__["a" /* RegisterComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__entry_sign_up_sign_up_component__["a" /* SignUpComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/add-member/add-member.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=checkbox] {\n  display: none;\n}\n\ninput[type=checkbox]+label {\n  background: #999;\n  height: 16px;\n  width: 16px;\n  display: inline-block;\n  padding: 0 0 0 0px;\n}\n\ninput[type=checkbox]:checked+label {\n  background: #0080FF;\n  height: 16px;\n  width: 16px;\n  display: inline-block;\n  padding: 0 0 0 0px;\n}\ninput[type=text],input[type=email]{\n  background: #F6F8FA;\n  border-radius: 0 !important;\n  height: 50px;\n}\n.btnCustomizeStyle{\n  background: #3274F6;\n  border-radius: 50px;\n\n}\n.setBackGrnd{\n  background: #F6F8FA;\n}\n.setHeaderBackground{\n  background: #fff;\n  height: 80px;\n  line-height: 80px;\n  font-size: 18px;\n  color: #ccc;\n}\n.setAddMemeberBodyConatiner{\n  background: #fff;\n  font-size: 16px;\n  margin-top: 25px;\n}\n.setInputHeight{\n  margin-top: 20px;\n}\n.setFooterStyle{\n  background: #fff;\n  margin-top: 30px;\n  height: 160px;\n  font-size: 16px;\n  color: #949494;\n  line-height: 160px;\n}\n.setTextPos{\n  margin-top: 30px;\n  color: #949494;\n}\n/*****************************************\n  upload button styles\n******************************************/\n\n.file-upload {\n  position: relative;\n  display: inline-block;\n  margin-top: 20px;\n  margin-bottom: 50px;\n}\n\n.file-upload__label {\n  display: block;\n  padding: 1em 2em;\n  color: #4984F6;\n  border-radius: .4em;\n  border:1px solid #4984F6;\n  transition: background .3s;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.file-upload__input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 1;\n  width: 0;\n  height: 100%;\n  opacity: 0;\n}\n\n\n/*****************************************\n design styles\n******************************************/\n\nhtml {\n  font-family: 'helvetica neue', 'arial', sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 5em;\n  -webkit-font-smoothing: antialiased;\n  text-align: center;\n  background: #EE4F47;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college-backend/add-member/add-member.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid setBackGrnd\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 setHeaderBackground\">\n      <span class=\"col-md-offset-1\" [routerLink]=\"['/addTeacher']\">\n\t\t\t\tADD NEW MEMBER\n\t\t\t</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6 col-lg-6 setAddMemeberBodyConatiner\">\n      <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1\">\n        <div class=\"row setInputHeight\">\n          <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <span>Student</span>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <span>Teacher</span>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <span>Admin</span>\n          </div>\n        </div>\n        <div class=\"row setInputHeight\">\n          <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <input type='radio' name='memberType' value='student' id=\"student\" />\n            <label for=\"student\"></label>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <input type='radio' name='memberType' value='teacher' id=\"teacher\" />\n            <label for=\"teacher\"></label>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <input type='radio' name='memberType' value='admin' id=\"admin\" />\n            <label for=\"admin\"></label>\n          </div>\n        </div>\n        <div class=\"row setInputHeight\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <span>First Name <label>*</label></span>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <span>Last Name <label>*</label></span>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <input type=\"text\" class=\"form-control\" name=\"firstName\">\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <input type=\"text\" class=\"form-control\" name=\"lastName\">\n          </div>\n        </div>\n        <div class=\"row setInputHeight\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <span>Courses <label>*</label></span>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <input type=\"text\" class=\"form-control\" name=\"courses\">\n          </div>\n        </div>\n        <div class=\"row setInputHeight\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <span>Phone <label>*</label></span>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\">\n          </div>\n        </div>\n        <div class=\"row setInputHeight\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <span>Email <label>*</label></span>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <input type=\"email\" class=\"form-control\" name=\"email\">\n          </div>\n        </div>\n        <div class=\"row setInputHeight text-center\">\n          <div class=\"col-xs-12 col-sm-12 col-md-offset-4 col-md-5 col-lg-5 text-center\">\n            <button type=\"submit\" class=\"btn btn-lg btn-block btn-info btnCustomizeStyle\">Invite</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6 col-lg-6  setAddMemeberBodyConatiner\">\n      <div class=\"row setInputHeight\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center setTextPos\">\n          <span>ADD MORE THAN ONE MEMBER BY UPLOADING DATA VIA CSV FILE</span>\n        </div>\n        <div class=\"col-xs-12 setInputHeight text-center\">\n          <div class=\"file-upload\">\n            <label for=\"upload\" class=\"file-upload__label\">UPLOAD CSV FILE</label>\n            <input id=\"upload\" class=\"file-upload__input\" type=\"file\" name=\"file-upload\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row setFooterStyle\">\n    <div class=\"col-xs-12 text-center\">\n      &copy; 2016 SOCIAL UNIVERSITY. All Rights Reserved\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/college-backend/add-member/add-member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMemberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddMemberComponent = (function () {
    function AddMemberComponent() {
    }
    AddMemberComponent.prototype.ngOnInit = function () {
    };
    return AddMemberComponent;
}());
AddMemberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-member',
        template: __webpack_require__("../../../../../src/app/college-backend/add-member/add-member.component.html"),
        styles: [__webpack_require__("../../../../../src/app/college-backend/add-member/add-member.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddMemberComponent);

//# sourceMappingURL=add-member.component.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/add-teacher/add-teacher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setMainBckgrndStyle {\n  background-color: rgb(242, 242, 242);\n}\n\n.setWhiteBckgrnd {\n  background-color: #fff;\n}\n\n.setHeadStyle {\n  height: 80px;\n  font-size: 23px;\n  font-weight: bold;\n  color: #A7A7A7;\n  line-height: 80px;\n}\n\n.setInputHeight {\n  margin-top: 25px;\n}\n\n.setmarginTop {\n  margin-top: 15px;\n}\n\n.setButtonStyle {\n  background-color: #0078F9;\n  border-radius: 0;\n  color: #fff;\n}\n\n.input-group-addon {\n  background: none !important;\n  border: none !important;\n}\n\n.innerHeadStyle {\n  color: #4C4C4C !important;\n  font-size: 14px;\n}\n\n.setFooterStyle {\n  height: 120px;\n  line-height: 120px;\n  margin-top: 35px;\n  color: #BCBCBC;\n}\n\n.table-striped>tbody>tr:nth-of-type(odd) {\n  background-color: #F4F8FA !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college-backend/add-teacher/add-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid setMainBckgrndStyle\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 setWhiteBckgrnd setHeadStyle\">\n      <span class=\"col-md-offset-1\" [routerLink]=\"['/addStudent']\">Manage Teachers</span>\n    </div>\n  </div>\n  <div class=\"row setInputHeight\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-8 setWhiteBckgrnd\">\n      <div class=\"row setmarginTop\">\n        <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n          <button type=\"button\" name=\"button\" class=\"btn btn-md setButtonStyle\">ADD NEW TEACHER</button>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-offset-6 col-md-3 col-lg-3 text-right\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <label for=\"searchAdmin\">Search:</label>\n           </span>\n            <input type=\"text\" id=\"searchAdmin\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row setmarginTop\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive\">\n          <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"innerHeadStyle\">\n              <tr>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\"> TEACHER NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"title\"><span class=\"innerHeadStyle\">SUBJECTS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"phone\"><span class=\"innerHeadStyle\">PHONE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"email\"><span class=\"innerHeadStyle\">EMAIL</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <span class=\"innerHeadStyle\">ACTIONS</span>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"\" *ngIf=\"mf.data.length>0; else message\">\n              <tr *ngFor=\"let item of mf.data; let idx = index\">\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"mf.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <span>Showing Page {{ (mf.activePage - 1) * mf.rowsOnPage  + 1 }} of {{data_length}}</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-3\">\n                        <mfBootstrapPaginator></mfBootstrapPaginator>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #message>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row setWhiteBckgrnd setFooterStyle\">\n    <div class=\"col-xs-12 text-center\">\n      <span>&copy; 2016 SOCIAL UNIVERSITY. All Rights Reserved</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/college-backend/add-teacher/add-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTeacherComponent = (function () {
    function AddTeacherComponent(http) {
        this.http = http;
        this.rowsOnPage = 5;
    }
    AddTeacherComponent.prototype.getUniversity = function () {
        var _this = this;
        this.http.get("assets/university.json")
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    AddTeacherComponent.prototype.ngOnInit = function () {
        this.getUniversity();
    };
    return AddTeacherComponent;
}());
AddTeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-teacher',
        template: __webpack_require__("../../../../../src/app/college-backend/add-teacher/add-teacher.component.html"),
        styles: [__webpack_require__("../../../../../src/app/college-backend/add-teacher/add-teacher.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AddTeacherComponent);

var _a;
//# sourceMappingURL=add-teacher.component.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/admin-header/admin-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminHeader.nav li {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.navbar-inverse {\n  background-color: #0078F9;\n  border: none;\n  border-radius: 0;\n}\n\n.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover, .navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {\n  background-color: #0078F9 !important;\n  color: #fff;\n}\n\n.navbar-inverse .navbar-nav>li>a {\n  color: #81C1FC;\n}\n\n.dropdown-menu>li>a {\n  margin: 15px 10px;\n  padding: 9px 20px;\n}\n\n.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {\n  background-color: #0078F9 !important;\n  color: #fff;\n  padding: 10px 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college-backend/admin-header/admin-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n     </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"adminHeader nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">DASHBOARD</a></li>\n        <!-- <li><a href=\"#\">MEMBERS</a></li> -->\n        <li class=\"dropdown adminMember\">\n       <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">MEMBERS\n       </a>\n       <ul class=\"dropdown-menu\">\n         <li><a href=\"#\">ADD MEMEBERS</a></li>\n         <li><a href=\"#\">MANAGE ADMINS</a></li>\n         <li><a href=\"#\">MANAGE TEACHERS</a></li>\n         <li><a href=\"#\">MANAGE STUDENTS</a></li>\n\n       </ul>\n     </li>\n        <li><a href=\"#\">SUBJECTS</a></li>\n        <li><a href=\"#\">POSTS</a></li>\n        <li><a href=\"#\">PAYMENTS</a></li>\n        <li><a href=\"#\">PRIVACY</a></li>\n        <li><a href=\"#\">SETTINGS</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\">X</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/college-backend/admin-header/admin-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHeaderComponent = (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    return AdminHeaderComponent;
}());
AdminHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-header',
        template: __webpack_require__("../../../../../src/app/college-backend/admin-header/admin-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/college-backend/admin-header/admin-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminHeaderComponent);

//# sourceMappingURL=admin-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/college-backend-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_course_component__ = __webpack_require__("../../../../../src/app/college-backend/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_admins_manage_admins_component__ = __webpack_require__("../../../../../src/app/college-backend/manage-admins/manage-admins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_header_admin_header_component__ = __webpack_require__("../../../../../src/app/college-backend/admin-header/admin-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_teacher_add_teacher_component__ = __webpack_require__("../../../../../src/app/college-backend/add-teacher/add-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_student_manage_student_component__ = __webpack_require__("../../../../../src/app/college-backend/manage-student/manage-student.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollegeBackendRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: "addMembers", component: __WEBPACK_IMPORTED_MODULE_4__admin_header_admin_header_component__["a" /* AdminHeaderComponent */]
    },
    { path: "course", component: __WEBPACK_IMPORTED_MODULE_2__course_course_component__["a" /* CourseComponent */] },
    {
        path: 'addAdmin', component: __WEBPACK_IMPORTED_MODULE_3__manage_admins_manage_admins_component__["a" /* ManageAdminsComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__manage_admins_manage_admins_component__["a" /* ManageAdminsComponent */] },
        ]
    },
    {
        path: 'addTeacher', component: __WEBPACK_IMPORTED_MODULE_5__add_teacher_add_teacher_component__["a" /* AddTeacherComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__add_teacher_add_teacher_component__["a" /* AddTeacherComponent */] },
        ]
    },
    {
        path: 'addStudent', component: __WEBPACK_IMPORTED_MODULE_6__manage_student_manage_student_component__["a" /* ManageStudentComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_6__manage_student_manage_student_component__["a" /* ManageStudentComponent */] },
        ]
    }];
var CollegeBackendRoutingModule = (function () {
    function CollegeBackendRoutingModule() {
    }
    return CollegeBackendRoutingModule;
}());
CollegeBackendRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CollegeBackendRoutingModule);

//# sourceMappingURL=college-backend-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/college-backend.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_admins_manage_admins_component__ = __webpack_require__("../../../../../src/app/college-backend/manage-admins/manage-admins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_header_admin_header_component__ = __webpack_require__("../../../../../src/app/college-backend/admin-header/admin-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_teacher_add_teacher_component__ = __webpack_require__("../../../../../src/app/college-backend/add-teacher/add-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_student_manage_student_component__ = __webpack_require__("../../../../../src/app/college-backend/manage-student/manage-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__college_backend_routing_module__ = __webpack_require__("../../../../../src/app/college-backend/college-backend-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_member_add_member_component__ = __webpack_require__("../../../../../src/app/college-backend/add-member/add-member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__course_course_component__ = __webpack_require__("../../../../../src/app/college-backend/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_subjects_manage_subjects_component__ = __webpack_require__("../../../../../src/app/college-backend/manage-subjects/manage-subjects.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollegeBackendModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CollegeBackendModule = (function () {
    function CollegeBackendModule() {
    }
    return CollegeBackendModule;
}());
CollegeBackendModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__college_backend_routing_module__["a" /* CollegeBackendRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_datatable__["DataTableModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__add_member_add_member_component__["a" /* AddMemberComponent */], __WEBPACK_IMPORTED_MODULE_9__course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_10__manage_subjects_manage_subjects_component__["a" /* ManageSubjectsComponent */], __WEBPACK_IMPORTED_MODULE_4__admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__manage_admins_manage_admins_component__["a" /* ManageAdminsComponent */], __WEBPACK_IMPORTED_MODULE_6__manage_student_manage_student_component__["a" /* ManageStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_5__add_teacher_add_teacher_component__["a" /* AddTeacherComponent */]]
    })
], CollegeBackendModule);

//# sourceMappingURL=college-backend.module.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/course/course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logoImg {\n  margin-top: 5px;\n  width: 30%;\n}\n\n.pindicator {\n  /*margin-bottom: 50px;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto auto 50px auto;\n  width: 63rem;\n}\n\n.pindicator .bullet {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  text-align: center;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.pindicator .bullet::before,\n.pindicator .bullet::after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: .5rem;\n  top: 1.25rem;\n  -webkit-transform: translate3d(0, 0, -1px);\n          transform: translate3d(0, 0, -1px);\n}\n\n.pindicator .bullet::before {\n  background-color: lightgray;\n  width: 100%;\n}\n\n.pindicator .bullet::after {\n  background-color: #3274F6;\n  transition: opacity .25s ease-out;\n  opacity: 0;\n  width: 100%;\n}\n\n.pindicator .bullet:first-child::before,\n.pindicator .bullet:first-child::after {\n  left: 50%;\n  width: 50%;\n}\n\n.pindicator .bullet:last-child::before,\n.pindicator .bullet:last-child::after {\n  width: 50%;\n}\n\n.pindicator .icon {\n  background-color: lightgray;\n  border-radius: 100%;\n  color: transparent;\n  cursor: pointer;\n  font-size: 1.0rem;\n  display: inline-block;\n  height: 3em;\n  text-align: center;\n  transition: background-color .25s ease-out;\n  width: 3em;\n}\n\n.pindicator .text {\n  color: #333;\n  font-size: 1.2rem;\n  margin-top: 1rem;\n  text-transform: uppercase;\n  transition: background-color .25s ease-out;\n}\n\n.pindicator .past .icon,\n.pindicator .current .icon {\n  background-color: #3274F6;\n  color: white;\n}\n\n.pindicator .past::after,\n.pindicator .current::after {\n  opacity: 1;\n}\n\n.pindicator .past .text,\n.pindicator .current .text,\n.pindicator .next .text,\n{\n  color: #3274F6;\n}\n\n.setBackgroundStyle {\n  background: rgb(242, 242, 242);\n}\n\n.setBackgrnd {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  background-color: #fff;\n}\n\n.setLineHeight {\n  text-align: right;\n  line-height: 62px;\n  font-size: 140%;\n}\n\n.headStyle {\n  color: #485668;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 16px;\n}\n\ndiv label input {\n  margin-right: 100px;\n}\n\n\n#ck-button {\n  margin: 4px;\n  width: 100%;\n  height: 40px;\n  background-color: #EFEFEF;\n  border-radius: 4px;\n  border: 1px solid #D0D0D0;\n  overflow: auto;\n  float: left;\n}\n\n#ck-button:hover {\n  background: #3274F6;\n}\n\n#ck-button label {\n  float: left;\n  width: 100%;\n  height: 40px;\n  line-height: 33px;\n  margin-bottom: 0 !important;\n}\n\n#ck-button label span {\n  text-align: center;\n  padding: 3px 0px;\n  display: block;\n}\n\n#ck-button label input {\n  position: absolute;\n  \n}\n\n#ck-button input:checked+span {\n  background-color: #3274F6;\n  height: 40px;\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college-backend/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid setBackgroundStyle\">\n  <div class=\"row \">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-8 setBackgrnd\">\n      <div class=\"row text-center headStyle\">\n        <span> SELECT COURSE</span>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"pindicator\">\n          <div class=\"bullet past\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">FULL NAME</div>\n          </div>\n          <div class=\"bullet current\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">COURSE</div>\n          </div>\n          <div class=\"bullet next future\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">SEMESTER</div>\n          </div>\n          <div class=\"bullet future\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">PHONE</div>\n          </div>\n          <div class=\"bullet future\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">E-MAIL</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-8\">\n      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <p>COLUMN 1</p>\n            <div id=\"ck-button\">\n              <label>\n                <input type=\"checkbox\" value=\"1\"><span>SELECT THIS COLUMN</span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/college-backend/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseComponent = (function () {
    function CourseComponent() {
    }
    CourseComponent.prototype.ngOnInit = function () {
        (function () {
            "use strict";
            var bulletClasses = {
                elements: {
                    container: ".pindicator",
                    bullet: ".bullet",
                },
                helpers: {
                    past: "past",
                    current: "current",
                    next: "next",
                    future: "future",
                }
            };
            var bulletEls;
            document.addEventListener("DOMContentLoaded", initBullets);
            function initBullets() {
                bulletEls = Array.prototype.slice.call(document.body.querySelectorAll(bulletClasses.elements.bullet));
                bulletEls.forEach(function (el) {
                    el.addEventListener("mousedown", function (event) {
                        gotoPage(bulletEls.indexOf(this) + 1);
                    });
                    el.addEventListener("touchstart", function (event) {
                        event.preventDefault();
                        gotoPage(bulletEls.indexOf(this) + 1);
                    });
                });
            }
            function gotoPage(pageNum) {
                bulletEls.forEach(function (e) {
                    e.classList.remove.apply(e.classList, Object.keys(bulletClasses.helpers).map(function (e) {
                        return bulletClasses.helpers[e];
                    }));
                });
                bulletEls[pageNum - 1].classList.add(bulletClasses.helpers.current);
                if (pageNum > 1) {
                    for (var i = 0; i < pageNum; i++) {
                        bulletEls[i].classList.add(bulletClasses.helpers.past);
                    }
                }
                if (pageNum < bulletEls.length) {
                    bulletEls[pageNum].classList.add(bulletClasses.helpers.next);
                    for (var i = bulletEls.length - 1; i >= pageNum; i--) {
                        bulletEls[i].classList.add(bulletClasses.helpers.future);
                    }
                }
            }
        })();
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course',
        template: __webpack_require__("../../../../../src/app/college-backend/course/course.component.html"),
        styles: [__webpack_require__("../../../../../src/app/college-backend/course/course.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CourseComponent);

//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-admins/manage-admins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setMainBckgrndStyle {\n  background-color: rgb(242, 242, 242);\n}\n\n.setWhiteBckgrnd {\n  background-color: #fff;\n}\n\n.setHeadStyle {\n  height: 80px;\n  font-size: 23px;\n  font-weight: bold;\n  color: #A7A7A7;\n  line-height: 80px;\n}\n\n.setInputHeight {\n  margin-top: 25px;\n}\n\n.setmarginTop {\n  margin-top: 15px;\n}\n\n.setButtonStyle {\n  background-color: #0078F9;\n  border-radius: 0;\n  color: #fff;\n}\n\n.input-group-addon {\n  background: none !important;\n  border: none !important;\n}\n\n.innerHeadStyle {\n  color: #4C4C4C !important;\n  font-size: 14px;\n}\n\n.setFooterStyle {\n  height: 120px;\n  line-height: 120px;\n  margin-top: 35px;\n  color: #BCBCBC;\n}\n\n.table-striped>tbody>tr:nth-of-type(odd) {\n  background-color: #F4F8FA !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-admins/manage-admins.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid setMainBckgrndStyle\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 setWhiteBckgrnd setHeadStyle\">\n      <span class=\"col-md-offset-1\">Manage Admins</span>\n    </div>\n  </div>\n  <div class=\"row setInputHeight\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-8 setWhiteBckgrnd\">\n      <div class=\"row setmarginTop\">\n        <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n          <button type=\"button\" name=\"button\" class=\"btn btn-md setButtonStyle\">ADD NEW ADMIN</button>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-offset-6 col-md-3 col-lg-3 text-right\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <label for=\"searchAdmin\">Search:</label>\n           </span>\n            <input type=\"text\" id=\"searchAdmin\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row setmarginTop\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive\">\n          <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"innerHeadStyle\">\n              <tr>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">ADMIN MEMBERS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"title\"><span class=\"innerHeadStyle\">TITLE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"phone\"><span class=\"innerHeadStyle\">PHONE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"email\"><span class=\"innerHeadStyle\">EMAIL</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <span class=\"innerHeadStyle\">ACTIONS</span>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"\" *ngIf=\"mf.data.length>0; else message\">\n              <tr *ngFor=\"let item of mf.data; let idx = index\">\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"mf.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <span>Showing Page {{ (mf.activePage - 1) * mf.rowsOnPage  + 1 }} of {{data_length}}</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-3\">\n                        <mfBootstrapPaginator></mfBootstrapPaginator>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #message>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row setWhiteBckgrnd setFooterStyle\">\n    <div class=\"col-xs-12 text-center\">\n      <span>&copy; 2016 SOCIAL UNIVERSITY. All Rights Reserved</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-admins/manage-admins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAdminsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageAdminsComponent = (function () {
    function ManageAdminsComponent(http) {
        this.http = http;
        this.rowsOnPage = 5;
    }
    ManageAdminsComponent.prototype.getUniversity = function () {
        var _this = this;
        this.http.get("assets/university.json")
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    ManageAdminsComponent.prototype.ngOnInit = function () {
        this.getUniversity();
    };
    return ManageAdminsComponent;
}());
ManageAdminsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-admins',
        template: __webpack_require__("../../../../../src/app/college-backend/manage-admins/manage-admins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/college-backend/manage-admins/manage-admins.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ManageAdminsComponent);

var _a;
//# sourceMappingURL=manage-admins.component.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-student/manage-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setMainBckgrndStyle {\n  background-color: rgb(242, 242, 242);\n}\n\n.setWhiteBckgrnd {\n  background-color: #fff;\n}\n\n.setHeadStyle {\n  height: 80px;\n  font-size: 23px;\n  font-weight: bold;\n  color: #A7A7A7;\n  line-height: 80px;\n}\n\n.setInputHeight {\n  margin-top: 25px;\n}\n\n.setmarginTop {\n  margin-top: 15px;\n}\n\n.setButtonStyle {\n  background-color: #0078F9;\n  border-radius: 0;\n  color: #fff;\n}\n\n.input-group-addon {\n  background: none !important;\n  border: none !important;\n}\n\n.innerHeadStyle {\n  color: #4C4C4C !important;\n  font-size: 14px;\n}\n\n.setFooterStyle {\n  height: 120px;\n  line-height: 120px;\n  margin-top: 35px;\n  color: #BCBCBC;\n}\n\n.table-striped>tbody>tr:nth-of-type(odd) {\n  background-color: #F4F8FA !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-student/manage-student.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid setMainBckgrndStyle\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 setWhiteBckgrnd setHeadStyle\">\n      <span class=\"col-md-offset-1\" [routerLink]=\"['/addMembers']\" >MANAGE STUDENT</span>\n    </div>\n  </div>\n  <div class=\"row setInputHeight\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-8 setWhiteBckgrnd\">\n      <div class=\"row setmarginTop\">\n        <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n          <button type=\"button\" name=\"button\" class=\"btn btn-md setButtonStyle\">ADD NEW STUDENT</button>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-offset-6 col-md-3 col-lg-3 text-right\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <label for=\"searchAdmin\">Search:</label>\n           </span>\n            <input type=\"text\" id=\"searchAdmin\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row setmarginTop\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive\">\n          <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"innerHeadStyle\">\n              <tr>\n                <th class=\" col-xs-6 col-sm-6 col-md-3 col-lg-3\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\"> STUDENT NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\"> SEM</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"title\"><span class=\"innerHeadStyle\">COURSE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"phone\"><span class=\"innerHeadStyle\">PHONE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"email\"><span class=\"innerHeadStyle\">EMAIL</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <span class=\"innerHeadStyle\">ACTIONS</span>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"\" *ngIf=\"mf.data.length>0; else message\">\n              <tr *ngFor=\"let item of mf.data; let idx = index\">\n                <td class=\" col-xs-6 col-sm-6 col-md-3 col-lg-3\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-1 col-lg-1\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"mf.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <span>Showing Page {{ (mf.activePage - 1) * mf.rowsOnPage  + 1 }} of {{data_length}}</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-3\">\n                        <mfBootstrapPaginator></mfBootstrapPaginator>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #message>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row setWhiteBckgrnd setFooterStyle\">\n    <div class=\"col-xs-12 text-center\">\n      <span>&copy; 2016 SOCIAL UNIVERSITY. All Rights Reserved</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-student/manage-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageStudentComponent = (function () {
    function ManageStudentComponent() {
        this.rowsOnPage = 5;
    }
    ManageStudentComponent.prototype.ngOnInit = function () {
    };
    return ManageStudentComponent;
}());
ManageStudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-student',
        template: __webpack_require__("../../../../../src/app/college-backend/manage-student/manage-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/college-backend/manage-student/manage-student.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageStudentComponent);

//# sourceMappingURL=manage-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-subjects/manage-subjects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-subjects/manage-subjects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <span class=\"col-md-offset-1\">Manage Subjects</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <span>ENGINEERING</span>\n      <ul>\n        <li>\n          B.Tech - Aeronotical Engineering\n        </li>\n        <li>B.Tech - Automobile Engineering</li>\n        <li>B.Tech - Biomedical Engineering</li>\n        <li>B.Tech - Biotechnology</li>\n        <li>B.Tech - Chemical Engineering</li>\n        <li>B.Tech - Civil Engineering</li>\n        <li>B.Tech - Computer and Comm.Engineering</li>\n        <li>B.Tech - Computer Science and Engineering</li>\n        <li>B.Tech - Electrical and Electronics Engineering</li>\n        <li>B.Tech - Industrial & Control Engineering</li>\n        <li>B.Tech - Information Technology</li>\n        <li>B.Tech - Instrumenatation and Control Engineering</li>\n        <li>B.Tech - Lateral Entry</li>\n        <li>B.Tech - Mechanical Engineering</li>\n        <li>B.Tech - Mechatronics Engineering</li>\n        <li>B.Tech - Print and Media Technology</li>\n      </ul>\n      <span>\tMANAGEMENT</span>\n     <ul>\n     \t<li>B.Com (Business Process Service)</li>\n     \t<li>B.Com Professional (Regular & Evening)</li>\n     \t<li>BBA - Bachelor of Business Administartion</li>\n     </ul>\n     <span>ARCHITECTURE</span>\n     <ul>\n     \t<li>Bachelor of Architecture</li>\n     \t<li>Bachelor of Deisgn (Fashion Design)</li>\n     \t<li>Bachelor of Design (Interior Design)</li>\n     </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n    <span>B.Tech Aeronotical Engineering</span>\n    \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/college-backend/manage-subjects/manage-subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSubjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageSubjectsComponent = (function () {
    function ManageSubjectsComponent() {
    }
    ManageSubjectsComponent.prototype.ngOnInit = function () {
    };
    return ManageSubjectsComponent;
}());
ManageSubjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-subjects',
        template: __webpack_require__("../../../../../src/app/college-backend/manage-subjects/manage-subjects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/college-backend/manage-subjects/manage-subjects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageSubjectsComponent);

//# sourceMappingURL=manage-subjects.component.js.map

/***/ }),

/***/ "../../../../../src/app/entry/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {}\n\n/*body {\n  background-image: url(\"background1.jpg\");\n  background-size: 100% 100%\n}*/\n\nfooter {\n  background-color: white;\n  padding: 40px 40px 0px 40px;\n}\n\n.navbar {\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.dropdown {\n  width: 100%;\n}\n\n.jumbotron {\n  background-color: white;\n  border-color: transparent;\n  color: #FFFFFF;\n}\n\n.jumbotron1 {\n  background-color: transparent;\n  border-color: transparent;\n  text-align: center;\n}\n\n#color {\n  background-color: #D3D3D3;\n}\n\n#header {\n  size: 50%;\n}\n\n\n/* Add a gray background color and some padding to the footer */\n\nfooter {\n  background-color: white;\n  position: bottom;\n  padding-left: 145px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/login/login.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/entry/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/entry/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/entry/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/entry/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setInputHeight{\n\tmargin-top: 15px;\n}\n.reqdStyle{\n\tcolor: #97B7E8;\n}\n.setBackGrnd{\n\tbackground: #F6F8FA;\n}\n.setInputHeightLast{\n\tmargin-top: 25px;\n\tmargin-bottom: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row setInputHeight\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n      <img src=\"../assets/images/University_logo.svg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"row setInputHeight\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6 col-lg-6 setBackGrnd\">\n      <h2 class=\"text-center\">\n\t\t\t\tCreate your account\n\t\t\t</h2>\n      <p class=\"text-center\">Please contact your college administartive department to complete this process</p>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-8\">\n          <div class=\"row setInputHeight\">\n            <span>\n\t\t\t\t\tEmail address <span class=\"reqdStyle\">*</span>\n            </span>\n          </div>\n          <div class=\"row setInputHeight\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"work@email.com\">\n          </div>\n          <div class=\"row setInputHeight\">\n            <span>\n\t\t\t\t\tInstitue address <span class=\"reqdStyle\">*</span>\n            </span>\n          </div>\n          <div class=\"row setInputHeight\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"ABC University\">\n          </div>\n          <div class=\"row setInputHeight\">\n            <span>\n\t\t\t\t\t Website <span class=\"reqdStyle\">*</span>\n            </span>\n          </div>\n          <div class=\"row setInputHeight\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"college - website\">\n          </div>\n          <div class=\"row setInputHeight text-center\">\n            <p>By creating a university.social account you're agreeing to accept the</p>\n            <p> <a href=\"\">University.social terms of service</a></p>\n          </div>\n          <div class=\"row text-center setInputHeightLast\">\n            <button class=\"btn btn-info btn-lg\" [routerLink]=\"['/university/list']\">GET UNIVERSITY.SOCIAL</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/entry/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/entry/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/entry/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/entry/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logoImg{\n  margin-top: 5px;\n  width: 30%;\n}\n\n.pindicator {\n  background-color: rgb(242, 242, 242);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 1rem auto 0;\n  width: 63rem;\n}\n\n.pindicator .bullet {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  text-align: center;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.pindicator .bullet::before,\n.pindicator .bullet::after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: .5rem;\n  top: 1.25rem;\n  -webkit-transform: translate3d(0, 0, -1px);\n          transform: translate3d(0, 0, -1px);\n}\n\n.pindicator .bullet::before {\n  background-color: lightgray;\n  width: 100%;\n}\n\n.pindicator .bullet::after {\n  background-color: #3274F6;\n  transition: opacity .25s ease-out;\n  opacity: 0;\n  width: 100%;\n}\n\n.pindicator .bullet:first-child::before,\n.pindicator .bullet:first-child::after {\n  left: 50%;\n  width: 50%;\n}\n\n.pindicator .bullet:last-child::before,\n.pindicator .bullet:last-child::after {\n  width: 50%;\n}\n\n.pindicator .icon {\n  background-color: lightgray;\n  border-radius: 100%;\n  color: transparent;\n  cursor: pointer;\n  font-size: 1.0rem;\n  display: inline-block;\n  height: 3em;\n  text-align: center;\n  transition: background-color .25s ease-out;\n  width: 3em;\n}\n\n.pindicator .text {\n  color: #333;\n  font-size: 1.2rem;\n  margin-top: 1rem;\n  text-transform: uppercase;\n  transition: background-color .25s ease-out;\n}\n\n.pindicator .past .icon,\n.pindicator .current .icon {\n  background-color: #3274F6;\n  color: white;\n}\n\n.pindicator .past::after,\n.pindicator .current::after {\n  opacity: 1;\n}\n\n.pindicator .past .text,\n.pindicator .current .text,\n.pindicator .next .text,\n{\n  color: #3274F6;\n}\n.setBackgroundStyle{\n  background:rgb(242, 242, 242);\n}\n.setLineHeight{\n  text-align: right;\n  line-height: 62px;\n  font-size: 140%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row setBackgroundStyle\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"col-xs-4 col-sm-4 col-md-1 col-lg-1\">\n        <img src=\"../assets/images/University_logo.svg\" alt=\"Logo\" class=\"logoImg\">\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-9 col-lg-9\">\n        <div class=\"pindicator\">\n          <div class=\"bullet past\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">SIGN UP</div>\n          </div>\n          <div class=\"bullet current\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">PROGRAMS</div>\n          </div>\n          <div class=\"bullet next future\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">COURSES</div>\n          </div>\n          <div class=\"bullet future\">\n            <span class=\"icon\"></span>\n            <div class=\"text\">FINISH</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 setLineHeight\">\n        Step 1 of 4\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n  \t<div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-12 text-center\">\n  \t\t\t\t<span>UNDER GRADUATE</span>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-6\">\n  \t\t\t\t<input type=\"text\" class=\"form-control\">\t\t\n  \t\t\t</div>\n  \t\t\t<div class=\"col-xs-6\">\n  \t\t\t\t<input type=\"text\" class=\"form-control\">\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n  \t<div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-12 text-center\">\n  \t\t\t\t<span>POST GRADUATE</span>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-6\">\n  \t\t\t\t<input type=\"text\" class=\"form-control\">\t\t\n  \t\t\t</div>\n  \t\t\t<div class=\"col-xs-6\">\n  \t\t\t\t<input type=\"text\" class=\"form-control\">\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n  \t<div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-12 text-center\">\n  \t\t\t\t<span>PHD/DIPLOMA</span>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-6\">\n  \t\t\t\t<input type=\"text\" class=\"form-control\">\t\t\n  \t\t\t</div>\n  \t\t\t<div class=\"col-xs-6\">\n  \t\t\t\t<input type=\"text\" class=\"form-control\">\n  \t\t\t</div>\n  \t\t</div>\t\n  \t</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/entry/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
        (function () {
            "use strict";
            var bulletClasses = {
                elements: {
                    container: ".pindicator",
                    bullet: ".bullet",
                },
                helpers: {
                    past: "past",
                    current: "current",
                    next: "next",
                    future: "future",
                }
            };
            var bulletEls;
            document.addEventListener("DOMContentLoaded", initBullets);
            function initBullets() {
                bulletEls = Array.prototype.slice.call(document.body.querySelectorAll(bulletClasses.elements.bullet));
                bulletEls.forEach(function (el) {
                    el.addEventListener("mousedown", function (event) {
                        gotoPage(bulletEls.indexOf(this) + 1);
                    });
                    el.addEventListener("touchstart", function (event) {
                        event.preventDefault();
                        gotoPage(bulletEls.indexOf(this) + 1);
                    });
                });
            }
            function gotoPage(pageNum) {
                bulletEls.forEach(function (e) {
                    e.classList.remove.apply(e.classList, Object.keys(bulletClasses.helpers).map(function (e) {
                        return bulletClasses.helpers[e];
                    }));
                });
                bulletEls[pageNum - 1].classList.add(bulletClasses.helpers.current);
                if (pageNum > 1) {
                    for (var i = 0; i < pageNum; i++) {
                        bulletEls[i].classList.add(bulletClasses.helpers.past);
                    }
                }
                if (pageNum < bulletEls.length) {
                    bulletEls[pageNum].classList.add(bulletClasses.helpers.next);
                    for (var i = bulletEls.length - 1; i >= pageNum; i--) {
                        bulletEls[i].classList.add(bulletClasses.helpers.future);
                    }
                }
            }
        })();
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/entry/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/entry/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignUpComponent);

//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-posts/manage-posts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_report_component__ = __webpack_require__("../../../../../src/app/manage-posts/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_report_post_report_component__ = __webpack_require__("../../../../../src/app/manage-posts/post-report/post-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_assignment_post_assignment_component__ = __webpack_require__("../../../../../src/app/manage-posts/post-assignment/post-assignment.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePostsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'enterReport', component: __WEBPACK_IMPORTED_MODULE_2__report_report_component__["a" /* ReportComponent */]
    },
    {
        path: 'postReport', component: __WEBPACK_IMPORTED_MODULE_3__post_report_post_report_component__["a" /* PostReportComponent */]
    },
    {
        path: 'postAssignement', component: __WEBPACK_IMPORTED_MODULE_4__post_assignment_post_assignment_component__["a" /* PostAssignmentComponent */]
    }
];
var ManagePostsRoutingModule = (function () {
    function ManagePostsRoutingModule() {
    }
    return ManagePostsRoutingModule;
}());
ManagePostsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ManagePostsRoutingModule);

//# sourceMappingURL=manage-posts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/manage-posts/manage-posts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_posts_routing_module__ = __webpack_require__("../../../../../src/app/manage-posts/manage-posts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_component__ = __webpack_require__("../../../../../src/app/manage-posts/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_report_post_report_component__ = __webpack_require__("../../../../../src/app/manage-posts/post-report/post-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_assignment_post_assignment_component__ = __webpack_require__("../../../../../src/app/manage-posts/post-assignment/post-assignment.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePostsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ManagePostsModule = (function () {
    function ManagePostsModule() {
    }
    return ManagePostsModule;
}());
ManagePostsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__manage_posts_routing_module__["a" /* ManagePostsRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__report_report_component__["a" /* ReportComponent */], __WEBPACK_IMPORTED_MODULE_4__post_report_post_report_component__["a" /* PostReportComponent */], __WEBPACK_IMPORTED_MODULE_5__post_assignment_post_assignment_component__["a" /* PostAssignmentComponent */]]
    })
], ManagePostsModule);

//# sourceMappingURL=manage-posts.module.js.map

/***/ }),

/***/ "../../../../../src/app/manage-posts/post-assignment/post-assignment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.setHeadFont {\n  font-size: 18px;\n  color: #fff !important;\n}\n\n.panel-group div {\n  color: #676767;\n  vertical-align: center;\n}\n\n.panel-heading {\n  height: 60px;\n  background-color: #3274F6 !important;\n}\n\n.setBackgrnd {\n  background-color: #F6F8FA;\n  height: 100vh;\n}\n.setInputHeight{\n  margin-top: 20px;\n}\n.setMarginTop{\n  margin-top: 15px;\n}\n.setLastBorder {\n  padding-top: 10px;\n  border-top: 1px solid #ccc;\n}\n.form-control {\n  background-color: #F6F8FA;\n  height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-posts/post-assignment/post-assignment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row setBackgrnd\">\n  <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-5 col-lg-5\">\n    <div class=\"panel-group\">\n      <div class=\"panel\">\n        <div class=\"panel-heading setHeadFont\">\n          <span>Post Assignment</span>\n          <span class=\"pull-right\">X</span>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row setInputHeight\">\n            <div class=\"col-xs-12\">\n              <span>Assignment Title <span>*</span></span>\n            </div>\n            <div class=\"col-xs-12 setMarginTop\">\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row setInputHeight\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <span>Select Subject <span>*</span></span>\n                </div>\n                <div class=\"col-xs-12 setMarginTop\">\n                  <select name=\"subject\" id=\"\" class=\"form-control\">\n                    <option value=\"\">Into Management</option>\n                    <option value=\"\">Management</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <span>Submission Type <span>*</span></span>\n                </div>\n                <div class=\"col-xs-12 setMarginTop\">\n                  <select name=\"reportType\" id=\"\" class=\"form-control\">\n                    <option value=\"\">Results</option>\n                    <option value=\"\">result</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row setInputHeight\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <span>Due Date <span>*</span></span>\n                </div>\n                <div class=\"col-xs-12 setMarginTop\">\n                  <select name=\"reportType\" id=\"\" class=\"form-control\">\n                    <option value=\"\">5.00 01-08-2016</option>\n                    <option value=\"\">6.00 01-08-2016</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row setMarginTop setLastBorder\">\n            <div class=\"col-xs-12 col-sm-12 col-md-offset-5 col-md-3 col-lg-3 text-right\">\n              <button class=\"btn btn-default btn-block\">Cancel</button>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-offset-0 col-md-3 col-lg-3 text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/addAdmin']\">Publish</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-posts/post-assignment/post-assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAssignmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostAssignmentComponent = (function () {
    function PostAssignmentComponent() {
    }
    PostAssignmentComponent.prototype.ngOnInit = function () {
    };
    return PostAssignmentComponent;
}());
PostAssignmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-assignment',
        template: __webpack_require__("../../../../../src/app/manage-posts/post-assignment/post-assignment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-posts/post-assignment/post-assignment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PostAssignmentComponent);

//# sourceMappingURL=post-assignment.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-posts/post-report/post-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.setHeadFont {\n  font-size: 18px;\n  color: #fff !important;\n}\n\n.panel-group div {\n  color: #676767;\n  vertical-align: center;\n}\n\n.panel-heading {\n  height: 60px;\n  background-color: #3274F6 !important;\n}\n\n.setBackgrnd {\n  background-color: #F6F8FA;\n  height: 100vh;\n}\n.setInputHeight{\n  margin-top: 20px;\n}\n.setMarginTop{\n  margin-top: 15px;\n}\n.setLastBorder {\n  padding-top: 10px;\n  border-top: 1px solid #ccc;\n}\n.form-control {\n  background-color: #F6F8FA;\n  height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-posts/post-report/post-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row setBackgrnd\">\n  <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-5 col-lg-5\">\n    <div class=\"panel-group\">\n      <div class=\"panel\">\n        <div class=\"panel-heading setHeadFont\">\n          <span>Post Report</span>\n          <span class=\"pull-right\">X</span>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row setInputHeight\">\n            <div class=\"col-xs-12\">\n              <span>Report Title <span>*</span></span>\n            </div>\n            <div class=\"col-xs-12 setMarginTop\">\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row setInputHeight\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <span>Select Subject <span>*</span></span>\n                </div>\n                <div class=\"col-xs-12 setMarginTop\">\n                  <select name=\"subject\" id=\"\" class=\"form-control\">\n                    <option value=\"\">Into Management</option>\n                    <option value=\"\">Management</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <span>Report Type <span>*</span></span>\n                </div>\n                <div class=\"col-xs-12 setMarginTop\">\n                  <select name=\"reportType\" id=\"\" class=\"form-control\">\n                    <option value=\"\">Results</option>\n                    <option value=\"\">result</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row setInputHeight\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <span>Select Subject <span>*</span></span>\n                </div>\n                <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 setMarginTop\">\n                  <input type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <span>Report Type <span>*</span></span>\n                </div>\n                <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 setMarginTop\">\n                  <input type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row setMarginTop setLastBorder\">\n            <div class=\"col-xs-12 col-sm-12 col-md-offset-5 col-md-3 col-lg-3 text-right\">\n              <button class=\"btn btn-default btn-block\">Cancel</button>\n            </div>\n             <div class=\"col-xs-12 col-sm-12 col-md-offset-0 col-md-3 col-lg-3 text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/postAssignement']\">Next</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-posts/post-report/post-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostReportComponent = (function () {
    function PostReportComponent() {
    }
    PostReportComponent.prototype.ngOnInit = function () {
    };
    return PostReportComponent;
}());
PostReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-report',
        template: __webpack_require__("../../../../../src/app/manage-posts/post-report/post-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-posts/post-report/post-report.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PostReportComponent);

//# sourceMappingURL=post-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-posts/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setBorderBottom {\n  margin-top: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.setBorderBottomLast {\n  margin-top: 10px;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.setLastBorder {\n  padding-top: 10px;\n  border-top: 1px solid #ccc;\n}\n\n.setMarginTop {\n  margin-top: 10px;\n}\n\n.setHeadFont {\n  font-size: 18px;\n  color: #fff !important;\n}\n\n.panel-group div {\n  color: #676767;\n  vertical-align: center;\n}\n\n.panel-heading {\n  height: 60px;\n  background-color: #3274F6 !important;\n}\n\n.setBackgrnd {\n  background-color: #F6F8FA;\n  height: 100vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-posts/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row setBackgrnd\">\n  <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-5 col-lg-5\">\n    <div class=\"panel-group\">\n      <div class=\"panel\">\n        <div class=\"panel-heading setHeadFont\">\n          <span >Enter Report</span>\n          <span class=\"pull-right\">X</span>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row setBorderBottom\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 text-left\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setBorderBottom\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setBorderBottom\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setBorderBottom\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setBorderBottom\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setBorderBottom\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-right\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setBorderBottom\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setBorderBottomLast\">\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <img src=\"../../../assets/images/Billing.svg\" alt=\"\" class=\"img img-circle img-responsive\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n              <span>Wesley Washington</span>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center\">\n              <input type=\"text\" class=\"form-control\" value=\"42\">\n            </div>\n          </div>\n          <div class=\"row setMarginTop setLastBorder\">\n            <div class=\"col-xs-12 col-sm-12 col-md-offset-5 col-md-3 col-lg-3 text-right\">\n              <button class=\"btn btn-default btn-block\">Cancel</button>\n            </div>\n             <div class=\"col-xs-12 col-sm-12 col-md-offset-0 col-md-3 col-lg-3 text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/postReport']\">Publish</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-posts/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report',
        template: __webpack_require__("../../../../../src/app/manage-posts/report/report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-posts/report/report.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReportComponent);

//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/super-admin/manage-post/manage-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  width: 99%;\n  background-color: #fff;\n  margin-top: 2%;\n}\n\n.setMarginTop {\n  margin-top: 10%;\n}\n\n.sidebar .nav, .off-canvas-sidebar .nav {\n  margin-left: 6%;\n}\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n  border: none !important;\n  height: 50px;\n}\n\n.titleStyle{\n\tfont-size: 18px;\n\tcolor: #333;\n\tline-height: 50px;\n}\n.innerHeadStyle{\n\tcolor: #ccc;\n\tfont-weight: lighter;\n\tfont-size: 12px;\n}\n\n.setCollegeStyle{\n\tcolor: #ccc;\n}\n.setColorBlue{\n\tcolor: #96C3FB;\n}\n\n.setBorderBottom{\n\tborder-bottom: 1px solid #ececec;\n}\n/deep/ .mat-tab-label {\n    line-height: 48px;\n    height: 48px;\n    padding: 0 12px;\n    cursor: pointer;\n    box-sizing: border-box;\n    opacity: .6;\n    min-width: 150px !important;\n    text-align: center;\n    position: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/super-admin/manage-post/manage-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid setBackgroundGrey\">\n  <div class=\"row setMarginTop\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <md-tab-group>\n        <md-tab label=\"Files\">\n          <table class=\"table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">College Registered</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add College</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">FILE NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">FILE TYPE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSES</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">KEYWORDS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"mf.data.length>0; else message\">\n              <tr *ngFor=\"let item of mf.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div>\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.fileName}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.fileType}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.keywords}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"mf.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (mf.activePage - 1) * mf.rowsOnPage  + 1 }} - {{mf.data.length+mf.rowsOnPage*(mf.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #message>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Projects\">\n          <table class=\"table\" [mfData]=\"programDataSet\" #programData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">College Registered</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add Programs</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">FILE NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">FILE TYPE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">Keywords</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"programData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of programData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.fileName}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.fileType}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.keywords}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i>\n                  <i class=\"fa-sitemap\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-plus\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"programData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (programData.activePage - 1) * programData.rowsOnPage  + 1 }} - {{programData.data.length+programData.rowsOnPage*(programData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Events\">\n          <table class=\"table\" [mfData]=\"courseDataSet\" #courseData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">College Registered</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add Course</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">FILE NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">FILE TYPE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">Keywords</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"courseData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of courseData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.fileName}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.fileType}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.keywords}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i>\n                  <i class=\"fa-sitemap\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-plus\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"courseData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (courseData.activePage - 1) * courseData.rowsOnPage  + 1 }} - {{courseData.data.length+courseData.rowsOnPage*(courseData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"News\">\n          <table class=\"table\" [mfData]=\"membersDataSet\" #memberData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">Admin Members</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add Members</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">FILE NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">FILE TYPE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">Keywords</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"memberData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of memberData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.fileName}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.fileType}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.keywords}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i>\n                  <i class=\"fa-sitemap\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-plus\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"memberData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (memberData.activePage - 1) * memberData.rowsOnPage  + 1 }} - {{memberData.data.length+memberData.rowsOnPage*(memberData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Assignments\">\n           <table class=\"table\" [mfData]=\"roleDataSet\" #roleData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">Members Role Setting</span>\n                      </div>\n                      \n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">FILE NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">FILE TYPE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">Keywords</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"roleData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of roleData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.fileName}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.fileType}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.keywords}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i>\n                  <i class=\"fa-sitemap\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-plus\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"roleData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (roleData.activePage - 1) * roleData.rowsOnPage  + 1 }} - {{roleData.data.length+roleData.rowsOnPage*(roleData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Reports\">\n           <table class=\"table\" [mfData]=\"reportDataSet\" #reportData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">Members Role Setting</span>\n                      </div>\n                      \n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">FILE NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">FILE TYPE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">Keywords</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"reportData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of reportData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n               <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.fileName}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.fileType}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.keywords}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i>\n                  <i class=\"fa-sitemap\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-plus\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"reportData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (reportData.activePage - 1) * reportData.rowsOnPage  + 1 }} - {{reportData.data.length+reportData.rowsOnPage*(reportData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Skills\">\n           <table class=\"table\" [mfData]=\"skillsReportData\" #skillsData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">Members Role Setting</span>\n                      </div>\n                      \n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">FILE NAME</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">FILE TYPE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">Keywords</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"skillsData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of skillsData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                 <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.fileName}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.fileType}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.keywords}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i>\n                  <i class=\"fa-sitemap\"></i>\n                  <i class=\"fa fa-wrench\"></i>\n                  <i class=\"fa fa-plus\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"skillsData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (skillsData.activePage - 1) * skillsData.rowsOnPage  + 1 }} - {{skillsData.data.length+skillsData.rowsOnPage*(skillsData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n      </md-tab-group>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/super-admin/manage-post/manage-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagePostComponent = (function () {
    function ManagePostComponent(http) {
        this.http = http;
        this.rowsOnPage = 5;
    }
    ManagePostComponent.prototype.getUniversity = function () {
        var _this = this;
        this.http.get("assets/posts.json")
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    ManagePostComponent.prototype.getprogram = function () {
        var _this = this;
        this.http.get("assets/posts.json")
            .subscribe(function (res) {
            _this.programDataSet = res.json();
            _this.courseDataSet = res.json();
            _this.membersDataSet = res.json();
            _this.roleDataSet = res.json();
            _this.skillsReportData = res.json();
            _this.reportDataSet = res.json();
        });
    };
    ManagePostComponent.prototype.ngOnInit = function () {
        this.getUniversity();
        this.getprogram();
    };
    ManagePostComponent.prototype.selectAll = function () {
        this.data[0].quiz_status = false;
        for (var i = 0; i < this.data.length; i++) {
            this.data[i].selected = this.selectedAll;
        }
    };
    ManagePostComponent.prototype.checkIfAllSelected = function () {
        this.data[0].quiz_status = false;
        this.selectedAll = this.data.every(function (item) {
            return item.selected == true;
        });
    };
    return ManagePostComponent;
}());
ManagePostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-post',
        template: __webpack_require__("../../../../../src/app/super-admin/manage-post/manage-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/super-admin/manage-post/manage-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ManagePostComponent);

var _a;
//# sourceMappingURL=manage-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/super-admin/manage-university/manage-university.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  width: 99%;\n  background-color: #fff;\n  margin-top: 2%;\n}\n\n.setMarginTop {\n  margin-top: 10%;\n}\n\n.sidebar .nav, .off-canvas-sidebar .nav {\n  margin-left: 6%;\n}\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n  border: none !important;\n  height: 50px;\n}\n\n.titleStyle{\n\tfont-size: 18px;\n\tcolor: #333;\n\tline-height: 50px;\n}\n.innerHeadStyle{\n\tcolor: #ccc;\n\tfont-weight: lighter;\n\tfont-size: 12px;\n}\n\n.setCollegeStyle{\n\tcolor: #ccc;\n}\n.setColorBlue{\n\tcolor: #96C3FB;\n}\n\n.setBorderBottom{\n\tborder-bottom: 1px solid #ececec;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/super-admin/manage-university/manage-university.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid setBackgroundGrey\">\n  <div class=\"row setMarginTop\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <md-tab-group>\n        <md-tab label=\"College\">\n          <table class=\"table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">College Registered</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add College</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">COLLEGE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">PROGRAMS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSES</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">MEMBERS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"mf.data.length>0; else message\">\n              <tr *ngFor=\"let item of mf.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div>\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"mf.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (mf.activePage - 1) * mf.rowsOnPage  + 1 }} - {{mf.data.length+mf.rowsOnPage*(mf.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #message>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Programes\">\n          <table class=\"table\" [mfData]=\"programDataSet\" #programData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">College Registered</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add Programs</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">COLLEGE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">PROGRAMS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSES</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">MEMBERS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"programData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of programData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"programData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (programData.activePage - 1) * programData.rowsOnPage  + 1 }} - {{programData.data.length+programData.rowsOnPage*(programData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Courses\">\n          <table class=\"table\" [mfData]=\"courseDataSet\" #courseData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">College Registered</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add Course</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">COLLEGE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">PROGRAMS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">COURSES</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">MEMBERS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"courseData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of courseData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"courseData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (courseData.activePage - 1) * courseData.rowsOnPage  + 1 }} - {{courseData.data.length+courseData.rowsOnPage*(courseData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Members\">\n          <table class=\"table\" [mfData]=\"membersDataSet\" #memberData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">Admin Members</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <button md-raised-button>+ Add Members</button>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2\">\n                        <input type=\"text\" class=\"form-control\" name=\"search\" value=\"\" placeholder=\"Search\">\n                      </div>\n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">COLLEGE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">PROGRAMS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">PHONE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">E-Mail</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"memberData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of memberData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"memberData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (memberData.activePage - 1) * memberData.rowsOnPage  + 1 }} - {{memberData.data.length+memberData.rowsOnPage*(memberData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n        <md-tab label=\"Member Roles\">\n           <table class=\"table\" [mfData]=\"roleDataSet\" #roleData=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n            <thead class=\"\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-8\">\n                        <span class=\"titleStyle\">Members Role Setting</span>\n                      </div>\n                      \n                    </div>\n                  </div>\n                </th>\n              </tr>\n              <!-- End of First Row with Filter and Date Picker -->\n              <tr>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  \n                </th>\n                <th class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left \">\n                  <mfDefaultSorter by=\"college\"><span class=\"innerHeadStyle\">COLLEGE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"programs\"><span class=\"innerHeadStyle\">PROGRAMS</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"courses\"><span class=\"innerHeadStyle\">PHONE</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">E-Mail</span></mfDefaultSorter>\n                </th>\n                <th class=\"col-xs-6 col-sm-6 col-md-1 col-lg-1\">\n                  <mfDefaultSorter by=\"members\"><span class=\"innerHeadStyle\">EDIT</span></mfDefaultSorter>\n                </th>\n              </tr>\n            </thead>\n            <tbody class=\"setLoopFontStyle\" *ngIf=\"roleData.data.length>0; else messageData\">\n              <tr *ngFor=\"let item of roleData.data; let idx = index\" class=\"setBorderBottom\">\n                <td class=\"col-xs-6 col-sm-6 col-md-2 col-lg-1\">\n                  <!-- <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 check-item1\">\n                    <input type=\"checkbox\" id=\"mainSelect\" name=\"University select\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\n                    <label for=\"mainSelect\"></label>\n                  </div> -->\n                </td>\n                <td class=\" col-xs-6 col-sm-6 col-md-4 col-lg-4 text-left setCollegeStyle\">{{item.college}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.programs}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.courses}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setColorBlue\">{{item.members}}</td>\n                <td class=\" col-xs-6 col-sm-6 col-md-2 col-lg-2 setCollegeStyle\">\n                  <i class=\"fa fa-wrench\"></i>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot *ngIf=\"roleData.data.length>0\">\n              <tr>\n                <th colspan=\"6\">\n                  <div class=\"row setCollegeStyle\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-right\">\n                      <div class=\"col-lg-offset-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 text-right\">\n                        <span class=\"recordPerPage\">Rows per page</span>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-2 col-lg-2\">\n                        <select class=\"form-control setCollegeStyle\" name=\"recordsPerPage\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                        </select>\n                      </div>\n                      <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-2 setCollegeStyle\">\n                        <span>{{ (roleData.activePage - 1) * roleData.rowsOnPage  + 1 }} - {{roleData.data.length+roleData.rowsOnPage*(roleData.activePage-1)}} of {{data_length}}</span>\n                      </div>\n                    </div>\n                  </div>\n              </tr>\n            </tfoot>\n            <ng-template #messageData>\n              <tbody>\n                <tr>\n                  <th colspan=\"6\" class=\"text-center\">\n                    No details Found\n                  </th>\n                </tr>\n              </tbody>\n            </ng-template>\n          </table>\n        </md-tab>\n      </md-tab-group>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/super-admin/manage-university/manage-university.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUniversityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageUniversityComponent = (function () {
    function ManageUniversityComponent(http) {
        this.http = http;
        this.rowsOnPage = 5;
    }
    ManageUniversityComponent.prototype.getUniversity = function () {
        var _this = this;
        this.http.get("assets/university.json")
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    ManageUniversityComponent.prototype.getprogram = function () {
        var _this = this;
        this.http.get("assets/university.json")
            .subscribe(function (res) {
            _this.programDataSet = res.json();
            _this.courseDataSet = res.json();
            _this.membersDataSet = res.json();
            _this.roleDataSet = res.json();
        });
    };
    ManageUniversityComponent.prototype.ngOnInit = function () {
        this.getUniversity();
        this.getprogram();
    };
    ManageUniversityComponent.prototype.selectAll = function () {
        this.data[0].quiz_status = false;
        for (var i = 0; i < this.data.length; i++) {
            this.data[i].selected = this.selectedAll;
        }
    };
    ManageUniversityComponent.prototype.checkIfAllSelected = function () {
        this.data[0].quiz_status = false;
        this.selectedAll = this.data.every(function (item) {
            return item.selected == true;
        });
    };
    return ManageUniversityComponent;
}());
ManageUniversityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-university',
        template: __webpack_require__("../../../../../src/app/super-admin/manage-university/manage-university.component.html"),
        styles: [__webpack_require__("../../../../../src/app/super-admin/manage-university/manage-university.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ManageUniversityComponent);

var _a;
//# sourceMappingURL=manage-university.component.js.map

/***/ }),

/***/ "../../../../../src/app/super-admin/super-admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_admin_routing_module__ = __webpack_require__("../../../../../src/app/super-admin/super-admin.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_university_manage_university_component__ = __webpack_require__("../../../../../src/app/super-admin/manage-university/manage-university.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_post_manage_post_component__ = __webpack_require__("../../../../../src/app/super-admin/manage-post/manage-post.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperAdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SuperAdminModule = (function () {
    function SuperAdminModule() {
    }
    return SuperAdminModule;
}());
SuperAdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__super_admin_routing_module__["a" /* SuperAdminRouting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdButtonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__manage_university_manage_university_component__["a" /* ManageUniversityComponent */], __WEBPACK_IMPORTED_MODULE_7__manage_post_manage_post_component__["a" /* ManagePostComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdTabsModule */]
        ]
    })
], SuperAdminModule);

//# sourceMappingURL=super-admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/super-admin/super-admin.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common__ = __webpack_require__("../../../../../src/app/app-common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_university_manage_university_component__ = __webpack_require__("../../../../../src/app/super-admin/manage-university/manage-university.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_post_manage_post_component__ = __webpack_require__("../../../../../src/app/super-admin/manage-post/manage-post.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperAdminRouting; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'university', component: __WEBPACK_IMPORTED_MODULE_2__app_common__["a" /* DashboardComponent */], children: [{
                path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__manage_university_manage_university_component__["a" /* ManageUniversityComponent */]
            }]
    },
    {
        path: 'post', component: __WEBPACK_IMPORTED_MODULE_2__app_common__["a" /* DashboardComponent */], children: [{
                path: 'list', component: __WEBPACK_IMPORTED_MODULE_4__manage_post_manage_post_component__["a" /* ManagePostComponent */]
            }]
    },
];
var SuperAdminRouting = (function () {
    function SuperAdminRouting() {
    }
    return SuperAdminRouting;
}());
SuperAdminRouting = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SuperAdminRouting);

//# sourceMappingURL=super-admin.routing.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/Billing.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Billing.00285b62f271ffb1f41a.svg";

/***/ }),

/***/ "../../../../../src/assets/images/College.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "College.a98d8c87a01189a947b2.svg";

/***/ }),

/***/ "../../../../../src/assets/images/Dashboard.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Dashboard.b5163591e2ef5e451758.svg";

/***/ }),

/***/ "../../../../../src/assets/images/Management.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Management.27d291382ca0b04fc088.svg";

/***/ }),

/***/ "../../../../../src/assets/images/Post.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Post.174617b7c8efd74cf514.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map