// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEAPPKEY,
  authDomain: "mern-estate-1f9d4.firebaseapp.com",
  projectId: "mern-estate-1f9d4",
  storageBucket: "mern-estate-1f9d4.appspot.com",
  messagingSenderId: "621213007806",
  appId: "1:621213007806:web:81799d54455a84526103ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
