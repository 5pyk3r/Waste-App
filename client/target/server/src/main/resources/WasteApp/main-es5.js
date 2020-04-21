function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/service/data/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminComponent_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_20_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var wasteData_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.updateWaste(wasteData_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_20_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var wasteData_r16 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.deleteWaste(wasteData_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var wasteData_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wasteData_r16.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wasteData_r16.wasteType.name);
      }
    }

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(wasteService, router) {
        _classCallCheck(this, AdminComponent);

        this.wasteService = wasteService;
        this.router = router;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showWaste();
        }
      }, {
        key: "showWaste",
        value: function showWaste() {
          var _this = this;

          this.wasteService.retrieveAllWaste().subscribe(function (response) {
            console.log("Retrieve all waste for list them in admin page: ");
            console.log(response);
            _this.waste = response;
          });
        }
      }, {
        key: "deleteWaste",
        value: function deleteWaste(id) {
          var _this2 = this;

          this.wasteService.deleteWaste(id).subscribe(function (response) {
            console.log(response);
            console.log("Delete waste ".concat(id, " successful"));

            _this2.showWaste();
          });
        }
      }, {
        key: "updateWaste",
        value: function updateWaste(id) {
          this.router.navigate(['waste', id]);
        }
      }, {
        key: "createWaste",
        value: function createWaste() {
          this.router.navigate(['waste']);
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 21,
      vars: 1,
      consts: [[1, "main-container"], [1, "my-4"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lista odpad\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_4_listener() {
            return ctx.createWaste();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dodaj odpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nazwa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Typ odpadu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminComponent_tr_20_Template, 11, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.waste);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".main-container[_ngcontent-%COMP%]{\n  width: 1200px;\n  margin: 50px auto;\n}\nh2[_ngcontent-%COMP%]{\n  color: #3f51b5;\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbmgye1xuICBjb2xvcjogIzNmNTFiNTtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'WasteApp';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./routing.module */
    "./src/app/routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./service/http/http-intercepter-basic-auth.service */
    "./src/app/service/http/http-intercepter-basic-auth.service.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _waste_waste_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./waste/waste.component */
    "./src/app/waste/waste.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _waste_create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./waste/create-waste/create-waste.component */
    "./src/app/waste/create-waste/create-waste.component.ts");
    /* harmony import */


    var _waste_search_waste_search_waste_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./waste/search-waste/search-waste.component */
    "./src/app/waste/search-waste/search-waste.component.ts");
    /* harmony import */


    var _info_metals_metals_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./info/metals/metals.component */
    "./src/app/info/metals/metals.component.ts");
    /* harmony import */


    var _info_glass_glass_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./info/glass/glass.component */
    "./src/app/info/glass/glass.component.ts");
    /* harmony import */


    var _info_paper_paper_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./info/paper/paper.component */
    "./src/app/info/paper/paper.component.ts");
    /* harmony import */


    var _info_bio_bio_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./info/bio/bio.component */
    "./src/app/info/bio/bio.component.ts");
    /* harmony import */


    var _info_mixed_mixed_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./info/mixed/mixed.component */
    "./src/app/info/mixed/mixed.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_13__["HttpIntercepterBasicAuthService"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(), _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _waste_waste_component__WEBPACK_IMPORTED_MODULE_17__["WasteComponent"], _waste_create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_19__["CreateWasteComponent"], _waste_search_waste_search_waste_component__WEBPACK_IMPORTED_MODULE_20__["SearchWasteComponent"], _info_metals_metals_component__WEBPACK_IMPORTED_MODULE_21__["MetalsComponent"], _info_glass_glass_component__WEBPACK_IMPORTED_MODULE_22__["GlassComponent"], _info_paper_paper_component__WEBPACK_IMPORTED_MODULE_23__["PaperComponent"], _info_bio_bio_component__WEBPACK_IMPORTED_MODULE_24__["BioComponent"], _info_mixed_mixed_component__WEBPACK_IMPORTED_MODULE_25__["MixedComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _waste_waste_component__WEBPACK_IMPORTED_MODULE_17__["WasteComponent"], _waste_create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_19__["CreateWasteComponent"], _waste_search_waste_search_waste_component__WEBPACK_IMPORTED_MODULE_20__["SearchWasteComponent"], _info_metals_metals_component__WEBPACK_IMPORTED_MODULE_21__["MetalsComponent"], _info_glass_glass_component__WEBPACK_IMPORTED_MODULE_22__["GlassComponent"], _info_paper_paper_component__WEBPACK_IMPORTED_MODULE_23__["PaperComponent"], _info_bio_bio_component__WEBPACK_IMPORTED_MODULE_24__["BioComponent"], _info_mixed_mixed_component__WEBPACK_IMPORTED_MODULE_25__["MixedComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(), _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_13__["HttpIntercepterBasicAuthService"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 5,
      vars: 0,
      consts: [[2, "color", "red"], ["routerLink", "/home"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Taka strona nie istnieje!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wro\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      consts: [[1, "footer"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nRecycleBin Company copyright @2020\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%]{\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3f51b5;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/service/data/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nie znaleziono takiego odpadu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, dataService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.dataService = dataService;
        this.error = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchWaste",
        value: function searchWaste() {
          var _this3 = this;

          this.dataService.findByNameExists(this.name).subscribe(function (data) {
            _this3.exists = data;
            console.log("this.exists in isExists" + _this3.exists);

            if (_this3.exists === true) {
              _this3.router.navigate(['search', _this3.name]);
            } else {
              _this3.error = true;
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 41,
      vars: 2,
      consts: [[1, "main-container"], [1, "alert-login-container"], ["class", "alert alert-warning", "role", "alert", "style", "color: red", 4, "ngIf"], [3, "ngSubmit"], [1, "search-container"], [2, "color", "#3f51b5"], [1, "input-group", "input-group-lg"], ["type", "text", "name", "name", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "SZUKAJ...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-prepend"], ["type", "submit", 1, "btn", "btn-success"], [1, "fa", "fa-search"], [1, "waste-blocks-container"], ["routerLink", "/metals", 1, "btn", "waste-container", 2, "background-color", "#f8c605"], ["routerLink", "/glass", 1, "btn", "waste-container", 2, "background-color", "#86ba3e"], [2, "text-align", "center"], ["routerLink", "/paper", 1, "btn", "waste-container", 2, "background-color", "#36aadd"], ["routerLink", "/bio", 1, "btn", "waste-container", 2, "background-color", "#aa7436"], ["routerLink", "/mixed", 1, "btn", "waste-container", 2, "background-color", "#7792b0"], ["role", "alert", 1, "alert", "alert-warning", 2, "color", "red"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_3_listener() {
            return ctx.searchWaste();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wyszukaj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "METALE I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "TWORZYWA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SZTUCZNE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SZK\u0141O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PAPIER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "BIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ZMIESZANE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".main-container[_ngcontent-%COMP%]{\n  width: 1200px;\n  margin: auto;\n  height: 1000px;\n}\n.search-container[_ngcontent-%COMP%]{\n  width: 600px;\n  margin: 50px auto;\n  height: 200px;\n}\n.waste-blocks-container[_ngcontent-%COMP%]{\n  margin: auto;\n  height: 200px;\n  display: flex;\n}\n.waste-container[_ngcontent-%COMP%]{\n  padding: 25px;\n  \n  transition: transform .2s; \n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  text-align: center;\n  vertical-align: middle;\n }\n.waste-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n}\n.zoom[_ngcontent-%COMP%] {\n  padding: 50px;\n  background-color: green;\n  transition: transform .2s; \n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n}\nh2[_ngcontent-%COMP%]{\n  font-size: x-large;\n  color: white;\n  font-family: \"Bahnschrift\";\n}\nh1[_ngcontent-%COMP%]{\n  font-size: xx-large;\n  color: white;\n  font-family: \"Bahnschrift\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix5QkFBeUIsRUFBRSxjQUFjO0VBQ3pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUIsRUFBRSxjQUFjO0VBQ3pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAwcHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lcntcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi53YXN0ZS1ibG9ja3MtY29udGFpbmVye1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2FzdGUtY29udGFpbmVye1xuICBwYWRkaW5nOiAyNXB4O1xuICAvKmJhY2tncm91bmQtY29sb3I6IGdyZWVuOyovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gfVxuLndhc3RlLWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbn1cbi56b29tIHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaDJ7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJCYWhuc2NocmlmdFwiO1xufVxuaDF7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQmFobnNjaHJpZnRcIjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/bio/bio.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/info/bio/bio.component.ts ***!
    \*******************************************/

  /*! exports provided: BioComponent */

  /***/
  function srcAppInfoBioBioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BioComponent", function () {
      return BioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BioComponent =
    /*#__PURE__*/
    function () {
      function BioComponent() {
        _classCallCheck(this, BioComponent);
      }

      _createClass(BioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BioComponent;
    }();

    BioComponent.ɵfac = function BioComponent_Factory(t) {
      return new (t || BioComponent)();
    };

    BioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BioComponent,
      selectors: [["app-bio"]],
      decls: 1,
      vars: 0,
      consts: [["src", "https://n-16-3.dcs.redcdn.pl/file/o2/tvn/web-content/m/orig/p121/i/11108a3dbfe4636cb40b84b803b2fff6/57177219-8491-407a-ae48-42364d7200fc.png"]],
      template: function BioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vYmlvL2Jpby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bio',
          templateUrl: './bio.component.html',
          styleUrls: ['./bio.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/glass/glass.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/info/glass/glass.component.ts ***!
    \***********************************************/

  /*! exports provided: GlassComponent */

  /***/
  function srcAppInfoGlassGlassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlassComponent", function () {
      return GlassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlassComponent =
    /*#__PURE__*/
    function () {
      function GlassComponent() {
        _classCallCheck(this, GlassComponent);
      }

      _createClass(GlassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GlassComponent;
    }();

    GlassComponent.ɵfac = function GlassComponent_Factory(t) {
      return new (t || GlassComponent)();
    };

    GlassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlassComponent,
      selectors: [["app-glass"]],
      decls: 1,
      vars: 0,
      consts: [["src", "https://n-16-1.dcs.redcdn.pl/file/o2/tvn/web-content/m/orig/p121/i/11108a3dbfe4636cb40b84b803b2fff6/3cf7efd0-bc87-463e-92b7-7d3718d0572b.png"]],
      template: function GlassComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vZ2xhc3MvZ2xhc3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-glass',
          templateUrl: './glass.component.html',
          styleUrls: ['./glass.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/metals/metals.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/info/metals/metals.component.ts ***!
    \*************************************************/

  /*! exports provided: MetalsComponent */

  /***/
  function srcAppInfoMetalsMetalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetalsComponent", function () {
      return MetalsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MetalsComponent =
    /*#__PURE__*/
    function () {
      function MetalsComponent() {
        _classCallCheck(this, MetalsComponent);
      }

      _createClass(MetalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MetalsComponent;
    }();

    MetalsComponent.ɵfac = function MetalsComponent_Factory(t) {
      return new (t || MetalsComponent)();
    };

    MetalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MetalsComponent,
      selectors: [["app-metals"]],
      decls: 1,
      vars: 0,
      consts: [["src", "https://n-16-7.dcs.redcdn.pl/file/o2/tvn/web-content/m/orig/p121/i/11108a3dbfe4636cb40b84b803b2fff6/7c91d252-3b65-4540-8bb9-93e78298c5dd.png"]],
      template: function MetalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vbWV0YWxzL21ldGFscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-metals',
          templateUrl: './metals.component.html',
          styleUrls: ['./metals.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/mixed/mixed.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/info/mixed/mixed.component.ts ***!
    \***********************************************/

  /*! exports provided: MixedComponent */

  /***/
  function srcAppInfoMixedMixedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MixedComponent", function () {
      return MixedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MixedComponent =
    /*#__PURE__*/
    function () {
      function MixedComponent() {
        _classCallCheck(this, MixedComponent);
      }

      _createClass(MixedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MixedComponent;
    }();

    MixedComponent.ɵfac = function MixedComponent_Factory(t) {
      return new (t || MixedComponent)();
    };

    MixedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MixedComponent,
      selectors: [["app-mixed"]],
      decls: 1,
      vars: 0,
      consts: [["src", "https://n-16-3.dcs.redcdn.pl/file/o2/tvn/web-content/m/orig/p121/i/11108a3dbfe4636cb40b84b803b2fff6/acc2aad5-f86a-4a4d-b846-39727b787289.png"]],
      template: function MixedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vbWl4ZWQvbWl4ZWQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MixedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mixed',
          templateUrl: './mixed.component.html',
          styleUrls: ['./mixed.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/paper/paper.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/info/paper/paper.component.ts ***!
    \***********************************************/

  /*! exports provided: PaperComponent */

  /***/
  function srcAppInfoPaperPaperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaperComponent", function () {
      return PaperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaperComponent =
    /*#__PURE__*/
    function () {
      function PaperComponent() {
        _classCallCheck(this, PaperComponent);
      }

      _createClass(PaperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaperComponent;
    }();

    PaperComponent.ɵfac = function PaperComponent_Factory(t) {
      return new (t || PaperComponent)();
    };

    PaperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaperComponent,
      selectors: [["app-paper"]],
      decls: 1,
      vars: 0,
      consts: [["src", "https://n-16-5.dcs.redcdn.pl/file/o2/tvn/web-content/m/orig/p121/i/11108a3dbfe4636cb40b84b803b2fff6/d03e8703-edb1-4194-9ed7-f7e927ffd2e3.png"]],
      template: function PaperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vcGFwZXIvcGFwZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-paper',
          templateUrl: './paper.component.html',
          styleUrls: ['./paper.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/hardcoded-authentication.service */
    "./src/app/service/hardcoded-authentication.service.ts");
    /* harmony import */


    var _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/basic-authentication.service */
    "./src/app/service/basic-authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loginErrorMessage);
      }
    }

    function LoginComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.alreadyLoggedErrorMessage);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, hardcodedAuthService, basicAuthenticationService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.hardcodedAuthService = hardcodedAuthService;
        this.basicAuthenticationService = basicAuthenticationService; // two way binding with ngModel in login.html

        this.username = '';
        this.password = '';
        this.showLoginError = false;
        this.loginErrorMessage = 'Nieprawidłowy login lub hasło. Zaloguj się ponownie.';
        this.showAlreadyLoggedError = false;
        this.alreadyLoggedErrorMessage = 'Błąd! Jesteś już zalogowany! ';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
            this.router.navigate(['admin']);
            this.showLoginError = false;
          } else {
            this.showLoginError = true;
          }
        }
      }, {
        key: "basicAuthLogin",
        value: function basicAuthLogin() {
          var _this4 = this;

          if (this.basicAuthenticationService.isUserLoggedIn()) {
            this.showAlreadyLoggedError = true;
            setTimeout(function () {
              _this4.router.navigate(['admin']);
            }, 1500);
          } else {
            this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(function (data) {
              console.log(data);

              _this4.router.navigate(['admin']);

              _this4.showLoginError = false;
            }, function (error) {
              console.log(error);
              _this4.showLoginError = true;
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__["BasicAuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 15,
      vars: 4,
      consts: [[1, "alert-login-container"], ["class", "alert alert-warning", "role", "alert", "style", "color: red", 4, "ngIf"], [1, "loginForm-container"], [1, "form-group"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", 2, "color", "red"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() {
            return ctx.basicAuthLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Zaloguj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoginError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAlreadyLoggedError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".alert-login-container[_ngcontent-%COMP%]{\n  width: 60%;\n  margin: 50px auto;\n  text-align: center ;\n}\n.loginForm-container[_ngcontent-%COMP%]{\n  width: 300px;\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hbGVydC1sb2dpbi1jb250YWluZXJ7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xufVxuLmxvZ2luRm9ybS1jb250YWluZXJ7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cblxuXG5cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]
        }, {
          type: _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__["BasicAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/logout/logout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/logout/logout.component.ts ***!
    \********************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/hardcoded-authentication.service */
    "./src/app/service/hardcoded-authentication.service.ts");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(router, hardcodedAuthService) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
        this.hardcodedAuthService = hardcodedAuthService;
        this.logoutMessage = 'Zostałeś wylogowany i za chwilę zostaniesz automatycznie przekierowany na stronę głowną.';
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          //delete user from session
          this.hardcodedAuthService.logout(); //after 2 seconds redirecting to home page

          setTimeout(function () {
            _this5.router.navigate(['/']);
          }, 1500);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]));
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 3,
      vars: 1,
      consts: [[1, "alert-logout-container"], ["role", "alert", 1, "alert", "alert-warning", 2, "color", "red"]],
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logoutMessage);
        }
      },
      styles: [".alert-logout-container[_ngcontent-%COMP%]{\n  width: 60%;\n  margin: 50px auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtbG9nb3V0LWNvbnRhaW5lcntcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logout',
          templateUrl: './logout.component.html',
          styleUrls: ['./logout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/hardcoded-authentication.service */
    "./src/app/service/hardcoded-authentication.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zaloguj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wyloguj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(hardcodedAuthService) {
        _classCallCheck(this, MenuComponent);

        this.hardcodedAuthService = hardcodedAuthService;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 13,
      vars: 3,
      consts: [["color", "primary"], [1, "spacer2"], ["routerLink", "/"], [1, "text-white"], ["routerLink", "/admin", 4, "ngIf"], [1, "spacer"], ["routerLink", "/login", 4, "ngIf"], ["routerLink", "/logout", 4, "ngIf"], ["routerLink", "/admin"], ["routerLink", "/login"], ["routerLink", "/logout"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WasteApp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_a_7_Template, 3, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_a_10_Template, 3, 0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuComponent_a_12_Template, 3, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hardcodedAuthService.isUserLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hardcodedAuthService.isUserLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hardcodedAuthService.isUserLoggedIn());
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.spacer2[_ngcontent-%COMP%]{\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zcGFjZXIye1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routing.module.ts":
  /*!***********************************!*\
    !*** ./src/app/routing.module.ts ***!
    \***********************************/

  /*! exports provided: RoutingModule */

  /***/
  function srcAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
      return RoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");
    /* harmony import */


    var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/route-guard.service */
    "./src/app/service/route-guard.service.ts");
    /* harmony import */


    var _waste_waste_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./waste/waste.component */
    "./src/app/waste/waste.component.ts");
    /* harmony import */


    var _waste_create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./waste/create-waste/create-waste.component */
    "./src/app/waste/create-waste/create-waste.component.ts");
    /* harmony import */


    var _waste_search_waste_search_waste_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./waste/search-waste/search-waste.component */
    "./src/app/waste/search-waste/search-waste.component.ts");
    /* harmony import */


    var _info_metals_metals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./info/metals/metals.component */
    "./src/app/info/metals/metals.component.ts");
    /* harmony import */


    var _info_glass_glass_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./info/glass/glass.component */
    "./src/app/info/glass/glass.component.ts");
    /* harmony import */


    var _info_mixed_mixed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./info/mixed/mixed.component */
    "./src/app/info/mixed/mixed.component.ts");
    /* harmony import */


    var _info_bio_bio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./info/bio/bio.component */
    "./src/app/info/bio/bio.component.ts");
    /* harmony import */


    var _info_paper_paper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./info/paper/paper.component */
    "./src/app/info/paper/paper.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
      canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]]
    }, {
      path: 'logout',
      component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
      canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]]
    }, {
      path: 'waste',
      component: _waste_create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_9__["CreateWasteComponent"],
      canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]]
    }, {
      path: 'waste/:id',
      component: _waste_waste_component__WEBPACK_IMPORTED_MODULE_8__["WasteComponent"],
      canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]]
    }, {
      path: 'search/:name',
      component: _waste_search_waste_search_waste_component__WEBPACK_IMPORTED_MODULE_10__["SearchWasteComponent"]
    }, {
      path: 'metals',
      component: _info_metals_metals_component__WEBPACK_IMPORTED_MODULE_11__["MetalsComponent"]
    }, {
      path: 'glass',
      component: _info_glass_glass_component__WEBPACK_IMPORTED_MODULE_12__["GlassComponent"]
    }, {
      path: 'bio',
      component: _info_bio_bio_component__WEBPACK_IMPORTED_MODULE_14__["BioComponent"]
    }, {
      path: 'mixed',
      component: _info_mixed_mixed_component__WEBPACK_IMPORTED_MODULE_13__["MixedComponent"]
    }, {
      path: 'paper',
      component: _info_paper_paper_component__WEBPACK_IMPORTED_MODULE_15__["PaperComponent"]
    }, {
      path: 'error',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    }];

    var RoutingModule = function RoutingModule() {
      _classCallCheck(this, RoutingModule);
    };

    RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RoutingModule
    });
    RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RoutingModule_Factory(t) {
        return new (t || RoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/basic-authentication.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/service/basic-authentication.service.ts ***!
    \*********************************************************/

  /*! exports provided: BasicAuthenticationService, AuthenticationBean */

  /***/
  function srcAppServiceBasicAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAuthenticationService", function () {
      return BasicAuthenticationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationBean", function () {
      return AuthenticationBean;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BasicAuthenticationService =
    /*#__PURE__*/
    function () {
      function BasicAuthenticationService(http) {
        _classCallCheck(this, BasicAuthenticationService);

        this.http = http;
      } // authenticate(username, password) {
      //   if (username === 'admin' && password === 'admin') {
      //     //Session Storage items:   key   /  value
      //     sessionStorage.setItem('authUser', username);
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
      // isUserLoggedIn() {
      //   let user = sessionStorage.getItem('authUser');
      //   if(user === null) {
      //     return false;
      //   }else {
      //     return true;
      //   }
      // }


      _createClass(BasicAuthenticationService, [{
        key: "executeAuthenticationService",
        value: function executeAuthenticationService(username, password) {
          var basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: basicAuthHeaderString
          });
          return this.http.get("/basicauth", {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            sessionStorage.setItem('authUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }));
        }
      }, {
        key: "getAuthenticatedUser",
        value: function getAuthenticatedUser() {
          return sessionStorage.getItem('authUser');
        }
      }, {
        key: "getAuthenticatedToken",
        value: function getAuthenticatedToken() {
          if (this.getAuthenticatedUser()) return sessionStorage.getItem('token');
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('authUser');
          return !(user === null);
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem('authUser');
          sessionStorage.removeItem('token');
        }
      }]);

      return BasicAuthenticationService;
    }();

    BasicAuthenticationService.ɵfac = function BasicAuthenticationService_Factory(t) {
      return new (t || BasicAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BasicAuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BasicAuthenticationService,
      factory: BasicAuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicAuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    var AuthenticationBean = function AuthenticationBean(message) {
      _classCallCheck(this, AuthenticationBean);

      this.message = message;
    };
    /***/

  },

  /***/
  "./src/app/service/data/data.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/data/data.service.ts ***!
    \**********************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServiceDataDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
      }

      _createClass(DataService, [{
        key: "createWaste",
        value: function createWaste(waste) {
          return this.http.post("/admin/waste", waste);
        }
      }, {
        key: "updateWaste",
        value: function updateWaste(id, waste) {
          return this.http.put("/admin/waste/".concat(id), waste);
        }
      }, {
        key: "retrieveAllWaste",
        value: function retrieveAllWaste() {
          return this.http.get("/admin/waste");
        }
      }, {
        key: "retrieveWasteById",
        value: function retrieveWasteById(id) {
          return this.http.get("/admin/wasteById/".concat(id));
        }
      }, {
        key: "deleteWaste",
        value: function deleteWaste(id) {
          return this.http["delete"]("/admin/waste/".concat(id));
        }
      }, {
        key: "retrieveAllWasteTypes",
        value: function retrieveAllWasteTypes() {
          return this.http.get("/admin/wasteTypes");
        }
      }, {
        key: "findByName",
        value: function findByName(name) {
          return this.http.get("/search/".concat(name));
        }
      }, {
        key: "findByNameExists",
        value: function findByNameExists(name) {
          return this.http.get("/exists/".concat(name));
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/hardcoded-authentication.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/service/hardcoded-authentication.service.ts ***!
    \*************************************************************/

  /*! exports provided: HardcodedAuthenticationService */

  /***/
  function srcAppServiceHardcodedAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function () {
      return HardcodedAuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HardcodedAuthenticationService =
    /*#__PURE__*/
    function () {
      function HardcodedAuthenticationService(router) {
        _classCallCheck(this, HardcodedAuthenticationService);

        this.router = router;
      }

      _createClass(HardcodedAuthenticationService, [{
        key: "authenticate",
        value: function authenticate(username, password) {
          if (username === 'admin' && password === 'admin') {
            // Session Storage items:   key   /  value
            sessionStorage.setItem('authUser', username);
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('authUser');

          if (user === null) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem('authUser');
        }
      }]);

      return HardcodedAuthenticationService;
    }();

    HardcodedAuthenticationService.ɵfac = function HardcodedAuthenticationService_Factory(t) {
      return new (t || HardcodedAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HardcodedAuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HardcodedAuthenticationService,
      factory: HardcodedAuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HardcodedAuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/http/http-intercepter-basic-auth.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/service/http/http-intercepter-basic-auth.service.ts ***!
    \*********************************************************************/

  /*! exports provided: HttpIntercepterBasicAuthService */

  /***/
  function srcAppServiceHttpHttpIntercepterBasicAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpIntercepterBasicAuthService", function () {
      return HttpIntercepterBasicAuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../basic-authentication.service */
    "./src/app/service/basic-authentication.service.ts");

    var HttpIntercepterBasicAuthService =
    /*#__PURE__*/
    function () {
      function HttpIntercepterBasicAuthService(basicAuthenticationService) {
        _classCallCheck(this, HttpIntercepterBasicAuthService);

        this.basicAuthenticationService = basicAuthenticationService;
      }

      _createClass(HttpIntercepterBasicAuthService, [{
        key: "intercept",
        value: function intercept(request, next) {
          // let username = ' ';
          // let password = ' ';
          // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
          var basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
          var username = this.basicAuthenticationService.getAuthenticatedUser();

          if (basicAuthHeaderString && username) {
            request = request.clone({
              setHeaders: {
                Authorization: basicAuthHeaderString
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return HttpIntercepterBasicAuthService;
    }();

    HttpIntercepterBasicAuthService.ɵfac = function HttpIntercepterBasicAuthService_Factory(t) {
      return new (t || HttpIntercepterBasicAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__["BasicAuthenticationService"]));
    };

    HttpIntercepterBasicAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpIntercepterBasicAuthService,
      factory: HttpIntercepterBasicAuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpIntercepterBasicAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__["BasicAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/route-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/service/route-guard.service.ts ***!
    \************************************************/

  /*! exports provided: RouteGuardService */

  /***/
  function srcAppServiceRouteGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteGuardService", function () {
      return RouteGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./hardcoded-authentication.service */
    "./src/app/service/hardcoded-authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RouteGuardService =
    /*#__PURE__*/
    function () {
      function RouteGuardService(hardcodedAuthService, router) {
        _classCallCheck(this, RouteGuardService);

        this.hardcodedAuthService = hardcodedAuthService;
        this.router = router;
      }

      _createClass(RouteGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.hardcodedAuthService.isUserLoggedIn()) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        }
      }]);

      return RouteGuardService;
    }();

    RouteGuardService.ɵfac = function RouteGuardService_Factory(t) {
      return new (t || RouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RouteGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RouteGuardService,
      factory: RouteGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/waste/create-waste/create-waste.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/waste/create-waste/create-waste.component.ts ***!
    \**************************************************************/

  /*! exports provided: wasteType, CreateWasteComponent */

  /***/
  function srcAppWasteCreateWasteCreateWasteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wasteType", function () {
      return wasteType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateWasteComponent", function () {
      return CreateWasteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/data/data.service */
    "./src/app/service/data/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CreateWasteComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Taki odpad ju\u017C istnieje");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateWasteComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nazwa musi mie\u0107 conajmniej 3 litery");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateWasteComponent_mat_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var wasteType_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", wasteType_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wasteType_r9.name, " ");
      }
    }

    var wasteType = {
      id: null,
      name: ''
    }; // export const waste: Waste = {
    //   id: null,
    //   name: '',
    //   wasteType
    // };

    var CreateWasteComponent =
    /*#__PURE__*/
    function () {
      function CreateWasteComponent(dataService, router) {
        _classCallCheck(this, CreateWasteComponent);

        this.dataService = dataService;
        this.router = router;
        this.waste = {
          id: null,
          name: name,
          wasteType: wasteType
        };
        this.wasteError = false;
      }

      _createClass(CreateWasteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllWasteTypes();
        }
      }, {
        key: "saveWaste",
        value: function saveWaste() {
          var _this6 = this;

          this.dataService.findByNameExists(this.waste.name).subscribe(function (data) {
            _this6.isAlreadyExist = data;
            console.log("this.exists in isExists" + _this6.isAlreadyExist);

            if (_this6.isAlreadyExist === true) {
              _this6.wasteError = true;
            } else {
              _this6.dataService.createWaste(_this6.waste).subscribe(function (data) {
                return console.log('Created waste with data: ' + data);
              });

              _this6.router.navigate(['admin']);
            }
          });
        }
      }, {
        key: "getAllWasteTypes",
        value: function getAllWasteTypes() {
          var _this7 = this;

          this.dataService.retrieveAllWasteTypes().subscribe(function (data) {
            console.log('method getAllWastesTypes called');
            console.log(data);
            _this7.wasteTypes = data;
          });
        }
      }]);

      return CreateWasteComponent;
    }();

    CreateWasteComponent.ɵfac = function CreateWasteComponent_Factory(t) {
      return new (t || CreateWasteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CreateWasteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateWasteComponent,
      selectors: [["app-create-waste"]],
      decls: 24,
      vars: 5,
      consts: [[1, "main-container"], [1, "alert-login-container"], ["class", "alert alert-warning", "role", "alert", "style", "color: red", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "required", "", "minlength", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["name", "type", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", 2, "color", "red"], [3, "value"]],
      template: function CreateWasteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateWasteComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateWasteComponent_div_3_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nazwa odpadu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateWasteComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.waste.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wybierz typ odpadu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateWasteComponent_Template_mat_select_valueChange_18_listener($event) {
            return ctx.waste.wasteType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateWasteComponent_mat_option_19_Template, 2, 2, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateWasteComponent_Template_button_click_22_listener() {
            return ctx.saveWaste();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dodaj odpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAlreadyExist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.waste.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.waste.wasteType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wasteTypes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
      styles: [".main-container[_ngcontent-%COMP%]{\n  width: 600px;\n  margin: 50px auto;\n}\n.mat-select[_ngcontent-%COMP%]{\n  width: 600px;\n}\n.alert-login-container[_ngcontent-%COMP%]{\n  width: 60%;\n  margin: 50px auto;\n  text-align: center ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FzdGUvY3JlYXRlLXdhc3RlL2NyZWF0ZS13YXN0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dhc3RlL2NyZWF0ZS13YXN0ZS9jcmVhdGUtd2FzdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbi5tYXQtc2VsZWN0e1xuICB3aWR0aDogNjAwcHg7XG59XG4uYWxlcnQtbG9naW4tY29udGFpbmVye1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyIDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateWasteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-waste',
          templateUrl: './create-waste.component.html',
          styleUrls: ['./create-waste.component.css']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/waste/search-waste/search-waste.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/waste/search-waste/search-waste.component.ts ***!
    \**************************************************************/

  /*! exports provided: SearchWasteComponent */

  /***/
  function srcAppWasteSearchWasteSearchWasteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchWasteComponent", function () {
      return SearchWasteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../create-waste/create-waste.component */
    "./src/app/waste/create-waste/create-waste.component.ts");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/data/data.service */
    "./src/app/service/data/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SearchWasteComponent =
    /*#__PURE__*/
    function () {
      function SearchWasteComponent(dataService, route) {
        _classCallCheck(this, SearchWasteComponent);

        this.dataService = dataService;
        this.route = route;
        this.waste = {
          id: null,
          name: name,
          wasteType: _create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_1__["wasteType"]
        };
      }

      _createClass(SearchWasteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passedName = this.route.snapshot.params.name;
          this.findWaste();
        }
      }, {
        key: "findWaste",
        value: function findWaste() {
          var _this8 = this;

          this.dataService.findByName(this.passedName).subscribe(function (value) {
            _this8.waste = value;
          });
        }
      }]);

      return SearchWasteComponent;
    }();

    SearchWasteComponent.ɵfac = function SearchWasteComponent_Factory(t) {
      return new (t || SearchWasteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    SearchWasteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchWasteComponent,
      selectors: [["app-search-waste"]],
      decls: 11,
      vars: 2,
      consts: [[1, "main-container"], ["type", "submit", "routerLink", "/", 1, "btn", "btn-success"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"]],
      template: function SearchWasteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "nale\u017Cy umie\u015Bci\u0107 w pojemniku:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Wr\xF3\u0107 do wyszukiwania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Odpad: ", ctx.waste.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.waste.wasteType.name, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".main-container[_ngcontent-%COMP%]{\n  width: 600px;\n  margin: 50px auto;\n\n}\nh1[_ngcontent-%COMP%]{\n  font-size: xx-large;\n  color: #3f51b5;\n  font-family: \"Bahnschrift\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FzdGUvc2VhcmNoLXdhc3RlL3NlYXJjaC13YXN0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvd2FzdGUvc2VhcmNoLXdhc3RlL3NlYXJjaC13YXN0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuXG59XG5oMXtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIGZvbnQtZmFtaWx5OiBcIkJhaG5zY2hyaWZ0XCI7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchWasteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-waste',
          templateUrl: './search-waste.component.html',
          styleUrls: ['./search-waste.component.css']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/waste/waste.component.ts":
  /*!******************************************!*\
    !*** ./src/app/waste/waste.component.ts ***!
    \******************************************/

  /*! exports provided: Waste, WasteType, WasteComponent */

  /***/
  function srcAppWasteWasteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Waste", function () {
      return Waste;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WasteType", function () {
      return WasteType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WasteComponent", function () {
      return WasteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./create-waste/create-waste.component */
    "./src/app/waste/create-waste/create-waste.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/service/data/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function WasteComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nazwa musi mie\u0107 conajmniej 3 litery");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WasteComponent_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var wasteType_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", wasteType_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wasteType_r13.name, " ");
      }
    }

    var Waste = function Waste(id, name, wasteType) {
      _classCallCheck(this, Waste);

      this.id = id;
      this.name = name;
      this.wasteType = wasteType;
    };

    var WasteType = function WasteType(id, name) {
      _classCallCheck(this, WasteType);

      this.id = id;
      this.name = name;
    };

    var WasteComponent =
    /*#__PURE__*/
    function () {
      function WasteComponent(router, wasteService, activatedRoute) {
        _classCallCheck(this, WasteComponent);

        this.router = router;
        this.wasteService = wasteService;
        this.activatedRoute = activatedRoute;
        this.waste = {
          id: this.id,
          name: name,
          wasteType: _create_waste_create_waste_component__WEBPACK_IMPORTED_MODULE_1__["wasteType"]
        };
        this.error = false;
      }

      _createClass(WasteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // getting specific id of chosen in admin page Waste
          this.id = this.activatedRoute.snapshot.params.id;
          console.log('Waste id: ' + this.id); // retriving data from database of a waste of specific id

          if (this.id != null) {
            this.getWasteById();
          }

          this.getAllWasteTypes();
          console.log('wasteTypes in wasteComponent: ' + this.wasteTypes);
        }
      }, {
        key: "getWasteById",
        value: function getWasteById() {
          var _this9 = this;

          this.wasteService.retrieveWasteById(this.id).subscribe(function (response) {
            console.log(response);
            _this9.waste = response;
          });
        }
      }, {
        key: "getAllWasteTypes",
        value: function getAllWasteTypes() {
          var _this10 = this;

          this.wasteService.retrieveAllWasteTypes().subscribe(function (data) {
            console.log('method getAllWastesTypes called');
            console.log(data);
            _this10.wasteTypes = data;
          });
        }
      }, {
        key: "updateWaste",
        value: function updateWaste() {
          this.wasteService.updateWaste(this.waste.id, this.waste).subscribe(function (data) {
            return console.log('Created waste with data: ' + data);
          });
          this.router.navigate(['admin']);
        }
      }]);

      return WasteComponent;
    }();

    WasteComponent.ɵfac = function WasteComponent_Factory(t) {
      return new (t || WasteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    WasteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WasteComponent,
      selectors: [["app-waste"]],
      decls: 23,
      vars: 5,
      consts: [[1, "main-container"], [3, "ngSubmit"], [1, "alert-login-container"], ["class", "alert alert-warning", "role", "alert", "style", "color: red", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "wasteName", "id", "name", "required", "", "minlength", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["name", "type", 3, "placeholder", "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary"], ["role", "alert", 1, "alert", "alert-warning", 2, "color", "red"], [3, "value"]],
      template: function WasteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WasteComponent_Template_form_ngSubmit_1_listener() {
            return ctx.updateWaste();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WasteComponent_div_3_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nazwa odpadu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WasteComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.waste.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wybierz typ odpadu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function WasteComponent_Template_mat_select_valueChange_17_listener($event) {
            return ctx.waste.wasteType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WasteComponent_mat_option_18_Template, 2, 2, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Update waste");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.waste.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.waste.wasteType.name)("value", ctx.waste.wasteType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wasteTypes);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      styles: [".main-container[_ngcontent-%COMP%]{\n  width: 600px;\n  margin: 50px auto;\n}\n\n.mat-select[_ngcontent-%COMP%]{\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FzdGUvd2FzdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC93YXN0ZS93YXN0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4ubWF0LXNlbGVjdHtcbiAgd2lkdGg6IDYwMHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WasteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-waste',
          templateUrl: './waste.component.html',
          styleUrls: ['./waste.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! M:\Pulpit\waste2\WasteApp-master\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map