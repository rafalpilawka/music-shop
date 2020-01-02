import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDVVgwHUvIgfxdwSonzMSLKW6oEdSmQIOo',
	authDomain: 'music-shop-used.firebaseapp.com',
	databaseURL: 'https://music-shop-used.firebaseio.com',
	projectId: 'music-shop-used',
	storageBucket: '',
	messagingSenderId: '347342065627',
	appId: '1:347342065627:web:c38c9383b0ae4e31d8a1fe',
	measurementId: 'G-E3WZ0R2BFF'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exist) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log(error);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

//SENDING DATA TO FIREBASE
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey)
	console.log(objectsToAdd)
	const batch = firestore.batch()
	objectsToAdd.forEach(obj=>{
		const newDocRef = collectionRef.doc()
		console.log(newDocRef)
		batch.set(newDocRef,obj)
	});
	return await batch.commit()	
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const tranformedCollection = collections.docs.map( doc => {
			const {title, items} = doc.data()
			return {
				routeName: encodeURI(title.toLowerCase()),
				id: doc.id,
				title,
				items
			}
		});
		return tranformedCollection.reduce((accumulator, collection)=>{
			accumulator[collection.title.toLowerCase()] = collection;
			return accumulator
		},{})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account'
});
// provider.setCustomParameters({ prompt : 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
