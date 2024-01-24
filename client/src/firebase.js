// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3f586.firebaseapp.com",
  projectId: "mern-blog-3f586",
  storageBucket: "mern-blog-3f586.appspot.com",
  messagingSenderId: "477936559338",
  appId: "1:477936559338:web:89acf6b26d2d618742e393"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);