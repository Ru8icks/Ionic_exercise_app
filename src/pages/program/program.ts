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
              private dragulaService: DragulaService,
            ) {
              dragulaService.setOptions('my-bag', {
                removeOnSpill: true,
                
               
              });
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
      console.log(this.program[item] )

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
 

}
