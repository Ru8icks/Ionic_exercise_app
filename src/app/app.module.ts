import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { RunPage} from "../pages/run/run";
import { CompletedRunsPage } from "../pages/completed-runs/completed-runs";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps} from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation'
import {TimerComponent} from "../components/timer/timer";
import { CoolDownComponent} from "../components/cool-down/cool-down";
import { SetComponent} from "../components/set/set";
import { NoteComponent} from "../components/note/note";

import { IonicStorageModule } from '@ionic/storage';
import { ProgramsPage } from '../pages/programs/programs';
import { ProgramPage } from '../pages/program/program';
import {EditProgramPage} from '../pages/edit-program/edit-program'
import { WorkoutPage } from '../pages/workout/workout'
 


import {DragulaModule , DragulaService} from "ng2-dragula/ng2-dragula"


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ProgramService } from '../service/program.service';

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
    ItemDetailsPage,
    ListPage,
    RunPage,
    CompletedRunsPage,
    TimerComponent,
    ProgramsPage,
    ProgramPage,
    EditProgramPage,
    WorkoutPage,
    CoolDownComponent,
    SetComponent,
    NoteComponent
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DragulaModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RunPage,
    CompletedRunsPage,
    ProgramsPage,
    ProgramPage,
    EditProgramPage,
    WorkoutPage,
    
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    [ProgramService],

  ]
})
export class AppModule {}
