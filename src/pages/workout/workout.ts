import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CoolDownComponent} from "../../components/workout/cool-down/cool-down";
import { SetComponent } from "../../components/workout/set/set";
import { SetListComponent } from "../../components/workout/set-list/set-list";
import { NoteComponent } from "../../components/workout/note/note";
import { WorkoutService } from '../../service/workout.service';
import { Workout } from '../../model/workout.model';
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
  
  current;
  maxWeight= 0;
  currentName: string;
  counter=0;
  programLength: number;
  hasSet:boolean;
  hasNote:boolean;
    

  


  



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private ev: Events,
              private workoutService : WorkoutService,

              
              
              
                ) {
                  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
    this.eventListener();
   
    console.log(this.navParams.get('title'))
    this.program = (this.navParams.get('content'))
    this.current=this.program[this.counter];
    this.currentName= this.current.name
    this.programLength = this.program.length;
    this.hasSet = false;
    this.hasNote = false;


   
    
    
  }
  ngOnDestroy(){
    this.ev.unsubscribe('addToSetList');
    this.ev.unsubscribe('deleteSet');
    this.ev.unsubscribe('deleteNote');
    console.log("unsubscribed events")
  }



  saveWorkout(){
    //loop throug completed ex and add to db
    for (let i = 0; i < this.setList.length; i++) {
      this.setList[i].maxWeight=this.maxWeight;
      this.workoutService.addProgram(this.setList[i]);
    }
    this.maxWeight=0;    
    this.setList = [];
    this.hasSet = false;
    if(this.counter<(this.program.length-1) ){ 
      this.counter++
      this.current= this.program[this.counter]
      this.currentName= this.current.name
    } else {
      this.navCtrl.pop()    
    }
  }

  eventListener(){
    this.ev.subscribe('addToSetList', data => {
      if(this.maxWeight<= data.weight){
        this.maxWeight=data.weight;
      }
      let workout :Workout={
        rep: data.reps,
        weight:data.weight,
        date: Date.now(),
        maxWeight:this.maxWeight,
        name:this.currentName,
      }
      this.setList.push(workout)
      this.hasSet = true;
    })


    this.ev.subscribe('deleteSet', data => {
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
            this.hasNote= true;
            this.notes.push(data.note);          
          
          }
        }
      ]
    });
    prompt.present();
  }




  



 

  

}
