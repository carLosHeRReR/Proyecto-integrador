// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrBdeUOL01q2QfJJGiZJ4o5m7TPcOKVM8",
  authDomain: "trabajofinal-be052.firebaseapp.com",
  projectId: "trabajofinal-be052",
  storageBucket: "trabajofinal-be052.appspot.com",
  messagingSenderId: "939337004690",
  appId: "1:939337004690:web:0c9768e84bc503e31d584b",
  measurementId: "G-TPFS3194Y4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)