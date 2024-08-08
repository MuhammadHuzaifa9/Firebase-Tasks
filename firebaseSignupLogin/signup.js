import {auth,createUserWithEmailAndPassword,onAuthStateChanged} from "./firebase.js"

const signupBtn=document.getElementById('signupbtn');

const signUp=(event)=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
event.preventDefault();


signupBtn.innerText=`Loading.....`;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    signupBtn.innerText=`SignUp`
    // Signed up 
    const user = userCredential.user;
    Toastify({

        text: "Signed Up!",
        
        duration: 3000
        
        }).showToast();
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    signupBtn.innerText=`Signup`;
    Toastify({

        text: `${errorMessage}`,
        
        duration: 3000
        
        }).showToast();
    // ..
  });
}
signupBtn.addEventListener('click',signUp);
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
// const getUserdata = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;
//     const adminrights = document.getElementById('adminrights').checked ? 'on' : 'off';
//     const imageInput = document.getElementById('image');
//     const imageFile = imageInput.files[0];

   
//     if (!email || !password || !username) {
//         alert('Please fill in all fields.');
//         return; 
//     }

   
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert('Please enter a valid email address.');
//         return; 
//     }

    
//     const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
//     if (!usernameRegex.test(username)) {
//         alert('Username must be 3-16 characters long and can only contain letters, numbers, and underscores.');
//         return; 
//     }

    
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,32}$/;


//     if (!passwordRegex.test(password)) {
//         alert('Password must be 8-32 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
//         return; 
//     }

    
//     if (!imageFile) {
//         alert('Please upload an image.');
//         return; 
//     }

//     let userData = JSON.parse(localStorage.getItem('userData')) || [];
//     let existingUser = userData.some(user => user.email === email || user.username === username);

//     if (existingUser) {
//         alert('User already exists. Please Login!');
//     } else {
//         const reader = new FileReader();
//         reader.onload = function(event) {
//             const img = event.target.result;
//             let userObj = {
//                 email: email,
//                 password: password,
//                 username: username,
//                 adminrights: adminrights,
//                 image: img 
//             };
//             userData.push(userObj);
//             localStorage.setItem("userData", JSON.stringify(userData));
//             alert('User Registered!');
//             window.location.href = './login.html'; 
//         };
//         reader.readAsDataURL(imageFile);
//     }
// };
// function login() {
//     window.location.href = 'login.html';
// }
// function signup() {
//     window.location.href = 'signup.html';
// }