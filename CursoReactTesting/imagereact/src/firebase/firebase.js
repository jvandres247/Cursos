import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBcOjV0Snrh6u7MegM8IGVBl0xv9oJc8dI",
    authDomain: "imagereact-c37fb.firebaseapp.com",
    projectId: "imagereact-c37fb",
    storageBucket: "imagereact-c37fb.appspot.com",
    messagingSenderId: "643691506942",
    appId: "1:643691506942:web:929e23430acd57829e09af"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

