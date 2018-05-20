import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';

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
  programs = [];
  
  exercises = [
              {name:"Squats", type: "sets"},
              {name:"Benchpress", type: "sets"},
              {name:"Leg press", type: "sets"},
              {name:"Lunge", type: "sets"},
              {name:"Leg extension", type: "sets"},
              {name:"Deadlifts", type: "sets"},
              {name:"Standing calf raise", type: "sets"},
              {name:"Push-up", type: "sets"},
            ];
  types = ["sets","interval"]
  title=""
  type=""
          

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private storage: Storage,
              private dragulaService: DragulaService,
            ) {
              dragulaService.setOptions('my-bag', {
                removeOnSpill: true,
                
               
              });
  }
  ngOnDestroy() {
    this.dragulaService.destroy('my-bag');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
    
   
    
  }
  addToProgram(exercise){
    if(exercise==undefined){
      console.log("return")
      return
    }
    console.log(exercise.name,exercise.type )
    for(let item in this.program){
      console.log(this.program[item].name )

    }
    
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
  addToPrograms(){
    
    
      

    
    console.log(this.program)
    this.storage.set('programs',this.program )

  }
  deleteProgram(){
    
  }
 

}
