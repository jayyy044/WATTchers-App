import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuWxomWz0ISDajg-DV2ACD8r1SM9UQsa0",
    authDomain: "wattchers-984a7.firebaseapp.com",
    projectId: "wattchers-984a7",
    storageBucket: "wattchers-984a7.appspot.com",
    messagingSenderId: "1076792437353",
    appId: "1:1076792437353:web:a98edd20685e87cf77d0f8",
    measurementId: "G-3QM0K2F2F4"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {db, ref, onValue};