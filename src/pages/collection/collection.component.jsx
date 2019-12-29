import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection.item.component';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';

const CollectionPage = ({ match }) => {
	const collection = useSelector((state)=>selectCollection(match.params.categoryId)(state))
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">
				{title}
			</h2>
			<div className="items">
				{items.map(item => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default CollectionPage

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.categoryId)(state)
// });

// export default connect(mapStateToProps)(CollectionPage);
