webpackJsonp([6],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedRunsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(73);
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
 * Generated class for the CompletedRunsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletedRunsPage = (function () {
    function CompletedRunsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.workouts = [];
    }
    CompletedRunsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CompletedRunsPage');
        this.storage.forEach(function (value, key, iteration) {
            _this.workouts.push(value);
            console.log(value);
        });
    };
    CompletedRunsPage.prototype.clearWorkouts = function () {
        this.storage.clear();
        this.navCtrl.pop();
    };
    CompletedRunsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-completed-runs',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\completed-runs\completed-runs.html"*/'<!--\n\n  Generated template for the CompletedRunsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Completed Workouts</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div *ngFor="let item of workouts">\n\n\n\n  <p>Workout took place on {{item.Date}}-{{item.Month}}-{{item.Year}}</p>\n\n  <p>Duration of workout: {{item.Time}}</p>\n\n  <p>Distance travelled: {{item.Distance | number : \'1.1\'}}</p>\n\n\n\n</div>\n\n  <button ion-button  (click)="clearWorkouts()">Clear Workouts</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\completed-runs\completed-runs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CompletedRunsPage);
    return CompletedRunsPage;
}());

//# sourceMappingURL=completed-runs.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_program_service__ = __webpack_require__(90);
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
        this.programService.removeProgram(this.program).then(function () {
            console.log("deldeldel");
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
            selector: 'page-edit-program',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\edit-program\edit-program.html"*/'<!--\n  Generated template for the EditProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editProgram</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="flex-container" > \n      <div class="exCard">\n        <ion-list  [dragula]=\'"my-bag"\' [dragulaModel]="programList" >  \n          <ion-card  *ngFor="let exercise of programList">\n             <ion-item>\n                {{exercise.name}}:\n              \n                {{exercise.type}}\n              </ion-item>\n          </ion-card>\n        </ion-list>\n      </div>\n      \n      <div class="exButtons">\n          <div class="top" >\n            \n            <button (click)="addToPrograms()" ion-button color="secondary">Add to programs</button></div>\n\n          <div class="bot">  <button (click)="deleteProgram()" ion-button color="danger">Delete program</button></div>\n\n        \n      </div>\n    </div>\n    \n\n\n    <ion-item>\n        <ion-label>Exercise</ion-label>\n        <ion-select [(ngModel)]="ex">\n          <ion-option *ngFor="let ex of exercises" [value]="ex">{{ex.name}}</ion-option>\n        </ion-select>\n    </ion-item>\n    <button (click)="addToProgram(ex)" ion-button>Add to program</button>\n    <ion-item>\n      <ion-label color="primary" floating>new exercise</ion-label>\n      <ion-input [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" floating>Type</ion-label>\n        <ion-select [(ngModel)]="type">\n            \n            <ion-option *ngFor="let type of types" [value]="type">{{type}}</ion-option>\n          </ion-select>\n    </ion-item>\n        <button (click)="addToExercises()" ion-button>Add to exercises</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\edit-program\edit-program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditProgramPage);
    return EditProgramPage;
}());

