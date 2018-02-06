import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import {  RunPage } from "../run/run";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

}
