import ShopActionTypes from './shop-types'
import { firestore, convertCollectionsSnapshotToMap} from '../../firebse/firebase.utils'
// export const updateCollection = ( collectionsMap ) => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap
// })

export const fetchCollectionStart =() =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});
export const fetchCollectionSuccess = collectionsMap =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});
export const fetchCollectionError =errorMessage =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = ()=>{
  return dispatch =>{
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());

    collectionRef.get().then( snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionMap));
    }).catch(error=> dispatch(fetchCollectionError(error)));
  }
};