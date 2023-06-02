import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  
    apiKey: "AIzaSyAYlqeHQ10l0pTs3IK83OL8gK5JSbrVLrg",
    authDomain: "react-fashion-store-365cb.firebaseapp.com",
    projectId: "react-fashion-store-365cb",
    storageBucket: "react-fashion-store-365cb.appspot.com",
    messagingSenderId: "746110171604",
    appId: "1:746110171604:web:93bf7394f0431c219b3e41",
    measurementId: "G-7573Y8VWHD"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { db, firestore, storage };
