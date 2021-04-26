// import firebase from "firebase";

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage};

import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { config } from '../config.js'


// const configKeys = {
//   apiKey: "AIzaSyCam_3lLPEVUUJZrLmahL73f0T4Dha4t14",
//   authDomain: "video-subscription-player.firebaseapp.com",
//   projectId: "video-subscription-player",
//   storageBucket: "video-subscription-player.appspot.com",
//   messagingSenderId: "273317949225",
//   appId: "1:273317949225:web:fc7722dc648964a9e85138"
// }


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