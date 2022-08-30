// Import the functions you need from the SDKs you need

//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
//import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
//import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import firebase from "firebase/compat";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js'
//import { initializeApp } from 'firebase/app';
import { getDatabase} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js'
const firebaseConfig = {
    apiKey: "AIzaSyAygPsxsqHw6JhZffONdaQiDNsOw-h7t80",
    authDomain: "githubws-4d316.firebaseapp.com",
    databaseURL: "https://githubws-4d316-default-rtdb.firebaseio.com",
    projectId: "githubws-4d316",
    storageBucket: "githubws-4d316.appspot.com",
    messagingSenderId: "29358105382",
    appId: "1:29358105382:web:d156fc97ced96e1a77d7e7",
    measurementId: "G-V56X1H35TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);

import { ref, set } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js'

function writeData(mail, message ) {
    const db = getDatabase();
   // db.push()
    set(ref(db, 'messages/' + new Date().toString()), {
        mail: mail,
        message: message,

    });
}

//var messagesRef = firebase.database().ref('messages');

/*async function getMessages(db) {
    const messages = collection(db, 'messages');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
*/

function saveMessage( mail,message)
{
    var newMessageRef = messagesRef.push();
    newMessageRef.set(
        {
            mail:mail,
            message:message
        }
    );
}

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e)
{
    e.preventDefault();


        var mail = getInputVale('mail');
        var message = getInputVale('message');
        console.log(mail, message);

        writeData(mail, message);

    if( message !== "") {
        console.log("aaaaaaaaaaa");
        alert("Your feedback is taken");
    }
    else
    {
        console.log("bbbbbbb");
        alert("Your opinion is empty");
    }
    //saveMessage(mail,message);


}

function getInputVale(id)
{
    return document.getElementById(id).value;
}