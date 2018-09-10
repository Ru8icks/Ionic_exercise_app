import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProgramService } from '../../service/program.service';
import { WorkoutService } from '../../service/workout.service';
import { ProgPage } from '../prog/prog';
import { ProgramComponent } from '../../components/prog/program/program';
import { ProgramsComponent } from '../../components/prog/programs/programs';
import { StatsPage } from '../stats/stats';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public programService: ProgramService,
              public workoutService: WorkoutService,
              
              //public programComponent: ProgramComponent,
              //public programsComponent: ProgramsComponent,
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    
  }
  goToPrograms(){
    this.navCtrl.push(ProgPage)

  }
  goToStats(){
    console.log("pressed stats")
    this.navCtrl.push(StatsPage)
  }

}
