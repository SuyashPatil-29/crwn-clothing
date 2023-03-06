import signInWithGooglePopup , {createUserDocumentFromAuth, signInWithGoogleRedirect , auth} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import {getRedirectResult} from "firebase/auth"
import { async } from "@firebase/util";


const SignIn = ()=>{

    useEffect(
        () => async () => {
          const response = await getRedirectResult(auth);
          if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user)
          }
        },
        []
      );

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    };


    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign-In With google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign-In With google Redirect</button>
        </div>
    )
}

export default SignIn;