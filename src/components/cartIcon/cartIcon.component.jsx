import './cartIcon.styles.scss'
import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions'


const CartIcon = ({toggleCartHidden}) => (
    
    <div className="cart-icon">
        <ShoppingIcon onClick={toggleCartHidden } className='shopping-icon'/>
        <span className="item-count"></span>
    </div>
)


const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)