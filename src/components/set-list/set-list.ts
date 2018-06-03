import { Component } from '@angular/core';
import{Events} from 'ionic-angular';

/**
 * Generated class for the SetListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'set-list',
  templateUrl: 'set-list.html'
})
export class SetListComponent {

  setList = []
  text: string;

  constructor(private ev: Events,) {
    console.log('Hello SetListComponent Component');
    this.text = 'Hello World';
    this.eventListener();
  }

  deleteSet(set){
    let index = this.setList.indexOf(set);
         if(index > -1){
          this.setList.splice(index, 1);
        }
  
  }
  eventListener(){
    this.ev.subscribe('addToSetList', data => {
      console.log(data)
      this.setList.push(data)

    })
    
    
    

  }



}
