import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import {  RunPage } from "../run/run";
import { CompletedRunsPage} from "../completed-runs/completed-runs";
import { ProgramsPage } from '../programs/programs';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

  goToRun() {
    this.navCtrl.push(RunPage);

  }

  goToCompleted() {
    this.navCtrl.push(CompletedRunsPage);

  }
  goToPrograms(){
    this.navCtrl.push(ProgramsPage)
  }
}
