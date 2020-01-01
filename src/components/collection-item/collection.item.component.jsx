import React from 'react'
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles';
import CustomButton from '../customButton/customButton.component'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'


const CollectionItem = ({  item }) => {
    const dispatch = useDispatch()
    const {  name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
                <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => dispatch(addItem(item))}>ADD TO CART</AddButton>
            {/* <CustomButton inverted onClick={()=>addItem(item)}>ADD TO CART</CustomButton> */}
        </CollectionItemContainer>
    )
}

export default CollectionItem

// const mapDispatchToProps = dispatch => ({
//     addItem: item=>dispatch(addItem(item))
// })

// export default connect(
//     null, 
//     mapDispatchToProps)(CollectionItem)




