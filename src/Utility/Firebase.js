// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGnwI0adBMyozgqVLkRjt2-EmSv2TDrww",
  authDomain: "simple-firebase-auth-8606b.firebaseapp.com",
  projectId: "simple-firebase-auth-8606b",
  storageBucket: "simple-firebase-auth-8606b.firebasestorage.app",
  messagingSenderId: "317678647626",
  appId: "1:317678647626:web:a373de0b9fd4e81cac69b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);