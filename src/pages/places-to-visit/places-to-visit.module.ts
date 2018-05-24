import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesToVisitPage } from './places-to-visit';

@NgModule({
  declarations: [
    PlacesToVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesToVisitPage),
  ],
})
export class PlacesToVisitPageModule {}
