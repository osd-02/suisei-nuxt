require("dotenv").config();
import firebase from "@firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: process.env.FLAMELINK_API_KEY,
  authDomain: process.env.FLAMELINK_AUTH_DOMAIN,
  projectId: process.env.FLAMELINK_PROJECT_ID,
  databaseURL: process.env.FLAMELINK_DB_URL,
  storageBucket: process.env.FLAMELINK_STORAGE_BUCKET,
  messagingSenderId: process.env.FLAMELINK_MESSAGING_SENDER_ID,
  appId: process.env.FLAMELINK_APP_ID,
  measurementId: process.env.FLAMELINK_MEASUREMENT_ID,
})
}

export default firebase