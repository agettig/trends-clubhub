import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import withFirebaseAuth from "react-with-firebase-auth";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXOhHJOGTEiqiSjS4YrQ4KHr9UX8gd1QQ",
  authDomain: "trends-clubhub.firebaseapp.com",
  projectId: "trends-clubhub",
  storageBucket: "trends-clubhub.appspot.com",
  messagingSenderId: "944154353210",
  appId: "1:944154353210:web:ab64536c28a075f34a5f03",
  measurementId: "G-DH7LPRTD1L",
};

const providers = {
  googleProvider: new GoogleAuthProvider(),
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
});

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider);
};

const signOutFirebase = () => {
  signOut(auth);
};

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
};
