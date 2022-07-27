import firebase from "firebase/compat/app";

//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWLJW3SctWZpoB2FRTTTaD5TfvhHl5-9E",
  authDomain: "st-react-native-33db9.firebaseapp.com",
  databaseURL: "https://st-react-native-33db9-default-rtdb.firebaseio.com",
  projectId: "st-react-native-33db9",
  storageBucket: "st-react-native-33db9.appspot.com",
  messagingSenderId: "182067703976",
  appId: "1:182067703976:web:0b57c471266359cf6f929d",
  measurementId: "G-LCKBTCVKKB",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
