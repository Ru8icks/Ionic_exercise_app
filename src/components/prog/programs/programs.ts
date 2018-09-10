import { Component } from '@angular/core';
import {  NavController, NavParams, Events, LoadingController, Loading } from 'ionic-angular';

//import {ProgramPage} from '../../../pages/program/program';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Program } from '../../../model/program.model';
import { ProgramService } from '../../../service/program.service';
import { CurrentProgramService } from '../../../service/currentProgram.service';

//import {EditProgramPage} from '../../../pages/edit-program/edit-program'
import { AlertController } from 'ionic-angular';

import {WorkoutPage} from '../../../pages/workout/workout';
import {ProgPage} from '../../../pages/prog/prog';

 
/**
 * Generated class for the ProgramsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'programs',
  templateUrl: 'programs.html'
})
export class ProgramsComponent {
  
  programs: Observable<Program[]>
  loading: Loading =  this.loadingCtrl.create({
    content: 'Please wait...'
  });;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private programService: ProgramService,
              public events : Events,
              public currentProgram: CurrentProgramService,
              public progPage : ProgPage,
              public loadingCtrl: LoadingController,
             ) {

             
  }

  ngOnInit() {
    console.log('ionViewDidLoad ProgramsPage111111');
    this.presentLoadingDefault()
    this.programs = this.programService.getPrograms().snapshotChanges().pipe(map(
      changes => {
        console.log("chch ch changes");
        this.removeLoading();
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
          
          
        }))
      }))
     
  }
  presentLoadingDefault() {
     
  
    this.loading.present();
  
 
  }
  removeLoading(){
    this.loading.dismiss();
  }
  newProgram(){
    console.log('newn prog new prog');
    this.currentProgram.changetProgram('{"content":[],"title":"w"}')
    this.progPage.toggleView();
    
   
    
  }
  
  edit(program){
    console.log(program)
    var myJSON = JSON.stringify(program);
    console.log(myJSON)
    this.currentProgram.changetProgram(JSON.stringify(program))
    this.progPage.toggleView();


  }
  workout(program){
    var myJSON = JSON.stringify(program);
    console.log(myJSON)
    console.log('Workout clicked');
    this.navCtrl.push(WorkoutPage,program);
  }
 

    



  

}
