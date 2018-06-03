import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() set:Object;
  
  
  

  constructor(
              private ev: Events,
  ) {
    console.log('Hello SetListComponent Component');
    console.log()
  
    
  }

  deleteSet(set){
    this.ev.publish('deleteSet', set)
   
  
  }
 



}
