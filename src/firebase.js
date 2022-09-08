// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAuxbF9Vwvow8RhGOije3Nx8cOX7Lkyhk",
  authDomain: "vibes-e25cb.firebaseapp.com",
  projectId: "vibes-e25cb",
  storageBucket: "vibes-e25cb.appspot.com",
  messagingSenderId: "492872673282",
  appId: "1:492872673282:web:e00abb712cbd15a778df1b",
  measurementId: "G-KY0MYCTBVF"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
// that tell firebase that .. we need google login service [GoogleAuthProvider]
const provider = new GoogleAuthProvider();


//export { auth, provider };
export { db, auth, provider };
//export default db ;


