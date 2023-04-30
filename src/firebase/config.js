import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCdemMowpoC4Enau4IKYpGcSCQpPOjR8BU",
  authDomain: "finance-tracker-b26b8.firebaseapp.com",
  projectId: "finance-tracker-b26b8",
  storageBucket: "finance-tracker-b26b8.appspot.com",
  messagingSenderId: "42717600250",
  appId: "1:42717600250:web:3af8ba1475fd4832326c43",
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
