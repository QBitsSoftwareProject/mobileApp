// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsyvKrP8F2hwQeUqjAgGLn0EoY6IC1xjo",
  authDomain: "uplodingimage.firebaseapp.com",
  projectId: "uplodingimage",
  storageBucket: "uplodingimage.appspot.com",
  messagingSenderId: "269817166890",
  appId: "1:269817166890:web:b17c0a440bbb379b9a1753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);