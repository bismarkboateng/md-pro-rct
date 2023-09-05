import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBHbj1cssfX0P6sjUaWp1-rQtdJd9X24Zg",
  authDomain: "medium-project-2f385.firebaseapp.com",
  projectId: "medium-project-2f385",
  storageBucket: "medium-project-2f385.appspot.com",
  messagingSenderId: "289690746946",
  appId: "1:289690746946:web:65002fc07dad8c84b46ddb"
};



export const app = initializeApp(firebaseConfig);


export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
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