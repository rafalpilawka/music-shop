import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {selectIsCollectionFetching, selectIsCollectionLoading} from '../../redux/shop/shop-selector'

import { fetchCollectionStart } from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOvewrviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = props => {
	//match from Route + form app.js
	const dispatch = useDispatch();
	const isLoaded = useSelector(selectIsCollectionLoading)
	const { match } = props;
	
	useEffect(() => {
		dispatch(fetchCollectionStart())
	},[fetchCollectionStart]);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={props =>
					<CollectionOvewrviewWithSpinner isLoading={!isLoaded} {...props} />}
			/>
			<Route
				path={`${match.path}/:categoryId`}
				render={props =>
					<CollectionPageWithSpinner isLoading={!isLoaded} {...props} />}
			/>
		</div>
	);
};

export default ShopPage;
