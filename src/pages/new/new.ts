import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  constructor(public navCtrl: NavController,private fire:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

  logout(){
    this.fire.auth.signOut();
    this.navCtrl.setRoot(HomePage);

  }

}
