// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi0VUpRVAcSwEbzKKMR3_GmMdfDwdN3t4",
  authDomain: "hubspot-careers.firebaseapp.com",
  projectId: "hubspot-careers",
  storageBucket: "hubspot-careers.appspot.com",
  messagingSenderId: "857321811127",
  appId: "1:857321811127:web:b1077e2658eeba9fd8f132",
  measurementId: "G-Z29XQPZ7CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);