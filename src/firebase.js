import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHRiGxV4Wp__BJkpKJR-eNE2TrWRYQx5k",
  authDomain: "clone-c4cfc.firebaseapp.com",
  projectId: "clone-c4cfc",
  storageBucket: "clone-c4cfc.appspot.com",
  messagingSenderId: "982848490619",
  appId: "1:982848490619:web:46bc29933d74bb994826de",
  measurementId: "G-V35DCS42KP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };