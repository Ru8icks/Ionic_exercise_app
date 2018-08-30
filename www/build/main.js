webpackJsonp([4],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_program_service__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramPage = (function () {
    function ProgramPage(navCtrl, navParams, storage, dragulaService, programService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.dragulaService = dragulaService;
        this.programService = programService;
        this.alertCtrl = alertCtrl;
        this.program = {
            title: '',
            content: [],
        };
        this.programList = [];
        this.exercises = [
            { name: "Squats", type: "sets" },
            { name: "Benchpress", type: "sets" },
            { name: "Leg press", type: "sets" },
            { name: "Lunge", type: "sets" },
            { name: "Leg extension", type: "sets" },
            { name: "Deadlifts", type: "sets" },
            { name: "Standing calf raise", type: "sets" },
            { name: "Push-up", type: "sets" },
        ];
        this.types = ["sets", "interval"];
        this.title = "";
        this.type = "";
        dragulaService.setOptions('my-bag', {
            removeOnSpill: true,
        });
    }
    ProgramPage.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('my-bag');
    };
    ProgramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramPage');
    };
    ProgramPage.prototype.addToProgram = function (exercise) {
        if (exercise == undefined) {
            console.log("return");
            return;
        }
        this.programList.push(exercise);
        console.log(exercise.name, exercise.type);
        for (var item in this.programList) {
            console.log(this.programList[item].name);
        }
    };
    ProgramPage.prototype.addToExercises = function () {
        console.log(this.title);
        console.log(this.type);
        if (this.title.length == 0 || this.type.length == 0) {
            console.log("return");
            return;
        }
        this.exercises.push({ name: this.title, type: this.type });
        this.title = "";
        this.type = "";
    };
    ProgramPage.prototype.deleteProgram = function () {
    };
    ProgramPage.prototype.addToPrograms = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Save program',
            message: "Enter a name for program",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log(data.title);
                        _this.program.title = data.title;
                        _this.program.content = _this.programList;
                        console.log(_this.programList);
                        _this.programService.addProgram(_this.program);
                        _this.navCtrl.pop();
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-program',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\program-page\program\program.html"*/'<!--\n\n  Generated template for the ProgramPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>program</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="flex-container" > \n\n      <div class="exCard">\n\n        <ion-list  [dragula]=\'"my-bag"\' [dragulaModel]="programList" >  \n\n          <ion-card  *ngFor="let exercise of programList">\n\n             <ion-item>\n\n                {{exercise.name}}:\n\n              \n\n                {{exercise.type}}\n\n              </ion-item>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      \n\n      <div class="exButtons">\n\n          <div class="top" >\n\n            \n\n            <button (click)="addToPrograms()" ion-button color="secondary">Add to programs</button></div>\n\n\n\n          <div class="bot">  <button (click)="deleteProgram()" ion-button color="danger">Delete program</button></div>\n\n\n\n        \n\n      </div>\n\n    </div>\n\n    \n\n\n\n\n\n    <ion-item>\n\n        <ion-label>Exercise</ion-label>\n\n        <ion-select [(ngModel)]="ex">\n\n          <ion-option *ngFor="let ex of exercises" [value]="ex">{{ex.name}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <button (click)="addToProgram(ex)" ion-button>Add to program</button>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>new exercise</ion-label>\n\n      <ion-input [(ngModel)]="title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary" floating>Type</ion-label>\n\n        <ion-select [(ngModel)]="type">\n\n            \n\n            <ion-option *ngFor="let type of types" [value]="type">{{type}}</ion-option>\n\n          </ion-select>\n\n    </ion-item>\n\n        <button (click)="addToExercises()" ion-button>Add to exercises</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\program-page\program\program.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], ProgramPage);
    return ProgramPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/program-page/edit-program/edit-program.module": [
		763,
		3
	],
	"../pages/program-page/program/program.module": [
		765,
		2
	],
	"../pages/program-page/programs/programs.module": [
		764,
		1
	],
	"../pages/workout/workout.module": [
		762,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutService = (function () {
    function WorkoutService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
            console.log("userid is set workout");
            _this.workouts = _this.db.list("workouts/" + _this.userId);
        });
    }
    WorkoutService.prototype.getPrograms = function () {
        if (!this.userId) {
            console.log("!this.userId just happened");
            return;
        }
        this.workouts = this.db.list("workouts/" + this.userId);
        return this.workouts;
    };
    WorkoutService.prototype.addProgram = function (workout) {
        return this.workouts.push(workout);
    };
    WorkoutService.prototype.updateProgram = function (workout) {
        return this.workouts.update(workout.key, workout);
    };
    WorkoutService.prototype.removeProgram = function (workout) {
        return this.workouts.remove(workout.key);
    };
    WorkoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], WorkoutService);
    return WorkoutService;
}());

