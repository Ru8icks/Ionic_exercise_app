import { Component } from '@angular/core';

import {  NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { Program } from '../../../model/program.model'
import { ProgramService } from '../../../service/program.service';

import { CurrentProgramService } from '../../../service/currentProgram.service';
import { AlertController } from 'ionic-angular';

import {ProgPage} from '../../../pages/prog/prog';
/**
 * Generated class for the ProgramComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'program',
  templateUrl: 'program.html'
})
export class ProgramComponent {

  program: Program = {
    title:'',
    content: [],
  } 
  
  programList = []
  
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
              private programService: ProgramService,
              public alertCtrl: AlertController,
              public events:Events,
              public currentProgram: CurrentProgramService,
              public progPage : ProgPage,
            ) {
              dragulaService.setOptions('my-bag', {
                removeOnSpill: true,
                
               
              });
              
              
  }
  ngOnInit() {
    this.currentProgram.currentProgram.subscribe(message => {
      
      this.program= JSON.parse(message);
      console.log("SUPER SUPER SUPER",this.program.content)
      if(this.program.content!=undefined){
        this.programList= this.program.content;
      }else {
        
        this.program.content=[];

      }
      
      
    })
  }
  ngOnDestroy() {
    this.dragulaService.destroy('my-bag');
}

  
  addToProgram(exercise){
    console.log("adding to prog", exercise, this.programList)
    if(exercise==undefined){
      console.log("return")
      return
    }
    this.programList.push(exercise)
    console.log(exercise.name,exercise.type )
    for(let item in this.programList){
      console.log(this.programList[item].name )

    }
  }

  addToExercises(){
    console.log("asddtoex ",this.title)
    console.log(this.type)
    if(this.title.length==0 || this.type.length==0 ){
      console.log("return")
      return
    }
    
    this.exercises.push({name:this.title,type:this.type});
    this.title="";
    this.type="";
  }
  
  deleteProgram(){
    if(this.program.key==null){
      console.log("rerttuttu")
      return;
    }
    this.programService.removeProgram(this.program).then(() => {
      
      console.log("deldeldel"+ this.program.title+""+this.program.key)
      
    })
    
  }
  addToPrograms() {
    let prompt = this.alertCtrl.create({
      title: 'Save program',
      message: "Enter a name for program",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
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
            console.log("savesave", this.program.title)
            if(this.program.title=="w"){
              console.log("null");
              console.log(data.title)
              this.program.title=data.title;
              this.program.content=this.programList; 
              console.log(this.programList)
              this.programService.addProgram(this.program)
              console.log("saved key: "+this.program.key)
              this.programList=[];
            

            } else {

            
            this.program.title=data.title;
            this.program.content=this.programList; 
            console.log(this.programList,"22")
            this.programService.updateProgram(this.program)
            console.log("saved key: "+this.program.key)
            this.programList=[];
          }
          this.progPage.toggleView();

            
            
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
}
 

