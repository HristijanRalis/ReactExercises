import { collection, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1eLXMbW2vv6QTfAIj1UQC7xWIerwngYk",
  authDomain: "countries-fe21.firebaseapp.com",
  projectId: "countries-fe21",
  storageBucket: "countries-fe21.firebasestorage.app",
  messagingSenderId: "350048780783",
  appId: "1:350048780783:web:801bb80fa9ce1a522ff61a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const countriesCollection = collection(db, "countries");
