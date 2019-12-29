import React from 'react';
import './collections.overview.styles.scss'
import { useSelector } from 'react-redux'
import PreviewCollection from '../preview-collection/preview-collection.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop-selector'

const CollectionsOverview = () =>{
  const collections = useSelector(selectCollectionsForPreview)
  return(
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview