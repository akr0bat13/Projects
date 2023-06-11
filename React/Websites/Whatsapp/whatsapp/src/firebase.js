import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEfF3578Q74a8fvs9tSkmuIvzwK-LyeUs",
  authDomain: "whatsapp-3943d.firebaseapp.com",
  projectId: "whatsapp-3943d",
  storageBucket: "whatsapp-3943d.appspot.com",
  messagingSenderId: "676455370831",
  appId: "1:676455370831:web:d4289e0cd816d1a13bda3a",
  measurementId: "G-NHL8G242YQ"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;