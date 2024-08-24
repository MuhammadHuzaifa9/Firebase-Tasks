
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore,collection, addDoc,getDocs,doc, deleteDoc,getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";  
  import { getStorage,ref,uploadBytes,uploadBytesResumable, getDownloadURL   } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";


  const firebaseConfig = {
    apiKey: "AIzaSyClI2tv_oB5um0RpIezChPGjFVS0VkKV_8",
    authDomain: "assignmentapp-62e5c.firebaseapp.com",
    projectId: "assignmentapp-62e5c",
    storageBucket: "assignmentapp-62e5c.appspot.com",
    messagingSenderId: "303427909340",
    appId: "1:303427909340:web:91258796c542aab3fb6619"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app);
  const db=getFirestore(app);
  const storage=getStorage(app);
  export{ref,storage,uploadBytes,uploadBytesResumable, getDownloadURL,auth,db,collection,getDoc, addDoc,createUserWithEmailAndPassword,doc,updateDoc, deleteDoc,getDocs,signInWithEmailAndPassword,signOut,onAuthStateChanged};
