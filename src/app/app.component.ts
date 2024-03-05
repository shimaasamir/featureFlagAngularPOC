import { Component, OnInit, inject } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  RemoteConfig,
  getRemoteConfig,
  getValue,
  fetchAndActivate,
  getAll,
  fetchConfig,
} from '@angular/fire/remote-config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test';
  dynamicText: any;
  config: any;
  // constructor(private remoteConfig: RemoteConfig) {}
  private remoteConfig: RemoteConfig = inject(RemoteConfig);

  ngOnInit() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyAPTJTsIjv82N_l6b1WVkMhaixag-gZMEU',
      authDomain: 'test-fa1dd.firebaseapp.com',
      projectId: 'test-fa1dd',
      storageBucket: 'test-fa1dd.appspot.com',
      messagingSenderId: '647447194109',
      appId: '1:647447194109:web:4c729bbe175dd3f9abd194',
      measurementId: 'G-EE8KPQD5P9',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Remote Config and get a reference to the service
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

    fetchAndActivate(remoteConfig)
      .then(() => {
        const allVal = getAll(remoteConfig);
        console.log('all', allVal);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
