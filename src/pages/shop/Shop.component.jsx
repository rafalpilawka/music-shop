import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebse/firebase.utils'
import { updateCollection } from '../../redux/shop/shop-actions'

const ShopPage = ({ match }) => {
	//match from Route + form app.js
	const unsubscribeFromSnapshot =null
	const dispatch = useDispatch()

	useEffect(()=>{
		const collectionRef = firestore.collection('collections')
		collectionRef.onSnapshot(async snapshot=>{
			const collectionMap = convertCollectionsSnapshotToMap(snapshot)
			console.log(collectionMap)
			dispatch(updateCollection(collectionMap))
		})
	},[])
	
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:categoryId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
