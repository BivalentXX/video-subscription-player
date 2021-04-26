// import firebase from "firebase";

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage};

import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import '../.env'
// import { config } from '../config.js'

const { REACT_APP_apiKey, REACT_APP_authDomain, REACT_APP_projectId, REACT_APP_storageBucket, REACT_APP_messagingSenderId, REACT_APP_appId} = process.env

const configKeys = {
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId
}

const firebase = Firebase.initializeApp(configKeys)

// seedDatabase(firebase);

export { firebase }