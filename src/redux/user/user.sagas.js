import { takeLatest, put, all, call} from 'redux-saga/effects'
import UserActionTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebse/firebase.utils'
import {signInSuccess, signInFailure} from './user-action';


export function* getSnapshotFrom(userAuth){
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error))
  }
}
export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFrom(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
 };

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle )
}

export function* signInWithEmail({payload: {email,password}}){
  console.log(email, password)
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFrom(user)
  } catch (error) {
    put(signInFailure(error))
  }
}

export function* onEmailSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)

}

export function* userSagas(){
  yield all([call(onGoogleSignInStart) , call(onEmailSignInStart)]);
}