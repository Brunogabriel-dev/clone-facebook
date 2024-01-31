import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBx7aMYR75jVZik6yi8hYe5as4Gy-6ZrUU",
  authDomain: "fb-clone-400e7.firebaseapp.com",
  projectId: "fb-clone-400e7",
  storageBucket: "fb-clone-400e7.appspot.com",
  messagingSenderId: "1081486773429",
  appId: "1:1081486773429:web:66fcd87a251607541e42fc"
};
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();
const auth = app.auth();

export { auth, db, storage };