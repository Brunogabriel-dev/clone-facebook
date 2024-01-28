import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAV8UUNBmY143u09CE-zEeR_hydXKKpWMA",
  authDomain: "clone-facebook-yt.firebaseapp.com",
  projectId: "clone-facebook-yt",
  storageBucket: "clone-facebook-yt.appspot.com",
  messagingSenderId: "951049072300",
  appId: "1:951049072300:web:ba89a576d7ced68ed57909"
};
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };