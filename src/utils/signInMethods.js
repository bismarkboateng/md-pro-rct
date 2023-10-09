import { 
    getAuth, signInWithPopup, 
    GoogleAuthProvider, FacebookAuthProvider, 
    sendSignInLinkToEmail
  } from "firebase/auth"
import { app, actionCodeSettings } from "./firebaseConfig";

const auth = getAuth()


export const googleSignIn = () => {
    const provider = new GoogleAuthProvider()


    signInWithPopup(auth, provider)
      .then((result) => {

        const user = JSON.stringify(result.user)
        localStorage.setItem("user", user)

      }).catch((error) => {
        console.log(error.message)
      });
}


export const facebookSignIn = () => {
    const provider = new FacebookAuthProvider()

    signInWithPopup(auth, provider)
    .then((result) => {

      const user = JSON.stringify(result.user)
      localStorage.setItem("user", user)

    }).catch((error) => {
      console.log(error.message)
    });
}


// export const emailSignIn = (email) => {
//   sendSignInLinkToEmail(auth, email, actionCodeSettings)
//     .then(() => {
//     localStorage.setItem('emailForSignIn', email);
  
//   })
//     .catch((error) => {
//       const errorMessage = error.message;
//       console.log(errorMessage)
//   });
// }
