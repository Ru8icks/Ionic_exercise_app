

 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { Program } from '../../../model/program.model'
import { ProgramService } from '../../../service/program.service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-program',
  templateUrl: 'edit-program.html',
})
export class EditProgramPage {
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
            ) {
              dragulaService.setOptions('my-bag', {
                removeOnSpill: true,
              });
              console.log("haia")
              console.log(this.navParams.get('title'))
              this.program.title = this.navParams.get('title')
              this.program.content = this.navParams.get('content')
              this.program.key = this.navParams.get('key')
              this.programList = this.navParams.get('content')

            
  }
  ngOnDestroy() {
    this.dragulaService.destroy('my-bag');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad editProgramPage');
    
    
    
  }
  addToProgram(exercise){
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
  
  deleteProgram(){
    this.programService.removeProgram(this.program).then(() => {
      console.log("deldeldel")
      this.navCtrl.pop();

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
            console.log(data.title)
            this.program.title=data.title;
            this.program.content=this.programList; 
            console.log(this.programList)
            this.programService.updateProgram(this.program).then(() => {
              console.log("updateupdate")
              this.navCtrl.pop();
        
            })
            
          
            
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
 


