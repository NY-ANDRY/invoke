// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQfVLZt6RSx4sMq9Y7X79mOzTNssW2-8k",
    authDomain: "exort-5703b.firebaseapp.com",
    databaseURL: "https://exort-5703b-default-rtdb.firebaseio.com",
    projectId: "exort-5703b",
    storageBucket: "exort-5703b.firebasestorage.app",
    messagingSenderId: "786374680671",
    appId: "1:786374680671:web:b61c37aaadcc8568e67bea",
    measurementId: "G-PKRW7B0LWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const realtimeDb = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, realtimeDb, db, analytics, auth, provider, signInWithPopup, signOut };