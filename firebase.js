// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBDAx-pDCsmLn77Jk6FD6ycQAZKHeVmJk",
  authDomain: "pantry-tracker-9b88e.firebaseapp.com",
  projectId: "pantry-tracker-9b88e",
  storageBucket: "pantry-tracker-9b88e.appspot.com",
  messagingSenderId: "606170839872",
  appId: "1:606170839872:web:202a22e14dabceb62c98a5",
  measurementId: "G-3LKP05E5RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}