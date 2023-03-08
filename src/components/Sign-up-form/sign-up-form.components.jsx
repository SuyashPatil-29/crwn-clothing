import Button from "../Button/Button-component";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../Form-input/Form-input.component";
import "./sign-up-form.styles.scss"


const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}
const SignUpForm = ()=>{

    const [formField, setFormField] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formField;

    
    const handleChange = (event)=>{
        const {name , value} = event.target;

        setFormField({...formField, [name]:value})
    }

    const resetFormFields= ()=>{
        setFormField(defaultFormField)
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("Password Do Not Match");
            return;
        }
            try{
               const {user} = await createAuthUserWithEmailAndPassword(email, password);
               await createUserDocumentFromAuth(user, {displayName})
               resetFormFields();
            }
            catch(error){
                if(error.code === "auth/email-already-in-use"){
                    alert("User Already exists with same email id")
                }
            } 
    }
    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required type="text"  onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" required type="password"  onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" required type="password"  onChange={handleChange} name="confirmPassword" value={confirmPassword}/>


                <Button  type="submit">Sign-Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;