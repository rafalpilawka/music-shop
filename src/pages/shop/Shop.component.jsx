import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebse/firebase.utils';
import { updateCollection } from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOvewrviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = props => {
	//match from Route + form app.js
	const [loading, setLoading] = useState(true);
	let unsubscribeFromSnapshot = null;
	const dispatch = useDispatch();
	const { match } = props;
	
	useEffect(() => {
		const collectionRef = firestore.collection('collections');
		unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(updateCollection(collectionMap));
			setLoading(false);
		});
		return () => unsubscribeFromSnapshot() 
	}, []);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={props =>
					<CollectionOvewrviewWithSpinner isLoading={loading} {...props} />}
			/>
			<Route
				path={`${match.path}/:categoryId`}
				render={props =>
					<CollectionPageWithSpinner isLoading={loading} {...props} />}
			/>
		</div>
	);
};

export default ShopPage;
