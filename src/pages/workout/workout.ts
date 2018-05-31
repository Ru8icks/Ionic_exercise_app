import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CoolDownComponent} from "../../components/cool-down/cool-down";
import {Subscription} from "rxjs/Subscription";

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
  subscript: Subscription;

  setList = []
  notes= []



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private ev: Events,
                ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
    console.log("haia")
    console.log(this.navParams.get('title'))
    
  }


  addSetToWorkout(reps,weight){
    this.setList.push({reps:reps,weight:weight})
    this.ev.publish('start')

  }
  

  addNote(){
   
      let prompt = this.alertCtrl.create({
        
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
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.notes.push(data.note);
              console.log(data.note);
            }
          }
        ]
      });
      prompt.present();
    }


    deleteSet(set){
      let index = this.setList.indexOf(set);
           if(index > -1){
            this.setList.splice(index, 1);
          }
    
    }
    deleteNote(note){
      let index = this.notes.indexOf(note);
           if(index > -1){
            this.notes.splice(index, 1);
          }

    }
  

  

}
