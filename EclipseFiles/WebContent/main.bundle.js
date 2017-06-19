webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autore_autori_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opere_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuovaOperaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NuovaOperaComponent = (function () {
    function NuovaOperaComponent(http, router, autoriService, opereService) {
        this.http = http;
        this.router = router;
        this.autoriService = autoriService;
        this.opereService = opereService;
    }
    NuovaOperaComponent.prototype.ngOnInit = function () {
        this.autori = this.autoriService.getAutoriArr();
    };
    NuovaOperaComponent.prototype.onSubmitOpera = function (f) {
        var _this = this;
        console.log(f);
        var titolo = f.value.titolo;
        var descrizione = f.value.descrizione;
        var anno = f.value.anno;
        var tecnica = f.value.tecnica;
        var altezza = f.value.altezza;
        var larghezza = f.value.larghezza;
        var imgPath = f.value.imgPath;
        var id = f.value.id;
        var url = 'https://siw-project.herokuapp.com/OperaController?comando=creaOpera&titolo=' + titolo
            + '&descrizione=' + descrizione
            + '&anno=' + anno
            + '&tecnica=' + tecnica
            + '&altezza=' + altezza
            + '&larghezza=' + larghezza
            + '&imgPath=' + imgPath
            + '&id=' + id;
        this.http.get(url).subscribe(function (response) {
            var id = response.text();
            _this.opereService.getOpere();
            _this.subscription = _this.opereService.opereChanged.subscribe(function () { _this.router.navigate(['/opera', id]); });
        });
    };
    NuovaOperaComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    return NuovaOperaComponent;
}());
NuovaOperaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-nuova-opera',
        template: __webpack_require__(245),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__autore_autori_service__["a" /* AutoriService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__autore_autori_service__["a" /* AutoriService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__opere_service__["a" /* OpereService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__opere_service__["a" /* OpereService */]) === "function" && _d || Object])
], NuovaOperaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nuova-opera.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opere_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperaComponent = (function () {
    function OperaComponent(route, operaService, router) {
        this.route = route;
        this.operaService = operaService;
        this.router = router;
    }
    OperaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.opera = _this.operaService.getOperaId(_this.id);
        });
    };
    OperaComponent.prototype.onClickAutore = function () {
        this.router.navigate(['/autore', this.opera.artistaId]);
    };
    return OperaComponent;
}());
OperaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-opera',
        template: __webpack_require__(246),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__opere_service__["a" /* OpereService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__opere_service__["a" /* OpereService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OperaComponent);

var _a, _b, _c;
//# sourceMappingURL=opera.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 153;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(168);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_login_home_login_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autore_nuovo_autore_nuovo_autore_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opera_opera_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__autore_elenco_autori_elenco_autori_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opera_elenco_opere_elenco_opere_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_signup_home_signup_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authGuard_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__opera_nuova_opera_nuova_opera_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__autore_autore_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    //{path:'' , redirectTo: '/login', pathMatch:'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__home_login_home_login_component__["a" /* HomeLoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__home_signup_home_signup_component__["a" /* HomeSignupComponent */] },
    { path: 'nuovoAutore', component: __WEBPACK_IMPORTED_MODULE_3__autore_nuovo_autore_nuovo_autore_component__["a" /* NuovoAutoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__authGuard_service__["a" /* AuthGuard */]] },
    { path: 'nuovaOpera', component: __WEBPACK_IMPORTED_MODULE_9__opera_nuova_opera_nuova_opera_component__["a" /* NuovaOperaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__authGuard_service__["a" /* AuthGuard */]] },
    { path: 'opera/:id', component: __WEBPACK_IMPORTED_MODULE_4__opera_opera_component__["a" /* OperaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__authGuard_service__["a" /* AuthGuard */]] },
    { path: 'autore/:id', component: __WEBPACK_IMPORTED_MODULE_10__autore_autore_component__["a" /* AutoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__authGuard_service__["a" /* AuthGuard */]] },
    { path: 'elencoArtisti', component: __WEBPACK_IMPORTED_MODULE_5__autore_elenco_autori_elenco_autori_component__["a" /* ElencoAutoriComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__authGuard_service__["a" /* AuthGuard */]] },
    { path: 'elencoOpere', component: __WEBPACK_IMPORTED_MODULE_6__opera_elenco_opere_elenco_opere_component__["a" /* ElencoOpereComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__authGuard_service__["a" /* AuthGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(237),
        styles: [__webpack_require__(223)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_login_home_login_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__autore_autore_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__autore_nuovo_autore_nuovo_autore_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__opera_opera_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__autore_elenco_autori_elenco_autori_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__opera_elenco_opere_elenco_opere_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_signup_home_signup_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utente_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authGuard_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__opera_nuova_opera_nuova_opera_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autore_autori_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__opera_opere_service__ = __webpack_require__(32);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_login_home_login_component__["a" /* HomeLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__autore_autore_component__["a" /* AutoreComponent */],
            __WEBPACK_IMPORTED_MODULE_8__autore_nuovo_autore_nuovo_autore_component__["a" /* NuovoAutoreComponent */],
            __WEBPACK_IMPORTED_MODULE_9__opera_opera_component__["a" /* OperaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__autore_elenco_autori_elenco_autori_component__["a" /* ElencoAutoriComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__opera_elenco_opere_elenco_opere_component__["a" /* ElencoOpereComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_signup_home_signup_component__["a" /* HomeSignupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__opera_nuova_opera_nuova_opera_component__["a" /* NuovaOperaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__utente_service__["a" /* UtenteService */], __WEBPACK_IMPORTED_MODULE_15__authGuard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__autore_autori_service__["a" /* AutoriService */], __WEBPACK_IMPORTED_MODULE_18__opera_opere_service__["a" /* OpereService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utente_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(utenteService, router) {
        this.utenteService = utenteService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.utenteService.logout();
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(243),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utente_service__["a" /* UtenteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utente_service__["a" /* UtenteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 168:
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

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".spacer{\r\n    min-height: 2%;\r\n}\r\n\r\n#img-artista{\r\n    max-width: 100%;\r\n    max-height: 50%;\r\n    border: 5px inset   gray;\r\n    margin-right: 10px;\r\n    margin-top: 15px;\r\n}\r\n\r\n#detail-artista{\r\n  margin-top: 15px;\r\n}\r\n\r\n#box{\r\n  background-color: white;\r\n  height: 100%;\r\n  padding-top: 70px;\r\n}\r\n\r\n#desc-artista{\r\n  word-wrap: break-word;\r\n}\r\n\r\n.link{\r\n  color: green !important;\r\n  text-decoration: underline !important;\r\n  cursor:pointer !important;\r\n}\r\n\r\n.link:hover{\r\n  color: blue !important;\r\n  text-decoration: underline !important;\r\n  cursor:pointer !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#box{\r\n      background-color: white;\r\n      height: 100%;\r\n    }\r\n\r\n .spacer{\r\n          min-height: 2%;\r\n        }\r\n\r\n\r\n#nav-side{\r\n  position: -webkit-sticky;\r\n  position: fixed;\r\n  margin-top: 56px;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color:black;\r\n}\r\n\r\na:hover{\r\n  text-decoration: none;\r\n}\r\n\r\n.active-link{\r\n  background-color:azure;\r\n}\r\n\r\n.letter{\r\n  margin-bottom: -10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.colore{\r\n  color:red;\r\n}\r\n\r\n.puntatore{\r\n  cursor: pointer;\r\n}\r\n\r\n.elemento{\r\n  border-color: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".spacer{\r\n    min-height: 2em;\r\n}\r\n\r\n.bord{\r\n    border: 1px solid black;\r\n}\r\n\r\n  .marg-t{\r\n    margin-top: 25px;\r\n    }\r\n\r\n.title-all{\r\n    margin-left: 13px;\r\n}\r\n\r\n@media screen and (max-width: 575px){  /*toglie il margin-top se lo schermo diventa xs) */\r\n    .marg-t{\r\n    margin-top: -10px;\r\n    }\r\n\r\n    .title-all{\r\n        margin-left: 0px;\r\n        text-align: center;\r\n    }\r\n\r\n    .marg-tt{\r\n        margin-top: -30px;\r\n    }\r\n}\r\n\r\n#box{\r\n  background-color: white;\r\n  height: 100%;\r\n}\r\n\r\nform .ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\r\nbody{\r\n  background-color: transparent !important;\r\n}\r\n\r\n#jumbo{\r\n  max-width: 100%;\r\n  background: rgba(236, 238, 239, 0.85);\r\n\r\n}\r\n\r\n#riga-jumbo{\r\n  max-width: 100%;\r\n  margin: 0px !important;\r\n}\r\n\r\n\r\n/*  opacity: 1;\r\n  filter: alpha(opacity=100);*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\r\nbody{\r\n  background-color: transparent !important;\r\n}\r\n\r\n#jumbo{\r\n  max-width: 100%;\r\n  background: rgba(236, 238, 239, 0.85);\r\n\r\n}\r\n\r\n#riga-jumbo{\r\n  max-width: 100%;\r\n  margin: 0px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#box{\r\n      background-color: white;\r\n      height: 100%;\r\n    }\r\n\r\n .spacer{\r\n          min-height: 2%;\r\n        }\r\n\r\n\r\n#nav-side{\r\n  position: -webkit-sticky;\r\n  position: fixed;\r\n  margin-top: 56px;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color:black;\r\n}\r\n\r\na:hover{\r\n  text-decoration: none;\r\n}\r\n\r\n.active-link{\r\n  background-color:azure;\r\n}\r\n\r\n.letter{\r\n  margin-bottom: -10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.colore{\r\n  color:red;\r\n}\r\n\r\n.puntatore{\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "            .spacer{\r\n                min-height: 2em;\r\n            }\r\n\r\n            .bord{\r\n                border: 1px solid black;\r\n            }\r\n\r\n             .marg-t{\r\n                margin-top: 25px;\r\n                }\r\n\r\n            .title-all{\r\n                margin-left: 13px;\r\n            }\r\n\r\n            @media screen and (max-width: 575px){  /*toglie il margin-top se lo schermo diventa xs) */\r\n                .marg-t{\r\n                margin-top: -10px;\r\n                }\r\n\r\n                .title-all{\r\n                    margin-left: 0px;\r\n                    text-align: center;\r\n                }\r\n\r\n                .marg-tt{\r\n                    margin-top: -30px;\r\n                }\r\n            }\r\n\r\n            #box{\r\n              background-color: white;\r\n              height: 100%;\r\n            }\r\n\r\nform .ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".spacer{\r\n    min-height: 2%;\r\n}\r\n\r\n#img-opera{\r\n    max-width: 100%;\r\n    max-height: 50%;\r\n    border: 5px inset   gray;\r\n    margin-right: 10px;\r\n    margin-top: 15px;\r\n}\r\n\r\n#detail-opera{\r\n  margin-top: 15px;\r\n}\r\n\r\n#box{\r\n  background-color: white;\r\n  height: 100%;\r\n  padding-top: 70px;\r\n}\r\n\r\n#desc-opera{\r\n  word-wrap: break-word;\r\n}\r\n\r\n.link{\r\n  color: green !important;\r\n  text-decoration: underline !important;\r\n  cursor:pointer !important;\r\n}\r\n\r\n.link:hover{\r\n  color: blue !important;\r\n  text-decoration: underline !important;\r\n  cursor:pointer !important;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"div\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div id=\"box\">\n  <div class=\"spacer\"></div>\n\n  <div class=\"container\" id=\"wrapper\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6\">\n        <div class=\"text-center\" id=\"img\">\n          <img id=\"img-artista\" src=\"{{artista.imgPath}}\">\n        </div>\n      </div>\n      <div class=\"col-xs-12 offset-0 col-md-6\">\n        <div class=\"\" id=\"detail-artista\" >\n          <p><strong>Nome: </strong> {{artista.nome}} </p>\n          <p><strong>Cognome: </strong> {{artista.cognome}}</p>\n          <p><strong>Anno di nascita: </strong> {{artista.dataNascita}}</p>\n          <p><strong>Anno di morte: </strong> {{artista.dataMorte}}</p>\n          <p><strong>Città di nascita: </strong> {{artista.luogoNascita}}</p>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-12\" id=\"desc-artista\">\n        <p><strong>Descrizione: </strong></p>\n        <p>{{artista.descrizione}}</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-12\" id=\"elenco-opere\">\n        <p><strong>Elenco opere:</strong></p>\n        <ul>\n          <li *ngFor=\"let opera of listaOpere\" (click)=\"onClickOpera(opera.id)\" class=\"link\">\n            {{opera.titolo}}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"box\">\n  <div class=\"row\" style=\"max-width:100%;\">\n    <div class=\"col-xs-2 col-sm-1\" style=\"padding-left:3px; padding-right:3px\">\n      <ul class=\"list-group\" style=\"width:3%; height:50%;\" id=\"nav-side\">\n\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"a\" (click)=\"onAnchorClick()\">A</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"b\" (click)=\"onAnchorClick()\">B</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"c\" (click)=\"onAnchorClick()\">C</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"d\" (click)=\"onAnchorClick()\">D</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"e\" (click)=\"onAnchorClick()\">E</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"f\" (click)=\"onAnchorClick()\">F</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"g\" (click)=\"onAnchorClick()\">G</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"h\" (click)=\"onAnchorClick()\">H</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"i\" (click)=\"onAnchorClick()\">I</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"j\" (click)=\"onAnchorClick()\">J</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"k\" (click)=\"onAnchorClick()\">K</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"l\" (click)=\"onAnchorClick()\">L</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"m\" (click)=\"onAnchorClick()\">M</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"n\" (click)=\"onAnchorClick()\">N</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"o\" (click)=\"onAnchorClick()\">O</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"p\" (click)=\"onAnchorClick()\">P</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"q\" (click)=\"onAnchorClick()\">Q</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"r\" (click)=\"onAnchorClick()\">R</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"s\" (click)=\"onAnchorClick()\">S</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"t\" (click)=\"onAnchorClick()\">T</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"u\" (click)=\"onAnchorClick()\">U</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"v\" (click)=\"onAnchorClick()\">V</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"w\" (click)=\"onAnchorClick()\">W</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"x\" (click)=\"onAnchorClick()\">X</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"y\" (click)=\"onAnchorClick()\">Y</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoArtisti\" fragment=\"z\" (click)=\"onAnchorClick()\">Z</a></li>\n\n      </ul>\n    </div>\n\n    <div class=\"col-xs-9 col-sm-10\">\n\n      <div id=\"div-wrapper\" style =\"padding-top:10px\" #wrapper></div>\n\n      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div id=\"box\">\n  <div class=\"spacer\" style=\"margin-top: 56px\"></div>\n\n  <!--    <a routerLink=\"/elencoArtisti\" fragment=\"a\" (click)=\"onAnchorClick()\">A</a> -->\n\n    <div class=\"container col-md-10 col-lg-9\" id=\"wrapper\">\n      <h2 class=\"display-4 title-all\">Inserisci i dati dell'artista:</h2>\n        <div class=\"row\">\n\n          <form class=\"col-12\" (ngSubmit)=\"onSubmitArtista(f)\" #f=\"ngForm\" id=\"artista-form\">\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Nome: <input ngModel class=\"form-control\" name=\"nome\" id=\"nome\" #nome=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!nome.valid && nome.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px;\" >\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Cognome: <input ngModel class=\"form-control\" name=\"cognome\" id=\"cognome\" #cognome=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!cognome.valid && cognome.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\">\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Data di Nascita: <input ngModel class=\"form-control\" type=\"date\" name=\"dataNascita\" id=\"dataNascita\" #dataN=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!dataN.valid && dataN.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  La data di nascita è obbligatoria\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Data di Morte: <input ngModel class=\"form-control\" type=\"date\" name=\"dataMorte\" id=\"dataMorte\" #dataM=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!dataM.valid && dataM.touched\" class=\"alert alert-warning\" style=\"margin:0px; padding:6px\" >\n                  La data di morte è obbligatoria\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Luogo di Nascita: <input ngModel class=\"form-control\" name=\"luogoNascita\" id=\"luogoNascita\" #luogoN=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div  *ngIf=\"!luogoN.valid && luogoN.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Descrizione: <textarea ngModel class=\"form-control\" name=\"descrizione\" id=\"descrizione\" rows=\"10\" #desc=\"ngModel\" required></textarea>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group marg-tt\">\n                <div *ngIf=\"!desc.valid && desc.touched\" class=\"alert alert-warning\" style=\" margin-top:25px; padding:6px\" >\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Image Path: <input ngModel class=\"form-control\" name=\"imgPath\" id=\"imgPath\" #imgPath=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!imgPath.valid && imgPath.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <!-- TASTO SUBMIT -->\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary btn-lg\" value=\"Invia\">\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group  marg-t\"> </div>\n            </div>\n\n          </form>\n        </div>\n\n        <div class=\"row\">\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"sfondo\">\n    <div class=\"row justify-content-center align-items-end opacity-m\" id=\"riga-jumbo\">\n        <div class=\"jumbotron col-8 opacity-h\" id=\"jumbo\">\n            <div class=\"container col-xs-12 col-sm-8 col-md-8\" id=\"riga-jumbo-interna\">\n                <h1 class=\"display-6 text-center opacity-h\">Hello, please login!</h1>\n                <p class=\"lead text-center\">Enter your credentials and click login </p>\n                <p id=\"error\" class=\"hidden text-center  align-items-center justify-content-center\"><span class=\"alert-warning\">{{error}}</span></p>\n                <form class=\"jusify-content\" (ngSubmit)=\"onSubmitLogin(f)\" #f=\"ngForm\" id=\"login-form\">\n                    <div class=\"form-group text-center\">\n                    <label class=\"col-xs-1 col-sm-12 col-md-5 col-lg-5 text-center\"><strong>E-mail:</strong><input ngModel  type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" required email></label>\n                    </div>\n                    <div class=\"form-group text-center\">\n                    <label class=\"col-xs-1 col-sm-12 col-md-5 col-lg-5 text-center\"><strong>Password:</strong><input ngModel  type=\"password\" class=\"form-control\" name=\"password\" required ></label>\n                    </div>\n                    <input type=\"hidden\" name=\"comando\" value=\"login\">\n\n                </form>\n                  <p class=\"text-center\">If you do not have credentials, click <a class=\"btn btn-info\" routerLink=\"/signup\" role=\"button\">Signup</a> </p>\n                <hr class=\"my-3 col-xs-1 col-md-6 col-lg-6\">\n                <p class=\"lead text-center\"> <input type=\"submit\" class=\"btn btn-primary btn-lg\" role=\"button\" value=\"Login\" form=\"login-form\" [disabled]=\"!f.valid\"></p>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"sfondo\">\n  <div class=\"row justify-content-center align-items-end opacity-m\" id=\"riga-jumbo\">\n    <div class=\"jumbotron col-8 opacity-h\" id=\"jumbo\">\n      <div class=\"container col-xs-12 col-sm-8 col-md-8\" id=\"riga-jumbo-interna\">\n        <h1 class=\"display-6 text-center opacity-h\">Create your account!</h1>\n        <p class=\"lead text-center\">Please submit your email and password</p>\n        <p id=\"error\" class=\"hidden text-center  align-items-center justify-content-center\"><span class=\"alert-warning\">{{error}}</span></p>\n        <form class=\"jusify-content\" (ngSubmit)=\"onSubmitSignup(f)\" #f=\"ngForm\" id=\"signup-form\">\n\n          <div class=\"form-group text-center\">\n            <label class=\"col-xs-1 col-sm-12 col-md-5 col-lg-5 text-center\"><strong>E-mail:</strong><input ngModel  type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" required email></label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label class=\"col-xs-1 col-sm-12 col-md-5 col-lg-5 text-center\"><strong>Password:</strong><input ngModel  type=\"password\" class=\"form-control\" name=\"password\" required ></label>\n          </div>\n\n        </form>\n        <p class=\"text-center\">If you are already registered, click <a class=\"btn btn-info\" routerLink=\"/login\" role=\"button\">Login</a> </p>\n          <hr class=\"my-3 col-xs-1 col-md-6 col-lg-6\">\n        <p class=\"lead text-center\"> <input type=\"submit\" class=\"btn btn-primary btn-lg\" role=\"button\" value=\"Signup\" form=\"signup-form\" [disabled]=\"!f.valid\"></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable navbar-light bg-faded fixed-top\" id=\"navbarTop\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <a class=\"navbar-brand\"><img src=\"logo.png\" style=\"padding:0px- !important; margin:0px !important;\"></a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/elencoArtisti\" routerLinkActive=\"active\">Artisti</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/elencoOpere\" routerLinkActive=\"active\">Opere</a>\n    </li>\n    <li *ngIf=\"utenteService.isAmministratore()\" class=\"nav-item float-right\">\n      <a class=\"nav-link\" routerLink=\"/nuovoAutore\" routerLinkActive=\"active\">Inserisci artista</a>\n    </li>\n    <li *ngIf=\"utenteService.isAmministratore()\" class=\"nav-item float-right mr-auto\">\n      <a class=\"nav-link\" routerLink=\"/nuovaOpera\" routerLinkActive=\"active\">Inserisci opera</a>\n    </li>\n    <li *ngIf=\"utenteService.isLoggedIn()\" class=\"nav-item ml-auto\" style=\"cursor: pointer\">\n      <a class=\"nav-link\" (click)=\"onLogout()\">Logout</a>\n    </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"box\">\n  <div class=\"row\" style=\"max-width:100%\">\n    <div class=\"col-xs-2 col-sm-1\" style=\"padding-left:3px; padding-right:3px\">\n      <ul class=\"list-group\" style=\"width:3%; height:50%;\" id=\"nav-side\">\n\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"a\" (click)=\"onAnchorClick()\">A</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"b\" (click)=\"onAnchorClick()\">B</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"c\" (click)=\"onAnchorClick()\">C</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"d\" (click)=\"onAnchorClick()\">D</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"e\" (click)=\"onAnchorClick()\">E</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"f\" (click)=\"onAnchorClick()\">F</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"g\" (click)=\"onAnchorClick()\">G</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"h\" (click)=\"onAnchorClick()\">H</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"i\" (click)=\"onAnchorClick()\">I</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"j\" (click)=\"onAnchorClick()\">J</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"k\" (click)=\"onAnchorClick()\">K</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"l\" (click)=\"onAnchorClick()\">L</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"m\" (click)=\"onAnchorClick()\">M</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"n\" (click)=\"onAnchorClick()\">N</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"o\" (click)=\"onAnchorClick()\">O</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"p\" (click)=\"onAnchorClick()\">P</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"q\" (click)=\"onAnchorClick()\">Q</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"r\" (click)=\"onAnchorClick()\">R</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"s\" (click)=\"onAnchorClick()\">S</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"t\" (click)=\"onAnchorClick()\">T</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"u\" (click)=\"onAnchorClick()\">U</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"v\" (click)=\"onAnchorClick()\">V</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"w\" (click)=\"onAnchorClick()\">W</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"x\" (click)=\"onAnchorClick()\">X</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"y\" (click)=\"onAnchorClick()\">Y</a></li>\n        <li class=\"list-group-item list-group-item-action\"><a routerLink=\"/elencoOpere\" fragment=\"z\" (click)=\"onAnchorClick()\">Z</a></li>\n\n      </ul>\n    </div>\n\n    <div class=\"col-xs-9 col-sm-10\">\n\n      <div id=\"div-wrapper\" style =\"padding-top:10px\" #wrapper></div>\n\n      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<div id=\"box\">\n  <div class=\"spacer\" style=\"margin-top: 56px\"></div>\n\n  <!--    <a routerLink=\"/elencoArtisti\" fragment=\"a\" (click)=\"onAnchorClick()\">A</a> -->\n\n    <div class=\"container col-md-10 col-lg-9\" id=\"wrapper\">\n      <h2 class=\"display-4 title-all\">Inserisci i dati dell'opera:</h2>\n        <div class=\"row\">\n\n          <form class=\"col-12\" (ngSubmit)=\"onSubmitOpera(f)\" #f=\"ngForm\" id=\"opera-form\">\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Titolo: <input ngModel class=\"form-control\" name=\"titolo\" id=\"titolo\" #titolo=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!titolo.valid && titolo.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Tecnica: <input ngModel class=\"form-control\" name=\"tecnica\" id=\"tecnica\" #tecnica=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!tecnica.valid && tecnica.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\">\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Anno: <input ngModel class=\"form-control\" type=\"number\" name=\"anno\" id=\"anno\" #anno=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!anno.valid && anno.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n               Larghezza: <input ngModel class=\"form-control\" type=\"text\" name=\"larghezza\" id=\"larghezza\" #larghezza=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!larghezza.valid && larghezza.touched\" class=\"alert alert-warning\" style=\"margin:0px; padding:6px\" >\n                  Il campo deve essere un numero\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Altezza: <input ngModel class=\"form-control\" name=\"altezza\" id=\"altezza\" #altezza=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!altezza.valid && altezza.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  Il campo deve essere un numero\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Descrizione: <textarea ngModel class=\"form-control\" name=\"descrizione\" id=\"descrizione\" rows=\"10\" #descrizione=\"ngModel\" required></textarea>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group marg-tt\">\n                <div *ngIf=\"!descrizione.valid && descrizione.touched\" class=\"alert alert-info\" style=\" margin-top:25px; padding:6px\" >\n                  Il campo non può essere lasciato vuoto\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Image Path: <input ngModel class=\"form-control\" name=\"imgPath\" id=\"imgPath\" #imgPath=\"ngModel\" required>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!imgPath.valid && imgPath.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  Il campo inserito deve avere una lunghezza\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                Autore:\n                <select ngModel class=\"custom-select\" name=\"id\" #autore=\"ngModel\">\n                    <option *ngFor=\"let autore of autori\" value=\"{{autore.id}}\">{{autore.cognome}} - {{autore.nome}} </option>\n                </select>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group align-self-center marg-t\">\n                <div *ngIf=\"!autore.valid && autore.touched\" class=\"alert alert-warning\" style=\" margin:0px; padding:6px\" >\n                  Il campo inserito deve avere una lunghezza\n                </div>\n              </div>\n            </div>\n\n            <!-- TASTO SUBMIT -->\n            <div class=\"row col-12\" style=\"padding:0px; margin:0px\">\n              <div class=\"form-group col-xs-12 col-sm-6\">\n                <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary btn-lg\" value=\"Invia\">\n              </div>\n              <div class=\"col-xs-12 col-sm-6 form-group  marg-t\"> </div>\n            </div>\n\n          </form>\n        </div>\n\n        <div class=\"row\">\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div id=\"box\">\n  <div class=\"spacer\"></div>\n\n  <div class=\"container\" id=\"wrapper\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6\">\n        <div class=\"text-center\" id=\"img\">\n          <img id=\"img-opera\" src=\"{{opera.imgPath}}\">\n        </div>\n      </div>\n      <div class=\"col-xs-12 offset-0 col-md-6\">\n        <div class=\"\" id=\"detail-opera\" >\n          <p><strong>Titolo: </strong>{{opera.titolo}}</p>\n          <p><strong>Autore: </strong><a (click)=\"onClickAutore()\" class=\"link\">{{opera.artistaCognome}}</a></p>\n          <p><strong>Anno: </strong>{{opera.anno}}</p>\n          <p><strong>Tecnica: </strong>{{opera.tecnica}}</p>\n          <p><strong>Dimensioni: </strong>{{opera.larghezza}} x {{opera.altezza}}</p>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-12\" id=\"desc-opera\">\n        <p><strong>Descrizione: </strong></p>\n        <p>{{opera.descrizione}}</p>\n      </div>\n    </div>\n\n  <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoriService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutoriService = (function () {
    function AutoriService(http) {
        this.http = http;
        this.autori = [];
        this.autoriChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    AutoriService.prototype.getAutori = function () {
        var _this = this;
        return this.http.get('https://siw-project.herokuapp.com/ArtistaController?comando=getArtisti')
            .map(function (response) {
            var artisti = JSON.parse(response.text());
            return artisti;
        })
            .subscribe(function (artisti) {
            _this.autori = artisti;
            _this.autoriChanged.next(_this.autori);
        });
    };
    AutoriService.prototype.getAutoriArr = function () {
        return this.autori;
    };
    AutoriService.prototype.getAutoreIndex = function (index) {
        return this.autori[index];
    };
    AutoriService.prototype.getAutoreId = function (id) {
        var autore;
        for (var i = 0; i < this.autori.length; i++) {
            if (this.autori[i].id == id) {
                autore = this.autori[i];
            }
        }
        return autore;
    };
    AutoriService.prototype.setAutori = function (autori) {
        this.autori = autori;
    };
    AutoriService.prototype.addAutore = function (autore) {
        this.autori.push(autore);
    };
    AutoriService.prototype.deleteAutore = function (id) {
        var _this = this;
        this.http.get('https://siw-project.herokuapp.com/ArtistaController?comando=deleteArtista&id=' + id).subscribe(function (response) {
            _this.getAutori();
        });
    };
    return AutoriService;
}());
AutoriService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AutoriService);

