import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser
} from '../../firebse/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess,signOutFailure, signUpSuccess, signUpFailure } from './user-action';

export function* getSnapshotFrom(userAuth, additionalData) {
	try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}
export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFrom(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
	console.log(email, password);
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFrom(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* isUserAuthenticated() {
	try {
    yield console.log('hh22')
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFrom(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signOut(){
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* signUp({payload: {email, password, displayName}}){
  console.log('signup saga')
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    console.log('inside signupsaga', user)
    yield put(signUpSuccess({user, additionalData: {displayName}}))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp({payload:{user, additionalData}}){
  yield getSnapshotFrom(user, additionalData)
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart(){
  yield takeLatest(UserActionTypes.SIGNOUT_START, signOut )
}

export function* onSignUpStart(){
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp )
}
export function* onSignUpSuccess(){
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp )
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
	]);
}
