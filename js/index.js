// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAygPsxsqHw6JhZffONdaQiDNsOw-h7t80",
    authDomain: "githubws-4d316.firebaseapp.com",
    projectId: "githubws-4d316",
    storageBucket: "githubws-4d316.appspot.com",
    messagingSenderId: "29358105382",
    appId: "1:29358105382:web:d156fc97ced96e1a77d7e7",
    measurementId: "G-V56X1H35TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);