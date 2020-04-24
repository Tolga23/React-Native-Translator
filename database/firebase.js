// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0CT_9t5qYvdfkZB7djSxAvMnL4Wt7H4c",
    authDomain: "reactnativeceviri.firebaseapp.com",
    databaseURL: "https://reactnativeceviri.firebaseio.com",
    projectId: "reactnativeceviri",
    storageBucket: "reactnativeceviri.appspot.com",
    messagingSenderId: "1019848587244",
    appId: "1:1019848587244:web:c6d8998e926a07936cf2c9",
    measurementId: "G-3BMG77WE15"
};

firebase.initializeApp(firebaseConfig);

export default firebase;