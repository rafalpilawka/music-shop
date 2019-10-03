import './cartIcon.styles.scss'
import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    
    <div className="cart-icon">
        <ShoppingIcon onClick={toggleCartHidden } className='shopping-icon'/>
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = (state)=>({
    // itemCount: cartItems.reduce((accumulatedQuanttity, cartItem)=>accumulatedQuanttity+cartItem.quantity,
    // 0
    // ) WITHOUT SELECTOR=> RERENDERING EVERY TIME WE CHANGE STATE
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)