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
  notes= []
  program = []
  completedWorkout = []
  current;
  maxWeight= 0;
  currentName;


  



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
    this.program = (this.navParams.get('content'))
    this.program.reverse()
    console.log(JSON.stringify(this.program))
    
    this.current=this.program.pop();
    this.currentName= this.current.name
    console.log("current: ",JSON.stringify(this.current))
   
    
    
  }
  ngOnDestroy(){
    this.ev.unsubscribe('addToSetList');
    this.ev.unsubscribe('deleteSet');
    this.ev.unsubscribe('deleteNote');
    console.log("unsubscribed events")
  }
  saveWorkout(){
    console.log("this max ", this.maxWeight)
    let obje = {name:this.current.name, type:this.current.type, max:this.maxWeight , sets: this.setList  }
    this.completedWorkout.push(obje)
    console.log("completed: ",JSON.stringify(this.completedWorkout))
    this.maxWeight=0;
    this.current= this.program.pop()
    this.currentName= this.current.name
    console.log("current: ",JSON.stringify(this.current))
    


  }
  eventListener(){
    this.ev.subscribe('addToSetList', data => {
      console.log(data.reps, data.weight, "herer!")
      console.log(data, JSON.stringify(data) )
      this.setList.push(data)
      console.log(this.setList)
      if(this.maxWeight<= data.weight){
        console.log("new max weight")
        this.maxWeight=data.weight;
      }
      

    })
    this.ev.subscribe('deleteSet', data => {
      console.log(data.set, "data.set" )
      console.log(data, "data" )
      let index = this.setList.indexOf(data);
      if(index > -1){
       this.setList.splice(index, 1);
     }
     
     this.ev.subscribe('deleteNote',note=>{
      let index = this.notes.indexOf(note);
      if(index > -1){
       this.notes.splice(index, 1);
     }

     })
    })
    

    
    
    

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
            console.log(data.note)
            this.notes.push(data.note);
             console.log('addnote clicked');

            
          
          }
        }
      ]
    });
    prompt.present();
  }




  



 

  

}
