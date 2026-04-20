import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoGVwqIQg__HdBG_QjrFwoDKNlXkcsG0s",
  authDomain: "naadh-innovation-websitev1.firebaseapp.com",
  projectId: "naadh-innovation-websitev1",
  storageBucket: "naadh-innovation-websitev1.firebasestorage.app",
  messagingSenderId: "670448611050",
  appId: "1:670448611050:web:4a028f110e7ce936123193",
  measurementId: "G-ZVXYKY3E5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);