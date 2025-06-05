
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDim9k5CHfNythq6ORypN_RfwyLNMuxVLs",
    authDomain: "sign-2fd98.firebaseapp.com",
    projectId: "sign-2fd98",
    storageBucket: "sign-2fd98.firebasestorage.app",
    messagingSenderId: "548682903618",
    appId: "1:548682903618:web:0f0ca286f902c7fbacfddb"
  };

  const app = initializeApp(firebaseConfig);

  window.auth = getAuth(app);
  window.db = getFirestore(app);

 