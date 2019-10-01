import  './signInSignUp.styles.scss'
import React from 'react'
import SignIN from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/signUp/signUp.component'

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIN></SignIN>
            <SignUp></SignUp>
        </div>
    )
}

export default SignInAndSignUp