// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDiklnci8fyCElxZfNVvHokARnSBpY4wI4",
  authDomain: "holm-to-do.firebaseapp.com",
  projectId: "holm-to-do",
  storageBucket: "holm-to-do.appspot.com",
  messagingSenderId: "608783997993",
  appId: "1:608783997993:web:9de34641aa4febcecc9038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);