// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALiVeHaz4MUuuNXA_VM6teSTgVtThi6EE",
    authDomain: "netflix-gpt-5b7a1.firebaseapp.com",
    projectId: "netflix-gpt-5b7a1",
    storageBucket: "netflix-gpt-5b7a1.appspot.com",
    messagingSenderId: "934362855786",
    appId: "1:934362855786:web:38da8934312e86a6920d13",
    measurementId: "G-56N8QTGY37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
