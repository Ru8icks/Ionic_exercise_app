

import {Component, Input, Output} from '@angular/core';
import {Events} from "ionic-angular";

import {Subscription} from "rxjs/Subscription";
import { start } from 'repl';
import { timer } from 'rxjs/observable/timer';

/**
 * Generated class for the CoolDownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cool-down',
  templateUrl: 'cool-down.html'
})
export class CoolDownComponent {
  time: number;
  startTime:number
  @Output() totalTime: number;
  subscribe: Subscription;

  text:string;
  on:boolean



    
  constructor(private ev: Events) {
    console.log('Hello TimerComponent Component');
    this.time=30000
    this.startTime=30000
    
    this.text =format(this.time)
    this.on = false
    
    

  }
  ngOnInit(){
    console.log("ngoninit")
    this.eventListener();
  };
  ngOnDestroy(){
    console.log("herrherrherrr")
    this.ev.unsubscribe('start');
    this.ev.unsubscribe('finish');
  }
  

  start(){
    console.log("is here")
    this.ev.publish('start')
    console.log("is hereas")
  }


  eventListener(){
    this.ev.subscribe('start', data => {
      if(this.on){
        return
      }
      this.on=true;
      console.log("eventsworkings! wizardfight");
      const source = timer(0, 1000);
      console.log("eventsworkings! wizardfight");
      this.subscribe = source.subscribe(val => {
        console.log( this.time );
      
        this.text= format(this.time-=1000);
        if (this.time==0){
          this.time=this.startTime;
          this.text =format(this.startTime)
          this.ev.publish('finish')
          this.on=false;
        }
      });
      
    });
    this.ev.subscribe('finish', data => {
      console.log("does this do nothgin");
      this.subscribe.unsubscribe();
      

    });
    
  }
  incTime(){
    if(!this.on){
      console.log("inc")
      this.startTime+=5000;
      this.text=format(this.startTime)  
    }
    
  }
  decTime(){
    if(!this.on){
      console.log("dec")
      this.startTime-=5000;
      this.text=format(this.startTime)
      console.log(this.startTime)  
    }
    
  }





}
function format(ms) {
  let minutes = Math.floor(ms / (1000 * 60)),
    seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
    if (minutes<=0){
      return "Time: " + (seconds < 10 ? '0' : '') + seconds + 's.';

    }
  return "Time: " + minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.';
}

