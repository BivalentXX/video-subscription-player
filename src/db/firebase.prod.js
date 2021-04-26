// import firebase from "firebase";

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage};

import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { config } from '../config.js'



const configKeys = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.apiKey,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
}

const firebase = Firebase.initializeApp(configKeys)

// seedDatabase(firebase);

export { firebase }