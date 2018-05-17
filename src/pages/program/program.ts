import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';

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
  program = [];
  exercises = [
              {name:"squats", type: "sets"},
              {name:"benchpress", type: "sets"}
            ];
  types = ["sets","interval"]
  title=""
  type=""
          

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private storage: Storage,
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }
  addToProgram(exercise){
    if(exercise.length==0){
      console.log("return")
      return
    }
    console.log(exercise)
    this.program.push(exercise)
    
    
  }

  addToExercises(){
    console.log(this.title)
    console.log(this.type)
    if(this.title.length==0 || this.type.length==0 ){

      console.log("return")
      return
    }
    
    this.exercises.push({name:this.title,type:this.type});
    this.title="";
    this.type="";
  }
 

}
