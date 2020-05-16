
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyCdBSqcDHSuLdgNbWovutgjSqiIA06b4mo",
    authDomain: "razer-hack.firebaseapp.com",
    databaseURL: "https://razer-hack.firebaseio.com",
    projectId: "razer-hack",
    storageBucket: "razer-hack.appspot.com",
    messagingSenderId: "124422453465",
    appId: "1:124422453465:web:b7c674da34e601882c26c8",
    measurementId: "G-B35E67B9YS"
  };

  // Initialize Firebase
  const fb = firebase.initializeApp(config);

  const db = firebase.firestore();
  
  export {fb,db}