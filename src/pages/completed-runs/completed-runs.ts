import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the CompletedRunsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completed-runs',
  templateUrl: 'completed-runs.html',
})
export class CompletedRunsPage {
  workouts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedRunsPage');
    this.storage.forEach((value, key, iteration) =>{
      this.workouts.push(value);
      console.log(value);
    })
  }



  clearWorkouts() {
    this.storage.clear();
    this.navCtrl.pop()

  }
}
