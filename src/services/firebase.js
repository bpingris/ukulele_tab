import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMkZrVCXORF63xhordB8hc6nBFf3lXMEQ",
  authDomain: "ukulele-editor.firebaseapp.com",
  databaseURL: "https://ukulele-editor.firebaseio.com",
  projectId: "ukulele-editor",
  storageBucket: "ukulele-editor.appspot.com",
  messagingSenderId: "635399149315",
  appId: "1:635399149315:web:836b03300c1d8574"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