var _a;
//# sourceMappingURL=autori.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpereService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpereService = (function () {
    function OpereService(http) {
        this.http = http;
        this.opere = [];
        this.opereChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    OpereService.prototype.getOpere = function () {
        var _this = this;
        return this.http.get('https://siw-project.herokuapp.com/OperaController?comando=getOpere')
            .map(function (response) {
            var opere = JSON.parse(response.text());
            return opere;
        })
            .subscribe(function (opere) {
            _this.opere = opere;
            _this.opereChanged.next(_this.opere);
        });
    };
    OpereService.prototype.getOperaIndex = function (index) {
        return this.opere[index];
    };
    OpereService.prototype.getOperaId = function (id) {
        var opera;
        for (var i = 0; i < this.opere.length; i++) {
            if (this.opere[i].id == id) {
                opera = this.opere[i];
            }
        }
        return opera;
    };
    OpereService.prototype.setOpere = function (opere) {
        this.opere = opere;
    };
    OpereService.prototype.addOpera = function (opera) {
        this.opere.push(opera);
    };
    OpereService.prototype.deleteOpera = function (id) {
        var _this = this;
        this.http.get('https://siw-project.herokuapp.com/OperaController?comando=deleteOpera&id=' + id).subscribe(function (response) {
            _this.getOpere();
        });
    };
    OpereService.prototype.getOpereofAutore = function (id) {
        var opereOfAutore = [];
        for (var i = 0; i < this.opere.length; i++) {
            if (+this.opere[i].artistaId.trim() == id) {
                opereOfAutore.push(this.opere[i]);
            }
        }
        return opereOfAutore;
    };
    return OpereService;
}());
OpereService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OpereService);

