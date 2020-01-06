import React from 'react'
import {CartItemContainer, ItemDetailsContainer , ImageContainer, NameContainer} from './cart-item.styles'

const CartItem = ( {item:{imageUrl, price, name, quantity}} ) => {
    return (
        <CartItemContainer>
            <ImageContainer src={imageUrl} alt='item'/>
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <NameContainer>
                {quantity} X ${price}</NameContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem
