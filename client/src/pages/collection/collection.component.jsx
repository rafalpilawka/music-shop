import React from 'react';
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles';
import CollectionItem from '../../components/collection-item/collection.item.component';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';
import { firestore } from '../../firebse/firebase.utils';

const CollectionPage = ({ match }) => {
	const collection = useSelector((state)=>selectCollection(match.params.categoryId)(state))
	const { title, items } = collection;
	//CLEAN UP SUBSCRIPTION
	React.useEffect(()=>{
		console.log('Im subscribing');
		const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot=>console.log(snapshot));
		return ()=>{
			console.log('unsubscribing');
			unsubscribeFromCollections()
		}
	},[])
	//
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map(item => <CollectionItem key={item.id} item={item} />)}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

export default CollectionPage
