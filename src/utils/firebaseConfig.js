import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const env = import.meta.env

const firebaseConfig = {
  apiKey: env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "medium-e055c.firebaseapp.com",
  projectId: env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "medium-project-2f385.appspot.com",
  messagingSenderId: env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: env.VITE_REACT_APP_FIREBASE_APPID,
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()


// export const actionCodeSettings = {
//   url: "http://localhost:5173/confirm",
//   handleCodeInApp: true,
// };