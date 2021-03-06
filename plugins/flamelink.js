if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import flamelink from 'flamelink/app'
import firebase from 'firebase/app'
require('flamelink/content')
import 'flamelink/cf/content'
import 'flamelink/cf/storage'
require('firebase/auth')
require('firebase/firestore')

export default ({ app }) => {
  let firebaseApp
  require('firebase/auth')
  require('firebase/firestore')

  if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp({
      apiKey: process.env.FLAMELINK_API_KEY,
      authDomain: process.env.FLAMELINK_AUTH_DOMAIN,
      projectId: process.env.FLAMELINK_PROJECT_ID,
      databaseURL: process.env.FLAMELINK_DB_URL,
      storageBucket: process.env.FLAMELINK_STORAGE_BUCKET,
      messagingSenderId: process.env.FLAMELINK_MESSAGE_SENDER_ID,
      appId: process.env.FLAMELINK_APP_ID,
      measurementId: process.env.FLAMELINK_MEASUREMENT_ID,
    })
  } else {
    firebaseApp = firebase.app()
  }

  if (typeof window === 'undefined') {
    const admin = require('firebase-admin')
    if (!admin.apps.length) {
      firebaseApp = admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FSA_PROJECT_ID,
          privateKey: process.env.FSA_PRIVATE_KEY.replace(/\\n/g, '\n'),
          clientEmail: process.env.FSA_CLIENT_EMAIL,
          authUrl: process.env.FSA_AUTH_URL,
        }),
        databaseURL: process.env.FLAMELINK_DB_URL,
        storageBucket: process.env.FLAMELINK_STORAGE_BUCKET,
      })
    } else {
      firebaseApp = admin.app()
    }
  } else {
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp({
        apiKey: process.env.FLAMELINK_API_KEY,
        authDomain: process.env.FLAMELINK_AUTH_DOMAIN,
        projectId: process.env.FLAMELINK_PROJECT_ID,
        databaseURL: process.env.FLAMELINK_DB_URL,
        storageBucket: process.env.FLAMELINK_STORAGE_BUCKET,
        messagingSenderId: process.env.FLAMELINK_MESSAGE_SENDER_ID,
        appId: process.env.FLAMELINK_APP_ID,
        measurementId: process.env.FLAMELINK_MEASUREMENT_ID,
      })
    } else {
      firebaseApp = firebase.app()
    }
  }
  app.flamelink = flamelink({ firebaseApp, dbType: 'cf' })
}
