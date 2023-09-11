// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgJalkggVVC9wCiWzgx5s9y_zeClErBog",
  authDomain: "netflix-replica-react.firebaseapp.com",
  projectId: "netflix-replica-react",
  storageBucket: "netflix-replica-react.appspot.com",
  messagingSenderId: "1082308221235",
  appId: "1:1082308221235:web:56bf29812e464aa1468646",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
