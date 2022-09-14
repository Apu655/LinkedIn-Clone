import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDVW8VQyrjP-MOjgdSbWQJX0iOJH4dFXA0",
    authDomain: "linkedin-4acab.firebaseapp.com",
    projectId: "linkedin-4acab",
    storageBucket: "linkedin-4acab.appspot.com",
    messagingSenderId: "280274652767",
    appId: "1:280274652767:web:ea82d5b84787e7690615ea"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };