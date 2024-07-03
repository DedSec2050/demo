// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwUvWJr4mIvNVqSgys0SmBgtDkcBWPRxw",
  authDomain: "cyb-lms.firebaseapp.com",
  projectId: "cyb-lms",
  storageBucket: "cyb-lms.appspot.com",
  messagingSenderId: "324722386677",
  appId: "1:324722386677:web:9cd614601a64c11b5607bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
