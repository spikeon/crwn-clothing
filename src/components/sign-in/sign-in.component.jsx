import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import {SignInButtons, SignInContainer, SignInSubtitle, SignInTitle} from './sign-in.styles';

class SignIn extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <SignInContainer>

                <SignInTitle>I already have an account</SignInTitle>
                <SignInSubtitle>Sign in with your email and password</SignInSubtitle>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        label='Password'
                        handleChange={this.handleChange}
                    />
                    <SignInButtons>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </SignInButtons>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;