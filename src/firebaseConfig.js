import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNfZ5uHRDvfg7IEbg1cYbASb3DtzQfzxI",
  authDomain: "react-3b10e.firebaseapp.com",
  projectId: "react-3b10e",
  storageBucket: "react-3b10e.firebasestorage.app",
  messagingSenderId: "1086523445789",
  appId: "1:1086523445789:web:8db7c8d8ca7fa6072a2cf4",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);