//# sourceMappingURL=workout.service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_page_programs_programs__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HelloIonicPage = (function () {
    function HelloIonicPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    HelloIonicPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__program_page_programs_programs__["a" /* ProgramsPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    HelloIonicPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    HelloIonicPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__program_page_programs_programs__["a" /* ProgramsPage */]); }, function (error) { return console.log(error.message); });
    };
    HelloIonicPage.prototype.goToPrograms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__program_page_programs_programs__["a" /* ProgramsPage */]);
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Hello Ionic</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h3>Welcome to first Ionic app!</h3>\n\n\n\n  <p>\n\n    This starter project is our way of helping you get a functional app running in record time.\n\n  </p>\n\n  <p>\n\n    Follow along on the tutorial section of the Ionic docs!\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" (click)="goToPrograms()">Go to programs</button>\n\n  </p>\n\n  <form (ngSubmit)="login()" [formGroup]="loginForm">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{loginError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n\n			<div class="login-footer">\n\n				<p>\n\n					<a href="#">Forgot password?</a>\n\n					If you\'re a new user, please sign up.\n\n				</p>\n\n			</div>\n\n\n\n			<ion-list>\n\n\n\n				<button ion-button icon-left block clear (click)="loginWithGoogle()">\n\n					<ion-icon name="logo-google"></ion-icon>\n\n					Log in with Google\n\n				</button>\n\n\n\n				<button ion-button icon-left block clear (click)="signup()">\n\n					<ion-icon name="person-add"></ion-icon>\n\n					Sign up\n\n				</button>\n\n			</ion-list>\n\n		</div>\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
    ], HelloIonicPage);
    return HelloIonicPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__program_page_programs_programs__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__program_page_programs_programs__["a" /* ProgramsPage */]); }, function (error) { return _this.signupError = error.message; });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'as-page-signup',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\signup\signup.html"*/'\n\n<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Sign up</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n\n		</div>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_workout_service__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkoutPage = (function () {
    function WorkoutPage(navCtrl, navParams, alertCtrl, ev, workoutService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ev = ev;
        this.workoutService = workoutService;
        this.setList = [];
        this.notes = [];
        this.program = [];
        this.maxWeight = 0;
        this.counter = 0;
    }
    WorkoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutPage');
        this.eventListener();
        console.log(this.navParams.get('title'));
        this.program = (this.navParams.get('content'));
        this.current = this.program[this.counter];
        this.currentName = this.current.name;
    };
    WorkoutPage.prototype.ngOnDestroy = function () {
        this.ev.unsubscribe('addToSetList');
        this.ev.unsubscribe('deleteSet');
        this.ev.unsubscribe('deleteNote');
        console.log("unsubscribed events");
    };
    WorkoutPage.prototype.saveWorkout = function () {
        //loop throug completed ex and add to db
        for (var i = 0; i < this.setList.length; i++) {
            this.setList[i].maxWeight = this.maxWeight;
            this.workoutService.addProgram(this.setList[i]);
        }
        this.maxWeight = 0;
        this.setList = [];
        if (this.counter < (this.program.length - 1)) {
            this.counter++;
            this.current = this.program[this.counter];
            this.currentName = this.current.name;
        }
        else {
            this.navCtrl.pop();
        }
    };
    WorkoutPage.prototype.eventListener = function () {
        var _this = this;
        this.ev.subscribe('addToSetList', function (data) {
            if (_this.maxWeight <= data.weight) {
                _this.maxWeight = data.weight;
            }
            var workout = {
                rep: data.reps,
                weight: data.weight,
                date: Date.now(),
                maxWeight: 0,
                name: _this.currentName,
            };
            _this.setList.push(workout);
        });
        this.ev.subscribe('deleteSet', function (data) {
            var index = _this.setList.indexOf(data);
            if (index > -1) {
                _this.setList.splice(index, 1);
            }
            _this.ev.subscribe('deleteNote', function (note) {
                var index = _this.notes.indexOf(note);
                if (index > -1) {
                    _this.notes.splice(index, 1);
                }
            });
        });
    };
    WorkoutPage.prototype.addNote = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            message: "Add note for workout",
            inputs: [
                {
                    name: 'note',
                    placeholder: 'Note'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.notes.push(data.note);
                    }
                }
            ]
        });
        prompt.present();
    };
    WorkoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workout',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\workout\workout.html"*/'<!--\n\n  Generated template for the WorkoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>workout: {{currentName}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <h1>{{currentName}}</h1>\n\n      <set>\n\n      </set>\n\n      <set-list  *ngFor="let set of setList" [set]="set" >\n\n\n\n      </set-list>\n\n      <button ion-button full (click)=addNote()><ion-icon name="add-circle"></ion-icon> Add Note</button>  \n\n      <note *ngFor="let note of notes" [note]="note">\n\n\n\n      </note>\n\n\n\n\n\n      <button ion-button full (click)=saveWorkout()><ion-icon name="add-circle"></ion-icon> Next</button>  \n\n        \n\n        \n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    \n\n    <cool-down></cool-down>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\workout\workout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__service_workout_service__["a" /* WorkoutService */]])
    ], WorkoutPage);
    return WorkoutPage;
}());

