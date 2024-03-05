import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RemoteConfig, RemoteConfigModule } from '@angular/fire/remote-config';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RemoteConfigModule } from '@angular/fire/remote-config';
// import { AngularFireRemoteConfigModule } from '@angular/fire/remote-config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAPTJTsIjv82N_l6b1WVkMhaixag-gZMEU',
        authDomain: 'test-fa1dd.firebaseapp.com',
        projectId: 'test-fa1dd',
        storageBucket: 'test-fa1dd.appspot.com',
        messagingSenderId: '647447194109',
        appId: '1:647447194109:web:4c729bbe175dd3f9abd194',
        measurementId: 'G-EE8KPQD5P9',
      })
    ),
    provideFirestore(() => getFirestore()),
    RemoteConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
