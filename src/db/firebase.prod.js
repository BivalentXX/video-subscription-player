// import firebase from "firebase";

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage};

import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { config } from '../config.js'



const configKeys = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.apiKey,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId
}

const firebase = Firebase.initializeApp(configKeys)

// seedDatabase(firebase);

export { firebase }