//# sourceMappingURL=edit-program.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_program_service__ = __webpack_require__(90);
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
            selector: 'page-program',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\program\program.html"*/'<!--\n  Generated template for the ProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>program</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="flex-container" > \n      <div class="exCard">\n        <ion-list  [dragula]=\'"my-bag"\' [dragulaModel]="programList" >  \n          <ion-card  *ngFor="let exercise of programList">\n             <ion-item>\n                {{exercise.name}}:\n              \n                {{exercise.type}}\n              </ion-item>\n          </ion-card>\n        </ion-list>\n      </div>\n      \n      <div class="exButtons">\n          <div class="top" >\n            \n            <button (click)="addToPrograms()" ion-button color="secondary">Add to programs</button></div>\n\n          <div class="bot">  <button (click)="deleteProgram()" ion-button color="danger">Delete program</button></div>\n\n        \n      </div>\n    </div>\n    \n\n\n    <ion-item>\n        <ion-label>Exercise</ion-label>\n        <ion-select [(ngModel)]="ex">\n          <ion-option *ngFor="let ex of exercises" [value]="ex">{{ex.name}}</ion-option>\n        </ion-select>\n    </ion-item>\n    <button (click)="addToProgram(ex)" ion-button>Add to program</button>\n    <ion-item>\n      <ion-label color="primary" floating>new exercise</ion-label>\n      <ion-input [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" floating>Type</ion-label>\n        <ion-select [(ngModel)]="type">\n            \n            <ion-option *ngFor="let type of types" [value]="type">{{type}}</ion-option>\n          </ion-select>\n    </ion-item>\n        <button (click)="addToExercises()" ion-button>Add to exercises</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\program\program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_4__service_program_service__["a" /* ProgramService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProgramPage);
    return ProgramPage;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_program__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_program_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_program_edit_program__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workout_workout__ = __webpack_require__(177);
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
        this.programs = this.programService.getPrograms().snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ProgramsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramsPage');
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__workout_workout__["a" /* WorkoutPage */], program);
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        console.log(program);
                        var myJSON = JSON.stringify(program);
                        console.log(myJSON);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_program_edit_program__["a" /* EditProgramPage */], program);
                    }
                }
            ]
        });
        prompt.present();
    };
    ProgramsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programs',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\programs\programs.html"*/'<!--\n  Generated template for the ProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>programs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <p>sa</p>\n        <ion-item *ngFor="let program of programs | async"  (click)="programAction(program)">\n          <p>s</p>{{program.title}}\n        </ion-item>\n      </ion-list>\n  \n<div style="position: absolute; left: 28% ; bottom: 5%; width: 100%" >\n  <button ion-button icon-left (click)="newProgram()">\n    <ion-icon name="add"> </ion-icon>\n     New Program\n  </button>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\programs\programs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__service_program_service__["a" /* ProgramService */]])
    ], ProgramsPage);
    return ProgramsPage;
}());

//# sourceMappingURL=programs.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutPage; });
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
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkoutPage = (function () {
    function WorkoutPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setList = [];
        this.notes = [];
    }
    WorkoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutPage');
        console.log("haia");
        console.log(this.navParams.get('title'));
    };
    WorkoutPage.prototype.addSetToWorkout = function (reps, weight) {
        this.setList.push({ reps: reps, weight: weight });
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
                        console.log(data.note);
                    }
                }
            ]
        });
        prompt.present();
    };
    WorkoutPage.prototype.deleteSet = function (set) {
        var index = this.setList.indexOf(set);
        if (index > -1) {
            this.setList.splice(index, 1);
        }
    };
    WorkoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workout',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\workout\workout.html"*/'<!--\n  Generated template for the WorkoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>workout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-item>\n        <ion-input type="number" placeholder="Repetitions" min=\'0\' [(ngModel)]=\'reps\'></ion-input>\n    </ion-item>\n    <ion-item>\n         <ion-input type="number" placeholder="Weight" [(ngModel)]=\'weight\'></ion-input>\n    </ion-item>\n        <button ion-button full (click)=addSetToWorkout(reps,weight)><ion-icon name="add-circle"></ion-icon> Add</button>\n        <div class="sets">\n          \n          <ion-item-sliding *ngFor="let set of setList">\n              <ion-card> \n                <ion-item>\n                  {{set.reps}}X\n                  {{set.weight}}\n                </ion-item>\n                <ion-item-options side="right">\n                  <button ion-button (click)="deleteSet(set)">\n                    <ion-icon name="trash"></ion-icon>Delete\n                  </button>\n                </ion-item-options>\n              </ion-card> \n              </ion-item-sliding>\n         \n        </div>\n        <div class="notes">\n            <button ion-button full (click)=addNote()><ion-icon name="add-circle"></ion-icon> Add Note</button>  \n            <ion-card  *ngFor="let note of notes">\n                <ion-item>\n                   {{note}}\n                 </ion-item>\n             </ion-card>\n            \n\n        </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\workout\workout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WorkoutPage);
    return WorkoutPage;
}());