var _a;
//# sourceMappingURL=opere.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtenteService; });
var UtenteService = (function () {
    function UtenteService() {
        this.ruoloUtente = "";
        this.loggedIn = false;
    }
    UtenteService.prototype.setRuoloUtente = function (ruolo) {
        this.ruoloUtente = ruolo;
        this.loggedIn = true;
    };
    UtenteService.prototype.getRuoloUtente = function () {
        return this.ruoloUtente;
    };
    UtenteService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UtenteService.prototype.logout = function () {
        this.ruoloUtente = "";
        this.loggedIn = false;
    };
    UtenteService.prototype.isAmministratore = function () {
        return (this.ruoloUtente.trim() === 'amministratore');
    };
    return UtenteService;
}());

//# sourceMappingURL=utente.service.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utente_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(utenteService) {
        this.utenteService = utenteService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.utenteService.isLoggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utente_service__["a" /* UtenteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utente_service__["a" /* UtenteService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=authGuard.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autori_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opera_opere_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutoreComponent = (function () {
    function AutoreComponent(route, autoreService, operaService, router) {
        this.route = route;
        this.autoreService = autoreService;
        this.operaService = operaService;
        this.router = router;
    }
    AutoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.artista = _this.autoreService.getAutoreId(_this.id);
            _this.listaOpere = _this.operaService.getOpereofAutore(_this.id);
        });
    };
    AutoreComponent.prototype.onClickOpera = function (id) {
        this.router.navigate(['/opera', id]);
    };
    return AutoreComponent;
}());
AutoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-autore',
        template: __webpack_require__(238),
        styles: [__webpack_require__(224)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__autori_service__["a" /* AutoriService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__autori_service__["a" /* AutoriService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__opera_opere_service__["a" /* OpereService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__opera_opere_service__["a" /* OpereService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AutoreComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=autore.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autori_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utente_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElencoAutoriComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElencoAutoriComponent = (function () {
    function ElencoAutoriComponent(router, route, autoriService, r, utenteService) {
        this.router = router;
        this.route = route;
        this.autoriService = autoriService;
        this.r = r;
        this.utenteService = utenteService;
    }
    ElencoAutoriComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.autoriService.autoriChanged.subscribe(function (artisti) {
            _this.artisti = artisti;
            if (_this.artisti.length > 0) {
                _this.creaDisposizione2();
            }
        });
        this.autoriService.getAutori();
        var h = window.innerHeight;
        var nh = $('#navbarTop').outerHeight();
        $('#nav-side').height(h - nh);
    };
    ElencoAutoriComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView();
                window.scrollBy(0, -56);
            }
        });
    };
    ElencoAutoriComponent.prototype.creaDisposizione2 = function () {
        var _this = this;
        var wrap = this.w.nativeElement;
        wrap.innerHTML = '';
        var letteraIniziale = this.artisti[0].cognome.charAt(0).toUpperCase();
        var h2 = this.r.createElement('h2');
        h2.innerText = letteraIniziale.toUpperCase();
        h2.id = letteraIniziale.toLocaleLowerCase();
        this.r.addClass(h2, 'mt-5');
        this.r.appendChild(wrap, h2);
        var hr = this.r.createElement('hr');
        this.r.appendChild(wrap, hr);
        var ul = this.r.createElement('ul');
        this.r.addClass(ul, 'list-group');
        this.r.appendChild(wrap, ul);
        var li;
        var id;
        var span;
        for (var _i = 0, _a = this.artisti; _i < _a.length; _i++) {
            var artista = _a[_i];
            if (letteraIniziale != artista.cognome[0].charAt(0).toUpperCase()) {
                letteraIniziale = artista.cognome[0].charAt(0).toUpperCase();
                h2 = this.r.createElement('h2');
                h2.innerText = letteraIniziale.toUpperCase();
                h2.id = letteraIniziale.toLocaleLowerCase();
                this.r.addClass(h2, 'mt-5');
                this.r.appendChild(wrap, h2);
                hr = this.r.createElement('hr');
                this.r.appendChild(wrap, hr);
                ul = this.r.createElement('ul');
                this.r.addClass(ul, 'list-group');
                this.r.appendChild(wrap, ul);
            } //end if
            li = this.r.createElement('li');
            li.innerText = artista.cognome + ' - ' + artista.nome;
            this.r.addClass(li, 'list-group-item');
            this.r.addClass(li, 'list-group-item-action');
            //this.r.addClass(li, 'elemento');
            //new
            if (this.utenteService.getRuoloUtente().trim() === 'amministratore'.trim()) {
                span = this.r.createElement('span');
                span.innerText = 'X';
                this.r.addClass(span, 'badge');
                this.r.addClass(span, 'badge-danger');
                this.r.addClass(span, 'ml-auto');
                this.r.addClass(span, 'puntatore');
                this.r.appendChild(li, span);
            }
            //fine new
            li.id = '' + artista.id;
            this.r.listen(li, 'click', function (e) { _this.handleClick(e); });
            this.r.appendChild(ul, li);
        } //end for
    };
    ElencoAutoriComponent.prototype.handleClick = function (e) {
        if (e.srcElement.tagName.trim() === 'LI'.trim()) {
            this.navigateAutore(e.srcElement.id);
        }
        else if (e.srcElement.tagName.trim() === 'SPAN'.trim()) {
            this.autoriService.deleteAutore(+e.srcElement.parentElement.id);
        }
    };
    ElencoAutoriComponent.prototype.navigateAutore = function (id) {
        this.router.navigate(['/autore', id]);
    };
    ElencoAutoriComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ElencoAutoriComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('wrapper'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], ElencoAutoriComponent.prototype, "w", void 0);
ElencoAutoriComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-elenco-autori',
        template: __webpack_require__(239),
        styles: [__webpack_require__(225)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__autori_service__["a" /* AutoriService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__autori_service__["a" /* AutoriService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__utente_service__["a" /* UtenteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utente_service__["a" /* UtenteService */]) === "function" && _f || Object])
], ElencoAutoriComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=elenco-autori.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autori_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuovoAutoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NuovoAutoreComponent = (function () {
    function NuovoAutoreComponent(http, router, autoriService) {
        this.http = http;
        this.router = router;
        this.autoriService = autoriService;
    }
    NuovoAutoreComponent.prototype.ngOnInit = function () {
    };
    NuovoAutoreComponent.prototype.onSubmitArtista = function (f) {
        var _this = this;
        console.log(f);
        console.log(f.controls.nome.valid);
        var nome = f.value.nome;
        var cognome = f.value.cognome;
        var dataNascita = f.value.dataNascita;
        var dataMorte = f.value.dataMorte;
        var luogoNascita = f.value.luogoNascita;
        var descrizione = f.value.descrizione;
        var imgPath = f.value.imgPath;
        var url = 'http://localhost:8080/galleriaSIW/ArtistaController?comando=creaArtista&nome=' + nome
            + '&cognome=' + cognome
            + '&dataNascita=' + dataNascita
            + '&dataMorte=' + dataMorte
            + '&luogoNascita=' + luogoNascita
            + '&descrizione=' + descrizione
            + '&imgPath=' + imgPath;
        this.http.get(url).subscribe(function (response) {
            var id = response.text();
            _this.autoriService.getAutori();
            _this.subscription = _this.autoriService.autoriChanged.subscribe(function () { _this.router.navigate(['/autore', id]); });
        });
    };
    NuovoAutoreComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    return NuovoAutoreComponent;
}());
NuovoAutoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-nuovo-autore',
        template: __webpack_require__(240),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__autori_service__["a" /* AutoriService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__autori_service__["a" /* AutoriService */]) === "function" && _c || Object])
], NuovoAutoreComponent);

