import React from 'react';
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles';
import CollectionItem from '../../components/collection-item/collection.item.component';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';

const CollectionPage = ({ match }) => {
	const collection = useSelector((state)=>selectCollection(match.params.categoryId)(state))
	const { title, items } = collection;
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