//# sourceMappingURL=workout.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_program_service__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProgramPage = (function () {
    function EditProgramPage(navCtrl, navParams, storage, dragulaService, programService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.dragulaService = dragulaService;
        this.programService = programService;
        this.alertCtrl = alertCtrl;
        this.program = {
            title: '',
            content: [],
        };
        this.programList = [];
        this.exercises = [
            { name: "Squats", type: "sets" },
            { name: "Benchpress", type: "sets" },
            { name: "Leg press", type: "sets" },
            { name: "Lunge", type: "sets" },
            { name: "Leg extension", type: "sets" },
            { name: "Deadlifts", type: "sets" },
            { name: "Standing calf raise", type: "sets" },
            { name: "Push-up", type: "sets" },
        ];
        this.types = ["sets", "interval"];
        this.title = "";
        this.type = "";
        dragulaService.setOptions('my-bag', {
            removeOnSpill: true,
        });
        console.log("haia");
        console.log(this.navParams.get('title'));
        this.program.title = this.navParams.get('title');
        this.program.content = this.navParams.get('content');
        this.program.key = this.navParams.get('key');
        this.programList = this.navParams.get('content');
    }
    EditProgramPage.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('my-bag');
    };
    EditProgramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad editProgramPage');
    };
    EditProgramPage.prototype.addToProgram = function (exercise) {
        if (exercise == undefined) {
            console.log("return");
            return;
        }
        this.programList.push(exercise);
        console.log(exercise.name, exercise.type);
        for (var item in this.programList) {
            console.log(this.programList[item].name);
        }
    };
    EditProgramPage.prototype.addToExercises = function () {
        console.log(this.title);
        console.log(this.type);
        if (this.title.length == 0 || this.type.length == 0) {
            console.log("return");
            return;
        }
        this.exercises.push({ name: this.title, type: this.type });
        this.title = "";
        this.type = "";
    };
    EditProgramPage.prototype.deleteProgram = function () {
        var _this = this;
        this.programService.removeProgram(this.program).then(function () {
            console.log("deldeldel");
            _this.navCtrl.pop();
        });
    };
    EditProgramPage.prototype.addToPrograms = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Save program',
            message: "Enter a name for program",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log(data.title);
                        _this.program.title = data.title;
                        _this.program.content = _this.programList;
                        console.log(_this.programList);
                        _this.programService.updateProgram(_this.program).then(function () {
                            console.log("updateupdate");
                            _this.navCtrl.pop();
                        });
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    EditProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-program',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\program-page\edit-program\edit-program.html"*/'<!--\n\n  Generated template for the EditProgramPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editProgram</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="flex-container" > \n\n      <div class="exCard">\n\n        <ion-list  [dragula]=\'"my-bag"\' [dragulaModel]="programList" >  \n\n          <ion-card  *ngFor="let exercise of programList">\n\n             <ion-item>\n\n                {{exercise.name}}:\n\n              \n\n                {{exercise.type}}\n\n              </ion-item>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      \n\n      <div class="exButtons">\n\n          <div class="top" >\n\n            \n\n            <button (click)="addToPrograms()" ion-button color="secondary">Add to programs</button></div>\n\n\n\n          <div class="bot">  <button (click)="deleteProgram()" ion-button color="danger">Delete program</button></div>\n\n\n\n        \n\n      </div>\n\n    </div>\n\n    \n\n\n\n\n\n    <ion-item>\n\n        <ion-label>Exercise</ion-label>\n\n        <ion-select [(ngModel)]="ex">\n\n          <ion-option *ngFor="let ex of exercises" [value]="ex">{{ex.name}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <button (click)="addToProgram(ex)" ion-button>Add to program</button>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>new exercise</ion-label>\n\n      <ion-input [(ngModel)]="title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary" floating>Type</ion-label>\n\n        <ion-select [(ngModel)]="type">\n\n            \n\n            <ion-option *ngFor="let type of types" [value]="type">{{type}}</ion-option>\n\n          </ion-select>\n\n    </ion-item>\n\n        <button (click)="addToExercises()" ion-button>Add to exercises</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\program-page\edit-program\edit-program.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], EditProgramPage);
    return EditProgramPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=edit-program.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_program__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_program_service__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_program_edit_program__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workout_workout__ = __webpack_require__(325);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramsPage = (function () {
    function ProgramsPage(navCtrl, navParams, alertCtrl, programService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.programService = programService;
    }
    ProgramsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramsPage');
        this.programs = this.programService.getPrograms().snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    ProgramsPage.prototype.newProgram = function () {
        console.log('newn prog new prog');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__program_program__["a" /* ProgramPage */]);
    };
    ProgramsPage.prototype.programAction = function (program) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Options',
            message: "Select Workout to begin program or Edit to edit program",
            buttons: [
                {
                    text: 'Workout',
                    handler: function (data) {
                        var myJSON = JSON.stringify(program);
                        console.log(myJSON);
                        console.log('Workout clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__workout_workout__["a" /* WorkoutPage */], program);
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        console.log(program);
                        var myJSON = JSON.stringify(program);
                        console.log(myJSON);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_program_edit_program__["a" /* EditProgramPage */], program);
                    }
                }
            ]
        });
        prompt.present();
    };
    ProgramsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programs',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\program-page\programs\programs.html"*/'<!--\n\n  Generated template for the ProgramPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>programs</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <p>sa</p>\n\n        <ion-item *ngFor="let program of programs | async"  (click)="programAction(program)">\n\n          <p>s</p>{{program.title}}\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n<div style="position: absolute; left: 28% ; bottom: 5%; width: 100%" >\n\n  <button ion-button icon-left (click)="newProgram()">\n\n    <ion-icon name="add"> </ion-icon>\n\n     New Program\n\n  </button>\n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\pages\program-page\programs\programs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */]) === "function" && _d || Object])
    ], ProgramsPage);
    return ProgramsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=programs.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(435);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_timer_timer__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cool_down_cool_down__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_set_set__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_note_note__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_set_list_set_list__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_program_page_programs_programs__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_program_page_program_program__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_program_page_edit_program_edit_program__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_workout_workout__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_auth_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ultimate_ngxerrors__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_dragula_ng2_dragula__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_program_service__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_workout_service__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// Import the AF2 Module





