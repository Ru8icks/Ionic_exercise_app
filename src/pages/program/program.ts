import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {
  exercises = [
              {name:"squats"},
              {name:"benchpress"}
            ];
  title=""
          

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private storage: Storage,
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }
  addToExercises(){
    console.log(this.title)
    this.exercises.push({name:this.title});
    this.title="";
    

  }


}
