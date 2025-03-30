import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

const firebaseConfig = {

  apiKey: "yourApiKey",

  authDomain: "the-bespoke-lounge-227a7.firebaseapp.com",

  projectId: "the-bespoke-lounge-227a7",

  storageBucket: "the-bespoke-lounge-227a7.firebasestorage.app",

  messagingSenderId: "609233305503",

  appId: "1:609233305503:web:c562aeb636ba3966ab87aa",

  measurementId: "G-CHKZXWVJHN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);



document.getElementById("submit").onclick= function(event){
    event.preventDefault();
//inputs
const useremail = document.getElementById("email").value;
const userpassword = document.getElementById("password").value;
    
const auth = getAuth();
signInWithEmailAndPassword(auth, useremail, userpassword)
  .then((userCredential) => {
    //login
    const user = userCredential.user;
    Swal.fire({
      title: "Login",
      text: "You have successfully logged in.",
      icon: "success",
  });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This Account doesn't Exist",});
    
  });
};