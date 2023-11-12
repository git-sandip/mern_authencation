// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "auth-app-e7a8c.firebaseapp.com",
  projectId: "auth-app-e7a8c",
  storageBucket: "auth-app-e7a8c.appspot.com",
  messagingSenderId: "676766320233",
  appId: "1:676766320233:web:4bd121cf07c6138d4a04f8",
  measurementId: "G-JLCT2P04NY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
