import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Events} from 'ionic-angular'

/**
 * Generated class for the NoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'note',
  templateUrl: 'note.html'
})
export class NoteComponent {
  
  @Input() note:string;
  


  constructor(
              public alertCtrl: AlertController,
              private ev: Events,
  ) {
    console.log('Hello NoteComponent Component');
    
  }


  deleteNote(note){
    this.ev.publish('deleteNote', note)
  }



}
