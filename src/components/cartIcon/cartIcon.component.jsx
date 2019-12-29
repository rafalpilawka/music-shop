import './cartIcon.styles.scss'
import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
// import { createStructuredSelector } from 'reselect'

const CartIcon = () => {
    
        const dispatch = useDispatch()
        const itemCount = useSelector(selectCartItemsCount)
    return (
        <div className="cart-icon">
            <ShoppingIcon onClick={() => dispatch(toggleCartHidden()) } className='shopping-icon'/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

export default CartIcon


// const mapDispatchToProps = (dispatch)=>({
//     toggleCartHidden: ()=> dispatch (toggleCartHidden())
// })

// const mapStateToProps = createStructuredSelector({
//     // itemCount: cartItems.reduce((accumulatedQuanttity, cartItem)=>accumulatedQuanttity+cartItem.quantity,
//     // 0
//     // ) WITHOUT SELECTOR=> RERENDERING EVERY TIME WE CHANGE STATE
//     itemCount: selectCartItemsCount
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)