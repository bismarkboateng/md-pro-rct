import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// const env = import.meta.env

// const firebaseConfig = {
//   apiKey: env.VITE_REACT_APP_FIREBASE_API_KEY,
//   authDomain: "medium-e055c.firebaseapp.com",
//   projectId: env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: "medium-e055c.appspot.com",
//   messagingSenderId: env.VITE_REACT_APP_MESSAGING_SENDER_ID,
//   appId: env.VITE_REACT_APP_FIREBASE_APPID,
// }

const config = {
  apiKey: "AIzaSyBC5tt0jupt71iUgi6Zvw1U1G16KveA8F8",
  authDomain: "medium-e055c.firebaseapp.com",
  projectId: "medium-e055c",
  storageBucket: "medium-e055c.appspot.com",
  messagingSenderId: "303212183729",
  appId: "1:303212183729:web:51eb9fd315ecee5a852290"
}


export const app = initializeApp(config)
export const auth = getAuth(app)
export const db = getFirestore()

export const actionCodeSettings = {
  url: "http://localhost:5173/confirm",
  handleCodeInApp: true,
}