import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPage } from '../pages/new/new';


import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

var config = {
  apiKey: "AIzaSyBAhcurSh4JzVaeodMv--PP177E_3tRPgU",
  authDomain: "flogin-a416c.firebaseapp.com",
  databaseURL: "https://flogin-a416c.firebaseio.com",
  projectId: "flogin-a416c",
  storageBucket: "flogin-a416c.appspot.com",
  messagingSenderId: "1010594857281"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
