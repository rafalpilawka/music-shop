import React, { useState } from 'react';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';
import { signUpStart } from '../../redux/user/user-action'
import './signUp.styles.scss';
import { useDispatch, connect } from 'react-redux'

const SignUpComponent =({ signUpStart }) => {

	const [ userCredentials, setUserCredentials ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();
		//CHECK IF PASSWORD AND CONFIRM PASSWORD ARE EQUAL
		if (password !== confirmPassword) {
			alert(`passwords don't match`);
			return;
		}
		signUpStart({displayName, email, password});
		//ASYNC ACTION FOR CREATING USER ON DB
		// try {
			// FOR CREATING ACCOUNT WITH AUTH
			// const { user } = await auth.createUserWithEmailAndPassword(
			// 	email,
			// 	password
			// );
			//AWAIT FOR FIRESTORE FOR CREATE PROFILE WITH RECEIVED DATA FROM AUTH
			// await createUserProfileDocument(user, { displayName });
			// this.setState({
			// 	displayName: '',
			// 	email: '',
			// 	password: '',
			// 	confirmPassword: ''
			// });
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setUserCredentials({
		...userCredentials,	[name]: value
		});
	};

		// const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with email and password</span>
				<form className="sign-up-form" onSubmit={handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleChange}
						label="Confirm password"
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
}

const mapDispatchToProps = dispatch =>({
	signUpStart: (userCredentials)=>dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUpComponent);
