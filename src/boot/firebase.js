// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  // ...
  apiKey: 'AIzaSyCezz1YaRsvMQY-k5R0Ei3Y7FSanU7xwHw',
  authDomain: 'alida-school.firebaseapp.com',
  projectId: 'alida-school',
  storageBucket: 'alida-school.appspot.com',
  messagingSenderId: '263177587291',
  appId: '1:263177587291:web:efc5853671cac183b98d7e',
  measurementId: 'G-TXV2SDDS84'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage().ref()
const db = firebase.firestore()

export default db
