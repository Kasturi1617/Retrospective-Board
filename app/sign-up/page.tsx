import SignInButton from "../../Components/signInButton";
import "./page.css";

function SignUp() {
    return (<>
        <div className="main-container">
            <div className="main-title">
                <img src="challenge.png" />
                <h1 className="title-text">Retrospect</h1>
            </div>
            <h2 className="description">Collaborate with your team</h2>
            <div className="sign-in-button"> <SignInButton /> </div>
        </div></>)
}
export default SignUp;