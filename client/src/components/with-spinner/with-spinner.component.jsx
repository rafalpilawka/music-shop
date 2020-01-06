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

 
const containerPattern = ()=>{
const compose =()=>()=>'void'
const connect = ()=> null
const CollectionOverview = ''
const mapStateToProps = ''
const COLLECTIONOVERVIEWCONTAINER = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionOverview);
console.log(COLLECTIONOVERVIEWCONTAINER)  
}
