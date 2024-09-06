// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const db=getFirestore(app)
export const storage=getStorage(app)