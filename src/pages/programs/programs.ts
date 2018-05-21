import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProgramPage} from '../program/program';

import { Observable } from 'rxjs/Observable';
import { Program } from '../../model/program.model';
import { ProgramService } from '../../service/program.service';
import {EditProgramPage} from '../edit-program/edit-program'
 
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private programService: ProgramService ) {
    this.programs = this.programService.getPrograms().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
  }
  newProgram(){
    console.log('newn prog new prog');
    this.navCtrl.push(ProgramPage)
    
  }
  editProgram(program){
    console.log(program)
    var myJSON = JSON.stringify(program);
    console.log(myJSON)
    this.navCtrl.push(EditProgramPage,program);

  }

  

}
