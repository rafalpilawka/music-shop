import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebse/firebase.utils';
import { useSelector } from 'react-redux'
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
// import { createStructuredSelector} from 'reselect'

const Header = () => {
	const hidden = useSelector(selectCartHidden)
	const currentUser = useSelector(selectCurrentUser)

	return (
		<div className="header">
			<Link to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser 
				? <div 
						className="option" 
						onClick={ () => auth.signOut() 
							}>SIGN OUT</div>
					: <Link 
						to="/signIn" 
						className="option">
							SIGNIN
						</Link>}
				<CartIcon />
			</div>
			{	hidden ? 
				<CartDropdown/> :  null
			}
		</div>
	);
};

export default Header

// const mapStateToProps=createStructuredSelector({ // INSTEAD OF USING STATE AND ARROW FUNCTION WE CAN USE CSSELETOR FUNTCION WITH PASSED STATE FROM CONNECT

// 	//USE CREATE STRUCTURED SELECTOR
// 	currentUser: selectCurrentUser,
// 	hidden: selectCartHidden
// })
// export default connect(mapStateToProps, null)(Header);
