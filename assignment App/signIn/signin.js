import { auth,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "../signedup/firebase.js";

const email= document.getElementById('email');
const password=document.getElementById('password');
const submitbtn=document.getElementById('submit');
const indexBtn=document.getElementById('addAss');
var redirect='../signedup/signedup.html'
const signup=(event)=>{
    event.preventDefault();
    if(email.value!='admin123@gmail.com'){
      redirect=='../signedup/signedup.html'
    }
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Signed In');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
submitbtn.addEventListener('click',signup);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      window.location.href=`${redirect}`
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  
indexBtn.addEventListener('click',function(){
    window.location.href='../signedup/signedup.html'
})