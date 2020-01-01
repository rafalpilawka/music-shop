import React from 'react';
import { SpinnerContainer , SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) =>{

  console.log('aa-11' , isLoading)
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer / >
    </SpinnerOverlay>
  ): (
    <WrappedComponent {...otherProps} />
  );
}

export default WithSpinner

 
{/* CONTAINER PATTERN
CONST COLLECTIONOVERVIEWCONTAINER = COMPOSE(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)  */}
