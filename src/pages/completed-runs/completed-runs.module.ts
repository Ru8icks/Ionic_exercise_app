import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletedRunsPage } from './completed-runs';

@NgModule({
  declarations: [
    CompletedRunsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompletedRunsPage),
  ],
})
export class CompletedRunsPageModule {}
