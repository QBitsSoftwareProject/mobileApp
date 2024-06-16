// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBefGNwALa65sWL3we96bdfR0dNWwwKZrg",
  authDomain: "mental-health-and-wellne-9f050.firebaseapp.com",
  projectId: "mental-health-and-wellne-9f050",
  storageBucket: "mental-health-and-wellne-9f050.appspot.com",
  messagingSenderId: "10404649959",
  appId: "1:10404649959:web:c75780d01034076d12bb42",
  measurementId: "G-B61RYBF306"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);