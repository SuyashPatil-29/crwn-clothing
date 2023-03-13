import SignUpForm from "../../components/Sign-up-form/sign-up-form.components";
import SignInForm from "../../components/Sign-in-form/SignInForm.components";
import "./Authentication.styles.scss"


const Authentication = ()=>{
    return(<div className="border-container">
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
        </div>
    )
}

export default Authentication;