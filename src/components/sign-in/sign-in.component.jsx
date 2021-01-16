import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: "", password: ""});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="sign-in">

                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        label="Password"
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;