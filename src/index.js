// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-qQUcXZVsCxVxjCaoHnre4q6mwJ61_bQ",
  authDomain: "iot-project-1732d.firebaseapp.com",
  projectId: "iot-project-1732d",
  storageBucket: "iot-project-1732d.appspot.com",
  messagingSenderId: "460020314463",
  appId: "1:460020314463:web:69da34e5f13c033d9dc6ea",
  measurementId: "G-4RCJ68CZH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)