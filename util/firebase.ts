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
  apiKey: "AIzaSyCJ7WPFCK-weZcJNhT0Dqs95YCuj02k3kU",
  authDomain: "clubhub-548cb.firebaseapp.com",
  projectId: "clubhub-548cb",
  storageBucket: "clubhub-548cb.appspot.com",
  messagingSenderId: "68145781303",
  appId: "1:68145781303:web:593fa6c24d70bf3ebdfdb2"
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