var firebaseConfig = {
    apiKey: "AIzaSyChGFu7NtT3bEYizPdTz6mupR2NRwuNrR8",
    authDomain: "runrun-2c655.firebaseapp.com",
    databaseURL: "https://runrun-2c655.firebaseio.com",
    projectId: "runrun-2c655",
    storageBucket: "",
    messagingSenderId: "202506366266"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_program_page_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_program_page_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_program_page_edit_program_edit_program__["a" /* EditProgramPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_workout_workout__["a" /* WorkoutPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_cool_down_cool_down__["a" /* CoolDownComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_set_set__["a" /* SetComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_note_note__["a" /* NoteComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_set_list_set_list__["a" /* SetListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/workout/workout.module#WorkoutPageModule', name: 'WorkoutPage', segment: 'workout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-page/edit-program/edit-program.module#EditProgramPageModule', name: 'EditProgramPage', segment: 'edit-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-page/programs/programs.module#ProgramsPageModule', name: 'ProgramsPage', segment: 'programs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-page/program/program.module#ProgramPageModule', name: 'ProgramPage', segment: 'program', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_program_page_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_program_page_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_program_page_edit_program_edit_program__["a" /* EditProgramPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_workout_workout__["a" /* WorkoutPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__service_program_service__["a" /* ProgramService */],
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_19__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_27__service_workout_service__["a" /* WorkoutService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_auth_service__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        console.log("before afauth");
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        });
        console.log("aftret afauth");
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.login = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>menu Pages</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item>\n\n        <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-item>\n\n      <ion-list-header *ngIf="auth.getEmail()">{{auth.getEmail()}}</ion-list-header>\n\n      <ion-item (click)="logout()" *ngIf="auth.authenticated">\n\n        <ion-icon name="log-out" item-left></ion-icon>\n\n        Log out\n\n      </ion-item>\n\n      <ion-item (click)="login()" *ngIf="!auth.authenticated">\n\n        <ion-icon name="log-in" item-left></ion-icon>\n\n        Log in\n\n      </ion-item>\n\n      \n\n    </ion-list>\n\n    \n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimerComponent = (function () {
    function TimerComponent(ev) {
        this.ev = ev;
        this.text = "Time: ";
        console.log('Hello TimerComponent Component');
        this.text = "Time :";
    }
    TimerComponent.prototype.ngOnInit = function () {
        console.log("ngoninit");
        this.eventListener();
    };
    ;
    TimerComponent.prototype.ngOnDestroy = function () {
        console.log("herrherrherrr");
        this.ev.unsubscribe('start');
        this.ev.unsubscribe('finish');
    };
    TimerComponent.prototype.eventListener = function () {
        var _this = this;
        this.ev.subscribe('start', function (data) {
            console.log("eventsworkings! wizardfight");
            var source = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default.a.Observable.timer(0, 1000);
            _this.subscribe = source.subscribe(function (val) {
                console.log(val);
                _this.time = val;
                _this.text = format(val * 1000);
            });
        });
        this.ev.subscribe('finish', function (data) {
            console.log("does this do nothgin");
            _this.subscribe.unsubscribe();
            _this.text = format(_this.time * 1000);
            _this.ev.publish('finished', _this.time);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "totalTime", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\timer\timer.html"*/'<!-- Generated template for the TimerComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\timer\timer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], TimerComponent);
    return TimerComponent;
}());

