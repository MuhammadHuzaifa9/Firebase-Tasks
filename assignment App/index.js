import{auth,createUserWithEmailAndPassword,onAuthStateChanged  } from './signedup/firebase.js';
const email= document.getElementById('email');
const password=document.getElementById('password');
const submitbtn=document.getElementById('submit');



const signUp=(event)=>{
    event.preventDefault();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Signed Up')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}
submitbtn.addEventListener('click',signUp);

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      window.location.href='./signedup/signedup.html'
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  