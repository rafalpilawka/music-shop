import React from 'react'
import './cartDropdown.styles.scss'
import CustomButton from '../customButton/customButton.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
           { cartItems.map(cartItem=><CartItem 
            key={cartItem.id} 
            item={cartItem} />)}
        </div>
        
        <CustomButton>CHECKOUT</CustomButton>
    </div>

)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown)