// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBorEQn35nBg_WRxNOrFkp2nZ-2aRHI5WM",
  authDomain: "fir-practice-b9bbd.firebaseapp.com",
  projectId: "fir-practice-b9bbd",
  storageBucket: "fir-practice-b9bbd.appspot.com",
  messagingSenderId: "381003004041",
  appId: "1:381003004041:web:4331bf169bc6009dd16e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut};