import {auth,signOut,onAuthStateChanged} from './firebase.js'

const logoutBtn=document.getElementById('logoutbtn');
const emailDiv=document.getElementsByClassName('emaildiv')[0];
const signout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        Toastify({
            
            text: "Signed Out!",
            
            duration: 3000
            
        }).showToast();
    }).catch((error) => {
        // An error happened.
        Toastify({
            
            text: `${error}`,
            
            duration: 3000
            
        }).showToast();
    });

}
logoutBtn.addEventListener('click',signout)

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      emailDiv.innerHTML=`<span>${user.email}</span>`
      // ...
    } else {
      // User is signed out
      window.location.href=`login.html`
      // ...
    }
  });

// showUserdata();
        // const showUserdata = () => {
        //     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        //     if (loggedInUser) {
        //         const usernamebtn = document.getElementById('usernamebtn');
        //         const usernamediv = document.querySelector('.usernamediv');
        //         const emaildiv = document.querySelector('.emaildiv');
        //         const userdiv=document.getElementById('userimage');
        //         usernamebtn.innerHTML = `<span>${loggedInUser.username.length > 6 ? loggedInUser.username.slice(0, 5) + "...." : loggedInUser.username}</span>`;
        //         usernamediv.innerHTML = `<span>${loggedInUser.username.length > 6 ? loggedInUser.username.slice(0, 6) + "...." : loggedInUser.username}</span>`;
        //         emaildiv.innerHTML = `<span>${loggedInUser.email}</span><br/>`;
        //         userdiv.innerHTML=`<img src="${loggedInUser.image}" style="width:55px;height:50px;border-radius: 50%;object-fit:cover">`;
        
        //     }
        // };