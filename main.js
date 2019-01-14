(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular/angular.component.css":
/*!***********************************************!*\
  !*** ./src/app/angular/angular.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular.component.html":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n    <h1 class=\"display-4\">Angular</h1>\n    <small>Fonte: <a href=\"https://angular.io/docs\">Guida ufficiale Angular <i class=\"fas fa-external-link-alt icon-external-link\"></i></a></small>\n    <div class=\"mt-4\">\n    <p>\n      Angular è un framework che semplifica lo sviluppo su più piattaforme grazie alla sua struttura a componenti, che favorisce la riutilizzabilità.\n      A differenza del predecessore AngularJS, Angular si basa su TypeScript.\n    </p>\n    <p>\n      Per la creazione di un progetto si utilizza (per comodità e semplicità) <span class=\"font-weight-bold\">Angular Cli</span> che tramite una serie di comandi permette di creare facilemente il progetto e le sue componenti.\n      I comandi principali di Angular Cli sono:\n    </p>\n    \n    <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Comando</th>\n            <th scope=\"col\">Descrizione</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td scope=\"row\">ng new NomeProgetto</td>\n            <td>Crea un progetto</td>\n          </tr>\n          <tr>\n            <td scope=\"row\">ng generate component NomeComponente</td>\n            <td>Crea un componente</td>\n          </tr>\n          <tr>\n            <td scope=\"row\">ng generate service NomeServizio</td>\n            <td>Crea un servizio</td>\n          </tr>\n          <tr>\n            <td scope=\"row\">ng generate module app-routing --flat --module=app</td>\n            <td>Crea un modulo per il routing</td>\n          </tr>\n          <tr>\n            <td scope=\"row\">ng serve</td>\n            <td>Compila il progetto e lo attiva in localhost:4200</td>\n          </tr>\n          <tr>\n            <td scope=\"row\">ctrl+c</td>\n            <td>Termina il serve</td>\n          </tr>\n        </tbody>\n      </table>\n    \n    \n    <p>\n      Ogni componente ha il suo css e il suo template html che vengono generati in automatico da Angular Cli come file separati (in alternativa si possono definire dentro al component).\n      Un componente va incluso nelle pagine html dove si vuole renderizzarlo tramite <code>&lt;app-nomeComponente&gt;&lt;/app-nomeComponente&gt;</code>.\n    </p>\n    \n    <p>\n      Per utilizzare un campo di un componente si usa l'interpolazione: <code ngNonBindable>{{proprietà}}</code>.\n    </p>\n    <p>\n      Angular permette di integrare la prima validazione dei form nel codice html. \n      <!-- Per dettagli si rimanda alla <a href=\"https://angular.io/guide/form-validation\">documentazione</a>. -->\n    </p>\n    \n    \n    <h2 class=\"display-4 mb-4\">Observable e RxJs</h2>\n    <p>\n      <code>Observable</code> è un tipo per passare messaggi, utile per la gestione degli eventi e per la programmazione asincrona.\n      Gli <code>Observable</code> sono dichiarativi: si definisce una funzione che viene eseguita quando viene invocato il metodo <code>subscribe()</code>.\n      Viene ritornato un oggetto <code>Subscription</code> che può interrompere la ricezione di notifiche con il metodo <code>unsubscribe()</code>.\n    </p>\n    <p>\n      RxJs è una libreria per la programmazione reattiva tramite il tipo <code>Observable</code>. \n      La libreria mette a disposizione funzioni che permettono una creazione più facile di <code>Observable</code> da eventi, timers o promises e operatori che permettono la manipolazione delle collezioni.\n      Il metodo <code>subscribe()</code> è essenziale per l'esecuzione delle funzioni e degli operatori di RxJs e funziona in modo leggermente diverso in base al contesto di utilizzo.\n    </p>\n    <p>\n      Per convenzione un <code>Observable</code> viene chiamato con il $ alla fine del nome: <code>Osservatore$ : Observable&lt;T&gt;;</code>.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/angular/angular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularComponent = /** @class */ (function () {
    function AngularComponent(titleService) {
        this.titleService = titleService;
        var self = this;
        titleService.setTitle('Angular - Interactive Notes');
    }
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent.prototype.goTop = function () {
        $('html,body').scrollTop(0);
    };
    AngularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular',
            template: __webpack_require__(/*! ./angular.component.html */ "./src/app/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ./angular.component.css */ "./src/app/angular/angular.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/javascript.component */ "./src/app/javascript/javascript.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _extjs_extjs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extjs/extjs.component */ "./src/app/extjs/extjs.component.ts");
/* harmony import */ var _ionic_ionic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic/ionic.component */ "./src/app/ionic/ionic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'angular', component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__["AngularComponent"] },
    { path: 'extjs', component: _extjs_extjs_component__WEBPACK_IMPORTED_MODULE_6__["ExtjsComponent"] },
    { path: 'ionic', component: _ionic_ionic_component__WEBPACK_IMPORTED_MODULE_7__["IonicComponent"] },
    { path: 'javascript', component: _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_4__["JavascriptComponent"] },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./javascript/javascript.component */ "./src/app/javascript/javascript.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _extjs_extjs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extjs/extjs.component */ "./src/app/extjs/extjs.component.ts");
/* harmony import */ var _ionic_ionic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ionic/ionic.component */ "./src/app/ionic/ionic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_8__["JavascriptComponent"],
                _angular_angular_component__WEBPACK_IMPORTED_MODULE_9__["AngularComponent"],
                _extjs_extjs_component__WEBPACK_IMPORTED_MODULE_10__["ExtjsComponent"],
                _ionic_ionic_component__WEBPACK_IMPORTED_MODULE_11__["IonicComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
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

var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.goTop = function () {
        $('html,body').scrollTop(0);
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/extjs/extjs.component.css":
/*!*******************************************!*\
  !*** ./src/app/extjs/extjs.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-go-top{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/extjs/extjs.component.html":
/*!********************************************!*\
  !*** ./src/app/extjs/extjs.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n  <h1 class=\"display-4\">Ext JS</h1>\n  <small>Fonte: <a href=\"https://www.tutorialspoint.com/extjs/index.htm\">Guida Tutorialspoint <i class=\"fas fa-external-link-alt icon-external-link\"></i></a></small>\n  <div class=\"mt-4\">\n    <p>\n      Ext JS è un framework JavaScript per sviluppare interfacce web dinamiche. Il framework è integrabile nel progetto tramite CDN o scaricando i file della libreria.\n      Il framework nelle sue versioni più recenti è gratuito solo se il progetto è opensource e non a fini commerciali.\n    </p>\n\n    <p>\n      Il metodo base è <code>Ext.onReady()</code> che viene eseguito una volta per renderizzare gli elementi.\n    </p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Classi e oggetti</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>Una nuova classe viene definita nel seguente modo:</p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n      Ext.define(class name, class members/properties, callback function);\n    </code></pre>\n    <p>dove:</p>\n    <ul>\n      <li>\n        Class name indica il nome della classe in base alla struttura dell'applicazione.\n      </li>\n      <li>\n        Class members/properties definisce il comportamento della classe.\n      </li>\n      <li>\n        La callback è opzionale e viene eseguita dopo il caricamento riuscito della classe.\n      </li>\n    </ul>\n    <p>\n      Un oggetto può essere creato utilizzando la <code>new</code> oppure con il metodo <code>Ext.create()</code>.\n    </p>\n    <p>\n      Ext JS permette l'uso dell'ereditarietà con due modi: <code>Ext.extend</code> o con i Mixins. Il primo metodo definisce l'estensione come proprietà:\n    </p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n      Ext.define(appName.folderName.className, &#123;\n        extend : 'Ext.grid.GridPanel',\n        ...\n        &#125;);\n    </code></pre>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Contenitori</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>\n      Un container è il componente contenitore di altri contenitori o di componenti figli e può avere layout differenti.\n      La classe base è <code>Ext.container.Container</code>.\n\n    </p>\n\n\n\n   \n    \n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/extjs/extjs.component.ts":
/*!******************************************!*\
  !*** ./src/app/extjs/extjs.component.ts ***!
  \******************************************/
/*! exports provided: ExtjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtjsComponent", function() { return ExtjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtjsComponent = /** @class */ (function () {
    function ExtjsComponent(titleService) {
        this.titleService = titleService;
        var self = this;
        titleService.setTitle('Ext JS - Interactive Notes');
    }
    ExtjsComponent.prototype.ngOnInit = function () {
    };
    ExtjsComponent.prototype.goTop = function () {
        $('html,body').scrollTop(0);
    };
    ExtjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extjs',
            template: __webpack_require__(/*! ./extjs.component.html */ "./src/app/extjs/extjs.component.html"),
            styles: [__webpack_require__(/*! ./extjs.component.css */ "./src/app/extjs/extjs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ExtjsComponent);
    return ExtjsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fakeLink{\n    cursor: pointer;\n}\n.fakeLink:hover{\n    text-decoration: underline;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light text-center p-3 mt-5\">\n  <span (click)=\"goTop()\" class=\"fakeLink text-primary\">Torna su</span>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.goTop = function () {
        $('html,body').scrollTop(0);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli{\n    font-size: 3em;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1 class=\"display-4 mb-4\">Interactive Notes</h1>\n\n  <ul>\n    <li><a routerLink=\"/angular\">Angular</a></li>\n    <li><a routerLink=\"/extjs\">Ext JS</a></li>\n    <li><a routerLink=\"/ionic\">Ionic</a></li>\n    <li><a routerLink=\"/javascript\">JavaScript</a></li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
        var self = this;
        titleService.setTitle('Home - Interactive Notes');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ionic/ionic.component.css":
/*!*******************************************!*\
  !*** ./src/app/ionic/ionic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ionic/ionic.component.html":
/*!********************************************!*\
  !*** ./src/app/ionic/ionic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n    <h1 class=\"display-4\">Ionic</h1>\n    <small>Fonte: <a href=\"https://ionicframework.com/docs/\">Guida ufficiale Ionic <i class=\"fas fa-external-link-alt icon-external-link\"></i></a></small>\n    <div class=\"mt-4\">\n    <p>\n\n    </p>\n    \n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Comando</th>\n          <th scope=\"col\">Descrizione</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td scope=\"row\">ionic start myApp blank</td>\n          <td>Crea un'app vuota</td>\n        </tr>\n        <tr>\n          <td scope=\"row\">ionic serve</td>\n          <td>Compila il progetto e lo attiva in localhost:4200</td>\n        </tr>\n        <tr>\n          <td scope=\"row\">ctrl+c</td>\n          <td>Termina il serve</td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/ionic/ionic.component.ts":
/*!******************************************!*\
  !*** ./src/app/ionic/ionic.component.ts ***!
  \******************************************/
/*! exports provided: IonicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicComponent", function() { return IonicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IonicComponent = /** @class */ (function () {
    function IonicComponent(titleService) {
        this.titleService = titleService;
        titleService.setTitle('Ionic - Interactive Notes');
    }
    IonicComponent.prototype.ngOnInit = function () {
    };
    IonicComponent.prototype.goTop = function () {
        $('html,body').scrollTop(0);
    };
    IonicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ionic',
            template: __webpack_require__(/*! ./ionic.component.html */ "./src/app/ionic/ionic.component.html"),
            styles: [__webpack_require__(/*! ./ionic.component.css */ "./src/app/ionic/ionic.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], IonicComponent);
    return IonicComponent;
}());



/***/ }),

/***/ "./src/app/javascript/javascript.component.css":
/*!*****************************************************!*\
  !*** ./src/app/javascript/javascript.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hiddenTS{\n    display: none;\n}\n.titleTS{\n    cursor: pointer;\n}\n.icon-go-top{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/javascript/javascript.component.html":
/*!******************************************************!*\
  !*** ./src/app/javascript/javascript.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n  <h1 class=\"display-4\">JavaScript <span class=\"text-primary titleTS\" (click)=\"showTS()\">& TypeScript</span></h1>\n  <div>\n    <small>Fonte: <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide\">Guida ufficiale MDN <i class=\"fas fa-external-link-alt icon-external-link\"></i></a></small>\n    <small class=\"hiddenTS\">Fonte: <a href=\"https://www.typescriptlang.org/docs/home.html\">Guida ufficiale TS <i class=\"fas fa-external-link-alt icon-external-link\"></i></a></small>\n  </div>\n\n  <div class=\"mt-4\">\n    <p>\n      JavaScript è case sensitive e utilizza i caratteri Unicode.\n      Uno statement non richiede il ; se è l'unico nella riga, ma è meglio metterlo comunque.\n      Una linea di commento si inserisce con <code>//</code>, mentre un blocco è racchiuso in <code>/* */</code>.\n    </p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Variabili</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>Le variabili possono essere definite in tre modi:</p>\n    <ul>\n      <li><code>var</code> - variabile base</li>\n      <li><code>let</code> - varibile locale, block scoped</li>\n      <li><code>const</code> - costante, block scoped, deve essere inizializzata, non può avere lo stesso nome di una variabile o di una funzione; un oggetto costante può essere modificato nei suoi campi (idem per un array)</li>\n    </ul>\n    <p>\n      Il valore di una variabile è <code>undefined</code> finché non è inizializzata.\n      Si può controllare se una variabile ha un valore con <code>=== undefined</code>.\n      In un contesto booleano una variabile <code>undefined</code> assume il valore <code>false</code>, in un contesto numerico assume il valore <code>NaN</code> (not a number).\n      In un contesto booleano una variabile <code>null</code> assume il valore <code>false</code>, in un contesto numerico assume il valore 0.\n    </p>\n    <p>\n      JS dà la possibilità di riferirsi ad una variabile dichiarata successivamente (solo con var), tuttavia mantiene il valore <code>undefined</code> quando viene usata prima della dichiarazione.\n      Questa proprietà è detta Variable Hoisting.\n    </p>\n    <p>Le variabili globali sono proprietà dell'oggetto global window.</p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Tipi (6 primitivi + object)</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n      <ul>\n        <li>Boolean</li>\n        <li>null</li>\n        <li>undefined</li>\n        <li>Number</li>\n        <li>String</li>\n        <li>Symbol</li>\n      </ul>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Conversione Tipi</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      JS è tipato dinamicamente: non necessita che venga specificato il tipo e i tipi vengono convertiti durante l'esecuzione in base alle necessità.\n      Quando una variabile ha un valore String + Number, il Number viene convertito a String. Se invece vengono usati operatori diversi dal +, la stringa viene convertita in numero.\n      Un numero memorizzato come stringa è possibile convertirlo manualmente con <code>parseInt()</code> e <code>parseFloat()</code>, entrambi metodi di Number.\n    </p>\n\n    <p class=\"hiddenTS\">\n      TS invece aggiunge la possibilità di usare tipi statici tramite type annotations, rendendo più facile l'analisi statica del codice e bloccando la conversione automatica.\n      Le type annotations si possono usare sulle variabili, sui parametri delle funzioni e permettono anche di definire il tipo di ritorno delle funzioni.\n      Una volta usata l'annotation, il tipo dichiarato è fisso e non è possibile passare valori del tipo errato.\n    </p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info hiddenTS\"><code>\n      var name : string;\n      function greeter(person: string): string &#123;\n        return \"Hello, \" + person;\n      &#125;\n    </code></pre>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Condizioni</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      Le istruzioni condizionali usano:\n    </p>\n    <ul>\n      <li>if...else</li>\n      <li>switch</li>\n    </ul>\n    <p>Valori che valgono come false:</p>\n    <ul>\n      <li>false</li>\n      <li>undefined</li>\n      <li>null</li>\n      <li>0</li>\n      <li>NaN</li>\n      <li>\" \"</li>\n    </ul>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Eccezioni</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      Similmente ad altri linguaggi, le eccezioni sono lanciate dal throw, gestite da un try...catch e può avere un finally conclusivo.\n      L'errore lanciato può essere di qualsiasi tipo, ma conviene usare quelli definti da\n      <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types\">ES6 <i class=\"fas fa-external-link-alt icon-external-link\"></i></a> o dal\n      <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/DOMException\">DOM <i class=\"fas fa-external-link-alt icon-external-link\"></i></a>.\n    </p>\n    <p>\n      Un modo alternativo per gestire il flusso di operazioni asincrone è l'uso delle Promises.\n      Un oggetto Promise può avere 4 stati:\n    </p>\n    <ul>\n      <li>pending - in attesa</li>\n      <li>fulfilled - operazione a buon fine</li>\n      <li>rejected - operazione fallita</li>\n      <li>settled - fulfilled o rejected, ma non pending</li>\n    </ul>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Iterazioni</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      Esistono diversi modi per iterare:\n    </p>\n    <ul>\n      <li>for</li>\n      <li>while</li>\n      <li>do...while</li>\n      <li>for...in su array</li>\n      <li>for...of su oggetti iterabili</li>\n    </ul>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n        for (variable in/of object) &#123;\n          statements\n        &#125;\n    </code></pre>\n    <p>Il flusso di un'iterazione può essere interrotto con un break o è possibile passare all'iterazione successiva con il continue.\n      Esiste inoltre la funzione forEach() per eseguire una data funzione su ogni elemento di un array o un oggetto.\n    </p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n      array.forEach(function(element) &#123;\n          console.log(element);\n      &#125;);\n    </code></pre>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Funzioni</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      Una funzione è definita con la keyword <code>function</code>. I parametri di tipo primitivo sono passati per valore e non cambiano al di fuori della funzione.\n      Invece se vengono passati oggetti, la funzione può modificare le sue proprietà e le modifiche rimangono visibili anche all'esterno della funzione.\n      Una funzione può accedere a tutte le variabili e funzioni definite nello scope in cui è definito.\n    </p>\n    <p>\n      Esiste la possibilità di creare funzioni tramite espressioni.\n      Queste funzioni possono essere anonime o avere un nome utililizzabile per chiamate ricorsive.\n      La particolarità di questa soluzione è che permette di passare funzioni ad altre funzioni come parametro.\n    </p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n      var f;\n      var a = \"variabile\";\n      if(condizione)  f = function(a) &#123; statements_1 &#125;\n      else  f = function (a) &#123; statementss_2 &#125;\n      function doSomething(f, a)&#123;\n        return f(a);\n      &#125;\n    </code></pre>\n    <p>\n      Una funzione può essere definita dentro un'altra funzione.\n      La funzione interna è detta <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures\">closure <i class=\"fas fa-external-link-alt icon-external-link\"></i></a> ed è privata rispetto la funzione esterna, mentre quella interna eredita lo scope della funzione esterna. \n    </p>\n    <p>\n      Gli argomenti di una funzione sono memorizzati in un oggetto-array: <code>arguments[i]</code>.\n      Grazie a questo oggetto è possibile chiamare una funzione con più parametri rispetto a quelli che accetterebbe, utile se non si sa in anticipo il numero di argomenti passati.\n      I parametri possono avere un valore di default assegnato nella definizione della funzione.\n      Similmente ad arguments, si può raggruppare un numero indifinito di parametri in un array utilizzando i parametri rest: <code>...argomenti</code>.\n    </p>\n    <p>\n      Le funzioni freccia (arrow function expression) sono particolari funzioni anonime, senza this, arguments, super e new che hanno una sintassi più breve.\n      Il vantaggio di non avere un proprio this è di essere più chiaro in un contesto ad oggetti.\n      Queste funzioni hanno i parametri di input prima della freccia e l'output/codice da eseguire dopo la freccia.\n    </p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n      f(input => output);\n    </code></pre>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Espressioni e operatori</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      Ci sono operatori di diverso tipo: \n    </p>\n    <ul>\n      <li>Assegnazione</li>\n      <ul>\n        <li>Assegnazione standard ( = )</li>\n        <li>Assegnazione con operazione ( +=, *=, -=, /= )</li>\n      </ul>\n      <li>Confronto</li>\n      <ul>\n        <li>Uguaglianza ( == ) - confronta i due operandi convertendoli se non sono dello stesso tipo</li>\n        <li>Uguaglianza stretta ( === ) - confronta i due operandi senza conversione</li>\n        <li>Disuguaglianza ( !=, !== )</li>\n        <li>Maggiore e minore ( >, < )</li>\n      </ul>\n      <li>Aritmetici ( +, -, *, / )</li>\n      <li>Su bit ( &, |, ^ )</li>\n      <li>Logici ( &&, ||, ! ), valutati secondo cortocircuito, quindi:</li>\n      <ul>\n        <li>false && qualcosa -> false</li>\n        <li>true || qualcosa -> true</li>\n      </ul>\n      <li>Relazionali</li>\n      <ul>\n        <li>in - ritorna true se una proprietà è presente nell'oggetto</li>\n        <li>instanceof - ritorna true se l'oggetto è del tipo specificato</li>\n      </ul>\n      <li>Unari</li>\n      <ul>\n        <li><code>delete</code> - cancella un oggetto, un elemento di un array o la proprietà specificata di un oggetto</li>\n        <li><code>typeof</code> - ritorna il tipo dell'operando come stringa</li>\n        <li><code>void</code> - indica che un'espressione va valutata senza ritornare un valore</li>\n      </ul>\n      <li>Operatore virgola</li>\n      <li>Operatore ternario condizionale ( a ? b : c )</li>\n    </ul>\n    <p>\n      Le principali espressioni note:\n    </p>\n    <ul>\n      <li><code>this</code> - si riferisce all'oggetto corrente e si usa con <code>this.propertyName</code> o con <code>this['propertyName']</code></li>\n      <li><code>new</code> - crea un'istanza di un oggetto</li>\n      <li><code>super</code> - keyword utilizzata per chiamare funzioni del genitore</li>\n    </ul>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Numeri e date</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      I numeri in JS sono implementati in doppia precisione e non sono distinti tra integer e float. Ci sono tre valori simbolici: \n    </p>\n    <ul>\n      <li><code>+Infinity</code></li>\n      <li><code>-Infinity</code></li>\n      <li><code>NaN</code></li>\n    </ul>\n    <p>\n      L'oggetto Number ha come proprietà costanti numeriche e alcuni metodi d'utilità.\n      L'oggetto Math invece mette a disposizione costanti e funzioni matematiche.\n      Alcuni metodi utili: <code>round</code> (arrotonda), <code>fix(n)</code> (tronca a n cifre decimali).\n    </p>\n    <p>\n      Le date in JS vengono gestite tramite l'oggetto Date che mette a disposizione diversi metodi.\n    </p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Espressioni regolari</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n    <p>\n      JS mette a disposizione le espressioni regolari, che si possono creare come oggetti o come litterali.\n      In particolare, se l'espressione è nota e costante, conviene usare la forma litterale, mentre se può cambiare o arriva dall'esterno, conviene creare l'oggetto con il costruttore.\n    </p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n      var RE = /ab+c/;\n\n      var re = new RegExp('ab+c');\n    </code></pre>\n    <p>\n      L'elenco completo di caratteri speciali usati nelle espressioni regolari si trovano nella <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions\">guida <i class=\"fas fa-external-link-alt icon-external-link\"></i></a>.\n    </p>\n    <p>\n      Le espressioni regolari sono di solito utilizzate nei metodi test e exec di RegExp e nei metodi match, replace, search, e split di String.\n      Un uso tipico delle espressioni regolari è nel controllo degli input testuali.\n    </p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Array</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>\n      Un array contiene valori riferibili con un indice. Un array può venire creato in diversi modi:\n    </p>\n    <pre class=\"bg-light rounded-right mx-auto  border-info\"><code>\n      var arr = new Array(element0, element1, ..., elementN);\n      var arr = Array(element0, element1, ..., elementN);\n      var arr = [element0, element1, ..., elementN];\n    </code></pre>\n\n    <p>\n      Array ha la proprietà length che indica la sua lunghezza. Se viene assegnato un nuovo valore a length, l'array viene troncato di conseguenza.\n      Sono disponibili diversi metodi come: \n    </p>\n    <ul>\n      <li><code>concat</code> unisce due array</li>\n      <li><code>join(\" , \")</code> ritorna una stringa con gli elementi concatenati con il carattere usato come delimiter</li>\n      <li><code>push</code> aggiunge un elemento in coda e ritorna la length/li>\n      <li><code>pop</code> rimuove e ritorna l'ultimo elemento</li>\n      <li><code>shift</code> rimuove e ritorna il primo elemento</li>\n      <li><code>unshift</code> aggiunge un elemento all'inizio e ritorna la length</li>\n      <li><code>slice(start_index, end_index)</code> estrae una sezione di array</li>\n      <li><code>splice(index, n, element1, element2, ...)</code> rimuove n elementi a partire dall'indice e aggiunge nuovi elementi (opzionale)</li>\n      <li><code>reverse</code> rovescia l'array</li>\n      <li><code>sort</code> ordina gli elementi</li>\n      <li><code>indexOf(searchElement)</code> trova l'indice di searchElement</li>\n      <li><code>lastIndexOf(searchElement)</code> cerca l'indice di searchElement, ma partendo dalla fine</li>\n    </ul>\n    <p>\n      I successivi metodi sono detti iterativi perchè agiscono su tutto l'array e usano le funzioni callback:\n    </p>\n    <ul>\n      <li><code>forEach</code> esegue la callback per ogni elemento e ritorna undefined</li>\n      <li><code>map</code> ritorna un array con valori derivati dall'esecuzione della callback su ogni elemento</li>\n      <li><code>filter</code> ritorna un array con gli elementi per cui la callback ha ritornato true</li>\n      <li><code>every</code> ritorna true se la callback ritorna true per tutti gli elementi</li>\n      <li><code>some</code> ritorna true se la callback ritorna true per almeno un elemento</li>\n      <li><code>reduce</code></li>\n      <li><code>reduceRight</code></li>\n    </ul>\n\n    <p>\n      Esistono inoltre gli <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays\">array tipizzati <i class=\"fas fa-external-link-alt icon-external-link\"></i></a> che permettono di manipolare dati binari.\n    </p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Map e Set</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>\n      <code>Map</code> è un contenitore di elementi associati con una chiave univoca, iterabile secondo l'ordine di inserimento. I principali metodi sono:\n    </p>\n    <ul>\n      <li><code>set</code></li>\n      <li><code>get</code></li>\n      <li><code>has</code></li>\n      <li><code>delete</code></li>\n      <li><code>clear</code></li>\n      <li><code>size</code> (è una proprietà)</li>\n    </ul>\n    <p>\n      Rispetto agli oggetti ha alcuni vantaggi:\n    </p>\n    <ul>\n      <li>la chiave può essere qualsiasi valore nella mappa, mentre negli oggetti sono sempre stringhe</li>\n      <li>si può ottenere facilemente la grandezza della mappa</li>\n      <li>è iterabile secondo l'ordine d'inserimento</li>\n    </ul>\n    <p>\n      In sinstesi, conviene usare la <code>Map</code> quando il tipo delle chiavi è sconosciuto fino a runtime, e quando le chiavi sono dello stesso tipo e i valori sono dello stesso tipo.\n    </p>\n    <p>\n      <code>Set</code> è un contenitore di valori univoci iterabili secondo l'ordine di inserimento. I principali metodi sono:\n    </p>\n    <ul>\n      <li><code>add</code></li>\n      <li><code>has</code></li>\n      <li><code>delete</code></li>  \n      <li><code>size</code> (è una proprietà)</li>\n    </ul>\n    <p>\n      Rispetto agli array ha alcuni vantaggi:\n    </p>\n    <ul>\n      <li><code>indexOf</code> degli array è più lento del <code>has</code></li>\n      <li>è più facile cancellare un elemento dato il valore</li>\n      <li>facilita la gestione dei duplicati</li>\n      <li><code>NaN</code> non è possibile trovarlo con <code>indexOf</code></li>\n    </ul>\n\n    <p>\n      Esistono anche le alternative <code>WeakMap</code> e <code>WeakSet</code>, che accettano solo oggetti e non valori generici. \n    </p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Oggetti e il modello ad oggetti</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>\n      Un oggetto JavaScript ha proprietà associate accessibili con l'operatore <code>.</code> o  con <code>['nome_proprietà']</code>, e a differenza di altri linguaggi di programmazione è possibile aggiungere proprietà in qualsiasi momento.\n      La notazione con le quadre è molto utile quando si sa il nome della proprietà solo a runtime. Un oggetto può essere creato tramite inizializzazione o tramite il costruttore.\n      Ci sono tre modi (introdotti da ES5) per enumerare le proprietà di un oggetto:\n    </p>\n    <ul>\n      <li><code>for...in</code></li>\n      <li><code>Object.keys(obj)</code></li>\n      <li><code>Object.getOwnPropertyNames(obj)</code></li>\n    </ul>\n\n    <p>\n      Tutti gli oggetti ereditano almeno da un oggetto, detto <code>prototype</code>. Si può aggiungere una proprietà a tutti gli oggetti di un tipo già definito tramite <code>obj.prototype.new_property</code>.\n      Un oggetto può avere un metodo, ovvero una funzione assegnata ad una proprietà dell'oggetto. Una proprietà può essere rimossa con il <code>delete</code>.\n    </p>\n\n    <p>\n      Gli oggetti sono di tipo riferimento, quindi due oggetti distinti non saranno mai uguali anche se hanno le stesse proprietà. Il confronto tra oggetti risulta vero solo se confrontato con sè stesso.\n    </p>\n\n    <p>\n      JavaScript è un linguaggio orientato ai prototipi più che alle classi. La differenza sta nella distinzione tra classi ed istanze.\n      I linguaggi orientati alle classi, come C++ e Java, hanno questa distinzione, mentre JS usa semplicemente gli oggetti.\n      Un oggetto può essere usato come prototipo per la creazione di un altro oggetto che eredita in questo modo le stesse proprietà.      \n      Non esiste l'ereditarietà multipla.\n    </p>\n\n    <p>\n      JS controlla la presenza di una proprietà in 4 passaggi:\n    </p>\n    <ol>\n      <li>Controlla se la proprietà esiste localmente nell'oggetto e se presente ritorna quel valore</li>\n      <li>Se non c'è, controlla nella prototype chain</li>\n      <li>Se un oggetto della prototype chain ha la proprietà, ritorna quel valore</li>\n      <li>Se non viene trovata, l'oggetto non ha la proprietà</li>\n    </ol>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Promise</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>\n      Una <code>Promise</code> è un oggetto che rappresenta il completamento o meno di un'operazione asincrona. Di solito è un oggetto ritornato a cui si collega una callback. Esempio:\n    </p>\n    \n    <pre class=\"bg-light rounded-right mx-auto border-info\"><code>\n      functionAsync().then(successCallback, failureCallback);\n    </code></pre>\n\n    <p>\n      Il vantaggio delle callback passate con il then() è che vengono sempre eseguite, indipendentemente dal successo o l'insuccesso dell'operazione asincrona, dopo il corrente ciclo di eventi JS. \n      Un altro vantaggio è la concatenazione (chaining) di più promise, utile quando vanno eseguite più operazioni asincrone che agiscono sul risultato della precedente. Un esempio di concatenazione con le funzioni freccia (arrow function)\n      e la catch finale è il seguente:\n    </p>\n\n    <pre class=\"bg-light rounded-right mx-auto border-info\"><code>\n      doSomething()\n      .then(result => doSomethingElse(result))\n      .then(newResult => doSomethingOptional()\n        .then(optionalResult => doSomethingExtraNice(optionalResult))\n        .catch(e => &#123; console.log('Catch solo per doSomethingOptional e doSomethingExtraNice') &#125;))\n      .then(finalResult => &#123;\n        console.log(`Got the final result: $&#123;finalResult&#125;`);\n        &#125;)\n      .catch(failureCallback)\n      .then(() => &#123;\n        console.log('Do this, no matter what happened before');\n        &#125;);     \n    </code></pre>\n\n    <p>\n      con <code>catch(failureCallback)</code> che è la forma contratta per <code>then(null, failureCallback)</code>. La catch viene raggiunta in caso di eccezione in uno dei passi precedenti della catena.\n      Tuttavia il catch ha effetto solo nel suo scope e se viene innestato ignora i fallimenti esterni; può essere utile per un controllo più fine degli errori.\n      Anche dopo il catch è possibile concatenare. In una concatenazione deve sempre esserci il ritorno per le callback successive.\n    </p>\n    \n    <p>\n      Esiste un problema con le vecchie API che si aspettano ancora le callback di successo e fallimento passate nel vecchio stile. La soluzione è creare una promise attorno alla funzione problematica.\n    </p>\n\n    <p>\n      Sono disponibili alcuni metodi utili nella composizione di Promise.\n      <code>Promise.resolve()</code> e <code>Promise.reject()</code> creano promise già risolte o rifiutate, <code>Promise.all()</code> e <code>Promise.race()</code> permettono di eseguire operazioni asincrone in parallelo.\n      ES8 introduce async e await che semplifica la composizione sequenziale.\n    </p>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Iteratori e generatori</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>   \n\n    <p>\n      Un iteratore è un oggetto che definisce una sequenza e ha un possibile valore di ritorno.\n      In particolare, è un oggetto che ha un metodo <code>next()</code> che ritorna un oggetto con un due proprietà:\n      <code>value</code>, che indica il valore successivo della sequenza, e <code>done</code> che indica con un booleano se l'ultimo valore della sequenza è stato consumato.\n      L'oggetto <code>Iterator</code> è quindi iterabile con il metodo <code>next</code> e viene consumato una volta giunto all'ultimo elemento.\n    </p>\n\n    <p>\n      Per quanto utili, non sono facili da creare gli iteratori custom. Una valida alternativa sono le generator function.\n      Con la sintassi <code>function*</code> si definisce una funzione con comportamento iterativo. [...]\n    </p>\n\n    <p>\n      Un oggetto è iterabile se definisce il suo comportamento iterativo. Per fare ciò deve implementare il metodo <code>@@iterator</code>.\n    </p>\n    \n    <hr>\n    <div class=\"row\">\n      <div class=\"col-auto mr-auto\">\n        <h2 class=\"lead\">Meta programmazione</h2>\n      </div>\n      <div class=\"col-auto\">\n        <i class=\"fas fa-angle-double-up icon-go-top text-primary\" (click)=\"goTop()\"></i>\n      </div>\n    </div>\n\n    <p>\n      ES6 introduce i <code>Proxy</code> per intercettare certe operazioni che accedono a attributi o metodi di oggetti e darne un'implementazione custom. \n      L'oggetto definisce un target e un handler contenente una \"trappola\".\n      La guida elenca le <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming#Handlers_and_traps\">trappole <i class=\"fas fa-external-link-alt icon-external-link\"></i></a> disponibili.\n    </p>\n\n    <p>\n      <a href=\"https://medium.com/dailyjs/how-to-use-javascript-proxies-for-fun-and-profit-365579d4a9f8\">Articolo <i class=\"fas fa-external-link-alt icon-external-link\"></i></a> interessante sull'uso di Proxy.\n    </p>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/javascript/javascript.component.ts":
/*!****************************************************!*\
  !*** ./src/app/javascript/javascript.component.ts ***!
  \****************************************************/
/*! exports provided: JavascriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptComponent", function() { return JavascriptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JavascriptComponent = /** @class */ (function () {
    function JavascriptComponent(titleService) {
        this.titleService = titleService;
        titleService.setTitle('JavaScript - Interactive Notes');
    }
    JavascriptComponent.prototype.ngOnInit = function () {
    };
    JavascriptComponent.prototype.showTS = function () {
        var x = document.getElementsByClassName('hiddenTS');
        for (var i = 0; i < x.length; i++) {
            if (x[i]['style'].display === 'none') {
                x[i]['style'].display = 'block';
            }
            else {
                x[i]['style'].display = 'none';
            }
        }
    };
    JavascriptComponent.prototype.goTop = function () {
        $('html,body').scrollTop(0);
    };
    JavascriptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-javascript',
            template: __webpack_require__(/*! ./javascript.component.html */ "./src/app/javascript/javascript.component.html"),
            styles: [__webpack_require__(/*! ./javascript.component.css */ "./src/app/javascript/javascript.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], JavascriptComponent);
    return JavascriptComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"top\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"home\">Interactive Notes</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item mr-3 active\">\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item mr-3 active\">\n        <a class=\"nav-link\" routerLink=\"angular\">Angular <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item mr-3 active\">\n        <a class=\"nav-link\" routerLink=\"extjs\">Ext JS <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item mr-3 active\">\n        <a class=\"nav-link\" routerLink=\"ionic\">Ionic <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item mr-3 active\">\n        <a class=\"nav-link\" routerLink=\"javascript\">JavaScript <span class=\"sr-only\"></span></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(commonService) {
        this.commonService = commonService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    Thanos ha polverizzato questa pagina! Ritirati all'<a href=\"/home\">Avengers Tower</a>\n  </p>\n  <img src=\"https://www.ilprimatonazionale.it/wp-content/uploads/2018/05/thanos-avengers-1068x601.jpg\" class=\"img-fluid\"/>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/ARDbones/InteractiveNotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map