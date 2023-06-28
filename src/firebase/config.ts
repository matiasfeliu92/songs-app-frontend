import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY as string,
    authDomain: "songs-app-f2842.firebaseapp.com",
    databaseURL: "https://songs-app-f2842-default-rtdb.firebaseio.com",
    projectId: "songs-app-f2842",
    storageBucket: "songs-app-f2842.appspot.com",
    messagingSenderId: "883856827491",
    appId: import.meta.env.VITE_APP_ID as string,
    measurementId: "G-7DGTP5K45X"
  };
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();