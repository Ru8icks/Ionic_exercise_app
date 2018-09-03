import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgPage } from './prog';

@NgModule({
  declarations: [
    ProgPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgPage),
  ],
})
export class ProgPageModule {}
