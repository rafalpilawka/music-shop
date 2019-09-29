import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';

export default class SignIN extends Component {
	constructor(props) {
        super(props)
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
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
                        label='email'
						required
					/>
				
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
                        label='password'
						required
					/>
                    <CustomButton type="submit">SIGN IN</CustomButton>
					
				</form>
              
               
			</div>
		);
	}
}
