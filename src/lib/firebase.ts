// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMHXQ0ZX64EMM-75CicPjVS_jEcE-0IRU",
  authDomain: "reel-view-project-demo.firebaseapp.com",
  projectId: "reel-view-project-demo",
  storageBucket: "reel-view-project-demo.firebasestorage.app",
  messagingSenderId: "430620456085",
  appId: "1:430620456085:web:9339c821e173dbeced979c",
  measurementId: "G-25VN1JV6TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};