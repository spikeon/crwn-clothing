import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {SignInButtons, SignInContainer, SignInSubtitle, SignInTitle} from './sign-in.styles';
import {connect} from 'react-redux';
import {emailSignInStart, googleSignInStart} from '../../redux/user/user.actions';

const SignIn = ({googleSignInStart, emailSignInStart}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SignInContainer>

            <SignInTitle>I already have an account</SignInTitle>
            <SignInSubtitle>Sign in with your email and password</SignInSubtitle>

            <form
                onSubmit={event => {
                    event.preventDefault();

                    emailSignInStart(email, password);
                }}
            >

                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    required
                    handleChange={({target: {value}}) => setEmail(value)}
                    label='Email'
                />

                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    required
                    label='Password'
                    handleChange={({target: {value}}) => setPassword(value)}
                />

                <SignInButtons>
                    <CustomButton type='submit'>Sign In</CustomButton>

                    <CustomButton
                        type='button'
                        isGoogleSignIn
                        onClick={googleSignInStart}
                    >
                        Sign In With Google
                    </CustomButton>
                </SignInButtons>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);