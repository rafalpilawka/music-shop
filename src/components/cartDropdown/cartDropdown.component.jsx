import React from 'react'
import './cartDropdown.styles.scss'
import CustomButton from '../customButton/customButton.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart-actions.js'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">

            {cartItems.length ? 
           cartItems.map(cartItem=><CartItem 
            key={cartItem.id} 
            item={cartItem} />) 
            : 
            <span className='empty-message'>CART IS EMPTY</span>}
        </div>
        
        <CustomButton onClick={()=>{history.push('./checkout');
        dispatch(toggleCartHidden())
        }}>CHECKOUT</CustomButton>
    </div>

)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
//connect automaticaly adds dispatch to props when mapDispatchToProps is absent as a second parameter