//# sourceMappingURL=workout.js.map

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
	"../pages/completed-runs/completed-runs.module": [
		736,
		5
	],
	"../pages/edit-program/edit-program.module": [
		737,
		4
	],
	"../pages/program/program.module": [
		738,
		3
	],
	"../pages/programs/programs.module": [
		739,
		2
	],
	"../pages/run/run.module": [
		740,
		1
	],
	"../pages/workout/workout.module": [
		741,
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__run_run__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completed_runs_completed_runs__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programs_programs__ = __webpack_require__(176);
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
    function HelloIonicPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelloIonicPage.prototype.goToRun = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__run_run__["a" /* RunPage */]);
    };
    HelloIonicPage.prototype.goToCompleted = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__completed_runs_completed_runs__["a" /* CompletedRunsPage */]);
    };
    HelloIonicPage.prototype.goToPrograms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__programs_programs__["a" /* ProgramsPage */]);
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Hello Ionic</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h3>Welcome to first Ionic app!</h3>\n\n\n\n  <p>\n\n    This starter project is our way of helping you get a functional app running in record time.\n\n  </p>\n\n  <p>\n\n    Follow along on the tutorial section of the Ionic docs!\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n\n    <button ion-button color="primary" (click)="goToRun()">Run</button>\n\n    <button ion-button color="primary" (click)="goToCompleted()">Completed runs</button>\n\n    <button ion-button color="primary" (click)="goToPrograms()">Go to programs</button>\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_run_run__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_completed_runs_completed_runs__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_timer_timer__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_programs_programs__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_program_program__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_program_edit_program__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_workout_workout__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_dragula_ng2_dragula__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_program_service__ = __webpack_require__(90);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_run_run__["a" /* RunPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_completed_runs_completed_runs__["a" /* CompletedRunsPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_program_edit_program__["a" /* EditProgramPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_workout_workout__["a" /* WorkoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/completed-runs/completed-runs.module#CompletedRunsPageModule', name: 'CompletedRunsPage', segment: 'completed-runs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-program/edit-program.module#EditProgramPageModule', name: 'EditProgramPage', segment: 'edit-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program/program.module#ProgramPageModule', name: 'ProgramPage', segment: 'program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programs/programs.module#ProgramsPageModule', name: 'ProgramsPage', segment: 'programs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/run/run.module#RunPageModule', name: 'RunPage', segment: 'run', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout/workout.module#WorkoutPageModule', name: 'WorkoutPage', segment: 'workout', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_run_run__["a" /* RunPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_completed_runs_completed_runs__["a" /* CompletedRunsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_program_edit_program__["a" /* EditProgramPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_workout_workout__["a" /* WorkoutPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                [__WEBPACK_IMPORTED_MODULE_22__service_program_service__["a" /* ProgramService */]],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_run_run__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(313);
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
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'run', component: __WEBPACK_IMPORTED_MODULE_4__pages_run_run__["a" /* RunPage */] }
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
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>menu Pages</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
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


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item-details',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(501);
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
            selector: 'timer',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\components\timer\timer.html"*/'<!-- Generated template for the TimerComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\components\timer\timer.html"*/
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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(255);
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
    function ProgramService(db) {
        this.db = db;
        this.programRef = this.db.list('programs');
    }
    ProgramService.prototype.getPrograms = function () {
        return this.programRef;
    };
    ProgramService.prototype.addProgram = function (program) {
        return this.programRef.push(program);
    };
    ProgramService.prototype.updateProgram = function (program) {
        return this.programRef.update(program.key, program);
    };
    ProgramService.prototype.removeProgram = function (program) {
        return this.programRef.remove(program.key);
    };
    ProgramService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProgramService);
    return ProgramService;
}());

