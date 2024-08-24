import { db,collection,auth,signOut,onAuthStateChanged,getDocs,doc, deleteDoc,getDoc,updateDoc } from "../signedup/firebase.js";
const showAssignment=document.getElementById('maindiv');
const logoutbtn=document.getElementById('logout');

const nameUp=document.getElementById('name');
const linkUp=document.getElementById('url');
const updateBtn=document.getElementById('submit');
var isEdit=null;
const logout=()=>{
signOut(auth).then(() => {
    // Sign-out successful.
    alert('signout')
  }).catch((error) => {
    // An error happened.
  });
}
logoutbtn.addEventListener('click',logout)
onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      
      window.location.href='../signIn/signin.html'
      // ...
    } else {
      // User is signed out
      // ...
      
    }
  });
  const showAss=async()=>{
    showAssignment.innerHTML='';
    try{
    const querySnapshot = await getDocs(collection(db, "assignments"));
    if(querySnapshot.empty){
        showAssignment.innerHTML='No Assignment yet!'
    }
    querySnapshot.forEach((doc) => {
        const{name,link}=doc.data();
        showAssignment.innerHTML+=`<h2>${name}</h2><a href="${link}">${link}</a><button onclick="editData('${doc.id}')">Edit</button><button onclick="deleteData('${doc.id}')">Delete</button>`
      
    });
}
catch(error){
    console.log(error);
}
}
showAss();
window.editData=async(id)=>{
    try{
        let userData=await getDoc(doc(db, "assignments", id));
        const{name,link}=userData.data();
        nameUp.value=name;
        linkUp.value=link;
        isEdit=id;
    }
    catch(error){
        console.log(error);
    }
}
const updateData=async(event)=>{
    event.preventDefault();
    try{
        await updateDoc(doc(db, "assignments", isEdit),{


            name:nameUp.value,
            link:linkUp.value
        });
        showAss();
    }
    catch(error){
        console.log(error);
    }

}
updateBtn.addEventListener('click',updateData);

window.deleteData=async(id)=>{
    try{
        await deleteDoc(doc(db, "assignments", id),);
        showAss();
    }
    catch(error){
        console.log(error);
    }
}