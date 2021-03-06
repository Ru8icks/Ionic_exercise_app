import {Component, Input, Output} from '@angular/core';
import {Events} from "ionic-angular";
import Rx from 'rxjs/Rx';
import {Subscription} from "rxjs/Subscription";
//import { start } from 'repl';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {
  time: number;
  @Output() totalTime: number;
  subscribe: Subscription;

  text: string = "Time: ";
  
 
    
  constructor(private ev: Events) {
    console.log('Hello TimerComponent Component');
    this.text = "Time :";
    

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


  eventListener(){
    this.ev.subscribe('start', data => {
      console.log("eventsworkings! wizardfight");
      const source = Rx.Observable.timer(0, 1000);
      this.subscribe = source.subscribe(val => {
        console.log(val);
        this.time = val;
        this.text= format(val*1000);
      });
      
    });
    this.ev.subscribe('finish', data => {
      console.log("does this do nothgin");
      this.subscribe.unsubscribe();
      this.text = format(this.time * 1000);
      this.ev.publish('finished', this.time);

    });
    
  }





}
function format(ms) {
  let minutes = Math.floor(ms / (1000 * 60)),
    seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
  return "Time: " + minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.';
}

