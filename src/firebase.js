// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9JsFWQmf4FBCh17_cZW7MpQdAPZEf2XA",
  authDomain: "wordle-f6f3f.firebaseapp.com",
  projectId: "wordle-f6f3f",
  storageBucket: "wordle-f6f3f.appspot.com",
  messagingSenderId: "768866282492",
  appId: "1:768866282492:web:51e27fd1ad5a017cb02079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();