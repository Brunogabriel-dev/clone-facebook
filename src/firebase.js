import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_aJwLK-z-lv7AMSLsqrzt6wFBHJzVt2w",
  authDomain: "projeto-fb-84fae.firebaseapp.com",
  projectId: "projeto-fb-84fae",
  storageBucket: "projeto-fb-84fae.appspot.com",
  messagingSenderId: "303360556108",
  appId: "1:303360556108:web:d1e5e236b0220f3a22c8e9"
};
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };