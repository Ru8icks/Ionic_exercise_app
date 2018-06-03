import { Component } from '@angular/core';
import { Events} from 'ionic-angular'


/**
 * Generated class for the SetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'set',
  templateUrl: 'set.html'
})
export class SetComponent {
  weight:number
  reps:number;
  

  text: string;

  constructor(
              private ev: Events,

  ) {
    console.log('Hello SetComponent Component');
    this.text = 'Hello World';
  }

  addSetToWorkout(reps,weight){
    console.log("add to workout")
    this.ev.publish('addToSetList', {reps:reps,weight:weight})
    
    
    

  }
  incReps(){
    console.log(this.weight)
    if(!this.reps){
      console.log("null")
      this.reps=1;  
    } else {
      this.reps++;
    }
    
  

  }


  decReps(){
    console.log(this.weight)
    if(this.reps==0){
      console.log("null")
        
    } else {
      this.reps--;
    }
    

  }

  incWeight(){
    console.log(this.weight)
    if(!this.weight){
      console.log("null")
      this.weight=1;  
    } else {
      this.weight++;
    }

  }

  decWeight(){
    console.log(this.weight)
    if(this.weight==0){
      console.log("null")
        
    } else {
      this.weight--;
    }
    

  }

}
