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




// // Import the necessary functions from Firebase SDKs
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC5rhxMT6v_X-8KPS9KyP529VFeK86yPCo",
//   authDomain: "recipe-fb419.firebaseapp.com",
//   projectId: "recipe-fb419",
//   storageBucket: "recipe-fb419.appspot.com",
//   messagingSenderId: "1096280593756",
//   appId: "1:1096280593756:web:614f522ff2459bd7995d99",
//   measurementId: "G-9P6S04HRMR"
// };

// // Check if Firebase apps are already initialized
// // let app;
// // if (getApps().length === 0) {
// //   // Initialize Firebase app if not already initialized
// //   app = initializeApp(firebaseConfig);
// // } else {
// //   // Use the existing Firebase app
// //   app = getApp();
// // }

// // Initialize Firebase Authentication only if not already initialized
// // let auth;
// // if (!getAuth(app).app._isInitialized) { // Use the internal '_isInitialized' property
// //   auth = initializeAuth(app, {
// //     persistence: getReactNativePersistence(AsyncStorage),
// //   });
// // } else {
// //   auth = getAuth(app);
// // }

// // Initialize Firestore and Storage
// let app;
// export const db = getFirestore(app);
// export const storage = getStorage(app);