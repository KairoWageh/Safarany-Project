import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

/**
 * Generated class for the PlacesToVisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places-to-visit',
  templateUrl: 'places-to-visit.html',
})
export class PlacesToVisitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesToVisitPage');
  }
  AddplacesToVisit(){
    console.log("AddplacesToVisit");
    this.navCtrl.setRoot(ListPage);
  }

}
