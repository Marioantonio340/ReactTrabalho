import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyDUdqCU69nRj_U6V5y5G42l-49fMi7vqmw",
    authDomain: "appfirebase-435ff.firebaseapp.com",
    projectId: "appfirebase-435ff",
    storageBucket: "appfirebase-435ff.appspot.com",
    messagingSenderId: "680950585256",
    appId: "1:680950585256:web:eeb6b6cb562669f6c62f9d",
    measurementId: "G-BQ7GKNHDBB"
  };
  // Initialize Firebase
  if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase;
  