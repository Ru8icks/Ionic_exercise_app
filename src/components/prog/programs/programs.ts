import { Component } from '@angular/core';
import {  NavController, NavParams, Events } from 'ionic-angular';

import {ProgramPage} from '../../../pages/program/program';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Program } from '../../../model/program.model';
import { ProgramService } from '../../../service/program.service';
import { CurrentProgramService } from '../../../service/currentProgram.service';

import {EditProgramPage} from '../../../pages/edit-program/edit-program'
import { AlertController } from 'ionic-angular';

import {WorkoutPage} from '../../../pages/workout/workout';
 
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private programService: ProgramService,
              public events : Events,
              public currentProgram: CurrentProgramService,
             ) {

             
  }

  ngOnInit() {
    console.log('ionViewDidLoad ProgramsPage111111');
    this.programs = this.programService.getPrograms().snapshotChanges().pipe(map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }))
     
  }
  newProgram(){
    console.log('newn prog new prog');
    this.navCtrl.push(ProgramPage)
    
  }
  programAction(program){
    let prompt = this.alertCtrl.create({
      title: 'Options',
      message: "Select Workout to begin program or Edit to edit program",
     
      buttons: [
        {
          text: 'Workout',
          handler: data => {
            
            var myJSON = JSON.stringify(program);
            console.log(myJSON)
            console.log('Workout clicked');
            this.navCtrl.push(WorkoutPage,program);
            
          }
        },
        {
          text: 'Edit',
          handler: data => {
            console.log(program)
            var myJSON = JSON.stringify(program);
            console.log(myJSON)
            this.currentProgram.changetProgram(JSON.stringify(program))



          
          
          }
        }
      ]
    });
    prompt.present();
  }

    



  

}
