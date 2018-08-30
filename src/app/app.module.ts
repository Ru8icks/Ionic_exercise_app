import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps} from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation'
import {TimerComponent} from "../components/timer/timer";
import { CoolDownComponent} from "../components/cool-down/cool-down";
import { SetComponent} from "../components/set/set";
import { NoteComponent} from "../components/note/note";
import { SetListComponent} from "../components/set-list/set-list";

import { IonicStorageModule } from '@ionic/storage';
import { ProgramsPage } from '../pages/program-page/programs/programs';
import { ProgramPage } from '../pages/program-page/program/program';
import {EditProgramPage} from '../pages/program-page/edit-program/edit-program'
import { WorkoutPage } from '../pages/workout/workout'

import { AuthService } from '../service/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SignupPage } from '../pages/signup/signup';
 


import {DragulaModule , DragulaService} from "ng2-dragula/ng2-dragula"


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AngularFireAuth } from 'angularfire2/auth';

import { ProgramService } from '../service/program.service';
import { WorkoutService } from '../service/workout.service';

export const firebaseConfig = {
  apiKey: "AIzaSyChGFu7NtT3bEYizPdTz6mupR2NRwuNrR8",
    authDomain: "runrun-2c655.firebaseapp.com",
    databaseURL: "https://runrun-2c655.firebaseio.com",
    projectId: "runrun-2c655",
    storageBucket: "",
    messagingSenderId: "202506366266"
};
 

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
   
    TimerComponent,
    ProgramsPage,
    ProgramPage,
    EditProgramPage,
    WorkoutPage,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    SetListComponent,
    SignupPage,
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DragulaModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    NgxErrorsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    
    ProgramsPage,
    ProgramPage,
    EditProgramPage,
    WorkoutPage,
    SignupPage,
    
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProgramService,
    AngularFireAuth,
    AuthService,
    WorkoutService,

  ]
})
export class AppModule {}
