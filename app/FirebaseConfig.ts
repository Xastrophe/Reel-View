// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that I need to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6JKnNHVq25Yd9B6tgJrvMbzY-I6VRWw8",
  authDomain: "reelview-b435f.firebaseapp.com",
  databaseURL: "https://reelview-b435f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reelview-b435f",
  storageBucket: "reelview-b435f.firebasestorage.app",
  messagingSenderId: "279442454449",
  appId: "1:279442454449:web:547c8d9508a5d9e52b6f90",
  measurementId: "G-LVB72LWFQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default { auth };