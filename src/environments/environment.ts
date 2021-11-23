// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyD5mavUVHuYCkPJ1rpL1QMkwATdf1XVpP4",
  authDomain: "votacion-en-linea.firebaseapp.com",
  databaseURL: "https://votacion-en-linea-default-rtdb.firebaseio.com",
  projectId: "votacion-en-linea",
  storageBucket: "votacion-en-linea.appspot.com",
  messagingSenderId: "1059587813941",
  appId: "1:1059587813941:web:45af26ba42799b3047777c",
  measurementId: "G-7LKKYMS2LF"
};

export const environment = {
  firebase: {
    projectId: 'votacion-en-linea',
    appId: '1:1059587813941:web:45af26ba42799b3047777c',
    databaseURL: 'https://votacion-en-linea-default-rtdb.firebaseio.com',
    storageBucket: 'votacion-en-linea.appspot.com',
    apiKey: 'AIzaSyD5mavUVHuYCkPJ1rpL1QMkwATdf1XVpP4',
    authDomain: 'votacion-en-linea.firebaseapp.com',
    messagingSenderId: '1059587813941',
    measurementId: 'G-7LKKYMS2LF',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
