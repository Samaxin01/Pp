   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";

   
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDim9k5CHfNythq6ORypN_RfwyLNMuxVLs",
    authDomain: "sign-2fd98.firebaseapp.com",
    projectId: "sign-2fd98",
    storageBucket: "sign-2fd98.firebasestorage.app",
    messagingSenderId: "548682903618",
    appId: "1:548682903618:web:0f0ca286f902c7fbacfddb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //inputs
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  //submit btn

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event){
    event.preventDefault()
    
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })