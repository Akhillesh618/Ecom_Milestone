// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDeGoBLk2N4HVWFwarmAk4q3z0f3O8-q0",
  authDomain: "fir-f571b.firebaseapp.com",
  projectId: "fir-f571b",
  storageBucket: "fir-f571b.appspot.com",
  messagingSenderId: "130960523912",
  appId: "1:130960523912:web:15b54ac300aaac0fc3553d",
  measurementId: "G-P8M6DW7RW7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};