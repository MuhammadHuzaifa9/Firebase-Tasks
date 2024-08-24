import {ref,storage,uploadBytes,uploadBytesResumable, getDownloadURL,auth,db,onAuthStateChanged,collection, addDoc,getDocs,signOut} from './firebase.js';

const name=document.getElementById('name');
const link=document.getElementById('url');
const submitbtn=document.getElementById('submit');
const showAssignment=document.getElementById('maindiv');
const logoutbtn=document.getElementById('logout');
const loading=document.getElementById('loading');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const image=document.getElementById('image');
const uploadBtn=document.getElementById('upload');

var imageUrl;
// image.addEventListener('change',()=>{



// })


const updateLoader = (progress) => {
  if (progress < 100) {
      loading.style.display = 'block';
      progressBar.style.width = `${progress}%`;
      progressText.innerText = `${Math.round(progress)}%`;
  } else {
    uploadBtn.innerText='Processing';
      setTimeout(()=>{

        loading.style.display = 'none';
      },3000)
    }
};

const upload = (event) => {
  event.preventDefault();
  const file = image.files[0];
  if (!file) {
      alert('Please select a file.');
      return;
  }
  const spaceRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(spaceRef, file);

  uploadTask.on('state_changed',
      (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          updateLoader(progress);
          
      },
      (error) => {
          console.log(error);
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              imageUrl = downloadURL;
              uploadBtn.innerText='Uploaded';
          });
      }
  );
};
uploadBtn.addEventListener('click', upload);

const addAssignment=async(event)=>{
    event.preventDefault();
    
    if(name.value!=='' && link.value!=='' && imageUrl!==null){
        submitbtn.innerText='Loading...'

    try {
        const docRef = await addDoc(collection(db, "assignments"), {
          name:name.value,
          link:link.value,
          image:imageUrl
        });
        submitbtn.innerText='Submit'
        uploadBtn.innerText='Upload';
        showAssignment.innerHTML='';
        showAss();
        console.log("Document written with ID: ", docRef.id);
        imageUrl=null;
    } catch (e) {
        submitbtn.innerText='Submit'
        uploadBtn.innerText='Upload';
        console.error("Error adding document: ", e);
        alert("Waiting for Image!")
    }
    
}

}

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
    
    const querySnapshot = await getDocs(collection(db, "assignments"));
    querySnapshot.forEach((doc) => {
        const{name,link,image}=doc.data();
        showAssignment.innerHTML+=`<center><div style="border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin-bottom: 20px; max-width: 600px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <img src="${image}" alt="${name}" style="width: 100%; border-radius: 8px 8px 0 0; object-fit: cover;">
                <h2 style="font-family: Arial, sans-serif; font-size: 24px; margin: 16px 0 8px; color: #333;">${name}</h2>
                <p style="font-family: Arial, sans-serif; font-size: 16px; margin: 0 0 8px; color: #555;">${link}</p>
            </div>`
      console.log(`${doc.id} => ${doc.data()}`);
    });
}
showAss();




submitbtn.addEventListener('click',addAssignment);