//# sourceMappingURL=program.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_spherical_geometry_js__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_spherical_geometry_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_spherical_geometry_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(73);
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
 * Generated class for the RunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RunPage = (function () {
    function RunPage(googleMaps, geoLoc, ev, storage) {
        this.googleMaps = googleMaps;
        this.geoLoc = geoLoc;
        this.ev = ev;
        this.storage = storage;
        this.start = false;
        this.finish = false;
        this.tracking_data = [];
    }
    RunPage.prototype.ionViewDidEnter = function () {
        console.log("ionviewenter run.ts");
        this.eventListener();
    };
    ;
    RunPage.prototype.eventListener = function () {
        var _this = this;
        this.ev.subscribe('finished', function (data) {
            console.log("timerdata: ", data);
            console.log("dist ", _this.dist);
            var myDate = new Date();
            ;
            var jsonObj = { "Distance": _this.dist, "Time": data, "Date": myDate.getDate(), "Month": myDate.getMonth(), "Year": myDate.getFullYear() };
            var raNum = Math.random() * 10;
            var name = raNum + "";
            _this.storage.set(name, jsonObj).then(function (val) {
                console.log("nineynine ", val);
            });
            _this.storage.get(name).then(function (val) {
                console.log("them values ", val);
            });
        });
    };
    RunPage.prototype.ionViewWillUnload = function () {
        this.ev.unsubscribe('finished');
    };
    RunPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var loc;
        this.start = false;
        this.initMap();
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
            _this.getLocation().then(function (res) {
                console.log("latitude: ", res.coords.latitude, " longitude: ", res.coords.longitude);
                //get current location and set camera into posotion
                loc = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](res.coords.latitude, res.coords.longitude);
                _this.lastPos = loc;
                _this.moveCamera(loc);
                //create a marker at start point
                _this.createMarker(loc, "Start").then(function (marker) {
                    marker.showInfoWindow();
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    RunPage.prototype.initMap = function () {
        var element = this.mapElement.nativeElement;
        this.map = this.googleMaps.create(element);
    };
    RunPage.prototype.getLocation = function () {
        return this.geoLoc.getCurrentPosition();
    };
    RunPage.prototype.moveCamera = function (loc) {
        var options = {
            target: loc,
            zoom: 15,
            tilt: 10
        };
        this.map.moveCamera(options);
    };
    RunPage.prototype.createMarker = function (loc, title) {
        var markerOptions = {
            position: loc,
            title: title
        };
        return this.map.addMarker(markerOptions);
    };
    RunPage.prototype.getPath = function () {
        var _this = this;
        this.start = true;
        this.finish = true;
        this.ev.publish('start');
        this.dist = 0;
        var geo_options = {
            enableHighAccuracy: true,
        };
        var watch = this.geoLoc.watchPosition(geo_options);
        this.subscript = watch.subscribe(function (data) {
            console.log("yodle", data);
            _this.nextPos = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](data.coords.latitude, data.coords.longitude);
            _this.dist += __WEBPACK_IMPORTED_MODULE_4_spherical_geometry_js__["computeDistanceBetween"](_this.lastPos, _this.nextPos);
            console.log("meters: ", __WEBPACK_IMPORTED_MODULE_4_spherical_geometry_js__["computeDistanceBetween"](_this.lastPos, _this.nextPos));
            // this.dist += gps_distance(this.lastPos.lat, this.lastPos.lng, this.nextPos.lat, this.nextPos.lng)
            //this.tracking_data.push(new LatLng(data.coords.latitude, data.coords.longitude));
            _this.speed = data.coords.speed;
            _this.addPath();
        });
    };
    RunPage.prototype.endPath = function () {
        this.subscript.unsubscribe();
        console.log("fix later");
        this.finish = false;
        this.ev.publish('finish');
    };
    RunPage.prototype.addPath = function () {
        console.log("lastpos ", this.lastPos, "nextpos ", this.nextPos);
        var line = this.map.addPolyline({
            points: [this.lastPos, this.nextPos],
            'color': '#FF00FF',
            'width': 10,
            'geodesic': true,
        });
        console.log("line ", line);
        this.lastPos = this.nextPos;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RunPage.prototype, "mapElement", void 0);
    RunPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-run',template:/*ion-inline-start:"E:\here\RUN\Ionic_exercise_app\src\pages\run\run.html"*/'<!--\n\n  Generated template for the RunPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>run</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div #map id="map" style="height:70%"></div>\n\n  <button ion-button [disabled]="start" (click)="getPath()">Start</button>\n\n  <button ion-button [disabled]="!finish && start" (click)="endPath()">Finish</button>\n\n  <div><p>Distance: {{dist}}m</p> </div>\n\n  <div><p>Speed: {{speed}}</p> </div>\n\n  <div><timer></timer> </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\here\RUN\Ionic_exercise_app\src\pages\run\run.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RunPage);
    return RunPage;
}());

//# sourceMappingURL=run.js.map

/***/ })

},[321]);
//# sourceMappingURL=main.js.map