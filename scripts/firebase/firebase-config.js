// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB56nA1xxGKjobAHagG9kD4QIFtJ-zfK3Q",
    authDomain: "akokahitsinolang.firebaseapp.com",
    databaseURL: "https://akokahitsinolang-default-rtdb.firebaseio.com",
    projectId: "akokahitsinolang",
    storageBucket: "akokahitsinolang.firebasestorage.app",
    messagingSenderId: "456265035046",
    appId: "1:456265035046:web:0aac074e70078cb36925e7",
    measurementId: "G-HQ2H3EP6QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);