import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  setList = []
  notes= []



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
    console.log("haia")
    console.log(this.navParams.get('title'))
  }

  addSetToWorkout(reps,weight){
    this.setList.push({reps:reps,weight:weight})

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
