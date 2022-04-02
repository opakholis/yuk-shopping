import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGUHz8T1GwFkmaZJECtP2qiB0NJGVl2hA",
  authDomain: "jcc-final-project-b2.firebaseapp.com",
  projectId: "jcc-final-project-b2",
  storageBucket: "jcc-final-project-b2.appspot.com",
  messagingSenderId: "661745766721",
  appId: "1:661745766721:web:821ca554666bc5fb8791c0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
