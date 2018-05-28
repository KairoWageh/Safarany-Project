import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowTripsPage } from './show-trips';

@NgModule({
  declarations: [
    ShowTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowTripsPage),
  ],
})
export class ShowTripsPageModule {}
