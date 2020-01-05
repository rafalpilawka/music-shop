import  UserActionTypes  from './user.types'

export const googleSignInStart = () =>({
    type: UserActionTypes.GOOGLE_SIGNIN_START
});
export const signInSuccess = user => ({
    type: UserActionTypes.SIGNIN_SUCCESS,
    payload: user
});
export const signInFailure = error=>({
    type: UserActionTypes.SIGNIN_FAILURE,
    payload: error
});
export const signOutStart = () => ({
    type: UserActionTypes.SIGNOUT_START,
});
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGNOUT_SUCCESS,
});
export const signOutFailure = error=>({
    type: UserActionTypes.SIGNOUT_FAILURE,
    payload: error
});
export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});
export const signUpSuccess = ({ user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload:{ user, additionalData }
});
export const signUpFailure = error=>({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});


