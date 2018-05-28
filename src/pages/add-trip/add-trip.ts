import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

/**
 * Generated class for the AddTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-trip',
  templateUrl: 'add-trip.html',
})
export class AddTripPage {

  public event = {
    month: '2018-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTripPage');
  }
  addTrip(){
    console.log("add trip");
    this.navCtrl.setRoot(ListPage);
  }
}