function format(ms) {
    var minutes = Math.floor(ms / (1000 * 60)), seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
    return "Time: " + minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.';
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoolDownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CoolDownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CoolDownComponent = (function () {
    function CoolDownComponent() {
        console.log('Hello TimerComponent Component');
        this.time = 30000;
        this.startTime = 30000;
        this.text = format(this.time);
        this.on = false;
    }
    CoolDownComponent.prototype.ngOnInit = function () {
        console.log("ngoninit");
    };
    ;
    CoolDownComponent.prototype.ngOnDestroy = function () {
        console.log("herrherrherrr");
    };
    CoolDownComponent.prototype.start = function () {
        var _this = this;
        console.log("is here");
        if (this.on) {
            return;
        }
        this.on = true;
        console.log("! wizardfight");
        var source = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer__["timer"])(0, 1000);
        console.log("! wizardfight");
        this.subscribe = source.subscribe(function (val) {
            console.log(_this.time);
            _this.text = format(_this.time -= 1000);
            if (_this.time == 0) {
                _this.time = _this.startTime;
                _this.text = format(_this.startTime);
                console.log("reached zero");
                _this.subscribe.unsubscribe();
                _this.on = false;
            }
        });
    };
    CoolDownComponent.prototype.incTime = function () {
        if (!this.on) {
            console.log("inc");
            this.startTime += 5000;
            this.text = format(this.startTime);
        }
    };
    CoolDownComponent.prototype.decTime = function () {
        if (!this.on) {
            console.log("dec");
            this.startTime -= 5000;
            this.text = format(this.startTime);
            console.log(this.startTime);
        }
    };
    CoolDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cool-down',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\cool-down\cool-down.html"*/'<!-- Generated template for the CoolDownComponent component -->\n\n<div>\n\n  \n\n  \n\n  <button ion-button full clear (click)=\'incTime()\'><ion-icon name="arrow-dropup-circle"></ion-icon></button> \n\n  <button ion-button full (click)=\'start()\'>{{text}}</button>\n\n  <button ion-button full clear (click)=\'decTime()\'><ion-icon name="arrow-dropdown-circle"></ion-icon></button>  \n\n\n\n</div>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\cool-down\cool-down.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CoolDownComponent);
    return CoolDownComponent;
}());

