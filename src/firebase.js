// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPjwHKaPoAifMvNQ1wYoOqI5s5e5Bkcjk",
  authDomain: "podcast-app-react-ce8e7.firebaseapp.com",
  projectId: "podcast-app-react-ce8e7",
  storageBucket: "podcast-app-react-ce8e7.appspot.com",
  messagingSenderId: "492547708948",
  appId: "1:492547708948:web:23bfd76bdc299c94936f01",
  measurementId: "G-Y3NSKZ4ZM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db= getFirestore(app);
const storage=getStorage(app);
const auth=getAuth(app);

export {auth,db,storage};