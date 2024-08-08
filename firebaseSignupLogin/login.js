import {auth,signInWithEmailAndPassword,onAuthStateChanged} from './firebase.js'
const emaildiv=document.getElementById('email');
const passworddiv=document.getElementById('password');
const loginBtn=document.getElementById('loginbtn');

const login=(event)=>{
    event.preventDefault();
    loginBtn.innerText=`Loading....`

    const email=emaildiv.value;
    const password=passworddiv.value;


    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    loginBtn.innerText=`Login`
    const user = userCredential.user;
    Toastify({

        text: "Logged In!",
        
        duration: 3000
        
        }).showToast();
    // ...
  })
  .catch((error) => {
    loginBtn.innerText=`Login`
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({

        text: `${errorMessage}`,
        
        duration: 3000
        
        }).showToast();
  });
}
loginBtn.addEventListener('click',login)

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      window.location.href=`dashboard.html`
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
// let getData = JSON.parse(localStorage.getItem('userData')) || [];


// const loginForm = document.getElementById('loginform');
// if (loginForm) {
//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         checkUserdata();
//     });
// }

// const checkUserdata = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;

//     let validUser = getData.find(user => user.email === email && user.password === password && user.username === username);

//     if (validUser) {
//         localStorage.setItem('loggedInUser', JSON.stringify(validUser));
//         if (validUser.adminrights === 'on') {
//             window.location.href = './admin.html';
//         } else {
//             window.location.href = './dashboard.html';
//         }
//     } else {
//         alert('Wrong User Data Entered!');
//     }
// };
// function login() {
//     window.location.href = 'login.html';
// }
// function signup() {
//     window.location.href = 'signup.html';
// }