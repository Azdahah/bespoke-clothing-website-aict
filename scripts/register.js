import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

const firebaseConfig = {

  apiKey: "AIzaSyAygLJDa95re1f86T-YUa4Z5MRn7N-ONRg",

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
createUserWithEmailAndPassword(auth, useremail, userpassword)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location.href="index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in your name.",});
  });
};