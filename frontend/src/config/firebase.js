// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIK8WWpbxJEmWRpCdkyHgonuxvz_L-gJ4",
  authDomain: "mental-health-app-83d87.firebaseapp.com",
  projectId: "mental-health-app-83d87",
  storageBucket: "mental-health-app-83d87.appspot.com",
  messagingSenderId: "202077495682",
  appId: "1:202077495682:web:a1a7401d2f8db09b69ef9b",
  measurementId: "G-B4DXN1T0NT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const imageDb = getStorage(app);
