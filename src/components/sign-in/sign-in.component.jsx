import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {SignInButtons, SignInContainer, SignInSubtitle, SignInTitle} from './sign-in.styles';
import {connect} from 'react-redux';
import {emailSignInStart, googleSignInStart} from '../../redux/user/user.actions';

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
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    render() {
        const {googleSignInStart} = this.props;
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);