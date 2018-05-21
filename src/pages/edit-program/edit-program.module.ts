import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProgramPage } from './edit-program';

@NgModule({
  declarations: [
    EditProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProgramPage),
  ],
})
export class EditProgramPageModule {}
