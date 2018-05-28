import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesToVisitPage } from '../places-to-visit/places-to-visit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  budget: string = "1000";

  constructor(public navCtrl: NavController) {

  }
 
 
  placesToVisit(){
    this.navCtrl.push(PlacesToVisitPage);
  }
  //search function
  getItems(){
    console.log("search.....");
  }
 

}
