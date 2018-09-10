import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  public graph:boolean = true;
  public exercises :Array<object> = [
    {name:"Squats", type: "sets"},
    {name:"Benchpress", type: "sets"},
    {name:"Leg press", type: "sets"},
    {name:"Lunge", type: "sets"},
    {name:"Leg extension", type: "sets"},
    {name:"Deadlifts", type: "sets"},
    {name:"Standing calf raise", type: "sets"},
    {name:"Push-up", type: "sets"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,   private ev: Events,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }
  public addToGraph(ex):void{
    this.ev.publish('addToGraph', ex)

    

  }

}
