import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewPage} from '../new/new';

import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  provider={
    name:"",
    profilePic:"",
    email:"",
    loggedIn:false
  }


  

  constructor(public navCtrl: NavController,private fire:AngularFireAuth) {

  }
  loginFb(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      res=> {
        console.log("From FB")
        this.provider.loggedIn=true;
        this.provider.name= res.user.displayName;
        this.provider.email= res.user.email;
        this.provider.profilePic=res.user.photoURL;
        console.log(res);
      }
    )

  }

  loginGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( res =>{
      console.log('From Google');
      console.log(res);
      this.provider.loggedIn=true;
      this.provider.name= res.user.displayName;
      this.provider.email= res.user.email;
      this.provider.profilePic=res.user.photoURL;
      
    })
  }

  logout(){
    this.fire.auth.signOut();
    this.provider.loggedIn=false;

  }


}
