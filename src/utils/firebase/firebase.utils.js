// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth , googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) =>{
  if(!userAuth) return;
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
        createdAt,
        ...additionalInformation,
      });
    } catch(error){
      console.log(("error creating the user", error.message));
    }
   }

   return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async ()=>signOut(auth);

export default signInWithGooglePopup