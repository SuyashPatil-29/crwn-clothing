// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
//above line is found inside the docs 
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEKnqeFoPOA-ot1Pq_sBVXXhEPp5LKAA8",
  authDomain: "crwn-clothing-db-574a9.firebaseapp.com",
  projectId: "crwn-clothing-db-574a9",
  storageBucket: "crwn-clothing-db-574a9.appspot.com",
  messagingSenderId: "1081793952743",
  appId: "1:1081793952743:web:05178bc3b3ec879239db42"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth , provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
   const userDocRef = doc(db, "users", userAuth.uid)

   console.log(userDocRef);

   const userSnapshot = await getDoc(userDocRef)
   console.log(userSnapshot.exists());

   if(!userSnapshot.exists()){
    const {displayName , email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error){
      console.log(("error creating the user", error.message));
    }
   }

   return userDocRef;
}

export default signInWithGooglePopup