import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProgramPage} from '../program/program';

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
  program = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.program.push(navParams.get('data'));
    console.log(navParams.get('data'))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }
  newProgram(){
    console.log('newn prog new prog');
    this.navCtrl.push(ProgramPage)
    
  }

  

}
