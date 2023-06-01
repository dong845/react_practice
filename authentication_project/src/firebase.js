// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKLZtkA_2dwOSiCtgAvH1hxbYc1k6ZCHc",
  authDomain: "authentication-2b2ce.firebaseapp.com",
  projectId: "authentication-2b2ce",
  storageBucket: "authentication-2b2ce.appspot.com",
  messagingSenderId: "600892692897",
  appId: "1:600892692897:web:3e763e19733885b0d853e0",
  measurementId: "G-HJRDQ0Z7QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;