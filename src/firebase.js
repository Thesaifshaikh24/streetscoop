// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmfSVT-qbEXA1ne6hj9cFhtklcvtveizo",
  authDomain: "streetscoop-9e150.firebaseapp.com",
  projectId: "streetscoop-9e150",
  storageBucket: "streetscoop-9e150.appspot.com",
  messagingSenderId: "145358026992",
  appId: "1:145358026992:web:aea517ef418d9d1125aa35"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