var _a, _b, _c;
//# sourceMappingURL=nuovo-autore.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utente_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__autore_autori_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opera_opere_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeLoginComponent = (function () {
    function HomeLoginComponent(http, utenteService, router, autoriService, opereService) {
        this.http = http;
        this.utenteService = utenteService;
        this.router = router;
        this.autoriService = autoriService;
        this.opereService = opereService;
    }
    HomeLoginComponent.prototype.ngOnInit = function () {
        var margin = (window.innerHeight - __WEBPACK_IMPORTED_MODULE_2_jquery__("#jumbo").outerHeight()) / 2;
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#jumbo").css("marginTop", margin);
        window.onresize = resize;
        function resize() {
            var margin = (window.innerHeight - __WEBPACK_IMPORTED_MODULE_2_jquery__("#jumbo").outerHeight()) / 2;
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#jumbo").css("marginTop", margin);
        }
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#navbarTop').addClass('invisible');
        if (this.utenteService.isLoggedIn()) {
            this.navigateAutori();
        }
    };
    HomeLoginComponent.prototype.onSubmitLogin = function (f) {
        var _this = this;
        var email = f.value.email;
        var password = f.value.password;
        var url = 'https://siw-project.herokuapp.com/UtenteController?comando=login&email=' + email + '&password=' + password;
        this.http.get(url).subscribe(function (response) {
            if ((response.text().trim() === 'utente') || ((response.text().trim()) === 'amministratore')) {
                _this.utenteService.setRuoloUtente(response.text());
                _this.error = '';
                _this.autoriService.getAutori();
                _this.opereService.getOpere();
                _this.navigateAutori();
            }
            else {
                _this.error = 'Utente non trovato. Password o Email errati';
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#error').toggleClass('hidden');
            }
        });
    };
    HomeLoginComponent.prototype.navigateAutori = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#navbarTop').removeClass('invisible');
        this.router.navigate(['/elencoArtisti']);
    };
    return HomeLoginComponent;
}());
HomeLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-home-login',
        template: __webpack_require__(241),
        styles: [__webpack_require__(227)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__utente_service__["a" /* UtenteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utente_service__["a" /* UtenteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__autore_autori_service__["a" /* AutoriService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__autore_autori_service__["a" /* AutoriService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__opera_opere_service__["a" /* OpereService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__opera_opere_service__["a" /* OpereService */]) === "function" && _e || Object])
], HomeLoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home-login.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeSignupComponent = (function () {
    function HomeSignupComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    HomeSignupComponent.prototype.ngOnInit = function () {
        var margin = (window.innerHeight - $("#jumbo").outerHeight()) / 2;
        $("#jumbo").css("marginTop", margin);
        window.onresize = resize;
        function resize() {
            var margin = (window.innerHeight - $("#jumbo").outerHeight()) / 2;
            $("#jumbo").css("marginTop", margin);
        }
        $('#navbarTop').addClass('invisible');
    };
    HomeSignupComponent.prototype.onSubmitSignup = function (f) {
        var _this = this;
        var email = f.value.email;
        var password = f.value.password;
        var url = 'https://siw-project.herokuapp.com/UtenteController?comando=signup&email=' + email + '&password=' + password;
        this.http.get(url).subscribe(function (response) {
            if (response.text().trim() === 'utenteInserito') {
                _this.navigateToLogin();
            }
            else {
                _this.error = "L'email è già usata.";
            }
        });
    };
    HomeSignupComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['/login']);
    };
    return HomeSignupComponent;
}());
HomeSignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home-signup',
        template: __webpack_require__(242),
        styles: [__webpack_require__(228)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeSignupComponent);

