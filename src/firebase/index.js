import firebase from "firebase/app"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBp4RU3q327hYyRxN_p1aEa1x9P33V0XC4",
    authDomain: "hack-2021-5c31e.firebaseapp.com",
    projectId: "hack-2021-5c31e",
    storageBucket: "hack-2021-5c31e.appspot.com",
    messagingSenderId: "851531643081",
    appId: "1:851531643081:web:859e0bfcca4b5efeecf518",
    measurementId: "G-0BFV4H048V"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, firebase as default}