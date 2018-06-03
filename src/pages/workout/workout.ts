import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CoolDownComponent} from "../../components/cool-down/cool-down";
import { SetComponent } from "../../components/set/set";



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
  
  eventListener(){
    this.ev.subscribe('addToSetList', data => {
      console.log(data)
      this.setList.push(data)

    })
    this.ev.subscribe('addToNotes', data => {
      console.log(data)
      this.notes.push(data)
      console.log(data.note);

    })
    
    

  }



  



    deleteSet(set){
      let index = this.setList.indexOf(set);
           if(index > -1){
            this.setList.splice(index, 1);
          }
    
    }
 

  

}
