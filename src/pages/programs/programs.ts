import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProgramPage} from '../program/program';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Program } from '../../model/program.model';

import { ProgramService } from '../../service/program.service';
import { CurrentProgramService } from '../../service/currentProgram.service';
import {EditProgramPage} from '../edit-program/edit-program'
import { AlertController } from 'ionic-angular';

import {WorkoutPage} from '../workout/workout';
 
/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {

  programs: Observable<Program[]>

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private programService: ProgramService,
              private currentProgramService: CurrentProgramService
             ) {

             
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
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
          
          }
        }
      ]
    });
    prompt.present();
  }

    



  

}