function format(ms) {
    var minutes = Math.floor(ms / (1000 * 60)), seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
    if (minutes <= 0) {
        return "Time: " + (seconds < 10 ? '0' : '') + seconds + 's.';
    }
    return "Time: " + minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.';
}
//# sourceMappingURL=cool-down.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SetComponent = (function () {
    function SetComponent(ev) {
        this.ev = ev;
        console.log('Hello SetComponent Component');
    }
    SetComponent.prototype.addSetToWorkout = function (reps, weight) {
        console.log("add to workout");
        console.log(reps, weight);
        console.log("add to workout", reps, weight);
        this.ev.publish('addToSetList', { reps: reps, weight: weight });
    };
    SetComponent.prototype.incReps = function () {
        console.log(this.weight);
        if (!this.reps) {
            console.log("null");
            this.reps = 1;
        }
        else {
            this.reps++;
        }
    };
    SetComponent.prototype.decReps = function () {
        console.log(this.weight);
        if (this.reps == 0) {
            console.log("null");
        }
        else {
            this.reps--;
        }
    };
    SetComponent.prototype.incWeight = function () {
        console.log(this.weight);
        if (!this.weight) {
            console.log("null");
            this.weight = 1;
        }
        else {
            this.weight++;
        }
    };
    SetComponent.prototype.decWeight = function () {
        console.log(this.weight);
        if (this.weight == 0) {
            console.log("null");
        }
        else {
            this.weight--;
        }
    };
    SetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'set',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\set\set.html"*/'<!-- Generated template for the SetComponent component -->\n\n<div>\n\n    <button ion-button full clear (click)=\'incReps()\'><ion-icon name="arrow-dropup-circle"></ion-icon></button>\n\n  <ion-item>\n\n   \n\n    <ion-input type="number" placeholder="Repetitions" min=\'0\' [(ngModel)]=\'reps\'></ion-input>\n\n    \n\n</ion-item>\n\n<button ion-button full clear (click)=\'decReps()\'><ion-icon name="arrow-dropdown-circle"></ion-icon></button>\n\n<button ion-button full clear (click)=\'incWeight()\'><ion-icon name="arrow-dropup-circle"></ion-icon></button>\n\n<ion-item>\n\n    \n\n     <ion-input type="number" placeholder="Weight" [(ngModel)]=\'weight\'></ion-input>\n\n     \n\n</ion-item>\n\n<button ion-button full clear (click)=\'decWeight()\'><ion-icon name="arrow-dropdown-circle"></ion-icon></button>\n\n    <button ion-button full (click)=addSetToWorkout(reps,weight)><ion-icon name="add-circle"></ion-icon> Add</button>\n\n</div>\n\n'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\set\set.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SetComponent);
    return SetComponent;
}());

