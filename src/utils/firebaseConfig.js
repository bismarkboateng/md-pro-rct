import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const env = import.meta.env

const firebaseConfig = {
  apiKey: env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "medium-project-2f385.firebaseapp.com",
  projectId: env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "medium-project-2f385.appspot.com",
  messagingSenderId: env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: env.VITE_REACT_APP_FIREBASE_APPID,
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore()


export const actionCodeSettings = {

  url: "localhost",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'localhost'
};