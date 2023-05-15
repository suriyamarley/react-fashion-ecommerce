import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-PtiS1-hpNDZ6MgZkex2qjzICAv0iIfo",
  authDomain: "react-shopping-297d4.firebaseapp.com",
  projectId: "react-shopping-297d4",
  storageBucket: "react-shopping-297d4.appspot.com",
  messagingSenderId: "531600221625",
  appId: "1:531600221625:web:1efd9f000a751d21798268",
  measurementId: "G-ZWEBGMWRHE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { db, firestore, storage };
