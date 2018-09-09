import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgramComponent} from '../../components/prog/program/program'

import { ProgramsComponent} from '../../components/prog/programs/programs'
/**
 * Generated class for the ProgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prog',
  templateUrl: 'prog.html',
})
export class ProgPage {

  viewProgram : boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
             
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgPage');
    this.viewProgram = false;
  }
  toggleView(){
      console.log(this.viewProgram)

      this.viewProgram=!this.viewProgram
      console.log(this.viewProgram)
  }


}
