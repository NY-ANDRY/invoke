// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWlW4jbIiAQir98enh7mqqdS0rT6OSTGU",
    authDomain: "portfolio-a31f7.firebaseapp.com",
    databaseURL: "https://portfolio-a31f7-default-rtdb.firebaseio.com",
    projectId: "portfolio-a31f7",
    storageBucket: "portfolio-a31f7.firebasestorage.app",
    messagingSenderId: "1042246728477",
    appId: "1:1042246728477:web:d4df0b9f5d5a94ce83bff4",
    measurementId: "G-TLLDSWP70Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, database, analytics, auth, provider, signInWithPopup, signOut };