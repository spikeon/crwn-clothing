import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpContainer, SignUpSubtitle, SignUpTitle} from './sign-up.styles';
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

const SignUp = ({signUpStart}) => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <SignUpSubtitle>Sign up with your email and password</SignUpSubtitle>

            <form
                className='sign-up-form'
                onSubmit={(event) => {
                    event.preventDefault();

                    if (password !== confirmPassword) {
                        alert('Passwords don\'t match');
                        return;
                    }

                    signUpStart(displayName, email, password);
                }}
            >
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={({target: {value}}) => setDisplayName(value)}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={({target: {value}}) => setEmail(value)}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={({target: {value}}) => setConfirmPassword(value)}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({displayName, email, password}))
});

export default connect(null, mapDispatchToProps)(SignUp);