import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzSA0LIkjvIJWAPb3_NyervyjiwrfzEwU",
  authDomain: "personal-website-ef77a.firebaseapp.com",
  projectId: "personal-website-ef77a",
  storageBucket: "personal-website-ef77a.appspot.com",
  messagingSenderId: "460330013737",
  appId: "1:460330013737:web:5a285a525bb215fe4fb838",
  measurementId: "G-S78K82HHC1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
