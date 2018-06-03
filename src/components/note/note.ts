import { Component } from '@angular/core';
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
  notes= []

  text: string;

  constructor(
              public alertCtrl: AlertController,
              private ev: Events,
  ) {
    console.log('Hello NoteComponent Component');
    this.text = 'Hello World';
  }

  addNote(){
   
    let prompt = this.alertCtrl.create({
      
      message: "Add note for workout",
      inputs: [
        {
          name: 'note',
          placeholder: 'Note'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.notes.push(data.note);
            console.log('addnote clicked');
          
          }
        }
      ]
    });
    prompt.present();
  }

  deleteNote(note){
    let index = this.notes.indexOf(note);
         if(index > -1){
          this.notes.splice(index, 1);
        }

  }



}
