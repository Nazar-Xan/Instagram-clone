import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// initialize firebaseApp with firebase-config values
const app = firebase.initializeApp({
  apiKey: "AIzaSyCmYbuPQ_2vodF50eegtLpfcOgwjAPDk-k",
  authDomain: "inss-5ab1e.firebaseapp.com",
  projectId: "inss-5ab1e",
  storageBucket: "inss-5ab1e.appspot.com",
  messagingSenderId: "59559406565",
  appId: "1:59559406565:web:111ff4f3889a7d30c91d0c",
  measurementId: "G-M696STNLT4"
});

// firebase - Data-Base
const db = app.firestore();

// firebase - Storage
const storage = firebase.storage();

// firebase - Auth
const auth = firebase.auth();

// firebase -Auth Provider (Google)
const googleProvider = new firebase.auth.GoogleAuthProvider();

// firebase facebook provider
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { storage, auth, googleProvider, facebookProvider };

export default db;