var _a, _b;
//# sourceMappingURL=home-signup.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opere_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utente_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElencoOpereComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElencoOpereComponent = (function () {
    function ElencoOpereComponent(router, route, opereService, r, utenteService) {
        this.router = router;
        this.route = route;
        this.opereService = opereService;
        this.r = r;
        this.utenteService = utenteService;
    }
    ElencoOpereComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.opereService.opereChanged.subscribe(function (opere) {
            _this.opere = opere;
            if (_this.opere.length > 0) {
                _this.creaDisposizione2();
            }
        });
        this.opereService.getOpere();
        var h = window.innerHeight;
        var nh = $('#navbarTop').outerHeight();
        $('#nav-side').height(h - nh);
    };
    ElencoOpereComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView();
                window.scrollBy(0, -56);
            }
        });
    };
    ElencoOpereComponent.prototype.creaDisposizione2 = function () {
        var _this = this;
        var wrap = this.w.nativeElement;
        wrap.innerHTML = '';
        var letteraIniziale = this.opere[0].titolo.charAt(0).toUpperCase();
        var h2 = this.r.createElement('h2');
        h2.innerText = letteraIniziale.toUpperCase();
        h2.id = letteraIniziale.toLocaleLowerCase();
        this.r.addClass(h2, 'mt-5');
        this.r.appendChild(wrap, h2);
        var hr = this.r.createElement('hr');
        this.r.appendChild(wrap, hr);
        var ul = this.r.createElement('ul');
        this.r.addClass(ul, 'list-group');
        this.r.appendChild(wrap, ul);
        var li;
        var id;
        var span;
        for (var _i = 0, _a = this.opere; _i < _a.length; _i++) {
            var opera = _a[_i];
            if (letteraIniziale != opera.titolo[0].charAt(0).toUpperCase()) {
                letteraIniziale = opera.titolo[0].charAt(0).toUpperCase();
                h2 = this.r.createElement('h2');
                h2.innerText = letteraIniziale.toUpperCase();
                h2.id = letteraIniziale.toLocaleLowerCase();
                this.r.addClass(h2, 'mt-5');
                this.r.appendChild(wrap, h2);
                hr = this.r.createElement('hr');
                this.r.appendChild(wrap, hr);
                ul = this.r.createElement('ul');
                this.r.addClass(ul, 'list-group');
                this.r.appendChild(wrap, ul);
            } //end if
            li = this.r.createElement('li');
            li.innerText = opera.titolo + ' - ' + opera.artistaCognome;
            this.r.addClass(li, 'list-group-item');
            this.r.addClass(li, 'list-group-item-action');
            if (this.utenteService.getRuoloUtente().trim() === 'amministratore'.trim()) {
                span = this.r.createElement('span');
                span.innerText = 'X';
                this.r.addClass(span, 'badge');
                this.r.addClass(span, 'badge-danger');
                this.r.addClass(span, 'ml-auto');
                this.r.addClass(span, 'puntatore');
                this.r.appendChild(li, span);
            }
            li.id = '' + opera.id;
            this.r.listen(li, 'click', function (e) { _this.handleClick(e); });
            this.r.appendChild(ul, li);
        } //end for
    };
    ElencoOpereComponent.prototype.handleClick = function (e) {
        if (e.srcElement.tagName.trim() === 'LI'.trim()) {
            this.navigateOpera(e.srcElement.id);
        }
        else if (e.srcElement.tagName.trim() === 'SPAN'.trim()) {
            this.opereService.deleteOpera(+e.srcElement.parentElement.id);
        }
    };
    ElencoOpereComponent.prototype.navigateOpera = function (id) {
        this.router.navigate(['/opera', id]);
    };
    ElencoOpereComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ElencoOpereComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('wrapper'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], ElencoOpereComponent.prototype, "w", void 0);
ElencoOpereComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-elenco-opere',
        template: __webpack_require__(244),
        styles: [__webpack_require__(230)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__opere_service__["a" /* OpereService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__opere_service__["a" /* OpereService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__utente_service__["a" /* UtenteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utente_service__["a" /* UtenteService */]) === "function" && _f || Object])
], ElencoOpereComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=elenco-opere.component.js.map

/***/ })

},[514]);
//# sourceMappingURL=main.bundle.js.map