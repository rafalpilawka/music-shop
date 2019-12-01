import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logoshop.svg';
import { auth } from '../../firebse/firebase.utils';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'

const Header = ({ currentUser, hidden}) => {
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
				{currentUser ? 
                    <div 
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

const mapStateToProps=createStructuredSelector({ // INSTEAD OF USING STATE AND ARROW FUNCTION WE CAN USE CSSELETOR FUNTCION WITH PASSED STATE FROM CONNECT

	//USE CREATE STRUCTURED SELECTOR
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})



export default connect(mapStateToProps, null)(Header);
