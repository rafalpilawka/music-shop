import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';
import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/user-action';

const SignIN = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: ''
	});
	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with Your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleChange}
					label="email"
					// sugested='current password'
					// autoComplete='off'
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">SIGN IN</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn>
						{' '}SIGN IN w GOOGLE{' '}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIN);
