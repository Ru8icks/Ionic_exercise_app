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
import { IonicStorageModule } from '@ionic/storage';
import { ProgramsPage } from '../pages/programs/programs';
import { ProgramPage } from '../pages/program/program';

import {DragulaModule , DragulaService} from "ng2-dragula/ng2-dragula"

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

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DragulaModule,
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
    
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
