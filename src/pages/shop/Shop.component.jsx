import React, { Component } from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => {
   //match from Route + form app.js
   console.log('aa11',match)
        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionsOverview} />
               <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        )
}

export default ShopPage