//# sourceMappingURL=set.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NoteComponent = (function () {
    function NoteComponent(alertCtrl, ev) {
        this.alertCtrl = alertCtrl;
        this.ev = ev;
        console.log('Hello NoteComponent Component');
    }
    NoteComponent.prototype.deleteNote = function (note) {
        this.ev.publish('deleteNote', note);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NoteComponent.prototype, "note", void 0);
    NoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'note',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\note\note.html"*/'<!-- Generated template for the NoteComponent component -->\n\n<div class="notes">\n\n\n\n    \n\n    <ion-list>\n\n        <ion-item-sliding >\n\n              <ion-item>\n\n                  {{note}}\n\n              </ion-item>\n\n              <ion-item-options side="right">\n\n                <button ion-button (click)="deleteNote(note)">\n\n                  <ion-icon name="trash"></ion-icon>Delete\n\n                </button>\n\n              </ion-item-options>\n\n            </ion-item-sliding>\n\n          </ion-list>\n\n</div>'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\note\note.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], NoteComponent);
    return NoteComponent;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SetListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SetListComponent = (function () {
    function SetListComponent(ev) {
        this.ev = ev;
        console.log('Hello SetListComponent Component');
        console.log();
    }
    SetListComponent.prototype.deleteSet = function (set) {
        this.ev.publish('deleteSet', set);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SetListComponent.prototype, "set", void 0);
    SetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'set-list',template:/*ion-inline-start:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\set-list\set-list.html"*/'<!-- Generated template for the SetListComponent component -->\n\n<div class="sets">\n\n    <ion-list>\n\n   <ion-item-sliding>\n\n         <ion-item>\n\n           {{set.reps}}X\n\n           {{set.weight}}\n\n         </ion-item>\n\n         <ion-item-options side="right">\n\n           <button ion-button (click)="deleteSet(set)">\n\n             <ion-icon name="trash"></ion-icon>Delete\n\n           </button>\n\n         </ion-item-options>\n\n       </ion-item-sliding>\n\n     </ion-list>\n\n\n\n </div>'/*ion-inline-end:"E:\here\RUN\Refractor\Ionic_exercise_app\src\components\set-list\set-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SetListComponent);
    return SetListComponent;
}());

//# sourceMappingURL=set-list.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgramService = (function () {
    function ProgramService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.programRef = this.db.list('programs');
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
            console.log("userid is set");
            _this.programs = _this.db.list("programs/" + _this.userId);
        });
    }
    ProgramService.prototype.getPrograms = function () {
        if (!this.userId) {
            console.log("!this.userId just happened");
            return;
        }
        this.programs = this.db.list("programs/" + this.userId);
        return this.programs;
    };
    ProgramService.prototype.addProgram = function (program) {
        return this.programs.push(program);
    };
    ProgramService.prototype.updateProgram = function (program) {
        return this.programs.update(program.key, program);
    };
    ProgramService.prototype.removeProgram = function (program) {
        return this.programs.remove(program.key);
    };
    ProgramService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProgramService);
    return ProgramService;
}());

//# sourceMappingURL=program.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
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
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        console.log("here");
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
            console.log("here user");
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map