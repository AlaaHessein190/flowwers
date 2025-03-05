// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqh1OVVPkURHCLVitZ0DE629_ZTQL1Rzc",
  authDomain: "myfrout.firebaseapp.com",
  projectId: "myfrout",
  storageBucket: "myfrout.firebasestorage.app",
  messagingSenderId: "68542742099",
  appId: "1:68542742099:web:aca8eac36533eb74b310a6",
  measurementId: "G-BD1BQNHJ5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);