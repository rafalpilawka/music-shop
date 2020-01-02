import React, { Component } from 'react';
import {connect} from 'react-redux'
import './sign-in.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';
import { signInWithGoogle, auth } from '../../firebse/firebase.utils';
import { googleSignInStart } from '../../redux/user/user-action';

class SignIN extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			});
		} catch (error) {
			console.log(error);
		}
		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const {googleSignInStart} = this.props;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with Your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						// sugested='current password'
						// autoComplete='off'
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton 
							type='button' 
							onClick={googleSignInStart} 
							isGoogleSignIn>
							{' '}SIGN IN w GOOGLE{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
};

const mapDispatchToProps = dispatch =>({
	googleSignInStart: ()=> dispatch(googleSignInStart())
})
export default connect(null, mapDispatchToProps)(SignIN)
