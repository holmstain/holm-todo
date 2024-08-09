import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import './.env'

// Firebase Database

const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API_KEY",
  authDomain: "process.env.FIREBASE_AUTH_DOMAIN",
  projectId: "holm-to-do",
  storageBucket: "process.env.FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "process.env.FIREBASE_MESSAGING_SENDER_ID",
  appId: "process.env.FIREBASE_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);