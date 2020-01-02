import { takeEvery, call, put } from 'redux-saga/effects'
import ShopActionTypes from './shop-types';
import { firestore, convertCollectionsSnapshotToMap} from '../../firebse/firebase.utils'
import {
  fetchCollectionSuccess,
  fetchCollectionFailure
} from './shop-actions'

export function* fetchCollectionAsync(){
  yield console.log('Im fired');

  try{
    const collectionRef = firestore.collection('collections');
    // dispatch(fetchCollectionStart());
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }
  // put = dispatch in redux saga
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
    )
}