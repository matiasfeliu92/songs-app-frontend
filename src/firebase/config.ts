import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQSdFHIi8gn55mLHwXrbUSEGKGIk0n1v0",
    authDomain: "songs-app-f2842.firebaseapp.com",
    databaseURL: "https://songs-app-f2842-default-rtdb.firebaseio.com",
    projectId: "songs-app-f2842",
    storageBucket: "songs-app-f2842.appspot.com",
    messagingSenderId: "883856827491",
    appId: "1:883856827491:web:fa13a2d4160580b4f40456",
    measurementId: "G-7DGTP5K45X"
  };
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();