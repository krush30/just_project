// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ4AAHP4BWOIM5e6kjXDNUW905LO3nWBM",
    authDomain: "nproject-e51be.firebaseapp.com",
    projectId: "nproject-e51be",
    storageBucket: "nproject-e51be.appspot.com",
    messagingSenderId: "1071526677803",
    appId: "1:1071526677803:web:67617a85e6ce11c9ca496e",
    measurementId: "G-GK0Y1EEKMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();