// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCh73_6Hqo9V-KGpbxzEa8eRYia1QtH9Wg",
//   authDomain: "cook-book-3c85d.firebaseapp.com",
//   projectId: "cook-book-3c85d",
//   storageBucket: "cook-book-3c85d.firebasestorage.app",
//   messagingSenderId: "251380451626",
//   appId: "1:251380451626:web:ac9b94627de2b4e2687653",
//   measurementId: "G-2JKYF2N3QE",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// export const auth = getAuth(app);
// export const db = getFirestore(app)








// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrEMfoPObG7DFJ8vDmb9OcRNCrVjsbJnY",
  authDomain: "gym-app-26386.firebaseapp.com",
  projectId: "gym-app-26386",
  storageBucket: "gym-app-26386.firebasestorage.app",
  messagingSenderId: "27807854670",
  appId: "1:27807854670:web:3b0c64f44ac2be5411531f",
  measurementId: "G-G6Y4FWC6T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app)
