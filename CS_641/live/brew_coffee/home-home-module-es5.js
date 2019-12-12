(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Brew Coffee\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"coffee_card\">\n    <h3>Coffee Intensity</h3>\n\n    <h4>{{this.coffeeIntensity[coffeeSliderValue]}}</h4>\n    <ion-range\n      name=\"coffee_intensity\"\n      min=\"0\"\n      max=\"18\"\n      step=\"1\"\n      pin=\"true\"\n      ionChange=\"handleCoffeeIntensityRange($event)\"\n      value=\"0\"\n      [(ngModel)]=\"coffeeSliderValue\"\n      color=\"kautilya\"\n    >\n      <ion-icon size=\"small\" slot=\"start\" name=\"cafe\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"wine\"></ion-icon>\n    </ion-range>\n  </ion-card>\n\n  <ion-card class=\"people_card\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"12\">\n          <h3>Select total Brew</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button (click)=\"subtract()\" class=\"counter_button\">\n            <ion-icon class=\"counter_icon\" slot=\"icon-only\" name=\"remove\"\n              >Subtraction\n            </ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n          <span class=\"peopleCountLabel\"> {{ this.peopleCount }}</span>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button (click)=\"add()\" class=\"counter_button\">\n            <ion-icon class=\"counter_icon\" slot=\"icon-only\" name=\"add\"\n              >Addition</ion-icon\n            >\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <div>\n    <ion-button (click)=\"calculate()\" class=\"coffee-btn ion-text-uppercase\"\n      >Calculate\n    </ion-button>\n  </div>\n\n  <div *ngIf=\"totalCoffee > 0\" class=\"ion-text-center\">\n    <h3>\n      Coffee Units:\n    </h3>\n    <!-- <hr /> -->\n    <ion-label> Coffee : {{ coffeeNative | number:'.2' }}tbsp </ion-label>\n    <!-- <hr /> -->\n    <br />\n    <ion-label> Water : {{ waterPeople }}ml</ion-label>\n    <!-- <br /> -->\n    <hr />\n    <ion-label>Total Brewed Coffee : {{ totalCoffee | number }}ml </ion-label>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brewC {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nh3 {\n  text-align: center;\n}\n\nh4 {\n  text-align: center;\n}\n\nion-grid {\n  display: grid;\n}\n\n.coffee_card {\n  color: #ebeb35;\n  background-color: #ee4a52;\n  box-shadow: 3px 4px 8px 5px #ce7c5c;\n}\n\n.people_card {\n  color: cyan;\n  background-color: #3880ff;\n  box-shadow: 3px 4px 8px 5px #5a88da;\n}\n\n.peopleCountLabel {\n  display: block;\n  text-align: center;\n  font-size: 6rem;\n}\n\n.counter_button {\n  display: contents;\n  color: aqua;\n}\n\n.calculate_button {\n  --background: green;\n  display: block;\n  color: red;\n}\n\nion-icon {\n  font-size: 24px;\n}\n\n.counter_icon {\n  font-size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TZW5zZWhhY0svRG9jdW1lbnRzL0dpdEh1Yi9NYXN0ZXJzX0NvbXBfU2NpZW5jZS9DU182NDEvQXNzaWdubWVudF8xMS9icmV3X2NvZmZlZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZXdDIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xufVxuXG5pb24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5jb2ZmZWVfY2FyZCB7XG4gIGNvbG9yOiByZ2IoMjM1LCAyMzUsIDUzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNGE1MjtcbiAgYm94LXNoYWRvdzogM3B4IDRweCA4cHggNXB4ICNjZTdjNWM7XG59XG5cbi5wZW9wbGVfY2FyZCB7XG4gIGNvbG9yOiBjeWFuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xuICBib3gtc2hhZG93OiAzcHggNHB4IDhweCA1cHggIzVhODhkYTtcbn1cblxuLnBlb3BsZUNvdW50TGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDZyZW07XG59XG5cbi5jb3VudGVyX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBjb2xvcjogYXF1YTtcbn1cblxuLmNhbGN1bGF0ZV9idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jb3VudGVyX2ljb24ge1xuICBmb250LXNpemU6IDY0cHg7XG59XG4iLCIuYnJld0Mge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmNvZmZlZV9jYXJkIHtcbiAgY29sb3I6ICNlYmViMzU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTRhNTI7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggOHB4IDVweCAjY2U3YzVjO1xufVxuXG4ucGVvcGxlX2NhcmQge1xuICBjb2xvcjogY3lhbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbiAgYm94LXNoYWRvdzogM3B4IDRweCA4cHggNXB4ICM1YTg4ZGE7XG59XG5cbi5wZW9wbGVDb3VudExhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2cmVtO1xufVxuXG4uY291bnRlcl9idXR0b24ge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgY29sb3I6IGFxdWE7XG59XG5cbi5jYWxjdWxhdGVfYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uY291bnRlcl9pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_brew_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/brew-settings.service */ "./src/app/services/brew-settings.service.ts");



var HomePage = /** @class */ (function () {
    function HomePage(brewSettings) {
        // if (this.brewSettings.getFirstLaunch())
        // this.brewSettings.setFirstLaunch();
        this.brewSettings = brewSettings;
        // Variables declared
        this.coffeeIntensity = [
            'I\'m a baby',
            'Still drinks milk!',
            'DeCaf',
            'Elementary',
            '1:1 Coffee Milk',
            'School',
            'I was born ready',
            'High School',
            'Christmas break',
            'Graduation',
            'Post Graduation',
            'Stress',
            'Hybrid Web Dev',
            'Coding',
            'CEO Material',
            'Black coffee',
            'Alcohol + Hangover',
            'Drugs + Caffeine',
            'All-nighter'
        ];
        this.peopleCount = 0;
        this.coffeeSliderValue = 0;
        this.coffeeNative = 0;
        this.waterPeople = 0;
        this.totalCoffee = 0;
        // Calling Initialize function
        this.brewSettings.initialize();
    }
    HomePage.prototype.subtract = function () {
        this.peopleCount -= 1;
    };
    HomePage.prototype.add = function () {
        this.peopleCount += 1;
    };
    HomePage.prototype.handleCoffeeIntensityRange = function (value) {
        console.log('Hi hello');
        console.log('The value returned is : ', value);
    };
    HomePage.prototype.calculate = function () {
        console.log('The values are given as ', this.coffeeIntensity[this.coffeeSliderValue], this.peopleCount);
        console.log('Great Choice of coffee');
        this.coffeeNative = this.coffeeSliderValue * 0.30;
        this.waterPeople = this.peopleCount * 150;
        this.totalCoffee = this.coffeeNative * this.waterPeople;
        console.log('Happy Brewing!', this.totalCoffee);
        console.log('Hello Sensehack!');
        console.log('Kautilya Save');
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_brew_settings_service__WEBPACK_IMPORTED_MODULE_2__["BrewSettingsService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_brew_settings_service__WEBPACK_IMPORTED_MODULE_2__["BrewSettingsService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/brew-settings.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/brew-settings.service.ts ***!
  \***************************************************/
/*! exports provided: BrewSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrewSettingsService", function() { return BrewSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var BrewSettingsService = /** @class */ (function () {
    function BrewSettingsService(storage) {
        var _this = this;
        this.storage = storage;
        this.firstLaunch = true;
        console.log('Hello Sensehack');
        console.log('Managing states are tricky when the software product grows exponentially. Design Architecture Matters ~ Kautilya.');
        // // set a key/value
        // this.storage.set('age', '24');
        // storage.get('age').then((val) => {
        //   console.log('Your age is', val);
        // });
        this.storage.get('isDefaultLaunch')
            .then(function (val) {
            console.log('Value is : ', val);
            if (val !== null) {
                console.log('Default launch all the way');
                _this.setDefaultLaunch();
                // No need to setup new parameters as this is just restoring the old settings.
            }
            else {
                console.log('Not Present value ? ');
                _this.setFirstLaunch();
            }
        });
    }
    // Returns a boolean state to easy reference to avoid promises
    // | Maybe I'll keep consistent UX for data service to return promises as standard.
    BrewSettingsService.prototype.getFirstLaunch = function () {
        return this.firstLaunch;
    };
    BrewSettingsService.prototype.setDefaultLaunch = function () {
        // TODO:
        // Restore last variables like Number of people and coffee settings.
        this.firstLaunch = false;
        console.log('Default Launch code setup.');
        console.log('Coffee with Work - Synergy');
        console.log('https://tinyurl.com/sensk | https://sensehack.github.io');
    };
    BrewSettingsService.prototype.setFirstLaunch = function () {
        // TODO:
        // Show welcome help screen code or parameter to invoke the view controller for first launch settings.
        console.log('This is your first Launch');
        this.firstLaunch = true;
        this.storage.set('isDefaultLaunch', 'true');
        this.storage.set('trackAppLaunches', 0);
    };
    BrewSettingsService.prototype.initialize = function () {
        var _this = this;
        console.log('Hi in initialize brew settings');
        // TODO:
        //  Manage states efficiently & refactor as much as possible.
        this.storage.get('trackAppLaunches').then(function (val) {
            console.log('Your App Launch is', val);
            _this.trackAppLaunches = val + 1;
            _this.storage.set('trackAppLaunches', _this.trackAppLaunches);
        });
    };
    // Returns promise.
    BrewSettingsService.prototype.getTrackAppLaunch = function () {
        return this.storage.get('trackAppLaunches');
    };
    BrewSettingsService.prototype.reset = function () {
        // TODO:
        // Add Modal controller for asking "Are you Sure ?!" || Currently working on just Alert.
        this.storage.clear();
        alert('Settings Cleared');
    };
    BrewSettingsService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    BrewSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], BrewSettingsService);
    return BrewSettingsService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map