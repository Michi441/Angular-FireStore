import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

var firebaseConfig = {
    apiKey: "AIzaSyCxqDZn-9z9guCgxhisSc8xUFmDFga5GE8",
    authDomain: "angular-firebase-d4e15.firebaseapp.com",
    databaseURL: "https://angular-firebase-d4e15.firebaseio.com",
    projectId: "angular-firebase-d4e15",
    storageBucket: "angular-firebase-d4e15.appspot.com",
    messagingSenderId: "116928670666"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
