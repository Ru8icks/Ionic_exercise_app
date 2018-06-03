import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CoolDownComponent} from "../../components/cool-down/cool-down";
import { SetComponent } from "../../components/set/set";
import { SetListComponent } from "../../components/set-list/set-list";
import { NoteComponent } from "../../components/note/note";
/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {
  setList = [];

  



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private ev: Events,
              
              
                ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
    this.eventListener();
    console.log("haia")
    console.log(this.navParams.get('title'))
    
  }
  saveWorkout(){


  }
  eventListener(){
    this.ev.subscribe('addToSetList', data => {
      console.log(data.reps, data.weight, "herer!")
      console.log(data, JSON.stringify(data) )
      this.setList.push(data)
      console.log(this.setList)
      

    })
    this.ev.subscribe('deleteSet', data => {
      console.log(data.set, "data.set" )
      console.log(data, "data" )
      let index = this.setList.indexOf(data);
      if(index > -1){
       this.setList.splice(index, 1);
     }
    })

    
    
    

  }



  



 

  

}
