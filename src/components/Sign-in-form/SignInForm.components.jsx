import signInWithGooglePopup , {createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../../components/Button/Button-component";
import FormInput from "../../components/Form-input/Form-input.component";
import { useState } from "react";
import "./sign-in-form.styles.scss"

const SignInForm =()=>{
    const signInWithGoogle = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    };

    const resetFormFields= ()=>{
        setFormField(defaultFormField)
    }

    

    
  
    const defaultFormField = {
        email: "",
        password: "",
    }


    const [ formField , setFormField ] = useState(defaultFormField)


    const {email, password } = formField;

    function changeHandler(event){
    const {value, name} = event.target;
    setFormField({...formField, [name]:value})
    }
 
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
         }
         catch(error){
            console.log(error.code);
            if(error.code==="auth/user-not-found"){
                alert("User does not exist. Please create a new account")
            }
            else if(error.code==="auth/wrong-password")
            alert("Wrong Password");
            else
            alert("Wrong email or password");
         } 
    } 

    return(
        <div className="sign-up-container">
           <h2>I already have an account</h2>
           <span>Sign in with yopur email and password</span>
           <form onSubmit={handleSubmit}>
           <FormInput label="email" required type="email" onChange={changeHandler} name="email" value={email} />
           <FormInput label="password" required type="password" onChange={changeHandler} name="password" value={password} />
           <div className="buttons-container">
           <Button type="submit">Sign In</Button>
           <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
           </div>
           </form>
        </div>
    )
}

export default SignInForm;