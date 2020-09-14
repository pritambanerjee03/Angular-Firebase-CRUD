// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAE698iwHFYcT3t5dMn-A9Nnb11TgNQmDA",
    authDomain: "employee-firebase-crud.firebaseapp.com",
    databaseURL: "https://employee-firebase-crud.firebaseio.com",
    projectId: "employee-firebase-crud",
    storageBucket: "employee-firebase-crud.appspot.com",
    messagingSenderId: "40363518368",
    appId: "1:40363518368:web:d5d44110a818970993dcc5"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
