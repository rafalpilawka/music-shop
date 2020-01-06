import React from 'react';
import './cartDropdown.styles.scss';
import CustomButton from '../customButton/customButton.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-actions.js';

const CartDropdown = ({ history }) => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length
					? cartItems.map(cartItem =>
							<CartItem key={cartItem.id} item={cartItem} />
						)
					: <span className="empty-message">CART IS EMPTY</span>}
			</div>
			<CustomButton
				onClick={() => {
					history.push('./checkout');
					dispatch(toggleCartHidden());
				}}>
				CHECKOUT
			</CustomButton>
		</div>
	);
};

export default withRouter(CartDropdown);
//connect automaticaly adds dispatch to props when mapDispatchToProps is absent as a second parameter
