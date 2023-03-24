// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1rKTV3X-JnrY_359qI2Gl2ilkK7tGgqA",
  authDomain: "react-dominos-app.firebaseapp.com",
  projectId: "react-dominos-app",
  storageBucket: "react-dominos-app.appspot.com",
  messagingSenderId: "1053807412282",
  appId: "1:1053807412282:web:c8fd8fdeb5884308c8a103",
  measurementId: "G-BH55MZF99J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
