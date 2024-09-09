// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth";  // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5rhxMT6v_X-8KPS9KyP529VFeK86yPCo",
  authDomain: "recipe-fb419.firebaseapp.com",
  projectId: "recipe-fb419",
  storageBucket: "recipe-fb419.appspot.com",
  messagingSenderId: "1096280593756",
  appId: "1:1096280593756:web:614f522ff2459bd7995d99",
  measurementId: "G-9P6S04HRMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); // Initialize Firebase Authentication properly
