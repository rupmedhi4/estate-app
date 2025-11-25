import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-estate-fed52.firebaseapp.com",
  projectId: "next-estate-fed52",
  storageBucket: "next-estate-fed52.firebasestorage.app",
  messagingSenderId: "1035171161688",
  appId: "1:1035171161688:web:e81b95e9565e464b478c2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);