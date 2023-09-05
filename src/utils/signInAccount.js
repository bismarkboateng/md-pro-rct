// import googleSignIn from "./signInMethods"

import { googleSignIn, facebookSignIn } from "./signInMethods"

export default function signInAccount(text) {
    switch(text) {
        case "Sign in with Google":
          console.log("Sign in with google button clicked")
          googleSignIn()
          break
  
        case "Sign in with Facebook":
          console.log("Facebook button clicked")
          facebookSignIn()
          break
  
        case "Sign in with Apple":
          console.log("Apple button Clicked")
          break
        
        case "Sign in with Twitter":
          console.log("Sign in with Twitter")
          break
  
        default:
          console.log("nothing clicked")
    }
}